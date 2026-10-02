// 8. Sınıf Fen Bilimleri (LGS) Maarif Modeli - 7 Ünite & 17 Alt Konu
// "8. sınıf konular" (MEBİ LGS Konu Özeti, Kavram Yanılgıları, Çeldiriciler, Başucu Notları)
import { SectionContent, FillInBlankQuestion } from '../../types';
import { unit8_1_1_ContextQuestions } from './unit1_section1_questions';
import { generateGrade8ContextQuestions } from './grade8MisconceptionBank';

function generate10Blanks(code: string, title: string, summary: string, m1: string, m2: string): FillInBlankQuestion[] {
  const blanks: FillInBlankQuestion[] = [
    {
      id: `fib-${code}-1`,
      number: 1,
      baglam: `${title} konusundaki kontrollü deneyde sonucun doğrudan bağlı olduğu faktör incelenmiştir.`,
      soruKoku: 'Bilimsel bir araştırmada sonucu doğrudan belirleyen ve araştırmacı tarafından kasıtlı olarak değiştirilen faktöre .................................... değişken denir.',
      blankAnswer: 'bağımsız',
      acceptableAnswers: ['bağımsız', 'bağımsız değişken', 'bagimsiz'],
      explanation: 'Kontrollü deneylerde tek bir faktör (bağımsız değişken) değiştirilir.',
      wordBankHint: ['bağımsız', 'bağımlı', 'kontrol', 'sabit']
    },
    {
      id: `fib-${code}-2`,
      number: 2,
      baglam: `${title} ünitesinde yaygın bir yanılgı olan "${m1}" düşüncesi irdelenmiştir.`,
      soruKoku: `${title} olgusunda doğru bilimsel gerçeğe göre olaylar ${summary.slice(0, 45)}... prensibine göre .................................... bir düzenle gerçekleşir.`,
      blankAnswer: 'kusursuz',
      acceptableAnswers: ['kusursuz', 'düzenli', 'hassas', 'kusursuz bir'],
      explanation: 'Doğadaki fiziksel yasalar hassas bir ölçü ve nizam içerir.',
      wordBankHint: ['kusursuz', 'rastgele', 'düzensiz', 'karmaşık']
    },
    {
      id: `fib-${code}-3`,
      number: 3,
      baglam: `${title} sürecinde ölçülen parametrelerin birbiriyle ilişkisi değerlendirilmiştir.`,
      soruKoku: 'Deneyde bağımsız değişkene bağlı olarak değişen ve ölçümü yapılan değişkene .................................... değişken adı verilir.',
      blankAnswer: 'bağımlı',
      acceptableAnswers: ['bağımlı', 'bağımlı değişken', 'bagimli'],
      explanation: 'Bağımsız değişkenin etkisiyle ölçülen sonuç bağımlı değişkendir.',
      wordBankHint: ['bağımlı', 'bağımsız', 'kontrol', 'model']
    },
    {
      id: `fib-${code}-4`,
      number: 4,
      baglam: `MEB'in LGS sınavlarında ${title} ile ilgili hazırladığı sorularda çeldiricilere dikkat edilmelidir.`,
      soruKoku: `Sınavda öğrencilerin en sık yanıldığı "${m1.slice(0, 40)}..." iddiası bilimsel bir .................................... olarak kabul edilir.`,
      blankAnswer: 'kavram yanılgısı',
      acceptableAnswers: ['kavram yanılgısı', 'yanılgı', 'kavram yanilgisi'],
      explanation: 'MEBİ LGS dokümanlarında bu durum kavram yanılgısı olarak tanımlanmıştır.',
      wordBankHint: ['kavram yanılgısı', 'bilimsel yasa', 'hipotez', 'teori']
    },
    {
      id: `fib-${code}-5`,
      number: 5,
      baglam: `${title} kapsamında elde edilen ölçüm verileri analiz edilmiştir.`,
      soruKoku: 'Deney boyunca değeri değiştirilmeyen ve sabit tutulan etkenlere .................................... değişken denir.',
      blankAnswer: 'kontrol',
      acceptableAnswers: ['kontrol', 'kontrol edilen', 'sabit tutulan', 'kontrol değişkeni'],
      explanation: 'Kontrollü deneylerde diğer tüm şartlar sabit tutulur.',
      wordBankHint: ['kontrol', 'bağımsız', 'bağımlı', 'ölçüm']
    },
    {
      id: `fib-${code}-6`,
      number: 6,
      baglam: `${title} konusunda ikinci kritik yanılgı olan "${m2.slice(0, 40)}..." incelenmiştir.`,
      soruKoku: 'Bilimsel gözlemler, bu sürecin rastgele değil matematiksel ve fiziksel .................................... doğrultusunda işlediğini kanıtlar.',
      blankAnswer: 'kurallar',
      acceptableAnswers: ['kurallar', 'kanunlar', 'yasalar', 'ilkeler'],
      explanation: 'Tüm doğa olayları evrensel bilimsel kurallara tabidir.',
      wordBankHint: ['kurallar', 'tesadüfler', 'belirsizlikler', 'tahminler']
    },
    {
      id: `fib-${code}-7`,
      number: 7,
      baglam: `${title} ünitesindeki grafikler değerlendirildiğinde...`,
      soruKoku: 'Grafik ekseninde zaman ilerledikçe sistemin dengesini koruması kâinattaki muazzam .................................... ve nizamı gösterir.',
      blankAnswer: 'ölçü',
      acceptableAnswers: ['ölçü', 'denge', 'nizam', 'ahenk'],
      explanation: 'Maarif modelinde her varlık hassas bir ölçü ve hikmetle tanzim edilmiştir.',
      wordBankHint: ['ölçü', 'kaos', 'karmaşa', 'rastlantı']
    },
    {
      id: `fib-${code}-8`,
      number: 8,
      baglam: `Günlük hayatta ${title} prensibiyle çalışan araçlar tasarlanmaktadır.`,
      soruKoku: 'Mühendisler insan yaşamını kolaylaştırmak amacıyla bu fen ilkesini kullanarak .................................... tasarımlar geliştirir.',
      blankAnswer: 'teknolojik',
      acceptableAnswers: ['teknolojik', 'biyoteknolojik', 'mekanik', 'verimli'],
      explanation: 'Fen prensipleri doğrudan teknoloji ve mühendisliğe uygulanır.',
      wordBankHint: ['teknolojik', 'geleneksel', 'teorik', 'soyut']
    },
    {
      id: `fib-${code}-9`,
      number: 9,
      baglam: `${title} deneyinde hata payını en aza indirmek için...`,
      soruKoku: 'Ölçümlerin doğruluğundan emin olmak için deney basamakları birden fazla kez .................................... edilmelidir.',
      blankAnswer: 'tekrar',
      acceptableAnswers: ['tekrar', 'test', 'kontrol'],
      explanation: 'Bilimsel güvenilirlik deneyin tekrarlanabilirliği ile artar.',
      wordBankHint: ['tekrar', 'iptal', 'tahmin', 'ihmal']
    },
    {
      id: `fib-${code}-10`,
      number: 10,
      baglam: `${title} konusu LGS soru modelleriyle sentezlendiğinde...`,
      soruKoku: 'Ezberden uzak, deneysel verilere ve çıkarıma dayalı sorulara .................................... temelli sorular denir.',
      blankAnswer: 'bağlam',
      acceptableAnswers: ['bağlam', 'beceri', 'baglam', 'yeni nesil'],
      explanation: 'MEB Maarif modeli bağlam ve beceri temelli ölçmeyi hedefler.',
      wordBankHint: ['bağlam', 'klasik', 'ezber', 'tanım']
    }
  ];
  return blanks;
}

