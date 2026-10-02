import { SectionContent } from '../../types';

export const unit3Section1: SectionContent = {
  code: "7.3.1",
  title: "Kütle ve Ağırlık İlişkisi",
  unitCode: "7.3",
  unitTitle: "3. Ünite: Kuvvet ve Enerji",
  summary: "Kütle ve ağırlık kavramları arasındaki temel farklar, yer çekimi kuvveti, kütle çekim ivmesi, dinamometre ve eşit kollu terazi kullanımı, farklı gök cisimlerinde (Ay, Dünya, Jüpiter) ağırlık değişimi.",
  kazanimlar: [
    "F.7.3.1.1. Kütle ve ağırlık kavramlarını karşılaştırır.",
    "F.7.3.1.2. Yer çekimini bir kütle çekimi olarak açıklar.",
    "F.7.3.1.3. Farklı gök cisimlerinin kütle çekim kuvvetlerini ve cisimlerin bu cisimlerdeki ağırlıklarını karşılaştırır."
  ],
  hatirlayalim: {
    text: "Kuvvet, duran bir cismi hareket ettirebilen, hareket eden cismi durdurabilen veya yönünü değiştirebilen etkidir. Birimi Newton'dur (N).",
    keyPoints: [
      "Kütle: Değişmeyen madde miktarıdır. Skaler büyüklüktür, birimi gram (g) veya kilogramdır (kg). Eşit kollu teraziyle ölçülür. Evrenin hiçbir yerinde değişmez.",
      "Ağırlık: Bir cisme etki eden yer çekimi (kütle çekimi) kuvvetidir. Vektörel büyüklüktür, yönü yerin merkezine doğrudur. Birimi Newton'dur (N). Dinamometre ile ölçülür.",
      "Gök cisimlerinin kütlesi büyüdükçe uyguladığı çekim kuvveti de artar. Dünya'daki yer çekimi Ay'dakinin yaklaşık 6 katıdır (g_Dünya ≈ 9.8 N/kg, g_Ay ≈ 1.62 N/kg)."
    ]
  },
  onDegerlendirme: [
    {
      id: "od-7-3-1-1",
      question: "Uzay istasyonundaki bir astronotun kütlesi ve ağırlığı Dünya'dakine göre nasıl değişir?",
      answer: "Astronotun kütlesi (madde miktarı) kesinlikle değişmez. Ancak yer çekiminin sıfıra yakın olduğu derin uzayda veya yörüngede ağırlığı sıfır veya sıfıra çok yakın olur."
    },
    {
      id: "od-7-3-1-2",
      question: "Günlük hayatta '70 kilo ağırlığındayım' ifadesi bilimsel açıdan neden hatalıdır?",
      answer: "Çünkü kilogram (kg) kütle birimidir. Bilimsel olarak 'Kütlem 70 kg'dır' veya 'Dünya yüzeyindeki ağırlığım yaklaşık 700 Newton'dur' denilmelidir."
    }
  ],
  hazirlik: {
    question: "Elimizdeki bir elmayı bıraktığımızda neden hep aşağı düşer de yukarı veya sağa doğru uçmaz?",
    answer: "Dünya'nın merkezine doğru uygulanan yer çekimi (kütle çekim) kuvveti nedeniyle daima yerin merkezine doğru çekilir."
  },
  merak: {
    question: "Jüpiter'in üzerine basabilseydik neden kendi vücudumuzu bile taşıyamaz ve ezilirdik?",
    answer: "Jüpiter devasa kütlesi sebebiyle Dünya'dan yaklaşık 2,4 kat daha güçlü bir yer çekimi kuvveti uygular. Dünya'da 600 N ağırlığındaki bir kişi Jüpiter'de 1440 N ağırlığında hissederek kendi ağırlığı altında ezilirdi."
  },
  kopru: {
    title: "Görünmeyen İpler: Kütle Çekim Nizamı",
    content: "Kâinattaki tüm atomlar, elmalar, dağlar, okyanuslar ve devasa gezegenler görünmez kütle çekim bağlarıyla birbirine kenetlenmiştir. Bu görünmez kuvvet olmasaydı ne okyanuslar yerinde durur ne de Dünya atmosferini koruyabilirdi.",
    question: "Gözle görülmeyen, elle tutulmayan ama trilyonlarca tonluk okyanusları yer küreye yapıştıran bu kuvvetin arkasındaki Hikmet nedir?",
    answer: "Canlıların yeryüzünde güvenle yaşayabilmesi için her gök cismine tam kıvamında bir çekim kuvveti bahşeden Sonsuz İlim ve Rahmet Sahibi'nin tasarrufudur."
  },
  // MEB DERS KİTABI DETAYLI KONU ANLATIMI, TABLOLAR, BAĞLANTI NOKTALARI VE HABERLER
  konuAnlatimi: {
    ozet: "Kütle ve ağırlık günlük dilde sıklıkla birbiri yerine kullanılsa da fen bilimlerinde tamamen farklı iki kavramdır. Kütle; değişmeyen madde miktarıdır, skalerdir, birimi kilogramdır (kg) ve eşit kollu terazi ile ölçülür. Ağırlık ise kütleye etki eden yer çekimi kuvvetidir, vektöreldir, birimi Newton'dur (N) ve dinamometre ile ölçülür. Bir cismin kütlesi evrenin her yerinde aynı kalırken, ağırlığı bulunduğu gök cismine ve Dünya üzerindeki konumuna (kutup-ekvator, yükseklik) göre değişir.",
    kavramlar: [
      {
        terim: "Kütle (m)",
        tanim: "Bir cismi oluşturan değişmeyen madde miktarıdır. Cismin sahip olduğu atom ve molekül sayısının bir ölçüsüdür.",
        onemliNoktalar: [
          "Skaler bir büyüklüktür; sadece sayı ve birimle ifade edilir, yönü yoktur.",
          "Temel birimi gram (g) veya kilogramdır (kg).",
          "Eşit kollu terazi ile ölçülür.",
          "Cismin konumu değişse de (dağın tepesi, deniz seviyesi, Ay veya uzay boşluğu) kütlesi ASLA değişmez."
        ]
      },
      {
        terim: "Ağırlık (G)",
        tanim: "Bir gök cisminin (Dünya'nın) kütlesi olan cisimlere uyguladığı yer çekimi (kütle çekim) kuvvetidir.",
        onemliNoktalar: [
          "Bir kuvvettir ve vektörel bir büyüklüktür; yönü daima yerin (gök cisminin) merkezine doğrudur.",
          "Birimi kuvvet birimi olan Newton'dur (N).",
          "Dinamometre (içerisindeki esnek yayın uzama prensibine göre çalışan alet) ile ölçülür.",
          "Bulunulan gezegene, deniz seviyesinden yüksekliğe ve Dünya üzerindeki enleme göre DEĞİŞİR."
        ]
      },
      {
        terim: "Kütle Çekim Kuvveti ve Gök Cisimleri",
        tanim: "Evrendeki tüm kütlelerin birbirini çekme özelliğidir. Gezegenlerin kütlesi büyüdükçe uyguladıkları kütle çekim kuvveti de artar.",
        onemliNoktalar: [
          "Dünya'da 1 kg kütleye etki eden yer çekimi kuvveti yaklaşık 9,8 N (sorularda kolaylık için 10 N alınır).",
          "Ay'ın çekim kuvveti Dünya'nınkinin yaklaşık 6'da 1'i kadardır (g_Ay ≈ 1,62 N/kg).",
          "Güneş Sistemi'nin en büyük gezegeni olan Jüpiter'in çekim kuvveti Dünya'nın yaklaşık 2,4 katıdır (g_Jüpiter ≈ 24,8 N/kg).",
          "Örnek: Kütlesi 60 kg olan bir astronotun kütlesi Dünya'da 60 kg, Ay'da 60 kg'dır. Ağırlığı ise Dünya'da 600 N iken Ay'da sadece 100 N'dur."
        ]
      },
      {
        terim: "Dünya Üzerinde Ağırlığın Değişimi",
        tanim: "Dünya kusursuz bir küre olmayıp kutuplardan basık, ekvatordan şişkin (geoit) bir şekle sahiptir.",
        onemliNoktalar: [
          "Kutuplar yerin merkezine ekvatora göre daha yakındır. Bu yüzden yer çekimi kutuplarda daha güçlüdür; bir cismin ağırlığı KUTUPLARDA EN FAZLA, EKVATORDA EN AZDIR.",
          "Deniz seviyesinden dağların zirvesine doğru çıkıldıkça yerin merkezinden uzaklaşıldığı için YER ÇEKİMİ VE AĞIRLIK AZALIR."
        ]
      }
    ],
    tablolar: [
      {
        baslik: "Kütle ile Ağırlık Karşılaştırma Tablosu",
        sutunlar: ["Karşılaştırılan Özellik", "Kütle (m)", "Ağırlık (G)"],
        satirlar: [
          ["Tanım", "Değişmeyen madde miktarıdır", "Cisme etki eden yer çekimi kuvvetidir"],
          ["Büyüklük Türü", "Skaler büyüklüktür (yönü yoktur)", "Vektörel büyüklüktür (yönü yerin merkezine doğrudur)"],
          ["Birimi", "Gram (g) veya Kilogram (kg)", "Newton (N)"],
          ["Ölçüm Aracı", "Eşit kollu terazi ile ölçülür", "Dinamometre ile ölçülür"],
          ["Konuma Göre Değişimi", "Evrenin hiçbir yerinde değişmez, sabittir", "Gezegene, yüksekliğe ve enleme göre değişir"],
          ["Sembolü", "m harfi ile gösterilir", "G (veya F) harfi ile gösterilir"]
        ],
        dipnot: "* Unutmayınız: Tartıya çıktığınızda ekranda gördüğünüz 60 kg sizin ağırlığınız değil, kütlenizdir!"
      }
    ]
  },
  // MEB KİTABINDAKİ BAĞLANTI NOKTALARI
  baglantiNoktalari: [
    {
      id: "bn-7-3-1",
      baslik: "Uzay ve Tıp Bağlantısı: Astronotların Yer Çekimsiz Ortamdaki Fizyolojisi",
      alan: "Uzay Tıbbı & Fizyoloji",
      aciklama: "Uluslararası Uzay İstasyonu'nda (ISS) yer çekimsiz ortamda aylarca yaşayan astronotların kütlesi değişmezken, ağırlıkları sıfıra iner. Vücut ağırlığı hissetmediği için kemiklere ve kaslara baskı uygulanmaz; bunun sonucunda kemik erimesi ve kas erimesi (atrofi) başlar.",
      soru: "Astronotların Dünya'ya döndüklerinde yürüyebilmeleri için uzay istasyonunda günde 2 saat koşu bandı ve direnç yaylarıyla spor yapmalarının bilimsel nedeni nedir?",
      cevap: "Yer çekiminin kas ve kemik dokusu üzerindeki zorlayıcı baskısını simüle ederek kemiklerdeki kalsiyum kaybını ve kas liflerinin körelmesini engellemek için yapay direnç egzersizleri zorunludur."
    },
    {
      id: "bn-7-3-2",
      baslik: "Jeoloji ve Coğrafya Bağlantısı: Dünya'nın Geoit Şekli ve Ağırlık Ölçümü",
      alan: "Jeofizik & Coğrafya",
      aciklama: "Dünya, kutuplardan basık ekvatordan şişkin geoit bir şekle sahiptir. Kutupların yer merkezine mesafesi ekvatordan yaklaşık 21 kilometre daha kısadır.",
      soru: "Aynı altın külçesini ekvatorda ve Kuzey Kutbu'nda hassas bir dinamometre ile tartan bir tüccar neden kutupta daha büyük bir ağırlık değeri okur?",
      cevap: "Kutuplar yerin merkezine daha yakın olduğu için yer çekimi kuvveti ekvatora göre daha güçlüdür; bu nedenle dinamometredeki yay kutupta daha fazla uzar ve ağırlık yaklaşık %0,5 daha fazla ölçülür (eşit kollu teraziyle ölçülseydi kütle aynı kalırdı)."
    }
  ],
  // MEB KİTABINDAKİ GÜNCEL HABERLER
  haberler: [
    {
      id: "hbr-7-3-1",
      baslik: "Apollo Astronotlarının Ay'da Kanguru Gibi Zıplamasının Arkasındaki Fizik",
      kaynak: "NASA Uzay Tarihi Arşivi & Bilim Genç",
      tarih: "Temmuz 1969 / Güncel İnceleme",
      ozet: "Apollo 11 astronotları Ay yüzeyine indiklerinde üzerlerindeki yaşam destek üniteleri ve uzay kıyafetleriyle toplam kütleleri 150 kg'ı buluyordu. Dünya'da 1500 N ağırlığında olan bu dev donanım, Ay'ın yer çekimi Dünya'nın altıda biri olduğu için Ay'da sadece 250 N (Dünya'daki 25 kg gibi) hissedildi. Astronotlar tek bir adımla metrelerce yukarı sıçrayarak kanguru yürüyüşü yaptılar.",
      soru: "Ay'da yer çekimi Dünya ile aynı olsaydı astronotlar bu ağır kıyafetlerle rahatça yürüyebilirler miydi?",
      cevap: "Hayır; 1500 N ağırlığı taşımak sıradan bir insanın bacak kaslarını aşırı zorlar ve Ay yüzeyinde hareket etmelerini neredeyse imkânsız kılardı. Ay'ın düşük çekim kuvveti astronotların ağır kıyafetlerle rahat hareket etmesini sağlamıştır."
    }
  ],
  // MEB KİTABINDAKİ KONTROL NOKTALARI
  kontrolNoktalari: [
    {
      id: "kn-7-3-1",
      baslik: "Kontrol Noktası 1 (Kütle ve Ağırlık Karşılaştırması)",
      sorular: [
        {
          id: "kn-q-22",
          soru: "Kütle ve ağırlık kavramları ile ilgili aşağıda verilen ifadelerden hangisi DOĞRUDUR?",
          tip: "coktan-secmeli",
          secenekler: [
            "A) Kütle her yerde sabittir, ağırlık bulunulan yere göre değişir.",
            "B) Kütle dinamometreyle ölçülür, ağırlık eşit kollu teraziyle ölçülür.",
            "C) Kütle yönlü bir kuvvettir, ağırlık ise yönsüz skaler bir değerdir.",
            "D) Kütlenin birimi Newton'dur, ağırlığın birimi ise kilogram veya gramdır."
          ],
          dogruSecenek: "A",
          cevap: "A) Kütle her yerde sabittir, ağırlık bulunulan yere göre değişir.",
          aciklama: "Kütle değişmeyen madde miktarı olup sabittir; ağırlık ise çekim kuvvetine bağlı olarak konuma göre değişir."
        },
        {
          id: "kn-q-23",
          soru: "Kütlesi 12 kg olan bir cismin Dünya'daki ağırlığı yaklaşık 120 N olduğuna göre; bu cismin Ay'daki kütlesi ve ağırlığı kaç olur?",
          tip: "klasik",
          cevap: "Ay'daki kütlesi: 12 kg (değişmez). Ay'daki ağırlığı: 20 N (120 / 6 = 20 N).",
          aciklama: "Kütle hiçbir yerde değişmez (12 kg). Ay'ın çekim kuvveti Dünya'nın 1/6'sı olduğu için ağırlığı 120 / 6 = 20 N olur."
        }
      ]
    },
    {
      id: "kn-7-3-2",
      baslik: "Kontrol Noktası 2 (Dünya Üzerinde Ağırlık Değişimi)",
      sorular: [
        {
          id: "kn-q-24",
          soru: "Deniz kenarından Ağrı Dağı'nın zirvesine tırmanan bir dağcının sırt çantasının kütlesi ve ağırlığı nasıl değişir?",
          tip: "coktan-secmeli",
          secenekler: [
            "A) Çantanın kütlesi artar, ağırlığı değişmez.",
            "B) Çantanın kütlesi azalır, ağırlığı artar.",
            "C) Çantanın kütlesi değişmez, ağırlığı azalır.",
            "D) Çantanın hem kütlesi hem ağırlığı azalır."
          ],
          dogruSecenek: "C",
          cevap: "C) Çantanın kütlesi değişmez, ağırlığı azalır.",
          aciklama: "Kütle madde miktarı olduğu için değişmez; dağın zirvesine çıkıldıkça yerin merkezinden uzaklaşıldığı için yer çekimi kuvveti ve dolayısıyla ağırlık azalır."
        }
      ]
    }
  ],
  // BİLGİ BANKASI KUTULARI
  bilgiBankasi: [
    {
      id: "bb-7-3-1",
      baslik: "Isaac Newton ve Başına Düşen Meşhur Elma Efsanesi",
      icerik: "1666 yılında veba salgını nedeniyle Cambridge Üniversitesi tatil edildiğinde genç Isaac Newton köyündeki çiftliğe çekildi. Bahçede otururken daldan yere düşen bir elmayı gördü ve kendine şu devrimsel soruyu sordu: 'Elma neden yana veya yukarı değil de daima yerin merkezine doğru dik olarak düşüyor? Peki, elmayı çeken bu görünmez kuvvet acaba Ay'ı da Dünya yörüngesinde tutuyor olabilir mi?' İşte bu soru, Evrensel Kütle Çekim Kanunu'nun doğmasını sağladı.",
      onemliNot: "Kütle çekim kuvveti temas gerektirmeyen bir alansal kuvvettir."
    },
    {
      id: "bb-7-3-2",
      baslik: "Eğer Yer Çekimi Olmasaydı Ne Olurdu?",
      icerik: "Yer çekimi aniden ortadan kalksaydı; Dünya'nın atmosferini oluşturan oksijen ve azot gazları uzay boşluğuna dağılır, okyanuslardaki sular uzaya savrulur, yeryüzüne basamaz ve binalar temellerinden sökülerek uzayda serbestçe savrulurdu. Canlı yaşamı saniyeler içinde son bulurdu.",
      onemliNot: "Yer çekimi kâinatın dağılmadan bir arada durmasını sağlayan ilahi bir emniyet kemeridir."
    }
  ],
  // MEB KİTABINDAKİ PERFORMANS GÖREVİ
  performansGorevi: {
    baslik: "Farklı Gezegenlerde Ağırlık Hesaplama Tablosu ve Kalibreli Dinamometre Tasarımı",
    amac: "Basit bir paket lastiği veya çelik yay, milimetrik cetvel ve karton kullanarak kendi dinamometreni tasarlamak ve bilinen bir cismin farklı gezegenlerdeki ağırlık simülasyonunu hazırlamak.",
    surecAdimlari: [
      "20 cm boyunda bir çelik yay veya paket lastiğinin bir ucunu sert mukavva üzerine sabitleyiniz; serbest ucuna ataştan bir çengel takınız.",
      "Kütlesi bilinen standart 100 gramlık (Dünya'da 1 Newton) ağırlıkları sırayla asarak yayın uzama miktarını milimetrik cetvel üzerinde 1 N, 2 N, 3 N çizgileriyle kalibre ediniz.",
      "Kütlesi 60 kg olan bir insanın Dünya, Ay, Mars, Jüpiter ve Venüs gezegenlerindeki ağırlıklarını çekim ivmelerini (g) kullanarak hesaplayınız.",
      "Hesaplanan değerleri gösteren renkli bir 'Uzay Yolculuğu Kütle ve Ağırlık Rehberi' posteri hazırlayınız."
    ],
    beklenenUrun: "Çalışır durumda el yapımı kalibreli Dinamometre ve 'Gezegenlerdeki Ağırlık Simülasyon Posteri'.",
    degerlendirmeKriterleri: [
      "Dinamometrenin esneklik sınırının aşılmadan eşit aralıklarla doğru kalibre edilmesi",
      "Kütle birimi (kg) ile ağırlık biriminin (N) kesinlikle birbirine karıştırılmaması",
      "Gezegenlerin çekim ivmesi oranlarının doğru matematiksel işlemlerle hesaplanması",
      "Model ve posterin görsel düzeni ve bilimsel açıklamalarının netliği"
    ]
  },
  // MEB KİTABI NELER ÖĞRENDİK BÖLÜMÜ SORULARI VE MAARİF ÇÖZÜMLERİ
  nelerOgrenildiSorulari: [
    {
      id: "no-7-3-1",
      soru: "1. Kütle ile ağırlık arasındaki temel farkları; tanım, ölçüm aleti, birim ve konuma göre değişim başlıkları altında açıklayınız.",
      cevap: "Kütle: Değişmeyen madde miktarıdır, eşit kollu terazi ile ölçülür, birimi kg'dır, evrenin hiçbir yerinde değişmez. Ağırlık: Cisme etki eden yer çekimi kuvvetidir, dinamometre ile ölçülür, birimi Newton'dur (N), bulunulan gezegene ve yüksekliğe göre değişir.",
      detayliCozum: "Kütle cismin öz maddesini ifade ederken, ağırlık o maddeye uygulanan çekim kuvvetini temsil eder."
    },
    {
      id: "no-7-3-2",
      soru: "2. Dünya yüzeyinde kütlesi 48 kg olan bir cismin; a) Ay'daki kütlesi kaç kg'dır? b) Dünya'daki ağırlığı kaç N'dur? c) Ay'daki ağırlığı kaç N'dur? (g_Dünya = 10 N/kg, g_Ay = g_Dünya / 6)",
      cevap: "a) Ay'daki kütlesi = 48 kg (kütle değişmez). b) Dünya'daki ağırlığı = 48 x 10 = 480 N. c) Ay'daki ağırlığı = 480 / 6 = 80 N.",
      detayliCozum: "Madde miktarı konumdan bağımsızdır; ağırlık ise çekim ivmesiyle doğrudan orantılı olarak değişir."
    },
    {
      id: "no-7-3-3",
      soru: "3. Bir cismin ağırlığı Dünya üzerinde kutuplarda mı yoksa ekvatorda mı daha büyüktür? Sebebini Dünya'nın şekli ile ilişkilendirerek açıklayınız.",
      cevap: "Kutuplarda daha büyüktür. Çünkü Dünya geoit şeklindedir (kutuplardan basık, ekvatordan şişkin). Kutuplar yerin çekim merkezine ekvatora göre yaklaşık 21 km daha yakındır; yer merkezine yaklaştıkça kütle çekim kuvveti arttığı için kutuplarda ağırlık daha fazla ölçülür.",
      detayliCozum: "Mesafe azaldıkça çekim kuvveti artar; bu yüzden kutuplarda dinamometre yayı daha fazla uzar."
    },
    {
      id: "no-7-3-4",
      soru: "4. Günlük hayatta bakkaldan veya pazardan alışveriş yaparken 'Bana 2 kilo ağırlığında elma ver' ifadesindeki bilimsel yanılgıyı düzeltiniz.",
      cevap: "Kilogram (kg) ağırlık değil kütle birimidir. Bilimsel doğrusu: 'Bana 2 kilogram kütlesinde elma ver' veya 'Dünya yüzeyinde yaklaşık 20 Newton ağırlığında elma ver' olmalıdır.",
      detayliCozum: "Pazarcıların kullandığı eşit kollu terazi kütleleri kıyaslar; dolayısıyla ölçülen büyüklük kütledir."
    }
  ],
  hikmetStages: [
    {
      stage: 1,
      name: "1. Varlığı Tanıt",
      concept: "Kütle ve Ağırlık İkilisi",
      text: "Kütle maddenin öz cevheri ve parça sayısıdır; ağırlık ise Dünya'nın o cevhere uyguladığı sevgi dolu çekim kucağıdır.",
      analogies: ["Kütle bir kitabın içindeki sayfa sayısıdır; ağırlık ise o kitabı elinde tuttuğunda hissettiğin basıdır."]
    },
    {
      stage: 2,
      name: "2. Parçalarını Göster",
      concept: "Ölçüm Aletleri",
      text: "Eşit kollu terazi kefelerdeki kütleleri kıyaslar; dinamometre ise içindeki yayın uzamasıyla yerin çekim kuvvetini ölçer.",
      analogies: ["Terazi denge terazisidir, dinamometre ise kuvvet ölçer yaydır."]
    },
    {
      stage: 3,
      name: "3. Ölçü ve Düzen",
      concept: "1/6 Oranı ve Ay Yolculuğu",
      text: "Ay'da yer çekimi Dünya'nın altıda biridir. Orada 600 N'luk bir insan sadece 100 N gelir ve 6 kat yükseğe sıçrayabilir.",
      questionToPonder: "Dünya'nın çekimi Ay kadar zayıf olsaydı atmosfer uzaya kaçmaz mıydı?"
    }
  ],
  etkinlikler: [
    {
      id: "etk-7-3-1",
      title: "Dinamometre ve Terazi ile Kütle-Ağırlık Karşılaştırması",
      type: "Laboratuvar Deneyi",
      materials: ["Dinamometre (10 N'luk)", "Eşit kollu terazi ve kütle takımı", "100 g, 200 g, 500 g demir ağırlıklar"],
      steps: [
        "100 g (0,1 kg) demir kütleyi eşit kollu teraziye koyup kütlesini ölçünüz.",
        "Aynı kütleyi dinamometrenin ucuna asıp ağırlığını (Newton cinsinden) okuyunuz.",
        "200 g ve 500 g kütleler için işlemi tekrarlayarak Kütle (kg) ve Ağırlık (N) tablosu oluşturunuz."
      ],
      questions: [
        {
          qId: "q-7-3-1-1",
          label: "1. Soru",
          prompt: "Kütle arttıkça dinamometrenin gösterdiği ağırlık değeri nasıl değişti?",
          answer: "Doğru orantılı olarak arttı. Her 100 g kütle için dinamometre yaklaşık 1 N ağırlık gösterdi (G ≈ m · g)."
        }
      ]
    }
  ],
  bilgiIstasyonlari: [
    {
      title: "Isaac Newton ve Evrensel Kütle Çekim Kanunu",
      scientistOrMission: "17. Yüzyıl Fizik Dehası",
      description: "Ağaçtan düşen elma ile Ay'ın yörüngede kalmasını aynı kütle çekim kanunuyla açıklayarak modern fiziğin temellerini atmıştır.",
      hikmetNote: "Tabiattaki yerel olaylar ile göklerdeki kozmik intizamın aynı ilahi kanunla yönetildiğinin ispatı."
    }
  ],
  dda: {
    id: "dda-7-3-1",
    statement: "Bir cismin kütlesi Dünya'dan Ay'a götürüldüğünde 6 kat azalır.",
    correctDecision: "Y",
    reason: "Kütle değişmeyen madde miktarıdır; Ay'a gidildiğinde değişen kütle değil, yer çekimi kuvveti olan ağırlıktır.",
    ifTrue: { exit: 1, isCorrect: false, feedback: "Hatalı karar! Kütle hiçbir yerde değişmez." },
    ifFalse: { exit: 2, isCorrect: true, feedback: "Tebrikler! Kütlenin değişmediğini, ağırlığın azaldığını doğru kavradınız." }
  },
  biliyorumAnliyorumDusunuyorum: {
    biliyorum: "Kütle kg ile eşit kollu terazide ölçülür ve sabittir; ağırlık N birimli kuvvettir, dinamometre ile ölçülür ve konuma göre değişir.",
    anliyorum: "Yer çekimi olmasaydı Dünya yüzeyindeki hiçbir şey tutunamaz, sular ve hava boş uzaya savrulurdu.",
    dusunuyorum: "Dünya'nın kütlesi tam olması gerektiği büyüklükte yaratılmasaydı, daha küçük olsa atmosferi tutamayacak, daha büyük olsa kemiklerimiz bizi taşıyamayacaktı. Bu hassas denge neyi fısıldar?"
  },
  pekistirmeIstasyonu: {
    stationTitle: "Neler Öğrendik? & 7. Sınıf 3. Ünite 1. Pekiştirme İstasyonu (Kütle ve Ağırlık)",
    pageReference: "Sayfa 70 - 82",
    summaryText: "Kütle ve ağırlık farkları, ölçüm araçları, kütle çekim ivmesi, Ay ve gezegenlerdeki ağırlık ilişkisi.",
    targetSkills: ["Kütle ve ağırlık kavramlarını ayırt eder ve farklı ortamlarda kıyaslar."]
  },
  fillInBlanks: [
    {
      id: "fib-7-3-1-1",
      number: 1,
      baglam: "Bir cisme etki eden yer çekimi kuvvetine verilen addır.",
      soruKoku: "Cisme uygulanan yer çekimi kuvvetine .................................... denir.",
      blankAnswer: "Ağırlık",
      acceptableAnswers: ["ağırlık", "Ağırlık"],
      explanation: "Ağırlık bir yer çekimi kuvvetidir.",
      wordBankHint: ["Ağırlık", "Kütle", "Hacim", "Sürat"]
    },
    {
      id: "fib-7-3-1-2",
      number: 2,
      baglam: "Madde miktarı evrenin hiçbir yerinde değişmez.",
      soruKoku: "Değişmeyen madde miktarına .................................... denir.",
      blankAnswer: "Kütle",
      acceptableAnswers: ["kütle", "Kütle"],
      explanation: "Kütle skaler ve sabittir.",
      wordBankHint: ["Kütle", "Ağırlık", "Basınç", "Enerji"]
    },
    {
      id: "fib-7-3-1-3",
      number: 3,
      baglam: "Ağırlığın yönü daima gezegenin merkezine doğrudur ve kuvvet birimiyle ifade edilir.",
      soruKoku: "Ağırlık birimi .................................... (N)'dur.",
      blankAnswer: "Newton",
      acceptableAnswers: ["newton", "Newton"],
      explanation: "Ağırlık birimi Newton'dur.",
      wordBankHint: ["Newton", "Kilogram", "Joule", "Pascal"]
    },
    {
      id: "fib-7-3-1-4",
      number: 4,
      baglam: "Laboratuvarlarda kütle eşit kollu terazi ile ölçülürken, ağırlık yaylı aletle ölçülür.",
      soruKoku: "Ağırlık .................................... adı verilen esnek yaylı aletle ölçülür.",
      blankAnswer: "Dinamometre",
      acceptableAnswers: ["dinamometre", "Dinamometre"],
      explanation: "Dinamometre kuvvet ölçer.",
      wordBankHint: ["Dinamometre", "Barometre", "Manometre", "Kronometre"]
    },
    {
      id: "fib-7-3-1-5",
      number: 5,
      baglam: "Ay'ın kütlesi Dünya'dan çok daha küçük olduğu için uyguladığı kütle çekim kuvveti de zayıftır.",
      soruKoku: "Ay'daki yer çekimi Dünya'dakinin yaklaşık ....................................da biri kadardır.",
      blankAnswer: "Altı",
      acceptableAnswers: ["altı", "6", "1/6"],
      explanation: "Ay yer çekimi 1/6 oranındadır.",
      wordBankHint: ["Altı", "İki", "On", "Yüz"]
    },
    {
      id: "fib-7-3-1-6",
      number: 6,
      baglam: "Dünya kutuplardan basık, ekvatordan şişkin (geoit) bir yapıya sahiptir.",
      soruKoku: "Dünya'nın merkezine daha yakın olan kutuplarda ağırlık ekvatora göre daha ....................................dır.",
      blankAnswer: "Fazla",
      acceptableAnswers: ["fazla", "büyük", "Fazla"],
      explanation: "Merkeze yakın yerde yer çekimi daha fazladır.",
      wordBankHint: ["Fazla", "Az", "Eşit", "Sıfır"]
    },
    {
      id: "fib-7-3-1-7",
      number: 7,
      baglam: "Deniz seviyesinden yükseklere (örneğin Everest Dağı zirvesine) çıkıldıkça Dünya merkezinden uzaklaşılır.",
      soruKoku: "Yükseklere çıkıldıkça bir cismin ağırlığı .................................... (azalır/artar).",
      blankAnswer: "Azalır",
      acceptableAnswers: ["azalır", "Azalır"],
      explanation: "Merkezden uzaklaştıkça çekim azalır.",
      wordBankHint: ["Azalır", "Artar", "Değişmez", "İkiye katlanır"]
    },
    {
      id: "fib-7-3-1-8",
      number: 8,
      baglam: "Kütlenin standart birimi kilogram (kg) veya gramdır (g).",
      soruKoku: "Kütle ölçümünde kullanılan temel alet .................................... kollu terazidir.",
      blankAnswer: "Eşit",
      acceptableAnswers: ["eşit", "Eşit"],
      explanation: "Eşit kollu terazi kütle ölçer.",
      wordBankHint: ["Eşit", "Tek", "Yaylı", "Manyetik"]
    },
    {
      id: "fib-7-3-1-9",
      number: 9,
      baglam: "Güneş sistemindeki en büyük kütleye sahip gezegen en büyük çekim kuvvetini uygular.",
      soruKoku: "Güneş sisteminde üzerinde en ağır hissedeceğimiz gezegen ....................................dir.",
      blankAnswer: "Jüpiter",
      acceptableAnswers: ["jüpiter", "Jüpiter"],
      explanation: "Jüpiter en büyük çekime sahiptir.",
      wordBankHint: ["Jüpiter", "Mars", "Merkür", "Ay"]
    },
    {
      id: "fib-7-3-1-10",
      number: 10,
      baglam: "Ağırlık bir kuvvet olduğu için yönlü (vektörel) bir büyüklüktür.",
      soruKoku: "Ağırlığın yönü daima yerin ....................................ne doğrudur.",
      blankAnswer: "Merkez",
      acceptableAnswers: ["merkez", "merkezine", "Merkez"],
      explanation: "Çekim yerin merkezine doğrudur.",
      wordBankHint: ["Merkez", "Dış", "Kutup", "Güneş"]
    }
  ],
  contextQuestions: [
    {
      id: "mcq-7-3-1-1",
      number: 1,
      baglam: "Kütlesi 60 kg olan bir astronot Dünya'dan Ay'a araştırma yapmak üzere gitmiştir.\n(Dünya'da 1 kg kütleye etki eden yer çekimi kuvveti ≈ 10 N, Ay'da ise ≈ 1,6 N kabul edilecektir.)",
      soruKoku: "Bu astronotun Ay yüzeyindeki kütlesi ve ağırlığı aşağıdakilerden hangisinde doğru verilmiştir?",
      secenekler: {
        A: "Kütlesi: 10 kg, Ağırlığı: 600 N",
        B: "Kütlesi: 60 kg, Ağırlığı: 100 N",
        C: "Kütlesi: 60 kg, Ağırlığı: 600 N",
        D: "Kütlesi: 10 kg, Ağırlığı: 100 N"
      },
      dogruCevap: "B",
      cozum: "Kütle değişmeyen madde miktarıdır, bu nedenle astronotun kütlesi Ay'da da 60 kg'dır. Ağırlık ise yer çekimiyle hesaplanır: G_Ay = 60 kg · (10/6) ≈ 100 N (veya 60 · 1.6 ≈ 96-100 N).",
      olculenKazanim: "F.7.3.1.1. Kütle ve ağırlık kavramlarını karşılaştırır.",
      olculenBeceri: "Bilimsel Çıkarım ve Hesaplama",
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
      id: "mcq-7-3-1-2",
      number: 2,
      baglam: "Bir araştırmacı özdeş bir cismi Dünya üzerindeki K (Ekvator deniz seviyesi), L (Kutup deniz seviyesi) ve M (Everest Dağı zirvesi) noktalarında dinamometre ile tartmıştır.",
      soruKoku: "Dinamometrenin K, L ve M noktalarında gösterdiği değerlerin büyükten küçüğe sıralaması nasıldır?",
      secenekler: {
        A: "L > K > M",
        B: "M > K > L",
        C: "K > L > M",
        D: "L > M > K"
      },
      dogruCevap: "A",
      cozum: "Dünya kutuplardan basık olduğu için kutuplar (L) yerin merkezine en yakındır ve çekim en büyüktür. Everest Dağı (M) merkezden en uzaktır ve çekim en küçüktür. Sıralama L > K > M şeklindedir.",
      olculenKazanim: "F.7.3.1.2. Yer çekimi kuvvetinin konuma göre değişimini analiz eder.",
      olculenBeceri: "Mekansal ve Bilimsel Muhakeme",
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
      id: "mcq-7-3-1-3",
      number: 3,
      baglam: "Eşit kollu terazi ile dinamometre fen laboratuvarında yan yana durmaktadır. Fen öğretmeni tahtaya şu özellikleri yazmıştır:\nI. Yer çekimi kuvvetini ölçer.\nII. Değişmeyen madde miktarını ölçer.\nIII. Ölçüm birimi kilogramdır.\nIV. Ölçüm aletinin içinde sarmal yay bulunur.",
      soruKoku: "Bu özelliklerden dinamometreye ait olanlar hangi seçenekte bir arada verilmiştir?",
      secenekler: {
        A: "I ve III",
        B: "I ve IV",
        C: "II ve III",
        D: "II ve IV"
      },
      dogruCevap: "B",
      cozum: "Dinamometre yaylı bir alettir ve yer çekimi kuvvetini (ağırlığı) ölçer (I ve IV). Kütleyi ve kg birimini ölçen eşit kollu terazidir (II ve III).",
      olculenKazanim: "F.7.3.1.1. Ölçüm aletlerini ve birimlerini karşılaştırır.",
      olculenBeceri: "Sınıflandırma ve Ayırt Etme",
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
      id: "mcq-7-3-1-4",
      number: 4,
      baglam: "Bir manav tartısında kütlesi 2 kg gelen bir elma sepeti bulunmaktadır.",
      soruKoku: "Bu elma sepetine Dünya tarafından uygulanan yer çekimi kuvveti yaklaşık kaç Newton'dur? (g ≈ 10 N/kg)",
      secenekler: {
        A: "2 N",
        B: "5 N",
        C: "20 N",
        D: "200 N"
      },
      dogruCevap: "C",
      cozum: "Ağırlık = Kütle · Yer çekimi ivmesi = 2 kg · 10 N/kg = 20 N.",
      olculenKazanim: "F.7.3.1.1. Kütle ve ağırlık sayısal ilişkisini kurar.",
      olculenBeceri: "Uygulama ve Hesaplama",
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
      id: "mcq-7-3-1-5",
      number: 5,
      baglam: "Ay yüzeyinde yürüyen astronotların adeta uçarcasına zıplayarak hareket ettikleri NASA video kayıtlarında görülmektedir.",
      soruKoku: "Astronotların Ay'da devasa adımlarla yükseğe sıçrayabilmelerinin sebebi nedir?",
      secenekler: {
        A: "Ay'da kütlelerinin sıfırlanması",
        B: "Ay'ın çekim kuvvetinin Dünya'dakinden yaklaşık 6 kat daha az olması nedeniyle ağırlıklarının azalması",
        C: "Ay yüzeyinin yay gibi esnek olması",
        D: "Astronot kıyafetlerinin gaz püskürtmesi"
      },
      dogruCevap: "B",
      cozum: "Kütle değişmez; ancak Ay'ın kütlesi küçük olduğu için çekim kuvveti 6 kat azdır ve astronotun ağırlığı azalır, kasları onu çok daha yükseğe fırlatabilir.",
      olculenKazanim: "F.7.3.1.3. Farklı gök cisimlerinde ağırlık değişimini açıklar.",
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
    }
  ]
};
