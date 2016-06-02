(function(){
    angular
        .module("WebAppMaker")
        .controller("RegisterController", RegisterController);

    function RegisterController($location, UserService) {

        var vm = this;

        vm.register = register;

        function register (username, password, password2) {

            UserService
                .createUser(username, password)
                .then(
                    function(response){
                        var user = response.data;
                        $location.url("/profile/"+user._id);
                    },
                    function(error){
                        vm.error = error.data;
                    }
                );
        }
    }
})();