/* =====================================
   CAMFLOW INFORMATION WEBSITE
===================================== */


/* MOBILE MENU */

const menuBtn = document.getElementById("menuBtn");
const nav = document.querySelector(".navbar nav");

menuBtn.addEventListener("click", () => {

    nav.classList.toggle("mobile-open");

});


/* CLOSE MENU */

document.querySelectorAll(".navbar nav a").forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("mobile-open");

    });

});


/* NAVBAR SCROLL EFFECT */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {

        navbar.style.background =
            "rgba(5,6,9,0.94)";

    } else {

        navbar.style.background =
            "rgba(5,6,9,0.78)";

    }

});


/* SCROLL REVEAL */

const revealElements = document.querySelectorAll(
    ".section, .problem-card, .tech-card, .feature-card, .workflow-step, .architecture-box"
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


/* CAMERA WINDOW MOUSE EFFECT */

const heroVisual =
    document.querySelector(".hero-visual");

const cameraWindow =
    document.querySelector(".camera-window");


heroVisual.addEventListener("mousemove", event => {

    const rect =
        heroVisual.getBoundingClientRect();

    const x =
        event.clientX - rect.left;

    const y =
        event.clientY - rect.top;


    const rotateX =
        (y - rect.height / 2) / 35;

    const rotateY =
        (x - rect.width / 2) / 35;


    cameraWindow.style.transform =
        `perspective(900px)
         rotateX(${-rotateX}deg)
         rotateY(${rotateY}deg)`;

});


heroVisual.addEventListener("mouseleave", () => {

    cameraWindow.style.transform =
        "perspective(900px) rotateX(0deg) rotateY(0deg)";

});


/* CAMERA STATUS ANIMATION */

const cameraStatus =
    document.querySelector(".camera-status");

const statuses = [
    "READY",
    "SCANNING",
    "CAPTURE",
    "READY"
];

let statusIndex = 0;


setInterval(() => {

    statusIndex++;

    if (statusIndex >= statuses.length) {
        statusIndex = 0;
    }

    cameraStatus.innerHTML =
        `<i></i> ${statuses[statusIndex]}`;

}, 2200);


/* SMOOTH SCROLL */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(event) {

        const target =
            document.querySelector(
                this.getAttribute("href")
            );

        if (!target) return;

        event.preventDefault();

        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });

});


/* IMAGE STACK PARALLAX */

const imageStack =
    document.querySelector(".image-stack");


document.querySelector(".solution-visual")
    .addEventListener("mousemove", event => {

        const rect =
            event.currentTarget.getBoundingClientRect();

        const x =
            (event.clientX - rect.left) / rect.width - 0.5;

        const y =
            (event.clientY - rect.top) / rect.height - 0.5;


        imageStack.style.transform =
            `translate(${x * 15}px, ${y * 15}px)`;

    });


document.querySelector(".solution-visual")
    .addEventListener("mouseleave", () => {

        imageStack.style.transform =
            "translate(0,0)";

    });