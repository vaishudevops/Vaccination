const PatientModel = require("../model/Patient.model")


const getForm = (req, res) => {
    res.render("form")
}

const welcomePage = (req, res) => {
    res.render("welcome")
}


const createPatient = async (req, res ) => {
    try{
        const {  PatientName} = req.body;
        console.log(PatientName)
        
const patientName = await PatientModel.findOne({PatientName})
console.log("patient", patientName)
        if(!patientName){
        console.log("patient name -> ", patientName);
        const newPatient = new PatientModel(req.body);
        console.log("new patient record -> ",newPatient);
        const createdPatient = await newPatient.save();
        console.log("paient created -> ",createdPatient);
        // return res.send(createdPatient)
      
        
        return res.render("welcome",{
            name : PatientName,
            message : "Your details are added successfully"
        })
    }
    else {
        return res.render("patient",{
            name : PatientName
        })
    }
   
    }catch(err){
        return res.send(err)
    }
}




module.exports = { createPatient,getForm,welcomePage }