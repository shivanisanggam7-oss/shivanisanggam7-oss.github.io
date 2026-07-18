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