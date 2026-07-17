/*=========================================================
    WORLDBYTE TECNOLOGIA
    desenvolvimento-apps.js
=========================================================*/

/*=========================================================
    MENU MOBILE
=========================================================*/

const menuButton = document.querySelector(".menu-mobile");
const navbar = document.querySelector(".navbar");

if (menuButton && navbar) {

    menuButton.addEventListener("click", () => {

        navbar.classList.toggle("active");
        menuButton.classList.toggle("active");

    });

}

/*=========================================================
    FECHAR MENU AO CLICAR
=========================================================*/

document.querySelectorAll(".navbar a").forEach(link => {

    link.addEventListener("click", () => {

        if (navbar) navbar.classList.remove("active");
        if (menuButton) menuButton.classList.remove("active");

    });

});

/*=========================================================
    HEADER AO ROLAR
=========================================================*/

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (!header) return;

    if (window.scrollY > 80) {

        header.classList.add("scroll");

    } else {

        header.classList.remove("scroll");

    }

});

/*=========================================================
    SCROLL SUAVE
=========================================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        const destino = document.querySelector(this.getAttribute("href"));

        if (destino) {

            e.preventDefault();

            destino.scrollIntoView({

                behavior: "smooth",
                block: "start"

            });

        }

    });

});

/*=========================================================
    REVEAL AO APARECER
=========================================================*/

const reveals = document.querySelectorAll(

    ".section-title, .about-text, .about-card, .card, .step, .faq-item, .cta"

);

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("active");

        }

    });

}, {

    threshold: 0.15

});

reveals.forEach(item => {

    item.classList.add("reveal");
    observer.observe(item);

});

/*=========================================================
    BOTÃO VOLTAR AO TOPO
=========================================================*/

const backTop = document.createElement("button");

backTop.className = "back-top";

backTop.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';

document.body.appendChild(backTop);

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        backTop.classList.add("show");

    } else {

        backTop.classList.remove("show");

    }

});

backTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

});

/*=========================================================
    ANIMAÇÃO DOS CARDS
=========================================================*/

const cards = document.querySelectorAll(".card");

cards.forEach((card, index) => {

    card.style.transitionDelay = `${index * 0.08}s`;

});

/*=========================================================
    EFEITO HOVER NOS PASSOS
=========================================================*/

document.querySelectorAll(".step").forEach(step => {

    step.addEventListener("mouseenter", () => {

        step.style.transform = "translateY(-12px) scale(1.03)";

    });

    step.addEventListener("mouseleave", () => {

        step.style.transform = "";

    });

});

/*=========================================================
    SMARTPHONE PARALLAX
=========================================================*/

const phone = document.querySelector(".phone");

window.addEventListener("mousemove", (e) => {

    if (!phone) return;

    const x = (window.innerWidth / 2 - e.clientX) / 40;
    const y = (window.innerHeight / 2 - e.clientY) / 40;

    phone.style.transform = `translate(${x}px, ${y}px)`;

});

/*=========================================================
    CONTADOR DOS NÚMEROS
=========================================================*/

const counters = document.querySelectorAll(".number h2");

const animateCounter = (element) => {

    const text = element.innerText.trim();

    if (text === "100%") {

        let value = 0;

        const timer = setInterval(() => {

            value++;

            element.innerText = value + "%";

            if (value >= 100) clearInterval(timer);

        }, 15);

    }

};

const counterObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            animateCounter(entry.target);

            counterObserver.unobserve(entry.target);

        }

    });

}, {

    threshold: 1

});

counters.forEach(counter => {

    counterObserver.observe(counter);

});

/*=========================================================
    EFEITO DE BRILHO NOS ÍCONES
=========================================================*/

document.querySelectorAll(".card i").forEach(icon => {

    icon.addEventListener("mouseenter", () => {

        icon.style.transform = "scale(1.15) rotate(-8deg)";

    });

    icon.addEventListener("mouseleave", () => {

        icon.style.transform = "";

    });

});

/*=========================================================
    PRELOADER (caso utilize futuramente)
=========================================================*/

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});

/*=========================================================
    CONSOLE
=========================================================*/

console.log("%cWorldByte Tecnologia", "color:#00bfff;font-size:18px;font-weight:bold;");

console.log("%cPágina Desenvolvimento de Aplicativos carregada com sucesso.", "color:#ffffff;");