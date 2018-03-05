angular.module('app.controllers')
    .controller('RequestQuoteController',
        function ($scope, $location, $window, $http, configurationService, $state, $rootScope, localStorageService, vcRecaptchaService) {
            $scope.$root.title = 'Shaligram Infotech Contact Us | Ecommerce Portal Development Company USA | Ecommerce Portal Development Company UK';
            $scope.$root.metakeyword = 'Ecommerce Portal Development  Company, Ecommerce Portal Development Company USA, Ecommerce Portal Development Company UK';
            $scope.$root.metadescription = 'Shaligram Infotech is leading Ecommerce Portal Development Company USA . We are offering services like Ecommerce shopping cart development, custom erp development, retail erp software development, data migration services etc';
            var widgetId;
            $scope.RequestQuote = new Object();

            $scope.files = [];

            $scope.$on("seletedFile", function (event, args) {
                $scope.$apply(function () {
                    $scope.files.push(args.file);
                });
            });

            $scope.resetForm = function () {
                $scope.RequestQuote.FullName = null;
                $scope.RequestQuote.PhoneNumber = null;
                $scope.RequestQuote.EmailAddress = null;
                $scope.RequestQuote.City = null;
                $scope.RequestQuote.Company = null;
                $scope.RequestQuote.ProjectTypeId = null;
                $scope.RequestQuote.BudgetId = null;
                $scope.RequestQuote.ProjectDescription = null;
                angular.element("input[type='file']").val(null);
                vcRecaptchaService.reload(widgetId);
            }

            $scope.SaveRequestQuoteDetails = function (form) {
                $scope.googleRecaptchaValidationMessage = false;
                var googleResponse = $('textarea[name="g-recaptcha-response"]').val();

                if (form.$valid && googleResponse != "") {
                    $http.get(configurationService.basePath + 'api/CommonApi/Validate?encodedResponse=' + googleResponse)
                    .success(function (data, status, headers, config) {
                        if (data == true) {
                            $scope.RequestQuote.RequestQuoteId = 0;

                            $scope.requestQuoteData = {
                                RequestQuoteId: $scope.RequestQuote.RequestQuoteId,
                                FullName: $scope.RequestQuote.FullName,
                                PhoneNumber: $scope.RequestQuote.PhoneNumber,
                                EmailAddress: $scope.RequestQuote.EmailAddress,
                                City: $scope.RequestQuote.City,
                                Company: $scope.RequestQuote.Company,
                                ProjectTypeId: $scope.RequestQuote.ProjectTypeId,
                                BudgetId: $scope.RequestQuote.BudgetId,
                                ProjectDescription: $scope.RequestQuote.ProjectDescription
                            };

                            $http({
                                method: 'POST',
                                url: configurationService.basePath + 'api/CommonApi/SaveRequestQuote',
                                headers: { 'Content-Type': undefined },

                                transformRequest: function (data) {
                                    var formData = new FormData();
                                    formData.append("RequestQuoteId", data.model.RequestQuoteId);
                                    formData.append("FullName", data.model.FullName);
                                    formData.append("PhoneNumber", data.model.PhoneNumber == undefined ? '' : data.model.PhoneNumber);
                                    formData.append("EmailAddress", data.model.EmailAddress);
                                    formData.append("City", data.model.City);
                                    formData.append("Company", data.model.Company == undefined ? '' : data.model.Company);
                                    formData.append("ProjectTypeId", data.model.ProjectTypeId);
                                    formData.append("BudgetId", data.model.BudgetId);
                                    formData.append("ProjectDescription", data.model.ProjectDescription);

                                    for (var i = 0; i < data.files.length; i++) {
                                        formData.append("file" + i, data.files[i]);
                                    }

                                    $('.loader').show();
                                    return formData;

                                },
                                data: { model: $scope.requestQuoteData, files: $scope.files }
                            }).
                             success(function (data, status, headers, config) {
                                 $('.loader').hide();
                                 $("#myModal").modal('show');
                                 vcRecaptchaService.reload(widgetId);
                             }).
                             error(function (data, status, headers, config) {
                                 $('.loader').hide();
                                 vcRecaptchaService.reload(widgetId);
                             });
                        }
                        else {
                            alert("Please fill captcha");
                            vcRecaptchaService.reload(widgetId);
                        }
                    })
                    .error(function (data, status, header, config) {
                        alert("Something went wrong. Please try again!");
                        vcRecaptchaService.reload(widgetId);
                    });
                }
                else if (googleResponse == "") {
                    RequestQuoteForm.$valid = false;
                    $scope.googleRecaptchaValidationMessage = true;
                    vcRecaptchaService.reload(widgetId);
                }
            }

            $scope.onWidgetCreate = function (_widgetId) {
                widgetId = _widgetId;
            };
        });