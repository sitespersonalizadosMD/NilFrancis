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


/*=========================================
OVERSIZED - QUANTIDADE
=========================================*/

const qtdOversized = document.querySelector("#oversized .quantidade span");
const menosOversized = document.querySelector("#oversized .quantidade button:first-child");
const maisOversized = document.querySelector("#oversized .quantidade button:last-child");

let quantidadeOversized = 1;

if (menosOversized && maisOversized && qtdOversized) {

    maisOversized.addEventListener("click", () => {

        quantidadeOversized++;
        qtdOversized.innerText = quantidadeOversized;

    });

    menosOversized.addEventListener("click", () => {

        if (quantidadeOversized > 1) {

            quantidadeOversized--;
            qtdOversized.innerText = quantidadeOversized;

        }

    });

}

/*=========================================
TRADICIONAL - QUANTIDADE
=========================================*/

const qtdTradicional = document.querySelector("#tradicional .quantidade span");
const menosTradicional = document.querySelector("#tradicional .quantidade button:first-child");
const maisTradicional = document.querySelector("#tradicional .quantidade button:last-child");

let quantidadeTradicional = 1;

if (menosTradicional && maisTradicional && qtdTradicional) {

    maisTradicional.addEventListener("click", () => {

        quantidadeTradicional++;
        qtdTradicional.innerText = quantidadeTradicional;

    });

    menosTradicional.addEventListener("click", () => {

        if (quantidadeTradicional > 1) {

            quantidadeTradicional--;
            qtdTradicional.innerText = quantidadeTradicional;

        }

    });

}

/*=========================================
SHORT SARJA - QUANTIDADE
=========================================*/

const qtdShort = document.querySelector("#shorts .quantidade span");

const botoesQuantidadeShort = document.querySelectorAll("#shorts .quantidade button");

const menosShort = botoesQuantidadeShort[0];
const maisShort = botoesQuantidadeShort[1];

let quantidadeShort = 1;

if (menosShort && maisShort && qtdShort) {

    maisShort.addEventListener("click", () => {

        quantidadeShort++;
        qtdShort.innerText = quantidadeShort;

    });

    menosShort.addEventListener("click", () => {

        if (quantidadeShort > 1) {

            quantidadeShort--;
            qtdShort.innerText = quantidadeShort;

        }

    });

}

/*=========================================
OVERSIZED
=========================================*/

// FOTO

/*=========================================
OVERSIZED - FOTO + CARROSSEL
=========================================*/

const imagemOversized = document.getElementById("imagem-oversized");
const selectCor = document.getElementById("corOversized");

const oversizedAnterior = document.getElementById("oversizedAnterior");
const oversizedProxima = document.getElementById("oversizedProxima");


const galeriasOversized = {

    "Preta.jpeg": [
        "Preta.jpeg",
        "oversizedpreta2.png"
    ],

    "Azul escuro.jpeg": [
        "Azul escuro.jpeg",
        "azulescuro2.png",
        "azulescuro3.png"
    ],

    "Verde Militar.jpeg": [
        "Verde Militar.jpeg",
        "verdemilitar2.png"
    ]

};


let imagensOversized =
    galeriasOversized[selectCor.value] || [selectCor.value];

let indiceOversized = 0;


/* ATUALIZAR SETAS */

function atualizarSetasOversized(){

    if(!oversizedAnterior || !oversizedProxima) return;

    if(imagensOversized.length <= 1){

        oversizedAnterior.style.display = "none";
        oversizedProxima.style.display = "none";

    } else {

        oversizedAnterior.style.display = "flex";
        oversizedProxima.style.display = "flex";

    }

}


/* MOSTRAR IMAGEM */

function mostrarImagemOversized(indice){

    if(!imagemOversized) return;

    imagemOversized.style.opacity = "0";

    setTimeout(() => {

        imagemOversized.src = imagensOversized[indice];

        imagemOversized.style.opacity = "1";

    }, 150);

}


/* FOTO ANTERIOR */

if(oversizedAnterior){

    oversizedAnterior.addEventListener("click", () => {

        indiceOversized--;

        if(indiceOversized < 0){

            indiceOversized = imagensOversized.length - 1;

        }

        mostrarImagemOversized(indiceOversized);

    });

}


/* PRÓXIMA FOTO */

if(oversizedProxima){

    oversizedProxima.addEventListener("click", () => {

        indiceOversized++;

        if(indiceOversized >= imagensOversized.length){

            indiceOversized = 0;

        }

        mostrarImagemOversized(indiceOversized);

    });

}


/* TROCA DE COR */

if(imagemOversized && selectCor){

    selectCor.addEventListener("change", function(){

        imagensOversized =
            galeriasOversized[this.value] || [this.value];

        indiceOversized = 0;

        imagemOversized.src = imagensOversized[indiceOversized];

        atualizarSetasOversized();

    });

}


/* INICIALIZA */

atualizarSetasOversized();

/*=========================================
SHORT SARJA - TAMANHO
=========================================*/

const tamanhosShort = document.querySelectorAll("#shorts .produto-tamanhos button");

tamanhosShort.forEach(botao => {

    botao.addEventListener("click", function () {

        tamanhosShort.forEach(t => t.classList.remove("ativo"));

        this.classList.add("ativo");

    });

});

/*=========================================
SHORT SARJA
=========================================*/

// FOTO + CARROSSEL

const imagemShort = document.getElementById("imagem-short");
const selectShort = document.getElementById("corShort");

const shortAnterior = document.getElementById("shortAnterior");
const shortProxima = document.getElementById("shortProxima");

