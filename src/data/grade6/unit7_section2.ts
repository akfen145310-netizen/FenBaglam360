import { SectionContent } from '../../types';

export const grade6Unit7Section2: SectionContent = {
  code: "6.7.2",
  title: "Elektriksel Direnç ve Bağlı Olduğu Faktörler",
  unitCode: "6.7",
  unitTitle: "7. Ünite: Elektriğin İletimi",
  summary: "Elektriksel direnç kavramı ve birimi (Ohm - Ω); bir iletkenin direncinin telin uzunluğuna (L), dik kesit alanına / kalınlığına (S) ve iletkenin cinsine bağlılığı; ampul parlaklığı ile devredeki direnç arasındaki ters orantı; reostanın (ayarlı direnç) çalışma prensibi ve teknolojideki kullanım alanları (ışık kısıcı dimmer, ses ayar düğmesi); akkor flamanlı ampulün iç yapısı ve tungsten telin rolü.",
  kazanimlar: [
    "F.6.7.2.1. Bir elektrik devresindeki ampulün parlaklığının bağlı olduğu değişkenleri tahmin eder ve tahminlerini deneylerle test eder.",
    "F.6.7.2.2. Elektriksel direnci tanımlar ve bir iletkenin direncinin nelere bağlı olduğunu deneylerle keşfeder.",
    "F.6.7.2.3. Devre elemanı olarak ampulün bir direnç olduğunu ve elektrik enerjisini ışık ve ısı enerjisine dönüştürdüğünü açıklar.",
    "F.6.7.2.4. Ayarlı direncin (reosta) günlük hayattaki kullanım alanlarını araştırır ve açıklar."
  ],
  hatirlayalim: {
    text: "Maddelerin elektriği iletken ve yalıtkan olarak ilettiğini öğrendik. Ancak iletken maddeler bile elektrik akımına karşı az ya da çok bir zorluk gösterir. İşte bu zorluğa 'Elektriksel Direnç' denir.",
    keyPoints: [
      "Elektriksel Direnç: Maddelerin elektrik akımının geçişine karşı gösterdiği zorluktur. 'R' harfi ile gösterilir, birimi Ohm'dur (simgesi Ω).",
      "Ölçü aleti: Direnç, 'Ohmmetre' (dirençölçer) veya multimetre ile ölçülür.",
      "İletkenin Direncini Etkileyen Faktörler:",
      "1. Telin Uzunluğu (L): Tel uzadıkça direnç ARTAR (Doğru orantılı). Uzun tel bağlı devrede ampul daha sönük yanar.",
      "2. Telin Kesit Alanı / Kalınlığı (S): Tel kalınlaştıkça direnç AZALIR (Ters orantılı). Kalın tel bağlı devrede ampul daha parlak yanar.",
      "3. Telin Cinsi (Özdirenç): Aynı boy ve kalınlıktaki tellerde nikel-krom telin direnci, bakır telden yaklaşık 60 kat daha büyüktür.",
      "Reosta (Ayarlı Direnç): Devredeki iletkenin boyunu değiştirerek devrenin toplam direncini, dolayısıyla akımı ve ampul parlaklığını ayarlayan sürgülü alettir.",
      "Ampul bir dirençtir: Flaman teli (tungsten/volfram) son derece ince ve sarmal şeklinde çok uzundur; yüksek direnç göstererek akkor hale gelip akkor parıldama ile ışık saçar."
    ]
  },
  onDegerlendirme: [
    {
      id: "od-u7s2-1",
      question: "Dar bir koridordan yürümek mi yoksa geniş bir caddeden yürümek mi daha kolaydır? Bu benzetme iletkenin kalınlığı ile elektrik direnci ilişkisini nasıl açıklar?",
      answer: "Geniş caddeden yürümek daha kolaydır. Tıpkı bunun gibi, tel kalınlaştıkça elektronlar daha rahat akar, yani elektriksel direnç azalır."
    },
    {
      id: "od-u7s2-2",
      question: "Bir elektrik devresinde telin boyunu iki katına çıkarırsak ampulün parlaklığı nasıl değişir?",
      answer: "Tel uzadıkça devrenin direnci artar ve geçen akım azaldığı için ampulün parlaklığı azalır."
    },
    {
      id: "od-u7s2-3",
      question: "Klasik akkor ampulün içindeki incecik tel (flaman) neden düz bir tel yerine helezon (sarmal yay) şeklinde kıvrılmıştır?",
      answer: "Küçük ampul camının içine metrelerce uzunlukta ince tel sığdırabilmek ve böylece direnci maksimuma çıkarıp akkor ışık elde etmek için."
    }
  ],
  hazirlik: {
    question: "Odamızın lambasının ışığını çevirmeli bir düğme ile yavaşça kısıp açabiliyoruz (dimmer anahtar). Bu düğmenin arkasında hangi fen ilkesi çalışmaktadır?",
    answer: "Ayarlı direnç (reosta) ilkesi çalışmaktadır; düğmeyi çevirdikçe devredeki telin uzunluğu değişir, direnç artınca ışık kısılır, direnç azalınca ışık parlar."
  },
  merak: {
    question: "Tungsten (volfram) metalinin erime noktası kaç derecedir ve neden ampul flamanı olarak seçilmiştir?",
    answer: "Tungsten 3422°C erime noktasına sahiptir; dünyada erime sıcaklığı en yüksek metaldir. 2500°C'de akkor haline geldiğinde bile erimeden ışık saçabilmesi için seçilmiştir."
  },
  kopru: {
    title: "Elektriksel Dirençten 7. Ünite Değerlendirmesine",
    content: "Elektriksel direncin formülünü, faktörlerini ve reostayı kavradıktan sonra, 7. Ünite Sonu Değerlendirme bölümünde tüm elektrik kazanımlarını kapsayan sonuç çalışmalarına geçeceğiz.",
    question: "Elektrik sobalarında ve tost makinelerinde bakır tel yerine neden nikel-krom tel kullanılır?",
    answer: "Çünkü nikel-krom telin direnci çok yüksektir; yüksek direnç elektrik enerjisini yoğun şekilde ısı enerjisine dönüştürür."
  },
  // MEB DERS KİTABI DETAYLI KONU ANLATIMI, TABLOLAR, BAĞLANTI NOKTALARI VE HABERLER
  konuAnlatimi: {
    ozet: "Maddelerin elektrik enerjisinin geçişine karşı gösterdikleri zorluğa 'Elektriksel Direnç' denir. Direnç 'R' harfi ile gösterilir, birimi 'Ohm'dur (simgesi: Ω). Direnç ohmmetre veya multimetre ile ölçülür. Bir iletkenin elektriksel direnci üç temel faktöre bağlıdır: 1) İletkenin Uzunluğu (L): Tel uzadıkça direnç artar (Doğru orantılı). Uzun telin bağlı olduğu devrede direnç büyük olduğu için ampul daha sönük, kısa telde ise ampul daha parlak yanar. 2) İletkenin Dik Kesit Alanı / Kalınlığı (S): Tel kalınlaştıkça elektronların geçişi kolaylaşır ve direnç azalır (Ters orantılı). Kalın telde direnç küçük olduğundan ampul parlak, ince telde direnç büyük olduğundan ampul sönük yanar. 3) İletkenin Cinsi (Özdirenç): Aynı uzunluk ve kalınlıktaki iki telden nikel-krom telin direnci, bakır telden yaklaşık 60 kat fazladır. 4) Reosta (Ayarlı Direnç): Devredeki iletkenin boyunu sürgü yardımıyla değiştirerek direnci, dolayısıyla akımı ve ampul parlaklığını ayarlayan düzenektir. Dimmer anahtarlar ve ses açma düğmeleri reosta ile çalışır. 5) Ampul Bir Dirençtir: Ampulün içindeki tungsten flaman teli son derece ince ve sarmal yay şeklinde çok uzundur; yüksek direnç göstererek akkor hale gelir ve ışık saçar.",
    kavramlar: [
      {
        terim: "Elektriksel Direnç ve Birimi (Ohm - Ω)",
        tanim: "İletkenin elektrik akımına karşı gösterdiği mukavemet ve zorluk ölçüsüdür.",
        onemliNoktalar: [
          "Direnç 'R' simgesiyle gösterilir, birimi Alman fizikçi Georg Simon Ohm'un anısına 'Ohm' (Ω) olarak adlandırılmıştır.",
          "Devrede direnç ne kadar büyükse, devreden geçen elektrik akımı o kadar azalır ve ampulün parlaklığı o oranda düşer."
        ]
      },
      {
        terim: "Direnci Etkileyen Faktörler (Uzunluk, Kalınlık, Cins)",
        tanim: "Bir iletken telin elektriksel direncini belirleyen üç fiziksel değişkendir.",
        onemliNoktalar: [
          "Uzunluk (L): Telin boyu arttıkça elektronların atomlarla çarpışma sıklığı artar; direnç doğru orantılı olarak artar.",
          "Kesit Alanı / Kalınlık (S): Tel genişledikçe elektronların akabileceği kanal genişler; direnç ters orantılı olarak azalır.",
          "Cins: Her maddenin atom yapısı ve özdirenci farklıdır; bakırın direnci çok düşükken nikel-kromun direnci çok yüksektir."
        ]
      },
      {
        terim: "Reosta (Ayarlı Direnç) ve Çalışma Prensibi",
        tanim: "Devrenin direncini sürgü yardımıyla değiştirerek akım miktarını kontrol eden devre elemanıdır.",
        onemliNoktalar: [
          "Reostanın sürgüsü hareket ettirildiğinde akımın tel üzerinde aldığı yol (iletkenin etkin boyu) değişir.",
          "Tel boyu uzarsa direnç artar, ampul söner. Tel boyu kısalırsa direnç azalır, ampul parlar.",
          "Günlük Hayat: Radyo ve müzik setlerindeki ses ayar düğmesi, tavan vantilatörü kademe düğmesi ve odalardaki ışık kısıcı dimmerlar reostadır."
        ]
      },
      {
        terim: "Akkor Flamanlı Ampul ve Tungsten Metalinin Rolü",
        tanim: "Elektriksel direncin ışığa ve ısıya dönüşmesinin en klasik örneğidir.",
        onemliNoktalar: [
          "Ampulün içindeki flaman teli çok yüksek erime sıcaklığına (3422°C) sahip tungsten (volfram) metalinden yapılır.",
          "Telin direncinin devasa olması için tel saç telinden çok daha ince çekilmiş ve helezon (sarmal yay) şeklinde kıvrılarak metrelerce boyda ampulün içine sığdırılmıştır."
        ]
      }
    ],
    tablolar: [
      {
        baslik: "İletkenin Özellikleri ile Direnç ve Ampul Parlaklığı Değişim Tablosu",
        sutunlar: ["Değiştirilen Özellik", "Yapılan Değişiklik", "Devrenin Direnci (R)", "Ampulün Parlaklığı", "Atomik / Fiziksel Açıklama"],
        satirlar: [
          ["Telin Uzunluğu (L)", "Uzunluk artırıldı (2L yapıldı)", "Artar (2 katına çıkar)", "Azalır (Daha sönük yanar)", "Elektronların tel atomlarıyla çarpışma yolu ve engeller artar"],
          ["Telin Uzunluğu (L)", "Uzunluk azaltıldı (L/2 yapıldı)", "Azalır (Yarıya iner)", "Artar (Daha parlak yanar)", "Elektronların katettiği yol kısaldığı için akım kolaylaşır"],
          ["Telin Kalınlığı (S)", "Kalınlık artırıldı (Genişledi)", "Azalır", "Artar (Daha parlak yanar)", "Geniş caddeden araç geçişi gibi elektron akışı rahatlar"],
          ["Telin Kalınlığı (S)", "Kalınlık azaltıldı (İnceldi)", "Artar", "Azalır (Daha sönük yanar)", "Dar patikadan geçiş gibi elektron sürtünmesi ve direnç tırmanır"],
          ["Telin Cinsi", "Bakır yerine Nikel-Krom bağlandı", "Büyük oranda Artar", "Belirgin şekilde Azalır", "Nikel-krom atomlarının serbest elektronlara karşı koyma gücü bakırdan 60 kat fazladır"]
        ]
      }
    ]
  },
  // MEB KİTABINDAKİ BAĞLANTI NOKTALARI
  baglantiNoktalari: [
    {
      id: "bn-6-7-3",
      baslik: "Fizik Tarihi: Georg Simon Ohm ve Elektriksel Direnç Kanunu",
      alan: "Fizik Tarihi",
      aciklama: "Alman matematik ve fizik bilgini Georg Simon Ohm (1789-1854), elektrik devrelerinde iletkenin iki ucu arasındaki gerilim, akım ve direnç ilişkisini matematiksel olarak formüle etmiştir.",
      soru: "Georg Simon Ohm'un bilim dünyasına kazandırdığı en temel elektrik kuralı nedir?",
      cevap: "Ohm Kanunu'dur (V = I x R). İletkenden geçen elektrik akımının gerilimle doğru orantılı, iletkenin direnciyle ters orantılı olduğunu ispatlamış ve bu keşfiyle modern elektrik ve elektronik mühendisliğinin temelini atmıştır."
    },
    {
      id: "bn-6-7-4",
      baslik: "Mühendislik ve Ev Teknolojisi: Elektrikli Ev Aletlerinde Isıtıcı Rezistanslar",
      alan: "Elektrik Mühendisliği & Isı Teknolojisi",
      aciklama: "Ütü, tost makinesi, elektrikli soba, çamaşır makinesi ve su ısıtıcılarının (kettle) içinde elektrik enerjisini ısıya dönüştüren özel tellere 'rezistans' denir.",
      soru: "Rezistans tellerinde neden bakır tel yerine yüksek dirençli nikel-krom tel kullanılır?",
      cevap: "Bakır telin direnci çok düşüktür; akımı doğrudan geçirir ve ısı üretmez. Oysa nikel-krom telin elektriksel direnci çok büyüktür; elektronlar bu telden geçerken atomlarla şiddetle çarpışır ve elektrik enerjisi muazzam bir ısı enerjisine dönüşerek suyu veya fırını saniyeler içinde ısıtır."
    }
  ],
  // MEB KİTABINDAKİ GÜNCEL HABERLER
  haberler: [
    {
      id: "hbr-6-7-2",
      baslik: "ASELSAN'dan Kuantum Algılayıcılarda 'Sıfır Direnç' (Süperiletkenlik) Başarısı",
      kaynak: "ASELSAN & TÜBİTAK BİLGEM Basın Bülteni",
      tarih: "2024",
      ozet: "Savunma sanayiimizin öncüsü ASELSAN, geliştirdiği yeni nesil kuantum radar ve sensör sistemlerinde mutlak sıfıra (-273°C) yakın sıcaklıklarda çalışan süperiletken çipler kullandı. Özel alaşımlardan yapılan bu iletkenler kritik sıcaklığın altına indiğinde elektriksel dirençleri tamamen 'SIFIR'a düşüyor ve sinyaller hiç enerji kaybetmeden ışık hızında iletiliyor.",
      soru: "Bir iletkenin elektriksel direncinin sıfır olması mühendislikte neden devrim kabul edilir?",
      cevap: "Direnç sıfır olduğunda hiçbir enerji ısıya dönüşüp kaybolmaz; elektrik akımı kablolarda hiçbir ısınma olmadan sonsuza kadar kayıpsız akar ve olağanüstü yüksek verim elde edilir."
    }
  ],
  // MEB KİTABINDAKİ KONTROL NOKTALARI
  kontrolNoktalari: [
    {
      id: "kn-6-7-3",
      baslik: "Kontrol Noktası 1 (Direnci Etkileyen Faktörler ve Ampul Parlaklığı)",
      sorular: [
        {
          id: "kn-q-g6-43",
          soru: "Özdeş pillerle kurulan iki basit elektrik devresinde; 1. devrede 10 cm uzunluğunda bakır tel, 2. devrede ise aynı kalınlıkta 30 cm uzunluğunda bakır tel kullanılmıştır. Ampullerin parlaklık durumunu karşılaştırınız.",
          tip: "coktan-secmeli",
          secenekler: [
            "A) İki devredeki ampul de aynı parlaklıkta ışık saçar",
            "B) 1. devredeki ampul diğerine göre daha parlak yanar",
            "C) 2. devredeki ampul diğerine göre daha parlak yanar",
            "D) İki devredeki ampul de direnç sebebiyle hiç yanmaz"
          ],
          dogruSecenek: "B",
          cevap: "B) 1. devredeki ampul diğerine göre daha parlak yanar",
          aciklama: "İletkenin boyu uzadıkça elektriksel direnci artar; direnç artınca devreden geçen akım azalır. Bu yüzden kısa telin (10 cm) bağlı olduğu 1. devrenin direnci daha azdır ve ampulü daha parlak yanar."
        },
        {
          id: "kn-q-g6-44",
          soru: "Aynı uzunluktaki ince bakır tel ile kalın bakır telin dirençlerini karşılaştırınız; hangisinin bağlı olduğu devrede ampul daha parlak ışık verir?",
          tip: "klasik",
          cevap: "Telin kesit alanı (kalınlığı) arttıkça direnç azalır (ters orantılıdır). Bu nedenle ince telin direnci büyük, kalın telin direnci küçüktür. Kalın tel devrenin toplam direncini azalttığı için devreden daha çok akım geçer ve kalın telin bağlı olduğu devredeki ampul daha parlak ışık verir.",
          aciklama: "Kalın telin direnci küçük, ampul parlaklığı büyüktür."
        }
      ]
    },
    {
      id: "kn-6-7-4",
      baslik: "Kontrol Noktası 2 (Reosta ve Akkor Ampul Teknolojisi)",
      sorular: [
        {
          id: "kn-q-g6-45",
          soru: "Bir elektrik devresinde reostanın sürgüsü devredeki telin boyunu kısaltacak yönde çekilirse, devrenin direnci ve ampulün parlaklığı nasıl değişir?",
          tip: "coktan-secmeli",
          secenekler: [
            "A) Devrenin direnci artar, ampulün parlaklığı artar.",
            "B) Devrenin direnci artar, ampulün parlaklığı azalır.",
            "C) Devrenin direnci azalır, ampulün parlaklığı azalır.",
            "D) Devrenin direnci azalır, ampulün parlaklığı artar."
          ],
          dogruSecenek: "D",
          cevap: "D) Devrenin direnci azalır, ampulün parlaklığı artar.",
          aciklama: "Tel boyu kısalınca direnç azalır; direnç azalınca akım güçlenir ve ampulün parlaklığı artar."
        }
      ]
    }
  ],
  // BİLGİ BANKASI KUTULARI
  bilgiBankasi: [
    {
      id: "bb-6-7-3",
      baslik: "Thomas Edison ve Ampulün İçindeki Tungsten Tel",
      icerik: "1879 yılında Thomas Edison pratik ve uzun ömürlü akkor ampulü icat etmeden önce binlerce farklı malzeme denemişti. Hatta arkadaşının sakal telini ve Japonya'dan getirttiği bambu liflerini bile kömürleştirerek denedi! Nihayetinde bilim insanları erime noktası 3422°C olan 'Tungsten' (volfram) metalini buldular. Ampulün içindeki tungsten tel o kadar ince çekilir ki saç telinin onda biri kadardır ve helezon şeklinde kıvrılarak küçük cam fanusun içine neredeyse 1 metre uzunluğunda tel sığdırılır. Yüksek direnç sayesinde akkor parlar ve beyaz-sarı ışık saçar.",
      onemliNot: "Tungsten yüksek erime sıcaklığı sayesinde erimeden akkor parlar."
    },
    {
      id: "bb-6-7-4",
      baslik: "Dimmer Anahtarı ve Ses Açma Düğmesi",
      icerik: "Oturma odanızdaki ışığı çevirerek yavaş yavaş kısıp açtığınız anahtarlara 'Dimmer' denir. Müzik setlerinin ses ayar düğmesi de aynı prensiple çalışır. Bu döner düğmenin arkasında dairesel bir direnç şeridi ve onun üzerinde kayan bir metal kontak (sürgü) bulunur. Düğmeyi çevirdiğinizde elektriğin geçtiği direnç şeridinin boyunu uzatıp kısaltmış olursunuz; böylece hoparlöre veya lambaya giden elektrik miktarını hassasça ayarlarsınız.",
      onemliNot: "Dimmer ve volüm düğmeleri döner mekanizmalı birer reostadır."
    }
  ],
  // MEB KİTABINDAKİ PERFORMANS GÖREVİ
  performansGorevi: {
    baslik: "Kurşun Kalem İçi (Grafit) ile Kendi Reostanı (Ayarlı Direncini) Yap",
    amac: "İletken bir ametal olan kurşun kalem ucunu (grafit) kullanarak sürgülü bir reosta düzeneği tasarlamak ve ampul parlaklığını kademesiz kontrol etmek.",
    surecAdimlari: [
      "2B veya 4B yumuşak uçlu bir kurşun kalemin ahşap gövdesini dikkatlice yararak içindeki grafit çubuğu tek parça halinde çıkarınız (veya 2 mm kalınlığında çıplak grafit uç alınız).",
      "Bir pil, duy ve küçük ampulden oluşan seri bir elektrik devresi kurunuz.",
      "Devrenin bir kablo ucunu grafit çubuğun en sol ucuna sabitleyiniz.",
      "Diğer kablonun ucunu bir ataşa bağlayarak grafit çubuk üzerinde sağa ve sola kaydırınız (sürgü hareketi).",
      "Ataşı sabitleme noktasından uzaklaştırdıkça ve yaklaştırdıkça ampulün parlaklığındaki değişimi gözlemleyip not alınız.",
      "Direncin uzunlukla ilişkisini gösteren deney raporunuzu sınıfta sununuz."
    ],
    beklenenUrun: "El Yapımı Grafit Reosta Modeli, Parlaklık Ölçüm Tablosu ve Deney Raporu.",
    degerlendirmeKriterleri: [
      "Grafit çubuğun kırılmadan devreye entegre edilmesi",
      "Sürgü hareketiyle ampul parlaklığının kontrol edilebilmesi",
      "Direnç-uzunluk bağıntısının bilimsel dille açıklanması"
    ]
  },
  // MEB KİTABI NELER ÖĞRENDİK BÖLÜMÜ SORULARI VE MAARİF ÇÖZÜMLERİ
  nelerOgrenildiSorulari: [
    {
      id: "no-6-7-5",
      soru: "1. Elektriksel direnç nedir? Birimi ve ölçü aleti nedir?",
      cevap: "Elektriksel Direnç: Maddelerin elektrik akımının geçişine karşı gösterdiği zorluktur. Birimi 'Ohm'dur (simgesi: Ω). Ölçü aleti ise 'Ohmmetre' (dirençölçer) veya multimetredir.",
      detayliCozum: "Direnç akıma gösterilen zorluktur, birimi Ohm'dur."
    },
    {
      id: "no-6-7-6",
      soru: "2. Bir iletken telin elektriksel direncinin bağlı olduğu üç temel faktörü yazarak bunların dirençle nasıl değiştiğini (artar/azalır) belirtiniz.",
      cevap: "1. İletkenin Uzunluğu (L): Tel uzadıkça direnç ARTAR (doğru orantılı). 2. İletkenin Kesit Alanı / Kalınlığı (S): Tel kalınlaştıkça direnç AZALIR (ters orantılı). 3. İletkenin Cinsi: Maddenin atomik yapısına bağlıdır; örneğin nikel-kromun direnci bakırdan katbekat fazladır.",
      detayliCozum: "Uzunluk arttıkça direnç artar; kalınlık arttıkça direnç azalır."
    },
    {
      id: "no-6-7-7",
      soru: "3. Reosta nedir? Günlük hayattan iki kullanım alanı örneği veriniz.",
      cevap: "Reosta, devredeki iletkenin boyunu değiştirerek devrenin direncini, dolayısıyla akımı ve ampul parlaklığını ayarlayan ayarlı dirençtir. Günlük hayattan örnekler: 1) Odalardaki lambaların ışık seviyesini kısıp açan 'dimmer anahtarlar', 2) Hoparlör ve müzik çalarlardaki ses seviyesi ayar (volüm) düğmeleri.",
      detayliCozum: "Reosta akımı ve gücü kontrol eden ayarlı dirençtir."
    },
    {
      id: "no-6-7-8",
      soru: "4. Akkor telli bir ampulün ışık vermesini elektriksel direnç kavramı ile açıklayınız.",
      cevap: "Ampulün içindeki tungsten flaman teli son derece ince ve sarmal şeklinde çok uzundur; bu yüzden elektriksel direnci devasa düzeydedir. Devreden geçen elektrik akımı bu yüksek dirence çarpınca elektrik enerjisi yoğun şekilde ısı enerjisine dönüşür. Isınan tel 2500°C sıcaklığa ulaşarak akkor hale gelir ve etrafına güçlü bir ışık saçar.",
      detayliCozum: "Yüksek direnç elektronları zorlayarak teli akkor parlatır."
    }
  ],
  hikmetStages: [
    {
      stage: 1,
      name: "1. Varlığı Tanıt (Akışa Karşı Mukavemet: Direnç)",
      concept: "Her Maddenin Bir Özü Var",
      text: "Nasıl ki her insanın bir sabır ve tahammül eşiği varsa, her iletkenin de elektron akışına gösterdiği bir fıtri zorluk (direnç) vardır.",
      analogies: ["Akarsuyun önüne çıkan irili ufaklı çakıl taşları."]
    },
    {
      stage: 2,
      name: "2. Parçalarını Göster (Boy, Kesit ve Cins)",
      concept: "Muntazam Geometri",
      text: "Uzunluk arttıkça direnç büyür, kalınlık arttıkça direnç küçülür; maddenin cinsi ise gizli fıtratını fısıldar.",
      analogies: ["Su borusunun boyu uzadıkça suyun zor akması, boru genişledikçe rahat akması."]
    },
    {
      stage: 3,
      name: "3. Ölçü ve Düzen (Işığın Doğuşu)",
      concept: "Zorluktan Doğan Aydınlık",
      text: "Tungsten telin yüksek direnci olmasaydı tel ısınmaz, akkor hale gelmez ve ampul karanlık gecelerimizi aydınlatamazdı.",
      questionToPonder: "Elektronların teldeki atomlara çarparak gösterdiği direnç olmasaydı ışık ve ısı enerjisini nasıl elde ederdik?"
    },
    {
      stage: 4,
      name: "4. Gayesini Keşfet (Aydınlanma ve Isınma)",
      concept: "Enerji Dönüşüm Sanatı",
      text: "Direnç bir engel gibi görünse de elektrik enerjisini fırında lezzetli bir ekmeğe, ütüde düzgün bir kıyafete, ampulde nura dönüştürür.",
      analogies: ["Sürtünmenin freni tutturması gibi, direncin de ampulü ışıtması."]
    },
    {
      stage: 5,
      name: "5. Bütünle İlişkilendir (Edison ve Tungsten Arayışı)",
      concept: "Sabır ve Azim",
      text: "Edison binlerce farklı malzemeyi deneyerek en ideal yüksek dirençli ve dayanıklı flamanı aramış, sonunda tungsten mucizesine ulaşmıştır.",
      analogies: ["Bin denemenin arkasındaki sebat ve tefekkür."]
    },
    {
      stage: 6,
      name: "6. Hayret ve Tefekkür (El-Musavvir)",
      concept: "Atomların Şaşırtıcı Mimarisi",
      text: "Bakıra akışı, nikel-kroma direnci, tungstene ateşe dayanmayı kodlayan Yüce Sanatkâr'ın atomlara nakşettiği hikmeti temaşa etmek."
    }
  ],
  etkinlikler: [
    {
      id: "etk-u7s2-direnc-faktörleri",
      title: "Pekiştirme İstasyonu: İletkenin Direncini Etkileyen Faktörleri Test Etme",
      type: "Kontrollü Deney ve Ampul Parlaklığı Gözlemi",
      materials: ["Pil ve pil yatağı", "Duy ve ampul", "Timsah ağızlı kablolar", "Farklı boyda nikel-krom teller (L ve 2L)", "Farklı kalınlıkta nikel-krom teller (S ve 2S)", "Aynı boy ve kalınlıkta bakır tel"],
      steps: [
        "1. Deney (Boy Etkisi): Devreye önce 'L' boyundaki nikel-krom teli, ardından '2L' boyundaki teli bağlayıp ampul parlaklığını karşılaştırınız (Uzun telde parlaklık azalır).",
        "2. Deney (Kalınlık Etkisi): Devreye önce ince nikel-krom teli (S), ardından kalın nikel-krom teli (2S) bağlayınız (Kalın telde parlaklık artar).",
        "3. Deney (Cins Etkisi): Aynı boy ve kalınlıktaki nikel-krom tel ile bakır teli sırayla bağlayınız (Bakır telde ampul çok parlak, nikel-kromda daha sönük yanar).",
        "4. Sonuç: Direncin boyla doğru, kesit alanıyla ters orantılı olduğunu ve telin cinsine bağlı olduğunu grafikleyiniz."
      ],
      questions: [
        {
          qId: "q-u7s2-1",
          label: "Deney Analizi",
          prompt: "Boyu 2 katına çıkan telde ampulün sönükleşmesinin bilimsel sebebi nedir?",
          answer: "Telin boyu arttıkça elektriksel direnci artar; direnç artınca devreden geçen akım azalır ve ampul parlaklığı düşer."
        }
      ]
    }
  ],
  bilgiIstasyonlari: [
    {
      title: "Georg Simon Ohm ve Ohm Kanunu",
      scientistOrMission: "Elektrik Direncinin Babası (1789-1854)",
      description: "Alman fizikçi Georg Simon Ohm, bir iletkenden geçen elektrik akımının iletkenin uçları arasındaki gerilimle doğru, iletkenin direnciyle ters orantılı olduğunu keşfetmiştir. Bu sebeple elektriksel direnç birimine onun anısına 'Ohm' (Ω) adı verilmiştir.",
      hikmetNote: "Ohm'un keşfettiği bu matematiksel nizam, cep telefonlarımızdan uzay mekiklerine kadar tüm elektrik ve elektronik devrelerin temel taşıdır."
    }
  ],
  dda: {
    id: "dda-u7s2-direnc",
    statement: "Bir iletken telin boyu uzatıldığında direnci azalır, tel kalınlaştırıldığında ise direnci artar.",
    correctDecision: "Y",
    reason: "Tam tersidir: Tel uzadıkça direnç artar (doğru orantılı); tel kalınlaştıkça direnç azalır (ters orantılı).",
    ifTrue: {
      exit: 1,
      isCorrect: false,
      feedback: "Hatalı! Direncin telin boyu ve kesit alanıyla ilişkisini tekrar gözden geçiriniz."
    },
    ifFalse: {
      exit: 2,
      isCorrect: true,
      feedback: "Tebrikler! Direncin fiziksel faktörlerle ilişkisini doğru kavradınız."
    }
  },
  biliyorumAnliyorumDusunuyorum: {
    biliyorum: "Elektriksel direncin telin boyu, dik kesit alanı ve cinsine bağlı olduğunu, biriminin Ohm olduğunu ve reostanın çalışma mantığını biliyorum.",
    anliyorum: "Ampulün de aslında yüksek dirençli bir tel olduğunu ve direnç sayesinde elektrik enerjisinin ışığa dönüştüğünü anlıyorum.",
    dusunuyorum: "Eğer iletkenlerin hiç direnci olmasaydı (süperiletkenlik oda sıcaklığında olsaydı) ampuller veya ısıtıcılar nasıl çalışabilirdi?"
  },
  pekistirmeIstasyonu: {
    stationTitle: "Elektriksel Direnç ve Bağlı Olduğu Faktörler Pekiştirme İstasyonu",
    pageReference: "6. Sınıf 2. Kitap 7. Ünite",
    summaryText: "Elektriksel direnç tanımı ve birimi (Ohm), uzunluk/kesit alanı/cins faktörleri, reosta mekanizması, akkor flamanlı ampul ve tungsten tel.",
    targetSkills: [
      "İletkenin direncini etkileyen değişkenleri kontrollü deneylerle inceler.",
      "Devredeki direnç değişiminin ampul parlaklığına etkisini tahmin eder.",
      "Reostanın ve ampul flamanının çalışma prensibini açıklar."
    ]
  },
  fillInBlanks: [
    {
      id: "fib-u7s2-1",
      number: 1,
      baglam: "Maddelerin elektrik akımına karşı gösterdiği zorluktur.",
      soruKoku: "Bir iletkenin elektrik akımının geçişine karşı gösterdiği zorluğa .................................... direnç denir.",
      blankAnswer: "Elektriksel",
      acceptableAnswers: ["elektriksel", "Elektriksel"],
      explanation: "Elektriksel direnç akıma gösterilen zorluktur.",
      wordBankHint: ["Elektriksel", "Mekanik", "Kimyasal", "Manyetik"]
    },
    {
      id: "fib-u7s2-2",
      number: 2,
      baglam: "Elektriksel direncin uluslararası standart birimidir.",
      soruKoku: "Elektriksel direncin birimi ....................................dur (simgesi Ω).",
      blankAnswer: "Ohm",
      acceptableAnswers: ["ohm", "Ohm"],
      explanation: "Direnç birimi Ohm'dur.",
      wordBankHint: ["Ohm", "Volt", "Amper", "Joule"]
    },
    {
      id: "fib-u7s2-3",
      number: 3,
      baglam: "Telin uzunluğu ile elektriksel direnç arasındaki orantı türüdür.",
      soruKoku: "Bir iletken telin uzunluğu arttıkça direnci de artar; yani telin uzunluğu ile direnci .................................... orantılıdır.",
      blankAnswer: "Doğru",
      acceptableAnswers: ["doğru", "Doğru"],
      explanation: "Boy arttıkça direnç artar.",
      wordBankHint: ["Doğru", "Ters", "Eşit", "Sabit"]
    },
    {
      id: "fib-u7s2-4",
      number: 4,
      baglam: "Telin kalınlığı (dik kesit alanı) ile elektriksel direnç arasındaki orantıdır.",
      soruKoku: "Bir iletken tel kalınlaştıkça (kesit alanı arttıkça) direnci azalır; yani kesit alanı ile direnç .................................... orantılıdır.",
      blankAnswer: "Ters",
      acceptableAnswers: ["ters", "Ters"],
      explanation: "Kesit alanı ile direnç ters orantılıdır.",
      wordBankHint: ["Ters", "Doğru", "Çift", "Bileşik"]
    },
    {
      id: "fib-u7s2-5",
      number: 5,
      baglam: "Devrede direnci değiştirerek akımı ve parlaklığı ayarlayan alettir.",
      soruKoku: "Elektrik devrelerinde direnç değerini ayarlayarak akımı değiştiren sürgülü devre elemanına .................................... (ayarlı direnç) denir.",
      blankAnswer: "Reosta",
      acceptableAnswers: ["reosta", "Reosta"],
      explanation: "Reosta ayarlı dirençtir.",
      wordBankHint: ["Reosta", "Pil", "Duy", "Voltmetre"]
    },
    {
      id: "fib-u7s2-6",
      number: 6,
      baglam: "Akkor ampulün flaman telinin yapıldığı yüksek erime sıcaklığına sahip metaldir.",
      soruKoku: "Ampullerde flaman teli olarak kullanılan ve erime noktası 3422°C olan metal .................................... (volfram) teldir.",
      blankAnswer: "Tungsten",
      acceptableAnswers: ["tungsten", "Tungsten", "volfram", "Volfram"],
      explanation: "Tungsten ampul flamanıdır.",
      wordBankHint: ["Tungsten", "Bakır", "Alüminyum", "Kurşun"]
    },
    {
      id: "fib-u7s2-7",
      number: 7,
      baglam: "Ampulün içindeki flaman telin kalınlığı ve boyu bu özelliktedir.",
      soruKoku: "Akkor ampulün içindeki tungsten tel yüksek direnç gösterebilmesi için son derece .................................... ve uzundur.",
      blankAnswer: "İnce",
      acceptableAnswers: ["ince", "İnce"],
      explanation: "İnce ve uzun telin direnci yüksektir.",
      wordBankHint: ["İnce", "Kalın", "Kısa", "Geniş"]
    },
    {
      id: "fib-u7s2-8",
      number: 8,
      baglam: "Elektriksel direnci ölçen laboratuvar aletidir.",
      soruKoku: "İletkenlerin direncini ölçmek için kullanılan ölçüm cihazına ....................................metre denir.",
      blankAnswer: "Ohm",
      acceptableAnswers: ["ohm", "Ohm", "ohmmetre", "Ohmmetre"],
      explanation: "Direnç ohmmetre ile ölçülür.",
      wordBankHint: ["Ohm", "Volt", "Baro", "Dinamometre"]
    },
    {
      id: "fib-u7s2-9",
      number: 9,
      baglam: "Aynı boy ve kalınlıktaki tellerde direnci belirleyen üçüncü faktördür.",
      soruKoku: "Boyları ve kesitleri eşit olan bakır ve nikel-krom tellerin dirençlerinin farklı olması iletkenin ....................................ne bağlıdır.",
      blankAnswer: "Cinsi",
      acceptableAnswers: ["cinsine", "Cinsine", "cinsi", "Cinsi"],
      explanation: "Telin cinsi direnci belirler.",
      wordBankHint: ["Cinsi", "Rengi", "Ağırlığı", "Kokusu"]
    },
    {
      id: "fib-u7s2-10",
      number: 10,
      baglam: "Devrede direnç arttığında ampulün parlaklığında meydana gelen değişimdir.",
      soruKoku: "Bir elektrik devresinde direnç arttıkça ampulün parlaklığı ....................................lır.",
      blankAnswer: "Aza",
      acceptableAnswers: ["azalır", "Azalır", "aza", "Aza"],
      explanation: "Direnç artınca parlaklık azalır.",
      wordBankHint: ["Aza", "Arta", "Sabit", "Değişmez"]
    }
  ],
  contextQuestions: [
    {
      id: "mcq-u7s2-1",
      number: 1,
      baglam: "Bir fen öğretmeni sınıfta özdeş piller ve ampuller kullanarak üç farklı devre kurmuştur:\n1. Devre: 10 cm uzunluğunda ince nikel-krom tel\n2. Devre: 20 cm uzunluğunda ince nikel-krom tel\n3. Devre: 30 cm uzunluğunda ince nikel-krom tel",
      soruKoku: "Bu devrelerdeki ampullerin parlaklık sıralaması hangisinde doğru verilmiştir?",
      secenekler: {
        A: "1. Devre > 2. Devre > 3. Devre",
        B: "3. Devre > 2. Devre > 1. Devre",
        C: "1 = 2 = 3",
        D: "2 > 1 > 3"
      },
      dogruCevap: "A",
      cozum: "Tel uzadıkça direnç artar; direnç en az 1. devrede olduğu için akım en fazla olur ve ampul en parlak 1. devrede yanar.",
      olculenKazanim: "F.6.7.2.1. Telin uzunluğunun ampul parlaklığına etkisini karşılaştırır.",
      olculenBeceri: "Bağımsız Değişken ve Parlaklık Analizi",
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
      id: "mcq-u7s2-2",
      number: 2,
      baglam: "Aynı boyda (L) iki adet bakır telden K teli 1 mm² kesit alanına (ince), L teli ise 3 mm² kesit alanına (kalın) sahiptir.",
      soruKoku: "K ve L tellerinin elektriksel dirençleri arasındaki ilişki nasıldır?",
      secenekler: {
        A: "K telinin direnci L telinden büyüktür (R_K > R_L)",
        B: "L telinin direnci K telinden büyüktür (R_L > R_K)",
        C: "Dirençleri eşittir",
        D: "Bakır tellerin direnci sıfırdır"
      },
      dogruCevap: "A",
      cozum: "Kesit alanı azaldıkça (tel inceldikçe) direnç artar; bu yüzden ince K telinin direnci kalın L telinden daha büyüktür.",
      olculenKazanim: "F.6.7.2.2. Telin kesit alanının elektriksel dirence etkisini açıklar.",
      olculenBeceri: "Fiziksel Boyut ve Direnç İlişkisi",
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
      id: "mcq-u7s2-3",
      number: 3,
      baglam: "Bir odadaki lambanın parlaklığını ayarlamak için kullanılan duvardaki çevirmeli anahtara (dimmer) bağlanan reostanın sürgüsü 1 yönünde çekildiğinde lambanın daha parlak yandığı görülüyor.",
      soruKoku: "Sürgü 1 yönüne çekildiğinde devrede ne olmuştur?",
      secenekler: {
        A: "Devredeki telin boyu kısalmış, direnç azalmış ve devreden geçen akım artmıştır.",
        B: "Pilin voltajı artmıştır.",
        C: "Ampulün sayısı artmıştır.",
        D: "Devredeki tel kalınlaşmıştır."
      },
      dogruCevap: "A",
      cozum: "Reosta devredeki iletkenin boyunu kısaltarak direnci azaltır; direnç azalınca akım artar ve lamba parlar.",
      olculenKazanim: "F.6.7.2.4. Reostanın sürgü hareketiyle direnç ve parlaklık ayarını açıklar.",
      olculenBeceri: "Reosta Mekaniği ve Devre Analizi",
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
      id: "mcq-u7s2-4",
      number: 4,
      baglam: "Akkor ampullerin içindeki tungsten telin akkor hale gelerek ışık saçabilmesi için iki temel fiziksel özelliğe sahip olması gerekir.",
      soruKoku: "Tungsten telin akkor ampulde kullanılmasını sağlayan bu iki özellik hangisidir?",
      secenekler: {
        A: "Çok yüksek elektriksel direnç ve çok yüksek erime sıcaklığı (3422°C)",
        B: "Elektriği hiç iletmemesi ve şeffaf olması",
        C: "Çok kalın olması ve hemen erimesi",
        D: "Mıknatıs olması ve su geçirmemesi"
      },
      dogruCevap: "A",
      cozum: "Yüksek direnç sayesinde akkor parlar; erime noktası 3422°C olduğu için de eriyip kopmadan 2500°C'de saatlerce ışık yayar.",
      olculenKazanim: "F.6.7.2.3. Akkor flamanlı ampulün yapısını ve tungstenin özelliklerini açıklar.",
      olculenBeceri: "Aydınlatma Fiziği ve Malzeme Seçimi",
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
      id: "mcq-u7s2-5",
      number: 5,
      baglam: "Elektrikli bir ısıtıcıda (örneğin elektrikli soba veya saç kurutma makinesinde) elektrik enerjisini yoğun ısıya çevirmek için rezistans telleri kullanılır.",
      soruKoku: "Rezistans telinin yapımında bakır yerine nikel-krom tel seçilmesinin bilimsel gerekçesi nedir?",
      secenekler: {
        A: "Nikel-krom telin elektriksel direncinin bakırdan çok daha büyük olması ve yüksek direnç sebebiyle elektrik enerjisini hızla ısıya dönüştürmesi",
        B: "Nikel-kromun daha ucuz olması",
        C: "Bakırın elektriği iletmemesi",
        D: "Nikel-kromun erimesi"
      },
      dogruCevap: "A",
      cozum: "Nikel-krom telin özdirenci bakırdan katbekat yüksektir; yüksek direnç akıma karşı koyarak yoğun ısı enerjisi açığa çıkarır.",
      olculenKazanim: "F.6.7.2.2. İletkenin cinsinin dirence ve ısı üretimine etkisini irdeler.",
      olculenBeceri: "Termal Dönüşüm ve Özdirenç",
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
      id: "mcq-u7s2-6",
      number: 6,
      baglam: "Aşağıda aynı maddeden yapılmış 4 farklı tel verilmiştir:\nI. Uzunluk: L, Kesit Alanı: 2S\nII. Uzunluk: L, Kesit Alanı: S\nIII. Uzunluk: 2L, Kesit Alanı: S\nIV. Uzunluk: 2L, Kesit Alanı: 2S",
      soruKoku: "Elektriksel direnci EN BÜYÜK olan tel hangisidir?",
      secenekler: {
        A: "III (2L boyunda ve ince)",
        B: "I (L boyunda ve kalın)",
        C: "II",
        D: "IV"
      },
      dogruCevap: "A",
      cozum: "Direnç en uzun ve en ince telde maksimumdur. III. tel 2L boyunda ve S (ince) kesitindedir; direnci en büyüktür (R = 2L/S).",
      olculenKazanim: "F.6.7.2.2. Direnç formülü (R = ρ*L/S) mantığını değişkenler üzerinden karşılaştırır.",
      olculenBeceri: "Matematiksel Orantı ve Karşılaştırma",
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
      id: "mcq-u7s2-7",
      number: 7,
      baglam: "Bir elektrik devresinde ampulün parlaklığını artırmak isteyen bir öğrencinin yapabileceği işlemlerden hangisi YANLIŞTIR?",
      soruKoku: "Hangisi ampul parlaklığını ARTIRMAZ?",
      secenekler: {
        A: "Devreye seri olarak daha uzun ve ince bir nikel-krom tel bağlamak",
        B: "Devredeki bağlantı telinin boyunu kısaltmak",
        C: "Devredeki teli daha kalın bir telle değiştirmek",
        D: "Nikel-krom tel yerine aynı boyda bakır tel takmak"
      },
      dogruCevap: "A",
      cozum: "Daha uzun ve ince tel bağlamak devrenin direncini artırır; bu da akımı düşürerek ampul parlaklığını AZALTIR.",
      olculenKazanim: "F.6.7.2.1. Devre direncini azaltma ve artırma yöntemlerini analiz eder.",
      olculenBeceri: "Devre Optimizasyonu",
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
      id: "mcq-u7s2-8",
      number: 8,
      baglam: "Bir radyoda ses açma/kapama düğmesini çevirdiğimizde hoparlörden çıkan sesin şiddeti artmakta veya azalmaktadır.",
      soruKoku: "Radyonun ses ayar düğmesinde kullanılan devre elemanı hangisidir?",
      secenekler: {
        A: "Reosta (Potansiyometre - ayarlı direnç)",
        B: "Pil",
        C: "Termometre",
        D: "Duy"
      },
      dogruCevap: "A",
      cozum: "Döner başlıklı reostalar (potansiyometre) devrenin direncini değiştirerek hoparlöre giden akımı ve dolayısıyla ses seviyesini ayarlar.",
      olculenKazanim: "F.6.7.2.4. Reostanın ses ayar düğmelerindeki kullanımını açıklar.",
      olculenBeceri: "Elektronik Cihaz Mimarisi",
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
      id: "mcq-u7s2-9",
      number: 9,
      baglam: "Bir elektrik devresinde direnç 'R' harfi ile gösterilir ve devre şemalarında testere dişi şeklinde zikzak sembolüyle çizilir.",
      soruKoku: "Direncin uluslararası birimi olan Ohm'un simgesi hangisidir?",
      secenekler: {
        A: "Ω (Omega)",
        B: "V (Volt)",
        C: "A (Amper)",
        D: "W (Watt)"
      },
      dogruCevap: "A",
      cozum: "Direnç birimi Ohm'dur ve Yunan harfi 'Ω' (Omega) ile sembolize edilir.",
      olculenKazanim: "F.6.7.2.2. Direnç birimini ve simgesini tanır.",
      olculenBeceri: "Bilimsel Sembol Okuryazarlığı",
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
      id: "mcq-u7s2-10",
      number: 10,
      baglam: "Bir ampulün içindeki flaman telinin kopması durumunda devrede ne gerçekleşir?",
      soruKoku: "Flamanı kopan ampule halk arasında ne denir ve ampul neden yanmaz?",
      secenekler: {
        A: "'Ampul patladı' denir; flaman koptuğu için devre açık devre haline gelir ve akım geçemez.",
        B: "Pilin bittiği anlaşılır.",
        C: "Ampul daha parlak yanar.",
        D: "Cam kırılmıştır."
      },
      dogruCevap: "A",
      cozum: "Flaman tel koptuğunda devrenin iletken yolu kesilir (açık devre); akım akamayacağı için ampul söner.",
      olculenKazanim: "F.6.7.2.3. Ampul flamanının devredeki iletken köprü görevini açıklar.",
      olculenBeceri: "Devre Arızası Teşhisi",
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
      id: "mcq-u7s2-11",
      number: 11,
      baglam: "Laboratuvarda bir ohmmetre ile üç telin direnci ölçülüyor:\n- 1. Tel: 5 Ω\n- 2. Tel: 15 Ω\n- 3. Tel: 2 Ω\nBu teller özdeş pillerin ve ampullerin bulunduğu devrelere ayrı ayrı bağlanıyor.",
      soruKoku: "Hangi telin bağlı olduğu devredeki ampul EN PARLAK ışık verir?",
      secenekler: {
        A: "3. Tel (Direnci en küçük olan 2 Ω)",
        B: "2. Tel (Direnci en büyük olan 15 Ω)",
        C: "1. Tel",
        D: "Hepsi eşit parlar"
      },
      dogruCevap: "A",
      cozum: "Direnç ne kadar küçükse devre akımı o kadar büyük olur; bu yüzden 2 Ω'luk 3. telde ampul en parlak yanar.",
      olculenKazanim: "F.6.7.2.1. Sayısal direnç değerleri ile ampul parlaklığını ilişkilendirir.",
      olculenBeceri: "Sayısal Veri Yorumlama",
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
      id: "mcq-u7s2-12",
      number: 12,
      baglam: "Bir şehirdeki elektrik santralinden evlere kilometrelerce uzaktan elektrik taşınırken yüksek gerilim hatlarında kalın alüminyum ve çelik teller kullanılır.",
      soruKoku: "Uzun mesafeli elektrik hatlarında kalın tellerin tercih edilmesinin sebebi nedir?",
      secenekler: {
        A: "Telin boyu çok uzun olduğu için artan direnci, teli kalınlaştırarak düşürmek ve elektrik enerjisi kaybını en aza indirmek",
        B: "Kuşların tele daha rahat konması",
        C: "Direklerin daha ağır olması",
        D: "Telin rüzgârda uçmaması"
      },
      dogruCevap: "A",
      cozum: "Kilometrelerce uzunluk direnci aşırı artırır; bunu dengelemek için kalın teller kullanılır ve iletim hatlarındaki kayıplar önlenir.",
      olculenKazanim: "F.6.7.2.2. İletim hatlarında direnç ve kesit alanı mühendisliğini açıklar.",
      olculenBeceri: "Enerji Verimliliği ve Şebeke Mühendisliği",
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
      id: "mcq-u7s2-13",
      number: 13,
      baglam: "Bir öğrenci 'İletkenin dik kesit alanının dirence etkisini' test etmek için kontrollü bir deney tasarlamak istiyor.",
      soruKoku: "Öğrencinin seçeceği iki telde hangi özellikler AYNI, hangi özellik FARKLI olmalıdır?",
      secenekler: {
        A: "Telin cinsi ve boyu AYNI, kalınlıkları (kesit alanları) FARKLI olmalıdır.",
        B: "Her şeyi farklı olmalıdır.",
        C: "Boyları farklı, kalınlıkları aynı olmalıdır.",
        D: "Cinsleri farklı, kalınlıkları aynı olmalıdır."
      },
      dogruCevap: "A",
      cozum: "Kontrollü deneyde incelenen değişken (bağımsız değişken) kesit alanıdır; bu yüzden boy ve cins sabit tutulmalıdır.",
      olculenKazanim: "F.6.7.2.2. Kontrollü deneyde bağımsız ve kontrol edilen değişkenleri belirler.",
      olculenBeceri: "Bilimsel Süreç ve Deney Tasarımı",
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
      id: "mcq-u7s2-14",
      number: 14,
      baglam: "Bir elektrikli fırında sıcaklık ayar düğmesini 100°C'den 250°C'ye getirdiğimizde fırının rezistans telleri kızararak daha çok ısı üretmeye başlar.",
      soruKoku: "Fırın termostatının çalışma prensibi hangi devre elemanına dayanır?",
      secenekler: {
        A: "Reosta (devre direncini ayarlayarak istenen ısıyı sağlayan termostat sistemi)",
        B: "Pusula",
        C: "Mikroskop",
        D: "Dinamometre"
      },
      dogruCevap: "A",
      cozum: "Termostatlar direnç ve sıcaklık kontrolüyle çalışarak rezistansın ısı üretimini düzenler.",
      olculenKazanim: "F.6.7.2.4. Termostat ve ısıtıcı sistemlerinde direnç kontrolünü açıklar.",
      olculenBeceri: "Ev Aletleri ve Termal Kontrol",
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
      id: "mcq-u7s2-15",
      number: 15,
      baglam: "Devredeki bir iletkenin direnci hakkında yapılan yorumlardan hangisi KESİNLİKLE DOĞRUDUR?",
      soruKoku: "Aşağıdaki yargılardan hangisi bilimsel bir gerçektir?",
      secenekler: {
        A: "Devredeki ampul sayısı sabitken direnç artarsa devreden geçen elektrik akımı azalır.",
        B: "Telin boyu uzadıkça direnç azalır.",
        C: "Tel kalınlaştıkça direnç artar.",
        D: "Tüm metallerin direnci birbirinin aynısıdır."
      },
      dogruCevap: "A",
      cozum: "Ohm kanununa göre voltaj sabitken direnç artarsa akım düşer.",
      olculenKazanim: "F.6.7.2.1. Direnç ile akım arasındaki ters orantıyı ifade eder.",
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
      id: "mcq-u7s2-16",
      number: 16,
      baglam: "Bir elektrik devresinde tel olarak kurşun kalem içi (grafit) kullanılmıştır. Kalem ucunun boyu kısaltıldığında ampulün parlaklığının arttığı görülmüştür.",
      soruKoku: "Bu deney grafit hakkında hangi kuralı doğrulamaktadır?",
      secenekler: {
        A: "Grafit iletkeninde de boy kısaldıkça direncin azaldığını ve akımın arttığını",
        B: "Grafitin yalıtkan olduğunu",
        C: "Pilin bittiğini",
        D: "Işığın azaldığını"
      },
      dogruCevap: "A",
      cozum: "Grafit de tüm iletkenler gibi boyu kısaldıkça daha az direnç gösterir; bu yüzden ampul daha parlak yanar.",
      olculenKazanim: "F.6.7.2.2. Farklı iletkenlerde (grafit) boy-direnç ilişkisini deneyle doğrular.",
      olculenBeceri: "Genelleme ve Deneysel Doğrulama",
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
      id: "mcq-u7s2-17",
      number: 17,
      baglam: "Akkor ampulün cam fanusunun içi hava yerine neden argon veya azot gibi soy gazlarla doldurulur?",
      soruKoku: "Ampulün içinde hava (oksijen) bırakılmamasının sebebi nedir?",
      secenekler: {
        A: "Tungsten flaman telinin 2500°C'ye ulaştığında havadaki oksijenle tepkimeye girip hemen yanarak kül olmasını engellemek",
        B: "Ampulü daha hafif yapmak",
        C: "Camın patlamasını sağlamak",
        D: "Ampulü renklendirmek"
      },
      dogruCevap: "A",
      cozum: "Oksijen olursa akkor haldeki tungsten tel anında yanar ve kopar; soy gazlar ise telin yanmasını önler.",
      olculenKazanim: "F.6.7.2.3. Akkor ampulde gaz dolgusu ve kimyasal koruma teknolojisini açıklar.",
      olculenBeceri: "Endüstriyel Tasarım ve Kimyasal Eylemsizlik",
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
      id: "mcq-u7s2-18",
      number: 18,
      baglam: "Bir iletkenin direnci R = 10 Ω iken bu tel tam ortasından ikiye katlanıp bükülürse yeni telin direnci nasıl değişir?",
      soruKoku: "Telin hem boyu yarıya inip hem de kesiti iki katına çıkarsa yeni direnç ne olur?",
      secenekler: {
        A: "2,5 Ω (Direnç 4 kat azalır)",
        B: "20 Ω",
        C: "10 Ω",
        D: "50 Ω"
      },
      dogruCevap: "A",
      cozum: "Boy yarıya inince direnç 5 Ω olur; kesit 2 katına çıkınca bir daha yarıya iner ve 2,5 Ω olur.",
      olculenKazanim: "F.6.7.2.2. Boy ve kesit alanı değişiminin dirence bileşik etkisini hesaplar.",
      olculenBeceri: "Bileşik Değişken Hesaplaması",
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
      id: "mcq-u7s2-19",
      number: 19,
      baglam: "Edison akkor ampulü icat ederken binlerce kez deneme yapmış ve her denemesinde 'Başarısız olmadım, sadece ampul yapamayacak bir yol daha keşfettim' demiştir.",
      soruKoku: "Edison'un bu tutumu bilimsel araştırmalarda hangi ahlaki erdemi temsil eder?",
      secenekler: {
        A: "Yılmadan araştırma azmi, sebat, bilimsel merak ve sabır erdemi",
        B: "Hemen pes etme",
        C: "Şansına güvenme",
        D: "Deney yapmaktan kaçınma"
      },
      dogruCevap: "A",
      cozum: "Bilim tarihi sabır ve sebatla doludur; direncin ışığa dönüşmesi gibi sabır da başarıya dönüşür.",
      olculenKazanim: "F.6.7. Bilim insanlarının çalışma azmini ve sebat değerini takdir eder.",
      olculenBeceri: "Değerler Eğitimi ve Bilim Tarihi",
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
      id: "mcq-u7s2-20",
      number: 20,
      baglam: "Atomların içindeki elektronların akışına karşı gösterilen fıtri dirençten, ampulün akkor parıldamasına ve evlerimizin aydınlanmasına kadar her kanun bir nizamın eseridir.",
      soruKoku: "Elektriksel direnç ve enerji dönüşümünü inceleyen bir Maarif öğrencisinin varacağı nihai hikmet nedir?",
      secenekler: {
        A: "Kâinatta hiçbir engelin ve direncin tesadüfi olmadığını, zorlukların ve direncin dahi ışık ve ısı gibi hayırlı nurlara vesile kılındığını tefekkür etmek",
        B: "Direncin sadece enerjiyi yok ettiğini sanmak",
        C: "Ampullerin gereksiz olduğunu düşünmek",
        D: "Elektriğin kendi kendine çalıştığına inanmak"
      },
      dogruCevap: "A",
      cozum: "Türkiye Yüzyılı Maarif Modeli çerçevesinde elektriksel direnç ilkesi, zorlukların aydınlığa dönüşmesi, ilahi nizam ve bilimsel tefekkür şuuruyla sentezlenir.",
      olculenKazanim: "F.6.7.2. Elektriksel direnç konusunu bütüncül hikmet ve maarif felsefesiyle sentezler.",
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
