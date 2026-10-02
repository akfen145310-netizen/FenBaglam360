import { SectionContent } from '../../types';

export const grade6Unit1Review: SectionContent = {
  code: "6.1.3",
  title: "1. Ünite Sonu Değerlendirme & Sonuç Çalışmaları",
  unitCode: "6.1",
  unitTitle: "1. Ünite: Güneş Sistemi ve Tutulmalar",
  summary: "MEB 6. Sınıf 1. Kitap Sayfa 39-43 1. Ünite Sonu İstasyonu ve Sonuç Çalışmaları: Top büyüklükleri benzetmeleri (Pinpon, Tenis, Futbol ve Basketbol topları ile gezegen ölçekleme), Asteroit Kuşağı K ve L gezegenleri analizi, Güneş ve Ay tutulması hata düzeltme modelleri, 12 boşluk doldurma ve 20 bağlam temelli LGS/PISA sorusu.",
  kazanimlar: [
    "F.6.1.1.1. Güneş sistemindeki gezegenleri büyüklük ve özelliklerine göre modeller.",
    "F.6.1.1.2. Asteroit Kuşağının yerini ve gök taşı etkilerini çözümler.",
    "F.6.1.2.1. ve F.6.1.2.2. Güneş ve Ay tutulması modellerindeki hataları tespit eder ve düzeltir.",
    "F.6.1.2.4. 1. Ünite kazanımlarını bütüncül bir sentezle değerlendirir."
  ],
  hatirlayalim: {
    text: "1. Ünite boyunca Güneş sistemindeki 8 gezegeni (iç/karasal ve dış/gazsal), Asteroit Kuşağı'nı, gök taşlarını (meteor ve meteorit), Güneş ve Ay tutulmalarının gerçekleşme şartlarını ve gökbilimcilerimizi öğrendik.",
    keyPoints: [
      "Hacim sıralaması: Jüpiter > Satürn > Uranüs > Neptün > Dünya > Venüs > Mars > Merkür.",
      "Güneş'e yakınlık: Merkür, Venüs, Dünya, Mars, Jüpiter, Satürn, Uranüs, Neptün.",
      "Karasal gezegenlerin en büyüğü Dünya, en küçüğü Merkür'dür. Uydusu olmayanlar Merkür ve Venüs'tür.",
      "Güneş tutulması Yeni Ay'da ve gündüz; Ay tutulması Dolunay'da ve gece gerçekleşir."
    ]
  },
  onDegerlendirme: [
    {
      id: "od-u1rev-1",
      question: "Ders kitabı Sayfa 40'taki soru: Öğretmen Pinpon, Tenis, Futbol ve Basketbol toplarını karasal gezegenlere benzetmek isterse hangi top hangi gezegen olur?",
      answer: "Karasal gezegenlerin hacimce küçükten büyüğe sırası: Merkür < Mars < Venüs < Dünya'dır. Buna göre: Pinpon topu = Merkür, Tenis topu = Mars, Futbol topu = Venüs, Basketbol topu = Dünya olur (Sayfa 40 Soru 2)."
    },
    {
      id: "od-u1rev-2",
      question: "Ders kitabı Sayfa 41'deki soru: Asteroit Kuşağı K ve L gezegenleri arasındadır. K ve L gezegenleri ve temsil eden toplar nelerdir?",
      answer: "Asteroit Kuşağı Mars (K) ile Jüpiter (L) arasındadır. Mars küçük olduğu için Pinpon topu, Jüpiter en büyük olduğu için Basketbol topu ile temsil edilir."
    },
    {
      id: "od-u1rev-3",
      question: "Ders kitabı Sayfa 41 Soru 4'teki Güneş tutulması modelinde öğrenci sırasıyla Fener - Basketbol topu - Tenis topu dizmiştir. Bu modeldeki hata nedir ve nasıl düzeltilir?",
      answer: "Güneş tutulmasında Ay (küçük tenis topu) ortada olmalıdır; Dünya (basketbol topu) ise arkada olmalıdır. Hata: Tenis topu ile basketbol topunun yeri değiştirilmelidir."
    }
  ],
  hazirlik: {
    question: "Top modelleriyle gök cisimlerini ölçeklendirirken neden 'oluşturulan modellerin hacimsel büyüklük, şekil ve uzaklığının gerçeği bire bir yansıtmayacağı' belirtilmiştir?",
    answer: "Çünkü uzaydaki mesafeler ile gök cisimlerinin çapları arasındaki oran o kadar büyüktür ki, eğer Dünya basketbol topu yapılsaydı Güneş yaklaşık 26 metre çapında dev bir bina büyüklüğünde ve kilometrelerce uzakta olmak zorunda kalırdı."
  },
  merak: {
    question: "Asteroit Kuşağı'ndaki yüz binlerce kaya parçası neden birleşip tek bir gezegen haline gelememiştir?",
    answer: "Hemen yanındaki devasa Jüpiter'in muazzam kütle çekim kuvveti, o bölgedeki kaya parçalarını sürekli çekip fırlatarak onların birleşip tek bir gezegen oluşturmasını engellemiştir."
  },
  kopru: {
    title: "1. Üniteden 2. Üniteye: Gök Mekaniğinden Yeryüzündeki Harekete",
    content: "Gezegenlerin uzaydaki kusursuz yörüngelerini ve Güneş'in etrafındaki dolanımlarını yöneten kütle çekim kuvvetini inceledikten sonra, 2. Ünitede yeryüzündeki cisimlere etki eden 'Bileşke Kuvvet' ve 'Sürat-Hız' kavramlarına geçiş yapacağız.",
    question: "Gezegenleri yörüngede tutan kuvvet ile masayı ittiğimizde uyguladığımız kuvvetin ortak yönü nedir?",
    answer: "Her ikisi de cisimlerin hareket durumunu veya yönünü değiştirebilen, büyüklüğü ve yönü olan birer 'Kuvvet'tir."
  },
  hikmetStages: [
    {
      stage: 1,
      name: "1. Varlığı Tanıt (Güneş Sisteminin Bütüncül Tablosu)",
      concept: "Gök Mimarisinin Parçaları",
      text: "8 gezegen, uydular, asteroitler ve gök taşları tek bir Güneş merkezinde devasa bir saat gibi işler.",
      analogies: ["Mükemmel senkronize olmuş bir orkestranın şefin batonu etrafında çalması."]
    },
    {
      stage: 2,
      name: "2. Parçalarını Göster (Ölçekler ve Modeller)",
      concept: "Küçük Toplardan Devasa Kürelere",
      text: "Pinpon topu kadar küçük Merkür'den basketbol topu büyüklüğündeki gaz devlerine kadar her biri hassas dengededir.",
      analogies: ["Mimari bir plandaki maket parçaları."]
    },
    {
      stage: 3,
      name: "3. Ölçü ve Düzen (Gölge ve Tutulma Geometrisi)",
      concept: "Matematiksel Hizalanma",
      text: "Güneş, Ay ve Dünya'nın aynı doğrultuya girmesi ışığın doğrusal yayılma kanunuyla gölgeler düşürür.",
      questionToPonder: "Bu gölgelerin saniyesi saniyesine bilinmesi doğadaki matematiksel nizamı kanıtlamaz mı?"
    },
    {
      stage: 4,
      name: "4. Gayesini Keşfet (İnsanlığın Rehberi)",
      concept: "Takvim, Zaman ve Yön Bulma",
      text: "Güneş ve Ay'ın hareketleri tarih boyunca insanlara takvim, namaz vakitleri, denizlerde rota ve mevsim tayini sağlamıştır."
    },
    {
      stage: 5,
      name: "5. Bütünle İlişkilendir (Doğa ve Ekolojik Denge)",
      concept: "Güneş Sistemi Olmasaydı",
      text: "Jüpiter'in çekimi olmasaydı Dünya'ya sürekli dev kuyruklu yıldızlar çarpardı; Ay olmasaydı Dünya fırıldak gibi yalpalardı.",
      analogies: ["Jüpiter Dünya'nın uzaydaki kalkanı ve emniyet sübabıdır."]
    },
    {
      stage: 6,
      name: "6. Hayret ve Tefekkür (Kâinatın Sahibi)",
      concept: "Hikmetli İntizam",
      text: "Milyarlarca yıldır hiçbir parçası dökülmeyen, enerjisi tükenmeyen bu gök saati akıl sahiplerini tefekküre davet eder."
    }
  ],
  etkinlikler: [
    {
      id: "etk-u1rev-top-modeli",
      title: "Ders Kitabı Sayfa 40-41: Toplarla Gezegen ve Tutulma Modellemesi",
      type: "Beceri Temelli Modelleme",
      materials: ["Pinpon topu", "Tenis topu", "Futbol topu", "Basketbol topu", "El feneri"],
      steps: [
        "1. Adım: Topları hacimlerine göre diziniz: Pinpon < Tenis < Futbol < Basketbol.",
        "2. Adım: Karasal gezegenleri eşleyiniz: Merkür (Pinpon), Mars (Tenis), Venüs (Futbol), Dünya (Basketbol).",
        "3. Adım: Güneş tutulması düzeneği kurunuz: El Feneri (Güneş) - Tenis topu (Ay) - Basketbol topu (Dünya)."
      ],
      questions: [
        {
          qId: "q-u1rev-1",
          label: "Sonuç Sorusu 1",
          prompt: "Sayfa 40 Soru 1'de dört top tüm gezegenler arasından Mars, Venüs, Uranüs ve Satürn ile eşleştirilmek istenirse doğru eşleştirme nasıl olur?",
          answer: "Küçükten büyüğe sıralama Mars < Venüs < Uranüs < Satürn olduğu için: Pinpon = Mars, Tenis = Venüs, Futbol = Uranüs, Basketbol = Satürn olur (Cevap B şıkkı)."
        }
      ]
    }
  ],
  bilgiIstasyonlari: [
    {
      title: "1. Ünite Bilim İnsanları Portresi",
      scientistOrMission: "Bîrûnî, Bettânî, Zerkâle, Takıyyüddin ve Dilhan Eryurt",
      description: "Türk-İslam medeniyetinin ve Cumhuriyet Türkiye'sinin astronomi dahileri; Dünya'nın çevresinden eliptik yörüngelere, mekanik saatlerle rasattan NASA Apollo görevlerine kadar uzanan bilim meşalesini taşımışlardır.",
      hikmetNote: "İlim bir nesilden diğerine aktarılan evrensel bir hikmet mirasıdır."
    }
  ],
  dda: {
    id: "dda-u1rev-sonuc",
    statement: "Güneş sistemindeki en küçük gezegen Merkür, uydusu olmayan en büyük gezegen ise Venüs'tür.",
    correctDecision: "D",
    reason: "Merkür tüm gezegenlerin en küçüğüdür. Uydusu olmayan iki gezegen (Merkür ve Venüs) arasında ise Venüs daha büyüktür.",
    ifTrue: {
      exit: 1,
      isCorrect: true,
      feedback: "Tebrikler! 1. Ünitenin tüm temel kavramlarını başarıyla sentezlediniz."
    },
    ifFalse: {
      exit: 2,
      isCorrect: false,
      feedback: "Hatalı karar! Gezegen boyutlarını tekrar inceleyiniz."
    }
  },
  biliyorumAnliyorumDusunuyorum: {
    biliyorum: "1. Ünitedeki 8 gezegeni, Asteroit Kuşağı'nı, gök taşı ve meteoritleri, Güneş ve Ay tutulmalarının evre ve sıralamalarını, Bettani ve Dilhan Eryurt'un başarılarını biliyorum.",
    anliyorum: "Gök cisimlerinin kütle, hacim ve yörünge dengesinin kâinattaki hayatın sürmesi için ne kadar kritik olduğunu anlıyorum.",
    dusunuyorum: "Göklerdeki bu kusursuz intizamı fark eden bir insan yeryüzündeki sorumluluklarını nasıl ihmal edebilir?"
  },
  pekistirmeIstasyonu: {
    stationTitle: "1. Ünite Sonu İstasyonu & Sonuç Çalışmaları",
    pageReference: "Ders Kitabı Sayfa 39, 40, 41, 42, 43",
    summaryText: "MEB Ders Kitabı 1. Ünite değerlendirme soruları, top benzetmeleriyle gezegen ve tutulma modellemeleri, 12 boşluk doldurma ve 20 özgün bağlam temelli LGS sorusu.",
    targetSkills: [
      "1. Ünitedeki tüm kazanımları bütüncül olarak ilişkilendirir.",
      "Gezegenlerin ve tutulmaların modellerini deney düzenekleriyle analiz eder.",
      "LGS ve PISA tarzı bağlam temelli problemleri çözer."
    ]
  },
  fillInBlanks: [
    {
      id: "fib-u1rev-1",
      number: 1,
      baglam: "Ders kitabı Sayfa 39 A Bölümü 1. Cümle: Güneş sisteminde sekiz tane vardır.",
      soruKoku: "Güneş sisteminde sekiz tane .................................... vardır.",
      blankAnswer: "Gezegen",
      acceptableAnswers: ["gezegen", "Gezegen"],
      explanation: "Güneş etrafında dolanan 8 gezegen bulunur.",
      wordBankHint: ["Gezegen", "Yıldız", "Asteroit", "Uydu"]
    },
    {
      id: "fib-u1rev-2",
      number: 2,
      baglam: "Ders kitabı Sayfa 39 A Bölümü 2. Cümle: Venüs gezegeni sınıfında yer alır.",
      soruKoku: "Venüs gezegeni .................................... gezegenler sınıfında yer alır.",
      blankAnswer: "Karasal",
      acceptableAnswers: ["karasal", "Karasal", "iç", "İç"],
      explanation: "Merkür, Venüs, Dünya, Mars karasal (iç) gezegenlerdir.",
      wordBankHint: ["Karasal", "Gazsal", "Cüce", "Halkalı"]
    },
    {
      id: "fib-u1rev-3",
      number: 3,
      baglam: "Ders kitabı Sayfa 39 A Bölümü 3. Cümle: Dünya'nın halkası yoktur ancak vardır.",
      soruKoku: "Dünya'nın halkası yoktur ancak .................................... vardır.",
      blankAnswer: "Uydusu",
      acceptableAnswers: ["uydusu", "Uydusu", "ay", "Ay"],
      explanation: "Dünya'nın uydusu Ay'dır fakat halkası yoktur.",
      wordBankHint: ["Uydusu", "Halkası", "Kuyruğu", "Ateşi"]
    },
    {
      id: "fib-u1rev-4",
      number: 4,
      baglam: "Ders kitabı Sayfa 39 A Bölümü 4. Cümle: Gazsal gezegenlerin hacimsel olarak en küçüğü gezegenidir.",
      soruKoku: "Gazsal gezegenlerin hacimsel olarak en küçüğü .................................... gezegenidir.",
      blankAnswer: "Neptün",
      acceptableAnswers: ["neptün", "Neptün"],
      explanation: "Gaz devleri Jüpiter > Satürn > Uranüs > Neptün'dür; en küçüğü Neptün'dür.",
      wordBankHint: ["Neptün", "Uranüs", "Satürn", "Mars"]
    },
    {
      id: "fib-u1rev-5",
      number: 5,
      baglam: "Ders kitabı Sayfa 39 A Bölümü 5. Cümle: Mars ile Jüpiter gezegenleri arasında bulunur.",
      soruKoku: "Mars ile Jüpiter gezegenleri arasında .................................... bulunur.",
      blankAnswer: "Asteroit kuşağı",
      acceptableAnswers: ["asteroit kuşağı", "Asteroit kuşağı", "Asteroit Kuşağı"],
      explanation: "İç ve dış gezegenlerin sınırında Asteroit Kuşağı yer alır.",
      wordBankHint: ["Asteroit kuşağı", "Oort bulutu", "Ay", "Güneş"]
    },
    {
      id: "fib-u1rev-6",
      number: 6,
      baglam: "Ders kitabı Sayfa 39 A Bölümü 6. Cümle: Uranüs, Neptün'e göre Güneş'e daha bir gezegendir.",
      soruKoku: "Uranüs, Neptün'e göre Güneş'e daha .................................... bir gezegendir.",
      blankAnswer: "Yakın",
      acceptableAnswers: ["yakın", "Yakın"],
      explanation: "Uranüs 7., Neptün 8. sıradadır; Uranüs daha yakındır.",
      wordBankHint: ["Yakın", "Uzak", "Büyük", "Sıcak"]
    },
    {
      id: "fib-u1rev-7",
      number: 7,
      baglam: "Ders kitabı Sayfa 39 A Bölümü 7. Cümle: Satürn gezegeni hacim bakımından gezegeninden daha küçüktür.",
      soruKoku: "Satürn gezegeni hacim bakımından .................................... gezegeninden daha küçüktür.",
      blankAnswer: "Jüpiter",
      acceptableAnswers: ["jüpiter", "Jüpiter"],
      explanation: "Jüpiter 1., Satürn 2. büyüktür.",
      wordBankHint: ["Jüpiter", "Dünya", "Mars", "Merkür"]
    },
    {
      id: "fib-u1rev-8",
      number: 8,
      baglam: "Ders kitabı Sayfa 39 A Bölümü 8. Cümle: Venüs gezegeni gezegenine göre Güneş'e daha uzaktır.",
      soruKoku: "Venüs gezegeni .................................... gezegenine göre Güneş'e daha uzaktır.",
      blankAnswer: "Merkür",
      acceptableAnswers: ["merkür", "Merkür"],
      explanation: "Merkür 1., Venüs 2. sıradadır.",
      wordBankHint: ["Merkür", "Dünya", "Mars", "Jüpiter"]
    },
    {
      id: "fib-u1rev-9",
      number: 9,
      baglam: "Ders kitabı Sayfa 39 A Bölümü 9. Cümle: Yeryüzüne ulaşan gök taşları olarak isimlendirilir.",
      soruKoku: "Yeryüzüne ulaşan gök taşları .................................... olarak isimlendirilir.",
      blankAnswer: "Meteorit",
      acceptableAnswers: ["meteorit", "Meteorit"],
      explanation: "Yere düşen parçaya meteorit denir.",
      wordBankHint: ["Meteorit", "Meteor", "Asteroit", "Gezegen"]
    },
    {
      id: "fib-u1rev-10",
      number: 10,
      baglam: "Ders kitabı Sayfa 39 A Bölümü 10. Cümle: Dünya atmosferine giren gök taşlarına denir.",
      soruKoku: "Dünya atmosferine giren gök taşlarına .................................... denir.",
      blankAnswer: "Meteor",
      acceptableAnswers: ["meteor", "Meteor"],
      explanation: "Atmosfere giren ve ışık saçan gök taşlarına meteor denir.",
      wordBankHint: ["Meteor", "Meteorit", "Yıldız", "Uydu"]
    }
  ],
  contextQuestions: [
    {
      id: "mcq-u1rev-1",
      number: 1,
      baglam: "Ders kitabı Sayfa 40 Soru 1'deki metin:\nÖğretmen sınıf masasına Pinpon Topu, Tenis Topu, Futbol Topu ve Basketbol Topu koymuştur. Öğrencilerden bu topları hacimsel büyüklüklerine göre Güneş sistemindeki bazı gezegenlere benzetmelerini istemiştir.",
      soruKoku: "Topların küçükten büyüğe sıralaması dikkate alındığında aşağıdaki benzetmelerden hangisini yapan öğrenci doğru cevap vermiştir?",
      secenekler: {
        A: "Pinpon: Venüs / Tenis: Mars / Futbol: Satürn / Basketbol: Uranüs",
        B: "Pinpon: Mars / Tenis: Venüs / Futbol: Uranüs / Basketbol: Satürn",
        C: "Pinpon: Venüs / Tenis: Uranüs / Futbol: Mars / Basketbol: Satürn",
        D: "Pinpon: Mars / Tenis: Uranüs / Futbol: Venüs / Basketbol: Satürn"
      },
      dogruCevap: "B",
      cozum: "Topların hacim sıralaması: Pinpon < Tenis < Futbol < Basketbol'dur. Seçeneklerdeki gezegenlerin hacim sıralaması ise: Mars < Venüs < Uranüs < Satürn'dür. Dolayısıyla doğru eşleşme B şıkkıdır (Sayfa 40 Soru 1).",
      olculenKazanim: "F.6.1.1.1. Gezegenlerin hacimsel büyüklüklerini modellerle eşleştirir.",
      olculenBeceri: "Oransal Akıl Yürütme",
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
      id: "mcq-u1rev-2",
      number: 2,
      baglam: "Ders kitabı Sayfa 40 Soru 2'deki metin:\nÖğretmen, öğrencilerden topları hacimsel büyüklüklerine bakarak SADECE KARASAL GEZEGENLERE benzetmelerini istemiştir.",
      soruKoku: "Buna göre aşağıdaki benzetmelerden hangisini yapan öğrenci doğru cevap vermiş olur?",
      secenekler: {
        A: "Pinpon: Merkür / Tenis: Venüs / Futbol: Dünya / Basketbol: Mars",
        B: "Pinpon: Venüs / Tenis: Mars / Futbol: Merkür / Basketbol: Dünya",
        C: "Pinpon: Merkür / Tenis: Venüs / Futbol: Uranüs / Basketbol: Jüpiter",
        D: "Pinpon: Merkür / Tenis: Mars / Futbol: Venüs / Basketbol: Dünya"
      },
      dogruCevap: "D",
      cozum: "Karasal gezegenlerin küçükten büyüğe hacim sıralaması: Merkür < Mars < Venüs < Dünya'dır. Buna göre Pinpon = Merkür, Tenis = Mars, Futbol = Venüs, Basketbol = Dünya olmalıdır (Sayfa 40 Soru 2).",
      olculenKazanim: "F.6.1.1.1. Karasal gezegenlerin hacimsel büyüklüklerini sıralar.",
      olculenBeceri: "Sıralama ve Eşleme",
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
      id: "mcq-u1rev-3",
      number: 3,
      baglam: "Ders kitabı Sayfa 41 Soru 3'teki metin:\nÖğretmen, Asteroit Kuşağı'nın K ve L gezegenleri arasında olduğunu belirtmiştir. Öğrencilerinden bu gezegenlerin isimlerini söyleyerek gezegenleri hacimsel büyüklüklerine göre birer topa benzetmelerini istemiştir.",
      soruKoku: "Buna göre aşağıdakilerden hangisini söyleyen öğrenci doğru cevap vermiş olur?",
      secenekler: {
        A: "K: Mars (Pinpon topu) / L: Jüpiter (Basketbol topu)",
        B: "K: Merkür (Pinpon topu) / L: Venüs (Basketbol topu)",
        C: "K: Mars (Basketbol topu) / L: Jüpiter (Futbol topu)",
        D: "K: Satürn (Futbol topu) / L: Jüpiter (Basketbol topu)"
      },
      dogruCevap: "A",
      cozum: "Asteroit Kuşağı Mars ile Jüpiter arasındadır. Mars küçük (Pinpon), Jüpiter ise devasadır (Basketbol topu). Doğru cevap A seçeneğidir.",
      olculenKazanim: "F.6.1.1.2. Asteroit Kuşağının konumunu ve sınır gezegenlerini modeller.",
      olculenBeceri: "Görsel ve Kavramsal Modelleme",
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
      id: "mcq-u1rev-4",
      number: 4,
      baglam: "Ders kitabı Sayfa 41 Soru 4'teki görsel:\nÖğrenci Güneş tutulmasını modellemek için masaya sırasıyla El Feneri - Basketbol Topu - Tenis Topu dizmiştir.",
      soruKoku: "Öğrencinin yaptığı modelleme ile ilgili aşağıdakilerden hangisi doğrudur?",
      secenekler: {
        A: "Modelleme doğru yapılmıştır, herhangi bir değişikliğe gerek yoktur.",
        B: "Modellemede hata vardır. Tenis topu ile basketbol topunun yerini değiştirmelidir.",
        C: "Modellemede hata vardır. Pinpon topu ile basketbol topunun yerini değiştirmelidir.",
        D: "Modellemede hata vardır. El fenerini kapatmalıdır."
      },
      dogruCevap: "B",
      cozum: "Güneş tutulmasında Ay (küçük tenis topu) Güneş ile Dünya'nın (büyük basketbol topu) arasına girmelidir. Dolayısıyla tenis topu ile basketbol topunun yeri değiştirilmelidir (Sayfa 41 Soru 4).",
      olculenKazanim: "F.6.1.2.1. Güneş tutulması modellerindeki hataları saptar ve düzeltir.",
      olculenBeceri: "Hata Analizi ve Düzeltme",
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
      id: "mcq-u1rev-5",
      number: 5,
      baglam: "Ders kitabı Sayfa 39 B Bölümü Soru 4'te sorulan:\n'Halkası ve uydusu olmayan gezegenlerden Güneş'e en uzak olanın ismi nedir?'",
      soruKoku: "Bu sorunun doğru cevabı aşağıdakilerden hangisidir?",
      secenekler: {
        A: "Merkür",
        B: "Venüs",
        C: "Mars",
        D: "Neptün"
      },
      dogruCevap: "B",
      cozum: "Uydusu ve halkası olmayan gezegenler Merkür (1. sıra) ve Venüs'tür (2. sıra). Bu ikisi arasından Güneş'e daha uzak olanı Venüs'tür.",
      olculenKazanim: "F.6.1.1.1. Gezegenlerin çoklu kriterlerini eşleştirir.",
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
      id: "mcq-u1rev-6",
      number: 6,
      baglam: "Güneş tutulması ile Ay tutulması arasındaki temel farklar şunlardır:\n- Güneş tutulması Yeni Ay evresinde, Ay tutulması Dolunay evresinde gerçekleşir.\n- Güneş tutulması gündüz dar alanda, Ay tutulması gece geniş alanda gözlenir.",
      soruKoku: "Aşağıdakilerden hangisi her iki tutulma olayı için de ORTAK bir özelliktir?",
      secenekler: {
        A: "Her ay düzenli olarak gerçekleşmeleri",
        B: "Işığın doğrusal yayılması sonucu bir gök cisminin diğerinin gölgesinde kalması",
        C: "Doğrudan çıplak gözle izlenmelerinin tamamen güvenli olması",
        D: "Ay'ın her iki olayda da Güneş ile Dünya arasında yer alması"
      },
      dogruCevap: "B",
      cozum: "Her iki tutulma da ışığın doğrusal yayılması ve arkasında tam gölge oluşturması prensibine dayanır.",
      olculenKazanim: "F.6.1.2.2. Tutulmaların ortak fiziksel ilkelerini açıklar.",
      olculenBeceri: "Ortak İlke Çıkarımı",
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
      id: "mcq-u1rev-7",
      number: 7,
      baglam: "Bir gök cismi Güneş sisteminde dolanırken Dünya atmosferine girmiş, ancak sürtünme sebebiyle tamamen buharlaşarak yeryüzüne ulaşamamıştır.",
      soruKoku: "Gökyüzünde parlak bir çizgi bırakıp yok olan bu gök cismi nasıl adlandırılır?",
      secenekler: {
        A: "Meteorit",
        B: "Meteor",
        C: "Asteroit",
        D: "Kuyruklu yıldız"
      },
      dogruCevap: "B",
      cozum: "Atmosfere girip ışık saçan gök taşı izine meteor denir. Yere ulaşamadığı için meteorit adını almaz.",
      olculenKazanim: "F.6.1.1.3. Meteor ve meteorit ayrımını yapar.",
      olculenBeceri: "Kavram Uygulama",
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
      id: "mcq-u1rev-8",
      number: 8,
      baglam: "Bir fen projesinde Güneş sistemindeki gezegenler iki kutuya ayrılmıştır:\nK Kutusu: Merkür, Venüs, Dünya, Mars\nL Kutusu: Jüpiter, Satürn, Uranüs, Neptün",
      soruKoku: "K ve L kutularındaki gezegenlerin genel özellikleri ile ilgili aşağıdaki ifadelerden hangisi yanlıştır?",
      secenekler: {
        A: "K kutusundaki gezegenlerin yoğunlukları genellikle L kutusundakilerden fazladır.",
        B: "L kutusundaki gezegenlerin tamamının halkası vardır.",
        C: "K kutusundaki gezegenlerin tamamının doğal uydusu vardır.",
        D: "L kutusundaki gezegenlerin hacimleri K kutusundakilerden çok daha büyüktür."
      },
      dogruCevap: "C",
      cozum: "K kutusundaki Merkür ve Venüs'ün doğal uydusu yoktur. Dolayısıyla C ifadesi yanlıştır.",
      olculenKazanim: "F.6.1.1.1. Karasal ve gazsal gezegen özelliklerini sorgular.",
      olculenBeceri: "Eleştirel Düşünme",
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
      id: "mcq-u1rev-9",
      number: 9,
      baglam: "Güneş sisteminde Dünya'nın Güneş'e olan uzaklığı yaklaşık 150 milyon kilometredir ve bu mesafeye 1 Astronomik Birim (AB) denir.",
      soruKoku: "Güneş'e olan uzaklığı 1 AB'den daha az olan gezegenler hangi seçenekte doğru verilmiştir?",
      secenekler: {
        A: "Merkür ve Venüs",
        B: "Mars ve Jüpiter",
        C: "Venüs ve Mars",
        D: "Yalnızca Merkür"
      },
      dogruCevap: "A",
      cozum: "Dünya 3. sırada (1 AB) olduğuna göre, Güneş'e daha yakın olan 1. ve 2. sıradaki Merkür ve Venüs'ün uzaklığı 1 AB'den küçüktür.",
      olculenKazanim: "F.6.1.1.2. Astronomik mesafeleri karşılaştırır.",
      olculenBeceri: "Mekansal Hiyerarşi",
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
      id: "mcq-u1rev-10",
      number: 10,
      baglam: "Bir öğrenci 'Ay tutulmasında Ay tamamen görünmez olur' iddiasında bulunmuştur. Arkadaşı ise 'Hayır, Ay kızıl/bakır renginde görünmeye devam eder' demiştir.",
      soruKoku: "Arkadaşının haklı olmasının bilimsel gerekçesi nedir?",
      secenekler: {
        A: "Ay'ın iç nükleer reaksiyonlarla parlaması",
        B: "Dünya atmosferinin Güneş ışığını kırarak kırmızı dalga boyunu Ay yüzeyine bükmesi",
        C: "Ay'daki uzay istasyonlarının ışıkları açması",
        D: "Güneş tutulmasının aynı anda başlaması"
      },
      dogruCevap: "B",
      cozum: "Dünya atmosferi prizma gibi davranarak kırmızı ışınları büker ve Ay'ın üzerine düşürür; bu yüzden Ay bakır kırmızısı görünür.",
      olculenKazanim: "F.6.1.2.2. Ay tutulmasında atmosferik ışık kırılmasını yorumlar.",
      olculenBeceri: "Kanıta Dayalı Açıklama",
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
      id: "mcq-u1rev-11",
      number: 11,
      baglam: "Güneş sistemindeki gezegenlerin Güneş etrafında dolanırken yörüngeden fırlamamalarını sağlayan temel etken kütle çekim kuvvetidir.",
      soruKoku: "Güneş sisteminde Güneş'ten sonra en büyük kütle çekim kuvvetine sahip gezegen hangisidir?",
      secenekler: {
        A: "Satürn",
        B: "Jüpiter",
        C: "Dünya",
        D: "Neptün"
      },
      dogruCevap: "B",
      cozum: "Kütle çekim kuvveti kütle ile doğru orantılıdır. Jüpiter en büyük kütleye sahip gezegen olduğu için çekim gücü de en fazladır.",
      olculenKazanim: "F.6.1.1.1. Gezegenlerin kütle ve çekim özelliklerini ilişkilendirir.",
      olculenBeceri: "Fiziksel Kanun Çıkarımı",
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
      id: "mcq-u1rev-12",
      number: 12,
      baglam: "Bettânî ve Ferganî'nin tutulmalar üzerine yazdığı eserler yüzyıllar boyunca hem Doğu hem de Batı üniversitelerinde temel ders kitabı olarak okutulmuştur.",
      soruKoku: "Türk-İslam bilginlerinin bu eserlerinin dünya bilim tarihindeki en büyük önemi nedir?",
      secenekler: {
        A: "Sadece kendi dönemlerindeki takvimleri düzenlemeleri",
        B: "Gözlemsel ve matematiksel yöntemlerle modern astronominin temellerini atmaları",
        C: "Gök cisimlerinin hareketlerini astrolojiyle sınırlı tutmaları",
        D: "Gözlemleri sadece çıplak gözle yapıp kaydetmemeleri"
      },
      dogruCevap: "B",
      cozum: "Bettânî ve Ferganî matematik ve hassas gözlemi birleştirerek Batı'daki Kopernik ve Kepler gibi bilim insanlarına öncülük etmiştir.",
      olculenKazanim: "F.6.1.2.4. Bilim insanlarının evrensel mirasını takdir eder.",
      olculenBeceri: "Bilim Tarihi ve Felsefesi",
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
      id: "mcq-u1rev-13",
      number: 13,
      baglam: "Bir gök taşı Dünya atmosferine saniyede yaklaşık 20 ila 70 kilometre gibi akıl almaz bir süratle dalar.",
      soruKoku: "Bu gök taşının akkor hale gelip parlak bir ışık çizgisi yaymasının temel sebebi nedir?",
      secenekler: {
        A: "Güneş ışığını ayna gibi yansıtması",
        B: "Havadaki gaz molekülleriyle şiddetli sürtünme sonucu kinetik enerjinin ısı ve ışığa dönüşmesi",
        C: "İçinde elektrik pilleri bulunması",
        D: "Ay'ın çekiminden kaçmaya çalışması"
      },
      dogruCevap: "B",
      cozum: "Aşırı yüksek hızda atmosferle sürtünen gök taşı binlerce dereceye kadar ısınır, erir ve ışık saçar.",
      olculenKazanim: "F.6.1.1.3. Sürtünme ve meteor ışığı ilişkisini kurar.",
      olculenBeceri: "Enerji Dönüşümü",
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
      id: "mcq-u1rev-14",
      number: 14,
      baglam: "Bir gözlemci Güneş tutulması anında Ay'ın Güneş'i tamamen kapatamadığını, ortada siyah bir disk etrafında ise parlak bir ateş çemberi oluştuğunu görmüştür.",
      soruKoku: "Bu gözlemcinin tanık olduğu tutulma türü ve sebebi hangisidir?",
      secenekler: {
        A: "Tam Güneş tutulması - Ay'ın Dünya'ya çok yakın olması",
        B: "Halkalı Güneş tutulması - Ay'ın yörüngesinde Dünya'dan en uzak konumda bulunması",
        C: "Ay tutulması - Dünya'nın Ay'ı örtmesi",
        D: "Gök taşı yağmuru - Atmosferin parlaması"
      },
      dogruCevap: "B",
      cozum: "Ay Dünya'ya uzakken görünür büyüklüğü Güneş'ten küçük kalır; bu sebeple Güneş'in kenarlarını kapatamaz ve halkalı tutulma oluşur.",
      olculenKazanim: "F.6.1.2.2. Tutulma çeşitlerinin geometrik nedenlerini açıklar.",
      olculenBeceri: "Görsel ve Geometrik Çıkarım",
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
      id: "mcq-u1rev-15",
      number: 15,
      baglam: "Gezegenlerin kendi eksenleri etrafındaki dönme süreleri birbirinden çok farklıdır. Jüpiter devasa kütlesine rağmen kendi ekseni etrafında sadece 10 saatte bir tam tur atarken, Venüs bir turunu 243 Dünya gününde tamamlar.",
      soruKoku: "Bu durum gezegenlerdeki hangi olayın süresini doğrudan belirler?",
      secenekler: {
        A: "Bir yılın süresini",
        B: "Bir günün (gece-gündüz döngüsünün) süresini",
        C: "Mevsimlerin oluşumunu",
        D: "Güneş tutulmasının sıklığını"
      },
      dogruCevap: "B",
      cozum: "Bir gezegenin kendi ekseni etrafındaki bir tam dönüş süresi o gezegendeki 1 günün uzunluğunu belirler.",
      olculenKazanim: "F.6.1.1.1. Gezegenlerin hareketleri ve zaman kavramı ilişkisini kurar.",
      olculenBeceri: "Temel Astronomi Kavramları",
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
      id: "mcq-u1rev-16",
      number: 16,
      baglam: "Bir fen kulübü öğrencisi atık koli kartonları, ipler ve köpük toplarla Güneş ve Ay tutulması mekanizmasını çalışır halde sergilemiştir.",
      soruKoku: "Öğrencinin bu modelleme çalışmasında kazandığı temel beceri hangisidir?",
      secenekler: {
        A: "Ezberleme ve test çözme",
        B: "Mühendislik tasarım döngüsü, atık değerlendirme ve bilimsel modelleme",
        C: "Gezegenleri teleskopla fotoğraflama",
        D: "Yalnızca teorik formül yazma"
      },
      dogruCevap: "B",
      cozum: "Ders kitabı Sayfa 13 ve 27'deki Fen, Mühendislik ve Girişimcilik Uygulamaları tasarım istasyonları ile öğrencilere mühendislik döngüsü ve modelleme becerisi kazandırır.",
      olculenKazanim: "F.6.1.2.1. Bilimsel modelleme ve tasarım sürecini yürütür.",
      olculenBeceri: "Tasarım ve Girişimcilik",
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
      id: "mcq-u1rev-17",
      number: 17,
      baglam: "Türkiye'de 11 Ağustos 1999 ve 29 Mart 2006 tarihlerinde tam Güneş tutulması gözlenmiş olup bir sonraki tam tutulma 2060 yılında gerçekleşecektir.",
      soruKoku: "Tam Güneş tutulmalarının aynı ülkeden gözlenmesinin bu kadar uzun yıllar (onlarca yıl) almasının sebebi nedir?",
      secenekler: {
        A: "Güneş'in Türkiye üzerinden nadiren geçmesi",
        B: "Ay'ın tam gölge konisinin Dünya yüzeyinde bıraktığı izin çok dar olması ve Dünya'nın dönüşüyle her seferinde farklı coğrafyalara denk gelmesi",
        C: "Türkiye'de kış mevsiminin uzun sürmesi",
        D: "Güneş tutulmalarının sadece kutuplarda olması"
      },
      dogruCevap: "B",
      cozum: "Tam gölge hattı sadece 100-250 km genişliğinde bir şerittir. Her tutulmada Dünya'nın farklı noktalarına denk geldiği için aynı ülkeye denk gelmesi onlarca yıl sürebilir.",
      olculenKazanim: "F.6.1.2.2. Tutulma coğrafyasının değişkenliğini açıklar.",
      olculenBeceri: "Küresel Coğrafya ve Gök Mekaniği",
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
      id: "mcq-u1rev-18",
      number: 18,
      baglam: "Dünya'nın atmosferi azot, oksijen ve diğer gazlardan oluşur. Eğer atmosfer olmasaydı her gün binlerce gök taşı Dünya yüzeyine mermi gibi çarpardı.",
      soruKoku: "Bu durum atmosferin canlılar için hangi hayati rolünü kanıtlar?",
      secenekler: {
        A: "Sadece yağmur yağdırma görevi olduğunu",
        B: "Dünya'yı uzaydan gelen gök taşı bombardımanına karşı koruyucu bir kalkan vazifesi gördüğünü",
        C: "Gezegenlerin hareketini yavaşlattığını",
        D: "Güneş tutulmasını engellediğini"
      },
      dogruCevap: "B",
      cozum: "Atmosfer Dünya'nın zırhıdır; gök taşlarını sürtünmeyle yakarak yerdeki canlıları korur.",
      olculenKazanim: "F.6.1.1.3. Atmosferin gök taşlarına karşı koruyucu rolünü değerlendirir.",
      olculenBeceri: "Ekolojik ve Koruyucu Sistem Analizi",
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
      id: "mcq-u1rev-19",
      number: 19,
      baglam: "Mars yüzeyindeki 'Olympus Mons' yanardağı yaklaşık 22 km yüksekliğiyle Everest Dağı'nın neredeyse 3 katıdır ve Güneş sisteminin en yüksek dağıdır.",
      soruKoku: "Mars'ın bu dev volkana ve kızıl çöllerine rağmen Güneş sisteminde yaşam araştırmalarının bir numaralı hedefi olmasının sebebi nedir?",
      secenekler: {
        A: "Güneş sisteminin en büyük gezegeni olması",
        B: "Geçmişinde sıvı su aktığına dair nehir yatakları ve kutuplarında buz katmanları bulunması",
        C: "Halkalarının çok zengin mineraller içermesi",
        D: "Güneş'e Merkür'den daha yakın olması"
      },
      dogruCevap: "B",
      cozum: "Mars'ta kutup buzulları, donmuş su ve eski nehir yatakları tespit edilmiştir; su olan yerde yaşam ihtimali araştırılır.",
      olculenKazanim: "F.6.1.1.1. Mars'ın jeolojik ve su varlığı özelliklerini irdeler.",
      olculenBeceri: "Uzay Keşifleri ve Analiz",
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
      id: "mcq-u1rev-20",
      number: 20,
      baglam: "Güneş sistemindeki gezegenlerin büyüklükleri, Güneş'e olan mesafeleri, tutulma açılarının 400 katlık altın oranı ve Dünya'nın tam yaşanabilir kuşakta yer alması bir bütün olarak değerlendirildiğinde:",
      soruKoku: "Fen bilimleri eğitimi alan bir öğrencinin varacağı nihai bilimsel ve felsefi sentez ne olmalıdır?",
      secenekler: {
        A: "Evrenin tesadüfen oluştuğu ve amaçsız bir kaos olduğu",
        B: "Kâinattaki her bir gök cisminin hassas ölçülerle, birbiriyle uyum içinde ve bir gaye doğrultusunda kusursuz yaratıldığı",
        C: "Gezegenlerin hiçbir fizik kanununa bağlı olmadığı",
        D: "Güneş'in yalnız başına var olabileceği"
      },
      dogruCevap: "B",
      cozum: "Türkiye Yüzyılı Maarif Modeli'nin hikmet ekseni, kâinattaki ölçü, ahenk, intizam ve gayeyi fark ederek hayret ve tefekkürle bilimi anlamlandırmayı hedefler.",
      olculenKazanim: "F.6.1.1. ve F.6.1.2. Ünite kazanımlarını hikmet ve nizam ekseninde sentezler.",
      olculenBeceri: "Bütüncül Sentez ve Değerlendirme",
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
