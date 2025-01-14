document.body.style.backgroundColor = "pink";

function changeBackgroundColor() {
    const background = document.getElementsByClassName("background")[0];
    const width = window.innerWidth;

    if (width <= 400) {
        background.style.backgroundColor = "yellow";
    } else if (width <= 800) {
        background.style.backgroundColor = "blue";
    } else if (width <= 1200) {
        background.style.backgroundColor = "orange";
    } else {
        background.style.backgroundColor = "pink";
    }
}
window.addEventListener("resize", changeBackgroundColor);
changeBackgroundColor();