const galeriasShort = {

    "Short Sarja Preto.jpeg": [
        "Short Sarja Preto.jpeg",
        "shortpreto2.png"
    ],

    "Short Sarja Branco.jpeg": [
        "Short Sarja Branco.jpeg"
    ],

    "Short Sarja Bege.jpeg": [
        "Short Sarja Bege.jpeg"
    ],

    "begeclaro.png": [
        "begeclaro.png"
    ],

    "Short Sarja Cinza.jpeg": [
        "Short Sarja Cinza.jpeg"
    ],

    "Short Sarja Verde Militar.jpeg": [
        "Short Sarja Verde Militar.jpeg"
    ]

};


let imagensShort = galeriasShort[selectShort.value] || [selectShort.value];

let indiceShort = 0;


/* ATUALIZAR SETAS */

function atualizarSetasShort(){

    if(!shortAnterior || !shortProxima) return;

    if(imagensShort.length <= 1){

        shortAnterior.style.display = "none";
        shortProxima.style.display = "none";

    } else {

        shortAnterior.style.display = "flex";
        shortProxima.style.display = "flex";

    }

}


/* MOSTRAR IMAGEM */

function mostrarImagemShort(indice){

    if(!imagemShort) return;

    imagemShort.style.opacity = "0";

    setTimeout(() => {

        imagemShort.src = imagensShort[indice];

        imagemShort.style.opacity = "1";

    }, 150);

}


/* IMAGEM ANTERIOR */

if(shortAnterior){

    shortAnterior.addEventListener("click", () => {

        indiceShort--;

        if(indiceShort < 0){

            indiceShort = imagensShort.length - 1;

        }

        mostrarImagemShort(indiceShort);

    });

}


/* PRÓXIMA IMAGEM */

if(shortProxima){

    shortProxima.addEventListener("click", () => {

        indiceShort++;

        if(indiceShort >= imagensShort.length){

            indiceShort = 0;

        }

        mostrarImagemShort(indiceShort);

    });

}


/* TROCA DE COR */

if(imagemShort && selectShort){

    selectShort.addEventListener("change", function(){

        imagensShort = galeriasShort[this.value] || [this.value];

        indiceShort = 0;

        imagemShort.src = imagensShort[indiceShort];

        atualizarSetasShort();

    });

}


/* INICIALIZA */

atualizarSetasShort();

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

    const tamanhoSelecionado = document.querySelector(
    "#oversized .produto-tamanhos button.ativo"
);

if (!tamanhoSelecionado) {

    alert("Selecione um tamanho antes de adicionar ao carrinho.");

    return;

}

const tamanho = tamanhoSelecionado.innerText;

    const quantidade = Number(document.querySelector(".quantidade span").innerText);

    const preco = 50;

    listaCarrinho.querySelector(".carrinho-vazio")?.remove();

    const item = document.createElement("div");

    item.classList.add("item-carrinho");

    item.innerHTML = `
<div class="item-topo">

    <h4>Oversized Lisa</h4>

    <button class="btn-remover">
        <i class="fa-solid fa-trash"></i>
    </button>

</div>

<p>Cor: ${cor}</p>

<p>Tamanho: ${tamanho}</p>

<p>Quantidade: ${quantidade}</p>

<p class="preco">
    R$ ${(preco * quantidade).toFixed(2)}
</p>
`;

    listaCarrinho.appendChild(item);

    item.querySelector(".btn-remover").addEventListener("click", () => {

    // Atualiza o valor total
    total -= preco * quantidade;

    if (total < 0) total = 0;

    subtotal.innerText = `R$ ${total.toFixed(2)}`;

    // Atualiza o contador
    totalItens -= quantidade;

    if (totalItens < 0) totalItens = 0;

    contadorCarrinho.innerText = totalItens;

    // Remove o item
    item.remove();

    // Se o carrinho ficou vazio
   if (listaCarrinho.querySelectorAll(".item-carrinho").length === 0) {

    listaCarrinho.innerHTML = `
        <p class="carrinho-vazio">
            Seu carrinho está vazio.
        </p>
    `;

}

});

    totalItens += quantidade;

    contadorCarrinho.innerText = totalItens;

    total += preco * quantidade;

    subtotal.innerText = "R$ " + total.toFixed(2);

    this.innerHTML = " Adicionado ao Carrinho";

this.style.background = "#68745F";

this.disabled = true;

setTimeout(() => {

    this.innerHTML = "Adicionar ao Carrinho";

    this.style.background = "";

    this.disabled = false;

}, 2000);

});

/*=========================================
TRADICIONAL - CARRINHO
=========================================*/

const botaoComprarTradicional = document.querySelector("#tradicional .btn-comprar");

