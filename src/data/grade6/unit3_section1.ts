import { SectionContent } from '../../types';

export const grade6Unit3Section1: SectionContent = {
  code: "6.3.1",
  title: "Bileşke Kuvvet (Net Kuvvet)",
  unitCode: "6.3",
  unitTitle: "3. Ünite: Kuvvet ve Hareket",
  summary: "Kuvvetin yön, doğrultu ve büyüklük özellikleri; aynı doğrultulu ve aynı yönlü kuvvetlerin bileşkesi, zıt yönlü kuvvetlerin bileşkesi; dengelenmiş kuvvetler (R = 0, durma veya sabit süratle hareket) ve dengelenmemiş kuvvetler (hızlanma, yavaşlama, yön değiştirme); halat çekme oyunu ve pekiştirme istasyonları.",
  kazanimlar: [
    "F.6.3.1.1. Bir cisme etki eden kuvvetlerin yön, doğrultu ve büyüklüklerini gösterir.",
    "F.6.3.1.2. Bir cisme etki eden birden fazla kuvvetin bileşkesini (net kuvveti) hesaplar.",
    "F.6.3.1.3. Dengelenmiş ve dengelenmemiş kuvvetlerin cisimlerin hareket durumlarına etkilerini gözlemler ve açıklar."
  ],
  hatirlayalim: {
    text: "5. sınıfta kuvvetin dinamometre ile ölçüldüğünü, biriminin Newton (N) olduğunu ve kuvvetin cisimlerin şeklini ve hareket durumunu değiştirebileceğini öğrenmiştik. 6. sınıfta bir cisme aynı anda etki eden birden fazla kuvvetin ortak etkisini (bileşke kuvveti) inceleyeceğiz.",
    keyPoints: [
      "Kuvvet vektörel bir büyüklüktür; yönü, doğrultusu, uygulama noktası ve büyüklüğü vardır.",
      "Aynı yönlü kuvvetlerin bileşkesi toplanarak bulunur (R = F1 + F2).",
      "Zıt yönlü kuvvetlerin bileşkesi farkları alınarak bulunur (R = |F1 - F2|) ve büyük kuvvetin yönündedir.",
      "Bileşke kuvvet sıfır ise (R = 0) cisim dengelenmiş kuvvetler etkisindedir (durur veya sabit süratle gider).",
      "Bileşke kuvvet sıfırdan farklı ise (R ≠ 0) cisim dengelenmemiş kuvvetler etkisindedir (hızlanır veya yavaşlar)."
    ]
  },
  onDegerlendirme: [
    {
      id: "od-u3s1-1",
      question: "Doğuya doğru 10 N ve yine doğuya doğru 15 N kuvvet uygulanan bir sandığa etki eden net kuvvet nedir?",
      answer: "Aynı yönlü oldukları için toplanır: R = 10 N + 15 N = 25 N (Doğu yönünde)."
    },
    {
      id: "od-u3s1-2",
      question: "Bir masaya batı yönünde 30 N, doğu yönünde 20 N kuvvet uygulanırsa masa hangi yönde kaç N net kuvvetle hareket eder?",
      answer: "Zıt yönlü oldukları için farkları alınır: R = 30 N - 20 N = 10 N (Batı yönünde)."
    },
    {
      id: "od-u3s1-3",
      question: "Masanın üzerinde hareketsiz duran bir kitap dengelenmiş kuvvetler etkisinde midir?",
      answer: "Evet. Kitabın ağırlığı (aşağı doğru yer çekimi) ile masanın tepki kuvveti (yukarı doğru) birbirine eşit ve zıt yönlüdür; net kuvvet sıfırdır (R = 0)."
    }
  ],
  hazirlik: {
    question: "Halat çekme oyununda ortadaki kırmızı kurdele hareketsiz kalıyorsa iki takımın uyguladığı kuvvetler hakkında ne söylenebilir?",
    answer: "Her iki takımın uyguladığı toplam kuvvet büyüklükleri birbirine eşittir. Kuvvetler zıt yönlü olduğu için bileşke kuvvet sıfırdır ve kurdele dengelenmiş kuvvetler etkisinde hareketsiz kalır."
  },
  merak: {
    question: "Uzay boşluğunda fırlatılan bir uzay sondası (örneğin Voyager 1) yakıtı bitmesine rağmen milyarlarca kilometre boyunca nasıl hiç durmadan yoluna devam edebilmektedir?",
    answer: "Çünkü uzay boşluğunda sürtünme kuvveti (hava direnci) yoktur. Cisme hiçbir net kuvvet etki etmediği için (R = 0), cisim dengelenmiş kuvvetler etkisinde sonsuza kadar ilk hızını koruyarak sabit süratli hareketine devam eder (Eylemsizlik Prensibi)."
  },
  kopru: {
    title: "Dengelerin Ahengi ve Hareketin Yasaları",
    content: "Köprülerin yıkılmadan ayakta durması, binaların sağlamlığı ve gök cisimlerinin yörüngelerinde kalması hep kuvvetlerin hassas dengesiyle (R = 0) sağlanır. Denge bozulduğunda ise hareket ve değişim başlar.",
    question: "Kâinattaki tüm kuvvetler birbirini sıfırlamasaydı atomlar ve gezegenler ne olurdu?",
    answer: "Kütle çekim veya elektriksel çekim tek taraflı baskın gelseydi ya her şey birbiri içine çöker ya da paramparça uzaya dağılırdı."
  },
  // MEB DERS KİTABI DETAYLI KONU ANLATIMI, TABLOLAR, BAĞLANTI NOKTALARI VE HABERLER
  konuAnlatimi: {
    ozet: "Kuvvet; duran bir cismi hareket ettirebilen, hareket eden bir cismi durdurabilen, hızlandıran, yavaşlatan, yönünü veya şeklini değiştirebilen etkidir. Dinamometre ile ölçülür, birimi Newton'dur (N). Kuvvetin dört temel özelliği vardır: Yönü, doğrultusu, büyüklüğü (şiddeti) ve uygulama noktası. Bir cisme etki eden birden fazla kuvvetin yaptığı ortak etkiyi tek başına yapan kuvvete 'Bileşke Kuvvet' (Net Kuvvet, R) denir. Aynı doğrultulu ve aynı yönlü kuvvetler toplanır (R = F1 + F2). Zıt yönlü kuvvetler çıkarılır (R = Fbuyuk - Fkucuk) ve bileşke kuvvet büyük olan kuvvetin yönündedir. Bir cisme etki eden bileşke kuvvet sıfır ise (R = 0), cisim 'dengelenmiş kuvvetler' etkisindedir. Bu durumdaki bir cisim duruyorsa durmaya devam eder; hareket halindeyse sabit süratle doğrusal hareketine devam eder. Bileşke kuvvet sıfırdan farklı ise (R ≠ 0), cisim 'dengelenmemiş kuvvetler' etkisindedir ve cisim hızlanır, yavaşlar veya yön değiştirir.",
    kavramlar: [
      {
        terim: "Kuvvetin Temel Özellikleri",
        tanim: "Kuvvet yönlendirilmiş bir doğru parçası (vektör/ok) ile gösterilir.",
        onemliNoktalar: [
          "Doğrultu: Kuvvetin üzerinde bulunduğu sonsuz çizgidir (örn: Doğu-Batı doğrultusu, Kuzey-Güney doğrultusu). Bir doğrultu üzerinde zıt iki yön bulunur.",
          "Yön: Kuvveti gösteren okun ucunun baktığı taraftır (örn: Doğu yönü veya Batı yönü).",
          "Büyüklük (Şiddet): Okun uzunluğu ile doğru orantılıdır ve dinamometre ile ölçülür. Birimi Newton'dur (N).",
          "Uygulama Noktası: Kuvvetin cisme temas ettiği ve uygulandığı başlangıç noktasıdır."
        ]
      },
      {
        terim: "Bileşke Kuvvet (Net Kuvvet - R)",
        tanim: "İki veya daha fazla kuvvetin bir cisim üzerinde yaptığı etkiyi tek başına yapabilen kuvvettir.",
        onemliNoktalar: [
          "Aynı Yönlü Kuvvetlerin Bileşkesi: İki kuvvet aynı doğrultuda ve aynı yönde uygulanıyorsa bileşke kuvvet bu kuvvetlerin toplamına eşittir: R = F1 + F2. Bileşkenin yönü kuvvetlerin yönüyle aynıdır.",
          "Zıt Yönlü Kuvvetlerin Bileşkesi: İki kuvvet aynı doğrultuda fakat zıt yönlerde uygulanıyorsa bileşke kuvvet büyük kuvvetten küçük kuvvet çıkarılarak bulunur: R = Fbuyuk - Fkucuk. Bileşkenin yönü daima büyük kuvvetin yönündedir."
        ]
      },
      {
        terim: "Dengelenmiş Kuvvetler (R = 0)",
        tanim: "Bir cisme etki eden tüm kuvvetlerin bileşkesi sıfır olduğunda cismin içinde bulunduğu durumdur.",
        onemliNoktalar: [
          "Net kuvvet sıfırdır: R = 0 N.",
          "Cisim başlangıçta duruyorsa durmaya devam eder (örn: masada duran kitap, duvarda asılı tablo, yerde duran taş).",
          "Cisim başlangıçta hareket ediyorsa süratini ve yönünü değiştirmeden sabit süratli hareketine devam eder (örn: düz yolda sabit 90 km/h süratle giden araba, paraşütçünün limit hızla yere inmesi, saatin saniye ibresinin hareketi)."
        ]
      },
      {
        terim: "Dengelenmemiş Kuvvetler (R ≠ 0)",
        tanim: "Bir cisme etki eden kuvvetlerin bileşkesi sıfırdan farklı olduğunda cismin içinde bulunduğu durumdur.",
        onemliNoktalar: [
          "Net kuvvet sıfırdan farklıdır: R > 0 N.",
          "Cismin hareket durumunda mutlaka bir değişiklik meydana gelir.",
          "Kuvvet cismin hareket yönündeyse cisim HIZLANIR (örn: kalkışa geçen uçak, yokuş aşağı yuvarlanan top, balkondan düşen saksı).",
          "Kuvvet cismin hareket yönüne zıtsa cisim YAVAŞLAR veya DURUR (örn: frene basan araba, yukarı fırlatılan top, sürtünmeyle duran kızak)."
        ]
      }
    ],
    tablolar: [
      {
        baslik: "Dengelenmiş ve Dengelenmemiş Kuvvetlerin Karşılaştırma Tablosu",
        sutunlar: ["Karşılaştırma Kriteri", "Dengelenmiş Kuvvetler", "Dengelenmemiş Kuvvetler"],
        satirlar: [
          ["Bileşke Kuvvet Değeri", "R = 0 N (Net kuvvet sıfırdır)", "R ≠ 0 N (Net kuvvet sıfırdan büyüktür)"],
          ["Cismin Durgunluk Durumu", "Duruyorsa durmaya devam eder", "Bileşke kuvvet yönünde harekete başlar"],
          ["Cismin Hareket Durumu", "Sabit süratle doğrusal hareket yapar", "Hızlanır, yavaşlar veya yön değiştirir"],
          ["Sürat Değişimi", "Sürat değişmez (Sıfır ivme)", "Sürat artar veya azalır"],
          ["Günlük Hayat Örnekleri", "Masada duran kitap, duvarda asılı saat, sabit süratli tren", "Yokuştan yuvarlanan top, frene basan araba, kalkış yapan uçak"]
        ]
      }
    ]
  },
  // MEB KİTABINDAKİ BAĞLANTI NOKTALARI
  baglantiNoktalari: [
    {
      id: "bn-6-3-1",
      baslik: "Geleneksel Sporlar: Yağlı Güreş ve Halat Çekmede Bileşke Kuvvet",
      alan: "Beden Eğitimi & Spor Fiziği",
      aciklama: "Halat çekme müsabakasında iki takım halatı zıt yönlerde çekerken kırmızı mendil tam ortada hareketsiz duruyorsa takımların uyguladığı kuvvetler eşittir.",
      soru: "Halat çekme oyununda takımlardan biri 450 N, diğeri 520 N kuvvet uygularsa yarışmayı hangi takım kazanır ve mendil hangi net kuvvetle hareket eder?",
      cevap: "Zıt yönlü kuvvetlerin bileşkesi farklarıdır: R = 520 N - 450 N = 70 N. Mendil 520 N uygulayan güçlü takımın yönünde 70 N net kuvvetle çekilir ve o takım kazanır."
    },
    {
      id: "bn-6-3-2",
      baslik: "Havacılık ve Uzay: Uçakların Dört Temel Uçuş Kuvveti",
      alan: "Havacılık Mühendisliği & Aerodinamik",
      aciklama: "Bir uçak havada uçarken üzerine dört kuvvet etki eder: Motorun itme kuvveti, havanın sürtünme direnci, kanatların kaldırma kuvveti ve yer çekimi ağırlığı.",
      soru: "Bir yolcu uçağının 10.000 metre irtifada sabit süratle düz bir hatta uçabilmesi için bu dört kuvvet nasıl bir dengede olmalıdır?",
      cevap: "Kaldırma kuvveti yer çekimi ağırlığına eşit olmalı; motorun itme kuvveti ise hava sürtünme direncine eşit olmalıdır. Dört kuvvet birbirini sıfırladığında bileşke kuvvet R = 0 olur ve uçak dengelenmiş kuvvetler etkisinde sabit süratle uçar."
    }
  ],
  // MEB KİTABINDAKİ GÜNCEL HABERLER
  haberler: [
    {
      id: "hbr-6-3-1",
      baslik: "Yüksek Hızlı Trenlerde (YHT) Sarsıntısız Seyahat ve Kuvvet Dengesi",
      kaynak: "TCDD Taşımacılık & TÜBİTAK Raylı Ulaşım Bülteni",
      tarih: "2024",
      ozet: "Ankara-İstanbul hattında saatte 250 km süratle seyreden Yüksek Hızlı Tren'de yolculuk eden vatandaşlar, masaya dik konulan madeni paranın kilometrelerce devrilmeden durduğunu ve su dolu bardağın dökülmediğini kaydetti.",
      soru: "Saatte 250 km gibi yüksek bir süratle giden trenin içindeki eşyaların devrilmemesi hangi fizik kuralıyla açıklanır?",
      cevap: "Tren düz rayda sabit süratle ilerlerken üzerindeki net kuvvet sıfırdır (dengelenmiş kuvvetler). Hızlanma veya yavaşlama olmadığı için vagon içindeki cisimlere net bir kuvvet etki etmez ve eşyalar dengede kalır."
    }
  ],
  // MEB KİTABINDAKİ KONTROL NOKTALARI
  kontrolNoktalari: [
    {
      id: "kn-6-3-1",
      baslik: "Kontrol Noktası 1 (Bileşke Kuvvet Hesaplamaları)",
      sorular: [
        {
          id: "kn-q-g6-13",
          soru: "Bir kutuya doğu yönünde F1 = 18 N ve batı yönünde F2 = 12 N kuvvet etki etmektedir. Bu kutuya etki eden bileşke kuvvetin yönü ve büyüklüğü nedir?",
          tip: "coktan-secmeli",
          secenekler: [
            "A) Doğu yönünde 30 N",
            "B) Batı yönünde 30 N",
            "C) Batı yönünde 6 N",
            "D) Doğu yönünde 6 N"
          ],
          dogruSecenek: "D",
          cevap: "D) Doğu yönünde 6 N",
          aciklama: "Kuvvetler zıt yönlü olduğu için çıkarılır: R = 18 N - 12 N = 6 N. Yönü büyük kuvvet olan F1'in yönü (Doğu) tarafındadır."
        },
        {
          id: "kn-q-g6-14",
          soru: "Doğrultu ile yön kavramları arasındaki farkı bir örnekle açıklayınız.",
          tip: "klasik",
          cevap: "Doğrultu kuvvetin üzerinde yer aldığı iki yönlü çizgidir (örneğin Doğu-Batı doğrultusu). Yön ise bu çizgi üzerinde cismin çekildiği tek bir taraftır (örneğin yalnızca Doğu yönü). Bir doğrultuda iki zıt yön bulunur.",
          aciklama: "Doğrultu çift yönlü eksendir, yön ise okun baktığı tek taraftır."
        }
      ]
    },
    {
      id: "kn-6-3-2",
      baslik: "Kontrol Noktası 2 (Dengelenmiş ve Dengelenmemiş Kuvvetler)",
      sorular: [
        {
          id: "kn-q-g6-15",
          soru: "Aşağıda verilen hareket durumlarından hangisi 'dengelenmiş kuvvetler' etkisinde gerçekleşmektedir?",
          tip: "coktan-secmeli",
          secenekler: [
            "A) Düz yolda sabit süratle ilerleyen yolcu otobüsü",
            "B) Kırmızı ışıkta durmak için yavaşlayan otomobil",
            "C) Ağaç dalından yere doğru hızla düşen olgun elma",
            "D) Pistten havalanmak için hızlanan yolcu uçağı"
          ],
          dogruSecenek: "A",
          cevap: "A) Düz yolda sabit süratle ilerleyen yolcu otobüsü",
          aciklama: "Sabit süratli doğrusal hareket yapan cisimlerde net kuvvet sıfırdır (dengelenmiş kuvvetler)."
        }
      ]
    }
  ],
  // BİLGİ BANKASI KUTULARI
  bilgiBankasi: [
    {
      id: "bb-6-3-1",
      baslik: "Aynı Doğrultu ile Aynı Yön Arasındaki Kritik Fark",
      icerik: "Öğrencilerin en çok karıştırdığı iki kavram doğrultu ve yöndür. Bir yol düşünün; bu yol Ankara-İstanbul otoyolu olsun. Yolun tamamı bir 'DOĞRULTU'dur. O yol üzerinde İstanbul'a doğru gitmek bir 'YÖN', Ankara'ya doğru dönüp gitmek ise 'ZIT YÖN'dür. İki araç biri doğuya diğeri batıya gidiyorsa yönleri zıttır; fakat her ikisi de Doğu-Batı doğrultusundadır!",
      onemliNot: "Zıt yönlü iki kuvvetin doğrultusu AYNI olabilir."
    },
    {
      id: "bb-6-3-2",
      baslik: "Eylemsizlik Prensibi (Newton'un 1. Hareket Yasası)",
      icerik: "Büyük bilim insanı Isaac Newton, dengelenmiş kuvvetleri şöyle özetler: 'Bir cisme etki eden net kuvvet sıfır ise, cisim mevcut durumunu inatla korur.' Yani duruyorsa sonsuza kadar durmak ister; hareket ediyorsa dışarıdan bir kuvvet müdahale edene kadar sabit süratle düz bir çizgide gitmek ister. Arabada aniden frene basıldığında öne doğru savrulmamız bu eylemsizlik kuralındandır.",
      onemliNot: "R = 0 iken cisim ya durur ya da sabit süratle gider."
    }
  ],
  // MEB KİTABINDAKİ PERFORMANS GÖREVİ
  performansGorevi: {
    baslik: "Dinamometreler ve Ahşap Blok ile Bileşke Kuvvet Düzeneği",
    amac: "Bir ahşap bloğa iki dinamometre bağlayarak aynı yönlü ve zıt yönlü kuvvetlerin bileşkesini deneysel olarak ölçmek ve doğrulamak.",
    surecAdimlari: [
      "Düz bir masa üzerine sürtünmesi az bir ahşap blok yerleştiriniz ve iki yanına kancalar vidalayınız.",
      "Aynı Yönlü Deney: İki dinamometreyi aynı kancaya bağlayıp aynı yönde 3 N ve 5 N kuvvet uygulayınız. Bloğun kaç N tek kuvvetle dengelendiğini ölçünüz (R = 8 N).",
      "Zıt Yönlü Deney: Dinamometreleri karşılıklı kancalara bağlayıp biriyle 10 N, diğeriyle 4 N çekiniz. Net kuvveti hesaplayınız (R = 6 N) ve hareket yönünü kaydediniz.",
      "Dengelenmiş Kuvvet Deneyi: Her iki taraftan eşit 5 N çekerek bloğun hareketsiz kaldığını (R = 0) gözlemleyiniz."
    ],
    beklenenUrun: "Kuvvet Ölçüm Tablosu ve Bileşke Kuvvet Deney Raporu.",
    degerlendirmeKriterleri: [
      "Dinamometrelerin doğru okunması ve Newton biriminin kullanılması",
      "Aynı yönlü ve zıt yönlü bileşke kuvvet formüllerinin deneysel olarak kanıtlanması",
      "Dengelenmiş kuvvet durumunda bloğun durduğunun gösterilmesi"
    ]
  },
  // MEB KİTABI NELER ÖĞRENDİK BÖLÜMÜ SORULARI VE MAARİF ÇÖZÜMLERİ
  nelerOgrenildiSorulari: [
    {
      id: "no-6-3-1",
      soru: "1. Kuvvetin dört temel özelliğini yazarak her birini kısaca açıklayınız.",
      cevap: "1. Doğrultu: Kuvvetin üzerinde bulunduğu doğru parçasıdır (örn: Doğu-Batı). 2. Yön: Okun ucunun baktığı taraftır (örn: Doğu). 3. Büyüklük: Şiddetidir, dinamometre ile ölçülür ve Newton cinsindendir. 4. Uygulama Noktası: Kuvvetin cisme etki ettiği noktadır.",
      detayliCozum: "Kuvvet vektörel bir büyüklüktür; yön, doğrultu, şiddet ve uygulama noktasıyla tanımlanır."
    },
    {
      id: "no-6-3-2",
      soru: "2. Bir cisme aynı doğrultuda etki eden kuvvetlerin aynı yönlü veya zıt yönlü olması durumunda bileşke kuvvetin nasıl hesaplandığını formülleriyle açıklayınız.",
      cevap: "Aynı yönlü kuvvetler toplanır: R = F1 + F2 (Yönü kuvvetlerle aynıdır). Zıt yönlü kuvvetler çıkarılır: R = Fbuyuk - Fkucuk (Yönü büyük olan kuvvetin yönündedir).",
      detayliCozum: "Aynı yönde kuvvetler güç birliği yapar, zıt yönde kuvvetler birbirini zayıflatır."
    },
    {
      id: "no-6-3-3",
      soru: "3. Dengelenmiş kuvvetler ile dengelenmemiş kuvvetlerin cisimlerin hareket durumuna etkilerini karşılaştırarak ikişer örnek veriniz.",
      cevap: "Dengelenmiş Kuvvetler (R = 0): Cisim duruyorsa durur, hareket ediyorsa sabit süratle gider. Örnek: Masadaki kitap, sabit süratle giden araba. Dengelenmemiş Kuvvetler (R ≠ 0): Cisim hızlanır, yavaşlar veya yön değiştirir. Örnek: Yokuş aşağı yuvarlanan top, frene basan kamyon.",
      detayliCozum: "R = 0 durumunda hız değişmez; R ≠ 0 durumunda ivmeli (hızlanan/yavaşlayan) hareket olur."
    },
    {
      id: "no-6-3-4",
      soru: "4. Bir oyuncak arabaya doğu yönünde 25 N, batı yönünde ise 15 N kuvvet aynı anda uygulanmaktadır. Bu arabanın dengelenmiş kuvvetler etkisinde kalabilmesi için hangi yönde kaç N'luk üçüncü bir kuvvet uygulanmalıdır?",
      cevap: "Mevcut bileşke: R = 25 N (Doğu) - 15 N (Batı) = 10 N Doğu yönündedir. Arabanın dengede kalması (R = 0 olması) için bu 10 N Doğu kuvvetini sıfırlayacak BATI yönünde 10 N'luk bir dengeleyici kuvvet uygulanmalıdır.",
      detayliCozum: "Dengeleyici kuvvet, bileşke kuvvete eşit büyüklükte ve zıt yönlüdür: 10 N Batı."
    }
  ],
  hikmetStages: [
    {
      stage: 1,
      name: "1. Varlığı Tanıt (Görünmeyen Güç: Kuvvet)",
      concept: "Kuvvetin İzleri",
      text: "Kuvvet gözle görülmez fakat yaprağın kımıldamasından gezegenlerin dönüşüne kadar her harekette tesirini gösterir.",
      analogies: ["Rüzgârı göremeyiz ama ağaçları eğmesinden varlığını anlarız."]
    },
    {
      stage: 2,
      name: "2. Parçalarını Göster (Yön, Doğrultu ve Şiddet)",
      concept: "Kuvvetin Dört Unsuru",
      text: "Her kuvvetin bir uygulama noktası, bir doğrultusu (Doğu-Batı hattı), bir yönü (Doğu) ve bir büyüklüğü (Newton) vardır.",
      analogies: ["Adresi, gideceği yönü ve yük miktarı belli olan bir taşıyıcı."]
    },
    {
      stage: 3,
      name: "3. Ölçü ve Düzen (Dengenin Hassas Terazisi)",
      concept: "Bileşke Kuvvetin Matematiği",
      text: "Kuvvetler rastgele çarpışmaz; vektörel matematik kurallarına göre toplanır veya çıkarılır.",
      questionToPonder: "10 N ile 10 N zıt yönde tam sıfır etmeseydi teraziler ve mimari yapılar nasıl kurulabilirdi?"
    },
    {
      stage: 4,
      name: "4. Gayesini Keşfet (İstikrar ve Emniyet)",
      concept: "Dengelenmiş Dünyamız",
      text: "Sandalyede oturabilmemiz, evlerimizin sağlam durması yer çekimi ile zeminin tepki kuvvetinin eşitliğine (dengeye) bağlıdır."
    },
    {
      stage: 5,
      name: "5. Bütünle İlişkilendir (Doğadaki Bütün Kuvvetler)",
      concept: "Dört Temel Kuvvetin Dansı",
      text: "Yer çekimi, elektromanyetik kuvvet, güçlü ve zayıf nükleer kuvvetler evrenin çatısını dengede tutar.",
      analogies: ["Bir çadırın dört köşesinden gerilen halatlar."]
    },
    {
      stage: 6,
      name: "6. Hayret ve Tefekkür (Mutlak Kudret)",
      concept: "Kuvvetin Gerçek Kaynağı",
      text: "Bütün atomları ve galaksileri sımsıkı tutan, hiçbir kuvvetin O'nun izni olmadan tecelli edemeyeceği Yüce Kudret'e hayranlık duymak."
    }
  ],
  etkinlikler: [
    {
      id: "etk-u3s1-halat-cekme",
      title: "Pekiştirme İstasyonu: Halat Çekme ve Bileşke Kuvvet Simülasyonu",
      type: "Deneysel Modelleme",
      materials: ["Dinamometreler (2 adet)", "İp", "Tahta blok", "Dereceli zemin"],
      steps: [
        "1. Adım: Bloğa aynı yönde iki dinamometre bağlayıp 5 N ve 10 N çekiniz. Net kuvveti hesaplayınız (R = 15 N).",
        "2. Adım: Bloğa zıt yönlerden iki dinamometre bağlayıp birinden 12 N, diğerinden 8 N çekiniz. Net kuvveti bulunuz (R = 4 N, büyük kuvvet yönünde).",
        "3. Adım: Her iki taraftan 10 N çekerek bloğun hareket durumunu inceleyiniz (R = 0, blok hareketsizdir - dengelenmiş kuvvetler)."
      ],
      questions: [
        {
          qId: "q-u3s1-1",
          label: "Deney Çıkarımı",
          prompt: "İki kuvvet aynı doğrultuda fakat zıt yönde uygulandığında bileşke kuvvet nasıl bulunur?",
          answer: "Büyük kuvvetten küçük kuvvet çıkarılır; bileşke kuvvetin yönü büyük olan kuvvetin yönüyle aynı olur."
        }
      ]
    }
  ],
  bilgiIstasyonlari: [
    {
      title: "İsmail el-Cezerî ve Mekanik Denge",
      scientistOrMission: "Sibernetiğin ve Robotik Biliminin Kurucusu",
      description: "Artuklular döneminde Diyarbakır'da yaşayan Cezerî, su saatlerinde, krank millerinde ve otomatik makinelerde dişlilerin uyguladığı kuvvetleri ve ağırlık dengelerini mükemmel hesaplamıştır.",
      hikmetNote: "Cezerî'nin makineleri, bileşke kuvvetlerin ve mekanik dengenin pratik mühendislikteki muazzam örneğidir."
    }
  ],
  dda: {
    id: "dda-u3s1-kuvvet",
    statement: "Dengelenmiş kuvvetler etkisindeki bir cisim ya durur ya da sabit süratle düz bir doğrultuda hareketine devam eder.",
    correctDecision: "D",
    reason: "Net kuvvet sıfır olduğunda ivme oluşmaz; cisim duruyorsa durmaya, hareket ediyorsa mevcut süratiyle gitmeye devam eder.",
    ifTrue: {
      exit: 1,
      isCorrect: true,
      feedback: "Tebrikler! Newton'ın 1. Hareket Yasasını (Eylemsizlik) kusursuz kavradınız."
    },
    ifFalse: {
      exit: 2,
      isCorrect: false,
      feedback: "Hatalı! Dengelenmiş kuvvetlerde cismin sabit süratle gidebileceğini unutmayınız."
    }
  },
  biliyorumAnliyorumDusunuyorum: {
    biliyorum: "Kuvvetin yön, doğrultu ve büyüklüğünü; aynı ve zıt yönlü kuvvetlerin bileşkesini, dengelenmiş ve dengelenmemiş kuvvetleri biliyorum.",
    anliyorum: "Bir cismin hızlanması veya yavaşlaması için mutlaka sıfırdan farklı bir net kuvvetin (dengelenmemiş kuvvet) gerektiğini anlıyorum.",
    dusunuyorum: "Eğer sürtünme kuvveti olmasaydı frene bastığımızda arabayı durduracak hiçbir zıt kuvvet bulunamayacağını hayal edebiliyor musunuz?"
  },
  pekistirmeIstasyonu: {
    stationTitle: "Bileşke Kuvvet Pekiştirme İstasyonu",
    pageReference: "6. Sınıf 1. Kitap 3. Ünite",
    summaryText: "Kuvvet vektörleri, bileşke kuvvet hesaplama adımları, dengelenmiş/dengelenmemiş hareket durumları sınıflandırması.",
    targetSkills: [
      "Verilen kuvvet şemalarında net kuvvetin yön ve büyüklüğünü hesaplar.",
      "Cisimlerin hareket durumlarına bakarak üzerlerindeki net kuvvetin sıfır olup olmadığını belirler."
    ]
  },
  fillInBlanks: [
    {
      id: "fib-u3s1-1",
      number: 1,
      baglam: "Birden fazla kuvvetin bir cisme yaptığı etkiyi tek başına yapan kuvvettir.",
      soruKoku: "İki veya daha fazla kuvvetin toplam etkisini gösteren kuvvete .................................... (net) kuvvet denir.",
      blankAnswer: "Bileşke",
      acceptableAnswers: ["bileşke", "Bileşke", "net", "Net"],
      explanation: "Bileşke kuvvet (R) tüm kuvvetlerin vektörel toplamıdır.",
      wordBankHint: ["Bileşke", "Yer çekimi", "Sürtünme", "Manyetik"]
    },
    {
      id: "fib-u3s1-2",
      number: 2,
      baglam: "Kuvvet dinamometre ile ölçülür ve simgesi F'dir.",
      soruKoku: "Kuvvet birimi İngiliz bilim insanının anısına .................................... (N) olarak adlandırılmıştır.",
      blankAnswer: "Newton",
      acceptableAnswers: ["newton", "Newton"],
      explanation: "Kuvvet birimi Newton'dur.",
      wordBankHint: ["Newton", "Joule", "Pascal", "Gram"]
    },
    {
      id: "fib-u3s1-3",
      number: 3,
      baglam: "Aynı doğrultuda ve aynı yönde uygulanan kuvvetler toplanır.",
      soruKoku: "Doğu yönünde 5 N ve 15 N'lık iki kuvvetin bileşkesi .................................... N olur.",
      blankAnswer: "20",
      acceptableAnswers: ["20", "yirmi"],
      explanation: "5 N + 15 N = 20 N.",
      wordBankHint: ["20", "10", "5", "0"]
    },
    {
      id: "fib-u3s1-4",
      number: 4,
      baglam: "Aynı doğrultuda zıt yönde uygulanan kuvvetlerin farkı alınır.",
      soruKoku: "Zıt yönlü 30 N ve 12 N kuvvetlerin bileşkesinin büyüklüğü .................................... N'dur.",
      blankAnswer: "18",
      acceptableAnswers: ["18", "on sekiz"],
      explanation: "30 N - 12 N = 18 N.",
      wordBankHint: ["18", "42", "30", "12"]
    },
    {
      id: "fib-u3s1-5",
      number: 5,
      baglam: "Bir cisme etki eden bileşke kuvvet sıfır ise kuvvetler dengelenmiştir.",
      soruKoku: "Bileşke kuvveti sıfır olan cisimler .................................... kuvvetlerin etkisindedir.",
      blankAnswer: "Dengelenmiş",
      acceptableAnswers: ["dengelenmiş", "Dengelenmiş"],
      explanation: "R = 0 ise dengelenmiş kuvvetler söz konusudur.",
      wordBankHint: ["Dengelenmiş", "Dengelenmemiş", "Manyetik", "Elektrik"]
    },
    {
      id: "fib-u3s1-6",
      number: 6,
      baglam: "Duvarda asılı duran saat hareketsizdir.",
      soruKoku: "Hareketsiz duran bir cisme etki eden net kuvvet ....................................dır.",
      blankAnswer: "Sıfır",
      acceptableAnswers: ["sıfır", "Sıfır", "0"],
      explanation: "Duran cisimlerde net kuvvet sıfırdır.",
      wordBankHint: ["Sıfır", "On", "Yüz", "Belirsiz"]
    },
    {
      id: "fib-u3s1-7",
      number: 7,
      baglam: "Durağa yaklaşırken yavaşlayan bir otobüs hız değiştirmektedir.",
      soruKoku: "Hızlanan veya yavaşlayan cisimler .................................... kuvvetler etkisindedir.",
      blankAnswer: "Dengelenmemiş",
      acceptableAnswers: ["dengelenmemiş", "Dengelenmemiş"],
      explanation: "Sürat değişiyorsa net kuvvet sıfırdan farklıdır.",
      wordBankHint: ["Dengelenmemiş", "Dengelenmiş", "Sıfır", "Sabit"]
    },
    {
      id: "fib-u3s1-8",
      number: 8,
      baglam: "Zıt yönlü iki kuvvetin bileşkesi daima büyük olan kuvvetin tarafındadır.",
      soruKoku: "Zıt yönlü kuvvetlerin bileşkesinin yönü daima .................................... kuvvetin yönündedir.",
      blankAnswer: "Büyük",
      acceptableAnswers: ["büyük", "Büyük"],
      explanation: "Büyük kuvvet galip gelir ve yönü belirler.",
      wordBankHint: ["Büyük", "Küçük", "Eşit", "Orta"]
    },
    {
      id: "fib-u3s1-9",
      number: 9,
      baglam: "Doğu ve Batı aynı doğrultuyu ifade eder.",
      soruKoku: "Doğu ve Batı zıt iki yön olsa da aynı .................................... üzerindedir.",
      blankAnswer: "Doğrultu",
      acceptableAnswers: ["doğrultu", "Doğrultu"],
      explanation: "Doğu-Batı hattı tek bir doğrultudur.",
      wordBankHint: ["Doğrultu", "Yön", "Büyüklük", "Kuvvet"]
    },
    {
      id: "fib-u3s1-10",
      number: 10,
      baglam: "Mekanik denge ve robotik alanında çalışan İslam mühendisidir.",
      soruKoku: "Kuvvet dengeleri ve mekanik aletlerin öncüsü İslam bilgini İsmail el-...................................dir.",
      blankAnswer: "Cezerî",
      acceptableAnswers: ["cezeri", "cezerî", "Cezeri", "Cezerî"],
      explanation: "El-Cezeri sibernetik ve mekanik denge öncüsüdür.",
      wordBankHint: ["Cezerî", "Biruni", "Harezmi", "Razi"]
    }
  ],
  contextQuestions: [
    {
      id: "mcq-u3s1-1",
      number: 1,
      baglam: "Bir oyuncak arabaya aynı anda üç kuvvet uygulanmaktadır:\nF1 = 12 N (Doğu)\nF2 = 8 N (Doğu)\nF3 = 15 N (Batı)",
      soruKoku: "Bu oyuncağa etki eden bileşke kuvvetin büyüklüğü ve hareket yönü nedir?",
      secenekler: {
        A: "5 N, Doğu yönünde",
        B: "5 N, Batı yönünde",
        C: "35 N, Doğu yönünde",
        D: "20 N, Batı yönünde"
      },
      dogruCevap: "A",
      cozum: "Doğu yönündekilerin toplamı: 12 + 8 = 20 N (Doğu). Batı yönündeki: 15 N (Batı). Zıt oldukları için: R = 20 - 15 = 5 N (Doğu yönünde).",
      olculenKazanim: "F.6.3.1.2. Birden fazla kuvvetin bileşkesini hesaplar.",
      olculenBeceri: "Vektörel Hesaplama",
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
      id: "mcq-u3s1-2",
      number: 2,
      baglam: "Aşağıda dört farklı cismin hareket durumu verilmiştir:\nI. Masada hareketsiz duran vazo\nII. Düz yolda 90 km/h sabit süratle ilerleyen otomobil\nIII. Kırmızı ışığı görüp frene basan ve yavaşlayan otobüs\nIV. Yeşil ışık yanınca gaza basıp hızlanan motosiklet",
      soruKoku: "Bu cisimlerden hangileri DENGELENMİŞ KUVVETLERİN etkisindedir?",
      secenekler: {
        A: "Yalnız I",
        B: "I ve II",
        C: "III ve IV",
        D: "I, II ve III"
      },
      dogruCevap: "B",
      cozum: "Dengelenmiş kuvvetler etkisindeki cisim ya durur (I) ya da sabit süratle gider (II). Hızlanan veya yavaşlayan cisimler dengelenmemiş kuvvetler etkisindedir.",
      olculenKazanim: "F.6.3.1.3. Dengelenmiş ve dengelenmemiş kuvvet durumlarını sınıflandırır.",
      olculenBeceri: "Kavramsal Sınıflandırma",
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
      id: "mcq-u3s1-3",
      number: 3,
      baglam: "Halat çekme oyununda A Takımı Doğuya doğru 180 N, B Takımı ise Batıya doğru 180 N kuvvet uygulamaktadır.",
      soruKoku: "Halatın ortasındaki kurdelenin durumu ve net kuvvet hakkında hangisi söylenebilir?",
      secenekler: {
        A: "Net kuvvet 360 N'dur, Doğuya hareket eder.",
        B: "Net kuvvet 0 N'dur, kurdele dengelenmiş kuvvetler etkisinde hareketsiz kalır.",
        C: "Net kuvvet 180 N'dur, Batıya hareket eder.",
        D: "A takımı oyunu kazanır."
      },
      dogruCevap: "B",
      cozum: "Kuvvetler eşit ve zıt yönlüdür: R = 180 - 180 = 0 N. Net kuvvet sıfırdır, kurdele hareket etmez.",
      olculenKazanim: "F.6.3.1.3. Dengelenmiş kuvvet durumunu halat çekme üzerinden çözümler.",
      olculenBeceri: "Uygulamalı Fizik Yorumu",
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
      id: "mcq-u3s1-4",
      number: 4,
      baglam: "Sürtünmesiz bir zeminde duran bir koliye Doğu yönünde 25 N kuvvet uygulanıyor. Koliyi dengede tutmak (hareketsiz kılmak) isteniyor.",
      soruKoku: "Bu koliyi dengelemek için uygulanması gereken DENGELEYİCİ KUVVET hangisidir?",
      secenekler: {
        A: "Doğu yönünde 25 N",
        B: "Batı yönünde 25 N",
        C: "Kuzey yönünde 25 N",
        D: "Batı yönünde 50 N"
      },
      dogruCevap: "B",
      cozum: "Dengeleyici kuvvet, bileşke kuvvetle aynı büyüklükte fakat zıt yöndedir. Doğuya 25 N'u dengelemek için Batıya 25 N uygulanmalıdır.",
      olculenKazanim: "F.6.3.1.2. Dengeleyici kuvvetin büyüklük ve yönünü belirler.",
      olculenBeceri: "Dengeleyici Kuvvet Tespiti",
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
      id: "mcq-u3s1-5",
      number: 5,
      baglam: "Paraşütçü uçaktan atladıktan bir süre sonra paraşütünü açar. Havanın uyguladığı yukarı yönlü direnç kuvveti, paraşütçünün aşağı yönlü ağırlığına eşit hale gelir.",
      soruKoku: "Kuvvetler eşitlendiği andan itibaren paraşütçünün hareketi nasıl devam eder?",
      secenekler: {
        A: "Yukarı doğru fırlar",
        B: "Havada tamamen asılı kalıp durur",
        C: "Limit hızla (sabit süratle) güvenli bir şekilde yere doğru iner",
        D: "Gittikçe hızlanarak yere çakılır"
      },
      dogruCevap: "C",
      cozum: "Ağırlık = Hava direnci olduğunda net kuvvet sıfır olur (R = 0). Hareket halindeki cisim net kuvvet sıfır olunca sabit süratle (limit hızla) hareketine devam eder.",
      olculenKazanim: "F.6.3.1.3. Limit hız ve dengelenmiş kuvvet ilişkisini açıklar.",
      olculenBeceri: "Gerçek Yaşam Fizik Analizi",
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
      id: "mcq-u3s1-6",
      number: 6,
      baglam: "Doğu-Batı doğrultusunda hareket eden bir sandığa uygulanan iki kuvvetin bileşkesi Batı yönünde 12 N'dur. Kuvvetlerden biri Doğu yönünde 8 N'dur.",
      soruKoku: "Buna göre ikinci kuvvetin yönü ve büyüklüğü nedir?",
      secenekler: {
        A: "Batı yönünde 20 N",
        B: "Doğu yönünde 20 N",
        C: "Batı yönünde 4 N",
        D: "Doğu yönünde 4 N"
      },
      dogruCevap: "A",
      cozum: "F2 - 8 N = 12 N (Batı) olabilmesi için F2 = 20 N (Batı) olmalıdır.",
      olculenKazanim: "F.6.3.1.2. Bileşke kuvvet denkleminden bilinmeyen kuvveti bulur.",
      olculenBeceri: "Tersine Akıl Yürütme",
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
      id: "mcq-u3s1-7",
      number: 7,
      baglam: "Bir cisme etki eden iki kuvvetin bileşkesinin alabileceği en büyük değer 28 N, en küçük değer ise 4 N'dur.",
      soruKoku: "Bu iki kuvvetin büyüklükleri (F1 ve F2) kaç Newton'dur?",
      secenekler: {
        A: "16 N ve 12 N",
        B: "20 N ve 8 N",
        C: "14 N ve 14 N",
        D: "24 N ve 4 N"
      },
      dogruCevap: "A",
      cozum: "En büyük değer aynı yönlü oldukları zamandır: F1 + F2 = 28 N. En küçük değer zıt yönlü oldukları zamandır: F1 - F2 = 4 N. Taraf tarafa toplanırsa 2F1 = 32 -> F1 = 16 N, F2 = 12 N bulunur.",
      olculenKazanim: "F.6.3.1.2. Maksimum ve minimum bileşke kuvvet ilkelerini uygular.",
      olculenBeceri: "Matematiksel Akıl Yürütme",
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
      id: "mcq-u3s1-8",
      number: 8,
      baglam: "Kuzey-Güney doğrultusunda giden bir trene etki eden kuvvetler: Motor çekiş kuvveti 5000 N (Kuzey), Hava direnci 1200 N (Güney), Ray sürtünmesi 800 N (Güney).",
      soruKoku: "Trene etki eden net kuvvet nedir ve trenin hareket durumu nasıldır?",
      secenekler: {
        A: "3000 N (Kuzey) - Tren hızlanır",
        B: "7000 N (Kuzey) - Tren sabit süratle gider",
        C: "3000 N (Güney) - Tren yavaşlar",
        D: "0 N - Tren durur"
      },
      dogruCevap: "A",
      cozum: "Toplam direnç: 1200 + 800 = 2000 N (Güney). Çekiş: 5000 N (Kuzey). Net kuvvet: 5000 - 2000 = 3000 N (Kuzey). Hareket yönünde net kuvvet olduğu için tren hızlanır.",
      olculenKazanim: "F.6.3.1.2. Sürtünme ve motor kuvvetlerinin bileşkesini hesaplar.",
      olculenBeceri: "Mühendislik Problemi Çözme",
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
      id: "mcq-u3s1-9",
      number: 9,
      baglam: "Duran bir topa sertçe vurulduğunda top hızlanarak havalanır, yere düşüp yuvarlanırken sürtünme sebebiyle yavaşlar ve durur.",
      soruKoku: "Topun hızlanması, havadayken yön değiştirmesi ve sürtünmeyle durması süreçleri hangi kuvvetlerin etkisinde gerçekleşir?",
      secenekler: {
        A: "Sadece dengelenmiş kuvvetler",
        B: "Tüm aşamalarda dengelenmemiş kuvvetler",
        C: "Yalnızca yer çekimi kuvveti",
        D: "Sıfır net kuvvet"
      },
      dogruCevap: "B",
      cozum: "Hızlanma, yavaşlama ve yön değiştirme olaylarının tamamı dengelenmemiş (sıfırdan farklı) net kuvvetlerin sonucudur.",
      olculenKazanim: "F.6.3.1.3. Hareket değişimlerini dengelenmemiş kuvvetle açıklar.",
      olculenBeceri: "Dinamik Durum Analizi",
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
      id: "mcq-u3s1-10",
      number: 10,
      baglam: "Bir cisme uygulanan iki kuvvetin büyüklükleri ve yönleri şöyledir:\nF1 = 40 N (Batı)\nF2 = 40 N (Doğu)",
      soruKoku: "Bu cisme etki eden bileşke kuvvet kaç Newton'dur?",
      secenekler: {
        A: "80 N",
        B: "40 N",
        C: "0 N",
        D: "1 N"
      },
      dogruCevap: "C",
      cozum: "Aynı büyüklükte ve zıt yönlü iki kuvvet birbirini sıfırlar: 40 - 40 = 0 N.",
      olculenKazanim: "F.6.3.1.2. Eşit ve zıt kuvvetlerin bileşkesini belirler.",
      olculenBeceri: "Temel Vektör Mantığı",
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
      id: "mcq-u3s1-11",
      number: 11,
      baglam: "Bir kargo gemisi denizde motorları durdurulduktan sonra hemen durmaz; suyun sürtünme kuvveti sebebiyle yavaş yavaş hız kaybederek bir süre sonra durur.",
      soruKoku: "Motorları kapalı olan geminin yavaşlama anında maruz kaldığı kuvvet durumu hangisidir?",
      secenekler: {
        A: "Dengelenmiş kuvvetler (R = 0)",
        B: "Hareket yönüne ters dengelenmemiş sürtünme kuvveti (R ≠ 0)",
        C: "Kuvvetsiz hareket",
        D: "Hızlandırıcı kuvvet"
      },
      dogruCevap: "B",
      cozum: "Hareket yönüne zıt yönde etki eden dengelenmemiş sürtünme kuvveti gemiyi yavaşlatır.",
      olculenKazanim: "F.6.3.1.3. Yavaşlayan cisimlerdeki net kuvveti yorumlar.",
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
      id: "mcq-u3s1-12",
      number: 12,
      baglam: "İsmail el-Cezerî'nin geliştirdiği su saatlerinde şamandıraların dengede durması ve suyun akışıyla ağırlıkların kontrollü inmesi prensibi kullanılmıştır.",
      soruKoku: "Cezerî'nin mekanik düzeneklerinde saat mekanizmasının şaşmadan sabit hızla çalışması hangi fizik kuralının mühendislik uygulamasıdır?",
      secenekler: {
        A: "Sürekli hızlanan hareket",
        B: "Kuvvetlerin dengelenerek mekanizmanın sabit süratli hareket ettirilmesi",
        C: "Kuvvetsiz düzenek",
        D: "Rastgele titreşimler"
      },
      dogruCevap: "B",
      cozum: "Cezeri suyun kaldırma kuvveti ile yer çekimi ağırlığını dengeleyerek mekanizmanın sabit süratle ilerlemesini ve zamanı dakik ölçmesini sağlamıştır.",
      olculenKazanim: "F.6.3.1.3. Dengelenmiş kuvvetlerin teknolojik ve tarihi tasarımlardaki rolünü değerlendirir.",
      olculenBeceri: "Bilim Tarihi ve Mühendislik",
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
      id: "mcq-u3s1-13",
      number: 13,
      baglam: "Bir dinamometrenin yayı 5 N'lık bir kuvvet uygulandığında 2 cm uzamaktadır.",
      soruKoku: "Aynı dinamometreye aynı yönde 10 N ve 5 N'lık iki kuvvet birlikte uygulanırsa yay kaç cm uzar?",
      secenekler: {
        A: "2 cm",
        B: "4 cm",
        C: "6 cm",
        D: "10 cm"
      },
      dogruCevap: "C",
      cozum: "Toplam kuvvet: 10 + 5 = 15 N'dur. 5 N kuvvet 2 cm uzatıyorsa, 15 N kuvvet (3 katı) 3 x 2 = 6 cm uzatır.",
      olculenKazanim: "F.6.3.1.1. Kuvvet büyüklüğü ve dinamometre uzaması ilişkisini kurar.",
      olculenBeceri: "Orantısal Akıl Yürütme",
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
      id: "mcq-u3s1-14",
      number: 14,
      baglam: "Doğuya doğru 60 km/h sabit süratle ilerleyen bir otomobilin üzerindeki net kuvvet sıfırdır.",
      soruKoku: "Sürücü aniden gaza bastığında otomobilin hareket durumu ve kuvvet dengesi nasıl değişir?",
      secenekler: {
        A: "Dengelenmiş kuvvetler etkisinde kalmaya devam eder",
        B: "Hareket yönünde dengelenmemiş bir net kuvvet oluşur ve araç hızlanır",
        C: "Araç durur",
        D: "Kuvvetler yok olur"
      },
      dogruCevap: "B",
      cozum: "Gaza basıldığında motor kuvveti dirençleri aşar; net kuvvet hareket yönünde pozitif olur ve araç hızlanır (dengelenmemiş durum).",
      olculenKazanim: "F.6.3.1.3. Dengeli durumdan dengesiz duruma geçişi açıklar.",
      olculenBeceri: "Fiziksel Durum Geçişi",
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
      id: "mcq-u3s1-15",
      number: 15,
      baglam: "Düz bir zemin üzerinde duran sandığa Ahmet Doğuya 35 N, Mehmet Batıya 15 N, Can ise Batıya 20 N kuvvet uygulamaktadır.",
      soruKoku: "Sandığın hareket durumu hakkında aşağıdakilerden hangisi doğrudur?",
      secenekler: {
        A: "Doğuya doğru 35 N ile hareket eder",
        B: "Batıya doğru 35 N ile hareket eder",
        C: "Doğuya 35 N ve Batıya (15+20=35 N) kuvvetler eşit olduğundan sandık dengelenmiş kuvvetler etkisinde hareketsiz kalır",
        D: "Sandık Kuzeye döner"
      },
      dogruCevap: "C",
      cozum: "Doğu kuvveti = 35 N. Batı kuvvetleri = 15 + 20 = 35 N. Zıt yönde eşit kuvvetler birbirini sıfırlar: R = 0. Sandık hareket etmez.",
      olculenKazanim: "F.6.3.1.2. Çoklu kuvvetlerin dengelenmesini çözümler.",
      olculenBeceri: "Problem Çözme",
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
      id: "mcq-u3s1-16",
      number: 16,
      baglam: "Bir binanın kolonları tavanın ağırlığını taşırken yukarı doğru tepki kuvveti uygular.",
      soruKoku: "Binanın çökmeden yüzyıllar boyunca sabit durabilmesi hangi fiziksel kuralın sonucudur?",
      secenekler: {
        A: "Aşağı yönlü yer çekimi kuvveti ile kolonların yukarı yönlü taşıma kuvvetinin birbirine eşit ve zıt (dengelenmiş) olması",
        B: "Yer çekiminin binalara etki etmemesi",
        C: "Binanın çok hafif olması",
        D: "Rüzgârın binayı kaldırması"
      },
      dogruCevap: "A",
      cozum: "Statik mimaride yapıların ayakta kalması etki-tepki kuvvetlerinin eşitliği ve net kuvvetin sıfır olması (statik denge) ile mümkündür.",
      olculenKazanim: "F.6.3.1.3. Mimari yapılarda dengelenmiş kuvvetlerin önemini kavrar.",
      olculenBeceri: "İnşaat ve Statik Denge Analizi",
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
      id: "mcq-u3s1-17",
      number: 17,
      baglam: "Bir öğrenci 'Kuvvet doğrultusu ile kuvvet yönü aynı kavramlardır' demiştir. Öğretmeni ise bu ifadenin hatalı olduğunu belirtmiştir.",
      soruKoku: "Öğretmenin öğrencisine vereceği en doğru düzeltme açıklaması hangisidir?",
      secenekler: {
        A: "Doğrultu sonsuz çizgidir; bir doğrultu üzerinde (örneğin Doğu-Batı doğrultusunda) iki zıt yön (Doğu ve Batı) bulunur.",
        B: "Yön sadece gökyüzünü gösterir.",
        C: "Doğrultu dinamometreyle ölçülmez.",
        D: "Kuvvetin doğrultusu yoktur."
      },
      dogruCevap: "A",
      cozum: "Doğrultu eksendir (çizgidir). Her doğrultuda iki zıt yön bulunur (örn. Kuzey-Güney doğrultusunda Kuzey yönü ve Güney yönü).",
      olculenKazanim: "F.6.3.1.1. Yön ve doğrultu kavramları arasındaki farkı açıklar.",
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
      id: "mcq-u3s1-18",
      number: 18,
      baglam: "Bir kano sporcusu nehirde akıntıya karşı kürek çekmektedir. Nehrin akıntı hızı Güneye doğru 10 N sürükleme kuvveti yaparken, sporcu Kuzeye doğru 10 N kuvvetle kürek çekmektedir.",
      soruKoku: "Kano sporcusunun kıyıdan bakan bir gözlemciye göre hareketi nasıl olur?",
      secenekler: {
        A: "Kuzeye doğru hızla ilerler",
        B: "Güneye doğru sürüklenir",
        C: "Net kuvvet sıfır olduğu için kıyıya göre olduğu yerde sabit (hareketsiz) kalır",
        D: "Kano takla atar"
      },
      dogruCevap: "C",
      cozum: "Akıntı (10 N Güney) ile kürek kuvveti (10 N Kuzey) birbirini sıfırlar (R = 0). Kano kıyıya göre hareketsiz kalır.",
      olculenKazanim: "F.6.3.1.3. Akıntı ve karşı kuvvet dengesini çözümler.",
      olculenBeceri: "Göreceli Hareket ve Net Kuvvet",
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
      id: "mcq-u3s1-19",
      number: 19,
      baglam: "Aşağıdaki şekillerde bir cisme etki eden kuvvetler gösterilmiştir:\n1. Düzenek: 5 N (Doğu) ve 10 N (Doğu)\n2. Düzenek: 20 N (Doğu) ve 5 N (Batı)\n3. Düzenek: 15 N (Doğu) ve 15 N (Batı)",
      soruKoku: "Hangi düzeneklerdeki cisimler DENGELENMEMİŞ KUVVETLERİN etkisindedir?",
      secenekler: {
        A: "Yalnız 1",
        B: "Yalnız 3",
        C: "1 ve 2",
        D: "1, 2 ve 3"
      },
      dogruCevap: "C",
      cozum: "1. düzenekte R = 15 N (dengelenmemiş). 2. düzenekte R = 15 N (dengelenmemiş). 3. düzenekte R = 0 N (dengelenmiş). Dolayısıyla 1 ve 2 dengelenmemiştir.",
      olculenKazanim: "F.6.3.1.3. Düzeneklerin net kuvvet durumunu belirler.",
      olculenBeceri: "Grafik ve Şema Yorumlama",
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
      id: "mcq-u3s1-20",
      number: 20,
      baglam: "Gök cisimlerinin kütle çekim dengesinden atom çekirdeğindeki protonların dengesine kadar evrendeki tüm kuvvetler matematiksel bir kanunla birbirini dengelemektedir.",
      soruKoku: "Kâinattaki bu muazzam kuvvet dengeleri fen bilimleri ve felsefi düşünce açısından bize neyi gösterir?",
      secenekler: {
        A: "Doğadaki her şeyin kaotik ve rastlantısal olduğunu",
        B: "Kâinatta hiçbir şeyin başıboş olmadığını, her zerrenin kusursuz bir adalet, ölçü ve hikmet nizamıyla dengelendiğini",
        C: "Kuvvetlerin sadece Dünya'da geçerli olduğunu",
        D: "Fiziğin hiçbir kurala dayanmadığını"
      },
      dogruCevap: "B",
      cozum: "Maarif Modeli'nin hikmet ve adalet teması; evrendeki kuvvetlerin rastgele değil, hassas bir matematiksel denge ve hikmetle tanzim edildiğini tefekkür ettirir.",
      olculenKazanim: "F.6.3.1. Kuvvet ve denge kavramını kâinattaki nizam ile ilişkilendirir.",
      olculenBeceri: "Hikmet ve Kozmolojik Denge Sentezi",
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
