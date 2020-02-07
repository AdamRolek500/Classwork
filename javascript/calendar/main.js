function loadCalendar() {
    let calTable = document.getElementById("calTable");

    let today = new Date(), y = today.getFullYear(), m = today.getMonth();
    let dateForString = new Date(y, m, 1);
    let indexOfFirstDay = new Date(today.getFullYear(), today.getMonth(), 1).getDay();
    let numOfDaysInMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();



    console.log(dateForString);

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

        let btn = document.createElement('input');
        btn.type = "button";
        btn.className = "btn";
        btn.value = i - indexOfFirstDay + 1;
        btn.setAttribute("data-date", dateForString.toDateString());
        btn.setAttribute("onClick", "addEvent(this.getAttribute('data-date'))");
        cell.appendChild(btn);
        dateForString.setDate(dateForString.getDate() + 1);
    }

    // let i;
    // let j;
    // for (i = 0; i < numOfDaysInMonth; i += j) {
    //     let row = calTable.insertRow();
    //     for (j = 0; j < 7 && i + j < numOfDaysInMonth; j++) {
    //         let cell = row.insertCell();
    //         cell.innerHTML = i + j + 1;
    //     }
    // }
}

function addEvent(date) {
    alert(date)
}