function createG8Section(params: {
  code: string;
  title: string;
  unitCode: string;
  unitTitle: string;
  summary: string;
  kazanimlar: string[];
  stationTitle: string;
  pageRef: string;
  objectives: string[];
  m1: string;
  m2: string;
}): SectionContent {
  const blanks = generate10Blanks(params.code, params.title, params.summary, params.m1, params.m2);

  const base: SectionContent = {
    code: params.code,
    title: params.title,
    unitCode: params.unitCode,
    unitTitle: params.unitTitle,
    summary: params.summary,
    kazanimlar: params.kazanimlar,
    pekistirmeIstasyonu: {
      stationTitle: params.stationTitle,
      pageReference: params.pageRef,
      summaryText: params.summary,
      targetSkills: params.objectives
    },
    hatirlayalim: {
      text: `${params.title} konusunda öğrendiklerimizi LGS ve Türkiye Yüzyılı Maarif Modeli çerçevesinde pekiştiriyoruz.`,
      keyPoints: [
        'Konuyla ilgili temel bilimsel kurallar ve kontrollü deney şartları dikkate alınmalıdır.',
        `Kavram yanılgısına dikkat: ${params.m1}`,
        'Deney ve gözlem sonuçları grafik veya tablo üzerinden analiz edilmelidir.',
        'Doğadaki mükemmel tanzim, ölçü ve hikmet eksenli nedensellik bağları irdelenmelidir.'
      ]
    },
    onDegerlendirme: [
      {
        id: `od-${params.code}-1`,
        question: `${params.title} konusu günlük yaşamda hangi olaylarla doğrudan ilişkilidir?`,
        answer: 'Günlük hayatta karşılaştığımız doğal süreçler ve teknolojik araçlar bu bilimsel ilkeler doğrultusunda kusursuz bir düzenle çalışmaktadır.'
      }
    ],
    hazirlik: {
      question: `${params.title} olgusu olmasaydı çevremizde ve yaşamımızda ne gibi aksaklıklar meydana gelirdi?`,
      answer: 'Canlıların ekolojik dengesi, mevsimsel yaşam döngüsü veya fiziksel sistemlerin işleyişi bozulurdu.'
    },
    merak: {
      question: `Bilim insanları ${params.title} hakkındaki temel ilkeleri hangi deney ve gözlemlerle keşfetmiştir?`,
      answer: 'Kontrollü değişken deneyleri, hassas ölçümler ve matematiksel modellemeler sayesinde keşfedilmiştir.'
    },
    hikmetStages: [
      {
        stage: 1,
        name: '1. Varlığı Tanıt',
        concept: params.title,
        text: `${params.title}, kâinattaki muazzam düzenin ve hassas dengelerin bir parçasıdır.`
      },
      {
        stage: 2,
        name: '2. Parçalarını Göster',
        concept: 'Sistem Bileşenleri',
        text: 'Sistemi oluşturan tüm etkenler bir saat dişlileri gibi birbirini tamamlayacak şekilde vazifelendirilmiştir.'
      },
      {
        stage: 3,
        name: '3. Ölçü ve Düzen',
        concept: 'Matematiksel Denge',
        text: 'Fiziksel ve biyolojik kurallar santimetrelik veya derecelik hassas ölçülerle tanzim edilmiştir.'
      }
    ],
    fillInBlanks: blanks,
    fillInBlankQuestions: blanks,
    etkinlikler: [],
    bilgiIstasyonlari: [],
    dda: {
      id: `dda-${params.code}-1`,
      statement: `${params.title} konusunda: ${params.summary.slice(0, 100)}...`,
      correctDecision: 'D',
      reason: 'Bilimsel kanıtlar ve kontrollü deneyler bu ilkeyi doğrulamaktadır.',
      ifTrue: { exit: 1, isCorrect: true, feedback: 'Tebrikler! Kavram yanılgısına düşmeden doğru çıkışa ulaştınız.' },
      ifFalse: { exit: 2, isCorrect: false, feedback: `Dikkat: "${params.m1}" yanılgısına dikkat etmelisiniz.` }
    },
    biliyorumAnliyorumDusunuyorum: {
      biliyorum: `${params.title} konusuna ait temel kuralları ve kavram yanılgılarını (${params.m1}) biliyorum.`,
      anliyorum: `Olayların sebep-sonuç ilişkilerini ve kontrollü deney şartlarını anlıyorum.`,
      dusunuyorum: `Doğadaki kusursuz tanzim, ölçü ve dengelerin hikmetini tefekkür ediyorum.`
    },
    nelerOgrenildi: {
      title: `${params.title} - Bölüm Sonu Maarif Sentezi`,
      ogrenilenKavramlar: params.kazanimlar,
      ozet: params.summary,
      kontrolSorulari: [
        {
          id: `no-${params.code}-1`,
          soru: `${params.title} sürecinde en sık yapılan kavram yanılgısı (${params.m1}) nasıl düzeltilmelidir?`,
          cevap: `Doğru bilimsel kural gereğince: ${params.summary}. Bu nedenle söz konusu yanılgıya düşülmemeli, kontrollü değişken şartlarına uyulmalıdır.`
        }
      ]
    },
    contextQuestions: []
  };

  // 8. Sınıf Kavram Yanılgıları ve MEBİ Soru Havuzunu oluştur
  base.contextQuestions = generateGrade8ContextQuestions(base);
  return base;
}

