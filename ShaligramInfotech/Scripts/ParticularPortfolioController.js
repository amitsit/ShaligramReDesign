
angular.module('app.controllers').controller('ParticularPortfolioController', function ($scope, $location, $window, $http, configurationService, $stateParams, $timeout) {

    $scope.slideIndex = 1;
    $scope.Title = $stateParams.title;
    GetParticularPortfolioDetail($scope.Title);
    function GetParticularPortfolioDetail(title) {
        if (title != null) {
            var particularPortfolioDetails = $http.get(configurationService.basePath + 'api/PortfolioApi/GetParticularPortfolioDetail?Title=' + title);
            particularPortfolioDetails.success(function (data) {
                $scope.PortfolioDetail = data;
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
        debugger;
        var i;
        var x = $(".mySlides");
        var dots = $(".demo");
        if (n > x.length) { $scope.slideIndex = 1 }
        if (n < 1) { $scope.slideIndex = x.length }
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" w3-white", " ");
        }
        x[$scope.slideIndex - 1].style.display = "block";
        //dots[slideIndex - 1].className += " w3-white";
    }


});