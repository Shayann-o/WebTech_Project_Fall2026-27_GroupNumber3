
function collect_registration_data()
{
    let validClubName = validateClubName();
    let validStudentID = validateStudentID();
    let validEmail = validateRegisterEmail();
    let validPhone = validatePhone();
    let validDepartment = validateDepartment();
    let validSemester = validateSemester();
    let validInterest = validateInterest();
    let validReason = validateReason();

    if(validClubName && validStudentID && validEmail &&
       validPhone && validDepartment && validSemester &&
       validInterest && validReason)
    {
        let ClubName = document.getElementById("club-name").value.trim();
        let StudentID = document.getElementById("student-id").value.trim();
        let Email = document.getElementById("register-email").value.trim();
        let Phone = document.getElementById("phone").value.trim();
        let Department = document.getElementById("department").value;
        let Semester = document.getElementById("semester").value.trim();
        let Interest = document.getElementById("interest").value.trim();
        let Reason = document.getElementById("reason").value.trim();

        alert("Registration Successful!");

        console.log("Club Name:", ClubName);
        console.log("Student ID:", StudentID);
        console.log("Email:", Email);
        console.log("Phone:", Phone);
        console.log("Department:", Department);
        console.log("Semester:", Semester);
        console.log("Areas of Interest:", Interest);
        console.log("Reason for Joining:", Reason);
    }

    return false;
}


function validateClubName()
{
    let ClubName = document.getElementById("club-name").value.trim();
    let Error = document.getElementById("ClubNameError");

    if(ClubName === "")
    {
        Error.innerHTML = "Please Enter Your Club Name";
        return false;
    }
    else
    {
        Error.innerHTML = "";
        return true;
    }
}


function validateStudentID()
{
    let StudentID = document.getElementById("student-id").value.trim();
    let Error = document.getElementById("StudentIDError");

    if(StudentID === "")
    {
        Error.innerHTML = "Please Enter Your Student ID";
        return false;
    }
    else
    {
        Error.innerHTML = "";
        return true;
    }
}


function validateRegisterEmail()
{
    let Email = document.getElementById("register-email").value.trim();
    let Error = document.getElementById("RegisterEmailError");

    let Expression = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(Email === "")
    {
        Error.innerHTML = "Please Enter Your Email";
        return false;
    }
    else if(!Expression.test(Email))
    {
        Error.innerHTML = "Please Enter A Valid Email";
        return false;
    }
    else
    {
        Error.innerHTML = "";
        return true;
    }
}


function validatePhone()
{
    let Phone = document.getElementById("phone").value.trim();
    let Error = document.getElementById("PhoneError");

    let Expression = /^01[3-9]\d{8}$/;

    if(Phone === "")
    {
        Error.innerHTML = "Please Enter Your Phone Number";
        return false;
    }
    else if(!Expression.test(Phone))
    {
        Error.innerHTML = "Please Enter A Valid 11-Digit Phone Number";
        return false;
    }
    else
    {
        Error.innerHTML = "";
        return true;
    }
}


function validateDepartment()
{
    let Department = document.getElementById("department").value;
    let Error = document.getElementById("DepartmentError");

    if(Department === "")
    {
        Error.innerHTML = "Please Select Your Department";
        return false;
    }
    else
    {
        Error.innerHTML = "";
        return true;
    }
}


function validateSemester()
{
    let Semester = document.getElementById("semester").value.trim();
    let Error = document.getElementById("SemesterError");

    if(Semester === "")
    {
        Error.innerHTML = "Please Enter Your Semester";
        return false;
    }
    else
    {
        Error.innerHTML = "";
        return true;
    }
}


function validateInterest()
{
    let Interest = document.getElementById("interest").value.trim();
    let Error = document.getElementById("InterestError");

    if(Interest === "")
    {
        Error.innerHTML = "Please Enter Your Areas of Interest";
        return false;
    }
    else
    {
        Error.innerHTML = "";
        return true;
    }
}


function validateReason()
{
    let Reason = document.getElementById("reason").value.trim();
    let Error = document.getElementById("ReasonError");

    if(Reason === "")
    {
        Error.innerHTML = "Please Enter Your Reason for Joining";
        return false;
    }
    else
    {
        Error.innerHTML = "";
        return true;
    }
}
