// const ELEMENT_content = document.querySelector('.content');
// const ELEMENT_btn_decrease = document.querySelector('.btn-decrease');
// const ELEMENT_btn_increase = document.querySelector('.btn-increase');
// const ELEMENT_line_space = document.getElementById('line-space');
// const ELEMENT_line_space_label = document.querySelector('label[for="line-space"]');
// const ELEMENT_alignment = document.getElementById('alignment');
// const ELEMENT_text_color = document.getElementById("text-color");

// function changeSize(size) {
//     ELEMENT_content.style.fontSize = `${size}px`;
// }
// ELEMENT_btn_decrease.addEventListener('click', () => {
//     let currentSize = parseInt(window.getComputedStyle(ELEMENT_content).fontSize, 10) || 16;
//     let newFontSize = currentSize - 2;
//     changeSize(newFontSize);

// });

// ELEMENT_btn_increase.addEventListener('click', () => {
//     let currentSize = parseInt(window.getComputedStyle(ELEMENT_content).fontSize, 10) || 16;
//     let newFontSize = currentSize + 2;
//     changeSize(newFontSize);
// });

// ELEMENT_line_space.addEventListener('input', () => {
//     let lineHeight = ELEMENT_line_space.value;
//     ELEMENT_content.style.lineHeight = lineHeight;
//     ELEMENT_line_space_label.textContent = `Cách Dòng (${lineHeight})`;
// });

// ELEMENT_alignment.addEventListener('change', () => {
//     let alignment = ELEMENT_alignment.value;
//     ELEMENT_content.style.textAlign = alignment;
// });

// // ELEMENT_COLOR.addEventListener('click', () => {
// //     let backgroundColor = ELEMENT_COLOR.style.backgroundColor;
// //     console.log(backgroundColor);
// // })

// const changeColor = (color) => {
//     console.log(color);
//     ELEMENT_content.style.backgroundColor = color;
// }

// ELEMENT_text_color.addEventListener('input', () => {
//     let value = ELEMENT_text_color.value;
//     ELEMENT_content.style.color = value;
// })