
function handleSendNotice() {
    let audience = document.getElementById("noticeAudience").value;
    let title = document.getElementById("noticeTitle").value;
    let body = document.getElementById("noticeBody").value;

    if (audience === "") {
        alert("Please select who will receive this notice.");
        return false;
    }
    if (title === "") {
        alert("Please enter a notice title.");
        return false;
    }
    if (body === "") {
        alert("Please enter the message body.");
        return false;
    }

    let historyList = document.getElementById("noticeHistoryList");

    
    let new_card = "<div class='history-card'>" +
        "<div class='card-top'>" +
            "<span class='audience-tag'>To: " + audience + "</span>" +
            "<span class='send-date'>Just now</span>" +
        "</div>" +
        "<h3>" + title + "</h3>" +
        "<p>" + body + "</p>" +
    "</div>";

    historyList.innerHTML = new_card + historyList.innerHTML;


    document.getElementById("noticeAudience").value = "";
    document.getElementById("noticeTitle").value = "";
    document.getElementById("noticeBody").value = "";

    alert("Announcement sent successfully!");
    return false; 
}