﻿
angular.module('app.controllers').controller('ProfolioController', function ($scope, $location, $window, $http, configurationService, $state, $rootScope, localStorageService) {
    $scope.PorfolioList = [];
    $scope.PortfolioDetail = [];
    $scope.TechnologyList = [];
    $scope.TechnologyId = 0;
    debugger;
    if ($rootScope.TechnologyId != undefined && $rootScope.TechnologyId != "" && $rootScope.TechnologyId != null) {
        $scope.TechnologyId = $rootScope.TechnologyId;
    }
    else {
        $scope.TechnologyId = localStorageService.get('TechnologyId');
    }

    $scope.GetPortfolioListForFront = function (technologyID) {
        localStorageService.set('TechnologyId', technologyID);
        var getPorfolioList = $http.get(configurationService.basePath + 'api/PortfolioApi/GetPortfolioListForFront?technologyId=' + technologyID);
        getPorfolioList.success(function (data) {
            $scope.PorfolioList = [];
            $scope.PorfolioList = data;
        });
        getPorfolioList.error(function () { });
    }

    $scope.GetPortfolioListForFront($scope.TechnologyId);


    GetAllTechnologies()
    function GetAllTechnologies() {
        var alltechnologylist = $http.get(configurationService.basePath + 'api/PortfolioApi/GetAllTechnologies');
        alltechnologylist.success(function (data) {
            $scope.TechnologyList = data;
        });
        alltechnologylist.error(function () { });
    }

    $scope.RedirectToProtfolioDetail = function (TitleSeoUrl) {
        TitleSeoUrl = TitleSeoUrl.trim();
        debugger;
        $state.go('portfolio-detail', { title: TitleSeoUrl });

    }

});