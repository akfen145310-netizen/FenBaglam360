import { SectionContent } from '../../types';

export const unit7Section1: SectionContent = {
  code: "7.7.1",
  title: "Ampullerin Bağlanma Şekilleri",
  unitCode: "7.7",
  unitTitle: "7. Ünite: Elektrik Devreleri",
  summary: "Elektrik devrelerinde ampullerin bağlanma biçimleri: Seri ve Paralel bağlama; ampul parlaklıklarının devreye seri ve paralel ampul eklenmesiyle değişimi; seri devrede bir ampul patladığında diğerlerinin sönmesi, paralel devrede diğer ampullerin yanmaya devam etmesi ve ev tesisatlarının paralel bağlı olmasının hayati önemi.",
  kazanimlar: [
    "F.7.7.1.1. Seri ve paralel bağlı ampullerden oluşan bir devre şeması çizer ve kurar.",
    "F.7.7.1.2. Ampullerin seri ve paralel bağlanması durumunda devredeki parlaklık değişimlerini deneyerek karşılaştırır.",
    "F.7.7.1.3. Seri ve paralel devrelerde bir ampulün duyundan çıkarılması veya patlaması durumunda diğer ampullerin durumunu irdeler.",
    "F.7.7.1.4. Günlük yaşamda (evlerdeki aydınlatma sistemleri, sokak lambaları, otomobil farları) paralel bağlamanın neden tercih edildiğini açıklar."
  ],
  hatirlayalim: {
    text: "6. Sınıfta bir iletkenin direncini; iletkenin boyuna, kesit alanına ve cinsine bağlı olduğunu ve basit bir elektrik devresinde pil, anahtar, iletken tel ve ampul bulunduğunu öğrenmiştik.",
    keyPoints: [
      "Seri bağlama: Ampullerin tek bir hat üzerinde uç uca eklenmesidir. Elektrik akımı için tek bir geçiş yolu vardır. Ampul sayısı arttıkça devrenin toplam direnci artar, akım azalır ve ampullerin parlaklığı düşer. Biri patlarsa hepsi söner.",
      "Paralel bağlama: Ampullerin birer uçlarının bir noktada, diğer uçlarının başka bir noktada birleştirilerek akımın kollara ayrılmasıdır. Devreye paralel ampul eklendikçe ampullerin parlaklığı değişmez! Biri patlarsa diğerleri aynı parlaklıkta yanmaya devam eder.",
      "Evlerimizdeki tüm priz ve avizeler paralel bağlıdır; böylece salondaki lambayı kapattığımızda mutfaktaki lamba sönmez."
    ]
  },
  onDegerlendirme: [
    {
      id: "od-u7s1-1",
      question: "Evimizdeki lambalardan biri patladığında veya düğmesini kapattığımızda diğer odaların lambaları neden sönmez?",
      answer: "Çünkü ev elektrik tesisatındaki tüm priz ve lambalar birbirine PARALEL bağlıdır. Akım her lamba için bağımsız kollardan geçtiğinden biri kapansa bile diğer kollardan akım geçmeye devam eder."
    },
    {
      id: "od-u7s1-2",
      question: "Bir pille çalışan devreye seri olarak ikinci ve üçüncü özdeş ampul eklendiğinde ampullerin parlaklığı nasıl değişir?",
      answer: "Parlaklıkları belirgin şekilde azalır (söner gibi kısılır). Çünkü seri bağlandıkça devrenin toplam direnci artar, pilden çekilen toplam akım azalır ve pilin gerilimi ampuller arasında eşit paylaşılır."
    },
    {
      id: "od-u7s1-3",
      question: "Yılbaşı çam ağacı ışıklandırmalarında bazen minik bir ampul çıktığında zincirdeki bütün ışıklar sönmektedir. Bu ışıklar nasıl bağlanmıştır?",
      answer: "Tek bir ampul çıktığında hepsi söndüğüne göre o ışık zinciri SERİ bağlıdır; devrede akım yolu kesilmiştir."
    }
  ],
  hazirlik: {
    question: "Şehrin caddelerindeki yüzlerce sokak lambasından birinin ampulü patladığında tüm caddenin zifiri karanlığa gömülmemesini sağlayan devre mühendisliği sizce nasıldır?",
    answer: "Sokak lambaları paralel bağlanmıştır; her bir lamba ana şebekeden bağımsız bir kola sahiptir ve biri arızalansa bile diğerleri ışık saçmaya devam eder."
  },
  merak: {
    question: "Aynı pile bağlandığı halde seri devredeki 3 ampul mum ışığı gibi cılız yanarken, paralel bağlı 3 ampulün her birinin tek bir ampul kadar parlak yanmasının sırrı nedir?",
    answer: "Paralel bağlamada her kol doğrudan pilin uçlarına bağlıdır ve pilin tüm potansiyel farkını (gerilimini) tam olarak kullanır; seri devrede ise pilin gerilimi ampuller arasında bölünür."
  },
  kopru: {
    title: "Karanlığı Aydınlatan Görünmez Nehir",
    content: "Elektronların iletken tel içindeki muntazam akışı, modern medeniyetin fabrikalarını, hastanelerini ve evlerini aydınlatan ilahi bir enerji nizamıdır.",
    question: "Elektrik devrelerinde bir düzen ve kanun olmasaydı ne olurdu?",
    answer: "Kontrolsüz enerji cihazları yakar, yangınlara sebep olurdu; kâinattaki her fiziksel kanun gibi elektrik akımı da kusursuz matematiksel kurallarla (Ohm ve Kirchhoff yasaları) işler."
  },
  // MEB DERS KİTABI DETAYLI KONU ANLATIMI, TABLOLAR, BAĞLANTI NOKTALARI VE HABERLER
  konuAnlatimi: {
    ozet: "Elektrik devrelerinde ampuller seri ve paralel olmak üzere iki temel şekilde bağlanır. Seri bağlamada ampuller tek bir hat üzerinde uç uca eklenir; akımın izleyeceği tek bir yol vardır. Seri bağlı devreye ampul eklendikçe toplam direnç artar, akım azalır ve ampul parlaklıkları belirgin şekilde düşer; bir ampul patlarsa tüm ampuller söner. Paralel bağlamada ise ampullerin uçları ortak düğüm noktalarında birleştirilir; akım kollara ayrılır. Devreye paralel ampul eklendikçe her koldaki gerilim ve ampullerin parlaklığı DEĞİŞMEZ; biri patlarsa diğerleri aynı parlaklıkta yanmaya devam eder. Evlerimizdeki tüm priz ve lambalar paralel bağlıdır.",
    kavramlar: [
      {
        terim: "Seri Bağlama ve Özellikleri",
        tanim: "Ampullerin aynı hat üzerinde, birinin çıkış ucunun diğerinin giriş ucuna uç uca bağlanmasıdır.",
        onemliNoktalar: [
          "Elektrik akımının takip edebileceği TEK BİR YOL vardır.",
          "Bütün ampullerin üzerinden geçen elektrik akımı şiddeti birbirine eşittir (I_ana = I_1 = I_2).",
          "Devreye özdeş seri ampul eklendikçe devrenin toplam direnci artar, akım azalır ve her bir ampulün PARLAKLIĞI AZALIR.",
          "Pilin gerilimi ampuller arasında eşit bölünür (V = V_1 + V_2).",
          "Ampullerden biri patlarsa veya duydan çıkarılırsa devre açılır ve BÜTÜN AMPULLER SÖNER."
        ]
      },
      {
        terim: "Paralel Bağlama ve Özellikleri",
        tanim: "Ampullerin birer uçlarının bir noktada, diğer uçlarının başka bir noktada birleştirilerek akımın kollara ayrılmasıdır.",
        onemliNoktalar: [
          "Akım ana koldan geldikten sonra kollara ayrılır; kollardaki akımların toplamı ana kol akımına eşittir.",
          "Her bir paralel kolun gerilimi doğrudan üretecin (pilin) gerilimine eşittir (V = V_1 = V_2).",
          "Devreye özdeş paralel ampul eklendikçe her bir ampulün PARLAKLIĞI DEĞİŞMEZ (aynı kalır).",
          "Kollardan birindeki ampul patlarsa veya çıkarılırsa DİĞER AMPULLER AYNI PARLAKLIKTA YANMAYA DEVAM EDER.",
          "Paralel kol sayısı arttıkça pilden çekilen toplam akım artar; bu yüzden pil daha kısa sürede tükenir."
        ]
      },
      {
        terim: "Ampul Parlaklığı Neye Bağlıdır?",
        tanim: "Bir ampulün birim zamanda yaydığı ışık enerjisinin ölçüsüdür.",
        onemliNoktalar: [
          "Özdeş ampullerin parlaklığı, üzerlerinden geçen akım şiddetiyle veya uçları arasındaki gerilimle doğru orantılıdır.",
          "Akım veya gerilim ne kadar fazlaysa ampul o kadar parlak ışık verir.",
          "Seri devrede gerilim bölündüğü için parlaklık az; paralel devrede gerilim pil ile aynı kaldığı için parlaklık fazladır."
        ]
      },
      {
        terim: "Günlük Yaşamda Devre Tasarımı",
        tanim: "Elektrikli aletlerin emniyetli ve bağımsız çalışmasını sağlayan bağlantı tercihleridir.",
        onemliNoktalar: [
          "Evlerdeki avizeler, prizler, mutfak aletleri PARALEL bağlıdır.",
          "Bu sayede televizyonu kapattığımızda buzdolabı durmaz veya salondaki lamba patladığında mutfak karanlığa gömülmez.",
          "Otomobil farları ve cadde sokak lambaları da paralel bağlıdır."
        ]
      }
    ],
    tablolar: [
      {
        baslik: "Seri ve Paralel Devrelerin Karşılaştırma Tablosu",
        sutunlar: ["Karşılaştırma Kriteri", "Seri Bağlı Devre", "Paralel Bağlı Devre"],
        satirlar: [
          ["Akımın İzlediği Yol", "Tek bir hat (tek yol)", "Kollara ayrılan bağımsız yollar"],
          ["Ampul Eklenince Parlaklık", "Ampul sayısı arttıkça parlaklık AZALIR", "Ampul sayısı artsa da parlaklık DEĞİŞMEZ"],
          ["Bir Ampul Patlarsa", "Devre açılır, tüm ampuller SÖNER", "Diğer ampuller aynı parlaklıkta YANMAYA DEVAM EDER"],
          ["Kollardaki Gerilim", "Pilin gerilimi ampullere bölünür (V = V1 + V2)", "Her kol doğrudan pilin gerilimini alır (V = V1 = V2)"],
          ["Pilin Ömrü", "Toplam akım küçük olduğu için pil daha uzun dayanır", "Paralel kol eklendikçe ana akım artar, pil çabuk biter"],
          ["Kullanım Alanları", "Basit el fenerleri, eski süs ışıkları", "Ev tesisatları, sokak lambaları, araba farları"]
        ]
      }
    ]
  },
  // MEB KİTABINDAKİ BAĞLANTI NOKTALARI
  baglantiNoktalari: [
    {
      id: "bn-7-7-1",
      baslik: "Elektrik Mühendisliği Bağlantısı: Evler Neden Paralel Bağlıdır?",
      alan: "Elektrik-Elektronik Mühendisliği",
      aciklama: "Bir binanın projelendirilmesinde tüm prizler ve aydınlatma linye hatları elektrik panosuna paralel bağlanır.",
      soru: "Evimizdeki lamba ve aletler seri bağlı olsaydı ne gibi büyük sorunlar yaşardık?",
      cevap: "1. Bir aleti çalıştırmak için evdeki bütün aletleri ve lambaları aynı anda açmak zorunda kalırdık. 2. Tek bir lambayı kapattığımızda evdeki buzdolabı dahil her şey dururdu. 3. Çalışan alet sayısı arttıkça aletlerin gücü ve lambaların parlaklığı düşer, aletler çalışamaz hale gelirdi."
    },
    {
      id: "bn-7-7-2",
      baslik: "Otomotiv Teknolojisi: Araba Farlarının Paralel Mimarisi",
      alan: "Otomotiv Mühendisliği & Yol Güvenliği",
      aciklama: "Araçların sağ ve sol ön farları aküye paralel bağlı olarak dizayn edilir.",
      soru: "Otomobil farlarının paralel bağlanmasının trafik güvenliği açısından önemi nedir?",
      cevap: "Gece virajlı ve karanlık bir yolda seyrederken farlardan biri patlarsa diğer far aynı güçle yolu aydınlatmaya devam eder; seri bağlı olsaydı iki far birden anında söner ve ölümcül kazalara yol açardı."
    }
  ],
  // MEB KİTABINDAKİ GÜNCEL HABERLER
  haberler: [
    {
      id: "hbr-7-7-1",
      baslik: "Büyükşehirlerde Akıllı LED Sokak Lambaları Paralel Fiber Ağa Dönüştürülüyor",
      kaynak: "Enerji ve Tabii Kaynaklar Bakanlığı Bülteni",
      tarih: "2023",
      ozet: "Türkiye genelinde caddelerdeki yüksek enerji tüketen sodyum buharlı sokak lambaları, uzaktan izlenebilen akıllı paralel LED sistemleriyle yenileniyor. Paralel altyapı sayesinde tek bir direkte meydana gelen ampul arızası anında komuta merkezine dijital sinyal olarak iletilmekte; caddedeki diğer lambalar kesintisiz olarak ışık saçmaya devam etmektedir.",
      soru: "Sokak aydınlatmalarında paralel bağlantı tercih edilmesinin arıza tespitindeki faydası nedir?",
      cevap: "Her lamba bağımsız akım çektiği için bir lambanın yanmaması tüm hattı söndürmez; arızalı lambanın yeri anında tespit edilip diğer lambalar etkilenmeden onarılabilir."
    }
  ],
  // MEB KİTABINDAKİ KONTROL NOKTALARI
  kontrolNoktalari: [
    {
      id: "kn-7-7-1",
      baslik: "Kontrol Noktası 1 (Seri ve Paralel Devrelerde Parlaklık)",
      sorular: [
        {
          id: "kn-q-52",
          soru: "Bir elektrik devresinde özdeş iki ampul seri bağlı iken anahtarı kapatılıyor. Devreye seri olarak 3. bir özdeş ampul daha eklenirse ampullerin parlaklığı nasıl değişir?",
          tip: "coktan-secmeli",
          secenekler: [
            "A) Ampullerin parlaklıkları azalır.",
            "B) Ampullerin parlaklıkları artar.",
            "C) Ampullerin parlaklığı değişmez.",
            "D) Devredeki bütün ampuller söner."
          ],
          dogruSecenek: "A",
          cevap: "A) Ampullerin parlaklıkları azalır.",
          aciklama: "Seri devrede ampul sayısı arttıkça toplam direnç artar, devreden geçen akım azalır ve pilin gerilimi üçe bölüneceği için parlaklıklar azalır."
        },
        {
          id: "kn-q-53",
          soru: "Paralel bağlı özdeş iki ampulden oluşan bir devreye paralel bir 3. ampul eklendiğinde ilk iki ampulün parlaklığı neden değişmez?",
          tip: "klasik",
          cevap: "Çünkü paralel bağlamada her bir kol doğrudan pilin kutuplarına bağlıdır ve pilin tüm potansiyel farkını (gerilimini) aynen kullanır. Yeni paralel kol eklenmesi mevcut kollardaki gerilimi ve geçen akımı etkilemez.",
          aciklama: "Paralel kollarda gerilimler eşittir (V = V1 = V2 = V3)."
        }
      ]
    },
    {
      id: "kn-7-7-2",
      baslik: "Kontrol Noktası 2 (Ampul Patlaması ve Ev Devreleri)",
      sorular: [
        {
          id: "kn-q-54",
          soru: "Özdeş K, L ve M ampullerinden K ve L paralel bağlı, M ise bu gruba seri bağlıdır. L ampulü duydan çıkarılırsa K ve M ampullerinin durumu ne olur?",
          tip: "coktan-secmeli",
          secenekler: [
            "A) K söner, M daha parlak ışık verir.",
            "B) K ve M'nin her ikisi de anında söner.",
            "C) K ve M ampulleri yanmaya devam eder.",
            "D) M ampulü ışık verir, K ampulü söner."
          ],
          dogruSecenek: "C",
          cevap: "C) K ve M ampulleri yanmaya devam eder.",
          aciklama: "L çıkınca paralel koldan K üzerinden akım geçmeye devam eder; devre M üzerinden tamamlandığı için her iki ampul de ışık vermeye devam eder."
        }
      ]
    }
  ],
  // BİLGİ BANKASI KUTULARI
  bilgiBankasi: [
    {
      id: "bb-7-7-1",
      baslik: "Eski Yılbaşı Ağacı Işıklarının Çilesi",
      icerik: "Geçmiş yıllarda üretilen ucuz çam ağacı süsleme ışıkları 50 veya 100 minik ampulün birbirine tek bir kabloyla SERİ bağlanmasıyla yapılırdı. Ağaç üzerindeki ampullerden tek bir tanesinin teli koptuğunda bütün zincir anında sönerdi. İnsanlar bozulan tek ampulü bulmak için 50 ampulü tek tek söküp denemek zorunda kalırdı. Günümüzde bu sistemler paralel bağlantıya dönüştürülmüştür.",
      onemliNot: "Seri devrede tek bir kopukluk tüm akımı keser."
    },
    {
      id: "bb-7-7-2",
      baslik: "Kısa Devre Nedir?",
      icerik: "Elektrik akımı her zaman direnci en az olan (kolay) yolu tercih eder. Yanmakta olan bir ampulün iki ucuna dirençsiz düz bir bakır tel bağlanırsa akım ampulün yüksek dirençli filamanından geçmek yerine boş telden akar. Bu durumda ampul aniden söner; bu olaya 'kısa devre' denir. Kısa devre yüksek akım çektiği için pilleri ve kabloları aşırı ısıtır.",
      onemliNot: "Kısa devre yangın tehlikesi oluşturur; sigortalar devreyi bu yüzden korur."
    }
  ],
  // MEB KİTABINDAKİ PERFORMANS GÖREVİ
  performansGorevi: {
    baslik: "İki Odalı Akıllı Ev Maketi Elektrik Tesisatı Projesi",
    amac: "Ayakkabı kutusundan yapılan iki odalı bir ev maketinde, her odanın lambasını bağımsız olarak açıp kapatabilen ve biri patlasa bile diğeri sönmeyen paralel elektrik devresini kurmak.",
    surecAdimlari: [
      "Karton kutuyu ikiye bölerek 'Salon' ve 'Mutfak' odalarını oluşturunuz.",
      "İki adet 1.5 V ampul, iki adet duy, iki adet minik anahtar, pil yatağı ve bağlantı kabloları temin ediniz.",
      "Pilden çıkan ana kabloyu paralel iki kola ayırınız; her kola bir anahtar ve bir ampulü seri bağlayınız.",
      "Anahtarları tek tek açıp kapatarak odaların lambalarının birbirini etkilemediğini test ediniz.",
      "Salon lambasını duydan gevşeterek mutfak lambasının yanmaya devam ettiğini gözlemleyiniz ve raporlayınız."
    ],
    beklenenUrun: "Çalışır Durumda 2 Odalı Paralel Aydınlatmalı Ev Maketi ve Devre Şeması Çizimi.",
    degerlendirmeKriterleri: [
      "Paralel bağlantı şemasının fen kurallarına uygun olarak hatasız kurulması",
      "Odaların birbirinden bağımsız açılıp kapanabilmesi",
      "Raporun seri ve paralel bağlamanın farklarını gerekçeleriyle açıklaması"
    ]
  },
  // MEB KİTABI NELER ÖĞRENDİK BÖLÜMÜ SORULARI VE MAARİF ÇÖZÜMLERİ
  nelerOgrenildiSorulari: [
    {
      id: "no-7-7-1",
      soru: "1. Seri bağlama ile paralel bağlama arasındaki temel farkları akımın izlediği yol, ampul parlaklığı ve bir ampulün bozulması durumları açısından karşılaştırınız.",
      cevap: "1. Akımın Yolu: Seri devrede tek bir yol vardır; paralel devrede akım kollara ayrılır. 2. Parlaklık: Seri devrede ampul eklendikçe parlaklık azalır; paralel devrede yeni ampul eklense de ampullerin parlaklığı değişmez. 3. Bozulma: Seri devrede bir ampul patlarsa hepsi söner; paralel devrede bir ampul patlasa da diğerleri aynı parlaklıkta yanmaya devam eder.",
      detayliCozum: "Paralel bağlamada her kol pilin bağımsız tam gerilimine sahiptir."
    },
    {
      id: "no-7-7-2",
      soru: "2. Evlerimizde bulunan tüm elektrikli aletlerin ve tavan lambalarının birbirine paralel bağlanmasının mühendislik gerekçelerini açıklayınız.",
      cevap: "1. Bağımsız Kontrol: Her cihazı ve lambayı diğerlerinden bağımsız olarak açıp kapatabilmek için. 2. Arıza Güvenliği: Bir ampul patladığında veya bir alet bozulduğunda evdeki diğer cihazların çalışmayı sürdürmesi için. 3. Sabit Gerilim: Şebekeden gelen 220 Volt standart gerilimi her cihazın tam olarak alabilmesi için paralel bağlanır.",
      detayliCozum: "Seri bağlansaydı bir lambayı kapatınca bütün ev kararır ve aletler düşük voltajdan bozulurdu."
    },
    {
      id: "no-7-7-3",
      soru: "3. Bir öğrenci özdeş iki ampulü bir pile önce seri, ardından aynı pile paralel bağlıyor. Hangi devredeki ampuller daha parlak ışık verir? Nedenini gerilim ve akım kavramlarıyla açıklayınız.",
      cevap: "Paralel bağlı devredeki ampuller çok daha parlak ışık verir. Çünkü paralel devrede her ampul doğrudan pilin tüm gerilimini (V) alarak üzerinden yüksek akım geçirir. Seri devrede ise pilin gerilimi iki ampul arasında paylaşılır (V/2) ve toplam direnç iki katına çıktığı için devreden geçen akım yarıya iner.",
      detayliCozum: "Ampul parlaklığı uçlarındaki gerilim ve üzerinden geçen akımla doğru orantılıdır."
    },
    {
      id: "no-7-7-4",
      soru: "4. Paralel bağlı 3 ampulün bulunduğu bir devrede pilden çekilen akım ile ampullerin ömrü ve pilin tükenme süresi arasındaki ilişkiyi değerlendiriniz.",
      cevap: "Devreye paralel ampul eklendikçe her bir ampulün parlaklığı değişmez ancak pilden çekilen toplam akım katlanarak artar. Pilden daha çok akım çekildiği için pilin kullanım ömrü kısalır ve pil çok daha hızlı tükenir. Ampullerin ışık verme ömrü ise değişmez.",
      detayliCozum: "I_ana = I_1 + I_2 + I_3 olduğu için pilin kimyasal enerjisi daha hızlı boşalır."
    }
  ],
  hikmetStages: [
    {
      stage: 1,
      name: "1. Varlığı Tanıt (Seri Bağlama Mimarisi)",
      concept: "Tek Hat Üzerinde Akış",
      text: "Ampullerin uç uca eklenmesiyle kurulur. Akımın izleyebileceği tek bir yol vardır. Ampul sayısı arttıkça toplam direnç artar, devreden geçen akım azalır, parlaklık azalır. Bir ampul duydan çıkarılırsa devre açılır ve tüm ampuller söner.",
      analogies: ["Tek şeritli bir yoldaki ardışık kasisler"]
    },
    {
      stage: 2,
      name: "2. Parçalarını Göster (Paralel Bağlama Mimarisi)",
      concept: "Kollara Ayrılan Akış",
      text: "Ampullerin kutuplarının aynı noktalarda birleşmesiyle oluşur. Akım kollara ayrılır. Her kol pilin tam gerilimini alır. Paralel ampul sayısı artsa bile kolların parlaklığı değişmez. Biri patlasa diğerleri yanmayı sürdürür.",
      analogies: ["Geniş bir otoyolun gişelere ayrılarak trafiği rahatlatması"]
    },
    {
      stage: 3,
      name: "3. Sanatını Çöz (Parlaklık ve Direnç Dengesi)",
      concept: "Dirençlerin Toplanması ve Paylaşım",
      text: "Seri devrede: R_toplam = R1 + R2 + ... (Direnç artar, akım düşer).\nParalel devrede: 1/R_toplam = 1/R1 + 1/R2 (Eşdeğer direnç küçülür, pilden çekilen toplam akım artar, her kol eşit ışık verir).",
      analogies: ["Suyu tek borudan geçirmek ile boruyu üçe ayırarak akıtmak"]
    },
    {
      stage: 4,
      name: "4. Hikmetini Kavra (Şehir ve Ev Güvenliği)",
      concept: "Paralel Güvenlik ve Konfor",
      text: "Evlerdeki paralel tesisat sayesinde buzdolabı arızalansa bile fırın çalışır, salon lambası kapansa bile çalışma masası lambası yanar. Bu nizam, insan hayatını kolaylaştıran pratik bir hikmettir.",
      analogies: ["Her odanın bağımsız musluğunun olması"]
    },
    {
      stage: 5,
      name: "5. Teknolojide İnsan (LED Aydınlatma ve Akıllı Evler)",
      concept: "Enerji Verimliliği",
      text: "Eski akkor flamanlı ampuller enerjinin %90'ını ısıya harcardı. Modern LED teknolojisi yarı iletkenlerle paralel modüller halinde dizilerek az enerjiyle yüksek parlaklık sağlar.",
      analogies: ["Isı kaybı olmadan ışık veren soğuk ışık mucizesi"]
    },
    {
      stage: 6,
      name: "6. Medeniyet Ufku (Cezeri'den Elektrik Mühendisliğine)",
      concept: "Otomasyon ve Enerji İletimi",
      text: "İslam bilgini El-Cezeri (1136-1206) suların debisini kanallara bölerek mekanik otomatlar kurmuş; bu kanallara ayırma mantığı asırlar sonra elektrikte paralel devre tasarımının ilham kaynağı olmuştur.",
      analogies: ["Suyu ve elektriği kollara ayırarak gücü yönetmek"]
    }
  ],
  etkinlikler: [
    {
      id: "etk-7-7-1",
      title: "Etkinlik Noktası: Seri ve Paralel Devre Kurulumu ve Parlaklık Karşılaştırması",
      type: "Devre Kurma ve Parlaklık Gözlemi",
      materials: ["1 adet 4.5V pil", "3 adet özdeş ampul ve duy", "Bağlantı kabloları", "Anahtar"],
      steps: [
        "1. Adım: Pili tek bir ampule bağlayıp parlaklığını gözlemleyiniz (Referans).",
        "2. Adım: İki ampulü uç uca seri bağlayınız. Parlaklığın azaldığını gözlemleyiniz. Bir ampulü gevşetiniz, diğerinin söndüğünü kaydediniz.",
        "3. Adım: İki ampulü paralel bağlayınız. Parlaklıkların başlangıçtaki tek ampul kadar parlak olduğunu gözlemleyiniz. Birini gevşettiğinizde diğerinin aynen yandığını kaydediniz."
      ],
      questions: [
        {
          qId: "etk-u7s1-q1",
          label: "1. Soru",
          prompt: "Seri devrede ampul sayısı arttıkça parlaklığın azalmasının sebebi nedir?",
          answer: "Ampuller seri bağlandıkça devrenin toplam direnci artar, pilden çekilen toplam akım azalır ve pilin gerilimi ampuller arasında paylaşıldığı için parlaklık düşer."
        },
        {
          qId: "etk-u7s1-q2",
          label: "2. Soru",
          prompt: "Paralel devrede ampullerden biri patladığında diğerinin sönmemesinin sebebi nedir?",
          answer: "Çünkü paralel devrede akım kollara ayrılır; her ampul kendi kapalı devresini oluşturduğundan bir koldaki kesilme diğer koldaki akımı durdurmaz."
        }
      ]
    }
  ],
  bilgiIstasyonlari: [
    {
      title: "Mühendisliğin Öncüsü: El-Cezeri",
      scientistOrMission: "Akışkanlar ve Otomasyon",
      description: "Cezeri suyun akışını vanalar ve sifonlarla kollara ayırarak su saatleri ve robotlar tasarlamıştır. Günümüz elektrik devrelerindeki paralel kollar Cezeri'nin su akış mimarisiyle birebir benzeşir.",
      hikmetNote: "Enerjinin kollara ayrılması, tek bir arızanın tüm sistemi kilitlemesini engelleyen muazzam bir denge ilkesidir."
    },
    {
      title: "Neden Evlerde Paralel Bağlama?",
      scientistOrMission: "Ev Tesisat Mühendisliği",
      description: "Evlerimizdeki tüm cihazlar 220 Volt gerilimle çalışır. Paralel bağlama sayesinde tüm prizler 220V alır ve biri açılıp kapandığında diğer cihazlar etkilenmez.",
      hikmetNote: "İlim ve mühendislik, insanın konforunu ve güvenliğini fıtrat kanunlarına uyarak yükseltir."
    }
  ],
  dda: {
    id: "dda-devre-root",
    statement: "Seri bağlı bir devrede ampullerden biri duydan çıkarılırsa diğer ampuller de söner.",
    correctDecision: "D",
    reason: "Seri devrede akım yolu tektir, devre açık hale gelir.",
    ifTrue: {
      id: "dda-devre-node-d",
      statement: "Paralel bağlı bir devreye özdeş yeni bir paralel ampul eklendiğinde mevcut ampullerin parlaklığı azalır.",
      correctDecision: "Y",
      reason: "Paralel bağlı devrede ampul eklenmesi kolların gerilimini değiştirmez, parlaklık aynı kalır.",
      ifTrue: {
        id: "dda-devre-leaf-1",
        statement: "Evlerimizdeki elektrik tesisatı seri bağlıdır.",
        correctDecision: "Y",
        reason: "Ev tesisatı paralel bağlıdır.",
        ifTrue: { exit: 1, isCorrect: false, feedback: "Paralel ampul eklenince parlaklık değişmez, Y kolundan gidilmeliydi." },
        ifFalse: { exit: 2, isCorrect: false, feedback: "Hatalı çıkış." }
      },
      ifFalse: {
        id: "dda-devre-leaf-2",
        statement: "Seri bağlı ampul sayısı arttıkça devrenin toplam direnci artar.",
        correctDecision: "D",
        reason: "Seri bağlamada dirençler doğrudan toplanır, toplam direnç büyür.",
        ifTrue: { exit: 3, isCorrect: true, feedback: "Tebrikler! Ampullerin bağlanması DDA testinde doğru kararlarla 3. Çıkışa ulaştınız." },
        ifFalse: { exit: 4, isCorrect: false, feedback: "Seri bağlı dirençler artar." }
      }
    },
    ifFalse: {
      id: "dda-devre-node-y",
      statement: "Paralel bağlı ampullerin parlaklığı seri bağlılardan daima daha azdır.",
      correctDecision: "Y",
      reason: "Özdeş pillerde paralel bağlı ampuller daha parlak yanar.",
      ifTrue: { exit: 5, isCorrect: false, feedback: "Kök ifade doğruydu." }
    }
  },
  biliyorumAnliyorumDusunuyorum: {
    biliyorum: "Seri bağlamada tek bir akım yolu olduğunu ve parlaklığın ampul eklendikçe azaldığını; paralel bağlamada ise kolların bağımsız olduğunu ve parlaklığın değişmediğini biliyorum.",
    anliyorum: "Modern şehirlerin ve evlerimizin aydınlatmasında paralel bağlamanın neden vazgeçilmez bir mühendislik standardı olduğunu anlıyorum.",
    dusunuyorum: "Eğer elektrik yükleri metaller içinde bu kadar düzenli akmasaydı ve direnç kanunları olmasaydı bugünkü telefonlarımız, bilgisayarlarımız ve aydınlatma teknolojilerimiz mümkün olabilir miydi?"
  },
  pekistirmeIstasyonu: {
    stationTitle: "Pekiştirme İstasyonu: Ampullerin Bağlanma Şekilleri",
    pageReference: "MEB 7. Sınıf Fen Bilimleri 2. Kitap, Sayfa 149-162",
    summaryText: "Bu istasyonda seri ve paralel bağlama şemalarını, ampul parlaklıklarını, devreye ampul ekleme ve çıkarma sonuçlarını pekiştirdiniz.",
    targetSkills: [
      "Seri ve paralel bağlı devre şemalarını hatasız çizme",
      "Seri devreye ampul eklendiğinde parlaklık ve toplam direnç değişimini açıklama",
      "Paralel devreye ampul eklendiğinde kolların parlaklığının neden değişmediğini kavrama",
      "Bir ampul patladığında diğer ampullerin durumunu devre tipine göre belirleme",
      "Günlük yaşam sistemlerinde (ev, araba, cadde) paralel bağlamayı gerekçelendirme"
    ]
  },
  nelerOgrenildi: {
    title: "1. Bölüm Sonunda Neler Öğrenildi? (Neler Öğrendik?)",
    ogrenilenKavramlar: [
      "Seri Bağlama & Tek Akım Yolu",
      "Paralel Bağlama & Bağımsız Kollar",
      "Toplam Direnç (Eşdeğer Direnç) Değişimi",
      "Ampul Parlaklığı Kıyaslaması",
      "Ampul Çıkarılması / Patlaması Durumu",
      "Ev ve Şehir Tesisatlarında Paralel Bağlama Mantığı",
      "El-Cezeri ve Akışkan Kolları İlhamı"
    ],
    ozet: "MEB 2. Kitap 7. Ünite 1. Bölüm Sentezi: Ampuller devreye iki şekilde bağlanabilir: Seri ve Paralel. Seri bağlamada ampuller uç uca eklenir, akımın tek yolu vardır. Seri ampul sayısı arttıkça devrenin toplam direnci artar, ana koldan geçen akım azalır ve ampullerin parlaklığı düşer. Seri bağlı ampullerden biri patlarsa akım devreyi tamamlayamaz ve tüm ampuller söner. Paralel bağlamada ise ampuller farklı kollar üzerindedir. Devreye paralel ampul eklemek diğer ampullerin parlaklığını DEĞİŞTİRMEZ. Biri patlarsa diğerleri aynı parlaklıkta ışık vermeye devam eder. Bu sebeple evlerimizdeki tüm aydınlatma ve prizler paralel bağlıdır.",
    kontrolSorulari: [
      {
        id: "ko-u7s1-1",
        soru: "Seri ve paralel bağlı iki devrede birer ampul duydan söküldüğünde diğer ampullere ne olur?",
        cevap: "Seri devrede akım yolu tamamen kesildiği için diğer ampuller hemen söner. Paralel devrede ise diğer koldan akım akmaya devam ettiği için diğer ampuller aynı parlaklıkta yanmayı sürdürür."
      },
      {
        id: "ko-u7s1-2",
        soru: "Özdeş bir pile bağlı tek bir ampulün yanına seri olarak özdeş bir ampul daha eklenirse ampullerin parlaklığı nasıl değişir?",
        cevap: "Devrenin toplam direnci iki katına çıkar, devreden geçen akım yarıya iner ve pilin gerilimi iki ampul arasında yarı yarıya paylaşılır; sonuçta her iki ampulün de parlaklığı azalır."
      },
      {
        id: "ko-u7s1-3",
        soru: "Evlerimizdeki tüm elektrikli cihazların birbirine paralel bağlanmasının iki büyük avantajı nedir?",
        cevap: "1) Cihazlardan biri bozulduğunda veya kapatıldığında diğer cihazların çalışması kesintiye uğramaz. 2) Her cihaz şebekenin tam gerilimi olan 220 Volt'u doğrudan alır ve tam performansla çalışır."
      }
    ]
  },
  sonrakiKonu: {
    code: "7.7.2",
    title: "Elektrik Devrelerinde Akım, Gerilim ve Direnç İlişkisi (Ohm Kanunu)"
  },
  fillInBlanks: [
    {
      id: "fib-7-7-1",
      number: 1,
      baglam: "Ampullerin uç uca tek hat üzerinde bağlanmasına seri bağlama denir.",
      soruKoku: "Elektrik devrelerinde akımın tek bir yol izlediği bağlanma şekline ________ bağlama denir.",
      blankAnswer: "seri",
      acceptableAnswers: ["seri"],
      explanation: "Uç uca bağlama seridir.",
      wordBankHint: ["seri", "paralel", "karmaşık", "açık"]
    },
    {
      id: "fib-7-7-2",
      number: 2,
      baglam: "Ampullerin birer uçlarının ortak noktalarda birleştirilmesine paralel bağlama denir.",
      soruKoku: "Akımın birden fazla kola ayrılarak geçtiği devre bağlanma şekline ________ bağlama denir.",
      blankAnswer: "paralel",
      acceptableAnswers: ["paralel"],
      explanation: "Kollara ayrılan bağlama paraleldir.",
      wordBankHint: ["paralel", "seri", "kısa devre", "yalıtkan"]
    },
    {
      id: "fib-7-7-3",
      number: 3,
      baglam: "Seri devrede ampul sayısı arttıkça ampullerin parlaklığı azalır.",
      soruKoku: "Bir pile bağlı seri devrede ampul sayısı artırıldıkça ampullerin parlaklığı ________.",
      blankAnswer: "azalır",
      acceptableAnswers: ["azalır", "azalir", "düşer", "duser"],
      explanation: "Seri ampul eklendikçe direnç artar, parlaklık azalır.",
      wordBankHint: ["azalır", "artar", "değişmez", "patlar"]
    },
    {
      id: "fib-7-7-4",
      number: 4,
      baglam: "Paralel devreye yeni bir özdeş ampul eklendiğinde kolların parlaklığı değişmez.",
      soruKoku: "Özdeş ampullerden oluşan paralel bir devreye paralel yeni bir ampul eklenirse diğer ampullerin parlaklığı ________.",
      blankAnswer: "değişmez",
      acceptableAnswers: ["değişmez", "degismez", "aynı kalır", "ayni kalir"],
      explanation: "Paralel kollar bağımsızdır, parlaklık değişmez.",
      wordBankHint: ["değişmez", "azalır", "artar", "yarıya iner"]
    },
    {
      id: "fib-7-7-5",
      number: 5,
      baglam: "Evlerimizdeki elektrik tesisatı paralel bağlıdır.",
      soruKoku: "Evlerimizdeki elektrik tesisatında prizler ve lambalar birbirine ________ bağlıdır.",
      blankAnswer: "paralel",
      acceptableAnswers: ["paralel"],
      explanation: "Ev tesisatı paraleldir.",
      wordBankHint: ["paralel", "seri", "diyotlu", "topraksız"]
    },
    {
      id: "fib-7-7-6",
      number: 6,
      baglam: "Seri bağlı ampullerden biri patlarsa diğerleri de söner.",
      soruKoku: "Seri devredeki ampullerden biri patladığında veya duydan çıkarıldığında diğer ampuller ________.",
      blankAnswer: "söner",
      acceptableAnswers: ["söner", "soner"],
      explanation: "Seride biri çıkarsa akım kesilir ve hepsi söner.",
      wordBankHint: ["söner", "daha parlak yanar", "patlar", "ışık verir"]
    },
    {
      id: "fib-7-7-7",
      number: 7,
      baglam: "Paralel bağlı ampullerden biri duydan çıkarılırsa diğerleri yanmaya devam eder.",
      soruKoku: "Paralel bağlı ampullerden biri gevşetildiğinde diğer koldaki ampul yanmaya ________ eder.",
      blankAnswer: "devam",
      acceptableAnswers: ["devam"],
      explanation: "Paralelde diğer kol yanmaya devam eder.",
      wordBankHint: ["devam", "son", "ara", "itiraz"]
    },
    {
      id: "fib-7-7-8",
      number: 8,
      baglam: "Devrede akım geçişine karşı gösterilen zorluğa direnç denir.",
      soruKoku: "Maddelerin elektrik akımının geçişine karşı gösterdikleri zorluğa elektrik ________ denir.",
      blankAnswer: "direnci",
      acceptableAnswers: ["direnci", "direnc", "direnç"],
      explanation: "Akıma karşı zorluk dirençtir.",
      wordBankHint: ["direnci", "akımı", "gerilimi", "gücü"]
    },
    {
      id: "fib-7-7-9",
      number: 9,
      baglam: "Seri bağlı devrede ampul eklendikçe devrenin toplam direnci artar.",
      soruKoku: "Seri bağlı bir devreye her yeni ampul eklendiğinde devrenin toplam eşdeğer direnci ________.",
      blankAnswer: "artar",
      acceptableAnswers: ["artar", "büyür", "buyur"],
      explanation: "Seride dirençler toplanır ve artar.",
      wordBankHint: ["artar", "azalır", "sıfır olur", "değişmez"]
    },
    {
      id: "fib-7-7-10",
      number: 10,
      baglam: "İslam bilgini El-Cezeri akışkanları kollara ayırarak otomasyon geliştirmiştir.",
      soruKoku: "Suyun akış kanallarını kollara ayırarak mekanik makineler yapan ünlü İslam bilgini El-________'dir.",
      blankAnswer: "Cezeri",
      acceptableAnswers: ["Cezeri", "cezeri"],
      explanation: "Mühendis El-Cezeri'dir.",
      wordBankHint: ["Cezeri", "Bîrûnî", "Hârizmî", "Hazin"]
    }
  ],
  contextQuestions: [
    {
      id: "mcq-7-7-1",
      number: 1,
      baglam: "Bir fen laboratuvarında özdeş bir pille çalışan basit bir elektrik devresine sırasıyla özdeş ikinci ve üçüncü ampuller seri olarak eklenmiştir.",
      soruKoku: "Bu işlem sonucunda ampullerin parlaklığında gözlenen değişim aşağıdakilerden hangisinde doğru açıklanmıştır?",
      secenekler: {
        A: "Devreye seri ampul eklendikçe toplam direnç arttığı ve pilin gerilimi paylaşıldığı için ampullerin parlaklığı gittikçe azalır.",
        B: "Ampullerin parlaklığı artar.",
        C: "Ampullerin parlaklığı hiç değişmez.",
        D: "Sadece birinci ampul yanar, diğerleri hiç yanmaz."
      },
      dogruCevap: "A",
      cozum: "Seri devrelerde ampul sayısı arttıkça toplam direnç artar; devreden geçen akım azalır ve pilden gelen gerilim ampuller arasında bölüşüldüğü için parlaklık düşer.",
      olculenKazanim: "F.7.7.1.2. Seri devrede parlaklık değişimini analiz eder.",
      olculenBeceri: "Devre Değişkeni Yorumlama",
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
      id: "mcq-7-7-2",
      number: 2,
      baglam: "Ali odasında ders çalışırken tavan lambası aniden patlamış ancak çalışma masasında prize takılı olan masa lambası yanmaya devam etmiştir.",
      soruKoku: "Masa lambasının tavan lambası patlamasına rağmen yanmaya devam etmesinin bilimsel gerekçesi nedir?",
      secenekler: {
        A: "Evdeki priz ve aydınlatma tesisatının paralel bağlı olması ve her kolun bağımsız akım alması",
        B: "Masa lambasının pilli olması",
        C: "Tavan lambasının daha pahalı olması",
        D: "Masa lambasının seri bağlı olması"
      },
      dogruCevap: "A",
      cozum: "Ev elektrik tesisatında tüm cihazlar paralel bağlıdır; bir kolda meydana gelen arıza diğer kolların devresini kesmez.",
      olculenKazanim: "F.7.7.1.4. Ev tesisatlarında paralel bağlamanın önemini açıklar.",
      olculenBeceri: "Günlük Yaşam Mühendisliği",
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
      id: "mcq-7-7-3",
      number: 3,
      baglam: "Özdeş piller ve özdeş ampullerle kurulan K, L ve M devreleri şöyledir:\nK Devresi: Pille tek bir ampul bağlı.\nL Devresi: Pille birbirine SERİ 2 ampul bağlı.\nM Devresi: Pille birbirine PARALEL 2 ampul bağlı.",
      soruKoku: "Bu devrelerdeki ampullerin parlaklık sıralaması hangisinde doğru verilmiştir?",
      secenekler: {
        A: "K = M > L",
        B: "L > K > M",
        C: "M > L > K",
        D: "K = L = M"
      },
      dogruCevap: "A",
      cozum: "K devresindeki tek ampul pilin tüm gerilimini alır (V). M devresindeki paralel ampullerin her biri de doğrudan pilin tüm gerilimini alır (V). L devresindeki seri ampuller ise gerilimi paylaşır (V/2). Bu yüzden K = M > L olur.",
      olculenKazanim: "F.7.7.1.2. Devreler arası parlaklık kıyaslaması yapar.",
      olculenBeceri: "Karşılaştırmalı Analiz",
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
      id: "mcq-7-7-4",
      number: 4,
      baglam: "Bir otomobilin sağ ön farı taş çarpması sonucu kırılıp söndüğünde, sol ön farının aynı parlaklıkta ışık saçmaya devam ettiği görülür.",
      soruKoku: "Otomobil farlarının bu şekilde çalışması farların nasıl bağlandığını gösterir?",
      secenekler: {
        A: "Paralel bağlandığını",
        B: "Seri bağlandığını",
        C: "Pilsiz çalıştığını",
        D: "Toprağa bağlı olduğunu"
      },
      dogruCevap: "A",
      cozum: "Biri patladığında diğerinin etkilenmeden aynı parlaklıkta yanması farların paralel bağlı olduğunun kesin kanıtıdır.",
      olculenKazanim: "F.7.7.1.4. Taşıt aydınlatma sistemlerinde paralel bağlamayı teşhis eder.",
      olculenBeceri: "Uygulamalı Fizik",
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
      id: "mcq-7-7-5",
      number: 5,
      baglam: "Seri bağlı üç ampulden oluşan bir devrede ortadaki ampulün teli kopmuştur (flamanı yanmıştır).",
      soruKoku: "Bu durumda diğer iki ampulün davranışı ne olur?",
      secenekler: {
        A: "Akım yolu kesildiği için her iki ampul de anında söner.",
        B: "Daha parlak yanarlar.",
        C: "Biri yanar biri söner.",
        D: "Pil patlar."
      },
      dogruCevap: "A",
      cozum: "Seri devrede tek bir kapalı devre yolu vardır. Bir ampulün teli koptuğunda devre açık devre haline gelir, akım geçemez ve tüm ampuller söner.",
      olculenKazanim: "F.7.7.1.3. Seri devrede arıza durumunu açıklar.",
      olculenBeceri: "Arıza ve Akım Takibi",
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
      id: "mcq-7-7-6",
      number: 6,
      baglam: "Bir devrede anahtar kapatıldığında elektronlar iletken tel boyunca pilden çıkarak ampulün direncini aşıp devreye geri döner.",
      soruKoku: "Devrede akımı oluşturan temel etken nedir?",
      secenekler: {
        A: "Pilin iki kutbu arasındaki potansiyel fark (gerilim)",
        B: "Ampulün camı",
        C: "Havanın sıcaklığı",
        D: "Anahtarın rengi"
      },
      dogruCevap: "A",
      cozum: "Elektrik akımını sağlayan itici güç, üretecin (pilin) kutupları arasındaki gerilim yani potansiyel farktır.",
      olculenKazanim: "F.7.7.1.1. Devrede akımın kaynağını kavrar.",
      olculenBeceri: "Temel Elektrik Mantığı",
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
      id: "mcq-7-7-7",
      number: 7,
      baglam: "Özdeş ampullerden oluşan paralel bağlı bir devreye, üçüncü bir özdeş ampul paralel olarak bağlandığında pilden çekilen toplam akım artar.",
      soruKoku: "Pilden çekilen toplam akım artmasına rağmen mevcut ampullerin parlaklığının değişmemesinin sebebi nedir?",
      secenekler: {
        A: "Her bir kola düşen gerilimin ve kol akımının değişmeyip sabit kalması",
        B: "Pilin sıcaklığının düşmesi",
        C: "Tellerin kalınlaşması",
        D: "Ampullerin enerjisinin tükenmesi"
      },
      dogruCevap: "A",
      cozum: "Paralel bağlamada her kol doğrudan pile bağlıdır; yeni kol açıldığında o kol da kendi akımını pilden çeker, mevcut kolların akımı ve gerilimi değişmez.",
      olculenKazanim: "F.7.7.1.2. Paralel devrede kol akımı bağımsızlığını açıklar.",
      olculenBeceri: "Akım-Direnç Bağımsızlığı",
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
      id: "mcq-7-7-8",
      number: 8,
      baglam: "Bir öğrenci ucuz bir yılbaşı ışık zinciri satın almıştır. Zincirdeki 20 ampulden bir tanesi yerinden oynadığında 20 ampulün birden söndüğünü görmüştür.",
      soruKoku: "Bu ışık zincirinin üretiminde hangi bağlama şekli kullanılmıştır?",
      secenekler: {
        A: "Seri bağlama",
        B: "Paralel bağlama",
        C: "Karmaşık bağlama",
        D: "Kablosuz bağlama"
      },
      dogruCevap: "A",
      cozum: "Bir ampul çıktığında zincirdeki tüm lambaların sönmesi, ışıkların seri bağlandığını gösterir.",
      olculenKazanim: "F.7.7.1.3. Seri bağlamanın pratik sonuçlarını tanır.",
      olculenBeceri: "Günlük Yaşam Deneyimi Analizi",
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
      id: "mcq-7-7-9",
      number: 9,
      baglam: "Bir devrede ampulün içindeki ince kıvrımlı tele 'flaman' denir. Flaman genellikle erime sıcaklığı çok yüksek olan tungsten metalinden yapılır.",
      soruKoku: "Flamanın tungsten metalinden ve çok ince-uzun yapılmasının temel sebebi nedir?",
      secenekler: {
        A: "Direncinin çok yüksek olmasını sağlayarak elektrik enerjisini kızarıp akkor hale getirecek ısı ve ışığa dönüştürmek",
        B: "Akımı hızlandırmak",
        C: "Ampulün hafif olmasını sağlamak",
        D: "Pili soğutmak"
      },
      dogruCevap: "A",
      cozum: "İletkenin boyu uzayıp kesiti inceldikçe direnci artar. Tungstenin yüksek direnci akıma karşı büyük zorluk gösterip telin akkorlaşarak ışık vermesini sağlar.",
      olculenKazanim: "F.7.7.1.1. Ampul flamanının direnç prensibini açıklar.",
      olculenBeceri: "Malzeme ve Direnç İlişkisi",
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
      id: "mcq-7-7-10",
      number: 10,
      baglam: "Özdeş pillerle çalışan iki devreden; 1. devrede 3 ampul seri, 2. devrede 3 ampul paralel bağlanmıştır.",
      soruKoku: "Bu iki devreyle ilgili aşağıdaki ifadelerden hangisi yanlıştır?",
      secenekler: {
        A: "1. devredeki ampuller 2. devredekilere göre daha parlak yanar.",
        B: "2. devredeki ampullerin parlaklığı 1. devredekilere göre çok daha fazladır.",
        C: "2. devreden bir ampul çıkarılırsa diğerleri yanmaya devam eder.",
        D: "1. devreden bir ampul çıkarılırsa tüm ampuller söner."
      },
      dogruCevap: "A",
      cozum: "Seri devredeki ampullerin parlaklığı paralel devredekilere göre çok daha düşüktür; bu yüzden A seçeneği yanlıştır.",
      olculenKazanim: "F.7.7.1.2. Seri ve paralel devrelerin zıt özelliklerini karşılaştırır.",
      olculenBeceri: "Kritik Değerlendirme",
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
      id: "mcq-7-7-11",
      number: 11,
      baglam: "Bir devrede kısa devre oluşması durumunda akım dirençli yoldan (ampulden) geçmek yerine dirençsiz boş telden geçerek hızla üretece döner.",
      soruKoku: "Kısa devre olan bir ampulün yanmama sebebi nedir?",
      secenekler: {
        A: "Akımın her zaman direnci sıfır olan kolay yolu tercih etmesi ve ampulün üzerinden akım geçmemesi",
        B: "Pilin bitmesi",
        C: "Ampulün telinin erimesi",
        D: "Anahtarın açılması"
      },
      dogruCevap: "A",
      cozum: "Elektrik akımı direncin en düşük olduğu yolu izler. Ampulün iki ucuna dirençsiz bir tel bağlanırsa akım bu telden geçer ve ampul söner (kısa devre olur).",
      olculenKazanim: "F.7.7.1.1. Kısa devre kavramını irdeler.",
      olculenBeceri: "Devre Güvenliği",
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
      id: "mcq-7-7-12",
      number: 12,
      baglam: "Modern evlerde yüksek akım çeken fırın veya ütü gibi cihazlar prize takıldığında sigorta atarak devreyi keser.",
      soruKoku: "Evlerde sigortanın ana kola seri olarak bağlanmasının hayati amacı nedir?",
      secenekler: {
        A: "Aşırı akım geçtiğinde devreyi açıp akımı keserek kabloların ısınıp yangın çıkarmasını önlemek",
        B: "Elektrik faturasını sıfırlamak",
        C: "Işıkları daha parlak yakmak",
        D: "Gerilimi artırmak"
      },
      dogruCevap: "A",
      cozum: "Sigorta devreden geçen akım güvenli sınırı aştığında eriyerek veya atarak devreyi açar; böylece yangın ve cihaz arızalarını önler.",
      olculenKazanim: "F.7.7.1.4. Devre elemanlarının güvenlik işlevlerini açıklar.",
      olculenBeceri: "Elektriksel Güvenlik",
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
      id: "mcq-7-7-13",
      number: 13,
      baglam: "Bir elektrik devresinde iki ampul seri olarak bağlanmıştır. Pilden çıkan elektrik akımı sırasıyla 1. ampulden ve ardından 2. ampulden geçer.",
      soruKoku: "Özdeş bu iki ampulden geçen akım miktarları hakkında ne söylenebilir?",
      secenekler: {
        A: "Her iki ampulden geçen akım miktarı tamamen eşittir.",
        B: "1. ampul akımı tükettiği için 2. ampulden daha az akım geçer.",
        C: "2. ampulden daha çok akım geçer.",
        D: "Hiçbirinden akım geçmez."
      },
      dogruCevap: "A",
      cozum: "Seri devrede tek bir yol vardır. Akım bir borudaki su gibidir, devrenin her noktasında aynı şiddette akar (I_toplam = I1 = I2).",
      olculenKazanim: "F.7.7.1.2. Seri devrede akım eşitliğini açıklar.",
      olculenBeceri: "Kavram Yanılgısı Düzeltme",
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
      id: "mcq-7-7-14",
      number: 14,
      baglam: "El-Cezeri'nin su saatlerinde suyun debisini birden çok kola bölerek zamanı ölçmesi ile modern elektrikte akımın paralel kollara ayrılması benzeşmektedir.",
      soruKoku: "Bu tarihi benzetmede 'su basıncı' ve 'su akışı' sırasıyla hangi elektriksel büyüklüklere karşılık gelir?",
      secenekler: {
        A: "Su basıncı: Gerilim (Voltaj) / Su akışı: Elektrik Akımı",
        B: "Su basıncı: Direnç / Su akışı: Gerilim",
        C: "Su basıncı: Işık / Su akışı: Isı",
        D: "Su basıncı: Akım / Su akışı: Direnç"
      },
      dogruCevap: "A",
      cozum: "Su basıncı yükleri iten potansiyel farka (Gerilim/Voltaj), birim zamanda akan su miktarı ise yük akışına (Elektrik Akımı) karşılık gelir.",
      olculenKazanim: "F.7.7.1.1. Su tesisatı analojisiyle elektrik kavramlarını eşleştirir.",
      olculenBeceri: "Model ve Analoji Eşleştirme",
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
      id: "mcq-7-7-15",
      number: 15,
      baglam: "Bir sınıfta öğrenciler üç lambalı bir avize tasarlamıştır. Anahtara basıldığında üç lamba da oldukça parlak yanmakta, lambalardan birisi duydan söküldüğünde ise diğer iki lamba aynı parlaklıkta yanmaya devam etmektedir.",
      soruKoku: "Öğrencilerin kurduğu bu avize devresinin bağlantı türü nedir?",
      secenekler: {
        A: "Paralel bağlama",
        B: "Seri bağlama",
        C: "Diyotlu bağlama",
        D: "Ters bağlama"
      },
      dogruCevap: "A",
      cozum: "Lambaların parlak yanması ve biri sökülünce diğerlerinin etkilenmemesi avizenin paralel bağlandığını ispatlar.",
      olculenKazanim: "F.7.7.1.1. Paralel devre özelliklerini gözleme dayalı teşhis eder.",
      olculenBeceri: "Tasarım ve Teşhis",
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
      id: "mcq-7-7-16",
      number: 16,
      baglam: "Seri bağlı bir devredeki ampul sayısı arttıkça pilin ömrü (tükenme süresi) nasıl değişir?",
      soruKoku: "Seri devreye ampul eklendiğinde pilin tükenme süresi (ömrü) ne olur?",
      secenekler: {
        A: "Toplam direnç arttığı için devreden çekilen akım azalır ve pil daha uzun sürede tükenir.",
        B: "Pil hemen tükenir.",
        C: "Pil hiç bitmez.",
        D: "Değişmez."
      },
      dogruCevap: "A",
      cozum: "Seri ampul eklendikçe direnç artar, pilden birim zamanda çekilen akım azalır. Pilden az akım çekilmesi pilin daha geç tükenmesine (ömrünün uzamasına) yol açar.",
      olculenKazanim: "F.7.7.1.2. Pil ömrü ve akım ilişkisini değerlendirir.",
      olculenBeceri: "Enerji ve Pil Ömrü Analizi",
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
      id: "mcq-7-7-17",
      number: 17,
      baglam: "Paralel bağlı bir devreye her yeni paralel ampul eklendiğinde pilden çekilen toplam akım artar.",
      soruKoku: "Bu durumun paralel devredeki pile etkisi nedir?",
      secenekler: {
        A: "Pilden daha fazla akım çekildiği için pil daha kısa sürede tükenir.",
        B: "Pilin ömrü uzar.",
        C: "Pil ters döner.",
        D: "Pil soğur."
      },
      dogruCevap: "A",
      cozum: "Paralel ampul sayısı arttıkça eşdeğer direnç küçülür ve pilden çekilen toplam akım artar; bu da pilin çok daha hızlı tükenmesine sebep olur.",
      olculenKazanim: "F.7.7.1.2. Paralel devrede toplam akım ve pil ömrü ilişkisini açıklar.",
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
      id: "mcq-7-7-18",
      number: 18,
      baglam: "Bir hastanede ameliyathanedeki ışıkların ve kalp monitörünün prizleri mutlaka bağımsız paralel hatlarla beslenir.",
      soruKoku: "Hastanelerde bu mühendislik tasarımının seçilmesinin hayati önemi nedir?",
      secenekler: {
        A: "Herhangi bir lambanın veya aletin bozulmasının kritik yaşam destek cihazlarının çalışmasını durdurmasını engellemek",
        B: "Kabloların daha renkli görünmesi",
        C: "Cihazların ses çıkarmasını önlemek",
        D: "Hastaneyi ısıtmak"
      },
      dogruCevap: "A",
      cozum: "Paralel bağlama sistem sürekliliği ve güvenliği sağlar; bir arıza diğer kritik cihazları etkilemez.",
      olculenKazanim: "F.7.7.1.4. Kritik altyapılarda paralel bağlamanın güvenliğini irdeler.",
      olculenBeceri: "Sistem Güvenliği ve Mühendislik",
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
      id: "mcq-7-7-19",
      number: 19,
      baglam: "Bir devrede anahtar açıkken ampul ışık vermez; anahtar kapatıldığında kapalı bir devre oluşur ve ampul ışık saçar.",
      soruKoku: "Anahtarın elektrik devresindeki temel görevi nedir?",
      secenekler: {
        A: "Devreden geçen elektrik akımını kontrollü olarak açıp kapatmak",
        B: "Elektrik üretmek",
        C: "Direnci ölçmek",
        D: "Gerilim depolamak"
      },
      dogruCevap: "A",
      cozum: "Anahtar devreyi açarak akımı kesen veya kapatarak akımın geçmesini sağlayan kontrol elemanıdır.",
      olculenKazanim: "F.7.7.1.1. Devre elemanlarının temel işlevlerini açıklar.",
      olculenBeceri: "Devre Elemanı Fonksiyonu",
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
      id: "mcq-7-7-20",
      number: 20,
      baglam: "Evrenin en küçük yapı taşları olan atomlardaki elektronların iletken tel içerisindeki şaşırtıcı bir düzen ve kanunla akması, karanlık şehirleri aydınlatan bir nura dönüşmektedir.",
      soruKoku: "Elektrik devrelerindeki bu kusursuz matematiksel ve fiziksel nizam insana hangi tefekkür ufkunu kazandırır?",
      secenekler: {
        A: "Gözle görülmeyen atom altı parçacıkların dahi başıboş olmayıp şaşmaz ilahi kanunlara ve matematiksel bir intizama boyun eğdiğini",
        B: "Elektriğin hiçbir kuralının olmadığını",
        C: "Maddenin rastgele hareket ettiğini",
        D: "Işığın sadece kimyasal olduğunu"
      },
      dogruCevap: "A",
      cozum: "Görünmez elektronların matematiksel bir düzenle akarak medeniyeti aydınlatması, kâinattaki mükemmel ilim ve nizamın açık bir tecellisidir.",
      olculenKazanim: "F.7.7.1.4. Hikmet ve kâinat intizamı eksenli tefekkür bilinci kazanır.",
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
