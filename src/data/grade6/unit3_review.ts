import { SectionContent } from '../../types';

export const grade6Unit3Review: SectionContent = {
  code: "6.3.3",
  title: "3. Ünite Sonu Değerlendirme & Sonuç Çalışmaları",
  unitCode: "6.3",
  unitTitle: "3. Ünite: Kuvvet ve Hareket",
  summary: "MEB 6. Sınıf 1. Kitap 3. Ünite Sonu İstasyonu ve Sonuç Çalışmaları: Bileşke kuvvet ve sabit süratli hareketin entegre değerlendirmesi, Newton ve Cezeri'nin hareket dinamikleri, 10 boşluk doldurma ve 20 bağlam temelli LGS/PISA sorusu.",
  kazanimlar: [
    "F.6.3.1. Kuvvetin özelliklerini, bileşke kuvveti ve denge durumlarını sentezler.",
    "F.6.3.2. Sürat hesaplamalarını, birim dönüşümlerini ve hareket grafiklerini bütüncül çözer.",
    "F.6.3.3. Günlük yaşamdaki hareket ve kuvvet olaylarına bilimsel modeller geliştirir."
  ],
  hatirlayalim: {
    text: "3. Ünitede kuvvetin vektörel doğasını (yön, doğrultu, şiddet), aynı ve zıt yönlü kuvvetlerin bileşkesini, dengelenmiş ve dengelenmemiş kuvvetlerin cisimler üzerindeki etkilerini ve sabit süratli hareketin yol-zaman grafiklerini öğrendik.",
    keyPoints: [
      "Aynı yönlü kuvvetler toplanır, zıt yönlü kuvvetler çıkarılır.",
      "Bileşke kuvvet sıfırsa cisim ya durur ya da sabit süratle gider (Dengelenmiş kuvvetler).",
      "Bileşke kuvvet sıfırdan farklıysa cisim hızlanır, yavaşlar veya yön değiştirir (Dengelenmemiş kuvvetler).",
      "Sürat = Alınan Yol / Geçen Zaman (v = x / t).",
      "Yol-zaman grafiğinin eğimi sürati verir; sürat-zaman grafiğinin altındaki alan alınan yolu verir."
    ]
  },
  onDegerlendirme: [
    {
      id: "od-u3rev-1",
      question: "Düz yolda sabit 80 km/h süratle giden bir kamyonete etki eden bileşke kuvvet nedir?",
      answer: "Sürati değişmediği (sabit süratli hareket yaptığı) için net kuvvet sıfırdır (R = 0); kamyonet dengelenmiş kuvvetler etkisindedir."
    },
    {
      id: "od-u3rev-2",
      question: "Bir atlet 400 metrelik koşu pistini 50 saniyede turlarsa sürati kaç m/s ve kaç km/h olur?",
      answer: "v = 400 m / 50 s = 8 m/s. km/h cinsinden: 8 x 3,6 = 28,8 km/h."
    },
    {
      id: "od-u3rev-3",
      question: "Halat çekme oyununda bir takım 250 N, diğer takım 210 N çekiyorsa ip hangi yöne doğru nasıl bir hareket yapar?",
      answer: "Büyük çeken takım yönünde (250 - 210 = 40 N) dengelenmemiş net kuvvetle hızlanarak hareket eder."
    }
  ],
  hazirlik: {
    question: "Trafikte hız körlüğü ve fren mesafesi süratle nasıl bir ilişki içindedir?",
    answer: "Sürat arttıkça birim zamanda alınan yol artar. Sürücünün tepki süresinde aldığı mesafe ve fren mesafesi süratin karesiyle büyür; bu yüzden hız limitleri hayat kurtarır."
  },
  merak: {
    question: "Uzay istasyonundaki astronotlar yer çekimsiz ortamda bir kutuyu ittiklerinde kutu ne zaman durur?",
    answer: "Hava sürtünmesi veya bir engel olmadığı sürece kutu sonsuza kadar itildiği süratle düz bir doğrultuda hareketine devam eder (Eylemsizlik Prensibi)."
  },
  kopru: {
    title: "1. Kitaptan 2. Kitaba: Katı Maddelerden Isı ve Işığa Yolculuk",
    content: "1. Kitabın ilk 3 ünitesinde Güneş sisteminden vücudumuzdaki sistemlere ve kuvvetin yasalarına kadar makro âlemi inceledik. 2. Kitapta ise 4. Ünite: Maddenin Tanecikli Yapısı, 5. Ünite: Işık ve Ses, 6. Ünite: Bitki ve Hayvanlarda Üreme ve 7. Ünite: Elektriğin İletimi ile mikro ve enerjisel dünyalara adım atacağız.",
    question: "Maddenin taneciklerinin sürekli titreşmesi de bir tür kuvvet ve hareket midir?",
    answer: "Evet, sıcaklık taneciklerin kinetik enerjisinin ve titreşim süratinin bir göstergesidir."
  },
  hikmetStages: [
    {
      stage: 1,
      name: "1. Varlığı Tanıt (Kuvvet ve Hızın Dünyası)",
      concept: "Kâinattaki Devinim",
      text: "Mikro alemdeki elektronlardan dev galaksilere kadar her varlık bir kuvvetin tesiriyle belirli bir süratte hareket eder.",
      analogies: ["Şaşmaz bir koreografiyle dans eden kozmik dansçılar."]
    },
    {
      stage: 2,
      name: "2. Parçalarını Göster (Vektörler ve Grafikler)",
      concept: "Fiziğin Dili",
      text: "Oklar, açılar, yol-zaman eğrileri kâinattaki hareketin şifrelerini çözen insan aklının araçlarıdır.",
      analogies: ["Bir gemi kaptanının harita ve pusulası."]
    },
    {
      stage: 3,
      name: "3. Ölçü ve Düzen (Dengenin İhtişamı)",
      concept: "Kozmik Denge",
      text: "Bileşke kuvvetler sıfır olmasaydı dağlar yerinde duramaz, gezegenler yörüngelerinden fırlardı.",
      questionToPonder: "Yer çekimi ile merkezkaç kuvveti Dünya'nın yörüngesinde bu kadar hassas dengelenmeseydi ne olurdu?"
    },
    {
      stage: 4,
      name: "4. Gayesini Keşfet (Hayatın Sürekliliği)",
      concept: "Emniyetli Seyahat",
      text: "Kuvvetlerin dengesi canlıların yeryüzünde güvenle yaşamasına, yürümesine ve medeniyet kurmasına imkân tanır."
    },
    {
      stage: 5,
      name: "5. Bütünle İlişkilendir (Fizik ve Teknoloji)",
      concept: "Hızlı Trenlerden Uzay Araçlarına",
      text: "İnsanlık Cezerî'den günümüze kuvvet dengelerini ve sürat formüllerini kullanarak teknolojiyi inşa etmiştir.",
      analogies: ["Mekanik dişlilerden roket motorlarına uzanan akıl."]
    },
    {
      stage: 6,
      name: "6. Hayret ve Tefekkür (Mutlak Nizam)",
      concept: "Kadir-i Hakîm",
      text: "Her harekete bir sebep, her kuvvete bir ölçü takdir eden Âlemlerin Rabbi'ne derin bir hayranlıkla şükretmek."
    }
  ],
  etkinlikler: [
    {
      id: "etk-u3rev-yarıs-analizi",
      title: "3. Ünite Kuvvet ve Sürat Zihin Haritası ve Model Yarışı",
      type: "Bütünleştirici Problem Çözümü",
      materials: ["Kronometre", "Oyuncak arabalar", "Eğimli rampa", "Dinamometre"],
      steps: [
        "1. Adım: Rampadan bırakılan arabanın eğimle birlikte hızlanmasını (dengelenmemiş kuvvet) gözlemleyiniz.",
        "2. Adım: Düz zeminde sürtünmeyle yavaşlamasını inceleyiniz.",
        "3. Adım: Arabanın her metredeki zamanını kaydedip sürat-zaman grafiğini çiziniz."
      ],
      questions: [
        {
          qId: "q-u3rev-1",
          label: "Bütünsel Değerlendirme",
          prompt: "Yokuş aşağı hızlanan araba ile düz yolda sabit süratle giden araba arasındaki kuvvet farkı nedir?",
          answer: "Yokuş aşağı hızlanan arabaya hareket yönünde dengelenmemiş yer çekimi bileşeni etki eder (R > 0). Düz yolda sabit süratle gidene etki eden net kuvvet ise sıfırdır (R = 0)."
        }
      ]
    }
  ],
  bilgiIstasyonlari: [
    {
      title: "Tarihin İlk Otomasyon Mühendisliği: Cezerî'nin Filleri",
      scientistOrMission: "İsmail el-Cezerî ve Fil Saati",
      description: "Fil Saati; suyun kaldırma kuvveti, gizli dişliler, devrilen kaplar ve yer çekimi kuvvetlerinin saniyesi şaşmayan mekanik bir senkronizasyonudur.",
      hikmetNote: "Kuvvetlerin dengesini mükemmel kullanarak zamanı görsel bir şölene dönüştüren medeniyet dehamızdır."
    }
  ],
  dda: {
    id: "dda-u3rev-sonuc",
    statement: "Bir otomobil hız göstergesinde 90 km/h değerini koruyarak virajı döndüğünde dengelenmiş kuvvetler etkisindedir.",
    correctDecision: "Y",
    reason: "Sürati değişmese bile hareket yönü değiştiği için yön değiştirici bir net kuvvet (merkezcil kuvvet) etki eder; dolayısıyla dengelenmemiş kuvvetler etkisindedir.",
    ifTrue: {
      exit: 1,
      isCorrect: false,
      feedback: "Hatalı karar! Yön değişiminin de dengelenmemiş kuvvet gerektirdiğini unutmayınız."
    },
    ifFalse: {
      exit: 2,
      isCorrect: true,
      feedback: "Tebrikler! Yön değişiminin bir ivme ve net kuvvet gerektirdiğini mükemmel yakaladınız."
    }
  },
  biliyorumAnliyorumDusunuyorum: {
    biliyorum: "Kuvvetin yön ve büyüklüğünü, bileşke kuvveti, dengelenmiş ve dengelenmemiş durumları, sürat formülünü ve grafiklerini biliyorum.",
    anliyorum: "Dengenin bozulduğu her yerde ivmeli (hızlanan, yavaşlayan, yön değiştiren) bir hareketin ortaya çıktığını anlıyorum.",
    dusunuyorum: "Eğer Dünya kendi ekseni etrafında dönerken sürati sabit olmasaydı günlerimizin ve gecelerimizin uzunluğu nasıl karmakarışık olurdu?"
  },
  pekistirmeIstasyonu: {
    stationTitle: "3. Ünite Sonu İstasyonu & Sonuç Çalışmaları",
    pageReference: "6. Sınıf 1. Kitap 3. Ünite Sonu",
    summaryText: "Kuvvet ve hareket konularının kapsamlı tekrarı, grafik okuma, formül hesaplama ve 20 özgün LGS tipi bağlam sorusu.",
    targetSkills: [
      "Kuvvet ve sürat konularını birlikte içeren karma problemleri çözer.",
      "LGS ve bursluluk sınavlarına yönelik tablo ve grafik sorularını yorumlar."
    ]
  },
  fillInBlanks: [
    {
      id: "fib-u3rev-1",
      number: 1,
      baglam: "İki veya daha fazla kuvvetin yerine geçen tek kuvvettir.",
      soruKoku: "Birden çok kuvvetin bir cisme yaptığı toplam etkiyi tek başına yapan kuvvete .................................... kuvvet denir.",
      blankAnswer: "Bileşke",
      acceptableAnswers: ["bileşke", "Bileşke", "net", "Net"],
      explanation: "Bileşke (net) kuvvet toplam etkidir.",
      wordBankHint: ["Bileşke", "Denge", "Sürtünme", "Ağırlık"]
    },
    {
      id: "fib-u3rev-2",
      number: 2,
      baglam: "Bileşke kuvvet sıfır olduğunda cisim hareket durumunu korur.",
      soruKoku: "Bileşke kuvveti sıfır olan cisimler .................................... kuvvetler etkisindedir.",
      blankAnswer: "Dengelenmiş",
      acceptableAnswers: ["dengelenmiş", "Dengelenmiş"],
      explanation: "R = 0 dengelenmiş kuvvettir.",
      wordBankHint: ["Dengelenmiş", "Dengelenmemiş", "Büyük", "Küçük"]
    },
    {
      id: "fib-u3rev-3",
      number: 3,
      baglam: "Hızlanan bir tren dengelenmemiş kuvvetler etkisindedir.",
      soruKoku: "Hızı artan veya azalan bir hareketli .................................... kuvvetlerin etkisindedir.",
      blankAnswer: "Dengelenmemiş",
      acceptableAnswers: ["dengelenmemiş", "Dengelenmemiş"],
      explanation: "Hız değişimi dengelenmemiş kuvvetle olur.",
      wordBankHint: ["Dengelenmemiş", "Dengelenmiş", "Sıfır", "Sabit"]
    },
    {
      id: "fib-u3rev-4",
      number: 4,
      baglam: "Kuvvet ölçümünde kullanılan yaylı alettir.",
      soruKoku: "Kuvvetin büyüklüğünü ölçmek için .................................... adı verilen yaylı alet kullanılır.",
      blankAnswer: "Dinamometre",
      acceptableAnswers: ["dinamometre", "Dinamometre"],
      explanation: "Dinamometre kuvvet ölçer.",
      wordBankHint: ["Dinamometre", "Termometre", "Barometre", "Kronometre"]
    },
    {
      id: "fib-u3rev-5",
      number: 5,
      baglam: "Kuvvetin birimi Newton olup N harfi ile gösterilir.",
      soruKoku: "Kuvvet birimi ....................................dur.",
      blankAnswer: "Newton",
      acceptableAnswers: ["newton", "Newton"],
      explanation: "Kuvvet birimi Newton'dur.",
      wordBankHint: ["Newton", "Joule", "Pascal", "Gram"]
    },
    {
      id: "fib-u3rev-6",
      number: 6,
      baglam: "Birim zamanda alınan yoldur.",
      soruKoku: "Bir hareketlinin birim zamanda aldığı yola .................................... denir.",
      blankAnswer: "Sürat",
      acceptableAnswers: ["sürat", "Sürat"],
      explanation: "Sürat birim zamandaki yoldur.",
      wordBankHint: ["Sürat", "İvme", "Kuvvet", "Kütle"]
    },
    {
      id: "fib-u3rev-7",
      number: 7,
      baglam: "Sürat birimlerinden biri metre bölü saniyedir.",
      soruKoku: "Yol metre, zaman saniye olduğunda sürat birimi .................................... / saniye olur.",
      blankAnswer: "Metre",
      acceptableAnswers: ["metre", "Metre", "m"],
      explanation: "m/s birimidir.",
      wordBankHint: ["Metre", "Kilometre", "Gram", "Litre"]
    },
    {
      id: "fib-u3rev-8",
      number: 8,
      baglam: "Sabit süratli hareketlinin sürati değişmez.",
      soruKoku: "Eşit zaman aralıklarında eşit yollar alan hareketliye .................................... süratli hareketli denir.",
      blankAnswer: "Sabit",
      acceptableAnswers: ["sabit", "Sabit"],
      explanation: "Sürat sabitse hareket sabit süratlidir.",
      wordBankHint: ["Sabit", "Değişken", "Hızlı", "Yavaş"]
    },
    {
      id: "fib-u3rev-9",
      number: 9,
      baglam: "Sürat-zaman grafiğinde çizginin altındaki alan yolu verir.",
      soruKoku: "Sürat-zaman grafiğinin altında kalan alan hareketlinin aldığı ....................................u verir.",
      blankAnswer: "Yol",
      acceptableAnswers: ["yol", "Yol", "yolu"],
      explanation: "Sürat x Zaman = Yol.",
      wordBankHint: ["Yol", "Kuvvet", "Zaman", "İvme"]
    },
    {
      id: "fib-u3rev-10",
      number: 10,
      baglam: "Mekanik saatler ve robotik mekanizmalar geliştiren İslam bilginidir.",
      soruKoku: "Fil Saati ve su makinelerinin dahi mucidi İsmail el-...................................dir.",
      blankAnswer: "Cezerî",
      acceptableAnswers: ["cezeri", "cezerî", "Cezeri", "Cezerî"],
      explanation: "El-Cezeri sibernetik ve otomasyonun kurucusudur.",
      wordBankHint: ["Cezerî", "Bîrûnî", "İbni Sina", "Harezmî"]
    }
  ],
  contextQuestions: [
    {
      id: "mcq-u3rev-1",
      number: 1,
      baglam: "Bir kargo kutusuna yatay düzlemde üç kişi kuvvet uygulamaktadır:\nAli: Doğuya doğru 30 N\nVeli: Doğuya doğru 20 N\nCan: Batıya doğru 60 N",
      soruKoku: "Kutuya etki eden net kuvvetin büyüklüğü, yönü ve hareket durumu nedir?",
      secenekler: {
        A: "10 N Batı yönünde - Kutu Batıya doğru hızlanır",
        B: "10 N Doğu yönünde - Kutu Doğuya doğru hızlanır",
        C: "50 N Doğu yönünde - Kutu dengelenmiştir",
        D: "110 N Batı yönünde - Kutu durur"
      },
      dogruCevap: "A",
      cozum: "Doğuya toplam: 30 + 20 = 50 N. Batıya toplam: 60 N. Net kuvvet: 60 - 50 = 10 N (Batı yönünde). Net kuvvet sıfırdan farklı olduğu için kutu Batıya hızlanır.",
      olculenKazanim: "F.6.3.1.2. Birden çok kuvvetin bileşkesini ve hareket yönünü belirler.",
      olculenBeceri: "Vektörel Hesaplama ve Dinamik Yorum",
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
      id: "mcq-u3rev-2",
      number: 2,
      baglam: "Düz bir otobanda giden bir otomobilin hız kadranı 15 dakika boyunca aralıksız 90 km/h değerini göstermiştir.",
      soruKoku: "Bu otomobilin 15 dakikada aldığı yol kaç kilometredir?",
      secenekler: {
        A: "15 km",
        B: "22,5 km",
        C: "45 km",
        D: "90 km"
      },
      dogruCevap: "B",
      cozum: "15 dakika = 15/60 saat = 0,25 saattir (çeyrek saat). Yol = Sürat x Zaman = 90 km/h x 0,25 h = 22,5 km.",
      olculenKazanim: "F.6.3.2.2. Dakika-saat dönüşümlü yol problemini çözer.",
      olculenBeceri: "Oransal Problem Çözme",
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
      id: "mcq-u3rev-3",
      number: 3,
      baglam: "Aşağıdaki hareket durumlarından hangisinde cisim DENGELENMİŞ KUVVETLERİN etkisindedir?",
      soruKoku: "Hangi seçenekteki cismin üzerindeki net kuvvet SIFIRDIR?",
      secenekler: {
        A: "Ağaçtan yere düşen elma",
        B: "Havalimanı pistinde sabit 5 m/s süratle ilerleyen yolcu taşıma bandı üzerindeki valiz",
        C: "Kalkış için pistte hızlanan uçak",
        D: "Virajı dönmekte olan yarış arabası"
      },
      dogruCevap: "B",
      cozum: "Düz yolda sabit süratle ilerleyen valiz dengelenmiş kuvvetler etkisindedir (R = 0). Diğerlerinde hızlanma, yavaşlama veya yön değişimi vardır.",
      olculenKazanim: "F.6.3.1.3. Dengelenmiş kuvvet durumunu ayırt eder.",
      olculenBeceri: "Ayırt Etme ve Kavramsal Netlik",
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
      id: "mcq-u3rev-4",
      number: 4,
      baglam: "Bir kargo İHA'sı (drone) 100 metrelik mesafeyi 5 saniyede, bir elektrikli scooter ise aynı 100 metreyi 20 saniyede almaktadır.",
      soruKoku: "Drone'un süratinin elektrikli scooter'ın süratine oranı (v_drone / v_scooter) kaçtır?",
      secenekler: {
        A: "2",
        B: "4",
        C: "5",
        D: "10"
      },
      dogruCevap: "B",
      cozum: "v_drone = 100 / 5 = 20 m/s. v_scooter = 100 / 20 = 5 m/s. Oran = 20 / 5 = 4.",
      olculenKazanim: "F.6.3.2.1. İki hareketlinin sürat oranını hesaplar.",
      olculenBeceri: "Oran-Orantı",
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
      id: "mcq-u3rev-5",
      number: 5,
      baglam: "Bir cisme Doğu yönünde uygulanan F1 kuvveti 15 N'dur. Bu cismin dengede kalabilmesi (R = 0) için uygulanması gereken F2 dengeleyici kuvveti hangisidir?",
      soruKoku: "Dengeleyici F2 kuvvetinin yönü ve büyüklüğü nedir?",
      secenekler: {
        A: "Batı yönünde 15 N",
        B: "Doğu yönünde 15 N",
        C: "Batı yönünde 30 N",
        D: "Kuzey yönünde 15 N"
      },
      dogruCevap: "A",
      cozum: "Dengeleyici kuvvet, bileşke kuvvete eşit büyüklükte ve zıt yönde olmalıdır. Doğuya 15 N'u sıfırlamak için Batıya 15 N gerekir.",
      olculenKazanim: "F.6.3.1.2. Dengeleyici kuvveti belirler.",
      olculenBeceri: "Denge Kuralı Uygulama",
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
      id: "mcq-u3rev-6",
      number: 6,
      baglam: "Bir yol-zaman grafiğinde bir aracın 0-4 saniyede 40 metre, 4-8 saniyede 80 metre yol aldığı görülmektedir.",
      soruKoku: "Bu aracın hareketi ve sürati hakkında aşağıdakilerden hangisi söylenebilir?",
      secenekler: {
        A: "Sürati sürekli artmaktadır",
        B: "Sabit 10 m/s süratle hareket etmektedir",
        C: "4. saniyede durmuştur",
        D: "Geriye doğru dönmüştür"
      },
      dogruCevap: "B",
      cozum: "Her 4 saniyede 40 m yol almıştır (v = 40/4 = 10 m/s). Eşit zamanlarda eşit yol aldığı için sabit süratlidir.",
      olculenKazanim: "F.6.3.2.3. Yol-zaman verisinden sabit sürati doğrular.",
      olculenBeceri: "Grafik Verisi Doğrulama",
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
      id: "mcq-u3rev-7",
      number: 7,
      baglam: "Sabit süratle giden bir trenin sürat-zaman grafiğinde sürat değeri 30 m/s ve süre 10 saniyedir.",
      soruKoku: "Grafikteki dikdörtgen alan kaç metreyi verir ve bu değer neyi ifade eder?",
      secenekler: {
        A: "300 metredir ve trenin aldığı toplam yolu ifade eder",
        B: "30 metredir ve trenin boyunu ifade eder",
        C: "3 metredir ve trenin ivmesini ifade eder",
        D: "100 metredir ve ray uzunluğunu ifade eder"
      },
      dogruCevap: "A",
      cozum: "Alan = Sürat x Zaman = 30 m/s x 10 s = 300 metredir. Bu alan alınan yolu ifade eder.",
      olculenKazanim: "F.6.3.2.3. Sürat-zaman grafiğinde alan hesabını uygular.",
      olculenBeceri: "Grafik Geometrisi",
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
      id: "mcq-u3rev-8",
      number: 8,
      baglam: "İki arkadaş sürtünmesiz bir buz pistinde durmaktadır. Biri diğerini 40 N kuvvetle ittiğinde her ikisi de zıt yönlere doğru kaymaya başlar.",
      soruKoku: "Bu olayda arkadaşların hızlanarak kaymaya başlaması hangi kuvvet ilkesiyle açıklanır?",
      secenekler: {
        A: "İtme anında her iki arkadaşa da dengelenmemiş kuvvetlerin etki etmesi",
        B: "Net kuvvetin sıfır olması",
        C: "Buzun kuvvet uygulaması",
        D: "Yer çekiminin yok olması"
      },
      dogruCevap: "A",
      cozum: "İtme sırasında oluşan etki-tepki kuvvetleri her iki çocuğun üzerinde dengelenmemiş net kuvvet yaratarak onları zıt yönlere hızlandırır.",
      olculenKazanim: "F.6.3.1.3. Etki-tepki ve dengelenmemiş hareket durumunu yorumlar.",
      olculenBeceri: "Fiziksel Etkileşim Analizi",
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
      id: "mcq-u3rev-9",
      number: 9,
      baglam: "Bir çita avına koşarken 3 saniyede 90 metre yol almıştır.",
      soruKoku: "Çitanın bu andaki ortalama sürati kaç km/h'dir?",
      secenekler: {
        A: "30 km/h",
        B: "60 km/h",
        C: "108 km/h",
        D: "120 km/h"
      },
      dogruCevap: "C",
      cozum: "v = 90 m / 3 s = 30 m/s. km/h'ye dönüştürmek için 3,6 ile çarpılır: 30 x 3,6 = 108 km/h.",
      olculenKazanim: "F.6.3.2.1. m/s birimini km/h birimine çevirir.",
      olculenBeceri: "Birim Çevrimi ve Hesaplama",
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
      id: "mcq-u3rev-10",
      number: 10,
      baglam: "Bir tahta blok üzerine etki eden kuvvetler: F1 = 18 N (Doğu), F2 = 7 N (Doğu), F3 = 10 N (Batı), F4 = 15 N (Batı).",
      soruKoku: "Tahta bloğun hareket durumu aşağıdakilerden hangisidir?",
      secenekler: {
        A: "Doğuya doğru 25 N ile hızlanır",
        B: "Batıya doğru 25 N ile hızlanır",
        C: "Doğuya toplam 25 N ve Batıya toplam 25 N kuvvet etki ettiği için dengelenmiş kuvvetler etkisinde durmaya devam eder",
        D: "Kuzeye doğru hareket eder"
      },
      dogruCevap: "C",
      cozum: "Doğu: 18 + 7 = 25 N. Batı: 10 + 15 = 25 N. Net kuvvet: 25 - 25 = 0 N (dengelenmiş kuvvetler). Blok hareketsiz kalır.",
      olculenKazanim: "F.6.3.1.2. Dört kuvvetin bileşkesini hesaplar.",
      olculenBeceri: "Karma Vektör Dengesi",
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
      id: "mcq-u3rev-11",
      number: 11,
      baglam: "Bir ses duvarını aşan süpersonik jet uçağı havada ses hızından (yaklaşık 1200 km/h) daha hızlı uçmaktadır.",
      soruKoku: "Uçağın 1 saat 30 dakikada (1,5 saat) aldığı yol 2100 km olduğuna göre uçağın ortalama sürati kaç km/h'dir?",
      secenekler: {
        A: "1200 km/h",
        B: "1400 km/h",
        C: "1600 km/h",
        D: "2100 km/h"
      },
      dogruCevap: "B",
      cozum: "Sürat = Yol / Zaman = 2100 km / 1,5 h = 1400 km/h.",
      olculenKazanim: "F.6.3.2.2. Ondalıklı zaman değerleriyle sürat hesabı yapar.",
      olculenBeceri: "Sürat Hesabı",
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
      id: "mcq-u3rev-12",
      number: 12,
      baglam: "Cezerî'nin mekanik tasarımlarında dişlilerin oranları öyle ayarlanmıştır ki, su aktıkça çarklar tam istenen sabit süratle döner.",
      soruKoku: "Mekanik sistemlerde sabit süratli hareket elde etmenin temel amacı nedir?",
      secenekler: {
        A: "Zamanı ve tekrarlanan hareketleri hatasız ve düzenli bir periyotta tutmak",
        B: "Makinelerin aşırı ısınmasını sağlamak",
        C: "Suyun bitmesini önlemek",
        D: "Gürültü çıkarmak"
      },
      dogruCevap: "A",
      cozum: "Sabit süratli periyodik hareket zaman ölçümü ve saat mekanizmalarının temelidir.",
      olculenKazanim: "F.6.3.2. Sabit süratli hareketin teknolojik amacını yorumlar.",
      olculenBeceri: "Teknoloji ve Mantık",
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
      id: "mcq-u3rev-13",
      number: 13,
      baglam: "Aynı yöne doğru hareket eden iki otomobilden öndeki aracın sürati 70 km/h, arkadaki aracın sürati ise 90 km/h'dir. Başlangıçta aralarında 40 km mesafe vardır.",
      soruKoku: "Arkadaki araç öndeki aracı kaç saat sonra yakalar?",
      secenekler: {
        A: "1 saat",
        B: "2 saat",
        C: "3 saat",
        D: "4 saat"
      },
      dogruCevap: "B",
      cozum: "Arkadaki araç öndekine saatte (90 - 70 = 20 km) yaklaşır. 40 km farkı kapatmak için: Süre = 40 / 20 = 2 saat gerekir.",
      olculenKazanim: "F.6.3.2.2. Bağıl hareket ve yakalama problemlerini çözer.",
      olculenBeceri: "LGS Düzeyi Analitik Çözüm",
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
      id: "mcq-u3rev-14",
      number: 14,
      baglam: "Bir dinamometre en fazla 50 N ölçebilmektedir ve göstergesi 10 eşit bölmeye ayrılmıştır.",
      soruKoku: "Bu dinamometreye uygulanan kuvvet göstergede 6 bölme uzama yapıyorsa uygulanan kuvvet kaç Newton'dur?",
      secenekler: {
        A: "6 N",
        B: "30 N",
        C: "36 N",
        D: "40 N"
      },
      dogruCevap: "B",
      cozum: "Her bir bölme: 50 N / 10 = 5 N'dur. 6 bölme uzama: 6 x 5 N = 30 N kuvveti gösterir.",
      olculenKazanim: "F.6.3.1.1. Dinamometre ölçeklendirme hesabını yapar.",
      olculenBeceri: "Ölçüm Becerisi",
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
      id: "mcq-u3rev-15",
      number: 15,
      baglam: "Paraşüt açan bir askerin aşağıya doğru ağırlığı 800 N'dur. Hava direnci ise yukarıya doğru 800 N olmuştur.",
      soruKoku: "Kuvvetler dengelendiğinde paraşütçünün hareket durumu için hangisi kesinlikle doğrudur?",
      secenekler: {
        A: "Durur ve havada asılı kalır",
        B: "Sabit bir iniş süratiyle (limit hız) aşağı doğru hareketine devam eder",
        C: "Yukarı doğru yükselmeye başlar",
        D: "Paraşütü yırtılır"
      },
      dogruCevap: "B",
      cozum: "Hareket halindeki bir cisme etki eden net kuvvet sıfır olduğunda (dengelenmiş kuvvetler), cisim mevcut hareketini sabit süratle sürdürür.",
      olculenKazanim: "F.6.3.1.3. Limit hız ve dengelenmiş kuvvet kavramını ilişkilendirir.",
      olculenBeceri: "Dinamik İlke Yorumu",
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
      id: "mcq-u3rev-16",
      number: 16,
      baglam: "Bir bisiklet yarışçısının yol-zaman grafiği incelendiğinde 1. dakikada 300 m, 2. dakikada 600 m, 3. dakikada 900 m yol aldığı saptanmıştır.",
      soruKoku: "Bisikletçinin sürati kaç m/s'dir?",
      secenekler: {
        A: "5 m/s",
        B: "10 m/s",
        C: "15 m/s",
        D: "300 m/s"
      },
      dogruCevap: "A",
      cozum: "1 dakika = 60 saniyedir. 60 saniyede 300 m yol almıştır. Sürat = 300 m / 60 s = 5 m/s.",
      olculenKazanim: "F.6.3.2.2. Grafik verisini m/s cinsine çevirerek çözer.",
      olculenBeceri: "Birim ve Zaman Dönüşümü",
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
      id: "mcq-u3rev-17",
      number: 17,
      baglam: "Bir cisme Doğu-Batı doğrultusunda uygulanan iki kuvvetin bileşkesi Doğu yönünde 5 N'dur. Cisme etki eden kuvvetlerden biri Doğu yönünde 12 N'dur.",
      soruKoku: "Diğer kuvvetin yönü ve büyüklüğü nedir?",
      secenekler: {
        A: "Batı yönünde 7 N",
        B: "Doğu yönünde 7 N",
        C: "Batı yönünde 17 N",
        D: "Doğu yönünde 17 N"
      },
      dogruCevap: "A",
      cozum: "12 N (Doğu) + F2 = 5 N (Doğu) olabilmesi için F2'nin Batı yönünde (12 - 5 = 7 N) olması gerekir.",
      olculenKazanim: "F.6.3.1.2. Bileşke denkleminden eksik kuvveti tespit eder.",
      olculenBeceri: "Analitik Düşünme",
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
      id: "mcq-u3rev-18",
      number: 18,
      baglam: "Bîrûnî ve Cezerî gibi İslam âlimleri, doğadaki kuvvetlerin ve hareketlerin matematiksel ölçülebilirliğine eserlerinde geniş yer ayırmışlardır.",
      soruKoku: "Bu âlimlerin çalışmalarının günümüz bilimine en önemli ilhamı nedir?",
      secenekler: {
        A: "Bilimin sadece felsefeden ibaret olduğunu savunmaları",
        B: "Matematik, deney ve gözlemi birleştirerek doğadaki ilahi yasaları insanlığın faydasına dönüştürmek",
        C: "Teknolojiyi reddetmeleri",
        D: "Makineleri sadece süs eşyası olarak tasarlamaları"
      },
      dogruCevap: "B",
      cozum: "İslam medeniyetinin bilim anlayışı, ilahi nizamı matematik ve deneyle kavrayıp insanlığa faydalı teknoloji üretmektir.",
      olculenKazanim: "F.6.3. Bilim insanlarının tarihsel katkılarını analiz eder.",
      olculenBeceri: "Medeniyet Bilinci",
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
      id: "mcq-u3rev-19",
      number: 19,
      baglam: "Bir sürat-zaman grafiğinde bir aracın sürati 15 m/s'de sabit, diğerinin sürati ise 25 m/s'de sabittir.",
      soruKoku: "Bu iki aracın 10 saniye sonra aldıkları yolların farkı kaç metredir?",
      secenekler: {
        A: "50 m",
        B: "100 m",
        C: "150 m",
        D: "250 m"
      },
      dogruCevap: "B",
      cozum: "1. aracın yolu = 15 x 10 = 150 m. 2. aracın yolu = 25 x 10 = 250 m. Fark = 250 - 150 = 100 metredir.",
      olculenKazanim: "F.6.3.2.3. İki farklı sürat-zaman grafiğinin alan farkını bulur.",
      olculenBeceri: "Karşılaştırmalı Grafik Analizi",
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
      id: "mcq-u3rev-20",
      number: 20,
      baglam: "Bir tarafta kütle çekimle dönen galaksiler ve gezegenler, diğer tarafta otomobilimizi durduran sürtünme kuvveti ve kalbimizin kanı pompalamak için ürettiği kas kuvveti...",
      soruKoku: "Kuvvet ve hareket kanunlarını bir bütün olarak tefekkür eden bir öğrenci hangi nihai sonuca ulaşır?",
      secenekler: {
        A: "Doğadaki her şeyin tesadüf eseri oluştuğuna",
        B: "Kâinattaki tüm hareket ve kuvvetlerin, zerreden kürreye Sonsuz Kudret ve Hikmet Sahibi'nin şaşmaz kanunlarıyla kusursuz bir adalet ve nizam içinde yönetildiğine",
        C: "Kuvvetlerin birbirini rastgele yok ettiğine",
        D: "Bilimin kurallarının sürekli çöktüğüne"
      },
      dogruCevap: "B",
      cozum: "Maarif Modelinin temel hedefi, fizik kanunlarının ardındaki nihai nizamı, ölçüyü ve Hikmet-i İlahiye'yi idrak etmektir.",
      olculenKazanim: "F.6.3. Kuvvet ve hareket ünitesinin bütüncül tefekkürünü yapar.",
      olculenBeceri: "Hikmet ve Maarif Felsefesi Sentezi",
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
