/* =====================================================
   VARIÁVEIS
===================================================== */

let sistemaSelecionado = null;
let generoSelecionado = null;


/* =====================================================
   DADOS DA FICHA
===================================================== */

const ficha = {
    sistema: "",
    identidade: {
        nome: "",
        idade: "",
        genero: "",
        raca: "",
        classe: "",
        nivel: "",
        origem: "",
        aparencia: ""
    },

    atributos: {
        forca: "",
        destreza: "",
        constituicao: "",
        inteligencia: "",
        sabedoria: "",
        carisma: ""
    },

    recursos: {
        pv: "",
        mana: "",
        vigor: "",
        defesa: "",
        iniciativa: "",
        movimento: ""
    },

    pericias: {
        for: {},
        des: {},
        con: {},
        int: {},
        sab: {},
        car: {}
    },

    combate: {
        armaPrincipal: "",
        ataque: "",
        dano: "",
        armadura: "",
        resistencias: "",
        fraquezas: ""
    },

    habilidades: [],

    equipamentos: {
        armas: "",
        armadura: "",
        itens: "",
        pocoes: "",
        dinheiro: ""
    },

    personalidade: {
        qualidades: "",
        defeitos: "",
        medos: "",
        objetivos: "",
        gostos: "",
        desgostos: ""
    },

    historia: "",

    relacionamentos: {
        aliados: "",
        inimigos: "",
        familia: ""
    },

    anotacoes: ""
};


/* =====================================================
   ETAPA 1 → ETAPA 2
===================================================== */

function irParaEtapa2() {

    const sistema = document.querySelector(
        'input[name="sistema"]:checked'
    );

    if (!sistema) {

        alert("Escolha um sistema de RPG para continuar.");

        return;
    }

    sistemaSelecionado = sistema.value;

    ficha.sistema = sistemaSelecionado;

    const sistemaEscolhido =
        document.getElementById("sistemaEscolhido");

    if (sistemaEscolhido) {
        sistemaEscolhido.textContent =
            sistemaSelecionado;
    }

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

    ficha.identidade.genero =
        generoSelecionado;

    const mensagem =
        document.getElementById("mensagemNome");

    if (!mensagem) {
        return;
    }

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

    const campo =
        document.getElementById(
            "nomePersonagem"
        );

    if (campo) {

        campo.value = nome;

    }

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

    const campoNome =
        document.getElementById(
            "nomePersonagem"
        );

    if (!campoNome) {
        mudarEtapa(3);
        return;
    }

    const nome =
        campoNome.value.trim();

    if (!nome) {

        alert(
            "Digite um nome para o personagem ou use a opção de nome aleatório."
        );

        return;
    }

    ficha.identidade.nome = nome;

    const resumoNome =
        document.getElementById("resumoNome");

    if (resumoNome) {
        resumoNome.textContent = nome;
    }

    const resumoSistema =
        document.getElementById("resumoSistema");

    if (resumoSistema) {
        resumoSistema.textContent =
            sistemaSelecionado;
    }

    mudarEtapa(3);

}


/* =====================================================
   ETAPA 3 → ETAPA 2
===================================================== */

function voltarParaEtapa2() {

    mudarEtapa(2);

}


/* =====================================================
   ETAPA 3 → ETAPA 4
   IDENTIDADE
===================================================== */

function irParaEtapa4() {

    salvarIdentidade();

    mudarEtapa(4);

}


/* =====================================================
   ETAPA 4 → ETAPA 3
===================================================== */

function voltarParaEtapa3() {

    mudarEtapa(3);

}


/* =====================================================
   SALVAR IDENTIDADE
===================================================== */

function salvarIdentidade() {

    const idade =
        document.getElementById("idadePersonagem");

    const raca =
        document.getElementById("racaPersonagem");

    const classe =
        document.getElementById("classePersonagem");

    const nivel =
        document.getElementById("nivelPersonagem");

    const origem =
        document.getElementById("origemPersonagem");

    const aparencia =
        document.getElementById("aparenciaPersonagem");


    if (idade) {
        ficha.identidade.idade =
            idade.value.trim();
    }

    if (raca) {
        ficha.identidade.raca =
            raca.value.trim();
    }

    if (classe) {
        ficha.identidade.classe =
            classe.value.trim();
    }

    if (nivel) {
        ficha.identidade.nivel =
            nivel.value.trim();
    }

    if (origem) {
        ficha.identidade.origem =
            origem.value.trim();
    }

    if (aparencia) {
        ficha.identidade.aparencia =
            aparencia.value.trim();
    }

}


/* =====================================================
   ETAPA 4 → ETAPA 5
   ATRIBUTOS
===================================================== */

function irParaEtapa5() {

    salvarAtributos();

    mudarEtapa(5);

}


/* =====================================================
   ETAPA 5 → ETAPA 4
===================================================== */

function voltarParaEtapa4() {

    mudarEtapa(4);

}


