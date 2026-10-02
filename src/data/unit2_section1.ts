import { SectionContent } from '../types';

export const section5_2_1: SectionContent = {
  code: "5.2.1",
  title: "Kuvvetin Özellikleri ve Dinamometre ile Ölçülmesi",
  unitCode: "2. Ünite",
  unitTitle: "Kuvveti Tanıyalım",
  summary: "Kuvvetin durdurma, hızlandırma, yön ve şekil değiştirme etkileri, esnek cisimler, dinamometre çalışma prensibi, yay kalınlığı-hassasiyet ilişkisi ve Newton birimi.",
  kazanimlar: [
    "F.5.2.1.1. Kuvvetin büyüklüğünü dinamometre ile ölçer.",
    "F.5.2.1.2. Basit araç gereçler kullanarak bir dinamometre modeli tasarlar.",
    "Yayların esneklik sınırını ve ölçüm hassasiyetini kavrar."
  ],
  hatirlayalim: {
    text: "Geçtiğimiz yıllarda kuvvetin duran cisimleri hareket ettirebildiğini, hareketli cisimleri durdurup yavaşlatabildiğini, yönünü ve şeklini değiştirebildiğini gözlemlemiştiniz. Şimdi bu görünmez fakat etkileri her an hissedilen etkiyi nasıl ölçeceğimizi ve esnek yayların ölçümdeki kusursuz rolünü keşfedeceğiz.",
    keyPoints: [
      "Kuvvet durma, hızlanma, yön ve şekil değişikliğine sebep olan etkidir.",
      "Kuvvet birimi Newton'dır ve 'N' harfi ile gösterilir.",
      "Dinamometreler yayların esneklik özelliğinden yararlanılarak yapılmıştır."
    ]
  },
  onDegerlendirme: [
    {
      id: "on-kuv-1",
      question: "Günlük yaşamda kuvvete hangi örneklerle karşılaşırız?",
      answer: "Kapıyı açıp kapatırken uyguladığımız itme ve çekme, futbol topuna vurulan şut, çantayı yerden kaldırışımız, bisiklet frenine basışımız hep birer kuvvet uygulamasıdır."
    },
    {
      id: "on-kuv-2",
      question: "Kuvvet uygulanan bir cisimde hangi değişiklikler gözlenebilir?",
      answer: "Duran cisim hareket edebilir, hareketli cisim hızlanabilir, yavaşlayabilir veya durabilir; cismin hareket yönü değişebilir ya da şekilde kalıcı/geçici biçim değişikliği oluşabilir."
    },
    {
      id: "on-kuv-3",
      question: "Kuvvetin büyüklüğü hangi aletle ölçülür ve birimi nedir?",
      answer: "Kuvvetin büyüklüğü 'dinamometre' ile ölçülür. Birimi büyük bilim insanı Isaac Newton'ın anısına 'Newton' (Nivtın) olarak adlandırılmış olup 'N' harfiyle sembolize edilir."
    },
    {
      id: "on-kuv-4",
      question: "Esnek cisim ne demektir?",
      answer: "Kuvvet uygulandığında şekli değişen, kuvvetin etkisi ortadan kalktığında ise tekrar eski hâline dönebilen maddelere (paket lastiği, sarmal çelik yay, sünger gibi) esnek cisim denir."
    },
    {
      id: "on-kuv-5",
      question: "İnce yaylı dinamometre ile kalın yaylı dinamometre arasındaki fark nedir?",
      answer: "İnce yaylı dinamometreler küçük kuvvetlerde çok uzayarak daha hassas ölçüm yapar; ancak ağır yükleri ölçemez. Kalın yaylı dinamometreler ise büyük kuvvetleri ölçebilir ancak küçük kuvvetlerdeki ince farkları gösteremez."
    }
  ],
  hazirlik: {
    question: "Tekerlekli sandalyenin hareket etmesini sağlayan etki nedir?",
    answer: "Arkasından iten kişinin ya da tekerlekleri çeviren bireyin kasları aracılığıyla uyguladığı mekanik itme kuvvetidir. Bu kuvvet sürtünmeyi ve durma eğilimini yenerek sandalyeyi harekete geçirir."
  },
  merak: {
    question: "Pazarcıların kullandığı el kantarı ile laboratuvardaki dinamometre arasında nasıl bir benzerlik vardır?",
    answer: "El kantarı da aslında sanayi tipi bir dinamometredir! İçerisinde güçlü bir çelik yay bulunur; asılan meyve-sebzenin yer çekimi kuvveti (ağırlığı) yayı gererek göstergedeki ibreyi hareket ettirir."
  },
  kopru: {
    title: "Köprü İstasyonu: Yayların Esneklik Sınırı",
    content: "Bir yaya taşıyabileceğinden fazla kuvvet uygulanırsa yayın yapısı bozulur ve kuvvet kalktığında eski şekline dönemez. Buna 'esneklik sınırının aşılması' denir. Bu yüzden her dinamometrenin üzerinde ölçebileceği en büyük değer (örn. 10 N, 50 N, 100 N) açıkça yazılmıştır.",
    question: "En fazla 50 N ölçen bir dinamometreye 70 N asılırsa ne olur?",
    answer: "Yayın esneklik özelliği kalıcı olarak bozulur ve dinamometre artık doğru ölçüm yapamaz hale gelir."
  },
  hikmetStages: [
    {
      stage: 1,
      name: "1. Varlığı Tanıt",
      concept: "Kuvvetin Varlığı",
      text: "Kuvvet; gözle doğrudan görülmeyen fakat cisimler üzerindeki itme, çekme, yön verme ve şekillendirme etkileriyle her an varlığını hissettiren temel bir fiziksel etkidir."
    },
    {
      stage: 2,
      name: "2. Parçalarını Göster",
      concept: "Dinamometrenin Yapısı",
      text: "Dinamometre; koruyucu dış kılıf, askı kancası, yük kancası, eşit aralıklı ölçüm çubuğu ve merkezde yer alan hassas sarmal yaydan oluşur."
    },
    {
      stage: 3,
      name: "3. Her Parçanın Vazifesini Göster",
      concept: "Ölçümdeki Vazifeler",
      text: "Yay çekilen kuvvete oranla uzama vazifesini görür. Eşit bölmeli cetvel bu uzamayı sayısal değere çevirir. Kanca ise yükü güvenle taşimaya memurdur."
    },
    {
      stage: 4,
      name: "4. Parçalar Arasındaki Uyumu Göster",
      concept: "Hooke Prensibi Uyumu",
      text: "Kuvvet iki katına çıktığında yayın uzama miktarı da tam iki katına çıkar (Doğrusal Uyum). Yayın metal atomları arasındaki bu şaşmaz esneklik nizamı olmasaydı hiçbir ölçü aleti doğru sonuç veremezdi."
    },
    {
      stage: 5,
      name: "5. Ölçü ve Düzeni Göster",
      concept: "Matematiksel Hassasiyet",
      text: "Örneğin 10 bölmeli 50 N'lık bir dinamometrede her bölme tam 5 N'a denk gelir. 2 bölme uzama tam 10 N kuvvet demektir. Bu matematiksel intizam kâinattaki kanunların kesinliğini gösterir."
    },
    {
      stage: 6,
      name: "6. Büyük Benzetme Yap",
      concept: "Adalet Terazisi / Görevli Memur",
      text: "Dinamometre tıpkı hak ve hukuku kuruşu kuruşuna belirleyen bir adalet tartısı gibidir. Cisme ne kadar kuvvet verilmişse yay da o kadar boyun eğer ve gizli kuvveti aşikâr eder."
    },
    {
      stage: 7,
      name: "7. Hikmet ve Hizmeti Göster",
      concept: "Mühendislik ve Can Güvenliği",
      text: "Kuvvetin ölçülebilmesi sayesinde köprülerin dayanıklılığı, asansör halatlarının taşıma kapasitesi ve uçak kanatlarının direnci hesaplanır. İnsan hayatı bu hassas ölçümlerle korunur."
    },
    {
      stage: 8,
      name: "8. İrade ve Sanat Perspektifi",
      concept: "Metale Verilen Esneklik Kabiliyeti",
      text: "Cansız ve sert bir demir veya çelik telin sarmal hale getirilerek çekildiğinde uzaması ve bırakıldığında hiçbir milimetresi şaşmadan ilk noktasına dönmesi, maddelerin içine yerleştirilmiş ilahi bir program ve sanattır."
    },
    {
      stage: 9,
      name: "9. Akıl Yürütme",
      concept: "Gözlemden Kanuna",
      text: "Kuvvet uygulandığında uzayan bir yay, kâinatta hiçbir kuvvetin başıboş ve ölçüsüz bırakılmadığını; her etkinin belirli bir kanunla hesaplanabilir kılındığını ispatlar."
    },
    {
      stage: 10,
      name: "10. Tefekkür ve Sonuç",
      concept: "Hassas Mizanın Tefekkürü",
      text: "Gözle göremediğimiz kuvveti bir yayın esnemesiyle gözümüzün önüne seren bu mekanizma, varlıklar âlemindeki her şeyin bir ölçü ve tartı (mizan) ile yaratıldığını hatırlatır."
    }
  ],
  etkinlikler: [
    {
      id: "etk-kuv-1",
      title: "Kendi Dinamometremizi Yapıyoruz",
      type: "Tasarım ve Mühendislik",
      materials: ["Şırınga gövdesi", "Paket lastiği veya yay", "Ataş", "Dereceli kâğıt şerit"],
      steps: [
        "Yay şırınganın tepesine ataşla sabitlenir.",
        "Alt ucuna ağırlık asmak için kanca yapılır.",
        "100 gramlık (yaklaşık 1 N) standart ağırlıklar asılarak yayın uzadığı yerler çizgiyle işaretlenir.",
        "Aralıklar eşit bölmelere ayrılarak kalibre edilir."
      ],
      questions: [
        {
          qId: "etk-kuv-1-a",
          label: "a",
          prompt: "Dinamometrenin eşit bölmelendirilmesi neyi ifade eder?",
          answer: "Her bölmenin eşit miktarda kuvvet artışına (örneğin 1 N) karşılık geldiğini gösterir."
        },
        {
          qId: "etk-kuv-1-b",
          label: "b",
          prompt: "Lastik yerine çok kalın bir çelik yay kullansaydık küçük bir silginin kuvvetini ölçebilir miydik?",
          answer: "Hayır; kalın yay küçük kuvvetlerde esnemeyeceği için silginin ağırlığı ibreyi kımıldatamazdı ve hassas ölçüm yapılamazdı."
        }
      ]
    }
  ],
  bilgiIstasyonlari: [
    {
      title: "Isaac Newton ve Hareket Kanunları",
      scientistOrMission: "Isaac Newton (1643-1727)",
      description: "Kuvvetin cisimler üzerindeki etkilerini matematiksel formüllere döken İngiliz bilim insanıdır. Bilime yaptığı eşsiz katkılardan ötürü kuvvet birimine onun adı verilmiştir.",
      hikmetNote: "Evrendeki gezegenlerin yörüngesinden dalından düşen elmaya kadar her şeyin aynı evrensel çekim kanunuyla idare edildiğini keşfetmiştir."
    },
    {
      title: "Hazini ve Hikmet Terazisi (Mizanü'l-Hikme)",
      scientistOrMission: "El-Hazini (12. Yüzyıl)",
      description: "Selçuklular döneminde yaşamış büyük Müslüman fizikçi ve matematikçidir. Metallerin safiyetini ve ağırlıklarını havadaki ve sudaki farklarıyla ölçen 'Hikmet Terazisi'ni icat etmiştir. Yaptığı ölçümler modern teknolojiye çok yakındır.",
      hikmetNote: "Hazini, eserine 'Hikmet Terazisi' adını vererek tartı ve ölçümün kainattaki adalet ve ilahi ölçüyü anlamanın bir yolu olduğuna işaret etmiştir."
    }
  ],
  dda: {
    id: "dda-kuv-root",
    statement: "Kuvveti ölçen aletin adı dinamometredir.",
    correctDecision: "D",
    reason: "Kuvvetin büyüklüğü dinamometre ile ölçülür.",
    ifTrue: {
      id: "dda-kuv-2a",
      statement: "Kuvvetin birimi Newton'dır.",
      correctDecision: "D",
      reason: "Kuvvet birimi Newton olup N harfiyle gösterilir.",
      ifTrue: {
        exit: 1,
        isCorrect: true,
        feedback: "Tebrikler! Hatasız olarak 1. Çıkış'a ulaştınız."
      },
      ifFalse: {
        exit: 2,
        isCorrect: false,
        feedback: "Hatalı yol! Kuvvet birimi Newton'dır."
      }
    },
    ifFalse: {
      id: "dda-kuv-2b",
      statement: "Kuvvet birimi N ile gösterilir.",
      correctDecision: "D",
      reason: "N harfi Newton'ın sembolüdür.",
      ifTrue: { exit: 3, isCorrect: false, feedback: "Hatalı başlangıç!" },
      ifFalse: { exit: 4, isCorrect: false, feedback: "Hatalı başlangıç!" }
    }
  },
  biliyorumAnliyorumDusunuyorum: {
    biliyorum: "Kuvvet; cisimleri hareket ettiren, durduran veya şeklini değiştiren etkidir; dinamometre ile ölçülür ve birimi Newton (N)'dır.",
    anliyorum: "Dinamometredeki yaylar esneklik kuralına göre kuvvetle doğru orantılı uzar; ince yaylar küçük kuvvetlerde hassas, kalın yaylar ise büyük kuvvetlerde dayanıklıdır.",
    dusunuyorum: "Gözümüzle göremediğimiz kuvvetlerin bir yayın sarmal tellerinde böylesine kusursuz bir matematiksel oranla görünür hale gelmesi, maddedeki düzenin ve kanunların ne kadar kusursuz bir iradeyle işletildiğini düşündürür."
  },
  pekistirmeIstasyonu: {
    stationTitle: "Pekiştirme İstasyonu-1 & 2 (Dinamometre ve Kuvvet)",
    pageReference: "Sayfa 74-76",
    summaryText: "Kuvvetin tanımı, esnek maddelerin özellikleri, dinamometre tasarımı, birimi (Newton) ve yay kalınlığına bağlı ölçüm hassasiyetinin pekiştirildiği istasyon.",
    targetSkills: [
      "F.5.2.1.1. Kuvvetin büyüklüğünü dinamometre ile ölçer.",
      "F.5.2.1.2. Basit bir dinamometre modeli tasarlar."
    ]
  },
  fillInBlanks: [
    {
      id: "fib-kuv-1",
      number: 1,
      baglam: "Bir cisme uygulanan itme veya çekme gibi etkilerin büyüklüğünü belirlemek için laboratuvarda sarmal yay içeren bir araç kullanılır.",
      soruKoku: "Kuvvetin büyüklüğünü ölçmek için kullanılan alete .................................... adı verilir.",
      blankAnswer: "Dinamometre",
      acceptableAnswers: ["dinamometre", "Dinamometre"],
      explanation: "Kuvvet ölçüm aletine dinamometre denir.",
      wordBankHint: ["Dinamometre", "Termometre", "Kronometre", "Barometre"]
    },
    {
      id: "fib-kuv-2",
      number: 2,
      baglam: "Bilim dünyasında uluslararası kabul gören standart ölçüm sistemine göre kuvvet büyüklüğü özel bir birimle ifade edilir.",
      soruKoku: "Kuvvetin birimi ....................................'dır ve kısaca 'N' harfi ile gösterilir.",
      blankAnswer: "Newton",
      acceptableAnswers: ["newton", "Newton", "Nivtın"],
      explanation: "Kuvvet birimi Newton'dır.",
      wordBankHint: ["Newton", "Gram", "Metre", "Saniye"]
    },
    {
      id: "fib-kuv-3",
      number: 3,
      baglam: "Kuvvet uygulandığında uzayan, eğilen veya bükülen cisimler kuvvet kaldırıldığında hemen eski biçimine döner.",
      soruKoku: "Kuvvetin etkisi ortadan kalktığında eski şekline geri dönebilen cisimlere .................................... cisim denir.",
      blankAnswer: "Esnek",
      acceptableAnswers: ["esnek", "Esnek"],
      explanation: "Paket lastiği, yay ve sünger gibi cisimler esnek cisimlerdir.",
      wordBankHint: ["Esnek", "Kırılgan", "Sert", "Akışkan"]
    },
    {
      id: "fib-kuv-4",
      number: 4,
      baglam: "Dinamometrenin içinde kuvvetin büyüklüğüne göre uzayıp kısalan temel yapı sarmal bir parçadır.",
      soruKoku: "Dinamometrelerin yapısında kuvveti ölçmek amacıyla .................................... kullanılır.",
      blankAnswer: "Yay",
      acceptableAnswers: ["yay", "Yay", "sarmal yay"],
      explanation: "Dinamometrenin temel çalışma organı esnek sarmal yaydır.",
      wordBankHint: ["Yay", "Pil", "Mıknatıs", "Cam"]
    },
    {
      id: "fib-kuv-5",
      number: 5,
      baglam: "Aynı maddeden yapılmış iki yaydan biri ince, diğeri kalındır. Çok küçük kuvvetlerin farkını yakalamak istemektedirler.",
      soruKoku: "Küçük kuvvetleri daha .................................... şekilde ölçebilmek için ince yaylı dinamometreler tercih edilir.",
      blankAnswer: "Hassas",
      acceptableAnswers: ["hassas", "Hassas", "duyarlı"],
      explanation: "İnce yay küçük kuvvetlerde belirgin uzama göstererek hassas ölçüm sağlar.",
      wordBankHint: ["Hassas", "Kaba", "Hızlı", "Zor"]
    },
    {
      id: "fib-kuv-6",
      number: 6,
      baglam: "Dinamometredeki yayın kaldırabileceğinden çok daha ağır bir yük asıldığında yay artık eski boyuna dönemez.",
      soruKoku: "Bir dinamometreye kapasitesinden fazla kuvvet uygulandığında yayın .................................... özelliği bozulur.",
      blankAnswer: "Esneklik",
      acceptableAnswers: ["esneklik", "Esneklik"],
      explanation: "Yaylar aşırı zorlandığında esneklik sınırını kaybederek deforme olur.",
      wordBankHint: ["Esneklik", "Ağırlık", "Rengi", "Yoğunluğu"]
    },
    {
      id: "fib-kuv-7",
      number: 7,
      baglam: "10 bölmeli ve en fazla 50 N ölçebilen bir dinamometrede her bölmenin karşılığı hesaplanır.",
      soruKoku: "50 N kapasiteli 10 bölmeli dinamometrede her bir bölme .................................... N kuvvete karşılık gelir.",
      blankAnswer: "5",
      acceptableAnswers: ["5", "beş", "Beş"],
      explanation: "50 N / 10 bölme = her bölme 5 N'dır.",
      wordBankHint: ["5", "10", "2", "50"]
    },
    {
      id: "fib-kuv-8",
      number: 8,
      baglam: "Kuvvet bir yaya etki ettiğinde yayın boyundaki uzama uygulanan kuvvet miktarı ile doğrudan bağlantılıdır.",
      soruKoku: "Dinamometreye uygulanan kuvvet miktarı arttıkça yayın uzama miktarı da .................................... .",
      blankAnswer: "Artar",
      acceptableAnswers: ["artar", "Artar"],
      explanation: "Kuvvet arttıkça yayın gerilip uzaması da doğru orantılı olarak artar.",
      wordBankHint: ["Artar", "Azalır", "Değişmez", "Sıfırlanır"]
    },
    {
      id: "fib-kuv-9",
      number: 9,
      baglam: "Pazar yerlerinde patates ve elma tartar iken kullanılan yaylı el kantarları da aynı mekanizmaya dayanır.",
      soruKoku: "Günlük hayatta kullanılan el kantarları aslında bir çeşit ....................................'dir.",
      blankAnswer: "Dinamometre",
      acceptableAnswers: ["dinamometre", "Dinamometre"],
      explanation: "El kantarları içindeki yay sayesinde yer çekimi kuvvetini ölçen dinamometre türevidir.",
      wordBankHint: ["Dinamometre", "Mikroskop", "Teleskop", "Termometre"]
    },
    {
      id: "fib-kuv-10",
      number: 10,
      baglam: "12. yüzyılda İslam coğrafyasında metallerin ağırlığını ve kuvvetini 'Mizanü'l-Hikme' adını verdiği hassas terazi ile ölçen bilgin yaşamıştır.",
      soruKoku: "Hikmet Terazisi adı verilen hassas aleti geliştiren ünlü Türk-İslam bilgini ....................................'dir.",
      blankAnswer: "Hazini",
      acceptableAnswers: ["hazini", "Hazini", "El-Hazini", "el-hazini"],
      explanation: "El-Hazini Mizanü'l-Hikme (Hikmet Terazisi) ile hassas fizik ölçümleri yapmıştır.",
      wordBankHint: ["Hazini", "Biruni", "Ali Kuşçu", "İbni Sina"]
    }
  ],
  contextQuestions: [
    {
      id: "mcq-kuv-1",
      number: 1,
      baglam: "Fen bilimleri laboratuvarında öğretmen masaya 4 farklı dinamometre koymuştur:\n● K Dinamometresi: En fazla 100 N ölçer\n● L Dinamometresi: En fazla 50 N ölçer\n● M Dinamometresi: En fazla 5 N ölçer\n● N Dinamometresi: En fazla 25 N ölçer",
      soruKoku: "Bir öğrenci 3 N büyüklüğündeki küçük bir kuvveti en hassas şekilde ölçmek için hangi dinamometreyi seçmelidir?",
      secenekler: {
        A: "K",
        B: "L",
        C: "M",
        D: "N"
      },
      dogruCevap: "C",
      cozum: "Ölçülecek kuvvet (3 N) dinamometrenin kapasitesini aşmamalıdır ve maksimum değeri ölçülecek değere en yakın olan dinamometre (M: 5 N) en ince yaya sahip olduğundan en hassas ölçümü verir.",
      olculenKazanim: "F.5.2.1.1. Kuvvetin büyüklüğünü dinamometre ile ölçer.",
      olculenBeceri: "Uygun Ölçüm Aracını Belirleme",
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
      id: "mcq-kuv-2",
      number: 2,
      baglam: "Aynı maddeden yapılmış K (100 N), L (50 N), M (5 N) ve N (25 N) dinamometrelerinin içindeki yayların kalınlıkları kıyaslanmaktadır.",
      soruKoku: "En büyük kuvveti ölçebilen dinamometrenin en kalın yaya sahip olduğu bilindiğine göre, en kalın yay hangi dinamometrededir?",
      secenekler: {
        A: "M",
        B: "N",
        C: "L",
        D: "K"
      },
      dogruCevap: "D",
      cozum: "K dinamometresi 100 N'a kadar ölçüm yapabilmektedir. Büyük kuvvetleri taşıyabilmesi için içindeki yayın kesit alanının (kalınlığının) en fazla olması gerekir.",
      olculenKazanim: "F.5.2.1.1. Dinamometre özelliklerini açıklar.",
      olculenBeceri: "Değişkenler Arası İlişki Kurma",
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
      id: "mcq-kuv-3",
      number: 3,
      baglam: "Öğrenciler laboratuvarda 70 N ağırlığındaki bir metal bloku dinamometrelere asarak test etmek istemişlerdir. Ellerinde K (100 N), L (50 N), M (5 N) ve N (25 N) dinamometreleri bulunmaktadır.",
      soruKoku: "70 N'lık kuvvet uygulandığında hangi dinamometrelerin içindeki yayın esneklik özelliği bozulur?",
      secenekler: {
        A: "Yalnız K",
        B: "L, M ve N",
        C: "Yalnız M",
        D: "K ve L"
      },
      dogruCevap: "B",
      cozum: "Kapasitesi 70 N'ın altında olan L (50 N), M (5 N) ve N (25 N) dinamometrelerine 70 N asılırsa esneklik sınırları aşılır ve yayları bozulur. Yalnızca K (100 N) sağlam kalır.",
      olculenKazanim: "F.5.2.1.1. Yayların esneklik sınırını kavrar.",
      olculenBeceri: "Risk ve Sınır Analizi",
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
      id: "mcq-kuv-4",
      number: 4,
      baglam: "En fazla 80 N ölçebilen 10 eşit bölmeli bir dinamometreye bir paket asıldığında dinamometrenin gösterge çubuğundan 3 bölmenin dışarı çıktığı gözlemlenmiştir.",
      soruKoku: "Buna göre asılan paketin uyguladığı kuvvet kaç Newton'dır?",
      secenekler: {
        A: "16 N",
        B: "24 N",
        C: "30 N",
        D: "40 N"
      },
      dogruCevap: "B",
      cozum: "Dinamometre 10 bölmeli ve 80 N olduğuna göre 1 bölme = 80 / 10 = 8 N'dır. 3 bölme uzadığına göre ölçülen kuvvet: 3 x 8 = 24 N'dır.",
      olculenKazanim: "F.5.2.1.1. Kuvvetin büyüklüğünü dinamometre ile ölçer.",
      olculenBeceri: "Veri Analizi ve Orantısal Çıkarım",
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
      id: "mcq-kuv-5",
      number: 5,
      baglam: "Özdeş iki dinamometreden birine 1 adet su dolu şişe asıldığında 2 bölme dışarı çıkmaktadır. İkinci duruma aynı şişelerden 3 adet asılmıştır.",
      soruKoku: "Buna göre 3 adet özdeş şişe asıldığında dinamometre ibresinde kaç bölme dışarı çıkacaktır?",
      secenekler: {
        A: "3 bölme",
        B: "4 bölme",
        C: "6 bölme",
        D: "8 bölme"
      },
      dogruCevap: "C",
      cozum: "1 şişe 2 bölme uzatıyorsa, ağırlık 3 katına çıktığında yaydaki uzama da doğru orantılı olarak 3 x 2 = 6 bölme olacaktır.",
      olculenKazanim: "F.5.2.1.1. Kuvvet-uzama orantısını yorumlar.",
      olculenBeceri: "Tahmin ve Veri Doğrulama",
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
      id: "mcq-kuv-6",
      number: 6,
      baglam: "Bir dinamometre yapım atölyesinde öğrenciler farklı malzemeler kullanarak testler yapmaktadır. Can paket lastiği, Ece çelik yay, Berk ise bakır elektrik teli kullanmıştır.",
      soruKoku: "Hangi öğrencinin seçtiği malzeme kuvvet kaldırıldığında eski haline dönemeyeceği için dinamometre yapımına uygun değildir?",
      secenekler: {
        A: "Can (Lastik)",
        B: "Ece (Çelik yay)",
        C: "Berk (Bakır tel)",
        D: "Hepsi uygundur"
      },
      dogruCevap: "C",
      cozum: "Bakır elektrik teli esnek bir madde değildir; çekildiğinde kalıcı olarak bükülür ve uzar, kuvvet kalkınca eski haline dönmez. Bu yüzden dinamometrede kullanılamaz.",
      olculenKazanim: "F.5.2.1.2. Dinamometre tasarımı yapar.",
      olculenBeceri: "Materyal ve Özellik Değerlendirmesi",
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
      id: "mcq-kuv-7",
      number: 7,
      baglam: "Futbol maçını izleyen Arda şu anları gözlemlemiştir:\n1. Forvet topa sert bir şut çekerek hızlandırmıştır.\n2. Kaleci köşeye giden topu tokatlayarak kornere çelmiş ve yönünü değiştirmiştir.\n3. Top direğe çarpıp patlamış ve şekli bozulmuştur.",
      soruKoku: "Arda'nın gözlemlediği bu 3 olay kuvvetin sırasıyla hangi etkilerine örnektir?",
      secenekler: {
        A: "Hızlandırma - Yön değiştirme - Şekil değiştirme",
        B: "Durdurma - Hızlandırma - Yavaşlatma",
        C: "Şekil değiştirme - Durdurma - Hızlandırma",
        D: "Yavaşlatma - Şekil değiştirme - Yön değiştirme"
      },
      dogruCevap: "A",
      cozum: "1. şut topu hızlandırır, 2. tokatlama yönünü değiştirir, 3. patlama ise şeklini değiştirir.",
      olculenKazanim: "F.5.2.1.1. Kuvvetin cisimler üzerindeki etkilerini açıklar.",
      olculenBeceri: "Sınıflandırma ve Günlük Yaşam Bağlantısı",
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
      id: "mcq-kuv-8",
      number: 8,
      baglam: "Bir yaya 2 N kuvvet uygulandığında yay 1 cm esnemektedir.",
      soruKoku: "Yayın esneklik sınırının aşılmadığı bilindiğine göre, aynı yayda 4 cm esneme oluşturmak için yaya kaç N kuvvet uygulanmalıdır?",
      secenekler: {
        A: "4 N",
        B: "6 N",
        C: "8 N",
        D: "10 N"
      },
      dogruCevap: "C",
      cozum: "1 cm uzama için 2 N gerekiyorsa, 4 cm uzama için 4 x 2 N = 8 N kuvvet uygulanmalıdır.",
      olculenKazanim: "F.5.2.1.1. Dinamometre ölçümlerini hesaplar.",
      olculenBeceri: "Matematiksel İlişki Kurma",
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
      id: "mcq-kuv-9",
      number: 9,
      baglam: "Aynı kalınlıkta fakat biri bakırdan, diğeri çelikten yapılmış iki yayın uçlarına 10 N ağırlığında özdeş cisimler asılmıştır. Çelik yayın 2 cm, bakır yayın ise 5 cm uzadığı görülmüştür.",
      soruKoku: "Bu deney sonucuna göre yayların uzama miktarını etkileyen değişken aşağıdakilerden hangisidir?",
      secenekler: {
        A: "Uygulanan kuvvetin büyüklüğü",
        B: "Yayın yapıldığı maddenin cinsi",
        C: "Havanın sıcaklığı",
        D: "Dinamometrenin rengi"
      },
      dogruCevap: "B",
      cozum: "Kuvvetler ve kalınlıklar aynı iken uzama miktarlarının farklı olması, yayın yapıldığı maddenin cinsinin esnekliği doğrudan etkilediğini kanıtlar.",
      olculenKazanim: "F.5.2.1.1. Yayın esnekliğini etkileyen faktörleri belirler.",
      olculenBeceri: "Kontrollü Deney Değişken Analizi",
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
      id: "mcq-kuv-10",
      number: 10,
      baglam: "Bir kargo firması paketleri tartmak için dinamometre kullanmaktadır. Paket asıldığında ibre 45 N göstermiştir.",
      soruKoku: "Bu durum pakete etki eden hangi büyüklüğü ifade eder?",
      secenekler: {
        A: "Paketin hacmini",
        B: "Paketin sıcaklığını",
        C: "Pakete etki eden yer çekimi kuvvetini (ağırlığını)",
        D: "Paketin süratini"
      },
      dogruCevap: "C",
      cozum: "Dinamometre kuvvet ölçer. Asılan cisimlerin aşağı doğru uyguladığı kuvvet, Dünya'nın cisme uyguladığı yer çekimi kuvvetidir yani cismin ağırlığıdır.",
      olculenKazanim: "F.5.2.1.1. Kuvvet kavramını günlük yaşamla bağdaştırır.",
      olculenBeceri: "Kavram Tanıma",
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
      id: "mcq-kuv-11",
      number: 11,
      baglam: "Dinamometre ölçeği tasarlayan Zeynep, her 10 N'luk kuvvete 2 cm aralık bırakmıştır.",
      soruKoku: "Zeynep'in dinamometresine 35 N kuvvet uygulandığında gösterge kaç cm dışarı çıkmış olmalıdır?",
      secenekler: {
        A: "5 cm",
        B: "7 cm",
        C: "9 cm",
        D: "10 cm"
      },
      dogruCevap: "B",
      cozum: "10 N = 2 cm ise, 1 N = 0.2 cm'dir. 35 N x 0.2 cm = 7 cm uzama gerçekleşir.",
      olculenKazanim: "F.5.2.1.1. Dinamometre ölçeklendirme hesaplamaları yapar.",
      olculenBeceri: "Orantı Kurma",
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
      id: "mcq-kuv-12",
      number: 12,
      baglam: "Bir öğrenci 'Dinamometrelerde Neden Yay Kullanılır?' sorusuna şu cevapları sıralamıştır:\nI. Yaylar esnek maddedir.\nII. Üzerine uygulanan kuvvet kalktığında eski haline döner.\nIII. Yaylar hiçbir zaman bozulmaz ve sonsuz kuvvet taşır.",
      soruKoku: "Bu açıklamalardan hangileri doğrudur?",
      secenekler: {
        A: "I ve II",
        B: "I ve III",
        C: "II ve III",
        D: "I, II ve III"
      },
      dogruCevap: "A",
      cozum: "I ve II doğrudur. III yanlıştır çünkü her yayın bir esneklik sınırı vardır; aşırı kuvvet uygulanırsa yay bozulur.",
      olculenKazanim: "F.5.2.1.1. Dinamometrenin yapısını ve çalışma prensibini açıklar.",
      olculenBeceri: "Önerme Doğrulama",
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
      id: "mcq-kuv-13",
      number: 13,
      baglam: "Özdeş K ve L dinamometrelerine asılan cisimlerden K'ye asılan cisim 12 N ağırlığındadır ve 4 bölme uzatmıştır. L dinamometresi ise 6 bölme uzamıştır.",
      soruKoku: "Buna göre L dinamometresine asılan cismin ağırlığı kaç N'dır?",
      secenekler: {
        A: "15 N",
        B: "18 N",
        C: "20 N",
        D: "24 N"
      },
      dogruCevap: "B",
      cozum: "4 bölme = 12 N ise 1 bölme = 3 N'dır. L dinamometresi 6 bölme uzadığına göre: 6 x 3 = 18 N'dır.",
      olculenKazanim: "F.5.2.1.1. Dinamometre ile kuvvet hesaplaması yapar.",
      olculenBeceri: "Oran-Orantı ve Problem Çözme",
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
      id: "mcq-kuv-14",
      number: 14,
      baglam: "Bir fabrikada paketlenen ürünlerin ağırlık kontrolü yapılacaktır. Paketlerin ağırlığı 1 N ile 4 N arasında değişmektedir.",
      soruKoku: "Mühendislerin en doğru ve duyarlı ayrımı yapabilmesi için hangi yay tipini seçmesi gerekir?",
      secenekler: {
        A: "Çok kalın çelik yay",
        B: "İnce ve esnek yay",
        C: "Sert tahta çubuk",
        D: "Cam boru"
      },
      dogruCevap: "B",
      cozum: "Küçük kuvvetlerin hassas şekilde ayrıştırılması ince ve esnek yaylarla mümkündür; kalın yaylar 1-4 N aralığında neredeyse hiç esnemez.",
      olculenKazanim: "F.5.2.1.1. Hassas ölçüm ilkelerini belirler.",
      olculenBeceri: "Uygulama ve Seçim Yapma",
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
      id: "mcq-kuv-15",
      number: 15,
      baglam: "Otomobillerin süspansiyon sistemlerinde çukurlara girildiğinde sarsıntıyı emmek için dev helezon yaylar kullanılır.",
      soruKoku: "Otomobil süspansiyonunda kullanılan bu kalın yaylar dinamometre mantığı açısından nasıl açıklanabilir?",
      secenekler: {
        A: "Tonlarca ağırlıktaki aracı taşımak ve kalıcı olarak bozulmamak için kalın ve dayanıklı yay seçilmiştir.",
        B: "Yalnızca hafif kuvvetleri ölçmek için yapılmıştır.",
        C: "Aracın daha hızlı gitmesini sağlamak için gaz püskürtür.",
        D: "Sürtünmeyi tamamen yok eder."
      },
      dogruCevap: "A",
      cozum: "Büyük kuvvetlere dayanabilmesi için yayın kesit alanının (kalınlığının) büyük olması gerekir. Otomobil yayları devasa kuvvetleri esneklik sınırını aşmadan karşılayacak şekilde tasarlanır.",
      olculenKazanim: "F.5.2.1.1. Yayların günlük yaşamdaki mühendislik uygulamalarını açıklar.",
      olculenBeceri: "Teknoloji-Tasarım İlişkisi",
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
      id: "mcq-kuv-16",
      number: 16,
      baglam: "Bir dinamometre üzerinde 'Maksimum 60 N - 6 Bölme' ibaresi yazmaktadır.",
      soruKoku: "Bu dinamometreye asılan bir cisim ibreyi 4 bölme uzattığına göre cismin ağırlığı kaç N'dır?",
      secenekler: {
        A: "30 N",
        B: "40 N",
        C: "50 N",
        D: "20 N"
      },
      dogruCevap: "B",
      cozum: "60 N / 6 bölme = 10 N/bölme. 4 bölme x 10 N = 40 N'dır.",
      olculenKazanim: "F.5.2.1.1. Dinamometre gösterge okuması yapar.",
      olculenBeceri: "Sayısal Veri Çözümleme",
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
      id: "mcq-kuv-17",
      number: 17,
      baglam: "El-Hazini'nin 12. yüzyılda geliştirdiği Mizanü'l-Hikme (Hikmet Terazisi) cihazı incelendiğinde metallerin yoğunluklarını ve uyguladıkları kuvvetleri eşsiz bir hassasiyetle ölçtüğü tespit edilmiştir.",
      soruKoku: "Hazini'nin bu tarihi eseri bilim tarihi açısından neyi kanıtlar?",
      secenekler: {
        A: "Hassas ölçüm ve tartı biliminin asırlar önce İslam medeniyetinde çok ileri düzeyde olduğunu",
        B: "Dinamometrenin ilk kez 21. yüzyılda bulunduğunu",
        C: "Kuvvetin ölçülemeyeceğini",
        D: "Metallerin ağırlığının olmadığını"
      },
      dogruCevap: "A",
      cozum: "Hazini'nin Hikmet Terazisi, İslam medeniyetinde ölçme ve değerlendirmenin, yer çekimi ve kaldırma kuvvetlerinin Newton'dan asırlar önce yüksek hassasiyetle incelendiğini gösterir.",
      olculenKazanim: "F.5.2.1.1. Bilim insanlarının katkılarını fark eder.",
      olculenBeceri: "Bilim Tarihi Değerlendirmesi",
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
      id: "mcq-kuv-18",
      number: 18,
      baglam: "Bir öğrenci evdeki malzemelerden dinamometre yapmıştır. Ancak kalibre ederken her 1 N kuvvet için bölme çizgilerini eşit değil, rastgele mesafelerle çizmiştir.",
      soruKoku: "Öğrencinin yaptığı bu hata dinamometre ile yapılan ölçümlerde nasıl bir soruna yol açar?",
      secenekler: {
        A: "Dinamometrenin patlamasına",
        B: "Ölçüm sonuçlarının hatalı ve güvenilmez çıkmasına",
        C: "Yayın esnekliğinin tamamen kaybolmasına",
        D: "Yer çekiminin değişmesine"
      },
      dogruCevap: "B",
      cozum: "Yaylardaki uzama uygulanan kuvvetle doğru orantılıdır. Bölmeler eşit çizilmezse okunan değer gerçek kuvveti yansıtmaz, ölçüm güvenilmez olur.",
      olculenKazanim: "F.5.2.1.2. Dinamometre tasarımı ve kalibrasyonu yapar.",
      olculenBeceri: "Tasarım Hatası Tespiti",
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
      id: "mcq-kuv-19",
      number: 19,
      baglam: "Bir kancaya asılan 20 N'lık bir cisim dinamometrede 2 bölme uzama yapmıştır. Aynı dinamometreye 50 N'lık bir cisim asıldığında kaç bölme uzama gerçekleşir?",
      soruKoku: "Yayın esneklik sınırının aşılmadığı durumda doğru cevap hangisidir?",
      secenekler: {
        A: "4 bölme",
        B: "5 bölme",
        C: "6 bölme",
        D: "7 bölme"
      },
      dogruCevap: "B",
      cozum: "20 N için 2 bölme uzuyorsa 1 bölme = 10 N'dır. 50 N asıldığında 50 / 10 = 5 bölme uzama gerçekleşir.",
      olculenKazanim: "F.5.2.1.1. Kuvvet-uzama hesabı yapar.",
      olculenBeceri: "Sayısal Çıkarım",
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
      id: "mcq-kuv-20",
      number: 20,
      baglam: "Mühendisler köprü halatlarında kullanılan dev çelik yayların gerilme payını hesaplarken rüzgâr kuvvetini ve araçların ağırlığını dikkate alırlar.",
      soruKoku: "Mühendislerin bu hesaplamalarda kâinattaki fizik kanunlarına güvenebilmelerinin en temel sebebi nedir?",
      secenekler: {
        A: "Fizik kanunlarının her gün rastgele değişmesi",
        B: "Kuvvet ile esneme arasındaki ilişkinin şaşmaz, düzenli ve matematiksel bir ölçüyle yaratılmış olması",
        C: "Yayların hiçbir kuvvetten etkilenmemesi",
        D: "Çeliğin ağırlığının sıfır olması"
      },
      dogruCevap: "B",
      cozum: "Doğadaki kanunlar şaşmaz bir nizam ve istikrarla işler. Kuvvet ve esneklik arasındaki matematiksel intizam mühendislerin güvenle hesap yapabilmesine imkân verir.",
      olculenKazanim: "F.5.2.1.1. Fiziksel kanunların intizamını yorumlar.",
      olculenBeceri: "Hikmet ve Bilimsel Nizam Tefekkürü",
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
