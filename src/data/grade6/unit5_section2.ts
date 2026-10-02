import { SectionContent } from '../../types';

export const grade6Unit5Section2: SectionContent = {
  code: "6.5.2",
  title: "Sesin Sürati ve Maddeyle Etkileşimi (Yansıma, Soğurulma, Akustik)",
  unitCode: "6.5",
  unitTitle: "5. Ünite: Ses ve Özellikleri",
  summary: "Sesin ortamlara (katı > sıvı > gaz) ve sıcaklığa bağlı sürati; ışık hızı ve ses hızı karşılaştırması; sesin maddeyle etkileşimi (yansıma, soğurulma, iletilme); yankı olayı ve 17 metre kuralı; akustik bilimi ve Mimar Sinan'ın Süleymaniye Camii'ndeki akustik küpleri; sonar, ultrason ve ses yalıtımı teknolojileri.",
  kazanimlar: [
    "F.6.5.2.1. Sesin farklı ortamlardaki süratini karşılaştırır ve sıcaklığın ses süratine etkisini açıklar.",
    "F.6.5.2.2. Işık ve sesin süratlerini karşılaştırarak gök gürültüsü ve şimşek olayını yorumlar.",
    "F.6.5.2.3. Sesin maddeyle etkileşimini (yansıma, soğurulma ve iletilme) irdeler.",
    "F.6.5.2.4. Akustik uygulamalarına ve Mimar Sinan'ın eserlerindeki akustik tasarımlara örnekler verir.",
    "F.6.5.2.5. Ses yalıtımının önemini açıklar ve ultrason/sonar gibi ses teknolojilerini değerlendirir."
  ],
  hatirlayalim: {
    text: "Önceki konuda sesin titreşimle yayıldığını ve boşlukta yayılamadığını öğrendik. Şimdi ise taneciklerin sıkılığına ve sıcaklığına bağlı olarak sesin hangi süratle ilerlediğini, sert duvarlara çarpınca nasıl yansıdığını ve Mimar Sinan'ın akustiği camilerde nasıl bir sanata dönüştürdüğünü inceliyoruz.",
    keyPoints: [
      "Sesin sürati ortamın yoğunluğuna bağlıdır: Katı > Sıvı > Gaz (Demirde ~5000 m/s, Suda ~1500 m/s, Havada 20°C'de 344 m/s).",
      "Ortam sıcaklığı arttıkça tanecikler hızlandığı için sesin sürati de artar (0°C havada 331 m/s, 20°C havada 344 m/s).",
      "Işık saniyede 300.000 km hızla yayılırken ses havada saniyede yaklaşık 344 metre yol alır. Bu yüzden şimşek önce görülür, gök gürültüsü saniyeler sonra duyulur.",
      "Ses dalgaları sert ve pürüzsüz engellere çarpıp geri dönerse buna yansıma denir. Havada yankı oluşabilmesi için kaynak ile engel arasında en az 17 metre mesafe bulunmalıdır.",
      "Ses dalgalarının yumuşak, gözenekli ve pürüzlü yüzeylerde enerjisini kaybetmesine sesin soğurulması (yutulması) denir.",
      "Akustik, sesin meydana gelişini, yayılışını, yansımasını ve kontrolünü inceleyen ses bilimidir. Mimar Sinan Süleymaniye Camii'nde kubbeye içi boş 64 akustik küp yerleştirerek mikrofon olmadan sesin her köşeye eşit ulaşmasını sağlamıştır.",
      "Sonar cihazları ses yansımasıyla deniz derinliğini ve batıkları tespit eder; Ultrason ise insan vücuduna ses dalgası göndererek organları görüntüler."
    ]
  },
  onDegerlendirme: [
    {
      id: "od-u5s2-1",
      question: "Fırtınalı bir havada şimşek çaktıktan 6 saniye sonra gök gürültüsü duyulduğuna göre şimşek bizden yaklaşık kaç metre uzakta çakmıştır?",
      answer: "Ses havada yaklaşık 340 m/s hızla yayılır. Yol = Sürat x Zaman = 340 x 6 = 2040 metre (yaklaşık 2 kilometre)."
    },
    {
      id: "od-u5s2-2",
      question: "Boş bir dairede konuştuğumuzda sesimiz yankılanırken, eşyalar ve halılar yerleştirilince yankı neden tamamen kaybolur?",
      answer: "Çünkü halılar, perdeler ve koltuklar gözenekli ve yumuşak oldukları için ses dalgalarını soğurur (yutar); sesin sert duvarlardan geri yansımasını engeller."
    },
    {
      id: "od-u5s2-3",
      question: "Denizaltılar deniz dibindeki batık gemileri veya dağları görmek için ışık yerine neden ses dalgalarını (sonar) kullanır?",
      answer: "Çünkü güneş ışığı derin deniz sularında birkaç yüz metre sonra tamamen kaybolur ve ilerleyemez; ses dalgaları ise suda kilometrelerce uzağa hızla ilerleyip geri yansıyabilir."
    }
  ],
  hazirlik: {
    question: "Mimar Sinan, Süleymaniye Camii'ni inşa ederken caminin içinde nargile içmiş ve bunu gören Sultan Süleyman ilk başta şaşırmıştır. Sinan nargileyi neden içmiştir?",
    answer: "Mimar Sinan nargilede tütün yakmamış, sadece suyun 'fokur fokur' sesini dinleyerek caminin akustiğini ve sesin kubbelerdeki dağılımını test etmiştir."
  },
  merak: {
    question: "Yarasalar zifiri karanlık mağaralarda son sürat uçarken incecik bir tele bile çarpmadan yönlerini nasıl bulurlar?",
    answer: "Yarasalar ağız ve burunlarından insanların duyamayacağı frekansta ultrasonik ses dalgaları yayarlar. Bu sesler en ufak bir engele çarpıp geri döner ve yarasa mükemmel bir ses haritası çıkararak karanlıkta avlanır."
  },
  kopru: {
    title: "Sesten Vücudumuzdaki Sistemlere",
    content: "Sesin fiziksel özelliklerini ve kulağımıza gelişini kavradıktan sonra, 6. Ünitede bu sesleri duyan ve vücudumuzu muazzam bir orkestra gibi yöneten 'Denetleyici ve Düzenleyici Sistemler ile Duyu Organları'nı inceleyeceğiz.",
    question: "Kulağımızdaki zar ve minik kemikçikler ses titreşimlerini beynimize nasıl elektrik sinyali olarak aktarır?",
    answer: "Ses dalgaları kulak zarını titreştirir, çekiç-örs-üzengi kemikleri sesi kuvvetlendirir ve salyangozdaki sıvı titreşerek işitme sinirlerini uyarır."
  },
  // MEB DERS KİTABI DETAYLI KONU ANLATIMI, TABLOLAR, BAĞLANTI NOKTALARI VE HABERLER
  konuAnlatimi: {
    ozet: "Sesin sürati, ses dalgalarının birim zamanda katettiği yoldur. Sesin sürati iki temel etkene bağlıdır: 1) Ortamın Yoğunluğu ve Fiziksel Hali: Tanecikler ne kadar sıkı ve yakınsa ses o kadar hızlı yayılır. Bu yüzden ses en hızlı katılarda, sonra sıvılarda, en yavaş ise gazlarda yayılır: V_katı > V_sıvı > V_gaz (Demirde yaklaşık 5130 m/s, Suda 1482 m/s, Havada 20°C'de 344 m/s). 2) Ortamın Sıcaklığı: Sıcaklık arttıkça taneciklerin kinetik enerjisi ve titreşim hızı artar; bu nedenle ortamın sıcaklığı arttıkça sesin sürati de artar (0°C havada 331 m/s, 20°C havada 344 m/s). Işık ve Ses Sürati: Işık saniyede 300.000 km hızla yayılırken ses havada saniyede yaklaşık 340 metre yol alır; bu yüzden şimşek çaktığında parlamayı anında görürüz, gök gürültüsünü ise saniyeler sonra duyarız. Sesin Maddeyle Etkileşimi: Ses bir yüzeye çarptığında üç olay gerçekleşebilir: 1) Yansıma: Sesin sert ve pürüzsüz engellere (fayans, beton, mermer, kayalık) çarparak geri dönmesidir. Yankı: Sesin bir engele çarpıp tekrar kaynağa dönerek ikinci kez duyulmasıdır. İnsan kulağının iki sesi ayrı ayrı algılayabilmesi için kaynak ile engel arasında en az 17 metre mesafe bulunmalıdır. 2) Soğurulma (Ses Yutulması): Ses dalgalarının yumuşak, pürüzlü ve gözenekli yüzeylere (halı, sünger, kumaş, strafor köpük, keçe) çarptığında sürtünmeyle enerjisini kaybetmesidir. Ses Yalıtımı: İstenmeyen ses ve gürültülerin yayılmasını önlemek amacıyla yutucu malzemelerin kullanılmasıdır. 3) Akustik: Sesin özelliklerini, yayılmasını, yansımasını ve kontrolünü inceleyen ses bilimidir. Mimar Sinan'ın Süleymaniye Camii'ndeki akustik tasarımı dünya çapında bir şaheserdir. Ses Teknolojileri: Sonar (deniz derinliği ve batık bulma), Ultrason (ses dalgalarıyla vücut içi organ ve bebek görüntüleme), böbrek taşı kırma cihazları sesin yansıma ve titreşim özelliklerinden yararlanır.",
    kavramlar: [
      {
        terim: "Sesin Süratini Etkileyen Faktörler (Ortam ve Sıcaklık)",
        tanim: "Ses dalgalarının yayılma hızının ortamın fiziksel haline ve sıcaklığına göre değişmesidir.",
        onemliNoktalar: [
          "Katı > Sıvı > Gaz: Tanecikler katılarda dip dibe olduğu için titreşimi hemen yanındaki komşusuna aktarır ve ses en hızlı katılarda ilerler.",
          "Sıcaklık Arttıkça Hız Artar: Isınan gaz veya sıvının tanecikleri daha hızlı titreşir ve sesi daha çabuk iletir (0°C havada 331 m/s iken 20°C havada 344 m/s'dir).",
          "Ses Boşlukta Yayılmaz: Sürati sıfırdır."
        ]
      },
      {
        terim: "Işık ve Ses Sürati Karşılaştırması",
        tanim: "Evrendeki ışık sürati ile ses sürati arasındaki devasa farktır.",
        onemliNoktalar: [
          "Işık hızı saniyede 300.000.000 metre iken ses havada saniyede yaklaşık 340 metredir (Işık sesten yaklaşık 900.000 kat daha hızlıdır).",
          "Fırtınalı havalarda şimşeğin ışığı gözümüze anında ulaşır, ancak sesin kulaklarımıza ulaşması saniyeler sürer. Işık görüldükten sonra saniyeler sayılarak fırtınanın uzaklığı hesaplanabilir."
        ]
      },
      {
        terim: "Sesin Yansıması ve Yankı (17 Metre Kuralı)",
        tanim: "Ses dalgalarının bir yüzeye çarpıp yön değiştirerek geri dönmesi olayıdır.",
        onemliNoktalar: [
          "Yansıma: Sert, düzgün ve pürüzsüz yüzeyler sesi ayna gibi yansıtır.",
          "Yankı: Sesin engele çarpıp geri dönmesiyle ikinci kez işitilmesidir. İnsan kulağı 0.1 saniyeden daha kısa aralıklı sesleri ayırt edemez. Sesin 0.1 saniyede gidip dönebilmesi için 34 metre yol alması gerekir; bu yüzden kaynak ile engel arasındaki mesafe en az 17 metre olmalıdır."
        ]
      },
      {
        terim: "Sesin Soğurulması ve Ses Yalıtımı",
        tanim: "Ses enerjisinin maddeler tarafından yutulup ısıya dönüştürülmesi ve yayılmasının engellenmesidir.",
        onemliNoktalar: [
          "Boş bir odada ses yankılanırken, odaya halı, perde ve eşyalar konulduğunda yankı kaybolur; çünkü yumuşak ve gözenekli yüzeyler sesi soğurur.",
          "Ses Yalıtım Malzemeleri: Akustik sünger, cam yünü, taş yünü, strafor köpük, çift cam, keçe ve asfalttır.",
          "Faydaları: Şehir gürültüsünü azaltır, çalışma verimini ve yaşam kalitesini artırır."
        ]
      },
      {
        terim: "Akustik Bilimi ve Ses Teknolojileri (Sonar, Ultrason)",
        tanim: "Sesin yayılmasını düzenleyen bilim dalı ve tıp-denizcilik alanındaki uygulamalarıdır.",
        onemliNoktalar: [
          "Akustik: Tiyatrolarda, camilerde, opera ve sinema salonlarında sesin yankılanmadan net ve pürüzsüz duyulması için yapılan mimari hesaplamalardır.",
          "Sonar Cihazı: Denizaltılarda ve balıkçı teknelerinde ses dalgalarının batıklara veya balık sürülelerine çarpıp geri dönme süresi ölçülerek konum ve derinlik bulunur.",
          "Ultrason: İnsan kulağının duyamayacağı yüksek frekanslı ses dalgalarıyla vücut içi organların ve anne karnındaki bebeğin sağlığının radyasyonsuz görüntülenmesidir."
        ]
      }
    ],
    tablolar: [
      {
        baslik: "Sesin Farklı Maddelerde ve Sıcaklıklardaki Sürat Tablosu",
        sutunlar: ["Ortam (Madde)", "Fiziksel Hali", "Sıcaklık (°C)", "Sesin Sürati (m/s)"],
        satirlar: [
          ["Hava", "Gaz", "0 °C", "331 m/s"],
          ["Hava", "Gaz", "20 °C", "344 m/s"],
          ["Su (Saf su)", "Sıvı", "20 °C", "1482 m/s"],
          ["Deniz Suyu", "Sıvı", "20 °C", "1522 m/s"],
          ["Tahta (Ahşap)", "Katı", "20 °C", "4000 m/s"],
          ["Demir / Çelik", "Katı", "20 °C", "5130 m/s"]
        ]
      }
    ]
  },
  // MEB KİTABINDAKİ BAĞLANTI NOKTALARI
  baglantiNoktalari: [
    {
      id: "bn-6-5-3",
      baslik: "Milli Mimarlık Harikası: Mimar Sinan'ın Süleymaniye Camii'ndeki Akustik Küpleri",
      alan: "Mimarlık & Akustik Mühendisliği",
      aciklama: "Mimar Sinan, İstanbul'daki Süleymaniye Camii'ni inşa ederken kubbenin çevresine ağızları caminin içine bakacak şekilde içi boş 64 adet pişmiş toprak küp yerleştirmiştir.",
      soru: "Mimar Sinan bu küpleri neden yerleştirmiştir ve nargile testiyle neyi amaçlamıştır?",
      cevap: "Bu küpler akustik rezonatör görevi görerek ses dalgalarını dengeli bir şekilde yaymış, yankıyı önlemiştir. Böylece mikrofonsuz ortamda mihraptaki imamın fısıltısı dahi kubbede toplanıp caminin en arka köşesindeki binlerce cemaate pürüzsüzce ulaşmıştır. Nargilede tütün yakmadan sadece fokurdayan suyun sesini dinleyerek sesin kubbelerdeki dağılımını milimetrik olarak test etmiştir."
    },
    {
      id: "bn-6-5-4",
      baslik: "Doğa ve Biyotaklit: Yarasalardan İlham Alan Otonom Araç ve Sonar Sistemleri",
      alan: "Biyotaklit & Savunma Sanayii",
      aciklama: "Yarasalar zifiri karanlık mağaralarda ultrasonik ses dalgaları yayarak avlarının ve duvarların yerini kusursuz tespit ederler.",
      soru: "Mühendisler yarasaların bu doğal yeteneğinden esinlenerek hangi modern teknolojileri geliştirmişlerdir?",
      cevap: "Mühendisler bu ekolokasyon mekanizmasını taklit ederek deniz dibi haritalarını çıkaran Sonar sistemlerini, otomobillerin geri vites park sensörlerini ve görme engelliler için ultrasonik titreşimli akıllı bastonları geliştirmişlerdir."
    }
  ],
  // MEB KİTABINDAKİ GÜNCEL HABERLER
  haberler: [
    {
      id: "hbr-6-5-2",
      baslik: "Yerli ve Milli TCG Anadolu Gemisinde Gelişmiş Sonar Sistemi Göreve Başladı",
      kaynak: "Savunma Sanayii Başkanlığı & ASELSAN Bülteni",
      tarih: "2024",
      ozet: "Türkiye'nin en büyük askeri gemisi olan TCG Anadolu'ya yerli imkanlarla üretilen FERSAH denizaltı savunma harbi sonarı entegre edildi. Sonar cihazı deniz suyuna güçlü akustik ses darbeleri gönderip deniz tabanından ve yakındaki yabancı denizaltılardan yansıyan sesleri saniyenin binde biri hassasiyetle işleyerek tam koordinat belirliyor.",
      soru: "Sonar cihazlarının deniz altında gözlem yapabilmesi sesin hangi özelliği sayesinde gerçekleşmektedir?",
      cevap: "Ses dalgalarının sıvı ortamda (deniz suyunda) çok hızlı yayılması ve karşılaştığı katı yüzeylere (denizaltı, deniz dibi kayalıkları) çarparak geri yansıması (eko yapması) özelliği sayesinde gerçekleşir."
    }
  ],
  // MEB KİTABINDAKİ KONTROL NOKTALARI
  kontrolNoktalari: [
    {
      id: "kn-6-5-3",
      baslik: "Kontrol Noktası 1 (Sesin Sürati ve Işık Karşılaştırması)",
      sorular: [
        {
          id: "kn-q-g6-31",
          soru: "Sesin havadaki sürati 20°C'de 344 m/s'dir. Fırtınalı bir gecede şimşek parıltısını gördükten tam 5 saniye sonra gök gürültüsünü duyan bir gözlemci, yıldırımın kendisinden yaklaşık kaç metre uzağa düştüğünü hesaplar?",
          tip: "coktan-secmeli",
          secenekler: [
            "A) 688 metre",
            "B) 1032 metre",
            "C) 1376 metre",
            "D) 1720 metre"
          ],
          dogruSecenek: "D",
          cevap: "D) 1720 metre",
          aciklama: "Yol = Sürat x Zaman bağıntısından; Yol = 344 m/s x 5 s = 1720 metre uzaklıktadır."
        },
        {
          id: "kn-q-g6-32",
          soru: "Sesin katı, sıvı ve gaz ortamlardaki süratlerini büyükten küçüğe doğru sıralayarak bu sıralamanın nedenini açıklayınız.",
          tip: "klasik",
          cevap: "Sıralama: Katı > Sıvı > Gaz. Nedeni: Katı maddelerde tanecikler birbirine en yakın ve sıkıdır; titreşim yanındaki komşu taneciğe çok hızlı aktarılır. Gazlarda ise tanecikler arası boşluk çok fazla olduğu için iletim en yavaştır.",
          aciklama: "Tanecikler sıklaştıkça sesin sürati artar."
        }
      ]
    },
    {
      id: "kn-6-5-4",
      baslik: "Kontrol Noktası 2 (Yansıma, Yankı ve Ses Yalıtımı)",
      sorular: [
        {
          id: "kn-q-g6-33",
          soru: "Havada yankı olayının insan kulağı tarafından net olarak ayırt edilebilmesi için ses kaynağı ile yansıtıcı engel arasındaki mesafe en az kaç metre olmalıdır?",
          tip: "coktan-secmeli",
          secenekler: [
            "A) 7 metre",
            "B) 12 metre",
            "C) 17 metre",
            "D) 34 metre"
          ],
          dogruSecenek: "C",
          cevap: "C) 17 metre",
          aciklama: "Kulak 0.1 saniyeden kısa aralıklı sesleri ayıramaz. Ses havada 0.1 saniyede 34 metre yol alır; gidiş-dönüş olduğu için engel mesafesi en az 17 metre olmalıdır."
        }
      ]
    }
  ],
  // BİLGİ BANKASI KUTULARI
  bilgiBankasi: [
    {
      id: "bb-6-5-3",
      baslik: "Ses Duvarı ve Sonik Patlama Nedir?",
      icerik: "Bir savaş uçağı hızlanıp sesin havadaki süratini (yaklaşık 1224 km/saat veya Mach 1) aştığı anda, uçağın önünde biriken ses dalgalarını yırtarak geçer. Bu anda basınç dalgaları üst üste biner ve gökyüzünde dev bir gök gürültüsü veya bomba patlaması gibi çok şiddetli bir ses patlaması duyulur; buna 'Sonik Patlama' denir. Bu esnada uçağın çevresinde basınç düşmesi sebebiyle beyaz koni şeklinde bir bulut halkası belirir.",
      onemliNot: "Ses hızını aşan araçlara süpersonik araçlar denir."
    },
    {
      id: "bb-6-5-4",
      baslik: "17 Metre Kuralının Matematiksel İspatı",
      icerik: "İnsan beyni ve kulak zarı, gelen iki farklı ses dalgası arasında en az 0,1 saniye (saniyenin onda biri) zaman farkı yoksa bu sesleri tek bir ses olarak birleştirir ve yankıyı ayırt edemez. Sesin 20°C havada saniyedeki sürati 340 m/s'dir. Sesin 0,1 saniyede alacağı toplam yol: Yol = 340 x 0,1 = 34 metredir. Ses kaynaktan engele gidip tekrar kulağa döneceği için (gidiş + geliş): 34 / 2 = 17 metre engele olan minimum mesafedir.",
      onemliNot: "17 metreden yakın mesafelerde ses yankılanmaz, sadece uzamış gibi duyulur."
    }
  ],
  // MEB KİTABINDAKİ PERFORMANS GÖREVİ
  performansGorevi: {
    baslik: "Farklı Malzemelerle Ses Yalıtım Kutusu Tasarımı ve Akustik Ölçüm",
    amac: "Bir ayakkabı kutusunun içini strafor köpük, pamuk, yumurta kolisi ve kumaş gibi yalıtım malzemeleriyle kaplayıp içine telefon koyarak ses seviyesini (desibel) ölçmek ve en iyi yalıtım malzemesini belirlemek.",
    surecAdimlari: [
      "Özdeş karton kutular temin ediniz.",
      "Kutuların içini sırasıyla: 1. Kutu: Boş, 2. Kutu: Yumurta kolisi, 3. Kutu: Strafor köpük, 4. Kutu: Yün ve keçe ile kaplayınız.",
      "Kutuların içine sabit ses şiddetinde çalan bir çalar saat veya müzik çalan telefon yerleştiriniz.",
      "Akıllı telefona indirilen desibelmetre (ses seviyesi ölçer) uygulamasıyla kutunun 50 cm uzağından ses şiddetini ölçüp kaydediniz.",
      "Hangi malzemenin sesi en çok soğurduğunu (desibeli en çok düşürdüğünü) gösteren sütun grafiği çiziniz."
    ],
    beklenenUrun: "Ses Yalıtım Kutusu Prototipi, Desibel Ölçüm Çizelgesi ve Ses Yalıtımı Değerlendirme Raporu.",
    degerlendirmeKriterleri: [
      "Ölçümlerde desibelmetre uygulamasının doğru kullanılması",
      "Malzemelerin gözenekli yapısının sesi soğurma üzerindeki etkisinin açıklanması",
      "Bilimsel raporlama ve grafik çizimi"
    ]
  },
  // MEB KİTABI NELER ÖĞRENDİK BÖLÜMÜ SORULARI VE MAARİF ÇÖZÜMLERİ
  nelerOgrenildiSorulari: [
    {
      id: "no-6-5-5",
      soru: "1. Sesin katılarda gazlara göre daha hızlı yayılmasının sebebini tanecik modeliyle açıklayınız.",
      cevap: "Katı maddelerde tanecikler birbirine çok yakındır ve düzenlidir. Titreşim hareketi yapan bir tanecik anında yanındaki komşu taneciğe çarparak enerjisini aktarır. Gazlarda ise tanecikler arası boşluk çok fazladır; çarpışmalar daha uzun sürede gerçekleştiği için ses gazlarda daha yavaş yayılır.",
      detayliCozum: "Tanecikler arası mesafe azaldıkça ses iletim sürati artar."
    },
    {
      id: "no-6-5-6",
      soru: "2. Sıcak bir yaz gününde sesin sürati ile soğuk bir kış günündeki sesin sürati aynı mıdır? Neden?",
      cevap: "Aynı değildir. Sıcak yaz gününde ses daha hızlı yayılır. Çünkü sıcaklık arttıkça ortamdaki taneciklerin kinetik enerjisi ve titreşim hızı artar; bu da ses dalgalarının daha süratli ilerlemesini sağlar.",
      detayliCozum: "Sıcaklık arttıkça sesin ortamdaki sürati artar."
    },
    {
      id: "no-6-5-7",
      soru: "3. Sesin yansıması ve sesin soğurulması kavramlarını açıklayarak birer örnek veriniz.",
      cevap: "Sesin Yansıması: Ses dalgalarının sert ve pürüzsüz bir yüzeye çarpıp geri dönmesidir (Örn: Boş odada sesin yankılanması, Sonar cihazları). Sesin Soğurulması: Ses dalgalarının yumuşak ve gözenekli yüzeylere çarptığında enerjisini kaybedip yutulmasıdır (Örn: Halı ve perdelerin sesi kesmesi, akustik süngerler).",
      detayliCozum: "Sert yüzey yansıtır, gözenekli ve yumuşak yüzey soğurur."
    },
    {
      id: "no-6-5-8",
      soru: "4. Mimar Sinan'ın Süleymaniye Camii'nde sesin her yere eşit ve berrak ulaşması için yaptığı akustik çalışmayı kısaca yazınız.",
      cevap: "Mimar Sinan Süleymaniye Camii'nin ana kubbesinin çevresine ağızları cami içine bakan 64 adet boş toprak küp yerleştirmiştir. Bu küpler sesin yankılanmasını önleyip sesi dengeli dağıtan rezonatör görevi görmüş ve imamın sesinin mikrofonsuz binlerce kişiye berrak ulaşmasını sağlamıştır.",
      detayliCozum: "Akustik küpler ve nargile testi Mimar Sinan'ın akustik dehasıdır."
    }
  ],
  hikmetStages: [
    {
      stage: 1,
      name: "1. Varlığı Tanıt (Işık ve Sesin Yarışı)",
      concept: "Kâinatın Sürat Cetveli",
      text: "Işık göz kamaştırıcı bir süratle önden koşar, ses ise adımlarını sayarak arkasından gelir.",
      analogies: ["Şimşeğin önce parlayıp ardından gök gürültüsünün gürlemesi."]
    },
    {
      stage: 2,
      name: "2. Parçalarını Göster (Sürat, Yansıma ve Soğurma)",
      concept: "Sesin Maddeyle Diyaloğu",
      text: "Ses sert taşa rastlarsa geri döner (yansıma), yumuşak yüne rastlarsa sükûnete bürünür (soğrulma).",
      analogies: ["Sert duvara atılan elastik top ile süngere atılan top."]
    },
    {
      stage: 3,
      name: "3. Ölçü ve Düzen (Akustiğin Zirvesi)",
      concept: "Mimar Sinan'ın Mührü",
      text: "Mimar Sinan, sesin yansıma ve soğurulma kanunlarını öyle ince hesaplamıştır ki, dev kubbenin altındaki tek bir dua binlerce kişiye berrakça ulaşır.",
      questionToPonder: "Süleymaniye'deki 64 küpün yerleşimi bu ses ilmi olmadan tesadüfen yapılabilir miydi?"
    },
    {
      stage: 4,
      name: "4. Gayesini Keşfet (Şifa ve Keşif)",
      concept: "Sesin Şifalı Yüzü",
      text: "Gözün göremediği ana rahmindeki bir bebeği ultrasonla ses dalgaları gösterir; denizin altındaki kayalıkları sonar haber verir.",
      analogies: ["Karanlığı aydınlatan görünmez bir ses meşalesi."]
    },
    {
      stage: 5,
      name: "5. Bütünle İlişkilendir (Yarasalardan Denizaltılara)",
      concept: "Doğadan Teknolojiye Köprü",
      text: "Yarasanın milyonlarca yıldır kullandığı radar/sonar sistemi, insanoğlunun en modern cihazlarına ilham kaynağı olmuştur.",
      analogies: ["Canlıların fıtratındaki teknoloji."]
    },
    {
      stage: 6,
      name: "6. Hayret ve Tefekkür (Hikmetli Akustik)",
      concept: "Sonsuz Sanat",
      text: "Sesin süratini taneciklerin arasına saklayan, yansımasıyla yarasayı uçuran ve Sinan gibi dehalara ilham veren Yüce Yaratıcı'ya hamdetmek."
    }
  ],
  etkinlikler: [
    {
      id: "etk-u5s2-ses-yalitimi",
      title: "Pekiştirme İstasyonu: Ses Yalıtım Kabini Tasarımı",
      type: "Tasarım ve Desibel Ölçümü",
      materials: ["Ayakkabı kutusu", "Akıllı telefon (ses ölçer/desibel uygulamalı ve müzik çalan)", "Strafor köpük", "Yumurta kolisi", "Pamuk", "Alüminyum folyo"],
      steps: [
        "1. Adım: Telefonu ayakkabı kutusuna koyup sabit ses seviyesinde müzik açınız. Kutunun dışından ses seviyesini (dB) ölçünüz.",
        "2. Adım: Kutunun içini sırayla alüminyum folyo, strafor köpük ve yumurta kolisi/pamukla kaplayarak ayrı ayrı testler yapınız.",
        "3. Adım: Hangi malzemenin desibel değerini en çok düşürdüğünü (sesi en iyi soğurduğunu) tabloya kaydediniz."
      ],
      questions: [
        {
          qId: "q-u5s2-1",
          label: "Deney Çıkarımı",
          prompt: "Gözenekli yumurta kolisinin ve pamuğun sesi düz alüminyum folyoya göre daha iyi kesmesinin sebebi nedir?",
          answer: "Pürüzlü ve gözenekli maddeler ses dalgalarını gözenekleri arasında hapsedip soğururken (yutarken), sert ve pürüzsüz folyo sesi yansıtır."
        }
      ]
    }
  ],
  bilgiIstasyonlari: [
    {
      title: "Mimar Sinan ve Süleymaniye Camii'nin Akustiği",
      scientistOrMission: "Koca Sinan (1489-1588)",
      description: "Mimar Sinan, Süleymaniye Camii'nin kubbesine ağızları aşağıya doğru bakan içi boş 64 adet akustik küp yerleştirmiştir. Bu küpler ses rezonatörü görevi görerek sesin cami içinde yankılanıp uğuldamasını önlemiş ve imamın sesinin 3000 kişiye eşit ulaşmasını sağlamıştır.",
      hikmetNote: "Sinan ayrıca kandillerden çıkan isleri hava akımıyla tek bir odada toplayarak mürekkep yapmış; bilimi, akustiği ve sanatı ibadetle bütünleştirmiştir."
    }
  ],
  dda: {
    id: "dda-u5s2-surat",
    statement: "Ses dalgaları katılarda sıvılardan, sıvılarda da gazlardan daha süratli yayılır; çünkü katılarda tanecikler birbirine en yakındır.",
    correctDecision: "D",
    reason: "Tanecikler arası boşluk azaldıkça titreşim diğer taneciğe anında iletilir; bu yüzden sürat Katı > Sıvı > Gaz şeklindedir.",
    ifTrue: {
      exit: 1,
      isCorrect: true,
      feedback: "Tebrikler! Ses süratinin tanecik sıklığı ile ilişkisini doğru kavradınız."
    },
    ifFalse: {
      exit: 2,
      isCorrect: false,
      feedback: "Hatalı! Sesin katılarda en hızlı yayıldığını unutmayınız."
    }
  },
  biliyorumAnliyorumDusunuyorum: {
    biliyorum: "Sesin katılarda en hızlı olduğunu, sıcaklık arttıkça hızlandığını, sesin yansıdığını ve soğurulduğunu, akustiği ve sonar/ultrason cihazlarını biliyorum.",
    anliyorum: "Mimar Sinan'ın yüzyıllar önce hiçbir elektronik alet olmadan kurduğu akustik dengenin üstün bir ilim ve deha eseri olduğunu anlıyorum.",
    dusunuyorum: "Eğer ses ışıktan daha hızlı yayılsaydı, gök gürültüsünü şimşek çakmadan dakikalar önce duyardık; kâinattaki bu hız dengesini tefekkür ediyor musunuz?"
  },
  pekistirmeIstasyonu: {
    stationTitle: "Sesin Sürati, Etkileşimi ve Akustik Pekiştirme İstasyonu",
    pageReference: "6. Sınıf 2. Kitap 5. Ünite",
    summaryText: "Ses süratinin ortam ve sıcaklıkla değişimi, ışık hızı farkı, yansıma ve yankı, soğurulma, Mimar Sinan ve akustik, ultrason ve sonar sistemleri.",
    targetSkills: [
      "Sesin ortamlardaki ve sıcaklıklardaki süratini karşılaştırır.",
      "Sesin yansıma ve soğurulma özelliklerini günlük yaşam ve teknolojide analiz eder.",
      "Mimar Sinan'ın akustik dehasını ve modern ses teknolojilerini açıklar."
    ]
  },
  fillInBlanks: [
    {
      id: "fib-u5s2-1",
      number: 1,
      baglam: "Ses en hızlı bu maddelerde yayılır.",
      soruKoku: "Tanecikleri birbirine en yakın olduğu için sesin en süratli yayıldığı fiziksel hal .................................... halidir.",
      blankAnswer: "Katı",
      acceptableAnswers: ["katı", "Katı"],
      explanation: "Ses en hızlı katılarda yayılır.",
      wordBankHint: ["Katı", "Sıvı", "Gaz", "Boşluk"]
    },
    {
      id: "fib-u5s2-2",
      number: 2,
      baglam: "Ortamın sıcaklığı yükseldiğinde sesin hızı değişir.",
      soruKoku: "Bir ortamın sıcaklığı arttıkça tanecikler hızlandığı için sesin sürati ....................................ar.",
      blankAnswer: "Art",
      acceptableAnswers: ["artar", "Artar", "art", "Art"],
      explanation: "Sıcaklık arttıkça ses sürati artar.",
      wordBankHint: ["Art", "Azal", "Dur", "Sabit kal"]
    },
    {
      id: "fib-u5s2-3",
      number: 3,
      baglam: "Gök gürültüsünden önce şimşeğin ışığı görülür.",
      soruKoku: "Şimşeğin önce görülüp gök gürültüsünün sonra duyulması .................................... hızının ses hızından çok daha büyük olmasındandır.",
      blankAnswer: "Işık",
      acceptableAnswers: ["ışık", "Işık"],
      explanation: "Işık hızı seste yaklaşık 900.000 kat büyüktür.",
      wordBankHint: ["Işık", "Rüzgâr", "Gölge", "Isı"]
    },
    {
      id: "fib-u5s2-4",
      number: 4,
      baglam: "Sesin sert bir engele çarpıp geri dönmesidir.",
      soruKoku: "Ses dalgalarının bir yüzeye çarpıp geri dönmesi olayına sesin ....................................sı denir.",
      blankAnswer: "Yansıma",
      acceptableAnswers: ["yansıması", "Yansıması", "yansıma", "Yansıma"],
      explanation: "Sesin geri dönmesi yansımadır.",
      wordBankHint: ["Yansıma", "Soğurulma", "Kaybolma", "Donma"]
    },
    {
      id: "fib-u5s2-5",
      number: 5,
      baglam: "Dağlarda bağırdığımızda sesimizin tekrar bize gelmesidir.",
      soruKoku: "Sesin engele çarpıp tekrar kulağımıza duyulur şekilde dönmesine .................................... denir.",
      blankAnswer: "Yankı",
      acceptableAnswers: ["yankı", "Yankı"],
      explanation: "Yansıyan sesin duyulması yankıdır.",
      wordBankHint: ["Yankı", "Işık", "Gölge", "Akustik"]
    },
    {
      id: "fib-u5s2-6",
      number: 6,
      baglam: "Havada yankı oluşması için gereken asgari mesafedir.",
      soruKoku: "Havada net bir yankı oluşabilmesi için ses kaynağı ile engel arasında en az .................................... metre mesafe bulunmalıdır.",
      blankAnswer: "17",
      acceptableAnswers: ["17", "on yedi", "On yedi"],
      explanation: "Yankı için asgari mesafe 17 metredir.",
      wordBankHint: ["17", "5", "50", "100"]
    },
    {
      id: "fib-u5s2-7",
      number: 7,
      baglam: "Sesin pürüzlü ve yumuşak yüzeyler tarafından emilmesidir.",
      soruKoku: "Ses dalgalarının çarptığı ortamda enerjisini kaybedip yutulmasına sesin ....................................sı denir.",
      blankAnswer: "Soğurulma",
      acceptableAnswers: ["soğurulması", "Soğurulması", "soğurulma", "Soğurulma", "yutulması"],
      explanation: "Sesin emilmesi soğurulmadır.",
      wordBankHint: ["Soğurulma", "Yansıma", "Kırılma", "Üretilme"]
    },
    {
      id: "fib-u5s2-8",
      number: 8,
      baglam: "Sesin özelliklerini ve mekanlardaki yayılışını inceleyen bilim dalıdır.",
      soruKoku: "Sesin yayılmasını, yansımasını ve kontrolünü inceleyen ses bilimine .................................... denir.",
      blankAnswer: "Akustik",
      acceptableAnswers: ["akustik", "Akustik"],
      explanation: "Ses bilimi akustiktir.",
      wordBankHint: ["Akustik", "Optik", "Statik", "Termodinamik"]
    },
    {
      id: "fib-u5s2-9",
      number: 9,
      baglam: "Süleymaniye Camii'nde kubbeye akustik küpler yerleştiren büyük mimarımızdır.",
      soruKoku: "Süleymaniye Camii'nde ses akustiğinin zirvesini kuran Osmanlı başmimarı Mimar ....................................dır.",
      blankAnswer: "Sinan",
      acceptableAnswers: ["sinan", "Sinan"],
      explanation: "Mimar Sinan akustik dehasıdır.",
      wordBankHint: ["Sinan", "Hayrettin", "Kemalettin", "Sedefkar"]
    },
    {
      id: "fib-u5s2-10",
      number: 10,
      baglam: "Denizaltıların deniz tabanını haritalamak için kullandığı ses cihazıdır.",
      soruKoku: "Denizaltılarda ses dalgalarının yansıması prensibiyle çalışan derinlik tespit cihazına .................................... denir.",
      blankAnswer: "Sonar",
      acceptableAnswers: ["sonar", "Sonar"],
      explanation: "Sonar ses dalgasıyla çalışır.",
      wordBankHint: ["Sonar", "Radar", "Lidar", "Teleskop"]
    }
  ],
  contextQuestions: [
    {
      id: "mcq-u5s2-1",
      number: 1,
      baglam: "Bir araştırmacı aynı ses kaynağını hava, su ve demir çubuk ortamlarında test etmiş ve sesin süratlerini ölçmüştür:\nI. Havada: ~340 m/s\nII. Suda: ~1500 m/s\nIII. Demirde: ~5000 m/s",
      soruKoku: "Sesin bu ortamlardaki sürat sıralamasının (Katı > Sıvı > Gaz) temel sebebi nedir?",
      secenekler: {
        A: "Demirin renginin koyu olması",
        B: "Tanecikler arasındaki mesafenin katılarda en az olması ve titreşimin komşu taneciklere çok daha hızlı aktarılması",
        C: "Havanın çok ağır olması",
        D: "Suyun sesi soğurması"
      },
      dogruCevap: "B",
      cozum: "Katı tanecikleri birbirine çok yakındır; titreşim temas halindeki tanecikler arasında neredeyse anında aktarılır.",
      olculenKazanim: "F.6.5.2.1. Ses süratini ortam yoğunluğu ve tanecik aralığıyla açıklar.",
      olculenBeceri: "Fiziksel Neden-Sonuç İlişkisi",
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
      id: "mcq-u5s2-2",
      number: 2,
      baglam: "Bir havai fişek gösterisinde gökyüzünde patlayan fişeğin ışığı patlar patlamaz anında görülmüş, patlama sesi ise tam 4 saniye sonra izleyicilere ulaşmıştır (Havadaki ses sürati: 340 m/s).",
      soruKoku: "Bu durum neyi ispatlar ve patlama izleyicilerden kaç metre uzakta gerçekleşmiştir?",
      secenekler: {
        A: "Işık hızının ses hızından çok büyük olduğunu; mesafe: 340 x 4 = 1360 metredir.",
        B: "Ses hızının ışıktan büyük olduğunu; mesafe: 85 metredir.",
        C: "Işığın da ses gibi 340 m/s ile yayıldığını; mesafe: 340 metredir.",
        D: "Mesafenin hesaplanamayacağını"
      },
      dogruCevap: "A",
      cozum: "Işık neredeyse anında (300.000 km/s) ulaşır; ses ise saniyede 340 metre ilerler. 4 saniyede ses 1360 metre yol almıştır.",
      olculenKazanim: "F.6.5.2.2. Işık ve ses sürati farkını hesaplamalarla analiz eder.",
      olculenBeceri: "Sayısal Hesaplama ve Doğa Olayı",
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
      id: "mcq-u5s2-3",
      number: 3,
      baglam: "Bir vadide yüksek sesle bağıran Ali, sesinin yankısını 2 saniye sonra tekrar duymuştur (Havadaki ses sürati: 340 m/s).",
      soruKoku: "Ali ile karşıdaki dik kayalık dağ arasındaki mesafe kaç metredir?",
      secenekler: {
        A: "170 metre",
        B: "340 metre",
        C: "680 metre",
        D: "17 metre"
      },
      dogruCevap: "B",
      cozum: "Ses dağa gidip geri döndüğü için toplam 2 saniye geçmiştir. Gidiş süresi 1 saniyedir. Mesafe = Sürat x Zaman = 340 m/s x 1 s = 340 metredir.",
      olculenKazanim: "F.6.5.2.3. Yankı problemi üzerinden mesafe hesabı yapar.",
      olculenBeceri: "Yankı ve Mesafe Problemi Çözme",
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
      id: "mcq-u5s2-4",
      number: 4,
      baglam: "Mimar Sinan, Süleymaniye Camii'ni inşa ederken kubbenin farklı noktalarına ağzı caminin içine bakan 64 adet içi boş pişmiş toprak küp yerleştirmiştir.",
      soruKoku: "Mimar Sinan'ın bu küpleri yerleştirmesinin mimari ve akustik amacı nedir?",
      secenekler: {
        A: "Küp içine altın saklamak",
        B: "Ses dalgalarını rezonans ile dengeleyerek cami içindeki rahatsız edici yankılanmayı ve uğultuyu önlemek, vaaz ve ezan sesinin her noktaya berrak ulaşmasını sağlamak",
        C: "Kubbeyi ağırlaştırmak",
        D: "Yağmur suyunu toplamak"
      },
      dogruCevap: "B",
      cozum: "Bu küpler akustik rezonatörlerdir; sesin aşırı yankılanmasını önleyerek muazzam bir ses netliği sağlar.",
      olculenKazanim: "F.6.5.2.4. Mimar Sinan'ın akustik çözümlerini bilimsel olarak değerlendirir.",
      olculenBeceri: "Tarihsel Mimari ve Akustik Dehası",
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
      id: "mcq-u5s2-5",
      number: 5,
      baglam: "Bir sinema salonunun duvarları ve tavanı kadife kumaş, keçe ve delikli panellerle kaplanmış, zeminine ise kalın halı döşenmiştir.",
      soruKoku: "Sinema salonunda bu malzemelerin kullanılmasının temel gayesi nedir?",
      secenekler: {
        A: "Sesin sert duvarlardan yankılanmasını önlemek ve sesi soğurarak (yutarak) net ve kaliteli bir akustik ortam sağlamak",
        B: "Salonun karanlık olmasını sağlamak",
        C: "Filmin daha hızlı oynamasını sağlamak",
        D: "Salonu soğutmak"
      },
      dogruCevap: "A",
      cozum: "Yumuşak ve gözenekli malzemeler sesi soğurur; böylece filmdeki sesler birbirine karışmadan tertemiz işitilir.",
      olculenKazanim: "F.6.5.2.3. Ses soğurma malzemelerinin akustik mekanlardaki rolünü açıklar.",
      olculenBeceri: "Akustik Tasarım Bilinci",
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
      id: "mcq-u5s2-6",
      number: 6,
      baglam: "Hastanelerde kullanılan ultrasonografi (ultrason) cihazı, hamile annelerin karnındaki bebeğin gelişimini ekranda canlı olarak gösterir.",
      soruKoku: "Ultrason cihazının çalışma prensibi sesin hangi özelliğine dayanır?",
      secenekler: {
        A: "İnsan kulağının duyamayacağı yüksek frekanslı ses dalgalarının dokulara gönderilmesi ve farklı dokulardan geri yansıyan seslerin bilgisayarda görüntüye dönüştürülmesi",
        B: "Röntgen ışınlarıyla bebeğin yakılması",
        C: "Bebeğin fotoğrafının çekilmesi",
        D: "Manyetik mıknatıs dalgaları"
      },
      dogruCevap: "A",
      cozum: "Ultrason yüksek frekanslı ses yansıması (eko) prensibiyle çalışır; radyasyon içermediği için bebekler için tamamen güvenlidir.",
      olculenKazanim: "F.6.5.2.5. Tıpta ultrason teknolojisinde sesin yansımasını açıklar.",
      olculenBeceri: "Sağlık ve Tıbbi Teknoloji",
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
      id: "mcq-u5s2-7",
      number: 7,
      baglam: "Sesin havadaki sürati 0°C'de 331 m/s iken, 20°C'de 344 m/s'ye, 100°C'de ise 386 m/s'ye yükselmektedir.",
      soruKoku: "Sıcaklık arttıkça sesin süratinin artmasının mikroskobik sebebi nedir?",
      secenekler: {
        A: "Hava taneciklerinin kütlesinin artması",
        B: "Sıcaklık arttıkça taneciklerin kinetik enerjisinin ve titreşim hızının artması, titreşimi yanındaki taneciğe daha çabuk iletmesi",
        C: "Havanın yoğunluğunun artması",
        D: "Sesin renginin değişmesi"
      },
      dogruCevap: "B",
      cozum: "Sıcaklık tanecik hareketini hızlandırır; hızlı titreşen tanecikler ses dalgasını daha süratle aktarır.",
      olculenKazanim: "F.6.5.2.1. Sıcaklık artışının ses süratine etkisini mikroskobik düzeyde açıklar.",
      olculenBeceri: "Termodinamik ve Dalga Fiziği",
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
      id: "mcq-u5s2-8",
      number: 8,
      baglam: "Bir otoyol kenarında bulunan yerleşim alanının önüne yüksek ses yalıtım bariyerleri (gürültü bariyerleri) inşa edilmiştir.",
      soruKoku: "Bu bariyerlerin amacı ve çalışma prensibi nedir?",
      secenekler: {
        A: "Araçların hızını kesmek",
        B: "Trafikten çıkan motor ve tekerlek ses dalgalarını yansıtarak ve soğurarak evlerin bulunduğu alana geçmesini engellemek (gürültü kirliliği kontrolü)",
        C: "Yolu gölgelendirmek",
        D: "Otoyolu yayalara kapatmak"
      },
      dogruCevap: "B",
      cozum: "Ses bariyerleri yalıtım malzemeleriyle sesi soğurup geri yansıtarak yerleşim yerlerinde gürültü kirliliğini önler.",
      olculenKazanim: "F.6.5.2.5. Çevre ve otoyollarda ses yalıtım bariyerlerinin işlevini açıklar.",
      olculenBeceri: "Çevre Koruma ve Ses Mühendisliği",
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
      id: "mcq-u5s2-9",
      number: 9,
      baglam: "Bir sonar cihazı deniz tabanına gönderdiği ses dalgasını tam 2 saniye sonra geri almıştır (Sesin deniz suyundaki sürati: 1500 m/s).",
      soruKoku: "Denizin bu noktadaki derinliği kaç metredir?",
      secenekler: {
        A: "750 metre",
        B: "1500 metre",
        C: "3000 metre",
        D: "500 metre"
      },
      dogruCevap: "B",
      cozum: "Ses 2 saniyede dibe inip geri dönmüştür; iniş süresi 1 saniyedir. Derinlik = Sürat x Zaman = 1500 m/s x 1 s = 1500 metredir.",
      olculenKazanim: "F.6.5.2.5. Sonar teknolojisi ile derinlik hesabı yapar.",
      olculenBeceri: "Denizcilik ve Sonar Problemi",
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
      id: "mcq-u5s2-10",
      number: 10,
      baglam: "Bir odanın duvarına bağırıldığında yankı duyulabilmesi için duvar ile aramızdaki mesafenin en az 17 metre olması gerektiği bilinmektedir.",
      soruKoku: "17 metreden daha yakın duvarlarda yankı duyamamamızın sebebi nedir?",
      secenekler: {
        A: "Sesin duvara çarpmadan yok olması",
        B: "İnsan kulağının ve beyninin peş peşe gelen iki sesi ayırt edebilmesi için aralarında en az 0,1 saniye süre olması gerekmesi; 17 metreden kısa mesafede giden ve dönen sesin birbirine karışması",
        C: "Duvarın sesi tamamen emmesi",
        D: "Sesin 17 metreden önce yavaşlaması"
      },
      dogruCevap: "B",
      cozum: "Ses 0,1 saniyede 34 metre yol alır (17 m gidiş + 17 m geliş). 17 metreden yakında beynimiz iki sesi tek bir ses olarak algılar.",
      olculenKazanim: "F.6.5.2.3. Yankı oluşumunda 17 metre kuralının biyofiziksel nedenini açıklar.",
      olculenBeceri: "İşitme Biyofiziği",
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
      id: "mcq-u5s2-11",
      number: 11,
      baglam: "Kar yağdığı günlerde sokaklar ve caddeler her zamankinden çok daha sessiz ve huzurlu olur; şehirdeki araba gürültüleri neredeyse hiç duyulmaz.",
      soruKoku: "Karlı günlerdeki bu büyüleyici sessizliğin fen bilimlerindeki açıklaması nedir?",
      secenekler: {
        A: "Taze kar tabakasının gözenekli ve boşluklu yapısıyla sokaktaki ses dalgalarını mükemmel şekilde soğurması (yutması)",
        B: "İnsanların kışın konuşamaması",
        C: "Karın ses dalgalarını dondurması",
        D: "Arabaların karda çalışmaması"
      },
      dogruCevap: "A",
      cozum: "Kar kristalleri arasında çok miktarda hava gözenekleri vardır; bu gözenekler ses dalgalarını yutarak şehre doğal bir sessizlik getirir.",
      olculenKazanim: "F.6.5.2.3. Doğal ses soğurma olaylarına kar örneği üzerinden açıklar.",
      olculenBeceri: "Doğa Olayı ve Akustik",
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
      id: "mcq-u5s2-12",
      number: 12,
      baglam: "Bir apartmanda üst kattaki komşunun ayak seslerinin alt kata çok rahatsız edici şekilde gelmesini önlemek için parkelerin altına şilte veya mantar levhalar yerleştirilir.",
      soruKoku: "Parke altına konulan bu malzemenin görevi nedir?",
      secenekler: {
        A: "Titreşimlerin beton döşemeye geçmesini engelleyerek darbe sesini yalıtmak",
        B: "Parkeyi parlatmak",
        C: "Evi ısıtmak",
        D: "Zemini kayganlaştırmak"
      },
      dogruCevap: "A",
      cozum: "Mantar ve şilte ses yalıtkanıdır; katı zemindeki titreşimin alt kata iletilmesini keser.",
      olculenKazanim: "F.6.5.2.5. Binalarda darbe sesi ve katlar arası ses yalıtımını irdeler.",
      olculenBeceri: "Bina Akustiği ve Konfor",
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
      id: "mcq-u5s2-13",
      number: 13,
      baglam: "Eski zamanlarda inşa edilen amfi tiyatrolarda (örneğin Antalya Aspendos Antik Tiyatrosu) sahnenin ortasında fısıldayan bir oyuncunun sesi en üst sıradaki seyirciler tarafından bile duyulabilir.",
      soruKoku: "Aspendos Tiyatrosu'nun bu olağanüstü ses iletimi hangi bilim dalının kusursuz uygulanmasıyla ilgilidir?",
      secenekler: {
        A: "Akustik bilimi ve sesin yansıma açılarını doğru hesaplayan yarım daire mimari tasarım",
        B: "Teleskop bilimi",
        C: "Manyetizma",
        D: "Kimyasal tepkimeler"
      },
      dogruCevap: "A",
      cozum: "Amfi tiyatrolar eğimli basamakları ve yarım daire geometrisiyle ses yansımasını kontrol ederek doğal bir amfi oluşturur.",
      olculenKazanim: "F.6.5.2.4. Tarihi amfi tiyatrolardaki akustik tasarımı değerlendirir.",
      olculenBeceri: "Mimari Akustik Çözümleme",
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
      id: "mcq-u5s2-14",
      number: 14,
      baglam: "Ses kayıt stüdyolarının duvarları özel piramit süngerlerle kaplanır.",
      soruKoku: "Piramit şeklindeki süngerlerin düz süngerlere göre sesi daha iyi soğurmasının geometrik sebebi nedir?",
      secenekler: {
        A: "Piramit yüzeyin ses dalgalarını girinti ve çıkıntılar arasında defalarca çarptırarak enerjisini hapsedip yok etmesi",
        B: "Piramitlerin elektrik üretmesi",
        C: "Daha ucuz olması",
        D: "Odayı daha aydınlık yapması"
      },
      dogruCevap: "A",
      cozum: "Piramit ve labirent şeklindeki gözenekler ses dalgalarını yansıtmak yerine içeri hapsederek çoklu soğurma sağlar.",
      olculenKazanim: "F.6.5.2.3. Yüzey şeklinin ses soğurma verimliliğine etkisini irdeler.",
      olculenBeceri: "Akustik Malzeme Mühendisliği",
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
      id: "mcq-u5s2-15",
      number: 15,
      baglam: "Savaş uçakları havada ses süratini (yaklaşık 1224 km/saat veya 340 m/s) aştıklarında gökyüzünde bomba patlamış gibi muazzam bir gürültü meydana gelir.",
      soruKoku: "Ses süratinin aşılmasıyla oluşan bu şiddetli patlama sesine ne ad verilir?",
      secenekler: {
        A: "Sonik patlama",
        B: "Yankı",
        C: "Işık kırılması",
        D: "Yer sarsıntısı"
      },
      dogruCevap: "A",
      cozum: "Ses hızını aşan (süpersonik) uçaklar önlerindeki ses dalgalarını sıkıştırarak şok dalgası ve 'sonik patlama' oluşturur.",
      olculenKazanim: "F.6.5.2.1. Ses sürati aşıldığında oluşan sonik patlama olgusunu açıklar.",
      olculenBeceri: "Havacılık ve Dalga Fiziği",
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
      id: "mcq-u5s2-16",
      number: 16,
      baglam: "Bir balıkçı teknesi denizdeki balık sürülerinin yerini ve derinliğini tespit etmek için teknenin tabanındaki ses cihazını açmıştır.",
      soruKoku: "Balıkçı teknesinin kullandığı bu cihaz ve çalışma prensibi hangisidir?",
      secenekler: {
        A: "Sonar cihazı - Sesin balık sürüsüne çarpıp geri yansıması prensibi",
        B: "Teleskop - Işık toplama prensibi",
        C: "Termometre - Sıcaklık ölçümü",
        D: "Dinamometre - Kuvvet ölçümü"
      },
      dogruCevap: "A",
      cozum: "Sonar cihazı ses dalgaları yayar; balık sürülerine çarparak dönen ekolar sayesinde sürünün derinliği belirlenir.",
      olculenKazanim: "F.6.5.2.5. Balıkçılıkta sonar kullanımını ses yansımasıyla ilişkilendirir.",
      olculenBeceri: "Endüstriyel ve Deniz Teknolojisi",
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
      id: "mcq-u5s2-17",
      number: 17,
      baglam: "Bir öğrenci 'Işık da ses gibi maddesel ortama ihtiyaç duyar ve aynı hızda yayılır' şeklinde bir iddia ortaya atmıştır.",
      soruKoku: "Öğretmenin bu iddiayı çürütmek için vereceği en çarpıcı kanıt hangisidir?",
      secenekler: {
        A: "Güneş ışığının uzay boşluğunu geçerek Dünya'ya 8 dakikada ulaşması ancak Güneş patlamalarının sesinin boşlukta hiç yayılamaması",
        B: "Işığın kırmızı olması",
        C: "Sesin sadece geceleri yayılması",
        D: "İddianın doğru olduğunu söylemesi"
      },
      dogruCevap: "A",
      cozum: "Işık boşlukta 300.000 km/s ile yayılır ve ortama muhtaç değildir; ses ise mekanik dalgadır, boşlukta yayılamaz ve hızı çok daha düşüktür.",
      olculenKazanim: "F.6.5.2.2. Işık ve ses yayılma farklarını somut kozmik kanıtla açıklar.",
      olculenBeceri: "Kavram Yanılgısını Bilimsel Kanıtla Çürütme",
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
      id: "mcq-u5s2-18",
      number: 18,
      baglam: "Bir apartman dairesinde pencerelerde çift cam (ısıcam) kullanıldığında dışarıdaki sokak gürültüsünün de büyük oranda azaldığı fark edilmiştir.",
      soruKoku: "Çift cam uygulamasının sağladığı iki temel ortak fayda hangisidir?",
      secenekler: {
        A: "Hem ısı yalıtımı sağlayarak enerji tasarrufu yapması hem de ses yalıtımı sağlayarak gürültüyü kesmesi",
        B: "Evi karanlık yapması ve evi soğutması",
        C: "Yalnızca rüzgârı durdurması",
        D: "Camları kırılmaz yapması"
      },
      dogruCevap: "A",
      cozum: "Çift cam arasındaki hava boşluğu hem ısı iletimini hem de ses titreşimlerini engelleyerek çifte konfor sağlar.",
      olculenKazanim: "F.6.5.2.5. Çift cam teknolojisinin ısı ve ses yalıtımındaki bütünleşik rolünü irdeler.",
      olculenBeceri: "Disiplinler Arası Çözümleme",
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
      id: "mcq-u5s2-19",
      number: 19,
      baglam: "Bir maden ocağında göçük altında kalan madenciler kurtarma ekiplerine seslerini duyurabilmek için bağırmak yerine demir borulara taşla ritmik olarak vururlar.",
      soruKoku: "Madencilerin demir borulara vurmasının fiziksel sebebi nedir?",
      secenekler: {
        A: "Demir boru katı olduğu için ses titreşimlerini toprak ve havaya göre kilometrelerce öteye çok daha hızlı ve kayıpsız iletmesi",
        B: "Demir borunun ışık saçması",
        C: "Madencilerin konuşmaktan sıkılması",
        D: "Boruların su fışkırtması"
      },
      dogruCevap: "A",
      cozum: "Demirde ses yaklaşık 5000 m/s hızla ve zayıflamadan yayılır; kurtarma ekipleri sismik dinleme cihazlarıyla bu sesi kilometrelerce öteden alır.",
      olculenKazanim: "F.6.5.2.1. Katılarda ses yayılımının hayat kurtaran uygulamasını açıklar.",
      olculenBeceri: "Afet Kurtarma ve Yaşamsal Fizik Bilgisi",
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
      id: "mcq-u5s2-20",
      number: 20,
      baglam: "Sesin katı, sıvı ve gazlardaki sürat düzeninden yarasaların ekolokasyonla yön bulmasına, Mimar Sinan'ın kubbelere sakladığı akustik sırlardan anne karnındaki bebeği gösteren ultrason dalgalarına kadar her detayda ince bir nizam parıldar.",
      soruKoku: "Sesin maddeyle bu kusursuz etkileşimini ve akustiğini tefekkür eden bir öğrencinin varacağı en derin marifet nedir?",
      secenekler: {
        A: "Sesin başıboş ve rastgele kurallarla yayıldığı",
        B: "Titreşen her zerreye bir ölçü koyan, sesin süratini ve yansımasını hayatı kolaylaştıran bir rahmete dönüştüren Sonsuz İlim ve Sanat Sahibi'ni hayranlıkla takdir etmek",
        C: "Akustiğin sadece binalarla sınırlı olduğu",
        D: "Tüm seslerin aynı hızda gittiği"
      },
      dogruCevap: "B",
      cozum: "Türkiye Yüzyılı Maarif Modeli doğrultusunda ses fiziği, tabiat dengesi, akustik medeniyet mirasımız ve Yaratıcı'nın sanatı birleştirilerek tefekkür edilir.",
      olculenKazanim: "F.6.5.2. Ses dalgalarının özelliklerini kâinattaki hikmet, nizam ve maarif değerleriyle sentezler.",
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
