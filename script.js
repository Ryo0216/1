document.addEventListener("DOMContentLoaded", () => {
    const fortuneButton = document.getElementById("fortuneButton");
    const result = document.getElementById("result");

    // 占い結果のリスト
    const fortunes = [
        "大吉: 素晴らしい一日になるでしょう！",
        "中吉: 良いことがたくさん起こりそうです。",
        "小吉: 小さな幸せを見つけられるかも。",
        "吉: 平穏で良い一日になりそうです。",
        "末吉: 小さなラッキーに出会うかも。",
        "凶: 今日は慎重に行動してください。",
        "大凶: 特に注意深く過ごしましょう！"
    ];

    // ボタンがクリックされたときの動作
    fortuneButton.addEventListener("click", () => {
        // ランダムに運勢を選ぶ
        const randomIndex = Math.floor(Math.random() * fortunes.length);
        result.textContent = fortunes[randomIndex];
    });
});
