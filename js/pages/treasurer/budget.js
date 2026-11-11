function save_budget() {
	var budget = document.getElementById("TotalBudget").value;
	var period = document.getElementById("BudgetPeriod").value;

	document.getElementById("BudgetError").innerHTML = "";
	document.getElementById("PeriodError").innerHTML = "";

	var valid = true;

	if (budget == "" || budget <= 0) {
		document.getElementById("BudgetError").innerHTML =
			"Please enter a valid budget amount.";
		valid = false;
	}

	if (period == "") {
		document.getElementById("PeriodError").innerHTML =
			"Please select a budget period.";
		valid = false;
	}

	if (valid) {
		alert("Budget saved successfully!");
	}

	return false;
}

function allocate_budget() {
	var category = document.getElementById("AllocationCategory").value;
	var amount = document.getElementById("AllocationAmount").value;

	document.getElementById("CategoryError").innerHTML = "";
	document.getElementById("AmountError").innerHTML = "";

	var valid = true;

	if (category == "") {
		document.getElementById("CategoryError").innerHTML =
			"Please select a category.";
		valid = false;
	}

	if (amount == "" || amount <= 0) {
		document.getElementById("AmountError").innerHTML =
			"Please enter a valid amount.";
		valid = false;
	}

	if (valid) {
		alert("Funds allocated successfully!");
	}

	return false;
}
