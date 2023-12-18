const studentData = {
    "20MIS7062": {
        name: "Aparna Supriya Suresh",
        age: 21,
        major: "Computer Science",
        subjects: ["Operating Systems", "Database Management Systems", "Computer Networks"],
        password: "abc" // Add the password for this student
    },
    // Add more student data as needed
    "20BCE7073": {
        name: "Harini",
        age: 21,
        major: "ECE",
        subjects: ["Operating Systems", "Database Management Systems", "Computer Networks"],
        password: "mypassword" // Add the password for this student
    },
};

const form = document.getElementById("studentForm");
const regNumberInput = document.getElementById("regNumber");
const passwordInput = document.getElementById("password");
const studentDetailsDiv = document.getElementById("studentDetails");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    const regNumber = regNumberInput.value.trim();
    const password = passwordInput.value.trim();

    console.log("Entered registration number:", regNumber); // Debugging line

    if (regNumber in studentData) {
        const student = studentData[regNumber];
        console.log("Student data found:", student); // Debugging line
        if (password === student.password) {
            displayStudentDetails(student);
        } else {
            studentDetailsDiv.innerHTML = "Incorrect password.";
        }
    } else {
        studentDetailsDiv.innerHTML = "Student not found.";
    }
});

function displayStudentDetails(student) {
    studentDetailsDiv.innerHTML = `
        <h2>Student Details</h2>
        <p>Name: ${student.name}</p>
        <p>Age: ${student.age}</p>
        <p>Major: ${student.major}</p>
        <p>Subjects: ${student.subjects.join(", ")}</p>
    `;
}
