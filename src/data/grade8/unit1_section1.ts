import { SectionContent } from '../../types';

export const grade8Unit1Section1: SectionContent = {
  code: "8.1.1",
  title: "Mevsimlerin Oluşumu ve Eksen Eğikliği",
  unitCode: "8.1",
  unitTitle: "1. Ünite: Mevsimler ve İklim",
  summary: "Dünya'nın dönme ekseninin 23° 27' eğik olması, Güneş etrafında dolanması, Güneş ışınlarının geliş açısı (dik ve eğik açılar), birim yüzeye düşen ışık enerjisi, ekinoks ve gündönümü tarihleri (21 Haziran, 21 Aralık, 21 Mart, 23 Eylül).",
  kazanimlar: [
    "F.8.1.1.1. Mevsimlerin oluşumuna yönelik tahminlerde bulunur.",
    "F.8.1.1.2. Eksen eğikliği ve Güneş ışınlarının geliş açısı arasındaki ilişkiyi açıklar."
  ],
  hatirlayalim: {
    text: "Mevsimlerin oluşmasının iki temel sebebi vardır: Dünya'nın Güneş etrafında dolanması ve Dünya'nın dönme ekseninin 23° 27' eğik olmasıdır.",
    keyPoints: [
      "Dünya'nın Güneş'e olan mesafesinin mevsimlerin oluşumuyla ilgisi yoktur! (En yakın olduğu 3 Ocak'ta Kuzey Yarım Küre'de kış yaşanır).",
      "Işınlar dik gelirse birim alana düşen enerji fazla olur ve sıcaklık artar (yaz). Işınlar eğik gelirse enerji geniş alana dağılır ve sıcaklık düşük kalır (kış).",
      "Kuzey ve Güney Yarım Küre'de aynı anda birbirine zıt mevsimler yaşanır."
    ]
  },
  onDegerlendirme: [
    {
      id: "od-g8-1",
      question: "Dünya'nın Güneş'e en yakın olduğu 3 Ocak tarihinde Türkiye'de neden kış mevsimi yaşanır?",
      answer: "Çünkü mevsimlerin sebebi Güneş'e olan mesafe değil, ışınların geliş açısıdır. Ocak ayında eksen eğikliğinden dolayı Güneş ışınları Kuzey Yarım Küre'ye eğik açıyla gelir."
    },
    {
      id: "od-g8-2",
      question: "Eğer Dünya'nın eksen eğikliği olmasaydı (0 derece olsaydı) ne olurdu?",
      answer: "Mevsimler oluşmazdı; bir bölgede yıl boyunca sıcaklık ve gece-gündüz süreleri hep aynı kalır, daima 12 saat gece 12 saat gündüz yaşanırdı."
    }
  ],
  hazirlik: {
    question: "Gündüz feneri duvara dik tuttuğumuzda aydınlanan alan ile eğik tuttuğumuzdaki alan nasıl değişir?",
    answer: "Dik tutulduğunda dar bir alana yoğun ışık düşer ve zemin çok ısınır; eğik tutulduğunda ışık geniş alana dağılır ve birim alan daha az aydınlanıp ısınır."
  },
  merak: {
    question: "Kuzey Kutup Noktası'nda 6 ay gündüz yaşanırken neden havalar Antalya'daki gibi 40 derece sıcak olmaz?",
    answer: "Çünkü Güneş ışınları kutuplara 6 ay boyunca hep çok eğik açıyla gelir; ufuktan fazla yükselemediği için birim alana düşen ısı enerjisi az kalır ve buzlar erimez."
  },
  kopru: {
    title: "Yılın Dört Mevsimlik Senfonisi",
    content: "Dünya'nın 23° 27'lik ince eksen eğikliği; ilkbaharın taptaze çiçeklerini, yazın olgunlaşan meyvelerini, sonbaharın altın yapraklarını ve kışın dinlendirici kar örtüsünü bize hediye eder.",
    question: "Bu 23,5 derecelik eğikliği tam yerinde koyan kimdir?",
    answer: "Mevsimleri ve rızıkları insanların ve canlıların ihtiyacına göre hikmetle takdir eden Kudret Sahibi'dir."
  },
  hikmetStages: [
    {
      stage: 1,
      name: "1. Varlığı Tanıt",
      concept: "Mevsimler Şöleni",
      text: "İlkbahar, yaz, sonbahar ve kış; yeryüzünü her 3 ayda bir farklı bir elbiseyle süsleyen ilahi tasarruftur.",
      analogies: ["Her mevsimde dekoru yenilenen dev bir tabiat tiyatrosu"]
    },
    {
      stage: 2,
      name: "2. Parçalarını Göster",
      concept: "Eksen ve Yörünge Çarkı",
      text: "23° 27'lik eksen eğikliği ve elips yörünge, Güneş ışınlarının geliş açısını her gün milim milim değiştirir.",
      analogies: ["Hassas ayarlı saat dişlileri"]
    },
    {
      stage: 3,
      name: "3. Ölçü ve Düzen",
      concept: "Birim Yüzeye Düşen Enerji",
      text: "Işınların geliş açısı 90 dereceye yaklaştıkça gölge boyu kısalır, birim yüzeydeki foton yoğunluğu artar.",
      questionToPonder: "Dünya kendi başına 23 derece eğilip bu mevsim dengesini hesaplayabilir mi?"
    }
  ],
  etkinlikler: [
    {
      id: "etk-8-1-1",
      title: "El Feneri ve Termometre ile Işığın Geliş Açısı Deneyi",
      type: "Işık ve Sıcaklık Deneyi",
      materials: ["El feneri", "2 adet termometre", "Siyah karton", "Açıölçer"],
      steps: [
        "Bir termometreye feneri 90° dik açıyla 10 cm mesafeden 5 dakika tutunuz.",
        "Diğer termometreye feneri 30° eğik açıyla 10 cm mesafeden 5 dakika tutunuz.",
        "Sıcaklık artışlarını karşılaştırınız."
      ],
      questions: [
        {
          qId: "q-g8-1",
          label: "1. Soru",
          prompt: "Hangi termometrede sıcaklık artışı daha fazla olmuştur, neden?",
          answer: "90° dik açıyla tutulan termometrede; çünkü dik açıda ışık enerjisi daha küçük bir alana yoğunlaşır ve birim yüzeye düşen enerji miktarı fazladır."
        }
      ]
    }
  ],
  bilgiIstasyonlari: [
    {
      title: "Biruni ve Eksen Eğikliği Ölçümü",
      scientistOrMission: "11. Yüzyıl Harizm Astronomu",
      description: "Biruni, günümüzden 1000 yıl önce trigonometrik aletlerle Dünya'nın eksen eğikliğini 23° 35' olarak olağanüstü bir doğrulukla hesaplamıştır.",
      hikmetNote: "Aklını göklerin ilahi nizamını anlamaya adayan büyük İslam alimi."
    }
  ],
  dda: {
    id: "dda-g8-1",
    statement: "Mevsimlerin oluşmasında Dünya'nın eksen eğikliği ve Güneş etrafında dolanması etkilidir.",
    correctDecision: "D",
    reason: "İki temel etken eksen eğikliği ve yıllık harekettir.",
    ifTrue: { exit: 1, isCorrect: true, feedback: "Tebrikler! Mevsimlerin oluşumunu doğru kavradınız." },
    ifFalse: { exit: 2, isCorrect: false, feedback: "Hatalı karar!" }
  },
  biliyorumAnliyorumDusunuyorum: {
    biliyorum: "23° 27' eksen eğikliği vardır; 21 Haziran'da KYK'de yaz başlar; 21 Aralık'ta KYK'de kış başlar; 21 Mart ve 23 Eylül ekinokstur.",
    anliyorum: "Mevsimlerin mesafeyle ilgisi yoktur, ışığın geliş açısı ve birim yüzeye düşen enerji belirleyicidir.",
    dusunuyorum: "Eksen eğikliğinin sağladığı bu mevsimsel döngü olmasaydı tarım, meyveler ve canlıların yaşamı nasıl altüst olurdu?"
  },
  pekistirmeIstasyonu: {
    stationTitle: "Neler Öğrendik? & 8. Sınıf 1. Pekiştirme İstasyonu (Mevsimlerin Oluşumu)",
    pageReference: "LGS Maarif Sayfa 10 - 24",
    summaryText: "Eksen eğikliği, ışınların geliş açısı, gündönümü ve ekinoks tarihleri, gölge boyu ilişkisi.",
    targetSkills: ["Mevsimlerin oluşum nedenlerini ve tarihlerini analiz eder."]
  },
  fillInBlanks: [
    {
      id: "fib-8-1-1",
      number: 1,
      baglam: "Dünya'nın dönme ekseni yörünge düzlemine tam dik değildir, belirli bir açıyla eğiktir.",
      soruKoku: "Dünya'nın eksen eğikliği .................................... derece 27 dakikadır.",
      blankAnswer: "23",
      acceptableAnswers: ["23", "23,5", "23.5"],
      explanation: "Eksen eğikliği 23° 27'dir.",
      wordBankHint: ["23", "45", "90", "0"]
    },
    {
      id: "fib-8-1-2",
      number: 2,
      baglam: "Kuzey Yarım Küre'de en uzun gündüzün yaşandığı ve yaz mevsiminin başladığı tarihtir.",
      soruKoku: "Kuzey Yarım Küre'de yaz başlangıcı tarihi .................................... Hazirandır.",
      blankAnswer: "21",
      acceptableAnswers: ["21", "21 Haziran"],
      explanation: "21 Haziran yaz gündönümüdür.",
      wordBankHint: ["21", "23", "1", "30"]
    },
    {
      id: "fib-8-1-3",
      number: 3,
      baglam: "Güneş ışınlarının Ekvator'a öğle vakti dik açıyla geldiği ve tüm dünyada gece-gündüz eşitliğinin yaşandığı günlerdir.",
      soruKoku: "Gece ve gündüz sürelerinin eşit olmasına .................................... denir.",
      blankAnswer: "Ekinoks",
      acceptableAnswers: ["ekinoks", "Ekinoks"],
      explanation: "Ekinoks 21 Mart ve 23 Eylül'de gerçekleşir.",
      wordBankHint: ["Ekinoks", "Gündönümü", "Tutulma", "Dolunay"]
    },
    {
      id: "fib-8-1-4",
      number: 4,
      baglam: "Güneş ışınları bir bölgeye ne kadar dik gelirse dikilen bir çubuğun öğle vakti gölge boyu o kadar kısa olur.",
      soruKoku: "Işınların dik geldiği yaz mevsiminde öğle vakti gölge boyu en .................................... seviyededir.",
      blankAnswer: "Kısa",
      acceptableAnswers: ["kısa", "Kısa"],
      explanation: "Dik açıda gölge boyu küçülür/kısalır.",
      wordBankHint: ["Kısa", "Uzun", "Geniş", "Sabit"]
    },
    {
      id: "fib-8-1-5",
      number: 5,
      baglam: "21 Aralık tarihinde Güneş ışınları Güney Yarım Küre'deki Oğlak Dönencesi'ne dik açıyla düşer.",
      soruKoku: "21 Aralık'ta Güney Yarım Küre'de .................................... mevsimi başlar.",
      blankAnswer: "Yaz",
      acceptableAnswers: ["yaz", "Yaz"],
      explanation: "21 Aralık'ta GYK yaz yaşar.",
      wordBankHint: ["Yaz", "Kış", "İlkbahar", "Sonbahar"]
    },
    {
      id: "fib-8-1-6",
      number: 6,
      baglam: "Kuzey Yarım Küre'de Yengeç Dönencesi, Güney Yarım Küre'de ise Oğlak Dönencesi bulunur.",
      soruKoku: "Kuzey Yarım Küre'deki 23° 27' enlemine .................................... Dönencesi denir.",
      blankAnswer: "Yengeç",
      acceptableAnswers: ["yengeç", "Yengeç"],
      explanation: "Kuzeyde Yengeç, güneyde Oğlak dönencesi vardır.",
      wordBankHint: ["Yengeç", "Oğlak", "Ekvator", "Kutup"]
    },
    {
      id: "fib-8-1-7",
      number: 7,
      baglam: "Işık ışınlarının yüzeyle yaptığı açı büyüdükçe (dike yaklaştıkça) birim yüzeye aktarılan ısı enerjisi artar.",
      soruKoku: "Işınlar dik geldikçe birim alana düşen ısı enerjisi .................................... (artar/azalır).",
      blankAnswer: "Artar",
      acceptableAnswers: ["artar", "Artar"],
      explanation: "Dik ışık enerji yoğunluğunu artırır.",
      wordBankHint: ["Artar", "Azalır", "Değişmez", "Sıfırlanır"]
    },
    {
      id: "fib-8-1-8",
      number: 8,
      baglam: "Dünya'nın kendi ekseni etrafında dönmesi gece ve gündüzü oluştururken; Güneş etrafında dolanması mevsimleri oluşturur.",
      soruKoku: "Dünya'nın Güneş etrafındaki 1 tam turu .................................... gün 6 saat sürer.",
      blankAnswer: "365",
      acceptableAnswers: ["365"],
      explanation: "Yıllık dolanma 365 gün 6 saattir.",
      wordBankHint: ["365", "24", "30", "12"]
    },
    {
      id: "fib-8-1-9",
      number: 9,
      baglam: "23 Eylül tarihinde Kuzey Yarım Küre'de sonbahar başlarken Güney Yarım Küre'de hangi mevsim başlar?",
      soruKoku: "23 Eylül'de Güney Yarım Küre'de .................................... başlar.",
      blankAnswer: "İlkbahar",
      acceptableAnswers: ["ilkbahar", "İlkbahar"],
      explanation: "Yarım küreler zıt mevsim yaşar.",
      wordBankHint: ["İlkbahar", "Sonbahar", "Kış", "Yaz"]
    },
    {
      id: "fib-8-1-10",
      number: 10,
      baglam: "Eksen eğikliği olmasaydı Güneş ışınları yıl boyunca sadece Ekvator'a dik açıyla gelirdi.",
      soruKoku: "Eksen eğikliği olmasaydı .................................... (mevsimler/günler) oluşmazdı.",
      blankAnswer: "Mevsimler",
      acceptableAnswers: ["mevsimler", "Mevsimler"],
      explanation: "Eksen eğikliği mevsimlerin temel nedenidir.",
      wordBankHint: ["Mevsimler", "Saatler", "Geceler", "Yıllar"]
    }
  ],
  contextQuestions: [
    {
      id: "mcq-8-1-1",
      number: 1,
      baglam: "Bir LGS öğrencisi 21 Haziran tarihinde Türkiye'de (Kuzey Yarım Küre) öğle vakti ölçtüğü gölge boyunun, 21 Aralık tarihinde aynı saatte ölçtüğü gölge boyundan çok daha kısa olduğunu fark etmiştir.",
      soruKoku: "21 Haziran'da gölge boyunun daha kısa olmasının sebebi nedir?",
      secenekler: {
        A: "Dünya'nın Güneş'e daha yakın olması",
        B: "21 Haziran'da Güneş ışınlarının Türkiye'ye daha büyük (dike yakın) bir açıyla gelmesi",
        C: "21 Haziran'da havanın bulutlu olması",
        D: "Türkiye'nin güney yarım kürede yer alması"
      },
      dogruCevap: "B",
      cozum: "Güneş ışınlarının geliş açısı büyüdükçe (dike yaklaştıkça) gölge boyu kısalır. 21 Haziran'da Kuzey Yarım Küre'ye ışınlar en dik açıyla gelir.",
      olculenKazanim: "F.8.1.1.2. Güneş ışınlarının geliş açısı ile gölge boyu ilişkisini irdeler.",
      olculenBeceri: "Veri Analizi ve Çıkarım",
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
      id: "mcq-8-1-2",
      number: 2,
      baglam: "Güneş ışınlarının birim alana düşürdüğü enerji miktarı K ve L bölgelerinde ölçülmüş ve şu sonuçlar elde edilmiştir:\n- K bölgesinde: Işınlar 85° açıyla düşüyor, 1 m² alana düşen ısı enerjisi yüksek.\n- L bölgesinde: Işınlar 25° açıyla düşüyor, 1 m² alana düşen ısı enerjisi düşük.",
      soruKoku: "Bu ölçümlere göre K ve L bölgelerinde sırasıyla hangi mevsimlerin yaşandığı söylenebilir?",
      secenekler: {
        A: "K: Kış, L: Yaz",
        B: "K: Yaz, L: Kış",
        C: "K: Sonbahar, L: İlkbahar",
        D: "K: Kış, L: Sonbahar"
      },
      dogruCevap: "B",
      cozum: "Dik açıya yakın olan (85°) K bölgesi yaz mevsimini, eğik açıyla ışık alan (25°) L bölgesi ise kış mevsimini yaşar.",
      olculenKazanim: "F.8.1.1.1. Işık açısı ve mevsimsel sıcaklık ilişkisini modeller.",
      olculenBeceri: "Neden-Sonuç İlişkisi",
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
