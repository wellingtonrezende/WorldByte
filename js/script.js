

/*==================================================
VALIDAÇÃO PROFISSIONAL DO FORMULÁRIO
==================================================*/

const form = document.querySelector(".contact-form");

if (form) {

    const fields = form.querySelectorAll(
        "input:not([type='checkbox']), select, textarea"
    );

    const emailRegex =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const phoneRegex =
        /^\(\d{2}\)\s\d{4,5}-\d{4}$/;

    const removeFieldError = field => {

        const group = field.closest(".form-group");

        if (!group) return;

        group.classList.remove("invalid");

        const error =
            group.querySelector(".field-error");

        if (error) {

            error.remove();

        }

    };

    const showFieldError = (field, message) => {

        const group = field.closest(".form-group");

        if (!group) return;

        removeFieldError(field);

        group.classList.remove("valid");
        group.classList.add("invalid");

        const error =
            document.createElement("span");

        error.className = "field-error";

        error.textContent = message;

        error.setAttribute("role", "alert");

        group.appendChild(error);

        field.setAttribute("aria-invalid", "true");

    };

    const markFieldValid = field => {

        const group = field.closest(".form-group");

        if (!group) return;

        removeFieldError(field);

        group.classList.remove("invalid");
        group.classList.add("valid");

        field.setAttribute("aria-invalid", "false");

    };

    const validateField = field => {

        const value = field.value.trim();

        if (field.hasAttribute("required") && !value) {

            showFieldError(
                field,
                "Este campo é obrigatório."
            );

            return false;

        }

        if (
            field.type === "email" &&
            value &&
            !emailRegex.test(value)
        ) {

            showFieldError(
                field,
                "Digite um endereço de e-mail válido."
            );

            return false;

        }

        if (
            field.type === "tel" &&
            value &&
            !phoneRegex.test(value)
        ) {

            showFieldError(
                field,
                "Digite um telefone válido com DDD."
            );

            return false;

        }

        if (
            field.tagName === "TEXTAREA" &&
            value.length > 0 &&
            value.length < 15
        ) {

            showFieldError(
                field,
                "Escreva uma mensagem com pelo menos 15 caracteres."
            );

            return false;

        }

        if (value) {

            markFieldValid(field);

        } else {

            removeFieldError(field);

        }

        return true;

    };

    fields.forEach(field => {

        field.addEventListener("blur", () => {

            validateField(field);

        });

        field.addEventListener("input", () => {

            if (
                field
                    .closest(".form-group")
                    ?.classList
                    .contains("invalid")
            ) {

                validateField(field);

            }

        });

    });

    form.addEventListener("submit", event => {

        const fieldsAreValid =
            [...fields].every(validateField);

        const privacy =
            form.querySelector("#privacidade");

        const privacyIsValid =
            !privacy || privacy.checked;

        if (!privacyIsValid) {

            privacy.focus();

        }

        if (!fieldsAreValid || !privacyIsValid) {

            event.preventDefault();

            const firstInvalid =
                form.querySelector(
                    '[aria-invalid="true"]'
                );

            if (firstInvalid) {

                firstInvalid.focus();

            }

        }

    });

}

/*==================================================
CONSENTIMENTO DE COOKIES
==================================================*/

const cookieBanner =
    document.querySelector("#cookieBanner");

const acceptCookies =
    document.querySelector("#acceptCookies");

const rejectCookies =
    document.querySelector("#rejectCookies");

const cookieConsent =
    localStorage.getItem(
        "worldbyte-cookie-consent"
    );

if (cookieBanner && !cookieConsent) {

    setTimeout(() => {

        cookieBanner.classList.add("show");

    }, 1200);

}

const saveCookieChoice = choice => {

    localStorage.setItem(
        "worldbyte-cookie-consent",
        choice
    );

    cookieBanner?.classList.remove("show");

};

acceptCookies?.addEventListener("click", () => {

    saveCookieChoice("accepted");

});

rejectCookies?.addEventListener("click", () => {

    saveCookieChoice("rejected");

});

/*==================================================
CARREGAMENTO DAS IMAGENS
==================================================*/

const pageImages =
    document.querySelectorAll(
        ".image-wrapper img"
    );

pageImages.forEach(image => {

    const wrapper =
        image.closest(".image-wrapper");

    const markAsLoaded = () => {

        wrapper?.classList.add("loaded");

    };

    if (image.complete) {

        markAsLoaded();

    } else {

        image.addEventListener(
            "load",
            markAsLoaded,
            { once:true }
        );

    }

});

