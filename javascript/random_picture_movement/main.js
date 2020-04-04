let swch = true;
function move(elementID) {
    // Variables needed
    let windowHeight = window.innerHeight;
    let windowWidth = window.innerWidth;
    let newY = Math.floor(Math.random() * (windowHeight + 1 - 110)); // Generating the new Y cord
    let newX = Math.floor(Math.random() * (windowWidth + 1 - 210));  // Generating the new X cord
    // Setting the new X and Y
    document.getElementById(elementID).style.left = newX.toString() + "px";
    document.getElementById(elementID).style.top = newY.toString() + "px";
    // Using a switch to change the picture between a kitten and a puppy
    if (swch) {
        document.getElementById("img").src = "kitten_in_bed.png";
    } else {
        document.getElementById("img").src = "puppy_in_field.jpg";
    }
    swch = !swch;
}