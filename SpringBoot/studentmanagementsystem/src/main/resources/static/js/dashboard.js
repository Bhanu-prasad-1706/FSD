window.onload = function () {

    loadStudents();

    document.getElementById("searchStudent")
    .addEventListener("keyup", function () {

        let value = this.value.toLowerCase();

        let rows = document.querySelectorAll("#studentTable tr");

        rows.forEach(row => {

            row.style.display =
                row.innerText.toLowerCase().includes(value)
                ? ""
                : "none";
        });
    });
};

function loadStudents() {

    fetch("/students")
    .then(response => response.json())
    .then(data => {

        let rows = "";

        document.getElementById("totalStudents").innerText = data.length;

        data.forEach(student => {

            rows += `
                <tr>
                    <td>${student.rollNumber}</td>
                    <td>${student.fullName}</td>
                    <td>${student.branch}</td>
                    <td>${student.email}</td>
                    <td>${student.mobile}</td>

                    <td>
                        <button class="btn btn-warning btn-sm me-2"
                                onclick="editStudent(${student.id})">
                            Edit
                        </button>

                        <button class="btn btn-danger btn-sm"
                                onclick="deleteStudent(${student.id})">
                            Delete
                        </button>
                    </td>
                </tr>
            `;
        });

        document.getElementById("studentTable").innerHTML = rows;
    })
    .catch(error => {
        console.log(error);
    });
}

function deleteStudent(id) {

    if(confirm("Delete this student?")) {

        fetch(`/students/${id}`, {
            method: "DELETE"
        })
        .then(() => {
            loadStudents();
        });
    }
}

function editStudent(id) {

    localStorage.setItem("studentId", id);

    window.location.href = "edit.html";
}