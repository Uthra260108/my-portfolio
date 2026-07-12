// ==========================
// Mobile Navigation
// ==========================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Close menu when a link is clicked

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});


// ==========================
// Back To Top Button
// ==========================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// ==========================
// Navbar Background on Scroll
// ==========================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.background = "rgba(255,255,255,0.95)";
        navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,0.08)";

    }

    else {

        navbar.style.background = "rgba(255,255,255,0.75)";
        navbar.style.boxShadow = "0 8px 25px rgba(0,0,0,0.05)";

    }

});


// ==========================
// Scroll Reveal Animation
// ==========================

const revealElements = document.querySelectorAll(
    ".about-card, .edu-card, .skill-card, .soft-card, .career-card, .contact-card"
);

function revealOnScroll() {

    const trigger = window.innerHeight - 100;

    revealElements.forEach((element) => {

        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < trigger) {

            element.style.opacity = "1";
            element.style.transform = "translateY(0)";

        }

    });

}

revealElements.forEach((element) => {

    element.style.opacity = "0";
    element.style.transform = "translateY(40px)";
    element.style.transition = "all 0.8s ease";

});

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();


// ==========================
// Typing Effect
// ==========================

const typing = document.querySelector(".typing");

const text = "Aspiring Software Engineer";

let index = 0;

function typeText() {

    typing.textContent = text.slice(0, index);

    index++;

    if (index <= text.length) {

        setTimeout(typeText, 120);

    }

}

typing.textContent = "";

typeText();


// ==========================
// Smooth Fade for Hero
// ==========================

window.addEventListener("load", () => {

    document.querySelector(".hero").style.opacity = "1";

});


// ==========================
// Floating Animation
// ==========================

const blobs = document.querySelectorAll(".blob");

blobs.forEach((blob, i) => {

    blob.animate(
        [
            { transform: "translateY(0px)" },
            { transform: "translateY(-15px)" },
            { transform: "translateY(0px)" }
        ],
        {
            duration: 4000 + i * 1000,
            iterations: Infinity
        }
    );

});


// ==========================
// Active Navigation Link
// ==========================

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


// ==========================
// Console Welcome
// ==========================

console.log("%cWelcome to UTHRA R's Portfolio 💖",
"color:#F28B82;font-size:18px;font-weight:bold;");