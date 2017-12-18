'use strict';

// Google Analytics Collection APIs Reference:
// https://developers.google.com/analytics/devguides/collection/analyticsjs/



angular.module('app.controllers', [])
    // Path: /
    .controller('HomeCtrl', ['$scope', '$location', '$window', function ($scope, $location, $window) {
        $scope.$root.title = 'Shaligram Consultancy';
        $scope.$on('$viewContentLoaded', function () {
            $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
        });
    }])

    // Path: /about
    .controller('SCIndexCtrl', ['$scope', '$location', '$window', function ($scope, $location, $window) {
        $scope.$root.title = 'Shaligram Consultancy';
        $scope.$on('$viewContentLoaded', function () {
            $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
        });
    }])

    // Path: /login
    .controller('LoginCtrl', ['$scope', '$location', '$window', function ($scope, $location, $window) {
        $scope.$root.title = 'AngularJS SPA | Sign In';
        // TODO: Authorize a user
        $scope.login = function () {
            $location.path('/');
            return false;
        };
        $scope.$on('$viewContentLoaded', function () {
            $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
        });
    }])

    // Path: /error/404
    .controller('Error404Ctrl', ['$scope', '$location', '$window', function ($scope, $location, $window) {
        $scope.$root.title = 'Error 404: Page Not Found';
        $scope.$on('$viewContentLoaded', function () {
            $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
        });
    }])
    .controller('InquiryCtrl', ['$scope', '$location', '$window', function ($scope, $location, $window, configurationService) {

        $scope.submitInquiry = function (Name, Email, Phone) {
            alert(Name + Email + Phone);
        }
        $scope.$on('$viewContentLoaded', function () {
            $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
        });
    }])
    .controller('AboutUsCtrl', ['$scope', '$location', '$window', function ($scope, $location, $window) {
        $scope.$root.title = 'About Us-Shaligram Consultancy';
        $scope.$on('$viewContentLoaded', function () {
            $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
        });
    }])

 .controller('ContactUsCtrl', function ($scope, $location, $window, $http, toastr) {
     $scope.$root.title = 'Contact Us-Shaligram Consultancy';
     $scope.$on('$viewContentLoaded', function () {
         $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
     });

     $scope.SaveContactUs = function (form) {
         
            if (form.$valid) {
                $scope.allData = new Object();
                $scope.allData.Name = $scope.ContactUs.Name;
                $scope.allData.Phone = $scope.ContactUs.Phone;
                $scope.allData.Email = $scope.ContactUs.Email;
                $scope.allData.City = $scope.ContactUs.City;
                $('.loader').show();
                $http.post("ShaligramConsultancyApi/api/CommonApi/SaveContactUSInformation", $scope.allData)
                    .then(function (response) {
                        if (response) {
                            form.$submitted = false;
                            //toastr.success("Request Send Successfully");
                            $("#myModal").modal('show');
                            
                            //$scope.ContactUs = new Object();

                            //$scope.ContactUs.Name = new Object();
                            //$scope.ContactUs.Phone = new Object();
                            //$scope.ContactUs.Email = new Object();
                            //$scope.ContactUs.City = new Object();

                            //alert('success');
                        } else {
                            //alert('error');
                        }
                        $('.loader').hide();
                    })
                    .catch(function (response) {
                        $('.loader').hide();
                    });
            }
        };
     

 })
