function validate_login() {
    let validId = validate_id();
    let validPass = validate_password();

    
    if (!validId || !validPass) {
        return false;
    }

    alert("Login successful!");
    return true;
}

function validate_id() {
    let execId = document.getElementById("execId").value.trim();
    let idError = document.getElementById("idError");

    if (execId === "") {
        idError.innerHTML = "Please enter your University Email or Student ID.";
        return false;
    } else {
        idError.innerHTML = "";
        return true;
    }
}

function validate_password() {
    let password = document.getElementById("password").value;
    let passError = document.getElementById("passError");

    if (password === "") {
        passError.innerHTML = "Please enter your password.";
        return false;
    } else if (password.length < 8) {
        passError.innerHTML = "Password must be at least 8 characters long.";
        return false;
    } else {
        passError.innerHTML = "";
        return true;
    }
}