(function(){
    angular
        .module("WebAppMaker")
        .controller("NewWebsiteController", NewWebsiteController);

    function NewWebsiteController($routeParams, $location, WebsiteService) {
        var vm = this;
        vm.userId = $routeParams.userId;
        vm.websiteId = $routeParams.websiteId;

        vm.createWebsite = createWebsite;

        function createWebsite(website) {
            WebsiteService
                .createWebsite(vm.userId, website)
                .then(
                    function(response) {
                        var newWebsite = response.data;
                        $location.url("/user/"+vm.userId+"/website");
                    },
                    function(error) {
                        vm.error = error;
                    }
                )
        }
    }
})();