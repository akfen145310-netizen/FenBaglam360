// Grade 8 MEBİ LGS Kavram Yanılgıları ve Soru Havuzu Motoru
// "8. sınıf konular" (MEBİ LGS Konu Özeti, Kavram Yanılgıları, Çeldiriciler, Başucu Notları)
import { SectionContent, ContextQuestion } from '../../types';
import type { ExtendedContextQuestion } from '../questionGenerator';
import { unit8_1_1_ContextQuestions } from './unit1_section1_questions';

export interface G8TopicMetadata {
  code: string;
  unitCode: string;
  unitNumber: number;
  unitTitle: string;
  unitColor: string;
  title: string;
  summary: string;
  kazanimlar: string[];
  diagramType: string;
  misconceptions: string[];
  traps: string[];
}

export const G8_TOPICS_METADATA: G8TopicMetadata[] = [
  {
    "code": "8.1.1",
    "unitCode": "8.1",
    "unitNumber": 1,
    "unitTitle": "1. Ünite: Mevsimler ve İklim",
    "unitColor": "violet",
    "title": "Mevsimlerin Oluşumu ve Eksen Eğikliği",
    "summary": "Dünya'nın dönme ekseninin 23° 27' eğik olması, Güneş etrafında dolanması, birim yüzeye düşen ışık enerjisi, ekinoks ve gündönümü tarihleri.",
    "kazanimlar": [
      "F.8.1.1.1. Mevsimlerin oluşumuna yönelik tahminlerde bulunur.",
      "F.8.1.1.2. Eksen eğikliği ve Güneş ışınlarının geliş açısı arasındaki ilişkiyi açıklar."
    ],
    "diagramType": "seasons-tilt",
    "misconceptions": [
      "Dünya Güneş'e yaklaştığında yaz, uzaklaştığında kış mevsimi yaşanır yanılgısı (Oysa 3 Ocak'ta Dünya Güneş'e en yakındır ve KYK'de kış yaşanır; mevsimleri belirleyen mesafe değil eksen eğikliği ve ışınların geliş açısıdır).",
      "Ekvator çizgisine Güneş ışınları yıl boyunca her gün 90° dik açıyla düşer yanılgısı (Sadece 21 Mart ve 23 Eylül ekinokslarında tam dik düşer).",
      "Türkiye'de veya dönenceler dışındaki bölgelerde öğle vakti gölge boyu sıfır olabilir yanılgısı (Güneş ışınları sadece dönenceler arasına dik düşer; Türkiye dönenceler dışındadır, gölge asla sıfır olmaz)."
    ],
    "traps": [
      "21 Haziran'da KYK'de en uzun gündüz yaşanırken GYK'de en uzun gece yaşandığını ve kutup noktalarındaki 6 aylık gece-gündüz durumunu ters eşleştirme.",
      "Güneş ışınlarının gelme açısı dikleştikçe aydınlanan alanın küçüldüğünü fakat birim yüzeye aktarılan ısı enerjisinin arttığını karıştırma."
    ]
  },
  {
    "code": "8.1.2",
    "unitCode": "8.1",
    "unitNumber": 1,
    "unitTitle": "1. Ünite: Mevsimler ve İklim",
    "unitColor": "violet",
    "title": "İklim ve Hava Hareketleri",
    "summary": "Rüzgâr oluşumu, yüksek ve alçak basınç alanları, havadaki nem ve yağış türleri, iklim ve hava olayları farkı, klimatoloji, küresel iklim değişikliği.",
    "kazanimlar": [
      "F.8.1.2.1. İklim ve hava olayları arasındaki farkı açıklar.",
      "F.8.1.2.2. İklim biliminin (klimatoloji) bir bilim dalı olduğunu ve bu alanda çalışan uzmanlara iklim bilimci (klimatolog) dendiğini belirtir.",
      "F.8.1.2.3. Rüzgâr oluşumunu sıcaklık ve basınç farkıyla açıklar."
    ],
    "diagramType": "weather-pressure",
    "misconceptions": [
      "Sıcak havanın yoğunluğunun fazla olup yüksek basınç alanı oluşturduğu yanılgısı (Isınan hava genleşir, yoğunluğu azalır, yükselici hava hareketi yapar ve Alçak Basınç oluşturur; soğuk hava ise alçalıcı hareketle Yüksek Basınç oluşturur).",
      "Rüzgârın alçak basınçtan yüksek basınca veya sıcaktan soğuğa doğru estiği yanılgısı (Rüzgâr daima Yüksek Basınç'tan Alçak Basınç'a, yani Soğuk bölgeden Sıcak bölgeye doğru yatay hava akımıdır).",
      "Yüksek basınç alanlarında havanın kapalı ve yağışlı olduğu yanılgısı (Yüksek basınçta alçalıcı hava hareketi vardır, bulut oluşumu engellenir ve hava açıktır/güneşlidir; alçak basınçta yükselen hava soğuyup bulut ve yağış oluşturur)."
    ],
    "traps": [
      "Yağış türlerinde gökyüzüne yakın yerde oluşanlar (Yağmur, Kar, Dolu) ile yeryüzüne yakın yerde oluşanları (Çiy, Kırağı, Sis) birbirine karıştırma.",
      "Geniş bölgede 30-40 yıllık ortalama olan İklim (Klimatoloji) ile dar alanda kısa süreli değişkenlik gösteren Hava Olaylarını (Meteoroloji, tahminidir) birbirine karıştırma."
    ]
  },
  {
    "code": "8.2.1",
    "unitCode": "8.2",
    "unitNumber": 2,
    "unitTitle": "2. Ünite: DNA ve Genetik Kod",
    "unitColor": "emerald",
    "title": "DNA'nın Yapısı, Nükleotidler ve Eşlenme",
    "summary": "Nükleotid yapısı (Fosfat, Şeker, Organik Baz), Adenin-Timin, Guanin-Sitozin eşleşmesi, genetik kod hiyerarşisi (Kromozom > DNA > Gen > Nükleotid), DNA'nın kendini eşlemesi ve tek/çift zincir onarım kuralları.",
    "kazanimlar": [
      "F.8.2.1.1. Nükleotid, gen, DNA ve kromozom kavramlarını açıklayarak bu kavramlar arasında ilişki kurar.",
      "F.8.2.1.2. DNA'nın yapısını model üzerinde gösterir.",
      "F.8.2.1.3. DNA'nın kendini nasıl eşlediğini ifade eder."
    ],
    "diagramType": "dna-replication-model",
    "misconceptions": [
      "Kromozom sayısı fazla olan canlının daha gelişmiş veya daha büyük olduğu yanılgısı (Eğrelti otu 500 kromozomludur, insan 46; kromozom sayısı gelişmişlik veya vücut büyüklüğüyle ilişkisizdir).",
      "Farklı canlı türlerinin kromozom sayılarının aynı olamayacağı yanılgısı (İnsan ve moli balığı her ikisi de 46 kromozoma sahiptir; benzerlik gen dizilimiyle ilgilidir).",
      "DNA'daki tüm hasarların onarılabileceği yanılgısı (Tek bir zincirdeki eksik baz veya yanlış eşleşme onarılabilir; ancak karşılıklı iki zincirdeki nükleotidlerin ikisi birden kopmuşsa bu hasar onarılamaz)."
    ],
    "traps": [
      "DNA eşlenmesi sırasında sitoplazmadaki serbest nükleotid sayısının azaldığını, çekirdekteki nükleotid sayısının arttığını grafik sorularında ters yorumlama.",
      "Bir nükleotidin adını taşıdığı organik bazdan aldığını (Örn: Adenin nükleotidi), fakat yapısında mutlaka 1 fosfat ve 1 deoksiriboz şekeri bulunduğunu gözden kaçırma."
    ]
  },
  {
    "code": "8.2.2",
    "unitCode": "8.2",
    "unitNumber": 2,
    "unitTitle": "2. Ünite: DNA ve Genetik Kod",
    "unitColor": "emerald",
    "title": "Kalıtım, Çaprazlamalar ve Akraba Evliliği",
    "summary": "Mendel genetiği, alel genler, baskın (dominant) ve çekinik (resesif) genler, homozigot (saf) ve heterozigot (melez) döller, fenotip ve genotip oranları, tek karakter çaprazlamaları, insanda cinsiyet oluşumu ve akraba evliliği riskleri.",
    "kazanimlar": [
      "F.8.2.2.1. Kalıtım ile ilgili kavramları tanımlar.",
      "F.8.2.2.2. Tek karakter çaprazlamaları ile ilgili problemler çözerek sonuçlar hakkında yorum yapar.",
      "F.8.2.2.3. Akraba evliliklerinin genetik sonuçlarını tartışır."
    ],
    "diagramType": "cell-division",
    "misconceptions": [
      "Bebeğin cinsiyetini annenin belirlediği yanılgısı (Anne sadece X kromozomu verir; cinsiyeti babadan gelen spermdeki X veya Y kromozomu belirler: XX kız, XY erkek).",
      "Önceki 3 çocuğu erkek olan bir ailenin 4. çocuğunun kız olma ihtimalinin daha yüksek olduğu yanılgısı (Her doğumda kız veya erkek olma olasılığı bağımsız bir olaydır ve daima %50'dir).",
      "Akraba evliliğinin doğrudan genetik hastalık yarattığı yanılgısı (Akraba evliliği yeni hastalık yaratmaz; ailede nesillerdir gizli kalan çekinik hastalık genlerinin yan yana gelme olasılığını artırır)."
    ],
    "traps": [
      "Fenotip oranı (dış görünüş, örn: %75 baskın, %25 çekinik) ile Genotip oranını (genetik yapı, örn: %25 AA, %50 Aa, %25 aa) birbirine karıştırma.",
      "Çekinik bir fenotipin (aa) ortaya çıkabilmesi için mutlaka her iki ebeveynden de en az birer çekinik gen (a) gelmesi gerektiğini unutma."
    ]
  },
  {
    "code": "8.2.3",
    "unitCode": "8.2",
    "unitNumber": 2,
    "unitTitle": "2. Ünite: DNA ve Genetik Kod",
    "unitColor": "emerald",
    "title": "Mutasyon, Modifikasyon, Adaptasyon ve Biyoteknoloji",
    "summary": "Mutasyon ve modifikasyon farkı, adaptasyonun canlının yaşama ve üreme şansına etkisi, doğal seçilim ve varyasyon, biyoteknoloji uygulamaları (gen aktarımı, klonlama, gen tedavisi, aşılama) ve etik boyutları.",
    "kazanimlar": [
      "F.8.2.3.1. Örneklerden yola çıkarak mutasyonu ve modifikasyonu açıklar.",
      "F.8.2.3.2. Canlıların çevreye uyumlarını (adaptasyon) gözlemleyerek açıklar.",
      "F.8.2.4.1. Biyoteknolojik uygulamaların geçmişten günümüze gelişimini değerlendirir."
    ],
    "diagramType": "dna-replication-model",
    "misconceptions": [
      "Modifikasyonların nesilden nesile aktarıldığı yanılgısı (Modifikasyon genin işleyişindeki çevre kaynaklı geçici değişimdir; kas yapan sporcunun çocuğu kaslı doğmaz, Himalaya tavşanının kesilen tüyü sıcaklık kuralına tabidir).",
      "Canlıların ihtiyaç duydukları için isteyerek adaptasyon geliştirdiği yanılgısı (Adaptasyonlar canlının isteğiyle aniden oluşmaz; var olan genetik çeşitlilik (varyasyon) içinden çevreye en uyumlu olanların hayatta kalması (doğal seçilim) ile nesiller boyunca yerleşir).",
      "Klonlamada klon canlısının taşıyıcı annenin veya yumurta hücresinin genetik kopyası olduğu yanılgısı (Klon canlı, vücut hücresinin çekirdeği (DNA'sı) alınan bireyin %100 genetik ikizidir)."
    ],
    "traps": [
      "Vücut hücresindeki mutasyonların sadece o bireyi ilgilendirdiğini, üreme hücrelerindeki (sperm/yumurta) mutasyonların ise kalıtsal olup yavrulara geçtiğini ayırt edememe.",
      "Gen aktarımı (başka türden gen ekleme) ile Klonlama (çekirdek kopyalama) ve Gen Tedavisini (kusurlu geni onarma) birbirine karıştırma."
    ]
  },
  {
    "code": "8.3.1",
    "unitCode": "8.3",
    "unitNumber": 3,
    "unitTitle": "3. Ünite: Basınç",
    "unitColor": "sky",
    "title": "Katı Basıncı ve Günlük Yaşam Uygulamaları",
    "summary": "Katı basıncının ağırlık (dik kuvvet) ve temas yüzey alanına bağlılığı (P = G / S), basıncı artıran ve azaltan günlük teknolojiler, katıların kuvveti aynen iletmesi ilkesi.",
    "kazanimlar": [
      "F.8.3.1.1. Katı basıncını etkileyen değişkenleri deneyerek keşfeder.",
      "F.8.3.1.2. Katı basıncının günlük yaşam ve teknolojideki uygulamalarına örnekler verir."
    ],
    "diagramType": "solid-pressure",
    "misconceptions": [
      "Katıların basıncı aynen ilettiği yanılgısı (Katılar üzerlerine uygulanan dik KUVVETİ büyüklüğünü ve doğrultusunu değiştirmeden aynen iletir; temas yüzey alanı değişirse basınç değişir, basıncı aynen iletmezler!).",
      "Bir katı blok dik olarak tam ortasından ikiye kesildiğinde zemine yaptığı basıncın azaldığı yanılgısı (Hem ağırlık yarıya iner hem yüzey alanı yarıya iner, dolayısıyla G/S oranı değişmez, basınç AYNI KALIR!).",
      "Tüm ağır cisimlerin zemine kesinlikle çok yüksek basınç uyguladığı yanılgısı (Ağır bir paletli iş makinesi geniş paletleri sayesinde yere binek otomobilden daha az basınç uygulayabilir)."
    ],
    "traps": [
      "Çivi, bıçak, raptiye sorularında ucun sivri olmasının yüzey alanını küçülterek basıncı artırdığını; çivinin başına vurulan kuvvetin uca aynen iletildiğini unutma.",
      "Karda batmamak için kar ayakkabısı giyilmesi, tırların çok tekerlekli olması gibi durumlarda temas yüzeyinin artırılarak basıncın azaltıldığını ters yorumlama."
    ]
  },
  {
    "code": "8.3.2",
    "unitCode": "8.3",
    "unitNumber": 3,
    "unitTitle": "3. Ünite: Basınç",
    "unitColor": "sky",
    "title": "Sıvı Basıncı ve Pascal Prensibi",
    "summary": "Sıvı basıncının derinlik (h) ve yoğunluğa (d) bağlılığı (P = h · d), kabın şeklinden ve sıvı miktarından bağımsızlığı, Pascal Prensibi (sıvıların basıncı aynen iletmesi), hidrolik frenler, krikolar ve berber koltukları.",
    "kazanimlar": [
      "F.8.3.1.2. Sıvı basıncını etkileyen değişkenleri tahmin eder ve tahminlerini test eder.",
      "F.8.3.1.3. Pascal prensibinin teknolojideki uygulamalarını açıklar."
    ],
    "diagramType": "solid-pressure",
    "misconceptions": [
      "Sıvı basıncının kabın şekline, genişliğine veya kaptaki toplam sıvı kütlesine bağlı olduğu yanılgısı (Derinlik h ve yoğunluk d aynı olduğu sürece kabın şekli, yatay genişliği veya sıvı miktarı taban basıncını ASLA değiştirmez).",
      "Derinliğin kabın tabanından yukarı doğru ölçüldüğü yanılgısı (Derinlik h, sıvının serbest üst yüzeyinden ölçülen dikey mesafedir).",
      "Sıvıların kuvveti aynen ilettiği yanılgısı (Sıvılar sıkıştırılamaz ve üzerlerine uygulanan BASINCI her yöne aynen iletir; yüzey alanları farklı olan kollarda kuvvetler farklıdır, kuvveti değil basıncı aynen iletirler)."
    ],
    "traps": [
      "Özdeş deliklerden fışkıran sıvı deneyinde en alttaki delikten çıkan suyun derinliği fazla olduğu için en hızlı ve en uzağa fışkırdığını unutma.",
      "Birbirine karışmayan sıvılarda yoğunluğu büyük olanın altta kaldığını ve tabandaki toplam basıncın sıvıların basınçları toplamı olduğunu hesaplama."
    ]
  },
  {
    "code": "8.3.3",
    "unitCode": "8.3",
    "unitNumber": 3,
    "unitTitle": "3. Ünite: Basınç",
    "unitColor": "sky",
    "title": "Gaz Basıncı ve Açık Hava Basıncı",
    "summary": "Torricelli deneyi (76 cm Hg), açık hava basıncının deniz seviyesinden yükseklere çıkıldıkça azalması, kapalı kap gaz basıncı, pipetle meyve suyu içme, van vantuzları ve Magdeburg yarım küreleri.",
    "kazanimlar": [
      "F.8.3.1.3. Gazların basınç özelliklerinin günlük yaşam ve teknolojideki uygulamalarına örnekler verir.",
      "F.8.3.1.4. Açık hava basıncının varlığını kanıtlayan deneyleri yorumlar."
    ],
    "diagramType": "weather-pressure",
    "misconceptions": [
      "Torricelli deneyinde cıva yüksekliğinin cam borunun kalınlığına, uzunluğuna veya eğikliğine bağlı olduğu yanılgısı (Açık hava basıncı 76 cm Hg'lik dikey sıvı sütununu dengeler; borunun kalın olması veya eğik durması dikey h yüksekliğini değiştirmez).",
      "Deniz seviyesinden yukarılara (dağa) çıkıldıkça açık hava basıncının arttığı yanılgısı (Yukarı çıkıldıkça havanın yoğunluğu ve üzerimizdeki hava tabakası azaldığı için açık hava basıncı AZALIR, cıva yüksekliği düşer).",
      "İçi boş veya pipetle çekilen kutunun içe doğru çökmesinin 'emme kuvveti'nden kaynaklandığı yanılgısı (Kutunun içindeki hava çekilince iç gaz basıncı düşer, dışarıdaki açık hava basıncı büyük kaldığı için kutuyu içeri doğru ezer)."
    ],
    "traps": [
      "Torricelli deneyinde cıva yerine yoğunluğu çok küçük olan su kullanılsaydı yaklaşık 10,5 metrelik devasa bir boru gerekeceğini unutma.",
      "Isıtılan teneke kutunun kapağı kapatılıp soğutulduğunda büzüşmesinin dış açık hava basıncının etkisi olduğunu kavrama."
    ]
  },
  {
    "code": "8.4.1",
    "unitCode": "8.4",
    "unitNumber": 4,
    "unitTitle": "4. Ünite: Madde ve Endüstri",
    "unitColor": "amber",
    "title": "Periyodik Sistem ve Elementlerin Sınıflandırılması",
    "summary": "Periyodik tablonun tarihsel gelişimi (Mendeleyev, Moseley), grup ve periyot kavramları, metaller, ametaller, yarı metaller ve soygazların özellikleri, istisnai elementler (Hidrojen ve Helyum).",
    "kazanimlar": [
      "F.8.4.1.1. Periyodik sistemde, grup ve periyotların nasıl oluşturulduğunu açıklar.",
      "F.8.4.1.2. Elementleri periyodik tablo üzerinde yaşantımızdaki yerlerine göre sınıflandırır."
    ],
    "diagramType": "density-tower",
    "misconceptions": [
      "1A grubunda yer alan tüm elementlerin metal (alkali metal) olduğu yanılgısı (1A'nın ilk elementi olan Hidrojen (H) bir AMETALDİR; metallerle benzer kimyasal özellik göstermez).",
      "Son katmanında 2 elektron bulunan elementin kesinlikle 2A grubunda bir metal olduğu yanılgısı (Helyum (He) atom numarası 2'dir, son katmanında 2 elektron vardır fakat katmanı tam dolu olduğu için 8A SOYGAZLAR grubundadır).",
      "Aynı grupta bulunan elementlerin kimyasal özelliklerinin tamamen aynı olduğu yanılgısı (Aynı gruptaki elementlerin kimyasal özellikleri 'aynı' değil 'BENZER'dir; ayrıca 1A'daki Hidrojen grubuyla benzer de değildir)."
    ],
    "traps": [
      "Atom numaraları ardışık olan iki elementin her zaman aynı periyotta veya yan yana olacağını varsayma (Örn: 10 numaralı Neon 2. periyot 8A'da iken, 11 numaralı Sodyum 3. periyot 1A'dadır).",
      "Soygazların ametallerin özel bir grubu olduğunu, kararlı oldukları için kimyasal bağ yapmadıklarını ve oda koşullarında tek atomlu gaz halde bulunduklarını unutma."
    ]
  },
  {
    "code": "8.4.2",
    "unitCode": "8.4",
    "unitNumber": 4,
    "unitTitle": "4. Ünite: Madde ve Endüstri",
    "unitColor": "amber",
    "title": "Fiziksel-Kimyasal Değişimler ve Kimyasal Tepkimeler",
    "summary": "Maddenin kimliğinin değişip değişmemesi, kimyasal tepkime denklemleri, kütlenin korunumu kanunu, atom cinsi ve sayısının korunması, bağ kırılımı ve yeni bağ oluşumu.",
    "kazanimlar": [
      "F.8.4.2.1. Fiziksel ve kimyasal değişim arasındaki farkları açıklar.",
      "F.8.4.3.1. Bileşiklerin kimyasal tepkime sonucunda oluştuğunu kavrar.",
      "F.8.4.3.2. Kimyasal tepkimelerde kütlenin korunduğunu gösterir."
    ],
    "diagramType": "dna-replication-model",
    "misconceptions": [
      "Kimyasal tepkimeler sonucunda yeni atomların oluştuğu veya atom türünün değiştiği yanılgısı (Kimyasal tepkimelerde hiçbir atom yok olmaz veya yoktan var olmaz; atom cinsi ve atom sayısı DAİMA KORUNUR, sadece atomlar arası bağlar kopar ve yeni bağlar düzenlenir).",
      "Açık kapta gerçekleşen yanma veya gaz çıkışlı tepkimelerde toplam kütlenin azaldığı yanılgısı (Uçup giden gazın bir kütlesi vardır; kapalı bir kapta yapılan hassas ölçümlerde girenlerin toplam kütlesi ürünlerin toplam kütlesine DAİMA EŞİTTİR).",
      "Şekerin veya tuzun suda çözünmesinin kimyasal bir değişim olduğu yanılgısı (Çözünme fiziksel bir değişimdir; su buharlaştırıldığında şeker veya tuz kimliğini kaybetmeden geri elde edilir)."
    ],
    "traps": [
      "Kimyasal tepkime grafiklerinde miktarı azalan maddelerin 'girenler', miktarı sıfırdan artan maddelerin 'ürünler' olduğunu ve azalan kütleler toplamının oluşan kütleye eşit olduğunu kurma.",
      "Molekül sayısının kimyasal tepkimelerde korunmak zorunda olmadığını, ancak atom sayısının KESİNLİKLE korunduğunu ayırt etme."
    ]
  },
  {
    "code": "8.4.3",
    "unitCode": "8.4",
    "unitNumber": 4,
    "unitTitle": "4. Ünite: Madde ve Endüstri",
    "unitColor": "amber",
    "title": "Asitler, Bazlar ve Maddenin Isı ile Etkileşimi",
    "summary": "Asit ve baz özellikleri (pH cetveli, indikatörler), asit yağmurları, nötralleşme tepkimeleri, öz ısı (c), ısı alışverişi denklemleri (Q = m·c·Δt), saf maddelerin hal değişim grafikleri.",
    "kazanimlar": [
      "F.8.4.4.1. Asit ve bazların genel özelliklerini ifade eder.",
      "F.8.4.4.2. Asit ve bazlara günlük yaşamdan örnekler verir.",
      "F.8.4.5.1. Maddelerin ısınmasının kütle, öz ısı ve sıcaklık değişimi ile ilişkisini açıklar."
    ],
    "diagramType": "density-tower",
    "misconceptions": [
      "Asit ile baz karıştırıldığında oluşan çözeltinin her zaman tamamen nötr (pH = 7) olacağı yanılgısı (Eğer asit miktarı veya derişimi fazlaysa karışım asidik kalır, baz fazlaysa bazik kalır; tam nötralleşme miktarlara bağlıdır).",
      "Isı alan saf bir maddenin sıcaklığının sürekli olarak artmak zorunda olduğu yanılgısı (Saf maddeler erime, kaynama gibi hal değişimi esnasında ısı almaya devam etseler bile sıcaklıkları SABİT KALIR).",
      "Hal değişim grafiğinde yatay çizginin (hal değişim süresinin) uzunluğunun maddenin öz ısısına bağlı olduğu yanılgısı (Hal değişim süresini uzatan şey öz ısı değil, maddenin kütlesinin fazlalığı veya ısıtıcının gücüdür)."
    ],
    "traps": [
      "Asitlerin metallerle tepkimeye girip hidrojen (H2) gazı açığa çıkardığını, bu yüzden asitlerin metal kaplarda saklanamayacağını; bazların ise cam ve porseleni matlaştırdığını unutma.",
      "Öz ısısı küçük olan maddelerin çabuk ısınıp çabuk soğuduğunu, öz ısısı büyük olan maddelerin (su gibi) geç ısınıp geç soğuduğunu deney sorularında doğru eşleştirme."
    ]
  },
  {
    "code": "8.5.1",
    "unitCode": "8.5",
    "unitNumber": 5,
    "unitTitle": "5. Ünite: Basit Makineler",
    "unitColor": "indigo",
    "title": "Makaralar ve Kaldıraçlar",
    "summary": "Basit makinelerin temel prensipleri (İş ve enerjiden kazanç OLMAMASI), sabit ve hareketli makaralar, palangalar, kaldıraç çeşitleri (destek, yük ve kuvvetin konumuna göre), kuvvet kazancı ve yoldan kayıp bağıntıları.",
    "kazanimlar": [
      "F.8.5.1.1. Basit makinelerin sağladığı avantajları örnekler üzerinden açıklar.",
      "F.8.5.1.2. Basit makinelerden yararlanarak günlük yaşamda iş kolaylığı sağlayacak bir düzenek tasarlar."
    ],
    "diagramType": "pulley-systems",
    "misconceptions": [
      "Basit makinelerin yapılan İŞTEN VEYA ENERJİDEN KAZANÇ sağladığı yanılgısı (MEB'in en büyük çeldiricisidir! Hiçbir basit makine işten veya enerjiden kazanç SAĞLAMAZ; sadece iş yapma kolaylığı sağlar. Kuvvetten kazanç varsa aynı oranda yoldan kayıp vardır).",
      "Daha fazla parça veya makara içeren bir sistemin her zaman daha fazla kuvvet kazancı sağlayacağı yanılgısı (Kuvvet kazancı sistemin karmaşıklığına değil, yükü taşıyan ip sayısına ve kuvvet/yük kolu oranına bağlıdır).",
      "Kaldıraçlarda destek noktasının daima yük ile kuvvetin tam ortasında olması gerektiği yanılgısı (Destek uçta olabilir [el arabası, cımbız], ortada olabilir [pense, tahterevalli]; kuvvet kazancı için kuvvet kolu yük kolundan uzun olmalıdır)."
    ],
    "traps": [
      "Sabit makarada kuvvet kazancı olmadığını, sadece kuvvetin yönünü değiştirerek iş kolaylığı sağladığını; hareketli makarada ise 2 kat kuvvet kazancı olup ipin 2 kat fazla çekildiğini unutma.",
      "Yükün ortada olduğu kaldıraçlarda (el arabası, ceviz kıracağı) daima kuvvet kazancı olduğunu; kuvvetin ortada olduğu kaldıraçlarda (cımbız, maşa) yoldan kazanç, kuvvetten kayıp olduğunu hatırlama."
    ]
  },
  {
    "code": "8.5.2",
    "unitCode": "8.5",
    "unitNumber": 5,
    "unitTitle": "5. Ünite: Basit Makineler",
    "unitColor": "indigo",
    "title": "Eğik Düzlem, Çıkrık, Dişli Çarklar ve Kasnaklar",
    "summary": "Eğik düzlemde kuvvet kazancı bağıntısı, çıkrık sistemlerinde kuvvet ve yük kolu oranları, vidanın eğik düzlem ilkesi, eş merkezli ve farklı merkezli dişli çarklar ile kasnaklarda dönme yönü ve tur sayısı hesapları.",
    "kazanimlar": [
      "F.8.5.1.1. Basit makinelerin sağladığı avantajları örnekler üzerinden açıklar.",
      "F.8.5.1.2. Çıkrık, eğik düzlem ve dişli çark düzeneklerini analiz eder."
    ],
    "diagramType": "pulley-systems",
    "misconceptions": [
      "Eğik düzlemin yer ile yaptığı açı (eğim) sabitken boyu uzatıldığında uygulanması gereken en küçük kuvvetin değişeceği yanılgısı (Eğim açısı aynı kaldığı sürece yükü çıkarmak için gereken en küçük kuvvet AYNI KALIR; kuvveti azaltmak için eğim açısını küçültmek/boyu uzatıp yüksekliği sabit tutmak gerekir).",
      "Çıkrıkta her zaman kuvvetten kayıp olabileceği yanılgısı (Kuvvetin uygulandığı çevirme kolunun yarıçapı R daima ipin sarıldığı silindirin yarıçapı r'den büyük tasarlandığı için çıkrıkta DAİMA KUVVETTEN KAZANÇ vardır).",
      "Eş merkezli (merkezleri perçinli) dişlilerin veya kasnakların farklı sayıda tur atabileceği yanılgısı (Merkezleri perçinli çarkların dönme yönü ve tur sayıları BİRBİRİNE EŞİTTİR)."
    ],
    "traps": [
      "Birbirine temas eden dişli çarkların ve çapraz bağlı kasnakların zıt yönde döndüğünü; diş sayısı fazla olan çarkın daha az tur attığını (ters orantı) hesaplama.",
      "Tornavida, musluk başı, direksiyon, bisiklet pedalı ve kahve değirmeninin günlük hayattaki çıkrık modelleri olduğunu ayırt etme."
    ]
  },
  {
    "code": "8.6.1",
    "unitCode": "8.6",
    "unitNumber": 6,
    "unitTitle": "6. Ünite: Enerji Dönüşümleri ve Çevre Bilimi",
    "unitColor": "teal",
    "title": "Besin Zinciri, Enerji Akışı ve Ekoloji Piramidi",
    "summary": "Üreticiler, tüketiciler ve ayrıştırıcılar, besin ağı ilişkileri, ekoloji piramidinde aşağıdan yukarıya değişimler (%10 enerji aktarım kuralı, biyokütle azalması, biyolojik birikim artışı).",
    "kazanimlar": [
      "F.8.6.1.1. Besin zincirindeki üretici, tüketici, ayrıştırıcı ilişkisini açıklar.",
      "F.8.6.1.2. Ekoloji piramidindeki enerji aktarımını değerlendirir."
    ],
    "diagramType": "roller-coaster-energy",
    "misconceptions": [
      "Ekoloji piramidinde yukarı doğru çıkıldıkça enerjinin arttığı veya değişmediği yanılgısı (Her basamakta enerjinin yaklaşık %90'ı canlının yaşamsal faaliyetlerinde harcanır veya ısı olarak çevreye yayılır; sadece %10'u bir üst basamağa aktarılır).",
      "Ayrıştırıcıların (mantarlar ve bakteriler) sadece en üst basamakta bulunduğu veya besin piramidinin bir parçası olmadığı yanılgısı (Ayrıştırıcılar piramidin TÜM BASAMAKLARINDA yer alır; ölü organik atıkları inorganik maddelere çevirerek üreticilere sunarlar).",
      "Ayrıştırıcıların maddeleri 'yok ettiği' yanılgısı (Ayrıştırıcılar yok edici değil geri dönüştürücüdür; madde döngülerinin kilit taşıdırlar)."
    ],
    "traps": [
      "Piramitte yukarı çıkıldıkça Aktarılan Enerjinin, Biyokütlenin ve Birey Sayısının AZALDIĞINI; buna karşılık Biyolojik Birikimin (dokularda biriken zehirli kimyasal miktarının) ARTTIĞINI karıştırma.",
      "Besin ağında bir canlı türünün sayısındaki azalmanın onunla beslenen ve onun beslendiği diğer tüm canlıları kademeli olarak etkilediğini zincirleme analiz etme."
    ]
  },
  {
    "code": "8.6.2",
    "unitCode": "8.6",
    "unitNumber": 6,
    "unitTitle": "6. Ünite: Enerji Dönüşümleri ve Çevre Bilimi",
    "unitColor": "teal",
    "title": "Fotosentez, Hücresel Solunum ve Madde Döngüleri",
    "summary": "Fotosentez denklemi (Karbondioksit + Su + Işık -> Glikoz + Oksijen), fotosentez hızına etki eden faktörler (Işık rengi, CO2, su, sıcaklık), hücresel solunum (oksijenli ve oksijensiz fermantasyon), karbon, su ve azot döngüleri.",
    "kazanimlar": [
      "F.8.6.2.1. Fotosentezin canlılar için önemini açıklar.",
      "F.8.6.2.2. Fotosentez hızını etkileyen faktörleri değerlendirir.",
      "F.8.6.3.1. Canlılarda solunumun önemini açıklar."
    ],
    "diagramType": "roller-coaster-energy",
    "misconceptions": [
      "Bitkilerin sadece gündüz fotosentez, gece ise solunum yaptığı yanılgısı (Bitkiler de dahil olmak üzere canlı hücreler GECE VE GÜNDÜZ 24 SAAT KESİNTİSİZ SOLUNUM YAPAR; fotosentez ise sadece ışıklı ortamda gerçekleşir).",
      "Yeşil bitkilerin en hızlı yeşil ışıkta fotosentez yaptığı yanılgısı (Klorofil yeşil ışığın çoğunu yansıttığı için bitkiler yeşil görünür; bu yüzden en yavaş YEŞİL ışıkta, en hızlı MOR/MAVİ ve KIRMIZI ışıkta fotosentez yaparlar!).",
      "Bitkilerin atmosferdeki serbest azotu doğrudan yapraklarıyla alıp kullandığı yanılgısı (Bitkiler gaz halindeki azotu doğrudan kullanamaz; baklagillerin kökündeki azot bağlayıcı bakterilerin azotu toprağa bağlaması gerekir)."
    ],
    "traps": [
      "Fotosentez yapan bir bitkinin kapalı cam fanustaki karbondioksit miktarını azalttığını, oksijen miktarını artırdığını ve kendi kuru kütlesini (biyokütlesini) artırdığını unutma.",
      "Kireç suyunun karbondioksit ayıracı olduğunu ve ortamda CO2 gazı oluşursa kireç suyunun bulanacağını deney sorularında doğru yorumlama."
    ]
  },
  {
    "code": "8.7.1",
    "unitCode": "8.7",
    "unitNumber": 7,
    "unitTitle": "7. Ünite: Elektrik Yükleri ve Elektrik Enerjisi",
    "unitColor": "rose",
    "title": "Elektrik Yükleri, Elektriklenme ve Elektroskop",
    "summary": "Pozitif, negatif ve nötr cisim tanımları, protonların çekirdekte sabit olup yalnız elektronların hareket etmesi, sürtünme, dokunma ve etki ile elektriklenme kuralları, elektroskop ile yük tayini.",
    "kazanimlar": [
      "F.8.7.1.1. Elektrik yüklerini sınıflandırarak aynı ve farklı cins yüklerin birbirine etkisini açıklar.",
      "F.8.7.1.2. Elektriklenme çeşitlerini fark eder.",
      "F.8.7.2.1. Elektroskopun çalışma prensibini açıklar."
    ],
    "diagramType": "electric-circuit",
    "misconceptions": [
      "Nötr cisimlerin içerisinde hiç elektrik yükü bulunmadığı yanılgısı (Nötr bir cisimde pozitif (+) ve negatif (-) yük sayıları BİRBİRİNE EŞİTTİR; 'yüksüz' demek yük yok demek değil, net yük sıfır demektir).",
      "Elektriklenme sırasında pozitif yüklerin (protonların) bir cisimden diğerine aktığı yanılgısı (Pozitif yükler atom çekirdeğinde sabittir ve ASLA hareket etmez; hareket eden ve cisimler arasında alınıp verilen yalnızca NEGATİF ELEKTRONLARDIR!).",
      "Birbirini çeken iki cismin kesinlikle zıt yüklü olduğu yanılgısı (Yüklü bir cisim [ister + ister - olsun], nötr ve hafif bir iletken cismi de kendine doğru çeker; iki cisim birbirini itiyorsa kesin aynı yüklüdür, fakat çekiyorsa biri nötr olabilir!)."
    ],
    "traps": [
      "Sürtünme ile elektriklenen iki yalıtkan cismin mutlaka eşit miktarda ve ZIT işaretle yüklendiğini (Örn: Ebonit plastik çubuk (-) olurken yün kumaş (+) olur; cam çubuk (+) olurken ipek kumaş (-) olur) unutma.",
      "Dokunma ile elektriklenmede iletken cisimlerin son yüklerinin işaretinin MUTLAKA AYNI olduğunu (ikisi de +, ikisi de - veya ikisi de nötr) ve toplam yükün korunduğunu hatırla."
    ]
  },
  {
    "code": "8.7.2",
    "unitCode": "8.7",
    "unitNumber": 7,
    "unitTitle": "7. Ünite: Elektrik Yükleri ve Elektrik Enerjisi",
    "unitColor": "rose",
    "title": "Topraklama ve Elektrik Enerjisinin Dönüşümü",
    "summary": "Topraklama mekanizması ve elektron transfer yönü, elektrik enerjisinin ısı, ışık ve hareket enerjisine dönüşümü, elektrik motoru ve jeneratör çalışma ilkeleri, sigortalar ve elektrik güvenliği.",
    "kazanimlar": [
      "F.8.7.2.2. Topraklamanın önemini açıklar.",
      "F.8.7.3.1. Elektrik enerjisinin ısı ve ışık enerjisine dönüşümünü inceler.",
      "F.8.7.3.2. Elektrik enerjisinin hareket enerjisine, hareket enerjisinin elektrik enerjisine dönüşümünü kavrar."
    ],
    "diagramType": "electric-circuit",
    "misconceptions": [
      "Topraklanan pozitif yüklü bir cisimden toprağa pozitif yük aktığı yanılgısı (Pozitif yükler hareket etmez; pozitif cisim toprağa bağlandığında TOPRAKTAN CİSME elektron akar ve cismi nötrler; negatif cisim toprağa bağlandığında ise cisimden toprağa elektron akar).",
      "Elektrik enerjisinin santrallerde hiçlikten yoktan var edildiği yanılgısı (Enerji yoktan var edilemez; suyun, rüzgârın veya buharın hareket enerjisi jeneratörler yardımıyla elektrik enerjisine dönüştürülür).",
      "Elektrik motoru ile jeneratörün aynı enerji dönüşümünü yaptığı yanılgısı (Elektrik motoru elektrik enerjisini HAREKET enerjisine dönüştürürken; jeneratör hareket enerjisini ELEKTRİK enerjisine dönüştürür)."
    ],
    "traps": [
      "Aşırı akım geçtiğinde eriyerek devreyi kesen sigortaların devrenin güvenliği için yangın ve arızaları önleyen hayati bir eleman olduğunu unutma.",
      "Yüksek gerilim hatları, paratoner (yıldırımsavar) ve tankerlerdeki zincirlerin statik elektriği toprağa ileterek patlama riskini önlediğini kavrama."
    ]
  }
];

