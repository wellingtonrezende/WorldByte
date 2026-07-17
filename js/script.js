```javascript
/* =====================================
   WORLD BYTE TECNOLOGIA
   SCRIPT JS
   Interações e Animações
===================================== */



// ===============================
// MENU MOBILE
// ===============================


const menuButton = document.querySelector(".menu-mobile");

const navbar = document.querySelector(".navbar");


menuButton.addEventListener("click", () => {


    navbar.classList.toggle("active");


    const icon = menuButton.querySelector("i");


    if(navbar.classList.contains("active")){

        icon.classList.remove("fa-bars");

        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

    }


});





// Fecha menu ao clicar nos links

const navLinks = document.querySelectorAll(".navbar a");


navLinks.forEach(link => {


    link.addEventListener("click",()=>{


        navbar.classList.remove("active");


        const icon = menuButton.querySelector("i");


        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");


    });


});







// ===============================
// NAVEGAÇÃO SUAVE
// ===============================


document.querySelectorAll('a[href^="#"]').forEach(anchor => {


    anchor.addEventListener("click", function(e){


        e.preventDefault();


        const target = document.querySelector(
            this.getAttribute("href")
        );


        if(target){


            target.scrollIntoView({

                behavior:"smooth"

            });


        }


    });


});








// ===============================
// HEADER DINÂMICO NO SCROLL
// ===============================


const header = document.querySelector(".header");


window.addEventListener("scroll",()=>{


    if(window.scrollY > 50){


        header.style.background =
        "rgba(5,8,22,0.95)";


        header.style.boxShadow =
        "0 0 25px rgba(0,170,255,.2)";


    }else{


        header.style.background =
        "rgba(5,8,22,.8)";


        header.style.boxShadow =
        "none";


    }


});








// ===============================
// ANIMAÇÃO AO ROLAR A PÁGINA
// ===============================


const observer = new IntersectionObserver(

(entries)=>{


    entries.forEach(entry=>{


        if(entry.isIntersecting){


            entry.target.classList.add("show");


        }


    });


},

{

    threshold:0.15

}

);







// Elementos que receberão animação

const animatedElements = document.querySelectorAll(

    ".card, .box, .project, .tech-list div, section h2"

);



animatedElements.forEach(element=>{


    element.classList.add("hidden");


    observer.observe(element);


});







// ===============================
// EFEITO DIGITAÇÃO NO HERO
// ===============================


const heroTitle = document.querySelector(".hero h1 span");


if(heroTitle){


    const text = heroTitle.textContent;


    heroTitle.textContent="";


    let index=0;



    function typing(){


        if(index < text.length){


            heroTitle.textContent += text.charAt(index);


            index++;


            setTimeout(typing,80);


        }


    }


    setTimeout(typing,700);


}








// ===============================
// ANO AUTOMÁTICO FOOTER
// ===============================


const footerYear = document.querySelector("footer p");


if(footerYear){


    const year = new Date().getFullYear();


    footerYear.innerHTML =

    footerYear.innerHTML.replace(

        "2026",

        year

    );


}







// ===============================
// BOTÃO WHATSAPP EFEITO
// ===============================


const whatsapp = document.querySelector(
".whatsapp-float"
);


if(whatsapp){


setInterval(()=>{


    whatsapp.style.transform =
    "scale(1.1)";


    setTimeout(()=>{


        whatsapp.style.transform =
        "scale(1)";


    },500);



},2500);


}








// ===============================
// CURSOR DE TECNOLOGIA
// ===============================


document.addEventListener(
"mousemove",
(e)=>{


const glow =
document.querySelector(".hero::before");


});

```
