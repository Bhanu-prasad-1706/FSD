const id = localStorage.getItem("studentId");

fetch(`/students/${id}`)
.then(response => response.json())
.then(student => {

    document.getElementById("fullName").value =
        student.fullName;

    document.getElementById("rollNumber").value =
        student.rollNumber;

    document.getElementById("email").value =
        student.email;

    document.getElementById("mobile").value =
        student.mobile;

    document.getElementById("gender").value =
        student.gender;

    document.getElementById("branch").value =
        student.branch;

    document.getElementById("dob").value =
        student.dob;

    document.getElementById("address").value =
        student.address;
});

document.getElementById("editForm")
.addEventListener("submit", function(e){

    e.preventDefault();

    const student = {

        fullName:
            document.getElementById("fullName").value,

        rollNumber:
            document.getElementById("rollNumber").value,

        email:
            document.getElementById("email").value,

        mobile:
            document.getElementById("mobile").value,

        gender:
            document.getElementById("gender").value,

        branch:
            document.getElementById("branch").value,

        dob:
            document.getElementById("dob").value,

        address:
            document.getElementById("address").value
    };

    fetch(`/students/${id}`, {

        method: "PUT",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(student)

    })
    .then(response => response.json())
    .then(() => {

        alert("Student Updated Successfully");

        window.location.href =
            "dashboard.html";

    });

});