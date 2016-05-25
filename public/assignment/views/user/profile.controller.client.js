(function(){
    angular
        .module("WebAppMaker")
        .controller("ProfileController", ProfileController);

    function ProfileController($routeParams, UserService) {
        var vm = this;
        vm.updateUser = updateUser;

        var id = $routeParams["id"];
        var index = -1;
        function init() {
            vm.user = UserService.findUserById(id);
        }
        init();

        function updateUser() {
            var result = UserService.updateUser(vm.user._id, vm.user);
            if(result === true) {
                vm.success = "User successfully updated";
            } else {
                vm.error = "User not found";
            }
        }
    }
})();