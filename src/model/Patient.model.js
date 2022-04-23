const {Schema , model} = require("mongoose")

const patientSchema = new Schema({
    PatientName:{
        type: Schema.Types.String,
        required : true

    },
    DateofBirth : {
        type : Schema.Types.Date,
    },
     Gender :{
         type : Schema.Types.String,
     },
     PlaceofBirth :{
         type : Schema.Types.String,
     },

     BloodGroup :{
         type  : Schema.Types.String,
     },
     
     Height : {
         type : Schema.Types.Number,
     },
     Weight : {
         type : Schema.Types.Number,
     }

})

const PatientModel = model("Patient", patientSchema);

module.exports = PatientModel;