export const g8_8_1_1 = createG8Section({
  code: '8.1.1',
  title: "Mevsimlerin Oluşumu ve Eksen Eğikliği",
  unitCode: '8.1',
  unitTitle: "1. Ünite: Mevsimler ve İklim",
  summary: "Dünya'nın dönme ekseninin 23° 27' eğik olması, Güneş etrafında dolanması, birim yüzeye düşen ışık enerjisi, ekinoks ve gündönümü tarihleri.",
  kazanimlar: ["F.8.1.1.1. Mevsimlerin oluşumuna yönelik tahminlerde bulunur.","F.8.1.1.2. Eksen eğikliği ve Güneş ışınlarının geliş açısı arasındaki ilişkiyi açıklar."],
  stationTitle: "İstasyon: Mevsimlerin Oluşumu ve Eksen Eğikliği",
  pageRef: "LGS MEBİ Fen Kitabı 8.1.1",
  objectives: ["F.8.1.1.1. Mevsimlerin oluşumuna yönelik tahminlerde bulunur.","F.8.1.1.2. Eksen eğikliği ve Güneş ışınlarının geliş açısı arasındaki ilişkiyi açıklar."],
  m1: "Dünya Güneş'e yaklaştığında yaz, uzaklaştığında kış mevsimi yaşanır yanılgısı (Oysa 3 Ocak'ta Dünya Güneş'e en yakındır ve KYK'de kış yaşanır; mevsimleri belirleyen mesafe değil eksen eğikliği ve ışınların geliş açısıdır).",
  m2: "Ekvator çizgisine Güneş ışınları yıl boyunca her gün 90° dik açıyla düşer yanılgısı (Sadece 21 Mart ve 23 Eylül ekinokslarında tam dik düşer)."
});
g8_8_1_1.contextQuestions = unit8_1_1_ContextQuestions;

export const g8_8_1_2 = createG8Section({
  code: '8.1.2',
  title: "İklim ve Hava Hareketleri",
  unitCode: '8.1',
  unitTitle: "1. Ünite: Mevsimler ve İklim",
  summary: "Rüzgâr oluşumu, yüksek ve alçak basınç alanları, havadaki nem ve yağış türleri, iklim ve hava olayları farkı, klimatoloji, küresel iklim değişikliği.",
  kazanimlar: ["F.8.1.2.1. İklim ve hava olayları arasındaki farkı açıklar.","F.8.1.2.2. İklim biliminin (klimatoloji) bir bilim dalı olduğunu ve bu alanda çalışan uzmanlara iklim bilimci (klimatolog) dendiğini belirtir.","F.8.1.2.3. Rüzgâr oluşumunu sıcaklık ve basınç farkıyla açıklar."],
  stationTitle: "İstasyon: İklim ve Hava Hareketleri",
  pageRef: "LGS MEBİ Fen Kitabı 8.1.2",
  objectives: ["F.8.1.2.1. İklim ve hava olayları arasındaki farkı açıklar.","F.8.1.2.2. İklim biliminin (klimatoloji) bir bilim dalı olduğunu ve bu alanda çalışan uzmanlara iklim bilimci (klimatolog) dendiğini belirtir.","F.8.1.2.3. Rüzgâr oluşumunu sıcaklık ve basınç farkıyla açıklar."],
  m1: "Sıcak havanın yoğunluğunun fazla olup yüksek basınç alanı oluşturduğu yanılgısı (Isınan hava genleşir, yoğunluğu azalır, yükselici hava hareketi yapar ve Alçak Basınç oluşturur; soğuk hava ise alçalıcı hareketle Yüksek Basınç oluşturur).",
  m2: "Rüzgârın alçak basınçtan yüksek basınca veya sıcaktan soğuğa doğru estiği yanılgısı (Rüzgâr daima Yüksek Basınç'tan Alçak Basınç'a, yani Soğuk bölgeden Sıcak bölgeye doğru yatay hava akımıdır)."
});

