// DEPENDENCIES

var express = require("express");

// EXPRESS CONFIGURATION

var app = express();

var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ROUTER - Route Files

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// LISTENER

app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});
