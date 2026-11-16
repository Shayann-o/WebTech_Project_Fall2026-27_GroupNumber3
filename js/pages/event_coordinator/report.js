

console.log("Expense Report Page Connected");

function collect_expense_data()
{
    let validEvent = validateExpenseEvent();
    let validCategory = validateExpenseCategory();
    let validAmount = validateExpenseAmount();
    let validDate = validateExpenseDate();
    let validDescription = validateExpenseDescription();
    let validReceipt = validateReceiptReference();

    if(validEvent && validCategory && validAmount &&
       validDate && validDescription && validReceipt)
    {
        alert("Expense Report Submitted Successfully!");
    }

    return false;
}


function validateExpenseEvent()
{
    let Event = document.getElementById("expense-event").value;
    let Error = document.getElementById("EventSelectionError");

    if(Event === "")
    {
        Error.innerHTML = "Please Select An Event";
        return false;
    }
    else
    {
        Error.innerHTML = "";
        return true;
    }
}


function validateExpenseCategory()
{
    let Category = document.getElementById("expense-category").value;
    let Error = document.getElementById("ExpenseCategoryError");

    if(Category === "")
    {
        Error.innerHTML = "Please Select Expense Category";
        return false;
    }
    else
    {
        Error.innerHTML = "";
        return true;
    }
}


function validateExpenseAmount()
{
    let Amount = document.getElementById("expense-amount").value;
    let Error = document.getElementById("ExpenseAmountError");

    if(Amount === "")
    {
        Error.innerHTML = "Please Enter Expense Amount";
        return false;
    }
    else if(isNaN(Amount) || Number(Amount) <= 0)
    {
        Error.innerHTML = "Expense Amount Must Be A Positive Number";
        return false;
    }
    else
    {
        Error.innerHTML = "";
        return true;
    }
}


function validateExpenseDate()
{
    let ExpenseDate = document.getElementById("expense-date").value;
    let Error = document.getElementById("ExpenseDateError");

    let Today = new Date();
    Today.setHours(0, 0, 0, 0);

    let SelectedDate = new Date(ExpenseDate + "T00:00:00");

    if(ExpenseDate === "")
    {
        Error.innerHTML = "Please Select Expense Date";
        return false;
    }
    else if(SelectedDate > Today)
    {
        Error.innerHTML = "Expense Date Cannot Be In The Future";
        return false;
    }
    else
    {
        Error.innerHTML = "";
        return true;
    }
}


function validateExpenseDescription()
{
    let Description = document.getElementById("expense-description").value.trim();
    let Error = document.getElementById("ExpenseDescriptionError");

    if(Description === "")
    {
        Error.innerHTML = "Please Enter Expense Description";
        return false;
    }
    else if(Description.length < 10)
    {
        Error.innerHTML = "Description Must Be At Least 10 Characters";
        return false;
    }
    else
    {
        Error.innerHTML = "";
        return true;
    }
}

// RECEIPT / INVOICE REFERENCE
function validateReceiptReference()
{
    let Receipt = document.getElementById("receipt-reference").value.trim();
    let Error = document.getElementById("ReceiptReferenceError");

    if(Receipt === "")
    {
        Error.innerHTML = "Please Enter Receipt / Invoice Reference";
        return false;
    }
    else if(Receipt.length < 3)
    {
        Error.innerHTML = "Reference Must Be At Least 3 Characters";
        return false;
    }
    else
    {
        Error.innerHTML = "";
        return true;
    }
}


