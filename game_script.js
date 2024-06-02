let cards = {
    1 : {
        1: { text: "*População:* Se há 100 alunos em uma escola, a população é 100", matched: false, pairId: 31 },
        31: { text: "*A população é 100", matched: false, pairId: 1 },

        2: { text: "*Amostra:* Se selecionarmos aleatoriamente 20 alunos da escola para uma pesquisa, a amostra é 20", matched: false, pairId: 32 },
        32: { text: "*A amostra é 20", matched: false, pairId: 2 },

        3: { text: "*Variável:* Se estamos medindo a altura dos alunos, a variável é a altura", matched: false, pairId: 33 },
        33: { text: "*A variável é a altura", matched: false, pairId: 3 },

        4: { text: "*Dados:* Se registramos as alturas dos 20 alunos selecionados: 160 cm, 165 cm, 170 cm, ..., os dados seriam as alturas registradas", matched: false, pairId: 34 },
        34: { text: "*Os dados seriam as alturas registradas", matched: false, pairId: 4 },

        5: { text: "*Tipo de Dados:* Se classificamos os alunos em categorias de gênero (masculino/feminino), é um tipo de dado qualitativo", matched: false, pairId: 35 },
        35: { text: "*É um tipo de dado qualitativo", matched: false, pairId: 5 },

        6: { text: "*Frequência:* Se contamos quantos alunos têm uma altura de 170 cm na amostra e são 3, a frequência é 3", matched: false, pairId: 36 },
        36: { text: "*A frequência é 3", matched: false, pairId: 6 },
    },
    2 : {
        7: { text: "*Distribuição de Frequência:* Se apresentamos uma tabela que mostra a frequência das diferentes alturas dos alunos na amostra", matched: false, pairId: 37 },
        37: { text: "*Apresentamos uma tabela que mostra a frequência das diferentes alturas dos alunos na amostra", matched: false, pairId: 7 },

        8: { text: "*Média:* Se calculamos a média das alturas dos alunos na amostra, por exemplo: (160 + 165 + 170 + ...) / 20", matched: false, pairId: 38 },
        38: { text: "*A média das alturas dos alunos na amostra é (160 + 165 + 170 + ...) / 20", matched: false, pairId: 8 },

        9: { text: "*Mediana:* Se organizamos as alturas em ordem crescente e selecionamos a altura do meio, essa é a mediana", matched: false, pairId: 39 },
        39: { text: "*A mediana é a altura do meio", matched: false, pairId: 9 },

        10: { text: "*Moda:* Se identificamos a altura que ocorre com mais frequência na amostra, essa é a moda", matched: false, pairId: 40 },
        40: { text: "*A moda é a altura que ocorre com mais frequência na amostra", matched: false, pairId: 10 },

        11: { text: "*Variância:* Se calculamos a variância das alturas na amostra para ver o quão dispersos estão os dados", matched: false, pairId: 41 },
        41: { text: "*A variância das alturas na amostra mostra o quão dispersos estão os dados", matched: false, pairId: 11 },

        12: { text: "*Desvio Padrão:* Se calculamos o desvio padrão das alturas na amostra para ter uma medida da dispersão dos dados em torno da média", matched: false, pairId: 42 },
        42: { text: "*O desvio padrão das alturas na amostra nos dá uma medida da dispersão dos dados em torno da média", matched: false, pairId: 12 },

    },
    3 : {
        13: { text: "*Percentil:* Se determinamos o percentil 75 das alturas na amostra para saber o valor abaixo do qual 75% dos dados estão", matched: false, pairId: 43 },
        43: { text: "*O percentil 75 das alturas na amostra nos dá o valor abaixo do qual 75% dos dados estão", matched: false, pairId: 13 },

        14: { text: "*Quartil:* Se calculamos os quartis das alturas na amostra para dividir os dados em quatro partes iguais", matched: false, pairId: 44 },
        44: { text: "*Os quartis das alturas na amostra dividem os dados em quatro partes iguais", matched: false, pairId: 14 },

        15: { text: "*Intervalo Interquartil (IQR):* Se subtrairmos o primeiro quartil do terceiro quartil para encontrar o IQR", matched: false, pairId: 45 },
        45: { text: "*O IQR é a diferença entre o primeiro e o terceiro quartil", matched: false, pairId: 15 },

        16: { text: "*Histograma:* Se plotarmos um gráfico de barras que mostra a frequência das alturas dos alunos na amostra", matched: false, pairId: 46 },
        46: { text: "*Um histograma mostra a frequência das alturas dos alunos na amostra", matched: false, pairId: 16 },

        17: { text: "*Gráfico de Setores (Pizza):* Se criarmos um gráfico circular que mostra a proporção de alunos de cada gênero na amostra", matched: false, pairId: 47 },
        47: { text: "*Um gráfico de setores mostra a proporção de alunos de cada gênero na amostra", matched: false, pairId: 17 },

        18: { text: "*Gráfico de Barras:* Se fizermos um gráfico de barras que mostra a frequência de alunos em diferentes faixas de altura", matched: false, pairId: 48 },
        48: { text: "*Um gráfico de barras mostra a frequência de alunos em diferentes faixas de altura", matched: false, pairId: 18 },
    },
    4 : {
        19: { text: "*Box Plot (Diagrama de Caixa):* Se desenharmos um gráfico que mostra os quartis e os valores atípicos das alturas dos alunos na amostra", matched: false, pairId: 49 },
        49: { text: "*Um box plot mostra os quartis e os valores atípicos das alturas dos alunos na amostra", matched: false, pairId: 19 },

        20: { text: "*Diagrama de Dispersão:* Se plotarmos um gráfico que mostra a relação entre as alturas e os pesos dos alunos na amostra", matched: false, pairId: 50 },
        50: { text: "*Um diagrama de dispersão mostra a relação entre as alturas e os pesos dos alunos na amostra", matched: false, pairId: 20 },

        21: { text: "*Correlação:* Se calcularmos o coeficiente de correlação entre as alturas e os pesos dos alunos na amostra", matched: false, pairId: 51 },
        51: { text: "*O coeficiente de correlação indica a relação entre as alturas e os pesos dos alunos na amostra", matched: false, pairId: 21 },

        22: { text: "*Coeficiente de Correlação:* Se obtivermos um valor de 0.8, indicando uma forte correlação positiva entre as alturas e os pesos dos alunos", matched: false, pairId: 52 },
        52: { text: "*Um valor de 0.8 indica uma forte correlação positiva entre as alturas e os pesos dos alunos na amostra", matched: false, pairId: 22 },

        23: { text: "*Regressão Linear:* Se ajustarmos uma linha reta aos dados de altura e peso dos alunos para prever o peso com base na altura", matched: false, pairId: 53 },
        53: { text: "*Uma regressão linear ajusta uma linha reta aos dados de altura e peso dos alunos para prever o peso com base na altura", matched: false, pairId: 23 },

        24: { text: "*Outlier:* Se identificarmos um aluno com uma altura muito maior do que o resto na amostra", matched: false, pairId: 54 },
        54: { text: "*Um outlier é um aluno com uma altura muito maior do que o resto na amostra", matched: false, pairId: 24 },
    },
    5 : {
        25: { text: "*Simetria:* Se os dados de altura dos alunos na amostra estiverem distribuídos uniformemente em torno da média", matched: false, pairId: 55 },
        55: { text: "*A simetria ocorre quando os dados de altura dos alunos na amostra estão distribuídos uniformemente em torno da média", matched: false, pairId: 25 },

        26: { text: "*Assimetria:* Se os dados de altura dos alunos na amostra estiverem mais concentrados em um lado da média", matched: false, pairId: 56 },
        56: { text: "*A assimetria ocorre quando os dados de altura dos alunos na amostra estão mais concentrados em um lado da média", matched: false, pairId: 26 },

        27: { text: "*Curtose:* Se a distribuição das alturas dos alunos na amostra for mais 'pico' ou mais 'achatada' do que uma distribuição normal", matched: false, pairId: 57 },
        57: { text: "*A curtose indica se a distribuição das alturas dos alunos na amostra é mais 'pico' ou mais 'achatada' do que uma distribuição normal", matched: false, pairId: 27 },

        28: { text: "*Desvio Absoluto Médio:* Se calcularmos a média das distâncias entre cada altura e a média das alturas na amostra", matched: false, pairId: 58 },
        58: { text: "*O desvio absoluto médio é a média das distâncias entre cada altura e a média das alturas na amostra", matched: false, pairId: 28 },

        29: { text: "*Mediana Absoluta da Deviação:* Se calcularmos a mediana das distâncias entre cada altura e a mediana das alturas na amostra", matched: false, pairId: 59 },
        59: { text: "*A mediana absoluta da deviação é a mediana das distâncias entre cada altura e a mediana das alturas na amostra", matched: false, pairId: 29 },

        30: { text: "*Z-Score:* Se calcularmos o Z-score da altura de um aluno para ver quantos desvios padrão ele está acima ou abaixo da média", matched: false, pairId: 60 },
        60: { text: "*O Z-score da altura de um aluno indica quantos desvios padrão ele está acima ou abaixo da média", matched: false, pairId: 30 }
    }
};



