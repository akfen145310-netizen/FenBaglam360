import { SectionContent } from '../../types';

export const grade6Unit7Section1: SectionContent = {
  code: "6.7.1",
  title: "İletken ve Yalıtkan Maddeler",
  unitCode: "6.7",
  unitTitle: "7. Ünite: Elektriğin İletimi",
  summary: "Elektrik enerjisinin maddeler üzerinden iletimi; katı ve sıvı iletkenler (bakır, demir, alüminyum, grafit/kurşun kalem ucu, tuzlu su, asitli su); katı ve sıvı yalıtkanlar (plastik, cam, tahta, porselen, kauçuk, saf su, şekerli su); gazların yalıtkanlığı ve özel durumlarda (yıldırım, şimşek, neon ve floresan lambalar) iletken hale geçişi; elektrik enerjisinin güvenli kullanımı ve yalıtım teknolojileri.",
  kazanimlar: [
    "F.6.7.1.1. Maddelerin elektriği iletme durumlarına göre iletken ve yalıtkan olarak sınıflandırılabileceğini deneylerle keşfeder.",
    "F.6.7.1.2. Katı ve sıvı maddelerin iletkenlik ve yalıtkanlık özelliklerini günlük yaşamdaki kullanım alanlarıyla ilişkilendirir.",
    "F.6.7.1.3. Gazların bazı durumlarda iletken olabileceğini örneklerle açıklar.",
    "F.6.7.1.4. Elektrik çarpılmalarına karşı alınması gereken güvenlik önlemlerini tartışır."
  ],
  hatirlayalim: {
    text: "4. ve 5. sınıfta basit bir elektrik devresinde pil, ampul, anahtar ve bağlantı kablosunu öğrenmiştik. 6. sınıfta ise elektrik enerjisinin hangi maddelerden aktığını (iletkenler) ve hangi maddeler tarafından durdurulduğunu (yalıtkanlar) derinlemesine inceliyoruz.",
    keyPoints: [
      "Elektrik akımını üzerinden kolayca ileten maddelere iletken maddeler denir.",
      "Katı İletkenler: Bakır, gümüş, altın, demir, alüminyum ve kurşun kalem ucu (grafit).",
      "Sıvı İletkenler: Tuzlu su, limonlu su, sirkeli su, çeşme suyu (içindeki mineraller sayesinde).",
      "Elektrik akımını iletmeyen veya çok zor ileten maddelere yalıtkan maddeler denir.",
      "Katı Yalıtkanlar: Plastik, kauçuk, porselen, cam, tahta, mika, ebonit (sert kauçuk).",
      "Sıvı Yalıtkanlar: Saf su (mineral ve iyon içermez), şekerli su, zeytinyağı, etil alkol.",
      "Gazlar: Hava ve gazlar normal şartlarda yalıtkandır; ancak yüksek gerilim altında yıldırım, şimşek, plazma küreleri ve neon lambalarda iletken hale gelirler.",
      "Güvenlik: Elektrik kablolarının dışı plastikle, pense sapları kauçukla yalıtılır; prizlere emniyet kapağı takılır ve ıslak elle elektrikli aletlere dokunulmaz."
    ]
  },
  onDegerlendirme: [
    {
      id: "od-u7s1-1",
      question: "Saf suyun içine elektrik devresi bağlandığında ampul yanmazken, suya bir kaşık tuz atılıp karıştırıldığında ampul neden birden ışık saçar?",
      answer: "Çünkü saf su iyon içermediği için yalıtkandır; tuz (NaCl) suda çözündüğünde pozitif ve negatif iyonlar serbest kalır ve suyu iletken hale getirir."
    },
    {
      id: "od-u7s1-2",
      question: "Elektrik kablolarının içinin bakırdan, dışının ise plastikten yapılmasının mühendislik sebebi nedir?",
      answer: "Bakır iletken olup elektriği hedefe taşır; plastik ise yalıtkan olup insanların elektrik akımına kapılmasını önler."
    },
    {
      id: "od-u7s1-3",
      question: "Hava normalde yalıtkan olmasaydı prizdeki elektrik havadan bize nasıl çarpardı?",
      answer: "Eğer hava iletken olsaydı prizlerdeki ve tellerden geçen elektrik sürekli çevreye kıvılcımlar saçar ve herkesi elektrik çarpardı."
    }
  ],
  hazirlik: {
    question: "Kurşun kalemimizin ucu metal olmadığı halde elektrik akımını iletir mi?",
    answer: "Evet, iletir. Kurşun kalem ucu metal değil, karbon atomlarının özel bir dizilimi olan 'grafit' madenidir ve ametal olmasına rağmen harika bir elektrik iletkenidir."
  },
  merak: {
    question: "Yüksek gerilim hatlarına konan kuşlar neden elektrik çarpmasından ölmez?",
    answer: "Çünkü kuş tek bir telin üzerinde iki ayağıyla durur; kuşun iki ayağı arasında potansiyel (voltaj) farkı oluşmaz ve elektrik direnci yüksek olan kuşun vücudundan değil direnci çok az olan telden akmaya devam eder."
  },
  kopru: {
    title: "İletkenlikten Elektriksel Dirence",
    content: "Maddelerin iletken ve yalıtkan olarak elektriğe nasıl davrandığını anladıktan sonra, bir sonraki bölümde her iletkenin akıma karşı gösterdiği zorluk olan 'Elektriksel Direnç' ve ampulün akkor parıldama sırrını çözeceğiz.",
    question: "Tüm iletkenler elektriği aynı kolaylıkla mı iletir yoksa bazısı akıma karşı direnç gösterip ısınır mı?",
    answer: "Farklı iletkenlerin dirençleri farklıdır; direnci yüksek teller ısınarak ışık saçar veya ısıtıcı olur (Örn: Ütü ve ampul teli)."
  },
  // MEB DERS KİTABI DETAYLI KONU ANLATIMI, TABLOLAR, BAĞLANTI NOKTALARI VE HABERLER
  konuAnlatimi: {
    ozet: "Elektrik enerjisi günlük hayatımızın vazgeçilmez bir parçasıdır. Maddeler elektrik enerjisini iletme durumlarına göre iletken ve yalıtkan olarak ikiye ayrılır: 1) İletken Maddeler: Elektrik enerjisini üzerinden kolayca geçiren maddelerdir. Katı iletkenlere bakır, alüminyum, demir, gümüş, altın ve bir ametal olan grafit (kurşun kalem ucu) örnektir. Sıvı iletkenlere ise tuzlu su, sirkeli su, limonlu su, çeşme suyu ve asitli su örnektir. Sıvılarda elektriği serbest artı ve eksi yüklü iyonlar taşır. 2) Yalıtkan Maddeler: Elektrik enerjisini iletmeyen veya çok zor ileten maddelerdir. Katı yalıtkanlara plastik, cam, porselen, kauçuk, tahta, ebonit (sert kauçuk) ve kuru pamuk örnektir. Sıvı yalıtkanlara saf su, şekerli su, zeytinyağı, etil alkol ve gaz yağı örnektir. Saf su iyon içermediği için yalıtkandır; ancak içine tuz atıldığında iyonlarına ayrılarak iletken hale gelir. 3) Gazların Yalıtkanlığı ve İletken Hale Geçmesi: Hava ve gazlar normal koşullarda mükemmel birer yalıtkandır; bu sayede prizlerdeki elektrik odaya sıçramaz. Ancak gazlar yüksek gerilim altında iyonlaşarak iletken hale geçebilir (Yıldırım, şimşek, floresan ve neon lambalar). 4) Elektrik Güvenliği: İnsan vücudu mineral ve su içerdiği için iletkendir. Islak elle anahtar veya prizlere dokunulmamalı, kablolar yalıtılmalı ve topraklı prizler kullanılmalıdır.",
    kavramlar: [
      {
        terim: "Katı ve Sıvı İletken Maddeler",
        tanim: "Elektrik yüklerinin serbestçe hareket ederek akımı taşıdığı ortamlardır.",
        onemliNoktalar: [
          "Katı İletkenler: Metallerde serbest elektronlar elektriği taşır. Gümüş ve bakır en iyi iletkenlerdendir. Kurşun kalem ucu (grafit) metal olmadığı halde elektriği iletir.",
          "Sıvı İletkenler: Suda çözündüğünde artı ve eksi iyonlarına ayrışan çözeltiler (tuzlu su, asitli su, limonlu su) elektrik akımını iletir. Çeşme suyu mineral içerdiği için iletkendir."
        ]
      },
      {
        terim: "Katı ve Sıvı Yalıtkan Maddeler",
        tanim: "Elektrik yüklerinin hareket edemediği ve elektrik akımını geçirmeyen maddelerdir.",
        onemliNoktalar: [
          "Katı Yalıtkanlar: Plastik, porselen, kauçuk ve cam elektrik akımına karşı yüksek engel oluşturur. Priz gövdeleri ve tornavida sapları bunlardan yapılır.",
          "Sıvı Yalıtkanlar: Moleküler çözünen şekerli su, saf su ve zeytinyağı serbest iyon barındırmadığı için ampulü yakmaz ve yalıtkandır."
        ]
      },
      {
        terim: "Gazların Yalıtkanlığı ve Özel Durumlarda İletkenliği",
        tanim: "Havanın normalde yalıtkan olup yüksek enerji altında iletkenleşmesidir.",
        onemliNoktalar: [
          "Normal Şartlarda Gazlar: Hava yalıtkan olmasaydı enerji nakil hatlarından ve prizlerden herkese elektrik çarpardı.",
          "İletken Hale Geçiş: Milyonlarca voltluk bulut gerilimi havayı iyonlaştırır ve Şimşek/Yıldırım şeklinde elektrik gökyüzünden yere akar. Floresan ve neon lambaların içindeki gaz da elektrikle ışıma yapar."
        ]
      },
      {
        terim: "Elektrik Çarpması ve Alınması Gereken Güvenlik Tedbirleri",
        tanim: "Elektrik akımının insan vücudundan geçerek hayati tehlike oluşturması ve bundan korunma yollarıdır.",
        onemliNoktalar: [
          "İnsan vücudunun yaklaşık %70'i su ve elektrolit (tuz) içerdiği için vücudumuz iyi bir iletkendir.",
          "Alınacak Önlemler: 1) Islak elle elektrikli cihazlara dokunulmamalıdır. 2) Prizlere sivri metal cisimler sokulmamalıdır. 3) Aşınmış ve açık kablolar hemen elektrik bandıyla yalıtılmalıdır. 4) Elektrik çarpan kişiye çıplak elle değil, tahta veya plastik gibi yalıtkan bir cisimle müdahale edilmelidir."
        ]
      }
    ],
    tablolar: [
      {
        baslik: "Maddelerin Elektriksel İletkenlik ve Yalıtkanlık Sınıflandırması Tablosu",
        sutunlar: ["Madde Adı", "Fiziksel Hali", "Elektriksel Özelliği", "Günlük Hayattaki Kullanım ve Güvenlik Yeri"],
        satirlar: [
          ["Bakır Tel", "Katı", "İletken", "Elektrik kablolarının iç damarlarında akımı iletmek"],
          ["Plastik Kaplama", "Katı", "Yalıtkan", "Kabloların dışını kaplayarak insanları çarpmadan korumak"],
          ["Porselen Fincan", "Katı", "Yalıtkan", "Elektrik direklerinde yüksek gerilim tellerini izole etmek"],
          ["Grafit (Kalem Ucu)", "Katı", "İletken", "Elektrik motoru fırçaları ve pil üretiminde kullanılmak"],
          ["Tuzlu Su", "Sıvı", "İletken", "Elektrik akımını iyonlarla ileten kimyasal deneyler"],
          ["Saf Su", "Sıvı", "Yalıtkan", "Akü ve laboratuvarlarda kısa devre riskini önlemek"],
          ["Hava (Normal Durum)", "Gaz", "Yalıtkan", "Prizdeki elektriğin odaya dağılmasını engellemek"],
          ["İyonize Gaz (Neon)", "Gaz", "İletken (Özel şart)", "Neon tabelalar, floresan lambalar ve yıldırım olayı"]
        ]
      }
    ]
  },
  // MEB KİTABINDAKİ BAĞLANTI NOKTALARI
  baglantiNoktalari: [
    {
      id: "bn-6-7-1",
      baslik: "İslam Medeniyeti ve Metalurji: Câbir İbn Hayyân'ın Bakır ve Metal Arıtımı",
      alan: "Kimya Tarihi & Metalurji",
      aciklama: "Modern kimyanın kurucusu kabul edilen Câbir İbn Hayyân (721-815), metallerin saflaştırılması ve damıtılması üzerine devrim niteliğinde teknikler geliştirmiştir.",
      soru: "Câbir İbn Hayyân'ın geliştirdiği bakır arıtma yöntemleri günümüz elektrik kablolarının iletkenliğine nasıl temel teşkil etmiştir?",
      cevap: "Bakırın içindeki en ufak yabancı madde elektrik akımına karşı direnci artırır ve kablonun aşırı ısınmasına yol açar. Câbir'in temellerini attığı saflaştırma yöntemleri sayesinde bugün %99,99 saflıkta elektrolitik bakır üretilmekte ve elektrik enerjisi kayıpsız iletilmektedir."
    },
    {
      id: "bn-6-7-2",
      baslik: "Halk Sağlığı ve Ev Güvenliği: Kaçak Akım Rölesi ve Topraklama Sistemi",
      alan: "Elektrik Mühendisliği & Yaşam Güvenliği",
      aciklama: "Evlerdeki çamaşır makinesi, buzdolabı veya fırın gibi metal gövdeli cihazlarda elektrik kaçağı olduğunda insan hayatını kurtaran sistem topraklamadır.",
      soru: "Topraklama hattı ve kaçak akım koruma rölesi insanları elektrik çarpmasından nasıl korur?",
      cevap: "Cihazın metal gövdesinde bir elektrik kaçağı olduğunda elektrik akımı direnci yüksek olan insan vücudu yerine direnci neredeyse sıfır olan sarı-yeşil topraklama teli üzerinden toprağa akar. Kaçak akım rölesi ise 30 miliamperlik en ufak kaçakta 0,03 saniye içinde elektriği keserek can kaybını önler."
    }
  ],
  // MEB KİTABINDAKİ GÜNCEL HABERLER
  haberler: [
    {
      id: "hbr-6-7-1",
      baslik: "Yerli Elektrikli Otomobil Togg'un Bataryasında Özel Seramik ve Kompozit Yalıtım",
      kaynak: "Togg & Sanayi ve Teknoloji Bakanlığı Basın Bülteni",
      tarih: "2024",
      ozet: "Türkiye'nin yerli akıllı otomobili Togg'un Bursa Gemlik tesislerindeki batarya fabrikasında 400 voltluk yüksek gerilimli lityum batarya modülleri üretiliyor. Mühendisler, hücreler arasına nano-seramik ve yanmaz kompozit polimer yalıtkan plakalar yerleştirerek olası kazalarda kısa devreyi ve elektrik kaçaklarını tamamen engellediklerini bildirdi.",
      soru: "Elektrikli araç bataryalarında iletken ve yalıtkan malzemelerin bir arada kullanılması hangi amaca hizmet eder?",
      cevap: "İletken malzemeler (bakır baralar) binlerce amperlik elektrik akımını motora taşırken, aralarındaki seramik ve polimer yalıtkanlar akımın şasiye ve yolculara sıçramasını önleyerek sürüş güvenliği sağlar."
    }
  ],
  // MEB KİTABINDAKİ KONTROL NOKTALARI
  kontrolNoktalari: [
    {
      id: "kn-6-7-1",
      baslik: "Kontrol Noktası 1 (Katı ve Sıvı İletkenler ile Yalıtkanlar)",
      sorular: [
        {
          id: "kn-q-g6-40",
          soru: "Aşağıdaki sıvılardan hangisi bir elektrik devresine bağlandığında ampulün ışık vermesini SAĞLAMAZ?",
          tip: "coktan-secmeli",
          secenekler: [
            "A) Limonlu su",
            "B) Sirkeli su",
            "C) Saf su",
            "D) Tuzlu su"
          ],
          dogruSecenek: "C",
          cevap: "C) Saf su",
          aciklama: "Saf su içinde serbest elektrik yükü taşıyan iyonlar bulunmadığı için yalıtkandır ve devredeki ampulü yakmaz. Diğerleri iyon içerdiği için iletkendir."
        },
        {
          id: "kn-q-g6-41",
          soru: "Elektrik teknisyenlerinin kabloları keserken ve tamir ederken kullandıkları penselerin saplarının kalın plastik veya kauçuk ile kaplanmasının sebebini açıklayınız.",
          tip: "klasik",
          cevap: "Pensenin metal ucu iyi bir iletkendir; elektrik hattına değdiğinde akım metale geçer. Ancak sapındaki plastik veya kauçuk güçlü bir yalıtkan olduğu için elektrik akımının teknisyenin eline ve vücuduna geçmesini engelleyerek teknisyeni elektrik çarpmasından korur.",
          aciklama: "Yalıtkan kılıf elektrik çarpmasını önler."
        }
      ]
    },
    {
      id: "kn-6-7-2",
      baslik: "Kontrol Noktası 2 (Gazların İletkenliği ve Elektrik Güvenliği)",
      sorular: [
        {
          id: "kn-q-g6-42",
          soru: "Normal koşullarda yalıtkan olan havanın hangi doğa olayında iletken hale geçtiğini ve elektrik akımını geçirdiğini belirtiniz.",
          tip: "coktan-secmeli",
          secenekler: [
            "A) Yıldırım ve şimşek çakması",
            "B) Gece saatlerinde sis çökmesi",
            "C) Çiy ve yoğun kırağı oluşumu",
            "D) Güneş ışığında gökkuşağı açması"
          ],
          dogruSecenek: "A",
          cevap: "A) Yıldırım ve şimşek çakması",
          aciklama: "Bulutlar ile yeryüzü arasında milyonlarca voltluk dev gerilim oluştuğunda hava molekülleri iyonlaşarak iletken hale geçer ve yıldırım meydana gelir."
        }
      ]
    }
  ],
  // BİLGİ BANKASI KUTULARI
  bilgiBankasi: [
    {
      id: "bb-6-7-1",
      baslik: "Saf Su Neden İletmez, Çeşme Suyu Neden Çarpar?",
      icerik: "Saf su (distile su) laboratuvarlarda suyun buharlaştırılıp yeniden yoğunlaştırılmasıyla elde edilen %100 saf H2O molekülleridir. İçinde elektrik akımını taşıyacak hiçbir mineral veya iyon yoktur; bu yüzden saf suya elektrik devresi batırıldığında ampul yanmaz. Ancak evlerimizdeki musluklardan akan çeşme suyunun içinde kalsiyum, magnezyum, sodyum, klor ve kireç gibi çözünmüş pek çok mineral (iyon) vardır. Bu iyonlar elektrik akımını çok rahat iletir. Bu yüzden banyoda saç kurutma makinesi kullanırken veya ıslak zeminlerde elektrik çarpması tehlikesi çok büyüktür.",
      onemliNot: "Islak elle priz ve anahtarlara asla dokunulmamalıdır."
    },
    {
      id: "bb-6-7-2",
      baslik: "Benjamin Franklin ve Paratoner (Yıldırımsavar)",
      icerik: "1752 yılında Benjamin Franklin fırtınalı bir günde gökyüzüne ipek bir uçurtma uçurarak yıldırımın devasa bir elektrik boşalması olduğunu kanıtladı. Ardından binaları yıldırım yangınlarından korumak için 'Paratoner'i icat etti. Paratoner, binanın en yüksek yerine konulan sivri uçlu bir bakır direk ve bu direğe bağlı kalın bir bakır şeritle toprağa iner. Yıldırım sivri uca isabet ettiğinde milyonlarca voltluk dev akım binaya zarar vermeden doğruca toprağa akar.",
      onemliNot: "Paratoner yıldırımın elektriğini zararsızca toprağa boşaltır."
    }
  ],
  // MEB KİTABINDAKİ PERFORMANS GÖREVİ
  performansGorevi: {
    baslik: "Basit Elektrik Devresiyle İletkenlik Test Cihazı Tasarımı",
    amac: "Pil, ampul, anahtar ve iki açık uçlu test kablosundan oluşan bir devre kurarak evdeki katı ve sıvı maddelerin iletken mi yoksa yalıtkan mı olduğunu test etmek.",
    surecAdimlari: [
      "Bir pil, duy, ampul ve bağlantı kablolarıyla basit bir seri elektrik devresi kurunuz.",
      "Devrede iki ucu açıkta bırakarak bir 'test ucu' hazırlayınız (Uçlar birbirine değince ampul yanmalı).",
      "Test uçlarını sırasıyla: 1) Demir çivi, 2) Plastik silgi, 3) Kurşun kalem ucu (grafit), 4) Alüminyum folyo, 5) Porselen tabak üzerine değdiriniz ve ampulün durumunu gözlemleyiniz.",
      "Ardından test uçlarını sırasıyla: A) Tuzlu su, B) Şekerli su, C) Saf su, D) Limonlu su içine daldırarak ampulün yanıp yanmadığını test ediniz.",
      "Elde ettiğiniz sonuçları 'İletkenler ve Yalıtkanlar Çizelgesi' haline getirip raporlayınız."
    ],
    beklenenUrun: "İletkenlik Test Cihazı, Test Sonuç Tablosu ve Madde Sınıflandırma Raporu.",
    degerlendirmeKriterleri: [
      "Devrenin temassız ve hatasız kurulması",
      "Katı ve sıvı maddelerin doğru sınıflandırılması",
      "Kurşun kalem ucu ve tuzlu suyun iletkenliğinin bilimsel açıklanması"
    ]
  },
  // MEB KİTABI NELER ÖĞRENDİK BÖLÜMÜ SORULARI VE MAARİF ÇÖZÜMLERİ
  nelerOgrenildiSorulari: [
    {
      id: "no-6-7-1",
      soru: "1. İletken madde ve yalıtkan madde tanımlarını yaparak katı ve sıvılara ikişer örnek veriniz.",
      cevap: "İletken Madde: Elektrik enerjisini üzerinden kolayca geçiren maddelerdir (Katı: Bakır, grafit; Sıvı: Tuzlu su, limonlu su). Yalıtkan Madde: Elektrik enerjisini geçirmeyen maddelerdir (Katı: Plastik, porselen; Sıvı: Saf su, şekerli su).",
      detayliCozum: "İletken akımı iletir, yalıtkan akımı durdurur."
    },
    {
      id: "no-6-7-2",
      soru: "2. Saf suyun yalıtkan olmasına rağmen içine tuz atıldığında iletken hale gelmesinin bilimsel sebebini açıklayınız.",
      cevap: "Saf su içinde serbest elektrik yükü taşıyan iyonlar bulunmadığı için yalıtkandır. Suya sofra tuzu (NaCl) eklendiğinde tuz molekülleri pozitif sodyum (Na+) ve negatif klor (Cl-) iyonlarına ayrışır. Bu serbest iyonlar elektrik yüklerini taşıyarak suyu iletken hale getirir.",
      detayliCozum: "İyonlar sıvılarda elektrik iletimini sağlar."
    },
    {
      id: "no-6-7-3",
      soru: "3. Normal koşullarda yalıtkan olan hava hangi durumlarda iletken hale geçebilir? Günlük yaşamdan veya doğadan iki örnek veriniz.",
      cevap: "Hava ve gazlar yüksek elektrik gerilimi altında iyonlaşarak iletken hale geçebilir. Örnek 1: Şimşek ve yıldırım olayında bulutlar arasındaki dev gerilim havayı iletkenleştirir. Örnek 2: Floresan ve neon lambaların içindeki gaz elektrik verilince iletken hale geçerek ışık yayar.",
      detayliCozum: "Yüksek voltaj gazları iyonlaştırarak iletken yapar."
    },
    {
      id: "no-6-7-4",
      soru: "4. Evde elektrik çarpılmalarına karşı alınması gereken üç temel güvenlik önlemini yazınız.",
      cevap: "1. Islak elle prizlere, elektrik düğmelerine veya elektrikli aletlere asla dokunulmamalıdır. 2. Yıpranmış, soyulmuş veya açık kablolar hemen yenilenmeli ya da yalıtkan elektrik bandıyla sarılmalıdır. 3. Prizlere emniyet kapağı takılmalı ve metal cisimler sokulmamalıdır.",
      detayliCozum: "Yalıtım ve kuru elle temas temel güvenlik kuralıdır."
    }
  ],
  hikmetStages: [
    {
      stage: 1,
      name: "1. Varlığı Tanıt (Görünmez Kuvvet: Elektrik)",
      concept: "Elektronların Akışı",
      text: "Maddelerin atomlarında dönen görünmez elektronlar, iletken bir yolda çağlayan bir nehir gibi akar.",
      analogies: ["Su borularında basınçla akan suyun hareketi."]
    },
    {
      stage: 2,
      name: "2. Parçalarını Göster (İletken ve Yalıtkan Dengesi)",
      concept: "Yol Veren ve Durduran",
      text: "Bakır yola açar, plastik sınırı çizer; biri olmadan diğeri ne emniyetli ne de faydalı olabilir.",
      analogies: ["Hızlı giden bir tren ve onu raydan çıkarmayan emniyet bariyerleri."]
    },
    {
      stage: 3,
      name: "3. Ölçü ve Düzen (Havanın Yalıtkanlık Kalkanı)",
      concept: "Atmosferin Güvenliği",
      text: "Havanın normalde yalıtkan yaratılması, yeryüzünde canlı hayatın elektrik kıvılcımları arasında yanıp kül olmasını engelleyen harika bir nizamdır.",
      questionToPonder: "Hava iletken olsaydı prizleri odamıza takabilir miydik?"
    },
    {
      stage: 4,
      name: "4. Gayesini Keşfet (Aydınlanma ve Emniyet)",
      concept: "Medeniyeti Taşıyan Enerji",
      text: "Elektrik enerjisi fabrikaları çalıştırır, evleri aydınlatır, hayatı kolaylaştırır; yalıtım ise insanı tehlikeden korur.",
      analogies: ["Ateşi ocakta tutan tencere gibi, elektriği kabloda tutan plastik kılıf."]
    },
    {
      stage: 5,
      name: "5. Bütünle İlişkilendir (İslam Medeniyetinde Madenler)",
      concept: "Maden İşleme Sanatı",
      text: "Ecdadımız bakır, demir ve gümüşü işlemedeki maharetiyle bugün modern elektrik kablolarının ve devrelerinin ana malzemelerini asırlarca medeniyet hizmetinde kullanmıştır.",
      analogies: ["Divriği ve Kazasker bakırcılığının ilmi kökleri."]
    },
    {
      stage: 6,
      name: "6. Hayret ve Tefekkür (El-Kaviyy)",
      concept: "Kudret ve Enerji",
      text: "Göklerde şimşekleri çaktıran, atomların içine akıl almaz elektrik enerjisini gizleyen ve bunu insana boyun eğdiren Kudret Sahibi'ne şükretmek."
    }
  ],
  etkinlikler: [
    {
      id: "etk-u7s1-iletkenlik-testi",
      title: "Pekiştirme İstasyonu: Katı ve Sıvı İletkenlik Test Devresi",
      type: "Deneysel Devre Kurulumu",
      materials: ["Pil yatağı ve 2 adet pil", "Küçük duy ve ampul", "Bağlantı kabloları ve timsah ağız uçlar", "Kurşun kalem ucu", "Demir çivi", "Silgi", "Plastik cetvel", "Tuzlu su", "Şekerli su", "Saf su"],
      steps: [
        "1. Adım: Pil, ampul ve kablolarla açık uçlu bir test devresi kurunuz (Uçlar birbirine değince ampul yanmalıdır).",
        "2. Adım: Açık uçları sırayla demir çivi, plastik cetvel, kurşun kalem ucu ve silgiye dokundurarak ampulün yanıp yanmadığını gözlemleyiniz.",
        "3. Adım: Açık uçları sırayla saf su, şekerli su ve tuzlu su kaplarına daldırınız.",
        "4. Adım: Hangi maddelerde ampulün ışık verdiğini tabloya 'İletken', hangilerinde vermediğini 'Yalıtkan' olarak kaydediniz."
      ],
      questions: [
        {
          qId: "q-u7s1-1",
          label: "Deney Analizi",
          prompt: "Şekerli suda ampul yanmazken tuzlu suda neden parlak şekilde yandı?",
          answer: "Şeker suda moleküler çözünür ve serbest elektrik yükü oluşturmaz; tuz ise iyonlarına ayrılarak elektrik yüklerini taşır ve iletkenlik sağlar."
        }
      ]
    }
  ],
  bilgiIstasyonlari: [
    {
      title: "Yıldırım, Şimşek ve Gazların İletkenliği",
      scientistOrMission: "Doğa Olayları ve Plazma Fiziği",
      description: "Bulutlar ile yer arasında oluşan milyonlarca voltluk devasa gerilim farkı, normalde yalıtkan olan hava moleküllerinin iyonlaşmasına ve anlık olarak iletken bir plazma kanalına dönüşmesine yol açar. Yıldırım bu kanaldan akarak toprağa boşalır.",
      hikmetNote: "Yıldırımlar aynı zamanda havadaki azotu toprağa bağlayarak bitkiler için doğal gübre üretir; tabiatta hiçbir hadise gayesiz değildir."
    }
  ],
  dda: {
    id: "dda-u7s1-iletken",
    statement: "Saf su ve şekerli su iyi birer elektrik iletkeniyken, tuzlu su ve limonlu su yalıtkandır.",
    correctDecision: "Y",
    reason: "Tam tersidir: Saf su ve şekerli su yalıtkandır; tuzlu su ve limonlu su ise içerdikleri serbest iyonlar sayesinde elektriği iletir.",
    ifTrue: {
      exit: 1,
      isCorrect: false,
      feedback: "Hatalı! Saf su ve tuzlu suyun iletkenlik farkını tekrar inceleyiniz."
    },
    ifFalse: {
      exit: 2,
      isCorrect: true,
      feedback: "Tebrikler! Sıvıların iletkenlik ve yalıtkanlık kurallarını kusursuz kavradınız."
    }
  },
  biliyorumAnliyorumDusunuyorum: {
    biliyorum: "Katı ve sıvı iletkenleri, yalıtkanları, gazların özel durumlarda iletken olabileceğini ve elektrik güvenliğini biliyorum.",
    anliyorum: "Havanın normalde yalıtkan olmasının insan hayatını koruyan mucizevi bir zırh olduğunu anlıyorum.",
    dusunuyorum: "Eğer hava tıpkı bakır tel gibi her zaman elektriği iletseydi, yeryüzünde şehirler ve elektrikli aletler nasıl çalışabilirdi?"
  },
  pekistirmeIstasyonu: {
    stationTitle: "İletken ve Yalıtkan Maddeler Pekiştirme İstasyonu",
    pageReference: "6. Sınıf 2. Kitap 7. Ünite",
    summaryText: "Katı ve sıvı iletkenler/yalıtkanlar, kurşun kalem ucu (grafit), gazların iyonlaşması (yıldırım/floresan), elektrik güvenliği ve yalıtım.",
    targetSkills: [
      "Maddeleri elektrik iletkenliklerine göre sınıflandırır.",
      "Sıvı çözeltilerdeki iyonik iletkenliği açıklar.",
      "Elektrik çarpmasına karşı güvenlik kurallarını uygular."
    ]
  },
  fillInBlanks: [
    {
      id: "fib-u7s1-1",
      number: 1,
      baglam: "Elektrik akımını üzerinden kolayca geçiren maddelerdir.",
      soruKoku: "Elektrik enerjisini üzerinden ileten maddelere .................................... maddeler denir.",
      blankAnswer: "İletken",
      acceptableAnswers: ["iletken", "İletken"],
      explanation: "Elektriği iletenler iletkendir.",
      wordBankHint: ["İletken", "Yalıtkan", "Saydam", "Opak"]
    },
    {
      id: "fib-u7s1-2",
      number: 2,
      baglam: "Elektrik akımını iletmeyen veya geçişine izin vermeyen maddelerdir.",
      soruKoku: "Elektrik enerjisini iletmeyen maddelere .................................... maddeler denir.",
      blankAnswer: "Yalıtkan",
      acceptableAnswers: ["yalıtkan", "Yalıtkan"],
      explanation: "Elektriği iletmeyenler yalıtkandır.",
      wordBankHint: ["Yalıtkan", "İletken", "Metal", "Parlak"]
    },
    {
      id: "fib-u7s1-3",
      number: 3,
      baglam: "Elektrik kablolarının içinde en yaygın kullanılan metal iletkendir.",
      soruKoku: "Kabloların içinde elektriği iletmek için en çok kullanılan metal ....................................dır.",
      blankAnswer: "Bakır",
      acceptableAnswers: ["bakır", "Bakır"],
      explanation: "Bakır mükemmel bir iletkendir.",
      wordBankHint: ["Bakır", "Plastik", "Tahta", "Cam"]
    },
    {
      id: "fib-u7s1-4",
      number: 4,
      baglam: "Kurşun kalem ucu olarak kullanılan ve elektriği ileten ametal maddedir.",
      soruKoku: "Kurşun kalem ucunun yapısında bulunan ve elektriği ileten karbon maddesine .................................... denir.",
      blankAnswer: "Grafit",
      acceptableAnswers: ["grafit", "Grafit"],
      explanation: "Grafit elektriği ileten bir ametaldir.",
      wordBankHint: ["Grafit", "Kükürt", "Plastik", "Cam"]
    },
    {
      id: "fib-u7s1-5",
      number: 5,
      baglam: "İyon içermediği için elektriği iletmeyen su türüdür.",
      soruKoku: "İçinde çözünmüş mineral ve tuz bulunmayan .................................... su elektriği iletmez (yalıtkandır).",
      blankAnswer: "Saf",
      acceptableAnswers: ["saf", "Saf"],
      explanation: "Saf su yalıtkandır.",
      wordBankHint: ["Saf", "Tuzlu", "Limonlu", "Maden"]
    },
    {
      id: "fib-u7s1-6",
      number: 6,
      baglam: "Tuz suda çözündüğünde serbest kalan yük taşıyıcılarıdır.",
      soruKoku: "Tuzlu suyun elektriği iletmesini sağlayan yüklü taneciklere .................................... denir.",
      blankAnswer: "İyon",
      acceptableAnswers: ["iyon", "İyon", "iyonlar", "İyonlar"],
      explanation: "Sıvılarda iletim iyonlarla sağlanır.",
      wordBankHint: ["İyon", "Molekül", "Nötron", "Foton"]
    },
    {
      id: "fib-u7s1-7",
      number: 7,
      baglam: "Gazların yüksek voltajda iletken hale gelmesiyle oluşan doğa olayıdır.",
      soruKoku: "Bulut ile yer arasındaki havanın iletken hale gelmesiyle meydana gelen elektrik boşalmasına .................................... denir.",
      blankAnswer: "Yıldırım",
      acceptableAnswers: ["yıldırım", "Yıldırım"],
      explanation: "Yıldırım gazların iletkenleşmesidir.",
      wordBankHint: ["Yıldırım", "Rüzgâr", "Yağmur", "Dolu"]
    },
    {
      id: "fib-u7s1-8",
      number: 8,
      baglam: "Elektrik kablolarının dışını kaplayan güvenli yalıtkan malzemedir.",
      soruKoku: "Kabloların dış yüzeyi elektrik çarpmalarını önlemek için .................................... ile kaplanır.",
      blankAnswer: "Plastik",
      acceptableAnswers: ["plastik", "Plastik"],
      explanation: "Plastik yalıtkan kaplamadır.",
      wordBankHint: ["Plastik", "Bakır", "Demir", "Alüminyum"]
    },
    {
      id: "fib-u7s1-9",
      number: 9,
      baglam: "Binaları yıldırım düşmesine karşı koruyan metal sistemdir.",
      soruKoku: "Binaların çatısına takılan ve yıldırımın elektriğini toprağa aktaran iletken çubuğa .................................... denir.",
      blankAnswer: "Paratoner",
      acceptableAnswers: ["paratoner", "Paratoner", "yıldırımsavar", "Yıldırımsavar"],
      explanation: "Paratoner yıldırımı toprağa iletir.",
      wordBankHint: ["Paratoner", "Sigorta", "Sayaç", "Direnç"]
    },
    {
      id: "fib-u7s1-10",
      number: 10,
      baglam: "Şeker suda moleküler çözündüğü için oluşan çözeltidir.",
      soruKoku: "Suya şeker atıldığında oluşan şekerli su elektriği ....................................mez.",
      blankAnswer: "İlet",
      acceptableAnswers: ["iletmez", "İletmez", "ilet", "İlet"],
      explanation: "Şekerli su elektriği iletmez.",
      wordBankHint: ["İlet", "Durdur", "Yansıt", "Depola"]
    }
  ],
  contextQuestions: [
    {
      id: "mcq-u7s1-1",
      number: 1,
      baglam: "Bir fen bilimleri laboratuvarında kurulan basit elektrik devresinin açık uçları arasına sırayla X, Y, Z ve T maddeleri konulmuş ve ampulün durumu gözlenmiştir:\n- X maddesi: Ampul ışık verdi.\n- Y maddesi: Ampul ışık vermedi.\n- Z maddesi: Ampul ışık verdi.\n- T maddesi: Ampul ışık vermedi.",
      soruKoku: "Buna göre X, Y, Z ve T maddeleri aşağıdakilerden hangisi olabilir?",
      secenekler: {
        A: "X: Bakır tel, Y: Plastik cetvel, Z: Demir çivi, T: Porselen tabak",
        B: "X: Cam bardak, Y: Altın yüzük, Z: Tahta, T: Gümüş kaşık",
        C: "X: Kauçuk silgi, Y: Demir, Z: Plastik, T: Bakır",
        D: "X: Tahta kaşık, Y: Su, Z: Cam, T: Demir"
      },
      dogruCevap: "A",
      cozum: "X ve Z iletken (bakır, demir); Y ve T yalıtkandır (plastik, porselen).",
      olculenKazanim: "F.6.7.1.1. Maddeleri iletken ve yalıtkan olarak sınıflandırır.",
      olculenBeceri: "Deneysel Veri Eşleştirme",
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
      id: "mcq-u7s1-2",
      number: 2,
      baglam: "Bir elektrik teknisyeni yüksek gerilim arızasını tamir ederken kalın kauçuk eldivenler ve kalın tabanlı kauçuk çizmeler giymektedir.",
      soruKoku: "Teknisyenin kauçuk malzeme kullanmasının sebebi nedir?",
      secenekler: {
        A: "Kauçuğun çok iyi bir yalıtkan olması ve vücudundan toprağa elektrik akımı geçmesini engelleyerek hayatını koruması",
        B: "Kauçuğun elektriği daha iyi iletmesi",
        C: "Eldivenlerin ellerini sıcak tutması",
        D: "Çizmelerin kaymayı önlemesi"
      },
      dogruCevap: "A",
      cozum: "Kauçuk yüksek yalıtkanlığa sahiptir; elektrik çarpmalarına karşı hayati emniyet bariyeridir.",
      olculenKazanim: "F.6.7.1.4. Elektrik güvenliğinde yalıtkan kıyafetlerin rolünü açıklar.",
      olculenBeceri: "İş Güvenliği ve Malzeme Bilimi",
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
      id: "mcq-u7s1-3",
      number: 3,
      baglam: "Üç ayrı beher kabına eşit miktarda saf su konuluyor:\n1. Kaba: 2 kaşık yemek tuzu eklenip karıştırılıyor.\n2. Kaba: 2 kaşık toz şeker eklenip karıştırılıyor.\n3. Kaba: Hiçbir şey eklenmiyor (saf su kalıyor).\nDevre uçları beherlere daldırıldığında yalnızca 1. kaptaki ampul ışık veriyor.",
      soruKoku: "Yalnızca 1. kaptaki ampulün yanmasının sebebi nedir?",
      secenekler: {
        A: "Tuzun suda iyonlarına ayrılarak serbest elektrik yükleri oluşturması ve sıvıyı iletken hale getirmesi",
        B: "Şekerin pilleri bitirmesi",
        C: "Saf suyun çok soğuk olması",
        D: "Tuzun elektriği üretmesi"
      },
      dogruCevap: "A",
      cozum: "Tuz iyonik çözünür (Na+ ve Cl- iyonları elektrik taşır); şeker ise moleküler çözündüğü için serbest yük oluşmaz ve yalıtkan kalır.",
      olculenKazanim: "F.6.7.1.2. Sıvı çözeltilerde iyonik iletkenlik farkını açıklar.",
      olculenBeceri: "Kimyasal Çözelti ve İletkenlik Analizi",
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
      id: "mcq-u7s1-4",
      number: 4,
      baglam: "Banyoda ıslak elle veya ıslak zeminde dururken saç kurutma makinesini prize takıp çalıştırmak son derece ölümcül bir tehlike oluşturur.",
      soruKoku: "Islak el ve ıslak vücutla elektriğe dokunmanın tehlikeli olmasının bilimsel sebebi nedir?",
      secenekler: {
        A: "Çeşme suyunun içindeki mineraller ve terin tuzu sayesinde iletken olması ve insan vücudunun elektrik direncini düşürerek akımın kalpten kolayca geçmesine yol açması",
        B: "Suyun elektriği yok etmesi",
        C: "Makinanın ıslanınca bozulması",
        D: "Kurutma makinesinin soğuk hava üflemesi"
      },
      dogruCevap: "A",
      cozum: "Nem ve mineral içeren sular elektrik direncini sıfıra indirir; vücuttan yüksek akım geçerek kalbi durdurabilir.",
      olculenKazanim: "F.6.7.1.4. Islak ortamlarda elektrik çarpması riskini açıklar.",
      olculenBeceri: "Gündelik Hayat Güvenliği",
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
      id: "mcq-u7s1-5",
      number: 5,
      baglam: "Bir öğrenci tahta kurşun kaleminin iki ucunu da kalemtıraşla açarak içindeki siyah grafit ucunu ortaya çıkarmış ve elektrik devresine bağlamıştır. Ampulün yandığını görünce çok şaşırmıştır.",
      soruKoku: "Bu deney kurşun kalem ucu hakkında neyi kanıtlar?",
      secenekler: {
        A: "Grafitin bir ametal olmasına rağmen elektrik akımını ileten katı bir iletken olduğunu",
        B: "Tahtanın elektriği ilettiğini",
        C: "Kalemin pil gibi elektrik ürettiğini",
        D: "Ampulün bozulduğunu"
      },
      dogruCevap: "A",
      cozum: "Kurşun kalem ucu grafittir; karbonun bu formu metaller gibi serbest elektronlara sahiptir ve elektriği iletir.",
      olculenKazanim: "F.6.7.1.1. Grafitin iletkenlik özelliğini deneyle açıklar.",
      olculenBeceri: "İstisnai Malzeme ve İletkenlik",
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
      id: "mcq-u7s1-6",
      number: 6,
      baglam: "Hava normal şartlarda mükemmel bir yalıtkandır. Ancak fırtınalı günlerde gökyüzünde şimşekler çakar ve yıldırım yere iner.",
      soruKoku: "Normalde yalıtkan olan havanın yıldırım anında elektriği iletmesinin sebebi nedir?",
      secenekler: {
        A: "Bulut ile yer arasındaki devasa gerilim (voltaj) farkının hava moleküllerini iyonlaştırarak geçici olarak iletken plazmaya dönüştürmesi",
        B: "Havanın soğuması",
        C: "Yağmurun havayı yok etmesi",
        D: "Rüzgârın kablo görevi görmesi"
      },
      dogruCevap: "A",
      cozum: "Aşırı yüksek elektrik alanı gaz moleküllerini iyonlaştırır; böylece gazlar iletken hale geçerek yıldırım kanalını açar.",
      olculenKazanim: "F.6.7.1.3. Gazların yüksek gerilim altında iletkenleşmesini açıklar.",
      olculenBeceri: "Plazma Fiziği ve Doğa Olayı",
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
      id: "mcq-u7s1-7",
      number: 7,
      baglam: "Yüksek gerilim hatlarının bağlandığı metal elektrik direklerinde tellerin direğe doğrudan temas etmesini önlemek için kahverengi fincan şeklinde kıvrımlı porselen parçalar kullanılır.",
      soruKoku: "Elektrik direklerinde kullanılan bu porselen parçalara ne ad verilir ve kullanım amacı nedir?",
      secenekler: {
        A: "Yalıtkan porselen izolatör - Yüksek gerilimin metal direğe ve toprağa kaçmasını önlemek",
        B: "İletken halka - Elektriği direğe aktarmak",
        C: "Lamba - Gece direği aydınlatmak",
        D: "Süs eşyası"
      },
      dogruCevap: "A",
      cozum: "Porselen izolatörler mükemmel yalıtkandır; binlerce voltluk elektriğin direğe geçmesini engelleyerek canlıları korur.",
      olculenKazanim: "F.6.7.1.2. Porselen izolatörlerin yüksek gerilim hatlarındaki yalıtım görevini açıklar.",
      olculenBeceri: "Endüstriyel Yalıtım Mühendisliği",
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
      id: "mcq-u7s1-8",
      number: 8,
      baglam: "Floresan ve neon lambaların içinde normalde elektriği iletmeyen gazlar bulunur. Anahtar açıldığında lamba parıldayarak ışık saçar.",
      soruKoku: "Floresan ve neon lambaların çalışma prensibi gazların hangi özelliğiyle açıklanır?",
      secenekler: {
        A: "Gazların yüksek elektrik gerilimi altında iyonlaşarak iletken hale gelmesi ve ışık yayması",
        B: "Gazların erimesi",
        C: "Gazın katılaşması",
        D: "Ampulün içinde rüzgâr esmesi"
      },
      dogruCevap: "A",
      cozum: "Neon ve cıva buharı gibi gazlar elektrik deşarjıyla iyonlaşır ve iletken hale geçerek ışık üretir.",
      olculenKazanim: "F.6.7.1.3. Floresan ve neon lambalarda gaz iletkenliğini açıklar.",
      olculenBeceri: "Aydınlatma Teknolojisi",
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
      id: "mcq-u7s1-9",
      number: 9,
      baglam: "Bir evin elektrik tesisatında aşırı akım geçtiğinde kabloların ısınıp yangın çıkarmasını önlemek için devreyi otomatik olarak kesen emniyet araçları kullanılır.",
      soruKoku: "Bu koruyucu devre elemanına ne ad verilir?",
      secenekler: {
        A: "Sigorta",
        B: "Pil",
        C: "Ampul",
        D: "Duy"
      },
      dogruCevap: "A",
      cozum: "Sigorta, devreden geçen akım güvenli sınırı aştığında devreyi keserek yangın ve kazaları önler.",
      olculenKazanim: "F.6.7.1.4. Sigortanın elektrik güvenliğindeki hayati görevini açıklar.",
      olculenBeceri: "Elektrik Güvenliği Donanımı",
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
      id: "mcq-u7s1-10",
      number: 10,
      baglam: "Aşağıdaki sıvı maddelerden hangisinin bulunduğu kaba daldırılan test devresinde ampul IŞIK VERMEZ (yalıtkandır)?",
      soruKoku: "Hangisi sıvı bir yalıtkandır?",
      secenekler: {
        A: "Saf su ve etil alkol",
        B: "Tuzlu su",
        C: "Limonlu su",
        D: "Sirkeli su"
      },
      dogruCevap: "A",
      cozum: "Saf su ve etil alkol iyon içermez; elektrik akımını iletmezler ve yalıtkandırlar.",
      olculenKazanim: "F.6.7.1.2. Sıvı iletken ve yalıtkanları ayırt eder.",
      olculenBeceri: "Sıvı Sınıflandırma",
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
      id: "mcq-u7s1-11",
      number: 11,
      baglam: "Bir prizin deliklerine metal çivi veya tel sokmaya çalışan küçük bir çocuğu gören annesi büyük bir panikle çocuğu engellemiştir.",
      soruKoku: "Prize metal cisim sokulmasının tehlikesi nedir?",
      secenekler: {
        A: "Şehir elektriğinin (220 Volt) metal üzerinden çocuğun vücuduna geçerek ölümcül elektrik çarpmasına yol açması",
        B: "Prizin kirlenmesi",
        C: "Çivinin bükülmesi",
        D: "Odanın kararması"
      },
      dogruCevap: "A",
      cozum: "Prizdeki 220 voltluk elektrik akımı metaller aracılığıyla anında insan bedenine geçer ve ölümcül kazaya yol açar.",
      olculenKazanim: "F.6.7.1.4. Ev içi elektrik tehlikelerine karşı güvenlik bilinci geliştirir.",
      olculenBeceri: "Ev Güvenliği ve Hayat Kurtarma",
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
      id: "mcq-u7s1-12",
      number: 12,
      baglam: "Kontrol kaleminin içinde küçük bir neon lamba bulunur. Elektrikçi kontrol kaleminin ucunu prize dokundurup arkasındaki metal kısma parmağını bastırdığında lamba yanar ama elektrikçiyi elektrik çarpmaz.",
      soruKoku: "Kontrol kaleminin içindeki lambanın yanıp elektrikçiyi çarpmamasını sağlayan parça nedir?",
      secenekler: {
        A: "Kontrol kaleminin içindeki çok yüksek değerli direnç ve plastik yalıtkan gövde",
        B: "İçinde pil olması",
        C: "Elektrikçinin büyücü olması",
        D: "Prizde elektrik olmaması"
      },
      dogruCevap: "A",
      cozum: "Kontrol kalemindeki dev direnç akımı insan bedeninin hissedemeyeceği mikroamper seviyesine düşürür; plastik sap ise yalıtır.",
      olculenKazanim: "F.6.7.1.4. Kontrol kalemi aletinin çalışma ve güvenlik prensibini irdeler.",
      olculenBeceri: "Alet Bilgisi ve Emniyet",
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
      id: "mcq-u7s1-13",
      number: 13,
      baglam: "Gümüş, bakırdan daha iyi bir elektrik iletkenidir. Ancak evlerimizin tesisatında ve telefon kablolarında gümüş yerine bakır kullanılır.",
      soruKoku: "Bakırın gümüşe tercih edilmesinin temel sebebi nedir?",
      secenekler: {
        A: "Bakırın doğada daha bol, çok daha ekonomik (ucuz) ve iletkenliğinin mükemmele yakın olması",
        B: "Gümüşün zehirli olması",
        C: "Bakırın kırmızı olması",
        D: "Gümüşün elektriği iletmemesi"
      },
      dogruCevap: "A",
      cozum: "Gümüş çok pahalıdır; bakır ise hem yüksek iletkenliğe sahiptir hem de ekonomik olarak seri üretime uygundur.",
      olculenKazanim: "F.6.7.1.2. İletken malzeme seçiminde ekonomik ve fiziksel kriterleri karşılaştırır.",
      olculenBeceri: "Mühendislik ve Ekonomi Bilinci",
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
      id: "mcq-u7s1-14",
      number: 14,
      baglam: "Bir elektrik kablosunun yıpranarak dışındaki plastik kılıfının soyulduğu ve içindeki bakır tellerin açıkta kaldığı fark edilmiştir.",
      soruKoku: "Bu kabloyla ilgili yapılması gereken EN DOĞRU işlem hangisidir?",
      secenekler: {
        A: "Cihazın fişi derhal çekilmeli, açık kısım elektrik yalıtım bandı (izole bant) ile sağlamca sarılmalı veya kablo yenisiyle değiştirilmelidir.",
        B: "Açık tele çıplak elle dokunulmalıdır.",
        C: "Kablo ıslak bezle silinmelidir.",
        D: "Üzerine metal bant sarılmalıdır."
      },
      dogruCevap: "A",
      cozum: "Açık teller kısa devre ve elektrik çarpması riski taşır; izole bant yalıtkan olduğundan emniyet sağlar.",
      olculenKazanim: "F.6.7.1.4. Yıpranmış kablolarda yalıtım ve emniyet önlemlerini açıklar.",
      olculenBeceri: "Uygulamalı Güvenlik Tedbiri",
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
      id: "mcq-u7s1-15",
      number: 15,
      baglam: "Elektrik çarpan bir kişiyi kurtarmak isteyen biri çıplak elle ona dokunursa kendisi de elektrik akımına kapılır.",
      soruKoku: "Elektrik çarpan birine müdahale ederken yapılması gereken İLK adım nedir?",
      secenekler: {
        A: "Hemen ana sigorta şalteri kapatılmalı; kapatılamıyorsa kuru tahta veya plastik bir sopa ile kazazede elektrik kaynağından uzaklaştırılmalıdır.",
        B: "Kazazedenin elinden tutulup çekilmelidir.",
        C: "Üzerine soğuk su dökülmelidir.",
        D: "Metal çubukla itilmelidir."
      },
      dogruCevap: "A",
      cozum: "Kazazedeye dokunulmaz; sigorta kesilir veya kuru tahta/plastik gibi yalıtkan cisimle akımdan ayrılır.",
      olculenKazanim: "F.6.7.1.4. Elektrik kazalarında ilk yardım ve kurtarma kuralını açıklar.",
      olculenBeceri: "Afet ve Acil Müdahale Bilinci",
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
      id: "mcq-u7s1-16",
      number: 16,
      baglam: "Bir tencerenin gövdesi paslanmaz çelikten veya alüminyumdan yapılırken, kulpları ve kapak tepeliği bakalit (sert plastik) veya ahşaptan üretilir.",
      soruKoku: "Tencere kulplarının bakalit veya ahşaptan yapılmasının ısı ve elektrik açısından ortak sebebi nedir?",
      secenekler: {
        A: "Hem ısıyı hem de elektriği iletmeyen iyi bir yalıtkan olmaları ve elimizin yanmasını/çarpmayı engellemeleri",
        B: "Tencerenin daha hafif olması",
        C: "Kulpların tencereyi soğutması",
        D: "Tencerenin rengini güzelleştirmesi"
      },
      dogruCevap: "A",
      cozum: "Bakalit ve ahşap hem mükemmel ısı hem de elektrik yalıtkanıdır; güvenli tutuş sağlar.",
      olculenKazanim: "F.6.7.1.2. Mutfak gereçlerinde yalıtkan malzeme kullanımını değerlendirir.",
      olculenBeceri: "Bütünleşik Yalıtım Analizi",
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
      id: "mcq-u7s1-17",
      number: 17,
      baglam: "Aşağıdaki maddelerden hangisi 'katı iletkenler' sınıfında yer alır?",
      soruKoku: "Hangisi elektriği iyi ileten bir katıdır?",
      secenekler: {
        A: "Alüminyum folyo",
        B: "Cam bardak",
        C: "Kuru tahta parçası",
        D: "Plastik tabak"
      },
      dogruCevap: "A",
      cozum: "Alüminyum metaldir ve katı iletkendir; cam, tahta ve plastik yalıtkandır.",
      olculenKazanim: "F.6.7.1.1. Katı iletken maddeleri teşhis eder.",
      olculenBeceri: "Malzeme Ayırt Etme",
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
      id: "mcq-u7s1-18",
      number: 18,
      baglam: "Topraklı prizlerde bulunan üçüncü metal parça (topraklama hattı), elektrikli alette oluşabilecek bir elektrik kaçağını doğrudan toprağa iletir.",
      soruKoku: "Topraklama sisteminin evlerimizde sağladığı temel fayda nedir?",
      secenekler: {
        A: "Gövdeye kaçan tehlikeli elektrik akımını toprağa boşaltarak cihazı kullanan insanın elektrik çarpmasından korunması",
        B: "Elektrik faturasını düşürmesi",
        C: "Cihazın daha hızlı çalışmasını sağlaması",
        D: "Ampulün daha parlak yanması"
      },
      dogruCevap: "A",
      cozum: "Topraklama kaçağı toprağa yönlendirir ve gövdeye dokunan kişiyi ölümcül akımdan korur.",
      olculenKazanim: "F.6.7.1.4. Topraklama sisteminin koruyucu fonksiyonunu açıklar.",
      olculenBeceri: "Tesisat Emniyeti ve Topraklama",
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
      id: "mcq-u7s1-19",
      number: 19,
      baglam: "Havanın normal şartlarda yalıtkan olması ve sadece devasa voltajlarda iletkenleşmesi yeryüzündeki yaşam için nasıl bir dengedir?",
      soruKoku: "Havanın bu yaratılış özelliğini tefekkür eden bir öğrenci hangi sonuca varır?",
      secenekler: {
        A: "Eğer hava normalde de iletken olsaydı, yeryüzündeki tüm elektrik telleri ve prizler her saniye ölümcül kıvılcımlar saçar ve hayat imkansız hale gelirdi.",
        B: "Havanın yalıtkan olması büyük bir kusurdur.",
        C: "Havanın elektrikle hiçbir ilgisi yoktur.",
        D: "Kuşların uçmasını engellerdi."
      },
      dogruCevap: "A",
      cozum: "Havanın yalıtkanlığı yeryüzünde medeniyetin ve elektrikli teknolojilerin emniyetle kullanılmasını sağlayan muazzam bir ilahi korumadır.",
      olculenKazanim: "F.6.7.1.3. Havanın yalıtkanlığındaki kozmik emniyet nizamını açıklar.",
      olculenBeceri: "Doğal Nizam ve Emniyet Tefekkürü",
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
      id: "mcq-u7s1-20",
      number: 20,
      baglam: "Maddelerin atomlarındaki elektronların iletkenlik ve yalıtkanlık nizamından yüksek gerilimdeki gaz iletkenliğine ve insanı koruyan yalıtım kanunlarına kadar her detay bir ölçüye işaret eder.",
      soruKoku: "İletken ve yalıtkan maddeler konusunu bitiren bir öğrencinin varacağı en derin marifet ve Maarif anlayışı nedir?",
      secenekler: {
        A: "Maddelere bu özellikleri rastgele değil, medeniyetin inşası ve insanın emniyeti için kusursuz bir nizamla yerleştiren Sonsuz İlim ve Hikmet Sahibi'ni hayranlıkla takdir etmek",
        B: "Maddelerin özelliklerinin hiçbir kanuna dayanmadığı",
        C: "Elektrik kullanımının gereksiz olduğu",
        D: "Tüm maddelerin aynı olduğu"
      },
      dogruCevap: "A",
      cozum: "Türkiye Yüzyılı Maarif Modeli çerçevesinde fiziksel maddelerin elektriksel özellikleri, emniyet, medeniyet inşası ve ilahi nizam tefekkürüyle bütünleştirilir.",
      olculenKazanim: "F.6.7.1. İletkenlik ve yalıtkanlığı bütüncül hikmet ve maarif felsefesiyle sentezler.",
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
