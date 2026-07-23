/*====================================================
    WorldByte Tecnologia
    desenvolvimento-sites.js
====================================================*/

document.addEventListener("DOMContentLoaded", () => {

    const menuButton = document.querySelector(".menu-mobile");
    const navbar = document.querySelector(".navbar");
    const header = document.querySelector(".header");
    const heroImage = document.querySelector(".hero-image");

    /* ==========================================================
   EFEITOS PREMIUM - FASE 8
========================================================== */

/* Luz acompanhando o cursor */

document.addEventListener("mousemove", (event) => {

    document.documentElement.style.setProperty(
        "--mouse-x",
        `${event.clientX}px`
    );

    document.documentElement.style.setProperty(
        "--mouse-y",
        `${event.clientY}px`
    );

});

/* Brilho acompanhando o mouse nos cards */

const premiumCards = document.querySelectorAll(
    ".services-types .card, .about-card, .process .step"
);

premiumCards.forEach((card) => {

    card.addEventListener("mousemove", (event) => {

        const rect = card.getBoundingClientRect();

        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        card.style.setProperty("--glow-x", `${x}px`);
        card.style.setProperty("--glow-y", `${y}px`);

    });

    card.addEventListener("mouseleave", () => {

        card.style.setProperty("--glow-x", "50%");
        card.style.setProperty("--glow-y", "50%");

    });

});

/* ==========================================================
   FASE 9 - FINALIZAÇÃO
========================================================== */

/* Libera as animações após o carregamento */

window.addEventListener("load", () => {

    document.body.classList.add("page-loaded");

});

/* Ano automático no footer */

const yearElement = document.querySelector("[data-current-year]");

if(yearElement){

    yearElement.textContent = new Date().getFullYear();

}

/* Fecha o menu ao clicar fora */

document.addEventListener("click", (event) => {

    const navbar = document.querySelector(".navbar");
    const menuButton = document.querySelector(".menu-mobile");

    if(!navbar || !menuButton) return;

    const clickedInsideMenu = navbar.contains(event.target);
    const clickedButton = menuButton.contains(event.target);

    if(
        navbar.classList.contains("active") &&
        !clickedInsideMenu &&
        !clickedButton
    ){

        navbar.classList.remove("active");

        menuButton.setAttribute(
            "aria-expanded",
            "false"
        );

        document.body.classList.remove("menu-open");

    }

});

/* Fecha o menu com Escape */

document.addEventListener("keydown", (event) => {

    if(event.key !== "Escape") return;

    const navbar = document.querySelector(".navbar");
    const menuButton = document.querySelector(".menu-mobile");

    if(!navbar || !menuButton) return;

    navbar.classList.remove("active");

    menuButton.setAttribute(
        "aria-expanded",
        "false"
    );

    document.body.classList.remove("menu-open");

    menuButton.focus();

});

/* Link ativo conforme a seção visível */

const sections = document.querySelectorAll("section[id]");

const navigationLinks = document.querySelectorAll(
    '.navbar a[href^="#"]'
);

if(sections.length && navigationLinks.length){

    const activeSectionObserver = new IntersectionObserver(

        (entries) => {

            entries.forEach((entry) => {

                if(!entry.isIntersecting) return;

                const sectionId = entry.target.id;

                navigationLinks.forEach((link) => {

                    const isActive =
                        link.getAttribute("href") === `#${sectionId}`;

                    link.classList.toggle(
                        "active",
                        isActive
                    );

                });

            });

        },

        {
            rootMargin:"-35% 0px -55% 0px",
            threshold:0
        }

    );

    sections.forEach((section) => {

        activeSectionObserver.observe(section);

    });

}


/* ==========================================================
   FASE 10 - MONITORAMENTO DE CONVERSÕES
========================================================== */

const whatsappLinks = document.querySelectorAll(
    'a[href*="wa.me"], a[href*="api.whatsapp.com"]'
);

whatsappLinks.forEach((link) => {

    link.addEventListener("click", () => {

        const linkLocation =
            link.classList.contains("whatsapp-floating")
                ? "Botão flutuante"
                : "Conteúdo da página";

        console.log(
            `Conversão WhatsApp: ${linkLocation}`
        );

        /*
        Quando instalar o Google Analytics, utilize:

        gtag("event", "click_whatsapp", {
            event_category: "Conversão",
            event_label: linkLocation
        });
        */

    });

});

    /*=========================================
        MENU MOBILE
    =========================================*/

    function closeMenu() {

        if (!navbar || !menuButton) return;

        navbar.classList.remove("active");
        menuButton.classList.remove("active");

        menuButton.setAttribute("aria-expanded", "false");

        document.body.classList.remove("menu-open");

    }

    function toggleMenu() {

        if (!navbar || !menuButton) return;

        const isOpen = navbar.classList.toggle("active");

        menuButton.classList.toggle("active", isOpen);

        menuButton.setAttribute(
            "aria-expanded",
            String(isOpen)
        );

        document.body.classList.toggle(
            "menu-open",
            isOpen
        );

    }

    if (menuButton) {

        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute(
            "aria-label",
            "Abrir menu de navegação"
        );

        menuButton.addEventListener("click", toggleMenu);

    }

    document.querySelectorAll(".navbar a").forEach(link => {

        link.addEventListener("click", closeMenu);

    });

    document.addEventListener("keydown", event => {

        if (event.key === "Escape") {
            closeMenu();
        }

    });

    window.addEventListener("resize", () => {

        if (window.innerWidth > 900) {
            closeMenu();
        }

    });

    /*=========================================
        HEADER AO ROLAR
    =========================================*/

    function handleScroll() {

        const scrollPosition = window.scrollY;

        if (header) {

            header.classList.toggle(
                "scroll",
                scrollPosition > 80
            );

        }

        btnTop.classList.toggle(
            "show",
            scrollPosition > 500
        );

    }

    /*=========================================
        ANIMAÇÕES AO APARECER
    =========================================*/

    const revealElements = document.querySelectorAll(`
        .section-title,
        .about-text,
        .about-card,
        .services-types .card,
        .process .step,
        .cta .container
    `);

    const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion) {

        revealElements.forEach(element => {

            element.classList.add("reveal", "active");

        });

    } else {

        const observer = new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("active");

                        observer.unobserve(entry.target);

                    }

                });

            },
            {
                threshold: 0.15,
                rootMargin: "0px 0px -50px 0px"
            }
        );

        revealElements.forEach(element => {

            element.classList.add("reveal");

            observer.observe(element);

        });

    }

    /*=========================================
        ATRASO DOS CARDS
    =========================================*/

    const cards = document.querySelectorAll(
        ".services-types .card"
    );

    cards.forEach((card, index) => {

        card.style.transitionDelay =
            `${index * 0.08}s`;

    });

    const steps = document.querySelectorAll(
        ".process .step"
    );

    steps.forEach((step, index) => {

        step.style.transitionDelay =
            `${index * 0.1}s`;

    });

    /*=========================================
        SCROLL SUAVE
    =========================================*/

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", event => {

            const href = anchor.getAttribute("href");

            /*
             * Não executa document.querySelector("#"),
             * evitando erro no link da logo.
             */
            if (!href || href === "#") {

                event.preventDefault();

                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });

                return;

            }

            const destination = document.querySelector(href);

            if (!destination) return;

            event.preventDefault();

            destination.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    });

    /*=========================================
        BOTÃO VOLTAR AO TOPO
    =========================================*/

    const btnTop = document.createElement("button");

    btnTop.type = "button";
    btnTop.className = "back-top";
    btnTop.setAttribute(
        "aria-label",
        "Voltar ao topo"
    );

    btnTop.innerHTML =
        '<i class="fa-solid fa-arrow-up"></i>';

    document.body.appendChild(btnTop);

    btnTop.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

    window.addEventListener(
        "scroll",
        handleScroll,
        { passive: true }
    );

    handleScroll();

    /*=========================================
        PARALLAX DO HERO
    =========================================*/

    if (
        heroImage &&
        window.matchMedia("(min-width: 901px)").matches &&
        !reduceMotion
    ) {

        let animationFrame;

        window.addEventListener("mousemove", event => {

            cancelAnimationFrame(animationFrame);

            animationFrame = requestAnimationFrame(() => {

                const x =
                    (window.innerWidth / 2 - event.clientX) / 55;

                const y =
                    (window.innerHeight / 2 - event.clientY) / 55;

                /*
                 * O movimento é aplicado em .hero-image,
                 * preservando a animação float da .hero-icon.
                 */
                heroImage.style.transform =
                    `translate3d(${x}px, ${y}px, 0)`;

            });

        });

        document.documentElement.addEventListener(
            "mouseleave",
            () => {

                heroImage.style.transform =
                    "translate3d(0, 0, 0)";

            }
        );

    }

    /*=========================================
        PÁGINA CARREGADA
    =========================================*/

    window.addEventListener("load", () => {

        document.body.classList.add("loaded");

    });

    console.log(
        "%cWorldByte Tecnologia",
        "color:#00cfff;font-size:18px;font-weight:bold;"
    );

    console.log(
        "Página Desenvolvimento de Sites carregada com sucesso."
    );

});