// --- 要素の取得 ---
// ... (変更なし) ...
const retryButton = document.getElementById('retry-button');

// --- ゲーム設定 ---
// ... (変更なし) ...

// --- ゲーム用変数 ---
// ... (変更なし) ...

// --- 関数の定義 ---

// 1. ゲームを開始する関数
function startGame() {
    // 各種リセット
    score = 0;
    timeLeft = GAME_TIME;
    scoreElement.textContent = score;
    timerElement.textContent = timeLeft;
    
    // 状態の切り替え
    isGameActive = true;
    resultScreen.style.display = 'none'; // 結果画面を隠す
    target.style.display = 'block';      // 画像を表示する
    
    // ↓↓ ★外に出したボタンを隠す処理を追加 ↓↓
    retryButton.style.display = 'none'; 

    // 最初の画像を配置
    moveTarget();

    // 1秒ごとにタイマーを更新
    gameInterval = setInterval(updateTimer, 1000);
}

// 2. タイマーを更新する関数（1秒ごとに呼ばれる）
function updateTimer() {
    // ... (変更なし) ...
}

// 3. ゲームを終了する関数
function endGame() {
    isGameActive = false;
    clearInterval(gameInterval); // タイマーを停止

    // 結果画面の表示
    finalScoreElement.textContent = score;
    resultScreen.style.display = 'flex'; // 結果画面を表示
    target.style.display = 'none';       // 画像を隠す
    
    // ↓↓ ★外に出したボタンを表示する処理を追加 ↓↓
    retryButton.style.display = 'block';
}

// 4. 画像を移動させる関数
function moveTarget() {
    // ... (変更なし) ...
}

// --- イベントリスナー（操作の受付） ---
// ... (変更なし) ...

// --- ゲームの開始 ---
startGame();