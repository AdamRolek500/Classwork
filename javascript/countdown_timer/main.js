function test() {
    let now = new Date();
    let future = new Date(2020, 4, 24);
    document.getElementById("currentDate").innerText = now.toDateString();
    document.getElementById("futureDate").innerText = future.toDateString();
    let difference = future - now;
    msToHMS(difference);
    console.log(difference)
}

function msToHMS( ms ) {
    // 1- Convert to seconds:
    let seconds = ms / 1000;
    let days = seconds / 86400;
    seconds = seconds % 86400;
    // 2- Extract hours:
    let hours = seconds / 3600; // 3,600 seconds in 1 hour
    seconds = seconds % 3600; // seconds remaining after extracting hours
    // 3- Extract minutes:
    let minutes = seconds / 60; // 60 seconds in 1 minute
    // 4- Keep only seconds not extracted to minutes:
    seconds = seconds % 60;
    console.log( days+":"+hours+":"+minutes+":"+seconds);
}
