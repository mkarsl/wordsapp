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
        {"e": "bridge", "t": "köprü"}, {"e": "market", "t": "market"}, {"e": "ticket", "t": "bilet"}, {"e": "mirror", "t": "ayna"},
        { e: "Discover", t: "Keşfetmek" },{ e: "Healthy", t: "Sağlıklı" },{ e: "Journey", t: "Yolculuk" },{ e: "Knowledge", t: "Bilgi" },
        { e: "Language", t: "Dil" },{ e: "Machine", t: "Makine" },{ e: "Natural", t: "Doğal" },{ e: "Opinion", t: "Fikir / Görüş" },
        { e: "Perfect", t: "Kusursuz" },{ e: "Quality", t: "Kalite" },{ e: "Reason", t: "Sebep" },{ e: "Science", t: "Bilim" },
        { e: "Temperature", t: "Sıcaklık" },{ e: "Understand", t: "Anlamak" },{ e: "Vacation", t: "Tatil" },{ e: "Weather", t: "Hava Durumu" },
        { e: "Yesterday", t: "Dün" },{ e: "Zodiac", t: "Burç" },{ e: "Amount", t: "Miktar" },{ e: "Believe", t: "İnanmak" },
        { e: "Century", t: "Yüzyıl" },{ e: "Danger", t: "Tehlike" },{ e: "Education", t: "Eğitim" },{ e: "Freedom", t: "Özgürlük" },
        { e: "Government", t: "Hükümet" },{ e: "History", t: "Tarih" },{ e: "Island", t: "Ada" },{ e: "Justice", t: "Adalet" }
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
    "6": [
        // Phrasal Verbs - Grup 1 (Günlük Hayat)
        {"e": "bring up", "t": "büyütmek/konu açmak"}, {"e": "call off", "t": "iptal etmek"}, {"e": "carry on", "t": "devam etmek"},
        {"e": "check out", "t": "incelemek/ayrılmak"}, {"e": "come across", "t": "karşılaşmak"}, {"e": "count on", "t": "güvenmek"},
        {"e": "cut down", "t": "azaltmak"}, {"e": "do over", "t": "yeniden yapmak"}, {"e": "drop out", "t": "bırakmak (okul vb.)"}, {"e": "end up", "t": "sonuçlanmak"},
        {"e": "fall apart", "t": "parçalanmak"}, {"e": "figure out", "t": "çözmek/anlamak"}, {"e": "fill out", "t": "form doldurmak"}, {"e": "find out", "t": "öğrenmek"},
        {"e": "get along", "t": "iyi geçinmek"}, {"e": "get away", "t": "kaçmak"}, {"e": "get over", "t": "atlatmak/iyileşmek"}, {"e": "give up", "t": "vazgeçmek"},
        {"e": "go over", "t": "gözden geçirmek"}, {"e": "grow up", "t": "büyümek"}, {"e": "hang out", "t": "takılmak"}, {"e": "hold on", "t": "beklemek"},
        // Phrasal Verbs - Grup 2 (İleri Seviye)
        {"e": "keep on", "t": "devam etmek"}, {"e": "look after", "t": "bakmak/ilgilenmek"}, {"e": "look forward to", "t": "dört gözle beklemek"}, {"e": "look up to", "t": "hayranlık duymak"},
        {"e": "make up", "t": "uydurmak/barışmak"}, {"e": "pass out", "t": "bayılmak"}, {"e": "put off", "t": "ertelemek"}, {"e": "run out of", "t": "tüketmek/bitmek"},
        {"e": "set up", "t": "kurmak"}, {"e": "show off", "t": "gösteriş yapmak"}, {"e": "take after", "t": "benzemek"}, {"e": "take off", "t": "havalanmak/çıkarmak"},
        {"e": "turn down", "t": "reddetmek/kısmak"}, {"e": "work out", "t": "egzersiz yapmak/çözmek"}, {"e": "back up", "t": "desteklemek/yedeklemek"}, {"e": "blow up", "t": "patlamak"},
        {"e": "break down", "t": "bozulmak"}, {"e": "break in", "t": "zorla girmek"}, {"e": "bring about", "t": "sebep olmak"}, {"e": "call back", "t": "geri aramak"},
        // İleri Seviye Sıfatlar (Karakter & Analiz)
        {"e": "ambiguous", "t": "belirsiz/iki anlamlı"}, {"e": "benevolent", "t": "hayırsever"}, {"e": "cautious", "t": "tedbirli"},
        {"e": "diligent", "t": "çalışkan/gayretli"}, {"e": "eloquent", "t": "güzel konuşan"}, {"e": "frivolous", "t": "ciddiyetsiz/boş"},
        {"e": "gullible", "t": "saf/çabuk kanan"}, {"e": "hostile", "t": "düşmanca"}, {"e": "impartial", "t": "tarafsız"}, {"e": "judicious", "t": "makul/mantıklı"},
        {"e": "lethargic", "t": "uyuşuk/halsiz"}, {"e": "meticulous", "t": "titiz"}, {"e": "notorious", "t": "adı çıkmış"}, {"e": "obsolete", "t": "modası geçmiş"},
        {"e": "perceptive", "t": "sezgisi kuvvetli"}, {"e": "resilient", "t": "dirençli/esnek"}, {"e": "scrupulous", "t": "dürüst/titiz"}, {"e": "tenacious", "t": "azimle yapışan"},
        {"e": "versatile", "t": "çok yönlü"}, {"e": "wary", "t": "temkinli"}, {"e": "zealous", "t": "hevesli/istekli"}, {"e": "vulnerable", "t": "savunmasız"},
        // Akademik Bağlaçlar & Zarflar
        {"e": "furthermore", "t": "dahası/üstelik"}, {"e": "nevertheless", "t": "yine de"}, {"e": "consequently", "t": "sonuç olarak"},
        {"e": "simultaneously", "t": "eş zamanlı olarak"}, {"e": "arbitrarily", "t": "keyfi olarak"}, {"e": "inevitably", "t": "kaçınılmaz olarak"},
        {"e": "presumably", "t": "muhtemelen"}, {"e": "scarcely", "t": "neredeyse hiç"}, {"e": "subsequently", "t": "sonradan"}, {"e": "virtually", "t": "neredeyse/sanal olarak"},
        {"e": "incidentally", "t": "bu arada/tesadüfen"}, {"e": "merely", "t": "yalnızca/sadece"}, {"e": "notably", "t": "özellikle"}, {"e": "precisely", "t": "tam olarak"},
        // İş & Finans & Strateji
        {"e": "acquisition", "t": "edinim/kazanç"}, {"e": "collateral", "t": "teminat"}, {"e": "deficit", "t": "açık (bütçe vb.)"},
        {"e": "feasibility", "t": "uygulanabilirlik"}, {"e": "infrastructure", "t": "altyapı"}, {"e": "leverage", "t": "güç kullanmak/kaldıraç"},
        {"e": "merger", "t": "birleşme"}, {"e": "negotiate", "t": "müzakere etmek"}, {"e": "revenue", "t": "gelir/hasılat"}, {"e": "subsidiary", "t": "bağlı ortaklık"},
        {"e": "bankrupt", "t": "iflas etmiş"}, {"e": "dividend", "t": "kar payı"}, {"e": "equity", "t": "özsermaye"}, {"e": "liability", "t": "yükümlülük"},
        // Bilim & Teknoloji & Çevre
        {"e": "biodiversity", "t": "biyoçeşitlilik"}, {"e": "catalyst", "t": "katalizör"}, {"e": "diffusion", "t": "yayılma"},
        {"e": "ecosystem", "t": "ekosistem"}, {"e": "fossil fuel", "t": "fosil yakıt"}, {"e": "greenhouse effect", "t": "sera etkisi"},
        {"e": "hypothesis", "t": "hipotez"}, {"e": "irrigation", "t": "sulama"}, {"e": "momentum", "t": "hız/ivme"}, {"e": "oxidation", "t": "oksitlenme"},
        {"e": "photosynthesis", "t": "fotosentez"}, {"e": "precipitation", "t": "yağış"}, {"e": "renewable", "t": "yenilenebilir"}, {"e": "sustainable", "t": "sürdürübilir"},
        {"e": "artificial intelligence", "t": "yapay zeka"}, {"e": "innovation", "t": "yenilik"}, {"e": "spacecraft", "t": "uzay aracı"}, {"e": "wireless", "t": "kablosuz"},
        // Soyut İsimler & Kavramlar
        {"e": "ambition", "t": "hırs/tutku"}, {"e": "conflict", "t": "çatışma"}, {"e": "consensus", "t": "fikir birliği"},
        {"e": "dignity", "t": "onur/haysiyet"}, {"e": "empathy", "t": "empati"}, {"e": "integrity", "t": "dürüstlük/bütünlük"},
        {"e": "irony", "t": "ironi"}, {"e": "metaphor", "t": "mecaz"}, {"e": "paradox", "t": "çelişki"}, {"e": "prejudice", "t": "önyargı"},
        {"e": "prosperity", "t": "refah"}, {"e": "reluctance", "t": "isteksizlik"}, {"e": "skepticism", "t": "kuşkuculuk"}, {"e": "tolerance", "t": "hoşgörü"},
        {"e": "perspective", "t": "bakış açısı"}, {"e": "validity", "t": "geçerlilik"}, {"e": "utilization", "t": "kullanım"}, {"e": "transformation", "t": "dönüşüm"}
    ],
    "7": [
        // İleri Seviye Fiiller (Kritik Eylemler)
        {"e": "accomplish", "t": "başarmak"}, {"e": "accumulate", "t": "biriktirmek"}, {"e": "adapt", "t": "uyum sağlamak"},
        {"e": "anticipate", "t": "öngörmek"}, {"e": "clarify", "t": "açıklığa kavuşturmak"}, {"e": "collaborate", "t": "iş birliği yapmak"},
        {"e": "compensate", "t": "telafi etmek"}, {"e": "comprise", "t": "oluşmak/kapsamak"}, {"e": "consolidate", "t": "birleştirmek/güçlendirmek"}, {"e": "cultivate", "t": "yetiştirmek/geliştirmek"},
        {"e": "deteriorate", "t": "kötüleşmek"}, {"e": "distinguish", "t": "ayırt etmek"}, {"e": "emphasize", "t": "vurgulamak"}, {"e": "enhance", "t": "artırmak/iyileştirmek"},
        {"e": "exaggerate", "t": "abartmak"}, {"e": "fluctuate", "t": "dalgalanmak"}, {"e": "generate", "t": "üretmek/oluşturmak"}, {"e": "implement", "t": "uygulamaya koymak"},
        {"e": "initiate", "t": "başlatmak"}, {"e": "interpret", "t": "yorumlamak"}, {"e": "justify", "t": "haklı çıkarmak"}, {"e": "manipulate", "t": "yönlendirmek/etkilemek"},
        {"e": "modify", "t": "değişiklik yapmak"}, {"e": "neglect", "t": "ihmal etmek"}, {"e": "overcome", "t": "üstesinden gelmek"}, {"e": "participate", "t": "katılmak"},
        {"e": "postpone", "t": "ertelemek"}, {"e": "predict", "t": "tahmin etmek"}, {"e": "prohibit", "t": "yasaklamak"}, {"e": "reconcile", "t": "uzlaştırmak"},
        {"e": "reinforce", "t": "pekiştirmek/takviye etmek"}, {"e": "suspend", "t": "askıya almak"}, {"e": "terminate", "t": "sonlandırmak"}, {"e": "underestimate", "t": "küçümsemek"},
        // Zıt Anlamlı Sıfat Çiftleri
        {"e": "abundant", "t": "bol/bereketli"}, {"e": "scarce", "t": "nadir/kıt"},
        {"e": "accurate", "t": "doğru/kesin"}, {"e": "ambiguous", "t": "belirsiz"},
        {"e": "ancient", "t": "antik/kadim"}, {"e": "contemporary", "t": "çağdaş/modern"},
        {"e": "broad", "t": "geniş"}, {"e": "narrow", "t": "dar"},
        {"e": "complex", "t": "karmaşık"}, {"e": "straightforward", "t": "basit/doğrudan"},
        {"e": "crucial", "t": "çok önemli"}, {"e": "trivial", "t": "önemsiz"},
        {"e": "diverse", "t": "çeşitli"}, {"e": "uniform", "t": "tek tip"},
        {"e": "flexible", "t": "esnek"}, {"e": "rigid", "t": "sert/katı"},
        {"e": "genuine", "t": "hakiki/gerçek"}, {"e": "counterfeit", "t": "sahte"},
        {"e": "humble", "t": "mütevazı"}, {"e": "arrogant", "t": "kibirli"},
        {"e": "internal", "t": "dahili"}, {"e": "external", "t": "harici"},
        {"e": "lenient", "t": "hoşgörülü/yumuşak"}, {"e": "strict", "t": "katı/sert"},
        {"e": "permanent", "t": "kalıcı"}, {"e": "temporary", "t": "geçici"},
        {"e": "plausible", "t": "akla yatkın"}, {"e": "implausible", "t": "inanılmaz/mantıksız"},
        {"e": "reluctant", "t": "isteksiz"}, {"e": "eager", "t": "hevesli"},
        {"e": "stable", "t": "istikrarlı"}, {"e": "unstable", "t": "dengesiz"},
        // Modern Teknoloji & Veri
        {"e": "algorithm", "t": "algoritma"}, {"e": "authentication", "t": "kimlik doğrulama"}, {"e": "backup", "t": "yedekleme"},
        {"e": "bandwidth", "t": "bant genişliği"}, {"e": "cloud computing", "t": "bulut bilişim"}, {"e": "cybersecurity", "t": "siber güvenlik"},
        {"e": "data mining", "t": "veri madenciliği"}, {"e": "encryption", "t": "şifreleme"}, {"e": "interface", "t": "arayüz"}, {"e": "malware", "t": "kötü amaçlı yazılım"},
        {"e": "optimization", "t": "optimizasyon"}, {"e": "protocol", "t": "protokol"}, {"e": "resolution", "t": "çözünürlük"}, {"e": "server", "t": "sunucu"},
        {"e": "software", "t": "yazılım"}, {"e": "hardware", "t": "donanım"}, {"e": "subscription", "t": "abonelik"}, {"e": "user-friendly", "t": "kullanıcı dostu"},
        {"e": "virtual reality", "t": "sanal gerçeklik"}, {"e": "wireless", "t": "kablosuz"}, {"e": "firewall", "t": "güvenlik duvarı"}, {"e": "database", "t": "veritabanı"},
        // Havacılık, Seyahat & Lojistik
        {"e": "accommodation", "t": "konaklama"}, {"e": "boarding pass", "t": "biniş kartı"}, {"e": "customs", "t": "gümrük"},
        {"e": "departure", "t": "kalkış/ayrılış"}, {"e": "destination", "t": "varış yeri"}, {"e": "itinerary", "t": "seyahat planı"},
        {"e": "luggage", "t": "bagaj"}, {"e": "passenger", "t": "yolcu"}, {"e": "reservation", "t": "rezervasyon"}, {"e": "terminal", "t": "terminal"},
        {"e": "transportation", "t": "ulaşım"}, {"e": "vessel", "t": "gemi/tekne"}, {"e": "cargo", "t": "kargo"}, {"e": "delay", "t": "gecikme"},
        {"e": "expedition", "t": "keşif gezisi"}, {"e": "insurance", "t": "sigorta"}, {"e": "visa", "t": "vize"}, {"e": "currency", "t": "para birimi"},
        // Soyut & Akademik Terimler
        {"e": "abstract", "t": "soyut/özet"}, {"e": "bias", "t": "önyargı/taraflılık"}, {"e": "cohesion", "t": "uyum/bağlılık"},
        {"e": "contradiction", "t": "çelişki"}, {"e": "correlation", "t": "ilişki/korelasyon"}, {"e": "dimension", "t": "boyut"},
        {"e": "ethics", "t": "etik/ahlak"}, {"e": "framework", "t": "çerçeve/yapı"}, {"e": "hierarchy", "t": "hiyerarşi"}, {"e": "hypothesis", "t": "hipotez"},
        {"e": "incidence", "t": "oran/vaka"}, {"e": "infrastructure", "t": "altyapı"}, {"e": "insight", "t": "içgörü"}, {"e": "instance", "t": "örnek/durum"},
        {"e": "interaction", "t": "etkileşim"}, {"e": "layer", "t": "katman"}, {"e": "margin", "t": "kenar/pay"}, {"e": "notion", "t": "kavram/düşünce"},
        {"e": "objective", "t": "hedef/nesnel"}, {"e": "paradigm", "t": "paradigma/model"}, {"e": "perspective", "t": "bakış açısı"}, {"e": "portion", "t": "porsiyon/bölüm"},
        {"e": "priority", "t": "öncelik"}, {"e": "proportion", "t": "oran/orantı"}, {"e": "pursuit", "t": "peşinden koşma"}, {"e": "ratio", "t": "oran"},
        {"e": "scheme", "t": "şema/tasarı"}, {"e": "scope", "t": "kapsam"}, {"e": "sequence", "t": "sıralama"}, {"e": "shift", "t": "vites/değişim"},
        {"e": "status", "t": "statü/durum"}, {"e": "subsidy", "t": "devlet desteği"}, {"e": "sustainable", "t": "sürdürülebilir"}, {"e": "target", "t": "hedef"},
        {"e": "transition", "t": "geçiş"}, {"e": "trend", "t": "eğilim"}, {"e": "undertake", "t": "üstlenmek"}, {"e": "validity", "t": "geçerlilik"}
    ],
    "8": [
        // Psikoloji & Kişilik (Derinlemesine)
        {"e": "subconscious", "t": "bilinçaltı"}, {"e": "introvert", "t": "içe dönük"}, {"e": "extrovert", "t": "dışa dönük"},
        {"e": "narcissistic", "t": "narsist"}, {"e": "cognitive", "t": "bilişsel"}, {"e": "behavioral", "t": "davranışsal"},
        {"e": "trauma", "t": "travma"}, {"e": "resilience", "t": "dayanıklılık/esneklik"}, {"e": "empathy", "t": "empati"}, {"e": "sympathy", "t": "acıma/sempati"},
        {"e": "anxiety", "t": "kaygı/endişe"}, {"e": "depression", "t": "depresyon"}, {"e": "obsession", "t": "takıntı"}, {"e": "perception", "t": "algı"},
        {"e": "motivation", "t": "motivasyon"}, {"e": "instinct", "t": "içgüdü"}, {"e": "habit", "t": "alışkanlık"}, {"e": "temperament", "t": "mizaç"},
        {"e": "self-esteem", "t": "özsaygı"}, {"e": "consciousness", "t": "bilinç"},
        // Yönetim & Stratejik Liderlik
        {"e": "supervise", "t": "denetlemek"}, {"e": "delegate", "t": "yetki devretmek"}, {"e": "collaborate", "t": "iş birliği yapmak"},
        {"e": "implement", "t": "uygulamak"}, {"e": "evaluate", "t": "değerlendirmek"}, {"e": "optimize", "t": "en iyilemek"},
        {"e": "strategic", "t": "stratejik"}, {"e": "innovation", "t": "yenilikçilik"}, {"e": "entrepreneur", "t": "girişimci"}, {"e": "leadership", "t": "liderlik"},
        {"e": "negotiation", "t": "müzakere"}, {"e": "compromise", "t": "uzlaşma"}, {"e": "consensus", "t": "fikir birliği"}, {"e": "efficiency", "t": "verimlilik"},
        {"e": "productivity", "t": "üretkenlik"}, {"e": "deadline", "t": "son teslim tarihi"}, {"e": "objective", "t": "hedef"}, {"e": "benchmark", "t": "kıyaslama"},
        {"e": "outsourcing", "t": "dış kaynak kullanımı"}, {"e": "sustainability", "t": "sürdürülebilirlik"},
        // Çevre, Enerji & Doğa Bilimleri
        {"e": "conservation", "t": "koruma (doğa)"}, {"e": "pollution", "t": "kirlilik"}, {"e": "renewable", "t": "yenilenebilir"},
        {"e": "emission", "t": "emisyon/yayılım"}, {"e": "biodiversity", "t": "biyoçeşitlilik"}, {"e": "ecosystem", "t": "ekosistem"},
        {"e": "agriculture", "t": "tarım"}, {"e": "deforestation", "t": "ormansızlaşma"}, {"e": "contamination", "t": "bulaşma/kirlenme"}, {"e": "extinction", "t": "nesli tükenme"},
        {"e": "habitat", "t": "doğal ortam"}, {"e": "solar energy", "t": "güneş enerjisi"}, {"e": "wind turbine", "t": "rüzgar türbini"}, {"e": "fossil fuel", "t": "fosil yakıt"},
        {"e": "global warming", "t": "küresel ısınma"}, {"e": "climate change", "t": "iklim değişikliği"}, {"e": "ozone layer", "t": "ozon tabakası"}, {"e": "waste management", "t": "atık yönetimi"},
        {"e": "resource", "t": "kaynak"}, {"e": "ecology", "t": "ekoloji"},
        // Medya, İletişim & Sosyoloji
        {"e": "broadcast", "t": "yayın yapmak"}, {"e": "censorship", "t": "sansür"}, {"e": "propaganda", "t": "propaganda"},
        {"e": "stereotype", "t": "kalıpyargı"}, {"e": "prejudice", "t": "önyargı"}, {"e": "discrimination", "t": "ayrımcılık"},
        {"e": "mainstream", "t": "ana akım"}, {"e": "influencer", "t": "etkileyici kişi"}, {"e": "journalism", "t": "gazetecilik"}, {"e": "audience", "t": "izleyici kitlesi"},
        {"e": "engagement", "t": "etkileşim"}, {"e": "transparency", "t": "şeffaflık"}, {"e": "ethics", "t": "etik/ahlak"}, {"e": "diversity", "t": "çeşitlilik"},
        {"e": "globalization", "t": "küreselleşme"}, {"e": "urbanization", "t": "şehirleşme"}, {"e": "demographics", "t": "demografi"}, {"e": "migration", "t": "göç"},
        {"e": "poverty", "t": "yoksulluk"}, {"e": "welfare", "t": "refah/yardım"},
        // Hukuk, Adalet & Suç
        {"e": "attorney", "t": "avukat"}, {"e": "verdict", "t": "mahkeme kararı"}, {"e": "testimony", "t": "tanıklık"},
        {"e": "evidence", "t": "kanıt"}, {"e": "prosecutor", "t": "savcı"}, {"e": "defendant", "t": "davalı/sanık"},
        {"e": "lawsuit", "t": "dava"}, {"e": "sentence", "t": "hüküm/ceza"}, {"e": "crime", "t": "suç"}, {"e": "punishment", "t": "cezalandırma"},
        {"e": "investigation", "t": "soruşturma"}, {"e": "corruption", "t": "yolsuzluk"}, {"e": "bribery", "t": "rüşvet"}, {"e": "fraud", "t": "dolandırıcılık"},
        {"e": "witness", "t": "şahit"}, {"e": "jury", "t": "jüri"}, {"e": "justice", "t": "adalet"}, {"e": "violation", "t": "ihlal"},
        {"e": "compliance", "t": "uyumluluk"}, {"e": "regulation", "t": "düzenleme"},
        // İleri Seviye Sıfatlar (Durumsal)
        {"e": "arbitrary", "t": "keyfi"}, {"e": "comprehensive", "t": "kapsamlı"}, {"e": "drastic", "t": "şiddetli/ani"},
        {"e": "efficient", "t": "verimli"}, {"e": "feasible", "t": "uygulanabilir"}, {"e": "gradual", "t": "kademeli"},
        {"e": "inevitable", "t": "kaçınılmaz"}, {"e": "legitimate", "t": "meşru"}, {"e": "mandatory", "t": "zorunlu"}, {"e": "notable", "t": "dikkate değer"},
        {"e": "obscure", "t": "belirsiz/karanlık"}, {"e": "pervasive", "t": "yaygın"}, {"e": "redundant", "t": "gereksiz/fazla"}, {"e": "subtle", "t": "ince/hafif"},
        {"e": "tangible", "t": "somut"}, {"e": "unique", "t": "eşsiz"}, {"e": "vague", "t": "bulanık/belirsiz"}, {"e": "widespread", "t": "yaygın"},
        {"e": "yield", "t": "getiri/verim"}, {"e": "zealous", "t": "gayretli"},
        // İleri Seviye Fiiller (Akademik & Teknik)
        {"e": "accumulate", "t": "biriktirmek"}, {"e": "acknowledge", "t": "kabul etmek"}, {"e": "acquire", "t": "edinmek"},
        {"e": "advocate", "t": "savunmak"}, {"e": "allocate", "t": "tahsis etmek"}, {"e": "alter", "t": "değiştirmek"},
        {"e": "amend", "t": "düzeltmek (yasa vb.)"}, {"e": "assess", "t": "değerlendirmek"}, {"e": "attain", "t": "ulaşmak"}, {"e": "attribute", "t": "atfetmek"},
        {"e": "cease", "t": "durdurmak"}, {"e": "clarify", "t": "açıklığa kavuşturmak"}, {"e": "coincide", "t": "çakışmak"}, {"e": "commence", "t": "başlamak"},
        {"e": "compensate", "t": "telafi etmek"}, {"e": "compile", "t": "derlemek"}, {"e": "comprise", "t": "oluşmak"}, {"e": "concede", "t": "kabullenmek"},
        {"e": "conceive", "t": "tasarlamak/gebe kalmak"}, {"e": "conclude", "t": "sonuçlandırmak"}, {"e": "conduct", "t": "yürütmek"}, {"e": "confine", "t": "sınırlandırmak"},
        {"e": "consent", "t": "razı olmak"}, {"e": "constitute", "t": "oluşturmak"}, {"e": "constrain", "t": "kısıtlamak"}, {"e": "consult", "t": "danışmak"},
        {"e": "consume", "t": "tüketmek"}, {"e": "contradict", "t": "çelişmek"}, {"e": "contribute", "t": "katkıda bulunmak"}, {"e": "convene", "t": "toplanmak"},
        {"e": "convert", "t": "dönüştürmek"}, {"e": "convey", "t": "iletmek"}, {"e": "coordinate", "t": "koordine etmek"}, {"e": "correspond", "t": "haberleşmek/uymak"},
        {"e": "deduce", "t": "sonuç çıkarmak"}, {"e": "define", "t": "tanımlamak"}, {"e": "demonstrate", "t": "kanıtlamak"}, {"e": "denote", "t": "ifade etmek/simgelemek"},
        {"e": "derive", "t": "türetmek"}, {"e": "detect", "t": "tespit etmek"}, {"e": "deviate", "t": "sapmak"}, {"e": "diminish", "t": "azalmak"}
    ],
    "9": [
        // Felsefe, Mantık & Teori
        {"e": "existentialism", "t": "varoluşçuluk"}, {"e": "rationalism", "t": "akılcılık"}, {"e": "dualism", "t": "ikicilik"},
        {"e": "ethics", "t": "etik/ahlak felsefesi"}, {"e": "metaphysics", "t": "metafizik"}, {"e": "epistemology", "t": "bilgi felsefesi"},
        {"e": "paradigm", "t": "paradigma/model"}, {"e": "dogma", "t": "dogma/inanç öğretisi"}, {"e": "skepticism", "t": "kuşkuculuk"}, {"e": "nihilism", "t": "nihilizm/hiççilik"},
        {"e": "subjective", "t": "öznel"}, {"e": "objective", "t": "nesnel"}, {"e": "logic", "t": "mantık"}, {"e": "deduction", "t": "tümdengelim"},
        {"e": "induction", "t": "tümevarım"}, {"e": "premise", "t": "öncül"}, {"e": "fallacy", "t": "safsata/yanılgı"}, {"e": "contradiction", "t": "çelişki"},
        {"e": "paradox", "t": "çelişki/paradoks"}, {"e": "essence", "t": "öz/esas"},
        // İleri Teknoloji, AI & Kuantum
        {"e": "quantum computing", "t": "kuantum bilişim"}, {"e": "artificial neural network", "t": "yapay sinir ağı"}, {"e": "algorithm", "t": "algoritma"},
        {"e": "cryptography", "t": "kriptografi/şifreleme"}, {"e": "nanotechnology", "t": "nanoteknoloji"}, {"e": "biotechnology", "t": "biyoteknoloji"},
        {"e": "automation", "t": "otomasyon"}, {"e": "blockchain", "t": "blokzincir"}, {"e": "virtual reality", "t": "sanal gerçeklik"}, {"e": "augmented reality", "t": "artırılmış gerçeklik"},
        {"e": "superconductivity", "t": "süper iletkenlik"}, {"e": "data analytics", "t": "veri analitiği"}, {"e": "encryption", "t": "şifreleme"}, {"e": "cybersecurity", "t": "siber güvenlik"},
        {"e": "interoperability", "t": "birlikte çalışabilirlik"}, {"e": "scalability", "t": "ölçeklenebilirlik"}, {"e": "infrastructure", "t": "altyapı"}, {"e": "cloud native", "t": "bulut tabanlı"},
        {"e": "open source", "t": "açık kaynak"}, {"e": "machine learning", "t": "makine öğrenmesi"},
        // Uzay, Havacılık & Fizik
        {"e": "astrophysics", "t": "astrofizik"}, {"e": "gravity", "t": "yerçekimi"}, {"e": "relativity", "t": "görelilik"},
        {"e": "black hole", "t": "kara delik"}, {"e": "galaxy", "t": "galaksi"}, {"e": "nebula", "t": "bulutsu"},
        {"e": "orbit", "t": "yörünge"}, {"e": "propulsion", "t": "sevk/itme sistemi"}, {"e": "satellite", "t": "uydu"}, {"e": "telescope", "t": "teleskop"},
        {"e": "astronomy", "t": "astronomi"}, {"e": "cosmos", "t": "kozmos/evren"}, {"e": "exoplanet", "t": "ötegezegen"}, {"e": "radiation", "t": "radyasyon"},
        {"e": "thermodynamics", "t": "termodinamik"}, {"e": "friction", "t": "sürtünme"}, {"e": "velocity", "t": "hız/sürat"}, {"e": "acceleration", "t": "ivme"},
        {"e": "mass", "t": "kütle"}, {"e": "matter", "t": "madde"},
        // Edebiyat, Sanat & Kültürel Eleştiri
        {"e": "metaphor", "t": "mecaz/metafor"}, {"e": "allegory", "t": "alegori"}, {"e": "narrative", "t": "anlatı"},
        {"e": "protagonist", "t": "başkarakter"}, {"e": "antagonist", "t": "karşı karakter"}, {"e": "genre", "t": "tür"},
        {"e": "aesthetic", "t": "estetik"}, {"e": "symbolism", "t": "sembolizm"}, {"e": "irony", "t": "ironi"}, {"e": "satire", "t": "hiciv/yergi"},
        {"e": "ambiguity", "t": "belirsizlik"}, {"e": "cohesion", "t": "bağlılık/uyum"}, {"e": "eloquence", "t": "güzel konuşma"}, {"e": "interpretation", "t": "yorum"},
        {"e": "manuscript", "t": "el yazması"}, {"e": "perspective", "t": "bakış açısı"}, {"e": "relevance", "t": "ilgi/alaka"}, {"e": "rhetoric", "t": "hitabet"},
        {"e": "vivid", "t": "canlı/parlak"}, {"e": "abstract", "t": "soyut"},
        // Diplomasi, Politika & Uluslararası İlişkiler
        {"e": "sovereignty", "t": "egemenlik"}, {"e": "diplomacy", "t": "diplomasi"}, {"e": "treaty", "t": "antlaşma"},
        {"e": "sanction", "t": "yaptırım"}, {"e": "embargo", "t": "ambargo"}, {"e": "negotiation", "t": "müzakere"},
        {"e": "alliance", "t": "ittifak"}, {"e": "ambassador", "t": "büyükelçi"}, {"e": "bureaucracy", "t": "bürokrasi"}, {"e": "legislation", "t": "mevzuat"},
        {"e": "ratification", "t": "onaylama"}, {"e": "referendum", "t": "referandum"}, {"e": "jurisdiction", "t": "yargı yetkisi"}, {"e": "policy", "t": "politika"},
        {"e": "ideology", "t": "ideoloji"}, {"e": "corruption", "t": "yolsuzluk"}, {"e": "democracy", "t": "demokrasi"}, {"e": "autocracy", "t": "otokrasi"},
        {"e": "civilization", "t": "uygarlık"}, {"e": "republic", "t": "cumhuriyet"},
        // İleri Seviye Fiiller (Karmaşık Aksiyonlar)
        {"e": "corroborate", "t": "doğrulamak/teyit etmek"}, {"e": "exacerbate", "t": "kötüleştirmek/şiddetlendirmek"}, {"e": "mitigate", "t": "hafifletmek/azaltmak"},
        {"e": "scrutinize", "t": "titizlikle incelemek"}, {"e": "articulate", "t": "net bir şekilde ifade etmek"}, {"e": "facilitate", "t": "kolaylaştırmak"},
        {"e": "undermine", "t": "baltalamak/zayıflatmak"}, {"e": "contemplate", "t": "derin derin düşünmek"}, {"e": "advocate", "t": "savunmak"}, {"e": "alleviate", "t": "hafifletmek (acı vb.)"},
        {"e": "coincide", "t": "çakışmak/aynı ana denk gelmek"}, {"e": "deduce", "t": "sonuç çıkarmak"}, {"e": "depict", "t": "betimlemek"}, {"e": "deviate", "t": "sapmak"},
        {"e": "distort", "t": "çarpıtmak"}, {"e": "elicit", "t": "ortaya çıkarmak/sağlamak"}, {"e": "emphasize", "t": "vurgulamak"}, {"e": "embody", "t": "somutlaştırmak"},
        {"e": "empower", "t": "güçlendirmek/yetkilendirmek"}, {"e": "envisage", "t": "öngörmek"}, {"e": "eradicate", "t": "kökünü kazımak"}, {"e": "evoke", "t": "çağrıştırmak"},
        {"e": "fluctuate", "t": "dalgalanmak"}, {"e": "hinder", "t": "engellemek"}, {"e": "illuminate", "t": "aydınlatmak"}, {"e": "implement", "t": "uygulamak"},
        {"e": "infer", "t": "çıkarım yapmak"}, {"e": "inhibit", "t": "engellemek/kısıtlamak"}, {"e": "initiate", "t": "başlatmak"}, {"e": "integrate", "t": "bütünleştirmek"},
        {"e": "mediate", "t": "arabuluculuk etmek"}, {"e": "modify", "t": "değiştirmek"}, {"e": "notify", "t": "bildirmek"}, {"e": "obstruct", "t": "engellemek"},
        {"e": "perpetuate", "t": "sürdürmek/ölümsüzleştirmek"}, {"e": "preside", "t": "başkanlık etmek"}, {"e": "proclaim", "t": "ilan etmek"}, {"e": "rectify", "t": "düzeltmek"},
        {"e": "reinforce", "t": "pekiştirmek"}, {"e": "relinquish", "t": "vazgeçmek/bırakmak"}, {"e": "repudiate", "t": "reddetmek/tanımamak"}, {"e": "sanction", "t": "onaylamak/yaptırım uygulamak"},
        {"e": "stipulate", "t": "şart koşmak"}, {"e": "surpass", "t": "aşmak/geride bırakmak"}, {"e": "sustain", "t": "sürdürmek"}, {"e": "transform", "t": "dönüştürmek"},
        {"e": "utilize", "t": "faydalanmak"}, {"e": "validate", "t": "doğrulamak"}, {"e": "verify", "t": "teyit etmek"}, {"e": "withstand", "t": "dayanmak/karşı koymak"},
        // İleri Seviye Sıfatlar (Üst Düzey Niteleme)
        {"e": "comprehensive", "t": "kapsamlı"}, {"e": "discreet", "t": "tedbirli/ketum"}, {"e": "exquisite", "t": "zarif/mükemmel"},
        {"e": "formidable", "t": "zorlu/dişli"}, {"e": "idiosyncratic", "t": "nev-i şahsına münhasır"}, {"e": "impeccable", "t": "kusursuz"},
        {"e": "indispensable", "t": "vazgeçilmez"}, {"e": "inherent", "t": "doğasında olan"}, {"e": "intricate", "t": "karmaşık"}, {"e": "lucid", "t": "berrak/anlaşılır"},
        {"e": "ostentatious", "t": "gösterişli"}, {"e": "paramount", "t": "en önemli/üstün"}, {"e": "pervasive", "t": "yaygın"}, {"e": "plausible", "t": "akla yatkın"},
        {"e": "profound", "t": "derin/bilgece"}, {"e": "redundant", "t": "gereksiz/fazla"}, {"e": "sporadic", "t": "aralıklı/tek tük"}, {"e": "stringent", "t": "sıkı/katı"},
        {"e": "subtle", "t": "ince/hafif"}, {"e": "superficial", "t": "yüzeysel"}, {"e": "tangible", "t": "somut"}, {"e": "unanimous", "t": "oy birliğiyle"},
        {"e": "unprecedented", "t": "eşi benzeri görülmemiş"}, {"e": "versatile", "t": "çok yönlü"}, {"e": "volatile", "t": "uçucu/istikrarsız"}, {"e": "widespread", "t": "yaygın"},
        {"e": "arbitrary", "t": "keyfi"}, {"e": "benevolent", "t": "hayırsever"}, {"e": "candid", "t": "samimi/içten"}, {"e": "diligent", "t": "çalışkan"},
        {"e": "eccentric", "t": "eksantrik/tuhaf"}, {"e": "feasible", "t": "uygulanabilir"}, {"e": "gullible", "t": "saf/çabuk kanan"}, {"e": "holistic", "t": "bütünsel"},
        {"e": "imminent", "t": "eli kulağında"}, {"e": "judicious", "t": "makul/mantıklı"}, {"e": "kinetic", "t": "hareketli"}, {"e": "lethargic", "t": "uyuşuk/halsiz"},
        {"e": "meticulous", "t": "titiz"}, {"e": "negligible", "t": "ihmal edilebilir"}, {"e": "obsolete", "t": "modası geçmiş"}, {"e": "pragmatic", "t": "uygulamacı/pragmatik"}
    ],
    "10": [
        // Üst Düzey Deyimler & Kalıplar (Idioms)
        {"e": "a blessing in disguise", "t": "gizli lütuf (kötü görünen iyi durum)"}, {"e": "beat around the bush", "t": "lafı dolandırmak"}, {"e": "bite the bullet", "t": "dişini sıkmak/zorluğa katlanmak"},
        {"e": "break the ice", "t": "buzları eritmek"}, {"e": "burn the midnight oil", "t": "gece gündüz çalışmak"}, {"e": "cut corners", "t": "kolaya kaçmak/masraftan kaçmak"},
        {"e": "get out of hand", "t": "çığırından çıkmak"}, {"e": "hit the nail on the head", "t": "tam üstüne basmak"}, {"e": "once in a blue moon", "t": "kırk yılda bir"}, {"e": "piece of cake", "t": "çocuk oyuncağı"},
        {"e": "under the weather", "t": "halsiz/keyifsiz"}, {"e": "spill the beans", "t": "baklayı ağzından çıkarmak"}, {"e": "take it with a grain of salt", "t": "ihtiyatla karşılamak"}, {"e": "barking up the wrong tree", "t": "yanlış kapıyı çalmak"},
        {"e": "cry over spilt milk", "t": "olmuşla ölmüşe yanmak"}, {"e": "every cloud has a silver lining", "t": "her şer de bir hayır vardır"}, {"e": "kill two birds with one stone", "t": "bir taşla iki kuş vurmak"}, {"e": "let the cat out of the bag", "t": "sırrı ifşa etmek"},
        {"e": "miss the boat", "t": "fırsatı kaçırmak"}, {"e": "the last straw", "t": "bardağı taşıran son damla"},
        // Tıp, Anatomi & Sağlık Bilimleri
        {"e": "anesthesia", "t": "anestezi"}, {"e": "antibiotic", "t": "antibiyotik"}, {"e": "artery", "t": "atar damar"}, {"e": "vein", "t": "toplar damar"},
        {"e": "cardiovascular", "t": "kalp ve damar"}, {"e": "chronic", "t": "kronik/müzmin"}, {"e": "diagnosis", "t": "teşhis"}, {"e": "immune system", "t": "bağışıklık sistemi"},
        {"e": "infection", "t": "enfeksiyon"}, {"e": "inflammation", "t": "iltihap"}, {"e": "metabolism", "t": "metabolizma"}, {"e": "neurology", "t": "nöroloji"},
        {"e": "prescription", "t": "reçete"}, {"e": "symptom", "t": "belirti"}, {"e": "vaccination", "t": "aşılama"}, {"e": "surgery", "t": "ameliyat/cerrahi"},
        {"e": "therapy", "t": "terapi"}, {"e": "rehabilitation", "t": "rehabilitasyon"}, {"e": "pathology", "t": "patoloji"}, {"e": "genetics", "t": "genetik"},
        // Mühendislik, İnşaat & İmalat
        {"e": "blueprint", "t": "ozalit/taslak"}, {"e": "infrastructure", "t": "altyapı"}, {"e": "maintenance", "t": "bakım"}, {"e": "specification", "t": "şartname/özellik"},
        {"e": "prototype", "t": "prototip"}, {"e": "raw material", "t": "hammadde"}, {"e": "production line", "t": "üretim hattı"}, {"e": "efficiency", "t": "verimlilik"},
        {"e": "durability", "t": "dayanıklılık"}, {"e": "corrosion", "t": "korozyon/aşınma"}, {"e": "automation", "t": "otomasyon"}, {"e": "quality control", "t": "kalite kontrol"},
        {"e": "reinforcement", "t": "takviye/güçlendirme"}, {"e": "mechanics", "t": "mekanik"}, {"e": "precision", "t": "hassasiyet/kesinlik"}, {"e": "tolerance", "t": "tolerans/pay"},
        {"e": "structure", "t": "yapı"}, {"e": "ventilation", "t": "havalandırma"}, {"e": "welding", "t": "kaynak yapma"}, {"e": "utility", "t": "fayda/hizmet"},
        // Modern Küresel Sorunlar & Çevre
        {"e": "sustainability", "t": "sürdürülebilirlik"}, {"e": "carbon footprint", "t": "karbon ayak izi"}, {"e": "deforestation", "t": "ormansızlaşma"}, {"e": "renewable energy", "t": "yenilenebilir enerji"},
        {"e": "climate resilience", "t": "iklim direnci"}, {"e": "pollution", "t": "kirlilik"}, {"e": "conservation", "t": "doğa koruma"}, {"e": "overpopulation", "t": "aşırı nüfus"},
        {"e": "famine", "t": "kıtlık"}, {"e": "sanitation", "t": "hijyen/sanitasyon"}, {"e": "inequality", "t": "eşitsizlik"}, {"e": "poverty line", "t": "yoksulluk sınırı"},
        {"e": "human rights", "t": "insan hakları"}, {"e": "refugee crisis", "t": "mülteci krizi"}, {"e": "urbanization", "t": "şehirleşme"}, {"e": "biodiversity", "t": "biyoçeşitlilik"},
        {"e": "ecosystem", "t": "ekosistem"}, {"e": "toxic waste", "t": "toksik atık"}, {"e": "scarcity", "t": "kıtlık/eksiklik"}, {"e": "endangered species", "t": "nesli tehlikedeki türler"},
        // Arkaik, Edebi & Şiirsel Kelimeler
        {"e": "alas", "t": "heyhat/ne yazık ki"}, {"e": "bewilder", "t": "şaşırtmak/sersemletmek"}, {"e": "cherish", "t": "değer vermek/el üstünde tutmak"}, {"e": "dwelling", "t": "konut/mesken"},
        {"e": "enchant", "t": "büyülemek"}, {"e": "fathom", "t": "kavramak/anlamak"}, {"e": "gloomy", "t": "kasvetli/karamsar"}, {"e": "hitherto", "t": "şimdiye kadar"},
        {"e": "immemorial", "t": "çok eski/hatırlanmayan"}, {"e": "jest", "t": "şaka/latife"}, {"e": "kinship", "t": "akrabalık"}, {"e": "lament", "t": "ağıt yakmak/yas tutmak"},
        {"e": "melancholy", "t": "melankoli/hüzün"}, {"e": "noble", "t": "soylu/asil"}, {"e": "obscure", "t": "belirsiz/gizli"}, {"e": "peril", "t": "tehlike"},
        {"e": "quaint", "t": "antika/garip ve çekici"}, {"e": "solitude", "t": "yalnızlık"}, {"e": "tranquil", "t": "huzurlu/sakin"}, {"e": "utter", "t": "tam/mutlak/dile getirmek"},
        // İleri Seviye Zarflar & Bağlaçlar
        {"e": "accordingly", "t": "dolayısıyla/uygun şekilde"}, {"e": "consequently", "t": "sonuç olarak"}, {"e": "henceforth", "t": "bundan böyle"}, {"e": "nevertheless", "t": "yine de"},
        {"e": "notwithstanding", "t": "rağmen/yine de"}, {"e": "subsequently", "t": "sonradan"}, {"e": "simultaneously", "t": "eş zamanlı olarak"}, {"e": "virtually", "t": "neredeyse/sanal olarak"},
        {"e": "incidentally", "t": "bu arada/tesadüfen"}, {"e": "primarily", "t": "öncelikle"}, {"e": "relatively", "t": "nispeten"}, {"e": "specifically", "t": "özellikle"},
        {"e": "ultimately", "t": "nihayetinde"}, {"e": "scarcely", "t": "neredeyse hiç"}, {"e": "abruptly", "t": "aniden"}, {"e": "accurately", "t": "doğru bir şekilde"},
        {"e": "deliberately", "t": "kasten"}, {"e": "exclusively", "t": "sadece/özel olarak"}, {"e": "inevitably", "t": "kaçınılmaz olarak"}, {"e": "presumably", "t": "muhtemelen"},
        // Üst Düzey Fiiller (Master)
        {"e": "abstain", "t": "çekimser kalmak/sakınmak"}, {"e": "adhere", "t": "bağlı kalmak/yapışmak"}, {"e": "allocate", "t": "tahsis etmek"}, {"e": "amend", "t": "düzeltmek/değiştirmek"},
        {"e": "appraise", "t": "değer biçmek"}, {"e": "ascertain", "t": "aslını öğrenmek/belirlemek"}, {"e": "assimilate", "t": "özümsemek"}, {"e": "augment", "t": "artırmak/çoğaltmak"},
        {"e": "collaborate", "t": "iş birliği yapmak"}, {"e": "commence", "t": "başlamak"}, {"e": "concede", "t": "kabullenmek/itiraf etmek"}, {"e": "conciliate", "t": "gönlünü almak/uzlaştırmak"},
        {"e": "condone", "t": "göz yummak/affetmek"}, {"e": "conspire", "t": "komplo kurmak"}, {"e": "contemplate", "t": "derin düşünmek"}, {"e": "curtail", "t": "kısıtlamak/azaltmak"},
        {"e": "depict", "t": "betimlemek"}, {"e": "deter", "t": "caydırmak"}, {"e": "deviate", "t": "sapmak"}, {"e": "diffuse", "t": "yaymak/dağıtmak"},
        {"e": "disseminate", "t": "yaymak (bilgi vb.)"}, {"e": "divert", "t": "yönünü değiştirmek"}, {"e": "elicit", "t": "ortaya çıkarmak"}, {"e": "emancipate", "t": "özgür bırakmak"},
        {"e": "encompass", "t": "kapsamak/kuşatmak"}, {"e": "endorse", "t": "onaylamak/desteklemek"}, {"e": "envisage", "t": "öngörmek/hayal etmek"}, {"e": "evoke", "t": "çağrıştırmak"},
        {"e": "exacerbate", "t": "şiddetlendirmek/kötüleştirmek"}, {"e": "exemplify", "t": "örneklemek"}, {"e": "facilitate", "t": "kolaylaştırmak"}, {"e": "fluctuate", "t": "dalgalanmak"},
        {"e": "foster", "t": "teşvik etmek/beslemek"}, {"e": "hinder", "t": "engellemek"}, {"e": "illuminate", "t": "aydınlatmak"}, {"e": "implement", "t": "uygulamak"},
        {"e": "induce", "t": "ikna etmek/tetiklemek"}, {"e": "infringe", "t": "ihlal etmek"}, {"e": "inhibit", "t": "engellemek/dizginlemek"}, {"e": "initiate", "t": "başlatmak"},
        {"e": "integrate", "t": "bütünleştirmek"}, {"e": "intervene", "t": "müdahale etmek"}, {"e": "intimidate", "t": "gözdağı vermek"}, {"e": "invoke", "t": "başvurmak/çağırmak"},
        {"e": "liberate", "t": "serbest bırakmak"}, {"e": "manipulate", "t": "yönlendirmek"}, {"e": "mitigate", "t": "hafifletmek/azaltmak"}, {"e": "negate", "t": "geçersiz kılmak"},
        {"e": "nurture", "t": "beslemek/eğitmek"}, {"e": "obligate", "t": "zorunlu kılmak"}, {"e": "obscure", "t": "gizlemek/bulandırmak"}, {"e": "offset", "t": "dengelemek"},
        {"e": "overhaul", "t": "revizyon yapmak"}, {"e": "perpetuate", "t": "sürdürmek"}, {"e": "persuade", "t": "ikna etmek"}, {"e": "ponder", "t": "üzerine kafa yormak"},
        {"e": "precede", "t": "önce gelmek"}, {"e": "proclaim", "t": "ilan etmek"}, {"e": "propagate", "t": "yaymak/üretmek"}, {"e": "provoke", "t": "kışkırtmak"},
        {"e": "reconcile", "t": "uzlaştırmak"}, {"e": "rectify", "t": "düzeltmek"}, {"e": "refute", "t": "çürütmek (iddia vb.)"}, {"e": "reinforce", "t": "pekiştirmek"},
        {"e": "relinquish", "t": "vazgeçmek"}, {"e": "reproach", "t": "sitem etmek/suçlamak"}, {"e": "repudiate", "t": "reddetmek/tanımamak"}, {"e": "scrutinize", "t": "dikkatle incelemek"},
        {"e": "stipulate", "t": "şart koşmak"}, {"e": "subsidize", "t": "desteklemek (mali)"}, {"e": "surpass", "t": "aşmak/geçmek"}, {"e": "sustain", "t": "sürdürmek"},
        {"e": "terminate", "t": "sonlandırmak"}, {"e": "thrive", "t": "gelişmek/serpilmek"}, {"e": "undermine", "t": "baltalamak/zayıflatmak"}, {"e": "undertake", "t": "üstlenmek"},
        {"e": "uphold", "t": "desteklemek/onaylamak"}, {"e": "utilize", "t": "faydalanmak"}, {"e": "validate", "t": "doğrulamak"}, {"e": "verify", "t": "teyit etmek"},
        {"e": "waive", "t": "feragat etmek"}, {"e": "withstand", "t": "dayanmak/direnmek"}, {"e": "yield", "t": "vermek/sağlamak/teslim olmak"}, {"e": "advocate", "t": "savunmak"}
    ]
};

