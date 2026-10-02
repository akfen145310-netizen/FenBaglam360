export interface UserProfile {
  name: string;
  email: string;
  avatar: string;
  isGoogle: boolean;
  gradeLevel: number;
  schoolName?: string;
  className?: string;
  teacherReferenceCode?: string;
}

export interface JoinedStudent {
  id: string;
  studentName: string;
  schoolName: string;
  className: string; // e.g., "7/A", "5/B"
  email: string;
  joinedAt: string;
  referenceCodeUsed: string;
  totalAnswered: number;
  totalCorrect: number;
  mistakesCount: number;
  mistakesList: Array<{
    questionId: string;
    sectionCode: string;
    sectionTitle: string;
    questionText: string;
    questionType: string;
    userAnswer?: string;
    correctAnswer?: string;
    timestamp: number;
  }>;
}

export interface TeacherAccount {
  teacherId: string;
  teacherName: string;
  activeReferenceCode: string;
  generatedCodesHistory: string[];
}

export interface QuestionMistake {
  questionId: string;
  sectionCode: string;
  sectionTitle: string;
  questionType: 'blank' | 'mcq';
  questionData: any;
  userAnswer?: string;
  timestamp: number;
  attempts: number;
  resolved: boolean;
}

export interface UserStats {
  totalAnswered: number;
  totalCorrect: number;
  totalMistakes: number;
  resolvedMistakes: number;
  streakDays: number;
  lastActive: string;
  unitScores: Record<string, { answered: number; correct: number }>;
  skillScores: Record<string, { answered: number; correct: number }>;
}

export interface DDANode {
  id: string;
  statement: string;
  correctDecision: 'D' | 'Y';
  reason: string;
  ifTrue?: DDANode | { exit: number; isCorrect: boolean; feedback: string };
  ifFalse?: DDANode | { exit: number; isCorrect: boolean; feedback: string };
}

export interface QuestionAudit {
  gercekYasamBaglami: boolean;
  problemDurumu: boolean;
  fenBilgisiBaglamaGomulu: boolean;
  dusunmeGerektiriyor: boolean;
  ezberdenUzak: boolean;
  gorselVeriIslevsel: boolean;
  soruKokuAcik: boolean;
  tekDogruCevap: boolean;
  bilimselDogruluk: boolean;
  seviyeUygunlugu: boolean;
  kalitePuani: number; // e.g. 20
}

export interface ContextQuestion {
  id: string;
  number: number;
  baglam: string;
  soruKoku: string;
  secenekler: {
    A: string;
    B: string;
    C: string;
    D: string;
  };
  dogruCevap: 'A' | 'B' | 'C' | 'D';
  cozum: string;
  olculenKazanim: string;
  olculenBeceri: string;
  diagramType?: string;
  diagramTitle?: string;
  kaliteAudit: QuestionAudit;
}

export interface FillInBlankQuestion {
  id: string;
  number: number;
  baglam: string;
  soruKoku: string;
  blankAnswer: string;
  acceptableAnswers?: string[];
  explanation: string;
  wordBankHint?: string[];
}

export interface InteractiveLessonItem {
  id: string;
  question: string;
  subQuestions?: Array<{
    label: string;
    prompt: string;
    answer: string;
  }>;
  subPoints?: string[];
  answer: string;
}

export interface HikmetStage {
  stage: number;
  name: string; // e.g. "1. Varlığı Tanıt", "2. Parçalarını Göster"
  concept: string;
  text: string;
  questionToPonder?: string;
  answerToPonder?: string;
  analogies?: string[]; // fabrika, saat, ordu vb.
}

export interface KonuKavrami {
  terim: string;
  tanim: string;
  onemliNoktalar?: string[];
  ornekler?: string;
}

export interface KonuTablosu {
  baslik: string;
  sutunlar: string[];
  satirlar: string[][];
  dipnot?: string;
}

export interface BaglantiNoktasi {
  id: string;
  baslik: string;
  alan: string; // "Teknoloji", "Matematik", "Tarih", "Sağlık", "Coğrafya" vb.
  aciklama: string;
  soru?: string;
  cevap?: string;
}

export interface HaberKutusu {
  id: string;
  baslik: string;
  kaynak?: string;
  tarih?: string;
  ozet: string;
  soru: string;
  cevap: string;
}

export interface KontrolNoktasiSorusu {
  id: string;
  soru: string;
  tip: 'klasik' | 'coktan-secmeli' | 'dogru-yanlis';
  secenekler?: string[];
  dogruSecenek?: string;
  cevap: string;
  aciklama?: string;
}

export interface KontrolNoktasi {
  id: string;
  baslik: string;
  sorular: KontrolNoktasiSorusu[];
}

export interface BilgiBankasi {
  id: string;
  baslik: string;
  icerik: string;
  onemliNot?: string;
}

export interface PerformansGorevi {
  baslik: string;
  amac: string;
  surecAdimlari: string[];
  beklenenUrun: string;
  degerlendirmeKriterleri: string[];
}

export interface SectionContent {
  code: string; // e.g. "5.1.1"
  title: string;
  unitCode: string;
  unitTitle: string;
  summary: string;
  kazanimlar: string[];
  hatirlayalim: {
    text: string;
    keyPoints: string[];
  };
  onDegerlendirme: InteractiveLessonItem[];
  hazirlik: {
    question: string;
    answer: string;
  };
  merak: {
    question: string;
    answer: string;
  };
  kopru?: {
    title: string;
    content: string;
    question?: string;
    answer?: string;
  };
  // MEB Ders Kitabı Detaylı Konu Anlatımı, Tablolar, Bağlantı Noktaları ve Haberler
  konuAnlatimi?: {
    ozet?: string;
    kavramlar: KonuKavrami[];
    tablolar?: KonuTablosu[];
  };
  baglantiNoktalari?: BaglantiNoktasi[];
  haberler?: HaberKutusu[];
  kontrolNoktalari?: KontrolNoktasi[];
  bilgiBankasi?: BilgiBankasi[];
  performansGorevi?: PerformansGorevi;
  nelerOgrenildiSorulari?: Array<{
    id: string;
    soru: string;
    cevap: string;
    detayliCozum?: string;
  }>;
  hikmetStages: HikmetStage[];
  etkinlikler: Array<{
    id: string;
    title: string;
    type: string; // "Gözlem", "Görünen Boyut", "Model"
    materials: string[];
    steps: string[];
    questions: Array<{
      qId: string;
      label: string;
      prompt: string;
      answer: string;
    }>;
  }>;
  bilgiIstasyonlari: Array<{
    title: string;
    scientistOrMission: string;
    description: string;
    hikmetNote?: string;
  }>;
  dda: DDANode;
  biliyorumAnliyorumDusunuyorum: {
    biliyorum: string;
    anliyorum: string;
    dusunuyorum: string;
  };
  pekistirmeIstasyonu?: {
    stationTitle: string;
    pageReference?: string;
    summaryText: string;
    targetSkills: string[];
  };
  nelerOgrenildi?: {
    title: string;
    ogrenilenKavramlar: string[];
    ozet: string;
    kontrolSorulari: Array<{
      id: string;
      soru: string;
      cevap: string;
    }>;
  };
  sonrakiKonu?: {
    code: string;
    title: string;
  };
  fillInBlanks: FillInBlankQuestion[]; // Exactly 10 questions
  contextQuestions: ContextQuestion[]; // Exactly 20 questions
}

export interface UnitData {
  id: string;
  unitNumber: number;
  title: string;
  description: string;
  color: string;
  bookNumber?: 1 | 2;
  sections: SectionContent[];
}
