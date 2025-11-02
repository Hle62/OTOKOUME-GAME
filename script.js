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

// --- ゲーム用変数 ---
let score = 0;
let timeLeft = GAME_TIME;
let gameInterval; 
let isGameActive = false; // ★ゲームが動作中か（タイマーが動いているか）

// --- 関数の定義 ---

// 1. ゲームを初期状態に準備する関数 (タイマーは開始しない)
function initializeGame() {
    // 各種リセット
    score = 0;
    timeLeft = GAME_TIME;
    scoreElement.textContent = score;
    timerElement.textContent = timeLeft;
    
    // 状態の切り替え
    isGameActive = false; // ★タイマー停止中
    if (gameInterval) {
        clearInterval(gameInterval); // 念のためタイマーを停止
    }
    
    resultScreen.style.display = 'none'; // 結果画面を隠す
    target.style.display = 'block';      // 画像を表示する
    retryButton.style.display = 'none';  // ボタンを隠す

    // 最初の画像を配置
    moveTarget();
}

// 2. タイマーを更新する関数（1秒ごとに呼ばれる）
function updateTimer() {
    timeLeft--; // 時間を1減らす
    timerElement.textContent = timeLeft;

    // もし残り時間が0になったら
    if (timeLeft <= 0) {
        endGame();
    }
}

// 3. ゲームを終了する関数
function endGame() {
    isGameActive = false; // ★タイマー停止
    clearInterval(gameInterval); // タイマーを停止

    // 結果画面の表示
    finalScoreElement.textContent = score;
    resultScreen.style.display = 'flex'; // 結果画面を表示
    target.style.display = 'none';       // 画像を隠す
    retryButton.style.display = 'block'; // ボタンを表示する
}

// 4. 画像を移動させる関数 (変更なし)
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

// --- イベントリスナー（操作の受付） ---

// 画像をクリックした時
target.addEventListener('click', () => {
    
    // ★★★ 変更点 ★★★
    // もしタイマーがまだ動いていなければ (isGameActive が false なら)
    if (!isGameActive) {
        // これが最初のクリックなので、タイマーを開始する
        isGameActive = true;
        gameInterval = setInterval(updateTimer, 1000);
    }
    // ★★★ 変更ここまで ★★★

    // 以下の処理は、最初のクリックでも2回目以降でも実行される
    
    // スコアを増やす
    score++;
    scoreElement.textContent = score;

    // 画像を移動
    moveTarget();
});

// リトライボタンをクリックした時
retryButton.addEventListener('click', () => {
    initializeGame(); // ゲームを初期状態に戻す
});

// --- ゲームの開始 ---
// ページ読み込み時にゲームを初期状態にする
initializeGame();