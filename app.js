const express = require ("express");
const app = express ();
const path = require ("path"); // adoptamos PATH para escribir rutas.
const methodOverride = require('method-override');

const indexRouter = require ('./SRC/Routes/indexRouter');    

app.set ("view engine" , "ejs");
app.set ("views", path.join(__dirname, "SRC/views")); 

app.use(methodOverride('_method'))
app.use(express.json());
app.use(express.urlencoded({extenden:true})); 

app.use (express.static(path.join(__dirname, 'Public')));
app.use ('/', indexRouter) /


app.listen (3000, function () {console.log ("El Servidor esta corriendo")});


