// --------------------------------------------------------------------------------------------------------------------
// <copyright file="DefaultRouteHandler.cs" company="Microsoft">
//   Copyright © 2017 Microsoft
// </copyright>
// --------------------------------------------------------------------------------------------------------------------

namespace App.ShaligramInfotech.Routing
{
    using Controller;
    using System;
    using System.Web;
    using System.Web.Routing;
    using System.Web.WebPages;

    public class DefaultRouteHandler : IRouteHandler, System.Web.SessionState.IRequiresSessionState
    {
        public IHttpHandler GetHttpHandler(RequestContext requestContext)
        {
            var filePath = requestContext.HttpContext.Request.AppRelativeCurrentExecutionFilePath;

           // var path = ((System.Web.HttpRequestWrapper)((System.Web.HttpContextWrapper)requestContext.HttpContext).Request).Path;
            var path = HttpContext.Current.Request.CurrentExecutionFilePath.ToString();
            if (("/{ { FolderPath} }/{ { name} }").Trim() != path.Trim())
            {

                switch (path)
                {

                    case "/views/SCPages/SCIndex":
                    case "/":
                        MetaTagsList.metakeyword = "Software Development Company, Software Development Company USA , Software Development Company UK, Software Web Portal Development Company UK, Software Web Portal Development Company, Responsive Website Development Company";
                        MetaTagsList.metadescription = "Shaligram InfoTech is leading Software Development Company USA. We are offering services like application development, product development, web portal development, responsive web development services.";
                        break;

                    //case "/views/about":
                    //    MetaTagsList.metakeyword = " ";
                    //    MetaTagsList.metadescription = " ";
                    //    break;

                    //case "/views/login":
                    //    MetaTagsList.metakeyword = " ";
                    //    MetaTagsList.metadescription = " ";
                    //    break;

                    //case "/SCIndex":
                    //    MetaTagsList.metakeyword = " ";
                    //    MetaTagsList.metadescription = " ";
                    //    break;

                    case "/views/SCPages/who-we-are":
                    case "/who-we-are":
                        MetaTagsList.metakeyword = "Commercial Software Product Development, Commercial Software Product Development Company, Commercial Software Product Development Company USA";
                        MetaTagsList.metadescription = "Shaligram InfoTech is Commercial Software Product Development Company in USA. Our continuous improvement processes are focused on optimizing skills of our people on the latest tools, technologies, frameworks and wide range of platforms";
                        break;

                    case "/views/SCPages/infrastructure":
                    case "/infrastructure":
                        MetaTagsList.metakeyword = "Application Management Service Provider, Application Management Service Provider USA, Application Management Service Provider UK";
                        MetaTagsList.metadescription = "Shaligram infotech is leading Application Management Service Provider USA. We are develop the custom application, application maintenance, product development, enterprise application integration, the development of mobile application etc";
                        break;

                    //case "/views/SCPages/development-process":
                    //    MetaTagsList.metakeyword = " ";
                    //    MetaTagsList.metadescription = " ";
                    //    break;

                    case "/views/SCPages/crm-solution":
                    case "/crm-solution":
                        MetaTagsList.metakeyword = "CRM Solutions Provider, CRM Solutions Provider USA, CRM Solutions Provider UK";
                        MetaTagsList.metadescription = "Shaligram InfoTech is one of the best CRM Solutions Provider UK. Crm solution  category of software that covers a broad set of applications and software designed to support businesses manage customer data and customer interaction";
                        break;

                    case "/views/SCPages/ecommerce-solution":
                    case "/ecommerce-solution":
                        MetaTagsList.metakeyword = "Ecommerce Solutions, Ecommerce Solution Provider USA, Ecommerce Solution Provider UK, Ecommerce Payment Solutions, Ecommerce Payment Solutions USA, Ecommerce Payment Solutions UK";
                        MetaTagsList.metadescription = "Shaligram InfoTech is creating E-commerce using Magento, Woo commerce, prestashop and many other platforms. E-commerce features included analytics and reporting, product browsing, catalog browsing, catalog management";
                        break;

                    case "/views/SCPages/hrandjob-portal-solution":
                    case "/hrandjob-portal-solution":
                        MetaTagsList.metakeyword = "HR And Job Portal Solution, HR And Job Portal Solution USA,  HR And Job Portal Solution UK";
                        MetaTagsList.metadescription = "Shaligram InfoTech is known for their fantastic work ranging from the management of HR job Portals Solutions to finding appropriate resources to the organized way by which an organization keeps on functioning and gain success speedily";
                        break;

                    case "/views/SCPages/enterprise-content-management":
                    case "/enterprise-content-management":
                        MetaTagsList.metakeyword = "Enterprise Content Management Development ,Enterprise Content Management Development Company USA, Enterprise Content Management Development Company UK, Enterprise Content Management Development Company";
                        MetaTagsList.metadescription = "Shaligram InfoTech is best Enterprise Content Management Development Company USA. Enterprise content management is term for the technology, plan and technique used to capture, manage, access, integrate, measure and store information";
                        break;

                    case "/views/SCPages/live-chat-and-support":
                    case "/live-chat-and-support":
                        MetaTagsList.metakeyword = "Live Chat and Support Ticket System, Live Chat Support Skype, Live Chat Support For Website, online support, live support, live help, ticket system, customer support, livechat, livehelp, help desk, Live Chat Support Skype, Live Chat Support For Website";
                        MetaTagsList.metadescription = "Shaligram infotech provide best live chat support for any platform of website. We are providing live chat for website, skype, mobile apps. Unique features of live chat support is custom widgets, triggers, desktop notification, ban visitors, custom pages.";
                        break;

                    case "/views/SCPages/angularjs-development":
                    case "/angularjs-development":
                        MetaTagsList.metakeyword = "Software Product Development Company, Software Product Development Company  UK, Software Product Development Company  USA";
                        MetaTagsList.metadescription = "Shaligram Infotech is eminent Software Product Development Company UK. AngularJS is an open source web application framework maintained by Google and by a community of individual developers and corporations";
                        break;

                    case "/views/SCPages/ajax-development":
                    case "/ajax-development":
                        MetaTagsList.metakeyword = "Custom Software Development Company, Custom Software Development Company UK, Custom Software Development Company USA";
                        MetaTagsList.metadescription = "Shaligram InfoTech is best Custom Software Development Company UK. We are offering other services like The Document Object Model (DOM) for dynamic display of and interaction with data, Azure Application Development, Silverlight Application Development";
                        break;

                    case "/views/SCPages/html5-development":
                    case "/html5-development":
                        MetaTagsList.metakeyword = "Silverlight Application Development Company, Silverlight Application Development Company USA, Silverlight Application Development Company UK";
                        MetaTagsList.metadescription = "Shaligram InfoTech is Silverlight Application Development Company USA. We are offering services like ASP.NET Web Development, Enterprise Application Development, ASP.NET Web Development";
                        break;

                    case "/views/SCPages/php-open-source-development":
                    case "/php-open-source-development":
                        MetaTagsList.metakeyword = "PHP Open Source Project Development , PHP Open Source Project Development Company, PHP Open Source Project Development Company USA, PHP Open Source Project Development Company UK";
                        MetaTagsList.metadescription = "Shaligram Infoteh is well known PHP Open Source Project Development Company. We are offering php web development, php my sql development, wordpress development, Magento Web Development, php web application development services in India, USA, UK.";
                        break;

                    case "/views/SCPages/hadoop-development":
                    case "/hadoop-development":
                        MetaTagsList.metakeyword = "hadoop analytics, hadoop architecture, hadoop api, hadoop aws, hadoop and mapreduce, hadoop and sql, hadoop ambari, hadoop and big data difference, hadoop ecosystem, hadoop big data,  hadoop big data analytics, hadoop big data testing, hadoop big data application, hadoop big data Architecture, big data and hadoop development, hadoop for enterprise, big data application development";
                        MetaTagsList.metadescription = "Shaligram InfoTech is a leading global IT consulting and technology services company provides wide range of big data application development hadoop for enterprise and data integration services. We have expertise in processing map reduce, real time analytics spark, query engine hive and impala, resource manager yarn and mesos, distribution cloudera, Horton works, Apache, No Sql hbase, mongo db, data integration flume and sqoop.";
                        break;

                    case "/views/SCPages/domain-expertise":
                    case "/domain-expertise":
                        MetaTagsList.metakeyword = "Civil And Construction Software Development,Healthcare Software Development Company, E-Learning Software Development,Finance And Accounting Software Development,Real Estate Software Development Company";
                        MetaTagsList.metadescription = "Shaligram InfoTech is best Civil And Construction Software Development company in USA.Our approach to customized solution development starts with efficiently recognizing the application purpose and business benefit for the client";
                        break;

                    case "/views/SCPages/software-product-development":
                    case "/software-product-development":
                        MetaTagsList.metakeyword = "Retail ERP Software Development Company, Retail ERP Software Development Company USA, Retail ERP Software Development Company UK";
                        MetaTagsList.metadescription = "Shaligram Infotech is leading Retail ERP Software Development Company USA. Retail ERP Software featues robust cross chain reporting, common platform, easily add customization, decision making capability, optimized product for each store.";
                        break;

                    case "/views/SCPages/software-application-migration":
                    case "/software-application-migration":
                        MetaTagsList.metakeyword = "Application Migration & Modernization, Application Migration & Modernization Trends, Application Rationalization, Application Re-engineering.";
                        MetaTagsList.metadescription = "Shaligram InfoTech is offering excellent quality of services like Integrates Legacy Systems, software migration service, Application Modernization Assessment, Application Re-engineering, Legacy to .NET Migration, PHP Migration,  Data Migration";
                        break;

                    case "/views/SCPages/software-application-support":
                    case "/software-application-support":
                        MetaTagsList.metakeyword = "Application Maintenance and Support , Application Maintenance and Support USA , Application Maintenance and Support UK";
                        MetaTagsList.metadescription = "Shaligram InfoTech Providing  Application Maintenance and Support  and maintenance are mandatory for the developer company to leverage on the application outcome. We offer other services like Customized web application maintenance, Insurance system management, Troubleshooting and bug fixing.";
                        break;

                    case "/views/SCPages/web-portal-development":
                    case "/web-portal-development":
                        MetaTagsList.metakeyword = "Web Portal Development Company, Web Portal Development Company USA, Web Portal Development Company UK";
                        MetaTagsList.metadescription = "Shaligram InfoTech top Web Portal Development Company USA. We are using wide range of platform ASP.NET Web Development, Silverlight Application Development, CS-Cart Development, Java Web Development";
                        break;

                    case "/views/SCPages/responsive-website-development":
                    case "/responsive-website-development":
                        MetaTagsList.metakeyword = "Responsive Website Development Company, Responsive Website Development Company USA, Responsive Website Development Company UK";
                        MetaTagsList.metadescription = "Shaligram InfoTech is finest Responsive Website Development Company UK. Shaligram InfoTech offer a large portfolio of responsive solution designs creating great browsing experience to our mobile clients and users";
                        break;

                    case "/views/SCPages/hire-resource":
                    case "/hire-resource":
                        MetaTagsList.metakeyword = "Hire ASP.Net resource, Hire iOS resource, Hire PHP resource USA, Hire SharePoint resource, Hire C#.Net resource USA, Hire WPF resource, Hire WCF resource.";
                        MetaTagsList.metadescription = "Shaligram InfoTech Hire ASP.Net resource, Hire iOS resource, Hire PHP resource USA, Hire SharePoint resource, Hire JAVA resource, Hire BizTalk resource, Hire Alfresco resource, Hire Liferay resource, Hire jQeury/AJAX resource USA";
                        break;

                    case "/views/SCPages/bi-services":
                    case "/bi-services":
                        MetaTagsList.metakeyword = "Business Intelligence Software Development, Business Intelligence Software Development Company, Business Intelligence Software Development Company USA, Business Intelligence Software Development Company UK";
                        MetaTagsList.metadescription = "Shaligram InfoTech is best Business Intelligence Software Development Company UK and USA. Specialized IT infrastructure such as data warehouses, data marts, and extract transform & load ETL tools are necessary for BI systems deployment and their effective use";
                        break;

                    case "/views/SCPages/testing-qa-services":
                    case "/testing-qa-services":
                        MetaTagsList.metakeyword = "Software Testing , Software Testing Lifecycle, Software Quality Assurance , Software Testing Quality Assurance";
                        MetaTagsList.metadescription = "Shaligram Infotech is well known software development company. We follow industry standard software testing methodologies to help our clients in meeting their excellence assurance goals. Our QA specialists are capable in several software testing technologies, tools, platforms";
                        break;

                    case "/views/SCPages/offshore-development-center":
                    case "/offshore-development-center":
                        MetaTagsList.metakeyword = "Offshore Development Center India, Offshore Development Center USA, Offshore Development Center UK";
                        MetaTagsList.metadescription = "Shaligram infotech is one of the best software Offshore Development Center UK, USA and India. Offshore Development Center exclusively designed to help organizations with the perfect infrastructure to deploy large IT projects. ODC ready use it infrastructure.";
                        break;

                    case "/views/SCPages/mobile-app-development":
                    case "/mobile-app-development":
                        MetaTagsList.metakeyword = "Mobile App Development Company,  Mobile App Development Company USA , Mobile App Development Company UK";
                        MetaTagsList.metadescription = "Shaligram Infotech is well known Mobile App Development Company.We included services  ios app development, iphone app development, android app development, smart watch app development .";
                        break;

                    case "/views/SCPages/cloud-services":
                    case "/cloud-services":
                        MetaTagsList.metakeyword = "Cloud Service Provider In India, Cloud Service Provider In USA, Cloud Service Provider In UK";
                        MetaTagsList.metadescription = "Shaligram infotech present Cloud application development services in India, USA, UK and Australia. We have expertise in developing and deploying cloud applications using industry standard tools and technologies, with other on-premise or cloud applications.";
                        break;

                    case "/views/SCPages/fresher-asp-net":
                    case "/fresher-asp-net":
                        MetaTagsList.metakeyword = "Junior Java Developer Job,Junior Android Developer Job,Junior iOS Developer Job,Junior Web Designer Job,Fresher Marketing Job,Junior Marketing Job,Fresher SEO Executive Job,Junior SEO Executive Job,Senior Marketing Job,Senior SEO Executive Job,Senior Java Developer Job,Senior Android Developer Job,Senior iOS Developer Job,Senior Web Designer Job,Senior BizTalk Developer Job,Senior SharePoint Developer Job,Senior Dynamic CRM Developer Job";
                        MetaTagsList.metadescription = "Shaligram Infotech has one of the best working environments that a lot of tech people desire to work in. Many of them want to work with us and many would support the above lines, who are already working here. A peaceful place is a must for anybody to work well; where they meet their targets, leave the clients satisfied and bring in more and more work due to the progress that they show on each and every tasks that they undertake. We at, Shaligram Infotech have it all! ";
                        break;

                    case "/views/SCPages/fresher-business-development-executive":
                    case "/fresher-business-development-executive":
                        MetaTagsList.metakeyword = "Junior Java Developer Job,Junior Android Developer Job,Junior iOS Developer Job,Junior Web Designer Job,Fresher Business Development Job,Junior Business Development Job,Fresher SEO Executive Job,Junior SEO Executive Job,Senior Business Development Job,Senior SEO Executive Job,Senior Java Developer Job,Senior Android Developer Job,Senior iOS Developer Job,Senior Web Designer Job,Senior BizTalk Developer Job,Senior SharePoint Developer Job,Senior Dynamic CRM Developer Job";
                        MetaTagsList.metadescription = "Shaligram Infotech has one of the best working environments that a lot of tech people desire to work in. Many of them want to work with us and many would support the above lines, who are already working here. A peaceful place is a must for anybody to work well; where they meet their targets, leave the clients satisfied and bring in more and more work due to the progress that they show on each and every tasks that they undertake. We at, Shaligram Infotech have it all! ";
                        break;

                    case "/views/SCPages/jr-business-development-executive":
                    case "/jr-business-development-executive":
                        MetaTagsList.metakeyword = "Junior Java Developer Job,Junior Android Developer Job,Junior iOS Developer Job,Junior Web Designer Job,Fresher Business Development Job,Junior Business Development Job,Fresher SEO Executive Job,Junior SEO Executive Job,Senior Business Development Job,Senior SEO Executive Job,Senior Java Developer Job,Senior Android Developer Job,Senior iOS Developer Job,Senior Web Designer Job,Senior BizTalk Developer Job,Senior SharePoint Developer Job,Senior Dynamic CRM Developer Job";
                        MetaTagsList.metadescription = "Shaligram Infotech has one of the best working environments that a lot of tech people desire to work in. Many of them want to work with us and many would support the above lines, who are already working here. A peaceful place is a must for anybody to work well; where they meet their targets, leave the clients satisfied and bring in more and more work due to the progress that they show on each and every tasks that they undertake. We at, Shaligram Infotech have it all! ";
                        break;

                    case "/views/SCPages/sr-business-development-executive":
                    case "/sr-business-development-executive":
                        MetaTagsList.metakeyword = "Junior Java Developer Job,Junior Android Developer Job,Junior iOS Developer Job,Junior Web Designer Job,Fresher Business Development Job,Junior Business Development Job,Fresher SEO Executive Job,Junior SEO Executive Job,Senior Business Development Job,Senior SEO Executive Job,Senior Java Developer Job,Senior Android Developer Job,Senior iOS Developer Job,Senior Web Designer Job,Senior BizTalk Developer Job,Senior SharePoint Developer Job,Senior Dynamic CRM Developer Job";
                        MetaTagsList.metadescription = "Shaligram Infotech has one of the best working environments that a lot of tech people desire to work in. Many of them want to work with us and many would support the above lines, who are already working here. A peaceful place is a must for anybody to work well; where they meet their targets, leave the clients satisfied and bring in more and more work due to the progress that they show on each and every tasks that they undertake. We at, Shaligram Infotech have it all! ";
                        break;

                    case "/views/SCPages/sr-sharepoint-developer":
                    case "/sr-sharepoint-developer":
                        MetaTagsList.metakeyword = "Junior Java Developer Job,Junior Android Developer Job,Junior iOS Developer Job,Junior Web Designer Job,Fresher Business Development Job,Junior Business Development Job,Fresher SEO Executive Job,Junior SEO Executive Job,Senior Business Development Job,Senior SEO Executive Job,Senior Java Developer Job,Senior Android Developer Job,Senior iOS Developer Job,Senior Web Designer Job,Senior BizTalk Developer Job,Senior SharePoint Developer Job,Senior Dynamic CRM Developer Job";
                        MetaTagsList.metadescription = "Shaligram Infotech has one of the best working environments that a lot of tech people desire to work in. Many of them want to work with us and many would support the above lines, who are already working here. A peaceful place is a must for anybody to work well; where they meet their targets, leave the clients satisfied and bring in more and more work due to the progress that they show on each and every tasks that they undertake. We at, Shaligram Infotech have it all! ";
                        break;

                    case "/views/SCPages/sr-java-developer":
                    case "/sr-java-developer":
                        MetaTagsList.metakeyword = "Junior Java Developer Job,Junior Android Developer Job,Junior iOS Developer Job,Junior Web Designer Job,Fresher Business Development Job,Junior Business Development Job,Fresher SEO Executive Job,Junior SEO Executive Job,Senior Business Development Job,Senior SEO Executive Job,Senior Java Developer Job,Senior Android Developer Job,Senior iOS Developer Job,Senior Web Designer Job,Senior BizTalk Developer Job,Senior SharePoint Developer Job,Senior Dynamic CRM Developer Job";
                        MetaTagsList.metadescription = "Shaligram Infotech has one of the best working environments that a lot of tech people desire to work in. Many of them want to work with us and many would support the above lines, who are already working here. A peaceful place is a must for anybody to work well; where they meet their targets, leave the clients satisfied and bring in more and more work due to the progress that they show on each and every tasks that they undertake. We at, Shaligram Infotech have it all! ";
                        break;

                    //case "/views/SCPages/about-us":
                    //    MetaTagsList.metakeyword = " ";
                    //    MetaTagsList.metadescription = " ";
                    //    break;

                    //case "/views/SCPages/proprietorship":
                    //    MetaTagsList.metakeyword = " ";
                    //    MetaTagsList.metadescription = " ";
                    //    break;

                    //case "/views/SCPages/partnership":
                    //    MetaTagsList.metakeyword = " ";
                    //    MetaTagsList.metadescription = " ";
                    //    break;

                    //case "/views/SCPages/private-limited-company":
                    //    MetaTagsList.metakeyword = " ";
                    //    MetaTagsList.metadescription = " ";
                    //    break;

                    //case "/views/SCPages/llp":
                    //    MetaTagsList.metakeyword = " ";
                    //    MetaTagsList.metadescription = " ";
                    //    break;

                    //case "/views/SCPages/public-limited-company":
                    //    MetaTagsList.metakeyword = " ";
                    //    MetaTagsList.metadescription = " ";
                    //    break;

                    //case "/views/SCPages/one-person-company":
                    //    MetaTagsList.metakeyword = " ";
                    //    MetaTagsList.metadescription = " ";
                    //    break;

                    //case "/views/SCPages/nidhi-company":
                    //    MetaTagsList.metakeyword = " ";
                    //    MetaTagsList.metadescription = " ";
                    //    break;

                    //case "/views/SCPages/section-eight-company":
                    //    MetaTagsList.metakeyword = " ";
                    //    MetaTagsList.metadescription = " ";
                    //    break;

                    //case "/views/SCPages/producer-company":
                    //    MetaTagsList.metakeyword = " ";
                    //    MetaTagsList.metadescription = " ";
                    //    break;

                    //case "/views/SCPages/indian-subsidiary-for-nri":
                    //    MetaTagsList.metakeyword = " ";
                    //    MetaTagsList.metadescription = " ";
                    //    break;

                    //case "/views/SCPages/remove-director":
                    //    MetaTagsList.metakeyword = " ";
                    //    MetaTagsList.metadescription = " ";
                    //    break;

                    //case "/views/SCPages/add-designated-partner":
                    //    MetaTagsList.metakeyword = " ";
                    //    MetaTagsList.metadescription = " ";
                    //    break;

                    //case "/views/SCPages/remove-designated-partner":
                    //    MetaTagsList.metakeyword = " ";
                    //    MetaTagsList.metadescription = " ";
                    //    break;

                    //case "/views/SCPages/change-company-address":
                    //    MetaTagsList.metakeyword = " ";
                    //    MetaTagsList.metadescription = " ";
                    //    break;

                    //case "/views/SCPages/change-company-address-out-state":
                    //    MetaTagsList.metakeyword = " ";
                    //    MetaTagsList.metadescription = " ";
                    //    break;

                    //case "/views/SCPages/change-llp-agreement":
                    //    MetaTagsList.metakeyword = " ";
                    //    MetaTagsList.metadescription = " ";
                    //    break;

                    //case "/views/SCPages/company-name-change":
                    //    MetaTagsList.metakeyword = " ";
                    //    MetaTagsList.metadescription = " ";
                    //    break;

                    //case "/views/SCPages/partnership-llp":
                    //    MetaTagsList.metakeyword = " ";
                    //    MetaTagsList.metadescription = " ";
                    //    break;

                    //case "/views/SCPages/sole-proprietorship-pvt-ltd":
                    //    MetaTagsList.metakeyword = " ";
                    //    MetaTagsList.metadescription = " ";
                    //    break;

                    //case "/views/SCPages/pvtltd-public-ltd-company":
                    //    MetaTagsList.metakeyword = " ";
                    //    MetaTagsList.metadescription = " ";
                    //    break;

                    //case "/views/SCPages/pvtltd-opc":
                    //    MetaTagsList.metakeyword = " ";
                    //    MetaTagsList.metadescription = " ";
                    //    break;

                    //case "/views/SCPages/close-pvtltd-company":
                    //    MetaTagsList.metakeyword = " ";
                    //    MetaTagsList.metadescription = " ";
                    //    break;

                    case "/views/SCPages/leadership":
                    case "/leadership":
                        MetaTagsList.metakeyword = "ERP Software Manufacturing Company, ERP Software Manufacturing Company UK,ERP Software Manufacturing Company USA";
                        MetaTagsList.metadescription = "Shaligram InfoTech ERP Software Manufacturing Company UK. We understand that your project concepts, client data or any other information that you might want to share with us are your intellectual properties and protecting it is mandatory for your company";
                        break;

                    //case "/views/SCPages/gst-registration":
                    //    MetaTagsList.metakeyword = " ";
                    //    MetaTagsList.metadescription = " ";
                    //    break;

                    //case "/views/SCPages/gst-registration-for-foreigners":
                    //    MetaTagsList.metakeyword = " ";
                    //    MetaTagsList.metadescription = " ";
                    //    break;

                    //case "/views/SCPages/temporary-gst-registration":
                    //    MetaTagsList.metakeyword = " ";
                    //    MetaTagsList.metadescription = " ";
                    //    break;

                    //case "/views/SCPages/professional-tax":
                    //    MetaTagsList.metakeyword = " ";
                    //    MetaTagsList.metadescription = " ";
                    //    break;

                    //case "/views/SCPages/tan-registration":
                    //    MetaTagsList.metakeyword = " ";
                    //    MetaTagsList.metadescription = " ";
                    //    break;

                    //case "/views/SCPages/esi-registration":
                    //    MetaTagsList.metakeyword = " ";
                    //    MetaTagsList.metadescription = " ";
                    //    break;

                    //case "/views/SCPages/msme-registration":
                    //    MetaTagsList.metakeyword = " ";
                    //    MetaTagsList.metadescription = " ";
                    //    break;

                    //case "/views/SCPages/import-export-code":
                    //    MetaTagsList.metakeyword = " ";
                    //    MetaTagsList.metadescription = " ";
                    //    break;

                    //case "/views/SCPages/fssai-registration":
                    //    MetaTagsList.metakeyword = " ";
                    //    MetaTagsList.metadescription = " ";
                    //    break;

                    //case "/views/SCPages/digital-signature":
                    //    MetaTagsList.metakeyword = " ";
                    //    MetaTagsList.metadescription = " ";
                    //    break;

                    //case "/views/SCPages/trademark-registration":
                    //    MetaTagsList.metakeyword = " ";
                    //    MetaTagsList.metadescription = " ";
                    //    break;

                    //case "/views/SCPages/trademark-rectification":
                    //    MetaTagsList.metakeyword = " ";
                    //    MetaTagsList.metadescription = " ";
                    //    break;

                    //case "/views/SCPages/trademark-objection":
                    //    MetaTagsList.metakeyword = " ";
                    //    MetaTagsList.metadescription = " ";
                    //    break;

                    //case "/views/SCPages/trademark-opposition":
                    //    MetaTagsList.metakeyword = " ";
                    //    MetaTagsList.metadescription = " ";
                    //    break;

                    //case "/views/SCPages/trademark-renewal":
                    //    MetaTagsList.metakeyword = " ";
                    //    MetaTagsList.metadescription = " ";
                    //    break;

                    //case "/views/SCPages/logo-designing":
                    //    MetaTagsList.metakeyword = " ";
                    //    MetaTagsList.metadescription = " ";
                    //    break;

                    //case "/views/SCPages/copyright-registration":
                    //    MetaTagsList.metakeyword = " ";
                    //    MetaTagsList.metadescription = " ";
                    //    break;

                    //case "/views/SCPages/design-registration":
                    //    MetaTagsList.metakeyword = " ";
                    //    MetaTagsList.metadescription = " ";
                    //    break;

                    //case "/views/SCPages/provisional-patent":
                    //    MetaTagsList.metakeyword = " ";
                    //    MetaTagsList.metadescription = " ";
                    //    break;

                    //case "/views/SCPages/patent-registration":
                    //    MetaTagsList.metakeyword = " ";
                    //    MetaTagsList.metadescription = " ";
                    //    break;

                    //case "/views/SCPages/income-tax-filing":
                    //    MetaTagsList.metakeyword = " ";
                    //    MetaTagsList.metadescription = " ";
                    //    break;

                    //case "/views/SCPages/gst-filing":
                    //    MetaTagsList.metakeyword = " ";
                    //    MetaTagsList.metadescription = " ";
                    //    break;

                    //case "/views/SCPages/gst-migration":
                    //    MetaTagsList.metakeyword = " ";
                    //    MetaTagsList.metadescription = " ";
                    //    break;

                    //case "/views/SCPages/tds-return":
                    //    MetaTagsList.metakeyword = " ";
                    //    MetaTagsList.metadescription = " ";
                    //    break;

                    //case "/views/SCPages/esi-return":
                    //    MetaTagsList.metakeyword = " ";
                    //    MetaTagsList.metadescription = " ";
                    //    break;

                    //case "/views/SCPages/proprietorship-compliance":
                    //    MetaTagsList.metakeyword = " ";
                    //    MetaTagsList.metadescription = " ";
                    //    break;

                    //case "/views/SCPages/partnership-compliance":
                    //    MetaTagsList.metakeyword = " ";
                    //    MetaTagsList.metadescription = " ";
                    //    break;

                    //case "/views/SCPages/llp-compliance":
                    //    MetaTagsList.metakeyword = " ";
                    //    MetaTagsList.metadescription = " ";
                    //    break;

                    //case "/views/SCPages/pvtltd-company-compliance":
                    //    MetaTagsList.metakeyword = " ";
                    //    MetaTagsList.metadescription = " ";
                    //    break;

                    //case "/views/SCPages/foreign-subsidiary-compliance":
                    //    MetaTagsList.metakeyword = " ";
                    //    MetaTagsList.metadescription = " ";
                    //    break;

                    //case "/views/SCPages/legal-notice":
                    //    MetaTagsList.metakeyword = " ";
                    //    MetaTagsList.metadescription = " ";
                    //    break;

                    //case "/views/SCPages/non-disclosure-agreement":
                    //    MetaTagsList.metakeyword = " ";
                    //    MetaTagsList.metadescription = " ";
                    //    break;

                    //case "/views/SCPages/founders-agreement":
                    //    MetaTagsList.metakeyword = " ";
                    //    MetaTagsList.metadescription = " ";
                    //    break;

                    //case "/views/SCPages/term-sheet":
                    //    MetaTagsList.metakeyword = " ";
                    //    MetaTagsList.metadescription = " ";
                    //    break;

                    //case "/views/SCPages/shareholders-agreement":
                    //    MetaTagsList.metakeyword = " ";
                    //    MetaTagsList.metadescription = " ";
                    //    break;

                    //case "/views/SCPages/share-purchase-agreement":
                    //    MetaTagsList.metakeyword = " ";
                    //    MetaTagsList.metadescription = " ";
                    //    break;

                    case "/views/SCPages/application-development":
                    case "/application-development":
                        MetaTagsList.metakeyword = "Application Development Company,Application Development Company USA,Application Development Company UK";
                        MetaTagsList.metadescription = "Shaligram InfoTech is leading Application Development Company UK. We are using wide range of platform to create Application like  ASP.NET Web Development,Silverlight Application Development,Custom Software Development";
                        break;

                    case "/views/SCPages/sharepoint-development":
                    case "/sharepoint-development":
                        MetaTagsList.metakeyword = "SharePoint Application , SharePoint Application Development Company, SharePoint Application Development Company UK, SharePoint  Server";
                        MetaTagsList.metadescription = "Shaligram InfoTech is SharePoint Application Development Company USA. SharePoint is a web application platform in the Microsoft Office server suite. Many functions that are otherwise separate applications are combined with SharePoint like intranet, extranet";
                        break;

                    case "/views/SCPages/java-development":
                    case "/java-development":
                        MetaTagsList.metakeyword = "Java Web Development , Java Web Development Company USA , Java Software Development ,Java Mobile Development, Java Application Development Company UK";
                        MetaTagsList.metadescription = "Shaligram InfoTech is leading Java Web Development Company USA. We are offering services like Java Application Development, Java Software Development, Enterprise Java Development, Java Mobile Development,  Custom Java Development";
                        break;

                    case "/views/SCPages/biztalk-development":
                    case "/biztalk-development":
                        MetaTagsList.metakeyword = "Biztalk Server 2013 R2, Biztalk Server 2013 R2 Architecture, Business Rule Engine, Biztalk Server, BRE, BAM, Business Activity Monitoring, SSO, Single Sign-On, SWIFT, EDI, EDI & B2B, HIPAA, B2B, Rosettanet, HL7, Orchestration";
                        MetaTagsList.metadescription = "Biztalk Server 2013 R2  is an amazing source via which companies integrate and manage automated businesses by exchanging business documents like purchase orders and invoices between different applications, within and even across organizational boundaries";
                        break;

                    case "/views/SCPages/microsoft-dot-net-development":
                    case "/microsoft-dot-net-development":
                        MetaTagsList.metakeyword = "ASP.NET Web Development, ASP.NET Web Development Company USA ,ASP.NET Web Development Company UK";
                        MetaTagsList.metadescription = "Shaligram InfoTech is well known ASP.NET Web Development Company USA. We are offering other service Azure Application Development, Software Product Development, Windows Application Development";
                        break;

                    case "/views/SCPages/nodejs-development":
                    case "/nodejs-development":
                        MetaTagsList.metakeyword = "Enterprise Application Development , Enterprise Application Development Company USA, Enterprise Application Development Company UK";
                        MetaTagsList.metadescription = "Shaligram InfoTech is most popular Enterprise Application Development Company USA. Other services we included scalable network applications, E-Commerce, network applications, Enterprise Web Service";
                        break;

                    case "/views/SCPages/career":
                    case "/career":
                        MetaTagsList.metakeyword = "Career Objective,Careers,Current Job Opening Senior Android Developer,Current Job Opening Senior Business Development Executive,Current Job Opening Junior Web Designer";
                        MetaTagsList.metadescription = "In Shaligram Infotech  Current Job Opening is Junior Business Development Executive, Junior Web Designer, Senior Business Development Executive, Senior Java Developer, Senior Android Developer, Fresher Business Development Executive";
                        break;

                    //case "/views/SCPages/portfolio/portfolio-civil-net":
                    //    MetaTagsList.metakeyword = " ";
                    //    MetaTagsList.metadescription = " ";
                    //    break;

                    //case "/views/SCPages/GetParticularPortfolioDetail":
                    //    MetaTagsList.metakeyword = " ";
                    //    MetaTagsList.metadescription = " ";
                    //    break;

                    //case "/views/SCPages/portfolio-index":
                    //    MetaTagsList.metakeyword = " ";
                    //    MetaTagsList.metadescription = " ";
                    //    break;

                    //case "/views/SCPages/BlogPost":
                    //    MetaTagsList.metakeyword = " ";
                    //    MetaTagsList.metadescription = " ";
                    //    break;

                    //case "/views/SCPages/contact-us":
                    //    MetaTagsList.metakeyword = " ";
                    //    MetaTagsList.metadescription = " ";
                    //    break;

                    //case "/views/SCPages/pricecomparisonus":
                    //    MetaTagsList.metakeyword = " ";
                    //    MetaTagsList.metadescription = " ";
                    //    break;

                    //case "/views/SCPages/pricecomparisonaus":
                    //    MetaTagsList.metakeyword = " ";
                    //    MetaTagsList.metadescription = " ";
                    //    break;

                    //case "/views/SCPages/pricecomparisonuk":
                    //    MetaTagsList.metakeyword = " ";
                    //    MetaTagsList.metadescription = " ";
                    //    break;

                    //case "/views/SCPages/requestquote":
                    //    MetaTagsList.metakeyword = " ";
                    //    MetaTagsList.metadescription = " ";
                    //    break;

                    //case "/views/SCPages/Subscription":
                    //    MetaTagsList.metakeyword = " ";
                    //    MetaTagsList.metadescription = " ";
                    //    break;

                    //case "/views/404":
                    //    MetaTagsList.metakeyword = " ";
                    //    MetaTagsList.metadescription = " ";
                    //    break;

                    default:
                        MetaTagsList.metakeyword = "Software Development Company, Software Development Company USA , Software Development Company UK, Software Web Portal Development Company UK, Software Web Portal Development Company, Responsive Website Development Company";
                        MetaTagsList.metadescription = "Shaligram InfoTech is leading Software Development Company USA. We are offering services like application development, product development, web portal development, responsive web development services.";
                        break;

                }
            }


            if (filePath == "~/")
            {
                filePath = "~/views/SCPages/SCIndex.cshtml";
            }
            else
            {
                if (!filePath.StartsWith("~/views/SCPages/", StringComparison.OrdinalIgnoreCase))
                {
                    if (filePath.StartsWith("~/portfolio-detail/ShaligramInfotechAPI/api/PortfolioApi/", StringComparison.OrdinalIgnoreCase))
                    {
                        filePath = filePath.Replace("portfolio-detail/", "");
                    }
                    else
                    {
                        if (filePath.StartsWith("~/portfolio-detail", StringComparison.OrdinalIgnoreCase))
                        {
                            filePath = "~/views/SCPages/GetParticularPortfolioDetail";
                        }
                        else if (filePath.Equals("~/subscribe", StringComparison.OrdinalIgnoreCase))
                        {
                            filePath = "~/views/SCPages/Subscription";
                        }
                        else if (filePath.Equals("~/portfolio", StringComparison.OrdinalIgnoreCase))
                        {
                            filePath = "~/views/SCPages/portfolio-index";
                        }
                        else if (filePath.Equals("~/portfolio/true", StringComparison.OrdinalIgnoreCase))
                        {
                            filePath = "~/views/SCPages/portfolio-index";
                        }
                        else if (filePath.StartsWith("~/blog", StringComparison.OrdinalIgnoreCase))
                        {
                            filePath = "~/views/SCPages/BlogPost";
                        }
                        else if (filePath.Equals("~/pricing-comparison-uk", StringComparison.OrdinalIgnoreCase))
                        {
                            filePath = "~/views/SCPages/pricecomparisonuk";
                        }
                        else if (filePath.Equals("~/pricing-comparison-aus", StringComparison.OrdinalIgnoreCase))
                        {
                            filePath = "~/views/SCPages/pricecomparisonaus";
                        }
                        else if (filePath.Equals("~/pricing-comparison-us", StringComparison.OrdinalIgnoreCase))
                        {
                            filePath = "~/views/SCPages/pricecomparisonus";
                        }
                        else
                        {
                            filePath = filePath.Insert(2, "views/SCPages/");
                        }
                    }

                }

                if (!filePath.EndsWith(".cshtml", StringComparison.OrdinalIgnoreCase))
                {
                    filePath = filePath += ".cshtml";
                }
            }

            var handler = WebPageHttpHandler.CreateFromVirtualPath(filePath); // returns NULL if .cshtml file wasn't found

            if (handler == null)
            {
                requestContext.RouteData.DataTokens.Add("templateUrl", "/views/404");
                handler = WebPageHttpHandler.CreateFromVirtualPath("~/views/404.cshtml");
            }
            else
            {
                requestContext.RouteData.DataTokens.Add("templateUrl", filePath.Substring(1, filePath.Length - 8));
            }

            return handler;
        }
    }
}

