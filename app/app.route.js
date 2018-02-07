(function() {
    'use strict';

    angular.module("app.lfvb.route",["ngRoute"])
        .config(confRutas);
    
        confRutas.$inject=['$routeProvider','$locationProvider'];

        function confRutas($routeProvider,$locationProvider) {
            $locationProvider.html5Mode();
            console.log("Configurando rutas");
            console.log("Rutas cargadas: ");
            console.log(rutas);
            $routeProvider
                .when(rutas.init.url,{
                    templateUrl:rutas.init.template,
                    controller:rutas.init.controller,
                    controllerAs:rutas.init.alias,
                    resolve:rutas.init.resolver
                })
                .otherwise(rutas.init.url);
        };
})();