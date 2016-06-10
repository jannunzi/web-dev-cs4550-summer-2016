
module.exports = function(app) {
    app.get("/api/todos", findAllTodos);
    app.put("/api/todos", reorderTodos);

    var mongoose = require("mongoose");
    var TodoSchema = mongoose.Schema({
        title: String,
        todo: String,
        order: Number
    });

    var Todo = mongoose.model("Todo", TodoSchema);

    // Todo.create({order: 0, "title":"Course 0","todo":"Algorithms and Data Structures"});
    // Todo.create({order: 1, "title":"Course 1","todo":"Teach data modeling and UML"});
    // Todo.create({order: 2, "title":"Course 2","todo":"Teach directives and components"});
    // Todo.create({order: 3, "title":"Course 3","todo":"Teach directives and components"});
    // Todo.create({order: 4, "title":"Course 4","todo":"Teach directives and components"});
    // Todo.create({order: 5, "title":"Course 5","todo":"Teach directives and components"});
    // Todo.create({order: 6, "title":"Course 6","todo":"Teach directives and components"});
    // Todo.create({order: 7, "title":"Course 7","todo":"Teach directives and components"});

    function findAllTodos(req, res) {
        Todo.find()
            .then(function(todos){
                res.json(todos);
            });
    }

    function reorderTodos(req, res) {
        var start = parseInt(req.query.start);
        var end = parseInt(req.query.end);
        Todo.find(function(err, todos){
            todos.forEach(function(todo){
                if(start < end) {
                    if(todo.order >= start && todo.order < end) {
                        todo.order--;
                        todo.save();
                    } else if(todo.order === start) {
                        todo.order = end;
                    }
                } else {
                    if(todo.order >= end && todo.order < start) {
                        todo.order++;
                        todo.save();
                    } else if(todo.order === start) {
                        todo.order = end;
                    }
                }
            });
        });
        res.send(200);
    }
};