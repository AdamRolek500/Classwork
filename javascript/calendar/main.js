function loadCalendar() {
    let calTable = document.getElementById("calTable");
    let today = new Date(), y = today.getFullYear(), m = today.getMonth();
    let dateForString = new Date(y, m, 1);
    let indexOfFirstDay = new Date(today.getFullYear(), today.getMonth(), 1).getDay();
    let numOfDaysInMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();


    // Inserting empty rows here
    let row = calTable.insertRow();
    let i;
    for (i = 0; i < indexOfFirstDay; i++) {
        row.insertCell();
    }
    // Inserting the rows for the days of the month
    for (i = indexOfFirstDay; i < numOfDaysInMonth + indexOfFirstDay; i++) {
        if (i % 7 === 0) {
            row = calTable.insertRow();
        }
        let cell = row.insertCell();
        let temp = document.getElementById("calPane");
        let pane = temp.content.cloneNode(true);
        pane.getElementById("paneDate").innerHTML = i - indexOfFirstDay + 1;
        pane.getElementById("paneDate").setAttribute("id", dateForString.toDateString());
        pane.getElementById("paneDiv").setAttribute("id", dateForString.toDateString());
        cell.appendChild(pane);
        dateForString.setDate(dateForString.getDate() + 1);
    }
}

function addEvent(event) {
    alert(event.target.id);
}

function test(event) {
    event.stopPropagation();
    alert("qwerty");
}