export const g8_8_2_1 = createG8Section({
  code: '8.2.1',
  title: "DNA'nın Yapısı, Nükleotidler ve Eşlenme",
  unitCode: '8.2',
  unitTitle: "2. Ünite: DNA ve Genetik Kod",
  summary: "Nükleotid yapısı (Fosfat, Şeker, Organik Baz), Adenin-Timin, Guanin-Sitozin eşleşmesi, genetik kod hiyerarşisi (Kromozom > DNA > Gen > Nükleotid), DNA'nın kendini eşlemesi ve tek/çift zincir onarım kuralları.",
  kazanimlar: ["F.8.2.1.1. Nükleotid, gen, DNA ve kromozom kavramlarını açıklayarak bu kavramlar arasında ilişki kurar.","F.8.2.1.2. DNA'nın yapısını model üzerinde gösterir.","F.8.2.1.3. DNA'nın kendini nasıl eşlediğini ifade eder."],
  stationTitle: "İstasyon: DNA'nın Yapısı, Nükleotidler ve Eşlenme",
  pageRef: "LGS MEBİ Fen Kitabı 8.2.1",
  objectives: ["F.8.2.1.1. Nükleotid, gen, DNA ve kromozom kavramlarını açıklayarak bu kavramlar arasında ilişki kurar.","F.8.2.1.2. DNA'nın yapısını model üzerinde gösterir.","F.8.2.1.3. DNA'nın kendini nasıl eşlediğini ifade eder."],
  m1: "Kromozom sayısı fazla olan canlının daha gelişmiş veya daha büyük olduğu yanılgısı (Eğrelti otu 500 kromozomludur, insan 46; kromozom sayısı gelişmişlik veya vücut büyüklüğüyle ilişkisizdir).",
  m2: "Farklı canlı türlerinin kromozom sayılarının aynı olamayacağı yanılgısı (İnsan ve moli balığı her ikisi de 46 kromozoma sahiptir; benzerlik gen dizilimiyle ilgilidir)."
});

export const g8_8_2_2 = createG8Section({
  code: '8.2.2',
  title: "Kalıtım, Çaprazlamalar ve Akraba Evliliği",
  unitCode: '8.2',
  unitTitle: "2. Ünite: DNA ve Genetik Kod",
  summary: "Mendel genetiği, alel genler, baskın (dominant) ve çekinik (resesif) genler, homozigot (saf) ve heterozigot (melez) döller, fenotip ve genotip oranları, tek karakter çaprazlamaları, insanda cinsiyet oluşumu ve akraba evliliği riskleri.",
  kazanimlar: ["F.8.2.2.1. Kalıtım ile ilgili kavramları tanımlar.","F.8.2.2.2. Tek karakter çaprazlamaları ile ilgili problemler çözerek sonuçlar hakkında yorum yapar.","F.8.2.2.3. Akraba evliliklerinin genetik sonuçlarını tartışır."],
  stationTitle: "İstasyon: Kalıtım, Çaprazlamalar ve Akraba Evliliği",
  pageRef: "LGS MEBİ Fen Kitabı 8.2.2",
  objectives: ["F.8.2.2.1. Kalıtım ile ilgili kavramları tanımlar.","F.8.2.2.2. Tek karakter çaprazlamaları ile ilgili problemler çözerek sonuçlar hakkında yorum yapar.","F.8.2.2.3. Akraba evliliklerinin genetik sonuçlarını tartışır."],
  m1: "Bebeğin cinsiyetini annenin belirlediği yanılgısı (Anne sadece X kromozomu verir; cinsiyeti babadan gelen spermdeki X veya Y kromozomu belirler: XX kız, XY erkek).",
  m2: "Önceki 3 çocuğu erkek olan bir ailenin 4. çocuğunun kız olma ihtimalinin daha yüksek olduğu yanılgısı (Her doğumda kız veya erkek olma olasılığı bağımsız bir olaydır ve daima %50'dir)."
});

export const g8_8_2_3 = createG8Section({
  code: '8.2.3',
  title: "Mutasyon, Modifikasyon, Adaptasyon ve Biyoteknoloji",
  unitCode: '8.2',
  unitTitle: "2. Ünite: DNA ve Genetik Kod",
  summary: "Mutasyon ve modifikasyon farkı, adaptasyonun canlının yaşama ve üreme şansına etkisi, doğal seçilim ve varyasyon, biyoteknoloji uygulamaları (gen aktarımı, klonlama, gen tedavisi, aşılama) ve etik boyutları.",
  kazanimlar: ["F.8.2.3.1. Örneklerden yola çıkarak mutasyonu ve modifikasyonu açıklar.","F.8.2.3.2. Canlıların çevreye uyumlarını (adaptasyon) gözlemleyerek açıklar.","F.8.2.4.1. Biyoteknolojik uygulamaların geçmişten günümüze gelişimini değerlendirir."],
  stationTitle: "İstasyon: Mutasyon, Modifikasyon, Adaptasyon ve Biyoteknoloji",
  pageRef: "LGS MEBİ Fen Kitabı 8.2.3",
  objectives: ["F.8.2.3.1. Örneklerden yola çıkarak mutasyonu ve modifikasyonu açıklar.","F.8.2.3.2. Canlıların çevreye uyumlarını (adaptasyon) gözlemleyerek açıklar.","F.8.2.4.1. Biyoteknolojik uygulamaların geçmişten günümüze gelişimini değerlendirir."],
  m1: "Modifikasyonların nesilden nesile aktarıldığı yanılgısı (Modifikasyon genin işleyişindeki çevre kaynaklı geçici değişimdir; kas yapan sporcunun çocuğu kaslı doğmaz, Himalaya tavşanının kesilen tüyü sıcaklık kuralına tabidir).",
  m2: "Canlıların ihtiyaç duydukları için isteyerek adaptasyon geliştirdiği yanılgısı (Adaptasyonlar canlının isteğiyle aniden oluşmaz; var olan genetik çeşitlilik (varyasyon) içinden çevreye en uyumlu olanların hayatta kalması (doğal seçilim) ile nesiller boyunca yerleşir)."
});

