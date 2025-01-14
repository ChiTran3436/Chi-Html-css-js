const counterElement = document.getElementsByClassName('counter')[0];
const saveTitleElement = document.getElementsByClassName('save-title')[0];

let counter = 0;

function updateCounter() {
    counterElement.textContent = counter;
}

const handleClick = (value) => {
    // if (value == 'decrease') {
    //     counter--;
    // }else if (value == 'increase') {
    //     counter++;
    // }else if (value == 'reset') {
    //     counter = 0;
    // }else {
    //     let xhtml = `<span class="hightlight"> ${counter} | </span>`;
    //     saveTitleElement.insertAdjacentHTML("beforeend",xhtml);
    //     counter = 0
    // }
    // updateCounter();
    switch (value) {
        case 'decrease':
            counter--;
        case 'increase':
            counter++;
        case 'reset':
            counter = 0;
        default:
            let xhtml = `<span class="hightlight"> ${counter} | </span>`;
            saveTitleElement.insertAdjacentHTML("beforeend", xhtml);
            counter = 0
            break;
    }
    updateCounter();
}



// document.getElementsByClassName('decrease')[0].addEventListener('click', () => {
//     counter--;
//     updateCounter();
// });


// document.getElementsByClassName('reset')[0].addEventListener('click', () => {
//     counter = 0;
//     updateCounter();
// });


// document.getElementsByClassName('increase')[0].addEventListener('click', () => {
//     counter++;
//     updateCounter();
// });


// document.getElementsByClassName('save')[0].addEventListener('click', () => {
//     let xhtml = `<span class="hightlight"> ${counter} | </span>`;
//     saveTitleElement.insertAdjacentHTML("beforeend",xhtml);
// });