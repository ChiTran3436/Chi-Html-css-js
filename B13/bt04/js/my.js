document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        if (!img.getAttribute('src') || img.getAttribute('src').trim() === '') {
            img.src = 'img/default.jpg';
        }
    });
});




