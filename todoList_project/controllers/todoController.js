//here we set up all our request handlers
//this controller is for the to-do list section of the application
var bodyParser = require("body-parser");
var data = [
    { item: "get milk", completed: false },
    { item: "learn spanish", completed: false },
    { item: "cook dinner", completed: false },
];
var urlencodeParser = bodyParser.urlencoded({ extended: false });
module.exports = function (app) {
    app.get("/todo", (req, res) => {
        res.render("todo", { todos: data });
    });

    app.post("/todo", urlencodeParser, (req, res) => {
        data.push(req.body);
        //It accepts an object or array, and converts it to JSON before sending it
        res.json(data);
    });

    app.put("/todo/completed/:item/:action", (req, res) => {
        console.log("checkbox:", req.params.item);
        console.log("completed:", req.params.action);
        data.forEach((todo) => {
            if (todo.item == req.params.item) {
                console.log("antes", todo.completed);
                if (req.params.action == "true") {
                    todo.completed = true;
                } else {
                    todo.completed = false;
                }
                console.log("después", todo.completed);
            }
        });
        res.json(data);
    });

    app.delete("/todo/:item", (req, res) => {
        //console.log(req.params.item);
        data = data.filter((todo) => todo.item !== req.params.item);
        res.json(data);
    });
};
