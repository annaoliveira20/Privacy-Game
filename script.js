const phases = [
    {
        name: "Fase 1 - LGPD e Proteção de Dados",
        questions: [
            { question: "1. A quem se aplica a LGPD?", answers: ["Apenas a organizações, públicas ou privadas, que oferecem serviços no Brasil.", "Somente a organizações que tratam dados pessoais sensíveis.", "A qualquer pessoa física ou jurídica que trate dados pessoais, independentemente do meio."], correct: 2, explanation: "A LGPD se aplica a qualquer pessoa ou organização que trate dados pessoais, independentemente da natureza da organização." },
            { question: "2. O que é considerado dado pessoal pela LGPD?", answers: ["Apenas informações que incluem nome, CPF ou dados bancários.", "Qualquer informação que identifique ou torne identificável uma pessoa, direta ou indiretamente.", "Somente dados biométricos e de saúde."], correct: 1, explanation: "Dado pessoal é qualquer informação que pode identificar uma pessoa, como nome, CPF, e endereço." },
            { question: "3. Qual a definição de 'tratamento de dados pessoais'?", answers: ["Procedimento de coleta e armazenamento de dados pessoais.", "Qualquer operação realizada com dados, como coleta, armazenamento, uso e eliminação.", "Compartilhamento entre diversos setores de uma organização e a análise de dados."], correct: 1, explanation: "Tratamento envolve todas as operações realizadas com os dados, desde a coleta até sua eliminação." },
            { question: "4. Em quais situações o tratamento de dados pessoais é permitido pela LGPD?", answers: ["Somente mediante o consentimento do titular.", "Consentimento, execução de contrato, cumprimento de obrigação legal, ou interesses legítimos, entre outros.", "Apenas em emergências ou por órgãos públicos."], correct: 1, explanation: "A LGPD permite o tratamento de dados em várias bases legais, além do consentimento, como obrigações legais ou contratos." },
            { question: "5. Quais são os principais direitos dos titulares de dados pessoais?", answers: ["Acesso, exclusão e correção de dados pessoais, mediante autorização da ANPD.", "Acesso, correção, exclusão, portabilidade e revogação de consentimento.", "O titular não possui direitos específicos, apenas as organizações que detêm os dados pessoais sob sua custódia."], correct: 1, explanation: "Os titulares têm direitos como acesso, correção, exclusão e portabilidade de seus dados pessoais." }
        ]
    },
    // Adicione as outras fases aqui
];

let currentPhase = 0;
let currentQuestionIndex = 0;
let score = 0;

const phaseScreen = document.getElementById('phase-screen');
const phaseTitle = document.getElementById('phase-title');
const gameArea = document.getElementById('game-area');
const feedback = document.getElementById('feedback');
const startPhaseBtn = document.getElementById('start-phase-btn');
const scoreDisplay = document.getElementById('score-display');
const certificateArea = document.getElementById('certificate-area');

function startPhase() {
    phaseScreen.style.display = 'none';
    currentQuestionIndex = 0;
    showQuestion();
}

function loadPhase() {
    phaseTitle.textContent = phases[currentPhase].name;
    phaseScreen.style.display = 'block';
    gameArea.innerHTML = '';
    feedback.textContent = '';
}

function showQuestion() {
    feedback.textContent = '';
    if (currentQuestionIndex < phases[currentPhase].questions.length) {
        const questionData = phases[currentPhase].questions[currentQuestionIndex];
        gameArea.innerHTML = `
            <div class="question">${questionData.question}</div>
            <div class="answers">
                ${questionData.answers.map((answer, index) =>
                    `<button onclick="checkAnswer(${index})">${answer}</button>`
                ).join('')}
            </div>
        `;
    } else {
        currentPhase++;
        if (currentPhase < phases.length) {
            loadPhase();
        } else {
            showFinalMessage();
        }
    }
}

function checkAnswer(selectedIndex) {
    const questionData = phases[currentPhase].questions[currentQuestionIndex];
    if (selectedIndex === questionData.correct) {
        feedback.textContent = 'Correto!';
        feedback.style.color = 'green';
        score += 10;
    } else {
        feedback.textContent = 'Errado!';
        feedback.style.color = 'red';
        showExplanation(questionData.explanation);
    }
    scoreDisplay.textContent = `Pontuação: ${score}`;
    currentQuestionIndex++;
    setTimeout(showQuestion, 3000);
}

function showExplanation(explanation) {
    const explanationDiv = document.createElement('div');
    explanationDiv.className = 'explanation';
    explanationDiv.textContent = explanation;
    gameArea.appendChild(explanationDiv);
}

function showFinalMessage() {
    gameArea.innerHTML = `<h2>Parabéns! Você completou o jogo com ${score} pontos e agora é um Guardião da Privacidade!</h2>`;
    certificateArea.innerHTML = `
        <div class="certificate">
            <h3>Certificado de Conclusão</h3>
            <p>Este certificado atesta que o(a) jogador(a) concluiu todas as fases do Privacy Guardian.</p>
            <img src="https://image.shutterstock.com/image-vector/golden-badge-ribbon-genuine-quality-260nw-1410251975.jpg" alt="Certificado" class="image">
        </div>
    `;
}

startPhaseBtn.addEventListener('click', startPhase);
loadPhase();
