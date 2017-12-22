'use strict';

// Google Analytics Collection APIs Reference:
// https://developers.google.com/analytics/devguides/collection/analyticsjs/



angular.module('app.controllers', [])
    // Path: /
    .controller('HomeCtrl', ['$scope', '$location', '$window', function ($scope, $location, $window) {
        $scope.$root.title = 'Shaligram Infotech';
        $scope.$on('$viewContentLoaded', function () {
            $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
        });
    }])

    // Path: /about
    .controller('SCIndexCtrl', ['$scope', '$location', '$window', function ($scope, $location, $window) {
        $scope.$root.title = 'Shaligram Infotech';
        $scope.$on('$viewContentLoaded', function () {
            $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
        });
    }])

    // Path: /about
    .controller('InfrastructureCntrl', ['$scope', '$location', '$window', function ($scope, $location, $window) {
        $scope.$root.title = 'Shaligram Infotech Infrastructure | Application Management Service Provider | Application Management Service Provider USA';
        $scope.$on('$viewContentLoaded', function () {
            $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
        });
    }])

     // Path: /about
    .controller('careerCntrl', ['$scope', '$location', '$window', function ($scope, $location, $window) {
        $scope.$root.title = 'Shaligram Infotech Career | Carrer Objective | Carreres | Current Job Opening';
        $scope.$on('$viewContentLoaded', function () {
            $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
        });
    }])

      .controller('DevelopmentProcessCntrl', ['$scope', '$location', '$window', function ($scope, $location, $window) {
          $scope.$root.title = 'Shaligram Infotech Development Process | Embedded Software Development | Embedded Software Development Company USA';
          $scope.$on('$viewContentLoaded', function () {
              $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
          });
      }])

        .controller('CrmSolutionCntrl', ['$scope', '$location', '$window', function ($scope, $location, $window) {
            $scope.$root.title = 'Shaligram Infotech CRM Solutions | CRM Solutions Provider | CRM Solutions Provider USA | CRM Solutions Provider UK';
            $scope.$on('$viewContentLoaded', function () {
                $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
            });
        }])


       .controller('EcommerceSolutionCntrl', ['$scope', '$location', '$window', function ($scope, $location, $window) {
           $scope.$root.title = 'Shaligram Infotech Ecommerce Solution | Ecommerce Solution Provider USA | Ecommerce Solution Provider UK';
           $scope.$on('$viewContentLoaded', function () {
               $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
           });
       }])

       .controller('hrandjobPortalSolutionCntrl', ['$scope', '$location', '$window', function ($scope, $location, $window) {
           $scope.$root.title = 'Shaligram Infotech HR and Job Portal Solution | HR And Job Portal Solution USA | HR And Job Portal Solution UK<';
           $scope.$on('$viewContentLoaded', function () {
               $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
           });
       }])


     .controller('enterpriseContentManagementCntrl', ['$scope', '$location', '$window', function ($scope, $location, $window) {
         $scope.$root.title = 'Shaligram Infotech Enterprise Content Management | Enterprise Content Management Development Company USA';
         $scope.$on('$viewContentLoaded', function () {
             $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
         });
     }])


     .controller('angularjsDevelopmentCntrl', ['$scope', '$location', '$window', '$rootScope','localStorageService', function ($scope, $location, $window, $rootScope, localStorageService) {
         $scope.$root.title = 'Shaligram Infotech AngularJS | Software Product Development Company | Software Product Development Company  UK';
         $rootScope.TechnologyId = 8;
         localStorageService.TechnologyId = 8;
         $scope.$on('$viewContentLoaded', function () {
             $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
         });
     }])

    .controller('ajaxDevelopmentCntrl', ['$scope', '$location', '$window', function ($scope, $location, $window) {
        $scope.$root.title = 'Shaligram Infotech AJAX | Custom Software Development Company | Custom Software Development Company UK';
        $scope.$on('$viewContentLoaded', function () {
            $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
        });
    }])

       .controller('html5DevelopmentCntrl', ['$scope', '$location', '$window', function ($scope, $location, $window) {
           $scope.$root.title = 'Shaligram Infotech HTML5 | Silverlight Application Development Company | Silverlight Application Development Company USA';
           $scope.$on('$viewContentLoaded', function () {
               $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
           });
       }])

     .controller('phpOpenSourceCntrl', ['$scope', '$location', '$window', '$rootScope', 'localStorageService', function ($scope, $location, $window, $rootScope, localStorageService) {
         $scope.$root.title = 'PHP Open Source Project Development | PHP Open Source Project Development Company | PHP Open Source Project Development Company USA';
         $rootScope.TechnologyId = 5;
         localStorageService.TechnologyId = 5;
         $scope.$on('$viewContentLoaded', function () {
             $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
         });
     }])

     .controller('hadoopDevelopmentCntrl', ['$scope', '$location', '$window', '$rootScope', 'localStorageService', function ($scope, $location, $window, $rootScope, localStorageService) {
         $scope.$root.title = 'PHP Open Source Project Development | PHP Open Source Project Development Company | PHP Open Source Project Development Company USA';
         $rootScope.TechnologyId = 6;
         localStorageService.TechnologyId = 6;
     .controller('hadoopDevelopmentCntrl', ['$scope', '$location', '$window', function ($scope, $location, $window) {
         $scope.$root.title = 'Hadoop Development | PHP Open Source Project Development | PHP Open Source Project Development Company | PHP Open Source Project Development Company USA';
         $scope.$on('$viewContentLoaded', function () {
             $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
         });
     }])

      .controller('domainExpertiseCntrl', ['$scope', '$location', '$window', function ($scope, $location, $window) {
          $scope.$root.title = 'Shaligram Infotech Domain Expertise | Civil And Construction Software Development | Healthcare Software Development Company';
          $scope.$on('$viewContentLoaded', function () {
              $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
          });
      }])


    .controller('softwareProductDevelopmentCntrl', ['$scope', '$location', '$window', function ($scope, $location, $window) {
        $scope.$root.title = 'Shaligram Infotech Product Development | Retail ERP Software Development Company | Retail ERP Software Development Company USA';
        $scope.$on('$viewContentLoaded', function () {
            $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
        });
    }])

    .controller('softwareApplicationMigrationCntrl', ['$scope', '$location', '$window', function ($scope, $location, $window) {
        $scope.$root.title = 'Shaligram Infotech Application Migration & Modernization | Application Migration & Modernization Trends';
        $scope.$on('$viewContentLoaded', function () {
            $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
        });
    }])

    .controller('softwareApplicationSupportCntrl', ['$scope', '$location', '$window', function ($scope, $location, $window) {
        $scope.$root.title = 'Shaligram Infotech Application Maintenance & Support | Application Maintenance & Support USA | Application Maintenance & Support UK';
        $scope.$on('$viewContentLoaded', function () {
            $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
        });
    }])

     .controller('webPortalDevelopmentCntrl', ['$scope', '$location', '$window', function ($scope, $location, $window) {
         $scope.$root.title = 'Shaligram Infotech Web Portal Development | Web Portal Development Company USA| Web Portal Development Company UK';
         $scope.$on('$viewContentLoaded', function () {
             $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
         });
     }])

     .controller('responsiveWebsiteDevelopmentCntrl', ['$scope', '$location', '$window', function ($scope, $location, $window) {
         $scope.$root.title = 'Shaligram Infotech Responsive Website Development | Responsive Website Development Company USA| Responsive Website Development Company UK';
         $scope.$on('$viewContentLoaded', function () {
             $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
         });
     }])
        .controller('hireResourceCntrl', ['$scope', '$location', '$window', function ($scope, $location, $window) {
            $scope.$root.title = 'Shaligram Infotech Hire Resource | Hire ASP.Net resource | Hire iOS resource | Hire PHP resource USA | Hire SharePoint resource';
            $scope.$on('$viewContentLoaded', function () {
                $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
            });
        }])

    .controller('biServicesCntrl', ['$scope', '$location', '$window', function ($scope, $location, $window) {
        $scope.$root.title = 'Shaligram Infotech Business Intelligence | Business Intelligence Software Development | Business Intelligence Software Development Company';
        $scope.$on('$viewContentLoaded', function () {
            $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
        });
    }])

    .controller('testingQaServicesCntrl', ['$scope', '$location', '$window', function ($scope, $location, $window) {
        $scope.$root.title = 'Software Testing | Software Testing Lifecycle | Software Quality Assurance';
        $scope.$on('$viewContentLoaded', function () {
            $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
        });
    }])

       .controller('offshoreDevelopmentCenterCntrl', ['$scope', '$location', '$window', function ($scope, $location, $window) {
           $scope.$root.title = 'Offshore Development Center India | Offshore Development Center USA | Offshore Development Center UK';
           $scope.$on('$viewContentLoaded', function () {
               $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
           });
       }])

     .controller('mobileAppDevelopmentCntrl', ['$scope', '$location', '$window', function ($scope, $location, $window) {
         $scope.$root.title = 'Mobile App Development Company | Mobile App Development Company USA | Mobile App Development Company UK';
         $scope.$on('$viewContentLoaded', function () {
             $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
         });
     }])

    .controller('cloudServicesCntrl', ['$scope', '$location', '$window', function ($scope, $location, $window) {
        $scope.$root.title = 'Cloud Service Provider In India | Cloud Service Provider In USA | Cloud Service Provider In UK';
        $scope.$on('$viewContentLoaded', function () {
            $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
        });
    }])

    .controller('LeadershipCntrl', ['$scope', '$location', '$window', function ($scope, $location, $window) {
        $scope.$root.title = 'Shaligram Infotech Leadership | ERP Software Manufacturing Company | ERP Software Manufacturing Company UK';
        $scope.$on('$viewContentLoaded', function () {
            $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
        });
    }])

    .controller('fresherAspnetCntrl', ['$scope', '$location', '$window', function ($scope, $location, $window) {
        $scope.$root.title = 'Software Development Company - Fresher ASP.NET Job Opportunities - Shaligram InfoTech';
        $scope.$on('$viewContentLoaded', function () {
            $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
        });
    }])

    .controller('fresherBusinessDevelopmentExecutiveCntrl', ['$scope', '$location', '$window', function ($scope, $location, $window) {
        $scope.$root.title = 'Software Development Company - Fresher Business Development Executive Job Opportunities - Shaligram InfoTech';
        $scope.$on('$viewContentLoaded', function () {
            $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
        });
    }])

     .controller('jrBusinessDevelopmentExecutiveCntrl', ['$scope', '$location', '$window', function ($scope, $location, $window) {
         $scope.$root.title = 'Software Development Company - Junior Business Development Executive Job Opportunities - Shaligram InfoTech';
         $scope.$on('$viewContentLoaded', function () {
             $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
         });
     }])

     .controller('srBusinessDevelopmentExecutiveCntrl', ['$scope', '$location', '$window', function ($scope, $location, $window) {
         $scope.$root.title = 'Software Development Company - Senior Business Development Executive Job Opportunities - Shaligram InfoTech';
         $scope.$on('$viewContentLoaded', function () {
             $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
         });
     }])

     .controller('srSharepointDeveloperCntrl', ['$scope', '$location', '$window', function ($scope, $location, $window) {
         $scope.$root.title = 'Software Development Company - Senior Sharepoint Developer Job Opportunities - Shaligram InfoTech';
         $scope.$on('$viewContentLoaded', function () {
             $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
         });
     }])

    .controller('srJavaDeveloperCntrl', ['$scope', '$location', '$window', function ($scope, $location, $window) {
        $scope.$root.title = 'Software Development Company - Senior Java Developer Job Opportunities - Shaligram InfoTech';
        $scope.$on('$viewContentLoaded', function () {
            $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
        });
    }])

    .controller('MicrosoftDotNetCtrl', ['$scope', '$location', '$window', '$rootScope', 'localStorageService', function ($scope, $location, $window, $rootScope, localStorageService) {
        $scope.$root.title = 'Shaligram Infotech Microsoft Dot Net | ASP.NET Web Development | ASP.NET Web Development Company USA | ASP.NET Web Development Company UK';
        $rootScope.TechnologyId = 1;
        localStorageService.set('TechnologyId',1);
        $scope.$on('$viewContentLoaded', function () {
            $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
        });
    }])

     .controller('liveChatAndSupportCntrl', ['$scope', '$location', '$window', function ($scope, $location, $window) {
         $scope.$root.title = 'Live Chat and Support Ticket System | Live Chat Support Skype | Live Chat Support For Website';
         $scope.$on('$viewContentLoaded', function () {
             $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
         });
     }])

    .controller('SharePointNETTController', ['$scope', '$location', '$window', function ($scope, $location, $window) {
        //$scope.$root.title = 'Live Chat and Support Ticket System | Live Chat Support Skype | Live Chat Support For Website';
        $scope.$on('$viewContentLoaded', function () {
            $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
        });
    }])

     .controller('civilNetCntrl', ['$scope', '$location', '$window', function ($scope, $location, $window) {
         $scope.$root.title = 'Civil Project Management  Software Development | Civil Project Management  Software Development  Company';
         $scope.$on('$viewContentLoaded', function () {
             $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
         });
     }])

    .controller('SharepointCtrl', ['$scope', '$location', '$window', '$rootScope', 'localStorageService', function ($scope, $location, $window, $rootScope, localStorageService) {
        $scope.$root.title = 'Civil Project Management  Software Development | Civil Project Management  Software Development  Company';
        $rootScope.TechnologyId = 2;
        localStorageService.set('TechnologyId', 2);
        $scope.$on('$viewContentLoaded', function () {
            $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
        });
    }])

     .controller('JavaCtrl', ['$scope', '$location', '$window', '$rootScope', 'localStorageService', function ($scope, $location, $window, $rootScope, localStorageService) {
         $scope.$root.title = 'Civil Project Management  Software Development | Civil Project Management  Software Development  Company';
         $rootScope.TechnologyId = 3;
         localStorageService.set('TechnologyId', 3);
         $scope.$on('$viewContentLoaded', function () {
             $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
         });
     }])

    .controller('NodejsCtrl', ['$scope', '$location', '$window', '$rootScope','localStorageService', function ($scope, $location, $window, $rootScope, localStorageService) {
        $scope.$root.title = 'Civil Project Management  Software Development | Civil Project Management  Software Development  Company';
        $rootScope.TechnologyId = 7;
        localStorageService.set('TechnologyId', 7);
        $scope.$on('$viewContentLoaded', function () {
            $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
        });
    }])

     .controller('CommonPortfolioCntrl', ['$scope', '$location', '$window', '$rootScope', 'localStorageService', function ($scope, $location, $window, $rootScope, localStorageService) {
         $scope.$root.title = 'Civil Project Management  Software Development | Civil Project Management  Software Development  Company';
         $rootScope.TechnologyId = 0;
         localStorageService.set('TechnologyId', 0);
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
        $scope.$root.title = 'About Us-Shaligram Infotech';
        $scope.$on('$viewContentLoaded', function () {
            $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
        });
    }])

 .controller('ContactUsCtrl', function ($scope, $location, $window, $http, toastr) {
     $scope.$root.title = 'Contact Us-Shaligram Infotech';
     $scope.$on('$viewContentLoaded', function () {
         $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
     })

     $scope.SaveContactUs = function (form) {

         if (form.$valid) {
             $scope.allData = new Object();
             $scope.allData.Name = $scope.ContactUs.Name;
             $scope.allData.Phone = $scope.ContactUs.Phone;
             $scope.allData.Email = $scope.ContactUs.Email;
             $scope.allData.City = $scope.ContactUs.City;
             $('.loader').show();
             $http.post("ShaligramInfotechAPI/api/CommonApi/SaveContactUSInformation", $scope.allData)
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
                $http.post("ShaligramInfotechAPI/api/CommonApi/SaveInformation", $scope.allData)
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

            $scope.pageReload = function () {
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
                    $http.post("ShaligramInfotechAPI/api/CommonApi/SaveInformation", $scope.allData)
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
        })
  .controller('ApplicationDevelopmentCtrl', ['$scope', '$location', '$window', '$rootScope', function ($scope, $location, $window, $rootScope) {
      $scope.$root.title = "Application Development";
      $scope.$on('$viewContentLoaded', function () {
          $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
      });
  }])
.controller('WhoWeAreCntrl', ['$scope', '$location', '$window', '$rootScope', function ($scope, $location, $window, $rootScope) {
    $scope.$root.title = "Who We Are";
    $scope.$on('$viewContentLoaded', function () {
        $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
    });
}])
.controller('LeadershipCntrl', ['$scope', '$location', '$window', '$rootScope', function ($scope, $location, $window, $rootScope) {
    $scope.$root.title = "Leadership";
    $scope.$on('$viewContentLoaded', function () {
        $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
    });
}])
.controller('InfrastructureCntrl', ['$scope', '$location', '$window', '$rootScope', function ($scope, $location, $window, $rootScope) {
    $scope.$root.title = "Infrastructure";
    $scope.$on('$viewContentLoaded', function () {
        $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
    });
}])
.controller('careerCntrl', ['$scope', '$location', '$window', '$rootScope', function ($scope, $location, $window, $rootScope) {
    $scope.$root.title = "Career";
    $scope.$on('$viewContentLoaded', function () {
        $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
    });
}])
.controller('DevelopmentProcessCntrl', ['$scope', '$location', '$window', '$rootScope', function ($scope, $location, $window, $rootScope) {
    $scope.$root.title = "Development Process";
    $scope.$on('$viewContentLoaded', function () {
        $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
    });
}])
.controller('SharepointCtrl', ['$scope', '$location', '$window', '$rootScope', function ($scope, $location, $window, $rootScope) {
    $scope.$root.title = "Sharepoint";
    $scope.$on('$viewContentLoaded', function () {
        $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
    });
}])
.controller('JavaCtrl', ['$scope', '$location', '$window', '$rootScope', function ($scope, $location, $window, $rootScope) {
    $scope.$root.title = "Java";
    $scope.$on('$viewContentLoaded', function () {
        $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
    });
}])
.controller('BiztalkCtrl', ['$scope', '$location', '$window', '$rootScope', function ($scope, $location, $window, $rootScope) {
    $scope.$root.title = "Biztalk";
    $scope.$on('$viewContentLoaded', function () {
        $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
    });
}])
.controller('MicrosoftDotNetCtrl', ['$scope', '$location', '$window', '$rootScope', function ($scope, $location, $window, $rootScope) {
    $scope.$root.title = "Microsoft .Net";
    $scope.$on('$viewContentLoaded', function () {
        $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
    });
}])
.controller('NodejsCtrl', ['$scope', '$location', '$window', '$rootScope', function ($scope, $location, $window, $rootScope) {
    $scope.$root.title = "Nodejs";
    $scope.$on('$viewContentLoaded', function () {
        $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
    });
}])

  .controller('CommonImagesController', ['$scope', '$location', '$window', '$rootScope', '$http', function ($scope, $location, $window, $rootScope, $http) {
      $scope.GetFilesList = function (folderPath) {
          $scope.FolderPath = folderPath;
          $http.get("ShaligramInfotechAPI/api/CommonApi/GetFiles?folderPath=" + folderPath)
                         .then(function (response) {
                             debugger;
                             $scope.GetList = response.data;
                         });
      }
  }])

;


