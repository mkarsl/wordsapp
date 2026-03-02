const levelPool = {
    "1": [
        {"e": "apple", "t": "elma"}, {"e": "book", "t": "kitap"}, {"e": "cat", "t": "kedi"}, {"e": "dog", "t": "köpek"},
        {"e": "sun", "t": "güneş"}, {"e": "water", "t": "su"}, {"e": "school", "t": "okul"}, {"e": "pen", "t": "kalem"},
        {"e": "bread", "t": "ekmek"}, {"e": "house", "t": "ev"}, {"e": "milk", "t": "süt"}, {"e": "door", "t": "kapı"},
        {"e": "friend", "t": "arkadaş"}, {"e": "car", "t": "araba"}, {"e": "bird", "t": "kuş"}, {"e": "time", "t": "zaman"},
        {"e": "work", "t": "iş"}, {"e": "man", "t": "adam"}, {"e": "woman", "t": "kadın"}, {"e": "child", "t": "çocuk"}
    ],
    "2": [
        {"e": "bicycle", "t": "bisiklet"}, {"e": "kitchen", "t": "mutfak"}, {"e": "garden", "t": "bahçe"}, {"e": "window", "t": "pencere"},
        {"e": "yellow", "t": "sarı"}, {"e": "purple", "t": "mor"}, {"e": "winter", "t": "kış"}, {"e": "summer", "t": "yaz"},
        {"e": "bridge", "t": "köprü"}, {"e": "market", "t": "market"}, {"e": "ticket", "t": "bilet"}, {"e": "mirror", "t": "ayna"}
    ]
};

let learnedWords = JSON.parse(localStorage.getItem("learnedWords")) || {};
let completedLevels = JSON.parse(localStorage.getItem("completedLevels")) || [];
let coins = parseInt(localStorage.getItem("coins")) || 0;
let currentLevel = 1, currentWord = null;

window.onload = () => { updateUI(); showMainMenu(); };

function updateUI() {
    document.getElementById("total-badges").innerText = completedLevels.length;
    document.getElementById("coin-count").innerText = coins;
    const btn = document.getElementById("hint-btn");
    if(btn) btn.disabled = (coins < 10);
}

function showMainMenu() {
    document.getElementById("main-menu").style.display = "block";
    document.getElementById("game-area").style.display = "none";
    // İpucu butonu menüde gizlenmeli
    document.getElementById("hint-btn").style.display = "none";
    const list = document.getElementById("level-list");
    list.innerHTML = "";
    for(let i = 1; i <= 20; i++) {
        const isLocked = i > 1 && !completedLevels.includes(i - 1);
        const card = document.createElement("div");
        card.className = "level-card";
        if(isLocked) card.style.opacity = "0.5";
        const solved = (learnedWords[i] || []).length;
        card.innerHTML = `<h3 style="font-size:14px;">Aşama ${i}</h3><small style="font-size:10px; color:#7f8c8d;">${solved} / ${i*20}</small>`;
        if(!isLocked) card.onclick = () => startLevel(i);
        list.appendChild(card);
    }
}

function startLevel(id) {
    currentLevel = id;
    if(!learnedWords[id]) learnedWords[id] = [];
    document.getElementById("main-menu").style.display = "none";
    document.getElementById("game-area").style.display = "block";
    document.getElementById("play-screen").style.display = "block";
    document.getElementById("finish-screen").style.display = "none";
    // Sadece oyun başladığında ipucu görünür
    document.getElementById("hint-btn").style.display = "inline-flex";
    updateProgressUI();
}

function newQuestion() {
    const pool = levelPool[currentLevel] || levelPool["1"];
    const available = pool.filter(w => !learnedWords[currentLevel].includes(w.e));
    if(available.length === 0) return;

    currentWord = available[Math.floor(Math.random() * available.length)];
    document.getElementById("word").innerText = currentWord.e;
    document.getElementById("feedback").innerText = "";
    
    let options = [currentWord.t];
    let others = pool.filter(w => w.t !== currentWord.t).map(w => w.t);
    while(options.length < 4 && others.length > 0) {
        options.push(others.splice(Math.floor(Math.random() * others.length), 1)[0]);
    }
    options.sort(() => Math.random() - 0.5);

    const container = document.getElementById("options-container");
    container.innerHTML = "";
    options.forEach(opt => {
        const btn = document.createElement("button");
        btn.innerText = opt;
        btn.className = "opt-btn";
        btn.onclick = () => checkAnswer(opt, btn);
        container.appendChild(btn);
    });
}

function checkAnswer(ans, btn) {
    const feedback = document.getElementById("feedback");
    document.querySelectorAll('.opt-btn').forEach(b => b.style.pointerEvents = "none");

    if(ans === currentWord.t) {
        btn.classList.add('correct');
        feedback.innerText = "✅ Harika!";
        if(!learnedWords[currentLevel].includes(currentWord.e)) {
            learnedWords[currentLevel].push(currentWord.e);
            coins += 1;
            localStorage.setItem("learnedWords", JSON.stringify(learnedWords));
            localStorage.setItem("coins", coins);
        }
        updateUI();
        setTimeout(updateProgressUI, 700);
    } else {
        btn.classList.add('wrong');
        feedback.innerText = "❌ Tekrar Dene";
        setTimeout(newQuestion, 900);
    }
}

function updateProgressUI() {
    const solved = (learnedWords[currentLevel] || []).length;
    const target = currentLevel * 20;
    document.getElementById("progress-bar").style.width = (solved/target)*100 + "%";
    document.getElementById("progress-text").innerText = `${solved} / ${target}`;
    
    if(solved >= target) {
        document.getElementById("play-screen").style.display = "none";
        document.getElementById("finish-screen").style.display = "block";
        // BÖLÜM BİTTİĞİNDE İPUCU BUTONUNU GİZLE
        document.getElementById("hint-btn").style.display = "none";
        if(!completedLevels.includes(currentLevel)) {
            completedLevels.push(currentLevel);
            localStorage.setItem("completedLevels", JSON.stringify(completedLevels));
        }
        updateUI();
    } else {
        newQuestion();
    }
}

function useHint() {
    // Sadece oyun alanı görünürken ve coin yeterliyken çalışır
    if(coins >= 10 && document.getElementById("play-screen").style.display !== "none") {
        coins -= 10; 
        localStorage.setItem("coins", coins); 
        updateUI();
        const btns = Array.from(document.querySelectorAll('.opt-btn'));
        const wrongs = btns.filter(b => b.innerText !== currentWord.t);
        wrongs.sort(() => Math.random() - 0.5).slice(0, 2).forEach(b => b.classList.add('hidden'));
    }
}

function setGameMode(m) {
    document.querySelectorAll('.mode-btn').forEach(b => b.classList.remove('active'));
    // Basit bir görsel seçim geri bildirimi
    event.target.classList.add('active');
}

function resetAndRetry() {
    learnedWords[currentLevel] = [];
    localStorage.setItem("learnedWords", JSON.stringify(learnedWords));
    startLevel(currentLevel);
}

function speakWord() {
    const msg = new SpeechSynthesisUtterance(currentWord.e);
    msg.lang = 'en-US';
    window.speechSynthesis.speak(msg);
}