// let arr = [1, 2, 13, 4, 5]

// let number = arr[0];

// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > number) {
//         number = arr[i]
//     }
// }

// console.log(number)

const box = document.getElementsByClassName('box');

let maxheight = 0;

for (let i = 0; i < box.length; i++) {
    let height = box[i].offsetHeight;
    if (height > maxheight) {
        maxheight = height;
    }

}
console.log(maxheight);

for (let i = 0; i < box.length; i++) {
    box[i].style.height = maxheight + 'px';

    if (i % 2 == 0) {
        box[i].style.backgroundColor = 'red';
    } else {
        box[i].style.backgroundColor = 'yellow';
    }

}


