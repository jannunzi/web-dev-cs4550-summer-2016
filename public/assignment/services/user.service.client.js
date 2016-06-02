(function () {
    angular
        .module("WebAppMaker")
        .factory("UserService", UserService);

    function UserService($http) {

        var api = {
            createUser: createUser,
            findUserByUsernameAndPassword: findUserByUsernameAndPassword,
            findUserById: findUserById,
            updateUser: updateUser,
            deleteUser: deleteUser
        };
        return api;

        function updateUser(id, newUser) {
            var url = "/api/user/"+id;
            return $http.put(url, newUser);
        }
        function createUser(username, password) {
            var url = "/api/user";
            var user = {
                username: username,
                password: password
            };
            return $http.post(url, user);
        }
        function deleteUser(id) {
            var url = "/api/user/"+id;
            return $http.delete(url);
        }
        function findUserByUsernameAndPassword(username, password) {
            var url = "/api/user?username="+username+"&password="+password;
            return $http.get(url);
        }
        function findUserById(id) {
            var url = "/api/user/" + id;
            return $http.get(url);
        }

    }
})();