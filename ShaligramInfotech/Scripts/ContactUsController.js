
angular.module('app.controllers').controller('ContactUsController', function ($scope, $location, $window, $http, configurationService, $state, $rootScope, localStorageService) {
    $scope.ContactUs = new Object();

    $scope.SaveContactUsDetails = function (form) {
        if (form.$valid) {
            alert('valid');
            $scope.ContactUs.ContactUsId = 0;
            debugger;
            var objContactUsEntity=$scope.ContactUs;
            var saveContactUs = $http.post(configurationService.basePath + 'api/CommonApi/SaveContactInformation', objContactUsEntity);
            saveContactUs.success(function (data) {
                //$scope.PorfolioList = [];
                //$scope.PorfolioList = data;
            });
            saveContactUs.error(function () { });
        }
    }

});