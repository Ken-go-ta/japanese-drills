

// クイズの状態
let currentQuestionIndex = 0;
let score = 0;

// 問題をシャッフルする
export function shuffleArray(array) {
    const shuffled = [...array];

    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    return shuffled;
}

// ランダムに問題を取得する
export function getRandomQuestions(questions, count = 10) {
    return shuffleArray(questions).slice(0, count);
}

// クイズを初期化する
export function initializeQuiz() {
    currentQuestionIndex = 0;
    score = 0;
}

// 現在の問題番号を取得する
export function getCurrentQuestionIndex() {
    return currentQuestionIndex;
}

// スコアを取得する
export function getScore() {
    return score;
}

// 正解・不正解を判定する
export function checkAnswer(selectedAnswer, correctAnswer) {
    if (selectedAnswer === correctAnswer) {
        score++;
        return true;
    }

    return false;
}

// 次の問題へ進む
export function nextQuestion() {
    currentQuestionIndex++;
}