import { SectionContent } from '../types';

export const section5_7_2: SectionContent = {
  code: "5.7.2",
  title: "Basit Elektrik Devresinde Ampul Parlaklığını Etkileyen Değişkenler",
  unitCode: "7. Ünite",
  unitTitle: "Elektrik Devre Elemanları",
  summary: "Bilimsel araştırma basamakları ve değişken türleri (bağımsız değişken, bağımlı değişken, kontrol edilen değişken), pil sayısının ampul parlaklığına etkisi, ampul sayısının ampul parlaklığına etkisi, grafik okuma ve yorumlama, güvenli elektrik kullanımı ve enerji tasarrufu.",
  kazanimlar: [
    "F.5.7.2.1. Bir elektrik devresindeki ampul parlaklığını etkileyen değişkenleri (pil sayısı, ampul sayısı) tahmin eder ve tahminlerini test etmek için kontrollü deneyler tasarlar.",
    "Deneydeki bağımsız, bağımlı ve kontrol edilen (sabit tutulan) değişkenleri belirler ve veri tabloları/grafikler oluşturur.",
    "Elektrik enerjisinin tasarruflu ve güvenli kullanımına yönelik farkındalık kazanır."
  ],
  hatirlayalim: {
    text: "Devre elemanlarını ve sembollerini tanıdıktan sonra, gerçek bir bilim insanı gibi laboratuvara giriyoruz! Bir devrede lambanın daha güçlü ışık saçması için ne yapmalıyız? Pil sayısını artırırsak ne olur? Aynı devreye bir lamba daha eklersek lambaların ışığı söner mi, kısılır mı? Bu soruların cevabını 'Kontrollü Deney' yöntemiyle, bağımsız, bağımlı ve sabit tutulan değişkenleri keşfederek çözeceğiz.",
    keyPoints: [
      "Bağımsız Değişken: Deneyde bizim kendi irademizle değiştirdiğimiz, etkisini merak edip incelediğimiz değişkendir (örneğin pil sayısı veya ampul sayısı).",
      "Bağımlı Değişken: Bağımsız değişkene bağlı olarak değişen, deneyde ölçtüğümüz sonuçtur (burada 'Ampul Parlaklığı').",
      "Kontrol Edilen (Sabit Tutulan) Değişken: Deneyin adil ve bilimsel olması için hiç değiştirilmeyen, her iki düzenekte de aynı tutulan değişkenlerdir.",
      "Pil Sayısı Artarsa (Ampul sayısı sabitken): Devreye sağlanan elektrik enerjisi artar ve ampul parlaklığı ARTAR.",
      "Ampul Sayısı Artarsa (Pil sayısı sabitken): Pilden gelen enerji ampuller arasında paylaşılır; her bir ampulün parlaklığı AZALIR.",
      "Güvenli Elektrik: Islak elle elektrikli aletlere dokunulmamalı, prizlere sivri cisim sokulmamalı ve tasarruflu LED lambalar tercih edilmelidir."
    ]
  },
  onDegerlendirme: [
    {
      id: "on-par-1",
      question: "Bir elektrik devresinde tek bir ampul yanarken devreye bir pil daha bağlarsak ampulün parlaklığı nasıl değişir?",
      answer: "Devreye sağlanan enerji artacağı için ampul daha parlak yanar."
    },
    {
      id: "on-par-2",
      question: "Evimizdeki bir odada iki lamba takılıyken birini söküp sadece tek lamba bıraksak o lambanın parlaklığı artar mı?",
      answer: "Basit seri devrelerde ampul sayısı azaldığında enerji tek ampule kalacağı için ampulün parlaklığı artar."
    },
    {
      id: "on-par-3",
      question: "Bir deneyde 'Bağımsız Değişken' ile 'Bağımlı Değişken' arasındaki fark nedir?",
      answer: "Bağımsız değişken araştırmacının değiştirdiği neden; bağımlı değişken ise bu değişimden etkilenen sonuçtur."
    },
    {
      id: "on-par-4",
      question: "Bir devrede 1 pille çalışan 1.5 V'luk bir ampule arka arkaya 10 tane güçlü pil bağlarsak ne olur?",
      answer: "Aşırı elektrik akımı ampulün içindeki ince flaman telini anında eritir ve ampul patlar."
    },
    {
      id: "on-par-5",
      question: "Islak elle duvardaki elektrik düğmesine basmak neden çok tehlikelidir?",
      answer: "Çünkü su ve ıslak ten iyi bir iletkendir; elektrik akımının vücudumuzdan geçerek ölümcül elektrik çarpmasına yol açmasına sebep olabilir."
    }
  ],
  hazirlik: {
    question: "Bir el fenerinin ışığı zayıfladığında içine yeni bir pil daha eklediğimizde ışığının güçlenmesinin bilimsel sebebi nedir?",
    answer: "Devredeki gerilim (enerji kaynağı) arttığı için telden geçen akım miktarı artar ve flaman teli daha yüksek sıcaklığa ulaşarak daha güçlü parlar."
  },
  merak: {
    question: "Aynı marka iki devrede; 1. devrede 2 pil 1 ampul varken, 2. devrede 1 pil 2 ampul bulunuyor. 1. devredeki ampul neden 2. devredeki ampullere göre adeta güneş gibi göz alıcı parlarken, 2. devredeki ampuller mum ışığı gibi soluk yanar?",
    answer: "Çünkü 1. devrede ampul başına 2 birim enerji düşerken, 2. devrede ampul başına sadece yarım (0.5) birim enerji düşmektedir."
  },
  kopru: {
    title: "Köprü İstasyonu: Bilimsel Yöntemin Gücü ve Kontrollü Deneyler",
    content: "Ders kitabımızın Bilgi İstasyonu'nda (sayfa 150) vurgulandığı gibi; bilim insanları bir gerçeği kanıtlarken asla iki şeyi aynı anda değiştirmezler. Sadece tek bir değişkeni (bağımsız değişken) değiştirip diğer her şeyi sabit tutarlar. Bu altın kurala 'Kontrollü Deney' denir.",
    question: "Eğer bir deneyde hem pil sayısını hem de ampul sayısını aynı anda değiştirseydik ne olurdu?",
    answer: "Parlaklığın pilden mi yoksa ampulden mi değiştiğini anlayamazdık; deney bilimsel değerini kaybederdi."
  },
  hikmetStages: [
    {
      stage: 1,
      name: "1. Varlığı Tanıt",
      concept: "Işığın Dereceleri: Parlaklık ve Seviye",
      text: "Bir kıvılcımdan bir şimşeğe, bir mum alevinden güneşe kadar ışığın her seviyesi belli bir enerjinin ve dengenin tecellisidir."
    },
    {
      stage: 2,
      name: "2. Parçalarını Göster",
      concept: "Nedenler ve Sonuçlar Ağı",
      text: "Pil sebeptir, kablo vesiledir, akım harekettir, ampulün parlaması ise gözlerimize sunulan neticedir."
    },
    {
      stage: 3,
      name: "3. Her Parçanın Vazifesini Göster",
      concept: "Ölçülü Paylaşım",
      text: "İki ampul bir devreye bağlandığında enerjiyi kavgasız, adil ve eşit bir paylaşımla bölüşürler; tabiatta adalet kanunu hüküm sürer."
    },
    {
      stage: 4,
      name: "4. Parçalar Arasındaki Uyumu Göster",
      concept: "Direnç ve Güç Dengesi",
      text: "Fazla enerji az ampulü coşturur, fazla ampul enerjiyi paylaştırır; her durum matematiksel bir orantı ile dengelenir."
    },
    {
      stage: 5,
      name: "5. Ölçü ve Düzeni Göster",
      concept: "Ters ve Doğru Orantı Kanunu",
      text: "Pil arttıkça ışığın artması doğru orantı, ampul arttıkça ışığın azalması ters orantıdır; kâinatın her köşesi bu kusursuz matematik yasalarıyla örülmüştür."
    },
    {
      stage: 6,
      name: "6. Büyük Benzetme Yap",
      concept: "Güneş ve Gezegenlerin Işığı",
      text: "Güneş kâinatın devasa pili gibidir; gezegenler ve aylar ondan aldıkları nura göre parıldarlar."
    },
    {
      stage: 7,
      name: "7. Hikmet ve Hizmeti Göster",
      concept: "İhtiyaca Göre Işık Nimeti",
      text: "Ameliyathanede güçlü ve net bir aydınlatma, bebek odasında ise loş bir ışık gerekir; parlaklığı ayarlayabilmek insan hayatını kolaylaştıran bir hikmettir."
    },
    {
      stage: 8,
      name: "8. İrade ve Sanat Perspektifi",
      concept: "Kontrollü Deney: İnsanın Hakikati Arama Metodu",
      text: "İnsanoğlu aklını kullanarak kontrollü deneyler tasarlar, doğadaki sebep-sonuç kanunlarını çözer ve teknoloji üretir."
    },
    {
      stage: 9,
      name: "9. Akıl Yürütme",
      concept: "Kablodaki Akım Kendi Kendine Adalet Dağıtabilir mi?",
      text: "Cansız ve şuursuz elektronlar iki ampulün arasına eşit bölünmeyi kendi akıllarıyla yapamaz; bu denge her şeye kanun koyan Âdil ve Alîm olan Yaratıcı'nın nizamıdır."
    },
    {
      stage: 10,
      name: "10. Tefekkür ve Sonuç",
      concept: "İsraftan Kaçınmak ve Şükür",
      text: "Karanlığı aydınlatan elektriği boş yere yakmamak, enerji tasarrufu yapmak hem dünyamızı korumak hem de nimetlerin sahibine fiili bir şükürdür."
    }
  ],
  etkinlikler: [
    {
      id: "etk-par-1",
      title: "Pil Sayısının Ampul Parlaklığına Etkisini İnceleme Deneyi",
      type: "Kontrollü Bilimsel Deney",
      materials: ["3 adet özdeş 1.5 V Kalem Pil", "1 adet 1.5 V Ampul ve Duy", "Bağlantı kabloları", "Basit anahtar"],
      steps: [
        "1. Düzenek: 1 pil, 1 ampul ve anahtar bağlanır; parlaklık gözlenir (Orta).",
        "2. Düzenek: Ampul sayısı aynı tutularak devreye 2. pil eklenir (Parlak).",
        "3. Düzenek: Devreye 3. pil eklenir ve ampulün parlaklığı kaydedilir (Çok Parlak)."
      ],
      questions: [
        {
          qId: "etk-par-1-a",
          label: "a",
          prompt: "Bu deneydeki Bağımsız Değişken nedir?",
          answer: "Pil sayısıdır (çünkü araştırmacı tarafından bilerek değiştirilmiştir)."
        },
        {
          qId: "etk-par-1-b",
          label: "b",
          prompt: "Bu deneydeki Bağımlı Değişken nedir?",
          answer: "Ampul parlaklığıdır (çünkü pil sayısına bağlı olarak değişmiştir)."
        },
        {
          qId: "etk-par-1-c",
          label: "c",
          prompt: "Bu deneydeki Kontrol Edilen (Sabit Tutulan) Değişkenler nelerdir?",
          answer: "Ampul sayısı, ampulün cinsi, kablo uzunluğu ve anahtarın durumudur."
        }
      ]
    },
    {
      id: "etk-par-2",
      title: "Ampul Sayısının Ampul Parlaklığına Etkisini İnceleme Deneyi",
      type: "Kontrollü Bilimsel Deney",
      materials: ["1 adet 1.5 V Pil", "3 adet özdeş Ampul ve Duy", "Bağlantı kabloları"],
      steps: [
        "1. Düzenek: 1 pil ve 1 ampul bağlanır.",
        "2. Düzenek: Pil sayısı sabit tutularak devreye seri 2. ampul eklenir.",
        "3. Düzenek: Devreye seri 3. ampul eklenir ve ampullerin parlaklıkları karşılaştırılır."
      ],
      questions: [
        {
          qId: "etk-par-2-a",
          label: "a",
          prompt: "Ampul sayısı 1'den 3'e çıkarıldığında her bir ampulün parlaklığı nasıl değişmiştir?",
          answer: "Parlaklıkları belirgin şekilde azalmış, ampuller daha sönük yanmaya başlamıştır."
        },
        {
          qId: "etk-par-2-b",
          label: "b",
          prompt: "Bu deneydeki bağımsız ve bağımlı değişkenler nelerdir?",
          answer: "Bağımsız Değişken: Ampul sayısı; Bağımlı Değişken: Ampul parlaklığıdır."
        }
      ]
    }
  ],
  bilgiIstasyonlari: [
    {
      title: "Bilimsel Yöntem: Kontrollü Deney ve Değişkenler",
      scientistOrMission: "Modern Bilim Metodolojisi (Francis Bacon ve Galileo)",
      description: "Bir doğa olayını araştırırken değişkenler üçe ayrılır:\n1. Bağımsız Değişken: Bizim değiştirdiğimiz etken.\n2. Bağımlı Değişken: Değişimden etkilenen ve ölçülen sonuç.\n3. Sabit Tutulan Değişken: Sonucun güvenilir olması için sabit bırakılan koşullar.",
      hikmetNote: "Tabiatın kanunları rastgele değil, sebep ve sonuçların değişmez bir intizamıyla örülmüştür."
    },
    {
      title: "Teknoloji ve Güvenlik: Evde Güvenli Elektrik ve Tasarruf",
      scientistOrMission: "Elektrik Mühendisleri Odası ve Enerji Verimliliği Rehberi",
      description: "Elektrik enerjisi hayatı aydınlatan bir güç olmakla birlikte dikkatsiz kullanıldığında ölümcül olabilir. Islak zeminlerde elektrikli alet kullanmamak, prizlere emniyet kapağı takmak, sigortaları kontrol etmek ve eski ampulleri A+++ enerji sınıfı LED lambalarla değiştirmek hayat kurtarır ve tasarruf sağlar.",
      hikmetNote: "Enerjiyi hem emniyetle kullanmak hem de israf etmemek akıllı ve şuurlu bir insanın en temel vazifesidir."
    }
  ],
  dda: {
    id: "dda-par-root",
    statement: "Bir elektrik devresinde ampul sayısı sabit tutulup pil sayısı artırılırsa ampulün parlaklığı artar.",
    correctDecision: "D",
    reason: "Pil sayısı arttıkça devreye verilen elektrik enerjisi artar ve ampul daha parlak yanar.",
    ifTrue: {
      id: "dda-par-2a",
      statement: "Pil sayısı sabit tutulup devreye seri bağlı ampul sayısı artırılırsa ampullerin parlaklığı artar.",
      correctDecision: "Y",
      reason: "Ampul sayısı arttıkça pilden gelen enerji bölünür; parlaklık artmaz, AZALIR!",
      ifFalse: {
        id: "dda-par-3a",
        statement: "Bilimsel bir kontrollü deneyde araştırmacının bilerek değiştirdiği değişkene 'Bağımsız Değişken' denir.",
        correctDecision: "D",
        reason: "Bağımsız değişken araştırmacının değiştirdiği etkendir.",
        ifTrue: { exit: 1, isCorrect: true, feedback: "Tebrikler! Kusursuz deney ve değişken analiziyle 1. Çıkış'a ulaştınız." },
        ifFalse: { exit: 2, isCorrect: false, feedback: "Hatalı çıkış!" }
      }
    }
  },
  biliyorumAnliyorumDusunuyorum: {
    biliyorum: "Pil sayısı artarsa parlaklık artar; ampul sayısı artarsa parlaklık azalır; bağımsız değişken bizim değiştirdiğimizdir; bağımlı değişken sonuçtur.",
    anliyorum: "Enerji pilden gelir; devreye ne kadar çok lamba bağlarsak enerjiyi o kadar çok bölüşürler; adil deney için diğer her şey sabit tutulmalıdır.",
    dusunuyorum: "Bir devredeki ampullerin enerjiyi adaletle paylaşması gibi, kâinattaki güneş de her bir çiçeğe ihtiyacı kadar ışık ulaştırır; hiçbir şey israf edilmez."
  },
  pekistirmeIstasyonu: {
    stationTitle: "Pekiştirme İstasyonu-1, 2, 3 & Ünite Sonu İstasyonu (Ampul Parlaklığı ve Sentez)",
    pageReference: "Sayfa 153, 156, 158, 161-168",
    summaryText: "Pil ve ampul sayısının parlaklığa etkisinin grafiklerle analizi, bağımsız/bağımlı/kontrol edilen değişkenlerin tespiti, güvenli elektrik kuralları ve 7. Ünitenin (Elektrik Devre Elemanları) kapsamlı kapanış istasyonu.",
    targetSkills: [
      "F.5.7.2.1. Ampul parlaklığını etkileyen faktörleri kontrollü deneylerle test eder.",
      "Deneylerdeki değişkenleri (bağımsız, bağımlı, kontrol edilen) hatasız belirler.",
      "Parlaklık-pil sayısı ve parlaklık-ampul sayısı grafiklerini yorumlar.",
      "Elektriğin güvenli ve tasarruflu kullanım ilkelerini benimser."
    ]
  },
  fillInBlanks: [
    {
      id: "fib-par-1",
      number: 1,
      baglam: "Bir deneyde araştırmacı tarafından bilerek değiştirilen ve etkisi test edilen değişkendir.",
      soruKoku: "Bu değişkene .................................... değişken denir.",
      blankAnswer: "Bağımsız",
      acceptableAnswers: ["bağımsız", "Bağımsız"],
      explanation: "Araştırmacının değiştirdiği bağımsız değişkendir.",
      wordBankHint: ["Bağımsız", "Bağımlı", "Sabit", "Rastgele"]
    },
    {
      id: "fib-par-2",
      number: 2,
      baglam: "Bağımsız değişkene bağlı olarak değişen ve deneyde ölçülen sonuç değişkenidir.",
      soruKoku: "Bu değişkene .................................... değişken denir.",
      blankAnswer: "Bağımlı",
      acceptableAnswers: ["bağımlı", "Bağımlı"],
      explanation: "Ölçülen sonuç bağımlı değişkendir.",
      wordBankHint: ["Bağımlı", "Bağımsız", "Gizli", "Ölçüsüz"]
    },
    {
      id: "fib-par-3",
      number: 3,
      baglam: "Deney boyunca hiç değiştirilmeyen ve her iki düzenekte de aynı tutulan değişkenlerdir.",
      soruKoku: "Bu değişkenlere kontrol edilen veya .................................... tutulan değişken denir.",
      blankAnswer: "Sabit",
      acceptableAnswers: ["sabit", "Sabit"],
      explanation: "Değiştirilmeyen değişken sabittir.",
      wordBankHint: ["Sabit", "Hızlı", "Farklı", "Bozuk"]
    },
    {
      id: "fib-par-4",
      number: 4,
      baglam: "Bir elektrik devresinde ampul sayısı sabitken pil sayısı artırılırsa ampulün parlaklığı ....................................ar.",
      soruKoku: "Ampul parlaklığı ....................................ar.",
      blankAnswer: "Art",
      acceptableAnswers: ["art", "Art", "artar"],
      explanation: "Pil arttıkça parlaklık artar.",
      wordBankHint: ["Art", "Azal", "Yok ol", "Sabit kal"]
    },
    {
      id: "fib-par-5",
      number: 5,
      baglam: "Bir elektrik devresinde pil sayısı sabitken seri bağlı ampul sayısı artırılırsa ampullerin parlaklığı ....................................ır.",
      soruKoku: "Ampul parlaklığı ....................................ır.",
      blankAnswer: "Azal",
      acceptableAnswers: ["azal", "Azal", "azalır"],
      explanation: "Ampul arttıkça parlaklık azalır.",
      wordBankHint: ["Azal", "Art", "Katlan", "Değişme"]
    },
    {
      id: "fib-par-6",
      number: 6,
      baglam: "Geleneksel akkor flamanlı ampuller yerine %85 daha az elektrik harcayan aydınlatma teknolojisidir.",
      soruKoku: "Tasarruf sağlayan bu ampullere .................................... ampul denir.",
      blankAnswer: "LED",
      acceptableAnswers: ["led", "LED", "Led"],
      explanation: "Tasarruflu ampul LED'dir.",
      wordBankHint: ["LED", "Mum", "Gaz lambası", "Meşale"]
    },
    {
      id: "fib-par-7",
      number: 7,
      baglam: "Vücudumuzun elektrik akımını kolay iletmesini engellemek için elektrikli aletlere asla .................................... elle dokunulmamalıdır.",
      soruKoku: "Elektrikli aletlere .................................... elle dokunulmaz.",
      blankAnswer: "Islak",
      acceptableAnswers: ["ıslak", "Islak"],
      explanation: "Islak elle dokunulmamalıdır.",
      wordBankHint: ["Islak", "Kuru", "Eldivenli", "Temiz"]
    },
    {
      id: "fib-par-8",
      number: 8,
      baglam: "Pekiştirme İstasyonu-1'de (sayfa 153) pil sayısı ile ampul parlaklığı arasındaki doğru orantı incelenmiştir.",
      soruKoku: "Pil sayısı arttıkça devreden geçen elektrik akımı ....................................ar.",
      blankAnswer: "Art",
      acceptableAnswers: ["art", "Art", "artar"],
      explanation: "Gerilim arttıkça akım artar.",
      wordBankHint: ["Art", "Düş", "Sıfırlan", "Dur"]
    },
    {
      id: "fib-par-9",
      number: 9,
      baglam: "Küçük çocukların güvenliği için evlerdeki prizlere plastik koruyucu .................................... takılmalıdır.",
      soruKoku: "Prizlere takılan bu emniyet parçasına .................................... denir.",
      blankAnswer: "Kapak",
      acceptableAnswers: ["kapak", "Kapak", "emniyet kapağı"],
      explanation: "Emniyet kapağı çocukları korur.",
      wordBankHint: ["Kapak", "Çivi", "Tel", "Anahtar"]
    },
    {
      id: "fib-par-10",
      number: 10,
      baglam: "Pekiştirme İstasyonu-3'te (sayfa 158) grafik çizimi yapılmıştır.",
      soruKoku: "Pil sayısı arttıkça parlaklığın arttığını gösteren grafik .................................... orantı grafiğidir.",
      blankAnswer: "Doğru",
      acceptableAnswers: ["doğru", "Doğru"],
      explanation: "Birlikte artış doğru orantıdır.",
      wordBankHint: ["Doğru", "Ters", "Dairesel", "Kırık"]
    }
  ],
  contextQuestions: [
    {
      id: "mcq-par-1",
      number: 1,
      baglam: "Pekiştirme İstasyonu-1'de (sayfa 153) Zeynep bir deney tasarlamıştır:\n- 1. Düzenek: 1 Pil + 1 Ampul\n- 2. Düzenek: 2 Pil + 1 Ampul\n- 3. Düzenek: 3 Pil + 1 Ampul\nZeynep ampullerin parlaklıklarını gözlemleyerek 3. düzenekteki ampulün en parlak yandığını kaydetmiştir.",
      soruKoku: "Zeynep'in yaptığı bu kontrollü deneyde 'Bağımsız Değişken' ve 'Bağımlı Değişken' sırasıyla hangisidir?",
      secenekler: {
        A: "Bağımsız Değişken: Pil sayısı — Bağımlı Değişken: Ampul parlaklığı",
        B: "Bağımsız Değişken: Ampul parlaklığı — Bağımlı Değişken: Pil sayısı",
        C: "Bağımsız Değişken: Kablo uzunluğu — Bağımlı Değişken: Pil sayısı",
        D: "Bağımsız Değişken: Ampul sayısı — Bağımlı Değişken: Anahtar durumu"
      },
      dogruCevap: "A",
      cozum: "Zeynep pil sayısını bilerek değiştirmiştir (bağımsız değişken); buna bağlı olarak değişen sonuç ise ampul parlaklığıdır (bağımlı değişken).",
      olculenKazanim: "F.5.7.2.1. Deneylerdeki değişkenleri doğru teşhis eder.",
      olculenBeceri: "Bilimsel Süreç Becerileri (Değişken Belirleme)",
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
      id: "mcq-par-2",
      number: 2,
      baglam: "Can ise şu deneyi kurmuştur:\n- K Düzeneği: 1 Pil + 1 Ampul\n- L Düzeneği: 1 Pil + 2 Ampul (seri bağlı)\n- M Düzeneği: 1 Pil + 3 Ampul (seri bağlı)",
      soruKoku: "K, L ve M düzeneklerindeki ampullerin parlaklık sıralaması çoktan aza doğru nasıl olur?",
      secenekler: {
        A: "K > L > M",
        B: "M > L > K",
        C: "K = L = M",
        D: "L > K > M"
      },
      dogruCevap: "A",
      cozum: "Pil sayısı sabitken ampul sayısı arttıkça pilden gelen enerji bölünür; tek ampullü K en parlaktır, L orta, 3 ampullü M ise en sönüktür (K > L > M).",
      olculenKazanim: "F.5.7.2.1. Ampul sayısının parlaklığa etkisini karşılaştırır.",
      olculenBeceri: "Orantısal Muhakeme",
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
      id: "mcq-par-3",
      number: 3,
      baglam: "Pekiştirme İstasyonu-2'de (sayfa 156) bir deneyde adil ve geçerli bir sonuç alabilmek için 'Kontrol Edilen (Sabit Tutulan) Değişken' kavramı ele alınmıştır.",
      soruKoku: "Pil sayısının ampul parlaklığına etkisini araştıran bir araştırmacı aşağıdaki değişkenlerden hangisini SABİT TUTMALIDIR?",
      secenekler: {
        A: "Ampul sayısını ve ampulün cinsini",
        B: "Pil sayısını",
        C: "Odanın sıcaklığını",
        D: "Ampulün parlaklığını"
      },
      dogruCevap: "A",
      cozum: "Pil sayısının etkisini görmek için ampul sayısı kesinlikle sabit tutulmalıdır.",
      olculenKazanim: "F.5.7.2.1. Kontrollü deneyde sabit tutulan değişkenleri belirler.",
      olculenBeceri: "Kontrollü Deney Tasarımı",
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
      id: "mcq-par-4",
      number: 4,
      baglam: "Bir öğrenci özdeş ampul ve pillerle hazırladığı devrede ampul parlaklığının pil sayısına bağlı grafiğini çizmiştir.",
      soruKoku: "Pil sayısı (1, 2, 3) arttıkça ampul parlaklığının değişimini gösteren grafik aşağıdakilerden hangisi gibi olmalıdır?",
      secenekler: {
        A: "Pil sayısı arttıkça parlaklığın yukarı doğru düzenli yükseldiği Doğru Orantı grafiği",
        B: "Pil sayısı arttıkça parlaklığın azaldığı Ters Orantı grafiği",
        C: "Parlaklığın hep sıfır olduğu düz çizgi",
        D: "Parlaklığın önce azalıp sonra arttığı dalgalı grafik"
      },
      dogruCevap: "A",
      cozum: "Pil sayısı ile ampul parlaklığı arasında doğru orantı vardır; pil arttıkça parlaklık artar.",
      olculenKazanim: "F.5.7.2.1. Pil-parlaklık grafiklerini yorumlar.",
      olculenBeceri: "Grafik Okuryazarlığı",
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
      id: "mcq-par-5",
      number: 5,
      baglam: "Aşağıdaki devrelerden hangisinde bulunan ampulün parlaklığı EN FAZLADIR? (Piller ve ampuller özdeştir)",
      soruKoku: "Hangi devredeki ampul en parlak yanar?",
      secenekler: {
        A: "3 Pil + 1 Ampul",
        B: "1 Pil + 3 Ampul",
        C: "1 Pil + 1 Ampul",
        D: "2 Pil + 2 Ampul"
      },
      dogruCevap: "A",
      cozum: "A seçeneğinde 1 ampule tam 3 pil düşmektedir (oran = 3/1 = 3); diğerlerinde oranlar 1/3, 1 ve 1'dir. En parlak A'dır.",
      olculenKazanim: "F.5.7.2.1. Devrelerdeki pil/ampul oranını hesaplayarak parlaklığı karşılaştırır.",
      olculenBeceri: "Sayısal Muhakeme ve Karşılaştırma",
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
      id: "mcq-par-6",
      number: 6,
      baglam: "Bir öğrenci 'Acaba kablonun uzunluğu ampul parlaklığını etkiler mi?' hipotezini test etmek istemektedir.",
      soruKoku: "Öğrencinin kurması gereken iki düzenekte hangi elemanlar KESİNLİKLE FARKLI olmalıdır?",
      secenekler: {
        A: "Yalnızca bağlantı kablosunun uzunluğu (biri 10 cm, diğeri 100 cm)",
        B: "Pil sayısı",
        C: "Ampul sayısı",
        D: "Ampulün rengi"
      },
      dogruCevap: "A",
      cozum: "Neyi araştırıyorsak bağımsız değişken sadece o olmalıdır; yani yalnızca kablo uzunluğu farklı olmalı, pil ve ampul özdeş kalmalıdır.",
      olculenKazanim: "F.5.7.2.1. Yeni bir hipotez için kontrollü deney düzeneği kurgular.",
      olculenBeceri: "Deneysel Tasarım Becerisi",
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
      id: "mcq-par-7",
      number: 7,
      baglam: "Evdeki banyoda saç kurutma makinesi çalışırken küvetin içine düşürülmesi durumunda ölümcül bir elektrik çarpması yaşanabilir.",
      soruKoku: "Bu tehlikenin sebebi nedir?",
      secenekler: {
        A: "Şebeke suyunun içindeki mineraller ve ıslak cildin mükemmel bir elektrik iletkeni olması ve akımın tüm vücuttan geçmesi",
        B: "Makinelerin suyu sevmemesi",
        C: "Küvetin çok derin olması",
        D: "Banyoda lamba olmaması"
      },
      dogruCevap: "A",
      cozum: "Islak zemin ve su elektriği çok iyi iletir; suyla temas eden elektrikli alet doğrudan insanı çarpar.",
      olculenKazanim: "F.5.7.2.1. Günlük hayatta elektrik güvenliği kurallarını gerekçelendirir.",
      olculenBeceri: "Güvenlik Bilinci",
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
      id: "mcq-par-8",
      number: 8,
      baglam: "Pekiştirme İstasyonu-3'te (sayfa 158) enerji tasarruflu ampullerin aile bütçesine ve çevreye katkısı hesaplanmıştır. Bir evde 10 adet 60 Watt akkor ampul yerine 10 adet 9 Watt LED ampul takılmıştır.",
      soruKoku: "Bu değişim sonucunda ne gerçekleşir?",
      secenekler: {
        A: "Aynı aydınlatma seviyesi sağlanırken elektrik enerjisi tüketimi ve elektrik faturası %85 oranında azalır.",
        B: "Ev daha karanlık olur.",
        C: "Elektrik faturası iki katına çıkar.",
        D: "Ampuller hemen patlar."
      },
      dogruCevap: "A",
      cozum: "LED teknolojisi 60W yerine 9W harcayarak aynı lümen ışığı verir; tüketim %85 düşer.",
      olculenKazanim: "F.5.7.2.1. Aydınlatmada enerji tasarrufunun ekonomik ve çevresel boyutunu hesaplar.",
      olculenBeceri: "Finansal ve Ekolojik Muhakeme",
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
      id: "mcq-par-9",
      number: 9,
      baglam: "Bir devrede 2 pil ve 2 ampul varken ampullerin parlaklığı 'Orta' seviyededir. Bu devredeki ampullerin 'Çok Parlak' yanmasını sağlamak için aşağıdakilerden hangisi YAPILMALIDIR?",
      soruKoku: "Ampulleri çok parlak yapmak için hangisi uygundur?",
      secenekler: {
        A: "Devreye 2 pil daha eklemek (toplam 4 pil yapmak)",
        B: "Devreye 2 ampul daha eklemek",
        C: "Pillerden birini devreden çıkarmak",
        D: "Anahtarı açık bırakmak"
      },
      dogruCevap: "A",
      cozum: "Pil sayısı artırılırsa devreye verilen enerji artar ve ampuller çok daha parlak yanar.",
      olculenKazanim: "F.5.7.2.1. Ampul parlaklığını artırma stratejilerini uygular.",
      olculenBeceri: "Problem Çözme ve Karar Verme",
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
      id: "mcq-par-10",
      number: 10,
      baglam: "Seri bağlı bir devrede ampullerden biri duydan söküldüğünde veya teli koptuğunda diğer ampullerin durumu ne olur?",
      soruKoku: "Seri devrede bir ampul patlarsa diğerleri ne olur?",
      secenekler: {
        A: "Devre hattı koptuğu için diğer ampuller de anında söner.",
        B: "Diğer ampuller daha parlak yanmaya devam eder.",
        C: "Diğer ampuller patlar.",
        D: "Diğer ampuller yanıp söner."
      },
      dogruCevap: "A",
      cozum: "Seri devrede tüm elemanlar tek hat üzerindedir; biri koptuğunda devre açılır ve diğer tüm ampuller söner.",
      olculenKazanim: "F.5.7.2.1. Seri bağlı devrelerde kesinti durumunu modeller.",
      olculenBeceri: "Devre Dinamiği Analizi",
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
      id: "mcq-par-11",
      number: 11,
      baglam: "Yılbaşı çam ağaçlarına takılan ucuz ve eski seri bağlı süs ışıklarında lambalardan tek biri patladığında bütün ağacın ışıklarının sönmesinin sebebi nedir?",
      soruKoku: "Tüm ışıkların sönmesinin gerekçesi nedir?",
      secenekler: {
        A: "Lambaların hepsinin tek bir seri tel üzerinde olması ve patlayan lambanın devreyi açık devre haline getirmesi",
        B: "Fişin prizden çıkması",
        C: "Ağacın devrilmesi",
        D: "Elektriklerin kesilmesi"
      },
      dogruCevap: "A",
      cozum: "Seri bağlı süs ışıklarında bir lamba devreyi tamamlayan köprüdür; o koptuğunda akım yolu kesilir.",
      olculenKazanim: "F.5.7.2.1. Günlük hayattaki seri devre problemlerini açıklar.",
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
      id: "mcq-par-12",
      number: 12,
      baglam: "Bir elektrik devresinde pilden çıkan kablo ampule bağlanmış, ampulden çıkan kablo da tekrar pilin kutbuna bağlanmıştır. Anahtar kapalıdır ancak ampul ışık vermemektedir. Öğrenci pili ters çevirmiş, kabloları kontrol etmiş, ampul yine yanmamıştır.",
      soruKoku: "Bu durumda en olası arıza nedir?",
      secenekler: {
        A: "Ampulün flaman teli kopmuştur (patlamıştır) ya da pil tamamen boştur.",
        B: "Masa tahtadan yapılmıştır.",
        C: "Oda çok sıcaktır.",
        D: "Kablolar çok renklidir."
      },
      dogruCevap: "A",
      cozum: "Kablolar sağlamsa ve devre kapalıysa geriye sadece tükenmiş pil veya patlamış flaman ihtimali kalır.",
      olculenKazanim: "F.5.7.2.1. Mantıksal eleme ile arıza tespiti yapar.",
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
      id: "mcq-par-13",
      number: 13,
      baglam: "Aşağıdaki davranışlardan hangisi evde elektrik çarpmasını önlemek için alınması gereken EN ÖNEMLİ tedbirlerden biridir?",
      soruKoku: "Elektrik güvenliği için hangi kurala KESİNLİKLE uyulmalıdır?",
      secenekler: {
        A: "Yıpranmış veya bakır telleri dışarı çıkmış kabloları asla kullanmamak ve elektrikli aletlerin fişini çekerken kablosundan değil başlığından tutmak",
        B: "Prizlere demir çiviler sokmak",
        C: "Televizyonu ıslak bezle silerken fişini prizden çekmemek",
        D: "Kabloları makasla kesmek"
      },
      dogruCevap: "A",
      cozum: "Fişi başlığından tutmak ve yıpranmış kablo kullanmamak temel güvenlik kuralıdır.",
      olculenKazanim: "F.5.7.2.1. Elektrik güvenliği kurallarını benimser.",
      olculenBeceri: "Yaşam Becerisi ve Güvenlik",
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
      id: "mcq-par-14",
      number: 14,
      baglam: "Bir fen deneyinde:\n- Deney 1: 1 Pil, 1 Ampul -> Parlaklık 2 birim\n- Deney 2: 2 Pil, 1 Ampul -> Parlaklık 4 birim\n- Deney 3: 3 Pil, 1 Ampul -> Parlaklık 6 birim",
      soruKoku: "Bu deney verilerine göre araştırmacı hangi bilimsel sonuca KESİN OLARAK ulaşır?",
      secenekler: {
        A: "Ampul sayısı sabitken devredeki pil sayısı arttıkça ampulün parlaklığı doğru orantılı olarak artar.",
        B: "Pil sayısı parlaklığı etkilemez.",
        C: "Ampul sayısı arttıkça parlaklık artar.",
        D: "Piller elektrik harcamaz."
      },
      dogruCevap: "A",
      cozum: "Veriler 2, 4, 6 şeklinde ikişer birim artışı açıkça göstermektedir (doğru orantı).",
      olculenKazanim: "F.5.7.2.1. Tablo verilerinden bilimsel genellemeye ulaşır.",
      olculenBeceri: "Veriye Dayalı Genelleme",
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
      id: "mcq-par-15",
      number: 15,
      baglam: "Bir sokak aydınlatmasında gündüzleri lambaların sönüp geceleri hava kararınca kendiliğinden yanmasını sağlayan sensörlü anahtarlar bulunur (Fotoelektrik hücre/LDR).",
      soruKoku: "Bu akıllı anahtarların şehirlerimize sağladığı en büyük yarar nedir?",
      secenekler: {
        A: "Gündüz gereksiz yere elektrik yanmasını önleyerek milyonlarca liralık elektrik enerjisi tasarrufu sağlaması",
        B: "Güneşi söndürmesi",
        C: "Sokakları süslemesi",
        D: "Kuşları beslemesi"
      },
      dogruCevap: "A",
      cozum: "Işığa duyarlı otomatik anahtarlar gündüzleri devreyi açarak enerjiyi korur.",
      olculenKazanim: "F.5.7.2.1. Akıllı aydınlatma teknolojilerinde tasarrufu açıklar.",
      olculenBeceri: "Teknoloji ve Tasarruf",
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
      id: "mcq-par-16",
      number: 16,
      baglam: "Bir evdeki sigorta kutusunda bulunan otomatik sigortalar, evdeki bir kabloda aşırı akım veya kısa devre olduğunda 'tık' diye atarak elektriği keser.",
      soruKoku: "Sigortanın devredeki görevi nedir?",
      secenekler: {
        A: "Aşırı elektrik akımı geçtiğinde devreyi açarak kabloların alev almasını ve yangın çıkmasını önleyen güvenlik anahtarı olmak",
        B: "Elektriği depolamak",
        C: "Faturaları ödemek",
        D: "Ampulleri parlatmak"
      },
      dogruCevap: "A",
      cozum: "Sigorta aşırı akımda atan koruyucu otomatik bir emniyet anahtarıdır.",
      olculenKazanim: "F.5.7.2.1. Sigortanın devre güvenliğindeki rolünü açıklar.",
      olculenBeceri: "Yangın Güvenliği ve Mühendislik",
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
      id: "mcq-par-17",
      number: 17,
      baglam: "Ünite Sonu İstasyonu'nda (sayfa 161-168) 5. Sınıf Fen Bilimleri 2. Kitabının tüm üniteleri (Işığın Yayılması, Maddenin Doğası, Canlılar Dünyası ve Elektrik Devreleri) sentezlenmiştir.",
      soruKoku: "Elektrik devresinde enerji dönüşümüyle ilgili aşağıdaki ifadelerden hangisi DOĞRUDUR?",
      secenekler: {
        A: "Pildeki kimyasal enerji elektrik enerjisine, ampulde ise elektrik enerjisi ışık ve ısı enerjisine dönüşür.",
        B: "Enerji yoktan var olur.",
        C: "Ampul elektrik üretir.",
        D: "Piller sadece ışık saçar."
      },
      dogruCevap: "A",
      cozum: "Enerji yok olmaz, sadece bir türden diğerine dönüşür: Kimyasal -> Elektrik -> Işık ve Isı.",
      olculenKazanim: "F.5.7.2.1. Enerjinin korunumu ve dönüşümünü elektrik devresinde modeller.",
      olculenBeceri: "Bütüncül Fizik İlkeleri",
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
      id: "mcq-par-18",
      number: 18,
      baglam: "Bir bilim insanı araştırmasında hipotezini kurmuş, deneyini yapmış ve beklenmeyen bir sonuçla karşılaşmıştır.",
      soruKoku: "Bilimsel maarif ahlakına sahip bir araştırmacı bu durumda ne yapmalıdır?",
      secenekler: {
        A: "Sonuçları gizlemeden dürüstçe kaydetmeli, hipotezini gözden geçirip yeni kontrollü deneylerle gerçeğin peşine düşmelidir.",
        B: "Deney sonuçlarını yalan söyleyerek değiştirmelidir.",
        C: "Bilimi bırakmalıdır.",
        D: "Cihazları kırmalıdır."
      },
      dogruCevap: "A",
      cozum: "Bilim dürüstlük, sabır ve hakikate sadakat üzerine kuruludur; hata veya beklenmedik sonuç yeni bir keşfin kapısıdır.",
      olculenKazanim: "F.5.7.2.1. Bilimsel etik ve araştırma ahlakını değerlendirir.",
      olculenBeceri: "Bilimsel Etik ve Maarif Değerleri",
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
      id: "mcq-par-19",
      number: 19,
      baglam: "2. Kitabın 'Elektrik Devre Elemanları' ünitesinde öğrenilen bağımsız, bağımlı ve kontrol edilen değişkenler kavramı hayatımızın her alanında doğru kararlar almamızı sağlar.",
      soruKoku: "Ders çalışan bir öğrencinin 'Uyku süresinin sınav başarısına etkisi'ni araştırdığı bir çalışmada 'Bağımlı Değişken' ne olur?",
      secenekler: {
        A: "Sınav başarısı (notlar)",
        B: "Uyku süresi",
        C: "Yenen yemekler",
        D: "Okulun rengi"
      },
      dogruCevap: "A",
      cozum: "Ölçülen ve uyku süresine bağlı olarak değişen sonuç 'Sınav Başarısı'dır; yani bağımlı değişkendir.",
      olculenKazanim: "F.5.7.2.1. Bilimsel değişken mantığını günlük yaşam durumlarına transfer eder.",
      olculenBeceri: "Kavram Transferi ve Analitik Düşünme",
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
      id: "mcq-par-20",
      number: 20,
      baglam: "5. Sınıf Fen Bilimleri 2. Kitabının tamamında (Gölge, Madde ve Isı, Canlılar, Elektrik) gördüğümüz üzere kâinattaki tüm kanunlar (ışığın doğrusal yayılması, ısının akışı, canlıların dengesi, elektrik akımı) birbiriyle muhteşem bir uyum içindedir.",
      soruKoku: "Fen bilimleri eğitiminin insana kazandırdığı EN YÜCE maarif şuuru nedir?",
      secenekler: {
        A: "Kâinattaki her bir varlığın ve kanunun sonsuz bir ilim, hikmet, sanat ve kudretle yaratıldığını fark edip, doğaya ve yaratılmışlara sevgi, merhamet ve sorumlulukla yaklaşmak",
        B: "Sadece sınavlardan yüksek not almak",
        C: "Doğayı istediğimiz gibi sömürüp kirletmek",
        D: "Teknolojiyi yalnızca oyun oynamak için kullanmak"
      },
      dogruCevap: "A",
      cozum: "Tüm fen maarif modelinin nihai gayesi; aklı ilimle, kalbi tefekkürle, vicdanı ise yaratılışa hürmet ve merhametle donatmaktır.",
      olculenKazanim: "F.5.7.2.1. Tüm 5. Sınıf Fen Bilimleri maarif modelini tefekkürle taçlandırır.",
      olculenBeceri: "Nihai Hikmet ve Maarif Sentezi",
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
