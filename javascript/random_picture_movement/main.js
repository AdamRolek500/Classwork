let swch = true;
function move(elementID) {
    let windowHeight = window.innerHeight;
    let windowWidth = window.innerWidth;
    let newY = Math.floor(Math.random() * (windowHeight + 1 - 110));
    let newX = Math.floor(Math.random() * (windowWidth + 1 - 210));
    document.getElementById(elementID).style.left = newX.toString() + "px";
    document.getElementById(elementID).style.top = newY.toString() + "px";
    if (swch) {
        document.getElementById("img").src = "kitten_in_bed.png";
    } else {
        document.getElementById("img").src = "puppy_in_field.jpg";
    }
    swch = !swch;
}