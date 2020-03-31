let my_square;
let my_circle;

function startGame() {
    my_square = new square(30, 30, "red", 10, 120);
    my_circle = new circle(15, "blue", 455, 135);
    myGameArea.start();
}

let myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 480;
        this.canvas.height = 270;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 20);
    },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
};

function square(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;
    this.x = x;
    this.y = y;
    this.update = function() {
        ctx = myGameArea.context;
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    };
    this.newPos = function() {
        this.x += this.speedX;
        this.y += this.speedY;
    };
}

function circle(rad, color, x, y) {
    this.rad = rad;
    this.speedX = 0;
    this.speedY = 0;
    this.x = x;
    this.y = y;
    this.update = function() {
        ctx = myGameArea.context;
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.rad,0,2*Math.PI);
        ctx.fill();
    };
    this.newPos = function() {
        this.x += this.speedX;
        this.y += this.speedY;
    };
}

function updateGameArea() {
    myGameArea.clear();
    my_square.newPos();
    my_square.update();
    my_circle.newPos();
    my_circle.update();
}

function moveup() {
    my_square.speedY -= 1;
}

function movedown() {
    my_square.speedY += 1;
}

function moveleft() {
    my_square.speedX -= 1;
}

function moveright() {
    my_square.speedX += 1;
}

function stopMove() {
    my_square.speedX = 0;
    my_square.speedY = 0;
    my_circle.speedX = 0;
    my_circle.speedY = 0;
}

function moveup_circle() {
    my_circle.speedY -= 1;
}

function movedown_circle() {
    my_circle.speedY += 1;
}

function moveleft_circle() {
    my_circle.speedX -= 1;
}

function moveright_circle() {
    my_circle.speedX += 1;
}