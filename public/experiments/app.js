(function(){
    angular
        .module("ExperimentsApp", ["myDirectives"])
        .controller("ValidationController", ValidationController)
        .controller("ExperimentsController", ExperimentsController);

    function ValidationController() {
        
    }
    
    function ExperimentsController($http) {
        var vm = this;
        vm.sorted = sorted;
        // vm.todos = [
        //     {title: "CS4550", todo: "Teach directives and components"},
        //     {title: "CS1500", todo: "Algorithms and Data Structures"},
        //     {title: "CS5200", todo: "Teach data modeling and UML"}
        // ];

        function init() {
            $http.get("/api/todos")
                .then(function(response) {
                    vm.todos = response.data;
                });
        }
        init();

        function sorted(startIndex, endIndex) {
            console.log("ExperimentsController");
            console.log(startIndex);
            console.log(endIndex);
            $http.put("/api/todos?start="+startIndex+"&end="+endIndex);
        }
    }
})();