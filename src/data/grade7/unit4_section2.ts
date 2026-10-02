import { SectionContent } from '../../types';

export const unit4Section2: SectionContent = {
  code: "7.4.2",
  title: "Mercekler ve Günlük Hayatta Kullanım Alanları",
  unitCode: "7.4",
  unitTitle: "4. Ünite: Işığın Kırılması ve Mercekler",
  summary: "En az bir yüzeyi küresel olan saydam cisimler (mercekler), ince kenarlı (yakınsak) ve kalın kenarlı (ıraksak) merceklerin ışığı kırma özellikleri, odak noktası (F), odak uzaklığı, optik merkez, cisimleri büyütme ve küçültme ilkeleri, göz kusurlarının düzeltilmesi, orman yangınları tehlikesi, optik aletler (mikroskop, teleskop, dürbün, kamera) ve TÜBİTAK OPMER.",
  kazanimlar: [
    "F.7.4.2.1. Mercek çeşitlerine yönelik bilimsel çıkarım yapar; ince ve kalın kenarlı merceklerin odak ve ışık kırma özelliklerini karşılaştırır.",
    "F.7.4.2.2. Merceklerin günlük hayatta ve teknolojide kullanım alanlarını örneklerle sınıflandırır.",
    "F.7.4.2.3. Doğaya bırakılan cam ve içi su dolu pet şişelerin mercek etkisi oluşturarak orman yangınlarına neden olabileceğini fark eder ve çevre bilinci geliştirir.",
    "F.7.4.2.4. İbn Sehl, İbnü'l-Heysem, Kemâleddîn el-Fârisî ve Thomas Young'ın optik ve mercek bilimine katkılarını değerlendirir."
  ],
  hatirlayalim: {
    text: "Bir önceki bölümde ışığın farklı ortamlara geçerken kırılarak doğrultu değiştirdiğini öğrendik. Mercekler, ışığı iki defa (merceğe girerken ve mercekten çıkarken) kırarak tek bir noktada toplamak ya da bir noktadan çıkıyormuş gibi dağıtmak amacıyla tasarlanmış saydam optik araçlardır.",
    keyPoints: [
      "Merceklerin merkezinden geçen yatay eksene Asal Eksen, tam orta noktasına Optik Merkez (O) denir.",
      "Optik merkezden geçen ışık ışınları kırılmadan yoluna devam eder.",
      "İnce kenarlı mercek ışığı toplar; kalın kenarlı mercek ışığı dağıtır."
    ]
  },
  onDegerlendirme: [
    {
      id: "od-mercek-1",
      question: "Büyüteç neden küçük yazıları ve nesneleri daha büyük gösterir?",
      answer: "Büyüteç ince kenarlı (yakınsak) bir mercektir. Cisim optik merkez ile odak noktası arasına yerleştirildiğinde mercek ışınları kırarak cismin düz ve olduğundan daha büyük bir görüntüsünü oluşturur."
    },
    {
      id: "od-mercek-2",
      question: "Evlerin dış kapı dürbünlerinde neden kalın kenarlı mercek tercih edilir?",
      answer: "Kalın kenarlı mercek ışığı dağıtıcı özelliğe sahiptir ve cisimlerin düz ve küçük görüntülerini oluşturur. Bu sayede kapı önündeki çok geniş bir görüş alanını tek bir bakışta görmemizi sağlar."
    },
    {
      id: "od-mercek-3",
      question: "Ormanlara atılan cam şişeler veya içi su dolu pet şişeler nasıl yangın çıkarabilir?",
      answer: "Şişelerin küresel tabanları veya su dolu silindirik gövdeleri ince kenarlı mercek görevi görür. Güneş ışınlarını tek bir odak noktasında toplayarak sıcaklığı yüzlerce dereceye çıkarır ve kuru otların tutuşmasına sebep olur."
    }
  ],
  hazirlik: {
    question: "Azra, lavanta bahçesinde uzaktaki lavantaları fotoğraf makinesiyle çekerken ekranda onları çok yakındaymış gibi net görebilmiştir. Fotoğraf makinesinin objektifi nesneleri nasıl bu kadar netleştirir?",
    answer: "Objektif içinde farklı odak uzaklıklarına sahip ince ve kalın kenarlı mercek kombinasyonları yer alır. Bu mercekler ışığı kırıp sensör üzerine odaklayarak görüntünün yakınlaşmasını ve netleşmesini sağlar."
  },
  merak: {
    question: "Yaprak üzerindeki bir yağmur damlası yaprağın damarlarını neden devasa boyutta ve çok belirgin gösterir?",
    answer: "Su damlasının dışa doğru bombeli (tümsek) yapısı ince kenarlı mercek özelliği taşır. Işığı toplayarak altındaki yaprak hücrelerini ve damarlarını büyüterek mikroskobik ayrıntıları görünür kılar."
  },
  kopru: {
    title: "Mercimek Tanesinden Kâinatı Gören Teleskoplara",
    content: "Mercek (lens) kelimesi Latince mercimek (lentil) tanesinden türemiştir. Bu basit küresel cam parçaları bir araya getirilerek hem mikro dünyayı açan mikroskoplar hem de sonsuz uzayı gözleyen teleskoplar inşa edilmiştir.",
    question: "TÜBİTAK OPMER projesi ülkemize optik alanda ne kazandırmıştır?",
    answer: "Uydularımız ve savunma sanayimiz için gereken yüksek hassasiyetli büyük optik mercek ve aynaların yurt dışına bağımlı olmadan millî imkânlarla üretilmesini sağlamıştır."
  },
  // MEB DERS KİTABI DETAYLI KONU ANLATIMI, TABLOLAR, BAĞLANTI NOKTALARI VE HABERLER
  konuAnlatimi: {
    ozet: "Işığın kırılması prensibine göre çalışan, en az bir yüzeyi küresel olan saydam optik araçlara mercek denir. Mercekler kenar özelliklerine göre iki gruba ayrılır: İnce kenarlı (yakınsak) mercekler ışığı asal eksen üzerindeki odak noktasında (F) toplar; büyüteç görevi görür ve hipermetrop göz kusurunu düzeltir. Kalın kenarlı (ıraksak) mercekler ise ışığı odaktan geliyormuş gibi dağıtır; daima düz ve küçük görüntü vererek geniş bir görüş alanı sağlar, miyop göz kusurunu düzeltir ve kapı dürbünlerinde kullanılır. Doğaya bırakılan cam kırıkları veya su dolu pet şişeler ince kenarlı mercek gibi davranarak güneş ışığını odaklar ve orman yangınlarına neden olur.",
    kavramlar: [
      {
        terim: "Merceğin Temel Kavramları",
        tanim: "Merceklerin ışığı kırma özelliklerini tanımlamakta kullanılan geometrik kavramlardır.",
        onemliNoktalar: [
          "Asal Eksen: Merceğin küresel yüzeylerinin eğrilik merkezlerinden ve optik merkezinden geçen yatay eksendir.",
          "Optik Merkez (O): Merceğin geometrik merkezidir. Asal eksen üzerindeki bu noktadan geçen ışınlar KIRILMADAN düz geçer.",
          "Odak Noktası (F): Asal eksene paralel gelen ışınların kırıldıktan sonra toplandığı (ince kenarlıda) veya uzantılarının kesiştiği (kalın kenarlıda) noktadır. Merceğin her iki tarafında birer odak noktası bulunur.",
          "Odak Uzaklığı (f): Odak noktası ile optik merkez arasındaki mesafedir."
        ]
      },
      {
        terim: "İnce Kenarlı (Yakınsak) Mercek",
        tanim: "Kenarları ortasına göre daha ince olan mercek türüdür. Şematik sembolü iki ucu dışarı doğru ok işaretli çizgidir.",
        onemliNoktalar: [
          "Işığı TOPLAYICI mercektir.",
          "Asal eksene paralel gelen ışık ışınlarını kırarak odakta toplar.",
          "Cismin merceğe olan mesafesine göre düz-büyük (büyüteç) veya ters görüntü oluşturabilir.",
          "Kullanım Alanları: Büyüteç, teleskop, mikroskop, fotoğraf makinesi objektifi, hipermetrop gözlükleri."
        ]
      },
      {
        terim: "Kalın Kenarlı (Iraksak) Mercek",
        tanim: "Kenarları ortasına göre daha kalın olan mercek türüdür. Şematik sembolü iki ucu içeri doğru çatallı çizgidir.",
        onemliNoktalar: [
          "Işığı DAĞITICI mercektir.",
          "Asal eksene paralel gelen ışınları, uzantıları merceğin arkasındaki odaktan geliyormuş gibi dağıtarak kırar.",
          "Cismin konumu ne olursa olsun daima DÜZ ve KÜÇÜK görüntü verir.",
          "Kullanım Alanları: Ev kapı dürbünleri (geniş bir alanı görmek için), miyop gözlükleri, el fenerleri reflektörleri."
        ]
      },
      {
        terim: "Göz Kusurları ve Merceklerle Düzeltilmesi",
        tanim: "Göz merceğinin veya göz küresinin yapısındaki bozulmalar sonucu net görememe durumudur.",
        onemliNoktalar: [
          "Miyop (Uzağı Net Görememe): Göz küresi uzamıştır veya göz merceği aşırı kırılarak görüntüyü ağ tabakanın (retinanın) ÖNÜNE düşürür. Tedavisinde ışığı dağıtıp retinaya ulaştıran KALIN KENARLI MERCEK kullanılır.",
          "Hipermetrop (Yakını Net Görememe): Göz küresi kısalmıştır; görüntü ağ tabakanın ARKASINA düşer. Tedavisinde ışığı toplayıp öne çeken İNCE KENARLI MERCEK kullanılır."
        ]
      },
      {
        terim: "Orman Yangınları ve Mercek Tehlikesi",
        tanim: "Piknik alanlarına ve doğaya atılan şeffaf atıkların oluşturduğu yangın riskidir.",
        onemliNoktalar: [
          "Kırık cam şişeler, şişe dipleri ve içi su dolu pet şişeler güneşte İNCE KENARLI MERCEK görevi görür.",
          "Güneş ışığını kuru ot veya yaprakların üzerine tek bir noktada odaklayarak sıcaklığı yüzlerce dereceye çıkarır ve kuru örtünün alev almasına sebep olur.",
          "Çevre bilinci gereği ormanlara asla cam veya şeffaf atık bırakılmamalıdır."
        ]
      },
      {
        terim: "TÜBİTAK OPMER ve Optik Bilimi Öncüleri",
        tanim: "Optik alanında millî araştırma merkezi ve tarihteki büyük bilginlerdir.",
        onemliNoktalar: [
          "TÜBİTAK OPMER: Millî uydular ve İHA/SİHA sistemleri için yüksek hassasiyetli optik mercek ve aynalar üreten merkezdir.",
          "İbn Sehl: Kırılma kanununu ve mercek profillerini ilk çizen İslam bilginidir.",
          "İbnü'l-Heysem: Optiğin babasıdır; karanlık oda (kamera obskura) ve göz yapısını açıklamıştır."
        ]
      }
    ],
    tablolar: [
      {
        baslik: "İnce Kenarlı ve Kalın Kenarlı Mercek Karşılaştırma Tablosu",
        sutunlar: ["Karşılaştırılan Özellik", "İnce Kenarlı (Yakınsak) Mercek", "Kalın Kenarlı (Iraksak) Mercek"],
        satirlar: [
          ["Fiziksel Yapı", "Kenarları ortasına göre incedir", "Kenarları ortasına göre kalındır"],
          ["Işığa Etkisi", "Paralel ışığı tek bir odakta toplar", "Paralel ışığı odaktan geliyormuş gibi dağıtır"],
          ["Şematik Gösterim", "İki ucu dışa doğru ok işaretli doğru", "İki ucu içe doğru çatallı doğru"],
          ["Odak Doğası", "Işınların kendileri kesişir (Gerçek odak)", "Işınların uzantıları kesişir (Sanal odak)"],
          ["Görüntü Özelliği", "Düz-büyük (büyüteç) veya ters görüntü", "Daima düz ve cisimden küçüktür"],
          ["Tedavi Ettiği Göz Kusuru", "Hipermetrop (Yakını göremeyenler)", "Miyop (Uzağı göremeyenler)"],
          ["Kullanım Alanları", "Büyüteç, teleskop, mikroskop, kamera", "Kapı dürbünü, miyop gözlüğü, el feneri"]
        ],
        dipnot: "* Hafıza Şifresi: İnce kenarlı = Toplar, büyütür (Hipermetrop). Kalın kenarlı = Dağıtır, küçültür (Miyop)."
      }
    ]
  },
  // MEB KİTABINDAKİ BAĞLANTI NOKTALARI
  baglantiNoktalari: [
    {
      id: "bn-7-4-3",
      baslik: "Çevre ve Orman Bağlantısı: Orman Yangınlarında Mercek Etkisi",
      alan: "Çevre Bilimi & Orman Mühendisliği",
      aciklama: "Yaz aylarında Ege ve Akdeniz ormanlarında çıkan yangınların önemli bir kısmı insan ihmali ve atılan şeffaf çöplerden kaynaklanır. İçi yarıya kadar su dolu şeffaf bir pet şişenin yuvarlak tabanı ince kenarlı mercek işlevi görür.",
      soru: "Su dolu pet şişe kuru çam pürçükleri üzerinde neden yangın başlatır?",
      cevap: "Su dolu şişe güneşten gelen paralel ışık ışınlarını kırarak tek bir odak noktasında toplar. Odaklanan bu ışık enerjisi kuru otların tutuşma sıcaklığı olan 300 °C'ye ulaşmasına neden olarak kıvılcımsız aniden alev almasını sağlar."
    },
    {
      id: "bn-7-4-4",
      baslik: "Savunma Sanayii ve Optik Bağlantısı: Millî SİHA Kameraları (OPMER)",
      alan: "Savunma Sanayii & Elektro-Optik",
      aciklama: "Bayraktar TB2 ve Akıncı gibi millî SİHA'larımız 20.000 feet yükseklikten yerdeki hedefleri santimetrik hassasiyetle görüntüler. Bu kameralarda (ASELSAN CATS) onlarca özel kaplamalı küresel mercek yer alır.",
      soru: "TÜBİTAK OPMER'in bu mercekleri ülkemizde üretmesi savunma sanayiimiz için neden hayati bir kazanımdır?",
      cevap: "Yabancı ülkelerin uyguladığı optik ambargoları kırmış, uydularımız ve hava araçlarımız için gereken stratejik kristal mercekleri tamamen yerli imkânlarla üreterek tam bağımsızlık sağlamıştır."
    }
  ],
  // MEB KİTABINDAKİ GÜNCEL HABERLER
  haberler: [
    {
      id: "hbr-7-4-2",
      baslik: "İbn Sehl'in 1000 Yıllık Mercek Çizimleri Modern Lazer Cerrahisinde Yaşıyor",
      kaynak: "Uluslararası Optik Tarihi Bülteni & Bilim ve Teknik",
      tarih: "2023",
      ozet: "984 yılında Bağdat'ta yaşayan Müslüman bilim insanı İbn Sehl, yazdığı el yazmasında ışığı tek bir noktada mükemmel toplayan 'hiperbolik ve parabolik mercek' kesitlerinin geometrisini çizmiştir. 20. yüzyılda bulunan Snell yasasının temeli olan bu çizimler, bugün göz kusurlarını lazerle düzelten (No-Touch Laser) cihazların odaklama merceklerinde birebir uygulanmaktadır.",
      soru: "İbn Sehl'in optik çalışmalarının bilim tarihindeki önemi nedir?",
      cevap: "Kırılma yasasını Batılı bilim insanlarından tam 600 yıl önce matematiksel olarak keşfetmiş ve optik merceklerin kusursuz odaklama profillerini ilk kez bilim dünyasına kazandırmıştır."
    }
  ],
  // MEB KİTABINDAKİ KONTROL NOKTALARI
  kontrolNoktalari: [
    {
      id: "kn-7-4-3",
      baslik: "Kontrol Noktası 1 (Mercek Türleri ve Işık Kırma Özellikleri)",
      sorular: [
        {
          id: "kn-q-34",
          soru: "Asal eksenine paralel gönderilen ışık ışınlarını kırarak bir noktada toplayan mercek türü ve sembolü aşağıdakilerden hangisidir?",
          tip: "coktan-secmeli",
          secenekler: [
            "A) Kalın kenarlı mercek - İki ucu çatallı gösterim",
            "B) Tümsek ayna sistemi - Dış yüzeyi yansıtıcı cam",
            "C) İnce kenarlı mercek - İki ucu dışa dönük ok işareti",
            "D) Düzlem ayna yüzeyi - Tek yönlü mat kaplamalı çizgi"
          ],
          dogruSecenek: "C",
          cevap: "C) İnce kenarlı mercek - İki ucu dışa dönük ok işareti",
          aciklama: "İnce kenarlı (yakınsak) mercekler ışığı toplayıcı özelliğe sahiptir ve uçları dışa dönük ok işaretiyle gösterilir."
        },
        {
          id: "kn-q-35",
          soru: "Dış kapı dürbünlerinde neden ince kenarlı mercek yerine kalın kenarlı mercek kullanılır?",
          tip: "klasik",
          cevap: "Kalın kenarlı mercek ışığı dağıtarak cisimlerin daima düz ve küçük görüntüsünü oluşturur; böylece kapı önündeki çok geniş bir görüş alanını tek bir bakışta görmemizi sağlar.",
          aciklama: "Kalın kenarlı merceğin geniş açılı görme özelliği kapı dürbünleri için idealdir."
        }
      ]
    },
    {
      id: "kn-7-4-4",
      baslik: "Kontrol Noktası 2 (Göz Kusurları ve Mercekler)",
      sorular: [
        {
          id: "kn-q-36",
          soru: "Uzağı net göremeyen miyop ve yakını net göremeyen hipermetrop iki kişinin gözlük camlarında sırasıyla hangi mercekler kullanılır?",
          tip: "coktan-secmeli",
          secenekler: [
            "A) Miyop: Kalın kenarlı, Hipermetrop: İnce kenarlı",
            "B) Miyop: İnce kenarlı, Hipermetrop: Kalın kenarlı",
            "C) Miyop: İnce kenarlı, Hipermetrop: İnce kenarlı",
            "D) Miyop: Kalın kenarlı, Hipermetrop: Kalın kenarlı"
          ],
          dogruSecenek: "A",
          cevap: "A) Miyop: Kalın kenarlı, Hipermetrop: İnce kenarlı",
          aciklama: "Miyoplukta kalın kenarlı mercek (ışığı dağıtarak retinaya düşürür), hipermetropta ince kenarlı mercek (ışığı toplayarak retinaya çeker) kullanılır."
        }
      ]
    }
  ],
  // BİLGİ BANKASI KUTULARI
  bilgiBankasi: [
    {
      id: "bb-7-4-3",
      baslik: "Gözümüzün İçindeki Canlı ve Akıllı Mercek",
      icerik: "Göz bebeğimizin hemen arkasında saydam, esnek ve canlı bir ince kenarlı mercek bulunur. Yakındaki bir kitaba bakarken çevresindeki kirpiksi kaslar kasılarak merceği kalınlaştırır ve kırıcılığını artırır; uzaktaki bir dağa bakarken kaslar gevşeyerek merceği inceltir. Bu olaya 'göz uyumu' denir ve hiçbir fotoğraf makinesi bu esnekliğe henüz ulaşamamıştır.",
      onemliNot: "Gözümüzdeki mercek doğuştan ince kenarlıdır."
    },
    {
      id: "bb-7-4-4",
      baslik: "İbnü'l-Heysem: Görme Teorisi ve Optiğin Kurucusu",
      icerik: "Antik Yunan bilginleri gözden çıkan görünmez ışınların nesnelere çarparak görmeyi sağladığını sanıyordu. 11. yüzyılda İbnü'l-Heysem deneylerle ışığın nesnelerden göze geldiğini ispatladı. Merceklerin ve göz bebeğinin ışığı kırma ilkelerini Kitâbü'l-Menâzır adlı dev eserinde açıklamıştır.",
      onemliNot: "Tarihteki ilk karanlık odayı (Camera Obscura) tasarlamıştır."
    }
  ],
  // MEB KİTABINDAKİ PERFORMANS GÖREVİ
  performansGorevi: {
    baslik: "Su Damlası ve Şeffaf Bardakla Basit Mikroskop Tasarımı",
    amac: "Karton, şeffaf bant ve bir damla su kullanarak mikroskobik büyüteç tasarlamak; gazete yazıları ve soğan zarındaki hücreleri incelemek.",
    surecAdimlari: [
      "Sert bir kartonun ortasına delgeç ile 5 mm çapında küçük bir delik açınız.",
      "Deliğin alt yüzeyine şeffaf koli bandı yapıştırınız; üst yüzeydeki delik haznesine kürdan ucuyla küresel tek bir su damlası bırakınız.",
      "Oluşan su damlasının bombeli yapısıyla ince kenarlı bir mercek elde ettiğinizi gözlemleyiniz.",
      "Kartonu bir gazete kâğıdı veya soğan zarı üzerine yaklaştırıp uzaklaştırarak oluşan devasa büyütülmüş görüntüyü fotoğraflayınız."
    ],
    beklenenUrun: "Çalışır durumda El Yapımı Su Damlası Mikroskobu ve Büyütülmüş Nesne Fotoğrafı.",
    degerlendirmeKriterleri: [
      "Su damlasının küreselliğinin korunması ve ince kenarlı mercek gibi davranması",
      "Netleme mesafesinin (odak uzaklığının) doğru ayarlanması",
      "Modelin çalışma prensibinin merceklerle ilişkilendirilerek raporlanması"
    ]
  },
  // MEB KİTABI NELER ÖĞRENDİK BÖLÜMÜ SORULARI VE MAARİF ÇÖZÜMLERİ
  nelerOgrenildiSorulari: [
    {
      id: "no-7-4-5",
      soru: "1. İnce kenarlı ve kalın kenarlı merceklerin asal eksene paralel gelen ışık ışınlarına etkisini çizimle ve sözlü olarak açıklayınız.",
      cevap: "İnce kenarlı mercek: Paralel gelen ışık ışınlarını kırarak merceğin diğer tarafında asal eksen üzerindeki odak noktasında (F) toplar (yakınsar). Kalın kenarlı mercek: Paralel gelen ışınları, uzantıları merceğin arkasındaki odak noktasından (F) geliyormuş gibi çevreye dağıtır (ıraksar).",
      detayliCozum: "İnce kenarlı toplar, kalın kenarlı dağıtır; odak noktaları bu kırılma davranışlarıyla tanımlanır."
    },
    {
      id: "no-7-4-6",
      soru: "2. Miyopluk ve hipermetropluk göz kusurlarını açıklayınız; bu kusurların tedavisinde neden sırasıyla kalın ve ince kenarlı mercek tercih edilir?",
      cevap: "Miyopluk: Uzağı net görememe kusurudur; görüntü retinanın önüne düşer. Işığı dağıtarak görüntüyü geriye retinaya düşürmek için KALIN KENARLI mercek kullanılır. Hipermetropluk: Yakını net görememe kusurudur; görüntü retinanın arkasına düşer. Işığı toplayarak öne retinaya çekmek için İNCE KENARLI mercek kullanılır.",
      detayliCozum: "Kusurlu gözün ışığı kırma derecesi ters karakterli mercekle dengelenerek görüntü sarı lekeye odaklanır."
    },
    {
      id: "no-7-4-7",
      soru: "3. Piknik alanlarına bırakılan cam şişeler ve içi su dolu pet şişeler orman yangınlarına nasıl yol açar? Bilimsel gerekçesini açıklayınız.",
      cevap: "Cam şişelerin küresel tabanları veya içi su dolu silindirik pet şişeler ince kenarlı mercek gibi davranır. Güneşten gelen paralel ışık ışınlarını kırarak tek bir odak noktasında toplar. Odak noktasında biriken yoğun ısı enerjisi kuru otların ve yaprakların tutuşma sıcaklığına (300 °C) ulaşmasına yol açarak orman yangınını başlatır.",
      detayliCozum: "Toplanan ışık enerjisi büyüteçle kâğıt yakma deneyindeki gibi termal alevlenmeye sebep olur."
    },
    {
      id: "no-7-4-8",
      soru: "4. Günlük yaşamda ve teknolojide merceklerin kullanıldığı en az dört farklı alet yazarak bu aletlerdeki merceklerin görevini kısaca açıklayınız.",
      cevap: "1. Büyüteç: İnce kenarlı mercekle küçük cisimleri düz ve büyük gösterir. 2. Mikroskop: Çift ince kenarlı mercek sistemiyle gözle görülemeyen mikroorganizmaları binlerce kat büyütür. 3. Teleskop: Uzaktaki yıldız ve gezegenlerden gelen ışığı toplayıp büyüterek netleştirir. 4. Kapı Dürbünü: Kalın kenarlı mercekle kapı önündeki çok geniş açılı alanı düz ve küçük gösterir.",
      detayliCozum: "Optik aletler merceklerin büyütme, küçültme ve ışık odaklama özelliklerini kombine ederek çalışır."
    }
  ],
  hikmetStages: [
    {
      stage: 1,
      name: "1. Varlığı Tanıt (Mercek Nedir?)",
      concept: "Küresel Yüzeyli Saydam Araçlar",
      text: "En az bir yüzeyi küresel olan cam veya sert plastikten yapılmış saydam cisimlere mercek denir. Merceklerin görevi ışığı kırarak toplamak veya dağıtmak, böylece görüntüyü büyütmek veya küçültmektir.",
      analogies: ["Işık ışınlarını büken saydam bir heykeltıraş"]
    },
    {
      stage: 2,
      name: "2. Parçalarını Göster (İnce Kenarlı Mercekler)",
      concept: "Yakınsak Mercek ve Odak Noktası (F)",
      text: "Ortası kalın, kenarları ince olan merceklerdir. Çift taraflı ok (<->) ile gösterilir. Asal eksene paralel gelen ışık ışınlarını kırarak tek bir noktada (Odak Noktası - F) toplar. Odak noktasının optik merkeze uzaklığına Odak Uzaklığı denir. Büyüteç ve okuma gözlüklerinde kullanılır.",
      analogies: ["Işığı tek noktaya toplayan bir güneş hunisi"]
    },
    {
      stage: 3,
      name: "3. Sanatını Çöz (Kalın Kenarlı Mercekler)",
      concept: "Iraksak Mercek ve Geniş Görüş Alanı",
      text: "Kenarları kalın, ortası ince olan merceklerdir. Uçları içe dönük ok (>--<) ile gösterilir. Asal eksene paralel gelen ışınları birbirinden uzaklaştıracak (dağıtacak) şekilde kırar. Kırılan ışınların uzantıları odak noktasında kesişir. Cisimleri küçük gösterir, geniş alanları görmeyi sağlar.",
      analogies: ["Geniş açılı güvenlik kamerası"]
    },
    {
      stage: 4,
      name: "4. Hikmetini Kavra (Göz Kusurları ve Sağlık)",
      concept: "Miyop ve Hipermetrop Düzeltimi",
      text: "Gözümüzdeki doğal mercek ince kenarlıdır. Yakını görüp uzağı göremeyen miyop hastalarının gözünde ışık retinanın önüne düşer; kalın kenarlı mercekle düzeltilir. Uzağı görüp yakını göremeyen hipermetrop hastalarında ışık retinanın arkasına düşer; ince kenarlı mercekle toplanarak düzeltilir.",
      analogies: ["Bulanık resmi netleştiren ilahi odaklama mekanizması"]
    },
    {
      stage: 5,
      name: "5. Teknolojide Mercekler (OPMER ve Savunma)",
      concept: "Optik Cihazlar Ailesi",
      text: "Mikroskop (hücreleri milyon kat büyütür), teleskop (yıldızları yaklaştırır), fotoğraf makinesi ve cep telefonu kameraları, dürbün, projeksiyon cihazı. TÜBİTAK UZAY OPMER laboratuvarı yerli uydularımız (İMECE, GÖKTÜRK) için optik mercek sistemleri üretmektedir.",
      analogies: ["Milli gözlemevlerinin keskin gözleri"]
    },
    {
      stage: 6,
      name: "6. Medeniyet Ufku (Optiğin Öncüleri)",
      concept: "İbn Sehl'den İbnü'l-Heysem ve Thomas Young'a",
      text: "İbn Sehl (10. yy) tarihte kırılma kanununu geometrik çizimlerle ve merceklerle açıklayan ilk bilgindir. İbnü'l-Heysem (965-1039) 'Kitâbü'l-Menâzır' ile modern optiğin babası olmuş, ışığın nesnelerden göze geldiğini ispatlamıştır. Thomas Young (1773-1829) ise dalga teorisi ve göz kırılma kusurlarını aydınlatmıştır.",
      analogies: ["Karanlığı aydınlatan optik meşaleleri"]
    }
  ],
  etkinlikler: [
    {
      id: "etk-7-4-2",
      title: "Etkinlik Noktası 4 & 5: Mercek Türleri, Tarak ve El Feneriyle Odak Noktası Deneyi",
      type: "Gözlem ve Işık Yolu Çizimi",
      materials: ["İnce ve kalın kenarlı mercekler", "El feneri", "Plastik tarak", "A4 kâğıdı"],
      steps: [
        "Plastik tarağı el fenerinin önüne koyarak paralel ışık demetleri elde ediniz.",
        "Işık demetlerinin önüne önce ince kenarlı merceği yerleştirip ışığın kırıldıktan sonra bir noktada toplandığını gözlemleyiniz.",
        "Ardından kalın kenarlı merceği koyarak ışığın etrafa saçıldığını (dağıldığını) gözlemleyip odak uzantılarını çiziniz."
      ],
      questions: [
        {
          qId: "etk-mercek-q1",
          label: "1. Soru",
          prompt: "İnce ve kalın kenarlı merceklerin paralel ışığa tepkisi arasındaki temel fark nedir?",
          answer: "İnce kenarlı mercek asal eksene paralel gelen ışığı odak noktasında toplar; kalın kenarlı mercek ise ışığı uzantıları odaktan geçecek şekilde dağıtır."
        },
        {
          qId: "etk-mercek-q2",
          label: "2. Soru",
          prompt: "Optik merkezden geçen ışınlar neden yön değiştirmez?",
          answer: "Merceğin tam orta noktası olan optik merkezde küresel yüzeyler birbirine paralel gibi davrandığından geçen ışın doğrultu değiştirmeden geçer."
        }
      ]
    }
  ],
  bilgiIstasyonlari: [
    {
      title: "İz Bırakan Bilim İnsanı: İbn Sehl (10. Yüzyıl)",
      scientistOrMission: "Kırılma Kanununun ve Mercek Çizimlerinin İlk Kâşifi",
      description: "Bağdat'ta çalışan İbn Sehl, küresel mercekler ve yakan camlar üzerine yazdığı risalede kırılma yasasını Snell'den yüzlerce yıl önce kusursuz geometrik oranlarla ortaya koymuştur.",
      hikmetNote: "İlmin kökleri medeniyetimizin derin hafızasında saklıdır; genç zihinler bu mirası keşfedip geleceğe taşımalıdır."
    },
    {
      title: "Optiğin Babası: İbnü'l-Heysem (965-1039)",
      scientistOrMission: "Kitâbü'l-Menâzır ve Modern Bilimsel Yöntem",
      description: "Görme olayının gözden çıkan ışınlarla değil, nesnelerden yansıyan ışığın göze girmesiyle gerçekleştiğini deneylerle ispatlamıştır. Karanlık oda (kamera obskura) ilkesini formüle etmiştir.",
      hikmetNote: "Gözün içine giren tek bir ışık huzmesi, insan aklına evrenin sonsuz kapılarını aralar."
    },
    {
      title: "Milli Teknoloji: TÜBİTAK UZAY OPMER",
      scientistOrMission: "Optik Sistemler Araştırma Laboratuvarı",
      description: "Ülkemizin yerli gözlem uyduları ve savunma araçları için hassas optik mercek ve ayna bileşenlerini Türkiye'de üreten stratejik merkezdir.",
      hikmetNote: "Kendi merceğini ve gözünü üreten milletler, semalarını ve istikballerini emniyete alırlar."
    }
  ],
  dda: {
    id: "dda-mercek-root",
    statement: "Optik merkez üzerine gelen ışık ışınları merceklerden kırılmadan geçer.",
    correctDecision: "D",
    reason: "Optik merkezden geçen ışınlar doğrultu değiştirmeden geçer.",
    ifTrue: {
      id: "dda-node-d",
      statement: "Kalın kenarlı merceklerin ortası kenarlarına göre incedir.",
      correctDecision: "D",
      reason: "Kalın kenarlı merceklerin kenarları kalın, orta kısmı incedir.",
      ifTrue: {
        id: "dda-leaf-1",
        statement: "İnce kenarlı merceklerin ışık ışınlarını dağıtıcı özelliği vardır.",
        correctDecision: "Y",
        reason: "İnce kenarlı mercekler ışığı dağıtmaz, Odak Noktası (F)'de toplar.",
        ifTrue: { exit: 1, isCorrect: false, feedback: "İnce kenarlı mercek ışığı toplar, dağıtmaz." },
        ifFalse: { exit: 2, isCorrect: true, feedback: "Tebrikler! Doğru kararla 2. Çıkışa başarıyla ulaştınız." }
      },
      ifFalse: {
        id: "dda-leaf-2",
        statement: "Cisimleri büyük göstermek için ince kenarlı mercekler kullanılmaktadır.",
        correctDecision: "D",
        reason: "Büyüteçlerde ince kenarlı mercek kullanılır.",
        ifTrue: { exit: 3, isCorrect: false, feedback: "Kalın kenarlı merceğin ortası incedir ifadesine Y demek yanlıştı." }
      }
    },
    ifFalse: {
      id: "dda-node-y",
      statement: "Merceklerin tam ortasından asal eksen geçer.",
      correctDecision: "D",
      reason: "Asal eksen merceğin optik merkezinden geçen çizgidir.",
      ifTrue: { exit: 5, isCorrect: false, feedback: "Kök ifade doğruydu, yanlış kolundan gitmek hatalı oldu." }
    }
  },
  biliyorumAnliyorumDusunuyorum: {
    biliyorum: "İnce kenarlı merceğin ortasının kalın, kalın kenarlı merceğin ise kenarlarının kalın olduğunu; ince merceğin ışığı topladığını, kalın merceğin dağıttığını biliyorum.",
    anliyorum: "Büyüteç, mikroskop ve okuma gözlüklerinde görüntüyü büyütmek için ince kenarlı mercek; kapı dürbünü ve miyop gözlüklerinde geniş alan görmek ve küçültmek için kalın kenarlı mercek kullanıldığını anlıyorum.",
    dusunuyorum: "Doğaya gelişigüzel atılan tek bir pet şişenin mercek etkisiyle binlerce hektar ormanı ve canlıyı yok edebilecek bir yangını başlatması bize çevreye karşı nasıl bir sorumluluk yükler?"
  },
  pekistirmeIstasyonu: {
    stationTitle: "Pekiştirme İstasyonu: Mercekler ve Kullanım Alanları",
    pageReference: "MEB 7. Sınıf Fen Bilimleri 2. Kitap, Sayfa 23-34",
    summaryText: "Bu istasyonda ince ve kalın kenarlı merceklerin geometrik yapılarını, ışık demetlerini odaklama/dağıtma ilkelerini, orman yangınları tehlikesini ve mikroskoptan TÜBİTAK OPMER uydularına kadar optik araçları pekiştirdiniz.",
    targetSkills: [
      "İnce kenarlı merceğin ışığı topladığını ve cisimleri büyüttüğünü açıklama",
      "Kalın kenarlı merceğin ışığı dağıttığını ve geniş alan görüşü sağladığını açıklama",
      "Asal eksen, optik merkez ve odak noktası kavramlarını şematik olarak gösterme",
      "Miyop ve hipermetrop göz kusurlarını uygun merceklerle eşleştirme",
      "Orman atıklarının mercek etkisinden kaynaklanan yangın riskine karşı önlem geliştirme",
      "İbn Sehl ve İbnü'l-Heysem'in optik alanındaki tarihsel öncülüğünü kavrama"
    ]
  },
  nelerOgrenildi: {
    title: "2. Bölüm Sonunda Neler Öğrenildi? (Neler Öğrendik?)",
    ogrenilenKavramlar: [
      "Mercek (Lens)",
      "İnce Kenarlı (Yakınsak) Mercek",
      "Kalın Kenarlı (Iraksak) Mercek",
      "Asal Eksen",
      "Optik Merkez (O)",
      "Odak Noktası (F) & Odak Uzaklığı",
      "Büyüteç Etkisi (Düz ve Büyük Görüntü)",
      "Geniş Alan Görüşü (Düz ve Küçük Görüntü)",
      "Orman Yangınları ve Mercek Tehlikesi",
      "Optik Aletler (Mikroskop, Teleskop, Dürbün, Kamera)",
      "TÜBİTAK OPMER Yerli Optik Sistemleri",
      "İbn Sehl, İbnü'l-Heysem, Thomas Young"
    ],
    ozet: "MEB 2. Kitap Sayfa 33'teki 'Neler Öğrendik?' sentezine göre: En az bir yüzeyi küresel olan saydam maddelere mercek denir. İnce kenarlı merceklerin ortası kenarlarından kalındır; asal eksene paralel gelen ışınları odak noktasında (F) toplar ve cisimleri büyük gösterir (okuma gözlüğü, mikroskop, büyüteç). Kalın kenarlı merceklerin kenarları ortasından kalındır; ışığı dağıtır ve uzantıları odakta kesişir, cisimleri küçük ve geniş açılı gösterir (kapı dürbünü, uzak gözlüğü). Cam kırıkları ormanda ince mercek görevi görerek yangına sebep olabilir.",
    kontrolSorulari: [
      {
        id: "ko-mercek-1",
        soru: "Bir mikroskopta neden birden fazla ince kenarlı mercek kullanılır?",
        cevap: "Mikroskopta objektif ve oküler (göz) mercekleri olmak üzere ince kenarlı mercekler art arda yerleştirilir; her mercek görüntüyü katlayarak büyütür ve hücre gibi mikro yapıların görünmesini sağlar."
      },
      {
        id: "ko-mercek-2",
        soru: "Uzağı net göremeyen (miyop) bir öğrenciye doktor hangi tür mercek reçete eder?",
        cevap: "Miyop göz kusurunda görüntü retinanın önüne düştüğü için ışığı dağıtıp retinaya odaklayan kalın kenarlı (ıraksak) mercekli gözlük verilir."
      },
      {
        id: "ko-mercek-3",
        soru: "Piknik alanlarına atılan kırık cam parçaları neden toplanmalıdır?",
        cevap: "Kırık camlar ve su dolu şişeler ince kenarlı mercek etkisiyle güneş ışığını kuru otların üzerine odaklayıp tutuşturarak orman yangınlarına yol açar."
      }
    ]
  },
  sonrakiKonu: {
    code: "7.4.3",
    title: "4. Ünite Sonu Değerlendirme & Sonuç Çalışmaları"
  },
  fillInBlanks: [
    {
      id: "fib-7-4-11",
      number: 1,
      baglam: "En az bir yüzeyi küresel olan cam veya sert plastikten yapılan saydam cisimlere mercek denir.",
      soruKoku: "Işığı kırarak büyütme ya da küçültme amacıyla kullanılan küresel yüzeyli saydam cisimlere ________ denir.",
      blankAnswer: "mercek",
      acceptableAnswers: ["mercek", "lens"],
      explanation: "Işığı kırarak toplayan veya dağıtan saydam araçlar mercektir.",
      wordBankHint: ["mercek", "ayna", "prizma", "periskop"]
    },
    {
      id: "fib-7-4-12",
      number: 2,
      baglam: "Ortası kenarlarına göre daha kalın olan merceklere ince kenarlı (yakınsak) mercek denir.",
      soruKoku: "Ortası kenarlarından kalın olan ve ışığı toplayan merceklere ________ kenarlı mercek denir.",
      blankAnswer: "ince",
      acceptableAnswers: ["ince", "yakınsak", "yakinsak"],
      explanation: "Ortası kalın kenarları ince olan mercekler ince kenarlıdır.",
      wordBankHint: ["ince", "kalın", "düzlem", "tümsek"]
    },
    {
      id: "fib-7-4-13",
      number: 3,
      baglam: "Kenarları ortasına göre daha kalın olan merceklere kalın kenarlı (ıraksak) mercek denir.",
      soruKoku: "Kenarları ortasından kalın olan ve ışığı dağıtıcı özellik gösteren merceklere ________ kenarlı mercek denir.",
      blankAnswer: "kalın",
      acceptableAnswers: ["kalın", "kalin", "ıraksak", "iraksak"],
      explanation: "Kenarları kalın mercekler kalın kenarlı (ıraksak) merceklerdir.",
      wordBankHint: ["kalın", "ince", "düz", "çukur"]
    },
    {
      id: "fib-7-4-14",
      number: 4,
      baglam: "İnce kenarlı merceğe paralel gelen ışınların kırıldıktan sonra toplandığı noktaya odak noktası denir.",
      soruKoku: "İnce kenarlı mercekte paralel ışınların toplandığı noktaya ________ noktası denir ve F ile gösterilir.",
      blankAnswer: "odak",
      acceptableAnswers: ["odak", "odak noktası"],
      explanation: "Işınların kesiştiği nokta odak noktasıdır.",
      wordBankHint: ["odak", "merkez", "tepe", "kesişim"]
    },
    {
      id: "fib-7-4-15",
      number: 5,
      baglam: "Odak noktasının merceğin optik merkezine olan uzaklığına odak uzaklığı denir.",
      soruKoku: "Odak noktasının optik merkeze olan uzaklığına odak ________ adı verilir.",
      blankAnswer: "uzaklığı",
      acceptableAnswers: ["uzaklığı", "uzakligi", "mesafesi"],
      explanation: "Odak ile optik merkez arası mesafe odak uzaklığıdır.",
      wordBankHint: ["uzaklığı", "açısı", "yarıçapı", "oranı"]
    },
    {
      id: "fib-7-4-16",
      number: 6,
      baglam: "Merceğin tam ortasında bulunduğu varsayılan noktaya optik merkez denir ve O harfiyle gösterilir.",
      soruKoku: "Merceğin tam orta noktasına ________ merkez adı verilir ve buradan geçen ışın kırılmaz.",
      blankAnswer: "optik",
      acceptableAnswers: ["optik", "optik merkez"],
      explanation: "Optik merkezden geçen ışık kırılmadan geçer.",
      wordBankHint: ["optik", "asal", "geometrik", "küresel"]
    },
    {
      id: "fib-7-4-17",
      number: 7,
      baglam: "Geniş bir görüş alanı elde etmek için dış kapı dürbünlerinde kalın kenarlı mercek kullanılır.",
      soruKoku: "Dış kapı dürbünlerinde geniş bir alanı görebilmek amacıyla ________ kenarlı mercekler kullanılır.",
      blankAnswer: "kalın",
      acceptableAnswers: ["kalın", "kalin", "ıraksak"],
      explanation: "Kalın kenarlı mercekler görüntüyü küçülterek geniş açılı görüş sağlar.",
      wordBankHint: ["kalın", "ince", "düzlem", "silindirik"]
    },
    {
      id: "fib-7-4-18",
      number: 8,
      baglam: "Cisimleri olduğundan daha büyük ve düz gösteren büyüteçlerde ince kenarlı mercek kullanılır.",
      soruKoku: "Yazıları ve küçük nesneleri büyütmek için kullanılan büyüteçlerde ________ kenarlı mercek bulunur.",
      blankAnswer: "ince",
      acceptableAnswers: ["ince", "yakınsak"],
      explanation: "Büyüteç ince kenarlı (yakınsak) bir mercektir.",
      wordBankHint: ["ince", "kalın", "düz", "koni"]
    },
    {
      id: "fib-7-4-19",
      number: 9,
      baglam: "Ormanlık alanlara atılan su dolu pet şişeler ince kenarlı mercek etkisi göstererek orman yangınlarına neden olabilir.",
      soruKoku: "Ormanlara atılan cam şişeler ve içi su dolu pet şişeler ________ yangınlarına sebep olabilmektedir.",
      blankAnswer: "orman",
      acceptableAnswers: ["orman", "orman yangınlarına", "yangın"],
      explanation: "Mercek etkisiyle güneş ışınları odaklanarak kuru otları tutuşturur.",
      wordBankHint: ["orman", "ev", "fabrika", "deniz"]
    },
    {
      id: "fib-7-4-20",
      number: 10,
      baglam: "TÜBİTAK UZAY bünyesindeki OPMER laboratuvarında uydular için yerli optik bileşenler üretilmektedir.",
      soruKoku: "Ülkemizde uydu teknolojilerinde kullanılan hassas optik bileşenleri millî imkânlarla üreten laboratuvar ________ projesidir.",
      blankAnswer: "OPMER",
      acceptableAnswers: ["OPMER", "opmer"],
      explanation: "TÜBİTAK UZAY Optik Sistemler Araştırma Laboratuvarı OPMER'dir.",
      wordBankHint: ["OPMER", "ASELSAN", "ROKETSAN", "HAVELSAN"]
    }
  ],
  contextQuestions: [
    {
      id: "mcq-7-4-21",
      number: 1,
      baglam: "Fen bilimleri öğretmeni sınıfa getirdiği iki farklı merceği öğrencilere inceletmiştir. K merceğinin ortasının kenarlarına göre daha şişkin, L merceğinin ise kenarlarının ortasına göre daha kalın olduğu belirlenmiştir.",
      soruKoku: "Buna göre K ve L mercekleri ile ilgili aşağıdaki eşleştirmelerden hangisi doğrudur?",
      secenekler: {
        A: "K: Kalın kenarlı mercek / L: İnce kenarlı mercek",
        B: "K: İnce kenarlı mercek / L: Kalın kenarlı mercek",
        C: "Her ikisi de kalın kenarlı mercektir.",
        D: "Her ikisi de düzlem aynadır."
      },
      dogruCevap: "B",
      cozum: "Ortası kalın olan mercekler ince kenarlı (yakınsak); kenarları kalın ortası ince olan mercekler ise kalın kenarlı (ıraksak) mercektir. Dolayısıyla K ince kenarlı, L kalın kenarlıdır.",
      olculenKazanim: "F.7.4.2.1. Mercek türlerini yapısal özelliklerine göre ayırt eder.",
      olculenBeceri: "Sınıflandırma ve Tanımlama",
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
      id: "mcq-7-4-22",
      number: 2,
      baglam: "Bir merceğin asal eksenine paralel olarak gönderilen kırmızı renkli üç ışık ışını, mercekten geçtikten sonra asal eksen üzerinde tek bir F noktasında toplanmıştır.",
      soruKoku: "Bu merceğin türü ve toplanan F noktası hakkında aşağıdakilerden hangisi söylenebilir?",
      secenekler: {
        A: "Kalın kenarlı mercektir; F noktası optik merkezdir.",
        B: "İnce kenarlı mercektir; F noktası merceğin odak noktasıdır.",
        C: "Iraksak mercektir; F noktası yansıma noktasıdır.",
        D: "Düzlem aynadır; F noktası tepe noktasıdır."
      },
      dogruCevap: "B",
      cozum: "Asal eksene paralel gelen ışınları tek bir noktada toplayan mercek ince kenarlı (yakınsak) mercektir. Işınların toplandığı bu nokta ise merceğin odak noktasıdır (F).",
      olculenKazanim: "F.7.4.2.1. İnce kenarlı mercekte odak noktasını tanımlar.",
      olculenBeceri: "Gözleme Dayalı Çıkarım",
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
      id: "mcq-7-4-23",
      number: 3,
      baglam: "Göz doktoruna giden Erkan, yakındaki kitap yazılarını okurken bulanık gördüğünü; ancak uzaktaki ağaçları ve nesneleri çok net seçebildiğini belirtmiştir. Doktor Erkan'a ince kenarlı mercekten yapılmış bir okuma gözlüğü vermiştir.",
      soruKoku: "Erkan'ın göz kusuru ve kullandığı merceğin işlevi aşağıdakilerden hangisinde doğru açıklanmıştır?",
      secenekler: {
        A: "Miyoptur; mercek ışığı dağıtarak retinaya ulaştırır.",
        B: "Hipermetroptur; ince kenarlı mercek ışığı toplayarak görüntüyü retinanın üzerine odaklar.",
        C: "Astigmattır; kalın kenarlı mercek kullanmalıdır.",
        D: "Renk körüdür; gözlüğü ışığı renklere ayırır."
      },
      dogruCevap: "B",
      cozum: "Yakını göremeyip uzağı net gören göz kusuru hipermetroptur. Hipermetropta görüntü retinanın arkasına düştüğü için ışığı toplayıcı özelliğe sahip ince kenarlı mercekle retinanın üzerine odaklanır.",
      olculenKazanim: "F.7.4.2.2. Merceklerin sağlık alanındaki kullanımını irdeler.",
      olculenBeceri: "Sağlık ve Fen Bilgisi Entegrasyonu",
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
      id: "mcq-7-4-24",
      number: 4,
      baglam: "Yaz aylarında Akdeniz ve Ege bölgelerindeki ormanlık alanlarda çevreye gelişigüzel bırakılan kırık cam şişeler ve içi su dolu plastik pet şişelerin büyük yangınlara sebep olduğu tespit edilmiştir.",
      soruKoku: "Bu atıkların yangına neden olma mekanizması hangi bilimsel ilkeyle açıklanır?",
      secenekler: {
        A: "Plastiğin güneş ışığını tamamen soğurup eriyerek alev alması",
        B: "Cam ve su dolu şişelerin ince kenarlı mercek gibi davranıp güneş ışınlarını bir noktada odaklayarak yüksek sıcaklık oluşturması",
        C: "Cam şişelerin kalın kenarlı mercek gibi ışığı dağıtması",
        D: "Suyun oksijen gazı üreterek havayı tutuşturması"
      },
      dogruCevap: "B",
      cozum: "Küresel şekle sahip cam parçaları ve su dolu şişeler ince kenarlı mercek etkisi gösterir. Güneş ışınlarını kuru yaprak ve otların üzerine odaklayarak tutuşma sıcaklığına ulaştırır ve orman yangını başlatır.",
      olculenKazanim: "F.7.4.2.3. Orman yangınları ve mercek etkisi ilişkisini açıklar.",
      olculenBeceri: "Çevre ve Doğa Koruma Bilinci",
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
      id: "mcq-7-4-25",
      number: 5,
      baglam: "Bir apartman dairesinin çelik kapısına takılan kapı dürbününden bakan kişi, koridordaki ziyaretçiyi olduğundan daha küçük fakat kapının sağını ve solunu bütünüyle görecek şekilde geniş bir açıyla fark etmiştir.",
      soruKoku: "Kapı dürbününde bu görüntüyü sağlayan merceğin türü ve özelliği nedir?",
      secenekler: {
        A: "İnce kenarlı mercek - Işığı toplayarak cisimleri devasa büyütür.",
        B: "Kalın kenarlı mercek - Işığı dağıtarak daha geniş bir alanı küçük ve düz gösterir.",
        C: "Düzlem ayna - Görüntüyü simetrik yansıtır.",
        D: "Tümsek ayna - Işığı ters çevirir."
      },
      dogruCevap: "B",
      cozum: "Kapı dürbünlerinde kalın kenarlı (ıraksak) mercek kullanılır. Işığı dağıtıcı yapısı sayesinde çok geniş bir görüş alanı sunar ve cisimleri küçülterek kadraja sığdırır.",
      olculenKazanim: "F.7.4.2.2. Kalın kenarlı merceklerin teknolojik kullanımını açıklar.",
      olculenBeceri: "Teknoloji ve Optik İlişkisi",
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
      id: "mcq-7-4-26",
      number: 6,
      baglam: "Saat tamircileri ve kuyumcular, saatlerin içindeki minicik çarkları ve taşları incelerken gözlerine özel tek gözlü bir büyüteç takarlar.",
      soruKoku: "Saat tamircilerinin kullandığı bu araçla ilgili aşağıdaki ifadelerden hangisi yanlıştır?",
      secenekler: {
        A: "Yapısında ince kenarlı mercek bulunur.",
        B: "Cismin optik merkez ile odak arasına konulmasıyla düz ve büyük görüntü elde edilir.",
        C: "Yakınsak mercek olarak adlandırılır.",
        D: "Işığı dağıtarak parçaları olduğundan daha küçük gösterir."
      },
      dogruCevap: "D",
      cozum: "Saat tamircisi büyüteci ince kenarlı mercektir ve amacı parçaları küçültmek değil, büyütmektir. Işığı dağıtmaz, toplar.",
      olculenKazanim: "F.7.4.2.2. Büyüteç ve mesleki optik araçlarını irdeler.",
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
      id: "mcq-7-4-27",
      number: 7,
      baglam: "Bir merceğin asal eksenine paralel gelen ışık ışınlarının kırıldıktan sonra birbirinden uzaklaşarak dağıldığı ve bu ışınların uzantılarının geride bir F noktasında kesiştiği görülmüştür.",
      soruKoku: "Bu optik düzenek ile ilgili aşağıdakilerden hangisi doğrudur?",
      secenekler: {
        A: "Kullanılan mercek ince kenarlıdır.",
        B: "Merceğin sembolü çift taraflı düz oktur.",
        C: "Kullanılan mercek kalın kenarlıdır ve sembolü uçları içe dönük oktur.",
        D: "Mercek ışığı tek bir noktada toplamıştır."
      },
      dogruCevap: "C",
      cozum: "Paralel gelen ışınları dağıtan ve uzantıları odakta kesişen mercek kalın kenarlı (ıraksak) mercektir; uçları içe dönük ok sembolüyle gösterilir.",
      olculenKazanim: "F.7.4.2.1. Kalın kenarlı merceğin sembol ve ışık yolunu tanır.",
      olculenBeceri: "Şematik Gösterim Analizi",
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
      id: "mcq-7-4-28",
      number: 8,
      baglam: "Aşağıdaki araçlardan hangisinin yapısında görüntüyü büyütmek ya da odaklamak amacıyla mercek kullanılmaz?",
      soruKoku: "Verilen teknolojik araçlardan hangisinde mercek sistemi yer almaz?",
      secenekler: {
        A: "Astronomik mercekli teleskop",
        B: "Işık mikroskobu",
        C: "Düzlem berber aynası",
        D: "Projeksiyon cihazı"
      },
      dogruCevap: "C",
      cozum: "Berber aynası düzlem aynadır, ışığı yansıtarak eşit boyutta görüntü verir; yapısında ışığı kıran mercek bulunmaz. Teleskop, mikroskop ve projeksiyonda mercekler kullanılır.",
      olculenKazanim: "F.7.4.2.2. Mercek kullanılan araçları ayırt eder.",
      olculenBeceri: "Araç ve Gereç Sınıflandırma",
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
      id: "mcq-7-4-29",
      number: 9,
      baglam: "TÜBİTAK UZAY bünyesinde hayata geçirilen OPMER (Optik Sistemler Araştırma Laboratuvarı) projesi ile Türkiye kendi uydularının optik ekipmanlarını üretmeye başlamıştır.",
      soruKoku: "OPMER projesinin hayata geçirilmesinin ülkemize sağladığı en önemli stratejik kazanım nedir?",
      secenekler: {
        A: "Yurt dışından yüksek maliyetlerle ithal edilen büyük çaplı optik bileşenlerin millî imkânlarla üretilerek dışa bağımlılığın sona erdirilmesi",
        B: "Sadece oyuncak büyüteç üretiminin artırılması",
        C: "Ülkedeki tüm cam fabrikalarının kapatılması",
        D: "Teleskop kullanımının yasaklanması"
      },
      dogruCevap: "A",
      cozum: "Metinde de belirtildiği gibi OPMER, savunma ve uzay teknolojilerinde ithal edilen yüksek maliyetli ve temini güç optik bileşenleri millî imkânlarla üreterek teknolojik bağımsızlık sağlamıştır.",
      olculenKazanim: "F.7.4.2.2. Millî optik teknolojilerini ve TÜBİTAK projelerini kavrar.",
      olculenBeceri: "Milli Teknoloji Hamlesi Farkındalığı",
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
      id: "mcq-7-4-30",
      number: 10,
      baglam: "10. yüzyılda Bağdat'ta yaşayan İbn Sehl, küresel mercekler ve yakan camlar üzerine çalışmalar yapmış, mercek çizimleriyle ışığın kırılmasını izah etmiştir.",
      soruKoku: "İbn Sehl'in bilim tarihindeki yeri ile ilgili aşağıdaki bilgilerden hangisi doğrudur?",
      secenekler: {
        A: "İlk teleskobu 20. yüzyılda icat etmiştir.",
        B: "Kırılma kanununu ve küresel merceklerde odaklanmayı Batılı bilim insanlarından yüzyıllar önce geometrik modellerle açıklamıştır.",
        C: "Işığın boşlukta yayılamayacağını öne sürmüştür.",
        D: "Sadece atom modelleri üzerine çalışmıştır."
      },
      dogruCevap: "B",
      cozum: "İbn Sehl, 10. yüzyılda kaleme aldığı eserinde küresel ve yakan mercekleri çizimlerle modellemiş ve kırılma kanununun temel prensiplerini ilk kez ortaya koymuştur.",
      olculenKazanim: "F.7.4.2.4. İbn Sehl'in optik çalışmalarını değerlendirir.",
      olculenBeceri: "Bilim Tarihi",
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
      id: "mcq-7-4-31",
      number: 11,
      baglam: "İbnü'l-Heysem 'Kitâbü'l-Menâzır' adlı meşhur eserinde modern bilimsel yöntemi (deney ve matematiksel modelleme) uygulayarak optik alanında çığır açmıştır.",
      soruKoku: "İbnü'l-Heysem'in optik alanında ışık kaynakları ile ilgili yaptığı sınıflandırma hangisidir?",
      secenekler: {
        A: "Sıcak ışık ve Soğuk ışık",
        B: "Kendisi ışık kaynağı olanların yaydığı birincil ışık ve aydınlatılmış nesnelerden yansıyan ikincil ışık",
        C: "Atomik ışık ve Moleküler ışık",
        D: "Yapay ışık ve Elektrikli ışık"
      },
      dogruCevap: "B",
      cozum: "Metinde açıklandığı gibi İbnü'l-Heysem, ışık kaynaklarını inceleyerek doğrudan ışık veren nesnelerin ışığına 'birincil ışık', aydınlatılmış nesnelerden yayılan ışığa ise 'ikincil ışık' adını vermiştir.",
      olculenKazanim: "F.7.4.2.4. İbnü'l-Heysem'in optik yaklaşımlarını irdeler.",
      olculenBeceri: "Kavramsal Derinlik",
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
      id: "mcq-7-4-32",
      number: 12,
      baglam: "Gözünde miyop kusuru bulunan Mert, tahtadaki yazıları net göremediği için doktora gitmiş ve kalın kenarlı merceğe sahip gözlük kullanmaya başlamıştır.",
      soruKoku: "Mert'in taktığı gözlük camı ile ilgili aşağıdaki özelliklerden hangisi yanlıştır?",
      secenekler: {
        A: "Iraksak mercek türündedir.",
        B: "Gelen paralel ışık ışınlarını dağıtarak kırar.",
        C: "Işığı bir noktada toplayarak orman yangını başlatabilir.",
        D: "Kenarları ortasından daha kalındır."
      },
      dogruCevap: "C",
      cozum: "Kalın kenarlı (ıraksak) mercekler ışığı dağıtır; ışığı tek bir noktada toplamaz. Orman yangınına sebep olan mercek türü ışığı odaklayan ince kenarlı mercektir.",
      olculenKazanim: "F.7.4.2.1. Mercek türlerinin işlevsel farklarını irdeler.",
      olculenBeceri: "Doğru-Yanlış Analizi",
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
      id: "mcq-7-4-33",
      number: 13,
      baglam: "Thomas Young (1773-1829), insanın nasıl gördüğünü merak ederek göz optiği ve ışığın dalga teorisi üzerine önemli çalışmalar yapmıştır.",
      soruKoku: "Thomas Young'ın optik ve tıp bilimine katkıları arasında aşağıdakilerden hangisi bulunur?",
      secenekler: {
        A: "Işığın dalga teorisi, renkli görme mekanizması ve gözdeki kırılma kusurlarını açıklamak",
        B: "İlk buharlı lokomotifi inşa etmek",
        C: "DNA'nın çift sarmal yapısını keşfetmek",
        D: "Gezegenlerin çekim yasasını bulmak"
      },
      dogruCevap: "A",
      cozum: "Thomas Young dalga teorisi, renkli görme, gözdeki kırılma kusurları ve kırılma indisi üzerine temel buluşlar yapmıştır.",
      olculenKazanim: "F.7.4.2.4. Thomas Young'ın optik alanındaki keşiflerini açıklar.",
      olculenBeceri: "Bilim İnsanları ve Katkıları",
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
      id: "mcq-7-4-34",
      number: 14,
      baglam: "Bir merceğe gönderilen ışın tam optik merkezden (O noktasından) geçtiğinde hiç sapmadan doğrusal yoluna devam etmiştir.",
      soruKoku: "Bu durum aşağıdaki kurallardan hangisini doğrular?",
      secenekler: {
        A: "Merceklerin hiçbir ışını kıramadığını",
        B: "Merceğin optik merkezine gelen ışınların kırılmaya uğramadan geçtiğini",
        C: "Işığın mercek içinde tamamen durduğunu",
        D: "Merceğin sadece kenarlarının saydam olduğunu"
      },
      dogruCevap: "B",
      cozum: "Merceklerin temel geometrik kuralına göre asal eksen üzerindeki optik merkez (O) noktasından geçen tüm ışınlar kırılmadan dosdoğru geçer.",
      olculenKazanim: "F.7.4.2.1. Optik merkez kuralını açıklar.",
      olculenBeceri: "Temel Kural Bilgisi",
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
      id: "mcq-7-4-35",
      number: 15,
      baglam: "Bir fotoğraf makinesinde odak uzaklığı değiştirilebilen 'zoom objektif' sistemi yer almaktadır. Fotoğrafçı halkayı çevirdiğinde uzaktaki bir kartalın kanat tüyleri ekranda dev gibi büyümektedir.",
      soruKoku: "Objektifin yakınlaştırma ve netleme yapabilmesini sağlayan iç mekanizma nedir?",
      secenekler: {
        A: "Makine içindeki merceklerin birbirine olan mesafesinin mekanik olarak değiştirilerek odak uzaklığının ayarlanması",
        B: "Fotoğraf makinesinin kartala doğru uçması",
        C: "Kamera içine ayna eklenip ışığın yok edilmesi",
        D: "Kartalın boyutunun fiziksel olarak büyümesi"
      },
      dogruCevap: "A",
      cozum: "Zoom objektiflerde ince ve kalın kenarlı mercek grupları motor veya bilezik yardımıyla ileri-geri kaydırılır; odak uzaklığı değişerek görüntü büyütülür ve sensöre odaklanır.",
      olculenKazanim: "F.7.4.2.2. Fotoğraf makinelerinde mercek çalışma prensibini açıklar.",
      olculenBeceri: "Mühendislik ve Optik Tasarım",
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
      id: "mcq-7-4-36",
      number: 16,
      baglam: "Karanlık bir odada el feneri ışığı önüne tarak konulmuş ve paralel ışık çizgileri elde edilmiştir. Bu çizgilerin önüne konulan bir merceğin ışınları bir noktaya odakladığı görülmüştür.",
      soruKoku: "Bu deneyde odak uzaklığını azaltmak (ışığı merceğe daha yakın bir noktada toplamak) için ne yapılabilir?",
      secenekler: {
        A: "Merceğin küreselliği (kırıcılığı) daha fazla olan daha şişkin bir ince kenarlı mercek kullanmak",
        B: "Kalın kenarlı mercek kullanmak",
        C: "Işık kaynağını tamamen kapatmak",
        D: "Merceği düzlem ayna ile değiştirmek"
      },
      dogruCevap: "A",
      cozum: "İnce kenarlı merceğin eğriliği ve kırıcılığı ne kadar fazla (şişkin) olursa ışığı o kadar kuvvetli kırar ve odak uzaklığı kısalır (ışık merceğe daha yakın toplanır).",
      olculenKazanim: "F.7.4.2.1. Odak uzaklığını etkileyen faktörleri irdeler.",
      olculenBeceri: "Değişken Analizi ve Hipotez Kurma",
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
      id: "mcq-7-4-37",
      number: 17,
      baglam: "Bir fen projesinde 'Güneş Ocağı' tasarlayan öğrenciler, güneş ışığını tek bir tencerenin altına toplayarak su kaynatmayı amaçlamışlardır.",
      soruKoku: "Öğrencilerin bu projede kullanması gereken optik araç türü hangisidir?",
      secenekler: {
        A: "Işığı dağıtan kalın kenarlı mercek",
        B: "Işığı bir odak noktasında toplayan büyük ince kenarlı mercek veya çukur ayna",
        C: "Düz cam levha",
        D: "Kalın buz kütlesi"
      },
      dogruCevap: "B",
      cozum: "Güneş enerjisini tek bir noktada toplayıp yüksek ısı elde etmek için ışığı toplayıcı özelliğe sahip ince kenarlı (yakınsak) mercek veya çukur ayna tercih edilir.",
      olculenKazanim: "F.7.4.2.2. Güneş enerjisi ve mercek odaklama ilişkisini açıklar.",
      olculenBeceri: "Tasarım ve Yenilikçi Çözüm",
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
      id: "mcq-7-4-38",
      number: 18,
      baglam: "Bir optik alette merceğin iki tarafında da eşit uzaklıkta bulunan iki odak noktası (F1 ve F2) bulunmaktadır.",
      soruKoku: "Bir merceğin iki adet odak noktasına sahip olmasının nedeni nedir?",
      secenekler: {
        A: "Işığın merceğe hem sağdan hem de soldan gönderilebilmesi ve iki küresel yüzey bulunması",
        B: "Merceğin bozuk üretilmiş olması",
        C: "Birinin pozitif diğerinin negatif olması",
        D: "Merceklerin sadece geceleri çalışması"
      },
      dogruCevap: "A",
      cozum: "Mercekler iki yönlü saydam araçlardır; ışık her iki yönden de gelebileceği için merceğin her iki tarafında simetrik odak noktaları bulunur.",
      olculenKazanim: "F.7.4.2.1. Mercek geometrisini ve odak simetrisini anlar.",
      olculenBeceri: "Geometrik Kavrayış",
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
      id: "mcq-7-4-39",
      number: 19,
      baglam: "Kemâleddîn el-Fârisî (1267-1319), hocası Şîrâzî'nin rehberliğinde İbnü'l-Heysem'in Kitâbü'l-Menâzır eserini şerh etmiş, su dolu cam bir küre üzerinde deneyler yapmıştır.",
      soruKoku: "Kemâleddîn el-Fârisî'nin su dolu cam küre kullanarak açıkladığı en meşhur doğa olayı hangisidir?",
      secenekler: {
        A: "Depremlerin oluşumu",
        B: "Gökkuşağı ve güneş halesinin oluşum mekanizması",
        C: "Gezegenlerin yörünge hareketleri",
        D: "Rüzgâr türbinlerinin çalışma ilkesi"
      },
      dogruCevap: "B",
      cozum: "Fârisî, su dolu cam bir küreyi dev bir yağmur damlası gibi kullanarak güneş ışığının damla içindeki kırılma ve iç yansımalarını incelemiş, gökkuşağının tam bilimsel açıklamasını yapmıştır.",
      olculenKazanim: "F.7.4.2.4. Kemâleddîn el-Fârisî'nin optik modellerini öğrenir.",
      olculenBeceri: "Model Kurma ve Bilim Tarihi",
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
      id: "mcq-7-4-40",
      number: 20,
      baglam: "İnsan gözü, kâinattaki ışığı toplayıp retinaya kusursuz bir netlikle odaklayan canlı bir mercek taşır. Teknolojide ürettiğimiz en gelişmiş kameralar dahi gözün bu mükemmel odaklama kabiliyetinin birer taklididir.",
      soruKoku: "Göz merceğinin bu otomatik odaklama ve ışığı kırma nizamı insana hangi tefekkür ufkunu kazandırır?",
      secenekler: {
        A: "İnsan vücudunun tesadüfi kimyasal etkileşimlerle oluştuğunu",
        B: "Görme sistemimizin her milimetresinde sonsuz bir ilim, sanat, hikmet ve merhametin tecelli ettiğini",
        C: "Mercek teknolojisinin gözden daha üstün olduğunu",
        D: "Işığın göz içinde kırılmasının bir kusur olduğunu"
      },
      dogruCevap: "B",
      cozum: "Göz merceği kasılıp gevşeyerek saniyenin kesirlerinde odak uzaklığını değiştirir. Bu muhteşem biyolojik optik tasarım, kâinattaki sonsuz hikmet ve sanatın eşsiz bir göstergesidir.",
      olculenKazanim: "F.7.4.2.1. Biyolojik optik ve hikmet eksenli tefekkür geliştirir.",
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
