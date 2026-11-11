console.log("Treasurer Login Page Connected");

function collect_login_data() {
	let validEmail = validateEmail();
	let validPassword = validatePassword();
	let message = document.getElementById("LoginMessage");

	if (validEmail && validPassword) {
		let Email = document.getElementById("TreasurerEmail").value.trim();
		let Password = document.getElementById("TreasurerPassword").value;

		if (Email === "treasurer@clubkit.edu" && Password === "treasurer123") {
			message.style.color = "green";
			message.innerHTML = "Login successful! Welcome to the Treasurer Portal.";

			console.log("Treasurer Login Successful");

			window.location.href = "./dashboard.html";
		} else {
			message.style.color = "red";
			message.innerHTML = "Incorrect email or password.";
		}
	} else {
		message.style.color = "red";
		message.innerHTML = "Please correct the errors above.";
	}

	return false;
}

function validateEmail() {
	let Email = document.getElementById("TreasurerEmail").value.trim();

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
		console.log("Email: " + Email);
		return true;
	}
}

function validatePassword() {
	let Password = document.getElementById("TreasurerPassword").value;

	let Error = document.getElementById("PasswordError");

	if (Password === "") {
		Error.innerHTML = "Please enter your password.";
		return false;
	} else {
		Error.innerHTML = "";
		return true;
	}
}
