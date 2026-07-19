const stars = document.getElementById("stars");

if (stars) {
    for (let i = 0; i < 120; i++) {
        const star = document.createElement("div");
        star.classList.add("star");

        star.style.left = Math.random() * 100 + "vw";
        star.style.animationDuration = 2 + Math.random() * 6 + "s";
        star.style.animationDelay = Math.random() * 6 + "s";
        star.style.height = 40 + Math.random() * 120 + "px";

        stars.appendChild(star);
    }
}

const easterStar = document.getElementById("easterStar");
const loveScreen = document.getElementById("loveScreen");
const backButton = document.getElementById("backButton");
const heartContainer = document.getElementById("particleHeart");

function createHeartParticles() {
    heartContainer.innerHTML = "";

    const total = 250;

    for (let i = 0; i < total; i++) {
        const particle = document.createElement("div");
        particle.className = "particle";

        let t = Math.PI * 2 * i / total;
        let x = 16 * Math.pow(Math.sin(t), 3);
        let y = -(13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t));

        x *= 14;
        y *= 14;

        particle.style.setProperty("--hx", x + "px");
        particle.style.setProperty("--hy", y + "px");
        particle.style.setProperty("--x", Math.random() * 900 - 450 + "px");
        particle.style.setProperty("--y", Math.random() * 900 - 450 + "px");

        particle.style.animationDelay = Math.random() * 1.5 + "s";

        heartContainer.appendChild(particle);
    }

    setTimeout(() => {
        heartContainer.classList.add("complete");

        const particles = document.querySelectorAll(".particle");

        particles.forEach(particle => {
            particle.style.animation = "none";
            particle.style.transform = `translate(${particle.style.getPropertyValue("--hx")}, ${particle.style.getPropertyValue("--hy")}) scale(1)`;
            particle.style.opacity = "1";
        });
    }, 3000);
}

if (easterStar) {
    easterStar.addEventListener("click", () => {
        loveScreen.classList.add("active");
        createHeartParticles();
    });
}

if (backButton) {
    backButton.addEventListener("click", () => {
        loveScreen.classList.remove("active");

        setTimeout(() => {
            heartContainer.innerHTML = "";
            heartContainer.classList.remove("complete");
        }, 600);
    });
}

const butterflyContainer = document.querySelector(".butterflies");

for (let i = 0; i < 40; i++) {
    const butterfly = document.createElement("div");
    butterfly.className = "butterfly";
    butterfly.innerHTML = "🦋";

    butterfly.style.left = Math.random() * 100 + "%";
    butterfly.style.top = Math.random() * 100 + "%";
    butterfly.style.animationDuration = 8 + Math.random() * 15 + "s";
    butterfly.style.animationDelay = Math.random() * 10 + "s";
    butterfly.style.fontSize = 15 + Math.random() * 25 + "px";

    butterflyContainer.appendChild(butterfly);
}