import { SectionContent } from '../../types';

export const unit3Section2: SectionContent = {
  code: "7.3.2",
  title: "Kuvvet, İş ve Enerji İlişkisi",
  unitCode: "7.3",
  unitTitle: "3. Ünite: Kuvvet ve Enerji",
  summary: "Fiziksel anlamda iş kavramı, iş yapılabilme şartları (kuvvet uygulama ve kuvvet doğrultusunda yer değiştirme), iş birimi (Joule), günlük hayattaki iş kavramı ile fiziksel iş farkı, enerji tanımı ve iş ile enerji ilişkisi.",
  kazanimlar: [
    "F.7.3.2.1. Fiziksel anlamda yapılan işin, uygulanan kuvvet ve alınan yol ile ilişkili olduğunu açıklar.",
    "F.7.3.2.2. Enerji kavramını iş kavramı ile ilişkilendirir.",
    "F.7.3.2.3. Günlük hayattaki iş ile fen anlamındaki iş arasındaki farkı örneklerle açıklar."
  ],
  hatirlayalim: {
    text: "Kuvvet cisimlerin şeklini ve hareket durumunu değiştirebilir. Ancak her kuvvet harcama durumu fen anlamında iş yapıldığı anlamına gelmez.",
    keyPoints: [
      "Fiziksel Anlamda İş Şartı 1: Cisme mutlaka net bir kuvvet (F) uygulanmalıdır.",
      "Fiziksel Anlamda İş Şartı 2: Cisim, uygulanan kuvvetin DOĞRULTUSUNDA yol (x) almalıdır.",
      "İş Birimi: Joule (J)'dür. 1 Joule = 1 Newton × 1 Metre (W = F · x).",
      "Kuvvet ile hareket yönü dik ise (örneğin sırtındaki çantayı sabit tutarak yatay yolda yürümek) fiziksel anlamda iş YAPILMAZ!"
    ]
  },
  onDegerlendirme: [
    {
      id: "od-7-3-2-1",
      question: "Bütün gücüyle sabit bir beton duvarı saatlerce iten ve ter içinde kalan bir kişi fen anlamında iş yapmış mıdır?",
      answer: "Hayır, yapmamıştır! Çünkü duvar yer değiştirmemiştir (alınan yol sıfırdır: x = 0). Kuvvet harcanmış ve yorulunmuş olsa da fen anlamında iş sıfırdır."
    },
    {
      id: "od-7-3-2-2",
      question: "Sırtında ağır bir okul çantasıyla düz okul koridorunda sabit hızla yürüyen bir öğrenci fen anlamında iş yapar mı?",
      answer: "Hayır! Çünkü çantayı tutmak için uygulanan kuvvet yukarı doğrudur (düşey); çantanın hareketi ise yataydır. Kuvvet ve hareket doğrultusu birbirine dik olduğu için fen anlamında yer çekimine karşı iş yapılmaz."
    }
  ],
  hazirlik: {
    question: "Aynı koli masanın üzerine kaldırılırken iş yapılır da neden masanın üzerinde dururken iş yapılmaz?",
    answer: "Çünkü koliyi yukarı kaldırırken yukarı doğru uyguladığımız kuvvet doğrultusunda koli yukarı yol alır ve iş yapılır; masada dururken yol alma yoktur."
  },
  merak: {
    question: "Yorulmak ile iş yapmak neden her zaman aynı şey değildir?",
    answer: "Yorulmak kaslarımızın kasılıp enerji tüketmesidir; fen anlamında iş ise harcanan kuvvetin bir cismi kendi doğrultusunda hareket ettirmesiyle ölçülür."
  },
  kopru: {
    title: "Emek, Kuvvet ve Bereket: Hikmetli İş",
    content: "Kâinatta hiçbir zerre boş ve gayesiz hareket etmez. Yağmur bulutları dağlara su taşırken, nehirler vadiyi yararken, kalbimiz kan pompalarken durmaksızın kusursuz bir nizamla iş yaparlar.",
    question: "Doğadaki bu devasa kuvvetler kendi kendine mi koordine olur, yoksa her hareketi hedefe yönlendiren bir Kanun Koyucu mu vardır?",
    answer: "Her işi bir gaye ve hikmetle yaratan, kuvvete yön ve menzil tayin eden Sonsuz Kudret Sahibi'dir."
  },
  // MEB DERS KİTABI DETAYLI KONU ANLATIMI, TABLOLAR, BAĞLANTI NOKTALARI VE HABERLER
  konuAnlatimi: {
    ozet: "Günlük hayatta 'iş yapmak' ifadesi ders çalışmak, bilgisayar kullanmak veya yorulmak anlamında kullanılırken; fen bilimlerinde fiziksel iş yapılabilmesi için iki kesin kural vardır: Cisme bir kuvvet uygulanmalı ve cisim uygulanan kuvvetin doğrultusunda yer değiştirmelidir. İş birimi Joule (J)'dür (W = F · x). İş yapabilme yeteneğine enerji denir; yapılan iş cisimde enerji değişimine dönüşür.",
    kavramlar: [
      {
        terim: "Fiziksel Anlamda İş (W)",
        tanim: "Bir cisme uygulanan kuvvetin, o cisme kendi doğrultusunda yer değiştirme (yol) kazandırmasıdır.",
        onemliNoktalar: [
          "Matematiksel Formül: İş = Kuvvet × Alınan Yol (W = F · x).",
          "Kuvvet birimi Newton (N), yol birimi Metre (m) alındığında iş birimi Joule (J) olur: 1 Joule = 1 N · m.",
          "Uygulanan kuvvet artarsa yapılan iş artar (Doğru orantılı).",
          "Alınan yol artarsa yapılan iş artar (Doğru orantılı)."
        ]
      },
      {
        terim: "Fiziksel Anlamda İş Yapılma Şartları",
        tanim: "Bir olayın fen anlamında iş sayılabilmesi için sağlanması zorunlu olan üç altın kuraldır.",
        onemliNoktalar: [
          "1. Cisme mutlaka net bir kuvvet uygulanmalıdır (F > 0).",
          "2. Cisim uygulanan kuvvetin etkisiyle mutlaka yer değiştirmelidir (x > 0).",
          "3. Cismin hareket doğrultusu, uygulanan kuvvetin doğrultusu ile AYNI OLMALIDIR.",
          "DİKKAT: Kuvvet ile hareket doğrultusu birbirine DİK ise (örneğin sırtındaki çantayı taşıyarak yatay koridorda sabit hızla yürümek) fiziksel anlamda iş YAPILMAZ!"
        ]
      },
      {
        terim: "Günlük Yaşamdaki İş ile Fen Anlamındaki İş Farkı",
        tanim: "Yorulmak ile fen anlamında iş yapmanın karıştırılmaması gerektiğidir.",
        onemliNoktalar: [
          "İş YAPILAN Durumlar: Yerdeki koliyi masaya kaldırmak, alışveriş arabasını iterek ilerletmek, sırt çantasıyla merdivenlerden yukarı tırmanmak, topa vurup fırlatmak, yayı germek.",
          "İş YAPILMAYAN Durumlar: Duvarı itip kıpırdatamamak (yol sıfır), sırtında çantayla düz yolda sabit hızla yürümek (kuvvet düşey, hareket yatay), durakta elinde bavulla hareketsiz beklemek (yol sıfır), masada oturup saatlerce kitap okumak/ders çalışmak (mekanik hareket sıfır)."
        ]
      },
      {
        terim: "İş ile Enerji İlişkisi",
        tanim: "Enerji, bir cismin iş yapabilme yeteneğidir. İş ve enerjinin birimi aynıdır (Joule).",
        onemliNoktalar: [
          "Bir cisme iş yapıldığında cismin enerjisi artar. Örneğin bir koliyi 2 metre yukarı kaldıran kişi yer çekimine karşı iş yapar ve koliye çekim potansiyel enerjisi kazandırır.",
          "Duran bir oyuncak arabaya kuvvet uygulayıp hızlandıran kişi iş yapar ve arabaya kinetik (hareket) enerjisi kazandırır."
        ]
      }
    ],
    tablolar: [
      {
        baslik: "Günlük Yaşam Örneklerinde Fiziksel Anlamda İş Analizi Tablosu",
        sutunlar: ["Günlük Yaşam Örneği", "Uygulanan Kuvvet Yönü", "Hareket Doğrultusu", "Fiziksel İş Durumu", "Bilimsel Gerekçe"],
        satirlar: [
          ["Yerdeki ağır koliyi kaldırıp masaya koymak", "Yukarı (Düşey)", "Yukarı (Düşey)", "İş Yapılır (+)", "Kuvvet ve yer değiştirme aynı düşey doğrultudadır"],
          ["Sırt çantasıyla düz okul koridorunda yürümek", "Yukarı (Düşey)", "İleri (Yatay)", "İş Yapılmaz (-)", "Kuvvet ile hareket birbirine diktir (90 derece)"],
          ["Sabit bir beton duvarı tüm güçle itmek", "İleri (Yatay)", "Hareketsiz (x = 0)", "İş Yapılmaz (-)", "Cisim yer değiştirmediği için alınan yol sıfırdır"],
          ["Markette tekerlekli arabayı iterek ilerletmek", "İleri (Yatay)", "İleri (Yatay)", "İş Yapılır (+)", "Kuvvet doğrultusunda yatay yol alınmıştır"],
          ["Sırt çantasıyla merdivenlerden 2. kata çıkmak", "Yukarı (Düşey)", "Yukarı (Düşey)", "İş Yapılır (+)", "Yer çekimine karşı yukarı yönlü yol alınmıştır"],
          ["Masa başında saatlerce kitap okumak, ders çalışmak", "Kuvvet yok", "Hareketsiz", "İş Yapılmaz (-)", "Fiziksel bir kuvvet ve yer değiştirme yoktur"]
        ],
        dipnot: "* Püf Noktası: Bir cismi yukarı kaldırırken yer çekimine karşı iş yapılır; elinde tutup yatayda taşırken yer çekimine karşı iş yapılmaz."
      }
    ]
  },
  // MEB KİTABINDAKİ BAĞLANTI NOKTALARI
  baglantiNoktalari: [
    {
      id: "bn-7-3-3",
      baslik: "Mühendislik ve Mimarlık Bağlantısı: Asansör Motorlarının Yaptığı İş",
      alan: "Makine Mühendisliği & Fizik",
      aciklama: "Bir gökdelenin asansör motoru, kabindeki yolcularla birlikte toplam 8000 Newton ağırlığı 10. kata (30 metre yükseğe) çıkardığında yer çekimine karşı muazzam bir iş yapar.",
      soru: "Bu asansör motorunun 30 metre yükselme sırasında yaptığı fiziksel iş kaç Joule'dür?",
      cevap: "İş = Kuvvet × Yol bağıntısından: W = 8000 N × 30 m = 240.000 Joule (240 kJ) iş yapılmıştır. Bu iş doğrudan asansör kabinine potansiyel enerji olarak aktarılır."
    },
    {
      id: "bn-7-3-4",
      baslik: "Spor ve Sağlık Bağlantısı: Haltercilerin Kaldırma ve Bekleme Fiziği",
      alan: "Spor Hekimliği & Biyomekanik",
      aciklama: "Olimpiyat şampiyonu efsane haltercimiz Naim Süleymanoğlu, 190 kg ağırlığındaki halteri (yaklaşık 1900 N) podyumdan alıp 2 metre yukarı başının üzerine kaldırırken büyük bir kuvvet uygular ve iş yapar. Ancak halteri başının üzerinde 3 saniye boyunca hareketsiz tutarken ter döker ve çok yorulur.",
      soru: "Halteri başının üzerinde hareketsiz tuttuğu 3 saniye boyunca fen anlamında neden iş yapılmamıştır?",
      cevap: "Çünkü halter hareketsizdir ve yer değiştirme sıfırdır (x = 0). Kaslar kasılarak biyolojik enerji harcasa ve sporcu çok yorulsa da mekanik yer değiştirme olmadığı için fen anlamında yapılan iş sıfırdır."
    }
  ],
  // MEB KİTABINDAKİ GÜNCEL HABERLER
  haberler: [
    {
      id: "hbr-7-3-2",
      baslik: "Yusufeli Barajı: Akan Suyun Yaptığı Devasa İş Elektriğe Dönüşüyor",
      kaynak: "Devlet Su İşleri (DSİ) & Enerji Bülteni",
      tarih: "2023",
      ozet: "Türkiye'nin en yüksek barajı olan Yusufeli Barajı'nda 275 metre yükseklikten düşen milyonlarca ton su, yer çekimi kuvvetinin etkisiyle muazzam bir iş yaparak dev jeneratör türbinlerinin kanatlarını döndürür. Suyun yer çekimine karşı yaptığı bu fiziksel iş, alternatif akım jeneratörleri vasıtasıyla yılda milyarlarca kilovatsaat temiz elektrik enerjisine dönüştürülür.",
      soru: "Baraj gölündeki suyun elektrik üretebilmesi için yüksek bir tepeye kurulan göletin fiziksel önemi nedir?",
      cevap: "Yükseklik arttıkça yer çekimi kuvvetinin düşey doğrultuda yapacağı iş (W = F · x) ve dolayısıyla suya kazandırılan potansiyel enerji artar; bu yüksek enerji türbin kanatlarında daha büyük mekanik işe dönüşür."
    }
  ],
  // MEB KİTABINDAKİ KONTROL NOKTALARI
  kontrolNoktalari: [
    {
      id: "kn-7-3-3",
      baslik: "Kontrol Noktası 1 (Fiziksel İş Şartları)",
      sorular: [
        {
          id: "kn-q-25",
          soru: "Aşağıdaki olayların hangisinde fiziksel anlamda iş YAPILMAKTADIR?",
          tip: "coktan-secmeli",
          secenekler: [
            "A) Sırt çantasıyla düz koridorda sabit süratle ilerleyen bir öğrenci",
            "B) Ağır market poşetleriyle otobüs durağında ayakta bekleyen bir yolcu",
            "C) Yerinden kımıldamayan dev beton duvarı tüm gücüyle iten bir sporcu",
            "D) Yerde duran ağır koliyi kucağına alıp dolap rafına kaldıran bir çocuk"
          ],
          dogruSecenek: "D",
          cevap: "D) Yerde duran ağır koliyi kucağına alıp dolap rafına kaldıran bir çocuk",
          aciklama: "Koliyi yukarı kaldırırken yukarı yönlü kuvvet uygulanır ve koli yukarı yönlü yol alır; kuvvet ile hareket aynı doğrultuda olduğu için iş yapılır."
        },
        {
          id: "kn-q-26",
          soru: "Bir cisme 20 Newtonluk yatay bir kuvvet uygulanarak cisim sürtünmesiz yatay yolda 5 metre sürüklendiğinde yapılan iş kaç Joule olur?",
          tip: "klasik",
          cevap: "100 Joule (W = F · x = 20 N × 5 m = 100 J).",
          aciklama: "Kuvvet ile yol çarpımı yapılan işi verir (20 × 5 = 100 J)."
        }
      ]
    },
    {
      id: "kn-7-3-4",
      baslik: "Kontrol Noktası 2 (Kuvvet, Yol ve İş İlişkisi)",
      sorular: [
        {
          id: "kn-q-27",
          soru: "Yapılan iş miktarını artırmak için; I. Uygulanan kuvveti artırmak, II. Alınan yolu artırmak, III. Cismin hareketine dik kuvvet uygulamak işlemlerinden hangileri yapılabilir?",
          tip: "coktan-secmeli",
          secenekler: ["A) I ve II", "B) Yalnız I", "C) II ve III", "D) I, II ve III"],
          dogruSecenek: "A",
          cevap: "A) I ve II",
          aciklama: "Yapılan iş uygulanan kuvvet ve alınan yol ile doğru orantılıdır (W = F · x). Harekete dik kuvvet ise iş yapmaz."
        }
      ]
    }
  ],
  // BİLGİ BANKASI KUTULARI
  bilgiBankasi: [
    {
      id: "bb-7-3-3",
      baslik: "James Prescott Joule: Isı ve Mekanik İşin Eşdeğerliğini Bulan Dâhi",
      icerik: "İngiliz fizikçi James Prescott Joule, mekanik işin sürtünmeyle ısı enerjisine dönüştüğünü meşhur 'kürekli kap' deneyiyle kanıtlamıştır. Bu tarihi keşifle enerjinin yok olmadığını, sadece bir türden diğerine dönüştüğünü ispatlamıştır. Bilim dünyası onun anısına iş ve enerji birimine 'Joule' adını vermiştir.",
      onemliNot: "1 Joule, 1 Newtonluk kuvvetle bir cismi 1 metre hareket ettirmek için harcanan iş/enerji miktarıdır."
    }
  ],
  // MEB KİTABINDAKİ PERFORMANS GÖREVİ
  performansGorevi: {
    baslik: "Dinamometre ve Mezura ile Okul Çantası Çekme ve Kaldırma İşi Deneyi",
    amac: "Kendi okul çantanızı yatayda sürüklerken ve düşeyde yukarı kaldırırken yapılan işleri dinamometre ve mezura kullanarak deneysel olarak hesaplamak ve karşılaştırmak.",
    surecAdimlari: [
      "Okul çantanızı dinamometreye takarak önce yerden 1 metre yukarıya düşey doğrultuda kaldırınız; dinamometrede okunan kuvveti ve mezurayla 1 metreyi kaydediniz.",
      "Aynı çantayı düz zemin üzerinde yatay olarak dinamometre ile 1 metre çekiniz; dinamometrede okunan yatay çekme kuvvetini kaydediniz.",
      "Her iki durum için W = F · x formülünü kullanarak yapılan işi Joule cinsinden hesaplayınız.",
      "Neden çantayı yukarı kaldırırken (yer çekimine karşı) yapılan işin, yatayda sürüklerken yapılandan daha büyük olduğunu tartışan bir deney raporu hazırlayınız."
    ],
    beklenenUrun: "Deneysel İş Ölçüm Tablosu ve 'Yer Çekimine Karşı İş Neden Daha Zor?' başlıklı bilimsel rapor.",
    degerlendirmeKriterleri: [
      "Dinamometre ve mezura ölçümlerinin doğru birimlerle (N ve m) kaydedilmesi",
      "W = F · x bağıntısının hatasız hesaplanması ve Joule biriminin doğru gösterilmesi",
      "Düşey iş ile yatay iş arasındaki sürtünme ve yer çekimi farkının bilimsel açıklanması",
      "Deney raporunun düzeni ve netliği"
    ]
  },
  // MEB KİTABI NELER ÖĞRENDİK BÖLÜMÜ SORULARI VE MAARİF ÇÖZÜMLERİ
  nelerOgrenildiSorulari: [
    {
      id: "no-7-3-5",
      soru: "1. Fen bilimlerinde bir olayın 'fiziksel anlamda iş' sayılabilmesi için gerekli olan şartları yazınız.",
      cevap: "1. Cisme mutlaka bir kuvvet uygulanmalıdır. 2. Cisim uygulanan bu kuvvetin etkisiyle yer değiştirmelidir. 3. Cismin hareket doğrultusu uygulanan kuvvetin doğrultusu ile aynı olmalıdır (birbirine dik olmamalıdır).",
      detayliCozum: "Bu şartlardan biri dahi eksik olsa (örneğin kuvvet var ama yol sıfırsa ya da kuvvet harekete dikse) fiziksel anlamda iş yapılmış sayılmaz."
    },
    {
      id: "no-7-3-6",
      soru: "2. Günlük hayatta saatlerce bilgisayar başında çalışan veya kitap okuyan bir kişi neden 'Çok iş yaptım, çok yoruldum' dediği hâlde fen anlamında iş yapmış sayılmaz?",
      cevap: "Çünkü bu kişi mekanik bir kuvvet uygulayarak bir cisme kuvvet doğrultusunda fiziksel bir yer değiştirme (yol) kazandırmamıştır (x = 0). Zihinsel yorgunluk ve enerji tüketimi olsa da yer değiştirme olmadığından fen anlamındaki iş sıfırdır.",
      detayliCozum: "Fen bilimlerindeki iş, kuvvetin bir kütleyi mekanik olarak mesafe boyunca ötelemesiyle (W = F · x) tanımlıdır."
    },
    {
      id: "no-7-3-7",
      soru: "3. Bir öğrenci 50 N ağırlığındaki çantasını elinde tutarak; a) Merdivenlerden 4 metre yukarı çıkarken, b) Düz koridorda 10 metre sabit hızla yürürken yer çekimine karşı iş yapmış mıdır? Hesaplayınız.",
      cevap: "a) Merdivenden çıkarken: Yukarı doğru kuvvet (50 N) ve yukarı doğru yer değiştirme (4 m) aynı doğrultudadır; iş yapılır: W = 50 N × 4 m = 200 Joule. b) Düz yolda yürürken: Çantaya uygulanan kuvvet yukarı, hareket ise yataydır (dik açılıdır); yer çekimine karşı iş YAPILMAZ (W = 0 J).",
      detayliCozum: "Düşey kuvvet ile yatay hareket birbirine dik olduğu için skaler çarpım sıfırdır; yer çekimine karşı iş merdiven çıkarken yapılır."
    },
    {
      id: "no-7-3-8",
      soru: "4. İş ile enerji arasındaki ilişkiyi açıklayınız; yapılan bir iş cisme nasıl bir enerji kazandırır?",
      cevap: "Enerji, iş yapabilme yeteneğidir; iş ise enerjinin bir aktarılma ve dönüşme biçimidir. Bir cisme iş yapıldığında o cisme enerji aktarılır: Cisim yukarı kaldırılırsa çekim potansiyel enerjisi, itilip hızlandırılırsa kinetik enerji, yay sıkıştırılırsa esneklik potansiyel enerjisi kazanır.",
      detayliCozum: "Yapılan iş, doğrudan cismin mekanik enerjisindeki değişime (delta E) eşittir."
    }
  ],
  hikmetStages: [
    {
      stage: 1,
      name: "1. Varlığı Tanıt",
      concept: "Fiziksel İşin Tanımı",
      text: "İş, enerjinin bir cisimden diğerine aktarılma biçimidir. Bir iş yapıldığında cismin enerjisi artar veya dönüşür.",
      analogies: ["Banka hesabından para havalesi yapmak gibi; kuvvet bir aracı, iş ise enerji transferidir."]
    },
    {
      stage: 2,
      name: "2. Parçalarını Göster",
      concept: "Kuvvet ve Yol Ortaklığı",
      text: "Kuvvet tek başına yetmez, yanına yol almayı da katmalıdır. Ne sadece kuvvet ne de sadece yol işi oluşturamaz.",
      analogies: ["Makasın iki bıçağı gibi; hem kuvvet hem yer değiştirme şarttır."]
    },
    {
      stage: 3,
      name: "3. Ölçü ve Düzen",
      concept: "Joule Hassasiyeti",
      text: "1 Newtonluk kuvvetle 1 metre hareket ettirilen cisim tam 1 Joule iş kazanır.",
      questionToPonder: "Dünya'nın kendi ekseni etrafında ve Güneş etrafında sürtünmesiz dönmesi sırasında enerji kaybı olmaması neyi gösterir?"
    }
  ],
  etkinlikler: [
    {
      id: "etk-7-3-2",
      title: "Dinamometre ile İş Hesabı ve Karşılaştırması",
      type: "Deneysel Ölçüm",
      materials: ["Dinamometre (5 N)", "1 metre cetvel", "Ahşap takoz"],
      steps: [
        "Ahşap takozu masanın üzerinde yatay olarak 50 cm (0,5 m) dinamometreyle sabit hızla çekip kuvveti okuyunuz.",
        "İş formülüyle W = F · x hesaplayınız.",
        "Takozu düşeyde 50 cm yukarı kaldırarak yer çekimine karşı yapılan işi hesaplayınız."
      ],
      questions: [
        {
          qId: "q-7-3-2-1",
          label: "1. Soru",
          prompt: "Yukarı kaldırırken mi yoksa yatay çekerken mi daha fazla iş yapıldı, neden?",
          answer: "Düşeyde yukarı kaldırırken daha fazla iş yapılır; çünkü yer çekimi kuvvetini yenmek sürtünme kuvvetini yenmekten genellikle daha büyüktür."
        }
      ]
    }
  ],
  bilgiIstasyonlari: [
    {
      title: "James Prescott Joule ve Enerjinin Korunumu",
      scientistOrMission: "19. Yüzyıl İngiliz Fizikçisi",
      description: "Mekanik iş ile ısı enerjisi arasındaki ilişkiyi deneylerle ispatlayarak iş ve enerji birimine adını vermiştir.",
      hikmetNote: "Enerjinin yoktan var edilemeyeceğini ve varken yok edilemeyeceğini, ancak şekil değiştirdiğini ortaya koyan bilim insanı."
    }
  ],
  dda: {
    id: "dda-7-3-2",
    statement: "Sırtındaki çantayla merdivenlerden yukarı çıkan bir öğrenci fen anlamında iş yapar.",
    correctDecision: "D",
    reason: "Çantayı tutmak için yukarı doğru kuvvet uygular ve merdiven çıkarken çanta yukarı yönde (kuvvet doğrultusunda) yer değiştirir.",
    ifTrue: { exit: 1, isCorrect: true, feedback: "Tebrikler! Doğrultu uyuştuğu için iş yapıldığını doğru kavradınız." },
    ifFalse: { exit: 2, isCorrect: false, feedback: "Hatalı karar! Merdiven çıkarken yer çekimine karşı iş yapılır." }
  },
  biliyorumAnliyorumDusunuyorum: {
    biliyorum: "İş = Kuvvet × Yol (W = F · x) ve birimi Joule'dür; kuvvet ile hareket doğrultusu aynı olmalıdır.",
    anliyorum: "Saatlerce ders çalışmak, düşünmek veya sabit duran koliyi tutmak zihnen ve bedenen yorsa da fizikte 'iş' sayılmaz.",
    dusunuyorum: "Evrende hiçbir enerjinin kaybolmayıp sadece kılıktan kılığa girmesi kâinattaki tasarruf ve hikmeti nasıl haykırır?"
  },
  pekistirmeIstasyonu: {
    stationTitle: "Neler Öğrendik? & 7. Sınıf 3. Ünite 2. Pekiştirme İstasyonu (Kuvvet, İş ve Enerji)",
    pageReference: "Sayfa 83 - 94",
    summaryText: "Fiziksel iş şartları, iş ve enerji birimleri, günlük konuşma dili ile bilimsel iş farkı.",
    targetSkills: ["Fiziksel anlamda iş yapılan durumları ayırt eder ve iş miktarını hesaplar."]
  },
  fillInBlanks: [
    {
      id: "fib-7-3-2-1",
      number: 1,
      baglam: "Bir cisme kuvvet uygulanması ve cismin bu kuvvet doğrultusunda yol alması sonucu ortaya çıkar.",
      soruKoku: "Fiziksel anlamda .................................... yapılabilmesi için cismin kuvvet doğrultusunda yer değiştirmesi gerekir.",
      blankAnswer: "İş",
      acceptableAnswers: ["iş", "İş"],
      explanation: "İş kuvvet ve yolun çarpımıdır.",
      wordBankHint: ["İş", "Güç", "Sürat", "Kütle"]
    },
    {
      id: "fib-7-3-2-2",
      number: 2,
      baglam: "İş ve enerji aynı birimle ifade edilir.",
      soruKoku: "Fiziksel anlamda iş ve enerjinin birimi .................................... (J)'dür.",
      blankAnswer: "Joule",
      acceptableAnswers: ["joule", "Joule"],
      explanation: "İş ve enerji birimi Joule'dür.",
      wordBankHint: ["Joule", "Newton", "Pascal", "Watt"]
    },
    {
      id: "fib-7-3-2-3",
      number: 3,
      baglam: "İş miktarını hesaplamak için uygulanan kuvvet ile alınan yol çarpılır.",
      soruKoku: "İş = Kuvvet × .................................... formülü ile hesaplanır.",
      blankAnswer: "Yol",
      acceptableAnswers: ["yol", "Yol", "yer değiştirme"],
      explanation: "W = F · x formülüdür.",
      wordBankHint: ["Yol", "Zaman", "Kütle", "Sürat"]
    },
    {
      id: "fib-7-3-2-4",
      number: 4,
      baglam: "İş yapabilme yeteneğine veya kapasitesine verilen addır.",
      soruKoku: "İş yapabilme yeteneğine .................................... denir.",
      blankAnswer: "Enerji",
      acceptableAnswers: ["enerji", "Enerji"],
      explanation: "Enerji iş yapabilme kapasitesidir.",
      wordBankHint: ["Enerji", "Hacim", "Ağırlık", "İvme"]
    },
    {
      id: "fib-7-3-2-5",
      number: 5,
      baglam: "Cisme uygulanan kuvvet ile hareket yönü birbirine dik ise fiziksel anlamda iş yapılmaz.",
      soruKoku: "Kuvvet ile hareket yönü birbirine .................................... olduğunda iş sıfırdır.",
      blankAnswer: "Dik",
      acceptableAnswers: ["dik", "Dik"],
      explanation: "Dik doğrultularda iş yapılmaz.",
      wordBankHint: ["Dik", "Paralel", "Zıt", "Eşit"]
    },
    {
      id: "fib-7-3-2-6",
      number: 6,
      baglam: "Bir işçinin yerdeki ağır çimento torbasını sırtına kaldırması yer çekimi kuvvetine karşı yapılan bir iştir.",
      soruKoku: "Yerdeki bir cismi yukarı kaldırırken .................................... çekimine karşı iş yapılır.",
      blankAnswer: "Yer",
      acceptableAnswers: ["yer", "Yer"],
      explanation: "Yukarı kaldırmada yer çekimine karşı iş yapılır.",
      wordBankHint: ["Yer", "Ay", "Hava", "Rüzgar"]
    },
    {
      id: "fib-7-3-2-7",
      number: 7,
      baglam: "Sabit bir duvara kuvvet uygulayıp duvarı hareket ettiremeyen biri ne kadar yorulursa yorulsun fiziksel iş yapmaz.",
      soruKoku: "Cismin aldığı yol sıfır ise yapılan iş de ....................................dır.",
      blankAnswer: "Sıfır",
      acceptableAnswers: ["sıfır", "0", "Sıfır"],
      explanation: "Yol sıfırsa iş sıfırdır.",
      wordBankHint: ["Sıfır", "Maksimum", "Pozitif", "Sonsuz"]
    },
    {
      id: "fib-7-3-2-8",
      number: 8,
      baglam: "10 N kuvvet ile bir kutuyu yatay zeminde 3 metre iten bir kişi iş yapar.",
      soruKoku: "10 N kuvvet ile 3 metre itilen kutu üzerinde .................................... Joule iş yapılır.",
      blankAnswer: "30",
      acceptableAnswers: ["30"],
      explanation: "W = 10 N · 3 m = 30 Joule.",
      wordBankHint: ["30", "13", "7", "3"]
    },
    {
      id: "fib-7-3-2-9",
      number: 9,
      baglam: "Aynı kuvvetle daha fazla yol alan cisim üzerinde daha fazla iş yapılır.",
      soruKoku: "Uygulanan kuvvet sabitken alınan yol arttıkça yapılan iş .................................... (artar/azalır).",
      blankAnswer: "Artar",
      acceptableAnswers: ["artar", "Artar"],
      explanation: "İş yolla doğru orantılıdır.",
      wordBankHint: ["Artar", "Azalır", "Değişmez", "Yok olur"]
    },
    {
      id: "fib-7-3-2-10",
      number: 10,
      baglam: "Kuvvet birimi Newton, yol birimi metredir.",
      soruKoku: "1 Newton · metre = 1 .................................... eşitliğine denktir.",
      blankAnswer: "Joule",
      acceptableAnswers: ["joule", "Joule"],
      explanation: "1 N · m = 1 J.",
      wordBankHint: ["Joule", "Pascal", "Gram", "Litre"]
    }
  ],
  contextQuestions: [
    {
      id: "mcq-7-3-2-1",
      number: 1,
      baglam: "Aşağıda günlük hayattan dört farklı durum verilmiştir:\nI. Masada duran kitabı kucağına alarak ayağa kalkan öğrenci\nII. Elindeki çantayı sallamadan düz yolda sabit hızla yürüyen memur\nIII. Park halindeki arabayı itmeye çalışan ama kımıldatamayan genç\nIV. Yerdeki valizi çekerek uçağa doğru tekerlekleri üzerinde sürükleyen yolcu",
      soruKoku: "Bu durumlardan hangilerinde fen anlamında (fiziksel olarak) kesinlikle iş yapılmıştır?",
      secenekler: {
        A: "I ve IV",
        B: "II ve III",
        C: "I, II ve IV",
        D: "Yalnız IV"
      },
      dogruCevap: "A",
      cozum: "I'de yukarı kuvvet uygulanıp yukarı yol alınmıştır (iş var). IV'te çekme kuvveti doğrultusunda valiz sürüklenmiştir (iş var). II'de kuvvet düşey, hareket yataydır (iş yok). III'te yol sıfırdır (iş yok). Cevap I ve IV.",
      olculenKazanim: "F.7.3.2.1. Fiziksel anlamda iş yapılan durumları analiz eder.",
      olculenBeceri: "Kavramsal Uygulama ve Ayırt Etme",
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
      id: "mcq-7-3-2-2",
      number: 2,
      baglam: "Bir kargo çalışanı 50 N ağırlığındaki bir paketi:\n1. Durum: Yatay zeminde 4 metre itmiştir.\n2. Durum: Merdivenlerden 2 metre yüksekteki 1. kata çıkartmıştır.",
      soruKoku: "Kargo çalışanının 1. ve 2. durumda yaptığı işler sırasıyla W1 ve W2 olduğuna göre, (sürtünmeler önemsiz ve itme kuvveti 30 N kabul edilirse) W1 ve W2 kaç Joule'dür?",
      secenekler: {
        A: "W1 = 120 J, W2 = 100 J",
        B: "W1 = 200 J, W2 = 100 J",
        C: "W1 = 120 J, W2 = 250 J",
        D: "W1 = 50 J, W2 = 50 J"
      },
      dogruCevap: "A",
      cozum: "1. durumda: W1 = F · x = 30 N · 4 m = 120 Joule. 2. durumda: Yer çekimine karşı iş W2 = Ağırlık · Yükseklik = 50 N · 2 m = 100 Joule.",
      olculenKazanim: "F.7.3.2.1. İş hesaplamalarını formül ve bağlam üzerinden yapar.",
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
    }
  ]
};
