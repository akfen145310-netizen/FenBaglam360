import { ContextQuestion } from '../../types';

export const unit8_1_1_ContextQuestions: ContextQuestion[] = [
  {
    id: "mcq-8-1-1",
    number: 1,
    baglam: "Bir fen laboratuvarında özdeş el fenerleri, açısı ayarlanabilir sehpalar ve termometreler kullanılarak Işığın Geliş Açısı ve Sıcaklık İlişkisi deneyi yapılmıştır.\n- 1. Düzenek: Işık kaynağı zemine 90° dik açıyla tutulmuş, aydınlanan alan S₁ = 10 cm² olarak ölçülmüştür.\n- 2. Düzenek: Işık kaynağı zemine 30° eğik açıyla tutulmuş, aydınlanan alan S₂ = 45 cm² olarak ölçülmüştür.\n10 dakika sonra 1. termometredeki sıcaklık artışı ΔT₁ = 28°C olurken, 2. termometredeki sıcaklık artışı ΔT₂ = 8°C olarak kaydedilmiştir.",
    soruKoku: "Yapılan bu kontrollü deney ve ölçüm sonuçlarına göre Güneş ışınlarının geliş açısı ile mevsimsel sıcaklık ilişkisi hakkında aşağıdaki çıkarımlardan hangisi kesinlikle doğrudur?",
    secenekler: {
      A: "Güneş ışınları dik açıyla geldikçe birim yüzeye düşen enerji miktarı artarak sıcaklığı yükseltir; eğik geldikçe enerji geniş alana dağılır ve sıcaklık artışı düşük kalır.",
      B: "Işık kaynağının yüzeye olan uzaklığı değiştirildiği için 1. termometredeki sıcaklık artışı daha fazla gerçekleşmiştir.",
      C: "Deneyde bağımsız değişken sıcaklık artışı, bağımlı değişken ise ışığın geliş açısı olarak belirlenmiştir.",
      D: "2. düzenekte aydınlanan alan daha büyük olduğu için birim yüzeye düşen foton yoğunluğu 1. düzenekten daha fazladır."
    },
    dogruCevap: "A",
    cozum: "Deneyde ışık kaynağı dik (90°) tutulduğunda ışınlar dar bir alana (10 cm²) toplanır. Birim yüzeye düşen enerji yoğunluğu yüksek olduğundan sıcaklık 28°C artar (Yaz modeli). Eğik açıda (30°) ise aynı enerji 45 cm² alana dağılır, birim alandaki enerji azaldığından sıcaklık sadece 8°C artar (Kış modeli).",
    olculenKazanim: "F.8.1.1.2. Eksen eğikliği ve Güneş ışınlarının geliş açısı arasındaki ilişkiyi açıklar.",
    olculenBeceri: "KB3.2 Problem Çözme • SB3 Gözlem ve Veriye Dayalı Tahmin",
    diagramType: "sun-angle-shadow",
    diagramTitle: "Işığın Geliş Açısı, Aydınlanan Alan ve Sıcaklık Değişimi Deneyi",
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
    id: "mcq-8-1-2",
    number: 2,
    baglam: "Dünya'nın Güneş etrafında dolanırken bulunduğu 4 ana konum incelenmektedir. 1. konumda (21 Haziran) Kuzey Yarım Küre Güneş'e doğru 23° 27' eğikken, 3. konumda (21 Aralık) Güney Yarım Küre Güneş'e doğru eğiktir. K şehri Türkiye'de (Kuzey Yarım Küre), L şehri ise Avustralya'da (Güney Yarım Küre) yer almaktadır.",
    soruKoku: "Dünya 1. konumdan (21 Haziran) 2. konuma (23 Eylül) doğru hareket ederken K ve L şehirlerinde yaşanan değişimler hakkında yapılan aşağıdaki yorumlardan hangisi doğrudur?",
    secenekler: {
      A: "K şehrinde gündüz süreleri kısalmaya başlar; L şehrinde ise Güneş ışınlarının geliş açısı büyüyerek birim alana düşen ısı enerjisi artar.",
      B: "K şehrinde kış mevsimi başlarken L şehrinde yaz mevsimi sona erer.",
      C: "1. konumda Güneş ışınları doğrudan Güney Yarım Küre'deki Oğlak Dönencesi'ne dik açıyla düşmektedir.",
      D: "2. konuma ulaşıldığında K şehrinde 24 saat gündüz, L şehrinde ise 24 saat gece yaşanır."
    },
    dogruCevap: "A",
    cozum: "21 Haziran'da Kuzey Yarım Küre en uzun gündüzü yaşar. Bu tarihten 23 Eylül'e gidildikçe KYK'de gündüzler kısalır, geceler uzar. Aynı süreçte kıştan çıkan GYK'de (L şehri) Güneş ışınlarının geliş açısı büyümeye başlar ve ilkbahara yaklaşılır.",
    olculenKazanim: "F.8.1.1.1. Mevsimlerin oluşumuna yönelik tahminlerde bulunur.",
    olculenBeceri: "KB2.8 Sorgulama • SB5 Çıkarım Yapmak",
    diagramType: "seasons-tilt",
    diagramTitle: "Dünya'nın Dolanma Yörüngesi ve Eksen Eğikliği Modeli",
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
    id: "mcq-8-1-3",
    number: 3,
    baglam: "Ankara'da (40° Kuzey Enlemi) yaşayan bir fen öğrencisi, bahçeye diktiği 1 metre boyundaki çubuğun öğle vakti (12:00) gölge boyunu farklı tarihlerde ölçerek şu verileri kaydetmiştir:\n- 21 Haziran: 38 cm (Yılın en kısa gölgesi)\n- 23 Eylül: 84 cm\n- 21 Aralık: 173 cm (Yılın en uzun gölgesi)\n- 21 Mart: 84 cm",
    soruKoku: "Tablodaki ölçüm verileri ve Dünya'nın Güneş etrafındaki hareketi birlikte değerlendirildiğinde aşağıdaki çıkarımlardan hangisine ulaşılamaz?",
    secenekler: {
      A: "21 Haziran'da Güneş ışınları Ankara'ya yıl içindeki en büyük (dike en yakın) açıyla gelmiştir.",
      B: "21 Aralık'ta Güneş ışınlarının geliş açısı en küçük olduğu için birim alana düşen ısı enerjisi en azdır.",
      C: "21 Mart ve 23 Eylül tarihlerinde gölge boylarının eşit olması, bu tarihlerde Güneş ışınlarının Ankara'ya 90° dik açıyla geldiğini gösterir.",
      D: "Ankara dönenceler dışında yer aldığı için yılın hiçbir gününde öğle vakti gölge boyu sıfır olmamıştır."
    },
    dogruCevap: "C",
    cozum: "21 Mart ve 23 Eylül tarihlerinde Güneş ışınları yalnızca Ekvator'a 90° dik açıyla düşer. Ankara 40° Kuzey enleminde olduğu için ışınlar 50° açıyla gelir ve gölge boyu 84 cm olur, asla sıfır olmaz.",
    olculenKazanim: "F.8.1.1.2. Eksen eğikliği ve Güneş ışınlarının geliş açısı arasındaki ilişkiyi açıklar.",
    olculenBeceri: "FBAB3 Verileri Tabloya Dönüştürme ve Yorumlama",
    diagramType: "sun-angle-shadow",
    diagramTitle: "Ankara'da (40° K) Öğle Vakti Çubuk Gölge Boyu Ölçüm Modeli",
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
    id: "mcq-8-1-4",
    number: 4,
    baglam: "Astronomik ölçümlere göre Dünya'nın Güneş'e olan mesafesi yıl boyunca sabit değildir:\n- 3 Ocak (Günberi / Perihel): Dünya Güneş'e en yakındır (147.1 milyon km). Bu tarihte Türkiye'de kış yaşanırken Avustralya'da yaz yaşanmaktadır.\n- 4 Temmuz (Günöte / Afel): Dünya Güneş'e en uzaktır (152.1 milyon km). Bu tarihte Türkiye'de yaz yaşanırken Avustralya'da kış yaşanmaktadır.",
    soruKoku: "Bu bilimsel veriler, halk arasında yaygın olan 'Dünya Güneş'e yaklaştığında yaz, uzaklaştığında kış mevsimi oluşur' yanılgısını çürütmek için nasıl bir bilimsel kanıt sunar?",
    secenekler: {
      A: "Dünya Güneş'e en yakınken Kuzey Yarım Küre'de kış yaşanması ve aynı anda iki yarım kürede birbirine zıt mevsimlerin görülmesi, mesafenin değil ışınların geliş açısının belirleyici olduğunu ispatlar.",
      B: "Dünya'nın Güneş etrafındaki yörüngesi tam daire olduğu için mesafe değişimi önemsizdir.",
      C: "3 Ocak tarihinde Dünya'nın dönme hızının yavaşlaması sıcaklığın düşmesine yol açar.",
      D: "Avustralya'nın Güneş'e olan fiziksel mesafesi Türkiye'den 5 milyon kilometre daha azdır."
    },
    dogruCevap: "A",
    cozum: "Mevsimlerin sebebi Güneş'e olan mesafe değildir. Eğer mesafe etkili olsaydı, Dünya Güneş'e en yakın olduğu 3 Ocak'ta tüm dünyada yaz yaşanırdı. Ancak 3 Ocak'ta KYK kış, GYK yaz yaşar. Belirleyici faktör 23° 27' eksen eğikliğidir.",
    olculenKazanim: "F.8.1.1.1. Mevsimlerin oluşumuna yönelik tahminlerde bulunur.",
    olculenBeceri: "KB3.2 Problem Çözme • SB4 Önermeler Üzerinden Akıl Yürütme",
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
    id: "mcq-8-1-5",
    number: 5,
    baglam: "Bir simülasyon programında 'Dünya'nın dönme ekseninin 23° 27'lik eğikliği 0° olsaydı (yani dönme ekseni yörünge düzlemine tam dik olsaydı)' senaryosu çalıştırılmıştır.",
    soruKoku: "Bu simülasyon sonucunda Dünya üzerinde gerçekleşecek değişikliklerle ilgili aşağıdaki yargılardan hangisi kesinlikle gerçekleşirdi?",
    secenekler: {
      A: "Mevsimler tamamen ortadan kalkar; yıl boyunca Güneş ışınları daima Ekvator'a dik gelir ve yeryüzünün her yerinde daima 12 saat gece, 12 saat gündüz yaşanırdı.",
      B: "Yeryüzündeki tüm buzullar erir ve kutuplarda tropikal yaz mevsimi başlardı.",
      C: "Gece ve gündüz oluşumu tamamen son bulur, Dünya'nın bir yüzü sürekli aydınlık kalırdı.",
      D: "Türkiye'de kış mevsimi 12 ay boyunca kesintisiz devam ederdi."
    },
    dogruCevap: "A",
    cozum: "Eksen eğikliği olmasaydı Güneş ışınlarının geliş açısı yıl boyunca hiç değişmezdi. Ekvator hep 90° alır, kutuplar hep teğet alırdı. Mevsimler oluşmaz, gece-gündüz süreleri yılın her günü tüm Dünya'da 12'şer saat eşit olurdu.",
    olculenKazanim: "F.8.1.1.1. Mevsimlerin oluşumuna yönelik tahminlerde bulunur.",
    olculenBeceri: "KB3.2 Problem Çözme • Modelleme",
    diagramType: "seasons-tilt",
    diagramTitle: "Eksen Eğikliği Olmasaydı (0° Eğiklik) Yörünge ve Güneş Açısı Modeli",
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
    id: "mcq-8-1-6",
    number: 6,
    baglam: "21 Haziran tarihinde Türkiye haritası üzerindeki K (Hatay - 36° K), L (Ankara - 40° K) ve M (Sinop - 42° K) şehirlerinde gündüz süreleri ölçülmüştür:\n- Hatay: 14 saat 40 dakika\n- Ankara: 15 saat 05 dakika\n- Sinop: 15 saat 20 dakika",
    soruKoku: "21 Haziran tarihinde Türkiye'de güneyden kuzeye doğru gidildikçe gündüz süresinin uzaması durumu aşağıdakilerden hangisiyle açıklanır?",
    secenekler: {
      A: "21 Haziran'da Kuzey Yarım Küre Güneş'e dönük olduğundan, kuzeye gidildikçe aydınlanma çemberinin gündüz diliminde kalan yay uzunluğu artar.",
      B: "Sinop'un deniz seviyesinde, Hatay'ın ise dağlık alanda yer alması gündüz süresini uzatmıştır.",
      C: "Sinop'ta Güneş ışınlarının geliş açısı Hatay'dan daha büyüktür.",
      D: "Dünya'nın kendi ekseni etrafında dönüş hızı kuzey kutbuna doğru artmaktadır."
    },
    dogruCevap: "A",
    cozum: "21 Haziran tarihinde Kuzey Yarım Küre'de güneyden kuzeye gidildikçe gündüz süresi uzar. Hatta Kuzey Kutup Dairesi'nde (66° 33' K) 24 saat gündüz yaşanır. Sinop en kuzeyde olduğundan en uzun gündüze sahiptir.",
    olculenKazanim: "F.8.1.1.1. Mevsimlerin oluşumuna yönelik tahminlerde bulunur.",
    olculenBeceri: "KB2.8 Sorgulama • SB3 Bilimsel Veri Yorumlama",
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
    id: "mcq-8-1-7",
    number: 7,
    baglam: "Konya'da tarımsal sulama için güneş enerjisi panelleri kuran bir ziraat mühendisi, panellerin mevsime göre maksimum foton yakalaması için eğim açısını ayarlamaktadır.",
    soruKoku: "Güneş ışınlarının geliş açısının mevsimsel değişimi dikkate alındığında mühendisin en yüksek enerji verimini elde etmek için uygulaması gereken doğru strateji hangisidir?",
    secenekler: {
      A: "Kış aylarında Güneş ışınları eğik geldiği için panelleri daha dik açıyla ayarlamalı, yazın ışınlar dikleştiğinde panelleri yataya yaklaştırmalıdır.",
      B: "Panelleri yıl boyunca yere tamamen paralel (0°) sabitlemelidir.",
      C: "Yaz aylarında panelleri kuzeye, kış aylarında güneye çevirmelidir.",
      D: "Panellerin açısını mevsimlere göre değil sadece gece saatlerine göre ayarlamalıdır."
    },
    dogruCevap: "A",
    cozum: "Güneş paneli, ışınları 90° dik aldığında maksimum elektrik üretir. Kışın Güneş gökyüzünde alçaktan geçtiği (eğik geldiği) için panelleri dikleştirmek gerekir. Yazın Güneş tepeden geldiği için paneller yataylaştırılır.",
    olculenKazanim: "F.8.1.1.2. Eksen eğikliği ve Güneş ışınlarının geliş açısı arasındaki ilişkiyi açıklar.",
    olculenBeceri: "KB3.2 Problem Çözme • Mühendislik Tasarımı",
    diagramType: "sun-angle-shadow",
    diagramTitle: "Mevsimlere Göre Güneş Paneli Eğim Açısı ve Işın Toplama Verimi",
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
    id: "mcq-8-1-8",
    number: 8,
    baglam: "İstanbul'da yaşayan Can, 21 Aralık günü kışlık mont ve botlarını giyerek okula giderken; aynı gün Brezilya'nın Rio de Janeiro şehrinde yaşayan kuzeni Pedro ile görüntülü konuşmuştur. Pedro'nun plajda şort ve tişörtle güneşlendiğini görmüştür.",
    soruKoku: "Aynı tarihte iki farklı yarım kürede bu derece zıt mevsim koşullarının yaşanmasının temel bilimsel sebebi nedir?",
    secenekler: {
      A: "21 Aralık tarihinde Dünya'nın eksen eğikliğinden dolayı Güney Yarım Küre'nin Güneş'e dönük olması ve ışınların Oğlak Dönencesi'ne dik açıyla düşmesidir.",
      B: "Brezilya'nın Dünya'nın merkezine Türkiye'den daha yakın konumda olmasıdır.",
      C: "21 Aralık'ta Türkiye'nin Güneş'e olan mesafesinin Brezilya'dan 10 milyon kilometre daha uzak olmasıdır.",
      D: "Güney Yarım Küre'de okyanus akıntılarının atmosferi ısıtmasıdır."
    },
    dogruCevap: "A",
    cozum: "21 Aralık günü Güneş ışınları Güney Yarım Küre'deki Oğlak Dönencesi'ne 90° dik açıyla gelir. Bu nedenle GYK yaz mevsimine başlarken, ışınları eğik alan Kuzey Yarım Küre kış mevsimine başlar.",
    olculenKazanim: "F.8.1.1.1. Mevsimlerin oluşumuna yönelik tahminlerde bulunur.",
    olculenBeceri: "KB2.8 Sorgulama • Neden-Sonuç İlişkisi",
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
    id: "mcq-8-1-9",
    number: 9,
    baglam: "23 Eylül tarihinde Dünya genelindeki gözlemevlerinden şu veriler bildirilmiştir:\n1. Ekvator çizgisi üzerinde öğle vakti dikilen çubuğun gölgesi oluşmamıştır (0 cm).\n2. Norveç (Kuzey), Kongo (Ekvator) ve Şili'de (Güney) gece ve gündüz süreleri 12'şer saat olarak ölçülmüştür.\n3. Aydınlanma çemberi kutup noktalarından geçmektedir.",
    soruKoku: "Bu gözlem verilerine göre 23 Eylül Ekinoks durumu hakkında aşağıdaki çıkarımlardan hangisi doğrudur?",
    secenekler: {
      A: "Güneş ışınları öğle vakti Ekvator'a 90° dik açıyla düşer ve eksen eğikliğinin mevsimsel yarım küre farkı oluşturma etkisi bu tarih için ortadan kalkar.",
      B: "Bu tarihten sonra Kuzey Yarım Küre'de gündüzler gecelerden daha uzun olmaya başlar.",
      C: "Güney Kutup Noktası'nda 6 aylık gece dönemi bu tarihte başlar.",
      D: "Dünya Güneş'e yıl içindeki en uzak yörünge noktasındadır."
    },
    dogruCevap: "A",
    cozum: "21 Mart ve 23 Eylül tarihlerinde eksen eğikliğinin etkisi geçici olarak dengelenir. Güneş ışınları Ekvator'a dik gelir, aydınlanma çemberi kutuplardan geçer ve tüm dünyada gece-gündüz eşitliği (ekinoks) yaşanır.",
    olculenKazanim: "F.8.1.1.2. Eksen eğikliği ve Güneş ışınlarının geliş açısı arasındaki ilişkiyi açıklar.",
    olculenBeceri: "KB2.8 Sorgulama • Bilimsel Çıkarım",
    diagramType: "seasons-tilt",
    diagramTitle: "23 Eylül Ekinoks Durumu ve Aydınlanma Çemberi Modeli",
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
    id: "mcq-8-1-10",
    number: 10,
    baglam: "Coğrafi konumları verilen üç nokta:\n- K Noktası: 10° Kuzey Enlemi (Ekvator ile Yengeç Dönencesi arasında)\n- L Noktası: 23° 27' Kuzey Enlemi (Yengeç Dönencesi üzerinde)\n- M Noktası: 39° Kuzey Enlemi (Türkiye / Dönence dışında)",
    soruKoku: "Dünya'nın yıllık dolanımı boyunca Güneş ışınlarının bu noktalara 90° dik açıyla düşme sıklığı hangisinde doğru verilmiştir?",
    secenekler: {
      A: "K noktasına yılda 2 kez, L noktasına yılda 1 kez (21 Haziran), M noktasına ise yıl boyunca hiçbir zaman dik düşmez.",
      B: "Her üç noktaya da 21 Haziran günü yılda birer kez dik açıyla düşer.",
      C: "M noktasına yılda 2 kez, L noktasına yılda 1 kez, K noktasına hiç dik düşmez.",
      D: "Dönenceler arasında kalan bölgelere Güneş ışınları hiçbir zaman dik açı ile ulaşamaz."
    },
    dogruCevap: "A",
    cozum: "Dönenceler arasına (0° ile 23.5° arası) Güneş ışınları yılda 2 kez dik gelir. Dönencelerin tam üzerine (Yengeç ve Oğlak) yılda 1 kez dik gelir. Dönenceler dışına (Türkiye gibi 36°-42° arasına) hiçbir zaman dik açıyla düşmez.",
    olculenKazanim: "F.8.1.1.2. Eksen eğikliği ve Güneş ışınlarının geliş açısı arasındaki ilişkiyi açıklar.",
    olculenBeceri: "KB3.2 Problem Çözme • Akıl Yürütme",
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
    id: "mcq-8-1-11",
    number: 11,
    baglam: "Toros Dağları'nda araştırma yapan bir botanik ekibi, dağın güneye bakan yamaçlarındaki karların mart ayında tamamen eridiğini ve erken çiçeklenme olduğunu; kuzeye bakan yamaçlarda ise karların mayıs ayına kadar erimediğini tespit etmiştir.",
    soruKoku: "Kuzey Yarım Küre'de dağların güney yamaçlarının daha sıcak olması (Bakı etkisi) olgusu aşağıdakilerden hangisiyle doğrudan açıklanır?",
    secenekler: {
      A: "Kuzey Yarım Küre dönence dışında Güneş daima güney ufkunda kaldığından, güney yamaçlar ışınları kuzey yamaçlara göre daha büyük açıyla alır.",
      B: "Dağların kuzey yamaçlarında yer çekimi kuvveti daha fazla olduğu için hava daha soğuktur.",
      C: "Güney yamaçlardaki bitki köklerinin toprağı ısıtması sonucu karlar erir.",
      D: "Kuzey yamaçlar Güneş'e fiziksel mesafe olarak 50 km daha uzakta kalır."
    },
    dogruCevap: "A",
    cozum: "KYK'de dönence dışındaki alanlarda Güneş daima güneyden aydınlatır. Dağların güneye bakan yamaçları ışınları daha dik açıyla alır ve birim alana düşen ısı enerjisi fazla olur (Bakı etkisi).",
    olculenKazanim: "F.8.1.1.2. Eksen eğikliği ve Güneş ışınlarının geliş açısı arasındaki ilişkiyi açıklar.",
    olculenBeceri: "FBAB1 Bilimsel Gözlem ve Çıkarım",
    diagramType: "sun-angle-shadow",
    diagramTitle: "Güneş Işınlarının Geliş Yönü ve Bakı Etkisi",
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
    id: "mcq-8-1-12",
    number: 12,
    baglam: "Güneş ışınları Dünya atmosferine girdiğinde gaz molekülleri tarafından tutulur:\n- Dik açıyla (90°) gelen ışınlar atmosferde kısa yol kateder ve az enerji kaybederek yeryüzünü güçlü ısıtır.\n- Eğik açıyla (20°) gelen ışınlar atmosferde çok daha uzun bir yol kateder, gazlar tarafından tutulur ve yeryüzüne zayıf enerji ulaştırır.",
    soruKoku: "Bu fiziksel ilke dikkate alındığında kış aylarında havaların soğuk olmasının nedeni aşağıdakilerden hangisidir?",
    secenekler: {
      A: "Kışın Güneş ışınları eğik açıyla geldiğinden atmosferde katettiği yol uzar ve ışık enerjisinin büyük kısmı atmosferde soğurularak yeryüzüne az enerji ulaşır.",
      B: "Kış mevsiminde atmosfer tabakası yaz mevsimine göre fiziksel olarak kalınlaşır.",
      C: "Kışın Güneş'in yaydığı toplam foton sayısı yaz mevsimine göre yarı yarıya azalır.",
      D: "Eğik gelen ışınlar Dünya'nın manyetik alanını tersine çevirerek soğumaya yol açar."
    },
    dogruCevap: "A",
    cozum: "Eğik açıyla gelen ışınlar atmosferde daha uzun yol alır. Atmosferde saçılma ve tutulma oranı arttığı için yeryüzüne ulaşan enerji yoğunluğu azalır ve kış mevsimi soğuk geçer.",
    olculenKazanim: "F.8.1.1.2. Eksen eğikliği ve Güneş ışınlarının geliş açısı arasındaki ilişkiyi açıklar.",
    olculenBeceri: "KB3.2 Problem Çözme • SB4 Akıl Yürütme",
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
    id: "mcq-8-1-13",
    number: 13,
    baglam: "Kuzey Yarım Küre'de 21 Mart İlkbahar ekinoksundan 21 Haziran Yaz gündönümüne kadar geçen 3 aylık zaman dilimindeki değişimler izlenmektedir.",
    soruKoku: "Bu 3 aylık süreçte Kuzey Yarım Küre'de gerçekleşen olaylarla ilgili aşağıdaki ifadelerden hangisi yanlıştır?",
    secenekler: {
      A: "Gündüz süreleri her geçen gün kısalırken gece süreleri uzar.",
      B: "Güneş ışınlarının öğle vakti yeryüzüyle yaptığı açı kademeli olarak büyür.",
      C: "Öğle vakti aynı çubuğun ölçülen gölge boyu her geçen gün biraz daha kısalır.",
      D: "Birim yüzeye düşen güneş ışığı enerjisi miktarı artış gösterir."
    },
    dogruCevap: "A",
    cozum: "21 Mart'ta 12 saat olan gündüz süresi, 21 Haziran'a gidildikçe her geçen gün uzar ve 21 Haziran'da maksimuma ulaşır. A seçeneğindeki 'kısalır' ifadesi tamamen yanlıştır.",
    olculenKazanim: "F.8.1.1.1. Mevsimlerin oluşumuna yönelik tahminlerde bulunur.",
    olculenBeceri: "KB2.8 Sorgulama • Değişken Analizi",
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
    id: "mcq-8-1-14",
    number: 14,
    baglam: "21 Haziran tarihinde Kuzey Kutup Dairesi'nin (66° 33' K) kuzeyinde kalan bölgelerde Güneş 24 saat boyunca batmaz ve 'Gece Yarısı Güneşi' yaşanır.",
    soruKoku: "Kutup bölgesinde 24 saat kesintisiz gündüz yaşanmasına rağmen kutuplardaki buzulların erimemesinin ve havaların ısınmamasının temel sebebi nedir?",
    secenekler: {
      A: "Güneş ışınlarının 24 saat boyunca kutup yüzeyine daima çok dar/eğik açılarla gelmesi ve birim alana düşen ısı enerjisinin buzları eritmeye yetmemesidir.",
      B: "Kutuplarda havanın bulunmaması ve ısının iletilememesidir.",
      C: "Güneş ışınlarının kutuplarda beyaz kar örtüsü tarafından tamamen emilmesidir.",
      D: "Kuzey Kutup Noktası'nın uzay boşluğuna diğer bölgelerden daha yakın olmasıdır."
    },
    dogruCevap: "A",
    cozum: "Güneş ufukta 24 saat kalsa bile geliş açısı hep 1°-15° gibi çok eğik açılarda kalır. Geniş alana yayılan zayıf enerji buzulları eritecek sıcaklık artışını sağlayamaz.",
    olculenKazanim: "F.8.1.1.2. Eksen eğikliği ve Güneş ışınlarının geliş açısı arasındaki ilişkiyi açıklar.",
    olculenBeceri: "KB3.2 Problem Çözme • Bilimsel Açıklama",
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
    id: "mcq-8-1-15",
    number: 15,
    baglam: "Bir iklim modeli çalışmasında 'Dünya'nın eksen eğikliği 23° 27' yerine 35° olsaydı' hipotezi incelenmiştir.",
    soruKoku: "Eksen eğikliğinin 35°'ye yükselmesi durumunda Türkiye gibi orta kuşak ülkelerinde yaşanacak mevsimsel değişim hangisi olurdu?",
    secenekler: {
      A: "Yaz mevsimi daha sıcak, kış mevsimi ise daha soğuk geçer; yıllık sıcaklık farkları ve mevsimsel uçlar çok daha şiddetlenirdi.",
      B: "Yıllık sıcaklık farkları azalır, tüm yıl boyunca ılıman ilkbahar yaşanırdı.",
      C: "Ekvator ile kutuplar arasındaki sıcaklık farkı tamamen sıfırlanırdı.",
      D: "Gece ve gündüz süreleri yıl boyunca daima eşit kalırdı."
    },
    dogruCevap: "A",
    cozum: "Eksen eğikliği arttıkça yazın ışınlar daha dik, kışın ise daha eğik gelir. Bu durum yazları aşırı sıcak, kışları aşırı soğuk yaparak yıllık sıcaklık farkını artırır.",
    olculenKazanim: "F.8.1.1.1. Mevsimlerin oluşumuna yönelik tahminlerde bulunur.",
    olculenBeceri: "KB3.2 Problem Çözme • Hipotez Test Etme",
    diagramType: "seasons-tilt",
    diagramTitle: "Eksen Eğikliğinin 23° 27' Yerine 35° Olması Durumu",
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
    id: "mcq-8-1-16",
    number: 16,
    baglam: "Türkiye'de (36°-42° Kuzey Enlemleri) yılın 365 günü boyunca öğle vakti (12:00) bir cismin gölgesi istisnasız daima KUZEY yönünü gösterir.",
    soruKoku: "Türkiye'de öğle vakti gölgenin daima kuzeyi göstermesinin coğrafi ve astronomik sebebi nedir?",
    secenekler: {
      A: "Türkiye'nin Yengeç Dönencesi'nin kuzeyinde yer alması ve Güneş'in öğle vakti daima güney ufkunda kalmasıdır.",
      B: "Dünya'nın manyetik kutbunun gölgeleri kuzeye doğru çekmesidir.",
      C: "Türkiye'de rüzgârların genel olarak güneyden esmesidir.",
      D: "Güneş ışınlarının yalnızca kuzey kutbuna dik düşmesidir."
    },
    dogruCevap: "A",
    cozum: "Güneş ışınları en fazla Yengeç Dönencesi'ne (23° 27' K) kadar dik gelebilir. Türkiye ise 36° K enleminden başlar. Güneş daima güneyimizde kaldığından öğle vakti gölgemiz istisnasız kuzeye düşer.",
    olculenKazanim: "F.8.1.1.2. Eksen eğikliği ve Güneş ışınlarının geliş açısı arasındaki ilişkiyi açıklar.",
    olculenBeceri: "KB2.8 Sorgulama • Çıkarım Yapmak",
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
    id: "mcq-8-1-17",
    number: 17,
    baglam: "21 Aralık tarihinde aynı boylam üzerinde yer alan iki şehirdeki ölçümler:\n- K Şehri (Kuzey Yarım Küre, 35° K): Öğle ışık açısı: 31.5°, Gündüz süresi: 9.5 saat, Sıcaklık: 4°C\n- L Şehri (Güney Yarım Küre, 35° G): Öğle ışık açısı: 78.5°, Gündüz süresi: 14.5 saat, Sıcaklık: 29°C",
    soruKoku: "Bu verilere göre L şehrinin K şehrinden belirgin şekilde daha sıcak olmasının iki temel bilimsel nedeni hangi seçenekte eksiksiz verilmiştir?",
    secenekler: {
      A: "Güneş ışınlarının geliş açısının daha büyük olması ve gündüz süresinin daha uzun olması.",
      B: "L şehrinin deniz seviyesinde olması ve K şehrinin rakımının yüksek olması.",
      C: "L şehrinin Güneş'e olan fiziksel mesafesinin K şehrinden daha az olması.",
      D: "K şehrinde gece süresinin gündüz süresine eşit olması."
    },
    dogruCevap: "A",
    cozum: "Bir yerin ısınmasını belirleyen iki ana etken vardır: 1) Güneş ışınlarının geliş açısı (büyük açıyla gelen ışın birim alana çok enerji bırakır), 2) Gündüz süresi (uzun gündüzde ısı birikimi artar). L şehrinde her ikisi de yüksektir.",
    olculenKazanim: "F.8.1.1.1. Mevsimlerin oluşumuna yönelik tahminlerde bulunur.",
    olculenBeceri: "FBAB3 Verileri Tablo ve Grafiğe Dönüştürme/Yorumlama",
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
    id: "mcq-8-1-18",
    number: 18,
    baglam: "Bir fen öğrencisi açıölçer ve ışık sensörü ile yaptığı deneyde açı 10°, 30°, 60° ve 90° yapıldığında yüzeyin sıcaklık artışını kaydetmiştir. Açı 10° iken sıcaklık artışı 2°C iken, 90° iken 32°C olmuştur.",
    soruKoku: "Bu deney sonucuyla Dünya'daki mevsimler ilişkilendirildiğinde hangi çıkarım yapılabilir?",
    secenekler: {
      A: "Yaz mevsiminde bulunulan yarım küre Güneş'e doğru eğik olduğundan ışık dikleşir ve sıcaklık artışı maksimuma ulaşır.",
      B: "Açı büyüdükçe ışık ışınları kırılmaya uğramadan uzaya geri yansır.",
      C: "Sıcaklığın artması Güneş'in Dünya'ya olan kütle çekimini zayıflatır.",
      D: "Kış mevsiminde açının 90° olması kar yağışına sebep olur."
    },
    dogruCevap: "A",
    cozum: "Geliş açısı 90° olduğunda birim alana düşen ısı enerjisi maksimum olur. Yaz mevsiminde eksen eğikliği sayesinde ışınlar dikleşir ve yüksek sıcaklıklar meydana gelir.",
    olculenKazanim: "F.8.1.1.2. Eksen eğikliği ve Güneş ışınlarının geliş açısı arasındaki ilişkiyi açıklar.",
    olculenBeceri: "KB3.2 Problem Çözme • SB3 Bilimsel Tahmin",
    diagramType: "sun-angle-shadow",
    diagramTitle: "Işığın Geliş Açısı ile Yüzey Sıcaklık Artışı Grafiği",
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
    id: "mcq-8-1-19",
    number: 19,
    baglam: "Öğretmen tahtaya şu iki durumu yazmıştır:\n1. Yalnızca Dünya'nın Güneş etrafında dolanması olsaydı ama eksen eğikliği olmasaydı.\n2. Yalnızca eksen eğikliği olsaydı ama Dünya Güneş etrafında dolanmayıp uzayda sabit dursaydı.",
    soruKoku: "Mevsimlerin periyodik olarak her yıl düzenli bir döngü hâlinde tekrarlanabilmesi için bu iki olayın birlikte gerçekleşmesi zorunluluğu nasıl açıklanır?",
    secenekler: {
      A: "Eksen eğikliği ışınların açısını farklılaştırır; yıllık dolanma ise bu açının yıl içinde periyodik olarak değişerek mevsim döngüsünü oluşturmasını sağlar.",
      B: "Dolanma hareketi olmasaydı Dünya kendi ekseni etrafında dönemezdi.",
      C: "Eksen eğikliği yalnızca Ay'ın evrelerini oluşturur, dolanma ise gece-gündüzü belirler.",
      D: "İki hareket de Güneş'in Dünya etrafında dönmesiyle tetiklenir."
    },
    dogruCevap: "A",
    cozum: "Mevsimlerin oluşması için iki şart aynı anda bulunmalıdır: 1) Eksen eğikliği (farklılaşmayı başlatır), 2) Dolanma hareketi (farklılaşmanın yıl içinde devirdaim yapmasını sağlar). Tek başına biri yeterli değildir.",
    olculenKazanim: "F.8.1.1.1. Mevsimlerin oluşumuna yönelik tahminlerde bulunur.",
    olculenBeceri: "KB3.2 Problem Çözme • Sentez",
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
    id: "mcq-8-1-20",
    number: 20,
    baglam: "Özdeş K, L ve M çubukları 21 Haziran günü Dünya üzerindeki üç farklı enlemde yere dikilmiştir. Öğle vakti yapılan ölçümlerde:\n- K çubuğunun gölgesi oluşmamıştır (gölge boyu = 0).\n- L çubuğunun gölgesi güney yönüne düşmüştür.\n- M çubuğunun gölgesi kuzey yönüne düşmüştür.",
    soruKoku: "Bu gölge boyu ve yönü verilerine göre çubukların bulunduğu konumlar hakkında yapılan aşağıdaki çıkarımlardan hangisi kesinlikle doğrudur?",
    secenekler: {
      A: "K çubuğu Yengeç Dönencesi üzerindedir, L çubuğu Güney Yarım Küre'dedir, M çubuğu ise Yengeç Dönencesi'nin kuzeyindedir.",
      B: "K çubuğu Ekvator'dadır, L çubuğu Kuzey Kutbu'ndadır, M çubuğu Güney Kutbu'ndadır.",
      C: "Her üç çubuk da aynı yarım kürede yer almaktadır.",
      D: "21 Haziran günü hiçbir çubuğun gölgesi sıfır olamaz."
    },
    dogruCevap: "A",
    cozum: "21 Haziran'da Güneş ışınları Yengeç Dönencesi'ne 90° dik düşer; bu nedenle Yengeç Dönencesi üzerindeki K çubuğunda gölge sıfırdır. Dönencenin kuzeyindekilerde (M çubuğu) gölge kuzeye; güney yarım kürede (L çubuğu) gölge güneye düşer.",
    olculenKazanim: "F.8.1.1.2. Eksen eğikliği ve Güneş ışınlarının geliş açısı arasındaki ilişkiyi açıklar.",
    olculenBeceri: "KB3.2 Problem Çözme • SB5 Çıkarım Yapmak",
    diagramType: "seasons-tilt",
    diagramTitle: "21 Haziran Tarihinde Dönenceler ve Gölge Boyu Dağılımı",
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
];
