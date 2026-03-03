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
    ],
    "3": [
        // Ev Eşyaları & Mutfak
        {"e": "refrigerator", "t": "buzdolabı"}, {"e": "microwave", "t": "mikrodalga"}, {"e": "dishwasher", "t": "bulaşık makinesi"},
        {"e": "vacuum cleaner", "t": "elektrikli süpürge"}, {"e": "pillow", "t": "yastık"}, {"e": "blanket", "t": "battaniye"},
        {"e": "curtain", "t": "perde"}, {"e": "carpet", "t": "halı"}, {"e": "wardrobe", "t": "gardırop"}, {"e": "mirror", "t": "ayna"},
        // Şehir & Ulaşım
        {"e": "airport", "t": "havalimanı"}, {"e": "train station", "t": "tren istasyonu"}, {"e": "hospital", "t": "hastane"},
        {"e": "pharmacy", "t": "eczane"}, {"e": "library", "t": "kütüphane"}, {"e": "museum", "t": "müze"},
        {"e": "bakery", "t": "fırın"}, {"e": "butcher", "t": "kasap"}, {"e": "skyscraper", "t": "gökdelen"}, {"e": "sidewalk", "t": "kaldırım"},
        // Temel Fiiller (Aksiyonlar)
        {"e": "understand", "t": "anlamak"}, {"e": "remember", "t": "hatırlamak"}, {"e": "forget", "t": "unutmak"},
        {"e": "believe", "t": "inanmak"}, {"e": "describe", "t": "tanımlamak"}, {"e": "explain", "t": "açıklamak"},
        {"e": "improve", "t": "geliştirmek"}, {"e": "prepare", "t": "hazırlamak"}, {"e": "decide", "t": "karar vermek"}, {"e": "travel", "t": "seyahat etmek"},
        // Doğa & Hava Durumu
        {"e": "thunderstorm", "t": "fırtına"}, {"e": "lightning", "t": "şimşek"}, {"e": "earthquake", "t": "deprem"},
        {"e": "environment", "t": "çevre"}, {"e": "waterfall", "t": "şelale"}, {"e": "island", "t": "ada"},
        {"e": "mountain", "t": "dağ"}, {"e": "ocean", "t": "okyanus"}, {"e": "desert", "t": "çöl"}, {"e": "valley", "t": "vadi"},
        // Vücut & Sağlık
        {"e": "shoulder", "t": "omuz"}, {"e": "elbow", "t": "dirsek"}, {"e": "finger", "t": "parmak"},
        {"e": "stomach", "t": "mide"}, {"e": "headache", "t": "baş ağrısı"}, {"e": "medicine", "t": "ilaç"},
        {"e": "healthy", "t": "sağlıklı"}, {"e": "exercise", "t": "egzersiz"}, {"e": "muscle", "t": "kas"}, {"e": "blood", "t": "kan"},
        // Diğer Önemli İsimler
        {"e": "knowledge", "t": "bilgi"}, {"e": "experience", "t": "tecrübe"}, {"e": "opportunity", "t": "fırsat"},
        {"e": "success", "t": "başarı"}, {"e": "government", "t": "hükümet"}, {"e": "society", "t": "toplum"},
        {"e": "language", "t": "dil"}, {"e": "difference", "t": "fark"}, {"e": "direction", "t": "yön"}, {"e": "distance", "t": "mesafe"}
    ],
    "4": [
        // İş Dünyası & Ekonomi
        {"e": "company", "t": "şirket"}, {"e": "salary", "t": "maaş"}, {"e": "customer", "t": "müşteri"},
        {"e": "advertisement", "t": "ilan/reklam"}, {"e": "signature", "t": "imza"}, {"e": "meeting", "t": "toplantı"},
        {"e": "agreement", "t": "anlaşma"}, {"e": "industry", "t": "sanayi"}, {"e": "economy", "t": "ekonomi"}, {"e": "investment", "t": "yatırım"},
        {"e": "budget", "t": "bütçe"}, {"e": "department", "t": "bölüm/departman"}, {"e": "employee", "t": "çalışan"}, {"e": "employer", "t": "işveren"},
        // Eğitim & Bilim
        {"e": "research", "t": "araştırma"}, {"e": "university", "t": "üniversite"}, {"e": "science", "t": "bilim"},
        {"e": "experiment", "t": "deney"}, {"e": "theory", "t": "teori"}, {"e": "discovery", "t": "keşif"},
        {"e": "invention", "t": "icat"}, {"e": "gravity", "t": "yerçekimi"}, {"e": "biology", "t": "biyoloji"}, {"e": "chemistry", "t": "kimya"},
        // Duygular & Kişilik
        {"e": "confident", "t": "kendinden emin"}, {"e": "generous", "t": "cömert"}, {"e": "stubborn", "t": "inatçı"},
        {"e": "jealous", "t": "kıskanç"}, {"e": "confused", "t": "kafası karışmış"}, {"e": "excited", "t": "heyecanlı"},
        {"e": "anxious", "t": "endişeli"}, {"e": "furious", "t": "çok öfkeli"}, {"e": "patient", "t": "sabırlı"}, {"e": "honest", "t": "dürüst"},
        // Soyut Kavramlar
        {"e": "freedom", "t": "özgürlük"}, {"e": "justice", "t": "adalet"}, {"e": "peace", "t": "barış"},
        {"e": "violence", "t": "şiddet"}, {"e": "responsibility", "t": "sorumluluk"}, {"e": "imagination", "t": "hayal gücü"},
        {"e": "memory", "t": "hafıza"}, {"e": "tradition", "t": "gelenek"}, {"e": "culture", "t": "kültür"}, {"e": "future", "t": "gelecek"},
        // İleri Seviye Fiiller
        {"e": "investigate", "t": "soruşturmak"}, {"e": "challenge", "t": "meydan okumak"}, {"e": "encourage", "t": "cesaretlendirmek"},
        {"e": "persuade", "t": "ikna etmek"}, {"e": "complain", "t": "şikayet etmek"}, {"e": "apologize", "t": "özür dilemek"},
        {"e": "recommend", "t": "tavsiye etmek"}, {"e": "appreciate", "t": "takdir etmek"}, {"e": "avoid", "t": "kaçınmak"}, {"e": "refuse", "t": "reddetmek"},
        // Sıfatlar (Niteleme)
        {"e": "valuable", "t": "değerli"}, {"e": "permanent", "t": "kalıcı"}, {"e": "temporary", "t": "geçici"},
        {"e": "magnificent", "t": "muhteşem"}, {"e": "terrible", "t": "berbat"}, {"e": "artificial", "t": "yapay"},
        {"e": "natural", "t": "doğal"}, {"e": "essential", "t": "temel/şart"}, {"e": "sufficient", "t": "yeterli"}, {"e": "vague", "t": "belirsiz"},
        // Sosyal Yaşam & Medya
        {"e": "broadcast", "t": "yayın"}, {"e": "opinion", "t": "fikir"}, {"e": "celebrity", "t": "ünlü"},
        {"e": "entertainment", "t": "eğlence"}, {"e": "audience", "t": "izleyici"}, {"e": "global", "t": "küresel"},
        {"e": "network", "t": "ağ"}, {"e": "privacy", "t": "gizlilik"}, {"e": "connection", "t": "bağlantı"}, {"e": "permission", "t": "izin"},
        // Zaman & Mekan Terimleri
        {"e": "frequently", "t": "sık sık"}, {"e": "immediately", "t": "hemen"}, {"e": "eventually", "t": "nihayetinde"},
        {"e": "rarely", "t": "nadir"}, {"e": "anywhere", "t": "herhangi bir yer"}, {"e": "nowhere", "t": "hiçbir yer"},
        {"e": "duration", "t": "süre"}, {"e": "schedule", "t": "program/takvim"}, {"e": "deadline", "t": "son teslim tarihi"}, {"e": "annual", "t": "yıllık"}
    ],
    "5": [
        // Akademik & Analiz
        {"e": "analysis", "t": "analiz"}, {"e": "evidence", "t": "kanıt"}, {"e": "concept", "t": "kavram"},
        {"e": "conclusion", "t": "sonuç"}, {"e": "data", "t": "veri"}, {"e": "definition", "t": "tanım"},
        {"e": "estimate", "t": "tahmin etmek"}, {"e": "function", "t": "işlev"}, {"e": "identify", "t": "tanımlamak"}, {"e": "indicate", "t": "belirtmek"},
        {"e": "method", "t": "yöntem"}, {"e": "period", "t": "dönem"}, {"e": "process", "t": "süreç"}, {"e": "source", "t": "kaynak"},
        // Hukuk & Politika
        {"e": "authority", "t": "yetki"}, {"e": "constitution", "t": "anayasa"}, {"e": "legislation", "t": "mevzuat"},
        {"e": "policy", "t": "politika"}, {"e": "principle", "t": "ilke"}, {"e": "procedure", "t": "prosedür"},
        {"e": "regulation", "t": "düzenleme"}, {"e": "security", "t": "güvenlik"}, {"e": "illegal", "t": "yasa dışı"}, {"e": "victim", "t": "kurban"},
        // Bilim & Teknoloji
        {"e": "automatic", "t": "otomatik"}, {"e": "component", "t": "bileşen"}, {"e": "device", "t": "cihaz"},
        {"e": "energy", "t": "enerji"}, {"e": "evolution", "t": "evrim"}, {"e": "generation", "t": "nesil"},
        {"e": "logic", "t": "mantık"}, {"e": "mechanism", "t": "mekanizma"}, {"e": "nuclear", "t": "nükleer"}, {"e": "precise", "t": "hassas/kesin"},
        // Ekonomi & Ticaret
        {"e": "consumer", "t": "tüketici"}, {"e": "credit", "t": "kredi"}, {"e": "distribution", "t": "dağıtım"},
        {"e": "export", "t": "ihracat"}, {"e": "finance", "t": "finans"}, {"e": "income", "t": "gelir"},
        {"e": "market", "t": "piyasa"}, {"e": "purchase", "t": "satın almak"}, {"e": "sector", "t": "sektör"}, {"e": "trade", "t": "ticaret"},
        // Sosyal Bilimler
        {"e": "community", "t": "toplum"}, {"e": "culture", "t": "kültür"}, {"e": "diversity", "t": "çeşitlilik"},
        {"e": "ethnic", "t": "etnik"}, {"e": "gender", "t": "cinsiyet"}, {"e": "immigrant", "t": "göçmen"},
        {"e": "minority", "t": "azınlık"}, {"e": "philosophy", "t": "felsefe"}, {"e": "psychology", "t": "psikoloji"}, {"e": "status", "t": "statü"},
        // Fiiller (Üst Seviye)
        {"e": "acquire", "t": "edinmek"}, {"e": "administer", "t": "yönetmek"}, {"e": "affect", "t": "etkilemek"},
        {"e": "appropriate", "t": "uygun"}, {"e": "aspect", "t": "açı/yön"}, {"e": "assist", "t": "yardım etmek"},
        {"e": "category", "t": "kategori"}, {"e": "chapter", "t": "bölüm"}, {"e": "complex", "t": "karmaşık"}, {"e": "compute", "t": "hesaplamak"},
        {"e": "conduct", "t": "yürütmek"}, {"e": "consequent", "t": "sonuç olarak"}, {"e": "construct", "t": "inşa etmek"}, {"e": "consume", "t": "tüketmek"},
        {"e": "contribute", "t": "katkıda bulunmak"}, {"e": "coordinate", "t": "koordine etmek"}, {"e": "core", "t": "çekirdek/temel"}, {"e": "corporate", "t": "kurumsal"},
        {"e": "correspond", "t": "haberleşmek"}, {"e": "criteria", "t": "kriterler"}, {"e": "deduce", "t": "sonuç çıkarmak"}, {"e": "demonstrate", "t": "kanıtlamak"},
        // Sıfatlar & Zarf (Karmaşık)
        {"e": "distinct", "t": "farklı/belirgin"}, {"e": "element", "t": "öğe"}, {"e": "equate", "t": "eşitlemek"}, {"e": "equivalent", "t": "eşdeğer"},
        {"e": "establish", "t": "kurmak"}, {"e": "evaluate", "t": "değerlendirmek"}, {"e": "exclude", "t": "hariç tutmak"}, {"e": "feature", "t": "özellik"},
        {"e": "final", "t": "son"}, {"e": "focus", "t": "odak"}, {"e": "impact", "t": "etki"}, {"e": "institute", "t": "enstitü"},
        {"e": "invest", "t": "yatırım yapmak"}, {"e": "item", "t": "madde/öğe"}, {"e": "journal", "t": "günlük/dergi"}, {"e": "maintain", "t": "sürdürmek"},
        {"e": "normal", "t": "normal"}, {"e": "obtain", "t": "elde etmek"}, {"e": "participate", "t": "katılmak"}, {"e": "perceive", "t": "algılamak"},
        {"e": "potential", "t": "potansiyel"}, {"e": "previous", "t": "önceki"}, {"e": "primary", "t": "birincil"}, {"e": "range", "t": "aralık"},
        {"e": "region", "t": "bölge"}, {"e": "relevant", "t": "alakalı"}, {"e": "restrict", "t": "kısıtlamak"}, {"e": "survey", "t": "anket"}
    ],
    
};

