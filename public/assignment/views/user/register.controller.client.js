(function(){
    angular
        .module("WebAppMaker")
        .controller("RegisterController", RegisterController);

    function RegisterController($location, $rootScope, UserService) {

        var vm = this;

        vm.register = register;

        function register (username, password, password2) {
            UserService
                .register(username, password)
                .then(
                    function(response){
                        var user = response.data;
                        $rootScope.currentUser = user;
                        $location.url("/profile/"+user._id);
                    },
                    function(error){
                        vm.error = error.data;
                    }
                );
        }
    }
})();