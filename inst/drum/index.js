const close = new Audio("./audio/close.mp3"),
    open = new Audio("./audio/open.mp3"),
    crash = new Audio("./audio/left-crash.wav"),
    ride = new Audio("./audio/right-ride.wav"),
    tom = new Audio("./audio/tom.mp3"),
    snare = new Audio("./audio/snare-drum.wav"),
    floor = new Audio("./audio/floor-drum.mp3"),
    china = new Audio("./audio/china.mp3"),
    base = new Audio("./audio/bass.mp3");

const button = document.getElementsByClassName("button");

function playAudio(num) {
    switch(num) {
        case 1: 
        case 5:
            crash.volume = 0.4;
            crash.currentTime = 0.2;
            crash.play();
            break;
        case 2:
            crash.volume = 0.8;
            crash.currentTime = 1;
            crash.play();
            break;

        case 3: 
            close.volume = 0.7;
            close.currentTime = 1;
            close.play();
            break;
        case 4:
            open.volume = 0.8;
            open.currentTime = 1;
            open.play();
            break;
        case 6:
            ride.volume = 0.3;
            ride.currentTime = 2;
            ride.play();
            break;
        case 7:
            china.volume = 0.2;
            china.currentTime = 10;
            china.play();
            break;
        case 8: 
        case 9:
            tom.volume = 1;
            tom.currentTime = 10;
            tom.play();
            break;
        case 10:
             base.volume = 1;
             base.currentTime = 10;
             base.play();
             console.log(1);
            break;
        case 11:
            snare.volume = 0.2;
            snare.currentTime = 1;
            snare.play();
            break;
        case 12:
            floor.volume = 0.5;
            floor.currentTime = 10;
            floor.play();
            break;
        default:
    };
}

let keyPressed = {
    ckey: false
};

document.addEventListener('keydown', function (target) {
    const k = target.key;
    console.log(this);
    // console.log(event);
    if(k === 'r') {
        playAudio(1);
        button[0].style.color = "red";
        setTimeout(() => {
            button[0].style.color = "black";
        }, 200);
    } else if(k === 'd') {
        playAudio(2);

        button[1].style.color = "red";
        setTimeout(() => {
            button[1].style.color = "black";
        }, 200);
    } else if(k === 'c' && keyPressed.ckey === true) {
        playAudio(4);
        button[3].style.color = "red";
        setTimeout(() => {
            button[3].style.color = "black";
        }, 200);
    } else if(k === 'c')  {
        playAudio(3);
        button[2].style.color = "red";
        setTimeout(() => {
            button[2].style.color = "black";
        }, 200);
    } else if(k === 'Control') {
        keyPressed.ckey = true;
    } else if(k === 'i') {
        playAudio(5);
        button[3].style.color = "red";
        setTimeout(() => {
            button[3].style.color = "black";
        }, 200);
    } else if(k === 'k') {
        playAudio(6);
        button[4].style.color = "red";
        setTimeout(() => {
            button[4].style.color = "black";
        }, 200);
    } else if(k === 'm') {
        playAudio(7);
        button[5].style.color = "red";
        setTimeout(() => {
            button[5].style.color = "black";
        }, 200);
    } else if(k === 'g') {
        playAudio(8);
        button[6].style.color = "red";
        setTimeout(() => {
            button[6].style.color = "black";
        }, 200);
    } else if(k === 'h') {
        playAudio(9);
        button[7].style.color = "red";
        setTimeout(() => {
            button[7].style.color = "black";
        }, 200);
    } else if(k === ' ') {
        playAudio(10);
        button[8].style.color = "red";
        setTimeout(() => {
            button[8].style.color = "black";
        }, 200);
    } else if(k === 'f') {
        playAudio(11);
        button[9].style.color = "red";
        setTimeout(() => {
            button[9].style.color = "black";
        }, 200);
    } else if(k === 'j') {
        playAudio(12);
        button[10].style.color = "red";
        setTimeout(() => {
            button[10].style.color = "black";
        }, 200);
    }
});

document.addEventListener('keyup', (target) => {
    const k = target.key;
    if(k == 'Control') {
        keyPressed.ckey = false;
    }
});