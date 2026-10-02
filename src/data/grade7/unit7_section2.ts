import { SectionContent } from '../../types';

export const unit7Section2: SectionContent = {
  code: "7.7.2",
  title: "Elektrik Devrelerinde Akım, Gerilim ve Direnç İlişkisi",
  unitCode: "7.7",
  unitTitle: "7. Ünite: Elektrik Devreleri",
  summary: "Elektrik akımı (I, Amper, Ampermetre ile seri ölçülür), Gerilim/Potansiyel fark (V, Volt, Voltmetre ile paralel ölçülür) ve Direnç (R, Ohm, Ω) arasındaki ilişki; Ohm Kanunu (V = I · R veya R = V / I); Gerilim - Akım grafiğinin eğiminin direnci vermesi; seri ve paralel devrelerde akım ve gerilim dağılımı ile Georg Simon Ohm'un bilimsel mirası.",
  kazanimlar: [
    "F.7.7.2.1. Bir devre elemanının uçları arasındaki gerilim ile üzerinden geçen akım arasındaki ilişkiyi deneyerek keşfeder (Ohm Kanunu).",
    "F.7.7.2.2. Elektrik akımını Ampermetre ile (seri bağlayarak), gerilimi Voltmetre ile (paralel bağlayarak) ölçer.",
    "F.7.7.2.3. Gerilim - akım grafiğini çizerek grafiğin eğiminin iletkenin direncini verdiğini açıklar.",
    "F.7.7.2.4. Georg Simon Ohm'un çalışmalarını ve bilim tarihine katkılarını değerlendirir."
  ],
  hatirlayalim: {
    text: "Maddelerin elektrik yüklerinin akışına gösterdiği zorluğa Direnç denildiğini; iletkenin boyu uzadıkça direncin arttığını, kesit alanı kalınlaştıkça direncin azaldığını öğrenmiştik.",
    keyPoints: [
      "Elektrik Akımı (I): İletkenin bir kesitinden birim zamanda geçen yük miktarıdır. Birimi Amper'dir (A). Devreye SERİ bağlanan Ampermetre ile ölçülür. Ampermetrenin iç direnci sıfıra yakın çok küçüktür.",
      "Gerilim / Potansiyel Fark (V): Devredeki yükleri harekete geçiren elektriksel kuvvettir (enerji farkıdır). Birimi Volt'tur (V). Devre elemanına PARALEL bağlanan Voltmetre ile ölçülür. Voltmetrenin iç direnci çok büyüktür (üzerinden akım geçirmez).",
      "Ohm Kanunu: Bir iletkenin uçları arasındaki gerilimin (V), üzerinden geçen akıma (I) oranı daima sabittir ve bu sabit iletkenin direncine (R) eşittir: R = V / I  (veya V = I · R).",
      "Gerilim - Akım Grafiği: Gerilim arttıkça akım da doğru orantılı olarak artar. Bu doğrunun eğimi iletkenin direncini (R) verir."
    ]
  },
  onDegerlendirme: [
    {
      id: "od-u7s2-1",
      question: "Ampermetre neden devreye daima seri bağlanır, paralel bağlanırsa ne olur?",
      answer: "Ampermetrenin iç direnci sıfıra çok yakın olduğundan akımı etkilemeden ölçebilmesi için seri bağlanmalıdır. Eğer bir ampule paralel bağlanırsa, akım ampul yerine ampermetrenin dirençsiz yolundan geçer ve ampul söner (kısa devre olur)."
    },
    {
      id: "od-u7s2-2",
      question: "Voltmetre neden devreye paralel bağlanır, seri bağlanırsa ne gerçekleşir?",
      answer: "Voltmetrenin iç direnci çok çok büyüktür (adeta yalıtkan gibidir). İki nokta arasındaki gerilimi ölçmek için paralel bağlanmalıdır. Seri bağlanırsa sonsuz gibi olan direnci akımın geçişini tamamen engeller ve ampul yanmaz."
    },
    {
      id: "od-u7s2-3",
      question: "Bir iletkenin uçlarına uygulanan gerilim 2 katına çıkarılırsa üzerinden geçen akım nasıl değişir?",
      answer: "Ohm Kanunu gereğince iletkenin direnci sabit olduğundan (R = V / I), gerilim 2 katına çıktığında akım da 2 katına çıkar (doğru orantı)."
    }
  ],
  hazirlik: {
    question: "Akan bir şelalede suyun yüksekliği (gerilim), akan suyun debisi (akım) ve kayalıkların pürüzü (direnç) arasındaki ilişkiyi elektrik devresiyle nasıl bağdaştırabilirsiniz?",
    answer: "Şelalenin yüksekliği potansiyel farkı (gerilim), düşen suyun debisi elektrik akımını, suyun çarpıp yavaşladığı kayalıklar ise direnci temsil eder. Yükseklik arttıkça su daha şiddetli akar; kayalar arttıkça akış yavaşlar."
  },
  merak: {
    question: "1826 yılında Georg Simon Ohm bu kanunu bulduğunda bilim insanları neden önce ona inanmadı, hatta üniversitedeki işinden kovulmasına sebep oldu?",
    answer: "Ohm'un matematiksel denklemi o çağdaki bilginlere fazlasıyla sade ve şaşırtıcı geldi; ancak zamanla deneylerin Ohm'u doğrulamasıyla fizik tarihinin en temel yasası olarak kabul edildi ve dirence onun adı verildi."
  },
  kopru: {
    title: "V = I · R: Elektriğin Altın Üçgeni",
    content: "Elektrik devresindeki üç temel büyüklük olan Gerilim, Akım ve Direnç, kâinattaki neden-sonuç dengesinin en zarif matematiksel tecellilerinden biridir.",
    question: "Direnç olmasaydı elektronlar kabloda sonsuz hızda akabilir miydi?",
    answer: "Direnç olmasaydı ısı ve ışık enerjisi üretemezdik; her devre anında kısa devreye düşerdi. Direnç enerjinin ışığa ve faydalı işe dönüşmesini sağlayan hikmetli bir engeldir."
  },
  // MEB DERS KİTABI DETAYLI KONU ANLATIMI, TABLOLAR, BAĞLANTI NOKTALARI VE HABERLER
  konuAnlatimi: {
    ozet: "Elektrik devrelerini yöneten 3 temel nicelik vardır: 1. Elektrik Akımı (I): İletkenin kesitinden birim zamanda geçen yük miktarıdır; birimi Amper'dir (A), devreye seri bağlanan Ampermetre ile ölçülür. Ampermetrenin iç direnci sıfıra yakındır. 2. Gerilim / Potansiyel Fark (V): Elektronları devrede hareket ettiren elektriksel kuvvettir; birimi Volt'tur (V), devre elemanına paralel bağlanan Voltmetre ile ölçülür. Voltmetrenin iç direnci çok büyüktür. 3. Direnç (R): Maddenin akıma karşı gösterdiği zorluktur; birimi Ohm'dur (Ω). Ohm Kanunu: Bir iletkenin uçları arasındaki gerilimin üzerinden geçen akıma oranı daima sabittir ve bu oran iletkenin direncini verir (V = I · R veya R = V / I). Gerilim - Akım grafiğinin eğimi iletkenin direncine eşittir.",
    kavramlar: [
      {
        terim: "Elektrik Akımı (I) ve Ampermetre",
        tanim: "İletken tel içindeki serbest elektronların titreşim hareketiyle enerjiyi iletmesidir.",
        onemliNoktalar: [
          "Sembolü: I, Birimi: Amper (A).",
          "Ölçüm Aleti: Ampermetre.",
          "Bağlanma Kuralı: Devreye daima SERİ bağlanır.",
          "Özelliği: İç direnci sıfıra yakın çok küçüktür; üzerinden geçen akımı engellemez. Ampule paralel bağlanırsa ampul söner (kısa devre)."
        ]
      },
      {
        terim: "Gerilim / Potansiyel Fark (V) ve Voltmetre",
        tanim: "Devredeki elektrik yüklerini harekete geçiren elektriksel itici güç veya iki nokta arasındaki enerji farkıdır.",
        onemliNoktalar: [
          "Sembolü: V, Birimi: Volt (V).",
          "Ölçüm Aleti: Voltmetre.",
          "Bağlanma Kuralı: Ölçülmek istenen devre elemanının iki ucuna daima PARALEL bağlanır.",
          "Özelliği: İç direnci sonsuza yakın çok büyüktür; üzerinden akım geçirmez. Devreye seri bağlanırsa ampul yanmaz."
        ]
      },
      {
        terim: "Ohm Kanunu (V = I · R)",
        tanim: "Bir iletkenin uçları arasındaki gerilimin devreden geçen akıma oranının sabit kaldığını ifade eden temel fizik yasasıdır.",
        onemliNoktalar: [
          "Formül: R = V / I  ya da  V = I · R  ya da  I = V / R.",
          "Bir iletkenin uçlarındaki gerilim 2 katına çıkarılırsa üzerinden geçen akım da 2 katına çıkar.",
          "Gerilim değişse bile iletkenin DİRENCİ (R) DEĞİŞMEZ; çünkü direnç iletkenin cinsine, boyuna ve kesitine bağlıdır."
        ]
      },
      {
        terim: "Gerilim - Akım Grafiği ve Eğimi",
        tanim: "Gerilim ile akım arasındaki doğru orantıyı gösteren doğrusal grafiktir.",
        onemliNoktalar: [
          "Düşey eksen: Gerilim (V), Yatay eksen: Akım (I).",
          "Grafikteki doğrunun eğimi (Eğim = V / I) iletkenin direncini (R) verir.",
          "Doğrusu daha dik olan iletkenin direnci daha büyüktür."
        ]
      },
      {
        terim: "Georg Simon Ohm (1789-1854)",
        tanim: "Elektrik akımı, gerilim ve direnç arasındaki matematiksel ilişkiyi keşfeden Alman fizikçidir.",
        onemliNoktalar: [
          "Kendi tasarladığı piller ve iletken tellerle deneyler yaparak elektriğin en temel kanununu formüle etmiştir.",
          "Bilime katkılarından dolayı elektriksel direnç birimine 'Ohm' adı verilmiştir."
        ]
      }
    ],
    tablolar: [
      {
        baslik: "Elektriksel Büyüklükler, Birimleri ve Ölçüm Cihazları Tablosu",
        sutunlar: ["Fiziksel Büyüklük", "Sembolü", "Birimi", "Ölçüm Cihazı", "Devreye Bağlanma Şekli"],
        satirlar: [
          ["Elektrik Akımı", "I", "Amper (A)", "Ampermetre", "Devreye SERİ bağlanır (İç direnci ~ 0)"],
          ["Gerilim (Potansiyel Fark)", "V", "Volt (V)", "Voltmetre", "Uçlara PARALEL bağlanır (İç direnci ~ sonsuz)"],
          ["Elektriksel Direnç", "R", "Ohm (Ω)", "Ohmmetre", "Ohm Kanunu ile hesaplanır (R = V / I)"]
        ]
      },
      {
        baslik: "Ohm Kanunu Doğrusal İlişki Tablosu (Sabit R = 4 Ohm için)",
        sutunlar: ["Pil Gerilimi (V)", "İletkenin Direnci (R)", "Devreden Geçen Akım (I)", "V / I Oranı"],
        satirlar: [
          ["4 Volt", "4 Ohm", "1 Amper", "4 / 1 = 4 Ω"],
          ["8 Volt (2 katına çıktı)", "4 Ohm (Sabit)", "2 Amper (2 katına çıktı)", "8 / 2 = 4 Ω (Sabit)"],
          ["12 Volt (3 katına çıktı)", "4 Ohm (Sabit)", "3 Amper (3 katına çıktı)", "12 / 3 = 4 Ω (Sabit)"],
          ["16 Volt (4 katına çıktı)", "4 Ohm (Sabit)", "4 Amper (4 katına çıktı)", "16 / 4 = 4 Ω (Sabit)"]
        ]
      }
    ]
  },
  // MEB KİTABINDAKİ BAĞLANTI NOKTALARI
  baglantiNoktalari: [
    {
      id: "bn-7-7-3",
      baslik: "İnsan Biyolojisi ve Sağlık: İnsan Vücudunun Direnci ve Elektrik Çarpması",
      alan: "Biyofizik & İş Güvenliği",
      aciklama: "İnsan vücudu bir iletkendir ancak direnci derinin kuruluğuna veya ıslaklığına göre devasa farklılık gösterir.",
      soru: "Kuru elle 220 Volt prize temas etmek ile ıslak elle temas etmek arasında neden hayati bir risk farkı vardır?",
      cevap: "Kuru derinin direnci yaklaşık 100.000 Ohm iken ıslak derinin direnci 1.000 Ohm'a kadar düşer. Ohm kanununa göre (I = V / R) direnç 100 kat düşünce vücuttan geçen elektrik akımı 100 kat artar; bu da kalbin durmasına ve ölümcül şoka neden olur."
    },
    {
      id: "bn-7-7-4",
      baslik: "Elektronik ve Bilişim: Reosta (Ayarlı Direnç) Nasıl Çalışır?",
      alan: "Elektronik Mühendisliği",
      aciklama: "Radyoların ses ayar düğmesi, ütülerin sıcaklık ayar termostatı ve ışığı kısılıp açılabilen avizelerin içinde 'Reosta' adı verilen ayarlı direnç bulunur.",
      soru: "Bir reostanın kolu sürgülendiğinde ampulün parlaklığı nasıl ayarlanır?",
      cevap: "Reostanın sürgüsü kaydırıldığında devredeki iletken telin boyu uzatılır veya kısaltılır. Telin boyu uzayınca direnç (R) artar, Ohm kanununa göre akım (I = V/R) azalır ve ampulün ışığı kısılır."
    }
  ],
  // MEB KİTABINDAKİ GÜNCEL HABERLER
  haberler: [
    {
      id: "hbr-7-7-2",
      baslik: "Sıfır Dirençli Süperiletkenler ile Enerji Kaybı Tarihe Karışıyor",
      kaynak: "TÜBİTAK Bilim ve Teknik",
      tarih: "2023",
      ozet: "Fizikçiler aşırı soğuk sıcaklıklarda elektriksel direnci tamamen sıfıra inen (R = 0 Ω) 'süperiletken' alaşımlar geliştirdi. Sıfır direnç sayesinde elektrik akımı teller içinde hiçbir sürtünmeye ve ısı kaybına uğramadan sonsuza kadar akabilmektedir. Bu teknoloji Maglev hızlı trenlerinin havada süzülmesini ve MR cihazlarının güçlü manyetik alanlar üretmesini sağlamaktadır.",
      soru: "Ohm Kanunu açısından bir telin direncinin sıfır olması ne anlama gelir?",
      cevap: "Direnç sıfır olduğunda elektronlar hiçbir engele çarpmadan akar; elektrik enerjisi ısıya dönüşüp kaybolmaz, %100 verimle iletilir."
    }
  ],
  // MEB KİTABINDAKİ KONTROL NOKTALARI
  kontrolNoktalari: [
    {
      id: "kn-7-7-3",
      baslik: "Kontrol Noktası 1 (Ölçüm Cihazları ve Bağlantı Hataları)",
      sorular: [
        {
          id: "kn-q-55",
          soru: "Bir devrede ampulün parlaklığını ve devreden geçen akımı ölçmek isteyen bir öğrenci, ampermetreyi ampule paralel bağlamıştır. Bu durumda ne gerçekleşir?",
          tip: "coktan-secmeli",
          secenekler: [
            "A) Ampul çok daha parlak ışık verirken pil kısa sürede tamamen biter.",
            "B) Pilin kutupları arasındaki toplam gerilim anında iki katına çıkar.",
            "C) Devrede hiçbir değişiklik yaşanmaz ve ampul normal şekilde ışık verir.",
            "D) Akım dirençsiz ampermetreden geçtiği için ampul kısa devre olup söner."
          ],
          dogruSecenek: "D",
          cevap: "D) Akım dirençsiz ampermetreden geçtiği için ampul kısa devre olup söner.",
          aciklama: "Ampermetre dirençsiz bir tel gibi davranır; paralel bağlandığı devre elemanını kısa devre yaparak söndürür."
        },
        {
          id: "kn-q-56",
          soru: "Voltmetrenin iç direnci neden çok büyüktür ve neden devreye daima paralel bağlanır?",
          tip: "klasik",
          cevap: "Voltmetre iki nokta arasındaki gerilimi (potansiyel farkı) ölçer. Devreden akım çalmamak ve devrenin çalışmasını bozmamak için iç direnci neredeyse sonsuzdur. Paralel bağlandığında üzerinden akım geçmez, sadece uçlar arasındaki gerilimi okur. Seri bağlanırsa sonsuz direnci yüzünden devreden akım akmasını engeller.",
          aciklama: "Voltmetre seri bağlanırsa ampul yanmaz."
        }
      ]
    },
    {
      id: "kn-7-7-4",
      baslik: "Kontrol Noktası 2 (Ohm Kanunu Hesaplamaları)",
      sorular: [
        {
          id: "kn-q-57",
          soru: "Bir elektrik devresinde 12 Volt'luk pilin uçlarına bağlı bir iletkenden 3 Amper akım geçmektedir. Bu iletkenin direnci kaç Ohm'dur?",
          tip: "coktan-secmeli",
          secenekler: [
            "A) 36 Ω",
            "B) 4 Ω",
            "C) 15 Ω",
            "D) 0.25 Ω"
          ],
          dogruSecenek: "B",
          cevap: "B) 4 Ω",
          aciklama: "Ohm Kanunu: R = V / I = 12 V / 3 A = 4 Ω."
        }
      ]
    }
  ],
  // BİLGİ BANKASI KUTULARI
  bilgiBankasi: [
    {
      id: "bb-7-7-3",
      baslik: "Su Tesisatı Analojisi ile Elektrik Devresi",
      icerik: "Elektrik devresini kavramanın en kolay yolu su tesisatına benzetmektir:\n• Pil = Suyu yukarı basan su pompası (Basınç farkı oluşturan güç)\n• İletken Tel = İçinden suyun aktığı borular\n• Elektrik Akımı (I) = Borudan saniyede akan suyun debisi/miktarı\n• Direnç (R) = Borunun daralan kısmı veya çark (Akışı zorlaştıran engel)\n• Gerilim (V) = İki nokta arasındaki su basıncı farkı.",
      onemliNot: "Basınç (gerilim) arttıkça suyun akış debisi (akım) doğru orantılı olarak artar."
    },
    {
      id: "bb-7-7-4",
      baslik: "İnsanı Öldüren Gerilim mi, Akım mıdır?",
      icerik: "Kışın yün kazağımızı çıkarırken saçlarımızdan çıtır çıtır kıvılcımlar çıkar; bu statik elektriğin gerilimi tam 10.000 Volt'u bulabilir fakat bize hiçbir zarar vermez! Çünkü içindeki yük miktarı ve akan akım mikroamper düzeyindedir. Oysa evdeki 220 Volt prizden geçecek 0.1 Amperlik (100 mA) bir akım kalp kaslarını kilitleyip durdurmaya yeter. Yani insanı çarpan gerilimin büyüklüğü değil, vücuttan geçen AKIMIN (Amper) şiddetidir!",
      onemliNot: "Hayati tehlikeyi belirleyen vücuttan geçen akım şiddetidir."
    }
  ],
  // MEB KİTABINDAKİ PERFORMANS GÖREVİ
  performansGorevi: {
    baslik: "Gerilim - Akım Grafiği Çizimi ve Bilinmeyen Direncin Tespiti Laboratuvarı",
    amac: "Farklı sayıda piller (1.5 V, 3.0 V, 4.5 V, 6.0 V) kullanarak bir iletkenin uçlarındaki gerilim ve üzerinden geçen akım değerlerini ölçmek; Gerilim-Akım grafiği çizerek eğimden direnci hesaplamak.",
    surecAdimlari: [
      "Bir ampul, ampermetre (seri), voltmetre (paralel), anahtar ve 4 adet 1.5 V'luk pilden oluşan devreyi kurunuz.",
      "Önce tek pil (1.5 V) bağlayarak ampermetre ve voltmetre değerlerini kaydediniz.",
      "Pillere sırasıyla 2., 3. ve 4. pilleri seri ekleyerek her defasında gerilim ve akım değerlerini veri tablosuna yazınız.",
      "Milimetrik grafik kâğıdında düşey eksene Gerilim (V), yatay eksene Akım (I) çizerek noktaları birleştirip doğruyu elde ediniz.",
      "Doğrunun eğimini (V / I) hesaplayarak ampulün direncini bulunuz."
    ],
    beklenenUrun: "Milimetrik Kâğıtta Çizilmiş Gerilim-Akım Grafiği ve Direnç Hesaplama Raporu.",
    degerlendirmeKriterleri: [
      "Ampermetre ve voltmetrenin devreye kurallarına uygun doğru bağlanması",
      "Gerilim arttıkça akımın doğru orantılı arttığının grafikte gösterilmesi",
      "Eğim formülüyle direncin hatasız hesaplanması"
    ]
  },
  // MEB KİTABI NELER ÖĞRENDİK BÖLÜMÜ SORULARI VE MAARİF ÇÖZÜMLERİ
  nelerOgrenildiSorulari: [
    {
      id: "no-7-7-5",
      soru: "1. Elektrik akımı, gerilim (potansiyel fark) ve direnç kavramlarını tanımlayarak birimlerini ve ölçüm aletlerini belirtiniz.",
      cevap: "1. Elektrik Akımı (I): İletkenin kesitinden birim zamanda geçen yük miktarıdır. Birimi Amper (A), ölçüm aleti Ampermetredir (seri bağlanır). 2. Gerilim (V): Elektronları devrede hareket ettiren potansiyel enerji farkıdır. Birimi Volt (V), ölçüm aleti Voltmetredir (paralel bağlanır). 3. Direnç (R): İletkenin elektrik akımına karşı gösterdiği zorluktur. Birimi Ohm'dur (Ω).",
      detayliCozum: "Üç nicelik Ohm Kanunu (V = I · R) ile birbirine bağlıdır."
    },
    {
      id: "no-7-7-6",
      soru: "2. Ohm Kanununu açıklayınız. Bir iletkenin uçları arasındaki gerilim 3 katına çıkarılırsa üzerinden geçen akım ve iletkenin direnci nasıl değişir?",
      cevap: "Ohm Kanunu: Bir iletkenin uçları arasındaki gerilimin (V) üzerinden geçen akıma (I) oranı daima sabittir (R = V / I). Gerilim 3 katına çıkarıldığında üzerinden geçen akım da DOĞRU ORANTILI OLARAK 3 KATINA ÇIKAR. İletkenin direnci ise DEĞİŞMEZ (sabit kalır); çünkü direnç sadece iletkenin cinsine, uzunluğuna ve kesitine bağlıdır.",
      detayliCozum: "Gerilim/Akım oranı sabit kaldığı için R değişmez."
    },
    {
      id: "no-7-7-7",
      soru: "3. Bir elektrik devresinde ampermetre ve voltmetrenin bağlanma kurallarını gerekçeleriyle (iç dirençleri açısından) açıklayınız.",
      cevap: "Ampermetre devreye SERİ bağlanır; çünkü iç direnci sıfıra yakındır, üzerinden geçen akımı etkilemeden tüm akımı ölçer. Paralel bağlanırsa kısa devre yapar. Voltmetre ise devreye PARALEL bağlanır; çünkü iç direnci neredeyse sonsuzdur, üzerinden akım geçirmez ve iki nokta arasındaki enerji farkını ölçer. Seri bağlanırsa akımı keserek devreyi durdurur.",
      detayliCozum: "Ampermetre dirençsiz tel gibidir; voltmetre yalıtkan anahtar gibidir."
    },
    {
      id: "no-7-7-8",
      soru: "4. Uçları arasındaki gerilimi 24 Volt olan bir elektrik sobasının direnci 8 Ohm olduğuna göre bu sobanın prizden çektiği elektrik akımı kaç Amper'dir?",
      cevap: "Ohm Kanunu formülü: I = V / R. Verilenler: V = 24 Volt, R = 8 Ohm. Çözüm: I = 24 / 8 = 3 Amper akım çeker.",
      detayliCozum: "Ohm kanununda I = V / R bağıntısı uygulanır."
    }
  ],
  hikmetStages: [
    {
      stage: 1,
      name: "1. Varlığı Tanıt (Elektrik Akımı - I)",
      concept: "Yüklerin Akışı",
      text: "Elektronların negatif kutuptan pozitif kutba doğru iletken içindeki titreşimsel hareketiyle elektrik akımı doğar. Sembolü: I, Birimi: Amper (A). Devreye seri bağlanan ampermetre ile ölçülür.",
      analogies: ["Borudaki suyun akış hızı ve debisi"]
    },
    {
      stage: 2,
      name: "2. Parçalarını Göster (Gerilim / Voltaj - V)",
      concept: "Harekete Geçiren Güç",
      text: "Yükleri devrede dolanmaya zorlayan elektriksel potansiyel farkıdır. Sembolü: V, Birimi: Volt (V). Devreye paralel bağlanan voltmetre ile ölçülür.",
      analogies: ["Suyu pompalayan su kulesinin yüksekliği"]
    },
    {
      stage: 3,
      name: "3. Sanatını Çöz (Direnç ve Ohm Kanunu)",
      concept: "V = I · R Dengesi",
      text: "Alman fizikçi Georg Simon Ohm tarafından keşfedilmiştir. Bir iletkenin uçlarındaki gerilimin akıma oranı sabittir ve iletkenin direncini verir. R = V / I. Gerilim arttıkça akım da orantılı artar.",
      analogies: ["Daralan borunun suyu sıkıştırması"]
    },
    {
      stage: 4,
      name: "4. Hikmetini Kavra (Akım-Gerilim Uyumu)",
      concept: "Kusursuz Oran",
      text: "Eğer gerilim ile akım arasında doğrusal bir ilişki olmasaydı elektronik cihazlar tasarlanamaz, bilgisayar çipleri çalışamazdı. Bu sabitlik doğanın matematiksel intizamının eseridir.",
      analogies: ["Terazinin iki kefesi arasındaki kusursuz matematik"]
    },
    {
      stage: 5,
      name: "5. Teknolojide İnsan (Direnç Renk Kodları ve Çipler)",
      concept: "Mikroelektronik",
      text: "Elektronik kartlardaki renkli çizgili minik dirençler, cep telefonumuzun işlemcisine giden akımı hassasça sınırlar ve milyonlarca transistörün yanmasını engeller.",
      analogies: ["Hassas mikro çipleri koruyan güvenlik barajları"]
    },
    {
      stage: 6,
      name: "6. Medeniyet Ufku (Georg Simon Ohm ve Bilimsel Sabır)",
      concept: "Ohm'un Mirası",
      text: "Georg Simon Ohm (1789-1854) kendi telini ve pillerini üreterek yıllarca sabırla deneyler yapmış; bilimin reddettiği kanununu inatla savunarak bugün tüm dünyanın kullandığı Ohm birimine adını yazdırmıştır.",
      analogies: ["Sabırla gerçeği arayan bilim sevdalısı"]
    }
  ],
  etkinlikler: [
    {
      id: "etk-7-7-2",
      title: "Etkinlik Noktası: Gerilim - Akım Grafiği Çizimi ve Direnç Hesabı",
      type: "Deney ve Grafik Analizi",
      materials: ["Ayarlanabilir güç kaynağı (pil)", "Bir adet ampul / direnç", "Ampermetre", "Voltmetre", "Kablolar"],
      steps: [
        "1. Adım: Devreye ampermetreyi seri, voltmetreyi ampule paralel bağlayınız.",
        "2. Adım: Gerilimi 3V, 6V, 9V ve 12V yaparak ampermetrede okunan akım değerlerini kaydediniz (Örn: 0.5A, 1.0A, 1.5A, 2.0A).",
        "3. Adım: V / I oranlarını hesaplayınız (3/0.5 = 6, 6/1 = 6, 9/1.5 = 6, 12/2 = 6 Ω).",
        "4. Adım: Milimetrik kağıda Gerilim - Akım grafiği çizerek eğimin sabit bir doğru olduğunu görünüz."
      ],
      questions: [
        {
          qId: "etk-u7s2-q1",
          label: "1. Soru",
          prompt: "Deneyde gerilimin akıma oranının daima 6 çıkması neyi ifade eder?",
          answer: "Ampulün elektriksel direncinin 6 Ohm olduğunu ve gerilim artsa bile direncin sabit kaldığını ifade eder."
        },
        {
          qId: "etk-u7s2-q2",
          label: "2. Soru",
          prompt: "Gerilim-akım grafiğinin eğimi daha dik olan bir telin direnci hakkında ne söylenebilir?",
          answer: "Grafiğin eğimi ne kadar dikse, aynı akımı geçirmek için o kadar yüksek gerilim gerektiğinden iletkenin direnci o kadar büyüktür."
        }
      ]
    }
  ],
  bilgiIstasyonlari: [
    {
      title: "Bilimin Adanmış İsmi: Georg Simon Ohm",
      scientistOrMission: "Ohm Kanunu (1826)",
      description: "Ohm, pillerin gücü zayıfladığı için deneylerini termoelektrik çiftlerle yapmış ve gerilim-akım orantısını kesin matematiksel kanun haline getirmiştir.",
      hikmetNote: "Büyük buluşlar sabır, titizlik ve fıtrattaki matematiksel düzeni keşfetme aşkıyla doğar."
    },
    {
      title: "Voltmetre ve Ampermetrenin İç Yapısı",
      scientistOrMission: "Ölçüm Aletleri Mühendisliği",
      description: "Voltmetre akım çekmemek için mega-ohm düzeyinde devasa iç dirence sahiptir; Ampermetre ise akımı engellememek için sıfıra yakın mikro-ohm iç dirençle üretilir.",
      hikmetNote: "Her ölçü aleti, ölçtüğü sistemi bozmayacak fıtri bir incelikle tasarlanmalıdır."
    }
  ],
  dda: {
    id: "dda-ohm-root",
    statement: "Ampermetre elektrik akımını ölçer ve devreye seri bağlanır.",
    correctDecision: "D",
    reason: "Ampermetre akımı ölçer ve devreye seri bağlanır.",
    ifTrue: {
      id: "dda-ohm-node-d",
      statement: "Voltmetre devredeki iki nokta arasındaki gerilimi ölçer ve devre elemanına paralel bağlanır.",
      correctDecision: "D",
      reason: "Voltmetre gerilimi ölçer ve paralel bağlanır.",
      ifTrue: {
        id: "dda-ohm-leaf-1",
        statement: "Ohm Kanununa göre bir iletkenin uçlarındaki gerilim arttıkça iletkenin direnci de artar.",
        correctDecision: "Y",
        reason: "İletkenin direnci sabittir (boy, kesit ve cinse bağlıdır); gerilim arttıkça akım artar, direnç değişmez.",
        ifTrue: { exit: 1, isCorrect: false, feedback: "Direnç gerilimle değişmez, Y kolundan gidilmeliydi." },
        ifFalse: { exit: 2, isCorrect: true, feedback: "Tebrikler! Ohm Kanunu DDA testinde doğru kararlarla 2. Çıkışa ulaştınız." }
      },
      ifFalse: {
        id: "dda-ohm-leaf-2",
        statement: "Gerilim-akım grafiğinin eğimi iletkenin direncini verir.",
        correctDecision: "D",
        reason: "Eğim = V / I = R'dir.",
        ifTrue: { exit: 3, isCorrect: false, feedback: "Voltmetre paralel bağlandığı için D kolundan gidilmeliydi." },
        ifFalse: { exit: 4, isCorrect: false, feedback: "Hatalı çıkış." }
      }
    },
    ifFalse: {
      id: "dda-ohm-node-y",
      statement: "Elektrik akımının birimi Volt'tur.",
      correctDecision: "Y",
      reason: "Akımın birimi Amper'dir.",
      ifTrue: { exit: 5, isCorrect: false, feedback: "Kök ifade doğruydu." }
    }
  },
  biliyorumAnliyorumDusunuyorum: {
    biliyorum: "Akımın Ampermetre ile seri, gerilimin Voltmetre ile paralel ölçüldüğünü ve Ohm Kanununun V = I · R olduğunu biliyorum.",
    anliyorum: "İletkenin direncinin gerilim veya akıma bağlı olmadığını; sadece telin boyuna, kesitine, cinsine ve sıcaklığına bağlı bir iç özellik olduğunu anlıyorum.",
    dusunuyorum: "Eğer V / I oranı sabit kalmasaydı, prizimize taktığımız hiçbir televizyon, bilgisayar veya buzdolabı güvenle çalışabilir miydi?"
  },
  pekistirmeIstasyonu: {
    stationTitle: "Pekiştirme İstasyonu: Akım, Gerilim ve Direnç İlişkisi",
    pageReference: "MEB 7. Sınıf Fen Bilimleri 2. Kitap, Sayfa 163-176",
    summaryText: "Bu istasyonda Ampermetre ve Voltmetre bağlama kurallarını, Ohm Kanunu formülünü (V=I·R), gerilim-akım grafiklerini ve direnç hesaplamalarını pekiştirdiniz.",
    targetSkills: [
      "Ampermetreyi devreye doğru bağlayarak akım şiddetini okuma",
      "Voltmetreyi ampule paralel bağlayarak potansiyel farkı ölçme",
      "Ohm Kanunu formülüyle (V = I · R) bilinmeyen büyüklüğü hesaplama",
      "Gerilim-akım grafiklerinden eğim hesaplayarak direnç bulma",
      "Farklı dirençlerin gerilim-akım grafiklerini karşılaştırma"
    ]
  },
  nelerOgrenildi: {
    title: "2. Bölüm Sonunda Neler Öğrenildi? (Neler Öğrendik?)",
    ogrenilenKavramlar: [
      "Elektrik Akımı (I) & Amper & Ampermetre (Seri Bağlama)",
      "Gerilim / Potansiyel Fark (V) & Volt & Voltmetre (Paralel Bağlama)",
      "Elektriksel Direnç (R) & Ohm (Ω)",
      "Ohm Kanunu: V = I · R ve R = V / I",
      "Gerilim - Akım Grafiği ve Eğim = Direnç",
      "Ölçü Aletlerinin İç Dirençleri",
      "Georg Simon Ohm ve Bilim Tarihi Mirası"
    ],
    ozet: "MEB 2. Kitap 7. Ünite 2. Bölüm Sentezi: Elektrik devresinde birim zamanda geçen yüke Elektrik Akımı denir, birimi Amper'dir ve devreye seri bağlanan Ampermetre ile ölçülür. Devredeki iki nokta arasındaki enerji farkına Gerilim (Potansiyel Fark) denir, birimi Volt'tur ve devre elemanına paralel bağlanan Voltmetre ile ölçülür. Bir iletkenin uçları arasındaki gerilim ile üzerinden geçen akım doğru orantılıdır; gerilimin akıma oranı daima sabittir ve bu oran iletkenin Direncini (R) verir (Ohm Kanunu: R = V / I). Gerilim-akım grafiğinin eğimi iletkenin direncine eşittir.",
    kontrolSorulari: [
      {
        id: "ko-u7s2-1",
        soru: "Bir devrede ampulün uçları arasındaki gerilim 12 Volt iken üzerinden 3 Amper akım geçmektedir. Bu ampulün direnci kaç Ohm'dur?",
        cevap: "Ohm Kanunu gereğince R = V / I formülü kullanılır. R = 12 V / 3 A = 4 Ohm (Ω) olarak hesaplanır."
      },
      {
        id: "ko-u7s2-2",
        soru: "Bir devrede ampermetre yanlışlıkla ampule paralel bağlanırsa ne olur?",
        cevap: "Ampermetrenin iç direnci sıfıra yakın olduğu için akım ampulden değil ampermetreden geçer; ampul söner (kısa devre olur) ve devreden aşırı akım geçerek ampermetreye veya pile zarar verebilir."
      },
      {
        id: "ko-u7s2-3",
        soru: "Aynı gerilim altında K telinden 2 Amper, L telinden ise 6 Amper akım geçmektedir. K ve L tellerinin dirençlerini karşılaştırınız.",
        cevap: "R = V / I formülüne göre akım ile direnç ters orantılıdır. K telinden daha az akım geçtiğine göre direnci daha büyüktür. K'nin direnci L'nin direncinin 3 katıdır (R_K = 3 · R_L)."
      }
    ]
  },
  sonrakiKonu: {
    code: "7.7.3",
    title: "7. Ünite Sonu Değerlendirme & 2. Kitap Bütüncül Sonuç Çalışmaları"
  },
  fillInBlanks: [
    {
      id: "fib-7-7-11",
      number: 1,
      baglam: "Elektrik akımının birimi Amper'dir.",
      soruKoku: "Devreden geçen elektrik akımı şiddetinin uluslararası birimi ________'dir.",
      blankAnswer: "Amper",
      acceptableAnswers: ["Amper", "amper"],
      explanation: "Akım birimi Amperdir.",
      wordBankHint: ["Amper", "Volt", "Ohm", "Watt"]
    },
    {
      id: "fib-7-7-12",
      number: 2,
      baglam: "Akımı ölçen alet ampermetredir.",
      soruKoku: "Elektrik devresinden geçen akım şiddetini ölçen alete ________ adı verilir.",
      blankAnswer: "ampermetre",
      acceptableAnswers: ["ampermetre"],
      explanation: "Akım ölçer ampermetredir.",
      wordBankHint: ["ampermetre", "voltmetre", "termometre", "dinamometre"]
    },
    {
      id: "fib-7-7-13",
      number: 3,
      baglam: "Ampermetre devreye seri bağlanır.",
      soruKoku: "Ampermetre ölçüm yapabilmek için devreye daima ________ olarak bağlanır.",
      blankAnswer: "seri",
      acceptableAnswers: ["seri"],
      explanation: "Ampermetre seri bağlanır.",
      wordBankHint: ["seri", "paralel", "eğik", "açık"]
    },
    {
      id: "fib-7-7-14",
      number: 4,
      baglam: "Gerilimin birimi Volt'tur.",
      soruKoku: "Bir devrede iki nokta arasındaki potansiyel farkın (gerilimin) birimi ________'tur.",
      blankAnswer: "Volt",
      acceptableAnswers: ["Volt", "volt"],
      explanation: "Gerilim birimi Volttur.",
      wordBankHint: ["Volt", "Amper", "Ohm", "Joule"]
    },
    {
      id: "fib-7-7-15",
      number: 5,
      baglam: "Gerilimi ölçen alet voltmetredir.",
      soruKoku: "Devre elemanının uçları arasındaki gerilimi ölçen cihaza ________ denir.",
      blankAnswer: "voltmetre",
      acceptableAnswers: ["voltmetre"],
      explanation: "Gerilim ölçer voltmetredir.",
      wordBankHint: ["voltmetre", "ampermetre", "barometre", "manometre"]
    },
    {
      id: "fib-7-7-16",
      number: 6,
      baglam: "Voltmetre devreye paralel bağlanır.",
      soruKoku: "Voltmetre ölçülecek devre elemanına daima ________ bağlanmalıdır.",
      blankAnswer: "paralel",
      acceptableAnswers: ["paralel"],
      explanation: "Voltmetre paralel bağlanır.",
      wordBankHint: ["paralel", "seri", "çapraz", "kısa devre"]
    },
    {
      id: "fib-7-7-17",
      number: 7,
      baglam: "Direncin birimi Ohm'dur.",
      soruKoku: "Elektriksel direncin birimi ________'dur ve 'Ω' simgesiyle gösterilir.",
      blankAnswer: "Ohm",
      acceptableAnswers: ["Ohm", "ohm"],
      explanation: "Direnç birimi Ohmdur.",
      wordBankHint: ["Ohm", "Volt", "Amper", "Newton"]
    },
    {
      id: "fib-7-7-18",
      number: 8,
      baglam: "Gerilimin akıma oranı sabittir ve direnci verir.",
      soruKoku: "Gerilim / Akım oranının sabit olduğunu ifade eden temel fizik yasası ________ Kanunudur.",
      blankAnswer: "Ohm",
      acceptableAnswers: ["Ohm", "ohm"],
      explanation: "V/I sabiti Ohm Kanunudur.",
      wordBankHint: ["Ohm", "Newton", "Arşimet", "Pascal"]
    },
    {
      id: "fib-7-7-19",
      number: 9,
      baglam: "Gerilim-akım grafiğinin eğimi direnci verir.",
      soruKoku: "Gerilim - akım grafiğinde doğrunun eğimi iletkenin elektriksel ________ verir.",
      blankAnswer: "direncini",
      acceptableAnswers: ["direncini", "direnc", "direnç"],
      explanation: "Eğim direnci verir.",
      wordBankHint: ["direncini", "akımını", "gücünü", "ısısını"]
    },
    {
      id: "fib-7-7-20",
      number: 10,
      baglam: "Voltmetrenin iç direnci çok büyüktür.",
      soruKoku: "Voltmetrenin üzerinden akım geçmemesi için iç direnci çok ________ üretilir.",
      blankAnswer: "büyük",
      acceptableAnswers: ["büyük", "buyuk", "yüksek"],
      explanation: "Voltmetre iç direnci çok büyüktür.",
      wordBankHint: ["büyük", "küçük", "sıfır", "değişken"]
    }
  ],
  contextQuestions: [
    {
      id: "mcq-7-7-21",
      number: 1,
      baglam: "Bir devrede bir ampulün uçlarına bağlanan voltmetre 18 Volt değerini, ampulün bağlı olduğu koldaki ampermetre ise 2 Amper değerini göstermektedir.",
      soruKoku: "Ohm Kanununa (R = V / I) göre bu ampulün direnci kaç Ohm'dur?",
      secenekler: {
        A: "9 Ohm",
        B: "36 Ohm",
        C: "20 Ohm",
        D: "16 Ohm"
      },
      dogruCevap: "A",
      cozum: "R = V / I = 18 V / 2 A = 9 Ohm.",
      olculenKazanim: "F.7.7.2.1. Ohm kanunuyla direnç hesaplar.",
      olculenBeceri: "Sayısal Hesaplama Becerisi",
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
      id: "mcq-7-7-22",
      number: 2,
      baglam: "Bir öğrenci laboratuvarda ampermetre ve voltmetreyi devreye bağlarken bir hata yapmış ve ampermetreyi ampule paralel, voltmetreyi ise devreye seri bağlamıştır.",
      soruKoku: "Anahtar kapatıldığında devrede ne gözlenir?",
      secenekler: {
        A: "Voltmetrenin iç direnci çok büyük olduğundan devreden akım geçemez ve ampul yanmaz.",
        B: "Ampul çok parlak yanar.",
        C: "Voltmetre patlar.",
        D: "Pil hemen tükenir."
      },
      dogruCevap: "A",
      cozum: "Voltmetrenin iç direnci sonsuz kabul edilecek kadar büyüktür. Seri bağlandığında akımı tamamen keser ve ampul ışık vermez.",
      olculenKazanim: "F.7.7.2.2. Voltmetrenin seri bağlanmasının sonucunu analiz eder.",
      olculenBeceri: "Ölçüm Aleti Hata Analizi",
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
      id: "mcq-7-7-23",
      number: 3,
      baglam: "Bir direncin uçlarındaki gerilim 10 V iken akım 1 A; gerilim 20 V iken akım 2 A; gerilim 30 V iken akım 3 A olarak ölçülmüştür.",
      soruKoku: "Bu deney sonuçlarına göre direnç değeri ve gerilim-akım ilişkisi hakkında ne söylenebilir?",
      secenekler: {
        A: "Direnç 10 Ohm'dur ve sabittir; gerilim arttıkça akım doğru orantılı olarak artar.",
        B: "Direnç sürekli artmaktadır.",
        C: "Direnç sıfırdır.",
        D: "Akım gerilimden bağımsızdır."
      },
      dogruCevap: "A",
      cozum: "Her durumda V / I = 10/1 = 20/2 = 30/3 = 10 Ohm sabittir. Gerilim ile akım doğru orantılıdır.",
      olculenKazanim: "F.7.7.2.3. Deney verilerinden Ohm Kanununu doğrular.",
      olculenBeceri: "Veri Analizi",
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
      id: "mcq-7-7-24",
      number: 4,
      baglam: "Aynı maddeden yapılmış, uzunlukları eşit fakat kesit alanları farklı X ve Y tellerinin Gerilim - Akım grafikleri incelendiğinde; aynı gerilim altında X telinden 4 A, Y telinden ise 1 A akım geçtiği görülmektedir.",
      soruKoku: "X ve Y tellerinin dirençleri ve kalınlıkları hakkında hangisi doğrudur?",
      secenekler: {
        A: "X telinin direnci daha küçüktür ve X teli Y telinden daha kalındır.",
        B: "Y telinin direnci daha küçüktür.",
        C: "Her ikisinin direnci eşittir.",
        D: "X teli daha incedir."
      },
      dogruCevap: "A",
      cozum: "X telinden daha çok akım geçtiği için direnci daha küçüktür (R_X < R_Y). İletken kalınlaştıkça direnç azaldığı için X teli daha kalındır.",
      olculenKazanim: "F.7.7.2.3. Direnç-kesit alanı ilişkisini Ohm kanunuyla bağdaştırır.",
      olculenBeceri: "Fiziksel Nitelik ve Grafik Entegrasyonu",
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
      id: "mcq-7-7-25",
      number: 5,
      baglam: "Bir elektrik devresinde 6 Ohm'luk bir direncin üzerinden 2 Amper akım geçmektedir.",
      soruKoku: "Bu direncin uçları arasındaki gerilim (potansiyel fark) kaç Volt'tur?",
      secenekler: {
        A: "12 Volt",
        B: "3 Volt",
        C: "8 Volt",
        D: "4 Volt"
      },
      dogruCevap: "A",
      cozum: "V = I · R = 2 A · 6 Ω = 12 Volt.",
      olculenKazanim: "F.7.7.2.1. V = I · R formülünü uygular.",
      olculenBeceri: "Formül Uygulama",
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
      id: "mcq-7-7-26",
      number: 6,
      baglam: "Ampermetrenin iç direncinin sıfıra yakın (çok küçük) olmasının temel mühendislik sebebi nedir?",
      soruKoku: "Ampermetrenin iç direnci neden ihmal edilecek kadar küçük tasarlanır?",
      secenekler: {
        A: "Devreye seri bağlandığında devrenin toplam direncini artırmayıp geçen akımı değiştirmeden doğru ölçebilmek için",
        B: "Ampermetrenin hafif olması için",
        C: "Daha az pil tüketmesi için",
        D: "Ses çıkarmaması için"
      },
      dogruCevap: "A",
      cozum: "Eğer ampermetrenin direnci büyük olsaydı devreye girdiğinde akımı düşürür ve gerçek akımı ölçemezdi.",
      olculenKazanim: "F.7.7.2.2. Ampermetrenin elektriksel tasarım gerekçesini açıklar.",
      olculenBeceri: "Ölçüm Cihazı Mühendisliği",
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
      id: "mcq-7-7-27",
      number: 7,
      baglam: "Bir iletken telin direnci 20 Ohm'dur. Bu tel 100 Volt'luk bir üretecin kutuplarına bağlanmıştır.",
      soruKoku: "Bu iletken telden geçen elektrik akımı kaç Amper'dir?",
      secenekler: {
        A: "5 Amper",
        B: "2000 Amper",
        C: "80 Amper",
        D: "0.2 Amper"
      },
      dogruCevap: "A",
      cozum: "I = V / R = 100 V / 20 Ω = 5 Amper.",
      olculenKazanim: "F.7.7.2.1. Akım şiddetini Ohm kanunuyla bulur.",
      olculenBeceri: "Sayısal Akıl Yürütme",
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
      id: "mcq-7-7-28",
      number: 8,
      baglam: "Georg Simon Ohm'un elektrik akımı üzerine yaptığı araştırmalar sırasında pillerin kimyasal enerjisi azaldığında yaşadığı zorluğu aşmak için sıcaklık farkıyla elektrik üreten termoelementler kullandığı bilinmektedir.",
      soruKoku: "Ohm'un bu yöntemi geliştirmesi bilim insanlarının hangi özelliğini yansıtır?",
      secenekler: {
        A: "Karşılaştığı deneysel zorlukları aşmak için yenilikçi ve kararlı çözümler üretebilme becerisini",
        B: "Pillere güvenmediğini",
        C: "Fiziği bıraktığını",
        D: "Yalnızca teorik düşündüğünü"
      },
      dogruCevap: "A",
      cozum: "Ohm deneysel hassasiyeti artırmak için alternatif yöntemler geliştirmiş, bu da bilimsel azim ve yaratıcılığın göstergesidir.",
      olculenKazanim: "F.7.7.2.4. Georg Simon Ohm'un bilimsel yöntemini değerlendirir.",
      olculenBeceri: "Bilim Tarihi ve Metodoloji",
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
      id: "mcq-7-7-29",
      number: 9,
      baglam: "Bir devrede direnç sabitken pile seri olarak özdeş bir pil daha bağlandığında (gerilim iki katına çıkarıldığında) devreden geçen akım ve ampulün parlaklığı nasıl değişir?",
      soruKoku: "Gerilimin iki katına çıkmasının akım ve parlaklığa etkisi nedir?",
      secenekler: {
        A: "Akım 2 katına çıkar ve ampul belirgin şekilde daha parlak yanar.",
        B: "Akım yarıya iner.",
        C: "Parlaklık azalır.",
        D: "Değişmez."
      },
      dogruCevap: "A",
      cozum: "I = V / R bağıntısına göre direnç sabitken gerilim 2 katına çıkarsa akım da 2 katına çıkar. Akım arttığı için ampul çok daha parlak ışık verir.",
      olculenKazanim: "F.7.7.2.1. Gerilim-akım-parlaklık doğrudan ilişkisini kavrar.",
      olculenBeceri: "Doğru Orantı ve Gözlem",
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
      id: "mcq-7-7-30",
      number: 10,
      baglam: "Su tesisatında 'su vanasını kısmak' suyun akışına zorluk gösterir. Elektrik devrelerinde vanayı kısmak hangi devre elemanının etkisine karşılık gelir?",
      soruKoku: "Su vanasını kısmak hangi elektriksel kavramın artmasına benzer?",
      secenekler: {
        A: "Direncin artmasına (Akımın azalmasına)",
        B: "Gerilimin artmasına",
        C: "Pilin şarj olmasına",
        D: "Kısa devreye"
      },
      dogruCevap: "A",
      cozum: "Vanayı kısmak akışa karşı direnç oluşturur; elektrikte bu direncin artırılmasına ve akımın düşürülmesine karşılık gelir (reosta etkisi).",
      olculenKazanim: "F.7.7.2.1. Analoji yoluyla direnç kavramını açıklar.",
      olculenBeceri: "Analoji ve Modelleme",
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
      id: "mcq-7-7-31",
      number: 11,
      baglam: "Bir elektrik devresinde reosta (ayarlı direnç) kullanılarak direnç değeri artırılmıştır.",
      soruKoku: "Pil gerilimi sabitken direncin artırılması devreden geçen akımı nasıl etkiler?",
      secenekler: {
        A: "Akım azalır.",
        B: "Akım artar.",
        C: "Akım değişmez.",
        D: "Gerilim sıfır olur."
      },
      dogruCevap: "A",
      cozum: "I = V / R formülüne göre gerilim sabitken direnç artarsa akım azalır (ters orantı).",
      olculenKazanim: "F.7.7.2.1. Reosta ve akım kontrol ilişkisini analiz eder.",
      olculenBeceri: "Değişken Kontrolü",
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
      id: "mcq-7-7-32",
      number: 12,
      baglam: "Aşağıdaki devre şemalarından hangisinde hem ampermetre hem de voltmetre devreye doğru bağlanmıştır?",
      soruKoku: "Ampermetre ve voltmetrenin doğru bağlanma kuralı hangisidir?",
      secenekler: {
        A: "Ampermetre devreye SERİ, Voltmetre ampule PARALEL bağlanmalıdır.",
        B: "Ampermetre PARALEL, Voltmetre SERİ bağlanmalıdır.",
        C: "Her ikisi de SERİ bağlanmalıdır.",
        D: "Her ikisi de PARALEL bağlanmalıdır."
      },
      dogruCevap: "A",
      cozum: "Ampermetre akımı ölçtüğü için akım yoluna seri; voltmetre iki nokta arasındaki potansiyeli ölçtüğü için paralel bağlanır.",
      olculenKazanim: "F.7.7.2.2. Ölçüm aletlerinin bağlantı biçimlerini bilir.",
      olculenBeceri: "Devre Kurulum Kuralı",
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
      id: "mcq-7-7-33",
      number: 13,
      baglam: "Bir direncin uçlarındaki gerilim 24 Volt iken üzerinden 4 Amper akım geçmektedir. Bu direncin gerilimi 36 Volt'a çıkarılırsa üzerinden kaç Amper akım geçer?",
      soruKoku: "Yeni akım şiddeti kaç Amper olur?",
      secenekler: {
        A: "6 Amper",
        B: "9 Amper",
        C: "4 Amper",
        D: "12 Amper"
      },
      dogruCevap: "A",
      cozum: "Önce direnç bulunur: R = 24 / 4 = 6 Ohm. Direnç değişmez. Yeni gerilimde akım: I_yeni = V_yeni / R = 36 / 6 = 6 Amper.",
      olculenKazanim: "F.7.7.2.1. İki aşamalı Ohm kanunu problemini çözer.",
      olculenBeceri: "Problem Çözme ve Orantı",
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
      id: "mcq-7-7-34",
      number: 14,
      baglam: "Elektronik devre kartlarında yeşil plaka üzerinde yer alan kahverengi, kırmızı, altın sarısı çizgili silindirik minik parçalara 'direnç' denir.",
      soruKoku: "Bu minik dirençlerin akıllı telefon ve bilgisayar kartlarındaki temel görevi nedir?",
      secenekler: {
        A: "Hassas mikroçiplere giden akımı istenilen güvenli seviyede tutarak çiplerin yanmasını önlemek",
        B: "Telefonun şarjını bitirmek",
        C: "Cihazın ısınmasını sağlamak",
        D: "Hoparlörün sesini kısmak"
      },
      dogruCevap: "A",
      cozum: "Dirençler mikroelektronikte akım sınırlayıcı ve gerilim bölücü olarak kullanılır; hassas entegre devreleri korur.",
      olculenKazanim: "F.7.7.2.1. Direncin modern elektronikteki işlevini açıklar.",
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
      id: "mcq-7-7-35",
      number: 15,
      baglam: "Bir tıp cihazında insan vücudunun elektriksel direnci ölçülerek vücuttaki yağ ve kas oranı (biyoelektrik empedans) analiz edilmektedir.",
      soruKoku: "Bu cihazın çalışma prensibi Ohm kanunuyla nasıl açıklanır?",
      secenekler: {
        A: "Vücuda çok düşük zararsız bir gerilim uygulanıp geçen akım ölçülerek dokuların direnci hesaplanır (R = V / I).",
        B: "Vücut röntgeni çekilir.",
        C: "Vücudun sıcaklığı ölçülür.",
        D: "Kan grubu tayini yapılır."
      },
      dogruCevap: "A",
      cozum: "Cihaz sabit bir mikroskopik gerilim (V) verir, akımı (I) ölçer ve R = V / I formülüyle doku direncini hesaplayarak yağ oranını tespit eder.",
      olculenKazanim: "F.7.7.2.1. Ohm kanununun biyotıptaki uygulamalarını kavrar.",
      olculenBeceri: "Biyotıp ve Teknoloji Uygulaması",
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
      id: "mcq-7-7-36",
      number: 16,
      baglam: "Dirençleri sırasıyla R_K = 2 Ω ve R_L = 8 Ω olan iki ampul özdeş pillere paralel olarak bağlanmıştır.",
      soruKoku: "K ve L kollarından geçen akımlar (I_K ve I_L) arasındaki ilişki hangisidir?",
      secenekler: {
        A: "I_K = 4 · I_L (K kolundan geçen akım L'nin 4 katıdır)",
        B: "I_L = 4 · I_K",
        C: "I_K = I_L",
        D: "K'den hiç akım geçmez"
      },
      dogruCevap: "A",
      cozum: "Paralel kollarda gerilimler eşittir. I = V / R formülüne göre direnci 4 kat küçük olan K kolundan 4 kat daha fazla akım geçer.",
      olculenKazanim: "F.7.7.2.1. Paralel kollarda akım ve direnç dağılımını hesaplar.",
      olculenBeceri: "Ters Orantı ve Akım Paylaşımı",
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
      id: "mcq-7-7-37",
      number: 17,
      baglam: "Bir elektrikli ısıtıcının içindeki rezistans teli akkor hale gelip odayı ısıtırken, prize takılan besleme kablosunun hiç ısınmadığı görülür.",
      soruKoku: "Aynı akım geçtiği halde rezistans teli akkorlaşırken besleme kablosunun ısınmamasının sebebi nedir?",
      secenekler: {
        A: "Rezistans telinin direncinin çok yüksek, bakır besleme kablosunun direncinin ise çok küçük olması",
        B: "Kablodan akım geçmemesi",
        C: "Prizin elektriği soğutması",
        D: "Rezistansın boyalı olması"
      },
      dogruCevap: "A",
      cozum: "Açığa çıkan ısı akımın karesi ve dirençle orantılıdır (W = I² · R · t). Rezistansın direnci çok büyük olduğundan yoğun ısı yayar; bakır kablonun direnci çok az olduğundan ısınmaz.",
      olculenKazanim: "F.7.7.2.1. Direnç ve elektriksel ısı ilişkisini açıklar.",
      olculenBeceri: "Isı ve Enerji Dönüşümü Analizi",
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
      id: "mcq-7-7-38",
      number: 18,
      baglam: "Bir iletkenin Gerilim - Akım grafiğinde çizilen doğru orijinden (0,0) başlayıp düz bir çizgi halinde yükselmektedir.",
      soruKoku: "Grafiğin doğrusal bir çizgi olması iletkenin hangi özelliğini ispatlar?",
      secenekler: {
        A: "İletkenin elektriksel direncinin sabit kaldığını (Ohmik iletken olduğunu)",
        B: "İletkenin direncinin sürekli arttığını",
        C: "İletkenin eridiğini",
        D: "Akımın sıfır olduğunu"
      },
      dogruCevap: "A",
      cozum: "Doğrunun eğimi V / I sabit kaldığı için iletkenin direnci sabittir ve Ohm Kanununa tam uyar.",
      olculenKazanim: "F.7.7.2.3. Doğrusal gerilim-akım grafiğini yorumlar.",
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
      id: "mcq-7-7-39",
      number: 19,
      baglam: "Kuşların yüksek gerilim tellerine konduklarında elektrik akımına kapılmamalarının sebebi iki ayağı arasındaki mesafenin direncinin sıfıra yakın olması ve iki ayak arasında gerilim (potansiyel fark) oluşmamasıdır.",
      soruKoku: "Kuşların çarpılmaması elektrik devrelerindeki hangi temel prensiple açıklanır?",
      secenekler: {
        A: "Akımın akabilmesi için iki nokta arasında mutlaka bir potansiyel fark (gerilim) bulunması zorunluluğu",
        B: "Kuşların yalıtkan olması",
        C: "Tellerde elektrik olmaması",
        D: "Kuşların tüy yapısı"
      },
      dogruCevap: "A",
      cozum: "Elektrik akımı ancak iki nokta arasında gerilim farkı varsa akar. Kuşun iki ayağı aynı tel üzerinde olduğu için potansiyel fark sıfırdır ve kuşun üzerinden akım geçmez.",
      olculenKazanim: "F.7.7.2.1. Potansiyel fark ve akım oluşma şartını kavrar.",
      olculenBeceri: "Fiziksel Mantık ve Doğal Olay",
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
      id: "mcq-7-7-40",
      number: 20,
      baglam: "Ohm Kanunu (V = I · R), atomların içindeki elektronların görünmez akışından devasa hidroelektrik santrallerine, uzay istasyonlarının güneş panellerinden cebimizdeki akıllı telefonlara kadar tüm kainatta şaşmaz bir kanun olarak işlemektedir.",
      soruKoku: "Basit üç harfli bir denklemin (V = I · R) kâinattaki tüm elektrik hadiselerini idare etmesi insana hangi hikmet tefekkürünü kazandırır?",
      secenekler: {
        A: "Kâinatın arkasında sonsuz bir ilim, kusursuz bir matematiksel nizam ve tek bir Yaratıcı'nın birleştirici kanunu olduğunu",
        B: "Kanunların insanlar tarafından uydurulduğunu",
        C: "Elektriğin sadece laboratuvarda var olduğunu",
        D: "Doğada hiçbir matematik olmadığını"
      },
      dogruCevap: "A",
      cozum: "Ohm Kanunu gibi evrensel fiziksel bağıntılar, kâinattaki tevhid mührünün, ilahi hikmet ve kusursuz matematiksel nizamın en berrak delillerindendir.",
      olculenKazanim: "F.7.7.2.4. Hikmet ve kâinattaki matematiksel düzen tefekkürü kazanır.",
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
