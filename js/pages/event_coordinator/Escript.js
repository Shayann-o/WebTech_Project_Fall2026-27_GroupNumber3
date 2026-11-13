
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



console.log("Create Club Events Page Connected");

function collect_event_data()
{
    let validEventName = validateEventName();
    let validEventType = validateEventType();
    let validEventDate = validateEventDate();
    let validEventTime = validateEventTime();
    let validVenue = validateVenue();
    let validParticipantLimit = validateParticipantLimit();
    let validGuestDetails = validateGuestDetails();
    let validDescription = validateDescription();

    if(validEventName && validEventType && validEventDate &&
       validEventTime && validVenue && validParticipantLimit &&
       validGuestDetails && validDescription)
    {
        alert("Event Created Successfully!");
    }

    return false;
}


function validateEventName()
{
    let EventName = document.getElementById("event-name").value.trim();
    let Error = document.getElementById("EventNameError");

    if(EventName === "")
    {
        Error.innerHTML = "Please Enter Event Name";
        return false;
    }
    else if(EventName.length < 3)
    {
        Error.innerHTML = "Event Name Must Be At Least 3 Characters";
        return false;
    }
    else
    {
        Error.innerHTML = "";
        return true;
    }
}


function validateEventType()
{
    let EventType = document.getElementById("event-type").value;
    let Error = document.getElementById("EventTypeError");

    if(EventType === "")
    {
        Error.innerHTML = "Please Select Event Type";
        return false;
    }
    else
    {
        Error.innerHTML = "";
        return true;
    }
}


function validateEventDate()
{
    let EventDate = document.getElementById("event-date").value;
    let Error = document.getElementById("EventDateError");

    let Today = new Date(); // Get today's date ... date is a built-in JavaScript object.
    Today.setHours(0, 0, 0, 0); // to compare only the date part, ignoring time

    let SelectedDate = new Date(EventDate + "T00:00:00"); //added "T00:00:00" to ensure the time is set to midnight for accurate comparison

    if(EventDate === "")
    {
        Error.innerHTML = "Please Select Event Date";
        return false;
    }
    else if(SelectedDate < Today)
    {
        Error.innerHTML = "Event Date Cannot Be In The Past";
        return false;
    }
    else
    {
        Error.innerHTML = "";
        return true;
    }
}

// EVENT TIME
function validateEventTime()
{
    let EventTime = document.getElementById("event-time").value;
    let Error = document.getElementById("EventTimeError");

    if(EventTime === "")
    {
        Error.innerHTML = "Please Select Event Time";
        return false;
    }
    else
    {
        Error.innerHTML = "";
        return true;
    }
}

// VENUE
function validateVenue()
{
    let Venue = document.getElementById("event-venue").value.trim();
    let Error = document.getElementById("VenueError");

    if(Venue === "")
    {
        Error.innerHTML = "Please Enter Event Venue";
        return false;
    }
    else
    {
        Error.innerHTML = "";
        return true;
    }
}


function validateParticipantLimit()
{
    let Limit = document.getElementById("participant-limit").value;
    let Error = document.getElementById("ParticipantLimitError");
    let expression = /^[0-9]+$/;
    if(Limit === "")
    {
        Error.innerHTML = "Please Enter Participant Limit";
        return false;
    }
    else if(!expression.test(Limit) || Number(Limit) <= 0)
    {
        Error.innerHTML = "Participant Limit Must Be A Positive Number";
        return false;
    }
    else
    {
        Error.innerHTML = "";
        return true;
    }
}


function validateGuestDetails()
{
    let GuestDetails = document.getElementById("guest-details").value.trim();
    let Error = document.getElementById("GuestDetailsError");

    if(GuestDetails === "")
    {
        Error.innerHTML = "Please Enter Guest Information";
        return false;
    }
    else
    {
        Error.innerHTML = "";
        return true;
    }
}