let flippedCards = [];
let totalMatches = 0;
let faseAtual = 1;

function createGrid() {
    const gridContainer = document.getElementById("grid-container");

    for (let id in cards[faseAtual]) {
        const card = document.createElement("div");
        card.classList.add("card");
        card.classList.add("col-3");
        card.dataset.id = id;
        card.textContent = "?";
        card.addEventListener("click", () => {
            const currentCard = cards[faseAtual][id];
            if (!currentCard.matched && flippedCards.length < 2) {

                card.classList.add("flipped");
                card.textContent = "!";
                flippedCards.push({ id, text: currentCard.text, pairId: currentCard.pairId });

                document.getElementById("title-"+flippedCards.length).textContent = currentCard.text;

                if (flippedCards.length === 2) {
                    setTimeout(checkMatch, 500);
                }
            }
        });
        gridContainer.appendChild(card);
    }
}

function checkMatch() {
    const [firstCard, secondCard] = flippedCards;
    
    if (firstCard.pairId + "" === secondCard.id + "" && secondCard.pairId + "" === firstCard.id + "") {
        flippedCards.forEach(({ id }) => {
            const cardElement = document.querySelector(`.card[data-id="${id}"]`);
            cardElement.classList.add("matched");
            cards[faseAtual][id].matched = true;
        });
        totalMatches++;
        document.getElementById("score").textContent = `Total de pares acertados: ${totalMatches}`;

        if(Object.values(cards[faseAtual]).every(el => el.matched)){
            faseAtual += 1
            document.getElementById("fase").textContent = `Fase: ${faseAtual}`;
            console.log("passou de fase")
            const gridContainer = document.getElementById("grid-container")
            gridContainer.innerHTML = ""

            createGrid()
        }

    } else {
        flippedCards.forEach(({ id }) => {
            const cardElement = document.querySelector(`.card[data-id="${id}"]`);
            cardElement.classList.remove("flipped");
            cardElement.textContent = "?";
        });
    }
    document.getElementById("title-1").textContent = "";
    document.getElementById("title-2").textContent = "";
    flippedCards = [];
}

window.onload = createGrid;