if (botaoComprarTradicional) {

    botaoComprarTradicional.addEventListener("click", function () {

        const cor = document.getElementById("corTradicional").options[
            document.getElementById("corTradicional").selectedIndex
        ].text;

        const tamanhoSelecionado =
document.querySelector("#tradicional .produto-tamanhos button.ativo");

if (!tamanhoSelecionado) {

    alert("Selecione um tamanho antes de adicionar ao carrinho.");

    return;

}

const tamanho = tamanhoSelecionado.innerText;

        const quantidade = Number(document.querySelector("#tradicional .quantidade span").innerText);

        const preco = 50;

        listaCarrinho.querySelector(".carrinho-vazio")?.remove();

        const item = document.createElement("div");

        item.classList.add("item-carrinho");

       item.innerHTML = `
<div class="item-topo">

    <h4>Tradicional</h4>

    <button class="btn-remover">
        <i class="fa-solid fa-trash"></i>
    </button>

</div>

<p>Cor: ${cor}</p>

<p>Tamanho: ${tamanho}</p>

<p>Quantidade: ${quantidade}</p>

<p class="preco">
    R$ ${(preco * quantidade).toFixed(2)}
</p>
`;

        listaCarrinho.appendChild(item);

        item.querySelector(".btn-remover").addEventListener("click", () => {

    // Atualiza o valor total
    total -= preco * quantidade;

    if (total < 0) total = 0;

    subtotal.innerText = `R$ ${total.toFixed(2)}`;

    // Atualiza o contador
    totalItens -= quantidade;

    if (totalItens < 0) totalItens = 0;

    contadorCarrinho.innerText = totalItens;

    // Remove o item
    item.remove();

    // Se o carrinho ficou vazio
  if (listaCarrinho.querySelectorAll(".item-carrinho").length === 0) {

    listaCarrinho.innerHTML = `
        <p class="carrinho-vazio">
            Seu carrinho está vazio.
        </p>
    `;

}

});

        totalItens += quantidade;
        contadorCarrinho.innerText = totalItens;

        total += preco * quantidade;
        subtotal.innerText = "R$ " + total.toFixed(2);

        this.innerHTML = "Adicionado ao Carrinho";
        this.style.background = "#68745F";
        this.disabled = true;

        setTimeout(() => {

            this.innerHTML = "🛒 Adicionar ao Carrinho";
            this.style.background = "";
            this.disabled = false;

        }, 2000);

    });

}
/*=========================================
SHORT SARJA - CARRINHO
=========================================*/

const botaoComprarShort = document.querySelector("#shorts .btn-comprar");

if (botaoComprarShort) {

    botaoComprarShort.addEventListener("click", function () {

        const cor = document.getElementById("corShort").options[
            document.getElementById("corShort").selectedIndex
        ].text;

        const tamanhoSelecionado =
document.querySelector("#shorts .produto-tamanhos button.ativo");

if (!tamanhoSelecionado) {

    alert("Selecione um tamanho antes de adicionar ao carrinho.");

    return;

}

const tamanho = tamanhoSelecionado.innerText;

        const quantidade = Number(document.querySelector("#shorts .quantidade span").innerText);

        const preco = 60;

        listaCarrinho.querySelector(".carrinho-vazio")?.remove();

        const item = document.createElement("div");

        item.classList.add("item-carrinho");

        item.innerHTML = `
<div class="item-topo">

    <h4>Short Sarja</h4>

    <button class="btn-remover">
        <i class="fa-solid fa-trash"></i>
    </button>

</div>

<p>Cor: ${cor}</p>

<p>Tamanho: ${tamanho}</p>

<p>Quantidade: ${quantidade}</p>

<p class="preco">
    R$ ${(preco * quantidade).toFixed(2)}
</p>
`;

        listaCarrinho.appendChild(item);

        item.querySelector(".btn-remover").addEventListener("click", () => {

    // Atualiza o valor total
    total -= preco * quantidade;

    if (total < 0) total = 0;

    subtotal.innerText = `R$ ${total.toFixed(2)}`;

    // Atualiza o contador
    totalItens -= quantidade;

    if (totalItens < 0) totalItens = 0;

    contadorCarrinho.innerText = totalItens;

    // Remove o item
    item.remove();

    // Se o carrinho ficou vazio
  if (listaCarrinho.querySelectorAll(".item-carrinho").length === 0) {

    listaCarrinho.innerHTML = `
        <p class="carrinho-vazio">
            Seu carrinho está vazio.
        </p>
    `;

}

});

        totalItens += quantidade;
        contadorCarrinho.innerText = totalItens;

        total += preco * quantidade;
        subtotal.innerText = "R$ " + total.toFixed(2);

        this.innerHTML = "Adicionado ao Carrinho";
        this.style.background = "#68745F";
        this.disabled = true;

        setTimeout(() => {

            this.innerHTML = "🛒 Adicionar ao Carrinho";
            this.style.background = "";
            this.disabled = false;

        }, 2000);

    });

}
/*=========================================
BERMUDA MALHÃO
=========================================*/

// FOTO

/*=========================================
BERMUDA MALHÃO - CARROSSEL
=========================================*/

const imagemBermuda = document.getElementById("imagem-bermuda");
const selectBermuda = document.getElementById("corBermuda");

const bermudaAnterior = document.getElementById("bermudaAnterior");
const bermudaProxima = document.getElementById("bermudaProxima");

const galeriasBermuda = {

    "Bermuda Malhão Preta.jpeg": [
        "Bermuda Malhão Preta.jpeg",
        "bermudapreta.png"
    ],

    "Bermuda Malhão Branca.jpeg": [
        "Bermuda Malhão Branca.jpeg"
    ],

    "Bermuda Malhão Marrom.jpeg": [
        "Bermuda Malhão Marrom.jpeg"
    ],

     "verdeaguabermuda.png": [
        "verdeaguabermuda.png"
    ]

};

let imagensBermuda = galeriasBermuda["Bermuda Malhão Preta.jpeg"];

let indiceBermuda = 0;

function atualizarSetasBermuda(){

    if(!bermudaAnterior || !bermudaProxima) return;

    if(imagensBermuda.length <= 1){

        bermudaAnterior.style.display = "none";
        bermudaProxima.style.display = "none";

    } else {

        bermudaAnterior.style.display = "flex";
        bermudaProxima.style.display = "flex";

    }

}


/* TROCAR IMAGEM */

function mostrarImagemBermuda(indice){

    if(!imagemBermuda) return;

    imagemBermuda.style.opacity = "0";

    setTimeout(() => {

        imagemBermuda.src = imagensBermuda[indice];

        imagemBermuda.style.opacity = "1";

    }, 150);
}


/* IMAGEM ANTERIOR */

