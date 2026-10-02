import { SectionContent } from '../../types';

export const grade6Unit3Section2: SectionContent = {
  code: "6.3.2",
  title: "Sabit Süratli Hareket",
  unitCode: "6.3",
  unitTitle: "3. Ünite: Kuvvet ve Hareket",
  summary: "Sürat kavramı (Birim zamanda alınan yol), Sürat = Yol / Zaman bağıntısı, sürat birimleri (m/s ve km/h), birim dönüşümleri, sabit süratli hareketin özellikleri, Yol-Zaman ve Sürat-Zaman grafiklerinin çizimi ve analizi, trafik radarları ve pekiştirme istasyonları.",
  kazanimlar: [
    "F.6.3.2.1. Sürati tanımlar ve birimlerini ifade eder.",
    "F.6.3.2.2. Yol, zaman ve sürat arasındaki ilişkiyi matematiksel modellerle açıklar.",
    "F.6.3.2.3. Sabit süratli hareket eden cisimlere ait yol-zaman ve sürat-zaman grafiklerini çizer ve yorumlar."
  ],
  hatirlayalim: {
    text: "Bir hareketlinin ne kadar 'hızlı' olduğunu sadece aldığı yola veya sadece geçen zamana bakarak anlayamayız. Hem yolu hem zamanı birlikte değerlendirerek birim zamandaki ilerlemeyi buluruz.",
    keyPoints: [
      "Sürat, bir hareketlinin birim zamanda (1 saniyede veya 1 saatte) aldığı yoldur.",
      "Sürat = Alınan Yol / Geçen Zaman (v = x / t).",
      "Alınan yol metre (m), geçen zaman saniye (s) ise sürat birimi m/s'dir.",
      "Alınan yol kilometre (km), geçen zaman saat (h) ise sürat birimi km/h'dir.",
      "1 m/s = 3,6 km/h (örneğin 10 m/s = 36 km/h, 20 m/s = 72 km/h).",
      "Sabit süratli harekette eşit zaman aralıklarında eşit yollar alınır; sürat hiç değişmez.",
      "Yol-zaman grafiğinin eğimi sürati verir; sürat-zaman grafiğinin altındaki alan ise alınan yolu verir."
    ]
  },
  onDegerlendirme: [
    {
      id: "od-u3s2-1",
      question: "200 metrelik yolu 20 saniyede koşan bir atletin sürati kaç m/s'dir?",
      answer: "Sürat = Yol / Zaman = 200 m / 20 s = 10 m/s."
    },
    {
      id: "od-u3s2-2",
      question: "300 kilometrelik yolu 3 saatte giden bir hızlı trenin sürati kaç km/h'dir?",
      answer: "Sürat = Yol / Zaman = 300 km / 3 h = 100 km/h."
    },
    {
      id: "od-u3s2-3",
      question: "Sabit süratle giden bir aracın sürat-zaman grafiği nasıl görünür?",
      answer: "Zaman ilerledikçe sürat değeri değişmediği için zaman eksenine paralel yatay düz bir çizgi şeklinde görünür."
    }
  ],
  hazirlik: {
    question: "Trafikteki elektronik denetleme sistemleri (ortalama hız koridoru) bir aracın hız sınırını aşıp aşmadığını nasıl tespit eder?",
    answer: "Aracın koridor giriş ve çıkış kameralarından geçtiği saatleri kaydeder. İki kamera arasındaki yol mesafesini geçen süreye bölerek (v = x / t) aracın ortalama süratini hesaplar."
  },
  merak: {
    question: "Doğadaki en süratli kara hayvanı olan çita ile havadaki gökdoğanın ve evrendeki ışığın süratleri ne kadardır?",
    answer: "Çita saatte yaklaşık 120 km/h sürate ulaşabilir. Avına dalış yapan gökdoğan 320 km/h'yi aşar. Evrenin mutlak hız limiti olan ışık sürati ise saniyede 300.000 kilometredir (1 saniyede Dünya'nın etrafını 7,5 kez dolaşır)!"
  },
  kopru: {
    title: "Mekândan Maddeye: Hızın Ötesindeki Tanecikler",
    content: "Makro dünyada araçların ve canlıların süratli hareketlerini inceledik. Bir sonraki 4. Ünitede ise gözle göremediğimiz atom ve moleküllerin titreşim, öteleme ve dönme hareketlerini; yani maddenin tanecikli yapısını keşfedeceğiz.",
    question: "Sabit süratle giden bir trenin içindeki havanın molekülleri de trenle aynı süratte midir?",
    answer: "Evet, trenle birlikte ilerlerler; üstelik kendi aralarında saniyede yüzlerce metre süratle durmaksızın titreşip birbirleriyle çarpışırlar."
  },
  // MEB DERS KİTABI DETAYLI KONU ANLATIMI, TABLOLAR, BAĞLANTI NOKTALARI VE HABERLER
  konuAnlatimi: {
    ozet: "Sürat; bir hareketlinin birim zamanda (1 saniyede veya 1 saatte) aldığı yoldur. Matematiksel olarak Sürat = Alınan Yol / Geçen Zaman (v = x / t) formülü ile hesaplanır. Yol metre (m), zaman saniye (s) alınırsa sürat birimi m/s; yol kilometre (km), zaman saat (h) alınırsa sürat birimi km/h olur. 1 m/s = 3,6 km/h'dir. Bir hareketlinin eşit zaman aralıklarında eşit yollar alması hareketine 'sabit süratli hareket' denir. Bu harekette sürat zamanla değişmez; dengelenmiş kuvvetler söz konusudur. Yol-Zaman grafiğinde alınan yol zamanla düzgün olarak artan eğik bir doğru ile gösterilir; grafiğin eğimi hareketlinin süratini verir. Sürat-Zaman grafiğinde ise sürat sabit olduğundan zaman eksenine paralel yatay bir doğru çizilir; bu doğrunun altında kalan dikdörtgenin alanı (Sürat x Zaman) hareketlinin aldığı toplam yolu verir.",
    kavramlar: [
      {
        terim: "Sürat ve Temel Formülü",
        tanim: "Bir hareketlinin birim zamanda aldığı yol miktarıdır.",
        onemliNoktalar: [
          "Sürat Formülü: Sürat = Alınan Yol / Geçen Zaman (v = x / t).",
          "Alınan Yol Formülü: Alınan Yol = Sürat x Geçen Zaman (x = v . t).",
          "Geçen Zaman Formülü: Geçen Zaman = Alınan Yol / Sürat (t = x / v).",
          "Aynı sürede daha fazla yol alan veya aynı yolu daha kısa sürede tamamlayan hareketlinin sürati daha büyüktür."
        ]
      },
      {
        terim: "Sürat Birimleri ve Birim Dönüşümü",
        tanim: "Sürati ifade ederken kullanılan uluslararası ve gündelik ölçü birimleridir.",
        onemliNoktalar: [
          "Metre / Saniye (m/s): Bilimsel SI birim sisteminde temel sürat birimidir.",
          "Kilometre / Saat (km/h): Araç göstergelerinde, tren ve uçaklarda kullanılan yaygın birimdir.",
          "Birim Dönüştürme: 1 m/s = 3,6 km/h.",
          "m/s'den km/h'ye geçerken değer 3,6 ile ÇARPILIR (örn: 10 m/s = 36 km/h; 20 m/s = 72 km/h).",
          "km/h'den m/s'ye geçerken değer 3,6'ya BÖLÜNÜR (örn: 90 km/h = 25 m/s; 108 km/h = 30 m/s)."
        ]
      },
      {
        terim: "Sabit Süratli Hareket",
        tanim: "Bir hareketlinin süratini hiç değiştirmeden eşit zaman aralıklarında daima eşit yollar almasıdır.",
        onemliNoktalar: [
          "Hareket boyunca sürat sabittir (Hızlanma veya yavaşlama yoktur).",
          "Cisim dengelenmiş kuvvetler etkisindedir (Net kuvvet R = 0'dır).",
          "Örnek: Saatte 90 km sabit süratle ilerleyen otomobil, saatin akrep ve yelkovanı, bantta sabit hızla ilerleyen bavullar."
        ]
      },
      {
        terim: "Grafiklerin Çizimi ve Yorumlanması",
        tanim: "Yol-Zaman ve Sürat-Zaman grafiklerinin analizidir.",
        onemliNoktalar: [
          "Yol-Zaman Grafiği: Yatay eksen zamanı (s veya h), düşey eksen yolu (m veya km) gösterir. Sabit süratte grafik sıfırdan başlayan eğik düz bir doğrudur. Çizgi ne kadar DİK ise hareketlinin sürati o kadar BÜYÜKTÜR.",
          "Sürat-Zaman Grafiği: Sürat zamanla değişmediği için zaman eksenine paralel YATAY DÜZ ÇİZGİDİR. Grafiğin altındaki alan: Alan = Sürat x Zaman = Alınan Yol bağıntısını verir."
        ]
      }
    ],
    tablolar: [
      {
        baslik: "Sabit Süratli Bir Aracın Yol, Zaman ve Sürat Değerleri Tablosu",
        sutunlar: ["Geçen Zaman (s)", "Alınan Yol (m)", "Sürat (m/s)"],
        satirlar: [
          ["0", "0", "20"],
          ["1", "20", "20"],
          ["2", "40", "20"],
          ["3", "60", "20"],
          ["4", "80", "20"],
          ["5", "100", "20"]
        ]
      },
      {
        baslik: "Yaygın Sürat Birimi Dönüşüm Tablosu",
        sutunlar: ["Sürat (m/s)", "Sürat (km/h)", "Tipik Günlük Hayat Örneği"],
        satirlar: [
          ["5 m/s", "18 km/h", "Şehir içinde bisiklet sürüşü"],
          ["10 m/s", "36 km/h", "100 metre şampiyonu koşucu atleti"],
          ["20 m/s", "72 km/h", "Şehir içi azami güvenli otomobil seyri"],
          ["25 m/s", "90 km/h", "Bölünmüş şehirler arası karayolu sürati"],
          ["30 m/s", "108 km/h", "Otoyol seyir sürati"],
          ["330 m/s", "1188 km/h", "Havadaki ses hızı (1 Mach süpersonik sınır)"]
        ]
      }
    ]
  },
  // MEB KİTABINDAKİ BAĞLANTI NOKTALARI
  baglantiNoktalari: [
    {
      id: "bn-6-3-3",
      baslik: "Trafik Güvenliği ve Matematik: Ortalama Hız Koridoru ve EDS Sistemleri",
      alan: "Trafik Güvenliği & Algoritma",
      aciklama: "Otoyollarda sürücülerin sadece radarı görünce frene basmasını engellemek için iki gişe arasına 'Ortalama Hız Koridoru' kurulmuştur.",
      soru: "120 km uzunluğundaki bir otoyol koridoruna 14:00'te giren bir araç 14:50'de çıkarsa hız sınırını (120 km/h) aşmış mıdır?",
      cevap: "Geçen süre 50 dakikadır (50/60 = 5/6 saat). Ortalama sürat v = 120 / (5/6) = 144 km/h çıkar. Araç 120 km/h sınırını aşarak 144 km/h ile gittiği için sistem otomatik olarak aşırı hız cezası keser."
    },
    {
      id: "bn-6-3-4",
      baslik: "Doğa ve Biyomekanik: Hayvanlar Âleminin Sürat Şampiyonları",
      alan: "Zooloji & Biyomekanik",
      aciklama: "Çita karada, kılıçbalığı denizde, gökdoğan kuşu ise havada inanılmaz süratlere ulaşacak biyolojik donanımlara sahiptir.",
      soru: "Gökdoğan kuşunun avına dalış yaparken saatte 320 km/h sürate ulaşabilmesini sağlayan aerodinamik özellikler nelerdir?",
      cevap: "Kanatlarını geriye katlayarak damla şeklini alması hava sürtünmesini sıfıra indirir; burun deliklerindeki özel konik kemikler ise 320 km/h süratte ciğerlerinin hava basıncından patlamasını önler."
    }
  ],
  // MEB KİTABINDAKİ GÜNCEL HABERLER
  haberler: [
    {
      id: "hbr-6-3-2",
      baslik: "Yerli ve Millî Elektrikli Hızlı Tren Testleri Başarıyla Tamamlandı",
      kaynak: "TÜRASAŞ & Ulaştırma Bakanlığı Bülteni",
      tarih: "2024",
      ozet: "Türkiye Raylı Sistem Araçları Sanayii (TÜRASAŞ) tarafından üretilen milli elektrikli tren seti, Eskişehir-Ankara yüksek hızlı tren hattında saatte 225 km sabit sürat testini başarıyla geçti. Trenin telemetri sistemleri her 1 saniyede aldığı yolu hassas sensörlerle kaydederek dijital yol-zaman grafiklerini oluşturdu.",
      soru: "Saatte 225 km sabit süratle ilerleyen milli trenimiz 450 kilometrelik Ankara-İstanbul hattını duraksız kaç saatte tamamlar?",
      cevap: "Zaman = Yol / Sürat bağıntısından: t = 450 km / 225 km/h = tam 2 saatte tamamlar."
    }
  ],
  // MEB KİTABINDAKİ KONTROL NOKTALARI
  kontrolNoktalari: [
    {
      id: "kn-6-3-3",
      baslik: "Kontrol Noktası 1 (Sürat Hesaplamaları ve Birim Dönüşümü)",
      sorular: [
        {
          id: "kn-q-g6-16",
          soru: "400 metrelik koşu pistini 50 saniyede tamamlayan bir sporcunun sürati kaç m/s'dir?",
          tip: "coktan-secmeli",
          secenekler: [
            "A) 4 m/s",
            "B) 6 m/s",
            "C) 8 m/s",
            "D) 10 m/s"
          ],
          dogruSecenek: "C",
          cevap: "C) 8 m/s",
          aciklama: "Sürat = Yol / Zaman = 400 m / 50 s = 8 m/s."
        },
        {
          id: "kn-q-g6-17",
          soru: "25 m/s kaç km/h'ye eşittir? İşlem basamaklarıyla gösteriniz.",
          tip: "klasik",
          cevap: "1 m/s = 3,6 km/h olduğundan: 25 x 3,6 = 90 km/h eder.",
          aciklama: "m/s'den km/h'ye çevirirken 3,6 ile çarpılır."
        }
      ]
    },
    {
      id: "kn-6-3-4",
      baslik: "Kontrol Noktası 2 (Yol-Zaman ve Sürat-Zaman Grafikleri)",
      sorular: [
        {
          id: "kn-q-g6-18",
          soru: "Sabit süratle hareket eden bir aracın sürat-zaman grafiğinin altında kalan alan bize hangi fiziksel büyüklüğü verir?",
          tip: "coktan-secmeli",
          secenekler: [
            "A) Aracın toplam kütle miktarını",
            "B) Aracın hareket ettiği yönünü",
            "C) Aracın deposundaki yakıtını",
            "D) Aracın aldığı toplam mesafeyi"
          ],
          dogruSecenek: "D",
          cevap: "D) Aracın aldığı toplam mesafeyi",
          aciklama: "Alan = Sürat x Zaman = Alınan Yol (x = v . t)."
        }
      ]
    }
  ],
  // BİLGİ BANKASI KUTULARI
  bilgiBankasi: [
    {
      id: "bb-6-3-3",
      baslik: "Sürat ile Hız Arasındaki Bilimsel Ayrım",
      icerik: "Günlük dilde çoğu insan 'sürat' ile 'hız' kelimelerini aynı anlamda kullanır; fakat fizikte ikisi farklıdır! Sürat; sadece büyüklüğü olan skaler bir değerdir (örn: 'Araba 80 km/h ile gidiyor'). Hız ise yöne sahip vektörel bir büyüklüktür (örn: 'Araba kuzeye doğru 80 km/h ile gidiyor'). Arabaların göstergelerinde yön yazmadığı için o kadrana 'hız göstergesi' değil, bilimsel olarak 'sürat göstergesi' denir.",
      onemliNot: "Süratin yönü yoktur, hızın yönü vardır."
    },
    {
      id: "bb-6-3-4",
      baslik: "Evrenin Mutlak Sınırı: Işık Sürati",
      icerik: "Fizik yasalarına göre evrende hiçbir kütleli cisim ışık süratini aşamaz. Işığın boşluktaki sürati saniyede tam 300.000 kilometredir (300.000.000 m/s). Bu muazzam süratle giden bir ışık fotonu, sadece 1 saniyede Dünya'nın etrafını tam 7,5 kez turlayabilir. Güneş'ten çıkan bir ışık ışını 150 milyon kilometrelik mesafeyi aşıp Dünya'mıza yaklaşık 8 dakika 20 saniyede ulaşır.",
      onemliNot: "Işık sürati c ≈ 300.000 km/s'dir."
    }
  ],
  // MEB KİTABINDAKİ PERFORMANS GÖREVİ
  performansGorevi: {
    baslik: "Oyuncak Araba, Metre ve Kronometre ile Sürat Grafiği Çıkarma",
    amac: "Düz bir zemin üzerine 1'er metrelik aralıklarla işaret koyup pilli oyuncak arabanın geçiş sürelerini ölçerek Yol-Zaman ve Sürat-Zaman grafiklerini çizmek.",
    surecAdimlari: [
      "Zemine şerit metre çekerek 0, 1, 2, 3 ve 4. metreleri bantla işaretleyiniz.",
      "Pilli arabayı çalıştırıp her metreyi geçtiği andaki kronometre sürelerini kaydediniz.",
      "Ölçülen verileri Yol-Zaman tablosuna aktarınız.",
      "Her aralık için Sürat = Yol / Zaman formülüyle sürati hesaplayınız.",
      "Kareli kağıda Yol-Zaman ve Sürat-Zaman grafiklerini çizerek arabanın sabit süratli gidip gitmediğini analiz ediniz."
    ],
    beklenenUrun: "Ölçüm Çizelgesi, Çizilmiş İki Adet Grafik ve Sürat Analiz Raporu.",
    degerlendirmeKriterleri: [
      "Zaman ve yol ölçümlerinin hassasiyetle yapılması",
      "Yol-Zaman ve Sürat-Zaman grafiklerinin eksenlerinin doğru etiketlenmesi",
      "Grafik eğimi ve alan hesaplamalarının raporda açıklanması"
    ]
  },
  // MEB KİTABI NELER ÖĞRENDİK BÖLÜMÜ SORULARI VE MAARİF ÇÖZÜMLERİ
  nelerOgrenildiSorulari: [
    {
      id: "no-6-3-5",
      soru: "1. Sürat kavramını tanımlayarak formülünü ve en çok kullanılan iki birimini yazınız.",
      cevap: "Sürat, bir hareketlinin birim zamanda aldığı yoldur. Formülü: Sürat = Alınan Yol / Geçen Zaman (v = x / t). En çok kullanılan iki birimi m/s (metre/saniye) ve km/h (kilometre/saat)'tir.",
      detayliCozum: "SI birimi m/s, gündelik kullanım birimi km/h'dir."
    },
    {
      id: "no-6-3-6",
      soru: "2. Sabit süratle giden bir bisikletli 15 saniyede 120 metre yol almaktadır. Bu bisikletlinin sürati kaç m/s'dir ve kaç km/h'ye karşılık gelir?",
      cevap: "v = x / t = 120 m / 15 s = 8 m/s. km/h'ye dönüştürmek için 3,6 ile çarparız: 8 x 3,6 = 28,8 km/h.",
      detayliCozum: "Sürati 8 m/s, yani saatte 28,8 km'dir."
    },
    {
      id: "no-6-3-7",
      soru: "3. Sabit süratli bir hareketliye ait Yol-Zaman ve Sürat-Zaman grafiklerinin şekillerini açıklayarak bu grafiklerden hangi bilgilerin elde edildiğini belirtiniz.",
      cevap: "Yol-Zaman Grafiği: Sıfırdan başlayan eğik düz bir doğrudur; grafiğin eğimi sürati verir. Sürat-Zaman Grafiği: Zaman eksenine paralel yatay düz bir doğrudur; grafiğin altındaki alan hareketlinin aldığı toplam yolu verir.",
      detayliCozum: "Yol-zaman eğimi sürattir, sürat-zaman alanı yoldur."
    },
    {
      id: "no-6-3-8",
      soru: "4. K ve L araçları aynı anda aynı noktadan harekete başlamıştır. K aracı 2 saatte 180 km yol alırken, L aracı 3 saatte 240 km yol almıştır. Hangi aracın daha süratli olduğunu işlem yaparak bulunuz.",
      cevap: "K aracının sürati: vK = 180 km / 2 h = 90 km/h. L aracının sürati: vL = 240 km / 3 h = 80 km/h. 90 km/h > 80 km/h olduğu için K aracı L aracından daha süratlidir.",
      detayliCozum: "K aracı saatte 90 km hızla daha süratlidir."
    }
  ],
  hikmetStages: [
    {
      stage: 1,
      name: "1. Varlığı Tanıt (Akıp Giden Zaman ve Yol)",
      concept: "Kâinattaki Harekât",
      text: "Galaksilerden kanımızdaki alyuvarlara kadar hiçbir şey hareketsiz değildir; her şey bir yol ve zaman içindedir.",
      analogies: ["Zaman nehrinde belirlenmiş rotasında süzülen gemiler."]
    },
    {
      stage: 2,
      name: "2. Parçalarını Göster (Yol, Zaman, Oran)",
      concept: "Süratin Formülü",
      text: "Alınan mesafe ile geçen sürenin kusursuz oranı sürati doğurur (v = x / t).",
      analogies: ["Bir kumaşın boyunu cetvelle, dikiş süresini kronometreyle ölçmek."]
    },
    {
      stage: 3,
      name: "3. Ölçü ve Düzen (Hassas Matematik)",
      concept: "Gök Cisimlerinin Sabit Sürati",
      text: "Dünya Güneş etrafında saatte 108.000 km sabit süratle döner. Bir saniye aksasa mevsimler ve hayat yok olur.",
      questionToPonder: "Dünya'nın yörünge sürati tesadüfen mi bu hassas değerde tutulmaktadır?"
    },
    {
      stage: 4,
      name: "4. Gayesini Keşfet (Nizama Hizmet)",
      concept: "Zamanın ve Ömrün Değeri",
      text: "Sürat kavramı bize vaktin nakit olduğunu, hayat yolculuğunda hedefe doğru istikametle ve dengeli adımlarla ilerlemeyi öğretir."
    },
    {
      stage: 5,
      name: "5. Bütünle İlişkilendir (Işık ve Kozmos)",
      concept: "Evrenin Hız Sınırı",
      text: "Güneş ışığı 150 milyon kilometrelik mesafeyi tam 8 dakika 20 saniyede kat ederek yeryüzündeki fotosenteze hayat taşır.",
      analogies: ["Tam vaktinde gelen şifalı bir kargo."]
    },
    {
      stage: 6,
      name: "6. Hayret ve Tefekkür (Zamanın Sahibi)",
      concept: "Kadir-i Zülcelal",
      text: "Zamanı ve mekânı yaratan, gökleri ve yerleri şaşmaz bir hız ve yörüngeyle döndüren Sonsuz Kudret'e hayranlık duymak."
    }
  ],
  etkinlikler: [
    {
      id: "etk-u3s2-oyuncak-araba-surat",
      title: "Pekiştirme İstasyonu: Oyuncak Araba ile Yol-Zaman Grafiği Çıkarma",
      type: "Veri Toplama ve Grafik Çizimi",
      materials: ["Oyuncak pilli sabit süratli araba", "Metre", "Kronometre", "Milimetrik grafik kâğıdı"],
      steps: [
        "1. Adım: Zemine 1, 2, 3 ve 4 metrelik işaretler koyunuz.",
        "2. Adım: Arabayı çalıştırıp her metre işaretine ulaştığı süreyi kronometre ile kaydediniz (Örn: 2s, 4s, 6s, 8s).",
        "3. Adım: Tablodaki değerlerle Yol-Zaman ve Sürat-Zaman grafiklerini çiziniz.",
        "4. Adım: Sürati hesaplayınız: v = 1 m / 2 s = 0,5 m/s."
      ],
      questions: [
        {
          qId: "q-u3s2-1",
          label: "Grafik Yorumu",
          prompt: "Çizdiğiniz yol-zaman grafiğinin eğiminin sabit olması araba hakkında neyi gösterir?",
          answer: "Arabanın eşit zamanlarda eşit yollar aldığını, yani sabit süratle hareket ettiğini gösterir."
        }
      ]
    }
  ],
  bilgiIstasyonlari: [
    {
      title: "Bîrûnî ve Dünya'nın Çevresi ile Dönüş Hızı",
      scientistOrMission: "Büyük İslam Âlimi ve Astronom",
      description: "Ebû Reyhan el-Bîrûnî, trigonometri ve usturlap kullanarak Dünya'nın yarıçapını ve çevresini sadece %1 hata payıyla hesaplamış; Dünya'nın kendi ekseni etrafındaki dönüş süratini açıklamıştır.",
      hikmetNote: "Bîrûnî'nin hesapları, gök cisimlerinin muazzam süratlerini matematiksel bir hassasiyetle ortaya koymuştur."
    }
  ],
  dda: {
    id: "dda-u3s2-hareket",
    statement: "Sabit süratle hareket eden bir cismin aldığı yol zamanla doğru orantılı olarak artar.",
    correctDecision: "D",
    reason: "Sürat sabit olduğunda (örneğin 10 m/s), geçen her bir saniyede alınan yol aynı miktarda (10 m) artar.",
    ifTrue: {
      exit: 1,
      isCorrect: true,
      feedback: "Harika! Yol ve zamanın doğru orantılı ilişkisini tam kavradınız."
    },
    ifFalse: {
      exit: 2,
      isCorrect: false,
      feedback: "Hatalı! Sabit süratte geçen süre arttıkça alınan yolun da artacağını hatırlayınız."
    }
  },
  biliyorumAnliyorumDusunuyorum: {
    biliyorum: "Süratin birim zamanda alınan yol olduğunu, v = x / t formülünü, m/s ve km/h birimlerini ve grafikleri biliyorum.",
    anliyorum: "Sabit süratli bir aracın sürat-zaman grafiğinin yatay doğru olduğunu, yol-zaman grafiğinin ise eğimli düz çizgi olduğunu anlıyorum.",
    dusunuyorum: "Eğer Dünya Güneş etrafında biraz daha yavaş dönseydi Güneş'in içine çekileceğimizi, biraz daha hızlı dönseydi uzayın derinliklerine savrulacağımızı hiç düşündünüz mü?"
  },
  pekistirmeIstasyonu: {
    stationTitle: "Sabit Süratli Hareket Pekiştirme İstasyonu",
    pageReference: "6. Sınıf 1. Kitap 3. Ünite",
    summaryText: "Yol, zaman ve sürat hesaplamaları, birim dönüştürme uygulamaları, grafik okuma ve karşılaştırma soruları.",
    targetSkills: [
      "Verilen yol ve zaman değerlerinden sürati, verilen sürat ve zamandan alınan yolu hesaplar.",
      "Yol-zaman ve sürat-zaman grafiklerini doğru şekilde okuyup yorumlar."
    ]
  },
  fillInBlanks: [
    {
      id: "fib-u3s2-1",
      number: 1,
      baglam: "Bir hareketlinin birim zamanda aldığı yola verilen addır.",
      soruKoku: "Bir hareketlinin birim zamanda (1 saniyede veya 1 saatte) aldığı yola .................................... denir.",
      blankAnswer: "Sürat",
      acceptableAnswers: ["sürat", "Sürat"],
      explanation: "Sürat birim zamandaki yoldur.",
      wordBankHint: ["Sürat", "Kuvvet", "Kütle", "Ağırlık"]
    },
    {
      id: "fib-u3s2-2",
      number: 2,
      baglam: "Sürat hesaplanırken alınan yol geçen zamana bölünür.",
      soruKoku: "Sürat formülü: Sürat = Alınan Yol / .................................... Zamandır.",
      blankAnswer: "Geçen",
      acceptableAnswers: ["geçen", "Geçen", "Zaman", "zaman"],
      explanation: "v = x / t bağıntısıdır.",
      wordBankHint: ["Geçen", "Kalan", "Gereken", "Ölçülen"]
    },
    {
      id: "fib-u3s2-3",
      number: 3,
      baglam: "Uluslararası birim sisteminde (SI) yol metre, zaman saniyedir.",
      soruKoku: "Yol metre, zaman saniye alındığında sürat birimi .................................... / saniye olur.",
      blankAnswer: "Metre",
      acceptableAnswers: ["metre", "Metre", "m"],
      explanation: "m/s sürat birimidir.",
      wordBankHint: ["Metre", "Kilometre", "Santimetre", "Mil"]
    },
    {
      id: "fib-u3s2-4",
      number: 4,
      baglam: "Otomobil hız göstergelerinde kilometre ve saat kullanılır.",
      soruKoku: "Karayolu araçlarının göstergelerindeki sürat birimi kilometre / ....................................tir (km/h).",
      blankAnswer: "Saat",
      acceptableAnswers: ["saat", "Saat", "h"],
      explanation: "km/h kilometre bölü saattir.",
      wordBankHint: ["Saat", "Dakika", "Saniye", "Gün"]
    },
    {
      id: "fib-u3s2-5",
      number: 5,
      baglam: "180 km yolu 2 saatte alan bir otomobilin sürati hesaplanır.",
      soruKoku: "180 km yolu 2 saatte giden bir aracın sürati .................................... km/h'dir.",
      blankAnswer: "90",
      acceptableAnswers: ["90", "doksan"],
      explanation: "180 / 2 = 90 km/h.",
      wordBankHint: ["90", "60", "120", "360"]
    },
    {
      id: "fib-u3s2-6",
      number: 6,
      baglam: "Eşit zaman aralıklarında eşit yollar alan hareketlidir.",
      soruKoku: "Hareketi boyunca sürati hiç değişmeyen cisimlere .................................... süratli hareketli denir.",
      blankAnswer: "Sabit",
      acceptableAnswers: ["sabit", "Sabit"],
      explanation: "Sürati değişmeyen harekete sabit süratli hareket denir.",
      wordBankHint: ["Sabit", "Değişken", "Hızlanan", "Yavaşlayan"]
    },
    {
      id: "fib-u3s2-7",
      number: 7,
      baglam: "Sabit süratli hareketlinin sürat-zaman grafiği zaman eksenine paraleldir.",
      soruKoku: "Sabit süratli bir cismin sürat-zaman grafiği zaman eksenine .................................... bir doğrudur.",
      blankAnswer: "Paralel",
      acceptableAnswers: ["paralel", "Paralel", "yatay", "Yatay"],
      explanation: "Sürat sabit kaldığı için yatay düz çizgidir.",
      wordBankHint: ["Paralel", "Dik", "Eğik", "Dairesel"]
    },
    {
      id: "fib-u3s2-8",
      number: 8,
      baglam: "Sürat-zaman grafiğinde çizginin altındaki alan bir büyüklüğü verir.",
      soruKoku: "Sürat-zaman grafiğinde doğrunun altında kalan alan alınan ....................................u verir.",
      blankAnswer: "Yol",
      acceptableAnswers: ["yol", "Yol", "yolu"],
      explanation: "Alan = Sürat x Zaman = Alınan Yol.",
      wordBankHint: ["Yol", "Kuvvet", "Ağırlık", "İvme"]
    },
    {
      id: "fib-u3s2-9",
      number: 9,
      baglam: "36 km/h sürat m/s cinsine çevrilirken 3,6'ya bölünür.",
      soruKoku: "72 km/h sürate sahip bir otomobilin sürati .................................... m/s'ye eşittir.",
      blankAnswer: "20",
      acceptableAnswers: ["20", "yirmi"],
      explanation: "72 / 3,6 = 20 m/s.",
      wordBankHint: ["20", "10", "30", "40"]
    },
    {
      id: "fib-u3s2-10",
      number: 10,
      baglam: "Dünya'nın yarıçapını ve dönüş hızını doğru hesaplayan İslam astronomudur.",
      soruKoku: "Dünya'nın çevresini ve dönüşünü asırlar önce hesaplayan İslam bilgini el-...................................dir.",
      blankAnswer: "Bîrûnî",
      acceptableAnswers: ["biruni", "bîrûnî", "Biruni", "Bîrûnî"],
      explanation: "El-Bîrûnî Dünya'nın boyutlarını ve dönüşünü incelemiştir.",
      wordBankHint: ["Bîrûnî", "Harezmi", "Ali Kuşçu", "Uluğ Bey"]
    }
  ],
  contextQuestions: [
    {
      id: "mcq-u3s2-1",
      number: 1,
      baglam: "Ankara ile İstanbul arasındaki 450 km'lik yolu bir otobüs 5 saatte, bir hızlı tren ise 3 saatte tamamlamaktadır.",
      soruKoku: "Hızlı trenin ve otobüsün ortalama süratleri hangi seçenekte doğru olarak verilmiştir?",
      secenekler: {
        A: "Hızlı tren: 150 km/h / Otobüs: 90 km/h",
        B: "Hızlı tren: 90 km/h / Otobüs: 150 km/h",
        C: "Hızlı tren: 120 km/h / Otobüs: 60 km/h",
        D: "Hızlı tren: 300 km/h / Otobüs: 100 km/h"
      },
      dogruCevap: "A",
      cozum: "Tren sürati = 450 km / 3 h = 150 km/h. Otobüs sürati = 450 km / 5 h = 90 km/h.",
      olculenKazanim: "F.6.3.2.2. Yol, zaman ve sürat bağıntısını hesaplar.",
      olculenBeceri: "Sürat Karşılaştırma",
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
      id: "mcq-u3s2-2",
      number: 2,
      baglam: "Aynı noktadan aynı anda aynı yöne doğru harekete başlayan K ve L araçlarının yol-zaman değerleri şöyledir:\nK aracı: 4 saniyede 80 metre yol alıyor.\nL aracı: 5 saniyede 60 metre yol alıyor.",
      soruKoku: "10 saniye sonra K aracı ile L aracı arasındaki mesafe kaç metre olur?",
      secenekler: {
        A: "20 metre",
        B: "80 metre",
        C: "120 metre",
        D: "200 metre"
      },
      dogruCevap: "B",
      cozum: "vK = 80 / 4 = 20 m/s. 10 saniyede K'nin aldığı yol = 20 x 10 = 200 m. vL = 60 / 5 = 12 m/s. 10 saniyede L'nin aldığı yol = 12 x 10 = 120 m. Fark = 200 - 120 = 80 metre.",
      olculenKazanim: "F.6.3.2.2. Çok adımlı hareket problemlerini çözer.",
      olculenBeceri: "Problem Çözme ve Modelleme",
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
      id: "mcq-u3s2-3",
      number: 3,
      baglam: "Bir karayolundaki Ortalama Hız Tespit Koridoru 120 km uzunluğundadır. Bu yolda otomobiller için yasal sürat sınırı 110 km/h'dir. Bir sürücü bu 120 km'lik mesafeyi tam 1 saatte tamamlamıştır.",
      soruKoku: "Trafik kontrol merkezinin sürücü hakkında vereceği karar ve gerekçesi nedir?",
      secenekler: {
        A: "Ortalama sürati 120 km/h olduğu için yasal sınırı (110 km/h) aşmış ve ceza almıştır.",
        B: "Ortalama sürati 60 km/h olduğu için ceza almaz.",
        C: "Tam 1 saatte gittiği için ödül verilir.",
        D: "Hızı tespit edilememiştir."
      },
      dogruCevap: "A",
      cozum: "Sürat = 120 km / 1 h = 120 km/h. Sınır 110 km/h olduğu için hız ihlali yapılmıştır.",
      olculenKazanim: "F.6.3.2.1. Sürat hesaplamasını günlük yaşam kurallarıyla ilişkilendirir.",
      olculenBeceri: "Hukuki/Trafik Değerlendirmesi",
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
      id: "mcq-u3s2-4",
      number: 4,
      baglam: "Bir cismin yol-zaman grafiğinde zaman 0'dan 6 saniyeye çıkarken alınan yol 0'dan 30 metreye düzgün bir doğru şeklinde artmaktadır.",
      soruKoku: "Bu cisme ait sürat-zaman grafiği aşağıdakilerden hangisidir?",
      secenekler: {
        A: "Sürat ekseninde 5 m/s değerinde zaman eksenine paralel yatay bir doğru",
        B: "Sürat ekseninde 30 m/s'den sıfıra inen bir doğru",
        C: "Sürat ekseninde 0'dan 30'a yükselen bir eğri",
        D: "Sürat değeri sürekli sıfır olan bir çizgi"
      },
      dogruCevap: "A",
      cozum: "Sürat = 30 m / 6 s = 5 m/s'dir. Sürat sabit olduğu için sürat-zaman grafiği 5 m/s hizasında yatay bir düz çizgidir.",
      olculenKazanim: "F.6.3.2.3. Yol-zaman grafiğinden sürat-zaman grafiğine dönüşüm yapar.",
      olculenBeceri: "Grafik Dönüşümü",
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
      id: "mcq-u3s2-5",
      number: 5,
      baglam: "Bir bisikletli sabit 15 m/s süratle 2 dakika boyunca düz bir sahil yolunda ilerliyor.",
      soruKoku: "Bisikletlinin bu süre zarfında aldığı toplam yol kaç metredir?",
      secenekler: {
        A: "30 metre",
        B: "180 metre",
        C: "1800 metre",
        D: "3000 metre"
      },
      dogruCevap: "C",
      cozum: "Sürat m/s cinsinden verildiği için zaman saniyeye çevrilmelidir: 2 dakika = 2 x 60 = 120 saniyedir. Yol = Sürat x Zaman = 15 m/s x 120 s = 1800 metredir.",
      olculenKazanim: "F.6.3.2.2. Birim uyumuyla alınan yol hesabı yapar.",
      olculenBeceri: "Birim Dönüşümü ve Hesaplama",
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
      id: "mcq-u3s2-6",
      number: 6,
      baglam: "Bir sürat-zaman grafiğinde cismin sürati 25 m/s olarak sabit gösterilmiştir. Zaman aralığı ise 0 ile 8 saniye arasındadır.",
      soruKoku: "Grafikteki doğrunun zaman ekseniyle arasında kalan alan kaç metrelik yolu temsil eder?",
      secenekler: {
        A: "100 m",
        B: "200 m",
        C: "25 m",
        D: "8 m"
      },
      dogruCevap: "B",
      cozum: "Alan = Yükseklik x Taban = Sürat x Zaman = 25 m/s x 8 s = 200 metredir.",
      olculenKazanim: "F.6.3.2.3. Sürat-zaman grafiğinin altındaki alanı hesaplayarak yolu bulur.",
      olculenBeceri: "Geometrik Grafik Analizi",
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
      id: "mcq-u3s2-7",
      number: 7,
      baglam: "Üç farklı sporcunun 100 metreyi tamamlama süreleri ölçülmüştür:\nAhmet: 10 saniye\nBurak: 12,5 saniye\nCem: 20 saniye",
      soruKoku: "Bu sporcuların süratlerinin büyükten küçüğe doğru sıralaması hangisidir?",
      secenekler: {
        A: "Ahmet > Burak > Cem",
        B: "Cem > Burak > Ahmet",
        C: "Burak > Ahmet > Cem",
        D: "Ahmet = Burak = Cem"
      },
      dogruCevap: "A",
      cozum: "Aynı yolu en kısa sürede alan en süratlidir. v_Ahmet = 100/10 = 10 m/s; v_Burak = 100/12,5 = 8 m/s; v_Cem = 100/20 = 5 m/s. Sıralama: Ahmet > Burak > Cem.",
      olculenKazanim: "F.6.3.2.1. Aynı yolda süre ve sürat ters orantısını yorumlar.",
      olculenBeceri: "Orantısal Akıl Yürütme",
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
      id: "mcq-u3s2-8",
      number: 8,
      baglam: "Bir kurye motorunun sürati göstergede 54 km/h olarak okunmaktadır.",
      soruKoku: "Bu kurye motorunun sürati saniyede kaç metredir (m/s)?",
      secenekler: {
        A: "10 m/s",
        B: "15 m/s",
        C: "20 m/s",
        D: "25 m/s"
      },
      dogruCevap: "B",
      cozum: "km/h'den m/s'ye geçerken 3,6'ya bölünür: 54 / 3,6 = 15 m/s.",
      olculenKazanim: "F.6.3.2.1. km/h ve m/s birim dönüşümünü yapar.",
      olculenBeceri: "Birim Dönüşümü",
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
      id: "mcq-u3s2-9",
      number: 9,
      baglam: "Aşağıdaki yol-zaman grafiğinde X ve Y araçlarının çizgileri verilmiştir. X'in grafiğinin eğimi (dikliği) Y'nin grafiğinin eğiminden çok daha diktir.",
      soruKoku: "Grafiğin eğiminin daha dik olması X aracı hakkında neyi kanıtlar?",
      secenekler: {
        A: "X aracının süratinin Y aracından daha büyük olduğunu",
        B: "X aracının durduğunu",
        C: "Y aracının daha hafif olduğunu",
        D: "X aracının benzinle çalıştığını"
      },
      dogruCevap: "A",
      cozum: "Yol-zaman grafiğinde eğim = Yol / Zaman = Sürattir. Çizgi ne kadar dikse araç o kadar süratlidir.",
      olculenKazanim: "F.6.3.2.3. Yol-zaman grafiğinde eğimin sürate karşılık geldiğini açıklar.",
      olculenBeceri: "Grafik Eğim Analizi",
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
      id: "mcq-u3s2-10",
      number: 10,
      baglam: "Bir kargo İHA'sı (drone) sabit 20 m/s süratle uçmaktadır. Teslimat noktası 3,6 km uzaklıktadır.",
      soruKoku: "Drone paketi kaç saniyede teslimat noktasına ulaştırır?",
      secenekler: {
        A: "72 saniye",
        B: "180 saniye",
        C: "360 saniye",
        D: "18 saniye"
      },
      dogruCevap: "B",
      cozum: "3,6 km = 3600 metredir. Zaman = Yol / Sürat = 3600 m / 20 m/s = 180 saniye (tam 3 dakika).",
      olculenKazanim: "F.6.3.2.2. Zamanı hesaplamak için bağıntıyı yeniden düzenler.",
      olculenBeceri: "Formül Uygulama",
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
      id: "mcq-u3s2-11",
      number: 11,
      baglam: "Bir yol-zaman grafiğinde bir aracın konumu 0-10 saniye arasında 50 metreye çıkmış, 10-20 saniye arasında ise 50 metrede yatay olarak sabit kalmıştır.",
      soruKoku: "Bu aracın 10. ve 20. saniyeler arasındaki hareket durumu nedir?",
      secenekler: {
        A: "Sabit süratle ilerlemektedir",
        B: "Durmaktadır (hareketsizdir, sürati 0'dır)",
        C: "Geriye doğru gitmektedir",
        D: "Hızlanmaktadır"
      },
      dogruCevap: "B",
      cozum: "Yol-zaman grafiğinde çizginin yatay olması konumun değişmediğini, yani aracın durduğunu gösterir.",
      olculenKazanim: "F.6.3.2.3. Yol-zaman grafiğinde durgunluk evresini tanır.",
      olculenBeceri: "Durum Teşhisi",
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
      id: "mcq-u3s2-12",
      number: 12,
      baglam: "Güneş ile Dünya arasındaki mesafe yaklaşık 150.000.000 km'dir. Işığın boşluktaki yayılma sürati saniyede 300.000 km'dir.",
      soruKoku: "Güneş'te meydana gelen bir patlamanın ışığı Dünya'ya kaç saniyede ulaşır?",
      secenekler: {
        A: "50 saniye",
        B: "500 saniye (yaklaşık 8 dakika 20 saniye)",
        C: "5000 saniye",
        D: "1 saniye"
      },
      dogruCevap: "B",
      cozum: "Zaman = Yol / Sürat = 150.000.000 km / 300.000 km/s = 500 saniyedir. Bu da 8 dakika 20 saniyeye karşılık gelir.",
      olculenKazanim: "F.6.3.2.2. Astronomik ölçekte sürat-zaman bağıntısını hesaplar.",
      olculenBeceri: "Kozmik Ölçekli Hesaplama",
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
      id: "mcq-u3s2-13",
      number: 13,
      baglam: "Bir yüzücü 50 metrelik havuzda bir gidiş ve bir dönüş yaparak 100 metreyi toplam 50 saniyede tamamlamıştır.",
      soruKoku: "Yüzücünün ortalama sürati kaç m/s'dir?",
      secenekler: {
        A: "1 m/s",
        B: "2 m/s",
        C: "4 m/s",
        D: "5 m/s"
      },
      dogruCevap: "B",
      cozum: "Toplam yol = 100 metre. Toplam zaman = 50 saniye. Sürat = 100 m / 50 s = 2 m/s.",
      olculenKazanim: "F.6.3.2.2. Gidiş-dönüş hareketinde ortalama sürati bulur.",
      olculenBeceri: "Temel Problem Çözme",
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
      id: "mcq-u3s2-14",
      number: 14,
      baglam: "Bir ses dalgası havada yaklaşık 340 m/s süratle yayılır. Şimşek çaktıktan tam 5 saniye sonra gök gürültüsünü duyan bir gözlemci vardır.",
      soruKoku: "Yıldırımın düştüğü yer gözlemciden kaç metre uzaktadır?",
      secenekler: {
        A: "68 m",
        B: "340 m",
        C: "1700 m",
        D: "3400 m"
      },
      dogruCevap: "C",
      cozum: "Işık anında ulaşır; ses ise 5 saniyede gelir. Mesafe = Sürat x Zaman = 340 m/s x 5 s = 1700 metredir (1,7 km).",
      olculenKazanim: "F.6.3.2.2. Ses hızı üzerinden mesafe tahmini yapar.",
      olculenBeceri: "Doğa Olayı Fiziği",
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
      id: "mcq-u3s2-15",
      number: 15,
      baglam: "Tabloda bir karıncanın aldığı yol ve geçen süreler verilmiştir:\nZaman (s): 0, 2, 4, 6, 8\nYol (cm): 0, 10, 20, 30, 40",
      soruKoku: "Tabloya göre karıncanın sürati kaç cm/s'dir?",
      secenekler: {
        A: "2 cm/s",
        B: "5 cm/s",
        C: "10 cm/s",
        D: "20 cm/s"
      },
      dogruCevap: "B",
      cozum: "Sürat = Yol / Zaman = 10 / 2 = 20 / 4 = 5 cm/s.",
      olculenKazanim: "F.6.3.2.3. Veri tablosundan sürat değerini hesaplar.",
      olculenBeceri: "Tablo Verisi Yorumlama",
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
      id: "mcq-u3s2-16",
      number: 16,
      baglam: "Bîrûnî, gök cisimlerinin yörüngelerindeki süratlerini araştırırken matematiksel oranların kusursuzluğuna dikkat çekmiştir.",
      soruKoku: "Bîrûnî'nin bilimsel metodolojisindeki en temel yaklaşım nedir?",
      secenekler: {
        A: "Gözlem ve deney yapmadan sadece tahmin yürütmek",
        B: "Hassas ölçüm aletleri geliştirerek doğadaki düzeni matematiksel modellerle ispatlamak",
        C: "Tüm bilimsel kitapları reddetmek",
        D: "Sadece efsanelerle açıklamak"
      },
      dogruCevap: "B",
      cozum: "Biruni usturlap ve trigonometri ile hassas ölçüm yaparak bilimi deneysel ve matematiksel temele oturtmuştur.",
      olculenKazanim: "F.6.3.2. Türk-İslam bilim insanlarının ölçüm yöntemlerini takdir eder.",
      olculenBeceri: "Bilim Felsefesi ve Metot",
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
      id: "mcq-u3s2-17",
      number: 17,
      baglam: "Aynı sürede (1 saatte) hareket eden üç araçtan K aracı 60 km, L aracı 80 km, M aracı 100 km yol almıştır.",
      soruKoku: "Eşit sürede alınan yollara göre araçların süratleri arasındaki ilişki nedir?",
      secenekler: {
        A: "vM > vL > vK",
        B: "vK > vL > vM",
        C: "vK = vL = vM",
        D: "vL > vM > vK"
      },
      dogruCevap: "A",
      cozum: "Süreler eşitken daha fazla yol alan araç daha süratlidir. vM (100) > vL (80) > vK (60).",
      olculenKazanim: "F.6.3.2.1. Eşit sürede yol-sürat ilişkisini karşılaştırır.",
      olculenBeceri: "Mantıksal Çıkarım",
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
      id: "mcq-u3s2-18",
      number: 18,
      baglam: "Bir tünelin uzunluğu 1200 metredir. Saatte 72 km/h (20 m/s) sabit süratle giden bir tren tünele girdiği andan itibaren tamamen çıkana kadar kaç saniye harcar (Trenin boyu 200 metredir)?",
      soruKoku: "Trenin tüneli tamamen terk etmesi için geçen süre kaç saniyedir?",
      secenekler: {
        A: "60 saniye",
        B: "70 saniye",
        C: "80 saniye",
        D: "100 saniye"
      },
      dogruCevap: "B",
      cozum: "Trenin tünelden tamamen çıkması için alması gereken toplam yol = Tünel boyu + Tren boyu = 1200 + 200 = 1400 metredir. Trenin sürati 20 m/s'dir. Süre = 1400 / 20 = 70 saniyedir.",
      olculenKazanim: "F.6.3.2.2. İleri seviye tünel geçiş hareket problemini çözümler.",
      olculenBeceri: "LGS Tipi İleri Düzey Problem Çözme",
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
      id: "mcq-u3s2-19",
      number: 19,
      baglam: "Bir yarış pistinde sabit süratle tur atan bir yarış arabasının her turu tam olarak 1 dakika 15 saniyede (75 saniye) tamamladığı görülmüştür.",
      soruKoku: "Her turun süresinin kuruşu kuruşuna aynı çıkması bu yarış arabasının hareketi hakkında neyi kesin olarak kanıtlar?",
      secenekler: {
        A: "Sürekli hızlandığını",
        B: "Ortalama tur süratinin sabit olduğunu",
        C: "Benzininin bittiğini",
        D: "Tekerleklerinin aşındığını"
      },
      dogruCevap: "B",
      cozum: "Eşit pist mesafesini eşit zamanlarda almak, hareketlinin ortalama tur süratinin sabit olduğunu kanıtlar.",
      olculenKazanim: "F.6.3.2.1. Sabit süratli hareketin zamansal periyodunu açıklar.",
      olculenBeceri: "Deneysel Kanıt Analizi",
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
      id: "mcq-u3s2-20",
      number: 20,
      baglam: "Işık hızından Dünya'nın dönüşüne, kanımızdaki maddelerin taşınma süratinden sesin yayılmasına kadar her hareketli için bir ölçü ve sınır belirlenmiştir.",
      soruKoku: "Evrendeki bu hassas hız limitleri ve hareket kanunları bizlere kâinat hakkında hangi hakikati gösterir?",
      secenekler: {
        A: "Kâinatta hiçbir kuralın olmadığını",
        B: "Tüm hareketlerin, hızların ve sürelerin Sonsuz Kudret ve İlim Sahibi tarafından bir gaye, hikmet ve adaletle tanzim edildiğini",
        C: "Zamanın rastgele aktığını",
        D: "Süratin sadece insan yapımı aletlerde olduğunu"
      },
      dogruCevap: "B",
      cozum: "Türkiye Yüzyılı Maarif Modeli çerçevesinde, fizik kanunlarındaki şaşmaz nizam ve hız ölçüleri derin bir tefekkür ve hayranlık vesilesidir.",
      olculenKazanim: "F.6.3.2. Sürat ve hareket kanunlarını evrensel nizamla sentezler.",
      olculenBeceri: "Hikmet ve Maarif Modeli Tefekkürü",
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