/*======================================
BOTÃO VOLTAR AO TOPO
======================================*/

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if(window.scrollY > 350){

        backToTop.classList.add("show");

    }else{

        backToTop.classList.remove("show");

    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("contactForm");
    const telefoneInput = document.getElementById("telefone");
    const formStatus = document.getElementById("formStatus");

    if (!form) {
        return;
    }

    /*
     * Máscara do telefone:
     * (31) 99999-9999
     */
    telefoneInput.addEventListener("input", function () {

        let valor = telefoneInput.value.replace(/\D/g, "");

        valor = valor.substring(0, 11);

        if (valor.length > 10) {

            valor = valor.replace(
                /^(\d{2})(\d{5})(\d{4})$/,
                "($1) $2-$3"
            );

        } else if (valor.length > 6) {

            valor = valor.replace(
                /^(\d{2})(\d{4})(\d{0,4})$/,
                "($1) $2-$3"
            );

        } else if (valor.length > 2) {

            valor = valor.replace(
                /^(\d{2})(\d+)/,
                "($1) $2"
            );

        } else if (valor.length > 0) {

            valor = valor.replace(
                /^(\d*)/,
                "($1"
            );

        }

        telefoneInput.value = valor;

    });

    form.addEventListener("submit", function (event) {

        event.preventDefault();

        formStatus.textContent = "";
        formStatus.classList.remove("success", "error");

        if (!form.checkValidity()) {

            form.reportValidity();

            formStatus.textContent =
                "Preencha corretamente todos os campos obrigatórios.";

            formStatus.classList.add("error");

            return;

        }

        const nome = document
            .getElementById("nome")
            .value
            .trim();

        const empresa = document
            .getElementById("empresa")
            .value
            .trim();

        const email = document
            .getElementById("email")
            .value
            .trim();

        const telefone = document
            .getElementById("telefone")
            .value
            .trim();

        const servico = document
            .getElementById("servico")
            .value;

        const mensagem = document
            .getElementById("mensagem")
            .value
            .trim();

        const privacidade = document
            .getElementById("privacidade");

        if (!privacidade.checked) {

            formStatus.textContent =
                "Você precisa aceitar a Política de Privacidade.";

            formStatus.classList.add("error");

            privacidade.focus();

            return;

        }

        const empresaTexto = empresa || "Não informado";

        const textoWhatsApp =
`Olá, WorldByte! Gostaria de solicitar um orçamento.

*NOVA SOLICITAÇÃO PELO SITE*

*Nome:* ${nome}
*Empresa:* ${empresaTexto}
*E-mail:* ${email}
*Telefone:* ${telefone}
*Serviço de interesse:* ${servico}

*Descrição do projeto:*
${mensagem}

Mensagem enviada pelo site da WorldByte.`;

        /*
         * Número no formato:
         * código do país + DDD + telefone
         *
         * Brasil: 55
         * DDD: 31
         * Número: 982283299
         */
        const numeroWhatsApp = "5531982283299";

        const urlWhatsApp =
            `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(textoWhatsApp)}`;

        formStatus.textContent =
            "Abrindo o WhatsApp com sua solicitação...";

        formStatus.classList.add("success");

        const novaJanela = window.open(
            urlWhatsApp,
            "_blank",
            "noopener,noreferrer"
        );

        /*
         * Caso o navegador bloqueie a nova guia,
         * abre o WhatsApp na mesma página.
         */
      

    });

});

document.addEventListener("DOMContentLoaded", function () {

    const lightbox = document.getElementById("lightbox");
    const lightboxImage = document.getElementById("lightboxImage");
    const closeLightbox = document.getElementById("closeLightbox");
    const viewButtons = document.querySelectorAll(".view-image");

    if (
        !lightbox ||
        !lightboxImage ||
        !closeLightbox
    ) {
        return;
    }

    function abrirLightbox(imagem, textoAlternativo) {

        lightboxImage.src = imagem;
        lightboxImage.alt = textoAlternativo || "Projeto ampliado";

        lightbox.classList.add("active");
        lightbox.setAttribute("aria-hidden", "false");

        document.body.classList.add("lightbox-open");

        closeLightbox.focus();

    }

    function fecharLightbox() {

        lightbox.classList.remove("active");
        lightbox.setAttribute("aria-hidden", "true");

        document.body.classList.remove("lightbox-open");

        setTimeout(function () {

            lightboxImage.src = "";
            lightboxImage.alt = "";

        }, 300);

    }

    viewButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            abrirLightbox(
                button.dataset.image,
                button.dataset.alt
            );

        });

    });

    closeLightbox.addEventListener("click", fecharLightbox);

    lightbox.addEventListener("click", function (event) {

        if (
            event.target === lightbox ||
            event.target.classList.contains("lightbox-content")
        ) {
            fecharLightbox();
        }

    });

    document.addEventListener("keydown", function (event) {

        if (
            event.key === "Escape" &&
            lightbox.classList.contains("active")
        ) {
            fecharLightbox();
        }

    });

});