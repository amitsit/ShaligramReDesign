
angular.module('app.controllers').controller('PortfolioController', function ($scope, $location, $window, $http, configurationService, $state, $stateParams, $rootScope, localStorageService, $timeout) {
    if (!$scope.$root.needToShowTitle == true) {
        $scope.$root.title = 'Shaligram Infotech Portfolio | Company Portal Software Development | Company Portal Software Development Company USA';
    }

    $scope.$root.metakeyword = '';
    $scope.$root.metadescription = '';


    $scope.$root.needToShowTitle = false;
    
    $scope.PorfolioList = [];
    $scope.PortfolioDetail = [];
    $scope.TechnologyList = [];
    $scope.TechnologyId = 0;
    $rootScope.layout.loading = true;

    $scope.isRoot = $stateParams.isRoot;

    if (!$scope.isRoot) {
        if ($rootScope.TechnologyId != undefined && $rootScope.TechnologyId != "" && $rootScope.TechnologyId != null) {
            $scope.TechnologyId = $rootScope.TechnologyId;
        }
        else {
            $scope.TechnologyId = localStorageService.get('TechnologyId');
            $rootScope.TechnologyId = $scope.TechnologyId;
        }
    }
    else
    {
        $scope.TechnologyId = 0;
    }
    $scope.GetPortfolioListForFront = function (technologyID) {
        localStorageService.set('TechnologyId', technologyID);
        $scope.TechnologyId = technologyID;
        $rootScope.TechnologyId = technologyID;

        $rootScope.layout.loading = true;

        if (technologyID == null || technologyID == undefined) {
            technologyID = 0;
        }

        var getPorfolioList = $http.get(configurationService.basePath + 'api/PortfolioApi/GetPortfolioListForFront?technologyId=' + technologyID);
        getPorfolioList.success(function (data) {
            $scope.PorfolioList = [];
            $scope.PorfolioList = data;

            $timeout(function () {
                $rootScope.layout.loading = false;
            }, 2000);

        });
        getPorfolioList.error(function () {
            $rootScope.layout.loading = false;
        });
    }

    $scope.GetPortfolioListForFront($scope.TechnologyId);

    GetAllTechnologies()
    function GetAllTechnologies() {
        $rootScope.layout.loading = true;
        var alltechnologylist = $http.get(configurationService.basePath + 'api/PortfolioApi/GetAllTechnologies');
        alltechnologylist.success(function (data) {
            $scope.TechnologyList = data;
        });
        alltechnologylist.error(function () {
            $rootScope.layout.loading = false;
        });
    }

    $scope.RedirectToProtfolioDetail = function (TitleSeoUrl, SEOTitleTag) {
        TitleSeoUrl = TitleSeoUrl.trim();

        if (SEOTitleTag != "" && SEOTitleTag != null) {
            $scope.$root.title = SEOTitleTag;
        }

        $state.go('portfolio-detail', { title: TitleSeoUrl });
    }

});