.controller('ProprietorshipCtrl', ['$scope', '$location', '$window', '$rootScope', function ($scope, $location, $window, $rootScope) {
    $scope.$root.title = 'Proprietorship';
    $rootScope.EMIText = "EMI: Rs.257";
    $rootScope.FromRsText = "From Rs.2610";
    $scope.$on('$viewContentLoaded', function () {
        $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
    });
}])
.controller('PartnershipCtrl', ['$scope', '$location', '$window', '$rootScope', function ($scope, $location, $window, $rootScope) {
    $scope.$root.title = 'Partnership';
    $rootScope.EMIText = "EMI: Rs.474";
    $rootScope.FromRsText = "From Rs.5310";
    $scope.$on('$viewContentLoaded', function () {
        $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
    });
}])
.controller('PrivateLimitedCompanyCtrl', ['$scope', '$location', '$window', '$rootScope', function ($scope, $location, $window, $rootScope) {
    $scope.$root.title = 'Private Limited Company';
    $rootScope.EMIText = "EMI: Rs.1278";
    $rootScope.FromRsText = "From Rs.14310";
    $scope.$on('$viewContentLoaded', function () {
        $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
    });
}])
.controller('LimitedLiabilityPartnershipCtrl', ['$scope', '$location', '$window', '$rootScope', function ($scope, $location, $window, $rootScope) {
    $scope.$root.title = 'Limited Liability Partnership';
    $rootScope.EMIText = "EMI: Rs.635";
    $rootScope.FromRsText = "From Rs.7110";
    $scope.$on('$viewContentLoaded', function () {
        $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
    });
}])
.controller('PublicLimitedCompanyCtrl', ['$scope', '$location', '$window', '$rootScope', function ($scope, $location, $window, $rootScope) {
    $scope.$root.title = 'Public Limited Company';
    $rootScope.EMIText = "EMI: Rs.3688";
    $rootScope.FromRsText = "From Rs.41310";
    $scope.$on('$viewContentLoaded', function () {
        $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
    });
}])
.controller('OnePersonCompanyCtrl', ['$scope', '$location', '$window', '$rootScope', function ($scope, $location, $window, $rootScope) {
    $scope.$root.title = 'One Person Company';
    $rootScope.EMIText = "EMI: Rs.1197";
    $rootScope.FromRsText = "From Rs.13410";
    $scope.$on('$viewContentLoaded', function () {
        $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
    });
}])
.controller('NidhiCompanyCtrl', ['$scope', '$location', '$window', '$rootScope', function ($scope, $location, $window, $rootScope) {
    $scope.$root.title = 'Nidhi Company';
    $rootScope.EMIText = "EMI: Rs.5296";
    $rootScope.FromRsText = "From Rs.59310";
    $scope.$on('$viewContentLoaded', function () {
        $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
    });
}])
.controller('Section8CompanyCtrl', ['$scope', '$location', '$window', '$rootScope', function ($scope, $location, $window, $rootScope) {
    $scope.$root.title = 'Section 8 Company';
    $rootScope.EMIText = "EMI: Rs.3046";
    $rootScope.FromRsText = "From Rs.34,110";
    $scope.$on('$viewContentLoaded', function () {
        $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
    });
}])
.controller('ProducerCompanyCtrl', ['$scope', '$location', '$window', '$rootScope', function ($scope, $location, $window, $rootScope) {
    $scope.$root.title = 'Producer Company';
    $rootScope.EMIText = "EMI: Rs.5617";
    $rootScope.FromRsText = "From Rs.62910";
    $scope.$on('$viewContentLoaded', function () {
        $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
    });
}])
.controller('IndianSubsidairyCompanyCtrl', ['$scope', '$location', '$window', '$rootScope', function ($scope, $location, $window, $rootScope) {
    $scope.$root.title = 'Indian-Subsidiary(For NRI) Company';
    $rootScope.EMIText = "EMI: Rs.4332";
    $rootScope.FromRsText = "From Rs.48510";
    $scope.$on('$viewContentLoaded', function () {
        $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
    });
}])
.controller('AddDirectorCtrl', ['$scope', '$location', '$window', '$rootScope', function ($scope, $location, $window, $rootScope) {
    $scope.$root.title = 'Add Director';
    $rootScope.EMIText = "EMI: Rs.394";
    $rootScope.FromRsText = "From Rs.4410";
    $scope.$on('$viewContentLoaded', function () {
        $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
    });
}])
.controller('RemoveDirectorCtrl', ['$scope', '$location', '$window', '$rootScope', function ($scope, $location, $window, $rootScope) {
    $scope.$root.title = 'Remove Director';
    $rootScope.EMIText = "EMI: Rs.257";
    $rootScope.FromRsText = "From Rs.2610";
    $scope.$on('$viewContentLoaded', function () {
        $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
    });
}])
.controller('AddDesignatedPartnerCtrl', ['$scope', '$location', '$window', '$rootScope', function ($scope, $location, $window, $rootScope) {
    $scope.$root.title = 'Add Designated Partner';
    $rootScope.EMIText = "EMI: Rs.394";
    $rootScope.FromRsText = "From Rs.4410";
    $scope.$on('$viewContentLoaded', function () {
        $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
    });
}])
.controller('RemoveDesignatedPartnerCtrl', ['$scope', '$location', '$window', '$rootScope', function ($scope, $location, $window, $rootScope) {
    $scope.$root.title = 'Remove Designated Partner';
    $rootScope.EMIText = "EMI: Rs.257";
    $rootScope.FromRsText = "From Rs.2610";
    $scope.$on('$viewContentLoaded', function () {
        $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
    });
}])
.controller('ChangeCompanyAddressCtrl', ['$scope', '$location', '$window', '$rootScope', function ($scope, $location, $window, $rootScope) {
    $scope.$root.title = 'Change Company Address';
    $rootScope.EMIText = "EMI: Rs.394";
    $rootScope.FromRsText = "From Rs.4410";
    $scope.$on('$viewContentLoaded', function () {
        $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
    });
}])
.controller('ChangeCompanyAddressOutStateCtrl', ['$scope', '$location', '$window', '$rootScope', function ($scope, $location, $window, $rootScope) {
    $scope.$root.title = 'Change Company Address(Out State)';
    $rootScope.EMIText = "EMI: Rs.394";
    $rootScope.FromRsText = "From Rs.4410";
    $scope.$on('$viewContentLoaded', function () {
        $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
    });
}])
.controller('ChangeLLPAgreementCtrl', ['$scope', '$location', '$window', '$rootScope', function ($scope, $location, $window, $rootScope) {
    $scope.$root.title = 'Change LLP Agreement';
    $rootScope.EMIText = "EMI: Rs.257";
    $rootScope.FromRsText = "From Rs.2610";
    $scope.$on('$viewContentLoaded', function () {
        $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
    });
}])
.controller('CompanyNameChangeCtrl', ['$scope', '$location', '$window', '$rootScope', function ($scope, $location, $window, $rootScope) {
    $scope.$root.title = 'Company Name Change';
    $rootScope.EMIText = "EMI: Rs.1278";
    $rootScope.FromRsText = "From Rs.14310";
    $scope.$on('$viewContentLoaded', function () {
        $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
    });
}])
.controller('PartnershipToLLPCtrl', ['$scope', '$location', '$window', '$rootScope', function ($scope, $location, $window, $rootScope) {
    $scope.$root.title = 'Partnership To LLP';
    $rootScope.EMIText = "EMI: Rs.257";
    $rootScope.FromRsText = "From Rs.2610";
    $scope.$on('$viewContentLoaded', function () {
        $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
    });
}])
.controller('SoleProprietorshipToPrivateLimitedCtrl', ['$scope', '$location', '$window', '$rootScope', function ($scope, $location, $window, $rootScope) {
    $scope.$root.title = 'Sole Proprietorship To Private Limited';
    $rootScope.EMIText = "EMI: Rs.257";
    $rootScope.FromRsText = "From Rs.2610";
    $scope.$on('$viewContentLoaded', function () {
        $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
    });
}])
.controller('PrivateLimitedToPublicLimitedCtrl', ['$scope', '$location', '$window', '$rootScope', function ($scope, $location, $window, $rootScope) {
    $scope.$root.title = 'Private Limited To Public Limited';
    $rootScope.EMIText = "EMI: Rs.257";
    $rootScope.FromRsText = "From Rs.2610";
    $scope.$on('$viewContentLoaded', function () {
        $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
    });
}])
.controller('PrivateLimitedToOnePersonCtrl', ['$scope', '$location', '$window', '$rootScope', function ($scope, $location, $window, $rootScope) {
    $scope.$root.title = 'Private Limited To One Person';
    $rootScope.EMIText = "EMI: Rs.257";
    $rootScope.FromRsText = "From Rs.2610";
    $scope.$on('$viewContentLoaded', function () {
        $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
    });
}])
.controller('ClosePrivateLimitedCompanyCtrl', ['$scope', '$location', '$window', '$rootScope', function ($scope, $location, $window, $rootScope) {
    $scope.$root.title = 'Close Private Limited Company';
    $rootScope.EMIText = "EMI: Rs.2001";
    $rootScope.FromRsText = "From Rs.22410";
    $scope.$on('$viewContentLoaded', function () {
        $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
    });
}])
.controller('CloseYourLLPCtrl', ['$scope', '$location', '$window', '$rootScope', function ($scope, $location, $window, $rootScope) {
    $scope.$root.title = 'Close Your LLP';
    $rootScope.EMIText = "EMI: Rs.1278";
    $rootScope.FromRsText = "From Rs.14310";
    $scope.$on('$viewContentLoaded', function () {
        $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
    });
}])
.controller('GSTRegistrationCtrl', ['$scope', '$location', '$window', '$rootScope', function ($scope, $location, $window, $rootScope) {
    $scope.$root.title = 'GST Registration';
    $rootScope.EMIText = "EMI: Rs.257";
    $rootScope.FromRsText = "From Rs.2610";
    $scope.$on('$viewContentLoaded', function () {
        $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
    });
}])
.controller('GSTRegistrationForForeignersCtrl', ['$scope', '$location', '$window', '$rootScope', function ($scope, $location, $window, $rootScope) {
    $scope.$root.title = 'GST Registration(ForForeigners)';
    $rootScope.EMIText = "EMI: Rs.257";
    $rootScope.FromRsText = "From Rs.2610";
    $scope.$on('$viewContentLoaded', function () {
        $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
    });
}])
.controller('TemporaryGSTRegistrationCtrl', ['$scope', '$location', '$window', '$rootScope', function ($scope, $location, $window, $rootScope) {
    $scope.$root.title = 'Temporary GST Registration';
    $rootScope.EMIText = "EMI: Rs.233";
    $rootScope.FromRsText = "From Rs.2610";
    $scope.$on('$viewContentLoaded', function () {
        $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
    });
}])
    .controller('ProfessionalTaxCtrl', ['$scope', '$location', '$window', '$rootScope', function ($scope, $location, $window, $rootScope) {
        $scope.$root.title = 'Professional Tax';
        $rootScope.EMIText = "EMI: Rs.1037";
        $rootScope.FromRsText = "From Rs.11610";
        $scope.$on('$viewContentLoaded', function () {
            $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
        });
    }])
    .controller('TANRegistrationCtrl', ['$scope', '$location', '$window', '$rootScope', function ($scope, $location, $window, $rootScope) {
        $scope.$root.title = 'TAN Registration';
        $rootScope.EMIText = "EMI: Rs.153";
        $rootScope.FromRsText = "From Rs.1710";
        $scope.$on('$viewContentLoaded', function () {
            $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
        });
    }])
    .controller('ESIRegistrationCtrl', ['$scope', '$location', '$window', '$rootScope', function ($scope, $location, $window, $rootScope) {
        $scope.$root.title = 'ESI Registration';
        $rootScope.EMIText = "EMI: Rs.635";
        $rootScope.FromRsText = "From Rs.7110";
        $scope.$on('$viewContentLoaded', function () {
            $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
        });
    }])
    .controller('MSMERegistrationCtrl', function ($scope, $location, $window, $rootScope, $http, toastr) {
        $scope.$root.title = 'MSME Registration';

        $scope.$on('$viewContentLoaded', function () {
            $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
        });

        $scope.Savedata = function (form) {
            if (form.$valid) {
                $scope.allData = new Object();
                $scope.allData.Name = $scope.Name;
                $scope.allData.Phone = $scope.Phone;
                $scope.allData.Email = $scope.Email;
                $scope.allData.InquiryFor = $scope.$root.title;
                $scope.allData.EMI = "";
                $scope.allData.Rupees = "Free";
                $('.loader').show();
                $http.post("ShaligramConsultancyApi/api/CommonApi/SaveInformation", $scope.allData)
                    .then(function (response) {

                        if (response) {
                            //toastr.success("Inquiry Send Successfully");
                            $("#myModal").modal('show');
                            $scope.Name = "";
                            $scope.Phone = "";
                            $scope.Email = "";
                            //alert('success');
                        } else {
                            //alert('error');
                        }
                        $('.loader').hide();
                    })
                    .catch(function (response) {
                        $('.loader').hide();
                    });
            }
        };
    })
    .controller('ImportExportCodeCtrl', ['$scope', '$location', '$window', '$rootScope', function ($scope, $location, $window, $rootScope) {
        $scope.$root.title = 'Import Export Code';
        $rootScope.EMIText = "EMI: Rs.394";
        $rootScope.FromRsText = "From Rs.4410";
        $scope.$on('$viewContentLoaded', function () {
            $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
        });
    }])
    .controller('FSSAIRegistrationCtrl', ['$scope', '$location', '$window', '$rootScope', function ($scope, $location, $window, $rootScope) {
        $scope.$root.title = 'FSSAI Registration';
        $rootScope.EMIText = "EMI: Rs.956";
        $rootScope.FromRsText = "From Rs.10710";
        $scope.$on('$viewContentLoaded', function () {
            $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
        });
    }])
    .controller('DigitalSignatureCtrl', ['$scope', '$location', '$window', '$rootScope', function ($scope, $location, $window, $rootScope) {
        $scope.$root.title = 'Digital Signature';
        $rootScope.EMIText = "EMI: Rs.88";
        $rootScope.FromRsText = "From Rs.990";
        $scope.$on('$viewContentLoaded', function () {
            $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
        });
    }])
    .controller('TrademarkRegistrationCtrl', ['$scope', '$location', '$window', '$rootScope', function ($scope, $location, $window, $rootScope) {
        $scope.$root.title = 'Trademark Registration';
        $rootScope.EMIText = "EMI: Rs.481";
        $rootScope.FromRsText = "From Rs.5390";
        $scope.$on('$viewContentLoaded', function () {
            $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
        });
    }])
    .controller('TrademarkRectificationCtrl', ['$scope', '$location', '$window', '$rootScope', function ($scope, $location, $window, $rootScope) {
        $scope.$root.title = 'Trademark Rectification';
        $rootScope.EMIText = "EMI: Rs.474";
        $rootScope.FromRsText = "From Rs.5310";
        $scope.$on('$viewContentLoaded', function () {
            $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
        });
    }])
    .controller('TrademarkObjectionCtrl', ['$scope', '$location', '$window', '$rootScope', function ($scope, $location, $window, $rootScope) {
        $scope.$root.title = 'Trademark Objection';
        $rootScope.EMIText = "EMI: Rs.233";
        $rootScope.FromRsText = "From Rs.2610";
        $scope.$on('$viewContentLoaded', function () {
            $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
        });
    }])
    .controller('TrademarkOppositionCtrl', ['$scope', '$location', '$window', '$rootScope', function ($scope, $location, $window, $rootScope) {
        $scope.$root.title = 'Trademark Opposition';
        $rootScope.EMIText = "EMI: Rs.474";
        $rootScope.FromRsText = "From Rs.5310";
        $scope.$on('$viewContentLoaded', function () {
            $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
        });
    }])
    .controller('TrademarkRenewalCtrl', ['$scope', '$location', '$window', '$rootScope', function ($scope, $location, $window, $rootScope) {
        $scope.$root.title = 'Trademark Renewal';
        $rootScope.EMIText = "EMI: Rs.1037";
        $rootScope.FromRsText = "From Rs.11610";
        $scope.$on('$viewContentLoaded', function () {
            $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
        });
    }])
    .controller('LogoDesigningCtrl', ['$scope', '$location', '$window', '$rootScope', function ($scope, $location, $window, $rootScope) {
        $scope.$root.title = 'Logo Designing';
        $rootScope.EMIText = "EMI: Rs.394";
        $rootScope.FromRsText = "From Rs.4410";
        $scope.$on('$viewContentLoaded', function () {
            $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
        });
    }])
    .controller('CopyrightRegistrationCtrl', ['$scope', '$location', '$window', '$rootScope', function ($scope, $location, $window, $rootScope) {
        $scope.$root.title = 'Copyright Registration';
        $rootScope.EMIText = "EMI: Rs.1037";
        $rootScope.FromRsText = "From Rs.11610";
        $scope.$on('$viewContentLoaded', function () {
            $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
        });
    }])
    .controller('DesignRegistrationCtrl', ['$scope', '$location', '$window', '$rootScope', function ($scope, $location, $window, $rootScope) {
        $scope.$root.title = 'Design Registration';
        $rootScope.EMIText = "EMI: Rs.635";
        $rootScope.FromRsText = "From Rs.7110";
        $scope.$on('$viewContentLoaded', function () {
            $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
        });
    }])
    .controller('ProvisionalPatentCtrl', ['$scope', '$location', '$window', '$rootScope', function ($scope, $location, $window, $rootScope) {
        $scope.$root.title = 'Provisional Patent';
        $rootScope.EMIText = "EMI: Rs.2885";
        $rootScope.FromRsText = "From Rs.32310";
        $scope.$on('$viewContentLoaded', function () {
            $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
        });
    }])
    .controller('PatentRegistrationCtrl', ['$scope', '$location', '$window', '$rootScope', function ($scope, $location, $window, $rootScope) {
        $scope.$root.title = 'Patent Registration';
        $rootScope.EMIText = "EMI: Rs.5617";
        $rootScope.FromRsText = "From Rs.62920";
        $scope.$on('$viewContentLoaded', function () {
            $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
        });
    }])
    .controller('IncomeTaxFilingCtrl', ['$scope', '$location', '$window', '$rootScope', function ($scope, $location, $window, $rootScope) {
        $scope.$root.title = 'Income Tax Filing';
        $rootScope.EMIText = "EMI: Rs.79";
        $rootScope.FromRsText = "From Rs.890";
        $scope.$on('$viewContentLoaded', function () {
            $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
        });
    }])
    .controller('GSTFilingCtrl', ['$scope', '$location', '$window', '$rootScope', function ($scope, $location, $window, $rootScope) {
        $scope.$root.title = 'GST Filing';
        $rootScope.EMIText = "EMI: Rs.40";
        $rootScope.FromRsText = "From Rs.450";
        $scope.$on('$viewContentLoaded', function () {
            $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
        });
    }])
    .controller('GSTMigrationCtrl', ['$scope', '$location', '$window', '$rootScope', function ($scope, $location, $window, $rootScope) {
        $scope.$root.title = 'GST Migration';
        $rootScope.EMIText = "EMI: Rs.257";
        $rootScope.FromRsText = "From Rs.2610";
        $scope.$on('$viewContentLoaded', function () {
            $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
        });
    }])
    .controller('TDSReturnCtrl', ['$scope', '$location', '$window', '$rootScope', function ($scope, $location, $window, $rootScope) {
        $scope.$root.title = 'TDS Return';
        $rootScope.EMIText = "EMI: Rs.120";
        $rootScope.FromRsText = "From Rs.1350";
        $scope.$on('$viewContentLoaded', function () {
            $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
        });
    }])
    .controller('ESIReturnCtrl', ['$scope', '$location', '$window', '$rootScope', function ($scope, $location, $window, $rootScope) {
        $scope.$root.title = 'ESI Return';
        $rootScope.EMIText = "EMI: Rs.64";
        $rootScope.FromRsText = "From Rs.720";
        $scope.$on('$viewContentLoaded', function () {
            $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
        });
    }])
    .controller('ProprietorshipComplianceCtrl', ['$scope', '$location', '$window', '$rootScope', function ($scope, $location, $window, $rootScope) {
        $scope.$root.title = 'Proprietorship Compliance';
        $rootScope.EMIText = "EMI: Rs.474";
        $rootScope.FromRsText = "From Rs.5310";
        $scope.$on('$viewContentLoaded', function () {
            $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
        });
    }])
    .controller('PartnershipComplianceCtrl', ['$scope', '$location', '$window', '$rootScope', function ($scope, $location, $window, $rootScope) {
        $scope.$root.title = 'Partnership Compliance';
        $rootScope.EMIText = "EMI: Rs.795";
        $rootScope.FromRsText = "From Rs.8910";
        $scope.$on('$viewContentLoaded', function () {
            $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
        });
    }])
    .controller('LLPComplianceCtrl', ['$scope', '$location', '$window', '$rootScope', function ($scope, $location, $window, $rootScope) {
        $scope.$root.title = 'Limited Liability Partnership Compliance';
        $rootScope.EMIText = "EMI: Rs.634";
        $rootScope.FromRsText = "From Rs.7110";
        $scope.$on('$viewContentLoaded', function () {
            $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
        });
    }])
    .controller('PvtLtdCompanyComplianceCtrl', ['$scope', '$location', '$window', '$rootScope', function ($scope, $location, $window, $rootScope) {
        $scope.$root.title = 'Private Limited Company Compliance';
        $rootScope.EMIText = "EMI: Rs.1599";
        $rootScope.FromRsText = "From Rs.17910";
        $scope.$on('$viewContentLoaded', function () {
            $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
        });
    }])
    .controller('ForeignSubsidiaryComplianceCtrl', ['$scope', '$location', '$window', '$rootScope', function ($scope, $location, $window, $rootScope) {
        $scope.$root.title = 'Foreign Subsidiary Compliance';
        $rootScope.EMIText = "EMI: Rs.4813";
        $rootScope.FromRsText = "From Rs.53910";
        $scope.$on('$viewContentLoaded', function () {
            $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
        });
    }])
    .controller('LegalNoticeCtrl', ['$scope', '$location', '$window', '$rootScope', function ($scope, $location, $window, $rootScope) {
        $scope.$root.title = 'Legal Notice';
        $rootScope.EMIText = "EMI: Rs.257";
        $rootScope.FromRsText = "From Rs.2610";
        $scope.$on('$viewContentLoaded', function () {
            $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
        });
    }])
    .controller('NonDisclosureAgreementCtrl', ['$scope', '$location', '$window', '$rootScope', function ($scope, $location, $window, $rootScope) {
        $scope.$root.title = 'Non-Disclosure Agreement';
        $rootScope.EMIText = "EMI: Rs.257";
        $rootScope.FromRsText = "From Rs.2610";
        $scope.$on('$viewContentLoaded', function () {
            $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
        });
    }])
    .controller('FoundersAgreementCtrl', ['$scope', '$location', '$window', '$rootScope', function ($scope, $location, $window, $rootScope) {
        $scope.$root.title = 'Founders Agreement';
        $rootScope.EMIText = "EMI: Rs.257";
        $rootScope.FromRsText = "From Rs.2610";
        $scope.$on('$viewContentLoaded', function () {
            $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
        });
    }])
    .controller('TermSheetCtrl', ['$scope', '$location', '$window', '$rootScope', function ($scope, $location, $window, $rootScope) {
        $scope.$root.title = 'Term Sheet';
        $rootScope.EMIText = "EMI: Rs.257";
        $rootScope.FromRsText = "From Rs.2610";
        $scope.$on('$viewContentLoaded', function () {
            $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
        });
    }])
    .controller('ShareholdersAgreementCtrl', ['$scope', '$location', '$window', '$rootScope', function ($scope, $location, $window, $rootScope) {
        $scope.$root.title = 'Shareholders Agreement';
        $rootScope.EMIText = "EMI: Rs.257";
        $rootScope.FromRsText = "From Rs.2610";
        $scope.$on('$viewContentLoaded', function () {
            $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
        });
    }])
    .controller('SharePurchaseAgreementCtrl', ['$scope', '$location', '$window', '$rootScope', function ($scope, $location, $window, $rootScope) {
        $scope.$root.title = 'Share Purchase Agreement';
        $rootScope.EMIText = "EMI: Rs.257";
        $rootScope.FromRsText = "From Rs.2610";
        $scope.$on('$viewContentLoaded', function () {
            $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
        });
    }])
        .controller('CommonController', function ($scope, $location, $window, $rootScope, $http, toastr) {

            $scope.pageReload = function() {
                $window.location.reload();
            }

            $scope.Savedata = function (form) {

                if (form.$valid) {

                    //  toastr.success("Inquiry Send Successfully");
                    $scope.allData = new Object();
                    $scope.allData.Name = $scope.Name;
                    $scope.allData.Phone = $scope.Phone;
                    $scope.allData.Email = $scope.Email;
                    $scope.allData.InquiryFor = $scope.$root.title;
                    $scope.allData.EMI = $rootScope.EMIText;
                    $scope.allData.Rupees = $rootScope.FromRsText;
                    $('.loader').show();
                    $http.post("ShaligramConsultancyApi/api/CommonApi/SaveInformation", $scope.allData)
                        .then(function (response) {

                            if (response) {
                                $('.loader').hide();
                                $("#myModal").modal('show');
                               // toastr.success("Inquiry Send Successfully");
                                $scope.Name = "";
                                $scope.Phone = "";
                                $scope.Email = "";
                                //alert('success');
                            } else {
                                //alert('error');
                            }
                            $('.loader').hide();
                        })
                        .catch(function (response) {
                            $('.loader').hide();
                        });
                } else {

                }
            }
        });


