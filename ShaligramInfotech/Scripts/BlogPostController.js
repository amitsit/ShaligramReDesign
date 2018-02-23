angular.module('app.controllers').controller('BlogPostController', function ($scope, $sce, $location, $window, $http, configurationService, $state, $stateParams, $rootScope, localStorageService, $timeout) {
    $scope.$root.title = 'Shaligram Infotech Blog | Company Portal Software Development | Company Portal Software Development Company USA';
    $scope.$root.metakeyword = 'Software Development  Life cycle, Software Development Models,  Software Development Services, Software Development Company, Software Development Company USA, Software Development Company UK';
    $scope.$root.metadescription = 'Shaligram Infotech present Software Development  Life cycle for business solutions. Our software development models included business intelligence software, retail erp software and healthcare software . We offer software development services in India,USA,UK and Australia.';

    $scope.BlogPostList = [];
    $scope.RecentBlogPostList = [];
    $scope.CategoryList = [];
    $scope.limit = 5;

    $scope.blogCategory = $stateParams.blogCategory;

    $scope.GetBlogPost = function (categoryId, pagesize) {
        var blogPostList = JSON.parse(localStorage.getItem("BlogPostList"));
        if (blogPostList != null) {
            $scope.BlogPostList = blogPostList;

            if (categoryId != null && categoryId != undefined && categoryId != "") {
                $scope.BlogPostList = $scope.BlogPostList.filter(function (d) {
                    return d.CategoryId === parseInt(categoryId)
                });
            }

            $rootScope.layout.loading = false;
        }
        else
        {
            $rootScope.layout.loading = true;

            if (categoryId == undefined) {
                categoryId = null
            }

            if (pagesize == undefined) {
                pagesize = $scope.limit;
            }

            var getBlogPostList = $http.get(configurationService.basePath + 'api/BlogPostApi/GetAllBlogPostByCategory?CategoryId=' + categoryId + '&pagesize=' + pagesize);
            getBlogPostList.success(function (data) {
                $scope.BlogPostList = [];
                $scope.BlogPostList = data;

                if (categoryId == null || categoryId == undefined) {
                    localStorage.setItem("BlogPostList", JSON.stringify($scope.BlogPostList));
                }

                $timeout(function () {
                    $rootScope.layout.loading = false;
                }, 1500);
            });
            getBlogPostList.error(function () {
                $rootScope.layout.loading = false;
            });
        }

        localStorageService.set('BlogPostCategoryId', categoryId);
        $scope.CategoryId = categoryId;
        $rootScope.CategoryId = categoryId;
    }

    $scope.toTrustedHTML = function (html) {
        return $sce.trustAsHtml(html);
    }

    $scope.loadMore = function () {
        $scope.limit = $scope.limit + 5;
        localStorage.setItem("BlogPostList", null);
        $scope.GetBlogPost($scope.blogCategory, $scope.limit)
    }

    function GetAllCategories() {
        var categoryList = JSON.parse(localStorage.getItem("BlogPostCategories"));

        if (categoryList != null) {
            $scope.CategoryList = categoryList;
            $rootScope.layout.loading = false;
        }
        else {
            var reponse = $http.get(configurationService.basePath + 'api/BlogPostApi/GetAllCategory');
            reponse.success(function (data) {
                $scope.CategoryList = data;
                localStorage.setItem("BlogPostCategories", JSON.stringify($scope.CategoryList));
            });
            reponse.error(function () {
                $rootScope.layout.loading = false;
            });
        }
    }

    function GetRecentBlogPost() {
        var recentblogpostList = JSON.parse(localStorage.getItem("RecentBlogPostList"));

        if (recentblogpostList != null) {
            $scope.RecentBlogPostList = recentblogpostList;
            $rootScope.layout.loading = false;
        }
        else {
            var reponse = $http.get(configurationService.basePath + 'api/BlogPostApi/GetRecentBlogPost');
            reponse.success(function (data) {
                $scope.RecentBlogPostList = data;
                localStorage.setItem("RecentBlogPostList", JSON.stringify($scope.RecentBlogPostList));
            });
            reponse.error(function () {
                $rootScope.layout.loading = false;
            });
        }
    }

    GetAllCategories();
    GetRecentBlogPost();
    $scope.GetBlogPost($scope.blogCategory, $scope.limit);

    $scope.RedirectToBlogDetail = function (PostURL) {
        PostURL = PostURL.trim();
        if (PostURL != "" && PostURL != null) {
            $scope.$root.blogtitle = PostURL;
        }

        $state.go('blog-detail', { title: PostURL });
    }
});