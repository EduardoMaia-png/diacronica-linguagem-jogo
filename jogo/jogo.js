// Definindo as perguntas e respostas
const questions = [
    { question: "Qual desses termos é típico da Região Sul do Brasil?", options: ["Bah", "Oxente", "Tchê"], answer: "Tchê" },
    { question: "Em qual região do Brasil se usa o termo 'Oxente'?", options: ["Norte", "Nordeste", "Centro-Oeste"], answer: "Nordeste" },
    { question: "O termo 'Trem bão' é utilizado em qual região do país?", options: ["Sudeste", "Sul", "Norte"], answer: "Sudeste" },
    { question: "Na Região Norte, qual termo é comum para se referir a uma pessoa?", options: ["Égua", "Pia", "Tchê"], answer: "Égua" },
    { question: "O que significa 'Pia' em termos regionais brasileiros?", options: ["Sul", "Norte", "Nordeste"], answer: "Sul" },
    { question: "Qual é a origem do termo 'Bah'?", options: ["Sul", "Nordeste", "Sudeste"], answer: "Sul" },
    { question: "Qual é o significado de 'Vixe' no Nordeste brasileiro?", options: ["Susto", "Alegria", "Tristeza"], answer: "Susto" },
    { question: "O termo 'Bagual' é comum em qual região do Brasil?", options: ["Sul", "Nordeste", "Centro-Oeste"], answer: "Sul" },
    { question: "Em qual região se usa 'Jeca' para se referir a alguém?", options: ["Sudeste", "Norte", "Nordeste"], answer: "Sudeste" },
    { question: "O que significa 'Arretado' no Nordeste?", options: ["Assustado", "Corajoso", "Esperto"], answer: "Esperto" }
];

let currentQuestionIndex = 0;
let score = 0;

// Início do jogo
function startGame() {
    document.querySelector('.start-screen').classList.add('hidden');
    document.querySelector('.game-screen').classList.remove('hidden');
    showQuestion();
}

// Mostra a próxima pergunta
function showQuestion() {
    if (currentQuestionIndex < questions.length) {
        const question = questions[currentQuestionIndex];
        document.getElementById('question').innerText = question.question;
        const optionsList = document.getElementById('options');
        optionsList.innerHTML = '';
        question.options.forEach(option => {
            const li = document.createElement('li');
            li.innerText = option;
            li.onclick = () => checkAnswer(option);
            optionsList.appendChild(li);
        });
    } else {
        endGame();
    }
}

// Verifica a resposta selecionada
function checkAnswer(selectedOption) {
    const question = questions[currentQuestionIndex];
    if (selectedOption === question.answer) {
        score++;
        document.getElementById('result').innerText = 'Resposta correta!';
    } else {
        document.getElementById('result').innerText = `Resposta incorreta. A resposta correta era: ${question.answer}`;
    }
    currentQuestionIndex++;
    setTimeout(showQuestion, 1500);
}

// Fim do jogo
function endGame() {
    document.querySelector('.game-screen').classList.add('hidden');
    document.querySelector('.game-over-screen').classList.remove('hidden');
    document.getElementById('finalScore').innerText = `Parabéns! Sua pontuação foi ${score}.`;
}

// Reinicia o jogo
function restartGame() {
    currentQuestionIndex = 0;
    score = 0;
    document.querySelector('.game-over-screen').classList.add('hidden');
    document.querySelector('.start-screen').classList.remove('hidden');
}
