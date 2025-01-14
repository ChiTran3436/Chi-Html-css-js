
let button = document.getElementById('demo')

let number = 1;

let fontSize = 10;
button.addEventListener("click", function () {
    number = number + 1
    button.innerHTML = number
    console.log(number)
    button.style.backgroundColor = "yellow";
    fontSize = fontSize + 1
    button.style.fontSize = fontSize + "px"
})

