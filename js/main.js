const stars = document.getElementById("stars");

for (let i = 0; i < 120; i++) {
    const star = document.createElement("div");
    star.classList.add("star");
    star.style.left = Math.random() * 100 + "vw";
    star.style.animationDuration = 2 + Math.random() * 6 + "s";
    star.style.animationDelay = Math.random() * 6 + "s";
    star.style.height = 40 + Math.random() * 120 + "px";
    stars.appendChild(star);
}

const typingName = document.getElementById("typing-name");
const name = "Shivani Sanggam";
let index = 0;
let deleting = false;

function animateName() {
    if (!deleting) {
        typingName.textContent = name.substring(0, index + 1);
        index++;

        if (index === name.length) {
            deleting = true;
            setTimeout(animateName, 1800);
            return;
        }
    } else {
        typingName.textContent = name.substring(0, index - 1);
        index--;

        if (index === 0) {
            deleting = false;
        }
    }

    setTimeout(animateName, deleting ? 70 : 120);
}

animateName();