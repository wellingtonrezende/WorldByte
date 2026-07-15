/*====================================================
    WorldByte Tecnologia
    desenvolvimento-sites.js
====================================================*/


/*=========================================
    MENU MOBILE
=========================================*/

const menuButton = document.querySelector(".menu-mobile");
const navbar = document.querySelector(".navbar");

if(menuButton){

    menuButton.addEventListener("click", ()=>{

        navbar.classList.toggle("active");

        menuButton.classList.toggle("active");

    });

}


/*=========================================
    FECHA MENU AO CLICAR
=========================================*/

document.querySelectorAll(".navbar a").forEach(link=>{

    link.addEventListener("click",()=>{

        navbar.classList.remove("active");
        menuButton.classList.remove("active");

    });

});


/*=========================================
    HEADER AO ROLAR
=========================================*/

const header = document.querySelector(".header");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 80){

        header.classList.add("scroll");

    }else{

        header.classList.remove("scroll");

    }

});


/*=========================================
    ANIMAÇÃO AO APARECER
=========================================*/

const revealElements = document.querySelectorAll(

".section-title, .about-text, .about-card, .card, .step, .cta"

);

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("active");

        }

    });

},{
    threshold:0.2
});

revealElements.forEach(item=>{

    item.classList.add("reveal");

    observer.observe(item);

});


/*=========================================
    SCROLL SUAVE
=========================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        const destino=document.querySelector(this.getAttribute("href"));

        if(destino){

            destino.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});


/*=========================================
    BOTÃO VOLTAR AO TOPO
=========================================*/

const btnTop = document.createElement("button");

btnTop.innerHTML='<i class="fa-solid fa-arrow-up"></i>';

btnTop.classList.add("back-top");

document.body.appendChild(btnTop);

window.addEventListener("scroll",()=>{

    if(window.scrollY > 500){

        btnTop.classList.add("show");

    }else{

        btnTop.classList.remove("show");

    }

});

btnTop.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});


/*=========================================
    ANIMAÇÃO DOS CARDS
=========================================*/

const cards=document.querySelectorAll(".card");

cards.forEach((card,index)=>{

    card.style.transitionDelay=`${index * 0.08}s`;

});


/*=========================================
    EFEITO NOS PASSOS
=========================================*/

const steps=document.querySelectorAll(".step");

steps.forEach(step=>{

    step.addEventListener("mouseenter",()=>{

        step.style.transform="translateY(-12px) scale(1.03)";

    });

    step.addEventListener("mouseleave",()=>{

        step.style.transform="translateY(0) scale(1)";

    });

});


/*=========================================
    PARALLAX HERO
=========================================*/

const heroIcon=document.querySelector(".hero-icon");

window.addEventListener("mousemove",(e)=>{

    if(!heroIcon) return;

    let x=(window.innerWidth/2-e.pageX)/40;

    let y=(window.innerHeight/2-e.pageY)/40;

    heroIcon.style.transform=`translate(${x}px,${y}px)`;

});


/*=========================================
    PRELOADER (opcional)
=========================================*/

window.addEventListener("load",()=>{

    document.body.classList.add("loaded");

});


console.log("%cWorldByte Tecnologia",
"color:#00cfff;font-size:18px;font-weight:bold;");

console.log("Página Desenvolvimento de Sites carregada com sucesso.");