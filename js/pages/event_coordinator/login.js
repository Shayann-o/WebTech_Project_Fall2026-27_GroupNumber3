console.log("Event Coordinator Login Page Connected");

function collect_login_data()
{
    let validEmail = validateEmail();
    let validPassword = validatePassword();

    if(validEmail && validPassword)
    {
        let Email = document.getElementById("login-email").value.trim();
        let Password = document.getElementById("login-password").value;

        if(Email === "event_co@gmail.com" && Password === "even_co123")
        {
            alert("Login Successful!");
            window.location.href = "dashboard.html";
        }
        else
        {
            document.getElementById("LoginMessage").innerHTML = "Incorrect Email or Password";
        }
    }

    return false;
}

function validateEmail()
{
    let Email = document.getElementById("login-email").value.trim();
    let Error = document.getElementById("EmailError");
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

function validatePassword()
{
    let Password = document.getElementById("login-password").value;
    let Error = document.getElementById("PasswordError");

    if(Password === "")
    {
        Error.innerHTML = "Please Enter Your Password";
        return false;
    }
    else
    {
        Error.innerHTML = "";
        return true;
    }
}
