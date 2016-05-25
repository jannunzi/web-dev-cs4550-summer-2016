(function(){
    angular
        .module("WebAppMaker")
        .controller("WebsiteListController", WebsiteListController);

    function WebsiteListController($routeParams, WebsiteService) {
        var vm = this;

        var userId = $routeParams.userId;

        vm.websites = WebsiteService.findWebsitesForUser(userId);
    }
})();