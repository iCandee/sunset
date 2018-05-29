setTimeout(() => {
    setStars();
}, 20000);

const starCount = 50;
let stars = 0;

function setStars() {
    const span = document.createElement('span');
    const rand = parseInt((Math.random() * 2) + 1) + 'px';
    span.classList.add('star');
    span.style.width = rand;
    span.style.height = rand;
    span.style.right = parseInt(Math.random() * 99) + '%';
    span.style.top = parseInt(Math.random() * 100) + '%';
    span.style.animation = 'star-glow ' + (parseInt(Math.random() * 3) + 1) + 's ease-in-out alternate infinite';
    document.getElementsByTagName('body')[0].appendChild(span);
    stars++;
    if(stars > starCount) {
        return;
    }
    else {
        setTimeout(() => setStars(), (Math.random() * 1000));
    }
}