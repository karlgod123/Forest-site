const root = document.documentElement;

root.style.setProperty('--move-x', '0deg');
root.style.setProperty('--move-y', '0deg');

document.addEventListener('pointermove', event => {
    const moveX = (event.clientX - window.innerWidth / 2) * -0.005;
    const moveY = (event.clientY - window.innerHeight / 2) * -0.01;

    root.style.setProperty('--move-x', `${moveX}deg`);
    root.style.setProperty('--move-y', `${moveY}deg`);
});
