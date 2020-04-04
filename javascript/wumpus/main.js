function onLoad() {
    let board = document.getElementById("board");

    for (let i = 0; i < 5; i++) {
        let newRow = board.insertRow(); // inserting a new row
        for (let j = 0; j < 5; j++) {
            let newCell = newRow.insertCell(); // inserting new cells
            newCell.setAttribute("class", "space");
            //newCell.setAttribute("onclick", "replaceCell(this)")
        }
    }

    // placing the Wumpus
    let r = Math.floor(Math.random() * 5);
    let c = Math.floor(Math.random() * 5);
    place_indicator(board, 'W', r, c);
    // adding the Stench
    place_indicator(board, 'S', r - 1, c);
    place_indicator(board, 'S', r + 1, c);
    place_indicator(board, 'S', r, c - 1);
    place_indicator(board, 'S', r, c + 1);
    place_indicator(board, 'S', r + 1, c + 1);
    place_indicator(board, 'S', r - 1, c - 1);
    place_indicator(board, 'S', r - 1, c + 1);
    place_indicator(board, 'S', r + 1, c - 1);


    // placing the Pits
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
    place_indicator(board, 'B', r - 1, c);
    place_indicator(board, 'B', r + 1, c);
    place_indicator(board, 'B', r, c - 1);
    place_indicator(board, 'B', r, c + 1);
    place_indicator(board, 'B', r + 1, c + 1);
    place_indicator(board, 'B', r - 1, c - 1);
    place_indicator(board, 'B', r - 1, c + 1);
    place_indicator(board, 'B', r + 1, c - 1);

    // placing the Player
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

// function replaceCell(node) {
//     console.log(node);
//     let newText  = document.createTextNode('W');
//     node.appendChild(newText);
// }

function place_indicator(board, indicator, r, c) {
    if (r >= 0 && r <= 4 && c >= 0 && c <= 4) {
        let indic = document.createTextNode(indicator);
        let cell = board.rows[r].cells[c];
        cell.appendChild(indic);
    }
}

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
}