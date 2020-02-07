function loadCalendar() {
    let today = new Date();
    let numOfDays = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
    let firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1).getDay();
    let calTable = document.getElementById("calTable");



    console.log(firstDayOfMonth);


    let row = calTable.insertRow();
    for (let i = 0; i < firstDayOfMonth; i++) {
        row.insertCell();
    }

    for (let i = firstDayOfMonth; i < numOfDays + firstDayOfMonth; i++) {
        let cell = row.insertCell();
        cell.innerHTML = toString(i - firstDayOfMonth);
    }

    // let i;
    // let j;
    // for (i = 0; i < numOfDays; i += j) {
    //     let row = calTable.insertRow();
    //     for (j = 0; j < 7 && i + j < numOfDays; j++) {
    //         let cell = row.insertCell();
    //         cell.innerHTML = i + j + 1;
    //     }
    // }
}