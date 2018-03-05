
angular.module('app.controllers')
.controller('ContactUsController',
    function ($scope, $location, $window, $http, configurationService, $state, $rootScope, localStorageService, vcRecaptchaService) {
        $scope.$root.title = 'Shaligram Infotech Contact Us | Ecommerce Portal Development Company USA | Ecommerce Portal Development Company UK';
        $scope.$root.metakeyword = 'Ecommerce Portal Development  Company, Ecommerce Portal Development Company USA, Ecommerce Portal Development Company UK';
        $scope.$root.metadescription = 'Shaligram Infotech is leading Ecommerce Portal Development Company USA . We are offering services like Ecommerce shopping cart development, custom erp development, retail erp software development, data migration services etc';

        $scope.widgetId;
        $scope.ContactUs = new Object();
        $scope.files = [];

        $scope.$on("seletedFile", function (event, args) {
            $scope.$apply(function () {
                $scope.files.push(args.file);
            });
        });

        $scope.onWidgetCreate = function (_widgetId) {
            $scope.widgetId = _widgetId;
        };

        $scope.resetForm = function () {
            $scope.ContactUs.Name = null;
            $scope.ContactUs.PhoneNumber = null;
            $scope.ContactUs.EmailAddress = null;
            $scope.ContactUs.City = null;
            $scope.ContactUs.Company = null;
            $scope.ContactUs.Message = null;
            angular.element("input[type='file']").val(null);
            vcRecaptchaService.reload($scope.widgetId);
        }

        $scope.SaveContactUsDetails = function (form) {
            $scope.googleRecaptchaValidationMessage = false;
            var googleResponse = $('textarea[name="g-recaptcha-response"]').val();
            if (form.$valid && googleResponse != "") {
                $http.get(configurationService.basePath + 'api/CommonApi/Validate?encodedResponse=' + googleResponse)
                .success(function (data, status, headers, config) {
                    if (data == true) {
                        $scope.ContactUs.ContactUsId = 0;

                        $scope.contactUsData = {
                            ContactUsId: $scope.ContactUs.ContactUsId,
                            Name: $scope.ContactUs.Name,
                            PhoneNumber: $scope.ContactUs.PhoneNumber,
                            EmailAddress: $scope.ContactUs.EmailAddress,
                            City: $scope.ContactUs.City,
                            Company: $scope.ContactUs.Company,
                            Message: $scope.ContactUs.Message
                        };

                        $http({
                            method: 'POST',
                            url: configurationService.basePath + 'api/CommonApi/SaveContactInformation',
                            headers: { 'Content-Type': undefined },

                            transformRequest: function (data) {
                                var formData = new FormData();
                                formData.append("ContactUsId", data.model.ContactUsId);
                                formData.append("Name", data.model.Name);
                                formData.append("PhoneNumber", data.model.PhoneNumber == undefined ? '' : data.model.PhoneNumber);
                                formData.append("EmailAddress", data.model.EmailAddress);
                                formData.append("City", data.model.City == undefined ? '' : data.model.City);
                                formData.append("Company", data.model.Company == undefined ? '' : data.model.Company);
                                formData.append("Message", data.model.Message);

                                for (var i = 0; i < data.files.length; i++) {
                                    formData.append("file" + i, data.files[i]);
                                }

                                $('.loader').show();
                                return formData;

                            },
                            data: { model: $scope.contactUsData, files: $scope.files }
                        }).success(function (data, status, headers, config) {
                            $('.loader').hide();
                            $("#myModal").modal('show');
                            vcRecaptchaService.reload($scope.widgetId);
                        }).
                            error(function (data, status, headers, config) {
                                vcRecaptchaService.reload($scope.widgetId);
                                $('.loader').hide();
                            });
                    }
                    else {
                        vcRecaptchaService.reload($scope.widgetId);
                        alert("Please fill captcha");
                    }
                })
                .error(function (data, status, header, config) {
                    vcRecaptchaService.reload($scope.widgetId);
                    alert("Something went wrong. Please try again!");
                });
            }
            else if (googleResponse == "") {
                ContactUsForm.$valid = false;
                vcRecaptchaService.reload($scope.widgetId);
                $scope.googleRecaptchaValidationMessage = true;
            }
        }

    }
);