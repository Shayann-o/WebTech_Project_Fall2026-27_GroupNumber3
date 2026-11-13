
function collect_schedule_data() {

    // Get class schedule information
    let classDays = document.getElementById("class-days").value;

    let classTime = document.getElementById("class-time").value;


    // Get club availability information
    let availableTime = document.getElementById("available-time").value;

    let clubDays = document.querySelectorAll(
        'input[name="club-days[]"]:checked'
    );


    // Get part-time job information
    let partTimeJob = document.getElementById("part-time-job").value;

    let jobDetails = document.getElementById("job-details").value.trim();


    // 1. Validate alternate class days
    if (classDays === "") {

        alert("Please select your alternate class days.");

        return false;
    }


    // 2. Validate class time
    if (classTime === "") {

        alert("Please select your class time.");

        return false;
    }


    // 3. Validate available club days
    if (clubDays.length === 0) {

        alert("Please select at least one available club day.");

        return false;
    }


    // 4. Validate available time
    if (availableTime === "") {

        alert("Please select your available time.");

        return false;
    }


    // 5. Validate part-time job status
    if (partTimeJob === "") {

        alert("Please select whether you have a part-time job.");

        return false;
    }


    // 6. Validate job details if the user has a job
    if (partTimeJob === "Yes" && jobDetails === "") {

        alert("Please provide your part-time job details.");

        return false;
    }


    // All validations passed
    alert("Your schedule has been successfully submitted!");

    return true;

}
