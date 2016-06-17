(function(){
    angular
        .module("WebAppMaker")
        .config(Config);

    function Config($routeProvider) {
        $routeProvider
            // user routes
            .when("/login", {
                templateUrl: "views/user/login.view.client.html",
                controller: "LoginController",
                controllerAs: "model"
            })
            .when("/flickr", {
                templateUrl: "views/widget/widget-flickr-search.view.client.html",
                controller: "FlickrImageSearchController",
                controllerAs: "model"
            })
            .when("/register", {
                templateUrl: "views/user/register.view.client.html",
                controller: "RegisterController",
                controllerAs: "model"
            })
            .when("/profile", {
                templateUrl: "views/user/profile.view.client.html",
                controller: "ProfileController",
                controllerAs: "model",
                resolve: {
                    loggedin: checkLoggedin
                }
            })
            .when("/profile/:id", {
                templateUrl: "views/user/profile.view.client.html",
                controller: "ProfileController",
                controllerAs: "model",
                resolve: {
                    loggedin: checkLoggedin
                }
            })
            // .when("/admin", {
            //     templateUrl: "views/admin/admin.view.client.html",
            //     resolve: {
            //         loggedin: checkLoggedin,
            //         isAdmin: checkAdminRole
            //     }
            // })
            // website routes
            .when("/user/:userId/website", {
                templateUrl: "views/website/website-list.view.client.html",
                controller: "WebsiteListController",
                controllerAs: "model"
            })
            .when("/user/:userId/website/new", {
                templateUrl: "views/website/website-new.view.client.html",
                controller: "NewWebsiteController",
                controllerAs: "model"
            })
            .when("/user/:userId/website/:websiteId", {
                templateUrl: "views/website/website-edit.view.client.html",
                controller: "EditWebsiteController",
                controllerAs: "model"
            })
            // page routes

            // widget routes
            .when("/user/:uid/website/:wid/page/:pid/widget", {
                templateUrl: "views/widget/widget-list.view.client.html",
                controller: "WidgetListController",
                controllerAs: "model"
            })
            .when("/user/:uid/website/:wid/page/:pid/widget/:widgetId", {
                templateUrl: "views/widget/widget-edit.view.client.html",
                controller: "WidgetEditController",
                controllerAs: "model"
            })
            .when("/user/:uid/website/:wid/page/:pid/widget/:widgetId/html", {
                templateUrl: "views/widget/widget-html-edit.view.client.html"
            })
            // .when("/user/:uid/website/:wid/page/:pid/widget/", {
            //     templateUrl: "views/widget/widget-chooser.view.client.html"
            // })
            .otherwise({
                redirectTo: "/login"
            });

            function checkLoggedin(UserService, $q, $location, $rootScope) {

                var deferred = $q.defer();

                UserService
                    .checkLoggedin()
                    .then(
                        function(response) {
                            var user = response.data;
                            console.log(user);
                            if(user == '0') {
                                deferred.reject();
                                $rootScope.currentUser = null;
                                $location.url("/login")
                            } else {
                                $rootScope.currentUser = user;
                                deferred.resolve();
                            }
                        },
                        function(err) {
                            console.log(err);
                            $rootScope.currentUser = null;
                            deferred.reject();
                        }
                    );

                return deferred.promise;
            }
    }
})();