if(bermudaAnterior){

    bermudaAnterior.addEventListener("click", () => {

        indiceBermuda--;

        if(indiceBermuda < 0){

            indiceBermuda = imagensBermuda.length - 1;

        }

        mostrarImagemBermuda(indiceBermuda);

    });

}


/* PRÓXIMA IMAGEM */

if(bermudaProxima){

    bermudaProxima.addEventListener("click", () => {

        indiceBermuda++;

        if(indiceBermuda >= imagensBermuda.length){

            indiceBermuda = 0;

        }

        mostrarImagemBermuda(indiceBermuda);

    });

}


/* TROCA DE COR */

if(imagemBermuda && selectBermuda){

    selectBermuda.addEventListener("change", function(){

        /*
        Pega a galeria correspondente à cor escolhida.
        */

        imagensBermuda = galeriasBermuda[this.value] || [this.value];

        /*
        Sempre começa na primeira foto
        da nova cor.
        */

        indiceBermuda = 0;

        imagemBermuda.src = imagensBermuda[indiceBermuda];

        atualizarSetasBermuda();

    });

}
atualizarSetasBermuda();

/*=========================================
BERMUDA MALHÃO - TAMANHO
=========================================*/

const tamanhosBermuda = document.querySelectorAll("#bermuda .produto-tamanhos button");

tamanhosBermuda.forEach(botao => {

    botao.addEventListener("click", function () {

        tamanhosBermuda.forEach(t => t.classList.remove("ativo"));

        this.classList.add("ativo");

    });

});
/*=========================================
BERMUDA MALHÃO - QUANTIDADE
=========================================*/

const qtdBermuda = document.querySelector("#bermuda .quantidade span");

const botoesQuantidadeBermuda = document.querySelectorAll("#bermuda .quantidade button");

const menosBermuda = botoesQuantidadeBermuda[0];
const maisBermuda = botoesQuantidadeBermuda[1];

let quantidadeBermuda = 1;

if (menosBermuda && maisBermuda && qtdBermuda) {

    maisBermuda.addEventListener("click", () => {

        quantidadeBermuda++;

        qtdBermuda.innerText = quantidadeBermuda;

    });

    menosBermuda.addEventListener("click", () => {

        if (quantidadeBermuda > 1) {

            quantidadeBermuda--;

            qtdBermuda.innerText = quantidadeBermuda;

        }

    });

}
/*=========================================
BERMUDA MALHÃO - CARRINHO
=========================================*/

const botaoComprarBermuda = document.querySelector("#bermuda .btn-comprar");

if (botaoComprarBermuda) {

    botaoComprarBermuda.addEventListener("click", function () {

        const cor = document.getElementById("corBermuda").options[
            document.getElementById("corBermuda").selectedIndex
        ].text;

        const tamanhoSelecionado = document.querySelector(
    "#bermuda .produto-tamanhos button.ativo"
);

if (!tamanhoSelecionado) {

    alert("Selecione um tamanho antes de adicionar ao carrinho.");

    return;

}

const tamanho = tamanhoSelecionado.innerText;
        const quantidade =
            Number(document.querySelector("#bermuda .quantidade span").innerText);

        const preco = 60;

        listaCarrinho.querySelector(".carrinho-vazio")?.remove();

        const item = document.createElement("div");

        item.classList.add("item-carrinho");

      item.innerHTML = `
<div class="item-topo">

    <h4>Bermuda Malhão</h4>

    <button class="btn-remover">
        <i class="fa-solid fa-trash"></i>
    </button>

</div>

<p>Cor: ${cor}</p>

<p>Tamanho: ${tamanho}</p>

<p>Quantidade: ${quantidade}</p>

<p class="preco">
    R$ ${(preco * quantidade).toFixed(2)}
</p>
`;

        listaCarrinho.appendChild(item);

        item.querySelector(".btn-remover").addEventListener("click", () => {

    // Atualiza o valor total
    total -= preco * quantidade;

    if (total < 0) total = 0;

    subtotal.innerText = `R$ ${total.toFixed(2)}`;

    // Atualiza o contador
    totalItens -= quantidade;

    if (totalItens < 0) totalItens = 0;

    contadorCarrinho.innerText = totalItens;

    // Remove o item
    item.remove();

    // Se o carrinho ficou vazio
  if (listaCarrinho.querySelectorAll(".item-carrinho").length === 0) {

    listaCarrinho.innerHTML = `
        <p class="carrinho-vazio">
            Seu carrinho está vazio.
        </p>
    `;

}

});

        totalItens += quantidade;
        contadorCarrinho.innerText = totalItens;

        total += preco * quantidade;
        subtotal.innerText = "R$ " + total.toFixed(2);

        this.innerHTML = "Adicionado ao Carrinho";
        this.style.background = "#68745F";
        this.disabled = true;

        setTimeout(() => {

            this.innerHTML = "Adicionar ao Carrinho";
            this.style.background = "";
            this.disabled = false;

        }, 2000);

    });

}

/*=========================================
BERMUDA MALHÃO - MEDIDAS
=========================================*/

const abrirMedidasBermuda =
    document.getElementById("abrirMedidasBermuda");

const fecharMedidasBermuda =
    document.getElementById("fecharMedidasBermuda");

const modalMedidasBermuda =
    document.getElementById("modalMedidasBermuda");


/* ABRIR */

if(abrirMedidasBermuda && modalMedidasBermuda){

    abrirMedidasBermuda.addEventListener("click", () => {

        modalMedidasBermuda.classList.add("ativo");

        document.body.style.overflow = "hidden";

    });

}


/* FECHAR NO X */

if(fecharMedidasBermuda && modalMedidasBermuda){

    fecharMedidasBermuda.addEventListener("click", () => {

        modalMedidasBermuda.classList.remove("ativo");

        document.body.style.overflow = "";

    });

}


