
function collect_schedule_data() {

    let classDays = document.getElementById("class-days").value;
    let classTime = document.getElementById("class-time").value;

    let availableTime = document.getElementById("available-time").value;

    let clubDays = document.querySelectorAll(
        'input[name="club-days[]"]:checked'
    );

    let partTimeJob = document.getElementById("part-time-job").value;
    let jobDetails = document.getElementById("job-details").value.trim();

    document.getElementById("ClassDaysError").innerHTML = "";
    document.getElementById("ClassTimeError").innerHTML = "";
    document.getElementById("ClubDaysError").innerHTML = "";
    document.getElementById("AvailableTimeError").innerHTML = "";
    document.getElementById("PartTimeJobError").innerHTML = "";
    document.getElementById("JobDetailsError").innerHTML = "";

    if (classDays === "") {
        document.getElementById("ClassDaysError").innerHTML =
            "Please select your alternate class days.";
    }

    if (classTime === "") {
        document.getElementById("ClassTimeError").innerHTML =
            "Please select your class time.";
    }

    if (clubDays.length === 0) {
        document.getElementById("ClubDaysError").innerHTML =
            "Please select at least one available club day.";
    }

    if (availableTime === "") {
        document.getElementById("AvailableTimeError").innerHTML =
            "Please select your available time.";
    }

    if (partTimeJob === "") {
        document.getElementById("PartTimeJobError").innerHTML =
            "Please select whether you have a part-time job.";
    }

    if (partTimeJob === "Yes" && jobDetails === "") {
        document.getElementById("JobDetailsError").innerHTML =
            "Please provide your part-time job details.";
    }

    if (
        classDays === "" ||
        classTime === "" ||
        clubDays.length === 0 ||
        availableTime === "" ||
        partTimeJob === "" ||
        (partTimeJob === "Yes" && jobDetails === "")
    ) {
        return false;
    }

    alert("Your schedule has been successfully submitted!");

    return true;

}