// levelPool verileri burada en üstte olmalıdır.

let learnedWords = JSON.parse(localStorage.getItem("learnedWords")) || {1:[],2:[],3:[],4:[],5:[],6:[],7:[],8:[],9:[],10:[]};
let completedLevels = JSON.parse(localStorage.getItem("completedLevels")) || [];
let coins = parseInt(localStorage.getItem("coins")) || 0;
let stats = JSON.parse(localStorage.getItem("gameStats")) || { totalAttempts: 0, totalCorrect: 0 };
let wrongWords = JSON.parse(localStorage.getItem("wrongWords")) || {1:[],2:[],3:[],4:[],5:[],6:[],7:[],8:[],9:[],10:[]};

let currentLevel = 1, currentWord = null, gameMode = 'normal';
let timerInterval = null, currentStreak = 0, sessionErrors = {};

window.onload = () => { updateUI(); showLandingMenu(); };

function updateUI() {
    document.getElementById("total-badges").innerText = completedLevels.length;
    document.getElementById("coin-count").innerText = coins;
    let totalWrong = 0;
    Object.values(wrongWords).forEach(arr => totalWrong += (arr || []).length);
    document.getElementById("repeat-count").innerText = totalWrong > 0 ? `${totalWrong} Kelime Var` : "Hata Yok";
    if(document.getElementById("hint-btn")) document.getElementById("hint-btn").disabled = (coins < 10);
}

