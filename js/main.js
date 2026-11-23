import { n5Questions } from './questions/n5.js';
import { n4Questions } from './questions/n4.js';
import { n3Questions } from './questions/n3.js';
import { n2Questions } from './questions/n2.js';
import { n1Questions } from './questions/n1.js';
import {
    shuffleArray,
    getRandomQuestions,
    initializeQuiz,
    getCurrentQuestionIndex,
    getScore,
    checkAnswer,
    nextQuestion,
} from './quiz.js';

let selectedLevel = null;
const h1 = document.querySelector('h1');
const chooseLevel = document.querySelector('#js-chooseLevel');
let selectedQuestions = [];
const startButton = document.querySelector('#js-start');
const question = document.querySelector('#js-question');
const kana = document.querySelector('#js-kana');
const romaji = document.querySelector('#js-romaji');
const options = document.querySelector('#js-options');
const nextButton = document.querySelector('#js-next');
const explanation = document.querySelector('#js-explanation');
const questionNumber = document.querySelector('#js-questionNumber');
const retryButton = document.querySelector('#js-retry');
const retakeButton = document.querySelector('#js-retake');
const resultText = document.querySelector('#js-result');
const title = document.querySelector('#js-title');
const main = document.querySelector('#js-main');
const correct = document.querySelector('#js-correct');
const wrong = document.querySelector('#js-wrong');
const questionWrapper = document.querySelector('#js-questionWrapper');
const backToChoose = document.querySelector('#js-backToChoose');
const level = document.querySelector('#js-level');
const currentScore = document.querySelector('#js-currentScore');
const scoreWrapper = document.querySelector('#js-scoreWrapper');
const scoreBar = document.querySelector('#js-scoreBar');
const correctBar = document.querySelector('#js-correctBar');
const description = document.querySelector('#js-discription');
const soundSwitch = document.querySelector('#js-soundSwitch');
const correctSound = new Audio('./sounds/dragon-studio-correct-472358.mp3');
const wrongSound = new Audio('./sounds/universfield-error-notification-08-206492.mp3');
const pressSound = new Audio('./sounds/freesoundeffects-button-click-289742.mp3');

function playPressSound() {
    if (isMuted) return;

    pressSound.currentTime = 0;
    pressSound.play();
}


const reloadPage = () => {
    playPressSound();
    location.reload();
};

h1.addEventListener('click', reloadPage);
backToChoose.addEventListener('click', reloadPage);

const levelButtons = document.querySelectorAll('.js-level');
const questionSets = {
    N5: n5Questions,
    N4: n4Questions,
    N3: n3Questions,
    N2: n2Questions,
    N1: n1Questions,
};


description.classList.remove('hidden');
title.classList.add('hidden');
startButton.classList.add('hidden');
level.classList.add('hidden');
scoreWrapper.classList.add('hidden');

levelButtons.forEach(button => {
    button.addEventListener('click', () => {
        playPressSound();
        selectedLevel = button.dataset.level;
        title.classList.remove('hidden');
        startButton.classList.remove('hidden');
        chooseLevel.classList.add('hidden');
        description.classList.remove('hidden');
    });
});


let answered = false;
correct.addEventListener('click', () => {
    correct.classList.add('hidden');
});
wrong.addEventListener('click', () => {
    wrong.classList.add('hidden');
});

let isMuted = localStorage.getItem('isMuted') === 'true';
function updateSoundSetting() {
    if (isMuted) {
        soundSwitch.innerHTML = '<i class="fa-solid fa-volume-xmark"></i>';
    } else {
        soundSwitch.innerHTML = '<i class="fa-solid fa-volume-high"></i>';
    }
}

updateSoundSetting();

soundSwitch.addEventListener('click', () => {
    isMuted = !isMuted;
    localStorage.setItem('isMuted', isMuted);
    updateSoundSetting();
});


