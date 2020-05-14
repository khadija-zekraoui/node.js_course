var express = require("express");
var todoController = require("./controllers/todoController");
var app = express();

//set up template engine
app.set("view engine", "ejs");

//statics files
app.use(express.static("./public"));

//fire de controller
todoController(app);

//listen to port
app.listen(3000, () => {
    console.log(`Server started, listening on port 3000`);
});
