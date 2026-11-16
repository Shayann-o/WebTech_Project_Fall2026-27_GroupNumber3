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