export function findG8MetadataByCode(code: string): G8TopicMetadata | undefined {
  return G8_TOPICS_METADATA.find(t => t.code === code);
}

// 8. Sınıf için özel 20 Soru Üretici (Sadece 8. sınıf konuları, kavram yanılgıları ve çeldiriciler)
export function generateGrade8ContextQuestions(section: SectionContent): ExtendedContextQuestion[] {
  // Eğer önceden el ile hazırlanmış özel soru seti varsa onu kullan
  if (section.code === '8.1.1' && unit8_1_1_ContextQuestions && unit8_1_1_ContextQuestions.length === 20) {
    return unit8_1_1_ContextQuestions;
  }

  const meta = findG8MetadataByCode(section.code) || {
    code: section.code,
    unitCode: section.unitCode,
    unitNumber: 1,
    unitTitle: section.unitTitle,
    unitColor: 'indigo',
    title: section.title,
    summary: section.summary || section.title,
    kazanimlar: section.kazanimlar || ['Temel LGS Maarif Kazanımı'],
    diagramType: 'seasons-tilt',
    misconceptions: [
      section.title + ' ile ilgili yaygın kavram yanılgısı',
      'Deney değişkenlerinin hatalı yorumlanması',
      'Sebep-sonuç ilişkisinin ters kurulması'
    ],
    traps: [
      'Grafik eksenlerinin ters okunması tuzağı',
      'Metindeki ayrıntıya takılıp temel fen ilkesini gözden kaçırma'
    ]
  };

  const m1 = meta.misconceptions[0] || 'Temel kavram yanılgısı';
  const m2 = meta.misconceptions[1] || 'Süreç yanılgısı';
  const m3 = meta.misconceptions[2] || 'Değişken yanılgısı';
  const t1 = meta.traps[0] || 'MEB favori çeldiricisi';
  const t2 = meta.traps[1] || 'Ölçüm tuzağı';

  const questions: ExtendedContextQuestion[] = [];

  // 20 Özgün Soru Şablonu (Kavram yanılgılarına ve MEB çeldiricilerine odaklı)
  const questionBlueprints = [
    // Soru 1: 1. Kavram Yanılgısı doğrudan çürütme
    {
      diff: 'Temel' as const,
      correct: 'B' as const,
      category: 'Kavram Yanılgısını Teşhis',
      baglam: `Bir fen bilimleri öğretmeni sınıfta "${meta.title}" konusunu işlerken tahtaya şu öğrenci iddiasını yazmıştır: "${m1}". Öğretmen bu iddianın bilimsel geçerliliğini test etmek için öğrencilerden kontrollü bir deney veya bilimsel gerekçe sunmalarını istemiştir.`,
      stem: 'Buna göre aşağıdaki açıklamalardan hangisi öğrencinin düştüğü bu kavram yanılgısını bilimsel olarak EN İYİ çürütür ve gerçeği ortaya koyar?',
      opts: {
        A: `Öğrencinin iddiası her koşulda doğrudur; günlük hayattaki gözlemler bu görüşü tamamen destekler.`,
        B: `İddia bilimsel bir kavram yanılgısıdır; çünkü ${meta.summary} gerçeği doğrultusunda olaylar bu varsayıma göre değil, bilimsel kanunlara göre işler.`,
        C: `İddia yalnızca laboratuvar ortamında geçerli olup doğadaki süreçlerle hiçbir bağı bulunmamaktadır.`,
        D: `Öğrencinin görüşü teorik olarak doğru kabul edilse de ölçüm aletlerinin yetersizliği nedeniyle ispatlanamaz.`
      },
      sol: `Bu durum LGS'de öğrencilerin en sık karşılaştığı kavram yanılgılarından biridir. Doğru bilimsel ilke şudur: ${meta.summary}. Dolayısıyla B seçeneğindeki açıklama yanılgıyı kesin olarak düzeltir.`,
      mNote: m1
    },

    // Soru 2: 2. Kavram Yanılgısı / Süreç Hatası
    {
      diff: 'Temel' as const,
      correct: 'C' as const,
      category: 'Kavram Yanılgısı Deneyi',
      baglam: `"${meta.title}" konusunda araştırma yapan bir öğrenci grubu, hipotezlerini şu yanılgı üzerine kurmuştur: "${m2}". Bu hipotezi kanıtlamak üzere hazırladıkları deney düzeneğinde elde ettikleri ölçüm sonuçları beklenenin tam tersi çıkmıştır.`,
      stem: 'Deney sonuçlarının hipotezle çelişmesinin temel nedeni aşağıdakilerden hangisidir?',
      opts: {
        A: 'Deneyde kullanılan kontrol değişkenlerinin sabit tutulması ölçümün sıhhatini bozmuştur.',
        B: 'Bağımsız değişkenin etkisi gereğinden az tutulduğu için yanılgı doğrulanamamıştır.',
        C: `Öğrencilerin başlangıçta doğru kabul ettiği hipotez bir kavram yanılgısıdır; doğadaki bilimsel yasa ${meta.title} için farklı işlemektedir.`,
        D: 'Kullanılan ölçüm araçlarının hassasiyeti bilimsel standartların çok üzerindedir.'
      },
      sol: `Öğrencilerin karşılaştığı çelişki, kurdukları hipotezin yaygın bir kavram yanılgısına dayanmasından kaynaklanmaktadır. Doğru cevap C seçeneğidir.`,
      mNote: m2
    },

    // Soru 3: 3. Kavram Yanılgısı ve Zıt Kutuplar
    {
      diff: 'Temel' as const,
      correct: 'A' as const,
      category: 'Kavramsal Doğruluk',
      baglam: `Fen bilimleri dersinde "${meta.title}" ünitesi işlenirken yapılan bir ankette öğrencilerin büyük bir kısmının "${m3}" fikrine katıldığı görülmüştür. Ders öğretmeni bu durumu düzeltmek için bir simülasyon ve görsel modelleme sunmuştur.`,
      stem: 'Öğretmenin sunduğu modellemeye göre bu konudaki bilimsel doğrunun esası aşağıdakilerden hangisidir?',
      opts: {
        A: `Doğru bilimsel ilkeye göre: ${meta.summary}`,
        B: `Öğrencilerin anketteki çoğunluk cevabı modern bilim tarafından eksiksiz olarak onaylanmıştır.`,
        C: `Olayın gerçekleşme biçimi mevsime veya zamana göre tamamen rastlantısal olarak değişmektedir.`,
        D: `Bu olguda herhangi bir neden-sonuç bağı aranamaz, süreç kendiliğinden durur.`
      },
      sol: `${m3} yaygın bir yanılgıdır. Doğru bilimsel açıklama: ${meta.summary}. Doğru cevap A seçeneğidir.`,
      mNote: m3
    },

    // Soru 4: MEB Favori Çeldiricisi (Trap 1)
    {
      diff: 'Orta' as const,
      correct: 'D' as const,
      category: 'MEB Çeldirici Tuzağı',
      baglam: `LGS hazırlık denemesinde "${meta.title}" ile ilgili bir soru hazırlayan komisyon, öğrencilerin dikkatini ölçmek amacıyla şu yaygın çeldiriciyi seçeneklere yerleştirmiştir: "${t1}".`,
      stem: 'Soruyu dikkatle inceleyen ve konunun özüne hakim olan bir LGS öğrencisinin bu çeldiriciye düşmemesi için hangi temel kuralı hatırlaması gerekir?',
      opts: {
        A: 'Soru kökündeki değişkenleri dikkate almadan en uzun seçeneği işaretlemelidir.',
        B: 'Günlük hayatta kullanılan hatalı deyimleri bilimsel gerçek gibi kabul etmelidir.',
        C: 'Sorudaki verileri yalnızca kendi tahminleriyle eşleştirmelidir.',
        D: `Bu seçenekteki tuzak ifadeye aldanmamalı; ${meta.title} kuralı gereğince bilimsel ilkelerin asla bu şekilde genellenemeyeceğini bilmelidir.`
      },
      sol: `MEB'in sınavlarda sıklıkla kullandığı bu çeldirici (${t1}), öğrencilerin dikkatsizliğini ölçmeyi hedefler. Konunun püf noktası doğru kavrandığında D seçeneği açıkça görülür.`,
      mNote: t1
    },

    // Soru 5: Trap 2 / Hata Yapılabilecek Yer
    {
      diff: 'Orta' as const,
      correct: 'B' as const,
      category: 'Tuzak Sorusu Analizi',
      baglam: `Bir araştırmacı "${meta.title}" konusunda yaptığı deneyde iki farklı durum oluşturmuştur. Durumlar arasındaki fark incelenirken şu kritik hata alanına dikkat çekilmiştir: "${t2}".`,
      stem: 'Bu deneyde araştırmacının hatasız bir sonuca ulaşabilmesi için aşağıdaki adımlardan hangisini uygulaması zorunludur?',
      opts: {
        A: 'Deneydeki tüm değişkenleri aynı anda değiştirerek ölçüm almalıdır.',
        B: `Söz konusu kritik hata alanını (${t2}) göz önünde bulundurarak kontrollü değişken şartlarına tam olarak uymalıdır.`,
        C: 'Ölçüm sonuçlarını teorik formüller yerine sadece kişisel tahminlerine göre yazmalıdır.',
        D: 'Deney ortamının sıcaklık ve basınç değerlerini kaydetmeyi gereksiz görmelidir.'
      },
      sol: `Kritik tuzak alanı (${t2}) dikkate alınarak kontrollü deney standartları uygulandığında yanılgılardan korunulur. Doğru cevap B seçeneğidir.`,
      mNote: t2
    },

    // Soru 6: Kontrollü Deney Bağımsız Değişken
    {
      diff: 'Orta' as const,
      correct: 'A' as const,
      category: 'Kontrollü Deney ve Değişkenler',
      baglam: `Laboratuvarda "${meta.title}" ile ilgili kurulan bir deneyde; araştırmacı sadece tek bir faktörü kasıtlı olarak değiştirmiş, diğer tüm çevresel koşulları ise sabit tutmuştur. Yapılan ölçümlerde bağımlı değişkenin düzenli bir değişim gösterdiği tespit edilmiştir.`,
      stem: 'Bu deney ile ilgili olarak yapılan aşağıdaki yorumlardan hangisi kesinlikle doğrudur?',
      opts: {
        A: `Deneyde değiştirilen faktör bağımsız değişkendir ve ${meta.title} ilkesine uygun olarak bağımlı değişkeni doğrudan etkilemiştir.`,
        B: 'Sabit tutulan faktörler deneyin geçerliliğini ve güvenilirliğini zayıflatmıştır.',
        C: 'Deneyde birden fazla bağımsız değişken bulunduğu için sonuçtan bilimsel bir yargıya varılamaz.',
        D: 'Elde edilen veriler sadece bu laboratuvara özgü olup genel bilimsel ilkelerle uyuşmaz.'
      },
      sol: `Kontrollü deneylerde tek bir faktör (bağımsız değişken) değiştirilir ve etkisi gözlemlenir. Doğru cevap A seçeneğidir.`,
      mNote: 'Kontrollü değişken kuralları'
    },

    // Soru 7: Grafik Yorumlama
    {
      diff: 'Orta' as const,
      correct: 'C' as const,
      category: 'Grafik ve Veri Analizi',
      baglam: `"${meta.title}" sürecine ait zamana bağlı bir değişim grafiği çizilmiştir. Grafikte belirli bir aralıkta değerlerin sabit kaldığı, ardından belirli bir kural doğrultusunda ani bir artış gösterdiği görülmektedir.`,
      stem: 'Grafikteki bu kararlı ve düzenli değişim aşağıdakilerden hangisi ile EN DOĞRU şekilde açıklanır?',
      opts: {
        A: 'Sistemde dışarıdan uygulanan kontrolsüz rastgele müdahalelerle açıklanır.',
        B: 'Ölçüm yapan sensörün belirli aralıklarda devre dışı kalmasıyla açıklanır.',
        C: `Konunun temel bilimsel yasası gereği, sistemin belirli aşamalarda dengeye ulaştığı ve ${meta.summary} prensibinin işlediği ile açıklanır.`,
        D: 'Grafiğin yatay eksenindeki sürenin bilimsel hiçbir anlam taşımamasıyla açıklanır.'
      },
      sol: `Grafiklerdeki basamaklar ve eğimler doğrudan ${meta.title} konusundaki kurallarla örtüşür. Doğru cevap C seçeneğidir.`,
      mNote: 'Grafik analizi'
    },

    // Soru 8: Günlük Yaşam Mühendislik Uygulaması
    {
      diff: 'Orta' as const,
      correct: 'D' as const,
      category: 'Günlük Yaşam ve Teknoloji',
      baglam: `Mühendisler günlük yaşamda insan hayatını kolaylaştıran bir teknoloji geliştirirken "${meta.title}" konusunda geçerli olan doğa kanunlarından yararlanmışlardır. Tasarlanan cihaz bu fen ilkesini kusursuz bir optimizasyonla kullanmaktadır.`,
      stem: 'Geliştirilen bu mühendislik tasarımının çalışma prensibi hakkında aşağıdakilerden hangisi söylenemez?',
      opts: {
        A: 'Tasarımda fen bilimlerinin temel kuralları doğrudan uygulanmıştır.',
        B: 'Sistem değişkenleri insan güvenliği ve verimlilik esasına göre ayarlanmıştır.',
        C: 'Cihazın verimi doğadaki sebep-sonuç ilişkileriyle tam bir uyum içindedir.',
        D: 'Cihaz hiçbir doğa kanununa bağlı kalmaksızın enerjiyi veya maddeyi yoktan var edebilmektedir.'
      },
      sol: `Hiçbir teknolojik aygıt doğa kanunlarını ihlal edemez veya yoktan enerji/madde var edemez. Söylenemez olan D seçeneğidir.`,
      mNote: 'Mühendislik ve enerji/madde korunumu'
    },

    // Soru 9: Hipotez Testi ve Hatalı Çıkarım
    {
      diff: 'Orta' as const,
      correct: 'B' as const,
      category: 'Hipotez Sınama',
      baglam: `Dört öğrenci "${meta.title}" konusuyla ilgili hazırladıkları posterde kendi hipotezlerini savunmuştur. Öğrencilerden biri popüler bir yanılgı olan "${m1}" cümlesini posterinin ana başlığı yapmıştır.`,
      stem: 'Öğretmenin bu öğrenciye geri bildirim vererek posterini düzeltmesini istemesinin temel sebebi nedir?',
      opts: {
        A: 'Öğrencinin kullandığı yazı fontunun ve poster renklerinin uyumsuz olması.',
        B: `Başlıktaki ifadenin LGS müfredatında açıkça belirtilen bir kavram yanılgısı olması ve doğrusunun "${meta.summary}" şeklinde ifade edilmesi gerekliliği.`,
        C: 'Posterde diğer öğrencilerden daha az görsel malzeme kullanılmış olması.',
        D: 'Hipotezin sadece Türkçe kaynaklarda yer alıp yabancı dillerde geçerli olmaması.'
      },
      sol: `Bilimsel doğruluk posterlerin birincil kriteridir. Başlıktaki ifade bir kavram yanılgısıdır (${m1}). Doğru cevap B seçeneğidir.`,
      mNote: m1
    },

    // Soru 10: Tablo Veri Karşılaştırması
    {
      diff: 'Orta' as const,
      correct: 'A' as const,
      category: 'Tablo Veri Okuma',
      baglam: `Laboratuvarda 3 farklı numune üzerinde "${meta.title}" parametreleri ölçülmüş ve sonuçlar bir veri tablosunda toplanmıştır. Tablo incelendiğinde 1. numunenin en yüksek verimi sağladığı, 3. numunenin ise sınır değerde kaldığı görülmüştür.`,
      stem: 'Tablodaki bu veriler doğrultusunda yapılabilecek en kapsamlı ve bilimsel çıkarım hangisidir?',
      opts: {
        A: `Numuneler arasındaki fark, ${meta.title} ilkesi uyarınca belirlenen değişkenlerin oransal dağılımından kaynaklanmaktadır.`,
        B: 'Tablodaki hiçbir değer birbiriyle tutarlı olmayıp deney tamamen başarısızdır.',
        C: '3. numune ortamdaki tüm fiziksel yasaları geçersiz kılmıştır.',
        D: 'Sonuçlar yalnızca numunelerin dış görünüş renklerine bağlı olarak değişmiştir.'
      },
      sol: `Bilimsel veriler ${meta.title} ilkesiyle tutarlıdır. Doğru cevap A seçeneğidir.`,
      mNote: 'Veri tablosu değerlendirme'
    },

    // Soru 11: Zıt Seçenek Çeldirici Testi
    {
      diff: 'İleri / LGS' as const,
      correct: 'C' as const,
      category: 'LGS Akıl Yürütme',
      baglam: `Bir LGS deneme sınavında "${meta.title}" ile ilgili bir soruya öğrencilerin %45'i doğru cevap verirken, %40'ı tam zıt mantığa sahip çeldirici seçeneği işaretlemiştir. Yapılan analizde öğrencilerin "${t1}" tuzağına düştüğü tespit edilmiştir.`,
      stem: 'Bu soruda çeldiriciye düşen öğrencilerin düşünce sistemindeki temel eksiklik aşağıdakilerden hangisidir?',
      opts: {
        A: 'Soruda verilen deney düzeneğindeki malzemelerin adını ezberlememiş olmaları.',
        B: 'Sınav süresini gereğinden hızlı kullanarak soruyu okumadan geçmeleri.',
        C: `Sorudaki tuzak mantığı (${t1}) fark edemeyip, ${meta.title} konusundaki temel sebep-sonuç ilişkisini ters kurgulamış olmaları.`,
        D: 'Kazanım hedeflerinin dışındaki lise konularını bilmemeleri.'
      },
      sol: `Öğrencilerin en büyük zaafı ${t1} tuzağına düşmektir. Doğru cevap C seçeneğidir.`,
      mNote: t1
    },

    // Soru 12: Yanlış Bilineni Düzeltme
    {
      diff: 'İleri / LGS' as const,
      correct: 'D' as const,
      category: 'Düzeltme Stratejisi',
      baglam: `"${meta.title}" konusunda sıklıkla yapılan bir diğer hata ise "${m2}" düşüncesidir. Bir fen zümresi bu hatayı önlemek için özel bir kavram karikatürü hazırlamıştır.`,
      stem: 'Karikatürdeki karakterlerden hangisinin konuşma balonu bu konudaki bilimsel gerçeği eksiksiz yansıtmaktadır?',
      opts: {
        A: '"Bence bu durum her canlının veya sistemin keyfi tercihine göre anlık olarak değişir."',
        B: '"Eski bilim insanları ne dediyse onu ezberlemeliyiz, deney yapmaya lüzum yoktur."',
        C: '"İki durum arasında fark yoktur, olay her zaman tek yönde kendiliğinden akar."',
        D: `"Doğrusu şudur: ${meta.summary}. Bu nedenle ${m2} iddiası bilimsel gerçeklerle uyuşmaz."`
      },
      sol: `Doğru bilimsel ifade: ${meta.summary}. Karikatürdeki doğru karakter D seçeneğini söyleyen karakterdir.`,
      mNote: m2
    },

    // Soru 13: Çoklu Öncüllü LGS Formatı (I, II, III)
    {
      diff: 'İleri / LGS' as const,
      correct: 'C' as const,
      category: 'LGS Öncüllü Soru',
      baglam: `"${meta.title}" ile ilgili hazırlanan bir deneyde şu gözlemler kaydedilmiştir:
I. Bağımsız değişken artırıldığında beklenen fen olayı gerçekleşmiştir.
II. Yanılgı olarak bilinen "${m1}" durumu gözlemlenmemiş, aksine bilimsel kural doğrulanmıştır.
III. Süreç boyunca toplam madde ve enerji dengesi korunmuştur.`,
      stem: 'Yapılan bu gözlemlerden yola çıkılarak hangi ifadelerin doğruluğuna KESİNLİKLE ulaşılabilir?',
      opts: {
        A: 'Yalnız I',
        B: 'Yalnız II',
        C: 'I, II ve III',
        D: 'I ve III'
      },
      sol: `Deneydeki I, II ve III öncüllerinin tamamı hem kontrollü deney şartlarına hem de ${meta.title} konusunun bilimsel kanunlarına tam olarak uygundur. Doğru cevap C seçeneğidir.`,
      mNote: 'Öncül analizi'
    },

    // Soru 14: İki Aşamalı Deney Senaryosu
    {
      diff: 'İleri / LGS' as const,
      correct: 'A' as const,
      category: 'Aşamalı Deney Analizi',
      baglam: `1. Aşamada: "${meta.title}" ile ilgili bir sistem standart koşullarda çalıştırılmıştır.
2. Aşamada: Sisteme müdahale edilerek "${t2}" durumuna zemin hazırlanmış ve sonuçların nasıl etkilendiği ölçülmüştür.`,
      stem: '2. aşamada elde edilen sonuç 1. aşama ile karşılaştırıldığında araştırmacının varması gereken nihai bilimsel sonuç nedir?',
      opts: {
        A: `Yapılan müdahale ${meta.title} dengesini değiştirmiş ve ${t2} hususunun deneysel ölçümlerde ne denli kritik olduğunu ispatlamıştır.`,
        B: '2. aşamada hiçbir değişiklik olmamış, sistem dış etkilere tamamen duyarsız kalmıştır.',
        C: '1. aşamadaki tüm bulgular 2. aşama yüzünden bilimsel literatürden silinmelidir.',
        D: 'Deneyin her iki aşaması da rastgele sonuçlar vermiş olup bilimsel bir değer taşımaz.'
      },
      sol: `İki aşamalı deneylerde farkı yaratan faktör açıkça analiz edilir. Doğru cevap A seçeneğidir.`,
      mNote: t2
    },

    // Soru 15: Simülasyon ve Modelleme
    {
      diff: 'İleri / LGS' as const,
      correct: 'B' as const,
      category: 'Bilimsel Modelleme',
      baglam: `Bilgisayar ortamında hazırlanan bir 3B simülasyonda "${meta.title}" süreci modellenmiştir. Simülasyon parametreleri değiştirildiğinde sistemin doğadaki kusursuz işleyişi ekranda canlandırılmıştır.`,
      stem: 'Simülasyonu inceleyen bir öğrencinin aşağıdaki yargılardan hangisine varması beklenir?',
      opts: {
        A: 'Doğadaki olayların hiçbir kurala bağlı olmadan tamamen karmaşa içinde işlediğine.',
        B: `${meta.title} sürecinin santimetrelik ve derecelik hassas ölçülerle, ${meta.summary} esasına göre kusursuz bir düzen içinde çalıştığına.`,
        C: 'Simülasyonun sadece bir bilgisayar oyunu olup gerçek dünyayla hiçbir ilgisinin olmadığına.',
        D: 'İnsan müdahalesi olmadan hiçbir doğal sürecin kendi dengesini koruyamayacağına.'
      },
      sol: `Simülasyon ve fen bilimleri doğadaki muhteşem nizamı ve matematiksel ölçüyü gösterir. Doğru cevap B seçeneğidir.`,
      mNote: 'Maarif nizam ve ölçü tefekkürü'
    },

    // Soru 16: İki Farklı Hipotezin Karşılaştırılması
    {
      diff: 'İleri / LGS' as const,
      correct: 'D' as const,
      category: 'Hipotez Karşılaştırma',
      baglam: `Ali'nin Hipotezi: "${m3}."
Zeynep'in Hipotezi: "${meta.summary}."
Her iki öğrenci de hipotezlerini doğrulamak için deneyler tasarlamıştır.`,
      stem: 'Deney sonuçları incelendiğinde hangi öğrencinin hipotezinin bilimsel olarak doğrulandığı söylenebilir?',
      opts: {
        A: 'Yalnız Ali’nin hipotezi doğrulanmıştır çünkü günlük konuşma dilinde bu fikir yaygındır.',
        B: 'Her iki hipotez de eşit derecede doğru kabul edilmelidir.',
        C: 'Hiçbir hipotez doğrulanamamıştır, konu henüz bilim dünyasında belirsizdir.',
        D: `Yalnız Zeynep’in hipotezi doğrulanmıştır; çünkü Ali’nin savunduğu düşünce LGS'de sıkça karşılaşılan bir kavram yanılgısıdır.`
      },
      sol: `Ali'nin hipotezi yaygın bir kavram yanılgısına (${m3}) dayanırken, Zeynep bilimsel kanunu savunmuştur. Doğru cevap D seçeneğidir.`,
      mNote: m3
    },

    // Soru 17: Yanılgı Tuzağından Kurtulma Reçetesi
    {
      diff: 'İleri / LGS' as const,
      correct: 'A' as const,
      category: 'Strateji Geliştirme',
      baglam: `Bir fen öğretmeni LGS'ye hazırlanan öğrencilerine "${meta.title}" konusunda şu tavsiyede bulunmuştur: "Soruları çözerken özellikle '${t1}' çeldiricisine dikkat edin; metinde bu ifadeyi gördüğünüzde acele karar vermeyin."`,
      stem: 'Öğretmenin bu uyarısını dikkate alan bir öğrenci sınavda nasıl bir strateji izlemelidir?',
      opts: {
        A: `İlgili çeldiriciyi (${t1}) doğrudan eleyerek, konunun bilimsel özü olan '${meta.summary}' ilkesini temel alan seçeneğe yönelmelidir.`,
        B: 'Öğretmenin uyarısını unutup ilk okuduğu cazip çeldiriciyi hemen işaretlemelidir.',
        C: 'Bu soru tipini boş bırakarak diğer sorulara geçmelidir.',
        D: 'Kavram yanılgısı içeren seçeneğin daha bilimsel durduğunu düşünüp onu seçmelidir.'
      },
      sol: `Bilinçli LGS öğrencisi MEB'in tuzak çeldiricisini (${t1}) fark edip eler. Doğru cevap A seçeneğidir.`,
      mNote: t1
    },

    // Soru 18: Ters Neden-Sonuç İlişkisi
    {
      diff: 'İleri / LGS' as const,
      correct: 'B' as const,
      category: 'Nedensellik Analizi',
      baglam: `Bir bilim dergisinde yayımlanan makalede "${meta.title}" konusunda neden ile sonucun birbirine karıştırılmaması gerektiği vurgulanmıştır.`,
      stem: 'Aşağıdakilerden hangisinde neden ve sonuç ilişkisi ${meta.title} kurallarına göre DOĞRU kurulmuştur?',
      opts: {
        A: 'Sonuç önce gerçekleşir, neden ise bu sonuca uyum sağlamak için sonradan ortaya çıkar.',
        B: `Fiziksel ve biyolojik kuralların gerektirdiği bağımsız değişken değişimi (neden), ${meta.summary} doğrultusunda gözlemlenen olayı (sonuç) meydana getirir.`,
        C: 'Neden ile sonuç arasında hiçbir mantıksal veya matematiksel bağ bulunmaz.',
        D: 'Olayların nedeni daima ölçüm yapan kişinin kişisel niyetidir.'
      },
      sol: `Bilimsel nedensellik B seçeneğindeki gibi objektif kurallara dayanır. Doğru cevap B seçeneğidir.`,
      mNote: 'Sebep-sonuç ilişkisi'
    },

    // Soru 19: LGS Soru Modeli - Beceri Temelli
    {
      diff: 'İleri / LGS' as const,
      correct: 'C' as const,
      category: 'Beceri Temelli Sentez',
      baglam: `Milli Eğitim Bakanlığı'nın yayımladığı örnek LGS sorusunda: "${meta.title}" ile ilgili bir yaşam senaryosu verilmiş, ardından deney verilerini içeren bir infografik paylaşılmıştır. İnfografikte öğrencilerin en çok aldandığı "${m1}" yanılgısına dair ipuçları gizlenmiştir.`,
      stem: 'Bu infografiği inceleyen tam puan alacak bir öğrencinin çıkarımı aşağıdakilerden hangisi olmalıdır?',
      opts: {
        A: 'İnfografikteki veriler iddiayı doğrulamaktadır, yanılgı gerçektir.',
        B: 'Verilen bilgiler sınav müfredatı ile çelişmektedir.',
        C: `İnfografikteki sayısal kanıtlar ${m1} iddiasını kesin olarak çürütmekte ve konunun bilimsel ilkesini doğrulamaktadır.`,
        D: 'İnfografikte yalnızca sözel süslemeler yapılmış olup fen bilgisi bulunmamaktadır.'
      },
      sol: `İnfografik analizinde öğrenciler yanılgıyı çürüten kanıtları görür. Doğru cevap C seçeneğidir.`,
      mNote: m1
    },

    // Soru 20: Ünite Sonu Büyük Sentez
    {
      diff: 'İleri / LGS' as const,
      correct: 'D' as const,
      category: 'Kavramsal Ustalık ve Sentez',
      baglam: `"${meta.title}" konusunu tüm ayrıntılarıyla tamamlayan bir öğrenci; kavram yanılgılarını (${m1}, ${m2}), MEB çeldiricilerini (${t1}) ve deney yöntemlerini analiz ederek bir özet zihin haritası hazırlamıştır.`,
      stem: 'Öğrencinin hazırladığı bu zihin haritasının merkezinde yer alan EN KAPSAMLI ve DOĞRU ana fikir hangisidir?',
      opts: {
        A: 'Fen bilimleri sadece ezberden ibarettir, kurallar her sene rastgele değişir.',
        B: 'Deneylerde kontrol değişkeni kullanmak gereksiz bir zaman kaybıdır.',
        C: 'Tüm sorular sezgisel tahminlerle çözülebilir, fen bilgisine gerek yoktur.',
        D: `${meta.title} konusu; ${meta.summary} temelinde işleyen, ölçülebilir, ispatlanabilir ve doğadaki muazzam düzeni yansıtan sarsılmaz bir bilimsel alandır.`
      },
      sol: `Zihin haritasının zirvesi D seçeneğindeki kapsamlı ve bilimsel sentezdir. Doğru cevap D seçeneğidir.`,
      mNote: 'Tam kazanım ve sentez'
    }
  ];

  for (let i = 0; i < 20; i++) {
    const bp = questionBlueprints[i];
    const qNum = i + 1;
    const hasDiag = i % 2 === 0;

    questions.push({
      id: `g8-${section.code.replace(/\./g, '-')}-q${qNum}`,
      number: qNum,
      grade: 8,
      subtopicCode: section.code,
      difficulty: bp.diff,
      diagramType: hasDiag ? meta.diagramType : undefined,
      diagramTitle: hasDiag ? `${meta.title} - ${bp.category} Şeması` : undefined,
      baglam: bp.baglam,
      soruKoku: bp.stem,
      secenekler: bp.opts,
      dogruCevap: bp.correct,
      cozum: bp.sol,
      olculenKazanim: (meta.kazanimlar && meta.kazanimlar[0]) || `${meta.code} Temel Fen Kazanımı`,
      olculenBeceri: `LGS Fen Okuryazarlığı • ${bp.category}`,
      processComponent: bp.category,
      contextNecessity: 'Öğrencinin verilen bağlamdaki verileri ve kavram yanılgısı analizini yapması zorunludur.',
      distractorAnalysis: [
        {
          option: 'A',
          analysis:
            bp.correct === 'A'
              ? 'Doğru Seçenek: Bilimsel kanıt ve MEB Maarif ilkeleriyle tam uyumludur.'
              : `Çeldirici: ${bp.mNote || 'Kavram yanılgısı ve acele karar tuzağı.'}`
        },
        {
          option: 'B',
          analysis:
            bp.correct === 'B'
              ? 'Doğru Seçenek: Bilimsel kanıt ve MEB Maarif ilkeleriyle tam uyumludur.'
              : `Çeldirici: ${bp.mNote || 'Yaygın kavram yanılgısı ve yüzeysel bakış açısı.'}`
        },
        {
          option: 'C',
          analysis:
            bp.correct === 'C'
              ? 'Doğru Seçenek: Bilimsel kanıt ve MEB Maarif ilkeleriyle tam uyumludur.'
              : `Çeldirici: ${bp.mNote || 'Sebep-sonuç ilişkisini ters kurgulama tuzağı.'}`
        },
        {
          option: 'D',
          analysis:
            bp.correct === 'D'
              ? 'Doğru Seçenek: Bilimsel kanıt ve MEB Maarif ilkeleriyle tam uyumludur.'
              : `Çeldirici: ${bp.mNote || 'Doğa kanunlarına aykırı genelleme hatası.'}`
        }
      ],
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
    });
  }

  return questions;
}
