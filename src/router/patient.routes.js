const express = require("express");
const { getForm, createPatient , welcomePage} = require("../controller/patient.controller");


const router = express.Router();

//router.get("/home",Home)

//http:localhost:9000/views/register
//router.get("/Patient" ,(req, res) =>{res.render("AddPatient")}
//)
   

router.get("/creation",getForm)

router.post("/creation",createPatient)

router.get("/welcome", welcomePage)



module.exports = router;