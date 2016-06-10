(function(){
    angular
        .module("myDirectives", [])
        .directive("helloWorld", helloWorld)
        .directive("list", list)
        .directive("myTable", myTable)

    function myTable() {
        function linker(scope, element, attributes) {
            var data = scope.data;
            var startIndex = -1;
            var endIndex = -1;
            $(element)
                .find("tbody")
                .sortable({
                    start: function(event, ui) {
                        console.log("sorting began");
                        startIndex = ui.item.index();
                        console.log(startIndex);
                    },
                    stop: function (event, ui) {
                        console.log("sorting stopped");
                        endIndex = ui.item.index();
                        console.log(endIndex);

                        var sortedElement = scope.data.splice(startIndex, 1)[0];
                        scope.data.splice(endIndex, 0, sortedElement);
                        console.log(scope.data);

                        scope.$apply();

                        // scope.$parent.model.sorted(startIndex, endIndex);
                        scope.reorder({start: startIndex, end: endIndex});
                    }
                });
        }
        return {
            templateUrl: "myTable.html",
            scope: {
                title:  "=",
                border: "=",
                data:   "=",
                reorder: "&sorted"
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