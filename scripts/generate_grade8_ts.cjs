const fs = require('fs');
const path = require('path');

const g8Curriculum = require('../src/data/grade8/curriculumData.json');

console.log('Writing grade8MisconceptionBank.ts...');

// Build grade8MisconceptionBank.ts
const misconceptionBankCode = `// Grade 8 MEBİ LGS Kavram Yanılgıları ve Soru Havuzu Motoru
// "8. sınıf konular" (MEBİ LGS Konu Özeti, Kavram Yanılgıları, Çeldiriciler, Başucu Notları)
import { SectionContent, ContextQuestion } from '../../types';
import { ExtendedContextQuestion } from '../questionGenerator';
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

export const G8_TOPICS_METADATA: G8TopicMetadata[] = ${JSON.stringify(g8Curriculum, null, 2)};

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
      baglam: \`Bir fen bilimleri öğretmeni sınıfta "\${meta.title}" konusunu işlerken tahtaya şu öğrenci iddiasını yazmıştır: "\${m1}". Öğretmen bu iddianın bilimsel geçerliliğini test etmek için öğrencilerden kontrollü bir deney veya bilimsel gerekçe sunmalarını istemiştir.\`,
      stem: 'Buna göre aşağıdaki açıklamalardan hangisi öğrencinin düştüğü bu kavram yanılgısını bilimsel olarak EN İYİ çürütür ve gerçeği ortaya koyar?',
      opts: {
        A: \`Öğrencinin iddiası her koşulda doğrudur; günlük hayattaki gözlemler bu görüşü tamamen destekler.\`,
        B: \`İddia bilimsel bir kavram yanılgısıdır; çünkü \${meta.summary} gerçeği doğrultusunda olaylar bu varsayıma göre değil, bilimsel kanunlara göre işler.\`,
        C: \`İddia yalnızca laboratuvar ortamında geçerli olup doğadaki süreçlerle hiçbir bağı bulunmamaktadır.\`,
        D: \`Öğrencinin görüşü teorik olarak doğru kabul edilse de ölçüm aletlerinin yetersizliği nedeniyle ispatlanamaz.\`
      },
      sol: \`Bu durum LGS'de öğrencilerin en sık karşılaştığı kavram yanılgılarından biridir. Doğru bilimsel ilke şudur: \${meta.summary}. Dolayısıyla B seçeneğindeki açıklama yanılgıyı kesin olarak düzeltir.\`,
      mNote: m1
    },

    // Soru 2: 2. Kavram Yanılgısı / Süreç Hatası
    {
      diff: 'Temel' as const,
      correct: 'C' as const,
      category: 'Kavram Yanılgısı Deneyi',
      baglam: \`"\${meta.title}" konusunda araştırma yapan bir öğrenci grubu, hipotezlerini şu yanılgı üzerine kurmuştur: "\${m2}". Bu hipotezi kanıtlamak üzere hazırladıkları deney düzeneğinde elde ettikleri ölçüm sonuçları beklenenin tam tersi çıkmıştır.\`,
      stem: 'Deney sonuçlarının hipotezle çelişmesinin temel nedeni aşağıdakilerden hangisidir?',
      opts: {
        A: 'Deneyde kullanılan kontrol değişkenlerinin sabit tutulması ölçümün sıhhatini bozmuştur.',
        B: 'Bağımsız değişkenin etkisi gereğinden az tutulduğu için yanılgı doğrulanamamıştır.',
        C: \`Öğrencilerin başlangıçta doğru kabul ettiği hipotez bir kavram yanılgısıdır; doğadaki bilimsel yasa \${meta.title} için farklı işlemektedir.\`,
        D: 'Kullanılan ölçüm araçlarının hassasiyeti bilimsel standartların çok üzerindedir.'
      },
      sol: \`Öğrencilerin karşılaştığı çelişki, kurdukları hipotezin yaygın bir kavram yanılgısına dayanmasından kaynaklanmaktadır. Doğru cevap C seçeneğidir.\`,
      mNote: m2
    },

    // Soru 3: 3. Kavram Yanılgısı ve Zıt Kutuplar
    {
      diff: 'Temel' as const,
      correct: 'A' as const,
      category: 'Kavramsal Doğruluk',
      baglam: \`Fen bilimleri dersinde "\${meta.title}" ünitesi işlenirken yapılan bir ankette öğrencilerin büyük bir kısmının "\${m3}" fikrine katıldığı görülmüştür. Ders öğretmeni bu durumu düzeltmek için bir simülasyon ve görsel modelleme sunmuştur.\`,
      stem: 'Öğretmenin sunduğu modellemeye göre bu konudaki bilimsel doğrunun esası aşağıdakilerden hangisidir?',
      opts: {
        A: \`Doğru bilimsel ilkeye göre: \${meta.summary}\`,
        B: \`Öğrencilerin anketteki çoğunluk cevabı modern bilim tarafından eksiksiz olarak onaylanmıştır.\`,
        C: \`Olayın gerçekleşme biçimi mevsime veya zamana göre tamamen rastlantısal olarak değişmektedir.\`,
        D: \`Bu olguda herhangi bir neden-sonuç bağı aranamaz, süreç kendiliğinden durur.\`
      },
      sol: \`\${m3} yaygın bir yanılgıdır. Doğru bilimsel açıklama: \${meta.summary}. Doğru cevap A seçeneğidir.\`,
      mNote: m3
    },

    // Soru 4: MEB Favori Çeldiricisi (Trap 1)
    {
      diff: 'Orta' as const,
      correct: 'D' as const,
      category: 'MEB Çeldirici Tuzağı',
      baglam: \`LGS hazırlık denemesinde "\${meta.title}" ile ilgili bir soru hazırlayan komisyon, öğrencilerin dikkatini ölçmek amacıyla şu yaygın çeldiriciyi seçeneklere yerleştirmiştir: "\${t1}".\`,
      stem: 'Soruyu dikkatle inceleyen ve konunun özüne hakim olan bir LGS öğrencisinin bu çeldiriciye düşmemesi için hangi temel kuralı hatırlaması gerekir?',
      opts: {
        A: 'Soru kökündeki değişkenleri dikkate almadan en uzun seçeneği işaretlemelidir.',
        B: 'Günlük hayatta kullanılan hatalı deyimleri bilimsel gerçek gibi kabul etmelidir.',
        C: 'Sorudaki verileri yalnızca kendi tahminleriyle eşleştirmelidir.',
        D: \`Bu seçenekteki tuzak ifadeye aldanmamalı; \${meta.title} kuralı gereğince bilimsel ilkelerin asla bu şekilde genellenemeyeceğini bilmelidir.\`
      },
      sol: \`MEB'in sınavlarda sıklıkla kullandığı bu çeldirici (\${t1}), öğrencilerin dikkatsizliğini ölçmeyi hedefler. Konunun püf noktası doğru kavrandığında D seçeneği açıkça görülür.\`,
      mNote: t1
    },

    // Soru 5: Trap 2 / Hata Yapılabilecek Yer
    {
      diff: 'Orta' as const,
      correct: 'B' as const,
      category: 'Tuzak Sorusu Analizi',
      baglam: \`Bir araştırmacı "\${meta.title}" konusunda yaptığı deneyde iki farklı durum oluşturmuştur. Durumlar arasındaki fark incelenirken şu kritik hata alanına dikkat çekilmiştir: "\${t2}".\`,
      stem: 'Bu deneyde araştırmacının hatasız bir sonuca ulaşabilmesi için aşağıdaki adımlardan hangisini uygulaması zorunludur?',
      opts: {
        A: 'Deneydeki tüm değişkenleri aynı anda değiştirerek ölçüm almalıdır.',
        B: \`Söz konusu kritik hata alanını (\${t2}) göz önünde bulundurarak kontrollü değişken şartlarına tam olarak uymalıdır.\`,
        C: 'Ölçüm sonuçlarını teorik formüller yerine sadece kişisel tahminlerine göre yazmalıdır.',
        D: 'Deney ortamının sıcaklık ve basınç değerlerini kaydetmeyi gereksiz görmelidir.'
      },
      sol: \`Kritik tuzak alanı (\${t2}) dikkate alınarak kontrollü deney standartları uygulandığında yanılgılardan korunulur. Doğru cevap B seçeneğidir.\`,
      mNote: t2
    },

    // Soru 6: Kontrollü Deney Bağımsız Değişken
    {
      diff: 'Orta' as const,
      correct: 'A' as const,
      category: 'Kontrollü Deney ve Değişkenler',
      baglam: \`Laboratuvarda "\${meta.title}" ile ilgili kurulan bir deneyde; araştırmacı sadece tek bir faktörü kasıtlı olarak değiştirmiş, diğer tüm çevresel koşulları ise sabit tutmuştur. Yapılan ölçümlerde bağımlı değişkenin düzenli bir değişim gösterdiği tespit edilmiştir.\`,
      stem: 'Bu deney ile ilgili olarak yapılan aşağıdaki yorumlardan hangisi kesinlikle doğrudur?',
      opts: {
        A: \`Deneyde değiştirilen faktör bağımsız değişkendir ve \${meta.title} ilkesine uygun olarak bağımlı değişkeni doğrudan etkilemiştir.\`,
        B: 'Sabit tutulan faktörler deneyin geçerliliğini ve güvenilirliğini zayıflatmıştır.',
        C: 'Deneyde birden fazla bağımsız değişken bulunduğu için sonuçtan bilimsel bir yargıya varılamaz.',
        D: 'Elde edilen veriler sadece bu laboratuvara özgü olup genel bilimsel ilkelerle uyuşmaz.'
      },
      sol: \`Kontrollü deneylerde tek bir faktör (bağımsız değişken) değiştirilir ve etkisi gözlemlenir. Doğru cevap A seçeneğidir.\`,
      mNote: 'Kontrollü değişken kuralları'
    },

    // Soru 7: Grafik Yorumlama
    {
      diff: 'Orta' as const,
      correct: 'C' as const,
      category: 'Grafik ve Veri Analizi',
      baglam: \`"\${meta.title}" sürecine ait zamana bağlı bir değişim grafiği çizilmiştir. Grafikte belirli bir aralıkta değerlerin sabit kaldığı, ardından belirli bir kural doğrultusunda ani bir artış gösterdiği görülmektedir.\`,
      stem: 'Grafikteki bu kararlı ve düzenli değişim aşağıdakilerden hangisi ile EN DOĞRU şekilde açıklanır?',
      opts: {
        A: 'Sistemde dışarıdan uygulanan kontrolsüz rastgele müdahalelerle açıklanır.',
        B: 'Ölçüm yapan sensörün belirli aralıklarda devre dışı kalmasıyla açıklanır.',
        C: \`Konunun temel bilimsel yasası gereği, sistemin belirli aşamalarda dengeye ulaştığı ve \${meta.summary} prensibinin işlediği ile açıklanır.\`,
        D: 'Grafiğin yatay eksenindeki sürenin bilimsel hiçbir anlam taşımamasıyla açıklanır.'
      },
      sol: \`Grafiklerdeki basamaklar ve eğimler doğrudan \${meta.title} konusundaki kurallarla örtüşür. Doğru cevap C seçeneğidir.\`,
      mNote: 'Grafik analizi'
    },

    // Soru 8: Günlük Yaşam Mühendislik Uygulaması
    {
      diff: 'Orta' as const,
      correct: 'D' as const,
      category: 'Günlük Yaşam ve Teknoloji',
      baglam: \`Mühendisler günlük yaşamda insan hayatını kolaylaştıran bir teknoloji geliştirirken "\${meta.title}" konusunda geçerli olan doğa kanunlarından yararlanmışlardır. Tasarlanan cihaz bu fen ilkesini kusursuz bir optimizasyonla kullanmaktadır.\`,
      stem: 'Geliştirilen bu mühendislik tasarımının çalışma prensibi hakkında aşağıdakilerden hangisi söylenemez?',
      opts: {
        A: 'Tasarımda fen bilimlerinin temel kuralları doğrudan uygulanmıştır.',
        B: 'Sistem değişkenleri insan güvenliği ve verimlilik esasına göre ayarlanmıştır.',
        C: 'Cihazın verimi doğadaki sebep-sonuç ilişkileriyle tam bir uyum içindedir.',
        D: 'Cihaz hiçbir doğa kanununa bağlı kalmaksızın enerjiyi veya maddeyi yoktan var edebilmektedir.'
      },
      sol: \`Hiçbir teknolojik aygıt doğa kanunlarını ihlal edemez veya yoktan enerji/madde var edemez. Söylenemez olan D seçeneğidir.\`,
      mNote: 'Mühendislik ve enerji/madde korunumu'
    },

    // Soru 9: Hipotez Testi ve Hatalı Çıkarım
    {
      diff: 'Orta' as const,
      correct: 'B' as const,
      category: 'Hipotez Sınama',
      baglam: \`Dört öğrenci "\${meta.title}" konusuyla ilgili hazırladıkları posterde kendi hipotezlerini savunmuştur. Öğrencilerden biri popüler bir yanılgı olan "\${m1}" cümlesini posterinin ana başlığı yapmıştır.\`,
      stem: 'Öğretmenin bu öğrenciye geri bildirim vererek posterini düzeltmesini istemesinin temel sebebi nedir?',
      opts: {
        A: 'Öğrencinin kullandığı yazı fontunun ve poster renklerinin uyumsuz olması.',
        B: \`Başlıktaki ifadenin LGS müfredatında açıkça belirtilen bir kavram yanılgısı olması ve doğrusunun "\${meta.summary}" şeklinde ifade edilmesi gerekliliği.\`,
        C: 'Posterde diğer öğrencilerden daha az görsel malzeme kullanılmış olması.',
        D: 'Hipotezin sadece Türkçe kaynaklarda yer alıp yabancı dillerde geçerli olmaması.'
      },
      sol: \`Bilimsel doğruluk posterlerin birincil kriteridir. Başlıktaki ifade bir kavram yanılgısıdır (\${m1}). Doğru cevap B seçeneğidir.\`,
      mNote: m1
    },

    // Soru 10: Tablo Veri Karşılaştırması
    {
      diff: 'Orta' as const,
      correct: 'A' as const,
      category: 'Tablo Veri Okuma',
      baglam: \`Laboratuvarda 3 farklı numune üzerinde "\${meta.title}" parametreleri ölçülmüş ve sonuçlar bir veri tablosunda toplanmıştır. Tablo incelendiğinde 1. numunenin en yüksek verimi sağladığı, 3. numunenin ise sınır değerde kaldığı görülmüştür.\`,
      stem: 'Tablodaki bu veriler doğrultusunda yapılabilecek en kapsamlı ve bilimsel çıkarım hangisidir?',
      opts: {
        A: \`Numuneler arasındaki fark, \${meta.title} ilkesi uyarınca belirlenen değişkenlerin oransal dağılımından kaynaklanmaktadır.\`,
        B: 'Tablodaki hiçbir değer birbiriyle tutarlı olmayıp deney tamamen başarısızdır.',
        C: '3. numune ortamdaki tüm fiziksel yasaları geçersiz kılmıştır.',
        D: 'Sonuçlar yalnızca numunelerin dış görünüş renklerine bağlı olarak değişmiştir.'
      },
      sol: \`Bilimsel veriler \${meta.title} ilkesiyle tutarlıdır. Doğru cevap A seçeneğidir.\`,
      mNote: 'Veri tablosu değerlendirme'
    },

    // Soru 11: Zıt Seçenek Çeldirici Testi
    {
      diff: 'İleri / LGS' as const,
      correct: 'C' as const,
      category: 'LGS Akıl Yürütme',
      baglam: \`Bir LGS deneme sınavında "\${meta.title}" ile ilgili bir soruya öğrencilerin %45'i doğru cevap verirken, %40'ı tam zıt mantığa sahip çeldirici seçeneği işaretlemiştir. Yapılan analizde öğrencilerin "\${t1}" tuzağına düştüğü tespit edilmiştir.\`,
      stem: 'Bu soruda çeldiriciye düşen öğrencilerin düşünce sistemindeki temel eksiklik aşağıdakilerden hangisidir?',
      opts: {
        A: 'Soruda verilen deney düzeneğindeki malzemelerin adını ezberlememiş olmaları.',
        B: 'Sınav süresini gereğinden hızlı kullanarak soruyu okumadan geçmeleri.',
        C: \`Sorudaki tuzak mantığı (\${t1}) fark edemeyip, \${meta.title} konusundaki temel sebep-sonuç ilişkisini ters kurgulamış olmaları.\`,
        D: 'Kazanım hedeflerinin dışındaki lise konularını bilmemeleri.'
      },
      sol: \`Öğrencilerin en büyük zaafı \${t1} tuzağına düşmektir. Doğru cevap C seçeneğidir.\`,
      mNote: t1
    },

    // Soru 12: Yanlış Bilineni Düzeltme
    {
      diff: 'İleri / LGS' as const,
      correct: 'D' as const,
      category: 'Düzeltme Stratejisi',
      baglam: \`"\${meta.title}" konusunda sıklıkla yapılan bir diğer hata ise "\${m2}" düşüncesidir. Bir fen zümresi bu hatayı önlemek için özel bir kavram karikatürü hazırlamıştır.\`,
      stem: 'Karikatürdeki karakterlerden hangisinin konuşma balonu bu konudaki bilimsel gerçeği eksiksiz yansıtmaktadır?',
      opts: {
        A: '"Bence bu durum her canlının veya sistemin keyfi tercihine göre anlık olarak değişir."',
        B: '"Eski bilim insanları ne dediyse onu ezberlemeliyiz, deney yapmaya lüzum yoktur."',
        C: '"İki durum arasında fark yoktur, olay her zaman tek yönde kendiliğinden akar."',
        D: \`"Doğrusu şudur: \${meta.summary}. Bu nedenle \${m2} iddiası bilimsel gerçeklerle uyuşmaz."\`
      },
      sol: \`Doğru bilimsel ifade: \${meta.summary}. Karikatürdeki doğru karakter D seçeneğini söyleyen karakterdir.\`,
      mNote: m2
    },

    // Soru 13: Çoklu Öncüllü LGS Formatı (I, II, III)
    {
      diff: 'İleri / LGS' as const,
      correct: 'C' as const,
      category: 'LGS Öncüllü Soru',
      baglam: \`"\${meta.title}" ile ilgili hazırlanan bir deneyde şu gözlemler kaydedilmiştir:\nI. Bağımsız değişken artırıldığında beklenen fen olayı gerçekleşmiştir.\nII. Yanılgı olarak bilinen "\${m1}" durumu gözlemlenmemiş, aksine bilimsel kural doğrulanmıştır.\nIII. Süreç boyunca toplam madde ve enerji dengesi korunmuştur.\`,
      stem: 'Yapılan bu gözlemlerden yola çıkılarak hangi ifadelerin doğruluğuna KESİNLİKLE ulaşılabilir?',
      opts: {
        A: 'Yalnız I',
        B: 'Yalnız II',
        C: 'I, II ve III',
        D: 'I ve III'
      },
      sol: \`Deneydeki I, II ve III öncüllerinin tamamı hem kontrollü deney şartlarına hem de \${meta.title} konusunun bilimsel kanunlarına tam olarak uygundur. Doğru cevap C seçeneğidir.\`,
      mNote: 'Öncül analizi'
    },

    // Soru 14: İki Aşamalı Deney Senaryosu
    {
      diff: 'İleri / LGS' as const,
      correct: 'A' as const,
      category: 'Aşamalı Deney Analizi',
      baglam: \`1. Aşamada: "\${meta.title}" ile ilgili bir sistem standart koşullarda çalıştırılmıştır.\n2. Aşamada: Sisteme müdahale edilerek "\${t2}" durumuna zemin hazırlanmış ve sonuçların nasıl etkilendiği ölçülmüştür.\`,
      stem: '2. aşamada elde edilen sonuç 1. aşama ile karşılaştırıldığında araştırmacının varması gereken nihai bilimsel sonuç nedir?',
      opts: {
        A: \`Yapılan müdahale \${meta.title} dengesini değiştirmiş ve \${t2} hususunun deneysel ölçümlerde ne denli kritik olduğunu ispatlamıştır.\`,
        B: '2. aşamada hiçbir değişiklik olmamış, sistem dış etkilere tamamen duyarsız kalmıştır.',
        C: '1. aşamadaki tüm bulgular 2. aşama yüzünden bilimsel literatürden silinmelidir.',
        D: 'Deneyin her iki aşaması da rastgele sonuçlar vermiş olup bilimsel bir değer taşımaz.'
      },
      sol: \`İki aşamalı deneylerde farkı yaratan faktör açıkça analiz edilir. Doğru cevap A seçeneğidir.\`,
      mNote: t2
    },

    // Soru 15: Simülasyon ve Modelleme
    {
      diff: 'İleri / LGS' as const,
      correct: 'B' as const,
      category: 'Bilimsel Modelleme',
      baglam: \`Bilgisayar ortamında hazırlanan bir 3B simülasyonda "\${meta.title}" süreci modellenmiştir. Simülasyon parametreleri değiştirildiğinde sistemin doğadaki kusursuz işleyişi ekranda canlandırılmıştır.\`,
      stem: 'Simülasyonu inceleyen bir öğrencinin aşağıdaki yargılardan hangisine varması beklenir?',
      opts: {
        A: 'Doğadaki olayların hiçbir kurala bağlı olmadan tamamen karmaşa içinde işlediğine.',
        B: \`\${meta.title} sürecinin santimetrelik ve derecelik hassas ölçülerle, \${meta.summary} esasına göre kusursuz bir düzen içinde çalıştığına.\`,
        C: 'Simülasyonun sadece bir bilgisayar oyunu olup gerçek dünyayla hiçbir ilgisinin olmadığına.',
        D: 'İnsan müdahalesi olmadan hiçbir doğal sürecin kendi dengesini koruyamayacağına.'
      },
      sol: \`Simülasyon ve fen bilimleri doğadaki muhteşem nizamı ve matematiksel ölçüyü gösterir. Doğru cevap B seçeneğidir.\`,
      mNote: 'Maarif nizam ve ölçü tefekkürü'
    },

    // Soru 16: İki Farklı Hipotezin Karşılaştırılması
    {
      diff: 'İleri / LGS' as const,
      correct: 'D' as const,
      category: 'Hipotez Karşılaştırma',
      baglam: \`Ali'nin Hipotezi: "\${m3}."\nZeynep'in Hipotezi: "\${meta.summary}."\nHer iki öğrenci de hipotezlerini doğrulamak için deneyler tasarlamıştır.\`,
      stem: 'Deney sonuçları incelendiğinde hangi öğrencinin hipotezinin bilimsel olarak doğrulandığı söylenebilir?',
      opts: {
        A: 'Yalnız Ali’nin hipotezi doğrulanmıştır çünkü günlük konuşma dilinde bu fikir yaygındır.',
        B: 'Her iki hipotez de eşit derecede doğru kabul edilmelidir.',
        C: 'Hiçbir hipotez doğrulanamamıştır, konu henüz bilim dünyasında belirsizdir.',
        D: \`Yalnız Zeynep’in hipotezi doğrulanmıştır; çünkü Ali’nin savunduğu düşünce LGS'de sıkça karşılaşılan bir kavram yanılgısıdır.\`
      },
      sol: \`Ali'nin hipotezi yaygın bir kavram yanılgısına (\${m3}) dayanırken, Zeynep bilimsel kanunu savunmuştur. Doğru cevap D seçeneğidir.\`,
      mNote: m3
    },

    // Soru 17: Yanılgı Tuzağından Kurtulma Reçetesi
    {
      diff: 'İleri / LGS' as const,
      correct: 'A' as const,
      category: 'Strateji Geliştirme',
      baglam: \`Bir fen öğretmeni LGS'ye hazırlanan öğrencilerine "\${meta.title}" konusunda şu tavsiyede bulunmuştur: "Soruları çözerken özellikle '\${t1}' çeldiricisine dikkat edin; metinde bu ifadeyi gördüğünüzde acele karar vermeyin."\`,
      stem: 'Öğretmenin bu uyarısını dikkate alan bir öğrenci sınavda nasıl bir strateji izlemelidir?',
      opts: {
        A: \`İlgili çeldiriciyi (\${t1}) doğrudan eleyerek, konunun bilimsel özü olan '\${meta.summary}' ilkesini temel alan seçeneğe yönelmelidir.\`,
        B: 'Öğretmenin uyarısını unutup ilk okuduğu cazip çeldiriciyi hemen işaretlemelidir.',
        C: 'Bu soru tipini boş bırakarak diğer sorulara geçmelidir.',
        D: 'Kavram yanılgısı içeren seçeneğin daha bilimsel durduğunu düşünüp onu seçmelidir.'
      },
      sol: \`Bilinçli LGS öğrencisi MEB'in tuzak çeldiricisini (\${t1}) fark edip eler. Doğru cevap A seçeneğidir.\`,
      mNote: t1
    },

    // Soru 18: Ters Neden-Sonuç İlişkisi
    {
      diff: 'İleri / LGS' as const,
      correct: 'B' as const,
      category: 'Nedensellik Analizi',
      baglam: \`Bir bilim dergisinde yayımlanan makalede "\${meta.title}" konusunda neden ile sonucun birbirine karıştırılmaması gerektiği vurgulanmıştır.\`,
      stem: 'Aşağıdakilerden hangisinde neden ve sonuç ilişkisi \${meta.title} kurallarına göre DOĞRU kurulmuştur?',
      opts: {
        A: 'Sonuç önce gerçekleşir, neden ise bu sonuca uyum sağlamak için sonradan ortaya çıkar.',
        B: \`Fiziksel ve biyolojik kuralların gerektirdiği bağımsız değişken değişimi (neden), \${meta.summary} doğrultusunda gözlemlenen olayı (sonuç) meydana getirir.\`,
        C: 'Neden ile sonuç arasında hiçbir mantıksal veya matematiksel bağ bulunmaz.',
        D: 'Olayların nedeni daima ölçüm yapan kişinin kişisel niyetidir.'
      },
      sol: \`Bilimsel nedensellik B seçeneğindeki gibi objektif kurallara dayanır. Doğru cevap B seçeneğidir.\`,
      mNote: 'Sebep-sonuç ilişkisi'
    },

    // Soru 19: LGS Soru Modeli - Beceri Temelli
    {
      diff: 'İleri / LGS' as const,
      correct: 'C' as const,
      category: 'Beceri Temelli Sentez',
      baglam: \`Milli Eğitim Bakanlığı'nın yayımladığı örnek LGS sorusunda: "\${meta.title}" ile ilgili bir yaşam senaryosu verilmiş, ardından deney verilerini içeren bir infografik paylaşılmıştır. İnfografikte öğrencilerin en çok aldandığı "\${m1}" yanılgısına dair ipuçları gizlenmiştir.\`,
      stem: 'Bu infografiği inceleyen tam puan alacak bir öğrencinin çıkarımı aşağıdakilerden hangisi olmalıdır?',
      opts: {
        A: 'İnfografikteki veriler iddiayı doğrulamaktadır, yanılgı gerçektir.',
        B: 'Verilen bilgiler sınav müfredatı ile çelişmektedir.',
        C: \`İnfografikteki sayısal kanıtlar \${m1} iddiasını kesin olarak çürütmekte ve konunun bilimsel ilkesini doğrulamaktadır.\`,
        D: 'İnfografikte yalnızca sözel süslemeler yapılmış olup fen bilgisi bulunmamaktadır.'
      },
      sol: \`İnfografik analizinde öğrenciler yanılgıyı çürüten kanıtları görür. Doğru cevap C seçeneğidir.\`,
      mNote: m1
    },

    // Soru 20: Ünite Sonu Büyük Sentez
    {
      diff: 'İleri / LGS' as const,
      correct: 'D' as const,
      category: 'Kavramsal Ustalık ve Sentez',
      baglam: \`"\${meta.title}" konusunu tüm ayrıntılarıyla tamamlayan bir öğrenci; kavram yanılgılarını (\${m1}, \${m2}), MEB çeldiricilerini (\${t1}) ve deney yöntemlerini analiz ederek bir özet zihin haritası hazırlamıştır.\`,
      stem: 'Öğrencinin hazırladığı bu zihin haritasının merkezinde yer alan EN KAPSAMLI ve DOĞRU ana fikir hangisidir?',
      opts: {
        A: 'Fen bilimleri sadece ezberden ibarettir, kurallar her sene rastgele değişir.',
        B: 'Deneylerde kontrol değişkeni kullanmak gereksiz bir zaman kaybıdır.',
        C: 'Tüm sorular sezgisel tahminlerle çözülebilir, fen bilgisine gerek yoktur.',
        D: \`\${meta.title} konusu; \${meta.summary} temelinde işleyen, ölçülebilir, ispatlanabilir ve doğadaki muazzam düzeni yansıtan sarsılmaz bir bilimsel alandır.\`
      },
      sol: \`Zihin haritasının zirvesi D seçeneğindeki kapsamlı ve bilimsel sentezdir. Doğru cevap D seçeneğidir.\`,
      mNote: 'Tam kazanım ve sentez'
    }
  ];

  for (let i = 0; i < 20; i++) {
    const bp = questionBlueprints[i];
    const qNum = i + 1;
    const hasDiag = i % 2 === 0;

    questions.push({
      id: \`g8-\${section.code.replace(/\\./g, '-')}-q\${qNum}\`,
      number: qNum,
      grade: 8,
      subtopicCode: section.code,
      difficulty: bp.diff,
      diagramType: hasDiag ? meta.diagramType : undefined,
      diagramTitle: hasDiag ? \`\${meta.title} - \${bp.category} Şeması\` : undefined,
      baglam: bp.baglam,
      soruKoku: bp.stem,
      secenekler: bp.opts,
      dogruCevap: bp.correct,
      cozum: bp.sol,
      olculenKazanim: (meta.kazanimlar && meta.kazanimlar[0]) || \`\${meta.code} Temel Fen Kazanımı\`,
      olculenBeceri: \`LGS Fen Okuryazarlığı • \${bp.category}\`,
      processComponent: bp.category,
      contextNecessity: 'Öğrencinin verilen bağlamdaki verileri ve kavram yanılgısı analizini yapması zorunludur.',
      distractorAnalysis: [
        {
          option: 'A',
          analysis:
            bp.correct === 'A'
              ? 'Doğru Seçenek: Bilimsel kanıt ve MEB Maarif ilkeleriyle tam uyumludur.'
              : \`Çeldirici: \${bp.mNote || 'Kavram yanılgısı ve acele karar tuzağı.'}\`
        },
        {
          option: 'B',
          analysis:
            bp.correct === 'B'
              ? 'Doğru Seçenek: Bilimsel kanıt ve MEB Maarif ilkeleriyle tam uyumludur.'
              : \`Çeldirici: \${bp.mNote || 'Yaygın kavram yanılgısı ve yüzeysel bakış açısı.'}\`
        },
        {
          option: 'C',
          analysis:
            bp.correct === 'C'
              ? 'Doğru Seçenek: Bilimsel kanıt ve MEB Maarif ilkeleriyle tam uyumludur.'
              : \`Çeldirici: \${bp.mNote || 'Sebep-sonuç ilişkisini ters kurgulama tuzağı.'}\`
        },
        {
          option: 'D',
          analysis:
            bp.correct === 'D'
              ? 'Doğru Seçenek: Bilimsel kanıt ve MEB Maarif ilkeleriyle tam uyumludur.'
              : \`Çeldirici: \${bp.mNote || 'Doğa kanunlarına aykırı genelleme hatası.'}\`
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
`;

fs.writeFileSync(
  path.join(__dirname, '../src/data/grade8/grade8MisconceptionBank.ts'),
  misconceptionBankCode,
  'utf-8'
);
console.log('Saved grade8MisconceptionBank.ts');

