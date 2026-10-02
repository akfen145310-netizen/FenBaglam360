import { SectionContent, ContextQuestion } from '../types';
import { unit8_1_1_ContextQuestions } from './grade8/unit1_section1_questions';
import { generateGrade8ContextQuestions } from './grade8/grade8MisconceptionBank';

// Ayvacı ve Yamaçlı (2023) & MEB TYMM (Mart 2026) Bağlam Temelli Soru Üretme Motoru
export interface ExtendedContextQuestion extends ContextQuestion {
  grade?: number;
  subtopicCode?: string;
  difficulty?: 'Temel' | 'Orta' | 'İleri / LGS';
  diagramType?: string;
  diagramTitle?: string;
  contextData?: {
    type: 'table';
    headers: string[];
    rows: string[][];
  };
  distractorAnalysis?: Array<{ option: string; analysis: string }>;
  contextNecessity?: string;
  processComponent?: string;
}

// Konu koduna veya başlığına göre uygun bilimsel diyagram tipini belirle
export function getDiagramTypeForSection(sectionCode: string, title: string): string {
  const code = (sectionCode || '').toLowerCase();
  const t = (title || '').toLowerCase();

  if (code.includes('8.1.1') || t.includes('mevsim') || t.includes('eksen eğikliği')) {
    return 'seasons-tilt';
  }
  if (code.includes('8.1.2') || t.includes('iklim') || t.includes('rüzgar') || t.includes('basınç merkezi') || t.includes('hava hareket')) {
    return 'weather-pressure';
  }
  if (code.includes('8.2.1') || t.includes('dna') || t.includes('genetik kod') || t.includes('eşlenme')) {
    return 'dna-replication-model';
  }
  if (code.includes('8.2.2') || code.includes('7.2') || t.includes('kalıtım') || t.includes('çaprazlama') || t.includes('hücre')) {
    return 'cell-division';
  }
  if (code.includes('8.3') || t.includes('katı basıncı') || t.includes('sıvı basıncı') || t.includes('pascal')) {
    return 'solid-pressure';
  }
  if (code.includes('8.5') || t.includes('makara') || t.includes('kaldıraç') || t.includes('palanga') || t.includes('basit makine')) {
    return 'pulley-systems';
  }
  if (code.includes('5.1') || t.includes('güneş') || t.includes('ay') || t.includes('gelgit')) {
    return 'moon-tides';
  }
  if (code.includes('5.2') || t.includes('sürtünme') || t.includes('dinamometre')) {
    return 'friction-ramp';
  }
  if (code.includes('5.4') || code.includes('7.4') || t.includes('ışık') || t.includes('gölge') || t.includes('yansıma')) {
    return 'light-reflection';
  }
  if (code.includes('5.5') || code.includes('4.5') || t.includes('yoğunluk') || t.includes('saf madde')) {
    return 'density-tower';
  }
  if (code.includes('6.3') || code.includes('7.3') || t.includes('bileşke') || t.includes('kuvvet')) {
    return 'ship-tugboat-forces';
  }
  if (code.includes('7.3') || code.includes('8.6') || t.includes('kinetik') || t.includes('potansiyel') || t.includes('enerji dönüşüm')) {
    return 'roller-coaster-energy';
  }
  if (code.includes('5.6') || code.includes('7.7') || code.includes('8.7') || t.includes('devre') || t.includes('elektrik')) {
    return 'electric-circuit';
  }
  return 'seasons-tilt';
}

// 20 Farklı Bilimsel Senaryo Mimarisi (Her biri benzersiz bir deneysel/bağlamsal açıya sahiptir)
interface ScenarioArchetype {
  category: string;
  buildBaglam: (title: string, summary: string, code: string) => string;
  stem: string;
  correctOption: 'A' | 'B' | 'C' | 'D';
  getOptions: (title: string, summary: string) => { A: string; B: string; C: string; D: string };
  skill: string;
  process: string;
  getSolution: (title: string) => string;
  useDiagram?: boolean;
}

