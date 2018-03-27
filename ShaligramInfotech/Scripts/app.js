'use strict';

var app = angular.module('app', ['LocalStorageModule', 'toastr', 'ui.router', 'app.filters', 'app.services', 'app.directives', 'app.controllers', 'vcRecaptcha']);
app.config(['$stateProvider', '$locationProvider', function ($stateProvider, $locationProvider, localStorageServiceProvider, $params) {
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: '/views/SCPages/SCIndex',
            controller: 'HomeCtrl'
        })
        .state('about', {
            url: '/about',
            templateUrl: '/views/about',
            controller: 'AboutCtrl'
        })
        .state('login', {
            url: '/login',
            layout: 'basic',
            templateUrl: '/views/login',
            controller: 'LoginCtrl'
        })
         .state('SCIndex', {
             url: '/SCIndex',
             templateUrl: '/views/SCPages/SCIndex',
             controller: 'SCIndexCtrl'
         })
        .state('who-we-are', {
            url: '/who-we-are',
            templateUrl: '/views/SCPages/who-we-are',
            controller: 'WhoWeAreCntrl'
        })
        .state('infrastructure', {
            url: '/infrastructure',
            templateUrl: '/views/SCPages/infrastructure',
            controller: 'InfrastructureCntrl'
        })
         .state('development-process', {
             url: '/development-process',
             templateUrl: '/views/SCPages/development-process',
             controller: 'DevelopmentProcessCntrl'
         })
        .state('crm-solution', {
            url: '/crm-solution',
            templateUrl: '/views/SCPages/crm-solution',
            controller: 'CrmSolutionCntrl'
        })
         .state('ecommerce-solution', {
             url: '/ecommerce-solution',
             templateUrl: '/views/SCPages/ecommerce-solution',
             controller: 'EcommerceSolutionCntrl'
         })
         .state('hrandjob-portal-solution', {
             url: '/hrandjob-portal-solution',
             templateUrl: '/views/SCPages/hrandjob-portal-solution',
             controller: 'hrandjobPortalSolutionCntrl'
         })
        .state('enterprise-content-management', {
            url: '/enterprise-content-management',
            templateUrl: '/views/SCPages/enterprise-content-management',
            controller: 'enterpriseContentManagementCntrl'
        })
        .state('live-chat-and-support', {
            url: '/live-chat-and-support',
            templateUrl: '/views/SCPages/live-chat-and-support',
            controller: 'liveChatAndSupportCntrl'
        })
        .state('angularjs-development', {
            url: '/angularjs-development',
            templateUrl: '/views/SCPages/angularjs-development',
            controller: 'angularjsDevelopmentCntrl'
        })
        .state('ajax-development', {
            url: '/ajax-development',
            templateUrl: '/views/SCPages/ajax-development',
            controller: 'ajaxDevelopmentCntrl'
        })
        .state('html5-development', {
            url: '/html5-development',
            templateUrl: '/views/SCPages/html5-development',
            controller: 'html5DevelopmentCntrl'
        })
        .state('php-open-source', {
            url: '/php-open-source-development',
            templateUrl: '/views/SCPages/php-open-source-development',
            controller: 'phpOpenSourceCntrl'
        })
        .state('hadoop-development', {
            url: '/hadoop-development',
            templateUrl: '/views/SCPages/hadoop-development',
            controller: 'hadoopDevelopmentCntrl'
        })
        .state('domain-expertise', {
            url: '/domain-expertise',
            templateUrl: '/views/SCPages/domain-expertise',
            controller: 'domainExpertiseCntrl'
        })
        .state('software-product-development', {
            url: '/software-product-development',
            templateUrl: '/views/SCPages/software-product-development',
            controller: 'softwareProductDevelopmentCntrl'
        })
        .state('software-application-migration', {
            url: '/software-application-migration',
            templateUrl: '/views/SCPages/software-application-migration',
            controller: 'softwareApplicationMigrationCntrl'
        })
        .state('software-application-support', {
            url: '/software-application-support',
            templateUrl: '/views/SCPages/software-application-support',
            controller: 'softwareApplicationSupportCntrl'
        })
        .state('web-portal-development', {
            url: '/web-portal-development',
            templateUrl: '/views/SCPages/web-portal-development',
            controller: 'webPortalDevelopmentCntrl'
        })

        .state('responsive-website-development', {
            url: '/responsive-website-development',
            templateUrl: '/views/SCPages/responsive-website-development',
            controller: 'responsiveWebsiteDevelopmentCntrl'
        })
        .state('hire-resource', {
            url: '/hire-resource',
            templateUrl: '/views/SCPages/hire-resource',
            controller: 'hireResourceCntrl'
        })
        .state('bi-services', {
            url: '/bi-services',
            templateUrl: '/views/SCPages/bi-services',
            controller: 'biServicesCntrl'
        })
        .state('testing-qa-services', {
            url: '/testing-qa-services',
            templateUrl: '/views/SCPages/testing-qa-services',
            controller: 'testingQaServicesCntrl'
        })
        .state('offshore-development-center', {
            url: '/offshore-development-center',
            templateUrl: '/views/SCPages/offshore-development-center',
            controller: 'offshoreDevelopmentCenterCntrl'
        })
        .state('mobile-app-development', {
            url: '/mobile-app-development',
            templateUrl: '/views/SCPages/mobile-app-development',
            controller: 'mobileAppDevelopmentCntrl'
        })
        .state('cloud-services', {
            url: '/cloud-services',
            templateUrl: '/views/SCPages/cloud-services',
            controller: 'cloudServicesCntrl'
        })
        .state('fresher-asp-net', {
            url: '/fresher-asp-net',
            templateUrl: '/views/SCPages/fresher-asp-net',
            controller: 'fresherAspnetCntrl'
        })
        .state('fresher-business-development-executive', {
            url: '/fresher-business-development-executive',
            templateUrl: '/views/SCPages/fresher-business-development-executive',
            controller: 'fresherBusinessDevelopmentExecutiveCntrl'
        })
        .state('jr-business-development-executive', {
            url: '/jr-business-development-executive',
            templateUrl: '/views/SCPages/jr-business-development-executive',
            controller: 'jrBusinessDevelopmentExecutiveCntrl'
        })
        .state('sr-business-development-executive', {
            url: '/sr-business-development-executive',
            templateUrl: '/views/SCPages/sr-business-development-executive',
            controller: 'srBusinessDevelopmentExecutiveCntrl'
        })
        .state('sr-sharepoint-developer', {
            url: '/sr-sharepoint-developer',
            templateUrl: '/views/SCPages/sr-sharepoint-developer',
            controller: 'srSharepointDeveloperCntrl'
        })
        .state('sr-java-developer', {
            url: '/sr-java-developer',
            templateUrl: '/views/SCPages/sr-java-developer',
            controller: 'srJavaDeveloperCntrl'
        })
        .state('about-us', {
            url: '/about-us',
            templateUrl: '/views/SCPages/about-us',
            controller: 'AboutUsCtrl'
        })
        .state('proprietorship', {
            url: '/proprietorship',
            templateUrl: '/views/SCPages/proprietorship',
            controller: 'ProprietorshipCtrl'
        })
        .state('partnership', {
            url: '/partnership',
            templateUrl: '/views/SCPages/partnership',
            controller: 'PartnershipCtrl'
        })
        .state('private-limited-company', {
            url: '/private-limited-company',
            templateUrl: '/views/SCPages/private-limited-company',
            controller: 'PrivateLimitedCompanyCtrl'
        })
        .state('llp', {
            url: '/llp',
            templateUrl: '/views/SCPages/llp',
            controller: 'LimitedLiabilityPartnershipCtrl'
        })
        .state('public-limited-company', {
            url: '/public-limited-company',
            templateUrl: '/views/SCPages/public-limited-company',
            controller: 'PublicLimitedCompanyCtrl'
        })
        .state('one-person-company', {
            url: '/one-person-company',
            templateUrl: '/views/SCPages/one-person-company',
            controller: 'OnePersonCompanyCtrl'
        })
        .state('nidhi-company', {
            url: '/nidhi-company',
            templateUrl: '/views/SCPages/nidhi-company',
            controller: 'NidhiCompanyCtrl'
        })
        .state('section-eight-company', {
            url: '/section-eight-company',
            templateUrl: '/views/SCPages/section-eight-company',
            controller: 'Section8CompanyCtrl'
        })
         .state('producer-company', {
             url: '/producer-company',
             templateUrl: '/views/SCPages/producer-company',
             controller: 'ProducerCompanyCtrl'
         })
         .state('indian-subsidiary-for-nri', {
             url: '/indian-subsidiary-for-nri',
             templateUrl: '/views/SCPages/indian-subsidiary-for-nri',
             controller: 'IndianSubsidairyCompanyCtrl'
         })
         //.state('add-director', {
         //    url: '/add-director',
         //    templateUrl: '/views/SCPages/add-director',
         //    controller: 'AddDirectorCtrl'
         //})
         .state('remove-director', {
             url: '/remove-director',
             templateUrl: '/views/SCPages/remove-director',
             controller: 'RemoveDirectorCtrl'
         })
         .state('add-designated-partner', {
             url: '/add-designated-partner',
             templateUrl: '/views/SCPages/add-designated-partner',
             controller: 'AddDesignatedPartnerCtrl'
         })
         .state('remove-designated-partner', {
             url: '/remove-designated-partner',
             templateUrl: '/views/SCPages/remove-designated-partner',
             controller: 'RemoveDesignatedPartnerCtrl'
         })
         .state('change-company-address', {
             url: '/change-company-address',
             templateUrl: '/views/SCPages/change-company-address',
             controller: 'ChangeCompanyAddressCtrl'
         })
        .state('change-company-address-out-state', {
            url: '/change-company-address-out-state',
            templateUrl: '/views/SCPages/change-company-address-out-state',
            controller: 'ChangeCompanyAddressOutStateCtrl'
        })
        .state('change-llp-agreement', {
            url: '/change-llp-agreement',
            templateUrl: '/views/SCPages/change-llp-agreement',
            controller: 'ChangeLLPAgreementCtrl'
        })
        .state('company-name-change', {
            url: '/company-name-change',
            templateUrl: '/views/SCPages/company-name-change',
            controller: 'CompanyNameChangeCtrl'
        })
         .state('partnership-llp', {
             url: '/partnership-llp',
             templateUrl: '/views/SCPages/partnership-llp',
             controller: 'PartnershipToLLPCtrl'
         })
        .state('sole-proprietorship-pvt-ltd', {
            url: '/sole-proprietorship-pvt-ltd',
            templateUrl: '/views/SCPages/sole-proprietorship-pvt-ltd',
            controller: 'SoleProprietorshipToPrivateLimitedCtrl'
        })
        .state('pvtltd-public-ltd-company', {
            url: '/pvtltd-public-ltd-company',
            templateUrl: '/views/SCPages/pvtltd-public-ltd-company',
            controller: 'PrivateLimitedToPublicLimitedCtrl'
        })
        .state('pvtltd-opc', {
            url: '/pvtltd-opc',
            templateUrl: '/views/SCPages/pvtltd-opc',
            controller: 'PrivateLimitedToOnePersonCtrl'
        })
        .state('close-pvtltd-company', {
            url: '/close-pvtltd-company',
            templateUrl: '/views/SCPages/close-pvtltd-company',
            controller: 'ClosePrivateLimitedCompanyCtrl'
        })
        .state('leadership', {
            url: '/leadership',
            templateUrl: '/views/SCPages/leadership',
            controller: 'LeadershipCntrl'
        })
        .state('gst-registration', {
            url: '/gst-registration',
            templateUrl: '/views/SCPages/gst-registration',
            controller: 'GSTRegistrationCtrl'
        })
        .state('gst-registration-for-foreigners', {
            url: '/gst-registration-for-foreigners',
            templateUrl: '/views/SCPages/gst-registration-for-foreigners',
            controller: 'GSTRegistrationForForeignersCtrl'
        })
        .state('temporary-gst-registration', {
            url: '/temporary-gst-registration',
            templateUrl: '/views/SCPages/temporary-gst-registration',
            controller: 'TemporaryGSTRegistrationCtrl'
        })
        .state('professional-tax', {
            url: '/professional-tax',
            templateUrl: '/views/SCPages/professional-tax',
            controller: 'ProfessionalTaxCtrl'
        })
        .state('tan-registration', {
            url: '/tan-registration',
            templateUrl: '/views/SCPages/tan-registration',
            controller: 'TANRegistrationCtrl'
        })
        .state('esi-registration', {
            url: '/esi-registration',
            templateUrl: '/views/SCPages/esi-registration',
            controller: 'ESIRegistrationCtrl'
        })
        .state('msme-registration', {
            url: '/msme-registration',
            templateUrl: '/views/SCPages/msme-registration',
            controller: 'MSMERegistrationCtrl'
        })
        .state('import-export-code', {
            url: '/import-export-code',
            templateUrl: '/views/SCPages/import-export-code',
            controller: 'ImportExportCodeCtrl'
        })
        .state('fssai-registration', {
            url: '/fssai-registration',
            templateUrl: '/views/SCPages/fssai-registration',
            controller: 'FSSAIRegistrationCtrl'
        })
        .state('digital-signature', {
            url: '/digital-signature',
            templateUrl: '/views/SCPages/digital-signature',
            controller: 'DigitalSignatureCtrl'
        })
        .state('trademark-registration', {
            url: '/trademark-registration',
            templateUrl: '/views/SCPages/trademark-registration',
            controller: 'TrademarkRegistrationCtrl'
        })
        .state('trademark-rectification', {
            url: '/trademark-rectification',
            templateUrl: '/views/SCPages/trademark-rectification',
            controller: 'TrademarkRectificationCtrl'
        })
        .state('trademark-objection', {
            url: '/trademark-objection',
            templateUrl: '/views/SCPages/trademark-objection',
            controller: 'TrademarkObjectionCtrl'
        })
        .state('trademark-opposition', {
            url: '/trademark-opposition',
            templateUrl: '/views/SCPages/trademark-opposition',
            controller: 'TrademarkOppositionCtrl'
        })
        .state('trademark-renewal', {
            url: '/trademark-renewal',
            templateUrl: '/views/SCPages/trademark-renewal',
            controller: 'TrademarkRenewalCtrl'
        })
        .state('logo-designing', {
            url: '/logo-designing',
            templateUrl: '/views/SCPages/logo-designing',
            controller: 'LogoDesigningCtrl'
        })
        .state('copyright-registration', {
            url: '/copyright-registration',
            templateUrl: '/views/SCPages/copyright-registration',
            controller: 'CopyrightRegistrationCtrl'
        })
        .state('design-registration', {
            url: '/design-registration',
            templateUrl: '/views/SCPages/design-registration',
            controller: 'DesignRegistrationCtrl'
        })
        .state('provisional-patent', {
            url: '/provisional-patent',
            templateUrl: '/views/SCPages/provisional-patent',
            controller: 'ProvisionalPatentCtrl'
        })
        .state('patent-registration', {
            url: '/patent-registration',
            templateUrl: '/views/SCPages/patent-registration',
            controller: 'PatentRegistrationCtrl'
        })
        .state('income-tax-filing', {
            url: '/income-tax-filing',
            templateUrl: '/views/SCPages/income-tax-filing',
            controller: 'IncomeTaxFilingCtrl'
        })
        .state('gst-filing', {
            url: '/gst-filing',
            templateUrl: '/views/SCPages/gst-filing',
            controller: 'GSTFilingCtrl'
        })
        .state('gst-migration', {
            url: '/gst-migration',
            templateUrl: '/views/SCPages/gst-migration',
            controller: 'GSTMigrationCtrl'
        })
        .state('tds-return', {
            url: '/tds-return',
            templateUrl: '/views/SCPages/tds-return',
            controller: 'TDSReturnCtrl'
        })
        .state('esi-return', {
            url: '/esi-return',
            templateUrl: '/views/SCPages/esi-return',
            controller: 'ESIReturnCtrl'
        })
        .state('proprietorship-compliance', {
            url: '/proprietorship-compliance',
            templateUrl: '/views/SCPages/proprietorship-compliance',
            controller: 'ProprietorshipComplianceCtrl'
        })
        .state('partnership-compliance', {
            url: '/partnership-compliance',
            templateUrl: '/views/SCPages/partnership-compliance',
            controller: 'PartnershipComplianceCtrl'
        })
        .state('llp-compliance', {
            url: '/llp-compliance',
            templateUrl: '/views/SCPages/llp-compliance',
            controller: 'LLPComplianceCtrl'
        })
        .state('pvtltd-company-compliance', {
            url: '/pvtltd-company-compliance',
            templateUrl: '/views/SCPages/pvtltd-company-compliance',
            controller: 'PvtLtdCompanyComplianceCtrl'
        })
        .state('foreign-subsidiary-compliance', {
            url: '/foreign-subsidiary-compliance',
            templateUrl: '/views/SCPages/foreign-subsidiary-compliance',
            controller: 'ForeignSubsidiaryComplianceCtrl'
        })
        .state('legal-notice', {
            url: '/legal-notice',
            templateUrl: '/views/SCPages/legal-notice',
            controller: 'LegalNoticeCtrl'
        })
        .state('non-disclosure-agreement', {
            url: '/non-disclosure-agreement',
            templateUrl: '/views/SCPages/non-disclosure-agreement',
            controller: 'NonDisclosureAgreementCtrl'
        })
        .state('founders-agreement', {
            url: '/founders-agreement',
            templateUrl: '/views/SCPages/founders-agreement',
            controller: 'FoundersAgreementCtrl'
        })
        .state('term-sheet', {
            url: '/term-sheet',
            templateUrl: '/views/SCPages/term-sheet',
            controller: 'TermSheetCtrl'
        })
        .state('shareholders-agreement', {
            url: '/shareholders-agreement',
            templateUrl: '/views/SCPages/shareholders-agreement',
            controller: 'ShareholdersAgreementCtrl'
        })
        .state('share-purchase-agreement', {
            url: '/share-purchase-agreement',
            templateUrl: '/views/SCPages/share-purchase-agreement',
            controller: 'SharePurchaseAgreementCtrl'
        })
        .state('application-development', {
            url: '/application-development',
            templateUrl: '/views/SCPages/application-development',
            controller: 'ApplicationDevelopmentCtrl'
        })
        .state('sharepoint', {
            url: '/sharepoint-development',
            templateUrl: '/views/SCPages/sharepoint-development',
            controller: 'SharepointCtrl'
        })
        .state('java', {
            url: '/java-development',
            templateUrl: '/views/SCPages/java-development',
            controller: 'JavaCtrl'
        })
        .state('biztalk', {
            url: '/biztalk-development',
            templateUrl: '/views/SCPages/biztalk-development',
            controller: 'BiztalkCtrl'
        })
        .state('microsoft-dot-net', {
            url: '/microsoft-dot-net-development',
            templateUrl: '/views/SCPages/microsoft-dot-net-development',
            controller: 'MicrosoftDotNetCtrl'
        })
        .state('nodejs', {
            url: '/nodejs-development',
            templateUrl: '/views/SCPages/nodejs-development',
            controller: 'NodejsCtrl'
        })
        .state('career', {
            url: '/career',
            templateUrl: '/views/SCPages/career',
            controller: 'careerCntrl'
        })
        .state('civil-net', {
            url: '/portfolio-civil-net',
            templateUrl: '/views/SCPages/portfolio/portfolio-civil-net',
            controller: 'civilNetCntrl'
        })
        .state('portfolio-detail', {
            url: '/portfolio-detail/:title',
            templateUrl: '/views/SCPages/GetParticularPortfolioDetail',
            controller: 'ParticularPortfolioController'
        })
        .state('portfolio', {
            url: '/portfolio',
            templateUrl: '/views/SCPages/portfolio-index',
            controller: 'PortfolioController',
            params: {
                isRoot: true
            }
        })
        .state('blog', {
            url: '/blog/:parameter',
            templateUrl: '/views/SCPages/BlogPost',
            controller: 'BlogPostController'
        })
        .state('contact-us', {
            url: '/contact-us',
            templateUrl: '/views/SCPages/contact-us',
            controller: 'ContactUsController'
        })
        .state('pricing-comparison-us', {
            url: '/pricing-comparison-us',
            templateUrl: '/views/SCPages/pricecomparisonus',
            controller: 'PriceComparisonUSCntrl'
        })
        .state('pricing-comparison-aus', {
            url: '/pricing-comparison-aus',
            templateUrl: '/views/SCPages/pricecomparisonaus',
            controller: 'PriceComparisonAUSCntrl'
        })
        .state('pricing-comparison-uk', {
            url: '/pricing-comparison-uk',
            templateUrl: '/views/SCPages/pricecomparisonuk',
            controller: 'PriceComparisonUKCntrl'
        })
        .state('requestquote', {
            url: '/requestquote',
            templateUrl: '/views/SCPages/requestquote',
            controller: 'RequestQuoteController'
        })
          .state('subscribe', {
              url: '/subscribe',
              templateUrl: '/views/SCPages/Subscription',
              controller: 'SubscriptionController'
          })
        .state('otherwise', {
            url: '*path',
            templateUrl: '/views/404',
            controller: 'Error404Ctrl'
        });


    //$locationProvider.html5Mode(true);
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });

}])

