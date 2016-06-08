(function(){
    angular
        .module("ExperimentsApp", ["myDirectives"])
        .controller("ExperimentsController", ExperimentsController);

    function ExperimentsController() {
        var vm = this;
        vm.todos = [
            {title: "CS4550", task: "Teach directives and components"},
            {title: "CS5200", task: "Teach data modeling and UML"}
        ];
    }
})();