
function collect_application_data()
{
    let validClub = validateClub();
    let validSkills = validateSkills();
    let validPosition = validatePosition();
    let validOtherClubs = validateOtherClubs();
    let validTerms = validateTerms();

    if(validClub && validSkills && validPosition &&
       validOtherClubs && validTerms)
    {
        let Club = document.getElementById("club").value;
        let Skills = document.getElementById("skills").value.trim();
        let Position = document.getElementById("position").value;
        let OtherClubs = document.getElementById("otherClubs").value.trim();
        let Experience = document.getElementById("experience").value.trim();

        alert("Club Application Submitted Successfully!");

        console.log("Selected Club:", Club);
        console.log("Skills / Interests:", Skills);
        console.log("Preferred Position:", Position);
        console.log("Other Club Membership:", OtherClubs);
        console.log("Previous Experience:", Experience);
    }

    return false;
}


function validateClub()
{
    let Club = document.getElementById("club").value;
    let Error = document.getElementById("ClubError");

    if(Club === "")
    {
        Error.innerHTML = "Please Select a Club";
        return false;
    }
    else
    {
        Error.innerHTML = "";
        return true;
    }
}


function validateSkills()
{
    let Skills = document.getElementById("skills").value.trim();
    let Error = document.getElementById("SkillsError");

    if(Skills === "")
    {
        Error.innerHTML = "Please Enter Your Skills or Areas of Interest";
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
    let Position = document.getElementById("position").value;
    let Error = document.getElementById("PositionError");

    if(Position === "")
    {
        Error.innerHTML = "Please Select Your Preferred Position";
        return false;
    }
    else
    {
        Error.innerHTML = "";
        return true;
    }
}


function validateOtherClubs()
{
    let OtherClubs = document.getElementById("otherClubs").value.trim();
    let Error = document.getElementById("OtherClubsError");

    if(OtherClubs === "")
    {
        Error.innerHTML = "Please Mention Your Other Club Membership or Write No";
        return false;
    }
    else
    {
        Error.innerHTML = "";
        return true;
    }
}


function validateTerms()
{
    let Terms = document.getElementById("terms").checked;
    let Error = document.getElementById("TermsError");

    if(Terms === false)
    {
        Error.innerHTML = "Please Agree to the Terms and Conditions";
        return false;
    }
    else
    {
        Error.innerHTML = "";
        return true;
    }
}