let learnedWords = JSON.parse(localStorage.getItem("learnedWords")) || {};
let completedLevels = JSON.parse(localStorage.getItem("completedLevels")) || [];
let coins = parseInt(localStorage.getItem("coins")) || 0;
let currentLevel = 1, currentWord = null;
let gameMode = 'normal'; // 'normal' veya 'timed'
let timerValue = 10;
let timerInterval = null;

window.onload = () => { updateUI(); showMainMenu(); };

function updateUI() {
    document.getElementById("total-badges").innerText = completedLevels.length;
    document.getElementById("coin-count").innerText = coins;
    const btn = document.getElementById("hint-btn");
    if(btn) btn.disabled = (coins < 10);
}

function showMainMenu() {
    stopTimer();
    document.getElementById("main-menu").style.display = "block";
    document.getElementById("game-area").style.display = "none";
    document.getElementById("hint-btn").style.display = "none";
    document.getElementById("timer-display").style.display = "none";
    
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
    document.getElementById("hint-btn").style.display = "inline-flex";
    
    if(gameMode === 'timed') {
        document.getElementById("timer-display").style.display = "block";
    } else {
        document.getElementById("timer-display").style.display = "none";
    }
    
    updateProgressUI();
}

function newQuestion() {
    stopTimer();
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

    if(gameMode === 'timed') startTimer();
}

