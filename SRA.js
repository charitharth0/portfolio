/* ==========================================
   SRA - STUDENT RESUME ANALYSER
   INFORMATION WEBSITE
========================================== */


/* MOBILE MENU */

const menuBtn =
    document.getElementById("menuBtn");

const nav =
    document.querySelector(".navbar nav");


menuBtn.addEventListener("click", () => {

    nav.classList.toggle("mobile-open");

});


/* CLOSE MOBILE MENU */

document.querySelectorAll(".navbar nav a")
    .forEach(link => {

        link.addEventListener("click", () => {

            nav.classList.remove("mobile-open");

        });

    });


/* NAVBAR SCROLL */

const navbar =
    document.querySelector(".navbar");


window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {

        navbar.style.background =
            "rgba(5,6,9,.94)";

    } else {

        navbar.style.background =
            "rgba(5,6,9,.78)";

    }

});


/* SCROLL REVEAL */

const revealElements =
    document.querySelectorAll(
        ".section, .problem-card, .feature-card, .workflow-step, .tech-card, .architecture-box"
    );


const observer =
    new IntersectionObserver(

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


/* RESUME DASHBOARD MOUSE EFFECT */

const heroVisual =
    document.querySelector(".hero-visual");

const resumeDashboard =
    document.querySelector(".resume-dashboard");


heroVisual.addEventListener("mousemove", event => {

    const rect =
        heroVisual.getBoundingClientRect();


    const x =
        event.clientX - rect.left;

    const y =
        event.clientY - rect.top;


    const rotateX =
        (y - rect.height / 2) / 40;

    const rotateY =
        (x - rect.width / 2) / 40;


    resumeDashboard.style.transform =
        `perspective(900px)
         rotateX(${-rotateX}deg)
         rotateY(${rotateY}deg)`;

});


heroVisual.addEventListener("mouseleave", () => {

    resumeDashboard.style.transform =
        "perspective(900px) rotateX(0deg) rotateY(0deg)";

});


/* SCORE ANIMATION */

const scoreElement =
    document.getElementById("score");


let currentScore = 70;

const targetScore = 87;


const scoreInterval =
    setInterval(() => {

        currentScore++;

        scoreElement.textContent =
            currentScore;

        if (currentScore >= targetScore) {

            clearInterval(scoreInterval);

        }

    }, 80);


/* SMOOTH SCROLL */

document.querySelectorAll('a[href^="#"]')
    .forEach(anchor => {

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


/* SCORE RING INTERACTION */

const scoreRing =
    document.querySelector(".score-ring");


scoreRing.addEventListener("mouseenter", () => {

    scoreRing.style.transform =
        "scale(1.04)";

});


scoreRing.addEventListener("mouseleave", () => {

    scoreRing.style.transform =
        "scale(1)";

});


/* INTERVIEW ROBOT EFFECT */

const robotHead =
    document.querySelector(".robot-head");


setInterval(() => {

    robotHead.style.transform =
        "translateY(-4px)";

    setTimeout(() => {

        robotHead.style.transform =
            "translateY(0)";

    }, 500);

}, 2500);