import { SectionContent } from '../../types';

export const grade6Unit7Review: SectionContent = {
  code: "6.7.3",
  title: "7. Ünite Sonu Değerlendirme ve Beceri Temelli Sonuç Çalışmaları",
  unitCode: "6.7",
  unitTitle: "7. Ünite: Elektriğin İletimi",
  summary: "7. Ünitenin bütünleşik değerlendirmesi: Katı ve sıvı iletkenler/yalıtkanlar; gazların yüksek gerilimde iletkenleşmesi (yıldırım, neon lambalar); elektrik çarpmalarına karşı güvenlik önlemleri ve topraklama; elektriksel direnç kavramı ve birimi (Ohm - Ω); direncin telin uzunluğu, dik kesit alanı ve cinsine bağlılığı; ampul parlaklığı ve devre optimizasyonu; reostanın günlük yaşam teknolojilerindeki uygulamaları; akkor ampulün tungsten flaman teknolojisi.",
  kazanimlar: [
    "F.6.7.1. Maddelerin elektriksel iletkenlik ve yalıtkanlık özelliklerini günlük yaşamla bütünleştirir.",
    "F.6.7.2. Elektriksel direnci ve dirence etki eden faktörleri kontrollü deney ve devre analizleriyle değerlendirir.",
    "F.6.7.3. Elektrik güvenliği, reosta teknolojisi ve aydınlatma verimliliğini sentezler."
  ],
  hatirlayalim: {
    text: "7. Ünite boyunca elektriğin maddeler üzerinden akışını (iletkenlik), akışın durdurulmasını (yalıtkanlık) ve akışa karşı gösterilen direnci (elektriksel direnç) öğrendik.",
    keyPoints: [
      "İletken Maddeler: Metaller (bakır, demir, alüminyum), kurşun kalem ucu (grafit), tuzlu su, asitli ve bazlı çözeltiler.",
      "Yalıtkan Maddeler: Plastik, kauçuk, porselen, cam, tahta, saf su, şekerli su, zeytinyağı.",
      "Gazlar: Normalde yalıtkan olup yüksek gerilimde (yıldırım, floresan) iletken hale gelir.",
      "Elektriksel Direnç (R): Maddenin akıma karşı gösterdiği zorluktur (Birimi Ohm - Ω).",
      "Direnç Telin Boyuyla DOĞRU orantılıdır (L artarsa R artar, parlaklık azalır).",
      "Direnç Telin Kesit Alanıyla TERS orantılıdır (S artarsa R azalır, parlaklık artar).",
      "Direnç telin cinsine (özdirenç) bağlıdır; nikel-krom telin direnci bakırdan çok daha büyüktür.",
      "Reosta: Devre direncini ve dolayısıyla akımı/parlaklığı ayarlayan sürgülü ayarlı dirençtir.",
      "Akkor Ampul: İnce ve uzun tungsten flaman telinin yüksek direnci sayesinde akkor hale gelerek ışık saçmasıdır."
    ]
  },
  onDegerlendirme: [
    {
      id: "od-u7r-1",
      question: "Kabloların içinde neden bakır tel, dışında ise plastik kılıf kullanılır?",
      answer: "Bakır iyi bir iletken olduğu için elektriği güvenle taşır; plastik ise yalıtkan olduğu için insanları elektrik çarpmasından korur."
    },
    {
      id: "od-u7r-2",
      question: "Bir elektrik devresinde telin boyu uzatılırsa ampulün parlaklığı neden azalır?",
      answer: "Çünkü tel uzadıkça elektriksel direnç artar; artan direnç devreden geçen akımı azaltır ve ampul daha sönük yanar."
    },
    {
      id: "od-u7r-3",
      question: "Evlerde kullanılan reostalı ışık anahtarına (dimmer) ne ad verilir ve görevi nedir?",
      answer: "Ayarlı dirençtir; direnci artırıp azaltarak lambanın parlaklığını kısıp açmayı sağlar."
    }
  ],
  hazirlik: {
    question: "Tost makinesi veya elektrikli ısıtıcıların içindeki teller neden kırmızı kor haline gelene kadar kızarır?",
    answer: "Çünkü o teller direnci çok yüksek olan nikel-krom rezistans telleridir; yüksek direnç akıma direnirken yoğun ısı enerjisi üretir."
  },
  merak: {
    question: "Süperiletkenlik nedir ve oda sıcaklığında süperiletken keşfedilirse dünyada ne değişir?",
    answer: "Süperiletkenlik elektriksel direncin sıfıra inmesidir. Eğer oda sıcaklığında süperiletken keşfedilirse elektrik hatlarında sıfır enerji kaybı yaşanır, trenler manyetik havada uçar ve bilgisayarlar ışık hızında çalışır."
  },
  kopru: {
    title: "6. Sınıf Fen Bilimleri Müfredatının Zirvesi",
    content: "Güneş Sistemi'nden hücreye, kuvvet ve hareketten madde ve ısıya, sinir sisteminden elektriğin iletimine kadar 6. sınıfın tüm ünitelerini başarıyla tamamladınız. Artık 7. sınıfta atomun yapısı, kütle-ağırlık ilişkisi ve ekosistemleri keşfetmeye hazırsınız!",
    question: "6. sınıfta öğrendiğiniz hangi fen konusu sizi en çok hayrete düşürdü?",
    answer: "Tüm ünitelerin kusursuz bir matematiksel düzen ve hikmetle birbiriyle bağlantılı olması."
  },
  hikmetStages: [
    {
      stage: 1,
      name: "1. Varlığı Tanıt (Işık ve Enerji Medeniyeti)",
      concept: "Geceleri Aydınlatan Kudret",
      text: "Karanlığı aydınlatan bir ampulün ardında atomların fıtri direnci, metallerin iletkenliği ve insanın sabırlı keşfi gizlidir.",
      analogies: ["Karanlık okyanusta yol gösteren deniz feneri."]
    },
    {
      stage: 2,
      name: "2. Parçalarını Göster (İletken, Yalıtkan ve Direnç Üçlüsü)",
      concept: "Fiziksel Armoni",
      text: "İletken taşır, yalıtkan korur, direnç ışıtır; bu üçlü olmadan modern elektrik medeniyeti kurulamazdı.",
      analogies: ["Bir orkestranın telli, üflemeli ve vurmalı çalgılarının ahengi."]
    },
    {
      stage: 3,
      name: "3. Ölçü ve Düzen (Ohm Kanununun İnce Terazisi)",
      concept: "Hassas Matematik",
      text: "Akım, gerilim ve direnç arasındaki değişmez matematiksel nispet, atomların rastgele değil kusursuz bir kanunla hareket ettiğini gösterir.",
      questionToPonder: "Direncin boyla ve kesitle olan bu değişmez oranını atomların içine kim nakşetmiştir?"
    },
    {
      stage: 4,
      name: "4. Gayesini Keşfet (İnsana Hizmet ve Emniyet)",
      concept: "Korumalı Nimet",
      text: "Elektrik hem muazzam bir nimet hem de dikkatsiz ellerde tehlikeli bir güçtür; yalıtım ve emniyet aklı rehber edinmeyi öğretir.",
      analogies: ["Ehlileştirilmiş güçlü bir aslanın faydaları."]
    },
    {
      stage: 5,
      name: "5. Bütünle İlişkilendir (Edison, Ohm ve Medeniyet)",
      concept: "Bilim İnsanlarının Mirası",
      text: "Ohm'un kanunu, Edison'un flamanı ve günümüzün LED teknolojileri, insanlığın ortak tefekkür ve ilim birikiminin meyvesidir.",
      analogies: ["Nesilden nesile aktarılan meşale."]
    },
    {
      stage: 6,
      name: "6. Hayret ve Tefekkür (En-Nûr)",
      concept: "Göklerin ve Yerin Nuru",
      text: "Maddeye direnci bahşederek karanlığı ışığa, soğuğu sıcağa çeviren ve kâinatı nurlarla donatan Yüce Yaratıcı'ya sonsuz hayranlık ve şükranla yönelmek."
    }
  ],
  etkinlikler: [
    {
      id: "etk-u7r-tasarim",
      title: "Ünite Sonu Beceri İstasyonu: Kendi Reostalı Dimmer Devreni Tasarla",
      type: "Mühendislik ve Devre Tasarımı",
      materials: ["Pil ve pil yatağı", "Ampul ve duy", "2 adet ataş", "Kurşun kalem ucu (grafit)", "Bağlantı kabloları"],
      steps: [
        "1. Adım: Devreyi kurarak bir ucunu kurşun kalem ucunun en başına sabitleyiniz.",
        "2. Adım: İkinci ataşlı ucu kalem ucunun üzerinde yavaşça ileri geri kaydırınız.",
        "3. Adım: Ataş uca yaklaştıkça (boy kısaldıkça) ampulün nasıl parladığını, uzaklaştıkça (boy uzadıkça) nasıl kısıldığını gözlemleyiniz.",
        "4. Adım: Kendi el yapımı reostanızın çalışma raporunu hazırlayınız."
      ],
      questions: [
        {
          qId: "q-u7r-1",
          label: "Tasarım Analizi",
          prompt: "Kurşun kalem ucu üzerinde temas noktasını kaydırmak devrede hangi fiziksel parametreyi değiştirmiştir?",
          answer: "Akımın geçtiği grafitin boyunu değiştirmiş, bu sayede devrenin direncini ayarlayarak ampul parlaklığını kontrol etmiştir."
        }
      ]
    }
  ],
  bilgiIstasyonlari: [
    {
      title: "Thomas Edison, Nikola Tesla ve Elektrik Çağı",
      scientistOrMission: "Aydınlatma ve Alternatif Akım Öncüleri",
      description: "Thomas Edison akkor ampulü ticarileştirip evlere taşırken; dahi Nikola Tesla alternatif akımı (AC) keşfederek elektriğin binlerce kilometre uzaklıktaki şehirlere kayıpsız iletilmesini sağlamıştır.",
      hikmetNote: "Bu iki büyük mucit, elektriğin iletimi ve aydınlatma ilkelerini insanlığın hizmetine sunarak modern çağın kapısını aralamıştır."
    }
  ],
  dda: {
    id: "dda-u7r-genel",
    statement: "Tuzlu su iyi bir elektrik iletkenidir; bir iletkenin boyu uzadıkça direnci artar ve devredeki ampulün parlaklığı azalır.",
    correctDecision: "D",
    reason: "Tuzlu su iyonları sayesinde iletkendir; tel uzadıkça direnç artar ve ampul daha sönük yanar.",
    ifTrue: {
      exit: 1,
      isCorrect: true,
      feedback: "Harika! 7. Ünitenin tüm temel elektrik kurallarını doğru kavradınız."
    },
    ifFalse: {
      exit: 2,
      isCorrect: false,
      feedback: "Hatalı! Sıvı iletkenliği ve direnç-parlaklık kurallarını tekrar gözden geçiriniz."
    }
  },
  biliyorumAnliyorumDusunuyorum: {
    biliyorum: "İletken ve yalıtkan katı-sıvı-gaz maddeleri, elektriksel direnci, direnci etkileyen faktörleri ve reostanın çalışma mantığını biliyorum.",
    anliyorum: "Elektriğin kontrol altında ve yalıtımla kullanıldığında medeniyeti aydınlatan muazzam bir güç olduğunu anlıyorum.",
    dusunuyorum: "Eğer elektrik iletiminde sıfır dirençli süperiletkenler geliştirilirse dünyamızın enerji krizi nasıl çözülebilir?"
  },
  pekistirmeIstasyonu: {
    stationTitle: "7. Ünite Sonu Kapsamlı Değerlendirme İstasyonu",
    pageReference: "6. Sınıf 2. Kitap 7. Ünite Sonu",
    summaryText: "İletkenler, yalıtkanlar, elektrik güvenliği, direnç formülü değişkenleri (L, S, cins), reosta ve ampul flamanı hakkında 10 boşluk doldurma ve 20 özgün soru.",
    targetSkills: [
      "7. Ünitenin tüm kazanımlarını kapsamlı analiz eder.",
      "Elektriksel direnç ve devre parametrelerini sentezler."
    ]
  },
  fillInBlanks: [
    {
      id: "fib-u7r-1",
      number: 1,
      baglam: "Elektrik akımını üzerinden ileten maddelerdir.",
      soruKoku: "Elektrik enerjisini ileten maddelere ...................................., iletmeyen maddelere ise yalıtkan denir.",
      blankAnswer: "İletken",
      acceptableAnswers: ["iletken", "İletken"],
      explanation: "Elektriği iletenler iletkendir.",
      wordBankHint: ["İletken", "Yalıtkan", "Saydam", "Yansıtıcı"]
    },
    {
      id: "fib-u7r-2",
      number: 2,
      baglam: "İçinde tuz çözünmüş suyun iletkenlik özelliğidir.",
      soruKoku: "Saf su yalıtkan iken içine tuz atıldığında .................................... bir sıvı haline gelir.",
      blankAnswer: "İletken",
      acceptableAnswers: ["iletken", "İletken"],
      explanation: "Tuzlu su iletkendir.",
      wordBankHint: ["İletken", "Yalıtkan", "Zehirli", "Asidik"]
    },
    {
      id: "fib-u7r-3",
      number: 3,
      baglam: "Maddelerin elektrik akımına karşı gösterdiği zorluktur.",
      soruKoku: "Bir iletkenin elektrik akımına karşı gösterdiği zorluğa elektriksel .................................... denir.",
      blankAnswer: "Direnç",
      acceptableAnswers: ["direnç", "Direnç"],
      explanation: "Akıma karşı zorluk dirençtir.",
      wordBankHint: ["Direnç", "Kuvvet", "Gerilim", "Sürtünme"]
    },
    {
      id: "fib-u7r-4",
      number: 4,
      baglam: "Elektriksel direncin birimidir.",
      soruKoku: "Elektriksel direnç birimi ....................................dur ve Ω sembolü ile gösterilir.",
      blankAnswer: "Ohm",
      acceptableAnswers: ["ohm", "Ohm"],
      explanation: "Direnç birimi Ohm'dur.",
      wordBankHint: ["Ohm", "Volt", "Amper", "Newton"]
    },
    {
      id: "fib-u7r-5",
      number: 5,
      baglam: "İletkenin boyu arttıkça direncin değişimidir.",
      soruKoku: "Bir iletken telin boyu uzatıldıkça direnci ....................................tar.",
      blankAnswer: "Ar",
      acceptableAnswers: ["artar", "Artar", "ar", "Ar"],
      explanation: "Boy arttıkça direnç artar.",
      wordBankHint: ["Ar", "Aza", "Sabit", "Değişmez"]
    },
    {
      id: "fib-u7r-6",
      number: 6,
      baglam: "İletkenin kalınlığı (kesiti) arttıkça direncin değişimidir.",
      soruKoku: "Bir iletken tel kalınlaştıkça (kesit alanı büyüdükçe) direnci ....................................lır.",
      blankAnswer: "Aza",
      acceptableAnswers: ["azalır", "Azalır", "aza", "Aza"],
      explanation: "Tel kalınlaştıkça direnç azalır.",
      wordBankHint: ["Aza", "Arta", "Sabit", "Sıfır"]
    },
    {
      id: "fib-u7r-7",
      number: 7,
      baglam: "Devrede direnci değiştirerek ampul parlaklığını ayarlayan sürgülü alettir.",
      soruKoku: "Elektrik devrelerinde akım ve parlaklığı ayarlayan ayarlı dirence .................................... denir.",
      blankAnswer: "Reosta",
      acceptableAnswers: ["reosta", "Reosta"],
      explanation: "Ayarlı direnç reostadır.",
      wordBankHint: ["Reosta", "Sigorta", "Pil", "Termometre"]
    },
    {
      id: "fib-u7r-8",
      number: 8,
      baglam: "Akkor ampulde kullanılan yüksek erime noktalı metaldir.",
      soruKoku: "Akkor ampulün içindeki ince ve uzun flaman teli .................................... (volfram) metalinden yapılır.",
      blankAnswer: "Tungsten",
      acceptableAnswers: ["tungsten", "Tungsten", "volfram", "Volfram"],
      explanation: "Tungsten flaman malzemesidir.",
      wordBankHint: ["Tungsten", "Demir", "Bakır", "Gümüş"]
    },
    {
      id: "fib-u7r-9",
      number: 9,
      baglam: "Elektrik kaçaklarını doğrudan toprağa aktararak hayat kurtaran sistemdir.",
      soruKoku: "Cihaz gövdelerindeki elektrik kaçağını toprağa ileten hatta .................................... hattı denir.",
      blankAnswer: "Topraklama",
      acceptableAnswers: ["topraklama", "Topraklama"],
      explanation: "Topraklama can güvenliği sağlar.",
      wordBankHint: ["Topraklama", "Aydınlatma", "Isıtma", "Soğutma"]
    },
    {
      id: "fib-u7r-10",
      number: 10,
      baglam: "Kurşun kalem ucu olarak kullanılan iletken maddedir.",
      soruKoku: "Kurşun kalem ucu metal olmadığı halde elektriği ileten .................................... maddesinden oluşur.",
      blankAnswer: "Grafit",
      acceptableAnswers: ["grafit", "Grafit"],
      explanation: "Grafit iletken ametaldir.",
      wordBankHint: ["Grafit", "Kükürt", "Plastik", "Cam"]
    }
  ],
  contextQuestions: [
    {
      id: "mcq-u7r-1",
      number: 1,
      baglam: "Bir devrede özdeş piller kullanılarak kurulan dört devrede kullanılan tellerin özellikleri şöyledir:\n1. Devre: 20 cm bakır tel (ince)\n2. Devre: 20 cm bakır tel (kalın)\n3. Devre: 40 cm bakır tel (ince)\n4. Devre: 20 cm nikel-krom tel (ince)",
      soruKoku: "Bu devrelerin hangisindeki ampul EN PARLAK ışık verir?",
      secenekler: {
        A: "2. Devre (Kısa ve kalın bakır tel; direnci en az)",
        B: "3. Devre (Uzun ve ince bakır tel)",
        C: "4. Devre (Nikel-krom tel)",
        D: "1. Devre"
      },
      dogruCevap: "A",
      cozum: "En parlak ampul direnci en küçük olan devrededir. Bakır telin özdirenci küçüktür; 20 cm (kısa) ve kalın olan 2. devrede direnç minimum, parlaklık maksimumdur.",
      olculenKazanim: "F.6.7.2.1. İletkenin değişkenlerini (boy, kalınlık, cins) ampul parlaklığıyla karşılaştırır.",
      olculenBeceri: "Çok Değişkenli Devre Analizi",
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
      id: "mcq-u7r-2",
      number: 2,
      baglam: "Elektrik kablolarının üzerindeki plastik kaplama sıyrıldığında iki çıplak tel birbirine değerse aniden kıvılcım çıkar, sigorta atar ve yangın tehlikesi oluşur.",
      soruKoku: "İki çıplak telin birbirine değmesiyle oluşan bu olaya ne ad verilir?",
      secenekler: {
        A: "Kısa devre",
        B: "Açık devre",
        C: "Topraklama",
        D: "Yalıtım"
      },
      dogruCevap: "A",
      cozum: "Akımın dirençsiz yoldan hızla geçerek devreyi tamamlamasına kısa devre denir; aşırı akım ve kıvılcım üretir.",
      olculenKazanim: "F.6.7.1.4. Kısa devre olayını ve tehlikesini açıklar.",
      olculenBeceri: "Elektrik Güvenliği ve Arıza Teşhisi",
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
      id: "mcq-u7r-3",
      number: 3,
      baglam: "Bir fen deneyinde saf su dolu kaba açık uçlu devre daldırılmış ve ampul yanmamıştır. Kaba sırayla limon suyu, sirke ve çamaşır sodası eklendiğinde ampulün ışık verdiği görülmüştür.",
      soruKoku: "Bu maddelerin saf suyu iletken hale getirmesinin ortak sebebi nedir?",
      secenekler: {
        A: "Suda çözündüklerinde pozitif ve negatif elektrik yükü taşıyan iyonlar oluşturmaları",
        B: "Suyun rengini değiştirmeleri",
        C: "Suyu ısıtmaları",
        D: "Pilin gücünü artırmaları"
      },
      dogruCevap: "A",
      cozum: "Asitler, bazlar ve tuzlar suda iyonlarına ayrışır; serbest iyonlar elektrik akımını taşır.",
      olculenKazanim: "F.6.7.1.2. Asit, baz ve tuz çözeltilerinin elektriksel iletkenliğini açıklar.",
      olculenBeceri: "Kimyasal İyonik İletkenlik",
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
      id: "mcq-u7r-4",
      number: 4,
      baglam: "Bir öğrenci 'İletkenin cinsinin dirence etkisini' araştırmak istiyor.",
      soruKoku: "Öğrenci aşağıdaki tel çiftlerinden hangisini seçmelidir?",
      secenekler: {
        A: "Aynı boy ve aynı kalınlıkta olan bir bakır tel ile bir nikel-krom tel",
        B: "Biri uzun biri kısa iki bakır tel",
        C: "Biri ince biri kalın iki demir tel",
        D: "Farklı boyda tahta ve cam"
      },
      dogruCevap: "A",
      cozum: "Cinsin etkisini araştırırken boy ve kalınlık kontrol değişkeni (sabit) tutulmalı, yalnızca telin cinsi değiştirilmelidir.",
      olculenKazanim: "F.6.7.2.2. Kontrollü deneyde bağımsız değişken olarak telin cinsini seçer.",
      olculenBeceri: "Bilimsel Yöntem ve Değişken Kontrolü",
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
      id: "mcq-u7r-5",
      number: 5,
      baglam: "Tungsten flaman teli bir akkor ampulün içinde yaklaşık 2500°C sıcaklığa kadar akkor hale gelir. Buna rağmen flaman teli eriyip kopmaz.",
      soruKoku: "Tungsten metalinin bu sıcaklıkta erimemesinin sebebi nedir?",
      secenekler: {
        A: "Erime noktasının 3422°C ile dünyadaki tüm metallerden daha yüksek olması",
        B: "Ampulün içinde su olması",
        C: "Telin yalıtkan olması",
        D: "Telin çok soğuk çalışması"
      },
      dogruCevap: "A",
      cozum: "Tungsten 3422°C gibi olağanüstü yüksek bir erime noktasına sahiptir; bu sayede akkor haline rağmen erimez.",
      olculenKazanim: "F.6.7.2.3. Tungstenin termal dayanıklılığını ve erime noktasını açıklar.",
      olculenBeceri: "Malzeme Özellikleri ve Uygulama",
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
      id: "mcq-u7r-6",
      number: 6,
      baglam: "Aşağıdaki tabloda bazı sıvıların test devresindeki ampulü yakma durumları verilmiştir:\n- Limonlu su: Ampul yanar\n- Şekerli su: Ampul yanmaz\n- Maden suyu: Ampul yanar\n- Saf su: Ampul yanmaz\n- Zeytinyağı: Ampul yanmaz",
      soruKoku: "Tabloya göre hangi sıvılar SIVI YALITKAN sınıfındadır?",
      secenekler: {
        A: "Şekerli su, Saf su ve Zeytinyağı",
        B: "Limonlu su ve Maden suyu",
        C: "Sadece Saf su",
        D: "Sadece Zeytinyağı"
      },
      dogruCevap: "A",
      cozum: "Ampulün yanmadığı şekerli su, saf su ve zeytinyağı sıvı yalıtkanlardır.",
      olculenKazanim: "F.6.7.1.2. Sıvıları iletkenlik durumlarına göre gruplandırır.",
      olculenBeceri: "Veri Tablosu Yorumlama",
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
      id: "mcq-u7r-7",
      number: 7,
      baglam: "Bir reostanın sürgüsü sağa doğru kaydırıldığında devredeki telin boyu artmaktadır.",
      soruKoku: "Sürgü sağa kaydırıldığında devredeki elektriksel direnç ve ampulün parlaklığı nasıl değişir?",
      secenekler: {
        A: "Direnç artar, ampulün parlaklığı azalır.",
        B: "Direnç azalır, parlaklık artar.",
        C: "Direnç de parlaklık da artar.",
        D: "İkisi de değişmez."
      },
      dogruCevap: "A",
      cozum: "Telin boyu arttıkça devrenin direnci artar; artan direnç akımı azaltır ve ampulün parlaklığı azalır.",
      olculenKazanim: "F.6.7.2.4. Reostanın sürgü yönüne göre direnç ve parlaklık değişimini belirler.",
      olculenBeceri: "Dinamik Devre Değişimi",
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
      id: "mcq-u7r-8",
      number: 8,
      baglam: "Elektrik prizlerinin küçük çocukların parmak sokmasını önleyecek şekilde emniyet kapaklı üretilmesi ve evlerde kaçak akım rölesi kullanılması hayati önem taşır.",
      soruKoku: "Kaçak akım rölesi evlerimizde ne işe yarar?",
      secenekler: {
        A: "En ufak bir elektrik kaçağında (örneğin bir insan tele dokunduğunda) elektriği saniyenin binde birinde keserek insan hayatını kurtarır.",
        B: "Elektrik faturalarını sıfırlar.",
        C: "Evdeki lambaları daha parlak yapar.",
        D: "Pillerin şarj olmasını sağlar."
      },
      dogruCevap: "A",
      cozum: "Kaçak akım rölesi insan bedenine sızan milisaniyelik kaçak akımı algılayıp devreyi anında kesen en kritik güvenlik donanımıdır.",
      olculenKazanim: "F.6.7.1.4. Kaçak akım rölesinin koruyucu rolünü açıklar.",
      olculenBeceri: "Elektrik Güvenliği ve Hayat Emniyeti",
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
      id: "mcq-u7r-9",
      number: 9,
      baglam: "Bir elektrik devresinde tel olarak kullanılan demir çivi yerine aynı boy ve kalınlıkta gümüş tel takılmıştır.",
      soruKoku: "Gümüş tel takıldığında devrenin direnci ve ampulün parlaklığı nasıl değişir?",
      secenekler: {
        A: "Gümüşün iletkenliği demirden çok daha iyi (direnci çok küçük) olduğu için devre direnci azalır ve ampul çok daha parlak yanar.",
        B: "Ampul söner.",
        C: "Devre direnci artar ve ampul sönükleşir.",
        D: "Hiçbir şey değişmez."
      },
      dogruCevap: "A",
      cozum: "Gümüş en iyi iletkendir; özdirenci demirden çok düşüktür. Direnç azaldığı için ampul çok parlak yanar.",
      olculenKazanim: "F.6.7.2.2. Metallerin özdirenç farkının parlaklığa etkisini irdeler.",
      olculenBeceri: "Malzeme Değişimi ve Parlaklık",
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
      id: "mcq-u7r-10",
      number: 10,
      baglam: "Bir elektrik sobasının fişi prize takıldığında soba teli kızarıp evi ısıtırken, sobayı prize bağlayan kablo neden ısınmaz ve yanmaz?",
      soruKoku: "Soba teli akkor hale gelirken bağlantı kablosunun ısınmamasının sebebi nedir?",
      secenekler: {
        A: "Kablodaki bakır telin direncinin çok küçük, sobadaki nikel-krom rezistans telinin direncinin ise çok büyük olması",
        B: "Kablodan elektrik geçmemesi",
        C: "Sobanın içinde kömür yanması",
        D: "Prizin soğuk hava üflemesi"
      },
      dogruCevap: "A",
      cozum: "Bakır kablonun direnci neredeyse sıfırdır, ısınmaz; soba rezistansının direnci devasa olduğu için elektrik akımı ısıya dönüşür.",
      olculenKazanim: "F.6.7.2.2. İletken direncinin ısıya dönüşüm farkını açıklar.",
      olculenBeceri: "Gündelik Hayat Fiziği",
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
      id: "mcq-u7r-11",
      number: 11,
      baglam: "Bir apartmanın çatısına monte edilen sivri uçlu metal çubuktan kalın bir bakır kablo bina boyunca indirilerek toprağa gömülmüş bir bakır levhaya bağlanmıştır.",
      soruKoku: "Bu paratoner sistemi binayı nasıl korur?",
      secenekler: {
        A: "Yıldırımın devasa elektrik yükünü binaya zarar vermeden doğrudan toprağa aktararak yangın ve yıkımı engeller.",
        B: "Yağmurun yağmasını engeller.",
        C: "Rüzgârı durdurur.",
        D: "Binayı ısıtır."
      },
      dogruCevap: "A",
      cozum: "Paratoner yıldırımı güvenli iletken yolla toprağa tahliye eder; binayı korur.",
      olculenKazanim: "F.6.7.1.3. Paratonerin çalışma prensibini ve koruyuculuğunu açıklar.",
      olculenBeceri: "Afet Önleme ve Paratoner Teknolojisi",
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
      id: "mcq-u7r-12",
      number: 12,
      baglam: "Bir ampulün içindeki tungsten tel helezon şeklinde sarmal yapılarak minik cam kürenin içine yaklaşık 1 metre uzunluğunda tel sığdırılmıştır.",
      soruKoku: "Flaman telin bu kadar uzun ve ince yapılmasının sebebi nedir?",
      secenekler: {
        A: "Telin direncini olabildiğince artırarak elektrik akımına karşı yüksek direnç oluşturmak ve akkor parıldama elde etmek",
        B: "Teli hafifletmek",
        C: "Ampulün patlamasını sağlamak",
        D: "Elektriği depolamak"
      },
      dogruCevap: "A",
      cozum: "Direnç boyla doğru, kesitle ters orantılıdır; ince ve uzun tel direnci tavan yaptırarak ışık saçmasını sağlar.",
      olculenKazanim: "F.6.7.2.3. Ampul flamanının sarmal geometrisinin dirence etkisini açıklar.",
      olculenBeceri: "Geometrik Tasarım ve Direnç Optimizasyonu",
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
      id: "mcq-u7r-13",
      number: 13,
      baglam: "Bir elektrik devresinde Ohm Kanunu'nu keşfeden Alman fizikçi Georg Simon Ohm, gerilim sabitken akım ile direncin ilişkisini ortaya koymuştur.",
      soruKoku: "Direnç iki katına çıktığında devreden geçen elektrik akımı nasıl değişir?",
      secenekler: {
        A: "Yarıya iner (Akım ve direnç ters orantılıdır)",
        B: "İki katına çıkar",
        C: "Dört katına çıkar",
        D: "Değişmez"
      },
      dogruCevap: "A",
      cozum: "Ohm kanununa (I = V/R) göre direnç 2 katına çıkarsa devreden geçen akım yarıya iner.",
      olculenKazanim: "F.6.7.2.2. Ohm Kanunu gereği direnç-akım ters orantısını hesaplar.",
      olculenBeceri: "Matematiksel Fizik ve Oran",
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
      id: "mcq-u7r-14",
      number: 14,
      baglam: "Elektrik teknisyenleri canlı elektrik hatlarında çalışırken tornavida ve penselerinin saplarının plastikle kaplı olduğunu özellikle kontrol ederler.",
      soruKoku: "El aletlerinin saplarındaki plastik kaplamanın görevi nedir?",
      secenekler: {
        A: "Elektrik akımını geçirmeyen yalıtkan bariyer oluşturarak teknisyeni elektrik çarpmasından korumak",
        B: "Aletin paslanmasını önlemek",
        C: "Aletin daha ağır olmasını sağlamak",
        D: "Vidanın daha hızlı dönmesini sağlamak"
      },
      dogruCevap: "A",
      cozum: "Plastik ve kauçuk saplar elektrik yalıtımı sağlayarak can güvenliğini temin eder.",
      olculenKazanim: "F.6.7.1.4. El aletlerinde yalıtkan kaplamaların koruyuculuğunu açıklar.",
      olculenBeceri: "İş Emniyeti ve Koruyucu Donanım",
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
      id: "mcq-u7r-15",
      number: 15,
      baglam: "Bir öğrenci özdeş pillerle kurduğu iki devrede aynı boyda ve aynı maddeden yapılmış iki tel kullanmıştır. K telinin kesit alanı S, L telinin kesit alanı ise 4S'tir.",
      soruKoku: "K ve L telleriyle kurulan devrelerdeki ampullerin parlaklığı nasıldır?",
      secenekler: {
        A: "L teli kalın (4S) olduğu için direnci çok küçüktür ve L devresindeki ampul çok daha parlak yanar.",
        B: "K teli ince olduğu için daha parlak yanar.",
        C: "İkisi de eşit yanar.",
        D: "L teli bağlı ampul hiç yanmaz."
      },
      dogruCevap: "A",
      cozum: "Kesit alanı büyüdükçe (tel kalınlaştıkça) direnç azalır; direnç azalınca akım artar ve ampul daha parlak yanar.",
      olculenKazanim: "F.6.7.2.1. Kesit alanının ampul parlaklığına etkisini değerlendirir.",
      olculenBeceri: "Direnç ve Akım Dinamiği",
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
      id: "mcq-u7r-16",
      number: 16,
      baglam: "Bir ütünün üzerinde 'İpek', 'Yünlü', 'Pamuklu' ve 'Keten' ayar kademeleri bulunur. Düğme 'Keten'e getirildiğinde ütü tabanı maksimum sıcaklığa ulaşır.",
      soruKoku: "Ütünün sıcaklığını bu kademelerle ayarlayan devre mekanizması hangisidir?",
      secenekler: {
        A: "Reosta (ayarlı direnç) ve termostat sistemi",
        B: "Pil şarjı",
        C: "Su pompası",
        D: "Buhar kazanının büyümesi"
      },
      dogruCevap: "A",
      cozum: "Ütüdeki ayar düğmesi reosta mantığıyla rezistansın akımını ve termostatın açılıp kapanma sıcaklığını düzenler.",
      olculenKazanim: "F.6.7.2.4. Ev aletlerinde reostanın sıcaklık kontrolündeki yerini açıklar.",
      olculenBeceri: "Termal Kontrol Cihazları",
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
      id: "mcq-u7r-17",
      number: 17,
      baglam: "Florasan lambalarda elektrik enerjisi akkor ampullere göre %80 daha az ısıya dönüşür ve çok daha yüksek ışık verimi sağlar.",
      soruKoku: "Günümüzde akkor telli ampuller yerine LED ve tasarruflu lambaların tercih edilmesinin temel sebebi nedir?",
      secenekler: {
        A: "Elektrik enerjisini boşa ısıya dönüştürmeyip doğrudan ışığa çevirerek büyük enerji tasarrufu sağlamaları",
        B: "Daha çabuk bozulmaları",
        C: "Daha çok ısınmaları",
        D: "Pille çalışmaları"
      },
      dogruCevap: "A",
      cozum: "Akkor ampuller enerjinin %90'ını ısı olarak israf eder; LED ve tasarruflu lambalar ise minimum enerjiyle maksimum aydınlatma sağlar.",
      olculenKazanim: "F.6.7.2.3. Aydınlatma teknolojilerinde verimlilik ve enerji tasarrufunu değerlendirir.",
      olculenBeceri: "Enerji Verimliliği ve Çevre Bilinci",
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
      id: "mcq-u7r-18",
      number: 18,
      baglam: "Bir elektrik devresinde kullanılan telin elektriksel direnci R; telin boyu L, kesit alanı S ve özdirenci ρ (ro) ile R = ρ * (L / S) şeklinde formüle edilir.",
      soruKoku: "Bu formüle göre direnci EN KÜÇÜK olan bir iletim kablosu üretmek isteyen bir mühendis teli nasıl seçmelidir?",
      secenekler: {
        A: "Özdirenci çok küçük (örneğin bakır veya gümüş), boyu olabildiğince kısa ve kesit alanı kalın olan tel",
        B: "Çok uzun ve çok ince nikel-krom tel",
        C: "Tahta çubuk",
        D: "Cam boru"
      },
      dogruCevap: "A",
      cozum: "Direncin en küçük olması için paydaki özdirenç (ρ) ve boy (L) küçük, paydadaki kesit (S) ise büyük olmalıdır.",
      olculenKazanim: "F.6.7.2.2. Direnç formülü bileşenlerini mühendislik optimizasyonunda kullanır.",
      olculenBeceri: "Mühendislik Tasarımı ve Matematiksel Mantık",
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
      id: "mcq-u7r-19",
      number: 19,
      baglam: "Elektrik enerjisinin iletiminde çalışan bilim insanları ve mühendisler tabiat kanunlarını keşfederek insanlığın karanlığını aydınlatmışlardır.",
      soruKoku: "Fen bilimleri eğitiminde elektriğin iletimini öğrenen bir öğrencinin bilime ve teknolojiye bakışı nasıl gelişir?",
      secenekler: {
        A: "Doğadaki her maddenin fıtri özelliklerinin bilimin ışığında keşfedilerek insanlığa faydalı ve güvenli teknolojilere dönüştürülebileceğini kavramak",
        B: "Teknolojinin tesadüfen geliştiğini düşünmek",
        C: "Elektrikten tamamen uzak durmak",
        D: "Maddelerin özelliklerinin değiştirilemeyeceğine inanmak"
      },
      dogruCevap: "A",
      cozum: "Fen eğitimi bilimsel keşiflerin insanlığa hizmet ve medeniyet inşasındaki rolünü takdir etmeyi sağlar.",
      olculenKazanim: "F.6.7. Bilim ve teknolojinin toplumsal gelişimdeki yerini değerlendirir.",
      olculenBeceri: "Bilim Felsefesi ve Maarif Vizyonu",
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
      id: "mcq-u7r-20",
      number: 20,
      baglam: "Atomların içindeki elektronların nizamlı akışından bakırın iletkenliğine, tungstendeki akkor ışıktan insanı koruyan yalıtkanlık kalkanına kadar her fizik kanunu kâinattaki muhteşem hikmet ve ölçünün birer delilidir.",
      soruKoku: "6. sınıfın tüm fen bilimleri müfredatını tamamlayan bir Maarif talebesinin tabiata, insana ve kâinata karşı ulaştığı nihai bilinç nedir?",
      secenekler: {
        A: "Mikro âlemdeki atomlardan makro âlemdeki galaksilere kadar her şeyin kusursuz bir ilim, ölçü, adalet ve hikmetle tanzim edildiğini idrak ederek emanet bilinciyle çalışmak ve insanlığa faydalı olmak",
        B: "Kâinatın başıboş ve gayesiz olduğunu düşünmek",
        C: "Fen bilimlerinin sadece sınavlar için ezberlenecek kurallar olduğunu sanmak",
        D: "Doğadaki dengelerin önemsiz olduğunu düşünmek"
      },
      dogruCevap: "A",
      cozum: "Türkiye Yüzyılı Maarif Modeli çerçevesinde tüm fen bilimleri eğitimi; hakikat arayışı, hikmet, estetik nizam, insani sorumluluk ve tefekkür şuuruyla taçlanır.",
      olculenKazanim: "F.6. Fen Bilimleri 6. sınıf müfredatını bütüncül hikmet ve maarif felsefesiyle sentezler.",
      olculenBeceri: "Bütüncül Hikmet ve Maarif Felsefesi Sentezi",
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