function checkAnswer(ans, btn) {
    stopTimer();
    const feedback = document.getElementById("feedback");
    document.querySelectorAll('.opt-btn').forEach(b => b.style.pointerEvents = "none");

    if(ans === currentWord.t) {
        if(btn) btn.classList.add('correct');
        feedback.innerText = "✅ Harika!";
        if(!learnedWords[currentLevel].includes(currentWord.e)) {
            learnedWords[currentLevel].push(currentWord.e);
            coins += 2;
            localStorage.setItem("learnedWords", JSON.stringify(learnedWords));
            localStorage.setItem("coins", coins);
        }
        updateUI();
        setTimeout(updateProgressUI, 600);
    } else {
        if(btn) btn.classList.add('wrong');
        feedback.innerText = "❌ Tekrar Dene";
        setTimeout(newQuestion, 800);
    }
}

function updateProgressUI() {
    const solved = (learnedWords[currentLevel] || []).length;
    const target = currentLevel * 20;
    document.getElementById("progress-bar").style.width = (solved/target)*100 + "%";
    document.getElementById("progress-text").innerText = `${solved} / ${target}`;
    
    if(solved >= target) {
        stopTimer();
        document.getElementById("play-screen").style.display = "none";
        document.getElementById("finish-screen").style.display = "block";
        document.getElementById("hint-btn").style.display = "none";
        document.getElementById("timer-display").style.display = "none";
        if(!completedLevels.includes(currentLevel)) {
            completedLevels.push(currentLevel);
            localStorage.setItem("completedLevels", JSON.stringify(completedLevels));
        }
        updateUI();
    } else {
        newQuestion();
    }
}