/* FECHAR CLICANDO FORA */

if(modalMedidasBermuda){

    modalMedidasBermuda.addEventListener("click", (evento) => {

        if(evento.target === modalMedidasBermuda){

            modalMedidasBermuda.classList.remove("ativo");

            document.body.style.overflow = "";

        }

    });

}


/* FECHAR COM ESC */

document.addEventListener("keydown", (evento) => {

    if(evento.key === "Escape" &&
       modalMedidasBermuda &&
       modalMedidasBermuda.classList.contains("ativo")){

        modalMedidasBermuda.classList.remove("ativo");

        document.body.style.overflow = "";

    }

});

/*=========================================
SHORT SARJA - MEDIDAS
=========================================*/

const abrirMedidasShort =
    document.getElementById("abrirMedidasShort");

const fecharMedidasShort =
    document.getElementById("fecharMedidasShort");

const modalMedidasShort =
    document.getElementById("modalMedidasShort");


/* ABRIR */

if(abrirMedidasShort && modalMedidasShort){

    abrirMedidasShort.addEventListener("click", () => {

        modalMedidasShort.classList.add("ativo");

        document.body.style.overflow = "hidden";

    });

}


/* FECHAR NO X */

if(fecharMedidasShort && modalMedidasShort){

    fecharMedidasShort.addEventListener("click", () => {

        modalMedidasShort.classList.remove("ativo");

        document.body.style.overflow = "";

    });

}


/* FECHAR CLICANDO FORA */

if(modalMedidasShort){

    modalMedidasShort.addEventListener("click", (evento) => {

        if(evento.target === modalMedidasShort){

            modalMedidasShort.classList.remove("ativo");

            document.body.style.overflow = "";

        }

    });

}


/* FECHAR COM ESC */

document.addEventListener("keydown", (evento) => {

    if(evento.key === "Escape" &&
       modalMedidasShort &&
       modalMedidasShort.classList.contains("ativo")){

        modalMedidasShort.classList.remove("ativo");

        document.body.style.overflow = "";

    }

});

/*=========================================
CAMISA OVERSIZED - MEDIDAS
=========================================*/

const abrirMedidasOversized =
    document.getElementById("abrirMedidasOversized");

const fecharMedidasOversized =
    document.getElementById("fecharMedidasOversized");

const modalMedidasOversized =
    document.getElementById("modalMedidasOversized");


/* ABRIR */

if(abrirMedidasOversized && modalMedidasOversized){

    abrirMedidasOversized.addEventListener("click", () => {

        modalMedidasOversized.classList.add("ativo");

        document.body.style.overflow = "hidden";

    });

}


/* FECHAR NO X */

if(fecharMedidasOversized && modalMedidasOversized){

    fecharMedidasOversized.addEventListener("click", () => {

        modalMedidasOversized.classList.remove("ativo");

        document.body.style.overflow = "";

    });

}


/* FECHAR CLICANDO FORA */

if(modalMedidasOversized){

    modalMedidasOversized.addEventListener("click", (evento) => {

        if(evento.target === modalMedidasOversized){

            modalMedidasOversized.classList.remove("ativo");

            document.body.style.overflow = "";

        }

    });

}


/* FECHAR COM ESC */

document.addEventListener("keydown", (evento) => {

    if(
        evento.key === "Escape" &&
        modalMedidasOversized &&
        modalMedidasOversized.classList.contains("ativo")
    ){

        modalMedidasOversized.classList.remove("ativo");

        document.body.style.overflow = "";

    }

});
/*=========================================
REGATA
=========================================*/

// FOTO

const imagemRegata = document.getElementById("imagem-regata");
const selectRegata = document.getElementById("corRegata");

if (imagemRegata && selectRegata) {

    selectRegata.addEventListener("change", function () {

        imagemRegata.src = this.value;

    });

}
/*=========================================
REGATA - TAMANHO
=========================================*/

const tamanhosRegata = document.querySelectorAll("#regata .produto-tamanhos button");

tamanhosRegata.forEach(botao => {

    botao.addEventListener("click", function () {

        tamanhosRegata.forEach(t => t.classList.remove("ativo"));

        this.classList.add("ativo");

    });

});
/*=========================================
REGATA - QUANTIDADE
=========================================*/

const qtdRegata = document.querySelector("#regata .quantidade span");

const botoesQuantidadeRegata = document.querySelectorAll("#regata .quantidade button");

const menosRegata = botoesQuantidadeRegata[0];
const maisRegata = botoesQuantidadeRegata[1];

let quantidadeRegata = 1;

if (menosRegata && maisRegata && qtdRegata) {

    maisRegata.addEventListener("click", () => {

        quantidadeRegata++;

        qtdRegata.innerText = quantidadeRegata;

    });

    menosRegata.addEventListener("click", () => {

        if (quantidadeRegata > 1) {

            quantidadeRegata--;

            qtdRegata.innerText = quantidadeRegata;

        }

    });

}
/*=========================================
REGATA - CARRINHO
=========================================*/

const botaoComprarRegata = document.querySelector("#regata .btn-comprar");

