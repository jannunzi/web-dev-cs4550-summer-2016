(function(){
    angular
        .module("WebAppMaker")
        .controller("WidgetEditController", WidgetEditController);

    function WidgetEditController($routeParams, WidgetService) {
        var vm = this;
        var widgetId = $routeParams.widgetId;

        function init() {
            console.log(widgetId);
            WidgetService
                .findWidgetById(widgetId)
                .then(
                    function(response) {
                        vm.widget = response.data;
                    }
                );
        }
        init();
    }
})();