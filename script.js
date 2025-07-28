const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
   const perguntas = [
    {
        enunciado: "Na escola, uma nova pessoa chega à turma. Ela tem hábitos e opiniões bem diferentes das suas. Qual sua reação inicial?",
        alternativas: [
            {
                texto: "Prefere manter distância até conhecê-la melhor.",
                afirmacao: "Entendeu que precisa de tempo para confiar nas pessoas, mas está aberto ao diálogo."
            },
            {
                texto: "Se aproxima com curiosidade e vontade de entender o ponto de vista dela.",
                afirmacao: "Valoriza as diferenças e acredita que pode aprender com a diversidade."
            }
        ]
    },
    {
        enunciado: "Você e seu melhor amigo(a) discordam fortemente sobre algo importante. O que você faz?",
        alternativas: [
            {
                texto: "Espera o tempo acalmar os ânimos antes de tentar conversar.",
                afirmacao: "Percebeu que o silêncio pode ser uma forma de cuidado, desde que não vire distância permanente."
            },
            {
                texto: "Busca conversar no mesmo dia, mesmo que a conversa seja difícil.",
                afirmacao: "Aprendeu que enfrentar o desconforto pode fortalecer as relações."
            }
        ]
    },
    {
        enunciado: "Você percebe que um colega está passando por um momento difícil, mas ele não comentou nada com ninguém. Qual atitude toma?",
        alternativas: [
            {
                texto: "Respeita o espaço dele, mas demonstra que está disponível.",
                afirmacao: "Aprendeu que ouvir e estar presente muitas vezes vale mais do que conselhos prontos."
            },
            {
                texto: "Chama para conversar e tenta oferecer apoio direto.",
                afirmacao: "Entendeu que tomar a iniciativa pode ser essencial para alguém que tem dificuldade de pedir ajuda."
            }
        ]
    },
    {
        enunciado: "Alguns colegas tentam te convencer a ser representante da turma, mesmo que você não queira. O que você faz?",
        alternativas: [
            {
                texto: "Aceita por pressão, mesmo não se sentindo confortável.",
                afirmacao: "Percebeu que precisa trabalhar melhor seus limites e aprender a dizer 'não'."
            },
            {
                texto: "Explica com respeito que não se sente preparado para a função.",
                afirmacao: "Entendeu que se posicionar com clareza é uma forma de cuidar de si e dos outros."
            }
        ]
    },
    {
        enunciado: "Após um erro ou falha pessoal, como você costuma reagir?",
        alternativas: [
            {
                texto: "Fica se cobrando e repensando tudo que fez errado.",
                afirmacao: "Percebeu que está aprendendo a tratar a si mesmo com mais compaixão."
            },
            {
                texto: "Reconhece o erro, aprende com ele e segue em frente.",
                afirmacao: "Conseguiu transformar falhas em aprendizado sem se definir por elas."
            }
        ]
    }
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