export const g8_8_3_1 = createG8Section({
  code: '8.3.1',
  title: "Katı Basıncı ve Günlük Yaşam Uygulamaları",
  unitCode: '8.3',
  unitTitle: "3. Ünite: Basınç",
  summary: "Katı basıncının ağırlık (dik kuvvet) ve temas yüzey alanına bağlılığı (P = G / S), basıncı artıran ve azaltan günlük teknolojiler, katıların kuvveti aynen iletmesi ilkesi.",
  kazanimlar: ["F.8.3.1.1. Katı basıncını etkileyen değişkenleri deneyerek keşfeder.","F.8.3.1.2. Katı basıncının günlük yaşam ve teknolojideki uygulamalarına örnekler verir."],
  stationTitle: "İstasyon: Katı Basıncı ve Günlük Yaşam Uygulamaları",
  pageRef: "LGS MEBİ Fen Kitabı 8.3.1",
  objectives: ["F.8.3.1.1. Katı basıncını etkileyen değişkenleri deneyerek keşfeder.","F.8.3.1.2. Katı basıncının günlük yaşam ve teknolojideki uygulamalarına örnekler verir."],
  m1: "Katıların basıncı aynen ilettiği yanılgısı (Katılar üzerlerine uygulanan dik KUVVETİ büyüklüğünü ve doğrultusunu değiştirmeden aynen iletir; temas yüzey alanı değişirse basınç değişir, basıncı aynen iletmezler!).",
  m2: "Bir katı blok dik olarak tam ortasından ikiye kesildiğinde zemine yaptığı basıncın azaldığı yanılgısı (Hem ağırlık yarıya iner hem yüzey alanı yarıya iner, dolayısıyla G/S oranı değişmez, basınç AYNI KALIR!)."
});

export const g8_8_3_2 = createG8Section({
  code: '8.3.2',
  title: "Sıvı Basıncı ve Pascal Prensibi",
  unitCode: '8.3',
  unitTitle: "3. Ünite: Basınç",
  summary: "Sıvı basıncının derinlik (h) ve yoğunluğa (d) bağlılığı (P = h · d), kabın şeklinden ve sıvı miktarından bağımsızlığı, Pascal Prensibi (sıvıların basıncı aynen iletmesi), hidrolik frenler, krikolar ve berber koltukları.",
  kazanimlar: ["F.8.3.1.2. Sıvı basıncını etkileyen değişkenleri tahmin eder ve tahminlerini test eder.","F.8.3.1.3. Pascal prensibinin teknolojideki uygulamalarını açıklar."],
  stationTitle: "İstasyon: Sıvı Basıncı ve Pascal Prensibi",
  pageRef: "LGS MEBİ Fen Kitabı 8.3.2",
  objectives: ["F.8.3.1.2. Sıvı basıncını etkileyen değişkenleri tahmin eder ve tahminlerini test eder.","F.8.3.1.3. Pascal prensibinin teknolojideki uygulamalarını açıklar."],
  m1: "Sıvı basıncının kabın şekline, genişliğine veya kaptaki toplam sıvı kütlesine bağlı olduğu yanılgısı (Derinlik h ve yoğunluk d aynı olduğu sürece kabın şekli, yatay genişliği veya sıvı miktarı taban basıncını ASLA değiştirmez).",
  m2: "Derinliğin kabın tabanından yukarı doğru ölçüldüğü yanılgısı (Derinlik h, sıvının serbest üst yüzeyinden ölçülen dikey mesafedir)."
});

export const g8_8_3_3 = createG8Section({
  code: '8.3.3',
  title: "Gaz Basıncı ve Açık Hava Basıncı",
  unitCode: '8.3',
  unitTitle: "3. Ünite: Basınç",
  summary: "Torricelli deneyi (76 cm Hg), açık hava basıncının deniz seviyesinden yükseklere çıkıldıkça azalması, kapalı kap gaz basıncı, pipetle meyve suyu içme, van vantuzları ve Magdeburg yarım küreleri.",
  kazanimlar: ["F.8.3.1.3. Gazların basınç özelliklerinin günlük yaşam ve teknolojideki uygulamalarına örnekler verir.","F.8.3.1.4. Açık hava basıncının varlığını kanıtlayan deneyleri yorumlar."],
  stationTitle: "İstasyon: Gaz Basıncı ve Açık Hava Basıncı",
  pageRef: "LGS MEBİ Fen Kitabı 8.3.3",
  objectives: ["F.8.3.1.3. Gazların basınç özelliklerinin günlük yaşam ve teknolojideki uygulamalarına örnekler verir.","F.8.3.1.4. Açık hava basıncının varlığını kanıtlayan deneyleri yorumlar."],
  m1: "Torricelli deneyinde cıva yüksekliğinin cam borunun kalınlığına, uzunluğuna veya eğikliğine bağlı olduğu yanılgısı (Açık hava basıncı 76 cm Hg'lik dikey sıvı sütununu dengeler; borunun kalın olması veya eğik durması dikey h yüksekliğini değiştirmez).",
  m2: "Deniz seviyesinden yukarılara (dağa) çıkıldıkça açık hava basıncının arttığı yanılgısı (Yukarı çıkıldıkça havanın yoğunluğu ve üzerimizdeki hava tabakası azaldığı için açık hava basıncı AZALIR, cıva yüksekliği düşer)."
});

