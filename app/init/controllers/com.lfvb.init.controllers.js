(function(){
    'use strict';



    angular.module("com.lfvb.init.controllers",[])
        .controller("InitController",fInitController);

    fInitController.$inject=['$scope'];

    function fInitController($scope) {
        var self=this;
        this.titulo="Lo ha cargado";

        init();

        function init() {
            
        };
        return this;
    };

})();