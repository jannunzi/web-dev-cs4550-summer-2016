(function(){
    angular.module("WebAppMaker")
        .factory("WebsiteService", WebsiteService);

    var websites = [
        { "_id": "123", "name": "Facebook",    "developerId": "456" },
        { "_id": "234", "name": "Tweeter",     "developerId": "456" },
        { "_id": "456", "name": "Gizmodo",     "developerId": "456" },
        { "_id": "567", "name": "Tic Tac Toe", "developerId": "123" },
        { "_id": "678", "name": "Checkers",    "developerId": "123" },
        { "_id": "789", "name": "Chess",       "developerId": "234" }
    ];

    function WebsiteService() {

        var api = {
            findWebsitesForUser: findWebsitesForUser,
            findWebsiteById: findWebsiteById
        };
        return api;

        function findWebsiteById(websiteId) {
            for(var i in websites) {
                if(websites[i]._id === websiteId) {
                    return websites[i];
                }
            }
            return null;
        }

        function findWebsitesForUser(userId) {
            var result = [];
            for(var i in websites) {
                if(websites[i].developerId === userId) {
                    result.push(websites[i]);
                }
            }
            return result;
        }
    }
})();