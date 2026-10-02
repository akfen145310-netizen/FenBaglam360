import { SectionContent } from '../../types';

export const unit4Section1: SectionContent = {
  code: "7.4.1",
  title: "Işığın Kırılması ve Kırılma Kanunları",
  unitCode: "7.4",
  unitTitle: "4. Ünite: Işığın Kırılması ve Mercekler",
  summary: "Işığın farklı yoğunluktaki saydam ortamlardan geçerken doğrultu ve hız değiştirmesi (ışığın kırılması), gelme ve kırılma açıları, yüzey normali, normale yaklaşma ve normalden uzaklaşma kuralları, prizmada beyaz ışığın renklere ayrılması ve Mîrim Çelebi'nin optik çalışmaları.",
  kazanimlar: [
    "F.7.4.1.1. Ortam değiştiren ışığın izlediği yolu gözlemleyerek kırılma olayına yönelik bilimsel çıkarım yapar.",
    "F.7.4.1.2. Işığın az yoğun ve çok yoğun saydam ortamlardan geçişindeki kırılma kanunlarını ve hız değişimini açıklar.",
    "F.7.4.1.3. Beyaz ışığın prizmada kırılarak renklere ayrılmasını ve gökkuşağı oluşumunu irdeler.",
    "F.7.4.1.4. Mîrim Çelebi gibi Türk-İslam bilginlerinin optik bilimine katkılarını fark eder."
  ],
  hatirlayalim: {
    text: "5. ve 6. sınıfta ışığın doğrusal yayıldığını, saydam, yarı saydam ve opak maddeleri, düzgün ve dağınık yansımayı ve yüzey normali ile yansıma kanunlarını öğrenmiştik. Işık boşlukta ve havada saniyede yaklaşık 300.000 kilometre gibi muazzam bir hızla ilerler.",
    keyPoints: [
      "Işık saydam ortamlarda doğrusal yollarla yayılır.",
      "Farklı saydam maddelerin (hava, su, cam) optik yoğunlukları (kırıcılıkları) birbirinden farklıdır.",
      "Gelen ışının yüzeye çarptığı noktadan yüzeye dik (90°) çizilen hayali çizgiye yüzey normali (N) denir."
    ]
  },
  onDegerlendirme: [
    {
      id: "od-kirilma-1",
      question: "Çay bardağındaki çay kaşığı veya su dolu bardaktaki kurşun kalem neden kırılmış gibi görünür?",
      answer: "Kalem veya kaşıktan yansıyan ışık ışınları, yoğunluğu fazla olan sudan yoğunluğu daha az olan havaya çıkarken doğrultu ve hız değiştirir (kırılır). Gözümüz ışığın kırıldığını değil, doğrusal geldiğini algıladığı için cisim kırılmış gibi görünür."
    },
    {
      id: "od-kirilma-2",
      question: "Balıklıgöl'de iskeleden suya bakan bir kişi balıkları gerçekte oldukları derinlikte mi görür?",
      answer: "Hayır. Havadan suya (az yoğundan çok yoğuna) bakan gözlemciye balıktan gelen ışınlar sudan havaya geçerken normalden uzaklaşarak kırılır. Bu nedenle balıkçı balıkları bulundukları gerçek konumdan daha yüzeye yakın (daha yakında) görür."
    },
    {
      id: "od-kirilma-3",
      question: "Bir saydam ortamdan diğerine dik (90° açıyla) gelen ışık ışını kırılır mı?",
      answer: "Hayır, yüzeye dik gelen ışık ışını doğrultusunu değiştirmez (kırılmaz). Ancak ortamın yoğunluğu değiştiği için ışığın ortalama sürati (hızı) mutlaka değişir."
    }
  ],
  hazirlik: {
    question: "Şanlıurfa Balıklıgöl'ü gezen Merve, balıkların su yüzeyine çok yakın yüzdüğünü düşünmüş, fakat babası suyun içindeki nesnelerin farklı göründüğünü söylemiştir. Bir dalgıç suyun içinden gökyüzündeki bir kuşa baksaydı onu nasıl görürdü?",
    answer: "Çok yoğun ortamdan (sudan) az yoğun ortama (havaya) bakan bir dalgıç, kuştan gelen ışınların suya girerken normale yaklaşarak kırılması sebebiyle kuşu gerçekte bulunduğu yerden daha uzakta (daha yüksekte) görür."
  },
  merak: {
    question: "Güneş ışığı renksiz/beyaz görünmesine rağmen yağmur sonrası gökyüzünde rengârenk gökkuşağı nasıl meydana gelir?",
    answer: "Güneş ışığı aslında kırmızı, turuncu, sarı, yeşil, mavi, lacivert ve mor gibi farklı frekanstaki renklerin bileşimidir. Yağmur damlaları birer küçük prizma gibi davranarak güneş ışığını yoğunluk farkı sebebiyle iki defa kırar ve renklerine ayırır."
  },
  kopru: {
    title: "Işığın Yolculuğundaki Nizam ve Kırılma Kanunu",
    content: "Işık ışınları saydam ortamlarda rastgele değil, en kısa zaman ilkesine göre kusursuz bir matematiksel intizamla ilerler. Ortam yoğunlaştıkça ışığın sürati azalır, bu hız değişimi ışığın bükülmesine yani kırılmasına sebep olur.",
    question: "Işığın hızı her ortamda aynı kalsaydı kırılma olayı gerçekleşir miydi?",
    answer: "Hayır. Işığın kırılmasının temel sebebi, farklı saydam ortamlarda ışığın yayılma hızının değişmesidir. Hız değişmeseydi ışık doğrultusunu hiç değiştirmeden geçerdi."
  },
  // MEB DERS KİTABI DETAYLI KONU ANLATIMI, TABLOLAR, BAĞLANTI NOKTALARI VE HABERLER
  konuAnlatimi: {
    ozet: "Işığın bir saydam ortamdan yoğunluğu farklı başka bir saydam ortama geçerken doğrultusunu ve yayılma süratini değiştirmesine ışığın kırılması denir. Işığın boşlukta ve havadaki sürati yaklaşık 300.000 km/s iken, suda 225.000 km/s, camda ise 200.000 km/s'ye düşer (Hava > Su > Cam). Az yoğun ortamdan çok yoğun ortama geçen ışık normale yaklaşarak; çok yoğundan az yoğuna geçen ışık normalden uzaklaşarak kırılır. Yüzeye dik gelen ışın doğrultu değiştirmez ancak sürati değişir. Işığın kırılması su içindeki balıkların daha yakında görünmesine sebep olurken, beyaz ışığın cam prizmada kırılması gökkuşağı renklerine ayrışmasını sağlar.",
    kavramlar: [
      {
        terim: "Işığın Kırılması ve Ortam Yoğunluğu (Kırıcılık)",
        tanim: "Işığın saydam bir ortamdan farklı optik yoğunluğa sahip başka bir saydam ortama geçerken hızının değişmesi sebebiyle doğrultu değiştirmesidir.",
        onemliNoktalar: [
          "Işığın boşluktaki ve havadaki yayılma sürati: c ≈ 300.000 km/s (En hızlı).",
          "Işığın sudaki yayılma sürati: v_su ≈ 225.000 km/s.",
          "Işığın camdaki yayılma sürati: v_cam ≈ 200.000 km/s.",
          "Saydam ortamın yoğunluğu arttıkça ışığın yayılma hızı azalır: Hız sıralaması Hava > Su > Cam şeklindedir."
        ]
      },
      {
        terim: "Kırılma Olayının Temel Elemanları",
        tanim: "Işığın kırılmasını geometrik olarak gösterirken kullanılan referans çizgileri ve açılardır.",
        onemliNoktalar: [
          "Yüzey Normali (N): İki saydam ortamı ayıran sınır yüzeyine çizilen hayali dik (90°'lik) çizgidir.",
          "Gelen Işın: Birinci ortamdan yüzeye doğru gelen ışık ışınıdır.",
          "Gelme Açısı (i): Gelen ışının YÜZEY NORMALİ ile yaptığı açıdır (Yüzeyle yaptığı açı değildir!).",
          "Kırılan Işın: İkinci ortama geçiş yaparken yönü değişen ışındır.",
          "Kırılma Açısı (r): Kırılan ışının YÜZEY NORMALİ ile yaptığı açıdır."
        ]
      },
      {
        terim: "Işığın Kırılma Kanunları",
        tanim: "Işığın saydam ortamlar arasındaki geçiş kurallarıdır.",
        onemliNoktalar: [
          "1. Az Yoğundan Çok Yoğuna Geçiş (Hava -> Su/Cam): Işık çok yoğun ortama girdiğinde yavaşlar ve NORMALE YAKLAŞARAK kırılır. Gelme açısı kırılma açısından büyüktür (i > r).",
          "2. Çok Yoğundan Az Yoğuna Geçiş (Su/Cam -> Hava): Işık az yoğun ortama girdiğinde hızlanır ve NORMALDEN UZAKLAŞARAK kırılır. Kırılma açısı gelme açısından büyüktür (r > i).",
          "3. Yüzeye Dik Gelen Işın: İki ortamı ayıran yüzeye dik (normal doğrultusunda, gelme açısı 0°) gelen ışın KIRILMAZ (doğrultu değiştirmez). Ancak ortam değiştiği için yayılma hızı mutlaka DEĞİŞİR."
        ]
      },
      {
        terim: "Görünür Derinlik ve Optik Yanılsama",
        tanim: "Kırılma olayı sebebiyle cisimlerin bulundukları gerçek konumdan farklı mesafelerde algılanmasıdır.",
        onemliNoktalar: [
          "Az yoğundan çok yoğuna bakıldığında (Havadan göle bakan balıkçı): Balıktan çıkan ışınlar sudan havaya geçerken normalden uzaklaşır; göz bu ışınların uzantısını daha yukarıda algıladığından balığı OLDUĞUNDAN DAHA YAKINDA (DAHA SIĞDA) görür.",
          "Çok yoğundan az yoğuna bakıldığında (Suyun altındaki dalgıç havadaki kuşa bakınca): Kuştan gelen ışınlar suya girerken normale yaklaşır; dalgıç kuşu OLDUĞUNDAN DAHA UZAKTA (DAHA YÜKSEKTE) görür."
        ]
      },
      {
        terim: "Beyaz Işığın Prizmada Renklerine Ayrılması",
        tanim: "Beyaz ışığın cam prizmadan geçerken her rengin dalga boyunun farklı oranda kırılmasıyla renklere ayrılması olayıdır.",
        onemliNoktalar: [
          "Güneş ışığı (beyaz ışık) aslında kırmızı, turuncu, sarı, yeşil, mavi ve mor renklerin birleşimidir.",
          "Cam prizmada EN AZ KIRILAN RENK: Kırmızı'dır.",
          "Cam prizmada EN ÇOK KIRILAN RENK: Mor'dur.",
          "Renk sırası (KUTUSAYAMAM): Kırmızı - Turuncu - Sarı - Yeşil - Mavi - Mor.",
          "Yağmur damlaları havada asılı mikro prizmalar gibi davranarak güneş ışığını kırar ve gökkuşağını meydana getirir."
        ]
      },
      {
        terim: "Mîrim Çelebi (1450-1525) ve Optik Katkıları",
        tanim: "Ali Kuşçu'nun torunu olan Osmanlı gökbilimci ve matematikçisidir.",
        onemliNoktalar: [
          "Gökkuşağı ve hâle (Güneş etrafındaki ışık çemberi) oluşumunu ışığın su damlalarındaki çift kırılma ve tam yansımasıyla ilk kez matematiksel olarak açıklamıştır."
        ]
      }
    ],
    tablolar: [
      {
        baslik: "Işığın Saydam Ortam Geçişleri ve Kırılma Davranışları Tablosu",
        sutunlar: ["Geçiş Durumu", "Işığın Hızı", "Kırılma Yönü", "Açı Karşılaştırması", "Günlük Yaşam Sonucu"],
        satirlar: [
          ["Az Yoğundan Çok Yoğuna (Hava -> Su/Cam)", "Azalır (Yavaşlar)", "Normale yaklaşarak kırılır", "Gelme Açısı > Kırılma Açısı (i > r)", "Su içindeki nesneler daha yakında algılanır"],
          ["Çok Yoğundan Az Yoğuna (Su/Cam -> Hava)", "Artar (Hızlanır)", "Normalden uzaklaşarak kırılır", "Kırılma Açısı > Gelme Açısı (r > i)", "Havadaki nesneler su altından daha uzakta algılanır"],
          ["Yüzeye Dik Gelen Işın (Normalden 90°)", "Ortama göre artar/azalır", "Kırılmaz (Doğrultu değişmez)", "Gelme açısı = Kırılma açısı = 0°", "Konum sapması veya kırılma gerçekleşmez"],
          ["Beyaz Işığın Cam Prizmaya Girişi", "Her renk farklı yavaşlar", "Farklı açılarla bükülür", "Kırmızı en az, Mor en çok kırılır", "Gökkuşağı renk tayfı (spektrum) oluşur"]
        ],
        dipnot: "* Püf Noktası: Yüzeye dik gelen ışın doğrultu değiştirmez ama hızı ortamın yoğunluğuna göre mutlaka değişir!"
      }
    ]
  },
  // MEB KİTABINDAKİ BAĞLANTI NOKTALARI
  baglantiNoktalari: [
    {
      id: "bn-7-4-1",
      baslik: "Biyoloji ve Doğa Bağlantısı: Yalıçapkını Kuşunun Avlanma Optiği",
      alan: "Biyoloji & Optik Fiziği",
      aciklama: "Yalıçapkını kuşu ağaç dalından suyun içindeki balığı hedeflerken, suyun ışığı kırmasından dolayı balığın göründüğü yerde değil, daha derinde olduğunu içgüdüsel olarak hesaplar. Suya daldığında tam hedefe vurabilmek için kırılma açısını kusursuzca telafi eder.",
      soru: "Yalıçapkını kuşu balığın tam gördüğü noktaya doğru dalsaydı ne olurdu?",
      cevap: "Işığın çok yoğundan az yoğuna çıkarken normalden uzaklaşması sebebiyle balık olduğundan daha yüzeyde görünür. Kuş gördüğü noktaya dalsaydı balığın üzerinden boşluğa dalar ve avını kaçırırdı; kuş gerçek derinliği telafi ederek daha derine hamle yapar."
    },
    {
      id: "bn-7-4-2",
      baslik: "Teknoloji ve İletişim Bağlantısı: Fiber Optik İnternet Kabloları",
      alan: "Telekomünikasyon & Fotonik",
      aciklama: "Modern dünyada saniyede gigabaytlarca internet verisi, saç teli kalınlığındaki cam fiber kablolar içinden ışık sinyalleriyle aktarılır.",
      soru: "Kıvrımlı fiber optik kablonun içine giren lazer ışığı camdan dışarı havaya kaçmadan kilometrelerce yolu nasıl kateder?",
      cevap: "Işık çok yoğun cam ortamdan az yoğun kaplama ortamına sınır açısından daha büyük bir açıyla gönderildiğinde diğer ortama geçemez; 'tam yansıma' yaparak kablonun iç duvarlarından zikzaklar çizerek ışık hızıyla hedefe ulaşır."
    }
  ],
  // MEB KİTABINDAKİ GÜNCEL HABERLER
  haberler: [
    {
      id: "hbr-7-4-1",
      baslik: "James Webb Uzay Teleskobu Kızılötesi Işığın Kırılmasıyla Evrenin İlk Işığını Yakaladı",
      kaynak: "NASA & TÜBİTAK Bilim ve Teknik",
      tarih: "2023",
      ozet: "Dünya'dan 1,5 milyon kilometre uzaktaki James Webb Teleskobu, 13,5 milyar yıl önceki ilk yıldızlardan gelen ışığı devasa berilyum aynaları ve özel spektrograf prizmalarıyla analiz ediyor. Kozmik toz bulutlarını delip geçen kızılötesi ışık, teleskobun hassas prizmalarında kırılarak dalga boylarına ayrıştırılmakta ve yıldızların kimyasal bileşimi tespit edilmektedir.",
      soru: "Teleskop içindeki prizmaların optik kırılma özelliği astronomlara hangi bilgileri sağlamaktadır?",
      cevap: "Işığın prizmada kırılarak spektruma ayrılması, milyarlarca ışık yılı uzaktaki yıldızın hangi elementlerden oluştuğunu, sıcaklığını ve Dünya'dan hangi hızla uzaklaştığını gösteren eşsiz bir kimyasal parmak izi sunar."
    }
  ],
  // MEB KİTABINDAKİ KONTROL NOKTALARI
  kontrolNoktalari: [
    {
      id: "kn-7-4-1",
      baslik: "Kontrol Noktası 1 (Kırılma Kuralları ve Normale Yaklaşma/Uzaklaşma)",
      sorular: [
        {
          id: "kn-q-31",
          soru: "Havadan su dolu bir akvaryuma 45°'lik gelme açısıyla gönderilen bir lazer ışını için aşağıdakilerden hangisi DOĞRUDUR?",
          tip: "coktan-secmeli",
          secenekler: [
            "A) Işığın yayılma sürati artar ve normalden uzaklaşır.",
            "B) Işığın doğrultusu ile yayılma sürati hiç değişmez.",
            "C) Işığın sürati azalır ve normale yaklaşarak kırılır.",
            "D) Işığın kırılma açısı 45°'den daha büyük bir hal alır."
          ],
          dogruSecenek: "C",
          cevap: "C) Işığın sürati azalır ve normale yaklaşarak kırılır.",
          aciklama: "Hava az yoğun, su çok yoğundur. Az yoğundan çok yoğuna geçen ışık yavaşlar ve normale yaklaşarak kırılır (r < 45°)."
        },
        {
          id: "kn-q-32",
          soru: "Camdan havaya dik (yüzey normali üzerinden 90° ile) gelen bir ışık ışınının doğrultusu ve sürati nasıl değişir?",
          tip: "klasik",
          cevap: "Doğrultusu değişmez (kırılmaz); ancak az yoğun olan havaya çıktığı için yayılma sürati artar (yaklaşık 200.000 km/s'den 300.000 km/s'ye çıkar).",
          aciklama: "Yüzeye dik gelen ışın kırılmaz ama ortam değiştiğinde hız mutlaka değişir."
        }
      ]
    },
    {
      id: "kn-7-4-2",
      baslik: "Kontrol Noktası 2 (Görünür Derinlik ve Renklere Ayrılma)",
      sorular: [
        {
          id: "kn-q-33",
          soru: "Beyaz ışık cam prizmadan geçirildiğinde en az ve en çok kırılan renkler sırasıyla hangileridir?",
          tip: "coktan-secmeli",
          secenekler: [
            "A) En az: Mor, En çok: Kırmızı",
            "B) En az: Mavi, En çok: Sarı",
            "C) En az: Yeşil, En çok: Kırmızı",
            "D) En az: Kırmızı, En çok: Mor"
          ],
          dogruSecenek: "D",
          cevap: "D) En az: Kırmızı, En çok: Mor",
          aciklama: "Kırmızı ışık en uzun dalga boyuna sahip olduğu için prizmada en az kırılır; mor ışık ise en çok kırılan renktir."
        }
      ]
    }
  ],
  // BİLGİ BANKASI KUTULARI
  bilgiBankasi: [
    {
      id: "bb-7-4-1",
      baslik: "Mîrim Çelebi: Osmanlı'nın Optik ve Gökkuşağı Dâhisi",
      icerik: "Fatih Sultan Mehmet ve II. Bayezid dönemlerinde yaşayan Mîrim Çelebi, İbn-i Heysem ve Kemâleddin el-Fârisî'nin optik geleneklerini sürdürerek 'Kavs-i Kuzah' (Gökkuşağı) risalesini yazmıştır. Güneş ışınlarının yağmur damlasına girerken uğradığı kırılmaları geometrik çizimlerle ispatlamıştır.",
      onemliNot: "İslam medeniyeti optik biliminin kurucusu kabul edilir."
    },
    {
      id: "bb-7-4-2",
      baslik: "Sıcak Asfaltta Su Birikintisi Yanılsaması: Serap Olayı",
      icerik: "Yazın güneşli günlerde uzun bir yolda giderken ilerideki asfaltın üzerinde su birikintisi varmış gibi görünür. Gerçekte asfalt aşırı ısındığı için hemen üzerindeki hava tabakası çok ısınır ve yoğunluğu düşer. Gökyüzünden gelen mavi ışınlar, üstteki soğuk hava ile alttaki sıcak hava sınırında kırılarak gökyüzünün mavisini yere yansıtır. Gözümüz bunu yerdeki su birikintisi olarak algılar.",
      onemliNot: "Serap bir göz kusuru veya hayal değil, tamamen optik kırılma kanunlarının bir sonucudur."
    }
  ],
  // MEB KİTABINDAKİ PERFORMANS GÖREVİ
  performansGorevi: {
    baslik: "Su Bardağında Kalem Kırılması ve Su Damlasıyla Ev Yapımı Prizma Deneyi",
    amac: "Şeffaf bardak, su, kurşun kalem, ayna ve el feneri kullanarak ışığın kırılmasını ve beyaz ışığın renklere ayrılmasını deneysel olarak gözlemlemek ve fotoğraflamak.",
    surecAdimlari: [
      "Şeffaf bir cam bardağın yarısına kadar su doldurunuz; içine bir kurşun kalemi eğik olarak daldırınız.",
      "Kaleme tam üstten, yandan ve alttan bakarak kırılma görüntüsünü fotoğraflayınız; neden kırık göründüğünü ışık hızındaki değişimle açıklayınız.",
      "Güneşli bir odada içi su dolu sığ bir kaba tabanı 45° açıyla duracak şekilde küçük bir el aynası yerleştiriniz.",
      "Güneş ışığının aynadan yansıyarak beyaz duvara düşmesini sağlayınız; duvarda oluşan gökkuşağı renk sırasını not ediniz."
    ],
    beklenenUrun: "Işığın Kırılması Deney Raporu ve Duvarda Oluşan Gökkuşağı Tayfı Fotoğrafı.",
    degerlendirmeKriterleri: [
      "Kırılma olayında kalem görüntüsünün bilimsel gerekçesinin (az yoğundan çok yoğuna geçiş) doğru açıklanması",
      "Prizma deneyinde renklerin (Kırmızı, Turuncu, Sarı, Yeşil, Mavi, Mor) doğru sırada tespit edilmesi",
      "Deney düzeneğinin özenle kurulması ve fotoğrafların netliği"
    ]
  },
  // MEB KİTABI NELER ÖĞRENDİK BÖLÜMÜ SORULARI VE MAARİF ÇÖZÜMLERİ
  nelerOgrenildiSorulari: [
    {
      id: "no-7-4-1",
      soru: "1. Işığın kırılması nedir? Işığın farklı saydam ortamlarda kırılmasının temel sebebi nedir?",
      cevap: "Işığın bir saydam ortamdan farklı yoğunluktaki başka bir saydam ortama geçerken doğrultusunu ve yayılma süratini değiştirmesine ışığın kırılması denir. Temel sebebi, ışığın farklı optik yoğunluktaki ortamlarda farklı yayılma süratlerine sahip olmasıdır (örneğin havada ~300.000 km/s, suda ~225.000 km/s, camda ~200.000 km/s).",
      detayliCozum: "Işık yoğun ortama girdiğinde yavaşladığı için dalga cephesi bükülür ve doğrultusu değişir."
    },
    {
      id: "no-7-4-2",
      soru: "2. Işığın; a) Az yoğun ortamdan çok yoğun ortama, b) Çok yoğun ortamdan az yoğun ortama geçerken izlediği yolları normale yaklaşma/uzaklaşma açısından açıklayınız.",
      cevap: "a) Az yoğundan çok yoğuna (Hava -> Su): Işık yavaşlar ve NORMALE YAKLAŞARAK kırılır (i > r). b) Çok yoğundan az yoğuna (Cam -> Hava): Işık hızlanır ve NORMALDEN UZAKLAŞARAK kırılır (r > i).",
      detayliCozum: "Hızlanan ışın yüzey normalinden kaçar; yavaşlayan ışın yüzey normaline sığınır."
    },
    {
      id: "no-7-4-3",
      soru: "3. Akvaryumdaki bir Japon balığına dışarıdan bakan bir çocuk balığı neden gerçekte bulunduğu derinlikten daha yakında (daha yüzeyde) görür? Çizimle açıklayınız.",
      cevap: "Çünkü balıktan yansıyan ışınlar sudan (çok yoğun) havaya (az yoğun) geçerken normalden uzaklaşarak kırılır. Çocuğun gözü kırılan bu ışınların doğrusal uzantısını algılar. Uzantılar balığın gerçek konumunun daha yukarısında kesiştiği için balık daha yakında (sığda) görünür.",
      detayliCozum: "Görünür derinlik yanılsaması çok yoğundan az yoğuna çıkan ışınların bükülmesinden kaynaklanır."
    },
    {
      id: "no-7-4-4",
      soru: "4. Beyaz ışık cam prizmadan geçtiğinde neden renklerine ayrılır? En az ve en çok kırılan renkleri belirterek renk sıralamasını yazınız.",
      cevap: "Çünkü beyaz ışık farklı dalga boylarındaki renklerin karışımıdır ve cam prizma ortamında her rengin yayılma hızı ve kırılma açısı birbirinden farklıdır. En az kırılan renk KIRMIZI, en çok kırılan renk MOR'dur. Sıralama: Kırmızı, Turuncu, Sarı, Yeşil, Mavi, Mor (KUTUSAYAMAM).",
      detayliCozum: "Mor ışığın frekansı ve enerjisi yüksek, dalga boyu kısa olduğu için camda en çok yavaşlayan ve en çok sapan renktir."
    }
  ],
  hikmetStages: [
    {
      stage: 1,
      name: "1. Varlığı Tanıt (Işık ve Saydam Ortamlar)",
      concept: "Farklı Yoğunluktaki Saydam Ortamlar",
      text: "Hava, su, cam, elmas gibi ışığı geçiren maddeler saydam ortamlardır. Ancak her ortamın tanecik sıklığı ve optik kırıcılığı farklıdır. Işık boşlukta en hızlı ilerlerken (300.000 km/s), havada hemen hemen aynı, suda yaklaşık 225.000 km/s, camda ise 200.000 km/s hıza düşer.",
      analogies: ["Asfaltta koşan bir koşucunun kuma veya suya girdiğinde adımlarının yavaşlaması ve yönünün değişmesi"]
    },
    {
      stage: 2,
      name: "2. Parçalarını Göster (Temel Optik Elemanlar)",
      concept: "Normal, Gelen Işın ve Açılar",
      text: "Işığın kırılmasını analiz ederken iki ortamı ayıran sınıra dik çizilen hayali doğruya Yüzey Normali (N) denir. Gelen ışının normalle yaptığı açıya Gelme Açısı, kırılan ışının normalle yaptığı açıya ise Kırılma Açısı denir.",
      analogies: ["Giriş ve çıkış pusulası", "Açı ölçer referans çizgisi"]
    },
    {
      stage: 3,
      name: "3. Sanatını Çöz (Kırılma Kanunları)",
      concept: "Normale Yaklaşma ve Normalden Uzaklaşma",
      text: "1. Kural: Işık az yoğun ortamdan (hava) çok yoğun ortama (su/cam) geçerken yavaşlar ve NORMALE YAKLAŞARAK kırılır. Bu durumda kırılma açısı gelme açısından küçüktür (r < i).\n2. Kural: Işık çok yoğun ortamdan (su/cam) az yoğun ortama (hava) geçerken hızlanır ve NORMALDEN UZAKLAŞARAK kırılır. Bu durumda kırılma açısı gelme açısından büyüktür (r > i).",
      analogies: ["Yoğun trafiğe giren aracın emniyet şeridine (normale) yanaşması, açık yola çıkan aracın şeritten uzaklaşması"]
    },
    {
      stage: 4,
      name: "4. Hikmetini Kavra (Derinlik ve Konum Yanılsaması)",
      concept: "Görünür Derinlik ve Hayatın İntizamı",
      text: "Az yoğundan çok yoğuna bakanlar (balıkçı) cisimleri daha yakında görür; çok yoğundan az yoğuna bakanlar (dalgıç veya su canlıları) dışarıdaki avcıyı daha uzakta görür. Bu optik yasa su kuşlarının avlanma açısını ayarlamasına ve balıkların hayatta kalmasına vesile kılınmıştır.",
      analogies: ["Optik bir derinlik cetveli"]
    },
    {
      stage: 5,
      name: "5. Prizma ve Renkler (Işığın Sırrı)",
      concept: "Beyaz Işığın Ayrışması",
      text: "Beyaz ışık cam prizmaya gönderildiğinde, her renk ışığın dalga boyu ve hızı farklı olduğundan farklı açılarla kırılır. En az kırılan renk KIRMIZI, en çok kırılan renk ise MOR'dur. Sıralama: Kırmızı, Turuncu, Sarı, Yeşil, Mavi, Lacivert, Mor (KUTUSAYAMAM).",
      analogies: ["Gökkuşağı paleti", "Işık demetinin renk ipliklerine ayrılması"]
    },
    {
      stage: 6,
      name: "6. Medeniyet Ufku (Mîrim Çelebi)",
      concept: "Osmanlı'da Optik ve Gökkuşağı Fiziği",
      text: "Mîrim Çelebi (?-1525), Ali Kuşçu ve Kadızâde-i Rûmî'nin torunudur. Optik alanında yazdığı müstakil eserinde ışığın kırılması, görme şartları, gökkuşağı ve güneş halesi oluşumunu derin matematiksel ve fiziksel modellerle incelemiştir.",
      analogies: ["Doğu ile Batı arasında köprü kuran bilim kandili"]
    }
  ],
  etkinlikler: [
    {
      id: "etk-7-4-1",
      title: "Etkinlik Noktası 1 & 2: Çay Kaşığı ve Şeffaf Kapta Lazer Kırılması Deneyi",
      type: "Deney & Bilimsel Çıkarım",
      materials: ["Cam bardak", "Su", "Kalem / Çay kaşığı", "Geniş şeffaf kap", "Lazer ışık kaynağı"],
      steps: [
        "İçinde kalem bulunan bardağa su doldurunuz ve farklı açılardan bakarak kalemin kırılmış görüntüsünü gözlemleyiniz.",
        "Şeffaf kaba su doldurunuz; lazeri kabın üstünden havadan suya doğru eğik açıyla tutunuz.",
        "Işığın suya girerken yüzey normaline nasıl yaklaştığını gözlemleyip çiziniz.",
        "Lazeri suyun içinden havaya doğru eğik açıyla tuttuğunuzda ışığın normalden nasıl uzaklaştığını gözlemleyiniz."
      ],
      questions: [
        {
          qId: "etk-q-1",
          label: "1. Çıkarım",
          prompt: "Lazer ışını havadan suya geçerken neden normale yaklaşmıştır?",
          answer: "Çünkü su havadan daha yoğun bir ortamdır. Işık az yoğun ortamdan çok yoğun ortama geçerken hızı azalır ve normale yaklaşarak kırılır."
        },
        {
          qId: "etk-q-2",
          label: "2. Çıkarım",
          prompt: "Lazer ışığı sudan havaya dik (90°) tutulsaydı ne olurdu?",
          answer: "Normale dik (90° açıyla) gelen ışın kırılmadan doğrudan geçerdi, sadece havadaki hızı artardı."
        }
      ]
    }
  ],
  bilgiIstasyonlari: [
    {
      title: "İz Bırakan Bilim İnsanı: Mîrim Çelebi (?-1525)",
      scientistOrMission: "Osmanlı Matematikçi, Astronom ve Optik Bilgini",
      description: "Mîrim Çelebi, Osmanlı Devleti'nde müderrislik yapmış; görme olayının fizyolojisi, ışığın yayılması, ortam değiştirirken kırılması, prizma mekaniği ve gökkuşağının renk dizilimi üzerine çığır açıcı incelemeler yapmıştır.",
      hikmetNote: "Tabiat kanunlarını matematik diliyle çözmek, kâinattaki ilahi ölçüyü ve mükemmel nizamı idrak etmenin en asil yoludur."
    },
    {
      title: "Prizmanın Hikmeti: KUTUSAYAMAM Kodlaması",
      scientistOrMission: "Beyaz Işığın Tayfı",
      description: "Beyaz ışık bir prizmadan geçerken kırılma indislerinin farklılığı sebebiyle 7 renge ayrılır: Kırmızı, Turuncu, Sarı, Yeşil, Mavi, Lacivert, Mor. Kırmızı en az kırılan, mor ise en çok sapan ışıktır.",
      hikmetNote: "Görünürde sade ve tek renk olan beyaz ışığın içinde yedi rengin ahenkle gizlenmesi, kâinattaki tevhid ve kesret sırrını yansıtır."
    }
  ],
  dda: {
    id: "dda-kirilma-root",
    statement: "Işığın kırılması, ışık ışınlarının farklı yoğunluklardaki saydam bir ortamdan başka bir saydam ortama geçerken doğrultu ve hız değiştirerek ilerlemesidir.",
    correctDecision: "D",
    reason: "Işığın kırılması ortam yoğunluğu farkı sebebiyle hız ve doğrultu değişmesidir.",
    ifTrue: {
      id: "dda-node-d",
      statement: "Gelme açısı, gelen ışının yüzey ile arasındaki açıdır.",
      correctDecision: "Y",
      reason: "Gelme açısı gelen ışın ile yüzey arasındaki açı değil; gelen ışın ile YÜZEY NORMALİ arasındaki açıdır.",
      ifTrue: {
        id: "dda-leaf-1",
        statement: "Işık ışınlarının yağmur damlalarında kırılmasıyla gökkuşağı oluşur.",
        correctDecision: "D",
        reason: "Yağmur damlalarında ışık kırılarak renklerine ayrılır.",
        ifTrue: { exit: 1, isCorrect: false, feedback: "Gelme açısı yüzeyle değil normalle yapıldığı için 1. çıkış hatalıdır." },
        ifFalse: { exit: 2, isCorrect: false, feedback: "Hatalı yol izlendi." }
      },
      ifFalse: {
        id: "dda-leaf-2",
        statement: "Gelen ışın, yüzey normali ve kırılan ışın aynı düzlemdedir.",
        correctDecision: "D",
        reason: "Kırılmanın 1. temel kanununa göre gelen ışın, normal ve kırılan ışın aynı düzlemdedir.",
        ifTrue: { exit: 3, isCorrect: true, feedback: "Tebrikler! Doğru kararlarla 3. Çıkışa başarıyla ulaştınız." },
        ifFalse: { exit: 4, isCorrect: false, feedback: "Gelen ışın, normal ve kırılan ışın aynı düzlemdedir." }
      }
    },
    ifFalse: {
      id: "dda-node-y",
      statement: "Prizmaya gönderilen beyaz ışık kırılarak renklere ayrılır.",
      correctDecision: "D",
      reason: "Prizma beyaz ışığı kırarak renklere ayrıştırır.",
      ifTrue: {
        exit: 5,
        isCorrect: false,
        feedback: "Kök ifade doğru olduğu için Y kolundan gitmek hatalıydı."
      }
    }
  },
  biliyorumAnliyorumDusunuyorum: {
    biliyorum: "Işığın az yoğun ortamdan çok yoğun ortama geçerken yavaşlayıp normale yaklaştığını, çok yoğundan az yoğuna geçerken hızlanıp normalden uzaklaştığını biliyorum.",
    anliyorum: "Su dolu bardaktaki kaşığın kırık görünmesinin ve sudaki balıkların daha yakında algılanmasının ışığın doğrultu değiştirmesinden kaynaklandığını anlıyorum.",
    dusunuyorum: "Işık prizmada renklerine ayrılmasaydı ve kırılma kanunları olmasaydı gözümüzdeki mercek görüntüyü retinaya odaklayabilir miydi?"
  },
  pekistirmeIstasyonu: {
    stationTitle: "Pekiştirme İstasyonu: Işığın Kırılması ve Kırılma Kanunları",
    pageReference: "MEB 7. Sınıf Fen Bilimleri 2. Kitap, Sayfa 15-22",
    summaryText: "Bu istasyonda ışık ışınlarının az yoğun (hava) ve çok yoğun (su, cam) ortamlardaki kırılma davranışlarını, normal çizgisine göre açı ilişkilerini ve prizmadaki renk ayrışmasını pekiştirdiniz.",
    targetSkills: [
      "Işığın kırılma tanımını hız ve doğrultu değişimiyle ilişkilendirme",
      "Az yoğundan çok yoğuna geçişte normale yaklaşma kuralını uygulama",
      "Çok yoğundan az yoğuna geçişte normalden uzaklaşma kuralını uygulama",
      "Yüzeye dik (90°) gelen ışının kırılmadan geçtiğini ve hızının değiştiğini açıklama",
      "Beyaz ışığın prizmada renklere ayrılma sırasını (KUTUSAYAMAM) kavrama",
      "Görünür derinlik yanılsamalarını (balıkçı-dalgıç) optik kurallarla temellendirme"
    ]
  },
  nelerOgrenildi: {
    title: "1. Bölüm Sonunda Neler Öğrenildi? (Neler Öğrendik?)",
    ogrenilenKavramlar: [
      "Işığın Kırılması",
      "Yüzey Normali (N)",
      "Gelen Işın & Kırılan Işın",
      "Gelme Açısı & Kırılma Açısı",
      "Normale Yaklaşarak Kırılma (Az Yoğun → Çok Yoğun)",
      "Normalden Uzaklaşarak Kırılma (Çok Yoğun → Az Yoğun)",
      "Dik Gelen Işın (Kırılmaz, Hızı Değişir)",
      "Prizma & Beyaz Işığın Renklere Ayrılması",
      "Gökkuşağı Oluşumu",
      "Mîrim Çelebi Optik Çalışmaları"
    ],
    ozet: "MEB 2. Kitap Sayfa 22'deki 'Neler Öğrendik?' sentezine göre: Işık saydam bir ortamdan yoğunluğu farklı başka bir saydam ortama geçerken doğrultusunu ve hızını değiştirir; buna ışığın kırılması denir. Az yoğun ortamdan çok yoğun ortama geçen ışın normale yaklaşarak kırılır (kırılma açısı < gelme açısı). Çok yoğundan az yoğuna geçen ışın normalden uzaklaşarak kırılır (kırılma açısı > gelme açısı). Normal üzerinden (dik) gelen ışın kırılmaz. Güneş ışığı (beyaz ışık) yağmur damlalarında veya prizmada kırılarak kırmızıdan mora 7 renge ayrılır.",
    kontrolSorulari: [
      {
        id: "ko-kirilma-1",
        soru: "Çok yoğun ortamdan az yoğun ortama geçen ışık ışınının hızı ve kırılma açısı nasıl değişir?",
        cevap: "Işığın hızı artar; ışın yüzey normalinden uzaklaşarak kırıldığı için kırılma açısı gelme açısından daha büyük olur (r > i)."
      },
      {
        id: "ko-kirilma-2",
        soru: "A ortamından B ortamına geçen bir ışık ışını normale yaklaşarak kırılıyorsa hangi ortam daha yoğundur?",
        cevap: "Işın normale yaklaştığına göre B ortamı çok yoğun, A ortamı az yoğundur (Yoğunluk: B > A). B ortamında ışığın hızı A ortamına göre daha yavaştır."
      },
      {
        id: "ko-kirilma-3",
        soru: "Gökkuşağında en az kırılan ve en çok kırılan renkler hangileridir?",
        cevap: "Prizmada ve su damlasında en az kırılan (en az sapan) renk kırmızı; en çok kırılan (en çok sapan) renk ise mordur."
      }
    ]
  },
  sonrakiKonu: {
    code: "7.4.2",
    title: "Mercekler ve Günlük Hayatta Kullanım Alanları"
  },
  fillInBlanks: [
    {
      id: "fib-7-4-1",
      number: 1,
      baglam: "Işık ışınlarının saydam bir ortamdan yoğunluğu farklı başka bir saydam ortama geçerken hız ve doğrultu değiştirmesine ışığın kırılması denir.",
      soruKoku: "Işık ışınlarının farklı yoğunluktaki saydam ortama geçerken doğrultu değiştirmesi olayına ışığın ________ denir.",
      blankAnswer: "kırılması",
      acceptableAnswers: ["kırılması", "kırılma", "kirilmasi"],
      explanation: "Işığın farklı ortama geçerken doğrultu değiştirmesi kırılma olarak tanımlanır.",
      wordBankHint: ["kırılması", "yansıması", "soğrulması", "dağılması"]
    },
    {
      id: "fib-7-4-2",
      number: 2,
      baglam: "Işının yüzeye temas ettiği noktadan yüzeye dik (90°) olarak çizildiği varsayılan kesikli çizgiye yüzey normali denir.",
      soruKoku: "Işığın düştüğü yüzeye dik çizilen hayali çizgiye yüzey ________ adı verilir ve N harfiyle gösterilir.",
      blankAnswer: "normali",
      acceptableAnswers: ["normali", "normal"],
      explanation: "Yüzeye dik 90 derecelik eksen yüzey normalidir.",
      wordBankHint: ["normali", "teğeti", "ekseni", "odak"]
    },
    {
      id: "fib-7-4-3",
      number: 3,
      baglam: "Gelen ışın ile yüzeyin normali arasında kalan açıya gelme açısı denir.",
      soruKoku: "Gelen ışın ile yüzey normali arasındaki açıya ________ açısı denir.",
      blankAnswer: "gelme",
      acceptableAnswers: ["gelme", "gelis"],
      explanation: "Gelen ışın ile normal arasındaki açı gelme açısıdır.",
      wordBankHint: ["gelme", "kırılma", "yansıma", "sapma"]
    },
    {
      id: "fib-7-4-4",
      number: 4,
      baglam: "Kırılan ışın ile yüzeyin normali arasındaki açıya kırılma açısı denir.",
      soruKoku: "Kırılan ışının normal ile yaptığı açıya ________ açısı denir.",
      blankAnswer: "kırılma",
      acceptableAnswers: ["kırılma", "kirilma"],
      explanation: "Kırılan ışın ile normal arasındaki açı kırılma açısıdır.",
      wordBankHint: ["kırılma", "gelme", "yansıma", "odak"]
    },
    {
      id: "fib-7-4-5",
      number: 5,
      baglam: "Az yoğun ortamdan çok yoğun ortama geçen ışık ışınları normale yaklaşarak kırılır.",
      soruKoku: "Işık az yoğun ortamdan çok yoğun ortama geçerken normale ________ kırılır.",
      blankAnswer: "yaklaşarak",
      acceptableAnswers: ["yaklaşarak", "yaklasarak"],
      explanation: "Çok yoğun ortamda ışık yavaşlar ve normale yaklaşır.",
      wordBankHint: ["yaklaşarak", "uzaklaşarak", "dik", "paralel"]
    },
    {
      id: "fib-7-4-6",
      number: 6,
      baglam: "Çok yoğun ortamdan az yoğun ortama geçen ışık ışınları normalden uzaklaşarak kırılır.",
      soruKoku: "Işık çok yoğun ortamdan az yoğun ortama geçerken normalden ________ kırılır.",
      blankAnswer: "uzaklaşarak",
      acceptableAnswers: ["uzaklaşarak", "uzaklasarak"],
      explanation: "Az yoğun ortamda ışık hızlanır ve normalden uzaklaşır.",
      wordBankHint: ["uzaklaşarak", "yaklaşarak", "ayrılmadan", "sabit"]
    },
    {
      id: "fib-7-4-7",
      number: 7,
      baglam: "Bir ortamdan diğerine yüzeye dik (90° açı ile) gelen ışık ışınları doğrultu değiştirmeden geçer.",
      soruKoku: "Saydam ortam yüzeyine dik gelen ışık ışınları ________ diğer ortama geçer.",
      blankAnswer: "kırılmadan",
      acceptableAnswers: ["kırılmadan", "kirilmadan", "sapmadan"],
      explanation: "Normal doğrultusunda dik gelen ışın kırılmaz, sadece hızı değişir.",
      wordBankHint: ["kırılmadan", "kırılarak", "yansıyarak", "soğrularak"]
    },
    {
      id: "fib-7-4-8",
      number: 8,
      baglam: "Işığın yayılma hızı ortamın yoğunluğu arttıkça azalır.",
      soruKoku: "Saydam ortamın yoğunluğu arttıkça ışığın ortamdaki yayılma hızı ________.",
      blankAnswer: "azalır",
      acceptableAnswers: ["azalır", "azalir", "düşer"],
      explanation: "Ortam yoğunlaştıkça ışığın hızı düşer (boşluk > hava > su > cam).",
      wordBankHint: ["azalır", "artar", "değişmez", "sıfırlanır"]
    },
    {
      id: "fib-7-4-9",
      number: 9,
      baglam: "Cam prizmaya gönderilen beyaz güneş ışığı kırılarak renklere ayrılır.",
      soruKoku: "Beyaz ışık üçgen cam ________ gönderildiğinde kırılarak kırmızıdan mora renklere ayrılır.",
      blankAnswer: "prizmaya",
      acceptableAnswers: ["prizmaya", "prizma", "prizmaya."],
      explanation: "Prizma beyaz ışığı kırılma indislerine göre renklere ayrıştırır.",
      wordBankHint: ["prizmaya", "aynaya", "termometreye", "küreye"]
    },
    {
      id: "fib-7-4-10",
      number: 10,
      baglam: "Osmanlı döneminde Mîrim Çelebi ışığın kırılması, görme olayı ve gökkuşağı oluşumu üzerine çalışmalar yapmıştır.",
      soruKoku: "Osmanlı'da ışığın kırılması ve gökkuşağı oluşumu üzerine önemli eserler veren bilim insanı ________ Çelebi'dir.",
      blankAnswer: "Mîrim",
      acceptableAnswers: ["Mîrim", "Mirim", "mirim"],
      explanation: "Mîrim Çelebi optik ve astronomi alanında önemli Osmanlı bilginidir.",
      wordBankHint: ["Mîrim", "Evliya", "Kâtip", "Hezarfen"]
    }
  ],
  contextQuestions: [
    {
      id: "mcq-7-4-1",
      number: 1,
      baglam: "Merve, Şanlıurfa Balıklıgöl'de yüzen balıklara yem atarken balıkların yüzeye çok yakın olduğunu fark etmiş; ancak elini uzattığında balıkların daha derinde olduğunu anlamıştır.",
      soruKoku: "Merve'nin balıkları gerçekte bulundukları derinlikten daha yakında görmesinin bilimsel nedeni aşağıdakilerden hangisidir?",
      secenekler: {
        A: "Işığın suda havadan daha hızlı yayılması",
        B: "Sudaki balıktan yansıyan ışınların havaya geçerken normalden uzaklaşarak kırılması",
        C: "Balıkların güneş ışığını tamamen soğurması",
        D: "Suyun havadan daha az yoğun bir ortam olması"
      },
      dogruCevap: "B",
      cozum: "Balıktan çıkan ışınlar çok yoğun sudan az yoğun havaya geçerken hızlanır ve normalden uzaklaşarak kırılır. Göz kırılan ışınların uzantısını algıladığı için balığı yüzeye daha yakın (daha sığda) görür.",
      olculenKazanim: "F.7.4.1.1. Ortam değiştiren ışığın izlediği yolu analiz eder.",
      olculenBeceri: "Bilimsel Çıkarım ve Günlük Yaşam Bağlantısı",
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
      id: "mcq-7-4-2",
      number: 2,
      baglam: "Bir fen laboratuvarında öğretmen içi su dolu bir bardağın içerisine kurşun kalem koyduğunda öğrencilerine kalemin kırılmış gibi görünmesinin nedenini sormuştur.",
      soruKoku: "Öğrencilerin bu gözlemle ilgili yaptığı aşağıdaki açıklamalardan hangisi doğrudur?",
      secenekler: {
        A: "Kalem suyun kaldırma kuvveti nedeniyle fiziksel olarak ikiye bölünmüştür.",
        B: "Kalemin su içindeki kısmından gelen ışık ışınları sudan havaya geçerken doğrultu ve hız değiştirmiştir.",
        C: "Işık su ortamında havaya göre daha hızlı ilerlediği için kalem bükülmüştür.",
        D: "Cam bardak ışığı tamamen yansıttığı için kalemin alt kısmı yok olmuştur."
      },
      dogruCevap: "B",
      cozum: "Kalem fiziksel olarak kırılmaz; kalemin su içindeki kısmından çıkan ışınlar sudan havaya geçerken doğrultu değiştirdiği (kırıldığı) için kırılmış gibi algılanır.",
      olculenKazanim: "F.7.4.1.1. Işığın kırılması olayını tanımlar.",
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
      id: "mcq-7-4-3",
      number: 3,
      baglam: "Hava ortamından cam blok ortamına 45°'lik gelme açısıyla gönderilen tek renkli bir ışık ışını gözlemlenmektedir. Camın yoğunluğu havanın yoğunluğundan büyüktür.",
      soruKoku: "Bu ışık ışınının cam ortamındaki hareketi ile ilgili aşağıdakilerden hangisi kesinlikle doğrudur?",
      secenekler: {
        A: "Normale yaklaşarak kırılır ve kırılma açısı 45°'den küçük olur.",
        B: "Normalden uzaklaşarak kırılır ve hızı artar.",
        C: "Kırılmadan aynı doğrultuda ilerler.",
        D: "Kırılma açısı gelme açısından daha büyük olur."
      },
      dogruCevap: "A",
      cozum: "Az yoğun ortamdan (hava) çok yoğun ortama (cam) geçen ışık ışınları normale yaklaşarak kırılır; dolayısıyla kırılma açısı gelme açısından küçük (r < 45°) olur ve hızı azalır.",
      olculenKazanim: "F.7.4.1.2. Az yoğundan çok yoğuna geçiş kurallarını açıklar.",
      olculenBeceri: "Optik Prensipleri Uygulama",
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
      id: "mcq-7-4-4",
      number: 4,
      baglam: "Bir ışık ışını K saydam ortamından L saydam ortamına geçerken yüzey normalinden uzaklaşacak şekilde kırılmaktadır.",
      soruKoku: "Buna göre K ve L ortamları ile ilgili aşağıdaki karşılaştırmalardan hangisi doğrudur?",
      secenekler: {
        A: "K ortamının yoğunluğu L ortamından küçüktür.",
        B: "Işığın L ortamındaki yayılma hızı K ortamındakinden daha büyüktür.",
        C: "K ortamında kırılma açısı gelme açısından büyüktür.",
        D: "L ortamı K ortamına göre daha yoğun bir ortamdır."
      },
      dogruCevap: "B",
      cozum: "Normalden uzaklaşarak kırılma, çok yoğundan az yoğuna geçerken meydana gelir (Yoğunluk: K > L). Az yoğun ortamda ışık daha hızlı yayılacağından ışığın L'deki hızı K'dekinden büyüktür.",
      olculenKazanim: "F.7.4.1.2. Çok yoğundan az yoğuna geçiş kurallarını açıklar.",
      olculenBeceri: "Veri Yorumlama ve Mantık Yürütme",
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
      id: "mcq-7-4-5",
      number: 5,
      baglam: "Saydam bir sıvı yüzeyine dik (gelme açısı 0°, yüzeyle 90° açı yapacak şekilde) gönderilen bir ışık ışını inceleniyor.",
      soruKoku: "Bu ışık ışını hakkında verilen aşağıdaki ifadelerden hangisi doğrudur?",
      secenekler: {
        A: "Işın 90° kırılarak yüzeye paralel gider.",
        B: "Işın doğrultusunu değiştirmeden geçer fakat sıvının yoğunluğuna göre hızı değişir.",
        C: "Işının hızı ve doğrultusu hiçbir şekilde değişmez.",
        D: "Işın sıvıya hiç giremez, tamamen geri yansır."
      },
      dogruCevap: "B",
      cozum: "Yüzeye dik gelen ışık ışınları kırılmadan (doğrultu değiştirmeden) geçer; ancak ortam değiştirdiği için yayılma hızı mutlaka değişir.",
      olculenKazanim: "F.7.4.1.2. Yüzeye dik gelen ışının kırılma durumunu açıklar.",
      olculenBeceri: "Kavram Yanılgısını Düzeltme",
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
      id: "mcq-7-4-6",
      number: 6,
      baglam: "Denizde dalış yapan bir dalgıç, suyun altından iskelede duran balıkçıya doğru baktığında balıkçıyı başının hizasından daha yüksekte görmektedir.",
      soruKoku: "Dalgıcın balıkçıyı olduğundan daha uzakta görmesinin temel nedeni nedir?",
      secenekler: {
        A: "Balıkçıdan gelen ışınların havadan suya geçerken normale yaklaşarak kırılması",
        B: "Balıkçıdan gelen ışınların suda hızlanması",
        C: "Suyun havanın yoğunluğundan daha az olması",
        D: "Dalgıcın taktığı gözlüğün ışığı tamamen soğurması"
      },
      dogruCevap: "A",
      cozum: "Balıkçıdan yansıyan ışınlar az yoğun havadan çok yoğun suya girerken normale yaklaşarak kırılır. Dalgıç kırılan ışınların uzantısını gördüğü için balıkçıyı gerçekte bulunduğu konumdan daha uzakta (daha yukarıda) algılar.",
      olculenKazanim: "F.7.4.1.1. Sudan havaya bakışta görünür konumu irdeler.",
      olculenBeceri: "Günlük Yaşam Problem Çözme",
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
      id: "mcq-7-4-7",
      number: 7,
      baglam: "Bir ışık demeti cam prizmaya gönderildiğinde kırılmaya uğrayarak farklı renkteki ışınlara ayrışmaktadır.",
      soruKoku: "Prizmadan geçen beyaz ışığın renklere ayrılması sürecinde en az kırılan ve en çok kırılan renkler hangi seçenekte doğru eşleştirilmiştir?",
      secenekler: {
        A: "En az kırılan: Kırmızı / En çok kırılan: Mor",
        B: "En az kırılan: Mor / En çok kırılan: Kırmızı",
        C: "En az kırılan: Yeşil / En çok kırılan: Sarı",
        D: "En az kırılan: Mavi / En çok kırılan: Turuncu"
      },
      dogruCevap: "A",
      cozum: "Prizmaya giren beyaz ışıktaki renklerden dalga boyu en büyük olan kırmızı en az kırılırken, frekansı en yüksek olan mor ışık en çok kırılır (Kırmızı, Turuncu, Sarı, Yeşil, Mavi, Lacivert, Mor).",
      olculenKazanim: "F.7.4.1.3. Prizmada ışığın renklere ayrılmasını açıklar.",
      olculenBeceri: "Bilimsel Sıralama ve Analiz",
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
      id: "mcq-7-4-8",
      number: 8,
      baglam: "Yağmurlu bir havanın ardından açan Güneş ile birlikte gökyüzünde rengârenk bir gökkuşağı belirmiştir.",
      soruKoku: "Gökkuşağı oluşumu ile ilgili aşağıdaki ifadelerden hangisi yanlıştır?",
      secenekler: {
        A: "Havadaki su damlacıkları birer küçük cam prizma gibi davranır.",
        B: "Güneş ışınları su damlasına girerken ve çıkarken kırılmaya uğrar.",
        C: "Gökkuşağının oluşumu ışığın soğrulmasının bir sonucudur.",
        D: "Beyaz ışığı oluşturan renklerin farklı açılarla kırılması sonucu renk kuşağı oluşur."
      },
      dogruCevap: "C",
      cozum: "Gökkuşağı ışığın soğrulmasıyla değil, su damlalarında kırılması ve tam yansıması sonucu renklerine ayrışmasıyla oluşur.",
      olculenKazanim: "F.7.4.1.3. Gökkuşağı oluşumunu kırılma ile ilişkilendirir.",
      olculenBeceri: "Doğa Olaylarını Bilimsel Açıklama",
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
      id: "mcq-7-4-9",
      number: 9,
      baglam: "Ali Kuşçu ve Kadızâde-i Rûmî'nin torununun oğlu olan Osmanlı bilgini Mîrim Çelebi, medreselerde okutulan eserlerin yanı sıra optik alanında da önemli incelemeler yapmıştır.",
      soruKoku: "Mîrim Çelebi'nin optik alanında yaptığı çalışmalar arasında aşağıdakilerden hangisi yer almaz?",
      secenekler: {
        A: "Işığın yayılması ve kırılma kanunlarını incelemek",
        B: "Gökkuşağı ve güneş halesinin oluşum mekanizmasını açıklamak",
        C: "Gözün görme şartlarını ve ışık özelliklerini analiz etmek",
        D: "Elektron mikroskobunu icat ederek atom çekirdeğini fotoğraflamak"
      },
      dogruCevap: "D",
      cozum: "Elektron mikroskobu 20. yüzyılda modern fizik çağında geliştirilmiştir. 16. yüzyıl Osmanlı bilgini Mîrim Çelebi optik, ışığın kırılması, gökkuşağı ve hale oluşumu üzerine çalışmıştır.",
      olculenKazanim: "F.7.4.1.4. Türk-İslam bilim insanlarının optiğe katkılarını açıklar.",
      olculenBeceri: "Bilim Tarihi ve Kültürel Miras",
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
      id: "mcq-7-4-10",
      number: 10,
      baglam: "Işığın X, Y ve Z saydam ortamlarındaki yayılma hızları sırasıyla Vx = 200.000 km/s, Vy = 225.000 km/s ve Vz = 300.000 km/s olarak ölçülmüştür.",
      soruKoku: "Buna göre X, Y ve Z ortamlarının optik yoğunluklarının büyükten küçüğe doğru sıralanışı nasıldır?",
      secenekler: {
        A: "X > Y > Z",
        B: "Z > Y > X",
        C: "Y > X > Z",
        D: "X > Z > Y"
      },
      dogruCevap: "A",
      cozum: "Işığın hızı ile ortamın yoğunluğu ters orantılıdır. Işık en yavaş X ortamında (200.000 km/s) yayıldığına göre en yoğun ortam X'tir. En hızlı Z'de yayıldığına göre en az yoğun Z'dir. Sıralama: X > Y > Z.",
      olculenKazanim: "F.7.4.1.2. Işık hızı ve ortam yoğunluğu ilişkisini kurar.",
      olculenBeceri: "Sayısal Veri Analizi ve Karşılaştırma",
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
      id: "mcq-7-4-11",
      number: 11,
      baglam: "Bir öğrenci hava ortamından su ortamına 50°'lik gelme açısıyla lazer ışını göndermiş ve su içindeki kırılma açısını ölçmüştür.",
      soruKoku: "Öğrencinin ölçtüğü kırılma açısı değeri aşağıdakilerden hangisi olabilir?",
      secenekler: {
        A: "65°",
        B: "50°",
        C: "35°",
        D: "90°"
      },
      dogruCevap: "C",
      cozum: "Hava az yoğun, su çok yoğun ortamdır. Az yoğundan çok yoğuna geçen ışın normale yaklaşarak kırılır. Bu yüzden kırılma açısı gelme açısından (50°) küçük olmalıdır (35° uygundur).",
      olculenKazanim: "F.7.4.1.2. Gelme ve kırılma açılarını karşılaştırır.",
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
      id: "mcq-7-4-12",
      number: 12,
      baglam: "Sabun köpüklerine güneş ışığı vurduğunda köpük yüzeyinde dalgalanan rengârenk gökkuşağı desenleri belirir.",
      soruKoku: "Sabun köpüğündeki bu renk cümbüşünün oluşma prensibi aşağıdakilerden hangisidir?",
      secenekler: {
        A: "Sabunun yapısındaki kimyasalların ışık üretmesi",
        B: "Güneş ışığının ince sabun zarına girerken ve çıkarken kırılarak ve girişim yaparak renklerine ayrılması",
        C: "Sabun köpüğünün ışığı tamamen yutması",
        D: "Havadaki oksijen gazının alev alması"
      },
      dogruCevap: "B",
      cozum: "Sabun zarı ince saydam bir tabakadır. Işık bu tabakanın alt ve üst yüzeyinde kırılır ve yansır; beyaz ışığı oluşturan renkler ayrılarak gözümüze ulaşır.",
      olculenKazanim: "F.7.4.1.3. Doğadaki renk ayrışması örneklerini irdeler.",
      olculenBeceri: "Gözleme Dayalı Bilimsel Açıklama",
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
      id: "mcq-7-4-13",
      number: 13,
      baglam: "Bir akvaryumun köşesinden bakan çocuk, akvaryumun içinde tek bir balık olmasına rağmen iki adet balık gördüğünü iddia etmiştir.",
      soruKoku: "Bu optik olayın gerçekleşmesine neden olan temel faktör nedir?",
      secenekler: {
        A: "Balığın çok hızlı yüzmesi",
        B: "Balıktan çıkan ışık ışınlarının akvaryumun birbirine dik iki farklı cam yüzeyinden kırılarak çocuğun gözüne iki ayrı doğrultudan ulaşması",
        C: "Balığın kendisini klonlaması",
        D: "Akvaryum suyunun ışığı tamamen soğurması"
      },
      dogruCevap: "B",
      cozum: "Işık ışınları akvaryumun ön ve yan cam yüzeylerinden farklı açılarla kırılarak göze ulaştığında, göz her iki doğrultuda ayrı bir görüntü algılar ve tek balık iki tane gibi görünür.",
      olculenKazanim: "F.7.4.1.1. Işığın kırılmasıyla oluşan görüntü algılarını çözümler.",
      olculenBeceri: "Problem Çözme ve Eleştirel Düşünme",
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
      id: "mcq-7-4-14",
      number: 14,
      baglam: "Işık ışınının kırılmasıyla ilgili I. Gelen ışın, normal ve kırılan ışın aynı düzlemdedir. II. Kırılma açısı her zaman gelme açısına eşittir. III. Işığın hızı yoğun ortamda daha azdır. ifadeleri verilmiştir.",
      soruKoku: "Yukarıdaki ifadelerden hangileri kırılma kanunlarına uygundur?",
      secenekler: {
        A: "Yalnız I",
        B: "I ve III",
        C: "II ve III",
        D: "I, II ve III"
      },
      dogruCevap: "B",
      cozum: "I ve III doğrudur. II yanlıştır çünkü kırılma açısı sadece dik geçişte sıfır olur; açılı geçişlerde gelme açısından ya büyüktür ya da küçüktür (yansıma kanununda açılar eşittir, kırılmada değil).",
      olculenKazanim: "F.7.4.1.2. Kırılma kanunlarını özetler.",
      olculenBeceri: "Öncül Analizi ve Kavram Netliği",
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
      id: "mcq-7-4-15",
      number: 15,
      baglam: "Bir havuzun dibine düşen madeni parayı almaya çalışan bir genç, elini tam parayı gördüğü noktaya daldırdığında parayı tutamamıştır.",
      soruKoku: "Genç, parayı tek hamlede yakalayabilmek için elini gördüğü noktaya göre nasıl yönlendirmelidir?",
      secenekler: {
        A: "Gördüğü noktanın daha derinindeki gerçek konumuna doğru",
        B: "Gördüğü noktanın daha yüzeyine doğru",
        C: "Tam olarak gördüğü noktaya doğru",
        D: "Havuzun su seviyesinin üstüne doğru"
      },
      dogruCevap: "A",
      cozum: "Havadan suya bakan kişi parayı gerçekte olduğundan daha sığda (yüzeye yakın) görür. Paranın asıl konumu gördüğü noktanın daha derinindedir; dolayısıyla elini daha derine uzatmalıdır.",
      olculenKazanim: "F.7.4.1.1. Görünür derinlik yanılsamasına çözüm üretir.",
      olculenBeceri: "Pratik Fen Becerisi",
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
      id: "mcq-7-4-16",
      number: 16,
      baglam: "Optik fiber kablolar, ışığın cam veya plastik ortam içerisinde tam yansımalar yaparak kıvrımlı yollarda bile kayıpsız ve ışık hızıyla veri iletmesini sağlar.",
      soruKoku: "Fiber optik kabloların çalışma mantığında ışığın hangi temel davranış özellikleri belirleyicidir?",
      secenekler: {
        A: "Işığın sadece metaller tarafından soğurulması",
        B: "Işığın çok yoğun çekirdek ortamından az yoğun kılıf ortamına geçerken sınır açısından büyük açıyla tam yansımaya uğraması",
        C: "Işığın kütlesinin kabloyu aşağı çekmesi",
        D: "Kablo içinde prizmalar bulunması"
      },
      dogruCevap: "B",
      cozum: "Fiber optik teknolojisi, ışığın çok yoğundan az yoğuna geçerken kırılma sınırını aşması ve tam yansıma yaparak kablo boyunca ilerlemesi prensibine dayanır.",
      olculenKazanim: "F.7.4.1.2. Kırılma ve yansıma ilkelerinin ileri teknolojideki rolünü fark eder.",
      olculenBeceri: "Teknoloji Entegrasyonu",
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
      id: "mcq-7-4-17",
      number: 17,
      baglam: "Bir öğrenci elindeki el feneri ışığını önce havada, sonra suda, sonra da cam blok içinde ilerletmiştir.",
      soruKoku: "Işığın bu üç ortamdaki ortalama süratlerinin büyükten küçüğe doğru sıralanışı nasıldır?",
      secenekler: {
        A: "Hava > Su > Cam",
        B: "Cam > Su > Hava",
        C: "Su > Cam > Hava",
        D: "Hava > Cam > Su"
      },
      dogruCevap: "A",
      cozum: "Hava en az yoğun, cam en çok yoğundur. Ortam yoğunluğu arttıkça ışığın yayılma hızı azalır: Hava (~300.000 km/s) > Su (~225.000 km/s) > Cam (~200.000 km/s).",
      olculenKazanim: "F.7.4.1.2. Farklı ortamlarda ışık hızlarını karşılaştırır.",
      olculenBeceri: "Veri Sıralama",
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
      id: "mcq-7-4-18",
      number: 18,
      baglam: "Çöl ortamında veya sıcak yaz günlerinde asfalt üzerinde uzaktan su birikintisi varmış gibi görünen 'serap' olayı gözlemlenir.",
      soruKoku: "Serap olayının ortaya çıkış nedeni fiziksel olarak nasıl açıklanır?",
      secenekler: {
        A: "Asfaltın altından gerçekten su sızması",
        B: "Yere yakın havanın çok ısınıp yoğunluğunun azalması ve gökyüzünden gelen ışınların farklı yoğunluktaki hava katmanlarında kırılarak tam yansıması",
        C: "Güneş'in dünyaya normalden çok yaklaşması",
        D: "Gözlerimizin sıcaktan geçici olarak bozulması"
      },
      dogruCevap: "B",
      cozum: "Sıcak asfalt üzerindeki hava katmanı aşırı ısınarak genleşir ve yoğunluğu düşer. Üstteki soğuk hava ile alttaki sıcak hava arasında yoğunluk farkı oluşur; ışık bu katmanlarda kırılarak gökyüzünün yansımasını yere düşürür.",
      olculenKazanim: "F.7.4.1.1. Serap olayını ışığın kırılmasıyla ilişkilendirir.",
      olculenBeceri: "Doğa Fiziği Tefekkürü",
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
      id: "mcq-7-4-19",
      number: 19,
      baglam: "Bir ışık ışınının gelme açısı 60° iken diğer ortama geçerken kırılma açısı 75° olarak ölçülmüştür.",
      soruKoku: "Bu ışık ışını ve ortamlar hakkında aşağıdakilerden hangisi söylenebilir?",
      secenekler: {
        A: "Işık az yoğundan çok yoğun ortama geçmiştir.",
        B: "Işık çok yoğun ortamdan az yoğun ortama geçmiş ve hızı artmıştır.",
        C: "Işığın hızı ikinci ortamda azalmıştır.",
        D: "Işık normale yaklaşacak şekilde kırılmıştır."
      },
      dogruCevap: "B",
      cozum: "Kırılma açısı (75°) gelme açısından (60°) daha büyük olduğuna göre ışık normalden uzaklaşmıştır. Bu durum çok yoğundan az yoğuna geçişte gerçekleşir ve az yoğun ortamda ışık hızlanır.",
      olculenKazanim: "F.7.4.1.2. Kırılma açısı büyüklüğünden ortam kırıcılığını çıkarır.",
      olculenBeceri: "Açı ve Geometri Temelli Çıkarım",
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
      id: "mcq-7-4-20",
      number: 20,
      baglam: "Işık ışınları saydam ortamlarda en az zaman harcayacakları rotayı takip ederek kırılır (Fermat İlkesi). Bu prensip evrendeki hiçbir şeyin başıboş ve israflı yaratılmadığını, en yüksek verimlilik ve intizamla sevk edildiğini gösterir.",
      soruKoku: "Işığın kırılma kanunlarındaki bu matematiksel hassasiyet insana hangi temel düşünceyi kazandırır?",
      secenekler: {
        A: "Işığın rastgele ve plansız dağıldığını",
        B: "Evrendeki her fiziksel yasanın arkasında sonsuz bir ilim, hikmet ve kusursuz bir matematiksel düzen olduğunu",
        C: "Işığın bilimsel deneylerle açıklanamayacağını",
        D: "Farklı ortamlarda kırılmanın tesadüfen meydana geldiğini"
      },
      dogruCevap: "B",
      cozum: "Işığın kırılma açıları ve hız ilişkileri mikroskobik ölçekten galaksilere kadar şaşmaz bir kanunla işler; bu da kâinattaki hikmet ve intizamın açık bir delilidir.",
      olculenKazanim: "F.7.4.1.1. Evren tasavvuru ve hikmet eksenli fen okuryazarlığı geliştirir.",
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
