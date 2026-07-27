// ===============================
// PROJETO OBITO UCHIHA
// script.js
// ===============================

// Menu ao rolar a página

const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.classList.add("scroll");
    } else {
        header.classList.remove("scroll");
    }
});

// ===============================
// Scroll suave

document.querySelectorAll("a[href^='#']").forEach(link => {

    link.addEventListener("click", function (e) {

        e.preventDefault();

        const destino = document.querySelector(this.getAttribute("href"));

        destino.scrollIntoView({
            behavior: "smooth"
        });

    });

});

// ===============================
// Animação dos cards

const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.3
});

cards.forEach(card => observer.observe(card));

// ===============================
// Botão voltar ao topo

const topButton = document.createElement("button");

topButton.innerHTML = "⬆";

topButton.id = "topButton";

document.body.appendChild(topButton);

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topButton.style.display = "block";

    } else {

        topButton.style.display = "none";

    }

});

topButton.onclick = () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

};

// ===============================
// Zoom nas imagens

const imagens = document.querySelectorAll(".gallery img");

imagens.forEach(img => {

    img.addEventListener("mouseenter", () => {

        img.style.transform = "scale(1.08)";

    });

    img.addEventListener("mouseleave", () => {

        img.style.transform = "scale(1)";

    });

});

// ===============================
// Digitação do título

const titulo = document.querySelector(".hero h1");

const texto = titulo.innerText;

titulo.innerText = "";

let i = 0;

function escrever() {

    if (i < texto.length) {

        titulo.innerHTML += texto.charAt(i);

        i++;

        setTimeout(escrever, 120);

    }

}

escrever();

// ===============================
// Partículas

document.addEventListener("mousemove", (e) => {

    const particle = document.createElement("span");

    particle.classList.add("particle");

    document.body.appendChild(particle);

    particle.style.left = e.pageX + "px";
    particle.style.top = e.pageY + "px";

    const size = Math.random() * 8 + 2;

    particle.style.width = size + "px";
    particle.style.height = size + "px";

    setTimeout(() => {

        particle.remove();

    }, 1000);

});

// ===============================
// Cards brilhando

cards.forEach(card => {

    card.addEventListener("mousemove", () => {

        card.style.boxShadow =
            "0 0 30px red";

    });

    card.addEventListener("mouseleave", () => {

        card.style.boxShadow =
            "0 0 15px rgba(255,0,0,.3)";

    });

});

// ===============================
// Fade das seções

const sections = document.querySelectorAll("section");

const reveal = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("visible");

        }

    });

}, {
    threshold: 0.15
});

sections.forEach(section => {

    reveal.observe(section);

});

// ===============================
// Mensagem no console

console.log(`
██████╗ ██████╗ ██╗████████╗ ██████╗
██╔═══██╗██╔══██╗██║╚══██╔══╝██╔═══██╗
██║   ██║██████╔╝██║   ██║   ██║   ██║
██║   ██║██╔══██╗██║   ██║   ██║   ██║
╚██████╔╝██████╔╝██║   ██║   ╚██████╔╝
 ╚═════╝ ╚═════╝ ╚═╝   ╚═╝    ╚═════╝

Projeto Obito Uchiha
`);