console.log("Treasurer Registration Page Connected");

function collect_registration_data() {
	let validStudentID = validateStudentID();
	let validName = validateName();
	let validEmail = validateEmail();
	let validClub = validateClub();
	let validPosition = validatePosition();
	let validStatement = validateStatement();

	let message = document.getElementById("RegistrationMessage");

	if (
		validStudentID &&
		validName &&
		validEmail &&
		validClub &&
		validPosition &&
		validStatement
	) {
		message.style.color = "green";
		message.innerHTML =
			"Application submitted successfully! Awaiting approval.";

		console.log("Treasurer Application Submitted");
	} else {
		message.style.color = "red";
		message.innerHTML = "Please correct the errors above.";
	}

	return false;
}

function validateStudentID() {
	let StudentID = document.getElementById("StudentID").value.trim();
	let Error = document.getElementById("StudentIDError");

	if (StudentID === "") {
		Error.innerHTML = "Please enter your student ID.";
		return false;
	} else {
		Error.innerHTML = "";
		return true;
	}
}

function validateName() {
	let Name = document.getElementById("ApplicantName").value.trim();
	let Error = document.getElementById("NameError");

	if (Name === "") {
		Error.innerHTML = "Please enter your full name.";
		return false;
	} else {
		Error.innerHTML = "";
		return true;
	}
}

function validateEmail() {
	let Email = document.getElementById("ApplicantEmail").value.trim();
	let Error = document.getElementById("EmailError");
	let Expression = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

	if (Email === "") {
		Error.innerHTML = "Please enter your university email.";
		return false;
	} else if (!Expression.test(Email)) {
		Error.innerHTML = "Please enter a valid email address.";
		return false;
	} else {
		Error.innerHTML = "";
		return true;
	}
}

function validateClub() {
	let Club = document.getElementById("ClubName").value;
	let Error = document.getElementById("ClubError");

	if (Club === "") {
		Error.innerHTML = "Please select a club.";
		return false;
	} else {
		Error.innerHTML = "";
		return true;
	}
}

function validatePosition() {
	let Position = document.getElementById("CurrentPosition").value;
	let Error = document.getElementById("PositionError");

	if (Position === "") {
		Error.innerHTML = "Please select your current position.";
		return false;
	} else {
		Error.innerHTML = "";
		return true;
	}
}

function validateStatement() {
	let Statement = document.getElementById("Statement").value.trim();
	let Error = document.getElementById("StatementError");

	if (Statement === "") {
		Error.innerHTML = "Please provide your application statement.";
		return false;
	} else {
		Error.innerHTML = "";
		return true;
	}
}
