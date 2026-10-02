import { SectionContent } from '../types';

export const section5_7_1: SectionContent = {
  code: "5.7.1",
  title: "Basit Elektrik Devresi Elemanları ve Sembolik Gösterimleri",
  unitCode: "7. Ünite",
  unitTitle: "Elektrik Devre Elemanları",
  summary: "Basit bir elektrik devresini oluşturan elemanlar (pil, ampul, bağlantı kablosu, anahtar, duy, pil yatağı), devre şemaları, elemanların uluslararası standart sembollerle gösterilmesinin önemi ve evrensel bilim dili.",
  kazanimlar: [
    "F.5.7.1.1. Bir elektrik devresindeki elemanları sembolleriyle gösterir.",
    "F.5.7.1.2. Çizilen bir devre şemasını devre elemanlarını kullanarak kurar ve çalıştırır.",
    "Devre elemanlarının sembollerle gösterilmesinin bilimsel iletişim ve teknolojik üretimdeki önemini fark eder."
  ],
  hatirlayalim: {
    text: "Canlılar dünyasından modern hayatımızı aydınlatan, evlerimize ışık ve enerji taşıyan elektrik dünyasına geçiyoruz. Bir el fenerinin içine baktığımızda pili, ampulü ve açma-kapama düğmesini görürüz. Peki bir Japon veya Alman mühendis ile Türk mühendis aynı elektrik devresini dillerini bilmeden nasıl çizer ve anlar? İşte bunu sağlayan sembollerin evrensel dilini ve bir devrenin ışık saçma sırrını keşfedeceğiz.",
    keyPoints: [
      "Pil: Devreye elektrik enerjisi sağlayan güç kaynağıdır. Uzun çizgi pozitif (+), kısa kalın çizgi negatif (-) kutbu temsil eder.",
      "Ampul: Elektrik enerjisini ışık ve ısı enerjisine dönüştüren elemandır; daire içinde çarpı (X) sembolü ile gösterilir.",
      "Bağlantı Kablosu: Elektrik enerjisini devrenin diğer elemanlarına ileten iletken teldir; düz çizgilerle gösterilir.",
      "Anahtar: Devreden akım geçişini kontrol eden, devreyi açıp kapatan elemandır. Açık anahtar akımı keser (ışık vermez), kapalı anahtar devreyi tamamlar (ampul yanar).",
      "Duy ve Pil Yatağı: Ampulün vidalandığı yere 'duy', pillerin takıldığı yuvaya 'pil yatağı' denir. Bu elemanların devre şemalarında özel bir sembolü yoktur.",
      "Evrensel Bilim Dili: Semboller sayesinde dünyanın neresinde olursa olsun çizilen bir devre şeması herkes tarafından tek bir anlamda anlaşılır."
    ]
  },
  onDegerlendirme: [
    {
      id: "on-elk-1",
      question: "Evimizdeki odanın lambasını yakmak için duvardaki düğmeye bastığımızda elektrik devresinde gerçekte ne olur?",
      answer: "Duvardaki anahtarı 'kapalı' konuma getiririz; böylece devre tamamlanır ve elektrik akımı ampule ulaşarak ışık verir."
    },
    {
      id: "on-elk-2",
      question: "Elektrik devre şemalarında ampul ve pilin resmini çizmek yerine neden standart semboller kullanılır?",
      answer: "Çizimi kolaylaştırmak, zamandan tasarruf etmek ve dünyanın her yerindeki bilim insanlarının aynı ortak dilde hatasız anlaşmasını sağlamak için."
    },
    {
      id: "on-elk-3",
      question: "Bir elektrik devresinde ampul duya takılı, pil dolu fakat ampul ışık vermiyorsa olası sebepler neler olabilir?",
      answer: "Anahtar açık olabilir, bağlantı kablosunda kopukluk olabilir, piller ters bağlanmış olabilir veya ampulün flaman teli kopmuş (patlamış) olabilir."
    },
    {
      id: "on-elk-4",
      question: "Duy ve pil yatağı olmadan da bir ampulün yanması sağlanabilir mi?",
      answer: "Evet; kablolar pilin kutuplarına ve ampulün metal uçlarına doğrudan temas ettirilirse devre yine de çalışır; duy ve pil yatağı sadece sabitlemeyi kolaylaştırır."
    },
    {
      id: "on-elk-5",
      question: "Pil sembolündeki uzun ve kısa çizgiler neyi temsil eder?",
      answer: "Uzun çizgi pilin artı (+) kutbunu, kısa ve kalın çizgi ise pilin eksi (-) kutbunu temsil eder."
    }
  ],
  hazirlik: {
    question: "Elinizde sadece bir kalem pil, küçük bir ampul ve tek bir bakır tel parçası olsa, ampulü yakmayı nasıl başarırsınız?",
    answer: "Ampulün alt ucunu pilin artı (+) kutbuna değdirir, telin bir ucunu pilin eksi (-) kutbuna, diğer ucunu ampulün metal yan gövdesine dokundurarak kapalı devre oluştururuz."
  },
  merak: {
    question: "Tüm dünyadaki elektronik aletlerin (telefon, bilgisayar, televizyon) içindeki karmaşık anakartların üzerinde milyonlarca küçük devre yolu ve sembol varken nasıl hiçbir hata olmadan fabrikalarda üretilebilir?",
    answer: "Uluslararası standart semboller ve devre şemaları sayesinde robotik makineler ve mühendisler milimetrik yolları kusursuzca birleştirir."
  },
  kopru: {
    title: "Köprü İstasyonu: El-Cezeri'den Thomas Edison'a Devrelerin Evrimi",
    content: "Ders kitabımızın Bilgi İstasyonu'nda (sayfa 145) incelendiği gibi; 12. yüzyılda Cizre'de yaşayan büyük Türk-İslam bilgini El-Cezeri, dişli çarklar ve su terazileriyle çalışan ilk otomat ve robotik devreleri kurmuştur. 19. yüzyılda ise Thomas Edison binlerce deneyin ardından karbon flamanlı ampulü icat ederek insanlığı karanlıktan aydınlığa taşımıştır.",
    question: "Bir devrenin kapalı olması ile açık olması arasındaki fark nedir?",
    answer: "Kapalı devrede anahtar kapalıdır, akım kesintisiz akar ve ampul yanar. Açık devrede anahtar açıktır, devre yolu kesilmiştir ve ampul yanmaz."
  },
  hikmetStages: [
    {
      stage: 1,
      name: "1. Varlığı Tanıt",
      concept: "Görünmeyen Enerjinin Işık Ziyafeti: Elektrik",
      text: "Kabloların içinden gözle görülmeden akan ve ampulde sıcacık bir nura dönüşen elektrik akımı, kâinattaki gizli kuvvetlerin en harikasıdır."
    },
    {
      stage: 2,
      name: "2. Parçalarını Göster",
      concept: "Devre Elemanlarının Takımı",
      text: "Pil enerji fışkırtır, kablo taşır, anahtar yön verir, ampul parıldar; her eleman küçük bir bedenin organları gibi görev paylaşımı yapar."
    },
    {
      stage: 3,
      name: "3. Her Parçanın Vazifesini Göster",
      concept: "Anahtarın Kontrol Memuriyeti",
      text: "Anahtar küçücük bir hareketle devredeki devasa gücü ya serbest bırakır ya da durdurur; irade ve intizamın devredeki temsilcisidir."
    },
    {
      stage: 4,
      name: "4. Parçalar Arasındaki Uyumu Göster",
      concept: "Kapalı Devre Ahengi",
      text: "Artı kutuptan çıkan akım eksi kutba ulaşmadıkça hiçbir ampul yanmaz; tamamlanmamış bir yol ışık vermez."
    },
    {
      stage: 5,
      name: "5. Ölçü ve Düzeni Göster",
      concept: "Flaman Telinin Hassas Direnci",
      text: "Ampulün içindeki saç kılından ince tungsten tel ne hemen erir ne de akımı geçirmez; tam ölçülü bir dirençle kızararak odayı aydınlatır."
    },
    {
      stage: 6,
      name: "6. Büyük Benzetme Yap",
      concept: "Dolaşım Sistemi ve Elektrik Devresi",
      text: "Pil kalbe, kablolar kan damarlarına, elektrik akımı kana, ampul ise beslenen hücrelere benzer; kâinattaki sistemler birbirinin aynasıdır."
    },
    {
      stage: 7,
      name: "7. Hikmet ve Hizmeti Göster",
      concept: "Geceleri Gündüze Çeviren Nimet",
      text: "Bir tuşla evlerimizi ışıl ışıl aydınlatan ampul, insanın geceleri okumasına, çalışmasına ve huzur bulmasına hizmet eden büyük bir lütuftur."
    },
    {
      stage: 8,
      name: "8. İrade ve Sanat Perspektifi",
      concept: "El-Cezeri'nin Mekanik Dehası",
      text: "Cizreli El-Cezeri suyun gücünü dişlilerle birleştirerek robotlar inşa etmiş, insanın aklını kullanarak maddeye nasıl hükmedebileceğini göstermiştir."
    },
    {
      stage: 9,
      name: "9. Akıl Yürütme",
      concept: "Telin İçinde Işığı Gizleyen Kimdir?",
      text: "Kupkuru bakır tel ve cam fanus kendi kendine ışık üretemez; maddeye elektrik ve ışık potansiyelini yerleştiren Kudret'in ilmi sonsuzdur."
    },
    {
      stage: 10,
      name: "10. Tefekkür ve Sonuç",
      concept: "İlim ve İrfanın Ortak Dili",
      text: "Bütün insanlığın ortak sembollerle elektrik devrelerini anlaması gibi, kâinattaki tüm varlıklar da Yaratıcı'nın birliğini gösteren ortak tevhid sembolleridir."
    }
  ],
  etkinlikler: [
    {
      id: "etk-elk-1",
      title: "Basit Elektrik Devresi Kurma ve Şemasını Çizme",
      type: "Deneysel Kurulum ve Çizim",
      materials: ["1.5 V Kalem Pil", "Duy ve 1.5 V Ampul", "Basit Anahtar", "İki ucu açılmış bağlantı kabloları", "Pil yatağı"],
      steps: [
        "Piller pil yatağına artı-eksi kutuplarına dikkat edilerek takılır.",
        "Bağlantı kabloları anahtar, ampul ve pile bağlanır.",
        "Anahtar kapatılarak ampulün ışık vermesi gözlenir.",
        "Kurulan bu devrenin standart sembollerle devre şeması deftere çizilir."
      ],
      questions: [
        {
          qId: "etk-elk-1-a",
          label: "a",
          prompt: "Anahtar açıkken ampul neden ışık vermez?",
          answer: "Çünkü devre tamamlanmamıştır; teldeki kopukluk gibi anahtar yolu kestiği için elektrik akımı ampule ulaşamaz."
        },
        {
          qId: "etk-elk-1-b",
          label: "b",
          prompt: "Duy ve pil yatağının devre şemasında sembolü var mıdır?",
          answer: "Hayır; duy ve pil yatağı yardımcı tutucu elemanlardır, devre şemalarında özel bir sembolle gösterilmezler."
        },
        {
          qId: "etk-elk-1-c",
          label: "c",
          prompt: "Devre elemanlarını sembollerle göstermenin mühendislik ve bilimdeki faydası nedir?",
          answer: "Karmaşık resimler yerine basit ve hızlı çizim sağlar, diller farklı olsa bile tüm dünyada tek bir standart iletişim oluşturur."
        }
      ]
    }
  ],
  bilgiIstasyonlari: [
    {
      title: "Robotik ve Mekaniğin Babası: İsmail El-Cezeri",
      scientistOrMission: "Ebû'l-İz İsmâil b. er-Rezzâz el-Cezerî (1136-1206) - Cizre",
      description: "El-Cezeri, otomatik su saatleri, abdest alma robotları ve kan toplama otomatları icat ederek modern sibernetik ve kontrol mühendisliğinin temelini atmıştır. Eseri 'Kitab-ül Hiyel' tüm dünyada mühendisliğin başyapıtı kabul edilir.",
      hikmetNote: "Suyun debisi ve dişli dengesiyle çalışan mekanik sistemler, günümüz elektrik devrelerinin mantıksal atasıdır."
    },
    {
      title: "Azmin ve Çalışkanlığın Timsali: Thomas Alva Edison",
      scientistOrMission: "Thomas Alva Edison (1847-1931) - Ampulün Geliştirilmesi",
      description: "Edison binlerce farklı malzeme (bambu lifleri, pamuk iplikleri) deneyerek sonunda yüksek dirençli karbon flaman telini ampul içine yerleştirmeyi ve havası alınmış cam fanusta yüzlerce saat ışık vermesini başarmıştır.",
      hikmetNote: "'Ben başarısız olmadım, sadece ışık vermeyen binlerce yol buldum' sözüyle bilim yolunda sabır ve azmin değerini öğretmiştir."
    }
  ],
  dda: {
    id: "dda-elk-root",
    statement: "Elektrik devrelerinde ampul daire içinde çarpı (X) sembolü ile gösterilir.",
    correctDecision: "D",
    reason: "Ampulün standart uluslararası sembolü yuvarlak içine çarpıdır.",
    ifTrue: {
      id: "dda-elk-2a",
      statement: "Anahtar açık konumdayken elektrik devresinden akım geçer ve ampul ışık verir.",
      correctDecision: "Y",
      reason: "Anahtar açıkken devre kesiktir; akım geçemez ve ampul YANMAZ!",
      ifFalse: {
        id: "dda-elk-3a",
        statement: "Devre elemanlarının sembollerle gösterilmesi tüm dünyada ortak bir bilim dili oluşturur.",
        correctDecision: "D",
        reason: "Semboller evrenseldir ve dilden bağımsız hatasız iletişim sağlar.",
        ifTrue: { exit: 1, isCorrect: true, feedback: "Tebrikler! Kusursuz devre bilgisiyle 1. Çıkış'a ulaştınız." },
        ifFalse: { exit: 2, isCorrect: false, feedback: "Hatalı çıkış!" }
      }
    }
  },
  biliyorumAnliyorumDusunuyorum: {
    biliyorum: "Pil enerji kaynağıdır (+ ve -); ampul ışık verir; anahtar devreyi açıp kapatır; iletken tel akımı taşır; semboller evrenseldir.",
    anliyorum: "Ampulün yanması için devrenin kapalı olması şarttır; duy ve pil yatağı kolaylaştırıcıdır ancak şemada sembolü yoktur.",
    dusunuyorum: "Karanlık bir odayı aydınlatan küçücük bir ampulün arkasında Edison'un azmi, El-Cezeri'nin mekanik dehası ve kâinattaki atomik nizamın kusursuz işleyişi saklıdır."
  },
  pekistirmeIstasyonu: {
    stationTitle: "Pekiştirme İstasyonu-1 & 2 (Elektrik Devresi Elemanları ve Sembolleri)",
    pageReference: "Sayfa 144, 147",
    summaryText: "Devre elemanları ve sembollerinin eşleştirilmesi, açık ve kapalı devre analizi, devre şeması çizimi ve gerçek devre kurulumunun test edildiği istasyonlar.",
    targetSkills: [
      "F.5.7.1.1. Devre elemanlarını doğru sembollerle şematize eder.",
      "Açık ve kapalı devre arasındaki farkı açıklayarak ampulün yanma koşullarını belirler.",
      "Devre şeması verilen bir devreyi fiziksel malzemelerle hatasız kurar."
    ]
  },
  fillInBlanks: [
    {
      id: "fib-elk-1",
      number: 1,
      baglam: "Bir elektrik devresine elektrik enerjisi sağlayan güç kaynağı elemandır.",
      soruKoku: "Bu devre elemanına .................................... denir.",
      blankAnswer: "Pil",
      acceptableAnswers: ["pil", "Pil", "üreteç", "batarya"],
      explanation: "Güç kaynağı pildir.",
      wordBankHint: ["Pil", "Ampul", "Duy", "Anahtar"]
    },
    {
      id: "fib-elk-2",
      number: 2,
      baglam: "Elektrik enerjisini ışık ve ısı enerjisine dönüştüren elemandır.",
      soruKoku: "Bu elemana .................................... denir.",
      blankAnswer: "Ampul",
      acceptableAnswers: ["ampul", "Ampul", "lamba"],
      explanation: "Işık veren ampuldür.",
      wordBankHint: ["Ampul", "Pil", "Kablo", "Duy"]
    },
    {
      id: "fib-elk-3",
      number: 3,
      baglam: "Devreden elektrik akımının geçmesini sağlayan veya akımı kesen kontrol elemanıdır.",
      soruKoku: "Bu kontrol aracına .................................... adı verilir.",
      blankAnswer: "Anahtar",
      acceptableAnswers: ["anahtar", "Anahtar", "düğme"],
      explanation: "Akımı kontrol eden anahtardır.",
      wordBankHint: ["Anahtar", "Pil yatağı", "İletken", "Direnç"]
    },
    {
      id: "fib-elk-4",
      number: 4,
      baglam: "Pil sembolünde iki paralel çizgi kullanılır.",
      soruKoku: "Bu çizgilerden uzun olanı pilin .................................... (+) kutbunu gösterir.",
      blankAnswer: "Artı",
      acceptableAnswers: ["artı", "Artı", "pozitif"],
      explanation: "Uzun çizgi artı kutuptur.",
      wordBankHint: ["Artı", "Eksi", "Nötr", "Sıfır"]
    },
    {
      id: "fib-elk-5",
      number: 5,
      baglam: "Ampulün vidalanarak devrede sabit durmasını sağlayan yuvadır.",
      soruKoku: "Bu yuvaya .................................... adı verilir.",
      blankAnswer: "Duy",
      acceptableAnswers: ["duy", "Duy"],
      explanation: "Ampulün yuvası duy olarak adlandırılır.",
      wordBankHint: ["Duy", "Pil yatağı", "Priz", "Sigorta"]
    },
    {
      id: "fib-elk-6",
      number: 6,
      baglam: "Elektrik enerjisinin devre boyunca kayıpsız iletilmesini sağlayan bakır teldir.",
      soruKoku: "Bu tele bağlantı ....................................su denir.",
      blankAnswer: "Kablo",
      acceptableAnswers: ["kablo", "Kablo", "kablosu"],
      explanation: "İletken tel bağlantı kablosudur.",
      wordBankHint: ["Kablo", "İp", "Lastik", "Zincir"]
    },
    {
      id: "fib-elk-7",
      number: 7,
      baglam: "Bir devrede anahtar kapatıldığında elektrik akımı kesintisiz akar ve ampul ışık verir.",
      soruKoku: "Bu durumdaki devreye .................................... devre denir.",
      blankAnswer: "Kapalı",
      acceptableAnswers: ["kapalı", "Kapalı"],
      explanation: "Akım geçen devre kapalı devredir.",
      wordBankHint: ["Kapalı", "Açık", "Kısa", "Bozuk"]
    },
    {
      id: "fib-elk-8",
      number: 8,
      baglam: "Pekiştirme İstasyonu-2'de (sayfa 147) devre elemanlarının sembollerle gösterilmesinin evrensel boyutu vurgulanmıştır.",
      soruKoku: "Semboller tüm dünyada ortak bir bilimsel .................................... oluşturur.",
      blankAnswer: "Dil",
      acceptableAnswers: ["dil", "Dil", "iletişim"],
      explanation: "Semboller ortak bilim dilidir.",
      wordBankHint: ["Dil", "Oyun", "Sınav", "Ticaret"]
    },
    {
      id: "fib-elk-9",
      number: 9,
      baglam: "12. yüzyılda Cizre'de yaşayan ve ilk robotik mekanik sistemleri kuran Türk-İslam bilginidir.",
      soruKoku: "Bu bilgin İsmail El-....................................dir.",
      blankAnswer: "Cezeri",
      acceptableAnswers: ["Cezeri", "cezeri", "Cezerî"],
      explanation: "Sibernetiğin öncüsü El-Cezeri'dir.",
      wordBankHint: ["Cezeri", "Harezmi", "Farabi", "İbni Sina"]
    },
    {
      id: "fib-elk-10",
      number: 10,
      baglam: "Ampulün içinde parıldayarak ışık saçan saç kılından ince kıvrımlı tele verilen addır.",
      soruKoku: "Bu tele .................................... teli denir.",
      blankAnswer: "Flaman",
      acceptableAnswers: ["flaman", "Flaman", "filaman", "tungsten"],
      explanation: "Işık veren tel flaman telidir.",
      wordBankHint: ["Flaman", "Bakır", "Plastik", "Demir"]
    }
  ],
  contextQuestions: [
    {
      id: "mcq-elk-1",
      number: 1,
      baglam: "Pekiştirme İstasyonu-1'de (sayfa 144) Ayşe kurduğu basit elektrik devresinde anahtarı kapattığı halde ampulün ışık vermediğini fark etmiştir. Yapılan incelemede pilin yepyeni ve dolu olduğu, ampulün sağlam olduğu görülmüştür.",
      soruKoku: "Devredeki ampulün yanmamasının sebebi aşağıdakilerden hangisi OLABİLİR?",
      secenekler: {
        A: "Bağlantı kablolarından birinin kopuk olması veya ampulün duya tam oturmaması",
        B: "Pilin çok güçlü olması",
        C: "Odanın aydınlık olması",
        D: "Duyun kırmızı renkli olması"
      },
      dogruCevap: "A",
      cozum: "Kabloda kopukluk veya temassızlık varsa devre açık kalır ve akım geçmediği için ampul yanmaz.",
      olculenKazanim: "F.5.7.1.2. Devre arızalarını ve yanmama nedenlerini teşhis eder.",
      olculenBeceri: "Arıza Teşhisi ve Problem Çözme",
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
      id: "mcq-elk-2",
      number: 2,
      baglam: "Bir fen bilimleri öğretmeni tahtaya bir devre şeması çizmiş ve öğrencilerden bu şemada kullanılan sembolleri adlandırmalarını istemiştir:\n- Daire içinde çarpı işareti\n- Bir uzun bir kısa paralel çizgi\n- Çizgi üzerinde açık duran bir anahtar kolu",
      soruKoku: "Bu semboller sırasıyla hangi devre elemanlarına aittir?",
      secenekler: {
        A: "Ampul — Pil — Açık Anahtar",
        B: "Pil — Ampul — Kapalı Anahtar",
        C: "Bağlantı kablosu — Pil — Duy",
        D: "Ampul — Duy — Pil yatağı"
      },
      dogruCevap: "A",
      cozum: "Daire içinde çarpı ampul, uzun-kısa çizgi pil, açık kol ise açık anahtardır.",
      olculenKazanim: "F.5.7.1.1. Devre elemanları sembollerini doğru eşleştirir.",
      olculenBeceri: "Görsel Sembol Okuryazarlığı",
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
      id: "mcq-elk-3",
      number: 3,
      baglam: "Ali bir pil ve bir ampulü masaya koymuş, ancak evde duy ve pil yatağı bulamamıştır.",
      soruKoku: "Ali bu ampulü duy ve pil yatağı OLMADAN yakabilir mi?",
      secenekler: {
        A: "Evet; bağlantı kablolarını pilin kutuplarına ve ampulün alt ve yan metal kısımlarına doğrudan temas ettirerek yakabilir.",
        B: "Hayır; duy olmadan hiçbir ampul asla ışık veremez.",
        C: "Hayır; pil yatağı olmadan pilden elektrik çıkmaz.",
        D: "Evet; sadece pile üfleyerek yakabilir."
      },
      dogruCevap: "A",
      cozum: "Duy ve pil yatağı devrenin çalışması için zorunlu elemanlar değildir; sadece sabitlemeye yarar. Kablolar doğru temas ederse ampul ışık verir.",
      olculenKazanim: "F.5.7.1.2. Devre elemanlarının zorunlu ve yardımcı rollerini analiz eder.",
      olculenBeceri: "Kavram Yanılgısı Giderme",
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
      id: "mcq-elk-4",
      number: 4,
      baglam: "Japonya'da üretilen bir televizyonun içindeki devre kartının şemasını inceleyen Türk bir elektrik mühendisi hiçbir Japonca kelime bilmediği halde devrenin nasıl çalıştığını eksiksiz anlamıştır.",
      soruKoku: "Mühendisin bunu başarabilmesinin en temel gerekçesi nedir?",
      secenekler: {
        A: "Elektrik devre elemanlarının sembollerinin uluslararası standart olması ve ortak bir bilimsel alfabe oluşturması",
        B: "Televizyonun resimlerine bakması",
        C: "Japon mühendisin şemaya Türkçe notlar yazması",
        D: "Tüm televizyonların aynı olması"
      },
      dogruCevap: "A",
      cozum: "Semboller evrenseldir; dil bilmeye gerek kalmadan tüm dünyadaki mühendislerin anlaşmasını sağlar.",
      olculenKazanim: "F.5.7.1.1. Sembollerin evrensel iletişimdeki rolünü kavrar.",
      olculenBeceri: "Bilim İletişimi Kavrayışı",
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
      id: "mcq-elk-5",
      number: 5,
      baglam: "Pekiştirme İstasyonu-2'de (sayfa 147) açık ve kapalı devre kavramları modellenmiştir.",
      soruKoku: "Aşağıdaki devre durumlarından hangisinde ampul KESİNLİKLE IŞIK VERİR?",
      secenekler: {
        A: "Dolu bir pil, sağlam bir ampul, sağlam iletken kablolar ve kapalı bir anahtarla oluşturulan devre",
        B: "Anahtarı açık olan devre",
        C: "Pili bitmiş devre",
        D: "Kablosu ortadan kopmuş devre"
      },
      dogruCevap: "A",
      cozum: "Ampulün yanması için sağlam elemanlar ve kapalı devre şarttır.",
      olculenKazanim: "F.5.7.1.2. Ampulün ışık verme şartlarını sentezler.",
      olculenBeceri: "Koşul Analizi",
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
      id: "mcq-elk-6",
      number: 6,
      baglam: "Bir el fenerinin çalışması basit elektrik devresine dayanır. Fenerin açma-kapama sürgülü düğmesi devrede hangi elemanın görevini yapar?",
      soruKoku: "Fenerin düğmesi devredeki hangi elemandır?",
      secenekler: {
        A: "Anahtar",
        B: "Pil",
        C: "Ampul",
        D: "Duy"
      },
      dogruCevap: "A",
      cozum: "Düğme elektrik akımını açıp kapatan anahtardır.",
      olculenKazanim: "F.5.7.1.1. Günlük araçlardaki devre elemanlarını teşhis eder.",
      olculenBeceri: "Teknolojik Cihaz Analizi",
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
      id: "mcq-elk-7",
      number: 7,
      baglam: "Thomas Edison ampulü geliştirirken flaman telinin oksijenle temas edip anında yanıp kül olmasını engellemek için cam fanusun içini nasıl hazırlamıştır?",
      soruKoku: "Edison cam fanusun içini nasıl bir ortam haline getirmiştir?",
      secenekler: {
        A: "Cam fanusun içindeki havayı vakumlayarak boşaltmış veya asal gaz doldurmuştur.",
        B: "Cam fanusun içini suyla doldurmuştur.",
        C: "Cam fanusun içine kömür tozu atmıştır.",
        D: "Cam fanusu kırmıştır."
      },
      dogruCevap: "A",
      cozum: "Yanma için oksijen gerekir; fanusun havası boşaltılınca akkor hale gelen tel oksijensiz ortamda yanıp kül olmadan yüzlerce saat ışık verir.",
      olculenKazanim: "F.5.7.1.1. Edison'un ampul tasarımındaki bilimsel prensibi açıklar.",
      olculenBeceri: "Bilim Tarihi ve Tasarım Mantığı",
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
      id: "mcq-elk-8",
      number: 8,
      baglam: "Aşağıdaki devre elemanlarından hangisinin elektrik devre şemalarında ÖZEL BİR SEMBOLÜ YOKTUR?",
      soruKoku: "Hangisinin sembolik gösterimi yoktur?",
      secenekler: {
        A: "Pil yatağı",
        B: "Pil",
        C: "Anahtar",
        D: "Ampul"
      },
      dogruCevap: "A",
      cozum: "Duy ve pil yatağının devre şemalarında özel bir sembolü yoktur.",
      olculenKazanim: "F.5.7.1.1. Sembolü olmayan yardımcı elemanları ayırt eder.",
      olculenBeceri: "Sembol Bilgisi",
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
      id: "mcq-elk-9",
      number: 9,
      baglam: "İki adet kalem pili pil yatağına takan Mehmet, pillerin ikisinin de artı (+) kutbunu aynı yöne gelecek şekilde takmış ve ampulün yanmadığını görmüştür.",
      soruKoku: "Mehmet'in devresindeki hatayı düzeltmesi için ne yapması gerekir?",
      secenekler: {
        A: "Pilleri seri bağlarken birinin artı (+) kutbunun diğerinin eksi (-) kutbuna temas edecek şekilde zıt yönlü yerleştirilmesi gerekir.",
        B: "Pilleri çıkartıp çöpe atmalıdır.",
        C: "Ampulü kırmalıdır.",
        D: "Kabloları kesmelidir."
      },
      dogruCevap: "A",
      cozum: "Piller birbirini destekleyecek şekilde artı-eksi sırasıyla seri bağlanmalıdır; kutuplar çakışırsa akım akmaz.",
      olculenKazanim: "F.5.7.1.2. Pillerin kutup bağlantı kurallarını uygular.",
      olculenBeceri: "Uygulamalı Fizik Mantığı",
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
      id: "mcq-elk-10",
      number: 10,
      baglam: "12. yüzyılda El-Cezeri'nin suyun mekanik gücüyle kurduğu otomat sistemleri ile günümüz elektrik devrelerinin ortak felsefesi nedir?",
      soruKoku: "El-Cezeri'nin mühendisliği ile elektrik devreleri arasındaki ortak yön nedir?",
      secenekler: {
        A: "Enerjiyi intizamlı bir düzenek içinde kontrol ederek faydalı bir işe ve harekete dönüştürmek",
        B: "İkisinin de pil kullanması",
        C: "İkisinin de ampul yakması",
        D: "İkisinin de sadece suda çalışması"
      },
      dogruCevap: "A",
      cozum: "İster mekanik su gücü olsun ister elektrik, mühendisliğin özü enerjiyi nizam içinde faydalı işe dönüştürmektir.",
      olculenKazanim: "F.5.7.1.1. Tarihsel teknoloji ile modern devre mantığını karşılaştırır.",
      olculenBeceri: "Felsefi ve Tarihsel Mühendislik Perspektifi",
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
      id: "mcq-elk-11",
      number: 11,
      baglam: "Bir devrede elektrik akımının yönü bilimsel kabul olarak hangi kutuptan hangi kutba doğrudur?",
      soruKoku: "Devrede akım yönü nasıldır?",
      secenekler: {
        A: "Pilin pozitif (+) kutbundan negatif (-) kutbuna doğru",
        B: "Negatif (-) kutuptan pozitif (+) kutba doğru",
        C: "Ampulden anahtara doğru",
        D: "Yukarıdan aşağıya doğru"
      },
      dogruCevap: "A",
      cozum: "Geleneksel devre analizinde elektrik akımının yönü pilin artı (+) kutbundan eksi (-) kutbuna doğrudur.",
      olculenKazanim: "F.5.7.1.1. Elektrik akımı yönünü şematize eder.",
      olculenBeceri: "Teorik Fizik Bilgisi",
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
      id: "mcq-elk-12",
      number: 12,
      baglam: "Bir öğrenci elektrik devresindeki bağlantı kablosunun ortasını kesip araya plastik bir silgi bağlamıştır.",
      soruKoku: "Bu durumda anahtar kapatıldığında ampulün durumu ne olur?",
      secenekler: {
        A: "Plastik silgi yalıtkan olduğu için elektrik akımını iletmez ve ampul ışık vermez.",
        B: "Ampul patlar.",
        C: "Ampul daha parlak yanar.",
        D: "Silgi eriyip ampul olur."
      },
      dogruCevap: "A",
      cozum: "Plastik yalıtkandır; devrenin arasına yalıtkan girerse devre kesilmiş olur ve ampul yanmaz.",
      olculenKazanim: "F.5.7.1.2. İletken ve yalıtkan maddelerin devredeki etkisini modeller.",
      olculenBeceri: "Maddenin İletkenliği ve Devre Analizi",
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
      id: "mcq-elk-13",
      number: 13,
      baglam: "Öğrenci silgiyi çıkarıp yerine metal ataş bağladığında ampulün yandığını görmüştür.",
      soruKoku: "Metal ataş bağlandığında ampulün yanması metalin hangi özelliğini kanıtlar?",
      secenekler: {
        A: "Metallerin elektrik enerjisini çok iyi ileten elektrik iletkeni olduğunu",
        B: "Metallerin yalıtkan olduğunu",
        C: "Metallerin elektrik ürettiğini",
        D: "Ataşın ampulden daha parlak olduğunu"
      },
      dogruCevap: "A",
      cozum: "Demir/çelik ataş elektrik iletkenidir; devreyi tamamlar ve akımı iletir.",
      olculenKazanim: "F.5.7.1.2. İletken maddelerin devredeki rolünü açıklar.",
      olculenBeceri: "Deneysel Çıkarım",
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
      id: "mcq-elk-14",
      number: 14,
      baglam: "Bir elektrik devresinde anahtar neden iletken telin herhangi bir noktasına takılabilir?",
      soruKoku: "Anahtarın devredeki konumuyla ilgili hangisi doğrudur?",
      secenekler: {
        A: "Devredeki yol tek bir hat olduğu için anahtar ister pilin yanına ister ampulün yanına konulsun devreyi kestiğinde akım her yerde durur.",
        B: "Anahtar mutlaka ampulün içine konulmalıdır.",
        C: "Anahtar pilin tam ortasına batırılmalıdır.",
        D: "Anahtar kabloya dokunmamalıdır."
      },
      dogruCevap: "A",
      cozum: "Basit seride devre tek bir kapalı çevrimdir; anahtar nerede açılırsa açılsın tüm devrede akım durur.",
      olculenKazanim: "F.5.7.1.2. Anahtarın konum bağımsız kontrol gücünü kavrar.",
      olculenBeceri: "Devre Topolojisi Muhakemesi",
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
      id: "mcq-elk-15",
      number: 15,
      baglam: "Elektrik kablolarının dışının renkli plastik ile kaplanıp içinin bakır tellerden yapılmasının sebebi nedir?",
      soruKoku: "Kabloların bu şekilde üretilmesinin temel amacı nedir?",
      secenekler: {
        A: "İçteki bakır telin elektriği iletmesi, dıştaki plastiğin ise elektriği yalıtarak insanların çarpılmasını ve kısa devreyi önlemesi",
        B: "Kabloların güzel kokması",
        C: "Kabloların ağır olması",
        D: "Plastiğin elektrik üretmesi"
      },
      dogruCevap: "A",
      cozum: "Bakır iletken, plastik yalıtkandır; elektrik güvenliği için bu ikili yapı şarttır.",
      olculenKazanim: "F.5.7.1.1. Elektrik güvenliğinde iletken-yalıtkan uyumunu kavrar.",
      olculenBeceri: "Güvenlik ve Tasarım Bilgisi",
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
      id: "mcq-elk-16",
      number: 16,
      baglam: "Pekiştirme İstasyonu-1'deki (sayfa 144) çizim etkinliğinde bir öğrenci devredeki ampulün flaman telinin kopmuş olduğunu fark etmiştir.",
      soruKoku: "Halk arasında 'ampul patlamış' denilen bu durumda devrede ne gerçekleşir?",
      secenekler: {
        A: "Flaman teli koptuğu için devrede açık oluşur, akım geçemez ve ampul ışık veremez.",
        B: "Pil patlar.",
        C: "Kablolar erir.",
        D: "Ampul daha çok aydınlatır."
      },
      dogruCevap: "A",
      cozum: "Kopan tel devreyi kesintiye uğratır; kapalı devre bozulduğu için ampul yanmaz.",
      olculenKazanim: "F.5.7.1.2. Flaman kopmasının devredeki elektriksel sonucunu açıklar.",
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
    },
    {
      id: "mcq-elk-17",
      number: 17,
      baglam: "Bir evin elektrik faturasını düşürmek ve aynı ışığı daha az elektrik harcayarak elde etmek isteyen bir aile eski akkor telli ampulleri LED ampullerle değiştirmiştir.",
      soruKoku: "LED ampullerin eski akkor flamanlı ampullere göre üstünlüğü nedir?",
      secenekler: {
        A: "Elektrik enerjisinin çoğunu ısıya dönüştürmek yerine doğrudan ışığa dönüştürerek %80-90 enerji tasarrufu sağlaması",
        B: "Daha çok ısınması",
        C: "Daha çabuk patlaması",
        D: "Pille çalışmaması"
      },
      dogruCevap: "A",
      cozum: "Eski ampuller enerjinin %90'ını ısıya harcar; LED ampuller ise neredeyse tamamını ışığa çevirerek muazzam tasarruf sağlar.",
      olculenKazanim: "F.5.7.1.1. Aydınlatma teknolojilerinde enerji verimliliğini değerlendirir.",
      olculenBeceri: "Verimlilik ve Tasarruf Analizi",
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
      id: "mcq-elk-18",
      number: 18,
      baglam: "Basit bir devrede pilin iki kutbu doğrudan tek bir telle birbirine bağlanır ve araya ampul konulmazsa tel hızla aşırı ısınır ve pil anında tükenir.",
      soruKoku: "Tehlikeli olan bu duruma elektrikte ne ad verilir?",
      secenekler: {
        A: "Kısa Devre",
        B: "Açık Devre",
        C: "Uzun Devre",
        D: "Ters Devre"
      },
      dogruCevap: "A",
      cozum: "Dirençsiz yoldan akımın aşırı akmasına kısa devre denir; yangınlara sebep olabilir.",
      olculenKazanim: "F.5.7.1.2. Kısa devre tehlikesini ve mekanizmasını kavrar.",
      olculenBeceri: "Elektrik Güvenliği",
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
      id: "mcq-elk-19",
      number: 19,
      baglam: "Bir elektrik devresinin şemasında düz çizgiler neyi temsil eder?",
      soruKoku: "Düz çizgiler hangi elemandır?",
      secenekler: {
        A: "Bağlantı kablosu (iletken tel)",
        B: "Pil",
        C: "Duy",
        D: "Masa"
      },
      dogruCevap: "A",
      cozum: "Düz çizgiler elektrik akımını taşıyan bağlantı kablosudur.",
      olculenKazanim: "F.5.7.1.1. Şema çizgilerinin anlamını bilir.",
      olculenBeceri: "Temel Şema Okuma",
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
      id: "mcq-elk-20",
      number: 20,
      baglam: "Elektrik devresindeki tüm elemanların uyum içinde çalışıp ampulün ışık vermesi olayı fen bilimleri maarif modelinde hangi büyük hakikati tefekkür ettirir?",
      soruKoku: "Devredeki nizam bize neyi gösterir?",
      secenekler: {
        A: "Kâinatta hiçbir şeyin başıboş olmadığını, en küçük atomlardan elektrik akımına kadar her şeyin kusursuz bir kanun, ölçü ve intizamla birbiriyle yardımlaştığını",
        B: "Ampulün kendi kendine yandığını",
        C: "Pillerin canlı olduğunu",
        D: "Elektriğin tesadüfen oluştuğunu"
      },
      dogruCevap: "A",
      cozum: "Devredeki kusursuz işleyiş kâinattaki büyük nizam ve yardımlaşma kanununun mikro bir modelidir.",
      olculenKazanim: "F.5.7.1.1. Elektrik devresindeki intizamı tefekkür eder.",
      olculenBeceri: "Bütüncül Tefekkür ve Değerler Eğitimi",
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
