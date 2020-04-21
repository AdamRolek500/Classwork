function onLoad() {
    console.log("Loading the game...");
    window.started = false;
    window.addEventListener("keydown", onKeyDown, false);

    console.log("Starting the background music...");
    let audio = new Audio('background_noise.mp3');
    audio.addEventListener('ended', function() {
        this.currentTime = 0;
        this.play();
    }, false);
    audio.play();

    console.log("Initializing the map...");
    let board = document.getElementById("board");
    for (let i = 0; i < 5; i++) {
        let newRow = board.insertRow(); // inserting a new row
        for (let j = 0; j < 5; j++) {
            let newCell = newRow.insertCell(); // inserting new cells
            newCell.setAttribute("class", "space");
            newCell.setAttribute("onclick", "fireArrow(this)")
        }
    }

    console.log("Placing the Wumpus on the map...");
    let r = Math.floor(Math.random() * 5);
    let c = Math.floor(Math.random() * 5);
    place_indicator(board, 'W', r, c);
    console.log("Placing the Wumpus stench...");
    findingNeighbors(board, r, c, 'S');

    console.log("Placing the Pit on the map...");
    let placed = false;
    do {
        r = Math.floor(Math.random() * 5);
        c = Math.floor(Math.random() * 5);
        let cell = board.rows[r].cells[c];
        if (cell.innerHTML === "") { // I want a fresh space by design
            place_indicator(board, 'P', r, c);
            placed = true;
        }
    } while (!placed);
    console.log("Placing the Pit breeze...");
    findingNeighbors(board, r, c, 'B');

    console.log("Placing the Player on the map...");
    placed = false;
    do {
        r = Math.floor(Math.random() * 5);
        c = Math.floor(Math.random() * 5);
        let cell = board.rows[r].cells[c];
        if (cell.innerHTML === "") { // I want a fresh space by design
            cell.setAttribute("class", "active");
            placed = true;
            window.playerRow = r;
            window.playerCell = c;
        }
    } while (!placed);
}

function findingNeighbors(board, i, j, indicator) {
    let rowLimit = 4;
    let columnLimit = 4;
    for(let row = Math.max(0, i-1); row <= Math.min(i+1, rowLimit); row -= -1) {
        for(let cell = Math.max(0, j-1); cell <= Math.min(j+1, columnLimit); cell -= -1) {
            if(row !== i || cell !== j) {
                place_indicator(board, indicator, row, cell);
            }
        }
    }
}

function place_indicator(board, indicator, r, c) {
    if (r >= 0 && r <= 4 && c >= 0 && c <= 4) {
        let cell = board.rows[r].cells[c];
        let indic = document.createTextNode(indicator);
        cell.appendChild(indic);
    }
}

function fireArrow(node) {
    if (!window.started) {
        return;
    }
    let row = window.playerRow;
    let cell = window.playerCell;
    let playerRow = node.parentNode.rowIndex;
    let playerCell = node.cellIndex;
    if (dist(cell, playerCell, row, playerRow) <= 1.5) {
        if (node.innerHTML === "W"){
            // ===== WINING CONDITION =====
            clearTimeout(window.gameTime);
            window.started = false;
            addAlert("You Have Killed The Wumpus!");
            addAlert("You Win!");
        } else {
            console.log("Miss!");
            addAlert("You Missed The Wumpus...")
        }
    } else {
        addAlert("You Cannot Shoot That Far!");
        console.log("Out of Range!");
    }
}

function dist(x1, x2, y1, y2) {
    let xi = x2 - x1;
    let yi = y2 - y1;
    return Math.sqrt((xi * xi) + (yi * yi));
}
// TODO: Make sure the player is not moving off the board
function move(direction) {
    let board = document.getElementById("board");
    let cell = board.rows[window.playerRow].cells[window.playerCell];
    cell.setAttribute("class", "space");
    switch (direction) {
        case '^':
            window.playerRow--;
            break;
        case '<':
            window.playerCell--;
            break;
        case '>':
            window.playerCell++;
            break;
        case 'v':
            window.playerRow++;
            break;
    }

    cell = board.rows[window.playerRow].cells[window.playerCell];
    cell.setAttribute("class", "active");
    if (cell.innerHTML.includes("B") && cell.innerHTML.includes("S")){
        cell.style.backgroundImage = "url('both.gif')";
        addAlert("There Is A Breeze And A Stench, Be Careful...");
    } else if (cell.innerHTML.includes("S")) {
        cell.style.backgroundImage = "url('stench.gif')";
        addAlert("You Smell A Stench...");
    } else if (cell.innerHTML.includes("B")){
        cell.style.backgroundImage = "url('wind.gif')";
        addAlert("You Feel A Breeze...");
    } else if (cell.innerHTML === "W"){
        // ===== LOSING CONDITION =====
        clearTimeout(window.gameTime);
        window.started = false;
        addAlert("You Have Been Eaten By The Wumpus!");
        addAlert("You Lose!");
        cell.style.backgroundImage = "url('wumpus.gif')";
    } else if (cell.innerHTML === "P"){
        // ===== LOSING CONDITION =====
        clearTimeout(window.gameTime);
        window.started = false;
        addAlert("You Have Fallen Into A Pit!");
        addAlert("You Lose!");
        cell.style.backgroundImage = "url('pit.jpeg')";
    } else if (cell.innerHTML === ""){
        addAlert("This Space Is Calm...");
    }
}

function onKeyDown(event) {
    if (!window.started) {
        return;
    }
    let keyCode = event.keyCode;
    switch (keyCode) {
        case 68: //d
            move('>');
            break;
        case 83: //s
            move('v');
            break;
        case 65: //a
            move('<');
            break;
        case 87: //w
            move('^');
            break;
    }
}

function setLevel(selection){
    window.level = selection;
    console.log("Difficulty was set to: " + window.level);
    addAlert("Difficulty: " + window.level);

    let elementButtons = document.getElementsByClassName('levelButton');
    for (let i = 0; i < elementButtons.length; ++i) {
        let item = elementButtons[i];
        item.style.display = "none";
    }
    console.log("Removing the difficulty buttons...");

    console.log("Displaying the start button...");
    let startButton = document.getElementsByClassName("startButton");
    startButton[0].style.display = "initial";
}

function play() {
    console.log("Starting the game...");
    let startButton = document.getElementsByClassName("startButton");
    startButton[0].style.display = "none";
    window.started = true;

    addAlert("Game Has Started!");

    if (window.level === "Easy"){
        window.time = 120;
        setTimeout(timer, 1000);
    } else if (window.level === "Medium"){
        window.time = 60;
        setTimeout(timer, 1000);
    } else {
        window.time = 30;
        setTimeout(timer, 1000);
    }
    document.getElementById("time").innerHTML = "Time Left (Seconds): " + window.time;
}

function timer() {
    window.time--;
    if(window.time > 0){
        window.gameTime = setTimeout(timer,1000);
    } else {
        // ===== LOSING CONDITION =====
        clearTimeout(window.gameTime);
        window.started = false;
        addAlert("Out Of Time!");
        addAlert("You Lose!");
    }
    document.getElementById("time").innerHTML = "Time Left (Seconds): " + window.time;
}

function addAlert(alert) {
    let ul = document.getElementById("alerts");
    let li = document.createElement("li");
    li.innerHTML = alert;
    ul.insertBefore(li, ul.firstChild);
}
