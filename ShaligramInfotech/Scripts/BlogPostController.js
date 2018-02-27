angular.module('app.controllers').controller('BlogPostController', function ($scope, $sce, $location, $window, $http, configurationService, $state, $stateParams, $rootScope, localStorageService, $timeout, $filter) {

    $scope.BlogPostList = [];
    $scope.RecentBlogPostList = [];
    $scope.CategoryList = [];
    $scope.limit = 5;

    $scope.parameter = $stateParams.parameter;
    $scope.IsDetailPage = 0;

    if ($scope.parameter != "" && $scope.parameter != undefined) {
        var title = '';
        var title = parseInt($scope.parameter) || '';
        if (!angular.isNumber(title)) {
            // details 
            $scope.IsDetailPage = 1;
        }
        else {
            // list page
            $scope.IsDetailPage = 0;
            $scope.IsCategoryPage = 1;
            $scope.$root.title = 'Shaligram Infotech Blog | Company Portal Software Development | Company Portal Software Development Company USA';
            $scope.$root.metakeyword = 'Software Development  Life cycle, Software Development Models,  Software Development Services, Software Development Company, Software Development Company USA, Software Development Company UK';
            $scope.$root.metadescription = 'Shaligram Infotech present Software Development  Life cycle for business solutions. Our software development models included business intelligence software, retail erp software and healthcare software . We offer software development services in India,USA,UK and Australia.';
        }
    }
    else {
        // list page
        $scope.IsDetailPage = 0;
        $scope.$root.title = 'Shaligram Infotech Blog | Company Portal Software Development | Company Portal Software Development Company USA';
        $scope.$root.metakeyword = 'Software Development  Life cycle, Software Development Models,  Software Development Services, Software Development Company, Software Development Company USA, Software Development Company UK';
        $scope.$root.metadescription = 'Shaligram Infotech present Software Development  Life cycle for business solutions. Our software development models included business intelligence software, retail erp software and healthcare software . We offer software development services in India,USA,UK and Australia.';
    }


    $scope.GetBlogPostByCategory = function (categoryId, pagesize) {
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
        else {
            $rootScope.layout.loading = true;

            if (categoryId == undefined || categoryId == "") {
                categoryId = null;
            }

            if (pagesize == undefined) {
                pagesize = $scope.limit;
            }

            var getBlogPostList = $http.get(configurationService.basePath + 'api/BlogPostApi/GetAllBlogPostByCategory?CategoryId=' + categoryId + '&pagesize=' + pagesize);
            getBlogPostList.success(function (data) {
                $scope.BlogPostList = [];
                $scope.BlogPostList = data;

                $timeout(function () {
                    $rootScope.layout.loading = false;
                }, 1500);
            });
            getBlogPostList.error(function () {
                $rootScope.layout.loading = false;
            });
        }
    }

    $scope.GetBlogPostByTitle = function (title) {
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
                title = ''
            }

            var getBlogPostList = $http.get(configurationService.basePath + 'api/BlogPostApi/GetAllBlogPostByTitle?title=' + title);
            getBlogPostList.success(function (data) {
                $scope.BlogPostList = [];
                $scope.BlogPostList = data;

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

    $scope.GetAllBlogPost = function () {
        //localStorage.setItem("RecentBlogPostList", null);
        //localStorage.setItem("BlogPostList", null);
        //localStorage.setItem("BlogPostCategoryId", null);
        //localStorage.setItem("BlogPostCategories", null);


        var getBlogPostList = $http.get(configurationService.basePath + 'api/BlogPostApi/GetAllBlogPostByCategory?CategoryId=null&pagesize=null');
        getBlogPostList.success(function (data) {
            localStorage.setItem("BlogPostList", JSON.stringify(data));
        });
        getBlogPostList.error(function () {
        });
    }

    $scope.toTrustedHTML = function (html) {
        return $sce.trustAsHtml(html);
    }

    $scope.loadMore = function () {
        $scope.limit = $scope.limit + 5;
        $scope.GetBlogPostByCategory($scope.parameter, $scope.limit)
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

    if ($scope.IsDetailPage == 0) {
        $scope.GetBlogPostByCategory($scope.parameter, $scope.limit);
    }
    else {
        $scope.GetBlogPostByTitle($scope.parameter);
    }

    $scope.RedirectToBlogDetail = function (PostURL) {
        PostURL = PostURL.trim();
        if (PostURL != "" && PostURL != null) {
            $scope.$root.blogtitle = PostURL;
        }

        $state.go('blog', { parameter: PostURL });
    }
});