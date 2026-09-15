/* =====================================================
   VARIÁVEIS
===================================================== */

let sistemaSelecionado = null;
let generoSelecionado = null;


/* =====================================================
   ETAPA 1 → ETAPA 2
===================================================== */

function irParaEtapa2() {

    const sistema =
        document.querySelector(
            'input[name="sistema"]:checked'
        );

    if (!sistema) {

        alert("Escolha um sistema de RPG para continuar.");

        return;
    }

    sistemaSelecionado = sistema.value;

    document.getElementById("sistemaEscolhido").textContent =
        sistemaSelecionado;

    mudarEtapa(2);
}


/* =====================================================
   ETAPA 2 → ETAPA 1
===================================================== */

function voltarParaEtapa1() {

    mudarEtapa(1);

}


/* =====================================================
   ESCOLHER GÊNERO
===================================================== */

function atualizarGenero() {

    const genero =
        document.querySelector(
            'input[name="genero"]:checked'
        );

    if (!genero) {
        return;
    }

    generoSelecionado = genero.value;


    const mensagem =
        document.getElementById("mensagemNome");


    if (generoSelecionado === "feminino") {

        mensagem.textContent =
            "Nomes aleatórios femininos estão disponíveis.";

    }

    else if (generoSelecionado === "masculino") {

        mensagem.textContent =
            "Nomes aleatórios masculinos estão disponíveis.";

    }

    else {

        mensagem.textContent =
            "Nomes aleatórios unissex estão disponíveis.";

    }

}


/* =====================================================
   NOMES FEMININOS
===================================================== */

const nomesFemininos = [

    "Lyra",
    "Elara",
    "Amélia",
    "Aurora",
    "Luna",
    "Morgana",
    "Selene",
    "Arwen",
    "Nayla",
    "Ayla",
    "Isolde",
    "Evelyn",
    "Maelis",
    "Seraphina",
    "Iris",
    "Helena",
    "Althea",
    "Freya",
    "Cassandra",
    "Elowen"

];


/* =====================================================
   NOMES MASCULINOS
===================================================== */

const nomesMasculinos = [

    "Kael",
    "Eron",
    "Arthur",
    "Leon",
    "Darian",
    "Cedric",
    "Ragnar",
    "Lucian",
    "Aldric",
    "Thorian",
    "Elias",
    "Gareth",
    "Orion",
    "Alaric",
    "Dorian",
    "Rowan",
    "Ezra",
    "Kaelen",
    "Draven",
    "Theo"

];


/* =====================================================
   NOMES UNISSEX
===================================================== */

const nomesUnissex = [

    "Ariel",
    "Alex",
    "Morgan",
    "Raven",
    "Sky",
    "Noa",
    "Eden",
    "Sage",
    "River",
    "Ash",
    "Robin",
    "Taylor",
    "Jordan",
    "Quinn",
    "Phoenix",
    "Sam",
    "Kai",
    "Ren",
    "Vale",
    "Sol"

];


/* =====================================================
   GERAR NOME ALEATÓRIO
===================================================== */

function gerarNomeAleatorio() {

    if (!generoSelecionado) {

        alert(
            "Primeiro escolha o gênero do personagem."
        );

        return;
    }


    let lista;


    if (generoSelecionado === "feminino") {

        lista = nomesFemininos;

    }

    else if (generoSelecionado === "masculino") {

        lista = nomesMasculinos;

    }

    else {

        lista = nomesUnissex;

    }


    const indice =
        Math.floor(
            Math.random() * lista.length
        );


    const nome =
        lista[indice];


    document.getElementById(
        "nomePersonagem"
    ).value = nome;

}


/* =====================================================
   ETAPA 2 → ETAPA 3
===================================================== */

function irParaEtapa3() {

    if (!generoSelecionado) {

        alert(
            "Escolha o gênero do personagem para continuar."
        );

        return;
    }


    const nome =
        document.getElementById(
            "nomePersonagem"
        ).value.trim();


    if (!nome) {

        alert(
            "Digite um nome para o personagem ou use a opção de nome aleatório."
        );

        return;
    }


    document.getElementById(
        "resumoNome"
    ).textContent = nome;


    document.getElementById(
        "resumoSistema"
    ).textContent = sistemaSelecionado;


    mudarEtapa(3);

}


/* =====================================================
   ETAPA 3 → ETAPA 2
===================================================== */

function voltarParaEtapa2() {

    mudarEtapa(2);

}


/* =====================================================
   MUDAR ETAPA
===================================================== */

function mudarEtapa(numero) {


    document
        .querySelectorAll(".etapa-conteudo")
        .forEach(etapa => {

            etapa.classList.remove("ativa");

        });


    document
        .getElementById(`etapa${numero}`)
        .classList.add("ativa");


    document
        .querySelectorAll(".etapa")
        .forEach((etapa, index) => {

            etapa.classList.remove("ativa");

            if (index + 1 <= numero) {

                etapa.classList.add("ativa");

            }

        });

}


/* =====================================================
   PRÓXIMA PARTE DA FICHA
===================================================== */

function finalizarEtapaInicial() {

    alert(
        "Essa será a próxima etapa da criação da ficha!"
    );

}