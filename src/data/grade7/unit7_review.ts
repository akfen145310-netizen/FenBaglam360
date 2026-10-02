import { SectionContent } from '../../types';

export const unit7Review: SectionContent = {
  code: "7.7.3",
  title: "7. Ünite Sonu Değerlendirme & 2. Kitap Bütüncül Sonuç Çalışmaları",
  unitCode: "7.7",
  unitTitle: "7. Ünite: Elektrik Devreleri",
  summary: "7. Ünite ve MEB 7. Sınıf 2. Kitap Bütüncül Sentezi: Seri ve paralel bağlama, ampul parlaklıkları, eşdeğer direnç, ampermetre ve voltmetre kullanımı, Ohm Kanunu (V = I · R), gerilim-akım grafikleri; 2. Kitap genelinde Işığın Maddeyle Etkileşimi (4. Ünite), Maddenin Yapısı ve Karışımlar (5. Ünite), Canlılarda Üreme ve Gelişme (6. Ünite) ve Elektrik Devreleri (7. Ünite) konularını kapsayan LGS ve Maarif Modeli beceri temelli sonuç çalışmaları.",
  kazanimlar: [
    "F.7.7.1.1 - F.7.7.2.4. Elektrik devreleri, bağlama türleri ve Ohm Kanunu kazanımlarını eksiksiz analiz eder.",
    "MEB 7. Sınıf 2. Kitap Bütüncül Değerlendirme: 4, 5, 6 ve 7. üniteler arası kavramsal geçiş ve problem çözme becerisi geliştirir.",
    "LGS ve PISA tarzı çok bileşenli deney tasarımı, grafik okuma ve hipotez sınama becerilerini sergiler."
  ],
  hatirlayalim: {
    text: "7. Sınıf 2. Kitap boyunca; 4. Ünitede ışığın soğurulması, aynalar ve kırılmayı; 5. Ünitede atomun yapısı, elementler, bileşikler ve karışımları; 6. Ünitede insanda, bitkilerde ve hayvanlarda üreme, büyüme ve gelişmeyi; 7. Ünitede ise elektrik devrelerini, bağlama türlerini ve Ohm Kanununu inceledik.",
    keyPoints: [
      "Seri devrede tek bir akım yolu vardır, ampul sayısı arttıkça toplam direnç artar ve parlaklık düşer. Biri patlarsa hepsi söner.",
      "Paralel devrede her kol bağımsızdır. Paralel ampul eklemek mevcut ampullerin parlaklığını değiştirmez. Biri patlarsa diğerleri yanmaya devam eder.",
      "Ampermetre devreye seri, Voltmetre paralel bağlanır. Ohm Kanunu: V = I · R. Gerilim-akım grafiğinin eğimi direnci verir.",
      "2. Kitap bütününde fen bilimlerinin kanunlarının kâinattaki muazzam ahenk ve hikmetle örülü olduğunu gördük."
    ]
  },
  onDegerlendirme: [
    {
      id: "od-u7rev-1",
      question: "Evlerimizdeki aydınlatma tesisatında neden seri değil de paralel bağlama kullanılır?",
      answer: "Her cihazın şebeke gerilimi olan 220V'u tam olarak alabilmesi ve bir lambanın patlaması veya anahtarının kapatılmasının diğer odaların ışıklarını söndürmemesi için paralel bağlama zorunludur."
    },
    {
      id: "od-u7rev-2",
      question: "Bir iletkenin Gerilim - Akım grafiğinden direnç değeri nasıl bulunur?",
      answer: "Grafikteki herhangi bir gerilim değeri (düşey eksen) o gerilime karşılık gelen akım değerine (yatay eksen) bölünür (Eğim = V / I = R)."
    },
    {
      id: "od-u7rev-3",
      question: "Ampermetre bir ampule paralel bağlanırsa neden kısa devre meydana gelir?",
      answer: "Ampermetrenin iç direnci sıfıra yakın olduğu için akım dirençli ampul yolunu bırakıp dirençsiz ampermetreden geçer; ampul akımsız kalarak söner."
    }
  ],
  hazirlik: {
    question: "7. Sınıf 2. Kitabın bu son istasyonunda elektrik devrelerinden ışığa, atomlardan canlıların üremesine kadar tüm öğrendiklerinizi sınamaya hazır mısınız?",
    answer: "Tüm ünitelerin sentezini içeren 20 beceri temelli soru, boşluk doldurmalar ve DDA testiyle 7. sınıf fen bilimleri 2. kitap müfredatını tam başarıyla tamamlayacağız."
  },
  merak: {
    question: "Gözle göremediğimiz atomların elektronlarından, gökyüzündeki şimşeklere ve cep telefonumuzun ekranına kadar uzanan bu elektrik akışı insan aklının hangi büyük serüvenidir?",
    answer: "Fizik kanunlarını keşfeden insanlık, kâinata yerleştirilmiş bu görünmez enerji nehrini medeniyetin, tıbbın ve iletişimin hizmetine sunmuştur."
  },
  kopru: {
    title: "2. Kitap Zirvesi ve Fen Ufku",
    content: "Bu sonuç çalışması, 7. Sınıf 2. Kitabın 4 ana ünitesini (4, 5, 6, 7. Üniteler) birleştiren bir bilgi şölenidir.",
    question: "7. Sınıf 2. Kitap kazanımlarını tam olarak kavradığınızı hissediyor musunuz?",
    answer: "Aşağıdaki sonuç değerlendirme istasyonunu tamamlayarak bilgi ve muhakeme gücünüzü tescilleyebilirsiniz."
  },
  hikmetStages: [
    {
      stage: 1,
      name: "1. Varlığı Tanıt (Elektrik ve Işığın Birliği)",
      concept: "Elektromanyetik Ahenk",
      text: "4. Ünitede incelediğimiz ışık ile 7. Ünitedeki elektrik aynı fiziksel ailenin (elektromanyetizma) üyeleridir. Elektronların titreşimi ışığı, akışı ise elektriği doğurur.",
      analogies: ["Aynı nehrin ışık saçan dalgaları ile değirmeni döndüren akıntısı"]
    },
    {
      stage: 2,
      name: "2. Parçalarını Göster (Atomdan Devrelere)",
      concept: "Mikrodan Makroya",
      text: "5. Ünitedeki atomun katmanlarındaki son yörünge elektronları serbest kalarak iletken tel boyunca akar ve 7. Ünitedeki elektrik akımını oluşturur.",
      analogies: ["Milyarlarca karıncanın aynı istikamete koşması"]
    },
    {
      stage: 3,
      name: "3. Sanatını Çöz (Hayat ve Biyoelektrik)",
      concept: "Canlılık ve Elektrik",
      text: "6. Ünitede gördüğümüz kalbimizin atışı, beynimizdeki düşünceler ve sinir sistemimizdeki uyarılar da mikroskobik elektrik sinyalleriyle çalışır.",
      analogies: ["Bedenimizdeki görünmez biyolojik elektrik santrali"]
    },
    {
      stage: 4,
      name: "4. Hikmetini Kavra (Bütüncül İntizam)",
      concept: "Tevhid ve Düzen",
      text: "Aynadaki yansıma kanunundan atomun çekirdeğine, tohumun çimlenmesinden Ohm Kanununa kadar hiçbir hadise tesadüf değildir; hepsi şaşmaz bir ilimle idare edilir.",
      analogies: ["Her enstrümanı kusursuz çalan kâinat senfonisi"]
    },
    {
      stage: 5,
      name: "5. Teknolojide İnsan (Milli Teknoloji Hamlesi)",
      concept: "Yerli İleri Mühendislik",
      text: "Togg elektrikli otomobil bataryalarından Aselsan aviyonik devrelerine, Baykar İHA otonom sistemlerinden milli güneş panellerine kadar bu fen kanunları Türk mühendisliğinin gücüdür.",
      analogies: ["İlimle yükselen milli teknoloji bağımsızlığı"]
    },
    {
      stage: 6,
      name: "6. Medeniyet Ufku (Geçmişten Geleceğe İlim Meşalesi)",
      concept: "Medeniyet Mirası",
      text: "İbni Heysem'in ışık kuramından Cezeri'nin otomasyonuna, İbni Sînâ'nın tıbbından Georg Simon Ohm'un direncine uzanan zincir, insanlığın ortak hakikat arayışıdır.",
      analogies: ["Asırları aydınlatan sönmez ilim meşalesi"]
    }
  ],
  etkinlikler: [
    {
      id: "etk-7-7-rev",
      title: "2. Kitap Bütüncül Sonuç Çalışması: Beceri İstasyonları",
      type: "Ünite Sonu ve Kitap Sentezi",
      materials: ["7. Sınıf 2. Kitap ünite kavram kartları (Ünite 4, 5, 6, 7)"],
      steps: [
        "1. Adım: Işığın kırılması ve aynalar (4. Ünite) ile atom ve karışımları (5. Ünite) eşleştiriniz.",
        "2. Adım: Canlılarda üreme ve başkalaşımı (6. Ünite) elektrik devreleri (7. Ünite) modelleriyle kıyaslayınız.",
        "3. Adım: 20 soruluk beceri temelli sınavı tamamlayarak başarı yüzdenizi ölçünüz."
      ],
      questions: [
        {
          qId: "etk-u7rev-q1",
          label: "1. Soru",
          prompt: "Ohm Kanunu ile 6. sınıfta öğrendiğiniz iletkenin direnci (boy/kesit) arasındaki bağıntıyı açıklayınız.",
          answer: "Tel uzadıkça direnç artar, tel kalınlaştıkça direnç azalır. Direnç (R) ne kadar büyükse aynı gerilim altında devreden geçen akım (I = V/R) o kadar küçük olur."
        },
        {
          qId: "etk-u7rev-q2",
          label: "2. Soru",
          prompt: "MEB 7. Sınıf 2. Kitaptaki 4 ana ünitenin adlarını sırasıyla sayınız.",
          answer: "4. Ünite: Işığın Maddeyle Etkileşimi, 5. Ünite: Maddenin Yapısı ve Karışımlar, 6. Ünite: Canlılarda Üreme, Büyüme ve Gelişme, 7. Ünite: Elektrik Devreleri."
        }
      ]
    }
  ],
  bilgiIstasyonlari: [
    {
      title: "7. Sınıf 2. Kitap Genel Sentezi",
      scientistOrMission: "Maarif Fen Bilimleri Modeli",
      description: "2. Kitap boyunca fizik, kimya ve biyolojinin temel prensiplerini deneylerle, grafiklerle ve bilim tarihi mirasıyla harmanlayarak öğrendiniz.",
      hikmetNote: "Fen bilimleri kâinat kitabını hece hece okuma sanatıdır; her formül ve kanun o kitaptaki hikmetli bir cümledir."
    }
  ],
  dda: {
    id: "dda-rev7-root",
    statement: "Elektrik devresinde gerilimin akıma oranı daima sabittir ve iletkenin direncini verir (Ohm Kanunu).",
    correctDecision: "D",
    reason: "R = V / I sabit kalır.",
    ifTrue: {
      id: "dda-rev7-node-d",
      statement: "Seri bağlı ampul sayısı arttıkça ampullerin parlaklığı artar.",
      correctDecision: "Y",
      reason: "Seri ampul eklendikçe toplam direnç artar, akım azalır ve parlaklık düşer.",
      ifTrue: {
        id: "dda-rev7-leaf-1",
        statement: "Ampermetre devreye paralel bağlanır.",
        correctDecision: "Y",
        reason: "Ampermetre seri bağlanır.",
        ifTrue: { exit: 1, isCorrect: false, feedback: "Seri bağlamada parlaklık azalır, Y kolundan gidilmeliydi." },
        ifFalse: { exit: 2, isCorrect: false, feedback: "Hatalı çıkış." }
      },
      ifFalse: {
        id: "dda-rev7-leaf-2",
        statement: "Paralel bağlı bir devrede bir ampul patlasa bile diğer koldaki ampul aynı parlaklıkta yanmaya devam eder.",
        correctDecision: "D",
        reason: "Paralel kollar bağımsızdır, gerilim ve parlaklık değişmez.",
        ifTrue: { exit: 3, isCorrect: true, feedback: "Tebrikler! 7. Ünite ve 2. Kitap Değerlendirme DDA testinde doğru kararlarla 3. Çıkışa ulaştınız." },
        ifFalse: { exit: 4, isCorrect: false, feedback: "Paralel devrede diğer lamba yanmayı sürdürür." }
      }
    },
    ifFalse: {
      id: "dda-rev7-node-y",
      statement: "Voltmetre devreye seri bağlanır.",
      correctDecision: "Y",
      reason: "Voltmetre paralel bağlanır.",
      ifTrue: { exit: 5, isCorrect: false, feedback: "Kök ifade doğruydu." }
    }
  },
  biliyorumAnliyorumDusunuyorum: {
    biliyorum: "7. Sınıf 2. Kitabın tüm ünitelerini (Işık, Madde ve Karışımlar, Üreme ve Gelişme, Elektrik Devreleri) formülleri, deneyleri ve kanunlarıyla biliyorum.",
    anliyorum: "Fiziksel, kimyasal ve biyolojik kanunların birbirinden kopuk olmadığını, tek bir kâinat düzeninin parçaları olduğunu anlıyorum.",
    dusunuyorum: "Öğrendiğimiz bu fen ve teknoloji birikimini ülkemizin ve insanlığın refahı, barışı ve geleceği için nasıl bir değere dönüştüreceğimizi tefekkür ediyor muyuz?"
  },
  pekistirmeIstasyonu: {
    stationTitle: "7. Ünite ve 2. Kitap Bütüncül Değerlendirme İstasyonu",
    pageReference: "MEB 7. Sınıf Fen Bilimleri 2. Kitap, Sayfa 177-190",
    summaryText: "Bu istasyonda 7. Ünitenin ve 7. Sınıf 2. Kitabın tamamını kapsayan sonuç çalışmalarıyla bilgilerinizi zirveye taşıdınız.",
    targetSkills: [
      "Seri ve paralel elektrik devrelerini kusursuz analiz etme",
      "Ohm Kanunu (V = I · R) hesaplamalarını ve grafik yorumlarını hatasız yapma",
      "4, 5, 6 ve 7. ünitelerin temel kavramları arasında disiplinler arası köprü kurma",
      "LGS ve beceri temelli yeni nesil fen sorularında üstün başarı gösterme"
    ]
  },
  nelerOgrenildi: {
    title: "7. Ünite ve 2. Kitap Genelinde Neler Öğrenildi? (Bütüncül Sentez)",
    ogrenilenKavramlar: [
      "Seri & Paralel Bağlama Karşılaştırması",
      "Ohm Kanunu (V = I · R)",
      "Ampermetre (Seri) & Voltmetre (Paralel)",
      "Gerilim - Akım Grafiği & Eğim = Direnç",
      "Ev ve Şehir Tesisatlarında Paralel Bağlama Güvencesi",
      "4. Ünite: Işığın Soğurulması, Aynalar ve Kırılma",
      "5. Ünite: Atom, Element, Bileşik, Karışımlar ve Ayırma",
      "6. Ünite: İnsanda ve Canlılarda Üreme, Çimlenme, Başkalaşım",
      "7. Ünite: Elektrik Devreleri & Direnç Kanunları",
      "İslam ve Dünya Bilim Mirası (Cezeri, İbni Sînâ, İbnü'l-Baytâr, Ohm)"
    ],
    ozet: "MEB 7. Sınıf 2. Kitap Büyük Sentezi: 2. Kitap fen bilimlerinin en zengin ve temel dört alanını bir araya getirmiştir. 4. Ünitede ışığın enerjisini, aynaların kullanım alanlarını ve merceklerde kırılmayı; 5. Ünitede maddenin tanecikli yapısını, atom modellerini, element ve bileşikleri, karışımların fiziksel ayrılmasını; 6. Ünitede insanda gametlerden bebeğe üremeyi, tohum çimlenmesini (SOS) ve başkalaşımı; 7. Ünitede ise seri ve paralel bağlamayı, ampermetre ve voltmetreyi, elektriğin temel kanunu olan Ohm Kanununu (V = I · R) öğrendik. Bu dört ünite doğanın birbiriyle konuşan ve ahenkle işleyen mükemmel bir nizam olduğunu kanıtlar.",
    kontrolSorulari: [
      {
        id: "ko-u7rev-1",
        soru: "Seri bağlı bir devrede bir ampul patlarsa ne olur? Paralel bağlı bir devrede bir ampul patlarsa ne olur?",
        cevap: "Seri devrede akım yolu kesildiği için diğer tüm ampuller hemen söner. Paralel devrede ise diğer kollar bağımsız akım aldığı için diğer ampuller aynı parlaklıkta yanmaya devam eder."
      },
      {
        id: "ko-u7rev-2",
        soru: "Ohm Kanununun formülü nedir ve gerilim-akım grafiğinin eğimi neyi verir?",
        cevap: "Ohm Kanunu formülü V = I · R (Gerilim = Akım · Direnç)'tir. Gerilim - akım grafiğinde doğrunun eğimi (V / I) iletkenin elektriksel direncini (R) verir."
      },
      {
        id: "ko-u7rev-3",
        soru: "7. Sınıf 2. Kitapta yer alan 4 ünitenin ana temalarını tek birer cümleyle özetleyiniz.",
        cevap: "4. Ünite: Işığın maddeyle etkileşimi, renkler ve mercekler. 5. Ünite: Atomun yapısı, elementler, bileşikler ve karışımlar. 6. Ünite: İnsan, bitki ve hayvanlarda üreme, büyüme ve gelişme. 7. Ünite: Elektrik devrelerinde bağlanma şekilleri ve Ohm Kanunu."
      }
    ]
  },
  sonrakiKonu: {
    code: "8.1.1",
    title: "Mevsimlerin Oluşumu (8. Sınıf Maarif Modeli Fen Bilimleri)"
  },
  fillInBlanks: [
    {
      id: "fib-7-7-21",
      number: 1,
      baglam: "Seri devrede ampul eklendikçe parlaklık azalır.",
      soruKoku: "Seri bağlı bir devrede ampul sayısı artırıldıkça ampullerin parlaklığı ________.",
      blankAnswer: "azalır",
      acceptableAnswers: ["azalır", "azalir", "düşer"],
      explanation: "Seride ampul eklendikçe parlaklık azalır.",
      wordBankHint: ["azalır", "artar", "değişmez", "iki katına çıkar"]
    },
    {
      id: "fib-7-7-22",
      number: 2,
      baglam: "Paralel bağlı devrelerde kolların parlaklığı eşittir ve değişmez.",
      soruKoku: "Paralel bağlı devreye yeni bir ampul paralel bağlandığında diğer ampullerin parlaklığı ________.",
      blankAnswer: "değişmez",
      acceptableAnswers: ["değişmez", "degismez", "aynı kalır"],
      explanation: "Paralelde kolların parlaklığı değişmez.",
      wordBankHint: ["değişmez", "azalır", "artar", "yarıya iner"]
    },
    {
      id: "fib-7-7-23",
      number: 3,
      baglam: "Ohm Kanunu formülü V = I · R'dir.",
      soruKoku: "Gerilim (V) = Akım (I) · ________ (R) bağıntısı Ohm Kanunudur.",
      blankAnswer: "Direnç",
      acceptableAnswers: ["Direnç", "direnç", "direnc", "Direnci"],
      explanation: "V = I · R'deki R dirençtir.",
      wordBankHint: ["Direnç", "Güç", "Isı", "Enerji"]
    },
    {
      id: "fib-7-7-24",
      number: 4,
      baglam: "Akımı ölçen ampermetre devreye seri bağlanır.",
      soruKoku: "Elektrik akımını ölçen ampermetre devreye ________ olarak bağlanır.",
      blankAnswer: "seri",
      acceptableAnswers: ["seri"],
      explanation: "Ampermetre seri bağlanır.",
      wordBankHint: ["seri", "paralel", "dik", "açık"]
    },
    {
      id: "fib-7-7-25",
      number: 5,
      baglam: "Gerilimi ölçen voltmetre devreye paralel bağlanır.",
      soruKoku: "Devre elemanının iki ucu arasındaki gerilimi ölçen voltmetre devreye ________ bağlanır.",
      blankAnswer: "paralel",
      acceptableAnswers: ["paralel"],
      explanation: "Voltmetre paralel bağlanır.",
      wordBankHint: ["paralel", "seri", "kısa", "çapraz"]
    },
    {
      id: "fib-7-7-26",
      number: 6,
      baglam: "Evlerimizdeki tüm tesisat paralel bağlıdır.",
      soruKoku: "Ev aydınlatmasında lambalardan biri patladığında diğerlerinin sönmemesi tesisatın ________ bağlı olduğunu gösterir.",
      blankAnswer: "paralel",
      acceptableAnswers: ["paralel"],
      explanation: "Ev tesisatı paraleldir.",
      wordBankHint: ["paralel", "seri", "karışık", "diyotlu"]
    },
    {
      id: "fib-7-7-27",
      number: 7,
      baglam: "Tohumun çimlenmesi için SOS şarttır, ışık gerekmez.",
      soruKoku: "6. ünitede öğrendiğimiz gibi tohum çimlenmesi için Sıcaklık, Oksijen ve ________ şarttır.",
      blankAnswer: "Su",
      acceptableAnswers: ["Su", "su", "nem"],
      explanation: "SOS kuralı Su, Oksijen ve Sıcaklıktır.",
      wordBankHint: ["Su", "Işık", "Toprak", "Gübre"]
    },
    {
      id: "fib-7-7-28",
      number: 8,
      baglam: "Atomun çekirdeğinde proton ve nötronlar bulunur.",
      soruKoku: "5. ünitede öğrendiğimiz atomun merkezindeki çekirdekte pozitif yüklü ________ ve yüksüz nötronlar yer alır.",
      blankAnswer: "protonlar",
      acceptableAnswers: ["protonlar", "proton"],
      explanation: "Çekirdekte proton ve nötron bulunur.",
      wordBankHint: ["protonlar", "elektronlar", "moleküller", "iyonlar"]
    },
    {
      id: "fib-7-7-29",
      number: 9,
      baglam: "Işığı kıran saydam ortamlara mercek denir.",
      soruKoku: "4. ünitede öğrendiğimiz ışığı toplayan ya da dağıtan en az bir yüzeyi küresel saydam cisimlere ________ adı verilir.",
      blankAnswer: "mercek",
      acceptableAnswers: ["mercek", "mercekler"],
      explanation: "Işığı kıran araç mercektir.",
      wordBankHint: ["mercek", "ayna", "periskop", "opak"]
    },
    {
      id: "fib-7-7-30",
      number: 10,
      baglam: "Gerilim-akım grafiğinin eğimi direnci verir.",
      soruKoku: "Gerilim - akım grafiğinde doğrunun eğimi iletkenin ________ verir.",
      blankAnswer: "direncini",
      acceptableAnswers: ["direncini", "direnc", "direnç"],
      explanation: "Grafik eğimi dirençtir.",
      wordBankHint: ["direncini", "akımını", "ısısını", "hacmini"]
    }
  ],
  contextQuestions: [
    {
      id: "mcq-7-7-41",
      number: 1,
      baglam: "Bir fen deneyinde özdeş piller ve özdeş ampuller kullanılarak kurulan iki devrede; 1. Devrede 3 ampul SERİ, 2. Devrede 3 ampul PARALEL bağlanmıştır.",
      soruKoku: "Bu devrelerle ilgili aşağıdaki karşılaştırmalardan hangisi kesinlikle doğrudur?",
      secenekler: {
        A: "2. devredeki ampuller 1. devredekilere göre çok daha parlak yanar ve biri duydan çıkarılırsa diğerleri yanmaya devam eder.",
        B: "1. devredeki ampuller daha parlak yanar.",
        C: "1. devrede bir ampul çıkarılırsa diğerleri yanmaya devam eder.",
        D: "Her iki devredeki ampullerin parlaklığı tamamen eşittir."
      },
      dogruCevap: "A",
      cozum: "Paralel devrede her ampul pilin tam gerilimini alır (parlak yanar) ve kollar bağımsızdır. Seri devrede ise gerilim bölünür (cılız yanar) ve biri çıkarsa hepsi söner.",
      olculenKazanim: "F.7.7.1.2. Seri ve paralel devre özelliklerini sentezler.",
      olculenBeceri: "Sentez ve Karşılaştırmalı Yargı",
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
      id: "mcq-7-7-42",
      number: 2,
      baglam: "Bir iletken telin uçlarına uygulanan gerilim ve üzerinden geçen akım değerleri ölçülerek şu tablo oluşturulmuştur:\nGerilim (V): 6V | 12V | 18V | 24V\nAkım (I):   2A |  4A |  6A |  8A",
      soruKoku: "Bu iletkenin elektriksel direnci kaç Ohm'dur?",
      secenekler: {
        A: "3 Ohm",
        B: "6 Ohm",
        C: "12 Ohm",
        D: "0.33 Ohm"
      },
      dogruCevap: "A",
      cozum: "R = V / I = 6/2 = 12/4 = 18/6 = 24/8 = 3 Ohm.",
      olculenKazanim: "F.7.7.2.1. Tablo verilerinden direnç hesaplar.",
      olculenBeceri: "Tablo ve Oran Yorumu",
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
      id: "mcq-7-7-43",
      number: 3,
      baglam: "Ampermetre ve voltmetrenin çalışma prensipleri düşünüldüğünde; ampermetrenin seri, voltmetrenin ise paralel bağlanması gerekmektedir.",
      soruKoku: "Bir devrede ampermetrenin paralel bağlanması durumunda ortaya çıkacak en tehlikeli sonuç nedir?",
      secenekler: {
        A: "Ampermetrenin iç direnci sıfıra yakın olduğu için paralel bağlandığı ampulü kısa devre yapması ve aşırı akım çekerek pille alete zarar vermesi",
        B: "Ampulün patlaması",
        C: "Voltmetrenin bozulması",
        D: "Akımın sıfıra düşmesi"
      },
      dogruCevap: "A",
      cozum: "Ampermetrenin iç direnci neredeyse sıfırdır. Paralel bağlanırsa akım ampermetreden hızla akar; devre kısa devre olur ve yüksek akım tehlike yaratır.",
      olculenKazanim: "F.7.7.2.2. Ampermetre hatalı bağlantı risklerini kavrar.",
      olculenBeceri: "Elektriksel Güvenlik ve Risk Analizi",
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
      id: "mcq-7-7-44",
      number: 4,
      baglam: "Evdeki elektrik panosundaki sigortanın değeri 16 Amper'dir. Salondaki prizlere takılan elektrikli süpürge (8 A) ve ütü (10 A) aynı anda çalıştırıldığında toplam akım 18 A olmakta ve sigorta anında atmaktadır.",
      soruKoku: "Sigortanın atmasının sebebi ve ev güvenliğindeki rolü nedir?",
      secenekler: {
        A: "Cihazlar paralel bağlı olduğu için toplam akımın toplanması ve kabloların aşırı ısınıp yangın çıkarmaması için devreyi keserek yangını önlemesi",
        B: "Cihazların bozuk olması",
        C: "Şebeke geriliminin sıfıra inmesi",
        D: "Elektrik faturasının çok yüksek gelmesi"
      },
      dogruCevap: "A",
      cozum: "Paralel bağlı cihazların akımları ana kolda toplanır (8+10 = 18A). 16A sınırını aşan bu akım kabloları tutuşturmasın diye sigorta devreyi keserek hayat ve mal güvenliğini korur.",
      olculenKazanim: "F.7.7.1.4. Sigorta ve aşırı akım güvenliğini modeller.",
      olculenBeceri: "Günlük Yaşam Elektrik Güvenliği",
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
      id: "mcq-7-7-45",
      number: 5,
      baglam: "Bir direncin uçlarındaki gerilim 60 Volt iken üzerinden 5 Amper akım geçmektedir. Bu direncin değeri kaç Ohm'dur?",
      soruKoku: "Direnç değeri hangisinde doğru verilmiştir?",
      secenekler: {
        A: "12 Ohm",
        B: "300 Ohm",
        C: "55 Ohm",
        D: "65 Ohm"
      },
      dogruCevap: "A",
      cozum: "R = V / I = 60 V / 5 A = 12 Ohm.",
      olculenKazanim: "F.7.7.2.1. R = V / I bağıntısını uygular.",
      olculenBeceri: "Temel İşlem Becerisi",
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
      id: "mcq-7-7-46",
      number: 6,
      baglam: "4. Ünitede öğrendiğimiz çukur aynalar diş hekimleri tarafından dev aynası gibi büyütme amacıyla kullanılırken, tümsek aynalar marketlerde geniş açılı güvenlik aynası olarak kullanılır.",
      soruKoku: "Tümsek aynaların market ve kavşaklarda tercih edilmesinin temel optik sebebi nedir?",
      secenekler: {
        A: "Daima düz ve cisimden daha küçük görüntü oluşturarak çok geniş bir görüş alanı sağlaması",
        B: "Görüntüyü ters çevirmesi",
        C: "Işığı emmesi",
        D: "Görüntüyü dev gibi büyütmesi"
      },
      dogruCevap: "A",
      cozum: "Tümsek aynalar gelen ışınları dağıtır; daima düz ve küçük görüntü vererek geniş bir alanı tek bir aynaya sığdırır.",
      olculenKazanim: "F.7.4.2.1. Tümsek aynanın optik özelliklerini açıklar (4. Ünite Sentezi).",
      olculenBeceri: "Optik ve Güvenlik Entegrasyonu",
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
      id: "mcq-7-7-47",
      number: 7,
      baglam: "5. Ünitede öğrendiğimiz gibi; demir tozu ile kükürt tozu mıknatısla kolayca ayrılabilirken, bu iki madde ısıtılıp demir sülfür (FeS) bileşiği oluşturulduğunda artık mıknatısla ayrılamaz.",
      soruKoku: "Bileşik oluştuktan sonra mıknatısla ayrılamamasının temel kimyasal sebebi nedir?",
      secenekler: {
        A: "Bileşik oluşurken maddelerin kendi kimyasal özelliklerini kaybederek yepyeni özelliklere sahip yeni bir saf madde oluşturması",
        B: "Demirin eriyip buharlaşması",
        C: "Mıknatısın bozulması",
        D: "Kükürdün demiri yemesi"
      },
      dogruCevap: "A",
      cozum: "Karışımlarda maddeler kimliğini korur ve fiziksel yolla ayrılır; bileşiklerde ise atomlar kimyasal bağ yapar ve başlangıçtaki özelliklerini tamamen kaybederler.",
      olculenKazanim: "F.7.5.2.1. Bileşik ve karışım farkını açıklar (5. Ünite Sentezi).",
      olculenBeceri: "Kimyasal Kimlik Değişimi",
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
      id: "mcq-7-7-48",
      number: 8,
      baglam: "6. Ünitede öğrendiğimiz tohum çimlenmesi sürecinde bir öğrenci tohumu ıslak pamuğa koyup buzdolabına (0 °C) koymuş ve tohumun çimlenmediğini görmüştür.",
      soruKoku: "Tohumun çimlenememesinin sebebi hangi temel faktörün eksikliğidir?",
      secenekler: {
        A: "Uygun Sıcaklık (Sıcaklığın çok düşük olması)",
        B: "Oksijen",
        C: "Su",
        D: "Işık"
      },
      dogruCevap: "A",
      cozum: "Çimlenme için SOS (Sıcaklık, Oksijen, Su) şarttır. Buzdolabında su ve oksijen olsa bile sıcaklık enzimlerin çalışması için yetersizdir.",
      olculenKazanim: "F.7.6.2.3. Çimlenme faktörlerini analiz eder (6. Ünite Sentezi).",
      olculenBeceri: "Biyolojik Değişken Tespiti",
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
      id: "mcq-7-7-49",
      number: 9,
      baglam: "7. Ünitede öğrendiğimiz elektrik devrelerinde iki özdeş ampul seri bağlandığında her ampule pil geriliminin yarısı (V/2) düşer; paralel bağlandığında ise her ampule pil geriliminin tamamı (V) düşer.",
      soruKoku: "Bu kurala göre aynı pille çalışan paralel devredeki ampullerin seri devredekilere göre daha parlak yanmasının sebebi nedir?",
      secenekler: {
        A: "Paralel bağlı ampullerin her birinin uçları arasındaki gerilimin seri bağlı olanların iki katı olması",
        B: "Paralel bağlı ampullerin daha büyük olması",
        C: "Seri ampullerin teli kopmuş olması",
        D: "Pilin ters bağlanması"
      },
      dogruCevap: "A",
      cozum: "Parlaklık güce (V · I veya V²/R) bağlıdır. Paralel bağlı ampuller pilin tüm gerilimini (V) doğrudan aldığı için seri bağlılardan (V/2) çok daha parlak yanar.",
      olculenKazanim: "F.7.7.1.2. Gerilim paylaşımı ve parlaklık ilişkisini sentezler.",
      olculenBeceri: "Fiziksel Neden-Sonuç İlişkisi",
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
      id: "mcq-7-7-50",
      number: 10,
      baglam: "Bir fen öğretmeni tahtaya şu dört bilim insanını yazmıştır: I. İbni Heysem (Optik), II. John Dalton (Atom), III. İbni Sînâ (Tıp), IV. Georg Simon Ohm (Elektrik).",
      soruKoku: "Bu bilim insanları ve 7. Sınıf 2. Kitap üniteleri eşleştirmesi hangisinde doğrudur?",
      secenekler: {
        A: "I: 4. Ünite (Işık) - II: 5. Ünite (Atom) - III: 6. Ünite (Üreme/Tıp) - IV: 7. Ünite (Elektrik)",
        B: "I: Elektrik - II: Tıp - III: Işık - IV: Atom",
        C: "I: Atom - II: Işık - III: Elektrik - IV: Tıp",
        D: "I: Üreme - II: Elektrik - III: Atom - IV: Işık"
      },
      dogruCevap: "A",
      cozum: "İbni Heysem optik/ışık (4. Ünite), Dalton atom modelleri (5. Ünite), İbni Sînâ tıp ve anne sağlığı (6. Ünite), Ohm elektrik kanunu (7. Ünite) ile tam örtüşür.",
      olculenKazanim: "MEB 2. Kitap Bütüncül Bilim Tarihi ve Medeniyet Ufku Kazanımı.",
      olculenBeceri: "Bilim Tarihi ve Disiplinler Arası Eşleştirme",
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
      id: "mcq-7-7-51",
      number: 11,
      baglam: "Bir devrede 4 Ohm ve 6 Ohm'luk iki direnç seri bağlanmıştır. Devreye 20 Volt'luk bir pil bağlanmıştır.",
      soruKoku: "Devrenin ana kolundan geçen akım kaç Amper'dir?",
      secenekler: {
        A: "2 Amper",
        B: "5 Amper",
        C: "10 Amper",
        D: "0.5 Amper"
      },
      dogruCevap: "A",
      cozum: "Seri devrede toplam direnç toplanır: R_toplam = 4 + 6 = 10 Ohm. Akım: I = V / R_toplam = 20 V / 10 Ω = 2 Amper.",
      olculenKazanim: "F.7.7.2.1. Seri devrede eşdeğer direnç ve akım hesaplar.",
      olculenBeceri: "İki Aşamalı Hesaplama",
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
      id: "mcq-7-7-52",
      number: 12,
      baglam: "Bir iletkenin Gerilim - Akım grafiğinde çizilen doğrunun eğimi bize neyi verir?",
      soruKoku: "Gerilim / Akım oranına karşılık gelen eğim hangi fiziksel niceliktir?",
      secenekler: {
        A: "İletkenin elektriksel direnci (R)",
        B: "Pilin kimyasal enerjisi",
        C: "Devrenin gücü",
        D: "Ampulün ışık rengi"
      },
      dogruCevap: "A",
      cozum: "Gerilim (düşey) / Akım (yatay) = V / I = R (Direnç)tir.",
      olculenKazanim: "F.7.7.2.3. Gerilim-akım grafiğinin eğim anlamını bilir.",
      olculenBeceri: "Grafik Eğim Yorumu",
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
      id: "mcq-7-7-53",
      number: 13,
      baglam: "İnsanda döllenme yumurta kanalında gerçekleşir ve oluşan zigot mitoz bölünmelerle döl yatağında tutunarak gelişir.",
      soruKoku: "Anne karnındaki embriyonun sağlıklı gelişimi için anne adayının röntgen (X ışını) çektirmemesi gerektiğinin sebebi nedir?",
      secenekler: {
        A: "X ışınlarının hızlı bölünen embriyo hücrelerinin DNA'sında kalıcı mutasyonlara ve sakatlıklara yol açabilmesi",
        B: "Röntgenin çok pahalı olması",
        C: "Annenin saçının dökülmesi",
        D: "Bebeğin uyumasını engellemesi"
      },
      dogruCevap: "A",
      cozum: "Radyasyon hızla mitoz geçiren embriyo DNA'sını bozarak gelişim bozukluklarına sebep olur (6. Ünite Sentezi).",
      olculenKazanim: "F.7.6.1.3. Embriyo sağlığı ve radyasyon riskini açıklar.",
      olculenBeceri: "Sağlık ve Radyasyon Risk Analizi",
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
      id: "mcq-7-7-54",
      number: 14,
      baglam: "Koyu renkli cisimlerin ışığı daha çok soğurduğu (emdiği), açık renkli cisimlerin ise ışığı daha çok yansıttığı bilinmektedir.",
      soruKoku: "Kış mevsiminde koyu renkli, yaz mevsiminde açık renkli elbiselerin tercih edilmesinin bilimsel gerekçesi nedir?",
      secenekler: {
        A: "Koyu renklerin güneş ışığını soğurup ısıya dönüştürerek bizi sıcak tutması, açık renklerin ışığı yansıtarak serin tutması",
        B: "Koyu renk elbiselerin daha ucuz olması",
        C: "Açık renklerin gece parlaması",
        D: "Koyu renklerin elektrik üretmesi"
      },
      dogruCevap: "A",
      cozum: "Koyu renkler ışığı soğurarak termal ısıya çevirir ve kışın ısıtır; açık renkler ise yansıtarak yazın serin tutar (4. Ünite Sentezi).",
      olculenKazanim: "F.7.4.1.1. Işığın soğurulması ve yansımasını günlük yaşamla ilişkilendirir.",
      olculenBeceri: "Gündelik Hayat ve Termal Optik",
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
      id: "mcq-7-7-55",
      number: 15,
      baglam: "Tuzlu su karışımı homojen bir çözeltidir. Bu çözeltiden tuzu ve suyu ayrı ayrı saf olarak geri kazanmak için hangi ayırma yöntemi kullanılmalıdır?",
      soruKoku: "Tuzlu sudan hem saf suyu hem de tuzu elde etmek için en uygun yöntem hangisidir?",
      secenekler: {
        A: "Damıtma (Destilasyon)",
        B: "Mıknatısla ayırma",
        C: "Eleme",
        D: "Yüzdürme"
      },
      dogruCevap: "A",
      cozum: "Basit damıtmada su buharlaştırılıp soğutucu boruda yoğunlaştırılarak saf su olarak toplanır, kapta ise kuru tuz kristalleri kalır (5. Ünite Sentezi).",
      olculenKazanim: "F.7.5.4.1. Çözeltileri damıtma yöntemiyle ayırır.",
      olculenBeceri: "Ayırma Yöntemi Teşhisi",
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
      id: "mcq-7-7-56",
      number: 16,
      baglam: "Bir elektrik devresinde pilden çıkan toplam akım kollara ayrılarak lambalardan geçmekte ve tekrar birleşerek üretece dönmektedir.",
      soruKoku: "Bu devrenin türü ve kollardaki akımların toplamı hakkında hangisi doğrudur?",
      secenekler: {
        A: "Paralel devredir; kollardan geçen akımların toplamı ana koldaki toplam akıma eşittir.",
        B: "Seri devredir; akımlar birbirine eşittir.",
        C: "Kollardan hiç akım geçmez.",
        D: "Ana kol akımı sıfırdır."
      },
      dogruCevap: "A",
      cozum: "Akımın kollara ayrılması paralel bağlamanın temel özelliğidir. Yük korunduğu için kolların akımları toplamı ana kol akımına eşittir (I_ana = I1 + I2).",
      olculenKazanim: "F.7.7.1.2. Paralel devrede akım korunumunu açıklar.",
      olculenBeceri: "Akım Korunumu Prensibi",
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
      id: "mcq-7-7-57",
      number: 17,
      baglam: "Bir direncin uçlarındaki gerilim 15 V iken üzerinden 3 A akım geçmektedir. Aynı telin uçlarındaki gerilim 45 V yapılırsa üzerinden kaç Amper akım geçer?",
      soruKoku: "Yeni akım şiddeti kaç Amper olur?",
      secenekler: {
        A: "9 Amper",
        B: "15 Amper",
        C: "1 Amper",
        D: "45 Amper"
      },
      dogruCevap: "A",
      cozum: "Direnç sabit kalır: R = 15 / 3 = 5 Ohm. Yeni akım: I = 45 V / 5 Ω = 9 Amper (Gerilim 3 katına çıktığı için akım da 3 katına çıkar).",
      olculenKazanim: "F.7.7.2.1. Doğru orantıyla yeni akımı hesaplar.",
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
      id: "mcq-7-7-58",
      number: 18,
      baglam: "Kurbağanın yaşam döngüsünde iribaşın suda solungaçlarıyla yüzmesi, büyüyünce bacaklarının çıkıp akciğer solunumu yapması bir başkalaşım (metamorfoz) örneğidir.",
      soruKoku: "Başkalaşım sürecinin kurbağalara sağladığı en büyük yaşam avantajı nedir?",
      secenekler: {
        A: "Larva ile ergin bireylerin besin ve yaşam alanı için birbirleriyle rekabete girmesini önlemek",
        B: "Kurbağaların kış uykusuna yatmasını sağlamak",
        C: "Kurbağaların renk değiştirmesini sağlamak",
        D: "Kurbağaları balık yapmak"
      },
      dogruCevap: "A",
      cozum: "İribaş suda bitkisel ve planktonik beslenirken ergin kurbağa karada böcek avlar; böylece tür içi besin savaşı engellenir (6. Ünite Sentezi).",
      olculenKazanim: "F.7.6.2.4. Başkalaşımın ekolojik faydasını analiz eder.",
      olculenBeceri: "Ekolojik Rekabet Analizi",
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
      id: "mcq-7-7-59",
      number: 19,
      baglam: "Bir sınıfta öğrenciler elektrik devresi kurarken anahtar açıkken lambanın yanmadığını, anahtar kapatılınca devrenin kapalı devre haline gelerek lambanın hemen ışık saçtığını görmüştür.",
      soruKoku: "Elektrik devresinde kapalı devre durumunda elektrik akımının iletimi ile ilgili hangisi doğrudur?",
      secenekler: {
        A: "Elektronların tel içerisindeki elektrik alan etkisiyle neredeyse ışık hızına yakın bir hızla birbirini iterek enerjiyi anında ampule ulaştırması",
        B: "Elektronların pilden ampule yürüyerek 10 dakikada varması",
        C: "Ampulün elektriği mıknatısla çekmesi",
        D: "Pilin ampule ışık fırlatması"
      },
      dogruCevap: "A",
      cozum: "Elektrik sinyali iletken içindeki elektrik alan dalgası sayesinde ışık hızına yakın bir süratle anında iletilir ve lamba anahtara basıldığı anda yanar.",
      olculenKazanim: "F.7.7.1.1. Elektrik enerjisinin iletim hızını ve mekanizmasını açıklar.",
      olculenBeceri: "Fiziksel Alan ve İletim Mekanizması",
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
      id: "mcq-7-7-60",
      number: 20,
      baglam: "MEB 7. Sınıf 2. Kitap boyunca incelediğimiz; ışığın kırılması, atomun yapısı, canlıların üremesi ve elektrik kanunları, kâinatın her noktasında tek bir şaşmaz ilim ve hikmet mührünün bulunduğunu göstermektedir.",
      soruKoku: "Türkiye Yüzyılı Maarif Modeli fen bilimleri vizyonuyla bütün bu kanunları öğrenen bir öğrenci hangi nihai şuura ulaşır?",
      secenekler: {
        A: "Tabiattaki her kanunun ilahi bir hikmet ve nizamla kurulduğunu anlayarak ilmi, ahlakı ve teknolojiyi vatanının ve insanlığın hayrına adama şuuruna",
        B: "Fen bilimlerinin sadece sınav kazanmak için ezberlenen formüller olduğuna",
        C: "Doğadaki hadiselerin birbiriyle hiçbir ilgisinin olmadığına",
        D: "Bilimin insanlığa hiçbir faydası olmadığına"
      },
      dogruCevap: "A",
      cozum: "Maarif Modeli vizyonu; aklı, hikmeti, ilmi ve ahlakı birleştirerek kainatın nizamını keşfeden ve bu bilgiyi medeniyetin ve insanlığın hizmetine adayan şuurlu nesiller yetiştirmeyi amaçlar.",
      olculenKazanim: "Türkiye Yüzyılı Maarif Modeli Kök Değerler ve Bilim Şuuru.",
      olculenBeceri: "Hikmet, Tefekkür ve Değerler Eğitimi",
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