// Gets executed after the injector is created and are used to kickstart the application. Only instances and constants
// can be injected here. This is to prevent further system configuration during application run time.

app.run(['$templateCache', '$rootScope', '$state', '$stateParams', '$sce', '$timeout', function ($templateCache, $rootScope, $state, $stateParams, $sce, $timeout) {

    // <ui-view> contains a pre-rendered template for the current view
    // caching it will prevent a round-trip to a server at the first page load
    var view = angular.element('#ui-view');
    $templateCache.put(view.data('tmpl-url'), view.html());

    // Allows to retrieve UI Router state information from inside templates
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
    $rootScope.EMIText = "";
    $rootScope.FromRsText = "";
    $rootScope.layout = {};
    $rootScope.layout.loading = false;

    $rootScope.$on('$routeChangeStart', function () {
        $timeout(function () {
            $rootScope.layout.loading = true;
        });
    });

    $rootScope.$on('$routeChangeSuccess', function (event, toState) {
        $rootScope.layout = toState.layout;
        $rootScope.layout.loading = false;
    });

    $rootScope.$on('$routeChangeError', function () {
        $rootScope.layout.loading = false;
    });


    $rootScope.$on("$locationChangeSuccess", function () {
        jQuery("html, body").animate({ scrollTop: 0 }, 500);
    });

}]);