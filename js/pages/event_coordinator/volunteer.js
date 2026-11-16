
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