function showLandingMenu() {
    stopTimer();
    document.getElementById("landing-menu").style.display = "block";
    document.getElementById("main-menu").style.display = "none";
    document.getElementById("game-area").style.display = "none";
    document.getElementById("sub-nav-levels").style.display = "none";
    document.getElementById("hint-btn").style.display = "none";
    document.getElementById("streak-badge").style.display = "none";
    document.getElementById("timer-display").style.display = "none";
    updateUI();
}

function openMode(mode) {
    gameMode = mode;
    document.getElementById("landing-menu").style.display = "none";
    document.getElementById("main-menu").style.display = "block";
    document.getElementById("sub-nav-levels").style.display = "block";
    const titles = { 'normal': 'Klasik Seviyeler', 'timed': 'Zamana Karşı', 'repeat': 'Tekrar Modu' };
    document.getElementById("current-mode-title").innerText = titles[mode];
    renderLevelList();
}

function backToLevels() {
    stopTimer();
    document.getElementById("game-area").style.display = "none";
    document.getElementById("main-menu").style.display = "block";
    document.getElementById("sub-nav-levels").style.display = "block";
    document.getElementById("timer-display").style.display = "none";
    renderLevelList();
}

function renderLevelList() {
    const list = document.getElementById("level-list");
    list.innerHTML = "";
    for(let i = 1; i <= 10; i++) {
        const card = document.createElement("div");
        card.className = "level-card";
        let isLocked = i > 1 && !completedLevels.includes(i - 1) && gameMode !== 'repeat';
        let solvedCount = (learnedWords[i] || []).length;
        let targetCount = i * 20;
        let percentage = Math.round((solvedCount / targetCount) * 100);

        if(gameMode === 'repeat') {
            let count = (wrongWords[i] || []).length;
            card.innerHTML = `<h3>Aşama ${i}</h3><small>${count} Kelime</small>`;
            if(count > 0) card.onclick = () => startLevel(i);
            else card.style.opacity = "0.3";
        } else {
            card.style.opacity = isLocked ? "0.4" : "1";
            card.innerHTML = `
                <div class="level-card-header"><h3>Aşama ${i}</h3><span class="perc-text">${percentage}%</span></div>
                <div class="mini-progress-bg"><div class="mini-progress-fill" style="width: ${percentage}%"></div></div>
                <small>${solvedCount} / ${targetCount}</small>
                ${!isLocked ? `<button class="reset-level-btn-text" onclick="event.stopPropagation(); resetSpecificLevel(${i})">Aşamayı Sıfırla</button>` : ''}
            `;
            if(!isLocked) card.onclick = () => startLevel(i);
        }
        list.appendChild(card);
    }
}

