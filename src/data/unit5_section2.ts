import { SectionContent } from '../types';

export const section5_5_2: SectionContent = {
  code: "5.5.2",
  title: "Isı ve Sıcaklığın Karşılaştırılması ile Isı Alışverişi",
  unitCode: "5. Ünite",
  unitTitle: "Maddenin Doğası",
  summary: "Isı ve sıcaklık kavramlarının farkı, termometre ile sıcaklık ölçümü, kalorimetre ile ısı hesabı, sıcak maddeden soğuk maddeye ısı akışı, denge sıcaklığı, eşit sıcaklıktaki maddelerde ısı alışverişinin olmaması, termal kameralar ve HADAR teknolojisi.",
  kazanimlar: [
    "F.5.5.2.1. Isı ve sıcaklık arasındaki temel farkları açıklar.",
    "Farklı sıcaklıktaki maddelerin bir araya geldiğinde aralarında ısı alışverişi olduğunu ve ısı akış yönünün sıcaktan soğuğa doğru gerçekleştiğini deneyerek keşfeder.",
    "Denge sıcaklığı kavramını kavrar ve termal görüntüleme teknolojilerini (HADAR) değerlendirir."
  ],
  hatirlayalim: {
    text: "Günlük hayatta 'Bugün hava ısısı 25 derece' gibi yaygın ama bilimsel olarak yanlış cümleler duyarız. Isı ile sıcaklık aynı şey değildir! Biri madde taneciklerinin transfer edilen enerjisiyken diğeri bu enerjinin bir ölçüsüdür. Sıcak bir çayın içine atılan soğuk kaşığın nasıl ısındığını ve aralarındaki enerji akışını inceleyeceğiz.",
    keyPoints: [
      "Sıcaklık: Bir enerji DEĞİLDİR; taneciklerin ortalama kinetik enerjisinin bir göstergesidir. Termometre ile ölçülür, birimi derece selsiyustur (°C).",
      "Isı: Bir ENERJİ türüdür; sıcaklıkları farklı maddeler arasında alınıp verilen enerjidir. Kalorimetre kabı ile hesaplanır, birimi joule (J) veya kaloridir (cal).",
      "Isı akış yönü DAİMA sıcak maddeden soğuk maddeye doğrudur.",
      "Isı alışverişi iki maddenin sıcaklığı eşitleninceye (denge sıcaklığına ulaşıncaya) kadar devam eder.",
      "Sıcaklıkları eşit olan iki madde arasında ASLA ısı alışverişi gerçekleşmez."
    ]
  },
  onDegerlendirme: [
    {
      id: "on-isi-1",
      question: "'Havanın ısısı 30 °C' cümlesindeki bilimsel hata nedir?",
      answer: "30 °C bir sıcaklık değeridir; ısı bir enerji olduğu için birimi joule veya kaloridir. Doğrusu 'Havanın sıcaklığı 30 °C'dir' olmalıdır."
    },
    {
      id: "on-isi-2",
      question: "Sıcak bir çorbanın içine metal bir kaşık bırakıldığında bir süre sonra kaşığın sapı neden ısınır?",
      answer: "Çünkü sıcak çorbadan daha soğuk olan kaşığa doğru ısı akışı gerçekleşir; kaşık ısı alarak sıcaklığını artırır."
    },
    {
      id: "on-isi-3",
      question: "Farklı sıcaklıktaki iki sıvı karıştırıldığında karışımın son sıcaklığı nasıl belirlenir?",
      answer: "Karışımın son sıcaklığı (denge sıcaklığı) iki sıvının başlangıç sıcaklıkları arasında bir değer alır; sıcak olanın sıcaklığı düşer, soğuk olanınki yükselir."
    },
    {
      id: "on-isi-4",
      question: "Sıcaklıkları ikisi de 40 °C olan iki su dolu kap birbirine karıştırıldığında aralarında ısı alışverişi olur mu?",
      answer: "Hayır, sıcaklıkları eşit olduğu için aralarında ısı alışverişi gerçekleşmez."
    },
    {
      id: "on-isi-5",
      question: "Termometreler hangi fiziksel ilkeye göre çalışır?",
      answer: "İçindeki sıvının (cıva veya alkol) sıcaklık arttıkça genleşip yükselmesi, sıcaklık azaldıkça büzülüp alçalması ilkesine göre çalışır."
    }
  ],
  hazirlik: {
    question: "Kışın ellerimiz üşüdüğünde ellerimizi birbirine sürttüğümüzde veya kalorifer peteğine dokunduğumuzda hissettiğimiz o sıcacık rahatlama nasıl gerçekleşir?",
    answer: "Peteğe dokunduğumuzda peteğin sıcaklığı elimizden yüksek olduğu için petekten elimize doğru ısı enerjisi akar; elimizin sıcaklığı yükselerek ısınırız."
  },
  merak: {
    question: "Gecenin zifiri karanlığında etrafta hiçbir ışık kaynağı yokken termal kameralar veya arama-kurtarma dronları canlı bir insanı veya kediyi bembeyaz parıldarken nasıl görebilir?",
    answer: "Çünkü mutlak sıfırın üzerindeki her madde, özellikle vücut sıcaklığı çevreye göre yüksek olan canlılar çevreye kızılötesi ısı ışıması yayar; termal kameralar bu ısı ışımasını algılar."
  },
  kopru: {
    title: "Köprü İstasyonu: Yapay Zekâ Destekli Gece Görüşü - HADAR Teknolojisi",
    content: "Ders kitabımızın Bilgi İstasyonu'nda (sayfa 72) anlatılan HADAR (Isı Destekli Tespit ve Menzil) teknolojisi, geleneksel termal kameraların ötesine geçerek yapay zekâ ve optik algılayıcılarla nesnelerin ısı izlerini gündüz gibi net bir görüntüye dönüştürür. Sisli ve karanlık ortamlarda otonom araçların ve savunma sanayiimizin güvenliğini sağlar.",
    question: "Celsius (°C) ve Fahrenheit (°F) ölçeklerinin farkı nedir?",
    answer: "Celsius suyun donma noktasını 0 °C, kaynamasını 100 °C kabul eder; Fahrenheit ise donmayı 32 °F, kaynamayı 212 °F kabul eder."
  },
  hikmetStages: [
    {
      stage: 1,
      name: "1. Varlığı Tanıt",
      concept: "Kâinatın Hayat Enerjisi: Isı",
      text: "Isı; yıldızlardan atomlara kadar kâinattaki tüm hareketi ve dönüşümü sağlayan görünmez bir enerji nehridir."
    },
    {
      stage: 2,
      name: "2. Parçalarını Göster",
      concept: "Isı ve Sıcaklığın İki Ayrı Aynası",
      text: "Isı alınıp verilen cevherdir; sıcaklık ise o cevherin varlığını ve derecesini termometre ile bildiren göstergedir."
    },
    {
      stage: 3,
      name: "3. Her Parçanın Vazifesini Göster",
      concept: "Sıcaklıktan Soğukluğa Merhamet Akışı",
      text: "Isı daima çok olandan az olana (sıcaktan soğuğa) akar; bu kural olmasaydı Güneş Dünya'yı ısıtamaz, canlılar donup kalırdı."
    },
    {
      stage: 4,
      name: "4. Parçalar Arasındaki Uyumu Göster",
      concept: "Termal Denge ve Eşitlenme Nizamı",
      text: "Isı alışverişi sonsuza dek sürmez; iki taraf eşitlendiğinde (termal denge) durur; bu da sistemlerin aşırı ısınıp patlamasını önler."
    },
    {
      stage: 5,
      name: "5. Ölçü ve Düzeni Göster",
      concept: "Termometre Sıvısının Kusursuz Genleşmesi",
      text: "Cıva ve alkolün sıcaklıkla birer derece birer derece yükselmesi, maddelerin kanunlara nasıl mutlak bir itaatle bağlı olduğunu sergiler."
    },
    {
      stage: 6,
      name: "6. Büyük Benzetme Yap",
      concept: "Kâinatın Büyük Termostatı: Okyanuslar ve Atmosfer",
      text: "Ekvatordan kutuplara akan sıcak su akıntıları (Gulf Stream), devasa bir ısı alışverişiyle Dünya'nın sıcaklığını canlıların yaşayabileceği dengede tutar."
    },
    {
      stage: 7,
      name: "7. Hikmet ve Hizmeti Göster",
      concept: "36.5 °C İnsan Vücut Sıcaklığı Sabiti",
      text: "Dışarısı ister -20 °C karlı ister +45 °C çöl sıcağı olsun, vücudumuzun iç ısısının 36.5 °C'de sabit tutulması akıl almaz bir şefkat ve koruma kalkanıdır."
    },
    {
      stage: 8,
      name: "8. İrade ve Sanat Perspektifi",
      concept: "HADAR Teknolojisi ve Kızılötesi Işıma",
      text: "Gözümüzün görmediği kızılötesi ısı dalgalarının kâinatta var kılınması, insanın bu ilmi keşfederek karanlığı aydınlatmasına zemin hazırlamıştır."
    },
    {
      stage: 9,
      name: "9. Akıl Yürütme",
      concept: "Enerji Neden Kendiliğinden Soğuktan Sıcağa Akmaz?",
      text: "Isının daima sıcaktan soğuğa akması evrensel Termodinamiğin İkinci Kanunu'dur. Bu kanun, kendi kendine değil, kâinatı yöneten bir Nizam Verici'nin emriyle işler."
    },
    {
      stage: 10,
      name: "10. Tefekkür ve Sonuç",
      concept: "İlim ve Muhabbetle Isınan Gönüller",
      text: "Tıpkı sıcağın soğuğu ısıtıp dengeye kavuşturması gibi; ilim ve sevgi de cehalet ve yalnızlığın soğukluğunu eritir. İnsan başkalarına faydalı oldukça hakiki kıymetini bulur."
    }
  ],
  etkinlikler: [
    {
      id: "etk-isi-1",
      title: "Farklı Sıcaklıktaki Suların Karışımı ve Isı Alışverişi Deneyi",
      type: "Deneysel İnceleme",
      materials: ["2 adet beherglas", "Sıcak su (60 °C)", "Soğuk su (20 °C)", "2 adet termometre", "Kronometre"],
      steps: [
        "A kabına 100 mL 60 °C sıcak su, B kabına 100 mL 20 °C soğuk su konur ve başlangıç sıcaklıkları kaydedilir.",
        "İki su geniş bir kapta birbirine karıştırılır.",
        "Her 1 dakikada bir karışımın sıcaklığı ölçülerek sıcaklığın sabit kaldığı an (denge sıcaklığı) tespit edilir."
      ],
      questions: [
        {
          qId: "etk-isi-1-a",
          label: "a",
          prompt: "Sıcak suyun ve soğuk suyun sıcaklıklarında karışım sonrası nasıl bir değişim gözlenmiştir?",
          answer: "Sıcak su ısı vererek soğumuş (sıcaklığı azalmış), soğuk su ise ısı alarak ısınmış (sıcaklığı artmıştır)."
        },
        {
          qId: "etk-isi-1-b",
          label: "b",
          prompt: "Isı akışının yönü hangi maddeden hangi maddeye doğrudur?",
          answer: "Isı akışı sıcaklığı yüksek olan 60 °C sudan sıcaklığı düşük olan 20 °C suya doğrudur."
        },
        {
          qId: "etk-isi-1-c",
          label: "c",
          prompt: "Eşit kütleli bu iki suyun ulaştığı denge sıcaklığı yaklaşık kaç °C olmuştur?",
          answer: "(60 + 20) / 2 = Yaklaşık 40 °C olmuştur; sıcaklıklar eşitlendiğinde ısı alışverişi durmuştur."
        }
      ]
    }
  ],
  bilgiIstasyonlari: [
    {
      title: "HADAR Teknolojisi: Isı Destekli Algılama ve Gece Görüşü",
      scientistOrMission: "Purdue Üniversitesi Araştırmacıları & Savunma Teknolojileri (2023)",
      description: "HADAR (Heat-Assisted Detection and Ranging), nesnelerden yayılan ısı ışımasını ve optik dalga boylarını yapay zekâ algoritmalarıyla analiz ederek karanlıkta, siste ve duman altında gündüz çekilmiş renkli fotoğraf netliğinde görüntüler oluşturur.",
      hikmetNote: "Her cismin sıcaklığına göre çevreye bir ısı izi yayması, kâinatta hiçbir şeyin gizli kalmayacak bir kayıt ve intizam altında olduğunu tefekkür ettirir."
    },
    {
      title: "Çağını Aşanlar: Anders Celsius ve Daniel Gabriel Fahrenheit",
      scientistOrMission: "Anders Celsius (1701-1744) & Daniel Gabriel Fahrenheit (1686-1736)",
      description: "Celsius suyun donma noktasını 0, kaynama noktasını 100 kabul ederek 100 eşit parçaya bölen derece selsiyus (°C) ölçeğini geliştirdi. Fahrenheit ise ilk güvenilir cıvalı termometreyi icat etti.",
      hikmetNote: "Sıcaklığı gözle göremeyen insan, aklıyla cıvanın genleşmesini cetvelle birleştirerek bu görünmez hakikati sayılara dökmüştür."
    }
  ],
  dda: {
    id: "dda-isi-root",
    statement: "Isı bir enerji türüdür, sıcaklık ise bir enerji değil göstergedir.",
    correctDecision: "D",
    reason: "Isı joule/kalori ile ölçülen enerjidir; sıcaklık ise ortalama kinetik enerjinin °C cinsinden değeridir.",
    ifTrue: {
      id: "dda-isi-2a",
      statement: "Isı alışverişinde ısı akışı daima soğuk maddeden sıcak maddeye doğrudur.",
      correctDecision: "Y",
      reason: "Isı akışı kesinlikle SICAK maddeden SOĞUK maddeye doğrudur!",
      ifFalse: {
        id: "dda-isi-3a",
        statement: "Sıcaklıkları eşit olan iki madde temas ettirildiğinde aralarında ısı alışverişi gerçekleşmez.",
        correctDecision: "D",
        reason: "Sıcaklık farkı yoksa ısı akışı da olmaz.",
        ifTrue: { exit: 1, isCorrect: true, feedback: "Harika! Doğru bilimsel kavrayışla 1. Çıkış'a ulaştınız." },
        ifFalse: { exit: 2, isCorrect: false, feedback: "Hatalı çıkış!" }
      }
    }
  },
  biliyorumAnliyorumDusunuyorum: {
    biliyorum: "Isı bir enerji olup kalorimetre ile hesaplanır (joule/cal); sıcaklık ise termometre ile ölçülen bir değerdir (°C).",
    anliyorum: "Isı daima sıcaktan soğuğa akar; maddelerin sıcaklıkları eşitlendiğinde denge sıcaklığına ulaşılır ve ısı akışı durur.",
    dusunuyorum: "Güneş'in trilyonlarca kilometre öteden dünyamızı ısıtmasından canlı bedenlerindeki 36.5 °C'lik mucizevi termal dengeye kadar her ısı alışverişi, kâinattaki eşsiz şefkat ve intizamı gösterir."
  },
  pekistirmeIstasyonu: {
    stationTitle: "Pekiştirme İstasyonu-1, 2 & 3 (Isı ve Sıcaklık & Isı Alışverişi)",
    pageReference: "Sayfa 71, 74, 75",
    summaryText: "Isı ve sıcaklık kavramlarının karşılaştırma tablosu, günlük dildeki kavram yanılgılarının düzeltilmesi, temas halindeki maddelerde ısı akış oklarının çizimi ve denge sıcaklığı hesaplamaları istasyonlarının sentezi.",
    targetSkills: [
      "F.5.5.2.1. Isı ve sıcaklık arasındaki farkları açıklar.",
      "Isı alışverişinde ısının akış yönünü (sıcaktan soğuğa) belirler.",
      "Denge sıcaklığının iki sıcaklık değeri arasında olduğunu kavrar."
    ]
  },
  fillInBlanks: [
    {
      id: "fib-isi-1",
      number: 1,
      baglam: "Maddeleri oluşturan taneciklerin ortalama kinetik enerjilerinin bir göstergesidir.",
      soruKoku: "Bu kavrama .................................... adı verilir.",
      blankAnswer: "Sıcaklık",
      acceptableAnswers: ["sıcaklık", "Sıcaklık"],
      explanation: "Sıcaklık ortalama kinetik enerjinin göstergesidir.",
      wordBankHint: ["Sıcaklık", "Isı", "Basınç", "Hacim"]
    },
    {
      id: "fib-isi-2",
      number: 2,
      baglam: "Sıcaklıkları farklı iki madde arasında alınıp verilen enerjidir.",
      soruKoku: "Bu enerji türüne .................................... denir.",
      blankAnswer: "Isı",
      acceptableAnswers: ["ısı", "Isı", "ısı enerjisi"],
      explanation: "Alınıp verilen enerji ısıdır.",
      wordBankHint: ["Isı", "Sıcaklık", "Işık", "Kuvvet"]
    },
    {
      id: "fib-isi-3",
      number: 3,
      baglam: "Bir hastanın veya odanın sıcaklığını ölçmek için kullanılan alettir.",
      soruKoku: "Sıcaklık .................................... ile ölçülür.",
      blankAnswer: "Termometre",
      acceptableAnswers: ["termometre", "Termometre"],
      explanation: "Sıcaklık termometre ile ölçülür.",
      wordBankHint: ["Termometre", "Kalorimetre", "Dinamometre", "Barometre"]
    },
    {
      id: "fib-isi-4",
      number: 4,
      baglam: "Farklı sıcaklıktaki iki madde temas ettiğinde ısı akışı başlar.",
      soruKoku: "Isı akışının yönü daima .................................... maddeden soğuk maddeye doğrudur.",
      blankAnswer: "Sıcak",
      acceptableAnswers: ["sıcak", "Sıcak"],
      explanation: "Isı akışı sıcaktan soğuğa doğrudur.",
      wordBankHint: ["Sıcak", "Soğuk", "Ağır", "Hafif"]
    },
    {
      id: "fib-isi-5",
      number: 5,
      baglam: "Isı alışverişi yapan iki maddenin sıcaklıkları eşitlendiğinde ulaştıkları sıcaklıktır.",
      soruKoku: "Bu sıcaklığa .................................... sıcaklığı denir.",
      blankAnswer: "Denge",
      acceptableAnswers: ["denge", "Denge", "son"],
      explanation: "Eşitlenen son sıcaklık denge sıcaklığıdır.",
      wordBankHint: ["Denge", "Kaynama", "Erime", "Donma"]
    },
    {
      id: "fib-isi-6",
      number: 6,
      baglam: "Uluslararası birim sisteminde sıcaklığın yaygın olarak kullanılan birimidir.",
      soruKoku: "Sıcaklık birimi Derece ....................................dir (°C).",
      blankAnswer: "Selsiyus",
      acceptableAnswers: ["selsiyus", "Selsiyus", "Celsius", "celsius"],
      explanation: "Sıcaklık birimi °C (Selsiyus)'tur.",
      wordBankHint: ["Selsiyus", "Joule", "Kalori", "Gram"]
    },
    {
      id: "fib-isi-7",
      number: 7,
      baglam: "Isı miktarını belirlemek ve hesaplamak için kullanılan özel yalıtımlı kaptır.",
      soruKoku: "Isı enerjisi .................................... kabı ile hesaplanır.",
      blankAnswer: "Kalorimetre",
      acceptableAnswers: ["kalorimetre", "Kalorimetre"],
      explanation: "Isı kalorimetre kabıyla hesaplanır.",
      wordBankHint: ["Kalorimetre", "Termometre", "Mezür", "Dinamometre"]
    },
    {
      id: "fib-isi-8",
      number: 8,
      baglam: "İki maddenin başlangıç sıcaklıkları birbirine eşit olduğunda aralarında bir durum gözlenmez.",
      soruKoku: "Sıcaklıkları eşit maddeler arasında ısı .................................... gerçekleşmez.",
      blankAnswer: "Alışverişi",
      acceptableAnswers: ["alışverişi", "Alışverişi", "akışı"],
      explanation: "Eşit sıcaklıkta ısı alışverişi olmaz.",
      wordBankHint: ["Alışverişi", "Geçişi", "Erimesi", "Buharlaşması"]
    },
    {
      id: "fib-isi-9",
      number: 9,
      baglam: "70 °C'deki sıcak çay bardağına 10 °C'deki çay kaşığı daldırıldığında kaşık ısınır.",
      soruKoku: "Bu olayda çay kaşığı ısı .................................... ve sıcaklığı yükselir.",
      blankAnswer: "Alır",
      acceptableAnswers: ["alır", "Alır"],
      explanation: "Soğuk olan kaşık ısı alır.",
      wordBankHint: ["Alır", "Verir", "Yansıtır", "Yok eder"]
    },
    {
      id: "fib-isi-10",
      number: 10,
      baglam: "Purdue Üniversitesi'nde geliştirilen ısı destekli yapay zekâ gece görüş teknolojisidir.",
      soruKoku: "Bu optik sistemin adı .................................... teknolojisidir.",
      blankAnswer: "HADAR",
      acceptableAnswers: ["HADAR", "hadar", "Hadar"],
      explanation: "Sistem HADAR teknolojisidir.",
      wordBankHint: ["HADAR", "LIDAR", "RADAR", "SONAR"]
    }
  ],
  contextQuestions: [
    {
      id: "mcq-isi-1",
      number: 1,
      baglam: "Pekiştirme İstasyonu-2'de (sayfa 74) aşağıdaki cümlelerin doğruluğu tartışılmaktadır:\n1. 'Bugün havanın ısısı 28 °C olarak ölçüldü.'\n2. 'Hasta çocuğun vücut sıcaklığı 38.5 °C'ye yükseldi.'\n3. 'Kışın sobadan odaya sıcaklık yayılır.'",
      soruKoku: "Bu ifadelerden hangisi BİLİMSEL OLARAK DOĞRU kullanılmıştır?",
      secenekler: {
        A: "Yalnızca 2",
        B: "1 ve 2",
        C: "Yalnızca 3",
        D: "1, 2 ve 3"
      },
      dogruCevap: "A",
      cozum: "1 yanlıştır (hava ısısı değil sıcaklığı denmeli), 3 yanlıştır (sıcaklık değil ısı enerjisi yayılır). Yalnızca 2 bilimsel olarak doğrudur.",
      olculenKazanim: "F.5.5.2.1. Isı ve sıcaklık kavram yanılgılarını giderir.",
      olculenBeceri: "Kavram Analizi ve Bilimsel Dil Kullanımı",
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
      id: "mcq-isi-2",
      number: 2,
      baglam: "Sıcaklığı 70 °C olan demir bir bilye, sıcaklığı 20 °C olan su dolu bir kaba bırakılmıştır. Bir süre sonra bilye ve suyun sıcaklığının 35 °C'de eşitlendiği görülmüştür.",
      soruKoku: "Bu deneyle ilgili aşağıdaki ifadelerden hangisi KESİNLİKLE DOĞRUDUR?",
      secenekler: {
        A: "Demir bilye suyun içine ısı vermiş ve bilyenin sıcaklığı düşmüştür.",
        B: "Isı akışı sudan demir bilyeye doğru gerçekleşmiştir.",
        C: "Suyun sıcaklığı azalmıştır.",
        D: "Isı alışverişi 70 °C'de durmuştur."
      },
      dogruCevap: "A",
      cozum: "Sıcak olan demir bilye (70 °C) soğuk suya (20 °C) ısı enerjisi vermiş, sıcaklığı 35 °C'ye inmiştir.",
      olculenKazanim: "F.5.5.2.1. Isı akış yönünü ve sıcaklık değişimini açıklar.",
      olculenBeceri: "Deneysel Süreç Analizi",
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
      id: "mcq-isi-3",
      number: 3,
      baglam: "Pekiştirme İstasyonu-3'te (sayfa 75) sıcaklıkları 50 °C olan K sıvısı ile 50 °C olan L sıvısı aynı kapta karıştırılmıştır.",
      soruKoku: "Bu iki sıvı arasında gerçekleşen ısı alışverişi ile ilgili hangisi doğrudur?",
      secenekler: {
        A: "Sıvıların başlangıç sıcaklıkları eşit olduğu için aralarında ısı alışverişi gerçekleşmez.",
        B: "K sıvısından L sıvısına ısı akar.",
        C: "Karışımın sıcaklığı 100 °C olur.",
        D: "Sıvılar anında donar."
      },
      dogruCevap: "A",
      cozum: "Isı alışverişi olması için mutlaka sıcaklık farkı olmalıdır; sıcaklıkları eşitse ısı akışı olmaz.",
      olculenKazanim: "F.5.5.2.1. Sıcaklık eşitliğinde ısı akışının olmadığını kavrar.",
      olculenBeceri: "Kritik Düşünme",
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
      id: "mcq-isi-4",
      number: 4,
      baglam: "Termometre ile kalorimetre kabının özellikleri karşılaştırıldığında bir öğrenci şu tabloyu hazırlamıştır:\n- Termometre: Sıcaklık ölçer, birimi °C'dir.\n- Kalorimetre: Isı hesaplar, birimi joule veya kaloridir.",
      soruKoku: "Öğrencinin hazırladığı tablo hakkında ne söylenebilir?",
      secenekler: {
        A: "Tablo tamamen doğrudur.",
        B: "Termometre ile kalorimetrenin görevleri yer değiştirmelidir.",
        C: "Sıcaklığın birimi joule olmalıdır.",
        D: "Isı termometre ile ölçülür."
      },
      dogruCevap: "A",
      cozum: "Termometre sıcaklığı (°C), kalorimetre ise ısı enerjisini (joule/cal) hesaplar; tablo eksiksiz doğrudur.",
      olculenKazanim: "F.5.5.2.1. Isı ve sıcaklık araç-birim eşleştirmesini doğrular.",
      olculenBeceri: "Bilimsel Araç-Gereç Okuryazarlığı",
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
      id: "mcq-isi-5",
      number: 5,
      baglam: "Bir anne bebeğine süt hazırlarken çok sıcak olan biberonu (65 °C) soğutmak için içi soğuk su (15 °C) dolu bir kâsenin içine yerleştirmiştir.",
      soruKoku: "Bu olayda biberon ile kâsedeki su arasındaki denge sıcaklığı aşağıdakilerden hangisi OLABİLİR?",
      secenekler: {
        A: "35 °C",
        B: "10 °C",
        C: "70 °C",
        D: "80 °C"
      },
      dogruCevap: "A",
      cozum: "Denge sıcaklığı daima başlangıç sıcaklıklarının (15 °C ile 65 °C) arasında olmalıdır; 35 °C bu aralıktadır.",
      olculenKazanim: "F.5.5.2.1. Denge sıcaklığı aralığını tahmin eder.",
      olculenBeceri: "Sayısal Muhakeme ve Sınır Değer Analizi",
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
      id: "mcq-isi-6",
      number: 6,
      baglam: "Ders kitabındaki Bilgi İstasyonu'nda (sayfa 72) anlatılan HADAR teknolojisi, termal görüntüleri yapay zekâ ile işleyerek sisli ve zifiri karanlık ortamlarda nesneleri netleştirir.",
      soruKoku: "HADAR teknolojisinin çalışabilmesini sağlayan temel fiziksel ilke nedir?",
      secenekler: {
        A: "Her nesnenin sıcaklığına bağlı olarak etrafına kızılötesi ısı ışıması yapması",
        B: "Karanlıkta havanın donması",
        C: "Cisimlerin kendi kendine ses çıkarması",
        D: "Güneş ışığının yeraltından yansıması"
      },
      dogruCevap: "A",
      cozum: "Tüm cisimler sıcaklıklarına göre kızılötesi ısı yayarlar; HADAR bu ışıma imzasını algılayarak görüntü üretir.",
      olculenKazanim: "F.5.5.2.1. Termal algılama teknolojilerinin temel ilkesini açıklar.",
      olculenBeceri: "İleri Teknoloji ve Fen İlişkisi",
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
      id: "mcq-isi-7",
      number: 7,
      baglam: "Bir kış günü dışarıda unutulan metal banka oturan bir kişi bankın buz gibi olduğunu söyleyip üşümüştür.",
      soruKoku: "Bu kişinin üşümesinin ve bankı soğuk hissetmesinin sebebi nedir?",
      secenekler: {
        A: "Kişinin vücudundan (36.5 °C) daha soğuk olan metal banka doğru hızlı bir ısı akışının gerçekleşmesi ve vücudunun ısı kaybetmesi",
        B: "Banka oturduğunda banktan kişiye soğuk enerjisinin akması",
        C: "Bankın manyetik olması",
        D: "Kişinin kanının donması"
      },
      dogruCevap: "A",
      cozum: "Soğukluk akmaz, ısı akar! Kişinin sıcak vücudundan soğuk banka ısı enerjisi aktığı için kişi ısı kaybeder ve üşür.",
      olculenKazanim: "F.5.5.2.1. Günlük hayattaki üşüme hissini ısı kaybıyla açıklar.",
      olculenBeceri: "Kavram Yanılgısını Önleme",
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
      id: "mcq-isi-8",
      number: 8,
      baglam: "Özdeş iki odada bulunan iki kaptan birinde 100 mL 80 °C su, diğerinde 1000 mL (1 litre) 80 °C su bulunmaktadır.",
      soruKoku: "Bu iki kaptaki suların sıcaklık ve ısı enerjisi miktarları karşılaştırıldığında hangisi doğrudur?",
      secenekler: {
        A: "Sıcaklıkları eşittir (80 °C); ancak 1 litre suyun madde miktarı fazla olduğu için sahip olduğu toplam ısı enerjisi daha fazladır.",
        B: "100 mL suyun sıcaklığı daha fazladır.",
        C: "Her ikisinin de ısı enerjisi birbirine eşittir.",
        D: "1 litre suyun sıcaklığı 800 °C'dir."
      },
      dogruCevap: "A",
      cozum: "Sıcaklıkları aynıdır (80 °C); ancak ısı toplam enerjidir, madde miktarı (kütlesi) büyük olanın toplam ısısı çok daha büyüktür.",
      olculenKazanim: "F.5.5.2.1. Sıcaklık eşitliğinde kütle-ısı enerjisi ilişkisini kavrar.",
      olculenBeceri: "Oransal Muhakeme ve Kavram Ayrımı",
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
      id: "mcq-isi-9",
      number: 9,
      baglam: "Pekiştirme İstasyonu-1'de (sayfa 71) verilen 'Isı ve Sıcaklık Karşılaştırma Tablosu'nda aşağıdaki özelliklerden hangisi 'ISI' kavramına aittir?",
      soruKoku: "Hangisi ısı kavramına ait bir özelliktir?",
      secenekler: {
        A: "Bir enerji türüdür ve birimi joule (J) veya kaloridir (cal).",
        B: "Termometre ile ölçülür.",
        C: "Birimi derece selsiyustur (°C).",
        D: "Bir enerji türü değildir."
      },
      dogruCevap: "A",
      cozum: "Isı bir enerjidir ve birimi joule veya kaloridir.",
      olculenKazanim: "F.5.5.2.1. Isı kavramının temel niteliklerini tanımlar.",
      olculenBeceri: "Tablo Bilgisi Doğrulama",
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
      id: "mcq-isi-10",
      number: 10,
      baglam: "Bir öğrenci buzdolabından çıkardığı 4 °C'deki soğuk elmayı 24 °C'deki odadaki masanın üzerine bırakmıştır. 2 saat sonra elmanın sıcaklığı 24 °C olarak ölçülmüştür.",
      soruKoku: "Bu 2 saatlik süreçte gerçekleşen olayla ilgili hangisi YANLIŞTIR?",
      secenekler: {
        A: "Odadaki havadan elmaya doğru ısı akışı gerçekleşmiştir.",
        B: "Elma ısı alarak sıcaklığını 4 °C'den 24 °C'ye çıkarmıştır.",
        C: "Elma ile oda havası termal dengeye (denge sıcaklığına) ulaşmıştır.",
        D: "Isı akışı elmadan oda havasına doğru olmuştur."
      },
      dogruCevap: "D",
      cozum: "Isı sıcaktan soğuğa akar; dolayısıyla odadan (24 °C) soğuk elmaya (4 °C) akmıştır. D seçeneğindeki ifade yanlıştır.",
      olculenKazanim: "F.5.5.2.1. Günlük hayattaki ısınma süreçlerini modeller.",
      olculenBeceri: "Hatalı Çıkarımı Tespit Etme",
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
      id: "mcq-isi-11",
      number: 11,
      baglam: "Anders Celsius'un geliştirdiği sıcaklık ölçeği hakkında araştırma yapan bir öğrenci suyun donma ve kaynama noktalarını incelemiştir.",
      soruKoku: "Celsius ölçeğinde suyun donma ve kaynama sıcaklıkları sırasıyla hangi değerlerle tanımlanmıştır?",
      secenekler: {
        A: "0 °C ve 100 °C",
        B: "32 °C ve 212 °C",
        C: "-10 °C ve 50 °C",
        D: "100 °C ve 0 °C"
      },
      dogruCevap: "A",
      cozum: "Celsius ölçeğinde saf suyun donma noktası 0 °C, kaynama noktası ise 100 °C olarak belirlenmiştir.",
      olculenKazanim: "F.5.5.2.1. Celsius ölçeğinin referans noktalarını açıklar.",
      olculenBeceri: "Bilim Tarihi ve Ölçme Standartları",
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
      id: "mcq-isi-12",
      number: 12,
      baglam: "Aşağıdaki sıcaklık değerlerine sahip üç çift madde birbirine temas ettirilmiştir:\nI. 80 °C ve 20 °C\nII. 45 °C ve 45 °C\nIII. 10 °C ve 60 °C",
      soruKoku: "Bu çiftlerden hangileri arasında ISI ALIŞVERİŞİ GERÇEKLEŞİR?",
      secenekler: {
        A: "I ve III",
        B: "Yalnızca II",
        C: "I, II ve III",
        D: "Yalnızca I"
      },
      dogruCevap: "A",
      cozum: "I ve III'te sıcaklık farkı vardır, ısı alışverişi olur. II'de sıcaklıklar eşit (45 °C) olduğundan ısı alışverişi olmaz.",
      olculenKazanim: "F.5.5.2.1. Isı alışverişi koşulunu uygular.",
      olculenBeceri: "Karar Verme",
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
      id: "mcq-isi-13",
      number: 13,
      baglam: "Bir çaydanlık kaynar su (100 °C) ocaktan alınıp mermer tezgaha bırakıldığında mermer tezgahın altı hızla ısınırken çaydanlıktaki su zamanla ılımaktadır.",
      soruKoku: "Bu süreçte çaydanlıktaki su ile mermer tezgah arasındaki ısı akışı hangi anda SONA ERER?",
      secenekler: {
        A: "Çaydanlıktaki suyun sıcaklığı ile mermerin sıcaklığı birbirine eşitlendiğinde",
        B: "Su tamamen bittiğinde",
        C: "Mermer kırıldığında",
        D: "Su 0 °C olduğunda"
      },
      dogruCevap: "A",
      cozum: "Isı alışverişi iki maddenin sıcaklıkları eşitleninceye (termal dengeye ulaşıncaya) kadar sürer ve eşitlenince biter.",
      olculenKazanim: "F.5.5.2.1. Termal denge anını tanımlar.",
      olculenBeceri: "Süreç Bitiş Kriteri Analizi",
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
      id: "mcq-isi-14",
      number: 14,
      baglam: "Deprem ve sel gibi afetlerde enkaz altında kalan canlıların yerini tespit etmek için kullanılan arama-kurtarma dronlarında hangi teknoloji kullanılır?",
      soruKoku: "Enkaz altındaki canlıların vücut ısısını algılayan teknoloji hangisidir?",
      secenekler: {
        A: "Termal (Kızılötesi) kameralar",
        B: "Trafik radarı",
        C: "Radyo alıcısı",
        D: "Güneş paneli"
      },
      dogruCevap: "A",
      cozum: "Canlılar çevreye ısı yayar; termal kameralar bu sıcaklık farkını tespit ederek can kurtarır.",
      olculenKazanim: "F.5.5.2.1. Afet yönetiminde termal teknolojileri değerlendirir.",
      olculenBeceri: "Sosyal Sorumluluk ve Teknoloji",
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
      id: "mcq-isi-15",
      number: 15,
      baglam: "Bir sporcu antrenmandan sonra vücut sıcaklığı yükseldiğinde terler ve ter buharlaşırken sporcunun cildi serinler.",
      soruKoku: "Terlemenin vücudu serinletmesinin temel sebebi nedir?",
      secenekler: {
        A: "Ter sıvısının buharlaşırken deriden ısı enerjisi alması ve böylece vücudun sıcaklığını düşürmesi",
        B: "Terin soğuk bir madde olması",
        C: "Terin rüzgâr üretmesi",
        D: "Vücudun su kaybetmek istemesi"
      },
      dogruCevap: "A",
      cozum: "Buharlaşma ısı alan bir olaydır; ter buharlaşırken vücuttan ısı çeker ve vücut sıcaklığının dengelenmesini sağlar.",
      olculenKazanim: "F.5.5.2.1. Canlılarda termal denge mekanizmasını açıklar.",
      olculenBeceri: "Biyofizik ve Canlılık Dengesi",
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
      id: "mcq-isi-16",
      number: 16,
      baglam: "Sıcaklığı 90 °C olan bir fırın tepsisine dokunan aşçı elini hızla geri çekmiştir. Bu olayda gerçekleşen ısı transferi ile ilgili hangisi doğrudur?",
      soruKoku: "Isı transferi hangi yönde gerçekleşmiştir?",
      secenekler: {
        A: "Tepsiden aşçının eline doğru çok hızlı ısı akışı olmuştur.",
        B: "Aşçının elinden tepsiye soğukluk geçmiştir.",
        C: "Isı akışı olmamıştır.",
        D: "Tepsi aşçının elinden ısı almıştır."
      },
      dogruCevap: "A",
      cozum: "Tepsi 90 °C, aşçının eli 36.5 °C'dir; ısı sıcaktan soğuğa (tepsiden ele) hızla akar.",
      olculenKazanim: "F.5.5.2.1. Temas ile ısı iletim yönünü analiz eder.",
      olculenBeceri: "Günlük Yaşam Fiziği",
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
      id: "mcq-isi-17",
      number: 17,
      baglam: "Bir kış günü odayı ısıtmak için kalorifer peteği açılmıştır. Bir süre sonra odanın tüm köşeleri ısınmıştır.",
      soruKoku: "Peteğin odayı ısıtması sırasında petek ile oda havası arasındaki enerji alışverişi nasıldır?",
      secenekler: {
        A: "Petek odaya ısı enerjisi verir; odadaki havanın sıcaklığı yükselir.",
        B: "Petek odadan sıcaklık çeker.",
        C: "Oda havası peteğe ısı verir.",
        D: "Peteğin sıcaklığı odadan daha düşüktür."
      },
      dogruCevap: "A",
      cozum: "Sıcak olan kalorifer peteği odaya ısı enerjisi aktarır ve havanın sıcaklığı yükselir.",
      olculenKazanim: "F.5.5.2.1. Isıtma sistemlerinde ısı alışverişini kavrar.",
      olculenBeceri: "Uygulamalı Fizik",
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
      id: "mcq-isi-18",
      number: 18,
      baglam: "Sıcaklığı 30 °C olan bir bardak su ile sıcaklığı 70 °C olan bir bardak su yalıtılmış bir kapta karıştırılmıştır.",
      soruKoku: "Karışımın denge sıcaklığı aşağıdakilerden hangisi KESİNLİKLE OLAMAZ?",
      secenekler: {
        A: "25 °C",
        B: "40 °C",
        C: "50 °C",
        D: "60 °C"
      },
      dogruCevap: "A",
      cozum: "Denge sıcaklığı en düşük sıcaklıktan (30 °C) küçük ve en yüksek sıcaklıktan (70 °C) büyük olamaz. 25 °C bu sınırın dışındadır ve kesinlikle imkansızdır.",
      olculenKazanim: "F.5.5.2.1. Denge sıcaklığı limitlerini sorgular.",
      olculenBeceri: "Mantıksal Sınır Analizi",
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
      id: "mcq-isi-19",
      number: 19,
      baglam: "Bir laboratuvarda iki farklı maddenin ısı alışverişi incelenirken araştırmacı maddelerin kütlelerini, ilk sıcaklıklarını ve son sıcaklıklarını kaydetmiştir.",
      soruKoku: "Isı veren maddenin sıcaklığı ve tanecik hareketi hakkında ne söylenebilir?",
      secenekler: {
        A: "Sıcaklığı azalır ve taneciklerinin ortalama kinetik enerjisi (hızı) düşer.",
        B: "Sıcaklığı artar ve tanecikleri hızlanır.",
        C: "Tanecikleri tamamen durur.",
        D: "Maddenin kütlesi yarıya iner."
      },
      dogruCevap: "A",
      cozum: "Isı veren madde enerji kaybeder; bu yüzden sıcaklığı düşer ve taneciklerinin kinetik enerjisi azalır.",
      olculenKazanim: "F.5.5.2.1. Isı kaybının tanecik kinetiğine etkisini açıklar.",
      olculenBeceri: "Mikro-Makro Düzey Geçişi",
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
      id: "mcq-isi-20",
      number: 20,
      baglam: "Pekiştirme İstasyonu-1'deki özet metinde geçen 'Kâinattaki termal denge kanunu' insanlığın paylaşma ve yardımlaşma ahlakına benzetilmiştir.",
      soruKoku: "Isının daima sıcaktan soğuğa akıp dengeye ulaşması doğa kanunu ile insani değerler arasındaki en güzel benzerlik hangisidir?",
      secenekler: {
        A: "Varlıklı ve bilgili olanın, ihtiyacı ve bilgisizliği olanla paylaşıp toplumsal denge ve huzuru sağlaması",
        B: "Herkesin kendi enerjisini saklaması",
        C: "Soğuk olanın sıcağı yok etmesi",
        D: "Hiçbir şeyin değişmemesi"
      },
      dogruCevap: "A",
      cozum: "Isının fazlalıktan eksiğe akıp denge kurması gibi; zenginlik ve ilim de paylaşıldıkça cemiyette huzur ve denge tesis eder.",
      olculenKazanim: "F.5.5.2.1. Fen kanunlarından ahlaki ve felsefi tefekkür üretir.",
      olculenBeceri: "Değer Eğitimi ve Tefekkür",
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
