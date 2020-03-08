let countDownDate;

function load() {
    let now = new Date();
    countDownDate = new Date(now.getFullYear() + 1, 0, 1);
    document.getElementById("currentDate").innerText = "Today's date: " + now.toDateString() + " " + now.toLocaleTimeString();
    document.getElementById("futureDate").innerText = "Target date: " + countDownDate.toDateString() + " " + countDownDate.toLocaleTimeString();

    let x = setInterval(function () {
        now = new Date();
        document.getElementById("currentDate").innerText = "Today's date: " + now.toDateString() + " " + now.toLocaleTimeString();

        // This will return the milliseconds between the dates.
        let distance = countDownDate.getTime() - now.getTime();

        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
            + minutes + "m " + seconds + "s ";

        if (distance < 0) {
            clearInterval(x);
            document.getElementById("countdown").innerHTML = "PAST!";
        }
    }, 1000);
}

function changeDate() {
    let dateString = document.getElementById("datePick").value.split("-");  //.replace(/-/, "/").replace(/-/, "/");
    let timeString = document.getElementById("timePick").value.split(":");
    let newDate = new Date(dateString[0], dateString[1] - 1, dateString[2], timeString[0], timeString[1]);
    if (newDate instanceof Date && !isNaN(newDate.getTime())) {
        countDownDate = newDate;
        document.getElementById("futureDate").innerText = "Target date: " + countDownDate.toDateString() + " " + countDownDate.toLocaleTimeString();
    } else {
        // do nothing
        console.warn("That is not a date and time!");
    }
}