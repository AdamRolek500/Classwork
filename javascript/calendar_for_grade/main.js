window.dateNS = {};
function loadCalendar(act) {
    try {
        // Adding and subtracting based on input
        if (act === '>') {
            dateNS.month = dateNS.month + 1;
        } else if (act === '>>') {
            dateNS.year = dateNS.year + 1;
        } else if (act === '<') {
            dateNS.month = dateNS.month - 1;
        } else if (act === '<<') {
            dateNS.year = dateNS.year - 1;
        }
    } catch (e) {
        console.warn("The calendar has not been generated yet!");
        console.log("Generating the calendar for today instead.");
        act = 'T';
    }

    let calTable = document.getElementById("calTable");
    let date;
    if (act === 'T') {
        date = new Date();
    } else {
        date = new Date(dateNS.year, dateNS.month);
    }
    let y = date.getFullYear();
    let m = date.getMonth();
    let indexOfFirstDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    let numOfDaysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

    // Creating my own namespace to store values
    dateNS.month = m;
    dateNS.year = y;
    if (act === 'T') {
        dateNS.todayDay = date.getDate();
        dateNS.todayMonth = m;
        dateNS.todayYear = y;
    }

    // Setting the calendar header
    let months = ["Jan", "Feb", "Mar", "April", "May", "Jun", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
    document.getElementById("calHeader").innerHTML = months[dateNS.month] + " / " + dateNS.year;

    // Make sure there is nothing in the table
    while(calTable.rows.length > 2) {
        calTable.deleteRow(calTable.rows.length - 1);
    }

    // Inserting empty rows here
    let row = calTable.insertRow();
    let i;
    for (i = 0; i < indexOfFirstDay; i++) {
        let cell = row.insertCell();
        cell.setAttribute("class", "notToday");
    }

    // Inserting the rows for the days of the month
    for (i = indexOfFirstDay; i < numOfDaysInMonth + indexOfFirstDay; i++) {
        // Inserting a new row for every week
        if (i % 7 === 0) {
            row = calTable.insertRow();
        }
        let cell = row.insertCell();
        // This if/else will make sure the current day is highlighted
        if (i - indexOfFirstDay + 1 === dateNS.todayDay && m === dateNS.todayMonth && y === dateNS.todayYear){
            cell.setAttribute("class", "today");
        } else if (i % 7 === 0 || i % 7 === 6) {
            cell.setAttribute("class", "weekend");
        } else {
            cell.setAttribute("class", "notToday");
        }
        // Setting the innerHTML to the date
        cell.innerHTML = i - indexOfFirstDay + 1;
    }
}
