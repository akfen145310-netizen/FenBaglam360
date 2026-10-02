const fs = require('fs');
const path = require('path');
const g8Curriculum = require('../src/data/grade8/curriculumData.json');

console.log('Enhancing grade8Sections.ts with 10 FillInBlanks and Neler Öğrenildi...');

let sectionsCode = `// 8. Sınıf Fen Bilimleri (LGS) Maarif Modeli - 7 Ünite & 17 Alt Konu
// "8. sınıf konular" (MEBİ LGS Konu Özeti, Kavram Yanılgıları, Çeldiriciler, Başucu Notları)
import { SectionContent, FillInBlankQuestion } from '../../types';
import { unit8_1_1_ContextQuestions } from './unit1_section1_questions';
import { generateGrade8ContextQuestions } from './grade8MisconceptionBank';

function generate10Blanks(code: string, title: string, summary: string, m1: string, m2: string): FillInBlankQuestion[] {
  const blanks: FillInBlankQuestion[] = [
    {
      id: \`fib-\${code}-1\`,
      number: 1,
      baglam: \`\${title} konusundaki kontrollü deneyde sonucun doğrudan bağlı olduğu faktör incelenmiştir.\`,
      soruKoku: 'Bilimsel bir araştırmada sonucu doğrudan belirleyen ve araştırmacı tarafından kasıtlı olarak değiştirilen faktöre .................................... değişken denir.',
      blankAnswer: 'bağımsız',
      acceptableAnswers: ['bağımsız', 'bağımsız değişken', 'bagimsiz'],
      explanation: 'Kontrollü deneylerde tek bir faktör (bağımsız değişken) değiştirilir.',
      wordBankHint: ['bağımsız', 'bağımlı', 'kontrol', 'sabit']
    },
    {
      id: \`fib-\${code}-2\`,
      number: 2,
      baglam: \`\${title} ünitesinde yaygın bir yanılgı olan "\${m1}" düşüncesi irdelenmiştir.\`,
      soruKoku: \`\${title} olgusunda doğru bilimsel gerçeğe göre olaylar \${summary.slice(0, 45)}... prensibine göre .................................... bir düzenle gerçekleşir.\`,
      blankAnswer: 'kusursuz',
      acceptableAnswers: ['kusursuz', 'düzenli', 'hassas', 'kusursuz bir'],
      explanation: 'Doğadaki fiziksel yasalar hassas bir ölçü ve nizam içerir.',
      wordBankHint: ['kusursuz', 'rastgele', 'düzensiz', 'karmaşık']
    },
    {
      id: \`fib-\${code}-3\`,
      number: 3,
      baglam: \`\${title} sürecinde ölçülen parametrelerin birbiriyle ilişkisi değerlendirilmiştir.\`,
      soruKoku: 'Deneyde bağımsız değişkene bağlı olarak değişen ve ölçümü yapılan değişkene .................................... değişken adı verilir.',
      blankAnswer: 'bağımlı',
      acceptableAnswers: ['bağımlı', 'bağımlı değişken', 'bagimli'],
      explanation: 'Bağımsız değişkenin etkisiyle ölçülen sonuç bağımlı değişkendir.',
      wordBankHint: ['bağımlı', 'bağımsız', 'kontrol', 'model']
    },
    {
      id: \`fib-\${code}-4\`,
      number: 4,
      baglam: \`MEB'in LGS sınavlarında \${title} ile ilgili hazırladığı sorularda çeldiricilere dikkat edilmelidir.\`,
      soruKoku: \`Sınavda öğrencilerin en sık yanıldığı "\${m1.slice(0, 40)}..." iddiası bilimsel bir .................................... olarak kabul edilir.\`,
      blankAnswer: 'kavram yanılgısı',
      acceptableAnswers: ['kavram yanılgısı', 'yanılgı', 'kavram yanilgisi'],
      explanation: 'MEBİ LGS dokümanlarında bu durum kavram yanılgısı olarak tanımlanmıştır.',
      wordBankHint: ['kavram yanılgısı', 'bilimsel yasa', 'hipotez', 'teori']
    },
    {
      id: \`fib-\${code}-5\`,
      number: 5,
      baglam: \`\${title} kapsamında elde edilen ölçüm verileri analiz edilmiştir.\`,
      soruKoku: 'Deney boyunca değeri değiştirilmeyen ve sabit tutulan etkenlere .................................... değişken denir.',
      blankAnswer: 'kontrol',
      acceptableAnswers: ['kontrol', 'kontrol edilen', 'sabit tutulan', 'kontrol değişkeni'],
      explanation: 'Kontrollü deneylerde diğer tüm şartlar sabit tutulur.',
      wordBankHint: ['kontrol', 'bağımsız', 'bağımlı', 'ölçüm']
    },
    {
      id: \`fib-\${code}-6\`,
      number: 6,
      baglam: \`\${title} konusunda ikinci kritik yanılgı olan "\${m2.slice(0, 40)}..." incelenmiştir.\`,
      soruKoku: 'Bilimsel gözlemler, bu sürecin rastgele değil matematiksel ve fiziksel .................................... doğrultusunda işlediğini kanıtlar.',
      blankAnswer: 'kurallar',
      acceptableAnswers: ['kurallar', 'kanunlar', 'yasalar', 'ilkeler'],
      explanation: 'Tüm doğa olayları evrensel bilimsel kurallara tabidir.',
      wordBankHint: ['kurallar', 'tesadüfler', 'belirsizlikler', 'tahminler']
    },
    {
      id: \`fib-\${code}-7\`,
      number: 7,
      baglam: \`\${title} ünitesindeki grafikler değerlendirildiğinde...\`,
      soruKoku: 'Grafik ekseninde zaman ilerledikçe sistemin dengesini koruması kâinattaki muazzam .................................... ve nizamı gösterir.',
      blankAnswer: 'ölçü',
      acceptableAnswers: ['ölçü', 'denge', 'nizam', 'ahenk'],
      explanation: 'Maarif modelinde her varlık hassas bir ölçü ve hikmetle tanzim edilmiştir.',
      wordBankHint: ['ölçü', 'kaos', 'karmaşa', 'rastlantı']
    },
    {
      id: \`fib-\${code}-8\`,
      number: 8,
      baglam: \`Günlük hayatta \${title} prensibiyle çalışan araçlar tasarlanmaktadır.\`,
      soruKoku: 'Mühendisler insan yaşamını kolaylaştırmak amacıyla bu fen ilkesini kullanarak .................................... tasarımlar geliştirir.',
      blankAnswer: 'teknolojik',
      acceptableAnswers: ['teknolojik', 'biyoteknolojik', 'mekanik', 'verimli'],
      explanation: 'Fen prensipleri doğrudan teknoloji ve mühendisliğe uygulanır.',
      wordBankHint: ['teknolojik', 'geleneksel', 'teorik', 'soyut']
    },
    {
      id: \`fib-\${code}-9\`,
      number: 9,
      baglam: \`\${title} deneyinde hata payını en aza indirmek için...\`,
      soruKoku: 'Ölçümlerin doğruluğundan emin olmak için deney basamakları birden fazla kez .................................... edilmelidir.',
      blankAnswer: 'tekrar',
      acceptableAnswers: ['tekrar', 'test', 'kontrol'],
      explanation: 'Bilimsel güvenilirlik deneyin tekrarlanabilirliği ile artar.',
      wordBankHint: ['tekrar', 'iptal', 'tahmin', 'ihmal']
    },
    {
      id: \`fib-\${code}-10\`,
      number: 10,
      baglam: \`\${title} konusu LGS soru modelleriyle sentezlendiğinde...\`,
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
      text: \`\${params.title} konusunda öğrendiklerimizi LGS ve Türkiye Yüzyılı Maarif Modeli çerçevesinde pekiştiriyoruz.\`,
      keyPoints: [
        'Konuyla ilgili temel bilimsel kurallar ve kontrollü deney şartları dikkate alınmalıdır.',
        \`Kavram yanılgısına dikkat: \${params.m1}\`,
        'Deney ve gözlem sonuçları grafik veya tablo üzerinden analiz edilmelidir.',
        'Doğadaki mükemmel tanzim, ölçü ve hikmet eksenli nedensellik bağları irdelenmelidir.'
      ]
    },
    onDegerlendirme: [
      {
        id: \`od-\${params.code}-1\`,
        question: \`\${params.title} konusu günlük yaşamda hangi olaylarla doğrudan ilişkilidir?\`,
        answer: 'Günlük hayatta karşılaştığımız doğal süreçler ve teknolojik araçlar bu bilimsel ilkeler doğrultusunda kusursuz bir düzenle çalışmaktadır.'
      }
    ],
    hazirlik: {
      question: \`\${params.title} olgusu olmasaydı çevremizde ve yaşamımızda ne gibi aksaklıklar meydana gelirdi?\`,
      answer: 'Canlıların ekolojik dengesi, mevsimsel yaşam döngüsü veya fiziksel sistemlerin işleyişi bozulurdu.'
    },
    merak: {
      question: \`Bilim insanları \${params.title} hakkındaki temel ilkeleri hangi deney ve gözlemlerle keşfetmiştir?\`,
      answer: 'Kontrollü değişken deneyleri, hassas ölçümler ve matematiksel modellemeler sayesinde keşfedilmiştir.'
    },
    hikmetStages: [
      {
        stage: 1,
        name: '1. Varlığı Tanıt',
        concept: params.title,
        text: \`\${params.title}, kâinattaki muazzam düzenin ve hassas dengelerin bir parçasıdır.\`
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
      id: \`dda-\${params.code}-1\`,
      statement: \`\${params.title} konusunda: \${params.summary.slice(0, 100)}...\`,
      correctDecision: 'D',
      reason: 'Bilimsel kanıtlar ve kontrollü deneyler bu ilkeyi doğrulamaktadır.',
      ifTrue: { exit: 1, isCorrect: true, feedback: 'Tebrikler! Kavram yanılgısına düşmeden doğru çıkışa ulaştınız.' },
      ifFalse: { exit: 2, isCorrect: false, feedback: \`Dikkat: "\${params.m1}" yanılgısına dikkat etmelisiniz.\` }
    },
    biliyorumAnliyorumDusunuyorum: {
      biliyorum: \`\${params.title} konusuna ait temel kuralları ve kavram yanılgılarını (\${params.m1}) biliyorum.\`,
      anliyorum: \`Olayların sebep-sonuç ilişkilerini ve kontrollü deney şartlarını anlıyorum.\`,
      dusunuyorum: \`Doğadaki kusursuz tanzim, ölçü ve dengelerin hikmetini tefekkür ediyorum.\`
    },
    nelerOgrenildi: {
      title: \`\${params.title} - Bölüm Sonu Maarif Sentezi\`,
      ogrenilenKavramlar: params.kazanimlar,
      ozet: params.summary,
      kontrolSorulari: [
        {
          id: \`no-\${params.code}-1\`,
          soru: \`\${params.title} sürecinde en sık yapılan kavram yanılgısı (\${params.m1}) nasıl düzeltilmelidir?\`,
          cevap: \`Doğru bilimsel kural gereğince: \${params.summary}. Bu nedenle söz konusu yanılgıya düşülmemeli, kontrollü değişken şartlarına uyulmalıdır.\`
        }
      ]
    },
    contextQuestions: []
  };

  // 8. Sınıf Kavram Yanılgıları ve MEBİ Soru Havuzunu oluştur
  base.contextQuestions = generateGrade8ContextQuestions(base);
  return base;
}
`;

