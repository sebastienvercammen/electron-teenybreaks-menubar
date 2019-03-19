// Some easy DOM references.
const body = document.getElementsByTagName('body')[0];
const elTip = document.getElementById('tip-title');
const elDescription = document.getElementById('tip-description');

// General methods.
function randomNumber(min, max) {
    return (Math.random() * (max - min + 1)) << 0;
}

function setText(title, text) {
    // We use innerHTML to enable HTML tags like "&mdash;".
    elTip.innerHTML = title;
    elDescription.innerHTML = text;
}

function setBackground(url) {
    body.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("${url}")`;
}

var lastTip = 0;
function randomTip() {
    var newRandom = lastTip;

    // Make sure they get a new tip.
    while (newRandom == lastTip) {
        newRandom = randomNumber(0, window.tips.length - 1);
    }

    setTip(newRandom);
}

function setTip(index) {
    lastTip = index;

    // window.tips is loaded by app.js from teenybreaks.
    const data = window.tips[index];
    setText(data.title, data.desc);
    setBackground(data.bg);
}

// Let's do things.
randomTip();
