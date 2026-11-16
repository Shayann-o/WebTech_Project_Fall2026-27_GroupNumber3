
function validate_profile() {

    let studentId = document.getElementById("student-id").value.trim();
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();

    let department = document.getElementById("department").value;
    let semester = document.getElementById("semester").value;

    let club = document.getElementById("club").value;
    let interest = document.getElementById("interest").value.trim();

    
    document.getElementById("StudentIDError").innerHTML = "";
    document.getElementById("NameError").innerHTML = "";
    document.getElementById("EmailError").innerHTML = "";
    document.getElementById("PhoneError").innerHTML = "";
    document.getElementById("DepartmentError").innerHTML = "";
    document.getElementById("SemesterError").innerHTML = "";
    document.getElementById("ClubError").innerHTML = "";
    document.getElementById("InterestError").innerHTML = "";

    
    if (studentId === "") {
        document.getElementById("StudentIDError").innerHTML =
            "Please enter your student ID.";
    }

    
    let namePattern = /^[A-Za-z ]+$/;

    if (name === "") {
        document.getElementById("NameError").innerHTML =
            "Please enter your full name.";
    }
    else if (!namePattern.test(name)) {
        document.getElementById("NameError").innerHTML =
            "Name can only contain letters and spaces.";
    }

   
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {
        document.getElementById("EmailError").innerHTML =
            "Please enter your university email.";
    }
    else if (!emailPattern.test(email)) {
        document.getElementById("EmailError").innerHTML =
            "Please enter a valid email address.";
    }

    let phonePattern = /^(\+?88)?01[3-9]\d{8}$/;

    if (phone === "") {
        document.getElementById("PhoneError").innerHTML =
            "Please enter your phone number.";
    }
    else if (!phonePattern.test(phone)) {
        document.getElementById("PhoneError").innerHTML =
            "Please enter a valid Bangladeshi phone number.";
    }

    if (department === "") {
        document.getElementById("DepartmentError").innerHTML =
            "Please select your department.";
    }

    if (semester === "") {
        document.getElementById("SemesterError").innerHTML =
            "Please select your semester.";
    }

    
    if (club === "") {
        document.getElementById("ClubError").innerHTML =
            "Please select your club.";
    }

    if (interest === "") {
        document.getElementById("InterestError").innerHTML =
            "Please enter your areas of interest.";
    }

    if (
        studentId === "" ||
        name === "" || !namePattern.test(name) ||
        email === "" || !emailPattern.test(email) ||
        phone === "" || !phonePattern.test(phone) ||
        department === "" ||
        semester === "" ||
        club === "" ||
        interest === ""
    ) {
        return false;
    }

    alert("Your profile has been successfully updated!");

    return true;
}
