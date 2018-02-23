angular.module('app.controllers').controller('ParticularBlogPostController', function ($scope, $sce, $location, $window, $http, configurationService, $state, $stateParams, $rootScope, localStorageService, $timeout) {
    $scope.BlogPostList = [];
    $scope.RecentBlogPostList = [];
    $scope.CategoryList = [];

    $scope.title = $stateParams.title;

    $scope.GetBlogPost = function (title) {
        var blogPostList = JSON.parse(localStorage.getItem("BlogPostList"));
        if (blogPostList != null) {
            $scope.BlogPostList = blogPostList;

            if (title != null && title != undefined && title != "") {
                $scope.BlogPostList = $scope.BlogPostList.filter(function (d) {
                    return d.PostURL === title
                });
            }

            $rootScope.layout.loading = false;
        }
        else {
            $rootScope.layout.loading = true;

            if (title == undefined) {
                title = null
            }
            var getBlogPostList = $http.get(configurationService.basePath + 'api/BlogPostApi/GetAllBlogPostByCategory?CategoryId=null');
            getBlogPostList.success(function (data) {
                $scope.BlogPostList = [];
                $scope.BlogPostList = data;

                localStorage.setItem("BlogPostList", JSON.stringify($scope.BlogPostList));

                $scope.BlogPostList = $scope.BlogPostList.filter(function (d) {
                    return d.PostURL === title
                });



                $timeout(function () {
                    $rootScope.layout.loading = false;
                }, 1500);
            });
            getBlogPostList.error(function () {
                $rootScope.layout.loading = false;
            });
        }
        if ($scope.BlogPostList.length > 0) {
            $scope.$root.title = $scope.BlogPostList[0].PostTitle;
            $scope.$root.metakeyword = $scope.BlogPostList[0].MetaKeywords;
            $scope.$root.metadescription = $scope.BlogPostList[0].MetaDesc;
        }
        

    }

    $scope.toTrustedHTML = function (html) {
        return $sce.trustAsHtml(html);
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
    $scope.GetBlogPost($scope.title);

    $scope.RedirectToBlogDetail = function (PostURL) {
        PostURL = PostURL.trim();

        if (PostURL != "" && PostURL != null) {
            $scope.$root.blogtitle = PostURL;
        }

        $state.go('blog-detail', { title: PostURL });
    }
});