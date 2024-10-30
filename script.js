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
    {
        name: "Fase 2 - Cibersegurança e Segurança da Informação",
        questions: [
            { question: "6. Quais são exemplos de controles robustos de segurança para proteger dados pessoais?", answers: ["Criptografia de dados sensíveis é suficiente.", "Autenticação forte, controle de acesso e testes de invasão regulares.", "Antivírus e firewall cobrem as principais necessidades de segurança."], correct: 1, explanation: "A autenticação forte, controle de acesso e testes de invasão são essenciais para garantir a segurança dos dados pessoais." },
            { question: "7. Como deve ser realizada a gestão de incidentes de segurança?", answers: ["Apenas incidentes graves devem ser relatados à equipe de segurança.", "Todos os incidentes devem ser reportados imediatamente, seguindo protocolos de resposta rápida.", "Pequenos incidentes podem ser resolvidos sem notificação."], correct: 1, explanation: "Todos os incidentes, independentemente da gravidade, devem ser reportados para garantir a resposta adequada." },
            { question: "8. Qual a principal razão para o uso de VPN ao acessar dados remotamente?", answers: ["VPN garante acesso estável à rede corporativa.", "VPN protege a comunicação de dados em redes inseguras, prevenindo acessos não autorizados.", "VPN é necessária apenas para dados financeiros e sensíveis."], correct: 1, explanation: "A VPN protege a comunicação de dados contra acessos não autorizados, especialmente em redes inseguras." },
            { question: "9. O que deve ser feito ao identificar um vazamento de dados?", answers: ["Tentar resolver o problema antes de reportar.", "Reportar imediatamente à equipe de segurança e ao DPO para ações corretivas.", "Ignorar se os dados vazados não forem críticos."], correct: 1, explanation: "É essencial reportar imediatamente qualquer vazamento para garantir a adoção das medidas corretivas adequadas." },
            { question: "10. Como garantir o uso seguro de dispositivos pessoais (BYOD) no trabalho?", answers: ["Manter antivírus atualizado no dispositivo pessoal.", "Usar autenticação multifator e criptografia, além de controlar o acesso aos sistemas corporativos.", "Evitar baixar arquivos confidenciais no dispositivo pessoal."], correct: 1, explanation: "O uso seguro de BYOD envolve medidas como autenticação multifator, criptografia e controle de acesso." }
        ]
    },
    {
        name: "Fase 3 - Conscientização Geral em Segurança e Privacidade",
        questions: [
            { question: "11. Qual a responsabilidade individual de cada funcionário na proteção de dados pessoais?", answers: ["Apenas o departamento de TI é responsável pela proteção de dados.", "Todos os funcionários devem seguir as políticas da empresa e adotar boas práticas de segurança.", "A responsabilidade é do gestor da área, que decide sobre as ações de segurança."], correct: 1, explanation: "Todos os funcionários têm a responsabilidade de seguir as políticas da empresa e adotar boas práticas de segurança." },
            { question: "12. Qual a importância de treinamentos regulares sobre privacidade e segurança da informação?", answers: ["Os treinamentos são importantes obrigatoriamente para exclusivamente os funcionários que lidam com dados sensíveis.", "Treinamentos mantêm todos os funcionários atualizados sobre ameaças e melhores práticas.", "Treinamentos são necessários apenas em momentos críticos, como após incidentes e vazamento de dados."], correct: 1, explanation: "Treinamentos contínuos são fundamentais para manter os funcionários informados sobre ameaças e práticas de segurança." },
            { question: "13. Como deve ser feito o compartilhamento de informações contendo dados pessoais?", answers: ["Compartilhar dados apenas dentro do mesmo departamento.", "Utilizar plataformas seguras com controle de acesso e criptografia.", "Compartilhar livremente entre departamentos desde que a finalidade seja legítima."], correct: 1, explanation: "O compartilhamento de dados pessoais deve ser feito apenas em plataformas seguras e com controle de acesso." },
            { question: "14. Como a gestão de projetos de segurança da informação contribui para a proteção de dados pessoais?", answers: ["Somente ao final dos projetos, ao avaliar os riscos.", "Integra medidas de segurança desde o início, reduzindo riscos ao longo de todo o ciclo do projeto.", "A relação entre gestão de projetos e segurança de dados é limitada."], correct: 1, explanation: "A integração de medidas de segurança desde o início do projeto ajuda a reduzir os riscos de segurança ao longo de todo o ciclo." },
            { question: "15. Como os resultados das medidas de segurança e privacidade podem ser avaliados?", answers: ["Através de relatórios informais e feedback dos funcionários.", "Através de auditorias, relatórios de incidentes e métricas de conformidade contínuas.", "Não é necessário avaliar constantemente; apenas em caso de incidentes."], correct: 1, explanation: "Auditorias e métricas contínuas são essenciais para avaliar a eficácia das medidas de segurança e privacidade." }
        ]
    }
];

