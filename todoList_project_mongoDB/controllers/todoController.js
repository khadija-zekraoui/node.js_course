//here we set up all our request handlers
//this controller is for the to-do list section of the application

var bodyParser = require("body-parser");

//mongoose allow us to connect with the MongoDB
var mongoose = require("mongoose");

//Connect to the database
mongoose.connect("mongodb+srv://todo:todo@cluster0-cmn5l.mongodb.net/test?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true });

//create a schema - this is like a blueprint that help MongoDB to know what kind of data is going to expect
var todoSchema = new mongoose.Schema({
    item: String,
    completed: Boolean,
});

//create a model to be stored as a collection in MongoDB
// this model is based on the todoSchema schema
var Todo = mongoose.model("Todo", todoSchema);

/*var data = [
    { item: "get milk", completed: false },
    { item: "learn spanish", completed: false },
    { item: "cook dinner", completed: false },
];*/

var urlencodeParser = bodyParser.urlencoded({ extended: false });
module.exports = function (app) {
    app.get("/todo", (req, res) => {
        //get data from mongoDB and pass it to view
        //the method find give us all de items of the collection; find({}) or a specific one; find({item: "cook dinner"})
        Todo.find({}, (err, data) => {
            if (err) throw err;
            // data is the items retrieved from the datebase
            res.render("todo", { todos: data });
        });
    });

    app.post("/todo", urlencodeParser, (req, res) => {
        //get data from the view and add it to mongoDB
        //create an item of this model type.
        var newTodo = Todo(req.body).save((err, data) => {
            if (err) throw err;
            console.log("item saved");
            //It accepts an object or array, and converts it to JSON before sending it
            res.json(data);
        });
    });

    /*app.put("/todo/completed/:item/:action", (req, res) => {
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
    });*/

    app.delete("/todo/:item", (req, res) => {
        // delete the requested item from mongoDB
        //find the item to delete
        Todo.find({ item: req.params.item }).remove((err, data) => {
            if (err) throw err;
            console.log("item removed");
            res.json(data);
        });
        //console.log(req.params.item);
    });
};