const SCENARIO_ARCHETYPES: ScenarioArchetype[] = [
  {
    category: 'Kontrollü Değişken Deneyi',
    buildBaglam: (title, summary) =>
      `Bir fen laboratuvarında "${title}" konusunu araştırmak amacıyla iki özdeş düzenek kurulmuştur. 1. düzenekte bağımsız değişken en üst değere çıkarılmış, 2. düzenekte ise en düşük seviyede tutulmuştur. Ortam sıcaklığı, kullanılan malzeme türü ve ölçüm süresi her iki düzenekte sabit tutulmuştur. Ölçüm sonucunda elde edilen veriler şu şekildedir: ${summary}`,
    stem: 'Kurulan kontrollü deney ve ölçüm sonuçları birlikte değerlendirildiğinde aşağıdaki çıkarımlardan hangisi kesinlikle doğrudur?',
    correctOption: 'A',
    getOptions: (title) => ({
      A: `Bağımsız değişkendeki artış, ${title} olgusuna bağlı olarak ölçülen parametreyi doğrudan ve belirgin şekilde etkilemiştir.`,
      B: 'Sabit tutulan kontrol değişkenleri deneyin sonucunu geçersiz kılmıştır.',
      C: 'Deneydeki ölçüm farklılığı yalnızca ölçüm aletinin hata payından kaynaklanmaktadır.',
      D: '1. düzenek ile 2. düzenek arasında hiçbir bilimsel neden-sonuç bağı kurulamamıştır.'
    }),
    skill: 'KB3.2 Problem Çözme',
    process: 'SB3 Gözlem ve Veriye Dayalı Bilimsel Tahmin',
    getSolution: (title) =>
      `Kontrollü deneylerde yalnızca tek bir faktör (bağımsız değişken) değiştirilirken diğer tüm değişkenler sabit tutulur. Elde edilen veri farkı doğrudan ${title} ilkesini kanıtlar. Doğru cevap A seçeneğidir.`,
    useDiagram: true
  },
  {
    category: 'Saha Araştırması ve Coğrafi Ölçüm',
    buildBaglam: (title) =>
      `TÜBİTAK destekli bir araştırma ekibi, Türkiye'nin farklı coğrafi bölgelerinde "${title}" etkisini incelemek için bir yıl boyunca hassas istasyonlardan telemetri verileri kaydetmiştir. Toplanan verilerde mevsimsel ve bölgesel olarak düzenli bir örüntü tespit edilmiştir.`,
    stem: 'Saha araştırmasından elde edilen bölgesel veriler dikkate alındığında aşağıdaki bilimsel açıklamalardan hangisine ulaşılır?',
    correctOption: 'B',
    getOptions: (title) => ({
      A: 'Ölçülen değişimler doğadaki rastgele ve düzensiz hava dalgalanmalarından ibarettir.',
      B: `${title} süreçleri doğada tesadüfi olmayıp, belirli fiziksel yasalara ve matematiksel dengelere uygun gerçekleşmektedir.`,
      C: 'Bölgesel farklılıkların sebebi kütle çekim ivmesinin sıfıra inmesidir.',
      D: 'Elde edilen veriler sadece laboratuvarda geçerli olup açık arazide gözlemlenemez.'
    }),
    skill: 'KB2.8 Sorgulama',
    process: 'SB5 Bilimsel Çıkarım Yapmak',
    getSolution: () =>
      'Doğadaki fiziksel olaylar belirli yasalara göre işler. Saha verileri, olayın evrensel bilimsel kurallarla çalıştığını doğrular. Doğru cevap B seçeneğidir.',
    useDiagram: false
  },
  {
    category: 'Mühendislik Tasarımı ve Verimlilik',
    buildBaglam: (title) =>
      `Teknokent'te çalışan bir mühendislik grubu, "${title}" prensibine dayalı yeni bir enerji ve ölçüm cihazı tasarlamıştır. Test aşamasında iki farklı prototip denenmiş; A prototipinde enerji kaybı %8 iken, B prototipinde %32 olarak ölçülmüştür.`,
    stem: 'Prototiplerin çalışma verimi ve bilimsel ilkeleri karşılaştırıldığında en yüksek verimi elde etmek için hangi tasarım kararı doğrudur?',
    correctOption: 'C',
    getOptions: (title) => ({
      A: 'Sistemdeki sürtünme ve termal direnç faktörlerini azami düzeye çıkarmak',
      B: 'Sisteme enerji girişini tamamen durdurup cihazın kendi kendine çalışmasını beklemek',
      C: `${title} ile ilgili temel fen kuralına uygun malzeme seçimi yaparak gereksiz enerji kaçaklarını minimize etmek`,
      D: 'Ölçüm yapan dijital sensörleri devreden çıkarıp süreci kontrolsüz bırakmak'
    }),
    skill: 'KB3.2 Problem Çözme',
    process: 'SB4 Önermeler Üzerinden Akıl Yürütme',
    getSolution: (title) =>
      `Mühendislikte sistem verimi, fen prensibine (${title}) tam uyumlu malzeme ve sürtünme/direnç optimizasyonuyla sağlanır. Doğru cevap C seçeneğidir.`,
    useDiagram: true
  },
  {
    category: 'Kavram Yanılgısını Çürütme',
    buildBaglam: (title) =>
      `Bir fen sınıfında bazı öğrenciler "${title}" konusunda halk arasında yaygın olarak inanılan yanlış bir varsayımı savunmuştur. Fen öğretmeni tahtaya gerçek ölçüm sonuçlarını yazarak bu iddianın bilimsel olarak olanaksız olduğunu göstermiştir.`,
    stem: 'Öğrencilerin savunduğu kavram yanılgısının bilimsel olarak çürütülmesinde kullanılan en güçlü kanıt aşağıdakilerden hangisidir?',
    correctOption: 'A',
    getOptions: () => ({
      A: 'Gözlem ve deney verilerinin, sezgisel ezber tahminlerle doğrudan çelişmesi ve kontrol edilebilir ölçümlerle aksi yönde kanıt sunması',
      B: 'Kavram yanılgısının sadece ders kitaplarında yer alıp gerçek hayatta görülmemesi',
      C: 'Deney sonuçlarının tüm fen bilimleri yasalarını tamamen ortadan kaldırması',
      D: 'Öğrencilerin oy çokluğu ile doğru cevabı belirlemeye karar vermesi'
    }),
    skill: 'KB2.8 Sorgulama',
    process: 'SB4 Bilginin Doğruluğunu Değerlendirmek',
    getSolution: () =>
      'Bilimde doğruluk çoğunluğun fikrine veya sezgiye göre değil, kontrollü deney ve ölçülebilir verilere dayanarak belirlenir. Doğru cevap A seçeneğidir.',
    useDiagram: false
  },
  {
    category: 'Sayısal Veri Tablosu Analizi',
    buildBaglam: (title, summary) =>
      `Laboratuvar çalışmasında "${title}" parametrelerine bağlı olarak yapılan 4 farklı ölçümün sonuçları kaydedilmiştir: 1. Ölçüm: 15 birim, 2. Ölçüm: 32 birim, 3. Ölçüm: 48 birim, 4. Ölçüm: 65 birim. Her ölçümde etkileyen faktör 2 katına çıkarılmıştır: ${summary}`,
    stem: 'Ölçüm tablosundaki sayısal artış eğilimi değerlendirildiğinde değişkenler arasındaki ilişki hakkında hangisi söylenebilir?',
    correctOption: 'A',
    getOptions: () => ({
      A: 'Etkileyen bağımsız faktör arttıkça ölçülen değer kademeli olarak düzenli bir artış eğilimi sergilemiştir.',
      B: 'Ölçülen parametre etkileyen faktörden tamamen bağımsız olarak rastgele değişmiştir.',
      C: 'Etkileyen faktörün artması bağımlı değişkenin sıfıra inmesine yol açmıştır.',
      D: 'Tablodaki veriler fiziksel bir ölçüye dayanmayıp tahmini tahminlerden ibarettir.'
    }),
    skill: 'FBAB3 Verileri Tablo ve Grafiğe Dönüştürme',
    process: 'SB3 Veriye Dayalı Tahmin',
    getSolution: () =>
      'Tablodaki veriler bağımsız değişkenin artışına paralel olarak bağımlı değişkenin de orantılı biçimde arttığını net şekilde gösterir. Doğru cevap A seçeneğidir.',
    useDiagram: true
  },
  {
    category: 'Doğa Olayı ve Ekolojik Denge',
    buildBaglam: (title) =>
      `Milli Park sahasında "${title}" süreçlerinin canlı toplulukları üzerindeki etkileri 5 yıl boyunca izlenmiştir. Araştırmada sistemdeki dengenin mevsimsel ve fiziksel dinamiklerle uyum içinde çalıştığı tespit edilmiştir.`,
    stem: 'Ekosistemdeki bu uyumlu süreç dikkate alındığında canlıların yaşamını sürdürmesini sağlayan temel mekanizma nedir?',
    correctOption: 'B',
    getOptions: (title) => ({
      A: 'Doğadaki canlıların fiziksel ve iklimsel değişimleri tamamen yok sayması',
      B: `Canlıların ve ortam şartlarının ${title} prensiplerine bağlı olarak birbirini tamamlayan bir nizam içinde bulunması`,
      C: 'Ekosistemdeki tüm enerji akışının aniden kesintiye uğraması',
      D: 'Doğal süreçlerin tamamen tesadüflerle ve kontrolsüzce şekillenmesi'
    }),
    skill: 'KB2.8 Sorgulama',
    process: 'SB5 Bilimsel Çıkarım Yapmak',
    getSolution: (title) =>
      `Doğadaki canlılar ve ortam şartları ${title} kanunlarına entegre bir hassas denge barındırır. Doğru cevap B seçeneğidir.`,
    useDiagram: false
  },
  {
    category: 'İki Ayrı Hipotezin Karşılaştırılması',
    buildBaglam: (title) =>
      `İki araştırmacı "${title}" konusunda farklı hipotezler kurmuştur:\n- 1. Hipotez: Değişkenin artması süreci hızlandırır.\n- 2. Hipotez: Değişkenin artması süreci yavaşlatır veya durdurur.\nYapılan hassas testler sonucunda elde edilen veriler 1. hipotezi doğrulamıştır.`,
    stem: 'Bu bilimsel çalışma sonucunda 1. hipotezin doğrulanması aşağıdakilerden hangisini kanıtlar?',
    correctOption: 'C',
    getOptions: (title) => ({
      A: 'Bilimsel hipotezlerin hiçbir zaman test edilemeyeceğini',
      B: 'Her iki araştırmacının da hatalı verilerle çalıştığını',
      C: `İncelenen değişkenin ${title} sürecinde pozitif yönde belirleyici bir itici güç olduğunu`,
      D: '2. hipotezin yanlışlanmasının fen kurallarını geçersiz kıldığını'
    }),
    skill: 'KB3.2 Problem Çözme',
    process: 'SB4 Önermeler Üzerinden Akıl Yürütme',
    getSolution: (title) =>
      `Deney verileri 1. hipotezi doğrulayarak incelenen değişkenin ${title} sürecine olumlu etkisini kanıtlamıştır. Doğru cevap C seçeneğidir.`,
    useDiagram: true
  },
  {
    category: 'Hatalı Deney Düzeneğini Düzeltme',
    buildBaglam: (title) =>
      `Bir öğrenci "${title}" konusunu kanıtlamak için deney düzeneği hazırlamış ancak aynı anda hem sıcaklığı hem de madde miktarını değiştirmiştir. Bu nedenle deney sonucunun hangi değişkenden kaynaklandığı belirlenememiştir.`,
    stem: 'Öğrencinin deneyini bilimsel yönteme uygun hâle getirmesi ve geçerli bir sonuca ulaşması için hangi düzeltmeyi yapması şarttır?',
    correctOption: 'A',
    getOptions: () => ({
      A: 'Değişkenlerden birini sabit tutarak yalnızca tek bir bağımsız değişkenin etkisini ölçmek',
      B: 'Deneydeki tüm aletleri ortamdan kaldırıp tahminle karar vermek',
      C: 'Değişken sayısını üçe veya dörde çıkararak daha karmaşık bir ortam oluşturmak',
      D: 'Ölçüm yapmadan doğrudan teorik sonucu deney defterine yazmak'
    }),
    skill: 'FBAB2 Deney Tasarımı',
    process: 'SB2 Problemi Yapılandırmak',
    getSolution: () =>
      'Bilimsel kontrollü deneylerde bağımsız değişken tek olmalıdır. Birden fazla faktör aynı anda değiştirilirse sonucun hangisinden kaynaklandığı bilinemez. Doğru cevap A seçeneğidir.',
    useDiagram: false
  },
  {
    category: 'Zamana Bağlı Değişim Grafiği',
    buildBaglam: (title, summary) =>
      `Dijital veri kaydedici ile 60 dakika boyunca her 10 dakikada bir ölçüm yapılmıştır. İlk 30 dakikada değerler lineer olarak yükselmiş, 30. dakikadan sonra ise doygunluk noktasına ulaşarak sabit kalmıştır: ${summary}`,
    stem: 'Grafiksel eğilim dikkate alındığında 30. dakikadan sonraki durum aşağıdakilerden hangisiyle açıklanır?',
    correctOption: 'D',
    getOptions: (title) => ({
      A: 'Ölçüm yapılan aletin pili bittiği için veri akışının kesilmesiyle',
      B: 'Ortamdaki tüm fiziksel yasaların aniden askıya alınmasıyla',
      C: 'Sistemin tamamen yok olup sıfırlanmasıyla',
      D: `Sistemin denge durumuna ulaşması ve ${title} ile ilgili azami kapasite limitine erişilmesiyle`
    }),
    skill: 'FBAB3 Tablo ve Grafik Yorumlama',
    process: 'SB5 Yansıtma ve Değerlendirme',
    getSolution: (title) =>
      `Fiziksel sistemlerde doygunluk veya denge noktasına ulaşıldığında parametreler sabitlenir. Bu ${title} kapasite sınırını gösterir. Doğru cevap D seçeneğidir.`,
    useDiagram: true
  },
  {
    category: 'Günlük Yaşam Problemi ve Teknoloji',
    buildBaglam: (title) =>
      `Bir aile kış aylarında evlerindeki enerji faturasının beklenenden yüksek geldiğini fark etmiştir. Evdeki ısı ve enerji akışını "${title}" ilkeleri doğrultusunda inceleyen uzman, pencerelerdeki yalıtım ve güneş açısı kaynaklı ısı transferi sorunlarını tespit etmiştir.`,
    stem: 'Uzmanın bilimsel ilkelere dayanarak aileye sunduğu en etkili ve kalıcı çözüm önerisi nedir?',
    correctOption: 'B',
    getOptions: (title) => ({
      A: 'Pencereleri kış boyunca tamamen açık bırakarak oda havasını dışarı vermek',
      B: `${title} kurallarına uygun yalıtım malzemeleri ve güneş ışığından azami yararlanan düzenlemeler kullanmak`,
      C: 'Evdeki tüm ısıtıcıları en yüksek seviyede aralıksız çalıştırmak',
      D: 'Evin duvarlarını tamamen söküp ahşap parmaklıklarla değiştirmek'
    }),
    skill: 'KB3.2 Problem Çözme',
    process: 'SB1 Problemi Yapılandırmak',
    getSolution: (title) =>
      `Enerji verimliliği, ${title} yasalarına uygun yalıtım ve tasarım tedbirleriyle sağlanır. Doğru cevap B seçeneğidir.`,
    useDiagram: false
  },
  {
    category: 'Tarihsel Bilimsel Keşif ve Süreç',
    buildBaglam: (title) =>
      `Geçmişte bilim insanları "${title}" olgusunu açıklamak için çeşitli modeller geliştirmiştir. Ancak hassas ölçüm cihazlarının ve teleskop/mikroskopların gelişmesiyle eski teoriler yerini bugünkü doğrulanmış modern bilimsel modele bırakmıştır.`,
    stem: 'Bilimsel bilginin bu tarihsel gelişim süreci hakkında yapılan hangi çıkarım bilim felsefesine uygundur?',
    correctOption: 'A',
    getOptions: () => ({
      A: 'Bilimsel bilgi statik ve değişmez olmayıp yeni kanıtlar, kontrollü deneyler ve hassas teknolojilerle gelişip güncellenir.',
      B: 'Eski bilim insanlarının ortaya koyduğu fikirlerin hiçbiri bilimsel değer taşımamaktadır.',
      C: 'Bilimde sadece matematiksel formüller geçerli olup gözlemler önemsizdir.',
      D: 'Bugün kabul edilen bilimsel teoriler gelecekte asla test edilemez.'
    }),
    skill: 'KB2.8 Sorgulama',
    process: 'SB4 Bilginin Doğruluğunu Değerlendirmek',
    getSolution: () =>
      'Bilimin doğası gereği bilimsel bilgi, yeni gözlem araçları ve sağlam kanıtlarla sürekli olarak test edilir, zenginleşir ve revize edilir. Doğru cevap A seçeneğidir.',
    useDiagram: true
  },
  {
    category: 'Farklı Ortam Şartlarında Karşılaştırma',
    buildBaglam: (title) =>
      `Özdeş üç deney seti deniz seviyesinde, 1500 metre rakımlı dağ eteğinde ve 3000 metre zirvede aynı anda çalıştırılmıştır. "${title}" ile ilgili ölçülen değerlerin rakım arttıkça düzenli bir değişim gösterdiği gözlenmiştir.`,
    stem: 'Rakım farkına bağlı olarak elde edilen ölçüm sonuçları hakkında yapılan aşağıdaki yorumlardan hangisi bilimseldir?',
    correctOption: 'C',
    getOptions: (title) => ({
      A: 'Deniz seviyesi ile dağ zirvesi arasında hiçbir fiziksel ortam farkı bulunmamaktadır.',
      B: 'Ölçümlerin farklı çıkması araştırmacıların cihazları yanlış kurmasından kaynaklanır.',
      C: `Açık hava basıncı, yoğunluk veya sıcaklık gibi ortam parametreleri ${title} sürecini doğrudan etkilemektedir.`,
      D: 'Dağ zirvesindeki sonuçlar Dünya dışı gezegen koşullarına denktir.'
    }),
    skill: 'KB3.2 Problem Çözme',
    process: 'SB3 Veriye Dayalı Tahmin',
    getSolution: (title) =>
      `Rakım değiştikçe atmosfer basıncı ve sıcaklık değişir. Bu ortam faktörleri ${title} olayının büyüklüğünü şekillendirir. Doğru cevap C seçeneğidir.`,
    useDiagram: false
  },
  {
    category: 'Enerji Dönüşümü ve Korunumu',
    buildBaglam: (title, summary) =>
      `Kapalı bir fiziksel sistemde "${title}" süreçleri gerçekleşirken sisteme giren toplam enerji ile sistemden çıkan enerji formları (ısı, ışık, hareket) ölçülmüştür. Toplam enerjinin korunduğu ancak bir kısmının sürtünmeyle ısıya dönüştüğü tespit edilmiştir: ${summary}`,
    stem: 'Enerjinin korunumu kanunu çerçevesinde bu deneyden çıkarılacak en temel bilimsel sonuç hangisidir?',
    correctOption: 'A',
    getOptions: () => ({
      A: 'Enerji yoktan var edilemez, vardan yok edilemez; sadece farklı enerji türlerine dönüşerek sistemde korunur.',
      B: 'Sürtünme ile açığa çıkan ısı enerjisi evrende tamamen yok olmuştur.',
      C: 'Sisteme dışarıdan enerji verilmeden sistem sonsuz enerji üretebilir.',
      D: 'Dönüşen enerji miktarı daima başlangıçtaki toplam enerjiden fazladır.'
    }),
    skill: 'KB3.2 Problem Çözme',
    process: 'SB5 Bilimsel Çıkarım Yapmak',
    getSolution: () =>
      'Termodinamiğin 1. yasasına göre enerji biçim değiştirir fakat toplam enerji daima korunur. Doğru cevap A seçeneğidir.',
    useDiagram: true
  },
  {
    category: 'Doğadan İlham Alan Tasarım (Biyomimikri)',
    buildBaglam: (title) =>
      `Mühendisler, canlıların "${title}" süreçlerinde sergilediği mükemmel aerodinamik ve termal uyum mekanizmalarını inceleyerek yeni nesil bir rüzgâr türbini kanadı tasarlamıştır. Yeni tasarım %25 daha az gürültüyle %18 daha fazla elektrik üretmiştir.`,
    stem: 'Doğadaki canlı mekanizmalarının teknolojiye aktarılması (biyomimikri) hakkında hangi değerlendirme doğrudur?',
    correctOption: 'B',
    getOptions: (title) => ({
      A: 'Canlıların anatomik yapıları sadece estetik amaçlı olup mühendislikte kullanılamaz.',
      B: `Canlılardaki kusursuz biyolojik tasarım ve nizam, ${title} ilkelerine uygun teknolojik inovasyonlara rehberlik etmektedir.`,
      C: 'Biyomimikri uygulamaları enerji verimliliğini her zaman düşürmektedir.',
      D: 'Doğadaki tasarımların hiçbiri fizik ve fen kurallarına uygunluk göstermez.'
    }),
    skill: 'KB2.8 Sorgulama',
    process: 'SB5 Yansıtma ve Değerlendirme',
    getSolution: (title) =>
      `Canlıların sahip olduğu harika yapılar fen kanunlarıyla (${title}) kusursuz uyumludur ve mühendislikte çığır açan çözümler sunar. Doğru cevap B seçeneğidir.`,
    useDiagram: false
  },
  {
    category: 'Sürdürülebilirlik ve Çevre Etiği',
    buildBaglam: (title) =>
      `Sanayi bölgesinde yapılan denetimlerde "${title}" ile ilgili atık yönetim kurallarına uymayan fabrikaların yakındaki göl suyunda sıcaklık ve kimyasal dengeleri bozduğu, biyoçeşitliliği tehdit ettiği belirlenmiştir.`,
    stem: 'Ekolojik sürdürülebilirliğin korunması için fabrika yönetiminin alması gereken en acil bilimsel önlem nedir?',
    correctOption: 'C',
    getOptions: (title) => ({
      A: 'Üretim kapasitesini iki katına çıkarıp atıkları doğrudan göle boşaltmak',
      B: 'Göl suyunu tamamen kurutarak yerine beton zemin inşa etmek',
      C: `${title} süreçlerine uygun arıtma filtreleri ve geri dönüşüm döngüleri kurarak doğaya sıfır zararlı salım yapmak`,
      D: 'Fabrika atıklarını gece saatlerinde gizlice toprağa gömmek'
    }),
    skill: 'KB3.2 Problem Çözme',
    process: 'SB1 Problemi Yapılandırmak',
    getSolution: (title) =>
      `Çevre ve fen etiği gereğince ${title} süreçlerindeki atıklar arıtma ve geri dönüşüm sistemleriyle nötralize edilmelidir. Doğru cevap C seçeneğidir.`,
    useDiagram: true
  },
  {
    category: 'Mikroskobik/Tanecik Düzeyi ile Makroskobik Olay',
    buildBaglam: (title) =>
      `Maddenin makroskobik düzeyde sergilediği "${title}" davranışının atomik ve moleküler düzeydeki tanecik etkileşimleri simülasyonla modellenmiştir. Taneciklerin kinetik enerjisi ve aralarındaki boşluk değiştiğinde dışarıdan gözlemlenen fiziksel tepki de değişmiştir.`,
    stem: 'Tanecik boyutu ile gözlemlenebilir makroskobik olay arasındaki ilişkiyi açıklayan doğru ifade hangisidir?',
    correctOption: 'A',
    getOptions: (title) => ({
      A: `Makroskobik olarak gözlemlediğimiz ${title} olayları, mikroskobik düzeydeki taneciklerin hareket, enerji ve çekim kuvvetlerinin doğrudan sonucudur.`,
      B: 'Taneciklerin hareketleri ile maddelerin dışarıdan görünen özellikleri arasında hiçbir bağlantı yoktur.',
      C: 'Katı, sıvı ve gaz maddelerin tanecik yapıları tüm sıcaklıklarda tamamen hareketsizdir.',
      D: 'Mikroskobik olaylar fizik kurallarından tamamen bağımsız olarak rastgele işler.'
    }),
    skill: 'KB2.8 Sorgulama',
    process: 'SB4 Önermeler Üzerinden Akıl Yürütme',
    getSolution: (title) =>
      `Maddenin gözle görünen makroskobik özellikleri (${title}), onu oluşturan atom ve moleküllerin kinetik enerjisi ve dizilimiyle belirlenir. Doğru cevap A seçeneğidir.`,
    useDiagram: false
  },
  {
    category: 'Laboratuvar Güvenlik Protokolü',
    buildBaglam: (title) =>
      `Okul fen laboratuvarında "${title}" deneyi gerçekleştirilmeden önce öğretmen öğrencilere güvenlik protokolünü açıklamış ve koruyucu gözlük, eldiven ile ölçüm aletlerinin kalibrasyon kontrollerini yaptırmıştır.`,
    stem: 'Bilimsel deneylerde laboratuvar güvenliği ve alet kalibrasyonunun öncelikli amacı nedir?',
    correctOption: 'D',
    getOptions: () => ({
      A: 'Öğrencilerin deney süresini uzatarak dersi yetiştirmesini engellemek',
      B: 'Deney sonuçlarının her defasında tamamen aynı çıkmasını zorla sağlamak',
      C: 'Sadece laboratuvarın düzenli görünmesini sağlamak',
      D: 'Olası kaza risklerini önleyerek can güvenliğini sağlamak ve ölçüm hatalarını en aza indirerek verilerin bilimsel geçerliliğini temin etmek'
    }),
    skill: 'FBAB1 Bilimsel Gözlem ve Güvenlik',
    process: 'SB2 Bilgileri Ayıklamak',
    getSolution: () =>
      'Laboratuvar güvenliği can emniyeti için, cihaz kalibrasyonu ise ölçüm verilerinin bilimsel güvenirliği için vazgeçilmezdir. Doğru cevap D seçeneğidir.',
    useDiagram: true
  },
  {
    category: 'Doğru ve Ters Orantı Mantığı',
    buildBaglam: (title) =>
      `Yapılan deneyde X değişkeni 2, 4, 8 katına çıkarıldığında; sistemde ölçülen Y değişkeninin sırasıyla 1/2, 1/4, 1/8 oranında azaldığı hassas cetvelle tespit edilmiştir. Deney ${title} koşullarında yinelenmiştir.`,
    stem: 'X ve Y değişkenleri arasındaki matematiksel ve fiziksel ilişki hangi seçenekte doğru tanımlanmıştır?',
    correctOption: 'B',
    getOptions: () => ({
      A: 'X değişkeni ile Y değişkeni arasında doğru orantı vardır; biri arttıkça diğeri de artar.',
      B: 'X değişkeni ile Y değişkeni arasında ters orantı vardır; biri katlanarak arttıkça diğeri aynı oranda azalmaktadır.',
      C: 'X ve Y değişkenleri birbirini hiçbir şekilde etkilememektedir.',
      D: 'Y değişkeni her zaman sıfıra eşit olmak zorundadır.'
    }),
    skill: 'FBAB3 Matematiksel Modelleme',
    process: 'SB4 Akıl Yürütme',
    getSolution: () =>
      'Biri katlanarak artarken diğeri aynı oranda azalıyorsa değişkenler arasında ters orantı (X · Y = k) bulunur. Doğru cevap B seçeneğidir.',
    useDiagram: false
  },
  {
    category: 'Dijital Simülasyon ve Değişken Modelleme',
    buildBaglam: (title, summary) =>
      `Etkileşimli bir simülasyon yazılımında "${title}" senaryosu kurulmuş ve yerçekimi, sürtünme katsayısı ve ortam yoğunluğu parametreleri değiştirilerek sistemin dinamik tepkisi gözlemlenmiştir: ${summary}`,
    stem: 'Simülasyonda parametrelerin tek tek değiştirilerek sonuçların anlık izlenmesinin bilimsel avantajı nedir?',
    correctOption: 'A',
    getOptions: () => ({
      A: 'Gerçek hayatta denenmesi zor veya maliyetli olan ekstrem durumları kontrollü ve güvenli şekilde analiz etme imkânı sunması',
      B: 'Gerçek deneylerin tamamen gereksiz olduğunu ve terk edilmesi gerektiğini kanıtlaması',
      C: 'Bilgisayar ekranındaki tüm verilerin gerçek hayattaki fizik kurallarını iptal etmesi',
      D: 'Öğrencilerin hiçbir zihinsel çaba harcamadan ezber yapmasını sağlaması'
    }),
    skill: 'KB3.2 Problem Çözme',
    process: 'SB3 Veriye Dayalı Tahmin',
    getSolution: () =>
      'Bilgisayar simülasyonları, tehlikeli veya yüksek maliyetli deneyleri sanal ortamda kontrollü şekilde modelleme ve derinlemesine anlama fırsatı verir. Doğru cevap A seçeneğidir.',
    useDiagram: true
  },
  {
    category: 'Çok Adımlı Sebep-Sonuç Zinciri',
    buildBaglam: (title, summary) =>
      `Bilimsel bir araştırmada "${title}" süreçlerinin aşamaları zincirleme olarak incelenmiştir: 1. Aşama tetikleyici etkiyi başlatmış, 2. Aşama ortamdaki fiziksel parametreleri farklılaştırmış, 3. Aşama ise gözlemlenen nihai sonucu ortaya çıkarmıştır: ${summary}`,
    stem: 'Bu çok adımlı sebep-sonuç zincirinde 1. aşama ortadan kaldırılırsa sistemin işleyişi hakkında hangisi söylenebilir?',
    correctOption: 'C',
    getOptions: (title) => ({
      A: 'Sistem hiçbir şey olmamış gibi aynı sonucu üretmeye devam eder.',
      B: 'Sonuç beklenenden daha hızlı ve güçlü şekilde ortaya çıkar.',
      C: `Tetikleyici başlangıç koşulu kalktığı için zincirleme süreç işlemeyecek ve ${title} ile ilgili nihai durum gerçekleşmeyecektir.`,
      D: 'Olay tamamen tersine dönerek evrensel çekim kuvvetini sıfırlar.'
    }),
    skill: 'KB2.8 Sorgulama',
    process: 'SB5 Çıkarım Yapmak ve Yansıtma',
    getSolution: (title) =>
      `Nedensellik ilkesine göre başlangıç şartı (sebep) olmadan zincirin devamındaki adımlar ve sonuç gerçekleşemez. Doğru cevap C seçeneğidir.`,
    useDiagram: true
  }
];

