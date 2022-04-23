

window.onload = function(){
    const patient = document.getElementById("patient");
    const dob    = document.getElementById("dob");
    const gender = document.getElementById("#gender");
    const  pob = document.getElementById("pob")
    const bloodGroup = document.getElementById("bloodGroup")
    const wob = document.getElementById("wob");
    const Hob = document.getElementById("Hob");
    const btnSave = document.getElementById("btnSave");
    const btnCancel = document.getElementById("btnCancel")


    btnSave.addEventListener("click",event =>{
        event.preventDefault();
        fetch("http://localhost:9000/patient/creation",{
            method : "POST",
            body : JSON.stringify({
                Patientname:patient.value,
                DateofBirth : dob.value,
                gender : gender.value,
                pob : pob.value,
                bloodGroup : bloodGroup.value,
                wob : wob.value,
                Hob : Hob.value,
                btnCancel : btnCancel.value
          }),
           headers : {
               "content-type" : "application/json"
           }

        })
        .then(response => response.json())
        .then((result) => {
            if(result) console.log(result);

        })
        .catch(console.error)
    })
        
    
        


}