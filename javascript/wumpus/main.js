function onLoad() {
    let board = document.getElementById("board");
    // Setting up some music for the game
    let audio = new Audio('background_noise.mp3');
    audio.addEventListener('ended', function() {
        this.currentTime = 0;
        this.play();
    }, false);
    audio.play();

    for (let i = 0; i < 5; i++) {
        let newRow = board.insertRow(); // inserting a new row
        for (let j = 0; j < 5; j++) {
            let newCell = newRow.insertCell(); // inserting new cells
            newCell.setAttribute("class", "space");
            newCell.setAttribute("onclick", "fireArrow(this)")
        }
    }

    // placing the Wumpus
    let r = Math.floor(Math.random() * 5);
    let c = Math.floor(Math.random() * 5);
    place_indicator(board, 'W', r, c);
    // adding the stench
    findingNeighbors(board, r, c, 'stench');

    // placing the Pits, I want this in an empty space.
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
    // adding the breeze
    findingNeighbors(board, r, c, 'B');

    // placing the Player, I want the player starting on an empty space.
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
    for(let row = Math.max(0, i-1); row <= Math.min(i+1, rowLimit); row++) {
        for(let cell = Math.max(0, j-1); cell <= Math.min(j+1, columnLimit); cell++) {
            if(row !== i || cell !== j) {
                place_indicator(board, indicator, row, cell);
            }
        }
    }
}

function place_indicator(board, indicator, r, c) {
    if (r >= 0 && r <= 4 && c >= 0 && c <= 4) {
        // <img src="H.gif" alt="" border=3 height=100 width=100>
        let cell = board.rows[r].cells[c];
        let indic = document.createTextNode(indicator);
        cell.appendChild(indic);
        cell.innerHTML = "<img src='wind.gif' height=50 width=50>";
        // cell.setAttribute("data-indic", indicator);
    }
}

function fireArrow(node) {
    let row = window.playerRow;
    let cell = window.playerCell;
    let playerRow = node.parentNode.rowIndex;
    let playerCell = node.cellIndex;
    if (dist(cell, playerCell, row, playerRow) <= 1.5) {
        if (node.innerHTML === "W"){
            // TODO: Implement a better win.
            alert("You Win!");
        } else {
            console.log("Miss!");
            // TODO: Tell player they missed.
        }
    } else {
        // TODO: Tell player they are not in range.
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
    if (cell.innerHTML === "P" || cell.innerHTML === "W") {
        alert("You Lose!");
        // TODO: Implement a real lose screen? Refresh?
    }
}
