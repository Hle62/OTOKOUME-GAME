/* ゲームエリアのスタイル */
#game-area {
    width: 600px;
    height: 400px;
    border: 2px solid #333;
    background-color: #f0f0f0;
    position: relative; /* 画像を配置する基準点にする */
    overflow: hidden; /* エリア外に画像がはみ出ないようにする */
    margin: 20px;
}

/* 画像のスタイル */
#target {
    width: 50px;  /* 画像の幅 */
    height: 50px; /* 画像の高さ */
    position: absolute; /* game-areaを基準に自由に配置 */
    cursor: pointer; /* マウスカーソルを指マークに */
    
    /* 最初の位置（JavaScriptで上書きされます）*/
    top: 10px;
    left: 10px;

    /* (任意)移動を滑らかにするアニメーション */
    transition: top 0.2s ease, left 0.2s ease;
}