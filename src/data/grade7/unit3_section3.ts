import { SectionContent } from '../../types';

export const unit3Section3: SectionContent = {
  code: "7.3.3",
  title: "Enerji Dönüşümleri ve Sürtünme Kuvveti",
  unitCode: "7.3",
  unitTitle: "3. Ünite: Kuvvet ve Enerji",
  summary: "Kinetik enerji (kütle ve sürat ilişkisi), potansiyel enerji (çekim ve esneklik potansiyel enerjisi), enerjinin korunumu kanunu, mekanik enerji dönüşümleri (sarkaç, lunapark treni), sürtünme kuvvetinin kinetik enerjiyi ısıya dönüştürmesi, hava ve su direnci.",
  kazanimlar: [
    "F.7.3.3.1. Kinetik ve potansiyel enerji türlerinin birbirine dönüşümünden hareketle enerjinin korunduğu sonucunu çıkarır.",
    "F.7.3.3.2. Sürtünme kuvvetinin kinetik enerji üzerindeki etkisini açıklar.",
    "F.7.3.3.3. Hava ve su direncinin etkilerini azaltmaya veya artırmaya yönelik tasarımları irdeler."
  ],
  hatirlayalim: {
    text: "Enerji yoktan var edilemez, var olan enerji de yok edilemez; sadece bir türden başka bir türe dönüşür (Enerjinin Korunumu Kanunu).",
    keyPoints: [
      "Kinetik Enerji (Ek): Hareket halindeki cisimlerin sahip olduğu enerjidir. Cismin kütlesine ve süratine bağlıdır. Sürat arttıkça kinetik enerji çok daha hızlı artar.",
      "Çekim Potansiyel Enerjisi (Ep): Cisimlerin konumundan (yüksekliğinden) dolayı depoladığı enerjidir. Cismin kütlesine ve yerden yüksekliğine bağlıdır.",
      "Esneklik Potansiyel Enerjisi: Gerilmiş veya sıkıştırılmış yay, ok yayı gibi esnek cisimlerde depolanan enerjidir.",
      "Mekanik Enerji: Kinetik enerji ile potansiyel enerjinin toplamıdır (Em = Ek + Ep). Sürtünmesiz ortamda daima sabittir.",
      "Sürtünme Kuvveti: Kinetik enerjinin bir kısmını veya tamamını ısı, ses ve ışık enerjisine dönüştürür."
    ]
  },
  onDegerlendirme: [
    {
      id: "od-7-3-3-1",
      question: "Balkondan aşağı düşen bir topun yere çarpana kadar kinetik ve potansiyel enerjisi nasıl değişir?",
      answer: "Top aşağı düştükçe yüksekliği azaldığı için çekim potansiyel enerjisi azalır; hızlandığı (sürati arttığı) için kinetik enerjisi artar. Potansiyel enerji kinetik enerjiye dönüşür."
    },
    {
      id: "od-7-3-3-2",
      question: "Bir sarkaç serbest bırakıldığında sonsuza kadar sallanmaz, zamanla yavaşlayıp durur. Enerji yok mu olmuştur?",
      answer: "Hayır! Enerji asla yok olmaz. Sarkacın mekanik enerjisi hava sürtünmesi ve ipin sürtünmesi sebebiyle yavaş yavaş ısı ve ses enerjisine dönüşmüştür."
    }
  ],
  hazirlik: {
    question: "Hızlı giden bir araba aniden sert fren yaptığında lastiklerden duman çıkmasının ve yolun ısınmasının sebebi nedir?",
    answer: "Arabanın sahip olduğu devasa hareket (kinetik) enerjisi, tekerlek ile asfalt arasındaki sürtünme kuvveti sayesinde aniden ısı enerjisine dönüşür."
  },
  merak: {
    question: "Atmosfere giren devasa meteorlar neden gökyüzünde akkor halinde parlayıp kül olur?",
    answer: "Uzaydan saatte on binlerce kilometre süratle atmosfere giren meteor, yoğun hava molekülleriyle şiddetli sürtünmeye girer. Muazzam kinetik enerjisi sürtünmeyle binlerce derecelik ısı ve ışık enerjisine dönüşür."
  },
  kopru: {
    title: "Kâinattaki Kusursuz Tasarruf: Enerji Kanunu",
    content: "Güneş'ten gelen ışık enerjisi bitkilerde kimyasal enerjiye, bitkileri yiyen canlılarda kinetik enerjiye ve ısıya dönüşür. Evren devasa bir enerji dönüşüm tezgahıdır; bir tek joule bile israf edilmez ve kaybolmaz.",
    question: "Milyarlarca yıldır trilyonlarca dönüşüm gerçekleşirken hiçbir enerjinin kaybolmaması neyi ispatlar?",
    answer: "Kâinatı her zerresinde 'israfsızlık' ve mutlak tasarruf ilkesiyle yaratan El-Hakîm ve El-Adl olan Yaratıcı'nın nizamını ispatlar."
  },
  // MEB DERS KİTABI DETAYLI KONU ANLATIMI, TABLOLAR, BAĞLANTI NOKTALARI VE HABERLER
  konuAnlatimi: {
    ozet: "Kinetik enerji (hareket enerjisi) ve potansiyel enerji (çekim ve esneklik) mekanik enerjiyi oluşturur. Enerjinin Korunumu Kanunu'na göre enerji yoktan var edilemez, var olan enerji de yok olamaz; sadece bir türden diğerine dönüşür. Sürtünmesiz ortamlarda kinetik ve potansiyel enerji birbirine dönüşürken mekanik enerji sabit kalır. Gerçek hayatta ise sürtünme kuvveti (hava ve su direnci dahil) kinetik enerjinin bir kısmını ısı, ses ve ışık enerjisine dönüştürerek mekanik enerjiyi azaltır.",
    kavramlar: [
      {
        terim: "Kinetik Enerji (Ek)",
        tanim: "Hareket hâlindeki cisimlerin süratlerinden dolayı sahip olduğu enerjidir.",
        onemliNoktalar: [
          "Cismin kütlesine bağlıdır: Kütlesi büyük olan cismin kinetik enerjisi daha fazladır (Doğru orantılı).",
          "Cismin süratine bağlıdır: Sürati artan cismin kinetik enerjisi çok daha büyük oranda artar (Süratin karesiyle orantılıdır).",
          "Örnek: Aynı süratle giden bir tırın kinetik enerjisi, bir motosikletinkinden kat kat fazladır. Kütleleri eşit iki araçtan hızlı olanın kinetik enerjisi daha büyüktür."
        ]
      },
      {
        terim: "Çekim Potansiyel Enerjisi (Ep)",
        tanim: "Cisimlerin bulundukları yükseklik ve yer çekimi kuvveti nedeniyle depoladıkları enerjidir.",
        onemliNoktalar: [
          "Cismin ağırlığına (kütlesine) bağlıdır: Ağırlık arttıkça çekim potansiyel enerjisi artar.",
          "Cismin yerden yüksekliğine bağlıdır: Yükseklik arttıkça çekim potansiyel enerjisi artar.",
          "Örnek: Masadaki bir kitap ile yerdeki kitap kıyaslandığında masadaki kitabın Ep'si fazladır; 3. kattaki saksının Ep'si 1. kattakinden büyüktür."
        ]
      },
      {
        terim: "Esneklik Potansiyel Enerjisi",
        tanim: "Esnek cisimlerin sıkıştırılması veya gerilmesi sonucu depoladıkları potansiyel enerjidir.",
        onemliNoktalar: [
          "Yayın cinsine (kalınlığı, sertliği / yay sabiti) ve yayın sıkışma veya uzama miktarına bağlıdır.",
          "Örnek: Gerilmiş bir ok yayı, sıkıştırılmış yaylı zıpzıp veya gerilmiş sapan lastiği esneklik potansiyel enerjisi depolar."
        ]
      },
      {
        terim: "Enerjinin Korunumu ve Dönüşümü (Mekanik Enerji)",
        tanim: "Mekanik enerji, bir cismin kinetik enerjisi ile potansiyel enerjisinin toplamıdır (Em = Ek + Ep).",
        onemliNoktalar: [
          "Sürtünmesiz bir ortamda mekanik enerji daima sabittir.",
          "Tepeden aşağı yuvarlanan bir topta: Yükseklik azaldıkça çekim potansiyel enerjisi azalır; azalan potansiyel enerji kinetik enerjiye dönüşerek topun hızını artırır.",
          "Yukarı fırlatılan bir topta: Hız azaldıkça kinetik enerji azalır; kinetik enerji çekim potansiyel enerjisine dönüşür.",
          "Lunapark Treni (Roller Coaster): En yüksek tepede Ep maksimum, Ek sıfırdır; en alt çukurda Ek maksimum, Ep minimumdur."
        ]
      },
      {
        terim: "Sürtünme Kuvveti ve Enerji Kaybı (Isıya Dönüşüm)",
        tanim: "Temas hâlindeki yüzeyler arasında cismin hareketini zorlaştıran ve daima hareket yönüne zıt olan kuvvettir.",
        onemliNoktalar: [
          "Kinetik enerjiyi ısı, ses ve ışık enerjisine dönüştürür. Bu yüzden sürtünmeli yüzeylerde kayan cisimler yavaşlayıp durur; yüzey ısınır.",
          "Hava Direnci: Havadaki moleküllerin cisimlerin hareketine karşı uyguladığı sürtünme kuvvetidir.",
          "Su Direnci: Su moleküllerinin uyguladığı sürtünme kuvvetidir; hava direncine göre çok daha büyüktür."
        ]
      }
    ],
    tablolar: [
      {
        baslik: "Günlük Yaşamda ve Teknolojide Sürtünmeyi Artırma ve Azaltma Yöntemleri Tablosu",
        sutunlar: ["Uygulama Alanı", "Uygulanan Tasarım / Yöntem", "Sürtünmeye Etkisi", "Amaçlanan Hedef"],
        satirlar: [
          ["Havacılık (Uçaklar, Hızlı Trenler)", "Gövde ve burnun sivri (aerodinamik) yapılması", "Hava direncini azaltır", "Hızı artırmak ve yakıt tasarrufu sağlamak"],
          ["Paraşütçülük", "Geniş yüzeyli kumaş paraşüt açılması", "Hava direncini artırır", "Kinetik enerjiyi düşürerek güvenli yumuşak iniş sağlamak"],
          ["Deniz Araçları (Gemiler, Denizaltılar)", "Ön kısmın V şeklinde (hidrodinamik) yapılması", "Su direncini azaltır", "Suyun sürtünmesini yararak rahatça ilerlemek"],
          ["Kış Şartlarında Araçlar", "Lastiklere zincir takılması, kış lastiği dişleri", "Yol sürtünmesini artırır", "Buzda kaymayı önlemek ve güvenli frenleme sağlamak"],
          ["Makineler ve Motor Parçaları", "Motor yağı ve bilyeli rulman kullanılması", "Yüzey sürtünmesini azaltır", "Aşınmayı önlemek ve enerji kaybını engellemek"],
          ["Kış Sporları (Kayak ve Paten)", "Kayakların altının özel mumla cilalanması", "Kar sürtünmesini azaltır", "Daha hızlı ve akıcı kayış sağlamak"]
        ],
        dipnot: "* Önemli: Sürtünme kuvveti olmasaydı yürüyemez, fren yapamaz, yazı yazamaz ve hiçbir nesneyi elimizde tutamazdık!"
      }
    ]
  },
  // MEB KİTABINDAKİ BAĞLANTI NOKTALARI
  baglantiNoktalari: [
    {
      id: "bn-7-3-5",
      baslik: "Uzay Teknolojisi Bağlantısı: Atmosfere Giriş ve Isı Kalkanları",
      alan: "Uzay Mühendisliği & Aerotermodinamik",
      aciklama: "Dünya yörüngesindeki görevini tamamlayıp geri dönen uzay kapsülleri atmosfere saatte yaklaşık 28.000 kilometre gibi akıl almaz bir süratle girer. Kapsülün önündeki hava molekülleri sıkışarak devasa bir hava sürtünmesi oluşturur.",
      soru: "Kapsülün kinetik enerjisi hava sürtünmesiyle neye dönüşür ve astronotlar bu cehennem sıcağından nasıl korunur?",
      cevap: "Kapsülün kinetik enerjisi sürtünme sebebiyle 1600 °C'yi aşan kavurucu ısı ve ışık enerjisine dönüşür. Kapsülün altı özel ısı emici seramik karolarla (ısı kalkanı) kaplanarak astronotların güvenle iniş yapması sağlanır."
    },
    {
      id: "bn-7-3-6",
      baslik: "Biyoloji ve Biyotaklit Bağlantısı: Shinkansen Hızlı Treni ve Yalıçapkını Kuşu",
      alan: "Biyotaklit (Biomimikri) & Aerodinamik",
      aciklama: "Japonya'da hızlı trenler tünellere girdiğinde havanın sıkışması sonucu tünel çıkışında bomba patlaması gibi ses dalgaları oluşuyordu. Mühendis Eiji Nakatsu, havadan suya dalarken tek bir su damlası bile sıçratmayan yalıçapkını kuşunun uzun ve sivri gagasını inceledi.",
      soru: "Hızlı trenin burnunun yalıçapkını gagası gibi tasarlanması hava direncini ve enerji tüketimini nasıl etkilemiştir?",
      cevap: "Trenin sivri burun tasarımı hava direncini %30 azaltmış, tünel çıkışındaki patlama sesini tamamen kesmiş ve trenin %10 daha hızlı gitmesini sağlarken elektrik tüketimini %15 düşürmüştür."
    }
  ],
  // MEB KİTABINDAKİ GÜNCEL HABERLER
  haberler: [
    {
      id: "hbr-7-3-3",
      baslik: "Formula 1 Teknolojisinde KERS Devrimi: Fren Isısından Elektrik Üretimi",
      kaynak: "FIA Formula 1 Teknik Bülteni & Popüler Bilim",
      tarih: "2023",
      ozet: "Formula 1 yarış arabaları saatte 300 km hızla viraja yaklaşırken fren yaptığında karbon disk frenler 1000 °C sıcaklığa kadar kızarır ve muazzam bir kinetik enerji sürtünmeyle ısıya dönüşüp boşa giderdi. Mühendisler KERS (Kinetik Enerji Geri Kazanım Sistemi) geliştirerek frenleme anındaki sürtünme enerjisini elektrik jeneratörleri vasıtasıyla lityum pillere depoladılar. Pilotlar düzlüğe çıktığında bir düğmeye basarak depolanan bu enerjiyi anlık 160 beygir ekstra hızlandırma gücü olarak kullanmaktadır.",
      soru: "KERS sistemi enerjinin korunumu ve dönüşümü kanununu nasıl doğrular?",
      cevap: "Normalde tekerleklerde ısı olarak çevreye kaybolacak olan kinetik enerji yok edilmemiş; elektrik enerjisine, oradan kimyasal pil enerjisine ve son olarak tekrar motorda kinetik enerjiye dönüştürülmüştür."
    }
  ],
  // MEB KİTABINDAKİ KONTROL NOKTALARI
  kontrolNoktalari: [
    {
      id: "kn-7-3-5",
      baslik: "Kontrol Noktası 1 (Kinetik ve Potansiyel Enerji Değişimi)",
      sorular: [
        {
          id: "kn-q-28",
          soru: "Yerden yukarıya doğru düşey olarak fırlatılan bir taşın tepe noktasına çıkana kadar kinetik ve çekim potansiyel enerjisi nasıl değişir?",
          tip: "coktan-secmeli",
          secenekler: [
            "A) Kinetik enerjisi sürekli artar, potansiyel enerjisi azalır.",
            "B) Kinetik enerjisi ve potansiyel enerjisi birlikte artar.",
            "C) Kinetik enerjisi ve potansiyel enerjisi birlikte azalır.",
            "D) Kinetik enerjisi giderek azalır, potansiyel enerjisi artar."
          ],
          dogruSecenek: "D",
          cevap: "D) Kinetik enerjisi giderek azalır, potansiyel enerjisi artar.",
          aciklama: "Taş yukarı çıktıkça yer çekimi sebebiyle yavaşlar (kinetik enerji azalır); yükseldikçe çekim potansiyel enerjisi artar. Kinetik enerji potansiyel enerjiye dönüşür."
        },
        {
          id: "kn-q-29",
          soru: "Kütleleri sırasıyla 1000 kg ve 2000 kg olan iki otomobil aynı 90 km/h süratle giderken hangisinin kinetik enerjisi daha büyüktür? Neden?",
          tip: "klasik",
          cevap: "2000 kg kütleli otomobilin kinetik enerjisi daha büyüktür (2 katıdır).",
          aciklama: "Süratleri eşit olan cisimlerden kütlesi büyük olanın kinetik enerjisi kütlesiyle doğru orantılı olarak daha fazladır."
        }
      ]
    },
    {
      id: "kn-7-3-6",
      baslik: "Kontrol Noktası 2 (Sürtünme ve Enerjinin Korunumu)",
      sorular: [
        {
          id: "kn-q-30",
          soru: "Aşağıdakilerden hangisi sürtünme kuvvetini AZALTMAYA yönelik bir uygulamadır?",
          tip: "coktan-secmeli",
          secenekler: [
            "A) Bisiklet ve makine dişlilerinin düzenli yağlanması",
            "B) Karlı yollarda araç lastiklerine zincir takılması",
            "C) Paraşütçülerin geniş yüzeyli hava paraşütü açması",
            "D) Futbolcuların krampon tabanlarına sivri çivi konması"
          ],
          dogruSecenek: "A",
          cevap: "A) Bisiklet ve makine dişlilerinin düzenli yağlanması",
          aciklama: "Yağlama işlemi yüzey pürüzlerini doldurarak sürtünmeyi ve aşınmayı azaltır. Diğerleri ise sürtünmeyi artırır."
        }
      ]
    }
  ],
  // BİLGİ BANKASI KUTULARI
  bilgiBankasi: [
    {
      id: "bb-7-3-4",
      baslik: "Kayan Yıldızlar Aslında Yıldız Değildir: Meteor Yanması",
      icerik: "Geceleri gökyüzünde kaydığını gördüğümüz 'yıldızlar' gerçekte yıldız değil; Dünya atmosferine saatte 70.000 kilometre süratle dalan çakıl taşı büyüklüğündeki gök taşlarıdır (meteor). Bu akıl almaz hızdaki kinetik enerji hava direnciyle sürtünerek binlerce derecelik akkor hâle gelir ve saniyeler içinde yanıp kül olur.",
      onemliNot: "Atmosferin bu hava sürtünmesi kalkanı olmasaydı yeryüzüne her gün milyonlarca gök taşı kurşun gibi yağardı."
    }
  ],
  // MEB KİTABINDAKİ PERFORMANS GÖREVİ
  performansGorevi: {
    baslik: "Farklı Yüzey Alanlı Paraşütlerle Hava Direnci ve Enerji Dönüşümü Deneyi",
    amac: "Çöp poşeti, ip ve oyuncak bir figür kullanarak küçük ve büyük yüzeyli iki paraşüt tasarlamak; hava direncinin düşme süresine ve yere çarpma kinetik enerjisine etkisini kronometre ile ölçmek.",
    surecAdimlari: [
      "İnce çöp poşetinden kenarları 20 cm x 20 cm (küçük) ve 50 cm x 50 cm (büyük) olan iki kare parça kesiniz.",
      "Köşelerine eşit uzunlukta ipler bağlayarak her ikisinin ucuna aynı kütledeki oyuncak ağırlığı sabitleyiniz.",
      "Aynı yükseklikten (örneğin 2 metre yüksekten) paraşütleri sırayla serbest bırakarak yere düşme sürelerini cep telefonu kronometresiyle ölçüp kaydediniz.",
      "Geniş yüzeyli paraşütün neden daha yavaş düştüğünü hava sürtünmesi ve potansiyel-kinetik enerji dönüşümü açısından açıklayan bir deney posteri hazırlayınız."
    ],
    beklenenUrun: "Çalışır durumda iki farklı Paraşüt Modeli ve 'Hava Direnci Hayat Kurtarır' deney tablosu.",
    degerlendirmeKriterleri: [
      "Paraşüt yüzey alanları arasındaki farkın belirgin olması ve kütlelerin eşit tutulması",
      "Düşme sürelerinin hassas ölçülüp tabloya işlenmesi",
      "Hava direncinin kinetik enerjiyi sınırlandırdığının bilimsel olarak açıklanması",
      "Deney raporunun görsel ve bilimsel kalitesi"
    ]
  },
  // MEB KİTABI NELER ÖĞRENDİK BÖLÜMÜ SORULARI VE MAARİF ÇÖZÜMLERİ
  nelerOgrenildiSorulari: [
    {
      id: "no-7-3-9",
      soru: "1. Kinetik enerji ile çekim potansiyel enerjisinin bağlı olduğu değişkenleri maddeler hâlinde yazınız.",
      cevap: "Kinetik Enerji: 1. Cismin kütlesine, 2. Cismin süratine bağlıdır. Çekim Potansiyel Enerjisi: 1. Cismin ağırlığına (kütlesine), 2. Cismin yerden yüksekliğine bağlıdır.",
      detayliCozum: "Kinetik enerji hareketin enerjisidir (kütle ve süratle artar); potansiyel enerji ise konumun enerjisidir (kütle ve yükseklikle artar)."
    },
    {
      id: "no-7-3-10",
      soru: "2. Enerjinin Korunumu Kanunu'nu bir sarkaç veya lunapark treni örneği üzerinden açıklayınız.",
      cevap: "Enerji yoktan var edilemez, var olan enerji de yok olamaz; sadece tür değiştirir. Lunapark treni en tepedeyken maksimum çekim potansiyel enerjisine sahiptir. Aşağı inerken potansiyel enerji azalır, kinetik enerjiye dönüşür ve en dipte sürat maksimum olur. Toplam mekanik enerji (Ek + Ep) sürtünmesiz ortamda daima sabittir.",
      detayliCozum: "Kinetik enerji azaldığında potansiyel enerji aynı miktarda artar; toplam enerji hiçbir zaman bir joule bile eksilmez."
    },
    {
      id: "no-7-3-11",
      soru: "3. Sürtünme kuvveti hareket halindeki bir cismin kinetik enerjisini hangi enerji türlerine dönüştürür? Günlük yaşamdan iki örnek veriniz.",
      cevap: "Sürtünme kuvveti kinetik enerjiyi ısı, ses ve ışık enerjisine dönüştürür. Örnek 1: Hızlı fren yapan araba lastiklerinin ve asfaltın aşırı ısınıp duman ve ses çıkarması. Örnek 2: Avuçlarımızı birbirine hızlıca sürttüğümüzde ellerimizin sürtünmeyle ısınması.",
      detayliCozum: "Cismin yavaşlayıp durması enerjinin yok olduğu anlamına gelmez; mekanik enerji sürtünmeyle termal (ısı) enerjiye dönüşerek çevreye yayılmıştır."
    },
    {
      id: "no-7-3-12",
      soru: "4. Günlük yaşamda sürtünme kuvvetini; a) Artırmaya yönelik iki örnek, b) Azaltmaya yönelik iki örnek yazınız.",
      cevap: "a) Artırmaya Yönelik: 1. Kışın araç lastiklerine zincir takılması veya kış lastiği kullanılması, 2. Paraşütçülerin geniş yüzeyli kumaş paraşüt açması (ayrıca haltercilerin eline pudra sürmesi). b) Azaltmaya Yönelik: 1. Makine dişlilerinin ve kapı menteşelerinin yağlanması, 2. Hızlı tren ve yarış arabalarının aerodinamik (sivri burunlu) tasarlanması.",
      detayliCozum: "Sürtünmeyi artırmak kaymayı önleyip güvenliği sağlar; azaltmak ise hız kazanmayı ve yakıt/enerji tasarrufunu sağlar."
    }
  ],
  hikmetStages: [
    {
      stage: 1,
      name: "1. Varlığı Tanıt",
      concept: "Kinetik ve Potansiyel Dansı",
      text: "Kinetik enerji hareketin coşkusu, potansiyel enerji ise sabırla bekleyen gizli güçtür.",
      analogies: ["Gerilmiş yaydaki sabır (potansiyel) ile fırlayan okun hızı (kinetik)."]
    },
    {
      stage: 2,
      name: "2. Parçalarını Göster",
      concept: "Dönüşüm Merdiveni",
      text: "Yukarı fırlatılan taşın kinetik enerjisi tepe noktasında tamamen potansiyel enerjiye dönüşür, aşağı inerken tekrar kinetiğe döner.",
      analogies: ["Kum saatinin bir hazneden diğerine akması gibi mekanik enerji korunur."]
    },
    {
      stage: 3,
      name: "3. Ölçü ve Düzen",
      concept: "Sürtünme ve Isı",
      text: "Sürtünme enerjiyi yok etmez, onu çevreye ısı olarak paylaştırır.",
      questionToPonder: "Sürtünme kuvveti olmasaydı fren yapabilir miydik, yoksa kayarak duramaz mıydık?"
    }
  ],
  etkinlikler: [
    {
      id: "etk-7-3-3",
      title: "Rampa ve Farklı Zeminlerde Sürtünme ve Enerji Dönüşümü",
      type: "Deney ve Karşılaştırma",
      materials: ["Oyuncak araba", "Eğimli ahşap rampa", "Zımpara kağıdı", "Cam yüzey", "Halı/Kumaş parçası", "Metre"],
      steps: [
        "Rampanın en tepesinden arabayı serbest bırakınız (başlangıçta sadece çekim potansiyel enerjisi vardır).",
        "Rampanın bittiği yere sırasıyla cam, ahşap, halı ve zımpara kağıdı sererek arabanın durana kadar aldığı mesafeyi ölçünüz."
      ],
      questions: [
        {
          qId: "q-7-3-3-1",
          label: "1. Soru",
          prompt: "Araba hangi zeminde en uzağa gitti ve neden?",
          answer: "Cam yüzeyde en uzağa gitti; çünkü camın sürtünme katsayısı en düşüktür ve kinetik enerjinin ısıya dönüşüm hızı en azdır."
        }
      ]
    }
  ],
  bilgiIstasyonlari: [
    {
      title: "Lunapark Hızlı Trenleri (Roller Coaster) Mühendisliği",
      scientistOrMission: "Mekanik Enerji Dönüşümü Uygulaması",
      description: "Roller coaster vagonlarının motoru sadece ilk tepeye tırmanışta çalışır. İlk tepeden sonraki tüm taklalar, inişler ve çıkışlar potansiyel ve kinetik enerjinin birbirine dönüşümüyle gerçekleşir.",
      hikmetNote: "Tabiatın fizik kanunlarını akılla anlayıp eğlenceli ve güvenli teknolojilere dönüştürme sanatı."
    }
  ],
  dda: {
    id: "dda-7-3-3",
    statement: "Sürtünmesiz bir ortamda serbest düşmeye bırakılan cismin mekanik enerjisi sürekli artar.",
    correctDecision: "Y",
    reason: "Sürtünmesiz ortamda mekanik enerji daima sabittir (korunur). Potansiyel enerji azalırken kinetik enerji aynı oranda artar, toplam değişmez.",
    ifTrue: { exit: 1, isCorrect: false, feedback: "Hatalı karar! Mekanik enerji artmaz, sabit kalır." },
    ifFalse: { exit: 2, isCorrect: true, feedback: "Tebrikler! Mekanik enerjinin korunduğunu doğru kavradınız." }
  },
  biliyorumAnliyorumDusunuyorum: {
    biliyorum: "Kinetik enerji kütle ve sürate; potansiyel enerji kütle ve yüksekliğe bağlıdır; sürtünme mekanik enerjiyi ısıya dönüştürür.",
    anliyorum: "Hava direnci paraşütçülerin güvenle yere inmesini sağlarken, uçak ve hızlı trenlerde yakıt tasarrufu için azaltılmaya çalışılır.",
    dusunuyorum: "Kâinatta hiçbir enerjinin yok olmaması gibi, insanın hayatta sarf ettiği hiçbir gayret ve iyilik de zayi olmaz; mutlaka bir güzelliğe dönüşür."
  },
  pekistirmeIstasyonu: {
    stationTitle: "Neler Öğrendik? & 7. Sınıf 3. Ünite 3. Pekiştirme İstasyonu (Enerji Dönüşümleri ve Sürtünme)",
    pageReference: "Sayfa 95 - 110",
    summaryText: "Kinetik ve potansiyel enerji dönüşümleri, mekanik enerjinin korunumu, sürtünme kuvveti, hava ve su direnci.",
    targetSkills: ["Enerji dönüşümlerini modeller ve sürtünmenin enerjiye etkisini açıklar."]
  },
  fillInBlanks: [
    {
      id: "fib-7-3-3-1",
      number: 1,
      baglam: "Hareket eden tüm varlıkların süratinden ve kütlesinden dolayı sahip olduğu enerji türüdür.",
      soruKoku: "Hareket enerjisine diğer adıyla .................................... enerji denir.",
      blankAnswer: "Kinetik",
      acceptableAnswers: ["kinetik", "Kinetik"],
      explanation: "Kinetik enerji hareket enerjisidir.",
      wordBankHint: ["Kinetik", "Potansiyel", "Nükleer", "Kimyasal"]
    },
    {
      id: "fib-7-3-3-2",
      number: 2,
      baglam: "Yerden yüksekte bulunan cisimlerin depoladığı yer çekimi kaynaklı enerjidir.",
      soruKoku: "Yükseklikten kaynaklanan enerjiye .................................... potansiyel enerjisi denir.",
      blankAnswer: "Çekim",
      acceptableAnswers: ["çekim", "Çekim", "yer çekimi"],
      explanation: "Çekim potansiyel enerjisi Ep = mgh'dir.",
      wordBankHint: ["Çekim", "Esneklik", "Sürtünme", "Manyetik"]
    },
    {
      id: "fib-7-3-3-3",
      number: 3,
      baglam: "Gerilen yay veya paket lastiğinde depolanan enerji türüdür.",
      soruKoku: "Sıkıştırılmış veya gerilmiş yaylarda .................................... potansiyel enerjisi depolanır.",
      blankAnswer: "Esneklik",
      acceptableAnswers: ["esneklik", "Esneklik"],
      explanation: "Yaylarda esneklik potansiyeli bulunur.",
      wordBankHint: ["Esneklik", "Kinetik", "Çekim", "Işık"]
    },
    {
      id: "fib-7-3-3-4",
      number: 4,
      baglam: "Kinetik enerji ile potansiyel enerjinin toplamına verilen addır.",
      soruKoku: "Kinetik ve potansiyel enerjinin toplamına .................................... enerji denir.",
      blankAnswer: "Mekanik",
      acceptableAnswers: ["mekanik", "Mekanik"],
      explanation: "Mekanik enerji = Kinetik + Potansiyel.",
      wordBankHint: ["Mekanik", "Elektrik", "Isı", "Ses"]
    },
    {
      id: "fib-7-3-3-5",
      number: 5,
      baglam: "Sürtünmesiz bir ortamda kinetik ve potansiyel enerjilerin toplamı olan mekanik enerji sabit kalır.",
      soruKoku: "Sürtünmesiz ortamda toplam mekanik enerji daima .................................... (korunur/azalır).",
      blankAnswer: "Korunur",
      acceptableAnswers: ["korunur", "sabittir", "Korunur"],
      explanation: "Enerji korunumu temel yasadır.",
      wordBankHint: ["Korunur", "Azalır", "Artar", "Yok olur"]
    },
    {
      id: "fib-7-3-3-6",
      number: 6,
      baglam: "Sürtünme kuvveti hareket enerjisini sıcaklığa dönüştürür.",
      soruKoku: "Sürtünme kuvveti kinetik enerjiyi .................................... enerjisine dönüştürür.",
      blankAnswer: "Isı",
      acceptableAnswers: ["ısı", "Isı"],
      explanation: "Sürtünmeyle ısı açığa çıkar.",
      wordBankHint: ["Isı", "Nükleer", "Kimyasal", "Yer çekimi"]
    },
    {
      id: "fib-7-3-3-7",
      number: 7,
      baglam: "Havanın cisimlerin hareketine karşı gösterdiği zorluğa ve sürtünmeye hava direnci denir.",
      soruKoku: "Havadaki sürtünme kuvvetine hava .................................... adı verilir.",
      blankAnswer: "Direnci",
      acceptableAnswers: ["direnci", "direnç", "Direnci"],
      explanation: "Hava direnci havada sürtünmedir.",
      wordBankHint: ["Direnci", "Basıncı", "Ağırlığı", "Hacmi"]
    },
    {
      id: "fib-7-3-3-8",
      number: 8,
      baglam: "Aynı süratle giden bir kamyon ile bir motosikletten kütlesi büyük olanın kinetik enerjisi daha fazladır.",
      soruKoku: "Süratleri eşit cisimlerden kütlesi büyük olanın kinetik enerjisi daha ....................................dır.",
      blankAnswer: "Fazla",
      acceptableAnswers: ["fazla", "büyük", "Fazla"],
      explanation: "Kinetik enerji kütleyle doğru orantılıdır.",
      wordBankHint: ["Fazla", "Az", "Eşit", "Sıfır"]
    },
    {
      id: "fib-7-3-3-9",
      number: 9,
      baglam: "Paraşütlerin yüzey alanı genişletilerek hava direnci artırılır ve güvenli iniş sağlanır.",
      soruKoku: "Paraşütlerin geniş yüzeyli yapılmasının sebebi hava direncini .................................... (artırmak/azaltmak)tır.",
      blankAnswer: "Artırmak",
      acceptableAnswers: ["artırmak", "artırmaktır", "Artırmak"],
      explanation: "Geniş yüzey hava direncini artırır.",
      wordBankHint: ["Artırmak", "Azaltmak", "Sıfırlamak", "Engellemek"]
    },
    {
      id: "fib-7-3-3-10",
      number: 10,
      baglam: "Balıkların ve gemilerin burun kısımlarının 'V' şeklinde (aerodinamik/hidrodinamik) tasarlanması su direncini azaltır.",
      soruKoku: "Gemilerin ve denizaltıların ucu su direncini ....................................mak için sivri tasarlanır.",
      blankAnswer: "Azalt",
      acceptableAnswers: ["azalt", "azaltmak", "Azalt"],
      explanation: "Sivri burun direnci azaltır.",
      wordBankHint: ["Azalt", "Artır", "Çarpan", "Kaldır"]
    }
  ],
  contextQuestions: [
    {
      id: "mcq-7-3-3-1",
      number: 1,
      baglam: "Bir lunaparktaki sürtünmesiz hızlı tren (roller coaster) rayı üzerinde:\n- K noktası: En yüksek tepe (yerden h yüksekliğinde, tren ilk anda hareketsiz duruyor).\n- L noktası: En alt zemin seviyesi (yer seviyesi).\n- M noktası: İkinci tepe (yerden h/2 yüksekliğinde).",
      soruKoku: "Bu trenin K, L ve M noktalarındaki kinetik enerjileri sırasıyla EK, EL ve EM olduğuna göre, bu değerler arasındaki ilişki nedir?",
      secenekler: {
        A: "EL > EM > EK (EK = 0)",
        B: "EK > EM > EL",
        C: "EK = EL = EM",
        D: "EM > EL > EK"
      },
      dogruCevap: "A",
      cozum: "K noktasında tren durduğu için sürati ve kinetik enerjisi sıfırdır (EK = 0), tüm enerji potansiyeldir. L noktasında tüm potansiyel enerji kinetiğe dönüşmüştür ve kinetik enerji maksimumdur (EL en büyük). M noktasında ise enerjinin yarısı potansiyel, yarısı kinetiktir. Dolayısıyla EL > EM > EK (EK = 0).",
      olculenKazanim: "F.7.3.3.1. Kinetik ve potansiyel enerji dönüşümünü analiz eder.",
      olculenBeceri: "Grafik ve Mekanik Muhakeme",
      kaliteAudit: {
        gercekYasamBaglami: true,
        problemDurumu: true,
        fenBilgisiBaglamaGomulu: true,
        dusunmeGerektiriyor: true,
        ezberdenUzak: true,
        gorselVeriIslevsel: true,
        soruKokuAcik: true,
        tekDogruCevap: true,
        bilimselDogruluk: true,
        seviyeUygunlugu: true,
        kalitePuani: 20
      }
    },
    {
      id: "mcq-7-3-3-2",
      number: 2,
      baglam: "Bir bilim insanı rüzgâr tünelinde iki farklı araba modelini test etmektedir:\n- 1. Araba: Köşeli, kutu şeklinde burun yapısına sahip.\n- 2. Araba: Ön kısmı sivri, eğimli ve akıcı (aerodinamik) hatlara sahip.",
      soruKoku: "Aynı süratle giden bu iki araçtan 2. arabanın daha az yakıt tüketmesinin bilimsel açıklaması aşağıdakilerden hangisidir?",
      secenekler: {
        A: "Hava direncinin azaltılması sayesinde kinetik enerjinin ısıya dönüşen kaybının azalması",
        B: "2. arabanın kütlesinin sıfır olması",
        C: "Havanın 2. arabayı arkadan itmesi",
        D: "Yer çekiminin 2. arabaya etki etmemesi"
      },
      dogruCevap: "A",
      cozum: "Aerodinamik tasarım hava direncini azaltır. Hava direnci azaldığında sürtünmeye karşı harcanan enerji azalır, kinetik enerji korunur ve araç daha az yakıt tüketir.",
      olculenKazanim: "F.7.3.3.3. Hava direncinin teknolojik tasarımlardaki etkisini açıklar.",
      olculenBeceri: "Tasarım ve Mühendislik Uygulaması",
      kaliteAudit: {
        gercekYasamBaglami: true,
        problemDurumu: true,
        fenBilgisiBaglamaGomulu: true,
        dusunmeGerektiriyor: true,
        ezberdenUzak: true,
        gorselVeriIslevsel: true,
        soruKokuAcik: true,
        tekDogruCevap: true,
        bilimselDogruluk: true,
        seviyeUygunlugu: true,
        kalitePuani: 20
      }
    }
  ]
};
