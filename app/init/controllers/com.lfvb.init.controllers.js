(function(){
    'use strict';

    angular.module("com.lfvb.init.controllers",[])
            .controller("InitController",InitController);
    
    InitController.$inject=['$scope'];

    function InitController($scope) {
        $scope.titulo="Lo ha cargado";

        return this;
    };

})();