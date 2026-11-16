console.log("Event Coordinator Registration Page Connected");

function collect_register_data()
{
    let validName = validateName();
    let validStudentID = validateStudentID();
    let validEmail = validateRegisterEmail();
    let validDepartment = validateDepartment();
    let validPhone = validatePhone();
    let validClubName = validateClubName();
    let validPosition = validatePosition();
    let validPassword = validateRegisterPassword();
    let validConfirmPassword = validateConfirmPassword();

    if(validName && validStudentID && validEmail &&
       validDepartment && validPhone && validClubName &&
       validPosition && validPassword && validConfirmPassword)
    {
        alert("Registration Successful!");
        window.location.href = "login.html";
    }

    return false;
}

function validateName()
{
    let Name = document.getElementById("fullname").value.trim();
    let Error = document.getElementById("NameError");

    if(Name === "")
    {
        Error.innerHTML = "Please Enter Your Full Name";
        return false;
    }
    else if(Name.length < 3)
    {
        Error.innerHTML = "Name Must Be At Least 3 Characters";
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
    let Error = document.getElementById("StudentError");

    let Expression = /^[0-9]{2}-[0-9]{5}-[0-9]$/;

    if(StudentID === "")
    {
        Error.innerHTML = "Please Enter Your Student ID";
        return false;
    }
    else if(!Expression.test(StudentID))
    {
        Error.innerHTML = "Student ID Must Follow This Format: **-XXXXX-*";
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
    let Email = document.getElementById("university-email").value.trim();
    let Error = document.getElementById("EmailError");
    let Expression = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(Email === "")
    {
        Error.innerHTML = "Please Enter Your University Email";
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

function validatePhone()
{
    let Phone = document.getElementById("phone").value.trim();
    let Error = document.getElementById("PhoneError");
    let Expression = /^[0-9]{11}$/;

    if(Phone === "")
    {
        Error.innerHTML = "Please Enter Your Phone Number";
        return false;
    }
    else if(!Expression.test(Phone))
    {
        Error.innerHTML = "Please Enter A Valid Phone Number";
        return false;
    }
    else
    {
        Error.innerHTML = "";
        return true;
    }
}

function validateClubName()
{
    let ClubName = document.getElementById("club-name").value.trim();
    let Error = document.getElementById("ClubError");

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

function validatePosition()
{
    let Position = document.getElementById("position").value.trim();
    let Error = document.getElementById("PositionError");

    if(Position === "")
    {
        Error.innerHTML = "Please Enter Your Position";
        return false;
    }
    else
    {
        Error.innerHTML = "";
        return true;
    }
}

function validateRegisterPassword()
{
    let Password = document.getElementById("reg-password").value;
    let Error = document.getElementById("PasswordError");

    if(Password === "")
    {
        Error.innerHTML = "Please Enter Your Password";
        return false;
    }
    else if(Password.length < 8)
    {
        Error.innerHTML = "Password Must Be At Least 8 Characters";
        return false;
    }
    else
    {
        Error.innerHTML = "";
        return true;
    }
}

function validateConfirmPassword()
{
    let Password = document.getElementById("reg-password").value;
    let ConfirmPassword = document.getElementById("confirm-password").value;
    let Error = document.getElementById("ConfirmPasswordError");

    if(ConfirmPassword === "")
    {
        Error.innerHTML = "Please Confirm Your Password";
        return false;
    }
    else if(Password !== ConfirmPassword)
    {
        Error.innerHTML = "Passwords Do Not Match";
        return false;
    }
    else
    {
        Error.innerHTML = "";
        return true;
    }
}