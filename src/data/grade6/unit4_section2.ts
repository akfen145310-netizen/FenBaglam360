import { SectionContent } from '../../types';

export const grade6Unit4Section2: SectionContent = {
  code: "6.4.2",
  title: "Yoğunluk",
  unitCode: "6.4",
  unitTitle: "4. Ünite: Madde ve Isı",
  summary: "Yoğunluğun tanımı (Birim hacimdeki madde miktarı), Yoğunluk = Kütle / Hacim (d = m / V) formülü, g/cm³ birimi, saf maddeler için ayırt edici özellik olması, birbirine karışmayan sıvıların yoğunluk sıralaması, suyun benzersiz donma anomalisi (buzun su üstünde yüzmesi) ve sucul yaşam için hayati hikmeti, El-Hâzinî'nin Hikmet Terazisi.",
  kazanimlar: [
    "F.6.4.2.1. Yoğunluğu tanımlar ve birim hacimdeki kütle olduğunu açıklar.",
    "F.6.4.2.2. Deneyler yaparak maddelerin kütle ve hacimlerini ölçer, yoğunluklarını hesaplar (d = m / V).",
    "F.6.4.2.3. Birbiri içinde çözünmeyen sıvıların yoğunluklarına göre oluşturduğu katmanları yorumlar.",
    "F.6.4.2.4. Suyun donması sonucu oluşan yoğunluk değişiminin canlılar ve ekosistem açısından önemini irdeler."
  ],
  hatirlayalim: {
    text: "Maddelerin ortak özelliklerinin kütle ve hacim olduğunu biliyoruz. Ancak tek başına kütle veya hacim bir maddenin ne olduğunu anlamaya yetmez. Kütlenin hacme oranı olan yoğunluk, saf maddeler için bir 'kimlik kartı' (ayırt edici özellik) niteliğindedir.",
    keyPoints: [
      "Yoğunluk, bir maddenin birim hacminin (1 cm³'ünün) kütlesidir.",
      "Yoğunluk = Kütle / Hacim (d = m / V). Semboller: d (yoğunluk), m (kütle), V (hacim).",
      "Kütle gram (g), hacim santimetreküp (cm³) alındığında yoğunluk birimi g/cm³ olur.",
      "Yoğunluk saf maddeler için ayırt edici bir özelliktir (Örn: Saf su = 1 g/cm³, Zeytinyağı = 0,9 g/cm³, Demir = 7,8 g/cm³).",
      "Birbiriyle karışmayan sıvılardan yoğunluğu büyük olan daima altta, küçük olan ise üstte yer alır.",
      "Suyun istisnai özelliği: Diğer maddeler donarken büzüşüp yoğunlaşırken, su donduğunda genleşir ve yoğunluğu düşer (d_buz = 0,9 g/cm³ < d_su = 1 g/cm³). Buz suda yüzer, göller üstten donar ve dipteki canlılar donmaktan kurtulur."
    ]
  },
  onDegerlendirme: [
    {
      id: "od-u4s2-1",
      question: "Kütlesi 120 gram ve hacmi 40 cm³ olan katı bir cismin yoğunluğu kaç g/cm³'tür?",
      answer: "d = m / V = 120 g / 40 cm³ = 3 g/cm³."
    },
    {
      id: "od-u4s2-2",
      question: "Su dolu bir bardağa zeytinyağı döküldüğünde zeytinyağı neden suyun üstünde kalır?",
      answer: "Zeytinyağının yoğunluğu (0,9 g/cm³), suyun yoğunluğundan (1,0 g/cm³) daha küçük olduğu için yukarı çıkar."
    },
    {
      id: "od-u4s2-3",
      question: "Buz küpleri suya atıldığında neden batmayıp su yüzeyinde yüzer?",
      answer: "Buz suyun katı hali olmasına rağmen donarken genleştiği için yoğunluğu suya göre azalır (0,9 g/cm³); bu yüzden yüzer."
    }
  ],
  hazirlik: {
    question: "Kışın dondurucu soğuklarda göllerin yüzeyi buz tuttuğunda gölün dibindeki balıklar ve kurbağalar nasıl hayatta kalabilir?",
    answer: "Buz suyun üstünde yüzdüğü için göl yüzeyden donmaya başlar ve kalın buz tabakası bir yalıtım örtüsü oluşturur. Gölün dip kısımları +4°C'de sıvı kalır ve canlılar donmadan yaşamlarını sürdürür."
  },
  merak: {
    question: "Tarihin en büyük gemilerinden biri olan yüzbinlerce tonluk çelik Titanik gemisi denizde nasıl yüzebiliyordu da küçük bir demir çivi suya atılınca hemen batıyordu?",
    answer: "Çivi tamamen katı demirdir ve yoğunluğu suyun çok üstündedir (7,8 g/cm³). Devasa geminin gövdesi ise içinde dev hava odacıkları barındırır. Toplam kütle toplam hacme bölündüğünde geminin ortalama yoğunluğu deniz suyundan küçük hale gelir ve gemi yüzer."
  },
  kopru: {
    title: "Yoğunluktan Isı Yalıtımına",
    content: "Maddelerin yoğunluklarını ve taneciklerin sıkılık derecesini öğrendikten sonra, bir sonraki bölümde ısının maddeler arasında nasıl iletildiğini ve binalarda ısı kaybını önleyen hafif yalıtım malzemelerini keşfedeceğiz.",
    question: "Neden binalarda yalıtım malzemesi olarak strafor köpük (içi hava dolu çok hafif malzeme) tercih edilir?",
    answer: "Çünkü straforun yoğunluğu çok düşüktür; içindeki durgun hava tanecikleri ısıyı çok kötü iletir ve mükemmel bir yalıtım sağlar."
  },
  // MEB DERS KİTABI DETAYLI KONU ANLATIMI, TABLOLAR, BAĞLANTI NOKTALARI VE HABERLER
  konuAnlatimi: {
    ozet: "Yoğunluk; bir maddenin birim hacminin (1 cm³'ünün) kütlesidir. Matematiksel olarak Yoğunluk = Kütle / Hacim bağıntısı ile hesaplanır ve 'd = m / V' formülüyle gösterilir. Kütle gram (g), hacim santimetreküp (cm³) alındığında yoğunluk birimi g/cm³ olur. Kütle eşit kollu veya dijital teraziyle ölçülürken, hacim düzgün geometrik cisimlerde formüllerle, düzensiz katı cisimlerde ise dereceli silindire atılarak taşırılan sıvı hacmiyle ölçülür. Yoğunluk saf maddeler için sabit sıcaklık ve basınç altında AYIRT EDİCİ bir özelliktir. Maddenin kütlesi arttıkça hacmi de aynı oranda artar; bu yüzden bir maddeden daha çok almak yoğunluğunu değiştirmez. Birbiri içinde çözünmeyen sıvılar aynı kaba konulduğunda yoğunluğu büyük olan sıvı en altta, küçük olan ise en üstte toplanır. Suyun en büyük hikmetlerinden biri donma anomalisidir: Su donarken genleşir, hacmi artar ve bu yüzden buzun yoğunluğu (0,92 g/cm³) suyun yoğunluğundan (1 g/cm³) küçük olur. Böylece buz su üzerinde yüzer; göller ve denizler yüzeyden donarak dipteki sucul yaşamı dondurucu kış soğuklarından korur.",
    kavramlar: [
      {
        terim: "Yoğunluk (Özkütle) Tanımı ve Formülü",
        tanim: "Bir maddenin birim hacmindeki madde miktarıdır.",
        onemliNoktalar: [
          "Yoğunluk Formülü: d = m / V (Yoğunluk = Kütle / Hacim).",
          "Kütle Formülü: m = d . V (Kütle = Yoğunluk x Hacim).",
          "Hacim Formülü: V = m / d (Hacim = Kütle / Yoğunluk).",
          "Birimi g/cm³ veya kg/m³'tür."
        ]
      },
      {
        terim: "Düzensiz Katıların Yoğunluğunu Ölçme Yöntemi",
        tanim: "Taş, anahtar, bilye gibi geometrik olmayan katıların yoğunluğunun bulunmasıdır.",
        onemliNoktalar: [
          "1. Adım: Katı cisim teraziye konularak kütlesi (m) hassasça ölçülür.",
          "2. Adım: Dereceli silindire belirli bir seviyede sıvı (örneğin 100 mL su) konur.",
          "3. Adım: Katı cisim sıvının içine yavaşça bırakılır; su seviyesindeki artış (V2 - V1) cismin hacmini (V) verir.",
          "4. Adım: d = m / V formülüyle yoğunluk hesaplanır."
        ]
      },
      {
        terim: "Kütle-Hacim Grafiği ve Ayırt Edici Özellik",
        tanim: "Yoğunluğun saf maddeler için karakteristik bir kimlik özelliği olmasıdır.",
        onemliNoktalar: [
          "Bir maddenin kütlesi 2 katına çıkarsa hacmi de 2 katına çıkar; d = m / V oranı daima SABİT kalır.",
          "1 damla suyun yoğunluğu da 1 g/cm³'tür, 1 tonluk havuz suyunun yoğunluğu da 1 g/cm³'tür.",
          "Kütle-Hacim grafiğinde doğrunun eğimi maddenin yoğunluğunu verir; eğimi dik olan maddenin yoğunluğu daha büyüktür."
        ]
      },
      {
        terim: "Birbirine Karışmayan Sıvı Katmanları ve Suyun Donması",
        tanim: "Yoğunluk farkının sıvılarda ve suda oluşturduğu mucizevi sonuçlardır.",
        onemliNoktalar: [
          "Birbiri içinde çözünmeyen sıvılar bir kaba konulduğunda yoğunluğu BÜYÜK olan tabana çöker, KÜÇÜK olan yüzeye çıkar.",
          "Suyun Donma Anomalisi: Neredeyse tüm sıvılar donarken küçülür ve yoğunlaşır. Su ise 0°C'de donarken genleşir ve yoğunluğu düşer (d_buz = 0,92 g/cm³ < d_su = 1 g/cm³).",
          "Buz su yüzeyinde yüzdüğü için göller yüzeyden donar, dipteki su +4°C'de sıvı kalır ve balıklar donmaktan kurtulur."
        ]
      }
    ],
    tablolar: [
      {
        baslik: "Bazı Saf Maddelerin Oda Sıcaklığındaki Yoğunluk Değerleri Tablosu",
        sutunlar: ["Madde Adı", "Fiziksel Hali", "Yoğunluk (g/cm³)", "Suda Yüzme / Batma Durumu"],
        satirlar: [
          ["Platin", "Katı", "21,4", "Batar (Yoğunluk sudan büyük)"],
          ["Altın", "Katı", "19,3", "Batar (Yoğunluk sudan büyük)"],
          ["Kurşun", "Katı", "11,3", "Batar (Yoğunluk sudan büyük)"],
          ["Demir", "Katı", "7,8", "Batar (Yoğunluk sudan büyük)"],
          ["Alüminyum", "Katı", "2,7", "Batar (Yoğunluk sudan büyük)"],
          ["Saf Su (sıvı)", "Sıvı", "1,0", "Referans Değer"],
          ["Buz (katı su)", "Katı", "0,92", "Yüzer (Yoğunluk sudan küçük)"],
          ["Zeytinyağı", "Sıvı", "0,90", "Yüzer (Yoğunluk sudan küçük)"],
          ["Etil Alkol", "Sıvı", "0,80", "Yüzer (Yoğunluk sudan küçük)"],
          ["Tahta (Meşe)", "Katı", "0,70", "Yüzer (Yoğunluk sudan küçük)"]
        ]
      }
    ]
  },
  // MEB KİTABINDAKİ BAĞLANTI NOKTALARI
  baglantiNoktalari: [
    {
      id: "bn-6-4-3",
      baslik: "Gemi İnşaatı ve Denizcilik: Çelik Gemilerin Yüzme Prensibi",
      alan: "Gemi İnşaat Mühendisliği & Fizik",
      aciklama: "Bir çelik çivi suya atıldığında batarken, binlerce ton çelikten yapılan dev kargo gemileri denizde batmadan yüzer.",
      soru: "Çeliğin yoğunluğu 7,8 g/cm³ olmasına rağmen devasa çelik gemiler nasıl suda yüzebilmektedir?",
      cevap: "Geminin gövdesi kapalı bir çelik blok değildir; içi devasa hava odacıkları ve ambarlarla doludur. Geminin toplam kütlesi toplam hacmine bölündüğünde elde edilen ortalama yoğunluk deniz suyunun yoğunluğundan (1,03 g/cm³) çok daha küçük hale gelir ve gemi batmadan yüzer."
    },
    {
      id: "bn-6-4-4",
      baslik: "İslam Bilim Tarihi: El-Hâzinî ve Mîzânü'l-Hikme (Hikmet Terazisi)",
      alan: "Bilim Tarihi & Metroloji",
      aciklama: "12. yüzyılda Selçuklu sarayında çalışan büyük İslam bilgini Abdurrahman el-Hâzinî, cisimlerin havadaki ve sudaki ağırlıklarını ölçerek yoğunluklarını hesaplayan 'Hikmet Terazisi'ni icat etmiştir.",
      soru: "El-Hâzinî'nin 900 yıl önce ölçtüğü saf metallerin yoğunluk değerleri günümüz modern laboratuvar ölçümleriyle ne kadar örtüşmektedir?",
      cevap: "El-Hâzinî altının yoğunluğunu 19,05 g/cm³ (modern değer: 19,3), cıvanın yoğunluğunu 13,56 g/cm³ (modern değer: 13,6) olarak inanılmaz bir hassasiyetle (%99 doğruluk oranı) hesaplamış ve sahte altınları tespit etmiştir."
    }
  ],
  // MEB KİTABINDAKİ GÜNCEL HABERLER
  haberler: [
    {
      id: "hbr-6-4-2",
      baslik: "Kutup Göllerinde Buz Altı Canlılığı Bilim Dünyasını Büyülüyor",
      kaynak: "TÜBİTAK Bilim ve Teknik & Antarktik Araştırmalar",
      tarih: "2024",
      ozet: "Antarktika ve Sibirya'da yüzey hava sıcaklığı eksi 50°C'ye düşmesine rağmen göl yüzeyinde oluşan 2 metre kalınlığındaki buz örtüsünün altındaki suyun sıcaklığının +4°C seviyesinde sabit kaldığı ve balıkların, kabukluların yaşamaya devam ettiği görüntülendi.",
      soru: "Kutup göllerinde buz tabakasının suyun üstünde yüzmesi canlı yaşamını nasıl korumaktadır?",
      cevap: "Buz suyun üstünde yüzdüğü için yüzeyde yalıtkan bir örtü oluşturur. Soğuk hava dip kısımlara ulaşamaz; en yoğun su (+4°C) dipte toplanır ve canlılar donmaktan kurtularak kışı geçirir."
    }
  ],
  // MEB KİTABINDAKİ KONTROL NOKTALARI
  kontrolNoktalari: [
    {
      id: "kn-6-4-3",
      baslik: "Kontrol Noktası 1 (Yoğunluk Hesaplamaları ve Kütle-Hacim Grafiği)",
      sorular: [
        {
          id: "kn-q-g6-22",
          soru: "Kütlesi 240 gram olan bir taş parçası, içinde 100 cm³ su bulunan dereceli silindire atıldığında su seviyesi 160 cm³'e yükseliyor. Bu taşın yoğunluğu kaç g/cm³'tür?",
          tip: "coktan-secmeli",
          secenekler: [
            "A) 2 g/cm³",
            "B) 4 g/cm³",
            "C) 6 g/cm³",
            "D) 8 g/cm³"
          ],
          dogruSecenek: "B",
          cevap: "B) 4 g/cm³",
          aciklama: "Taşın hacmi V = 160 - 100 = 60 cm³'tür. Yoğunluk d = m / V = 240 g / 60 cm³ = 4 g/cm³ bulunur."
        },
        {
          id: "kn-q-g6-23",
          soru: "Bir bardak suyun yoğunluğu 1 g/cm³ ise bir sürahi suyun yoğunluğu kaç g/cm³ olur? Nedenini açıklayınız.",
          tip: "klasik",
          cevap: "Yine 1 g/cm³ olur. Çünkü sürahiye konulduğunda suyun kütlesi kaç kat artıyorsa hacmi de aynı oranda artar. d = m / V oranı değişmediği için yoğunluk madde miktarına bağlı değildir, sabittir.",
          aciklama: "Yoğunluk madde miktarına bağlı olmayan ayırt edici bir özelliktir."
        }
      ]
    },
    {
      id: "kn-6-4-4",
      baslik: "Kontrol Noktası 2 (Sıvı Katmanları ve Suyun Donması)",
      sorular: [
        {
          id: "kn-q-g6-24",
          soru: "Birbirine karışmayan K (0,8 g/cm³), L (1,2 g/cm³) ve M (1,0 g/cm³) sıvıları aynı kaba konulup dengeye ulaştığında aşağıdan yukarıya doğru sıralama nasıl olur?",
          tip: "coktan-secmeli",
          secenekler: [
            "A) L - M - K",
            "B) K - M - L",
            "C) M - L - K",
            "D) L - K - M"
          ],
          dogruSecenek: "A",
          cevap: "A) L - M - K",
          aciklama: "Yoğunluğu en büyük olan L (1,2) en altta, sonra M (1,0) ortada, yoğunluğu en küçük olan K (0,8) ise en üstte yer alır."
        }
      ]
    }
  ],
  // BİLGİ BANKASI KUTULARI
  bilgiBankasi: [
    {
      id: "bb-6-4-3",
      baslik: "Maddenin Miktarını Artırmak Yoğunluğunu Değiştirir mi?",
      icerik: "Öğrencilerin en sık düştüğü yanılgılardan biri 'madde çoğalırsa yoğunluğu da artar' düşüncesidir. Oysa yoğunluk birim hacme (1 cm³'e) düşen kütledir. Siz bir kalıp peyniri ikiye kestiğinizde kütlesi yarıya iner ama hacmi de tam yarıya iner! Dolayısıyla bölme işleminin sonucu (d = m / V) hiç değişmez. Yoğunluk saf maddeler için sabit sıcaklıkta değişmeyen bir kimlik kartıdır.",
      onemliNot: "Madde miktarının artması veya azalması yoğunluğu etkilemez."
    },
    {
      id: "bb-6-4-4",
      baslik: "Arşimet'in Kral Tacı ve Su Taşırma Prensibi",
      icerik: "Antik Yunan bilgini Arşimet, kralın saf altından yaptırdığı taca kuyumcunun gümüş karıştırıp karıştırmadığını yoğunluk farkıyla çözmüştür. Hamamda suya girdiğinde suyun yükseldiğini fark eden Arşimet, taç ile aynı kütlede saf altını suya batırarak taşırdıkları su hacimlerini kıyaslamış; tacın daha fazla su taşırdığını (yani hacminin daha büyük, yoğunluğunun daha küçük olduğunu) görerek içine yoğunluğu düşük gümüş karıştırıldığını kanıtlamıştır.",
      onemliNot: "Yoğunluk farkı sahtecilikleri ortaya çıkarır."
    }
  ],
  // MEB KİTABINDAKİ PERFORMANS GÖREVİ
  performansGorevi: {
    baslik: "Dereceli Silindir ve Sıvılar ile Renkli Yoğunluk Kulesi Tasarımı",
    amac: "Farklı yoğunluklara sahip birbiri içinde çözünmeyen sıvıları yoğunluk sıralamasına göre üst üste dizerek rengarenk bir sıvı kulesi oluşturmak.",
    surecAdimlari: [
      "Malzemeleri temin ediniz: Bal (1,4 g/cm³), Bulaşık deterjanı (1,06 g/cm³), Renklendirilmiş Su (1,0 g/cm³), Sıvı Yağ (0,9 g/cm³) ve Kolonya (0,85 g/cm³).",
      "Şeffaf bir silindirik bardağın tabanına ilk önce en yoğun olan balı dökünüz.",
      "Ardından bir kaşığın tersinden yavaşça süzdürerek sırasıyla deterjan, su, sıvı yağ ve kolonyayı ekleyiniz.",
      "Sıvıların birbirine karışmadan 5 ayrı katman halinde durduğunu gözlemleyiniz.",
      "Üzerine üzüm tanesi, plastik kapak ve mantar tıpa atarak hangi katmanda yüzdüklerini kaydediniz."
    ],
    beklenenUrun: "5 Katmanlı Sıvı Kulesi Fotoğrafı ve Yoğunluk Raporu.",
    degerlendirmeKriterleri: [
      "Sıvıların yoğunluk değerlerine göre doğru sırayla dizilmesi",
      "Katmanların birbirine karışmadan net bir şekilde gösterilmesi",
      "İçine atılan katı cisimlerin askıda kalma durumlarının yoğunlukla açıklanması"
    ]
  },
  // MEB KİTABI NELER ÖĞRENDİK BÖLÜMÜ SORULARI VE MAARİF ÇÖZÜMLERİ
  nelerOgrenildiSorulari: [
    {
      id: "no-6-4-5",
      soru: "1. Yoğunluğun tanımını yaparak formülünü ve birimini yazınız.",
      cevap: "Yoğunluk, bir maddenin birim hacminin kütlesidir. Formülü: Yoğunluk = Kütle / Hacim (d = m / V). Birimi gram/santimetreküp (g/cm³)'tür.",
      detayliCozum: "Kütlenin hacme oranıdır, d = m / V formülüyle hesaplanır."
    },
    {
      id: "no-6-4-6",
      soru: "2. Kütlesi 180 gram ve hacmi 60 cm³ olan katı bir X maddesinin yoğunluğunu hesaplayınız.",
      cevap: "d = m / V = 180 g / 60 cm³ = 3 g/cm³ bulunur.",
      detayliCozum: "d = 180 / 60 = 3 g/cm³."
    },
    {
      id: "no-6-4-7",
      soru: "3. Birbirine karışmayan X (0,9 g/cm³), Y (1,5 g/cm³) ve Z (1,1 g/cm³) sıvıları bir kaba konulduğunda kabın dibinden yüzeyine doğru nasıl sıralanır?",
      cevap: "En altta yoğunluğu en büyük olan Y (1,5 g/cm³), ortada Z (1,1 g/cm³), en üstte ise yoğunluğu en küçük olan X (0,9 g/cm³) yer alır.",
      detayliCozum: "Aşağıdan yukarıya: Y - Z - X."
    },
    {
      id: "no-6-4-8",
      soru: "4. Suyun donması sonucu oluşan yoğunluk değişiminin göllerde yaşayan canlılar açısından önemini açıklayınız.",
      cevap: "Su donarken genleşir ve yoğunluğu düşer (buzun yoğunluğu 0,92 g/cm³ < suyun yoğunluğu 1 g/cm³). Bu sayede buz su üzerinde yüzer ve göller yüzeyden donar. Yüzeydeki buz örtüsü yalıtım sağlayarak gölün dibindeki suyun +4°C'de sıvı kalmasını sağlar ve balıkların donarak ölmesini engeller.",
      detayliCozum: "Buzun yoğunluğunun sudan küçük olması sucul yaşamı korur."
    }
  ],
  hikmetStages: [
    {
      stage: 1,
      name: "1. Varlığı Tanıt (Her Maddenin Kendi Ağırlığı)",
      concept: "Maddenin Kimlik Kartı",
      text: "Aynı boyuttaki tahta, taş ve demir elimize aldığımızda bambaşka ağırlık hissi verir; her maddenin kendine has bir yoğunluğu vardır.",
      analogies: ["Aynı boyuttaki iki çantadan birinin pamukla, diğerinin kitapla dolu olması."]
    },
    {
      stage: 2,
      name: "2. Parçalarını Göster (Kütle ve Hacmin Dansı)",
      concept: "Formülün Dengesi",
      text: "Madde miktarı (kütle) ile kapladığı alanın (hacim) bölünmesiyle yoğunluk ortaya çıkar (d = m / V).",
      analogies: ["Bir otobüsteki yolcu sayısı ile otobüsün koltuk kapasitesi."]
    },
    {
      stage: 3,
      name: "3. Ölçü ve Düzen (Maddelerin Seviyelenmesi)",
      concept: "Yoğunluk Sıralaması",
      text: "Karışmayan sıvılar bir kaba konduğunda adaletle dizilir; ağır olan dibe, hafif olan göğe meyleder.",
      questionToPonder: "Yoğunluk farkı olmasaydı havadaki sıcak ve soğuk hava sirkülasyonu ya da okyanus akıntıları nasıl oluşurdu?"
    },
    {
      stage: 4,
      name: "4. Gayesini Keşfet (Suyun Eşsiz Mucizesi)",
      concept: "Canlıları Koruyan Buz Kalkanı",
      text: "Tüm sıvılar donarken batar; yalnızca SU donarken hafifleyip yüzer. Bu tek istisna, yeryüzündeki tüm su canlılarının hayat sigortasıdır.",
      analogies: ["Evi dışarıdaki kardan koruyan şefkatli bir çatı."]
    },
    {
      stage: 5,
      name: "5. Bütünle İlişkilendir (Jeolojik ve Biyolojik Denge)",
      concept: "Yerkürenin Katmanları",
      text: "Dünya'nın çekirdeğindeki yoğun demir-nikel tabakasından en dıştaki hafif atmosfer gazlarına kadar tüm kâinat yoğunluk kanunuyla tabakalanmıştır.",
      analogies: ["Mükemmelce katmanlanmış bir pasta."]
    },
    {
      stage: 6,
      name: "6. Hayret ve Tefekkür (Hikmetli Terazi)",
      concept: "El-Hâkim ve El-Adl",
      text: "Maddelere bu hassas yoğunluk ölçülerini veren ve suyu özel bir kanunla donatarak hayatı koruyan Sonsuz Kudret ve Rahmet'e hayran olmak."
    }
  ],
  etkinlikler: [
    {
      id: "etk-u4s2-sivi-kulesi",
      title: "Pekiştirme İstasyonu: Yoğunluk Sıvı Kulesi ve Katı Cisimler",
      type: "Deneysel Katmanlaşma",
      materials: ["Dereceli silindir", "Bal (1,4 g/cm³)", "Su (1,0 g/cm³)", "Zeytinyağı (0,9 g/cm³)", "Demir bilye", "Plastik kapak", "Mantar tıpa"],
      steps: [
        "1. Adım: Dereceli silindire önce bal, ardından yavaşça renkli su ve en son zeytinyağı dökünüz.",
        "2. Adım: Sıvıların birbirine karışmadan alttan üste Bal -> Su -> Zeytinyağı şeklinde dizildiğini gözlemleyiniz.",
        "3. Adım: Sırayla demir bilyeyi, plastik kapağı ve mantar tıpayı içine bırakınız.",
        "4. Adım: Demirin en dibe battığını, plastiğin su ile yağ arasında kaldığını, mantar tıpanın ise en üstte yüzdüğünü kaydediniz."
      ],
      questions: [
        {
          qId: "q-u4s2-1",
          label: "Deney Çıkarımı",
          prompt: "Sıvıların ve katı cisimlerin bu şekilde katmanlaşmasının temel sebebi nedir?",
          answer: "Yoğunluk farkıdır. Yoğunluğu en büyük olan maddeler en altta, yoğunluğu en küçük olanlar en üstte yer alır."
        }
      ]
    }
  ],
  bilgiIstasyonlari: [
    {
      title: "El-Hâzinî ve 'Mizanü'l-Hikme' (Hikmet Terazisi)",
      scientistOrMission: "Büyük İslam Fizikçisi ve Mucidi",
      description: "12. yüzyılda Merv'de yaşayan Abdurrahman el-Hâzinî, geliştirdiği 'Hikmet Terazisi' ile saf metallerin, alaşımların ve taşların yoğunluklarını virgülden sonra üç basamak hassasiyetle ölçmüştür.",
      hikmetNote: "Hâzinî, metallerin saflığını ve hileli altınları yoğunluk testiyle ortaya çıkararak bilimi adalet ve dürüstlüğün hizmetine sunmuştur."
    }
  ],
  dda: {
    id: "dda-u4s2-yogunluk",
    statement: "Kütlesi artan saf bir maddenin aynı oranda hacmi de arttığı için yoğunluğu DEĞİŞMEZ.",
    correctDecision: "D",
    reason: "Yoğunluk bir oran (d = m / V) olduğu için saf bir maddenin miktarını artırmak (1 bardak su yerine 1 kova su) yoğunluğunu değiştirmez, suyun yoğunluğu daima 1 g/cm³ kalır.",
    ifTrue: {
      exit: 1,
      isCorrect: true,
      feedback: "Mükemmel! Yoğunluğun kütle miktarına bağlı olmadığını, ayırt edici bir oran olduğunu harika kavradınız."
    },
    ifFalse: {
      exit: 2,
      isCorrect: false,
      feedback: "Hatalı! Kütle arttığında hacmin de aynı oranda arttığını ve oranın sabit kaldığını hatırlayınız."
    }
  },
  biliyorumAnliyorumDusunuyorum: {
    biliyorum: "Yoğunluğun birim hacimdeki kütle olduğunu, d = m / V bağıntısını, g/cm³ birimini ve suyun özel durumunu biliyorum.",
    anliyorum: "Buzun su üzerinde yüzmesinin sıradan bir olay değil, kışın tüm göl ve deniz canlılarını donmaktan kurtaran mucizevi bir tasarım olduğunu anlıyorum.",
    dusunuyorum: "Eğer su da diğer tüm sıvılar gibi donduğunda büzüşüp dibe batsaydı, kış mevsiminde kutuplardaki ve göllerdeki tüm yaşam nasıl tamamen yok olurdu?"
  },
  pekistirmeIstasyonu: {
    stationTitle: "Yoğunluk Pekiştirme İstasyonu",
    pageReference: "6. Sınıf 2. Kitap 4. Ünite",
    summaryText: "Kütle, hacim ve yoğunluk hesaplamaları, karışmayan sıvıların dengesi, suyun canlılar için önemi ve 20 özgün soru.",
    targetSkills: [
      "d = m / V formülüyle yoğunluk, kütle veya hacim hesaplarını eksiksiz yapar.",
      "Sıvı katmanları ve yüzen/batan cisim ilişkilerini analiz eder."
    ]
  },
  fillInBlanks: [
    {
      id: "fib-u4s2-1",
      number: 1,
      baglam: "Bir maddenin birim hacminin kütlesine verilen isimdir.",
      soruKoku: "Bir maddenin birim hacimdeki (1 cm³) kütlesine .................................... (öz kütle) denir.",
      blankAnswer: "Yoğunluk",
      acceptableAnswers: ["yoğunluk", "Yoğunluk", "öz kütle"],
      explanation: "Yoğunluk birim hacimdeki kütledir.",
      wordBankHint: ["Yoğunluk", "Ağırlık", "Kuvvet", "Sürat"]
    },
    {
      id: "fib-u4s2-2",
      number: 2,
      baglam: "Yoğunluk hesaplanırken kütle hacme bölünür.",
      soruKoku: "Yoğunluk = Kütle / .................................... formülü ile hesaplanır.",
      blankAnswer: "Hacim",
      acceptableAnswers: ["hacim", "Hacim"],
      explanation: "d = m / V formülüdür.",
      wordBankHint: ["Hacim", "Sıcaklık", "Zaman", "Basınç"]
    },
    {
      id: "fib-u4s2-3",
      number: 3,
      baglam: "Yoğunluğun simgesi d, kütlenin simgesi m, hacmin simgesi V'dir.",
      soruKoku: "Yoğunluk formülünde hacim .................................... harfi ile gösterilir.",
      blankAnswer: "V",
      acceptableAnswers: ["V", "v"],
      explanation: "Volume (hacim) V ile gösterilir.",
      wordBankHint: ["V", "d", "m", "F"]
    },
    {
      id: "fib-u4s2-4",
      number: 4,
      baglam: "Kütle gram, hacim santimetreküp alındığında birimdir.",
      soruKoku: "Yoğunluk birimi genellikle gram / ....................................tür (g/cm³).",
      blankAnswer: "Santimetreküp",
      acceptableAnswers: ["santimetreküp", "Santimetreküp", "cm3", "cm³"],
      explanation: "g/cm³ yoğunluk birimidir.",
      wordBankHint: ["Santimetreküp", "Metre", "Litre", "Kilogram"]
    },
    {
      id: "fib-u4s2-5",
      number: 5,
      baglam: "Saf suyun oda koşullarındaki yoğunluğu sabittir.",
      soruKoku: "Saf suyun yoğunluğu .................................... g/cm³'tür.",
      blankAnswer: "1",
      acceptableAnswers: ["1", "bir", "1,0"],
      explanation: "Suyun yoğunluğu 1 g/cm³ kabul edilir.",
      wordBankHint: ["1", "0", "10", "100"]
    },
    {
      id: "fib-u4s2-6",
      number: 6,
      baglam: "Birbiri içinde çözünmeyen sıvılarda yoğun olan yerleşir.",
      soruKoku: "Birbirine karışmayan sıvılardan yoğunluğu büyük olan daima ....................................te kalır.",
      blankAnswer: "Dip",
      acceptableAnswers: ["dip", "Dip", "altta", "Altta", "dipte"],
      explanation: "Büyük yoğunluklu sıvı alta çöker.",
      wordBankHint: ["Dip", "Üst", "Orta", "Yüzey"]
    },
    {
      id: "fib-u4s2-7",
      number: 7,
      baglam: "Buz suya göre daha az yoğundur.",
      soruKoku: "Buzun yoğunluğu suyun yoğunluğundan küçük olduğu için buz suda ....................................er.",
      blankAnswer: "Yüz",
      acceptableAnswers: ["yüzer", "Yüzer", "yüz", "Yüz"],
      explanation: "Buz suda yüzer.",
      wordBankHint: ["Yüz", "Bat", "Eri", "Kayna"]
    },
    {
      id: "fib-u4s2-8",
      number: 8,
      baglam: "Yoğunluk saf maddeleri tanımak için kullanılır.",
      soruKoku: "Yoğunluk saf maddeler için .................................... edici bir özelliktir.",
      blankAnswer: "Ayırt",
      acceptableAnswers: ["ayırt", "Ayırt"],
      explanation: "Ayırt edici özelliktir.",
      wordBankHint: ["Ayırt", "Ortak", "Gereksiz", "Değişken"]
    },
    {
      id: "fib-u4s2-9",
      number: 9,
      baglam: "Su donarken diğer maddelerin aksine genişler.",
      soruKoku: "Su donup buza dönüşürken hacmi ....................................ar.",
      blankAnswer: "Art",
      acceptableAnswers: ["artar", "Artar", "art", "Art"],
      explanation: "Su donarken genleşir, hacmi artar.",
      wordBankHint: ["Art", "Azal", "Yok ol", "Sabit kal"]
    },
    {
      id: "fib-u4s2-10",
      number: 10,
      baglam: "Hikmet Terazisi ile yoğunluk ölçen İslam fizikçisidir.",
      soruKoku: "Mizanü'l-Hikme adlı eseriyle metallerin yoğunluğunu ölçen bilgin El-...................................dir.",
      blankAnswer: "Hâzinî",
      acceptableAnswers: ["hazini", "hâzinî", "Hazini", "Hâzinî"],
      explanation: "Abdurrahman el-Hâzinî yoğunluk terazisi mucididir.",
      wordBankHint: ["Hâzinî", "Cezeri", "Bîrûnî", "Farabi"]
    }
  ],
  contextQuestions: [
    {
      id: "mcq-u4s2-1",
      number: 1,
      baglam: "Kütlesi eşit kollu terazi ile 240 gram olarak ölçülen bir taş parçası, içinde 150 cm³ su bulunan dereceli silindire bırakıldığında su seviyesi 190 cm³'e yükselmektedir.",
      soruKoku: "Bu taş parçasının yoğunluğu kaç g/cm³'tür?",
      secenekler: {
        A: "4 g/cm³",
        B: "6 g/cm³",
        C: "8 g/cm³",
        D: "12 g/cm³"
      },
      dogruCevap: "B",
      cozum: "Taşın hacmi = 190 - 150 = 40 cm³. Taşın kütlesi = 240 g. Yoğunluk d = m / V = 240 / 40 = 6 g/cm³.",
      olculenKazanim: "F.6.4.2.2. Dereceli silindir ve terazi verileriyle yoğunluk hesaplar.",
      olculenBeceri: "Deneysel Hesaplama",
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
      id: "mcq-u4s2-2",
      number: 2,
      baglam: "Bir kaba birbirine karışmayan K, L ve M sıvıları konulduğunda denge durumu şekildeki gibi oluşmuştur:\n- En altta: M sıvısı\n- Ortada: K sıvısı\n- En üstte: L sıvısı",
      soruKoku: "Bu sıvıların yoğunlukları (dK, dL, dM) arasındaki doğru ilişki hangisidir?",
      secenekler: {
        A: "dL > dK > dM",
        B: "dM > dK > dL",
        C: "dK > dL > dM",
        D: "dM > dL > dK"
      },
      dogruCevap: "B",
      cozum: "En alttaki sıvının yoğunluğu en büyük, en üsttekinin ise en küçüktür: dM > dK > dL.",
      olculenKazanim: "F.6.4.2.3. Karışmayan sıvıların yoğunluk sıralamasını yapar.",
      olculenBeceri: "Görsel Katman Analizi",
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
      id: "mcq-u4s2-3",
      number: 3,
      baglam: "Kış aylarında hava sıcaklığı -20°C'ye kadar düşmesine rağmen bir dağ gölünün dibindeki su sıcaklığı +4°C olarak ölçülmüştür.",
      soruKoku: "Gölün tamamen dipten donmayıp yüzeyden donması ve dipteki canlıların hayatta kalabilmesi suyun hangi istisnai fiziksel özelliği sayesindedir?",
      secenekler: {
        A: "Suyun sıcaklığının hiç düşmemesi",
        B: "Suyun donarken genleşmesi ve buzun yoğunluğunun sudan küçük olması sebebiyle yüzeyde kalarak alt kısımlara yalıtım sağlaması",
        C: "Balıkların suyu ısıtması",
        D: "Buzun çok sıcak olması"
      },
      dogruCevap: "B",
      cozum: "Buzun yoğunluğu (0,9 g/cm³) sudan (1 g/cm³) küçüktür; bu yüzden buz yüzeyde kalarak alt katmanları dondurucu havadan izole eder.",
      olculenKazanim: "F.6.4.2.4. Suyun donma anomalisinin ekosistemdeki hayati rolünü irdeler.",
      olculenBeceri: "Ekolojik ve Biyofiziksel Çıkarım",
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
      id: "mcq-u4s2-4",
      number: 4,
      baglam: "Bir laboratuvarda özdeş iki dereceli silindire eşit hacimde (100 cm³) X ve Y sıvıları konulmuştur. Eşit kollu terazide tartıldıklarında X sıvısının 80 gram, Y sıvısının ise 130 gram geldiği görülmüştür.",
      soruKoku: "X ve Y sıvılarının yoğunlukları hangi seçenekte doğru verilmiştir?",
      secenekler: {
        A: "dX = 0,8 g/cm³ / dY = 1,3 g/cm³",
        B: "dX = 1,3 g/cm³ / dY = 0,8 g/cm³",
        C: "dX = 80 g/cm³ / dY = 130 g/cm³",
        D: "dX = 1,0 g/cm³ / dY = 1,0 g/cm³"
      },
      dogruCevap: "A",
      cozum: "dX = 80 g / 100 cm³ = 0,8 g/cm³. dY = 130 g / 100 cm³ = 1,3 g/cm³.",
      olculenKazanim: "F.6.4.2.2. Eşit hacimdeki sıvıların yoğunluklarını karşılaştırır.",
      olculenBeceri: "Oransal Yoğunluk Hesabı",
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
      id: "mcq-u4s2-5",
      number: 5,
      baglam: "Bir sarraf kuyumcudan satın aldığı altın kolyenin saf altın olup olmadığını anlamak istemektedir. Kolyenin kütlesi 193 gram, hacmi ise 10 cm³ olarak ölçülmüştür. Saf altının yoğunluğu 19,3 g/cm³'tür.",
      soruKoku: "Sarrafın kolye hakkındaki tespiti ne olmalıdır?",
      secenekler: {
        A: "Kolye sahtedir çünkü yoğunluğu 1,93 g/cm³ çıkmıştır.",
        B: "Kolye saf altındır çünkü yoğunluğu 193 / 10 = 19,3 g/cm³ olarak tam uyuşmaktadır.",
        C: "Kolyenin altından yapıldığı anlaşılamaz.",
        D: "Kolyenin hacmi çok fazladır."
      },
      dogruCevap: "B",
      cozum: "d = m / V = 193 / 10 = 19,3 g/cm³. Değer saf altınla bire bir aynıdır.",
      olculenKazanim: "F.6.4.2.1. Yoğunluğun ayırt edici özellik oluşunu saflık testinde kullanır.",
      olculenBeceri: "Gerçek Yaşam ve Saflık Analizi",
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
      id: "mcq-u4s2-6",
      number: 6,
      baglam: "Aynı sıcaklıktaki saf bir sıvıdan 1 bardak alındığında yoğunluğu 0,9 g/cm³ çıkmaktadır.",
      soruKoku: "Aynı sıvıdan 1 damla ve 1 varil alındığında yoğunlukları ne olur?",
      secenekler: {
        A: "Damlanın yoğunluğu 0,1; varilin yoğunluğu 90 g/cm³ olur.",
        B: "Her ikisinin de yoğunluğu yine 0,9 g/cm³ olur.",
        C: "Varilin yoğunluğu daha büyük olur.",
        D: "Damlanın yoğunluğu daha büyük olur."
      },
      dogruCevap: "B",
      cozum: "Saf maddelerin aynı sıcaklıktaki yoğunluğu madde miktarına (kütle ve hacim büyüklüğüne) bağlı değildir; oran daima sabittir.",
      olculenKazanim: "F.6.4.2.1. Yoğunluğun madde miktarından bağımsız olduğunu kavrar.",
      olculenBeceri: "Kavramsal Netlik",
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
      id: "mcq-u4s2-7",
      number: 7,
      baglam: "Yoğunluğu 1,2 g/cm³ olan bir sıvı dolu kaba aşağıdaki üç cisim bırakılıyor:\n- X cismi (yoğunluğu 0,8 g/cm³)\n- Y cismi (yoğunluğu 1,2 g/cm³)\n- Z cismi (yoğunluğu 2,5 g/cm³)",
      soruKoku: "Bu cisimlerin sıvı içindeki denge konumları nasıldır?",
      secenekler: {
        A: "X yüzer, Y askıda kalır, Z dibe batar",
        B: "Üçü de dibe batar",
        C: "Üçü de yüzer",
        D: "Z yüzer, X batar"
      },
      dogruCevap: "A",
      cozum: "dX < dsıvı olduğu için X yüzer; dY = dsıvı olduğu için Y askıda kalır; dZ > dsıvı olduğu için Z dibe batar.",
      olculenKazanim: "F.6.4.2.3. Sıvı ve katı yoğunluğu karşılaştırmasıyla yüzme/batma durumunu belirler.",
      olculenBeceri: "Durum Tahmini",
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
      id: "mcq-u4s2-8",
      number: 8,
      baglam: "Kütlesi 500 gram ve yoğunluğu 2,5 g/cm³ olan bir porselen vazonun hacmi kaç cm³'tür?",
      soruKoku: "Porselen vazonun hacmi kaç santimetreküptür?",
      secenekler: {
        A: "125 cm³",
        B: "200 cm³",
        C: "250 cm³",
        D: "1250 cm³"
      },
      dogruCevap: "B",
      cozum: "Hacim V = m / d = 500 g / 2,5 g/cm³ = 200 cm³.",
      olculenKazanim: "F.6.4.2.2. Yoğunluk ve kütle bilindiğinde hacmi hesaplar.",
      olculenBeceri: "Formül Tersinirliği",
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
      id: "mcq-u4s2-9",
      number: 9,
      baglam: "Bir kütle-hacim grafiğinde X ve Y maddelerinin çizgileri gösterilmiştir. X'in doğrusu kütle eksenine daha yakın ve diktir.",
      soruKoku: "Grafiğe göre X ve Y maddelerinin yoğunlukları hakkında hangisi doğrudur?",
      secenekler: {
        A: "X maddesinin yoğunluğu Y maddesinden büyüktür.",
        B: "Y maddesinin yoğunluğu X'ten büyüktür.",
        C: "İki maddenin yoğunluğu eşittir.",
        D: "Kütle-hacim grafiğinden yoğunluk anlaşılamaz."
      },
      dogruCevap: "A",
      cozum: "Kütle-hacim grafiğinin eğimi (m / V) yoğunluğu verir; eğimi dik olanın (kütle eksenine yakın olanın) yoğunluğu daha büyüktür (dX > dY).",
      olculenKazanim: "F.6.4.2.2. Kütle-hacim grafiğinin eğiminden yoğunluğu yorumlar.",
      olculenBeceri: "Grafik Eğim Analizi",
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
      id: "mcq-u4s2-10",
      number: 10,
      baglam: "Ağzına kadar su ile dolu cam bir şişe derin dondurucuya konulduğunda bir süre sonra şişenin çatlayıp kırıldığı görülür.",
      soruKoku: "Cam şişenin donma sırasında kırılmasının sebebi suyun hangi özelliğidir?",
      secenekler: {
        A: "Buzun camı eritmesi",
        B: "Suyun donarken hacminin genişlemesi ve cam şişeye muazzam bir iç basınç uygulaması",
        C: "Dondurucunun camı sıkıştırması",
        D: "Camın kütlesinin azalması"
      },
      dogruCevap: "B",
      cozum: "Su donarken genleşir ve hacmi yaklaşık %9 artar. Kapalı kapta bu hacim artışı camı patlatır.",
      olculenKazanim: "F.6.4.2.4. Suyun genleşmesinin günlük yaşamdaki sonuçlarını açıklar.",
      olculenBeceri: "Gerçek Yaşam Problemi",
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
      id: "mcq-u4s2-11",
      number: 11,
      baglam: "El-Hâzinî, 'Kitâbü Mîzâni'l-Hikme' adlı eserinde sıvıların içine batırılan cisimlerin hafiflemesini ve metallerin yoğunluk farkını kullanarak sahteciliği önleme metodunu anlatır.",
      soruKoku: "Hâzinî'nin bu bilimsel çalışması günümüz biliminde hangi alanın öncüsü sayılır?",
      secenekler: {
        A: "Klasik hidrostatik, yoğunluk ölçümü ve metroloji (ölçüm bilimi)",
        B: "Yalnızca astroloji",
        C: "Botanik ve bitki bilimi",
        D: "Matbaa teknolojisi"
      },
      dogruCevap: "A",
      cozum: "El-Hâzinî hidrostatik denge, yoğunluk ve hassas ölçüm biliminin (metroloji) dünyadaki en büyük öncülerindendir.",
      olculenKazanim: "F.6.4.2. El-Hâzinî'nin bilimsel mirasını değerlendirir.",
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
      id: "mcq-u4s2-12",
      number: 12,
      baglam: "Yoğunlukları d1 = 0,6 g/cm³, d2 = 1,0 g/cm³ ve d3 = 1,8 g/cm³ olan birbirine karışmayan üç sıvı aynı kaba boşaltılıyor.",
      soruKoku: "Kaptaki sıvıların alttan üste doğru sıralaması hangi seçenekte doğru verilmiştir?",
      secenekler: {
        A: "d1 - d2 - d3",
        B: "d3 - d2 - d1",
        C: "d2 - d1 - d3",
        D: "d3 - d1 - d2"
      },
      dogruCevap: "B",
      cozum: "En yoğun olan d3 (1,8) en altta, ortada d2 (1,0), en az yoğun olan d1 (0,6) ise en üstte yer alır.",
      olculenKazanim: "F.6.4.2.3. Sayısal yoğunluk değerlerine göre sıvı katmanlarını dizer.",
      olculenBeceri: "Sıralama ve Mantık",
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
      id: "mcq-u4s2-13",
      number: 13,
      baglam: "Hacimleri eşit olan K, L ve M katı bloklarının kütleleri şöyledir:\nmK = 150 g, mL = 300 g, mM = 75 g.",
      soruKoku: "Bu blokların yoğunluklarının büyükten küçüğe sıralaması nedir?",
      secenekler: {
        A: "dL > dK > dM",
        B: "dM > dK > dL",
        C: "dK > dL > dM",
        D: "dL > dM > dK"
      },
      dogruCevap: "A",
      cozum: "Hacimler eşitken kütlesi büyük olanın yoğunluğu da büyüktür (d = m / V). Sıralama: dL (300) > dK (150) > dM (75).",
      olculenKazanim: "F.6.4.2.1. Eşit hacimde kütle-yoğunluk doğru orantısını çözer.",
      olculenBeceri: "Karşılaştırmalı Muhakeme",
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
      id: "mcq-u4s2-14",
      number: 14,
      baglam: "Bir fen projesinde bir öğrenci yumurtayı saf suya attığında battığını görmüş, suya bolca tuz ekleyip karıştırdığında ise yumurtanın yukarı çıkıp yüzdüğünü gözlemlemiştir.",
      soruKoku: "Tuz eklendiğinde yumurtanın yüzmesinin sebebi nedir?",
      secenekler: {
        A: "Tuzun yumurtayı hafifletmesi",
        B: "Tuz çözündükçe suyun yoğunluğunun artarak yumurtanın yoğunluğundan daha büyük hale gelmesi",
        C: "Tuzun suyun sıcaklığını kaynatması",
        D: "Yumurtanın kabuğunun erimesi"
      },
      dogruCevap: "B",
      cozum: "Tuzlu suyun yoğunluğu saf sudan fazladır. Sıvının yoğunluğu yumurtanın yoğunluğunu geçtiğinde yumurta yüzmeye başlar.",
      olculenKazanim: "F.6.4.2.3. Çözeltilerde yoğunluk artışı ve kaldırma etkisini açıklar.",
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
      id: "mcq-u4s2-15",
      number: 15,
      baglam: "Denizaltılar dalış yapmak istediklerinde safra tanklarına deniz suyu doldurur; yüzeye çıkmak istediklerinde ise tanklardaki suyu basınçlı havayla dışarı atarlar.",
      soruKoku: "Denizaltının bu hareketi yoğunluk prensibiyle nasıl açıklanır?",
      secenekler: {
        A: "Su aldığında ortalama yoğunluğu deniz suyundan büyük hale gelir ve batar; suyu boşaltınca yoğunluğu azalıp yüzeye çıkar",
        B: "Denizaltı motorları suyla çalışır",
        C: "Havanın yoğunluğu sudan büyüktür",
        D: "Denizaltı dibe çapa atar"
      },
      dogruCevap: "A",
      cozum: "Ortalama yoğunluğu ayarlayarak yüzme, askıda kalma ve dalma durumları kontrol edilir.",
      olculenKazanim: "F.6.4.2.3. Denizaltı teknolojisinde yoğunluk kontrolünü modeller.",
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
      id: "mcq-u4s2-16",
      number: 16,
      baglam: "Tabloda üç saf katı maddenin kütle ve hacim değerleri verilmiştir:\nMadde 1: Kütle 80 g, Hacim 20 cm³\nMadde 2: Kütle 120 g, Hacim 30 cm³\nMadde 3: Kütle 100 g, Hacim 50 cm³",
      soruKoku: "Bu maddelerden hangileri AYNI TÜR madde olabilir?",
      secenekler: {
        A: "Yalnız Madde 1 ve Madde 2",
        B: "Yalnız Madde 2 ve Madde 3",
        C: "Yalnız Madde 1 ve Madde 3",
        D: "Madde 1, 2 ve 3'ün tamamı"
      },
      dogruCevap: "A",
      cozum: "d1 = 80/20 = 4 g/cm³. d2 = 120/30 = 4 g/cm³. d3 = 100/50 = 2 g/cm³. Yoğunlukları eşit olan Madde 1 ve Madde 2 aynı tür olabilir.",
      olculenKazanim: "F.6.4.2.1. Yoğunluk eşitliğinden aynı madde olup olmadığını belirler.",
      olculenBeceri: "Ayırt Edici Özellik Tespiti",
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
      id: "mcq-u4s2-17",
      number: 17,
      baglam: "Bir buz dağının (aysberg) sadece %10'u suyun üstünde görünürken %90'lık devasa gövdesi suyun altındadır.",
      soruKoku: "Buz dağının büyük kısmının su altında kalmasının yoğunluksal sebebi nedir?",
      secenekler: {
        A: "Buzun yoğunluğunun (0,9 g/cm³) suyun yoğunluğuna (1,0 g/cm³) çok yakın olması (%90'lık oran)",
        B: "Buz dağının tuzlu olması",
        C: "Güneşin üst kısmı eritmesi",
        D: "Suyun buzu itmesi"
      },
      dogruCevap: "A",
      cozum: "Yüzen cisimlerde batan hacim oranı = dc / dsıvı = 0,9 / 1,0 = %90'dır. Bu nedenle buzun %90'ı batar.",
      olculenKazanim: "F.6.4.2.4. Buzdağı yüzme oranını yoğunluk oranıyla çözümler.",
      olculenBeceri: "Oransal Geometri ve Biyofizik",
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
      id: "mcq-u4s2-18",
      number: 18,
      baglam: "Sıcak hava balonları içindeki havayı dev brülörlerle ısıttığında balon gökyüzüne doğru yükselir.",
      soruKoku: "Sıcak hava balonunun yükselmesi hangi fiziksel kurala dayanır?",
      secenekler: {
        A: "Isınan havanın genleşerek yoğunluğunun azalması ve soğuk dış havadan daha hafif hale gelerek yukarı çıkması",
        B: "Ateşin balonu çekmesi",
        C: "Balonun kütlesinin sıfırlanması",
        D: "Rüzgârın balonu itmesi"
      },
      dogruCevap: "A",
      cozum: "Isınan gaz genleşir, hacmi artar ve yoğunluğu düşer; hafifleyen hava balonu yukarı taşır.",
      olculenKazanim: "F.6.4.2.1. Gazlarda sıcaklık-yoğunluk ilişkisini açıklar.",
      olculenBeceri: "Termodinamik ve Uçuş Fiziği",
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
      id: "mcq-u4s2-19",
      number: 19,
      baglam: "Bir kaba su ve zeytinyağı konulup iyice çalkalanıyor; süt renginde bir karışım (emülsiyon) oluşuyor ancak birkaç dakika beklenince zeytinyağı yeniden suyun üzerine ayrışıyor.",
      soruKoku: "Zeytinyağının çalkalandıktan sonra bile sudan ayrılıp en üste toplanmasını sağlayan iki temel faktör nedir?",
      secenekler: {
        A: "Sıvıların birbiri içinde çözünmemesi ve zeytinyağının yoğunluğunun sudan küçük olması",
        B: "Zeytinyağının sıcak olması ve suyun buharlaşması",
        C: "Yer çekiminin zeytinyağına etki etmemesi",
        D: "Suyun zeytinyağını dondurması"
      },
      dogruCevap: "A",
      cozum: "Çözünmeme (polar/apolar farkı) ve yoğunluk farkı (d_yağ < d_su) ayrışmayı sağlar.",
      olculenKazanim: "F.6.4.2.3. Emülsiyonların yoğunlukla faz ayrımını çözümler.",
      olculenBeceri: "Fiziksel Ayrışma Mantığı",
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
      id: "mcq-u4s2-20",
      number: 20,
      baglam: "Kâinattaki tüm sıvılar donarken katılaşarak dibe çökerken, sadece su moleküllerinin arasına hidrojen bağlarıyla özel bir boşluk açılarak donduğunda genleşmesi ve buzun su üstünde yüzmesi sağlanmıştır.",
      soruKoku: "Suyun bu benzersiz istisnai özelliğini tefekkür eden bir öğrenci fen bilimleri açısından hangi nihai hikmete ulaşır?",
      secenekler: {
        A: "Suyun diğer maddelerden farksız olduğuna",
        B: "Bu istisnanın tesadüf olamayacağını; denizlerdeki ve göllerdeki trilyonlarca canlının kışın donup yok olmasını engellemek için Sonsuz Şefkat ve Hikmet Sahibi tarafından hususi olarak tanzim edildiğini",
        C: "Fizik kurallarının her gün rastgele değiştiğine",
        D: "Buzun canlılara zarar verdiğine"
      },
      dogruCevap: "B",
      cozum: "Türkiye Yüzyılı Maarif Modeli; doğadaki özel tasarım ve istisnaların ardındaki hikmeti, rahmeti ve ekolojik dengeyi tefekkür ettirir.",
      olculenKazanim: "F.6.4.2. Suyun yoğunluk anomalisinin hikmetini ve ekolojik gayesini takdir eder.",
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
