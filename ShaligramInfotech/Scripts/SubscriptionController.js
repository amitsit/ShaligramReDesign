
angular.module('app.controllers')
.controller('SubscriptionController',
    function ($scope, $location, $window, $http, configurationService, $state, $rootScope, localStorageService, vcRecaptchaService) {
        $scope.$root.title = 'Shaligram Infotech Subscription for Updates | Ecommerce Portal Development Company USA | Ecommerce Portal Development Company UK';
        $scope.$root.metakeyword = 'Ecommerce Portal Development  Company, Ecommerce Portal Development Company USA, Ecommerce Portal Development Company UK';
        $scope.$root.metadescription = 'Shaligram Infotech is leading Ecommerce Portal Development Company USA . We are offering services like Ecommerce shopping cart development, custom erp development, retail erp software development, data migration services etc';

        $scope.widgetId;
        $scope.Subscription = new Object();

        $scope.resetForm = function () {
            $scope.Subscription.Name = null;
            $scope.Subscription.EmailAddress = null;
        }

        $scope.SaveSubscriptionDetails = function (form) {
            if (form.$valid) {

                $scope.Subscription.SubscriptionId = 0;

                $scope.SubscriptionData = {
                    SubscriptionId: $scope.Subscription.SubscriptionId,
                    Name: $scope.Subscription.Name,
                    EmailAddress: $scope.Subscription.EmailAddress
                };

                $http.post(
                configurationService.basePath + 'api/CommonApi/SaveSubscriptionInformation',
                JSON.stringify($scope.SubscriptionData),
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                .success(function (data, status, headers, config) {
                    $('.loader').hide();
                    $("#myModal").modal('show');
                    vcRecaptchaService.reload($scope.widgetId);
                }).
                error(function (data, status, headers, config) {
                    vcRecaptchaService.reload($scope.widgetId);
                    $('.loader').hide();
                });
            }
        }
    }
);