/* =====================================================
   SALVAR ATRIBUTOS
===================================================== */

function salvarAtributos() {

    const campos = {

        forca: "forca",
        destreza: "destreza",
        constituicao: "constituicao",
        inteligencia: "inteligencia",
        sabedoria: "sabedoria",
        carisma: "carisma"

    };

    Object.keys(campos).forEach(chave => {

        const elemento =
            document.getElementById(
                campos[chave]
            );

        if (elemento) {

            ficha.atributos[chave] =
                elemento.value;

        }

    });

}


/* =====================================================
   ETAPA 5 → ETAPA 6
   RECURSOS
===================================================== */

function irParaEtapa6() {

    salvarRecursos();

    mudarEtapa(6);

}


/* =====================================================
   ETAPA 6 → ETAPA 5
===================================================== */

function voltarParaEtapa5() {

    mudarEtapa(5);

}


/* =====================================================
   SALVAR RECURSOS
===================================================== */

function salvarRecursos() {

    const campos = {

        pv: "pv",
        mana: "mana",
        vigor: "vigor",
        defesa: "defesa",
        iniciativa: "iniciativa",
        movimento: "movimento"

    };

    Object.keys(campos).forEach(chave => {

        const elemento =
            document.getElementById(
                campos[chave]
            );

        if (elemento) {

            ficha.recursos[chave] =
                elemento.value;

        }

    });

}


/* =====================================================
   ETAPA 6 → ETAPA 7
   PERÍCIAS
===================================================== */

function irParaEtapa7() {

    salvarPericias();

    mudarEtapa(7);

}


/* =====================================================
   ETAPA 7 → ETAPA 6
===================================================== */

function voltarParaEtapa6() {

    mudarEtapa(6);

}


/* =====================================================
   SALVAR PERÍCIAS
===================================================== */

function salvarPericias() {

    const camposPericias =
        document.querySelectorAll(
            ".pericia-input"
        );

    camposPericias.forEach(campo => {

        const pericia =
            campo.dataset.pericia;

        const atributo =
            campo.dataset.atributo;

        if (!pericia || !atributo) {
            return;
        }

        if (!ficha.pericias[atributo]) {

            ficha.pericias[atributo] = {};

        }

        ficha.pericias[atributo][pericia] =
            campo.value;

    });

}


/* =====================================================
   ETAPA 7 → ETAPA 8
   COMBATE
===================================================== */

function irParaEtapa8() {

    salvarCombate();

    mudarEtapa(8);

}


/* =====================================================
   ETAPA 8 → ETAPA 7
===================================================== */

function voltarParaEtapa7() {

    mudarEtapa(7);

}


/* =====================================================
   SALVAR COMBATE
===================================================== */

function salvarCombate() {

    const campos = {

        armaPrincipal: "armaPrincipal",
        ataque: "ataque",
        dano: "dano",
        armadura: "armadura",
        resistencias: "resistencias",
        fraquezas: "fraquezas"

    };

    Object.keys(campos).forEach(chave => {

        const elemento =
            document.getElementById(
                campos[chave]
            );

        if (elemento) {

            ficha.combate[chave] =
                elemento.value.trim();

        }

    });

}


/* =====================================================
   ETAPA 8 → ETAPA 9
   HABILIDADES / PODERES
===================================================== */

function irParaEtapa9() {

    salvarHabilidades();

    mudarEtapa(9);

}


/* =====================================================
   ETAPA 9 → ETAPA 8
===================================================== */

function voltarParaEtapa8() {

    mudarEtapa(8);

}


/* =====================================================
   SALVAR HABILIDADES
===================================================== */

function salvarHabilidades() {

    ficha.habilidades = [];

    const habilidades =
        document.querySelectorAll(
            ".habilidade-card"
        );

    habilidades.forEach((card, index) => {

        const habilidade = {

            nome: obterValor(
                card,
                ".habilidade-nome"
            ),

            descricao: obterValor(
                card,
                ".habilidade-descricao"
            ),

            tipo: obterValor(
                card,
                ".habilidade-tipo"
            ),

            custo: obterValor(
                card,
                ".habilidade-custo"
            ),

            alcance: obterValor(
                card,
                ".habilidade-alcance"
            ),

            duracao: obterValor(
                card,
                ".habilidade-duracao"
            ),

            recarga: obterValor(
                card,
                ".habilidade-recarga"
            ),

            danoEfeito: obterValor(
                card,
                ".habilidade-dano"
            ),

            condicoes: obterValor(
                card,
                ".habilidade-condicoes"
            )

        };

        ficha.habilidades.push(
            habilidade
        );

    });

}


/* =====================================================
   ETAPA 9 → ETAPA 10
   EQUIPAMENTOS
===================================================== */

function irParaEtapa10() {

    salvarEquipamentos();

    mudarEtapa(10);

}


/* =====================================================
   ETAPA 10 → ETAPA 9
===================================================== */

