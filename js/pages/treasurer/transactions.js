console.log("Treasurer Transactions Page Connected");

function record_transaction() {
	let validType = validateTransactionType();
	let validCategory = validateTransactionCategory();
	let validAmount = validateTransactionAmount();
	let validDate = validateTransactionDate();

	let message = document.getElementById("TransactionMessage");

	if (validType && validCategory && validAmount && validDate) {
		let Type = document.getElementById("TransactionType").value;
		let Category = document.getElementById("TransactionCategory").value;
		let Amount = document.getElementById("TransactionAmount").value;
		let Date = document.getElementById("TransactionDate").value;
		let Description = document
			.getElementById("TransactionDescription")
			.value.trim();
		let Reference = document
			.getElementById("TransactionReference")
			.value.trim();

		alert("Transaction recorded successfully!");

		console.log("Transaction Type: " + Type);
		console.log("Transaction Category: " + Category);
		console.log("Transaction Amount: ৳" + Amount);
		console.log("Transaction Date: " + Date);
		console.log("Transaction Description: " + Description);
		console.log("Transaction Reference: " + Reference);
	}

	return false;
}

function validateTransactionType() {
	let Type = document.getElementById("TransactionType").value;
	let Error = document.getElementById("TransactionTypeError");

	if (Type === "") {
		Error.innerHTML = "Please select a transaction type.";
		return false;
	} else {
		Error.innerHTML = "";
		return true;
	}
}

function validateTransactionCategory() {
	let Category = document.getElementById("TransactionCategory").value;
	let Error = document.getElementById("TransactionCategoryError");

	if (Category === "") {
		Error.innerHTML = "Please select a transaction category.";
		return false;
	} else {
		Error.innerHTML = "";
		return true;
	}
}

function validateTransactionAmount() {
	let Amount = document.getElementById("TransactionAmount").value;
	let Error = document.getElementById("TransactionAmountError");

	if (Amount === "") {
		Error.innerHTML = "Please enter the transaction amount.";
		return false;
	} else if (Number(Amount) <= 0) {
		Error.innerHTML = "Amount must be greater than zero.";
		return false;
	} else {
		Error.innerHTML = "";
		return true;
	}
}

function validateTransactionDate() {
	let Date = document.getElementById("TransactionDate").value;
	let Error = document.getElementById("TransactionDateError");

	if (Date === "") {
		Error.innerHTML = "Please select the transaction date.";
		return false;
	} else {
		Error.innerHTML = "";
		return true;
	}
}
