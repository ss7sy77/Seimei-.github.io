<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>目標設定アプリ</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>目標設定アプリ</h1>
        
        <div class="goal-form">
            <input type="text" id="goalTitle" placeholder="目標タイトル" required>
            <input type="date" id="goalDeadline" required>
            <input type="number" id="goalAmount" placeholder="金額" required>
            <button onclick="addGoal()">目標を追加</button>
        </div>

        <h2>設定した目標</h2>
        <ul id="goalList"></ul>
    </div>

    <script src="script.js"></script>
</body>
</html>
body {
    font-family: Arial, sans-serif;
    background-color: #f7f7f7;
    color: #333;
    margin: 0;
    padding: 20px;
}

.container {
    max-width: 600px;
    margin: 0 auto;
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h1 {
    text-align: center;
    color: #2c3e50;
}

.goal-form input, .goal-form button {
    width: calc(100% - 20px);
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
}

.goal-form button {
    background-color: #2980b9;
    color: #fff;
    cursor: pointer;
    border: none;
}

.goal-form button:hover {
    background-color: #3498db;
}

h2 {
    margin-top: 30px;
}

#goalList {
    list-style-type: none;
    padding: 0;
}

#goalList li {
    background-color: #ecf0f1;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 4px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

#goalList button {
    background-color: #27ae60;
    color: white;
    border: none;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
}

#goalList button:hover {
    background-color: #2ecc71;
}
function addGoal() {
    // 入力された目標の情報を取得
    const title = document.getElementById('goalTitle').value;
    const deadline = document.getElementById('goalDeadline').value;
    const amount = document.getElementById('goalAmount').value;

    // 目標のデータが空でないかを確認
    if (!title || !deadline || !amount) {
        alert("すべてのフィールドを入力してください。");
        return;
    }

    // 目標を表示するリストに追加
    const goalList = document.getElementById('goalList');
    const li = document.createElement('li');
    li.innerHTML = `タイトル: ${title}, 期限: ${deadline}, 金額: ${amount}円`;

    const achievedButton = document.createElement('button');
    achievedButton.innerText = "達成";
    achievedButton.onclick = function() {
        li.style.textDecoration = "line-through";
        achievedButton.disabled = true;
    };

    li.appendChild(achievedButton);
    goalList.appendChild(li);

    // 入力欄をリセット
    document.getElementById('goalTitle').value = '';
    document.getElementById('goalDeadline').value = '';
    document.getElementById('goalAmount').value = '';
}
