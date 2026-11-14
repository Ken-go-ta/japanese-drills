import { questions } from './questions.js';

let selectedQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
const qAndA = document.querySelector('#js-qa');
const startButton = document.querySelector('#js-start');
const question = document.querySelector('#js-question');
const kana = document.querySelector('#js-kana');
const romaji = document.querySelector('#js-romaji');
const options = document.querySelector('#js-options');
const nextButton = document.querySelector('#js-next');
const explanation = document.querySelector('#js-explanation');
const questionNumber = document.querySelector('#js-questionNumber');
const retryButton = document.querySelector('#js-retry');
const resultText = document.querySelector('#js-result');
const title = document.querySelector('#js-title');
const main = document.querySelector('#js-main');
const correct = document.querySelector('#js-correct');
const wrong = document.querySelector('#js-wrong');

function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}
  
function getRandomQuestions() {
    return shuffleArray(questions).slice(0, 10);
}

let answered = false;
function showQuestion() {
    answered = false;
    options.replaceChildren();
    nextButton.disabled = true;
    if (currentQuestionIndex === 9) {
        nextButton.textContent = 'Show Result';
    } else {
        nextButton.textContent = 'Next Question';
    }
    questionNumber.textContent = `Question ${currentQuestionIndex+1}`;
    question.textContent = selectedQuestions[currentQuestionIndex].question;
    kana.textContent = selectedQuestions[currentQuestionIndex].kana;
    romaji.textContent = selectedQuestions[currentQuestionIndex].romaji;
    const getShuffledOptions = () => {
        return shuffleArray(selectedQuestions[currentQuestionIndex].options);
    }
    const shuffledQuestions = getShuffledOptions();
    shuffledQuestions.forEach(option => {
        const li = document.createElement('li');
        li.innerText = option;
        options.appendChild(li);
        li.addEventListener('click', () => {
            if (answered) {
                return;
            }
        
            answered = true;
            
            const correctAnswer = selectedQuestions[currentQuestionIndex].correct;

            options.querySelectorAll('li').forEach((item) => {
                item.style.cursor = 'default';
            });

            if (option === correctAnswer) {
                correct.classList.remove('hidden');
                setTimeout(() => {
                    correct.classList.add('hidden');
                }, 1500);
                li.classList.add('correct');
                li.insertAdjacentHTML('beforeend', '<i class="fa-solid fa-check"></i>');
                options.querySelectorAll('li').forEach((item) => {
                    if (item.textContent !== correctAnswer) {
                        item.style.opacity = .5;
                    }});
                score++;
            } else {
                li.classList.add('wrong');
                wrong.classList.remove('hidden');
                setTimeout(() => {
                    wrong.classList.add('hidden');
                }, 1500);
                li.insertAdjacentHTML('beforeend', '<i class="fa-solid fa-xmark"></i>')
                options.querySelectorAll('li').forEach((item) => {
                    if (item.textContent === correctAnswer) {
                        item.classList.add('correct');
                        item.insertAdjacentHTML('beforeend', '<i class="fa-solid fa-check"></i>');
                    } else {
                        item.style.opacity = .5;
                    }
                });
            }
        
            nextButton.disabled = false;
            explanation.textContent = selectedQuestions[currentQuestionIndex].explanation;
        });
    });
}

function startQuiz() {
    selectedQuestions = getRandomQuestions();
    currentQuestionIndex = 0;
    score = 0;
    resultText.textContent = '';
    retryButton.classList.add('hidden');
    startButton.classList.add('hidden');
    title.classList.add('hidden');
    nextButton.classList.remove('hidden');
    main.classList.remove('hidden');
    showQuestion();
}

nextButton.addEventListener('click', () => {
    explanation.textContent = '';
    currentQuestionIndex++;
    if (currentQuestionIndex < 10) {
        showQuestion();
    } else {
        showResult();
    }
});

function showResult() {
    questionNumber.textContent = '';
    question.textContent = '';
    kana.textContent = '';
    romaji.textContent = '';
    options.replaceChildren();
    explanation.textContent = '';
    nextButton.classList.add('hidden');
    resultText.textContent = `Your total score is ${score} out of 10`;
    retryButton.classList.remove('hidden');
}

startButton.addEventListener('click', startQuiz);
retryButton.addEventListener('click', startQuiz);