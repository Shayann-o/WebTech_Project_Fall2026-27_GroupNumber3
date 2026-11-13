
function validate_profile() {

    let studentId = document.getElementById("student-id").value.trim();

    let name = document.getElementById("name").value.trim();

    let email = document.getElementById("email").value.trim();

    let phone = document.getElementById("phone").value.trim();


    let department = document.getElementById("department").value;

    let semester = document.getElementById("semester").value;


    let club = document.getElementById("club").value;

    let interest = document.getElementById("interest").value.trim();

    if (studentId === "") {

        alert("Please enter your Student ID.");

        return false;
    }

    if (name === "") {

        alert("Please enter your full name.");

        return false;
    }

    let namePattern = /^[A-Za-z ]+$/;

    if (!namePattern.test(name)) {

        alert("Name should contain only letters and spaces.");

        return false;
    }

    if (email === "") {

        alert("Please enter your university email.");

        return false;
    }

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {

        alert("Please enter a valid email address.");

        return false;
    }

    if (phone === "") {

        alert("Please enter your phone number.");

        return false;
    }

    let phonePattern = /^(\+88)?01[3-9]\d{8}$/;

    if (!phonePattern.test(phone)) {

        alert("Please enter a valid Bangladeshi phone number.");

        return false;
    }

    if (department === "") {

        alert("Please select your department.");

        return false;
    }

    if (semester === "") {

        alert("Please select your semester.");

        return false;
    }

    if (club === "") {

        alert("Please select your club.");

        return false;
    }

    if (interest === "") {

        alert("Please enter your areas of interest.");

        return false;
    }

    alert("Your profile has been successfully updated!");

    return true;

}
