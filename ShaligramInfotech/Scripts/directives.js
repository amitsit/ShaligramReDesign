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
        //$http.get(templatePath + "?v=" + ApplicationVersion, { cache: $templateCache }).success(function (response) {
        $http.get(templatePath, { cache: false }).success(function (response) {
            var contents = element.html(response).contents();
            $compile(contents)(scope);
        });
    };
});