if (botaoComprarRegata) {

    botaoComprarRegata.addEventListener("click", function () {

        const cor = document.getElementById("corRegata").options[
            document.getElementById("corRegata").selectedIndex
        ].text;

        const tamanhoSelecionado = document.querySelector(
    "#regata .produto-tamanhos button.ativo"
);

if (!tamanhoSelecionado) {

    alert("Selecione um tamanho antes de adicionar ao carrinho.");

    return;

}

const tamanho = tamanhoSelecionado.innerText;

        const quantidade =
            Number(document.querySelector("#regata .quantidade span").innerText);

        const preco = 50;

        listaCarrinho.querySelector(".carrinho-vazio")?.remove();

        const item = document.createElement("div");

        item.classList.add("item-carrinho");

       item.innerHTML = `
<div class="item-topo">

    <h4>Regata Machão</h4>

    <button class="btn-remover">
        <i class="fa-solid fa-trash"></i>
    </button>

</div>

<p>Cor: ${cor}</p>

<p>Tamanho: ${tamanho}</p>

<p>Quantidade: ${quantidade}</p>

<p class="preco">
    R$ ${(preco * quantidade).toFixed(2)}
</p>
`;

        listaCarrinho.appendChild(item);

        item.querySelector(".btn-remover").addEventListener("click", () => {

    // Atualiza o valor total
    total -= preco * quantidade;

    if (total < 0) total = 0;

    subtotal.innerText = `R$ ${total.toFixed(2)}`;

    // Atualiza o contador
    totalItens -= quantidade;

    if (totalItens < 0) totalItens = 0;

    contadorCarrinho.innerText = totalItens;

    // Remove o item
    item.remove();

    // Se o carrinho ficou vazio
   if (listaCarrinho.querySelectorAll(".item-carrinho").length === 0) {

    listaCarrinho.innerHTML = `
        <p class="carrinho-vazio">
            Seu carrinho está vazio.
        </p>
    `;

}

});

        totalItens += quantidade;
        contadorCarrinho.innerText = totalItens;

        total += preco * quantidade;
        subtotal.innerText = "R$ " + total.toFixed(2);

        this.innerHTML = "Adicionado ao Carrinho";
        this.style.background = "#68745F";
        this.disabled = true;

        setTimeout(() => {

            this.innerHTML = "Adicionar ao Carrinho";
            this.style.background = "";
            this.disabled = false;

        }, 2000);

    });

}
/*=========================================
CHECKOUT
=========================================*/

const btnContinuar = document.getElementById("continuarPedido");
const btnVoltar = document.getElementById("voltarCarrinho");


const dadosEntrega = document.querySelector(".dados-entrega");
const acoesCheckout = document.querySelector(".acoes-checkout");
const footerCarrinho = document.querySelector(".carrinho-footer");

if (btnContinuar) {

    btnContinuar.addEventListener("click", () => {

    listaCarrinho.style.display = "none";

    footerCarrinho.style.display = "none";

    dadosEntrega.classList.add("ativo");

    acoesCheckout.style.display = "flex";

});

}

if (btnVoltar) {

    btnVoltar.addEventListener("click", () => {

        listaCarrinho.style.display = "block";

        footerCarrinho.style.display = "block";

       dadosEntrega.classList.remove("ativo");

        acoesCheckout.style.display = "none";

    });
    }
const pagamentoSelect = document.getElementById("pagamentoCliente");

const opcoesCartao = document.getElementById("opcoesCartao");

const opcao2x = document.getElementById("opcao2x");

if (pagamentoSelect) {

    pagamentoSelect.addEventListener("change", () => {

        if (pagamentoSelect.value === "Cartão de Crédito") {

            opcoesCartao.style.display = "block";

            if (total >= 100) {

                const valorParcela = (total / 2).toFixed(2);

                opcao2x.innerHTML = `
                    <input
                        type="radio"
                        name="parcelamento"
                        value="2x">

                    2x de R$ ${valorParcela} sem juros
                `;

                opcao2x.style.display = "flex";

            } else {

                opcao2x.style.display = "none";

            }

        } else {

            opcoesCartao.style.display = "none";

        }

    });

}
/*=========================================
FINALIZAR PEDIDO
=========================================*/

const btnFinalizar = document.getElementById("finalizarPedido");

if (btnFinalizar) {

    btnFinalizar.addEventListener("click", () => {

        const nome = document.getElementById("nomeCliente").value;
        const cep = document.getElementById("cepCliente").value;
        const rua = document.getElementById("ruaCliente").value;
        const numero = document.getElementById("numeroCliente").value;
        const complemento = document.getElementById("complementoCliente").value;
        const bairro = document.getElementById("bairroCliente").value;
        const cidade = document.getElementById("cidadeCliente").value;
        const estado = document.getElementById("estadoCliente").value;
        const pagamento = document.getElementById("pagamentoCliente").value;
        const observacoes = document.getElementById("observacoesCliente").value;

        if (
    nome.trim() === "" ||
    cep.trim() === "" ||
    rua.trim() === "" ||
    numero.trim() === "" ||
    bairro.trim() === "" ||
    cidade.trim() === "" ||
    estado.trim() === ""
) {
    alert("Preencha todos os campos obrigatórios.");
    return;
}

        let mensagem = `🛍️ *NOVO PEDIDO - NIL FRANCIS*%0A%0A`;

        mensagem += `👤 *Cliente:* ${nome}%0A`;
        mensagem += `📍 *Endereço:* ${rua}, ${numero}%0A`;

        if (complemento !== "") {
            mensagem += `Complemento: ${complemento}%0A`;
        }

        mensagem += `${bairro}%0A`;
        mensagem += `${cidade} - ${estado}%0A`;
        mensagem += `CEP: ${cep}%0A%0A`;

        mensagem += `🛒 *Produtos:*%0A%0A`;

        document.querySelectorAll(".item-carrinho").forEach(item => {

            mensagem += item.innerText.replace(/\n/g,"%0A") + "%0A%0A";

        });

        mensagem += `💰 *Total:* ${subtotal.innerText}%0A`;

        mensagem += `💳 *Pagamento:* ${pagamento}%0A%0A`;

        const parcelamento = document.querySelector(
    'input[name="parcelamento"]:checked'
);

if (parcelamento) {

    mensagem += `Parcelamento: ${parcelamento.parentElement.innerText}%0A%0A`;

}

        if (observacoes !== "") {

            mensagem += `📝 *Observações:* ${observacoes}%0A`;

        }

        window.open(
            `https://wa.me/5521997754893?text=${mensagem}`,
            "_blank"
        );

    });

}

