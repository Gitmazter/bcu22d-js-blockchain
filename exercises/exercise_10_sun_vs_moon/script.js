const background = document.getElementById('background');

i = 0;
background.addEventListener('click', function () {
    if (i === 0) {
        document.getElementById('background').src="img/moon.jpg";
        i++;
    } else {
        document.getElementById('background').src="img/sun.jpg";
        i--;
    }
 });