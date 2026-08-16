/* ==========================================
   ALERT VISION
   Project Information Website
========================================== */


/* ================= MOBILE MENU ================= */

const menuBtn = document.getElementById("menuBtn");
const nav = document.querySelector(".navbar nav");

menuBtn.addEventListener("click", () => {

    nav.classList.toggle("mobile-open");

});


/* Close mobile menu after clicking a link */

document.querySelectorAll(".navbar nav a").forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("mobile-open");

    });

});


/* ================= NAVBAR SCROLL ================= */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {

        navbar.style.background = "rgba(5,6,9,0.92)";

    } else {

        navbar.style.background = "rgba(5,6,9,0.75)";

    }

});


/* ================= SCROLL REVEAL ================= */

const revealElements = document.querySelectorAll(
    ".section, .problem-card, .algorithm-card, .tech-card, .feature-card, .workflow-step"
);

const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach(element => {

    element.classList.add("reveal");

    observer.observe(element);

});


/* ================= MOUSE EFFECT ================= */

const heroVisual = document.querySelector(".hero-visual");

heroVisual.addEventListener("mousemove", event => {

    const rect = heroVisual.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const rotateX = (y - rect.height / 2) / 40;
    const rotateY = (x - rect.width / 2) / 40;

    const face = document.querySelector(".face-card");

    face.style.transform =
        `perspective(900px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;

});


heroVisual.addEventListener("mouseleave", () => {

    const face = document.querySelector(".face-card");

    face.style.transform =
        "perspective(900px) rotateX(0deg) rotateY(0deg)";

});


/* ================= ANIMATED EAR VALUE ================= */

const earValue = document.querySelector(".card-ear strong span");

const earValues = [
    "0.28",
    "0.31",
    "0.25",
    "0.29",
    "0.27"
];

let earIndex = 0;

setInterval(() => {

    earIndex++;

    if (earIndex >= earValues.length) {
        earIndex = 0;
    }

    earValue.textContent = earValues[earIndex];

}, 1800);


/* ================= ANIMATED MAR VALUE ================= */

const marValue = document.querySelector(".card-mar strong span");

const marValues = [
    "0.34",
    "0.41",
    "0.36",
    "0.45",
    "0.32"
];

let marIndex = 0;

setInterval(() => {

    marIndex++;

    if (marIndex >= marValues.length) {
        marIndex = 0;
    }

    marValue.textContent = marValues[marIndex];

}, 2000);


/* ================= SMOOTH BUTTON NAVIGATION ================= */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(event) {

        const target = document.querySelector(this.getAttribute("href"));

        if (!target) return;

        event.preventDefault();

        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });

});


/* ================= CARD INTERACTION ================= */

const algorithmCards =
    document.querySelectorAll(".algorithm-card");

algorithmCards.forEach(card => {

    card.addEventListener("click", () => {

        algorithmCards.forEach(item => {

            item.classList.remove("active");

        });

        card.classList.add("active");

    });

});