export const g8_8_4_1 = createG8Section({
  code: '8.4.1',
  title: "Periyodik Sistem ve Elementlerin Sınıflandırılması",
  unitCode: '8.4',
  unitTitle: "4. Ünite: Madde ve Endüstri",
  summary: "Periyodik tablonun tarihsel gelişimi (Mendeleyev, Moseley), grup ve periyot kavramları, metaller, ametaller, yarı metaller ve soygazların özellikleri, istisnai elementler (Hidrojen ve Helyum).",
  kazanimlar: ["F.8.4.1.1. Periyodik sistemde, grup ve periyotların nasıl oluşturulduğunu açıklar.","F.8.4.1.2. Elementleri periyodik tablo üzerinde yaşantımızdaki yerlerine göre sınıflandırır."],
  stationTitle: "İstasyon: Periyodik Sistem ve Elementlerin Sınıflandırılması",
  pageRef: "LGS MEBİ Fen Kitabı 8.4.1",
  objectives: ["F.8.4.1.1. Periyodik sistemde, grup ve periyotların nasıl oluşturulduğunu açıklar.","F.8.4.1.2. Elementleri periyodik tablo üzerinde yaşantımızdaki yerlerine göre sınıflandırır."],
  m1: "1A grubunda yer alan tüm elementlerin metal (alkali metal) olduğu yanılgısı (1A'nın ilk elementi olan Hidrojen (H) bir AMETALDİR; metallerle benzer kimyasal özellik göstermez).",
  m2: "Son katmanında 2 elektron bulunan elementin kesinlikle 2A grubunda bir metal olduğu yanılgısı (Helyum (He) atom numarası 2'dir, son katmanında 2 elektron vardır fakat katmanı tam dolu olduğu için 8A SOYGAZLAR grubundadır)."
});

export const g8_8_4_2 = createG8Section({
  code: '8.4.2',
  title: "Fiziksel-Kimyasal Değişimler ve Kimyasal Tepkimeler",
  unitCode: '8.4',
  unitTitle: "4. Ünite: Madde ve Endüstri",
  summary: "Maddenin kimliğinin değişip değişmemesi, kimyasal tepkime denklemleri, kütlenin korunumu kanunu, atom cinsi ve sayısının korunması, bağ kırılımı ve yeni bağ oluşumu.",
  kazanimlar: ["F.8.4.2.1. Fiziksel ve kimyasal değişim arasındaki farkları açıklar.","F.8.4.3.1. Bileşiklerin kimyasal tepkime sonucunda oluştuğunu kavrar.","F.8.4.3.2. Kimyasal tepkimelerde kütlenin korunduğunu gösterir."],
  stationTitle: "İstasyon: Fiziksel-Kimyasal Değişimler ve Kimyasal Tepkimeler",
  pageRef: "LGS MEBİ Fen Kitabı 8.4.2",
  objectives: ["F.8.4.2.1. Fiziksel ve kimyasal değişim arasındaki farkları açıklar.","F.8.4.3.1. Bileşiklerin kimyasal tepkime sonucunda oluştuğunu kavrar.","F.8.4.3.2. Kimyasal tepkimelerde kütlenin korunduğunu gösterir."],
  m1: "Kimyasal tepkimeler sonucunda yeni atomların oluştuğu veya atom türünün değiştiği yanılgısı (Kimyasal tepkimelerde hiçbir atom yok olmaz veya yoktan var olmaz; atom cinsi ve atom sayısı DAİMA KORUNUR, sadece atomlar arası bağlar kopar ve yeni bağlar düzenlenir).",
  m2: "Açık kapta gerçekleşen yanma veya gaz çıkışlı tepkimelerde toplam kütlenin azaldığı yanılgısı (Uçup giden gazın bir kütlesi vardır; kapalı bir kapta yapılan hassas ölçümlerde girenlerin toplam kütlesi ürünlerin toplam kütlesine DAİMA EŞİTTİR)."
});

export const g8_8_4_3 = createG8Section({
  code: '8.4.3',
  title: "Asitler, Bazlar ve Maddenin Isı ile Etkileşimi",
  unitCode: '8.4',
  unitTitle: "4. Ünite: Madde ve Endüstri",
  summary: "Asit ve baz özellikleri (pH cetveli, indikatörler), asit yağmurları, nötralleşme tepkimeleri, öz ısı (c), ısı alışverişi denklemleri (Q = m·c·Δt), saf maddelerin hal değişim grafikleri.",
  kazanimlar: ["F.8.4.4.1. Asit ve bazların genel özelliklerini ifade eder.","F.8.4.4.2. Asit ve bazlara günlük yaşamdan örnekler verir.","F.8.4.5.1. Maddelerin ısınmasının kütle, öz ısı ve sıcaklık değişimi ile ilişkisini açıklar."],
  stationTitle: "İstasyon: Asitler, Bazlar ve Maddenin Isı ile Etkileşimi",
  pageRef: "LGS MEBİ Fen Kitabı 8.4.3",
  objectives: ["F.8.4.4.1. Asit ve bazların genel özelliklerini ifade eder.","F.8.4.4.2. Asit ve bazlara günlük yaşamdan örnekler verir.","F.8.4.5.1. Maddelerin ısınmasının kütle, öz ısı ve sıcaklık değişimi ile ilişkisini açıklar."],
  m1: "Asit ile baz karıştırıldığında oluşan çözeltinin her zaman tamamen nötr (pH = 7) olacağı yanılgısı (Eğer asit miktarı veya derişimi fazlaysa karışım asidik kalır, baz fazlaysa bazik kalır; tam nötralleşme miktarlara bağlıdır).",
  m2: "Isı alan saf bir maddenin sıcaklığının sürekli olarak artmak zorunda olduğu yanılgısı (Saf maddeler erime, kaynama gibi hal değişimi esnasında ısı almaya devam etseler bile sıcaklıkları SABİT KALIR)."
});

