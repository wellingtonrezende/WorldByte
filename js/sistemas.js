/* ==========================================================
   WORLDBYTE TECNOLOGIA
   sistemas.js

   INTERAÇÕES - SISTEMAS PERSONALIZADOS
========================================================== */



// ==========================================================
// MENU MOBILE
// ==========================================================


const menuBtn = document.querySelector(".menu-btn");

const menu = document.querySelector(".menu");


if(menuBtn && menu){


    menuBtn.addEventListener("click", ()=>{


        menu.classList.toggle("active");


        menuBtn.classList.toggle("active");


    });



}



// fechar menu ao clicar nos links


document.querySelectorAll(".menu a").forEach(link=>{


    link.addEventListener("click",()=>{


        if(menu){


            menu.classList.remove("active");


        }



    });


});









// ==========================================================
// HEADER SCROLL
// ==========================================================


const header = document.querySelector(".header");



window.addEventListener("scroll",()=>{


    if(!header) return;



    if(window.scrollY > 60){


        header.classList.add("scroll");


    }else{


        header.classList.remove("scroll");


    }



});









// ==========================================================
// ANIMAÇÃO REVEAL
// ==========================================================



const revealElements = document.querySelectorAll(".reveal");



const revealObserver = new IntersectionObserver((entries)=>{


    entries.forEach(entry=>{


        if(entry.isIntersecting){



            entry.target.classList.add("active");



            revealObserver.unobserve(entry.target);



        }



    });



},{

    threshold:.15

});






revealElements.forEach(element=>{


    revealObserver.observe(element);


});









// ==========================================================
// ATRASO NOS CARDS
// ==========================================================


const cards = document.querySelectorAll(

".benefit-card, .system-card, .process-card"

);



cards.forEach((card,index)=>{


    card.style.transitionDelay =

    `${index * 0.08}s`;



});









// ==========================================================
// BOTÃO VOLTAR AO TOPO
// ==========================================================


const backTop = document.querySelector("#btn-topo");



if(backTop){



window.addEventListener("scroll",()=>{


    if(window.scrollY > 500){


        backTop.classList.add("show");


    }else{


        backTop.classList.remove("show");


    }



});





backTop.addEventListener("click",()=>{


    window.scrollTo({


        top:0,


        behavior:"smooth"


    });



});



}









// ==========================================================
// SCROLL SUAVE
// ==========================================================


document.querySelectorAll('a[href^="#"]').forEach(anchor=>{


    anchor.addEventListener("click",(e)=>{


        const destino = document.querySelector(

            anchor.getAttribute("href")

        );



        if(destino){


            e.preventDefault();



            destino.scrollIntoView({


                behavior:"smooth"


            });



        }



    });


});









// ==========================================================
// EFEITO PARALLAX HERO
// ==========================================================



const heroIcon = document.querySelector(".hero-icon");



window.addEventListener("scroll",()=>{


    if(heroIcon){



        let movimento = window.scrollY * 0.15;



        heroIcon.style.transform =

        `translateY(${movimento}px)`;



    }



});









// ==========================================================
// ANO AUTOMÁTICO
// ==========================================================


const ano = document.querySelector("#ano");



if(ano){


    ano.textContent = new Date().getFullYear();



}









// ==========================================================
// EFEITO NOS CARDS
// ==========================================================



const hoverCards = document.querySelectorAll(

".benefit-card, .system-card, .process-card"

);



hoverCards.forEach(card=>{



    card.addEventListener("mouseenter",()=>{


        card.style.zIndex="5";


    });



    card.addEventListener("mouseleave",()=>{


        card.style.zIndex="1";


    });



});









// ==========================================================
// LOG
// ==========================================================


console.log(

"WorldByte Sistemas Personalizados carregado 🚀"

);