function startLevel(id) {
    currentLevel = id; currentStreak = 0; sessionErrors = {};
    document.getElementById("main-menu").style.display = "none";
    document.getElementById("game-area").style.display = "block";
    document.getElementById("play-screen").style.display = "block";
    document.getElementById("finish-screen").style.display = "none";
    document.getElementById("timer-display").style.display = gameMode === 'timed' ? "flex" : "none";
    document.getElementById("streak-badge").style.display = "flex";
    document.getElementById("hint-btn").style.display = "flex";
    document.getElementById("streak-count").innerText = "0";
    updateProgressUI();
}

function newQuestion() {
    stopTimer();
    let pool = (gameMode === 'repeat') ? 
        levelPool[currentLevel].filter(w => (wrongWords[currentLevel] || []).includes(w.e)) :
        levelPool[currentLevel].filter(w => !(learnedWords[currentLevel] || []).includes(w.e));

    if(pool.length === 0) { finishLevel(); return; }
    currentWord = pool[Math.floor(Math.random() * pool.length)];
    document.getElementById("word").innerText = currentWord.e;
    
    let options = [currentWord.t];
    let others = levelPool[currentLevel].filter(w => w.t !== currentWord.t).map(w => w.t);
    while(options.length < 4 && others.length > 0) options.push(others.splice(Math.floor(Math.random() * others.length), 1)[0]);
    options.sort(() => Math.random() - 0.5);

    const container = document.getElementById("options-container");
    container.innerHTML = "";
    options.forEach(opt => {
        const btn = document.createElement("button");
        btn.className = "opt-btn"; btn.innerText = opt;
        btn.onclick = () => checkAnswer(opt, btn);
        container.appendChild(btn);
    });
    if(gameMode === 'timed') startTimer();
}