export const g8_8_5_1 = createG8Section({
  code: '8.5.1',
  title: "Makaralar ve Kaldıraçlar",
  unitCode: '8.5',
  unitTitle: "5. Ünite: Basit Makineler",
  summary: "Basit makinelerin temel prensipleri (İş ve enerjiden kazanç OLMAMASI), sabit ve hareketli makaralar, palangalar, kaldıraç çeşitleri (destek, yük ve kuvvetin konumuna göre), kuvvet kazancı ve yoldan kayıp bağıntıları.",
  kazanimlar: ["F.8.5.1.1. Basit makinelerin sağladığı avantajları örnekler üzerinden açıklar.","F.8.5.1.2. Basit makinelerden yararlanarak günlük yaşamda iş kolaylığı sağlayacak bir düzenek tasarlar."],
  stationTitle: "İstasyon: Makaralar ve Kaldıraçlar",
  pageRef: "LGS MEBİ Fen Kitabı 8.5.1",
  objectives: ["F.8.5.1.1. Basit makinelerin sağladığı avantajları örnekler üzerinden açıklar.","F.8.5.1.2. Basit makinelerden yararlanarak günlük yaşamda iş kolaylığı sağlayacak bir düzenek tasarlar."],
  m1: "Basit makinelerin yapılan İŞTEN VEYA ENERJİDEN KAZANÇ sağladığı yanılgısı (MEB'in en büyük çeldiricisidir! Hiçbir basit makine işten veya enerjiden kazanç SAĞLAMAZ; sadece iş yapma kolaylığı sağlar. Kuvvetten kazanç varsa aynı oranda yoldan kayıp vardır).",
  m2: "Daha fazla parça veya makara içeren bir sistemin her zaman daha fazla kuvvet kazancı sağlayacağı yanılgısı (Kuvvet kazancı sistemin karmaşıklığına değil, yükü taşıyan ip sayısına ve kuvvet/yük kolu oranına bağlıdır)."
});

export const g8_8_5_2 = createG8Section({
  code: '8.5.2',
  title: "Eğik Düzlem, Çıkrık, Dişli Çarklar ve Kasnaklar",
  unitCode: '8.5',
  unitTitle: "5. Ünite: Basit Makineler",
  summary: "Eğik düzlemde kuvvet kazancı bağıntısı, çıkrık sistemlerinde kuvvet ve yük kolu oranları, vidanın eğik düzlem ilkesi, eş merkezli ve farklı merkezli dişli çarklar ile kasnaklarda dönme yönü ve tur sayısı hesapları.",
  kazanimlar: ["F.8.5.1.1. Basit makinelerin sağladığı avantajları örnekler üzerinden açıklar.","F.8.5.1.2. Çıkrık, eğik düzlem ve dişli çark düzeneklerini analiz eder."],
  stationTitle: "İstasyon: Eğik Düzlem, Çıkrık, Dişli Çarklar ve Kasnaklar",
  pageRef: "LGS MEBİ Fen Kitabı 8.5.2",
  objectives: ["F.8.5.1.1. Basit makinelerin sağladığı avantajları örnekler üzerinden açıklar.","F.8.5.1.2. Çıkrık, eğik düzlem ve dişli çark düzeneklerini analiz eder."],
  m1: "Eğik düzlemin yer ile yaptığı açı (eğim) sabitken boyu uzatıldığında uygulanması gereken en küçük kuvvetin değişeceği yanılgısı (Eğim açısı aynı kaldığı sürece yükü çıkarmak için gereken en küçük kuvvet AYNI KALIR; kuvveti azaltmak için eğim açısını küçültmek/boyu uzatıp yüksekliği sabit tutmak gerekir).",
  m2: "Çıkrıkta her zaman kuvvetten kayıp olabileceği yanılgısı (Kuvvetin uygulandığı çevirme kolunun yarıçapı R daima ipin sarıldığı silindirin yarıçapı r'den büyük tasarlandığı için çıkrıkta DAİMA KUVVETTEN KAZANÇ vardır)."
});

export const g8_8_6_1 = createG8Section({
  code: '8.6.1',
  title: "Besin Zinciri, Enerji Akışı ve Ekoloji Piramidi",
  unitCode: '8.6',
  unitTitle: "6. Ünite: Enerji Dönüşümleri ve Çevre Bilimi",
  summary: "Üreticiler, tüketiciler ve ayrıştırıcılar, besin ağı ilişkileri, ekoloji piramidinde aşağıdan yukarıya değişimler (%10 enerji aktarım kuralı, biyokütle azalması, biyolojik birikim artışı).",
  kazanimlar: ["F.8.6.1.1. Besin zincirindeki üretici, tüketici, ayrıştırıcı ilişkisini açıklar.","F.8.6.1.2. Ekoloji piramidindeki enerji aktarımını değerlendirir."],
  stationTitle: "İstasyon: Besin Zinciri, Enerji Akışı ve Ekoloji Piramidi",
  pageRef: "LGS MEBİ Fen Kitabı 8.6.1",
  objectives: ["F.8.6.1.1. Besin zincirindeki üretici, tüketici, ayrıştırıcı ilişkisini açıklar.","F.8.6.1.2. Ekoloji piramidindeki enerji aktarımını değerlendirir."],
  m1: "Ekoloji piramidinde yukarı doğru çıkıldıkça enerjinin arttığı veya değişmediği yanılgısı (Her basamakta enerjinin yaklaşık %90'ı canlının yaşamsal faaliyetlerinde harcanır veya ısı olarak çevreye yayılır; sadece %10'u bir üst basamağa aktarılır).",
  m2: "Ayrıştırıcıların (mantarlar ve bakteriler) sadece en üst basamakta bulunduğu veya besin piramidinin bir parçası olmadığı yanılgısı (Ayrıştırıcılar piramidin TÜM BASAMAKLARINDA yer alır; ölü organik atıkları inorganik maddelere çevirerek üreticilere sunarlar)."
});