function showQuestion() {
    // 画面と回答状態を初期化
    initializeScreen();
    answered = false;
    options.replaceChildren();
    nextButton.disabled = true;

    // 現在の問題番号を取得
    const currentIndex = getCurrentQuestionIndex();
    const currentQuestion = selectedQuestions[currentIndex];

    // 最後の問題かどうかでボタンのテキストを変更
    if (currentIndex === selectedQuestions.length - 1) {
        nextButton.textContent = 'Show Result';
    } else {
        nextButton.textContent = 'Next Question';
    }

    // 必要な要素を表示
    questionNumber.classList.remove('hidden');
    question.classList.remove('hidden');
    kana.classList.remove('hidden');
    romaji.classList.remove('hidden');
    questionWrapper.classList.remove('hidden');
    retakeButton.classList.add('hidden');
    backToChoose.classList.add('hidden');
    level.classList.remove('hidden');
    resultText.classList.add('hidden');
    currentScore.classList.remove('hidden');
    correctBar.classList.remove('hidden');
    scoreBar.classList.remove('hidden');
    nextButton.classList.remove('hidden');

    // 問題情報を表示
    questionNumber.textContent = `Q${currentIndex + 1}`;
    question.textContent = currentQuestion.question;
    kana.textContent = currentQuestion.kana;
    romaji.textContent = currentQuestion.romaji;
    level.textContent = `${selectedLevel} level`;

    // スコアを表示
    currentScore.innerHTML = `Your Score<br><span>${getScore()}</span>/${selectedQuestions.length}`;

    // 正解率バーを更新
    const correctPercent = (getScore() / selectedQuestions.length) * 100;
    correctBar.style.width = `${correctPercent}%`;

    // 選択肢をシャッフルして表示
    const shuffledOptions = shuffleArray(currentQuestion.options);

    shuffledOptions.forEach(option => {
        const li = document.createElement('li');
        li.textContent = option;
        options.appendChild(li);

        li.addEventListener('click', () => {
            // 回答済みなら何もしない
            if (answered) return;

            answered = true;

            const correctAnswer = currentQuestion.correct;
            const isCorrect = checkAnswer(option, correctAnswer);

            // すべての選択肢のカーソルを変更
            options.querySelectorAll('li').forEach(item => {
                item.style.cursor = 'default';
            });

            if (isCorrect) {
                // 正解の場合

                // 正解音
                if (!isMuted) {
                    correctSound.currentTime = 0;
                    correctSound.play();
                }
       
                correct.classList.remove('hidden');

                setTimeout(() => {
                    correct.classList.add('hidden');
                }, 1500);

                li.classList.add('correct');
                li.insertAdjacentHTML(
                    'beforeend',
                    '<i class="fa-solid fa-check"></i>'
                );

                options.querySelectorAll('li').forEach(item => {
                    if (item.textContent !== correctAnswer) {
                        item.style.opacity = 0.5;
                    }
                });

            } else {
                // 不正解の場合
                // 不正解音
                if (!isMuted) {
                    wrongSound.currentTime = 0;
                    wrongSound.play();
                    console.log('not muted');
                }
                console.log('muted');

                wrong.classList.remove('hidden');

                setTimeout(() => {
                    wrong.classList.add('hidden');
                }, 1500);

                li.classList.add('wrong');
                li.insertAdjacentHTML(
                    'beforeend',
                    '<i class="fa-solid fa-xmark"></i>'
                );

                options.querySelectorAll('li').forEach(item => {
                    if (item.textContent === correctAnswer) {
                        item.classList.add('correct');
                        item.insertAdjacentHTML(
                            'beforeend',
                            '<i class="fa-solid fa-check"></i>'
                        );
                    } else {
                        item.style.opacity = 0.5;
                    }
                });
            }

            // 回答後の処理
            nextButton.disabled = false;
            explanation.classList.remove('hidden');
            explanation.textContent = currentQuestion.explanation;

            // スコア表示を更新
            currentScore.innerHTML = `Your Score<br><span>${getScore()}</span>/${selectedQuestions.length}`;

            // 正解率バーを更新
            const updatedPercent =
                (getScore() / selectedQuestions.length) * 100;

            correctBar.style.width = `${updatedPercent}%`;
        });
    });
}

function initializeScreen() {
    retryButton.classList.add('hidden');
    startButton.classList.add('hidden');
    title.classList.add('hidden');
    scoreWrapper.classList.remove('hidden');
    level.classList.remove('hidden');
    nextButton.classList.remove('hidden');
    main.classList.remove('hidden');
}

function startQuiz() {
    if (!selectedLevel) {
        alert('Please select a level.');
        return;
    }

    playPressSound();

    explanation.classList.add('hidden');
    selectedQuestions = getRandomQuestions(questionSets[selectedLevel]);

    initializeQuiz();
    showQuestion();
}

function retakeQuiz() {
    playPressSound();
    initializeQuiz();
    showQuestion();
}

nextButton.addEventListener('click', () => {
    playPressSound();

    explanation.classList.add('hidden');

    nextQuestion();

    if (getCurrentQuestionIndex() < selectedQuestions.length) {
        showQuestion();
    } else {
        showResult();
    }
});

function showResult() {
    level.classList.add('hidden');
    questionNumber.classList.add('hidden');
    question.classList.add('hidden');
    kana.classList.add('hidden');
    romaji.classList.add('hidden');
    options.replaceChildren();
    explanation.classList.add('hidden');
    nextButton.classList.add('hidden');
    resultText.classList.remove('hidden');
    resultText.innerHTML = `Your total score is <br><p><span>${getScore()}</span> out of ${selectedQuestions.length}</p>`;
    retryButton.classList.remove('hidden');
    questionWrapper.classList.add('hidden');
    retakeButton.classList.remove('hidden');
    backToChoose.classList.remove('hidden');
    level.classList.add('hidden');
    scoreWrapper.classList.add('hidden');
    currentScore.classList.add('hidden');
    scoreBar.classList.add('hidden');
}

startButton.addEventListener('click', startQuiz);
retryButton.addEventListener('click', startQuiz);
retakeButton.addEventListener('click', retakeQuiz);