function checkAnswer(ans, btn) {
    stopTimer();
    if (!currentWord) return;
    stats.totalAttempts++;
    if(ans === currentWord.t) {
        if(btn) btn.classList.add('correct');
        stats.totalCorrect++; currentStreak++;
        if(gameMode === 'repeat') {
            wrongWords[currentLevel] = wrongWords[currentLevel].filter(e => e !== currentWord.e);
        } else {
            if(!learnedWords[currentLevel].includes(currentWord.e)) {
                learnedWords[currentLevel].push(currentWord.e);
                // DÜZENLENEN SATIR BURASI:
                coins += 1;
            }
        }
        saveData();
        updateUI();
        setTimeout(() => { updateProgressUI(); }, 600);
    } else {
        if(btn) btn.classList.add('wrong');
        currentStreak = 0;
        if(gameMode !== 'repeat') {
            sessionErrors[currentWord.e] = (sessionErrors[currentWord.e] || 0) + 1;
            if(sessionErrors[currentWord.e] >= 2) {
                if(!wrongWords[currentLevel].includes(currentWord.e)) wrongWords[currentLevel].push(currentWord.e);
            }
        }
        saveData();
        setTimeout(newQuestion, 800);
    }
    document.getElementById("streak-count").innerText = currentStreak;
}

