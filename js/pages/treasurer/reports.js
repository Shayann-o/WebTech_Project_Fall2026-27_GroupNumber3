console.log("Treasurer Reports Page Connected");

function generate_report() {
	let validTitle = validateReportTitle();
	let validType = validateReportType();
	let validPeriod = validateReportPeriod();
	let validStartDate = validateStartDate();
	let validEndDate = validateEndDate();
	let validDetails = validateReportDetails();
	let validFormat = validateReportFormat();
	let validRecipient = validateReportRecipient();
	let validPriority = validateReportPriority();

	let message = document.getElementById("ReportMessage");

	if (
		validTitle &&
		validType &&
		validPeriod &&
		validStartDate &&
		validEndDate &&
		validDetails &&
		validFormat &&
		validRecipient &&
		validPriority
	) {
		let Title = document.getElementById("ReportTitle").value.trim();
		let Type = document.getElementById("ReportType").value;
		let Period = document.getElementById("ReportPeriod").value;
		let Start = document.getElementById("StartDate").value;
		let End = document.getElementById("EndDate").value;
		let Format = document.getElementById("ReportFormat").value;
		let Recipient = document.getElementById("ReportRecipient").value;
		let Priority = document.getElementById("ReportPriority").value;

		message.style.color = "green";
		message.innerHTML = "Report request submitted successfully!";

		console.log("Report Title: " + Title);
		console.log("Report Type: " + Type);
		console.log("Reporting Period: " + Period);
		console.log("Start Date: " + Start);
		console.log("End Date: " + End);
		console.log("Report Format: " + Format);
		console.log("Prepared For: " + Recipient);
		console.log("Report Priority: " + Priority);
	} else {
		message.style.color = "red";
		message.innerHTML = "Please correct the errors above.";
	}

	return false;
}

function validateReportTitle() {
	let Title = document.getElementById("ReportTitle").value.trim();
	let Error = document.getElementById("ReportTitleError");

	if (Title === "") {
		Error.innerHTML = "Please enter a report title.";
		return false;
	} else {
		Error.innerHTML = "";
		return true;
	}
}

function validateReportType() {
	let Type = document.getElementById("ReportType").value;
	let Error = document.getElementById("ReportTypeError");

	if (Type === "") {
		Error.innerHTML = "Please select a report type.";
		return false;
	} else {
		Error.innerHTML = "";
		return true;
	}
}

function validateReportPeriod() {
	let Period = document.getElementById("ReportPeriod").value;
	let Error = document.getElementById("ReportPeriodError");

	if (Period === "") {
		Error.innerHTML = "Please select a reporting period.";
		return false;
	} else {
		Error.innerHTML = "";
		return true;
	}
}

function validateStartDate() {
	let Start = document.getElementById("StartDate").value;
	let Error = document.getElementById("StartDateError");

	if (Start === "") {
		Error.innerHTML = "Please select a start date.";
		return false;
	} else {
		Error.innerHTML = "";
		return true;
	}
}

function validateEndDate() {
	let Start = document.getElementById("StartDate").value;
	let End = document.getElementById("EndDate").value;
	let Error = document.getElementById("EndDateError");

	if (End === "") {
		Error.innerHTML = "Please select an end date.";
		return false;
	} else if (Start !== "" && End < Start) {
		Error.innerHTML = "End date cannot be earlier than start date.";
		return false;
	} else {
		Error.innerHTML = "";
		return true;
	}
}

function validateReportDetails() {
	let Income = document.getElementById("IncludeIncome").checked;
	let Expenses = document.getElementById("IncludeExpenses").checked;
	let Budget = document.getElementById("IncludeBudget").checked;
	let Transactions = document.getElementById("IncludeTransactions").checked;
	let Events = document.getElementById("IncludeEvents").checked;

	let Error = document.getElementById("ReportDetailsError");

	if (!Income && !Expenses && !Budget && !Transactions && !Events) {
		Error.innerHTML = "Please select at least one report detail.";
		return false;
	} else {
		Error.innerHTML = "";
		return true;
	}
}

function validateReportFormat() {
	let Format = document.getElementById("ReportFormat").value;
	let Error = document.getElementById("ReportFormatError");

	if (Format === "") {
		Error.innerHTML = "Please select a report format.";
		return false;
	} else {
		Error.innerHTML = "";
		return true;
	}
}

function validateReportRecipient() {
	let Recipient = document.getElementById("ReportRecipient").value;
	let Error = document.getElementById("ReportRecipientError");

	if (Recipient === "") {
		Error.innerHTML = "Please select a report recipient.";
		return false;
	} else {
		Error.innerHTML = "";
		return true;
	}
}

function validateReportPriority() {
	let Priority = document.getElementById("ReportPriority").value;
	let Error = document.getElementById("ReportPriorityError");

	if (Priority === "") {
		Error.innerHTML = "Please select a report priority.";
		return false;
	} else {
		Error.innerHTML = "";
		return true;
	}
}