function voltarParaEtapa9() {

    mudarEtapa(9);

}


/* =====================================================
   SALVAR EQUIPAMENTOS
===================================================== */

function salvarEquipamentos() {

    const campos = {

        armas: "armas",
        armadura: "armaduraEquipamento",
        itens: "itens",
        pocoes: "pocoes",
        dinheiro: "dinheiro"

    };

    Object.keys(campos).forEach(chave => {

        const elemento =
            document.getElementById(
                campos[chave]
            );

        if (elemento) {

            ficha.equipamentos[chave] =
                elemento.value.trim();

        }

    });

}


/* =====================================================
   ETAPA 10 → ETAPA 11
   PERSONALIDADE
===================================================== */

function irParaEtapa11() {

    salvarPersonalidade();

    mudarEtapa(11);

}


/* =====================================================
   ETAPA 11 → ETAPA 10
   HISTÓRIA
===================================================== */

function voltarParaEtapa10() {

    mudarEtapa(10);

}


/* =====================================================
   SALVAR PERSONALIDADE
===================================================== */

function salvarPersonalidade() {

    const campos = {

        qualidades: "qualidades",
        defeitos: "defeitos",
        medos: "medos",
        objetivos: "objetivos",
        gostos: "gostos",
        desgostos: "desgostos"

    };

    Object.keys(campos).forEach(chave => {

        const elemento =
            document.getElementById(
                campos[chave]
            );

        if (elemento) {

            ficha.personalidade[chave] =
                elemento.value.trim();

        }

    });

}


/* =====================================================
   HISTÓRIA
===================================================== */

function salvarHistoria() {

    const campo =
        document.getElementById(
            "historiaPersonagem"
        );

    if (campo) {

        ficha.historia =
            campo.value.trim();

    }

}


/* =====================================================
   RELACIONAMENTOS
===================================================== */

function salvarRelacionamentos() {

    const campos = {

        aliados: "aliados",
        inimigos: "inimigos",
        familia: "familia"

    };

    Object.keys(campos).forEach(chave => {

        const elemento =
            document.getElementById(
                campos[chave]
            );

        if (elemento) {

            ficha.relacionamentos[chave] =
                elemento.value.trim();

        }

    });

}


/* =====================================================
   ANOTAÇÕES
===================================================== */

function salvarAnotacoes() {

    const campo =
        document.getElementById(
            "anotacoesPersonagem"
        );

    if (campo) {

        ficha.anotacoes =
            campo.value.trim();

    }

}


/* =====================================================
   FUNÇÃO AUXILIAR
===================================================== */

function obterValor(elementoPai, seletor) {

    const elemento =
        elementoPai.querySelector(seletor);

    if (!elemento) {
        return "";
    }

    return elemento.value.trim();

}


/* =====================================================
   MUDAR ETAPA
===================================================== */

function mudarEtapa(numero) {

    const etapas =
        document.querySelectorAll(
            ".etapa-conteudo"
        );

    etapas.forEach(etapa => {

        etapa.classList.remove(
            "ativa"
        );

    });


    const etapaAtual =
        document.getElementById(
            `etapa${numero}`
        );

    if (etapaAtual) {

        etapaAtual.classList.add(
            "ativa"
        );

    }


    /* Atualiza indicadores */

    const indicadores =
        document.querySelectorAll(
            ".etapa"
        );

    indicadores.forEach(
        (etapa, index) => {

            etapa.classList.remove(
                "ativa"
            );

            etapa.classList.remove(
                "concluida"
            );

            if (index + 1 < numero) {

                etapa.classList.add(
                    "concluida"
                );

            }

            else if (index + 1 === numero) {

                etapa.classList.add(
                    "ativa"
                );

            }

        }
    );


    /* Rola para o topo da ficha */

    const container =
        document.querySelector(
            ".ficha-container"
        );

    if (container) {

        container.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }

}


/* =====================================================
   ETAPA 11 → FINALIZAR FICHA
===================================================== */

function finalizarFicha() {

    /*
       As etapas 8, 9, 10 e 11 são opcionais.
       Portanto, não fazemos nenhuma validação
       obrigatória nesses campos.
    */

    salvarPersonalidade();
    salvarHistoria();
    salvarRelacionamentos();
    salvarAnotacoes();

    console.log(
        "Ficha criada:",
        ficha
    );


    /*
       Por enquanto apenas exibimos uma mensagem.

       Posteriormente podemos substituir esta parte
       pelo salvamento no Firestore.
    */

    alert(
        "Ficha criada com sucesso! Sua aventura está pronta para começar. 🎲"
    );

}


/* =====================================================
   COMPATIBILIDADE COM O HTML ANTIGO
===================================================== */

function finalizarEtapaInicial() {

    /*
       Caso algum botão antigo ainda esteja chamando
       esta função, ele continuará funcionando.
    */

    irParaEtapa4();

}