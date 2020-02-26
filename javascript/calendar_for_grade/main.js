function loadCalendar() {
    let calTable = document.getElementById("calTable");
    let today = new Date(), y = today.getFullYear(), m = today.getMonth();
    let indexOfFirstDay = new Date(today.getFullYear(), today.getMonth(), 1).getDay();
    let numOfDaysInMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();

    // Make sure there is nothing in the table
    while(calTable.rows.length > 1) {
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
        if (i % 7 === 0) {
            row = calTable.insertRow();
        }
        let cell = row.insertCell();
        // This if/else will make sure the current day is highlighted
        if (i - indexOfFirstDay + 1 === today.getDate()){
            cell.setAttribute("class", "today");
        } else if (i % 7 === 0 || i % 7 === 6) {
            cell.setAttribute("class", "weekend");
            console.log("HEY");
        } else {
            cell.setAttribute("class", "notToday");
        }
        console.log(i);
        // Setting the innerHTML to the date
        cell.innerHTML = i - indexOfFirstDay + 1;
    }
}

