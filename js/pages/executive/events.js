let row_num = 4;


function add_event() {
    let title = document.getElementById("event_title").value;
    let type = document.getElementById("event_type").value;
    let date = document.getElementById("event_date").value;
    let time = document.getElementById("event_time").value;
    let venue = document.getElementById("event_venue").value;

    
    if (title === "" || type === "" || date === "" || time === "" || venue === "") {
        alert("Please fill in all fields!");
        return false;
    }


    let table = document.getElementById("event_table");
    let status_id = "status_" + row_num;
    let btn_id = "btn_" + row_num;
    row_num = row_num + 1;

    let new_row = "<tr>" +
        "<td><strong>" + title + "</strong></td>" +
        "<td>" + type + "</td>" +
        "<td>" + date + " at " + time + "</td>" +
        "<td>" + venue + "</td>" +
        "<td><span class='status-pill status-active' id='" + status_id + "'>Scheduled</span></td>" +
        "<td><button type='button' class='btn-cancel' id='" + btn_id + "' onclick=\"cancel_event('" + status_id + "', '" + btn_id + "')\">Cancel</button></td>" +
        "</tr>";

    table.innerHTML = table.innerHTML + new_row;

    
    document.getElementById("event_title").value = "";
    document.getElementById("event_type").value = "";
    document.getElementById("event_date").value = "";
    document.getElementById("event_time").value = "";
    document.getElementById("event_venue").value = "";

    alert("Event added!");
    return false;
}


function cancel_event(status_id, btn_id) {
    let badge = document.getElementById(status_id);
    let btn = document.getElementById(btn_id);

    badge.innerHTML = "Cancelled";
    badge.className = "status-pill status-cancelled";

    btn.innerHTML = "Cancelled";
    btn.disabled = true;
}