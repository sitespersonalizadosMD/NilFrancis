/*============================================

NIL FRANCIS
MDR Sites

============================================*/


/*============================================

HEADER

============================================*/

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});


/*============================================

BOTÃO TOPO

============================================*/

const botaoTopo = document.getElementById("topo");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        botaoTopo.classList.add("show");

    } else {

        botaoTopo.classList.remove("show");

    }

});

botaoTopo.addEventListener("click", () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});


/*============================================

MENU MOBILE

============================================*/

const menuMobile = document.querySelector(".menu-mobile");

const menu = document.querySelector("nav");

menuMobile.addEventListener("click",()=>{

    menu.classList.toggle("active");

    menuMobile.classList.toggle("active");

});


/*============================================

FECHAR MENU AO CLICAR

============================================*/

document.querySelectorAll("nav a").forEach(link=>{

    link.addEventListener("click",()=>{

        menu.classList.remove("active");

        menuMobile.classList.remove("active");

    });

});


/*============================================

ANIMAÇÃO SCROLL

============================================*/

const elementos = document.querySelectorAll(

".sobre-image,.sobre-content,.categoria-produto,.card-diferencial,.pagamentos-grid div,.contato-info,.contato-redes"

);

const mostrarElementos = ()=>{

    const topoTela = window.innerHeight * .85;

    elementos.forEach(el=>{

        const posicao = el.getBoundingClientRect().top;

        if(posicao < topoTela){

            el.classList.add("show");

        }

    });

};

window.addEventListener("scroll",mostrarElementos);

mostrarElementos();


/*============================================

SCROLL SUAVE

============================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        const destino = document.querySelector(this.getAttribute("href"));

        destino.scrollIntoView({

            behavior:"smooth"

        });

    });

});


/*============================================

EFEITO HERO

============================================*/

window.addEventListener("scroll",()=>{

    const hero = document.querySelector(".hero");

    const y = window.scrollY;

    hero.style.backgroundPositionY = `${y * 0.45}px`;

});


/*============================================

EFEITO IMAGENS

============================================*/

const imagens = document.querySelectorAll(".produto-imagem img");

imagens.forEach(img=>{

    img.addEventListener("mouseenter",()=>{

        img.style.transform="scale(1.07)";

    });

    img.addEventListener("mouseleave",()=>{

        img.style.transform="scale(1)";

    });

});


/*============================================

BOTÕES

============================================*/

const botoes = document.querySelectorAll(

".btn-primary,.btn-secondary,.btn-comprar,.btn-whatsapp"

);

botoes.forEach(botao=>{

    botao.addEventListener("mouseenter",()=>{

        botao.style.transition=".35s";

    });

});


/*============================================

LOADING

============================================*/

window.addEventListener("load",()=>{

    document.body.classList.add("loaded");

});


/*============================================

ANO AUTOMÁTICO

============================================*/

const ano = new Date().getFullYear();

const footer = document.querySelector("footer p");

if(footer){

    footer.innerHTML = `© ${ano} Nil Francis. Todos os direitos reservados.`;

}


/*============================================

MENU ATIVO

============================================*/

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const sectionTop = section.offsetTop-150;

        const sectionHeight = section.clientHeight;

        if(scrollY>=sectionTop){

            current=section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#"+current){

            link.classList.add("active");

        }

    });

});

/*=========================================
CARRINHO
=========================================*/

const carrinho = document.getElementById("carrinho");

const abrirCarrinho = document.getElementById("abrirCarrinho");

const fecharCarrinho = document.getElementById("fecharCarrinho");

const overlayCarrinho = document.getElementById("overlayCarrinho");

abrirCarrinho.addEventListener("click", () => {

    carrinho.classList.add("aberto");

    overlayCarrinho.classList.add("ativo");

});

fecharCarrinho.addEventListener("click", () => {

    carrinho.classList.remove("aberto");

    overlayCarrinho.classList.remove("ativo");

});

overlayCarrinho.addEventListener("click", () => {

    carrinho.classList.remove("aberto");

    overlayCarrinho.classList.remove("ativo");

});

/*=========================================
OVERSIZED - TAMANHO
=========================================*/

const tamanhosOversized = document.querySelectorAll("#oversized .produto-tamanhos button");

tamanhosOversized.forEach(botao => {

    botao.addEventListener("click", function () {

        tamanhosOversized.forEach(t => t.classList.remove("ativo"));

        this.classList.add("ativo");

    });

});

/*=========================================
TRADICIONAL - TAMANHO
=========================================*/

const tamanhosTradicional = document.querySelectorAll("#tradicional .produto-tamanhos button");

tamanhosTradicional.forEach(botao => {

    botao.addEventListener("click", function () {

        tamanhosTradicional.forEach(t => t.classList.remove("ativo"));

        this.classList.add("ativo");

    });

});


// QUANTIDADE

const menos = document.querySelector(".quantidade button:first-child");

const mais = document.querySelector(".quantidade button:last-child");

const quantidade = document.querySelector(".quantidade span");

let qtd = 1;

if (menos && mais && quantidade) {

    mais.addEventListener("click", () => {

        qtd++;

        quantidade.innerText = qtd;

    });

    menos.addEventListener("click", () => {

        if (qtd > 1) {

            qtd--;

            quantidade.innerText = qtd;

        }

    });

}

/*=========================================
OVERSIZED
=========================================*/

// FOTO

const imagemOversized = document.getElementById("imagem-oversized");
const selectCor = document.getElementById("corOversized");

if (imagemOversized && selectCor) {

    selectCor.addEventListener("change", function () {

        console.log(this.value);

        imagemOversized.src = this.value;

    });

}

/*=========================================
TRADICIONAL
=========================================*/

// FOTO

const imagemTradicional = document.getElementById("imagem-tradicional");
const selectTradicional = document.getElementById("corTradicional");

if (imagemTradicional && selectTradicional) {

    selectTradicional.addEventListener("change", function () {

        imagemTradicional.src = this.value;

    });

}

/*=========================================
ADICIONAR AO CARRINHO
=========================================*/

const listaCarrinho = document.getElementById("listaCarrinho");
const contadorCarrinho = document.getElementById("contadorCarrinho");
const subtotal = document.getElementById("totalCarrinho");

let totalItens = 0;
let total = 0;

const botaoComprar = document.querySelector("#oversized .btn-comprar");

botaoComprar.addEventListener("click", function () {

    const cor = document.getElementById("corOversized").options[
        document.getElementById("corOversized").selectedIndex
    ].text;

    const tamanho = document.querySelector(".produto-tamanhos button.ativo")?.innerText || "-";

    const quantidade = Number(document.querySelector(".quantidade span").innerText);

    const preco = 50;

    listaCarrinho.querySelector(".carrinho-vazio")?.remove();

    const item = document.createElement("div");

    item.classList.add("item-carrinho");

    item.innerHTML = `
        <h4>Oversized Lisa</h4>

        <p>Cor: ${cor}</p>

        <p>Tamanho: ${tamanho}</p>

        <p>Quantidade: ${quantidade}</p>

        <p class="preco">R$ ${(preco * quantidade).toFixed(2)}</p>
    `;

    listaCarrinho.appendChild(item);

    totalItens += quantidade;

    contadorCarrinho.innerText = totalItens;

    total += preco * quantidade;

    subtotal.innerText = "R$ " + total.toFixed(2);

    this.innerHTML = "✔ Produto adicionado!";

this.style.background = "#2E7D32";

this.disabled = true;

setTimeout(() => {

    this.innerHTML = "Adicionar ao Carrinho";

    this.style.background = "";

    this.disabled = false;

}, 2000);

});
