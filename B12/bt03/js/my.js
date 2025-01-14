const elmbox = document.getElementById('elm-box-quote');
document.getElementById("elm-box-quote").style.textAlign = "center";
elmbox.style.backgroundColor = 'yellow';

const arr = ['js', 'php', 'java', 'C++', 'Python', 'html', 'css'];

let randomArr = '';

for (let i = 0; i < arr.length; i++) {
    const i = Math.floor(Math.random() * arr.length);
    randomArr = arr[i];
    break;
}

elmbox.textContent = randomArr;

const element = document.getElementById("elm-box-quote");
setInterval(function () { element.textContent += randomArr }, 2000);
