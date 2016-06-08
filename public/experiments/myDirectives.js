(function(){
    angular
        .module("myDirectives", [])
        .directive("helloWorld", helloWorld)
        .directive("list", list)
        .directive("myTable", myTable)

    function myTable() {
        function linker(scope, element, attributes) {
            $(element)
                .find("tbody")
                .sortable();
        }
        return {
            templateUrl: "myTable.html",
            scope: {
                title: "=",
                border: "=",
                data: "="
            },
            link: linker
        }
    }

    function list() {
        return {
            template: "<ul><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul>"
        }
    }

    function helloWorld() {
        return {
            template: "<h3>Hello World</h3>"
        };
    }
})();