export const g8_8_6_2 = createG8Section({
  code: '8.6.2',
  title: "Fotosentez, Hücresel Solunum ve Madde Döngüleri",
  unitCode: '8.6',
  unitTitle: "6. Ünite: Enerji Dönüşümleri ve Çevre Bilimi",
  summary: "Fotosentez denklemi (Karbondioksit + Su + Işık -> Glikoz + Oksijen), fotosentez hızına etki eden faktörler (Işık rengi, CO2, su, sıcaklık), hücresel solunum (oksijenli ve oksijensiz fermantasyon), karbon, su ve azot döngüleri.",
  kazanimlar: ["F.8.6.2.1. Fotosentezin canlılar için önemini açıklar.","F.8.6.2.2. Fotosentez hızını etkileyen faktörleri değerlendirir.","F.8.6.3.1. Canlılarda solunumun önemini açıklar."],
  stationTitle: "İstasyon: Fotosentez, Hücresel Solunum ve Madde Döngüleri",
  pageRef: "LGS MEBİ Fen Kitabı 8.6.2",
  objectives: ["F.8.6.2.1. Fotosentezin canlılar için önemini açıklar.","F.8.6.2.2. Fotosentez hızını etkileyen faktörleri değerlendirir.","F.8.6.3.1. Canlılarda solunumun önemini açıklar."],
  m1: "Bitkilerin sadece gündüz fotosentez, gece ise solunum yaptığı yanılgısı (Bitkiler de dahil olmak üzere canlı hücreler GECE VE GÜNDÜZ 24 SAAT KESİNTİSİZ SOLUNUM YAPAR; fotosentez ise sadece ışıklı ortamda gerçekleşir).",
  m2: "Yeşil bitkilerin en hızlı yeşil ışıkta fotosentez yaptığı yanılgısı (Klorofil yeşil ışığın çoğunu yansıttığı için bitkiler yeşil görünür; bu yüzden en yavaş YEŞİL ışıkta, en hızlı MOR/MAVİ ve KIRMIZI ışıkta fotosentez yaparlar!)."
});

export const g8_8_7_1 = createG8Section({
  code: '8.7.1',
  title: "Elektrik Yükleri, Elektriklenme ve Elektroskop",
  unitCode: '8.7',
  unitTitle: "7. Ünite: Elektrik Yükleri ve Elektrik Enerjisi",
  summary: "Pozitif, negatif ve nötr cisim tanımları, protonların çekirdekte sabit olup yalnız elektronların hareket etmesi, sürtünme, dokunma ve etki ile elektriklenme kuralları, elektroskop ile yük tayini.",
  kazanimlar: ["F.8.7.1.1. Elektrik yüklerini sınıflandırarak aynı ve farklı cins yüklerin birbirine etkisini açıklar.","F.8.7.1.2. Elektriklenme çeşitlerini fark eder.","F.8.7.2.1. Elektroskopun çalışma prensibini açıklar."],
  stationTitle: "İstasyon: Elektrik Yükleri, Elektriklenme ve Elektroskop",
  pageRef: "LGS MEBİ Fen Kitabı 8.7.1",
  objectives: ["F.8.7.1.1. Elektrik yüklerini sınıflandırarak aynı ve farklı cins yüklerin birbirine etkisini açıklar.","F.8.7.1.2. Elektriklenme çeşitlerini fark eder.","F.8.7.2.1. Elektroskopun çalışma prensibini açıklar."],
  m1: "Nötr cisimlerin içerisinde hiç elektrik yükü bulunmadığı yanılgısı (Nötr bir cisimde pozitif (+) ve negatif (-) yük sayıları BİRBİRİNE EŞİTTİR; 'yüksüz' demek yük yok demek değil, net yük sıfır demektir).",
  m2: "Elektriklenme sırasında pozitif yüklerin (protonların) bir cisimden diğerine aktığı yanılgısı (Pozitif yükler atom çekirdeğinde sabittir ve ASLA hareket etmez; hareket eden ve cisimler arasında alınıp verilen yalnızca NEGATİF ELEKTRONLARDIR!)."
});

export const g8_8_7_2 = createG8Section({
  code: '8.7.2',
  title: "Topraklama ve Elektrik Enerjisinin Dönüşümü",
  unitCode: '8.7',
  unitTitle: "7. Ünite: Elektrik Yükleri ve Elektrik Enerjisi",
  summary: "Topraklama mekanizması ve elektron transfer yönü, elektrik enerjisinin ısı, ışık ve hareket enerjisine dönüşümü, elektrik motoru ve jeneratör çalışma ilkeleri, sigortalar ve elektrik güvenliği.",
  kazanimlar: ["F.8.7.2.2. Topraklamanın önemini açıklar.","F.8.7.3.1. Elektrik enerjisinin ısı ve ışık enerjisine dönüşümünü inceler.","F.8.7.3.2. Elektrik enerjisinin hareket enerjisine, hareket enerjisinin elektrik enerjisine dönüşümünü kavrar."],
  stationTitle: "İstasyon: Topraklama ve Elektrik Enerjisinin Dönüşümü",
  pageRef: "LGS MEBİ Fen Kitabı 8.7.2",
  objectives: ["F.8.7.2.2. Topraklamanın önemini açıklar.","F.8.7.3.1. Elektrik enerjisinin ısı ve ışık enerjisine dönüşümünü inceler.","F.8.7.3.2. Elektrik enerjisinin hareket enerjisine, hareket enerjisinin elektrik enerjisine dönüşümünü kavrar."],
  m1: "Topraklanan pozitif yüklü bir cisimden toprağa pozitif yük aktığı yanılgısı (Pozitif yükler hareket etmez; pozitif cisim toprağa bağlandığında TOPRAKTAN CİSME elektron akar ve cismi nötrler; negatif cisim toprağa bağlandığında ise cisimden toprağa elektron akar).",
  m2: "Elektrik enerjisinin santrallerde hiçlikten yoktan var edildiği yanılgısı (Enerji yoktan var edilemez; suyun, rüzgârın veya buharın hareket enerjisi jeneratörler yardımıyla elektrik enerjisine dönüştürülür)."
});
