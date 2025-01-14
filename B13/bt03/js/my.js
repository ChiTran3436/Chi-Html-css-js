const boxContent = document.getElementById('box').innerHTML;

if (box) {
    box.innerHTML = box.innerHTML.replace(
        /frontend/gi,
        '<span style="font-size: 20px; background-color: yellow;">frontend</span>');
}
