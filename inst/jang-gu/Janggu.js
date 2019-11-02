let playSound = (e) => {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);

    if (audio) {
        audio.currentTime = 0; 
        audio.play();
        key.classList.add("playing");
    }
};

let removeTransition = e => {
    if (e.propertyName === "transform") {
    e.target.classList.remove("playing");
    }
};

document.addEventListener("keydown", playSound);

const ElList = document.querySelectorAll("div");

ElList.forEach(el => {
    el.addEventListener("transitionend", removeTransition);
});



