'use strict';

angular.module('app.directives', [])

.directive('appVersion', ['version', function (version) {
    return function (scope, elm, attrs) {
        elm.text(version);
    };


}])

.directive('staticInclude', function ($http, $templateCache, $compile) {
    return function (scope, element, attrs) {
        var templatePath = attrs.staticInclude;
        $http.get(templatePath, { cache: false }).success(function (response) {
            var contents = element.html(response).contents();
            $compile(contents)(scope);
        });
    };
})
.directive('htmlInclude', function ($http, $templateCache, $compile) {
    return function (scope, element, attrs) {
        var templatePath = attrs.htmlInclude;
        $http.get(templatePath, { cache: false }).success(function (response) {
            var contents = element.html(response).contents();
            //$compile(contents)(scope);
        });
    };
})
.directive('uploadFiles', function () {
    return {
        scope: true,        //create a new scope  
        link: function (scope, el, attrs) {
            el.bind('change', function (event) {
                var files = event.target.files;
                //iterate files since 'multiple' may be specified on the element  
                for (var i = 0; i < files.length; i++) {
                    //emit event upward  
                    scope.$emit("seletedFile", { file: files[i] });
                }
            });
        }
    };
})
.directive('portfolioReady', function () {
    return {
        restrict: 'A',
        link: function ($scope, elem, attrs) {
            elem.ready(function () {
                $scope.$root.TechnologyId = 0;
                $scope.savePortfolioinClientMachine();
            })
        }
    }
})
.directive('blogReady', function () {
    return {
        restrict: 'A',
        link: function ($scope, elem, attrs) {
            elem.ready(function () {
                //$scope.GetAllBlogPost();
            })
        }
    }
});