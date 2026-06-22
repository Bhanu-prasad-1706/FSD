document.getElementById("studentForm")
.addEventListener("submit", function(e){

    e.preventDefault();

    const student = {

        fullName : document.getElementById("fullName").value,
        rollNumber : document.getElementById("rollNumber").value,
        email : document.getElementById("email").value,
        mobile : document.getElementById("mobile").value,
        gender : document.getElementById("gender").value,
        branch : document.getElementById("branch").value,
        dob : document.getElementById("dob").value,
        address : document.getElementById("address").value
    };

    fetch("http://localhost:8080/students",{

        method:"POST",

        headers:{
            "Content-Type":"application/json"
        },

        body:JSON.stringify(student)

    })
    .then(response=>response.json())
    .then(data=>{

        alert("Student Registered Successfully");

        window.location.href="dashboard.html";

    })
    .catch(error=>{
        console.log(error);
    });

});