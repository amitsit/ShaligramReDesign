
angular.module('app.controllers').controller('ParticularPortfolioController', function ($scope, $location, $window, $http, configurationService, $stateParams, $timeout, $rootScope) {
    $scope.slideIndex = 1;
    $scope.Title = $stateParams.title;

    $scope.$root.needToShowTitle = true;

    $rootScope.layout.loading = true;

    GetParticularPortfolioDetail($scope.Title);

    function GetParticularPortfolioDetail(title) {
        if (title != null) {
            var particularPortfolioDetails = $http.get(configurationService.basePath + 'api/PortfolioApi/GetParticularPortfolioDetail?Title=' + title);
            particularPortfolioDetails.success(function (data) {
                $scope.PortfolioDetail = data;
                $rootScope.TechnologyId = data.TechnologyId;

                if (data.SEOTitleTag != null) {
                    $scope.$root.title = data.SEOTitleTag;
                }

                if (data.MetaKeyword != null) {
                    $scope.$root.metakeyword = data.MetaKeyword;
                }

                if (data.MetaDescription != null) {
                    $scope.$root.metadescription = data.MetaDescription;
                }
                
                if (data.MetaTag != null) {
                    $scope.$root.MetaTag = data.MetaTag;
                }

                $timeout(function () {
                    $scope.plusDivs(-1);
                    $scope.showDivs($scope.slideIndex);
                }, 300);
            });
            particularPortfolioDetails.error(function () { });
        }
    }

    $scope.plusDivs = function (n) {

        $scope.showDivs($scope.slideIndex += n);
    }

    $scope.currentDiv = function (n) {
        $scope.showDivs($scope.slideIndex = n);
    }

    $scope.showDivs = function (n) {
        var i;
        var x = $(".mySlides");
        var dots = $(".demo");
        if (n > x.length) { $scope.slideIndex = 1 }
        if (n < 1) { $scope.slideIndex = x.length }

        if (x.length > 0) {
            for (i = 0; i < x.length; i++) {
                x[i].style.display = "none";
            }
            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" w3-white", " ");
            }

            x[$scope.slideIndex - 1].style.display = "block";
        }
    }


});