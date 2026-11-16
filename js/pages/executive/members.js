let count = 3;
let row_number = 4;


function add_volunteer() {
    let event_name = document.getElementById("event_name").value;
    let member_name = document.getElementById("member_name").value;
    let duty_name = document.getElementById("duty_name").value;

    if (event_name === "") {
        alert("Please select an event.");
        return false;
    }
    if (member_name === "") {
        alert("Please enter or select a member name.");
        return false;
    }
    if (duty_name === "") {
        alert("Please select a duty.");
        return false;
    }

    let table = document.getElementById("volunteer_table");
    let new_id = "vol_" + row_number;
    row_number = row_number + 1;

    let new_row = "<tr id='" + new_id + "'>" +
        "<td><strong>" + event_name + "</strong></td>" +
        "<td>" + member_name + "</td>" +
        "<td><span class='role-pill role-coordinator'>" + duty_name + "</span></td>" +
        "<td><button type='button' class='btn-action btn-reject' onclick=\"remove_volunteer('" + new_id + "')\">Remove</button></td>" +
        "</tr>";

    table.innerHTML = table.innerHTML + new_row;

    count = count + 1;
    document.getElementById("total_assigned").innerHTML = count + " Assigned";

    document.getElementById("event_name").value = "";
    document.getElementById("member_name").value = "";
    document.getElementById("duty_name").value = "";

    alert("Volunteer assigned successfully!");
    return false;
}


function remove_volunteer(row_id) {
    let row = document.getElementById(row_id);
    row.style.display = "none";

    count = count - 1;
    document.getElementById("total_assigned").innerHTML = count + " Assigned";
}

function change_role(dropdown, badge_id) {
    let new_role = dropdown.value;
    let badge = document.getElementById(badge_id);

    badge.innerHTML = new_role;

    if (new_role === "Executive") {
        badge.className = "role-pill role-exec";
    } else if (new_role === "Coordinator") {
        badge.className = "role-pill role-coordinator";
    } else if (new_role === "Volunteer") {
        badge.className = "role-pill role-volunteer";
    } else {
        badge.className = "role-pill role-member";
    }
}


function search_member() {
    let input = document.getElementById("search_box").value.toLowerCase();
    let table = document.getElementById("member_table");
    let rows = table.getElementsByTagName("tr");

    for (let i = 1; i < rows.length; i++) {
        let row_text = rows[i].innerText.toLowerCase();
        if (row_text.indexOf(input) > -1) {
            rows[i].style.display = "";
        } else {
            rows[i].style.display = "none";
        }
    }
}