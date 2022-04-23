const PatientModel = require("../model/Patient.model")


const getForm = (req, res) => {
    res.render("form")
}

const welcomePage = (req, res) => {
    res.render("welcome")
}


const createPatient = async (req, res ) => {
    try{
        const { name } = req.body;
const patientName = await PatientModel.findOne({name})
        if(!patientName){
        // console.log("request body -> ",req.body);
        const newPatient = new PatientModel(req.body);
        // console.log("new patient record -> ",newPatient);
        const createdPatient = await newPatient.save();
        // console.log("paient created -> ",createdPatient);
        // return res.send(createdPatient)
      
        
        return res.render("welcome",{
            name : name ,
            message : "Your details are added successfully"
        })
    }
    else {
        return res.render("patient",{
            name : name
        })
    }
   
    }catch(err){
        return res.send(err)
    }
}




module.exports = { createPatient,getForm,welcomePage }