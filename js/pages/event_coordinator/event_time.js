

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