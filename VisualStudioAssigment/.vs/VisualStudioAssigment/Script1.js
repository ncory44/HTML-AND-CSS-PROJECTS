let banana = document.getElementById("banana");
let position = 0;
let direction = 1;

function animateBanana() {
    position += 2 * direction;
    banana.style.left = position + "px";

    if (position >= 300 || position <= 0) {
        direction *= -1;
    }

    requestAnimationFrame(animateBanana);
}

animateBanana();
