angular.module('app.controllers').controller('PortfolioController', function ($scope, $location, $window, $http, configurationService, $state, $stateParams, $rootScope, localStorageService, $timeout) {
    if (!$scope.$root.needToShowTitle == true) {
        $scope.$root.title = 'Shaligram Infotech Portfolio | Company Portal Software Development | Company Portal Software Development Company USA';
    }

    $scope.$root.metakeyword = '';
    $scope.$root.metadescription = '';

    if ($location.$$url.indexOf('portfolio') != -1) {
        $scope.$root.needToShowTitle = false;
    }

    $scope.PorfolioList = [];
    $scope.TechnologyList = [];

    //$scope.PortfolioDetail = [];

    $scope.TechnologyId = 0;
    //$rootScope.layout.loading = true;

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
    else {
        $scope.TechnologyId = 0;
    }

    $scope.GetPortfolioListForFront = function (technologyID) {
        var portfolioList = JSON.parse(localStorage.getItem("PortfolioList"));
        if (portfolioList != null) {
            $scope.PorfolioList = portfolioList;

            if (technologyID != 0) {
                $scope.PorfolioList = $scope.PorfolioList.filter(function (d) {
                    return d.TechnologyId === technologyID
                });
            }

            $rootScope.layout.loading = false;
        }
        else {
            if ($scope.$root.needToShowTitle == true || $location.$$url.indexOf('portfolio') != -1) {
                $rootScope.layout.loading = true;
            }
            else {
                $rootScope.layout.loading = false;
            }

            if (technologyID == null || technologyID == undefined) {
                technologyID = 0;
            }

            var getPorfolioList = $http.get(configurationService.basePath + 'api/PortfolioApi/GetPortfolioListForFront?technologyId=' + technologyID);
            getPorfolioList.success(function (data) {
                $scope.PorfolioList = [];
                $scope.PorfolioList = data;

                if (technologyID == 0) {
                    localStorage.setItem("PortfolioList", JSON.stringify($scope.PorfolioList));
                }

                $timeout(function () {
                    $rootScope.layout.loading = false;
                }, 1500);
            });
            getPorfolioList.error(function () {
                $rootScope.layout.loading = false;
            });
        }

        localStorageService.set('TechnologyId', technologyID);
        $scope.TechnologyId = technologyID;
        $rootScope.TechnologyId = technologyID;
    }

    function GetAllTechnologies() {
        var technologyList = JSON.parse(localStorage.getItem("TechnologyList"));

        if (technologyList != null) {
            $scope.TechnologyList = technologyList;
            $rootScope.layout.loading = false;
        }
        else {
            if ($scope.$root.needToShowTitle == true || $location.$$url.indexOf('portfolio') != -1) {
                $rootScope.layout.loading = true;
            }
            else {
                $rootScope.layout.loading = false;
            }

            var alltechnologylist = $http.get(configurationService.basePath + 'api/PortfolioApi/GetAllTechnologies');
            alltechnologylist.success(function (data) {
                $scope.TechnologyList = data;
                localStorage.setItem("TechnologyList", JSON.stringify($scope.TechnologyList));
            });
            alltechnologylist.error(function () {
                $rootScope.layout.loading = false;
            });
        }
    }

    GetAllTechnologies();
    $scope.GetPortfolioListForFront($scope.TechnologyId);

    $scope.RedirectToProtfolioDetail = function (TitleSeoUrl, SEOTitleTag) {
        TitleSeoUrl = TitleSeoUrl.trim();

        if (SEOTitleTag != "" && SEOTitleTag != null) {
            $scope.$root.title = SEOTitleTag;
        }

        $state.go('portfolio-detail', { title: TitleSeoUrl });
    }

    $scope.savePortfolioinClientMachine = function () {

        localStorage.setItem("PortfolioList", null);
        localStorage.setItem("TechnologyList", null);

        var getPorfolioList = $http.get(configurationService.basePath + 'api/PortfolioApi/GetPortfolioListForFront?technologyId=0');
        getPorfolioList.success(function (data) {
            $scope.PorfolioList = [];
            $scope.PorfolioList = data;
            localStorage.setItem("PortfolioList", JSON.stringify($scope.PorfolioList));
        });
        getPorfolioList.error(function () {
        });
    }

    //$scope.sendHtmlToServer = function () {
    //    $timeout(function () {
    //        if ($scope.PorfolioList.length > 0) {
    //            $http({
    //                method: 'POST',
    //                url: configurationService.basePath + 'api/PortfolioApi/saveHtmlFile',
    //                headers: { 'Content-Type': undefined },
    //                transformRequest: function (data) {
    //                    var formData = new FormData();
    //                    formData.append("filename", $state.current.name + '-portfolio');
    //                    formData.append("htmldata", angular.element($('#particularportList'))[0].innerHTML);
    //                    return formData;
    //                },
    //                data: {

    //                }
    //            })
    //            .success(function (data, status, headers, config) {

    //            })
    //            .error(function (data, status, headers, config) {

    //            })
    //        }
    //    }, 2500);
    //}


}).filter('unique', function () {
    return function (collection, keyname) {
        var output = [],
            keys = [];

        angular.forEach(collection, function (item) {
            var key = item[keyname];
            if (keys.indexOf(key) === -1) {
                keys.push(key);
                output.push(item);
            }
        });
        return output;
    };
});