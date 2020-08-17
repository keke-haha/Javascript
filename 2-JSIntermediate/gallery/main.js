const fullImg = document.querySelector('.full-img');
const displayImg = document.querySelector('.display-img');
const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');
const thumbBar = document.querySelector('.thumb-bar');

let imagesFilePath = ['images/pic1.jpg', 'images/pic2.jpg', 'images/pic3.png', 'images/pic4.jpg', 'images/pic5.jpg'];

for (let i = 0; i < 5; ++ i) {
    const tmpImg = document.createElement('img');
    tmpImg.setAttribute('src', imagesFilePath[i]);
    tmpImg.onclick = function (e) {
        e.stopPropagation();
        displayImg.setAttribute('src', tmpImg.getAttribute('src'));
    }
    thumbBar.appendChild(tmpImg);
}

btn.onclick = function () {
    const btnClass = btn.getAttribute('class');
    if (btnClass === 'dark') {
        btn.setAttribute('class', 'light');
        btn.textContent = '变暗';
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    }
    else {
        btn.setAttribute('class', 'dark');
        btn.textContent = '变亮';
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
}
