

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