function validateDescription()
{
    let Description = document.getElementById("event-description").value.trim();
    let Error = document.getElementById("DescriptionError");

    if(Description === "")
    {
        Error.innerHTML = "Please Enter Event Description";
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






console.log("Update Event Schedule Page Connected");

function collect_schedule_data()
{
    let validEvent = validateEvent();
    let validDate = validateNewDate();
    let validTime = validateNewTime();
    let validVenue = validateNewVenue();
    let validReason = validateReason();

    if(validEvent && validDate && validTime && validVenue && validReason)
    {
        alert("Event Schedule Updated Successfully!");
    }

    return false;
}


function validateEvent()
{
    let Event = document.getElementById("schedule-event").value;
    let Error = document.getElementById("EventError");

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

function validateNewDate()
{
    let NewDate = document.getElementById("new-date").value;
    let Error = document.getElementById("NewDateError");

    let Today = new Date();
    Today.setHours(0, 0, 0, 0);

    let SelectedDate = new Date(NewDate + "T00:00:00");

    if(NewDate === "")
    {
        Error.innerHTML = "Please Select New Event Date";
        return false;
    }
    else if(SelectedDate < Today)
    {
        Error.innerHTML = "New Event Date Cannot Be In The Past";
        return false;
    }
    else
    {
        Error.innerHTML = "";
        return true;
    }
}


function validateNewTime()
{
    let NewTime = document.getElementById("new-time").value;
    let Error = document.getElementById("NewTimeError");

    if(NewTime === "")
    {
        Error.innerHTML = "Please Select New Event Time";
        return false;
    }
    else
    {
        Error.innerHTML = "";
        return true;
    }
}


function validateNewVenue()
{
    let NewVenue = document.getElementById("new-venue").value.trim();
    let Error = document.getElementById("NewVenueError");

    if(NewVenue === "")
    {
        Error.innerHTML = "Please Enter New Venue";
        return false;
    }
    else if(NewVenue.length < 3)
    {
        Error.innerHTML = "Venue Must Be At Least 3 Characters";
        return false;
    }
    else
    {
        Error.innerHTML = "";
        return true;
    }
}


function validateReason()
{
    let Reason = document.getElementById("schedule-reason").value.trim();
    let Error = document.getElementById("ReasonError");

    if(Reason === "")
    {
        Error.innerHTML = "Please Enter Reason For Schedule Change";
        return false;
    }
    else if(Reason.length < 10)
    {
        Error.innerHTML = "Reason Must Be At Least 10 Characters";
        return false;
    }
    else
    {
        Error.innerHTML = "";
        return true;
    }
}


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





console.log("Volunteer Assignment Page Connected");


function collect_volunteer_assignment_data()
{
    let validEvent = validateAssignmentEvent();
    let validVolunteer = validateAssignmentVolunteer();
    let validDate = validateAssignmentDate();
    let validTask = validateAssignmentTask();

    if(validEvent && validVolunteer && validDate && validTask)
    {
        let Event = document.getElementById("assignment-event").value;
        let Volunteer = document.getElementById("assignment-volunteer").value;

        alert(Volunteer + " has been assigned to " + Event + " successfully!");

    }

    return false;
}


// VALIDATE EVENT

function validateAssignmentEvent()
{
    let Event = document.getElementById("assignment-event").value;
    let Error = document.getElementById("AssignmentEventError");

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


// VALIDATE VOLUNTEER

function validateAssignmentVolunteer()
{
    let Volunteer = document.getElementById("assignment-volunteer").value;
    let Error = document.getElementById("AssignmentVolunteerError");

    if(Volunteer === "")
    {
        Error.innerHTML = "Please Select A Volunteer";
        return false;
    }
    else
    {
        Error.innerHTML = "";
        return true;
    }
}


// VALIDATE ASSIGNMENT DATE

function validateAssignmentDate()
{
    let AssignmentDate = document.getElementById("assignment-date").value;
    let Error = document.getElementById("AssignmentDateError");

    let Today = new Date();
    Today.setHours(0, 0, 0, 0);

    let SelectedDate = new Date(AssignmentDate + "T00:00:00");

    if(AssignmentDate === "")
    {
        Error.innerHTML = "Please Select Assignment Date";
        return false;
    }
    else if(SelectedDate < Today)
    {
        Error.innerHTML = "Assignment Date Cannot Be In The Past";
        return false;
    }
    else
    {
        Error.innerHTML = "";
        return true;
    }
}


// VALIDATE RESPONSIBILITY

function validateAssignmentTask()
{
    let Task = document.getElementById("volunteer-task").value;
    let Error = document.getElementById("AssignmentTaskError");

    if(Task === "")
    {
        Error.innerHTML = "Please Select A Responsibility";
        return false;
    }
    else
    {
        Error.innerHTML = "";
        return true;
    }
}
