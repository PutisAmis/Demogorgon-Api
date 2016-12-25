const express = require("express");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const passport = require("passport");

const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(passport.initialize());

require("./routes")(app);
app.use('/public', express.static('./public'));

require("./server")(app);