function updateProgressUI() {
    let target = (gameMode === 'repeat') ? (wrongWords[currentLevel] || []).length : (currentLevel * 20);
    let solved = (learnedWords[currentLevel] || []).length;
    if(gameMode === 'repeat') {
        document.getElementById("progress-bar").style.width = "100%";
        document.getElementById("progress-text").innerText = `Kalan: ${target}`;
        if(target === 0) finishLevel(); else newQuestion();
    } else {
        document.getElementById("progress-bar").style.width = (solved/target)*100 + "%";
        document.getElementById("progress-text").innerText = `${solved}/${target}`;
        if(solved >= target) finishLevel(); else newQuestion();
    }
}

function finishLevel() {
    document.getElementById("game-area").style.display = "none";
    if(gameMode === 'repeat') {
        openMode('repeat'); 
    } else {
        document.getElementById("game-area").style.display = "block";
        document.getElementById("play-screen").style.display = "none";
        document.getElementById("finish-screen").style.display = "block";
        document.getElementById("hint-btn").style.display = "none";
        document.getElementById("streak-badge").style.display = "none";
        document.getElementById("timer-display").style.display = "none";
        if(!completedLevels.includes(currentLevel)) completedLevels.push(currentLevel);
    }
    saveData();
}

function resetSpecificLevel(levelId) {
    if(confirm(`Aşama ${levelId} ilerlemesi sıfırlanacak. Onaylıyor musunuz?`)) {
        learnedWords[levelId] = [];
        saveData();
        renderLevelList();
    }
}

