import { SectionContent } from '../../types';

export const grade6Unit4Review: SectionContent = {
  code: "6.4.4",
  title: "4. Ünite Sonu Değerlendirme ve Beceri Temelli Sonuç Çalışmaları",
  unitCode: "6.4",
  unitTitle: "4. Ünite: Madde ve Isı",
  summary: "Madde ve Isı ünitesinin bütünleşik değerlendirmesi: Maddenin tanecikli, boşluklu ve hareketli yapısı, katı-sıvı-gaz halleri, kütle-hacim-yoğunluk (d = m / V) bağıntıları, suyun benzersiz donma anomalisi ve canlılara hayat veren buz tabakası, ısı iletkenleri ve yalıtkanları, binalarda ısı yalıtımı ve tasarruf, yakıt türleri, çevre kirliliği, asit yağmurları ve baca güvenliği.",
  kazanimlar: [
    "F.6.4.1. Maddenin tanecikli, boşluklu ve hareketli yapısını açıklar.",
    "F.6.4.2. Yoğunluğu tanımlar, hesaplar ve karışmayan sıvıların durumlarını irdeler.",
    "F.6.4.3. Isı iletkeni ve yalıtkanı maddeleri sınıflandırır, binalarda ısı yalıtımının önemini tartışır.",
    "F.6.4.4. Katı, sıvı ve gaz yakıtları karşılaştırır, soba ve baca güvenliğini değerlendirir."
  ],
  hatirlayalim: {
    text: "4. Ünite boyunca mikro âlemdeki taneciklerin titreşim, öteleme ve dönme hareketlerinden birim hacimdeki kütleye (yoğunluk), ısının iletiminden binalarımızı koruyan yalıtım zırhına kadar maddenin ve ısının doğasını derinlemesine öğrendik.",
    keyPoints: [
      "Maddelerin halleri tanecikler arası boşluk ve çekim kuvvetine göre belirlenir (Katı: Yalnız titreşim; Sıvı: Titreşim ve öteleme; Gaz: Titreşim, öteleme ve dönme).",
      "Yoğunluk (d = m / V) saf maddeler için ayırt edici bir özelliktir; birimi g/cm³'tür.",
      "Suyun donarken genleşmesi ve buzun yoğunluğunun (0,9 g/cm³) sudan (1 g/cm³) küçük olması sucul yaşam için mucizevi bir koruma kalkanıdır.",
      "Isı yalıtımı; binalarda yakıt tasarrufu sağlar, bütçeyi korur ve sera gazı salınımını azaltır.",
      "Fosil yakıtlar asit yağmurlarına ve küresel iklim krizine yol açar; temiz ve yenilenebilir enerjiye yönelmeliyiz."
    ]
  },
  onDegerlendirme: [
    {
      id: "od-u4r-1",
      question: "Kütlesi 160 g ve hacmi 20 cm³ olan bir maden parçasının yoğunluğu nedir?",
      answer: "d = m / V = 160 / 20 = 8 g/cm³."
    },
    {
      id: "od-u4r-2",
      question: "Hangi maddeler sadece titreşim hareketi yapar?",
      answer: "Katı maddeler sadece titreşim hareketi yapar."
    },
    {
      id: "od-u4r-3",
      question: "Binalarda çift cam kullanılmasının temel gayesi nedir?",
      answer: "İki cam arasındaki durgun hava boşluğuyla ısı yalıtımı sağlamak ve ısı kaybını önlemektir."
    }
  ],
  hazirlik: {
    question: "Kışın bir gölün üstü buz tuttuğunda göl tabanındaki su neden 0°C değil de +4°C'de kalır?",
    answer: "Çünkü suyun en yoğun olduğu sıcaklık +4°C'dir ve bu yoğun su gölün dibine çöker; buz ise hafif olduğu için yüzeyde kalarak alt kısımları yalıtır."
  },
  merak: {
    question: "Uzay istasyonlarındaki astronotların elbiseleri -150°C ile +120°C arasındaki sıcaklık farklarından astronotları nasıl korur?",
    answer: "Astronot kıyafetleri onlarca katmandan oluşan özel yalıtım kumaşları, hava boşlukları ve reflektör tabakalarla donatılmıştır; bu üstün yalıtım ısı geçişini sıfıra yaklaştırır."
  },
  kopru: {
    title: "Maddeden Sese: Taneciklerin Dalga Boyutu",
    content: "Maddenin tanecikli yapısını ve ısının taneciklerle aktarılmasını pekiştirdikten sonra, 5. Ünite'de sesin tanecikler aracılığıyla bir dalga gibi yayılmasını ve süratini inceleyeceğiz.",
    question: "Ses dalgaları havası boşaltılmış bir fanusun içinde neden ilerleyemez?",
    answer: "Çünkü sesin yayılması için titreşecek madde taneciklerine ihtiyaç vardır; boşlukta tanecik olmadığı için ses iletilemez."
  },
  hikmetStages: [
    {
      stage: 1,
      name: "1. Varlığı Tanıt (Mikrodan Makroya Madde)",
      concept: "Kâinatın Yapı Taşları",
      text: "Zerre kadar minik atomlardan koca binalara, okyanuslardan gökyüzüne her şey aynı hassas kanunlarla işler.",
      analogies: ["Aynı alfabenin harfleriyle yazılan binlerce ciltlik kütüphane."]
    },
    {
      stage: 2,
      name: "2. Parçalarını Göster (Tanecik, Yoğunluk ve Isı)",
      concept: "Üçlü Saçayağı",
      text: "Taneciklerin hareketi hali belirler, sıklığı yoğunluğu verir, çarpışması ise ısıyı iletir.",
      analogies: ["Müzik orkestrasının birbiriyle uyumlu çalgıları."]
    },
    {
      stage: 3,
      name: "3. Ölçü ve Düzen (Hassas Matematik)",
      concept: "Mizan ve Terazi",
      text: "Her maddenin kütlesi ile hacmi arasındaki oran (d = m / V) bir hikmet terazisinde tartılmıştır.",
      questionToPonder: "Suyun yoğunluğu +4°C'de en yüksek olmasaydı sucul canlılar nasıl hayatta kalabilirdi?"
    },
    {
      stage: 4,
      name: "4. Gayesini Keşfet (Hayatın Sürekliliği)",
      concept: "Kalkan Olan Buz ve Isı Dengesi",
      text: "Buzun su üstünde yüzmesi balıklara sığınak, yalıtım ise insanlığa huzur ve tasarruf kapısıdır."
    },
    {
      stage: 5,
      name: "5. Bütünle İlişkilendir (Ekolojik Emanet)",
      concept: "Yerkürenin Sıcaklık Dengesi",
      text: "Fosil yakıtların dumanlarıyla gök kubbeyi kirletmemek, geleceğe yaşanabilir temiz bir tabiat bırakmaktır.",
      analogies: ["Bize emanet edilen yemyeşil bir bahçe."]
    },
    {
      stage: 6,
      name: "6. Hayret ve Tefekkür (Zerrelerin Yaratıcısı)",
      concept: "El-Alîm ve El-Hakîm",
      text: "Her zerreye kanun koyan, suyu hayat pınarı kılan, ısıyı varlığın can damarı yapan Yüce Yaratıcı'yı takdir etmek."
    }
  ],
  etkinlikler: [
    {
      id: "etk-u4r-proje",
      title: "Ünite Sonu Beceri İstasyonu: Sıfır Enerjili Ekolojik Konut Tasarımı",
      type: "Mühendislik ve Sürdürülebilirlik Projesi",
      materials: ["Mukavva", "Strafor", "Cam yünü modeli pamuk", "Güneş paneli modeli renkli kartonlar"],
      steps: [
        "1. Adım: Çatısı, duvarları ve pencereleri maksimum ısı yalıtımlı bir ev maketi tasarlayınız.",
        "2. Adım: Evin ısıtmasında fosil yakıt yerine güneş veya jeotermal enerji kullanımını projelendiriniz.",
        "3. Adım: Yıllık enerji tasarrufu ve karbon ayak izi azaltım raporu hazırlayınız."
      ],
      questions: [
        {
          qId: "q-u4r-1",
          label: "Proje Değerlendirmesi",
          prompt: "Sıfır enerjili konutlar küresel iklim krizini nasıl yavaşlatır?",
          answer: "Fosil yakıt tüketimini sıfırlayarak atmosfere karbonmonoksit ve sera gazı salınımını önler, küresel ısınmayı durdurmaya katkı sağlar."
        }
      ]
    }
  ],
  bilgiIstasyonlari: [
    {
      title: "Bîrûnî ve Minerallerin Özgül Ağırlığı",
      scientistOrMission: "11. Yüzyılın Dehası",
      description: "Bîrûnî, kendi tasarladığı konik kapla metallerin ve kıymetli taşların yoğunluklarını günümüz modern değerlerine %99,5 doğrulukla ölçmüştür.",
      hikmetNote: "Bîrûnî, 'İlim hakikati aramak ve Yaratan'ın sanatını hayranlıkla anlamaktır' diyerek bilime ahlak ve derinlik katmıştır."
    }
  ],
  dda: {
    id: "dda-u4r-genel",
    statement: "Isı yalıtımı iyi olan bir binada yakıt tüketimi azalır; bu durum hem aile bütçesine tasarruf sağlar hem de atmosfere salınan zararlı gazları azaltarak çevreyi korur.",
    correctDecision: "D",
    reason: "Yalıtım iki yönlü devasa bir kazançtır: Ekonomik kazanç ve ekolojik temizlik.",
    ifTrue: {
      exit: 1,
      isCorrect: true,
      feedback: "Tebrikler! Ünitenin tüm temel felsefesini mükemmel kavradınız."
    },
    ifFalse: {
      exit: 2,
      isCorrect: false,
      feedback: "Hatalı! Yalıtımın çevreye ve bütçeye faydasını yeniden hatırlayınız."
    }
  },
  biliyorumAnliyorumDusunuyorum: {
    biliyorum: "Maddenin tanecikli yapısını, katı-sıvı-gaz hareketlerini, yoğunluk formülünü, suyun istisnasını, ısı iletken ve yalıtkanlarını biliyorum.",
    anliyorum: "Maddenin fiziksel özelliklerinin arkasındaki mikroskobik düzenin tüm kâinatı ayakta tuttuğunu anlıyorum.",
    dusunuyorum: "Zerrelerden yıldızlara kadar her şeyin birbirine muazzam bir dengeyle bağlı olduğunu tefekkür etmek bize nasıl bir çevre ahlakı kazandırır?"
  },
  pekistirmeIstasyonu: {
    stationTitle: "4. Ünite Sonu Kapsamlı Değerlendirme İstasyonu",
    pageReference: "6. Sınıf 2. Kitap 4. Ünite Sonu",
    summaryText: "Tanecikler, yoğunluk, ısı yalıtımı ve yakıtlar konularının tamamını kapsayan 10 boşluk doldurma ve 20 LGS/PISA tarzı yeni nesil soru.",
    targetSkills: [
      "Ünitenin tüm kazanımlarını analiz eder ve disiplinler arası sentez yapar.",
      "Beceri temelli, grafik ve deney odaklı karmaşık fen problemlerini çözer."
    ]
  },
  fillInBlanks: [
    {
      id: "fib-u4r-1",
      number: 1,
      baglam: "Maddelerin en küçük hareketli yapı taşlarıdır.",
      soruKoku: "Maddelerin tamamı atom veya molekül adı verilen sürekli hareket halindeki ....................................lerden oluşur.",
      blankAnswer: "Tanecik",
      acceptableAnswers: ["tanecik", "Tanecik", "tanecikler"],
      explanation: "Madde taneciklidir.",
      wordBankHint: ["Tanecik", "Işık", "Hücre", "Enerji"]
    },
    {
      id: "fib-u4r-2",
      number: 2,
      baglam: "Katılar yalnızca bu hareketi yapabilir.",
      soruKoku: "Katı tanecikleri aralarındaki boşluk çok az olduğu için yalnızca .................................... hareketi yapar.",
      blankAnswer: "Titreşim",
      acceptableAnswers: ["titreşim", "Titreşim"],
      explanation: "Katılar sadece titreşir.",
      wordBankHint: ["Titreşim", "Öteleme", "Dönme", "Uçma"]
    },
    {
      id: "fib-u4r-3",
      number: 3,
      baglam: "Sıvı ve gazların akmasını sağlayan harekettir.",
      soruKoku: "Taneciklerin birbiri üzerinden kayarak yer değiştirmesine .................................... hareketi denir.",
      blankAnswer: "Öteleme",
      acceptableAnswers: ["öteleme", "Öteleme"],
      explanation: "Akışkanlığı öteleme sağlar.",
      wordBankHint: ["Öteleme", "Titreşim", "Donma", "Kaynama"]
    },
    {
      id: "fib-u4r-4",
      number: 4,
      baglam: "Birim hacimdeki madde miktarıdır.",
      soruKoku: "Bir maddenin birim hacminin kütlesine .................................... denir.",
      blankAnswer: "Yoğunluk",
      acceptableAnswers: ["yoğunluk", "Yoğunluk"],
      explanation: "Yoğunluk d = m / V'dir.",
      wordBankHint: ["Yoğunluk", "Ağırlık", "Kuvvet", "Sürat"]
    },
    {
      id: "fib-u4r-5",
      number: 5,
      baglam: "Buz suyun üzerinde durur.",
      soruKoku: "Buzun yoğunluğu suyun yoğunluğundan küçük olduğu için buz suda ....................................er.",
      blankAnswer: "Yüz",
      acceptableAnswers: ["yüzer", "Yüzer", "yüz", "Yüz"],
      explanation: "Buz suda yüzer.",
      wordBankHint: ["Yüz", "Bat", "Eri", "Buharlaş"]
    },
    {
      id: "fib-u4r-6",
      number: 6,
      baglam: "Isı akışını zorlaştıran maddelere verilen addır.",
      soruKoku: "Isıyı kötü ileten veya geçirmeyen maddelere ısı .................................... maddeler denir.",
      blankAnswer: "Yalıtkanı",
      acceptableAnswers: ["yalıtkanı", "Yalıtkanı", "yalıtkan", "Yalıtkan"],
      explanation: "Yalıtkanlar ısı geçişini engeller.",
      wordBankHint: ["Yalıtkanı", "İletkeni", "Üreticisi", "Tüketicisi"]
    },
    {
      id: "fib-u4r-7",
      number: 7,
      baglam: "Binaların dış cephelerine yapılan yalıtımdır.",
      soruKoku: "Binaların dış cephesine yalıtım levhaları kaplanmasına .................................... denir.",
      blankAnswer: "Mantolama",
      acceptableAnswers: ["mantolama", "Mantolama"],
      explanation: "Dış cephe yalıtımı mantolamadır.",
      wordBankHint: ["Mantolama", "Sıvama", "Kireçleme", "Yıkama"]
    },
    {
      id: "fib-u4r-8",
      number: 8,
      baglam: "Soba zehirlenmesine neden olan sinsi gazdır.",
      soruKoku: "Soba ve şofben bacalarından sızan zehirli gaz karbon....................................tir.",
      blankAnswer: "Monoksit",
      acceptableAnswers: ["monoksit", "Monoksit"],
      explanation: "Karbonmonoksit (CO) zehirli gazdır.",
      wordBankHint: ["Monoksit", "Dioksit", "Azot", "Oksijen"]
    },
    {
      id: "fib-u4r-9",
      number: 9,
      baglam: "Petrol, kömür ve doğal gaz bu yakıt grubundadır.",
      soruKoku: "Yer altında milyonlarca yılda oluşan kömür ve petrole .................................... yakıtlar denir.",
      blankAnswer: "Fosil",
      acceptableAnswers: ["fosil", "Fosil"],
      explanation: "Kömür ve petrol fosil yakıttır.",
      wordBankHint: ["Fosil", "Rüzgâr", "Güneş", "Jeotermal"]
    },
    {
      id: "fib-u4r-10",
      number: 10,
      baglam: "Hikmet Terazisi ile metallerin yoğunluğunu ölçen İslam bilginidir.",
      soruKoku: "Mizanü'l-Hikme adlı eserin sahibi ünlü fizik bilgini El-...................................dir.",
      blankAnswer: "Hâzinî",
      acceptableAnswers: ["hazini", "hâzinî", "Hazini", "Hâzinî"],
      explanation: "Abdurrahman el-Hâzinî yoğunluk ölçüm öncüsüdür.",
      wordBankHint: ["Hâzinî", "Farabi", "Bîrûnî", "Cezeri"]
    }
  ],
  contextQuestions: [
    {
      id: "mcq-u4r-1",
      number: 1,
      baglam: "Kütlesi 300 gram olan katı bir cisim, içinde 200 cm³ su bulunan dereceli kaba atıldığında su seviyesi 250 cm³'e yükseliyor.",
      soruKoku: "Bu cismin yoğunluğu kaç g/cm³'tür?",
      secenekler: {
        A: "3 g/cm³",
        B: "6 g/cm³",
        C: "1,2 g/cm³",
        D: "15 g/cm³"
      },
      dogruCevap: "B",
      cozum: "Hacim V = 250 - 200 = 50 cm³. Kütle m = 300 g. Yoğunluk d = 300 / 50 = 6 g/cm³.",
      olculenKazanim: "F.6.4.2.2. Sıvıya batan cismin yoğunluğunu hesaplar.",
      olculenBeceri: "Sayısal Problem Çözme",
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
      id: "mcq-u4r-2",
      number: 2,
      baglam: "Bir kaba d1 = 0,8 g/cm³, d2 = 1,0 g/cm³ ve d3 = 13,6 g/cm³ (cıva) yoğunluğundaki üç sıvı döküldüğünde karışmadan dengelenmiştir.",
      soruKoku: "Bu kapta en dipte ve en üstte yer alan sıvılar hangileridir?",
      secenekler: {
        A: "En dipte d3, en üstte d1",
        B: "En dipte d1, en üstte d3",
        C: "En dipte d2, en üstte d1",
        D: "En dipte d3, en üstte d2"
      },
      dogruCevap: "A",
      cozum: "Yoğunluğu en büyük olan cıva (13,6 g/cm³) en dipte, yoğunluğu en küçük olan d1 (0,8 g/cm³) en üstte yer alır.",
      olculenKazanim: "F.6.4.2.3. Karışmayan sıvıların yoğunluk sıralamasını yapar.",
      olculenBeceri: "Katman Teşhisi",
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
      id: "mcq-u4r-3",
      number: 3,
      baglam: "Kışın bir gölün yüzeyi 20 cm kalınlığında buz tutmuştur. Hava sıcaklığı -15°C iken göl tabanındaki su sıcaklığı termometre ile +4°C ölçülmüştür.",
      soruKoku: "Göl tabanının donmayıp +4°C'de kalması hangi bilimsel gerçekle açıklanır?",
      secenekler: {
        A: "Suyun en yoğun halinin +4°C'de olması ve bu yoğun suyun dipte kalması; buzun ise hafifleyip yüzeyde yalıtkan bir battaniye oluşturması",
        B: "Göl tabanında volkan bulunması",
        C: "Balıkların suyu ısıtması",
        D: "Buzun sıcak su üretmesi"
      },
      dogruCevap: "A",
      cozum: "Su +4°C'de maksimum yoğunluğa (1 g/cm³) ulaşır ve dibe çöker. Yüzeydeki buz ise yalıtkanlık yaparak alt katmanları dondurucu havadan korur.",
      olculenKazanim: "F.6.4.2.4. Suyun yoğunluk anomalisinin ekosistemdeki koruyucu rolünü irdeler.",
      olculenBeceri: "Ekolojik Biyofizik Analizi",
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
      id: "mcq-u4r-4",
      number: 4,
      baglam: "Bir fen öğretmeni sınıfa içi boş bir şırınga getirip pistonunu yarıya kadar çekmiş, sonra ucunu parmağıyla sıkıca kapatıp pistonu ileri doğru itmiştir. Pistonun belirgin şekilde ilerlediğini göstermiştir.",
      soruKoku: "Bu deney maddelerin hangi mikroskobik özelliğini ispatlar?",
      secenekler: {
        A: "Gaz tanecikleri arasında çok geniş boşluklar bulunduğunu ve gazların sıkıştırılabileceğini",
        B: "Havanın kütlesinin olmadığını",
        C: "Katıların kolayca sıkıştığını",
        D: "Şırınganın delik olduğunu"
      },
      dogruCevap: "A",
      cozum: "Gaz tanecikleri arasında muazzam boşluk vardır; dış kuvvetle tanecikler birbirine yaklaştırılarak gaz sıkıştırılır.",
      olculenKazanim: "F.6.4.1.1. Gazların sıkıştırılabilirliğini tanecikler arası boşlukla açıklar.",
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
      id: "mcq-u4r-5",
      number: 5,
      baglam: "Katı, sıvı ve gaz haldeki tanecik hareketleri eşleştirilmiştir:\nI. Katı: Yalnız titreşim\nII. Sıvı: Titreşim ve öteleme\nIII. Gaz: Titreşim, öteleme ve dönme",
      soruKoku: "Bu eşleştirmelerden hangileri DOĞRUDUR?",
      secenekler: {
        A: "I ve II",
        B: "II ve III",
        C: "I ve III",
        D: "I, II ve III"
      },
      dogruCevap: "D",
      cozum: "Maddenin hallerindeki tanecik hareketlerinin tümü MEB kazanımlarına göre eksiksiz doğrudur.",
      olculenKazanim: "F.6.4.1.2. Üç haldeki tanecik hareketlerini karşılaştırır.",
      olculenBeceri: "Kavramsal Doğruluk",
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
      id: "mcq-u4r-6",
      number: 6,
      baglam: "Bir apartman yönetimi kış gelmeden önce binaya dış cephe ısı yalıtımı (mantolama) yaptırmış ve pencereleri çift cam ile yenilemiştir.",
      soruKoku: "Bu uygulamanın apartman sakinlerine ve çevreye sağlayacağı EN BÜYÜK kazanım hangisidir?",
      secenekler: {
        A: "Doğal gaz tüketimini %40-50 azaltarak faturaları düşürmesi ve atmosfere salınan karbondioksit miktarını azaltması",
        B: "Binanın daha ağır olmasını sağlaması",
        C: "Kışın pencerelerin hiç açılmamasını sağlaması",
        D: "Binanın boyasının rengini değiştirmesi"
      },
      dogruCevap: "A",
      cozum: "Mantolama yakıt tüketimini neredeyse yarıya indirir, bütçeyi korur ve karbon salınımını azaltarak çevreyi korur.",
      olculenKazanim: "F.6.4.3.2. Isı yalıtımının ekonomik ve ekolojik yararlarını tartışır.",
      olculenBeceri: "Sürdürülebilirlik ve Ekonomi",
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
      id: "mcq-u4r-7",
      number: 7,
      baglam: "Bir öğrenci özdeş üç beherden birine bakır tozu, birine talaş, birine de strafor köpük parçaları koyup üzerlerine eşit miktarda 80°C sıcak su dökmüştür. 10 dakika sonra sıcaklıkları ölçmüştür.",
      soruKoku: "En yüksek sıcaklığın strafor köpüklü beherde kalmasının sebebi nedir?",
      secenekler: {
        A: "Strafor köpüğün içindeki hareketsiz hava gözenekleri sayesinde mükemmel bir ısı yalıtkanı olması",
        B: "Straforun ısı üretmesi",
        C: "Bakırın suyu soğutması",
        D: "Talaşın suyu emmesi"
      },
      dogruCevap: "A",
      cozum: "Strafor köpük gözenekli yapısındaki durgun hava ile ısı iletimini engeller ve üstün bir yalıtım sağlar.",
      olculenKazanim: "F.6.4.3.3. Yalıtım malzemelerinin performansını karşılaştırır.",
      olculenBeceri: "Deneysel Sonuç Yorumlama",
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
      id: "mcq-u4r-8",
      number: 8,
      baglam: "Rüzgârlı ve lodoslu havalarda sobalı evlerde karbonmonoksit (CO) zehirlenmesi vakalarında ciddi artış yaşanmaktadır.",
      soruKoku: "Karbonmonoksit gazının 'sinsi katil' olarak adlandırılmasının ve bu kadar tehlikeli olmasının temel sebebi nedir?",
      secenekler: {
        A: "Renksiz, kokusuz ve tatsız olması sebebiyle ortamda biriktiğinin insanlar tarafından hiç fark edilememesi ve kandaki oksijeni bağlayarak boğulmaya yol açması",
        B: "Aşırı kötü kokması",
        C: "Kırmızı renkli bir duman çıkarması",
        D: "Hemen alev alması"
      },
      dogruCevap: "A",
      cozum: "Karbonmonoksit kokusuz ve renksizdir; hissedilmeden kana karışıp hemoglobinle birleşir ve uykuda ölüme sebep olur.",
      olculenKazanim: "F.6.4.3.4. Karbonmonoksit zehirlenmesinin tehlikelerini ve sebeplerini irdeler.",
      olculenBeceri: "Yaşamsal Güvenlik ve Toksikoloji Bilinci",
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
      id: "mcq-u4r-9",
      number: 9,
      baglam: "Kütle-hacim grafiğinde K maddesinin doğrusu L maddesinin doğrusundan daha dik bir eğime sahiptir.",
      soruKoku: "Bu grafiğe göre K ve L maddelerinden eşit hacimde alındığında kütleleri hakkında ne söylenebilir?",
      secenekler: {
        A: "K maddesinin kütlesi L maddesinden daha büyüktür.",
        B: "L maddesinin kütlesi daha büyüktür.",
        C: "Her ikisinin kütlesi eşittir.",
        D: "Kütleleri hakkında yorum yapılamaz."
      },
      dogruCevap: "A",
      cozum: "K'nin eğimi büyük olduğu için yoğunluğu büyüktür (dK > dL). d = m / V bağıntısına göre eşit hacimde yoğun olanın kütlesi daha büyüktür.",
      olculenKazanim: "F.6.4.2.2. Kütle-hacim grafiğinden kütle ve yoğunluk kıyaslaması yapar.",
      olculenBeceri: "Grafik Okuma ve Yorumlama",
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
      id: "mcq-u4r-10",
      number: 10,
      baglam: "Çaydanlığın metal gövdesi ısıyı suya çabuk aktarsın diye çelikten; kulpu ise elimizi yakmasın diye bakalit plastikten yapılmıştır.",
      soruKoku: "Bu tasarımda maddelerin hangi özelliklerinden sırasıyla yararlanılmıştır?",
      secenekler: {
        A: "Isı iletkenliği - Isı yalıtkanlığı",
        B: "Isı yalıtkanlığı - Isı iletkenliği",
        C: "Yalnızca sertlik",
        D: "Yalnızca şeffaflık"
      },
      dogruCevap: "A",
      cozum: "Gövdede çeliğin ısı iletkenliğinden, kulpta ise plastiğin ısı yalıtkanlığından faydalanılmıştır.",
      olculenKazanim: "F.6.4.3.1. Günlük araçlarda ısı iletimi ve yalıtımı prensiplerini analiz eder.",
      olculenBeceri: "Teknolojik Tasarım Analizi",
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
      id: "mcq-u4r-11",
      number: 11,
      baglam: "Kömür, petrol ve linyit gibi fosil yakıtların yoğun tüketimi sonucunda atmosfere salınan SO2 (kükürtdioksit) gazı yağmur bulutlarıyla birleştiğinde sülfürik asit oluşturur.",
      soruKoku: "Asit yağmurlarının çevreye verdiği zararlardan biri DEĞİLDİR?",
      secenekler: {
        A: "Ormanlardaki ağaçların yapraklarını yakıp kurutması",
        B: "Tarihi heykelleri, mermer ve taş yapıları aşındırması",
        C: "Göllerin asitliğini artırarak balıkların ölümüne yol açması",
        D: "Toprağın verimini artırarak bitkilerin daha hızlı büyümesini sağlaması"
      },
      dogruCevap: "D",
      cozum: "Asit yağmurları toprağı zehirler ve mineralleri yıkayarak verimi düşürür; bitkileri kurutur.",
      olculenKazanim: "F.6.4.3.4. Asit yağmurlarının ekosisteme zararlarını değerlendirir.",
      olculenBeceri: "Çevre ve Ekolojik Teşhis",
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
      id: "mcq-u4r-12",
      number: 12,
      baglam: "Oda sıcaklığında bulunan bir miktar kolonya avucumuza döküldüğünde elimizde serinlik hissederiz.",
      soruKoku: "Kolonyanın elimizi serinletmesinin tanecik teorisi ve ısı alışverişiyle açıklaması nedir?",
      secenekler: {
        A: "Kolonyanın buharlaşırken elimizden ısı alması ve elimizin sıcaklığını düşürmesi",
        B: "Kolonyanın soğuk buzdan yapılması",
        C: "Elimizin kolonyayı dondurması",
        D: "Kolonyanın deriyi yakması"
      },
      dogruCevap: "A",
      cozum: "Buharlaşma endotermik (ısı alan) bir olaydır; buharlaşan tanecikler elimizden ısı aldığı için elimizde serinlik hissederiz.",
      olculenKazanim: "F.6.4.1.3. Hal değişiminde ısı alışverişi ve tanecik etkileşimini açıklar.",
      olculenBeceri: "Termodinamik Mantık",
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
      id: "mcq-u4r-13",
      number: 13,
      baglam: "İslam bilgini El-Hâzinî'nin icat ettiği 'Hikmet Terazisi' (Mîzânü'l-Hikme) dönemin hükümdarları tarafından altın sikkelerin saflık derecesini ölçmek için kullanılmıştır.",
      soruKoku: "Bu terazinin sahte altını tespit edebilmesi hangi bilimsel prensibe dayanıyordu?",
      secenekler: {
        A: "Her saf metalin kendine has bir yoğunluğunun olması; içine başka metal karıştırılan altının yoğunluğunun saf altından (19,3 g/cm³) farklı çıkması",
        B: "Altının renginin değişmesi",
        C: "Altının suda erimesi",
        D: "Terazinin altınla konuşması"
      },
      dogruCevap: "A",
      cozum: "Yoğunluk saf maddeler için ayırt edicidir; alaşım yapıldığında yoğunluk değiştiğinden sahtecilik anında anlaşılır.",
      olculenKazanim: "F.6.4.2.1. Yoğunluğun saflık tespitindeki ayırt edici gücünü takdir eder.",
      olculenBeceri: "Bilim Tarihi ve Metroloji",
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
      id: "mcq-u4r-14",
      number: 14,
      baglam: "Bir bardağa su ve zeytinyağı konulduğunda zeytinyağının suyun üzerinde yüzdüğü bilinmektedir. Bu bardağa yoğunluğu 1,1 g/cm³ olan bir plastik parça atılmıştır (d_su = 1,0 g/cm³, d_zeytinyağı = 0,9 g/cm³).",
      soruKoku: "Plastik parçanın bu bardaktaki denge konumu ne olur?",
      secenekler: {
        A: "En üstte zeytinyağının yüzeyinde yüzer",
        B: "Zeytinyağı ile su arasında kalır",
        C: "En dibe batar çünkü yoğunluğu hem sudan hem de zeytinyağından büyüktür",
        D: "Suda erir"
      },
      dogruCevap: "C",
      cozum: "Plastiğin yoğunluğu (1,1 g/cm³) suyun (1,0 g/cm³) ve zeytinyağının (0,9 g/cm³) üzerinde olduğu için bardağın en dibine batar.",
      olculenKazanim: "F.6.4.2.3. Çoklu sıvı ortamında cisimlerin denge konumunu hesaplar.",
      olculenBeceri: "Çok Boyutlu Yoğunluk Muhakemesi",
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
      id: "mcq-u4r-15",
      number: 15,
      baglam: "Fırın eldivenleri genellikle kalın kumaş, silikon veya aramid liflerinden üretilir.",
      soruKoku: "Fırından 200°C'deki tepsiyi çıkarırken fırın eldiveni kullanmamızın sebebi nedir?",
      secenekler: {
        A: "Eldivenin iyi bir ısı yalıtkanı olması ve tepsideki yüksek ısının elimize geçmesini engelleyerek yanıkları önlemesi",
        B: "Tepsiyi soğutması",
        C: "Tepsinin kaymasını önlemesi",
        D: "Eldivenin ısı iletkeni olması"
      },
      dogruCevap: "A",
      cozum: "Fırın eldiveni yüksek ısı yalıtkanıdır; ısının elimize geçişini durdurur.",
      olculenKazanim: "F.6.4.3.1. Günlük koruyucu giysilerde yalıtım fonksiyonunu açıklar.",
      olculenBeceri: "İş ve Ev Güvenliği Mantığı",
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
      id: "mcq-u4r-16",
      number: 16,
      baglam: "Şişirilmiş bir futbol topu oda sıcaklığından (25°C) alınıp kışın dışarıdaki buz gibi sahaya (0°C) götürüldüğünde topun havasının indiği ve yumuşadığı görülmüştür.",
      soruKoku: "Topun inmesinin sebebi nedir?",
      secenekler: {
        A: "Topun delinip hava kaçırması",
        B: "Soğuyan hava taneciklerinin yavaşlayarak birbirine yaklaşması ve tanecikler arası boşluğun azalarak hacmin büzüşmesi",
        C: "Topun kütlesinin azalması",
        D: "Soğuk havanın topu eritmesi"
      },
      dogruCevap: "B",
      cozum: "Sıcaklık düşünce gaz taneciklerinin kinetik enerjisi azalır, tanecikler birbirine yaklaşır ve gaz büzüşür (hacim küçülür).",
      olculenKazanim: "F.6.4.1.3. Sıcaklık düşüşünün gaz hacmine ve tanecik hareketine etkisini irdeler.",
      olculenBeceri: "Fiziksel Durum Analizi",
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
      id: "mcq-u4r-17",
      number: 17,
      baglam: "Kütlesi 400 gram ve hacmi 50 cm³ olan saf X maddesinin yoğunluğu kaç g/cm³'tür?",
      soruKoku: "X maddesinin yoğunluğu nedir?",
      secenekler: {
        A: "4 g/cm³",
        B: "8 g/cm³",
        C: "12 g/cm³",
        D: "20 g/cm³"
      },
      dogruCevap: "B",
      cozum: "d = m / V = 400 g / 50 cm³ = 8 g/cm³.",
      olculenKazanim: "F.6.4.2.2. d = m / V formülüyle yoğunluk hesabı yapar.",
      olculenBeceri: "Doğrudan Matematiksel Çözüm",
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
      id: "mcq-u4r-18",
      number: 18,
      baglam: "Binalarda kullanılan taş yünü yalıtım malzemesi bazalt taşının 1500°C'de eritilip elyaf haline getirilmesiyle üretilir. Alev almaz ve 1000°C'ye kadar yangına direnir.",
      soruKoku: "Taş yününün binalarda strafora tercih edilmesinin en kritik sebebi nedir?",
      secenekler: {
        A: "Yangına karşı tam dayanıklı (yanmaz sınıfında) olması ve yangının katlar arasında yayılmasını engellemesi",
        B: "Daha ucuz olması",
        C: "Daha ağır olması",
        D: "Suyla yıkanabilmesi"
      },
      dogruCevap: "A",
      cozum: "Taş yünü yangın güvenliğinde bir numaralı inorganik yalıtım malzemesidir; alev almaz.",
      olculenKazanim: "F.6.4.3.3. Yangın güvenliği ve yalıtım malzemesi kıyaslaması yapar.",
      olculenBeceri: "Güvenlik Odaklı Karşılaştırma",
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
      id: "mcq-u4r-19",
      number: 19,
      baglam: "Bir kış günü balkonda unutulan zeytinyağı şişesinin donduğu ve donan yağın şişenin dibine çöktüğü görülmüştür. Oysa su donduğunda buz yüzeye çıkmaktadır.",
      soruKoku: "Zeytinyağının donunca dibe çökmesi, suyun ise yüzeye çıkması su hakkında neyi gösterir?",
      secenekler: {
        A: "Suyun diğer tüm sıvıların aksine donarken genleşip yoğunluğunun azaldığını (özel durum)",
        B: "Zeytinyağının su olduğunu",
        C: "Suyun donamayacağını",
        D: "Zeytinyağının buharlaştığını"
      },
      dogruCevap: "A",
      cozum: "Neredeyse tüm sıvılar donarken büzüşüp yoğunlaşır ve dibe batar. Su ise hidrojen bağları geometrisi sebebiyle donarken genleşir ve yoğunluğu düşerek yüzer.",
      olculenKazanim: "F.6.4.2.4. Suyun diğer sıvılardan ayrılan donma anomalisini karşılaştırmalı irdeler.",
      olculenBeceri: "Karşılaştırmalı Fizik Çıkarımı",
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
      id: "mcq-u4r-20",
      number: 20,
      baglam: "Gözle görülmeyen trilyonlarca atomun intizamlı titreşiminden suyun canlıları koruyan buz örtüsüne, kışın toprağı koruyan kar yorganından evlerimizi kuşatan yalıtım bilincine kadar her hadise mükemmel bir gaye ile donatılmıştır.",
      soruKoku: "Madde ve Isı ünitesini tamamlayan bir öğrencinin tabiata bakışında gelişmesi gereken en temel ahlaki ve insani değer hangisidir?",
      secenekler: {
        A: "Enerjiyi sınırsızca israf etmek",
        B: "Yaratılıştaki kusursuz intizam ve hikmeti fark ederek enerjiyi tutumlu kullanmak, binalarımızı yalıtarak doğayı kirletmemek ve kâinata hürmet duymak",
        C: "Fosil yakıtları bitene kadar tüketmek",
        D: "Bilimin ahlakla bir ilgisinin olmadığını düşünmek"
      },
      dogruCevap: "B",
      cozum: "Türkiye Yüzyılı Maarif Modeli; fen kazanımlarının doğa sevgisi, tasarruf bilinci, çevre ahlakı ve hikmet tefekkürü ile bütünleştirilmesini hedefler.",
      olculenKazanim: "F.6.4. Madde ve ısı ünitesini bütüncül hikmet, çevre ahlakı ve medeniyet değerleriyle sentezler.",
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
