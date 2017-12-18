'use strict';

// Declares how the application should be bootstrapped. See: http://docs.angularjs.org/guide/module
angular.module('app', ['toastr','ui.router', 'app.filters', 'app.services', 'app.directives', 'app.controllers'])
//angular.module('app', ['ngAnimate', 'toastr'])

    // Gets executed during the provider registrations and configuration phase. Only providers and constants can be
    // injected here. This is to prevent accidental instantiation of services before they have been fully configured.
    .config(['$stateProvider', '$locationProvider', function ($stateProvider, $locationProvider) {

        // UI States, URL Routing & Mapping. For more info see: https://github.com/angular-ui/ui-router
        // ------------------------------------------------------------------------------------------------------------

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
             .state('about-us', {
                 url: '/about-us',
                 templateUrl: '/views/SCPages/about-us',
                 controller: 'AboutUsCtrl'
             })
            .state('contact-us', {
                url: '/contact-us',
                templateUrl: '/views/SCPages/contact-us',
                controller: 'ContactUsCtrl'
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
             .state('add-director', {
                 url: '/add-director',
                 templateUrl: '/views/SCPages/add-director',
                 controller: 'AddDirectorCtrl'
             })
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
             .state('close-llp', {
                 url: '/close-llp',
                 templateUrl: '/views/SCPages/close-llp',
                 controller: 'CloseYourLLPCtrl'
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
    .run(['$templateCache', '$rootScope', '$state', '$stateParams', function ($templateCache, $rootScope, $state, $stateParams) {

        // <ui-view> contains a pre-rendered template for the current view
        // caching it will prevent a round-trip to a server at the first page load
        var view = angular.element('#ui-view');
        $templateCache.put(view.data('tmpl-url'), view.html());

        // Allows to retrieve UI Router state information from inside templates
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
        $rootScope.EMIText = "";
        $rootScope.FromRsText = "";

        $rootScope.$on('$stateChangeSuccess', function (event, toState) {

            // Sets the layout name, which can be used to display different layouts (header, footer etc.)
            // based on which page the user is located
            $rootScope.layout = toState.layout;
        });
    }]);