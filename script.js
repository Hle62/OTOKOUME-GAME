// --- 要素の取得 (変更なし) ---
const gameArea = document.getElementById('game-area');
const target = document.getElementById('target');
const scoreElement = document.getElementById('score');
const timerElement = document.getElementById('timer');
const resultScreen = document.getElementById('result-screen');
const finalScoreElement = document.getElementById('final-score');
const retryButton = document.getElementById('retry-button');

// --- ゲーム設定 (変更なし) ---
const GAME_TIME = 20;

// --- ゲーム用変数 (変更なし) ---
let score = 0;
let timeLeft = GAME_TIME;
let gameInterval; 
let isGameActive = false; 

// --- 関数の定義 (変更なし) ---
function startGame() {
    score = 0;
    timeLeft = GAME_TIME;
    scoreElement.textContent = score;
    timerElement.textContent = timeLeft;
    
    isGameActive = true;
    resultScreen.style.display = 'none'; 
    target.style.display = 'block';      
    retryButton.style.display = 'none'; 

    moveTarget();
    gameInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
    timeLeft--; 
    timerElement.textContent = timeLeft;

    if (timeLeft <= 0) {
        endGame();
    }
}

function endGame() {
    isGameActive = false;
    clearInterval(gameInterval); 

    finalScoreElement.textContent = score;
    resultScreen.style.display = 'flex'; 
    target.style.display = 'none';       
    retryButton.style.display = 'block';
}

function moveTarget() {
    const gameAreaWidth = gameArea.clientWidth;
    const gameAreaHeight = gameArea.clientHeight;
    const targetWidth = target.clientWidth;
    const targetHeight = target.clientHeight;
    const randomX = Math.random() * (gameAreaWidth - targetWidth);
    const randomY = Math.random() * (gameAreaHeight - targetHeight);
    target.style.left = randomX + 'px';
    target.style.top = randomY + 'px';
}

// --- イベントリスナー (変更なし) ---
target.addEventListener('click', () => {
    if (!isGameActive) {
        return; 
    }
    score++;
    scoreElement.textContent = score;
    moveTarget();
});

retryButton.addEventListener('click', () => {
    startGame(); 
});

// --- ゲームの開始 (変更なし) ---
startGame();