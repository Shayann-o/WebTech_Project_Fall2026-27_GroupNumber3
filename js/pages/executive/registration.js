function validate_registration() {
    let validName = validate_fullName();
    let validId = validate_studentId();
    let validMemberId = validate_clubMemberId();
    let validEmail = validate_email();
    let validPhone = validate_phone();
    let validDept = validate_department();
    let validSemester = validate_semester();
    let validClub = validate_club();
    let validCurrentRole = validate_currentRole();
    let validApplyingRole = validate_applyingRole();
    let validStatement = validate_statement();
    let validPass = validate_password();
    let validConfirm = validate_confirmPassword();
    let validTerms = validate_terms();

    
    if (!validName || !validId || !validMemberId || !validEmail || !validPhone || 
        !validDept || !validSemester || !validClub || !validCurrentRole || 
        !validApplyingRole || !validStatement || !validPass || !validConfirm || !validTerms) {
        return false;
    }

    alert("Executive registration submitted successfully!");
    return true;
}

function validate_fullName() {
    let name = document.getElementById("fullName").value.trim();
    let error = document.getElementById("nameError");

    if (name === "") {
        error.innerHTML = "Please enter your full name.";
        return false;
    }
    error.innerHTML = "";
    return true;
}

function validate_studentId() {
    let id = document.getElementById("studentId").value.trim();
    let error = document.getElementById("idError");

    if (id === "") {
        error.innerHTML = "Please enter your student ID.";
        return false;
    }
    error.innerHTML = "";
    return true;
}

function validate_clubMemberId() {
    let memberId = document.getElementById("clubMemberId").value.trim();
    let error = document.getElementById("memberIdError");

    if (memberId === "") {
        error.innerHTML = "Please enter your club member ID.";
        return false;
    }
    error.innerHTML = "";
    return true;
}

function validate_email() {
    let email = document.getElementById("email").value.trim();
    let error = document.getElementById("emailError");
    let expression = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {
        error.innerHTML = "Please enter your university email.";
        return false;
    } else if (!expression.test(email)) {
        error.innerHTML = "Please enter a valid email format.";
        return false;
    }
    error.innerHTML = "";
    return true;
}

function validate_phone() {
    let phone = document.getElementById("phone").value.trim();
    let error = document.getElementById("phoneError");

    if (phone === "") {
        error.innerHTML = "Please enter your contact number.";
        return false;
    }
    error.innerHTML = "";
    return true;
}

function validate_department() {
    let dept = document.getElementById("department").value;
    let error = document.getElementById("deptError");

    if (dept === "") {
        error.innerHTML = "Please select your department.";
        return false;
    }
    error.innerHTML = "";
    return true;
}

function validate_semester() {
    let semester = document.getElementById("semester").value;
    let error = document.getElementById("semesterError");

    if (semester === "" || semester < 1 || semester > 12) {
        error.innerHTML = "Please enter a valid semester between 1 and 12.";
        return false;
    }
    error.innerHTML = "";
    return true;
}

function validate_club() {
    let club = document.getElementById("club").value;
    let error = document.getElementById("clubError");

    if (club === "") {
        error.innerHTML = "Please choose a club to apply for.";
        return false;
    }
    error.innerHTML = "";
    return true;
}

function validate_currentRole() {
    let role = document.getElementById("currentRole").value;
    let error = document.getElementById("roleError");

    if (role === "") {
        error.innerHTML = "Please select your current position.";
        return false;
    }
    error.innerHTML = "";
    return true;
}

function validate_applyingRole() {
    let role = document.getElementById("applyingRole").value;
    let error = document.getElementById("applyingRoleError");

    if (role === "") {
        error.innerHTML = "Please select your target executive role.";
        return false;
    }
    error.innerHTML = "";
    return true;
}

function validate_statement() {
    let statement = document.getElementById("statement").value.trim();
    let error = document.getElementById("statementError");

    if (statement === "") {
        error.innerHTML = "Please provide an application statement.";
        return false;
    } else if (statement.length < 20) {
        error.innerHTML = "Statement must be at least 20 characters long.";
        return false;
    }
    error.innerHTML = "";
    return true;
}

function validate_password() {
    let password = document.getElementById("password").value;
    let error = document.getElementById("passError");

    if (password === "") {
        error.innerHTML = "Please create a password.";
        return false;
    } else if (password.length < 8) {
        error.innerHTML = "Password must be at least 8 characters long.";
        return false;
    }
    error.innerHTML = "";
    return true;
}

function validate_confirmPassword() {
    let password = document.getElementById("password").value;
    let confirmPass = document.getElementById("confirmPassword").value;
    let error = document.getElementById("confirmPassError");

    if (confirmPass === "") {
        error.innerHTML = "Please confirm your password.";
        return false;
    } else if (confirmPass !== password) {
        error.innerHTML = "Passwords do not match.";
        return false;
    }
    error.innerHTML = "";
    return true;
}

function validate_terms() {
    let terms = document.getElementById("terms");
    let error = document.getElementById("termsError");

    if (!terms.checked) {
        error.innerHTML = "You must confirm authorization before submitting.";
        return false;
    }
    error.innerHTML = "";
    return true;
}