let currentPhase = 0;
let currentQuestionIndex = 0;
let score = 0;
let responses = [];

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

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function showQuestion() {
    feedback.textContent = '';
    if (currentQuestionIndex < phases[currentPhase].questions.length) {
        const questionData = phases[currentPhase].questions[currentQuestionIndex];
        
        // Cria um array de índices (0, 1, 2...) para as respostas e embaralha
        const answerIndexes = shuffleArray([0, 1, 2]);

        gameArea.innerHTML = `
            <div class="question">${questionData.question}</div>
            <div class="answers">
                ${answerIndexes.map((index) =>
                    `<button onclick="checkAnswer(${index})">${questionData.answers[index]}</button>`
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
    const isCorrect = selectedIndex === questionData.correct;
    const answerButtons = document.querySelectorAll(".answers button");
    answerButtons.forEach(button => button.disabled = true);
    
    // Adiciona a resposta ao array `responses`
    responses.push({
        question: questionData.question,
        correct: isCorrect
    });

    if (isCorrect) {
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

function registerPlayer(playerName, score, responses) {
    const playerData = {
        name: playerName,
        score: score,
        gotCertificate: score >= 100,
        date: new Date(),
        responses: responses,
    };

console.log(playerData);

    fetch('http://localhost:3000/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(playerData)
    })
    .then(response => response.json())
    .then(data => console.log('Sucesso:', data))
    .catch(error => console.error('Erro:', error));
}

function showFinalMessage() {
    const playerName = prompt("Parabéns! Qual é o seu nome?");
    registerPlayer(playerName, score); // Enviar a pontuação e o nome para o back-end

    // Verificar a pontuação do jogador
    if (score >= 100) {
        // Jogador atingiu 100 pontos ou mais
        gameArea.innerHTML = `<h2>Parabéns, ${playerName}! Você completou o jogo com ${score} pontos e agora é um Mestre da Privacidade!</h2>`;
        certificateArea.innerHTML = `
            <div class= "certificate">
                <h3>Certificado de Conclusão</h3>
                <p>Este certificado atesta que o(a) jogador(a) concluiu todas as fases do Privacy Game.</p>
                <img src= "https://i.imgur.com/TiWAPDg.png" alt="Certificado" class="image">
            </div>
        `;
    } else if (score >= 75) {
        // Jogador fez entre 75 e 99 pontos
        gameArea.innerHTML = `<h2>Parabéns, ${playerName}! Você completou o jogo com ${score} pontos, mas ainda não é um Mestre... Continue estudando, padawan!</h2>`;
        certificateArea.innerHTML = ''; // Não exibir o certificado
    } else {
        // Jogador fez menos de 75 pontos
        gameArea.innerHTML = `<h2>Ouch... Agora a privacidade está em perigo! Você completou o jogo com ${score} pontos. Conhecimento lhe falta, padawan!</h2>`;
        certificateArea.innerHTML = ''; // Não exibir o certificado
    }
}


startPhaseBtn.addEventListener('click', startPhase);
loadPhase();