function resetAndRetry() {
    learnedWords[currentLevel] = [];
    saveData();
    startLevel(currentLevel);
}

function saveData() {
    localStorage.setItem("learnedWords", JSON.stringify(learnedWords));
    localStorage.setItem("completedLevels", JSON.stringify(completedLevels));
    localStorage.setItem("coins", JSON.stringify(coins));
    localStorage.setItem("gameStats", JSON.stringify(stats));
    localStorage.setItem("wrongWords", JSON.stringify(wrongWords));
}

function startTimer() {
    let timeLeft = 10;
    document.getElementById("time-left").innerText = timeLeft;
    timerInterval = setInterval(() => {
        timeLeft--;
        document.getElementById("time-left").innerText = timeLeft;
        if(timeLeft <= 0) { stopTimer(); checkAnswer('SÜRE BİTTİ', null); }
    }, 1000);
}

function stopTimer() { if(timerInterval) clearInterval(timerInterval); }
function speakWord() { if(currentWord) { const msg = new SpeechSynthesisUtterance(currentWord.e); msg.lang = 'en-US'; window.speechSynthesis.speak(msg); } }

function useHint() {
    if(coins >= 10 && currentWord) {
        const btns = Array.from(document.querySelectorAll('.opt-btn'));
        const wrongBtns = btns.filter(b => b.innerText !== currentWord.t && b.style.visibility !== 'hidden');
        if(wrongBtns.length >= 2) {
            coins -= 10;
            saveData();
            updateUI();
            wrongBtns.sort(() => Math.random() - 0.5).slice(0, 2).forEach(b => {
                b.classList.add('hidden-hint');
            });
        }
    }
}