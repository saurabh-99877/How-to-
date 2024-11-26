const btn = document.querySelector('#btn');
const video = document.querySelector('video');

btn.addEventListener('click', () => {
    btn.innerText = btn.innerText === 'Play' ? 'Pause' : 'Play';
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
})