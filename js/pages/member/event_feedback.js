function validate_feedback() {

    let eventName = document.getElementById("eventName").value.trim();

    let experience = document.querySelector(
        'input[name="experience"]:checked'
    );

    let organization = document.querySelector(
        'input[name="organization"]:checked'
    );

    let suggestions = document.getElementById("suggestions").value.trim();

    let attendAgain = document.querySelector(
        'input[name="attendAgain"]:checked'
    );


    document.getElementById("eventName-error").innerHTML = "";
    document.getElementById("experience-error").innerHTML = "";
    document.getElementById("organization-error").innerHTML = "";
    document.getElementById("suggestions-error").innerHTML = "";
    document.getElementById("attendAgain-error").innerHTML = "";


    let isValid = true;


    if (eventName === "") {

        document.getElementById("eventName-error").innerHTML =
            "Please enter the event name.";

        isValid = false;
    }


    if (experience === null) {

        document.getElementById("experience-error").innerHTML =
            "Please select your overall experience rating.";

        isValid = false;
    }


    if (organization === null) {

        document.getElementById("organization-error").innerHTML =
            "Please select the event organization rating.";

        isValid = false;
    }


    if (suggestions === "") {

        document.getElementById("suggestions-error").innerHTML =
            "Please provide your suggestions for improvement.";

        isValid = false;
    }


    if (attendAgain === null) {

        document.getElementById("attendAgain-error").innerHTML =
            "Please select whether you would attend again.";

        isValid = false;
    }


    if (isValid) {

        alert("Your feedback has been submitted successfully!");

        return true;
    }

    return false;

}