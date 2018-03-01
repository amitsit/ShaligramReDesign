'use strict';

// Google Analytics Collection APIs Reference:
// https://developers.google.com/analytics/devguides/collection/analyticsjs/



angular.module('app.controllers', [])
    // Path: /
    .controller('HomeCtrl', ['$scope', '$location', '$window', function ($scope, $location, $window) {
        $scope.$root.title = 'Shaligram Infotech Home | Software Development Company | Software Development Company USA';
        $scope.$root.metakeyword = 'Software Development Company, Software Development Company USA , Software Development Company UK, Software Web Portal Development Company UK, Software Web Portal Development Company, Responsive Website Development Company';
        $scope.$root.metadescription = 'Shaligram InfoTech is leading Software Development Company USA. We are offering services like application development, product development, web portal development, responsive web development services.';

        localStorage.setItem("RecentBlogPostList", null);
        localStorage.setItem("BlogPostCategories", null);
        
        
        $scope.$on('$viewContentLoaded', function () {
            $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
        });
    }])
    .controller('SCIndexCtrl', ['$scope', '$location', '$window', function ($scope, $location, $window) {
        $scope.$root.title = 'Shaligram Infotech Home | Software Development Company | Software Development Company USA';
        $scope.$on('$viewContentLoaded', function () {
            $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
        });
    }])
    .controller('InfrastructureCntrl', ['$scope', '$location', '$window', function ($scope, $location, $window) {
        $scope.$root.title = 'Shaligram Infotech Infrastructure | Application Management Service Provider | Application Management Service Provider USA';
        $scope.$root.metakeyword = 'Application Management Service Provider, Application Management Service Provider USA, Application Management Service Provider UK';
        $scope.$root.metadescription = 'Shaligram infotech is leading Application Management Service Provider USA. We are develop the custom application, application maintenance, product development, enterprise application integration, the development of mobile application etc';

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
        $scope.$root.metakeyword = 'CRM Solutions Provider, CRM Solutions Provider USA, CRM Solutions Provider UK';
        $scope.$root.metadescription = 'Shaligram InfoTech is one of the best CRM Solutions Provider UK. Crm solution  category of software that covers a broad set of applications and software designed to support businesses manage customer data and customer interaction';

        $scope.$on('$viewContentLoaded', function () {
            $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
        });
    }])
    .controller('EcommerceSolutionCntrl', ['$scope', '$location', '$window', function ($scope, $location, $window) {
        $scope.$root.title = 'Shaligram Infotech Ecommerce Solution | Ecommerce Solution Provider USA | Ecommerce Solution Provider UK';
        $scope.$root.metakeyword = 'Ecommerce Solutions, Ecommerce Solution Provider USA, Ecommerce Solution Provider UK, Ecommerce Payment Solutions, Ecommerce Payment Solutions USA, Ecommerce Payment Solutions UK';
        $scope.$root.metadescription = 'Shaligram InfoTech is creating E-commerce using Magento, Woo commerce, prestashop and many other platforms. E-commerce features included analytics and reporting, product browsing, catalog browsing, catalog management';

        $scope.$on('$viewContentLoaded', function () {
            $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
        });
    }])
    .controller('hrandjobPortalSolutionCntrl', ['$scope', '$location', '$window', function ($scope, $location, $window) {
        $scope.$root.title = 'Shaligram Infotech HR and Job Portal Solution | HR And Job Portal Solution USA | HR And Job Portal Solution UK';
        $scope.$root.metakeyword = 'HR And Job Portal Solution, HR And Job Portal Solution USA,  HR And Job Portal Solution UK';
        $scope.$root.metadescription = 'Shaligram InfoTech is known for their fantastic work ranging from the management of HR job Portals Solutions to finding appropriate resources to the organized way by which an organization keeps on functioning and gain success speedily';

        $scope.$on('$viewContentLoaded', function () {
            $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
        });
    }])
    .controller('enterpriseContentManagementCntrl', ['$scope', '$location', '$window', function ($scope, $location, $window) {
        $scope.$root.title = 'Shaligram Infotech Enterprise Content Management | Enterprise Content Management Development Company USA';
        $scope.$root.metakeyword = 'Enterprise Content Management Development ,Enterprise Content Management Development Company USA, Enterprise Content Management Development Company UK, Enterprise Content Management Development Company';
        $scope.$root.metadescription = 'Shaligram InfoTech is best Enterprise Content Management Development Company USA. Enterprise content management is term for the technology, plan and technique used to capture, manage, access, integrate, measure and store information';

        $scope.$on('$viewContentLoaded', function () {
            $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
        });
    }])
     .controller('angularjsDevelopmentCntrl', ['$scope', '$location', '$window', '$rootScope', 'localStorageService', function ($scope, $location, $window, $rootScope, localStorageService) {
         $scope.$root.title = 'Shaligram Infotech AngularJS | Software Product Development Company | Software Product Development Company  UK';
         $scope.$root.metakeyword = 'Software Product Development Company, Software Product Development Company  UK, Software Product Development Company  USA';
         $scope.$root.metadescription = 'Shaligram Infotech is eminent Software Product Development Company UK. AngularJS is an open source web application framework maintained by Google and by a community of individual developers and corporations';

         $scope.$root.needToShowTitle = true;
         $rootScope.TechnologyId = 8;
         localStorageService.set('TechnologyId', 8);
         $scope.$on('$viewContentLoaded', function () {
             $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
         });
     }])

    .controller('ajaxDevelopmentCntrl', ['$scope', '$location', '$window', function ($scope, $location, $window) {
        $scope.$root.title = 'Shaligram Infotech AJAX | Custom Software Development Company | Custom Software Development Company UK';
        $scope.$root.metakeyword = 'Custom Software Development Company, Custom Software Development Company UK, Custom Software Development Company USA';
        $scope.$root.metadescription = 'Shaligram InfoTech is best Custom Software Development Company UK. We are offering other services like The Document Object Model (DOM) for dynamic display of and interaction with data, Azure Application Development, Silverlight Application Development';

        $scope.$root.needToShowTitle = true;
        $scope.$on('$viewContentLoaded', function () {
            $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
        });
    }])

    .controller('html5DevelopmentCntrl', ['$scope', '$location', '$window', function ($scope, $location, $window) {
        $scope.$root.title = 'Shaligram Infotech HTML5 | Silverlight Application Development Company | Silverlight Application Development Company USA';
        $scope.$root.metakeyword = 'Silverlight Application Development Company, Silverlight Application Development Company USA, Silverlight Application Development Company UK';
        $scope.$root.metadescription = 'Shaligram InfoTech is Silverlight Application Development Company USA. We are offering services like ASP.NET Web Development, Enterprise Application Development, ASP.NET Web Development';

        $scope.$root.needToShowTitle = true;
        $scope.$on('$viewContentLoaded', function () {
            $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
        });
    }])
     .controller('phpOpenSourceCntrl', ['$scope', '$location', '$window', '$rootScope', 'localStorageService', function ($scope, $location, $window, $rootScope, localStorageService) {
         $scope.$root.title = 'PHP Open Source Project Development | PHP Open Source Project Development Company | PHP Open Source Project Development Company USA';
         $scope.$root.metakeyword = 'PHP Open Source Project Development , PHP Open Source Project Development Company, PHP Open Source Project Development Company USA, PHP Open Source Project Development Company UK';
         $scope.$root.metadescription = 'Shaligram Infoteh is well known PHP Open Source Project Development Company. We are offering php web development, php my sql development, wordpress development, Magento Web Development, php web application development services in India, USA, UK.';

         $scope.$root.needToShowTitle = true;
         $rootScope.TechnologyId = 5;
         localStorageService.set('TechnologyId', 5);
         $scope.$on('$viewContentLoaded', function () {
             $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
         });
     }])

     .controller('hadoopDevelopmentCntrl', ['$scope', '$location', '$window', '$rootScope', 'localStorageService', function ($scope, $location, $window, $rootScope, localStorageService) {
         $scope.$root.title = 'Shaligram Infotech Hadoop | Big Data Application Development |  Hadoop For Enterprise';
         $scope.$root.metakeyword = 'hadoop analytics, hadoop architecture, hadoop api, hadoop aws, hadoop and mapreduce, hadoop and sql, hadoop ambari, hadoop and big data difference, hadoop ecosystem, hadoop big data,  hadoop big data analytics, hadoop big data testing, hadoop big data application, hadoop big data Architecture, big data and hadoop development, hadoop for enterprise, big data application development';
         $scope.$root.metadescription = 'Shaligram InfoTech is a leading global IT consulting and technology services company provides wide range of big data application development hadoop for enterprise and data integration services. We have expertise in processing map reduce, real time analytics spark, query engine hive and impala, resource manager yarn and mesos, distribution cloudera, Horton works, Apache, No Sql hbase, mongo db, data integration flume and sqoop.';

         $scope.$root.needToShowTitle = true;
         $rootScope.TechnologyId = 6;
         localStorageService.set('TechnologyId', 6);

         $scope.$on('$viewContentLoaded', function () {
             $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
         });
     }])

    .controller('domainExpertiseCntrl', ['$scope', '$location', '$window', function ($scope, $location, $window) {
        $scope.$root.title = 'Shaligram Infotech Domain Expertise | Civil And Construction Software Development | Healthcare Software Development Company';
        $scope.$root.metakeyword = 'Civil And Construction Software Development,Healthcare Software Development Company, E-Learning Software Development,Finance And Accounting Software Development,Real Estate Software Development Company';
        $scope.$root.metadescription = 'Shaligram InfoTech is best Civil And Construction Software Development company in USA.Our approach to customized solution development starts with efficiently recognizing the application purpose and business benefit for the client';

        $scope.$on('$viewContentLoaded', function () {
            $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
        });
    }])


    .controller('softwareProductDevelopmentCntrl', ['$scope', '$location', '$window', function ($scope, $location, $window) {
        $scope.$root.title = 'Shaligram Infotech Product Development | Retail ERP Software Development Company | Retail ERP Software Development Company USA';
        $scope.$root.metakeyword = 'Retail ERP Software Development Company, Retail ERP Software Development Company USA, Retail ERP Software Development Company UK';
        $scope.$root.metadescription = 'Shaligram Infotech is leading Retail ERP Software Development Company USA. Retail ERP Software featues robust cross chain reporting, common platform, easily add customization, decision making capability, optimized product for each store.';

        $scope.$on('$viewContentLoaded', function () {
            $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
        });
    }])

    .controller('softwareApplicationMigrationCntrl', ['$scope', '$location', '$window', function ($scope, $location, $window) {
        $scope.$root.title = 'Shaligram Infotech Application Migration & Modernization | Application Migration & Modernization Trends';
        $scope.$root.metakeyword = 'Application Migration & Modernization, Application Migration & Modernization Trends, Application Rationalization, Application Re-engineering.';
        $scope.$root.metadescription = 'Shaligram InfoTech is offering excellent quality of services like Integrates Legacy Systems, software migration service, Application Modernization Assessment, Application Re-engineering, Legacy to .NET Migration, PHP Migration,  Data Migration';

        $scope.$on('$viewContentLoaded', function () {
            $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
        });
    }])

    .controller('softwareApplicationSupportCntrl', ['$scope', '$location', '$window', function ($scope, $location, $window) {
        $scope.$root.title = 'Shaligram Infotech Application Maintenance & Support | Application Maintenance & Support USA | Application Maintenance & Support UK';
        $scope.$root.metakeyword = 'Application Maintenance and Support , Application Maintenance and Support USA , Application Maintenance and Support UK';
        $scope.$root.metadescription = 'Shaligram InfoTech Providing  Application Maintenance and Support  and maintenance are mandatory for the developer company to leverage on the application outcome. We offer other services like Customized web application maintenance, Insurance system management, Troubleshooting and bug fixing.';

        $scope.$on('$viewContentLoaded', function () {
            $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
        });
    }])

    .controller('webPortalDevelopmentCntrl', ['$scope', '$location', '$window', function ($scope, $location, $window) {
        $scope.$root.title = 'Shaligram Infotech Web Portal Development | Web Portal Development Company USA| Web Portal Development Company UK';
        $scope.$root.metakeyword = 'Web Portal Development Company, Web Portal Development Company USA, Web Portal Development Company UK';
        $scope.$root.metadescription = 'Shaligram InfoTech top Web Portal Development Company USA. We are using wide range of platform ASP.NET Web Development, Silverlight Application Development, CS-Cart Development, Java Web Development';

        $scope.$on('$viewContentLoaded', function () {
            $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
        });
    }])

    .controller('responsiveWebsiteDevelopmentCntrl', ['$scope', '$location', '$window', function ($scope, $location, $window) {
        $scope.$root.title = 'Shaligram Infotech Responsive Website Development | Responsive Website Development Company USA| Responsive Website Development Company UK';
        $scope.$root.metakeyword = 'Responsive Website Development Company, Responsive Website Development Company USA, Responsive Website Development Company UK';
        $scope.$root.metadescription = 'Shaligram InfoTech is finest Responsive Website Development Company UK. Shaligram InfoTech offer a large portfolio of responsive solution designs creating great browsing experience to our mobile clients and users';

        $scope.$on('$viewContentLoaded', function () {
            $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
        });
    }])
    .controller('hireResourceCntrl', ['$scope', '$location', '$window', function ($scope, $location, $window) {
        $scope.$root.title = 'Shaligram Infotech Hire Resource | Hire ASP.Net resource | Hire iOS resource | Hire PHP resource USA | Hire SharePoint resource';
        $scope.$root.metakeyword = 'Hire ASP.Net resource, Hire iOS resource, Hire PHP resource USA, Hire SharePoint resource, Hire C#.Net resource USA, Hire WPF resource, Hire WCF resource.';
        $scope.$root.metadescription = 'Shaligram InfoTech Hire ASP.Net resource, Hire iOS resource, Hire PHP resource USA, Hire SharePoint resource, Hire JAVA resource, Hire BizTalk resource, Hire Alfresco resource, Hire Liferay resource, Hire jQeury/AJAX resource USA';

        $scope.$on('$viewContentLoaded', function () {
            $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
        });
    }])
    .controller('biServicesCntrl', ['$scope', '$location', '$window', function ($scope, $location, $window) {
        $scope.$root.title = 'Shaligram Infotech Business Intelligence | Business Intelligence Software Development | Business Intelligence Software Development Company';
        $scope.$root.metakeyword = 'Business Intelligence Software Development, Business Intelligence Software Development Company, Business Intelligence Software Development Company USA, Business Intelligence Software Development Company UK';
        $scope.$root.metadescription = 'Shaligram InfoTech is best Business Intelligence Software Development Company UK and USA. Specialized IT infrastructure such as data warehouses, data marts, and extract transform & load ETL tools are necessary for BI systems deployment and their effective use';

        $scope.$on('$viewContentLoaded', function () {
            $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
        });
    }])
    .controller('testingQaServicesCntrl', ['$scope', '$location', '$window', function ($scope, $location, $window) {
        $scope.$root.title = 'Software Testing | Software Testing Lifecycle | Software Quality Assurance';
        $scope.$root.metakeyword = 'Software Testing , Software Testing Lifecycle, Software Quality Assurance , Software Testing Quality Assurance';
        $scope.$root.metadescription = 'Shaligram Infotech is well known software development company. We follow industry standard software testing methodologies to help our clients in meeting their excellence assurance goals. Our QA specialists are capable in several software testing technologies, tools, platforms';

        $scope.$on('$viewContentLoaded', function () {
            $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
        });
    }])
    .controller('offshoreDevelopmentCenterCntrl', ['$scope', '$location', '$window', function ($scope, $location, $window) {
        $scope.$root.title = 'Offshore Development Center India | Offshore Development Center USA | Offshore Development Center UK';
        $scope.$root.metakeyword = 'Offshore Development Center India, Offshore Development Center USA, Offshore Development Center UK';
        $scope.$root.metadescription = 'Shaligram infotech is one of the best software Offshore Development Center UK, USA and India. Offshore Development Center exclusively designed to help organizations with the perfect infrastructure to deploy large IT projects. ODC ready use it infrastructure.';

        $scope.$on('$viewContentLoaded', function () {
            $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
        });
    }])

    .controller('mobileAppDevelopmentCntrl', ['$scope', '$location', '$window', function ($scope, $location, $window) {
        $scope.$root.title = 'Mobile App Development Company | Mobile App Development Company USA | Mobile App Development Company UK';
        $scope.$root.metakeyword = 'Mobile App Development Company,  Mobile App Development Company USA , Mobile App Development Company UK';
        $scope.$root.metadescription = 'Shaligram Infotech is well known Mobile App Development Company.We included services  ios app development, iphone app development, android app development, smart watch app development .';

        $scope.$on('$viewContentLoaded', function () {
            $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
        });
    }])
    .controller('cloudServicesCntrl', ['$scope', '$location', '$window', function ($scope, $location, $window) {
        $scope.$root.title = 'Cloud Service Provider In India | Cloud Service Provider In USA | Cloud Service Provider In UK';
        $scope.$root.metakeyword = 'Cloud Service Provider In India, Cloud Service Provider In USA, Cloud Service Provider In UK';
        $scope.$root.metadescription = 'Shaligram infotech present Cloud application development services in India, USA, UK and Australia. We have expertise in developing and deploying cloud applications using industry standard tools and technologies, with other on-premise or cloud applications.';

        $scope.$on('$viewContentLoaded', function () {
            $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
        });
    }])
    .controller('LeadershipCntrl', ['$scope', '$location', '$window', function ($scope, $location, $window) {
        $scope.$root.title = 'Shaligram Infotech Leadership | ERP Software Manufacturing Company | ERP Software Manufacturing Company UK';
        $scope.$root.metakeyword = 'ERP Software Manufacturing Company, ERP Software Manufacturing Company UK,ERP Software Manufacturing Company USA';
        $scope.$root.metadescription = 'Shaligram InfoTech ERP Software Manufacturing Company UK. We understand that your project concepts, client data or any other information that you might want to share with us are your intellectual properties and protecting it is mandatory for your company';

        $scope.$on('$viewContentLoaded', function () {
            $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
        });
    }])

    .controller('fresherAspnetCntrl', ['$scope', '$location', '$window', function ($scope, $location, $window) {
        $scope.$root.title = 'Software Development Company - Fresher ASP.NET Job Opportunities - Shaligram InfoTech';
        $scope.$root.metakeyword = 'Junior Java Developer Job,Junior Android Developer Job,Junior iOS Developer Job,Junior Web Designer Job,Fresher Marketing Job,Junior Marketing Job,Fresher SEO Executive Job,Junior SEO Executive Job,Senior Marketing Job,Senior SEO Executive Job,Senior Java Developer Job,Senior Android Developer Job,Senior iOS Developer Job,Senior Web Designer Job,Senior BizTalk Developer Job,Senior SharePoint Developer Job,Senior Dynamic CRM Developer Job';
        $scope.$root.metadescription = 'Shaligram Infotech has one of the best working environments that a lot of tech people desire to work in. Many of them want to work with us and many would support the above lines, who are already working here. A peaceful place is a must for anybody to work well; where they meet their targets, leave the clients satisfied and bring in more and more work due to the progress that they show on each and every tasks that they undertake. We at, Shaligram Infotech have it all! ';

        $scope.$on('$viewContentLoaded', function () {
            $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
        });
    }])

        .controller('fresherBusinessDevelopmentExecutiveCntrl', ['$scope', '$location', '$window', function ($scope, $location, $window) {
            $scope.$root.title = 'Software Development Company - Fresher Business Development Executive Job Opportunities - Shaligram InfoTech';
            $scope.$root.metakeyword = 'Junior Java Developer Job,Junior Android Developer Job,Junior iOS Developer Job,Junior Web Designer Job,Fresher Business Development Job,Junior Business Development Job,Fresher SEO Executive Job,Junior SEO Executive Job,Senior Business Development Job,Senior SEO Executive Job,Senior Java Developer Job,Senior Android Developer Job,Senior iOS Developer Job,Senior Web Designer Job,Senior BizTalk Developer Job,Senior SharePoint Developer Job,Senior Dynamic CRM Developer Job';
            $scope.$root.metadescription = 'Shaligram Infotech has one of the best working environments that a lot of tech people desire to work in. Many of them want to work with us and many would support the above lines, who are already working here. A peaceful place is a must for anybody to work well; where they meet their targets, leave the clients satisfied and bring in more and more work due to the progress that they show on each and every tasks that they undertake. We at, Shaligram Infotech have it all! ';

            $scope.$on('$viewContentLoaded', function () {
                $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
            });
        }])

         .controller('jrBusinessDevelopmentExecutiveCntrl', ['$scope', '$location', '$window', function ($scope, $location, $window) {
             $scope.$root.title = 'Software Development Company - Junior Business Development Executive Job Opportunities - Shaligram InfoTech';
             $scope.$root.metakeyword = 'Junior Java Developer Job,Junior Android Developer Job,Junior iOS Developer Job,Junior Web Designer Job,Fresher Business Development Job,Junior Business Development Job,Fresher SEO Executive Job,Junior SEO Executive Job,Senior Business Development Job,Senior SEO Executive Job,Senior Java Developer Job,Senior Android Developer Job,Senior iOS Developer Job,Senior Web Designer Job,Senior BizTalk Developer Job,Senior SharePoint Developer Job,Senior Dynamic CRM Developer Job';
             $scope.$root.metadescription = 'Shaligram Infotech has one of the best working environments that a lot of tech people desire to work in. Many of them want to work with us and many would support the above lines, who are already working here. A peaceful place is a must for anybody to work well; where they meet their targets, leave the clients satisfied and bring in more and more work due to the progress that they show on each and every tasks that they undertake. We at, Shaligram Infotech have it all! ';

             $scope.$on('$viewContentLoaded', function () {
                 $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
             });
         }])

         .controller('srBusinessDevelopmentExecutiveCntrl', ['$scope', '$location', '$window', function ($scope, $location, $window) {
             $scope.$root.title = 'Software Development Company - Senior Business Development Executive Job Opportunities - Shaligram InfoTech';
             $scope.$root.metakeyword = 'Junior Java Developer Job,Junior Android Developer Job,Junior iOS Developer Job,Junior Web Designer Job,Fresher Business Development Job,Junior Business Development Job,Fresher SEO Executive Job,Junior SEO Executive Job,Senior Business Development Job,Senior SEO Executive Job,Senior Java Developer Job,Senior Android Developer Job,Senior iOS Developer Job,Senior Web Designer Job,Senior BizTalk Developer Job,Senior SharePoint Developer Job,Senior Dynamic CRM Developer Job';
             $scope.$root.metadescription = 'Shaligram Infotech has one of the best working environments that a lot of tech people desire to work in. Many of them want to work with us and many would support the above lines, who are already working here. A peaceful place is a must for anybody to work well; where they meet their targets, leave the clients satisfied and bring in more and more work due to the progress that they show on each and every tasks that they undertake. We at, Shaligram Infotech have it all! ';

             $scope.$on('$viewContentLoaded', function () {
                 $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
             });
         }])

         .controller('srSharepointDeveloperCntrl', ['$scope', '$location', '$window', function ($scope, $location, $window) {
             $scope.$root.title = 'Software Development Company - Senior Sharepoint Developer Job Opportunities - Shaligram InfoTech';
             $scope.$root.metakeyword = 'Junior Java Developer Job,Junior Android Developer Job,Junior iOS Developer Job,Junior Web Designer Job,Fresher Business Development Job,Junior Business Development Job,Fresher SEO Executive Job,Junior SEO Executive Job,Senior Business Development Job,Senior SEO Executive Job,Senior Java Developer Job,Senior Android Developer Job,Senior iOS Developer Job,Senior Web Designer Job,Senior BizTalk Developer Job,Senior SharePoint Developer Job,Senior Dynamic CRM Developer Job';
             $scope.$root.metadescription = 'Shaligram Infotech has one of the best working environments that a lot of tech people desire to work in. Many of them want to work with us and many would support the above lines, who are already working here. A peaceful place is a must for anybody to work well; where they meet their targets, leave the clients satisfied and bring in more and more work due to the progress that they show on each and every tasks that they undertake. We at, Shaligram Infotech have it all! ';

             $scope.$on('$viewContentLoaded', function () {
                 $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
             });
         }])

        .controller('srJavaDeveloperCntrl', ['$scope', '$location', '$window', function ($scope, $location, $window) {
            $scope.$root.title = 'Software Development Company - Senior Java Developer Job Opportunities - Shaligram InfoTech';
            $scope.$root.metakeyword = 'Junior Java Developer Job,Junior Android Developer Job,Junior iOS Developer Job,Junior Web Designer Job,Fresher Business Development Job,Junior Business Development Job,Fresher SEO Executive Job,Junior SEO Executive Job,Senior Business Development Job,Senior SEO Executive Job,Senior Java Developer Job,Senior Android Developer Job,Senior iOS Developer Job,Senior Web Designer Job,Senior BizTalk Developer Job,Senior SharePoint Developer Job,Senior Dynamic CRM Developer Job';
            $scope.$root.metadescription = 'Shaligram Infotech has one of the best working environments that a lot of tech people desire to work in. Many of them want to work with us and many would support the above lines, who are already working here. A peaceful place is a must for anybody to work well; where they meet their targets, leave the clients satisfied and bring in more and more work due to the progress that they show on each and every tasks that they undertake. We at, Shaligram Infotech have it all! ';

            $scope.$on('$viewContentLoaded', function () {
                $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
            });
        }])

        .controller('MicrosoftDotNetCtrl', ['$scope', '$location', '$window', '$rootScope', 'localStorageService', function ($scope, $location, $window, $rootScope, localStorageService) {
            $scope.$root.title = 'Shaligram Infotech Microsoft Dot Net | ASP.NET Web Development | ASP.NET Web Development Company USA | ASP.NET Web Development Company UK';
            $scope.$root.metakeyword = 'ASP.NET Web Development, ASP.NET Web Development Company USA ,ASP.NET Web Development Company UK';
            $scope.$root.metadescription = 'Shaligram InfoTech is well known ASP.NET Web Development Company USA. We are offering other service Azure Application Development, Software Product Development, Windows Application Development';

            $scope.$root.needToShowTitle = true;
            $rootScope.TechnologyId = 1;
            localStorageService.set('TechnologyId', 1);
            $scope.$on('$viewContentLoaded', function () {
                $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
            });
        }])

         .controller('liveChatAndSupportCntrl', ['$scope', '$location', '$window', function ($scope, $location, $window) {
             $scope.$root.title = 'Live Chat and Support Ticket System | Live Chat Support Skype | Live Chat Support For Website';
             $scope.$root.metakeyword = 'Live Chat and Support Ticket System, Live Chat Support Skype, Live Chat Support For Website, online support, live support, live help, ticket system, customer support, livechat, livehelp, help desk, Live Chat Support Skype, Live Chat Support For Website';
             $scope.$root.metadescription = 'Shaligram infotech provide best live chat support for any platform of website. We are providing live chat for website, skype, mobile apps. Unique features of live chat support is custom widgets, triggers, desktop notification, ban visitors, custom pages.';

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
            $scope.$root.title = 'Sharepoint Application Development Company UK  | Sharepoint Application Development Company USA | Sharepoint Application Development Company';
            $scope.$root.metakeyword = 'SharePoint Application , SharePoint Application Development Company, SharePoint Application Development Company UK, SharePoint  Server';
            $scope.$root.metadescription = 'Shaligram InfoTech is SharePoint Application Development Company USA. SharePoint is a web application platform in the Microsoft Office server suite. Many functions that are otherwise separate applications are combined with SharePoint like intranet, extranet';

            $scope.$root.needToShowTitle = true;
            $rootScope.TechnologyId = 2;
            localStorageService.set('TechnologyId', 2);
            $scope.$on('$viewContentLoaded', function () {
                $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
            });
        }])

         .controller('JavaCtrl', ['$scope', '$location', '$window', '$rootScope', 'localStorageService', function ($scope, $location, $window, $rootScope, localStorageService) {
             $scope.$root.title = 'Shaligram Infotech Java | Java Web Development | Java Web Development Company USA';
             $scope.$root.metakeyword = 'Java Web Development , Java Web Development Company USA , Java Software Development ,Java Mobile Development, Java Application Development Company UK';
             $scope.$root.metadescription = 'Shaligram InfoTech is leading Java Web Development Company USA. We are offering services like Java Application Development, Java Software Development, Enterprise Java Development, Java Mobile Development,  Custom Java Development';

             $scope.$root.needToShowTitle = true;
             $rootScope.TechnologyId = 3;
             localStorageService.set('TechnologyId', 3);
             $scope.$on('$viewContentLoaded', function () {
                 $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
             });
         }])

        .controller('NodejsCtrl', ['$scope', '$location', '$window', '$rootScope', 'localStorageService', function ($scope, $location, $window, $rootScope, localStorageService) {
            $scope.$root.title = 'Shaligram Infotech Node Js | Enterprise Application Development | Enterprise Application Development Company USA';
            $scope.$root.metakeyword = 'Enterprise Application Development , Enterprise Application Development Company USA, Enterprise Application Development Company UK';
            $scope.$root.metadescription = 'Shaligram InfoTech is most popular Enterprise Application Development Company USA. Other services we included scalable network applications, E-Commerce, network applications, Enterprise Web Service';

            $scope.$root.needToShowTitle = true;
            $rootScope.TechnologyId = 7;
            localStorageService.set('TechnologyId', 7);
            $scope.$on('$viewContentLoaded', function () {
                $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
            });
        }])

         .controller('CommonPortfolioCntrl', ['$scope', '$location', '$window', '$rootScope', 'localStorageService', function ($scope, $location, $window, $rootScope, localStorageService) {
             $scope.$root.title = 'Shaligram Infotech Portfolio | Company Portal Software Development | Company Portal Software Development Company USA';
             $rootScope.TechnologyId = 0;
             localStorageService.set('TechnologyId', 0);
             $scope.$on('$viewContentLoaded', function () {
                 $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
             });
         }])
        .controller('PriceComparisonUSCntrl', ['$scope', '$location', '$window', '$rootScope', 'localStorageService', function ($scope, $location, $window, $rootScope, localStorageService) {
            $scope.$root.title = 'Price Comparison US';
            $scope.$on('$viewContentLoaded', function () {
                $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
            });
        }])
        .controller('PriceComparisonAUSCntrl', ['$scope', '$location', '$window', '$rootScope', 'localStorageService', function ($scope, $location, $window, $rootScope, localStorageService) {
            $scope.$root.title = 'Price Comparison australia';
            $scope.$on('$viewContentLoaded', function () {
                $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
            });
        }])
        .controller('PriceComparisonUKCntrl', ['$scope', '$location', '$window', '$rootScope', 'localStorageService', function ($scope, $location, $window, $rootScope, localStorageService) {
            $scope.$root.title = 'Price Comparison UK';
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
          $scope.$root.title = "Shaligram Infotech Application Development | Application Development Company | Application Development Company USA | Application Development Company UK";
          $scope.$root.metakeyword = 'Application Development Company,Application Development Company USA,Application Development Company UK';
          $scope.$root.metadescription = 'Shaligram InfoTech is leading Application Development Company UK. We are using wide range of platform to create Application like  ASP.NET Web Development,Silverlight Application Development,Custom Software Development';

          $scope.$on('$viewContentLoaded', function () {
              $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
          });
      }])
    .controller('WhoWeAreCntrl', ['$scope', '$location', '$window', '$rootScope', function ($scope, $location, $window, $rootScope) {
        $scope.$root.title = "Shaligram Infotech About Company | Commercial Software Product Development | Commercial Software Product Development Company";
        $scope.$root.metakeyword = 'Commercial Software Product Development, Commercial Software Product Development Company, Commercial Software Product Development Company USA';
        $scope.$root.metadescription = 'Shaligram InfoTech is Commercial Software Product Development Company in USA. Our continuous improvement processes are focused on optimizing skills of our people on the latest tools, technologies, frameworks and wide range of platforms';

        $scope.$on('$viewContentLoaded', function () {
            $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
        });
    }])

    .controller('careerCntrl', ['$scope', '$location', '$window', '$rootScope', function ($scope, $location, $window, $rootScope) {
        $scope.$root.title = "Shaligram Infotech Career | Career Objective | Career | Current Job Opening";
        $scope.$root.metakeyword = 'Career Objective,Careers,Current Job Opening Senior Android Developer,Current Job Opening Senior Business Development Executive,Current Job Opening Junior Web Designer';
        $scope.$root.metadescription = 'In Shaligram Infotech  Current Job Opening is Junior Business Development Executive, Junior Web Designer, Senior Business Development Executive, Senior Java Developer, Senior Android Developer, Fresher Business Development Executive';

        $scope.$on('$viewContentLoaded', function () {
            $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
        });
    }])
    .controller('DevelopmentProcessCntrl', ['$scope', '$location', '$window', '$rootScope', function ($scope, $location, $window, $rootScope) {
        $scope.$root.title = "Shaligram Infotech Development Process | Embedded Software Development | Embedded Software Development Company USA";
        $scope.$root.metakeyword = 'Embedded Software Development, Embedded Software Development Company USA, Embedded Software Development Company UK';
        $scope.$root.metadescription = 'Shaligram InfoTech is Embedded Software Development Company USA. Agile development process is usually suggested for the kind of projects mostly product development  with rapidly changing requirements during SDLC';

        $scope.$on('$viewContentLoaded', function () {
            $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
        });
    }])
    .controller('BiztalkCtrl', ['$scope', '$location', '$window', '$rootScope', function ($scope, $location, $window, $rootScope) {
        $scope.$root.title = "Shaligram Infotech Biztalk | Biztalk Server 2013 R2 | Biztalk Server 2013 R2 Architecture | Busssiness Rule Engine";
        $scope.$root.metakeyword = 'Biztalk Server 2013 R2, Biztalk Server 2013 R2 Architecture, Business Rule Engine, Biztalk Server, BRE, BAM, Business Activity Monitoring, SSO, Single Sign-On, SWIFT, EDI, EDI & B2B, HIPAA, B2B, Rosettanet, HL7, Orchestration';
        $scope.$root.metadescription = 'Biztalk Server 2013 R2  is an amazing source via which companies integrate and manage automated businesses by exchanging business documents like purchase orders and invoices between different applications, within and even across organizational boundaries'

        $scope.$root.needToShowTitle = true;
        $scope.$on('$viewContentLoaded', function () {
            $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
        });
    }])
      .controller('CommonImagesController', ['$scope', '$location', '$window', '$rootScope', '$http', function ($scope, $location, $window, $rootScope, $http) {
          $scope.GetFilesList = function (folderPath) {
              $scope.FolderPath = folderPath;
              $http.get("ShaligramInfotechAPI/api/CommonApi/GetFiles?folderPath=" + folderPath)
                             .then(function (response) {
                                 $scope.GetList = response.data;
                             });
          }
      }]);