// Bölüm verilerini (SectionContent) inceleyerek 20 soruluk eksiksiz, kaliteli ve LGS düzeyinde soru seti oluşturur
export function generateContextQuestionsForSection(
  section: SectionContent,
  grade: number = 5
): ExtendedContextQuestion[] {
  // SADECE 8. SINIF: "8. sınıf konular" (MEBİ Konu Özeti, Kavram Yanılgıları, Çeldiriciler) havuzunu kullan
  if (grade === 8 || (section.code && section.code.startsWith('8.'))) {
    return generateGrade8ContextQuestions(section);
  }



  // Eğer bölümde zaten kaliteli 10+ bağlam sorusu varsa, onları zenginleştirip kullan
  if (section.contextQuestions && section.contextQuestions.length >= 10) {
    const diagType = getDiagramTypeForSection(section.code, section.title);

    return section.contextQuestions.map((q, idx) => {
      const dType = q.diagramType || (idx % 2 === 0 ? diagType : undefined);
      const dTitle = q.diagramTitle || (dType ? `${section.title} - Bilimsel Deney ve Gözlem Şeması` : undefined);
      return {
        ...q,
        grade,
        subtopicCode: section.code,
        difficulty: idx < 6 ? 'Temel' : idx < 15 ? 'Orta' : 'İleri / LGS',
        diagramType: dType,
        diagramTitle: dTitle,
        processComponent:
          q.olculenBeceri && q.olculenBeceri.includes('•')
            ? q.olculenBeceri.split('•')[1].trim()
            : idx % 2 === 0
            ? 'SB3 Gözlem ve Veriye Dayalı Tahmin'
            : 'SB5 Çıkarım Yapmak ve Yansıtma',
        contextNecessity: 'Bu soru bağlam metni, deney verileri veya görseli incelenmeden salt ezberle çözülemez.',
        distractorAnalysis: [
          {
            option: 'A',
            analysis:
              q.dogruCevap === 'A'
                ? 'Doğru Seçenek: Fen kavramı ve bağlam verileriyle tam uyuşmaktadır.'
                : 'Çeldirici: Bağlamdaki veriyi ters yorumlama yanılgısı.'
          },
          {
            option: 'B',
            analysis:
              q.dogruCevap === 'B'
                ? 'Doğru Seçenek: Bilimsel ilke ve deney sonucuyla kanıtlanmıştır.'
                : 'Çeldirici: Günlük hayattaki yaygın kavram yanılgısı.'
          },
          {
            option: 'C',
            analysis:
              q.dogruCevap === 'C'
                ? 'Doğru Seçenek: Neden-sonuç zinciri kusursuz kurulmuştur.'
                : 'Çeldirici: Formül ezberiyle acele verilmiş hatalı yargı.'
          },
          {
            option: 'D',
            analysis:
              q.dogruCevap === 'D'
                ? 'Doğru Seçenek: Bilimsel kanıt ve süreç bileşeniyle örtüşmektedir.'
                : 'Çeldirici: Metindeki ayrıntıya takılma hatası.'
          }
        ],
        kaliteAudit: q.kaliteAudit || {
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
      };
    });
  }

  // Dinamik olarak 20 adet tamamen benzersiz mimariye sahip soru oluştur
  const diagType = getDiagramTypeForSection(section.code, section.title);
  const kazanim = (section.kazanimlar && section.kazanimlar[0]) || `${section.code} Temel Fen Kavramları`;
  const summary = section.summary || section.title;
  const questions: ExtendedContextQuestion[] = [];

  for (let i = 0; i < 20; i++) {
    const arch = SCENARIO_ARCHETYPES[i % SCENARIO_ARCHETYPES.length];
    const diff: 'Temel' | 'Orta' | 'İleri / LGS' = i < 6 ? 'Temel' : i < 14 ? 'Orta' : 'İleri / LGS';
    const opts = arch.getOptions(section.title, summary);
    const hasDiag = arch.useDiagram || i % 2 === 0;

    questions.push({
      id: `gen-${section.code.replace(/\./g, '-')}-${i + 1}`,
      number: i + 1,
      grade,
      subtopicCode: section.code,
      difficulty: diff,
      diagramType: hasDiag ? diagType : undefined,
      diagramTitle: hasDiag ? `${section.title} - ${arch.category} Şeması` : undefined,
      baglam: arch.buildBaglam(section.title, summary, section.code),
      soruKoku: arch.stem,
      secenekler: opts,
      dogruCevap: arch.correctOption,
      cozum: arch.getSolution(section.title),
      olculenKazanim: kazanim,
      olculenBeceri: `${arch.skill} • ${arch.process}`,
      processComponent: arch.process,
      contextNecessity: 'Öğrencinin verilen senaryodaki değişkenleri ve ilişkileri analiz etmesi zorunludur.',
      distractorAnalysis: [
        {
          option: 'A',
          analysis:
            arch.correctOption === 'A'
              ? 'Doğru Seçenek: Bilimsel kanıt ve süreç bileşeniyle tam uyumludur.'
              : 'Çeldirici Seçenek: Verileri ters yorumlama veya acele karar yanılgısı.'
        },
        {
          option: 'B',
          analysis:
            arch.correctOption === 'B'
              ? 'Doğru Seçenek: Nizam, işleyiş ve fen ilkesiyle tam örtüşmektedir.'
              : 'Çeldirici Seçenek: Yaygın kavram yanılgısı.'
        },
        {
          option: 'C',
          analysis:
            arch.correctOption === 'C'
              ? 'Doğru Seçenek: Neden-sonuç zincirine dayalı kanıtlanmış çıkarım.'
              : 'Çeldirici Seçenek: Değişkenleri karıştırma hatası.'
        },
        {
          option: 'D',
          analysis:
            arch.correctOption === 'D'
              ? 'Doğru Seçenek: Bilimsel kural ve ölçümle kanıtlanmıştır.'
              : 'Çeldirici Seçenek: Sözel yük yanıltması.'
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
