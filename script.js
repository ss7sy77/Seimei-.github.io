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

    const failButton = document.createElement('button');
    failButton.innerText = "目標失敗";
    failButton.onclick = function() {
        alert(`目標に失敗しました。${amount}円を支払ってください。`);
        failButton.disabled = true;
    };

    const successButton = document.createElement('button');
    successButton.innerText = "目標達成";
    successButton.onclick = function() {
        li.style.textDecoration = "line-through";
        successButton.disabled = true;
        failButton.disabled = true;
    };

    li.appendChild(successButton);
    li.appendChild(failButton);
    goalList.appendChild(li);

    // 入力欄をリセット
    document.getElementById('goalTitle').value = '';
    document.getElementById('goalDeadline').value = '';
    document.getElementById('goalAmount').value = '';
}