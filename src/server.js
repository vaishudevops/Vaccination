const express = require("express");
require("./db/app");

const ejs = require("ejs");
const expEjsLayouts = require("express-ejs-layouts")
const PatientRouter = require("./router/patient.routes");

const app = express();
app.use(express.static(__dirname+'/public'))
app.use(express.urlencoded({extended : false}))    

app.use(express.json());
app.use(express.static(__dirname+'/public'))
app.use(expEjsLayouts);

app.set('layout','./layouts/layout');
app.set("view engine","ejs");


app.use("/patient",PatientRouter);

app.get("/",(req, res) =>{ res.render("home")
})

//app.get("/Patient",(req , res)=>{res.render("patient")})
 
//app.get("/redirect", (req, res) => {res.redirect("/views/home")})


const PORT = process.env.PORT||9000;

app.listen(PORT,() =>console.log("sever connceted"))