// Now create exports for each item
g8Curriculum.forEach(item => {
  const varName = 'g8_' + item.code.replace(/\./g, '_');
  const m1 = (item.misconceptions && item.misconceptions[0]) || 'Temel kavram yanılgısı';
  const m2 = (item.misconceptions && item.misconceptions[1]) || 'İkincil kavram yanılgısı';

  sectionsCode += `
export const ${varName} = createG8Section({
  code: '${item.code}',
  title: ${JSON.stringify(item.title)},
  unitCode: '${item.unitCode}',
  unitTitle: ${JSON.stringify(item.unitTitle)},
  summary: ${JSON.stringify(item.summary)},
  kazanimlar: ${JSON.stringify(item.kazanimlar)},
  stationTitle: ${JSON.stringify('İstasyon: ' + item.title)},
  pageRef: ${JSON.stringify('LGS MEBİ Fen Kitabı ' + item.code)},
  objectives: ${JSON.stringify(item.kazanimlar)},
  m1: ${JSON.stringify(m1)},
  m2: ${JSON.stringify(m2)}
});
`;
  if (item.code === '8.1.1') {
    sectionsCode += `${varName}.contextQuestions = unit8_1_1_ContextQuestions;\n`;
  }
});

fs.writeFileSync(
  path.join(__dirname, '../src/data/grade8/grade8Sections.ts'),
  sectionsCode,
  'utf-8'
);
console.log('Successfully saved enhanced grade8Sections.ts');