// ZAMANA KARŞI MODU FONKSİYONLARI
function startTimer() {
    timerValue = 10;
    document.getElementById("time-left").innerText = timerValue;
    timerInterval = setInterval(() => {
        timerValue--;
        document.getElementById("time-left").innerText = timerValue;
        if(timerValue <= 0) {
            stopTimer();
            checkAnswer('SÜRE BİTTİ', null); // Süre bitince yanlış sayar
        }
    }, 1000);
}

function stopTimer() {
    if(timerInterval) clearInterval(timerInterval);
}

function setGameMode(m) {
    gameMode = m;
    document.querySelectorAll('.mode-btn').forEach(b => b.classList.remove('active'));
    // Tıklanan butona active class ekle
    if(m === 'normal') document.getElementById('mode-normal').classList.add('active');
    else document.getElementById('mode-timed').classList.add('active');
}

function useHint() {
    if(coins >= 10 && document.getElementById("play-screen").style.display !== "none") {
        coins -= 10; 
        localStorage.setItem("coins", coins); 
        updateUI();
        const btns = Array.from(document.querySelectorAll('.opt-btn'));
        const wrongs = btns.filter(b => b.innerText !== currentWord.t);
        wrongs.sort(() => Math.random() - 0.5).slice(0, 2).forEach(b => b.classList.add('hidden'));
    }
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