/*=========================================
BUSCAR CEP
=========================================*/

const cepCliente = document.getElementById("cepCliente");

if (cepCliente) {

    cepCliente.addEventListener("blur", async () => {

        const cep = cepCliente.value.replace(/\D/g, "");

        if (cep.length !== 8) return;

        try {

            const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`);

            const endereco = await resposta.json();

            if (endereco.erro) {

                alert("CEP não encontrado.");

                return;

            }

            document.getElementById("ruaCliente").value = endereco.logradouro;
            document.getElementById("bairroCliente").value = endereco.bairro;
            document.getElementById("cidadeCliente").value = endereco.localidade;
            document.getElementById("estadoCliente").value = endereco.uf;

        } catch {

            alert("Erro ao consultar o CEP.");

        }

    });

}
/*=========================================
NOSSA COLEÇÃO - CARROSSEL BERMUDAS
=========================================*/

const imagemColecaoBermuda =
    document.getElementById("imagemColecaoBermuda");

const botaoColecaoBermudaAnterior =
    document.querySelector(".categoria-bermuda-prev");

const botaoColecaoBermudaProxima =
    document.querySelector(".categoria-bermuda-next");


const imagensColecaoBermuda = [

    "bermudamodelo.png",

    "bermudamodelo2.png",

    "bermudamodelo3.png",

    "fotoscoresbermuda.png",

    "Fotomodelobermuda.png",

    "vantagensbermudamalhão.png"

];


let indiceColecaoBermuda = 0;


/* TROCAR IMAGEM */

function mostrarImagemColecaoBermuda(indice){

    if(!imagemColecaoBermuda) return;

    imagemColecaoBermuda.style.opacity = "0";


    setTimeout(() => {

        imagemColecaoBermuda.src =
            imagensColecaoBermuda[indice];

        imagemColecaoBermuda.style.opacity = "1";

    }, 150);

}


/* FOTO ANTERIOR */

if(botaoColecaoBermudaAnterior){

    botaoColecaoBermudaAnterior.addEventListener(
        "click",
        function(){

            indiceColecaoBermuda--;

            if(indiceColecaoBermuda < 0){

                indiceColecaoBermuda =
                    imagensColecaoBermuda.length - 1;

            }

            mostrarImagemColecaoBermuda(
                indiceColecaoBermuda
            );

        }
    );

}


/* PRÓXIMA FOTO */

if(botaoColecaoBermudaProxima){

    botaoColecaoBermudaProxima.addEventListener(
        "click",
        function(){

            indiceColecaoBermuda++;

            if(
                indiceColecaoBermuda >=
                imagensColecaoBermuda.length
            ){

                indiceColecaoBermuda = 0;

            }

            mostrarImagemColecaoBermuda(
                indiceColecaoBermuda
            );

        }
    );

}
/*=========================================
NOSSA COLEÇÃO - CARROSSEL SHORTS
=========================================*/

const imagemColecaoShorts =
    document.getElementById("imagemColecaoShorts");

const botaoColecaoShortsAnterior =
    document.querySelector(".categoria-shorts-prev");

const botaoColecaoShortsProxima =
    document.querySelector(".categoria-shorts-next");


const imagensColecaoShorts = [

    "short3.png",

    "short2.png",

    "shortnascores.png",

    "shorts5cores.png",

    "vantagensdoshort.png"

];


let indiceColecaoShorts = 0;


/* TROCAR IMAGEM */

function mostrarImagemColecaoShorts(indice){

    if(!imagemColecaoShorts) return;

    imagemColecaoShorts.style.opacity = "0";

    setTimeout(() => {

        imagemColecaoShorts.src =
            imagensColecaoShorts[indice];

        imagemColecaoShorts.style.opacity = "1";

    }, 150);

}


/* FOTO ANTERIOR */

if(botaoColecaoShortsAnterior){

    botaoColecaoShortsAnterior.addEventListener(
        "click",
        function(){

            indiceColecaoShorts--;

            if(indiceColecaoShorts < 0){

                indiceColecaoShorts =
                    imagensColecaoShorts.length - 1;

            }

            mostrarImagemColecaoShorts(
                indiceColecaoShorts
            );

        }
    );

}


/* PRÓXIMA FOTO */

if(botaoColecaoShortsProxima){

    botaoColecaoShortsProxima.addEventListener(
        "click",
        function(){

            indiceColecaoShorts++;

            if(
                indiceColecaoShorts >=
                imagensColecaoShorts.length
            ){

                indiceColecaoShorts = 0;

            }

            mostrarImagemColecaoShorts(
                indiceColecaoShorts
            );

        }
    );

}
/* =========================
   NOSSA COLEÇÃO - CARROSSEL OVERSIZED
========================= */

const imagensColecaoOversized = [
    "7coresoversized.png",
    "vantagensoversized.png",
    "coresoversized.png"
];

let indiceColecaoOversized = 0;

const imagemColecaoOversized =
    document.getElementById("imagemColecaoOversized");

const btnOversizedAnterior =
    document.querySelector(".categoria-oversized-prev");

const btnOversizedProxima =
    document.querySelector(".categoria-oversized-next");


function atualizarImagemColecaoOversized() {

    if (!imagemColecaoOversized) return;

    imagemColecaoOversized.style.opacity = "0";

    setTimeout(() => {

        imagemColecaoOversized.src =
            imagensColecaoOversized[indiceColecaoOversized];

        imagemColecaoOversized.style.opacity = "1";

    }, 150);

}


/* PRÓXIMA FOTO */

if (btnOversizedProxima) {

    btnOversizedProxima.addEventListener("click", () => {

        indiceColecaoOversized++;

        if (
            indiceColecaoOversized >=
            imagensColecaoOversized.length
        ) {

            indiceColecaoOversized = 0;

        }

        atualizarImagemColecaoOversized();

    });

}


/* FOTO ANTERIOR */

if (btnOversizedAnterior) {

    btnOversizedAnterior.addEventListener("click", () => {

        indiceColecaoOversized--;

        if (indiceColecaoOversized < 0) {

            indiceColecaoOversized =
                imagensColecaoOversized.length - 1;

        }

        atualizarImagemColecaoOversized();

    });

}
/* =========================
   NOSSA COLEÇÃO - CARROSSEL TRADICIONAL
========================= */

const imagensColecaoTradicional = [
    "7corestradicional.png",
    "vantagenscamisatradicional.png",
    "todascorestradicional.png"
];

let indiceColecaoTradicional = 0;

const imagemColecaoTradicional =
    document.getElementById("imagemColecaoTradicional");

const btnTradicionalAnterior =
    document.querySelector(".categoria-tradicional-prev");

const btnTradicionalProxima =
    document.querySelector(".categoria-tradicional-next");


function atualizarImagemColecaoTradicional() {

    if (!imagemColecaoTradicional) return;

    imagemColecaoTradicional.style.opacity = "0";

    setTimeout(() => {

        imagemColecaoTradicional.src =
            imagensColecaoTradicional[
                indiceColecaoTradicional
            ];

        imagemColecaoTradicional.style.opacity = "1";

    }, 150);

}


/* PRÓXIMA FOTO */

if (btnTradicionalProxima) {

    btnTradicionalProxima.addEventListener("click", () => {

        indiceColecaoTradicional++;

        if (
            indiceColecaoTradicional >=
            imagensColecaoTradicional.length
        ) {
            indiceColecaoTradicional = 0;
        }

        atualizarImagemColecaoTradicional();

    });

}


/* FOTO ANTERIOR */

if (btnTradicionalAnterior) {

    btnTradicionalAnterior.addEventListener("click", () => {

        indiceColecaoTradicional--;

        if (indiceColecaoTradicional < 0) {

            indiceColecaoTradicional =
                imagensColecaoTradicional.length - 1;

        }

        atualizarImagemColecaoTradicional();

    });

}
/*=========================================
TRADICIONAL - CARROSSEL
=========================================*/

const imagemTradicional =
    document.getElementById("imagem-tradicional");

const tradicionalAnterior =
    document.getElementById("tradicionalAnterior");

const tradicionalProxima =
    document.getElementById("tradicionalProxima");

const corTradicional =
    document.getElementById("corTradicional");


const galeriasTradicional = {

    "Camiseta Tradicional Lisa Preta.jpeg": [
        "Camiseta Tradicional Lisa Preta.jpeg",
        "tradicionalpreta2.png"
    ],

    "Camiseta Tradicional Lisa Branca.jpeg": [
        "Camiseta Tradicional Lisa Branca.jpeg",
        "creme2.png"
    ],

    "Camiseta Tradicional Lisa Azul Marinho.jpeg": [
        "Camiseta Tradicional Lisa Azul Marinho.jpeg",
        "azulmarinho2.png"
    ],

    "Camiseta Tradicional Lisa Verde Escuro.jpeg": [
    "Camiseta Tradicional Lisa Verde Escuro.jpeg",
    "verdeescuro2.png"
],
    "Camiseta Tradicional Lisa Verde Militar.jpeg": [
    "Camiseta Tradicional Lisa Verde Militar.jpeg",
    "tradicionalverdemilitar2.png"
]

};


let indiceTradicional = 0;


function atualizarTradicional() {

    const corSelecionada = corTradicional.value;

    const galeria =
        galeriasTradicional[corSelecionada];

    if (!galeria) {

        indiceTradicional = 0;

        imagemTradicional.src = corSelecionada;

        tradicionalAnterior.style.display = "none";
        tradicionalProxima.style.display = "none";

        return;
    }


    if (indiceTradicional >= galeria.length) {
        indiceTradicional = 0;
    }


    imagemTradicional.src =
        galeria[indiceTradicional];


    if (galeria.length > 1) {

        tradicionalAnterior.style.display = "flex";
        tradicionalProxima.style.display = "flex";

    } else {

        tradicionalAnterior.style.display = "none";
        tradicionalProxima.style.display = "none";

    }

}


/* PRÓXIMA FOTO */

tradicionalProxima.addEventListener("click", () => {

    const galeria =
        galeriasTradicional[corTradicional.value];

    if (!galeria || galeria.length <= 1) return;


    indiceTradicional++;

    if (indiceTradicional >= galeria.length) {
        indiceTradicional = 0;
    }


    atualizarTradicional();

    });


/* FOTO ANTERIOR */

tradicionalAnterior.addEventListener("click", () => {

    const galeria =
        galeriasTradicional[corTradicional.value];

    if (!galeria || galeria.length <= 1) return;


    indiceTradicional--;

    if (indiceTradicional < 0) {
        indiceTradicional = galeria.length - 1;
    }


    atualizarTradicional();

});


/* TROCA DE COR */

corTradicional.addEventListener("change", () => {

    indiceTradicional = 0;

    atualizarTradicional();

});


/* INICIALIZA */

atualizarTradicional();
