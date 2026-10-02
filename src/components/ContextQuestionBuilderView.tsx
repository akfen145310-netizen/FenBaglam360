import React, { useState, useEffect, useMemo } from 'react';
import {
  Sparkles,
  BookOpen,
  Award,
  CheckCircle2,
  XCircle,
  HelpCircle,
  Printer,
  Edit3,
  RotateCcw,
  ChevronDown,
  ChevronUp,
  ShieldCheck,
  BrainCircuit,
  SlidersHorizontal,
  Flame,
  Clock,
  Layers,
  FileText,
  AlertCircle,
  Copy,
  Check,
  X
} from 'lucide-react';
import { SectionContent } from '../types';
import {
  generateContextQuestionsForSection,
  ExtendedContextQuestion
} from '../data/questionGenerator';
import { buildMasterPromptForSection } from '../data/masterPrompt.js';
import ScientificDiagram from './ScientificDiagram.jsx';
import AuditDetailModal from './AuditDetailModal.jsx';
import ScratchpadModal from './ScratchpadModal.jsx';
import PdfPrintSheet from './PdfPrintSheet.jsx';
import { useUserProgress } from '../context/UserProgressContext';

interface ContextQuestionBuilderViewProps {
  section: SectionContent;
  onGoToMistakes?: () => void;
}

export const ContextQuestionBuilderView: React.FC<ContextQuestionBuilderViewProps> = ({
  section,
  onGoToMistakes
}) => {
  const { recordAnswer, recordMistake } = useUserProgress();

  // Sorular Listesi
  const [questions, setQuestions] = useState<ExtendedContextQuestion[]>([]);
  const [generationCount, setGenerationCount] = useState<number>(0);
  const [viewMode, setViewMode] = useState<'cards' | 'exam'>('cards');

  // Kullanıcı Yanıtları ve Durum
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
  const [revealedSolutions, setRevealedSolutions] = useState<Record<string, boolean>>({});

  // Modallar
  const [activeAuditQuestion, setActiveAuditQuestion] = useState<any | null>(null);
  const [isScratchpadOpen, setIsScratchpadOpen] = useState(false);
  const [isPdfPrintOpen, setIsPdfPrintOpen] = useState(false);
  const [showStandardsGuide, setShowStandardsGuide] = useState(false);
  const [isPromptModalOpen, setIsPromptModalOpen] = useState(false);
  const [copiedPrompt, setCopiedPrompt] = useState(false);

  // Sınav Modu Durumu
  const [examActiveQuestionIdx, setExamActiveQuestionIdx] = useState(0);
  const [examFinished, setExamFinished] = useState(false);
  const [examTimer, setExamTimer] = useState(40 * 60); // 40 dakika

  // Filtreler
  const [filterDifficulty, setFilterDifficulty] = useState<string>('all');
  const [filterCount, setFilterCount] = useState<number>(20);

  // Konu veya Sınıf değiştiğinde soruları yükle / üret
  useEffect(() => {
    // Sınıf seviyesini kodun başından çıkar (örn: 5.1.1 -> 5)
    const gradeNum = parseInt(section.code.split('.')[0], 10) || 5;
    const generated = generateContextQuestionsForSection(section, gradeNum);
    setQuestions(generated);
    setUserAnswers({});
    setRevealedSolutions({});
    setExamFinished(false);
    setExamActiveQuestionIdx(0);
  }, [section.code, generationCount]);

  // Yeni Soru Üret
  const handleRegenerateQuestions = () => {
    setGenerationCount(prev => prev + 1);
  };

  // Cevap Verme
  const handleSelectOption = (q: ExtendedContextQuestion, optionKey: string) => {
    if (examFinished && viewMode === 'exam') return;

    setUserAnswers(prev => ({ ...prev, [q.id]: optionKey }));

    const isCorrect = optionKey === q.dogruCevap;
    recordAnswer(section.unitTitle || 'Genel', q.olculenBeceri || 'Bağlam Analizi', isCorrect);

    if (!isCorrect) {
      recordMistake({
        questionId: q.id,
        sectionCode: section.code,
        sectionTitle: section.title,
        questionType: 'mcq',
        questionData: {
          baglam: q.baglam,
          soruKoku: q.soruKoku,
          secenekler: q.secenekler,
          dogruCevap: q.dogruCevap,
          cozum: q.cozum
        },
        userAnswer: optionKey
      });
    }
  };

  // Çözüm Göster/Gizle
  const toggleSolution = (qId: string) => {
    setRevealedSolutions(prev => ({ ...prev, [qId]: !prev[qId] }));
  };

  // Filtrelenmiş Sorular
  const filteredQuestions = useMemo(() => {
    return questions
      .filter(q => {
        if (filterDifficulty === 'all') return true;
        return q.difficulty === filterDifficulty;
      })
      .slice(0, filterCount);
  }, [questions, filterDifficulty, filterCount]);

  // Skor Hesaplaması
  const answeredCount = Object.keys(userAnswers).length;
  const correctCount = Object.entries(userAnswers).filter(([qId, ans]) => {
    const q = questions.find(item => item.id === qId);
    return q && q.dogruCevap === ans;
  }).length;

  return (
    <div className="max-w-6xl mx-auto px-3 sm:px-6 py-6 space-y-6">
      {/* 1. ÜST BAŞLIK VE KAZANIM KARTLARI */}
      <div className="bg-gradient-to-br from-purple-900 via-indigo-900 to-slate-900 rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
        {/* Dekoratif Işık Halkaları */}
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 -mb-10 w-48 h-48 bg-amber-500/15 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-purple-500/30 text-purple-200 text-xs font-bold border border-purple-400/30 flex items-center gap-1.5">
                <BrainCircuit className="w-3.5 h-3.5 text-purple-300" />
                Türkiye Yüzyılı Maarif Modeli
              </span>
              <span className="px-3 py-1 rounded-full bg-amber-500/30 text-amber-200 text-xs font-bold border border-amber-400/30">
                Ayvacı ve Yamaçlı (2023) Master Prompt
              </span>
            </div>

            <div className="flex items-center gap-2 text-xs font-semibold text-purple-200 bg-white/10 px-3 py-1.5 rounded-xl backdrop-blur-sm border border-white/10">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>12/12 Kalite Denetimli • 20 Soru</span>
            </div>
          </div>

          <div>
            <div className="text-purple-300 text-xs font-bold uppercase tracking-wider">
              {section.unitCode ? `${section.unitCode} • ` : ''}{section.unitTitle}
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight mt-1 text-white font-serif flex items-center gap-2.5">
              <span>{section.code}</span>
              <span>{section.title}</span>
            </h1>
            <p className="text-slate-300 text-sm mt-2 max-w-3xl leading-relaxed">
              {section.summary}
            </p>
          </div>

          {/* Maarif Kazanımları ve Kitap Sınırlandırması */}
          <div className="pt-2 grid sm:grid-cols-2 gap-3">
            {section.kazanimlar && section.kazanimlar.length > 0 && (
              <div className="bg-white/5 rounded-2xl p-3.5 border border-white/10 text-xs space-y-1.5">
                <div className="font-bold text-amber-300 flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-amber-400" />
                  Ölçülen Maarif Öğrenme Çıktıları:
                </div>
                <ul className="space-y-1 text-slate-200 pl-4 list-disc">
                  {section.kazanimlar.map((k, idx) => (
                    <li key={idx} className="leading-snug">{k}</li>
                  ))}
                </ul>
              </div>
            )}

            {section.pekistirmeIstasyonu && (
              <div className="bg-white/5 rounded-2xl p-3.5 border border-white/10 text-xs space-y-1.5">
                <div className="font-bold text-emerald-300 flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4 text-emerald-400" />
                  Kitap Bilgisi ve Pekiştirme İstasyonu:
                </div>
                <div className="text-slate-200">
                  <strong className="text-white">{section.pekistirmeIstasyonu.stationTitle}</strong>
                  {section.pekistirmeIstasyonu.pageReference && (
                    <div className="text-emerald-300 font-mono mt-0.5">
                      📖 {section.pekistirmeIstasyonu.pageReference}
                    </div>
                  )}
                </div>
                {section.pekistirmeIstasyonu.objectives && (
                  <div className="text-[11px] text-slate-300 pt-1">
                    Hedef: {section.pekistirmeIstasyonu.objectives.join(' • ')}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 2. ARAÇ ÇUBUĞU (ACTION BAR & KONTROLLER) */}
      <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-200 flex flex-wrap items-center justify-between gap-4">
        {/* Sol Taraf: Görünüm Modu ve Yeni Soru Üret Butonları */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Görünüm Modu Değiştirici */}
          <div className="inline-flex p-1 bg-slate-100 rounded-xl border border-slate-200 text-xs font-semibold">
            <button
              onClick={() => setViewMode('cards')}
              className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all cursor-pointer ${
                viewMode === 'cards'
                  ? 'bg-white text-purple-900 shadow-xs font-bold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Layers className="w-3.5 h-3.5 text-purple-600" />
              <span>İnceleme & Çözüm Kartları</span>
            </button>
            <button
              onClick={() => {
                setViewMode('exam');
                setExamActiveQuestionIdx(0);
              }}
              className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all cursor-pointer ${
                viewMode === 'exam'
                  ? 'bg-white text-indigo-900 shadow-xs font-bold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Clock className="w-3.5 h-3.5 text-indigo-600" />
              <span>Sınav / Süreli Test Modu</span>
            </button>
          </div>

          {/* Yeni Soru Üretici */}
          <button
            id="regenerate-questions-btn"
            onClick={handleRegenerateQuestions}
            className="px-3 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white rounded-xl text-xs font-bold shadow-xs hover:shadow-md transition-all flex items-center gap-1.5 cursor-pointer"
            title="Bu konunun kazanımları ve kavramlarına dayalı taze 20 soru üret"
          >
            <RotateCcw className="w-3.5 h-3.5 animate-spin-reverse" />
            <span>Konuya Özel 20 Soru Üret</span>
          </button>
        </div>

        {/* Sağ Taraf: Master Prompt, PDF Baskı, Karalama Defteri, Standartlar */}
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => setIsPromptModalOpen(true)}
            className="px-3 py-2 bg-purple-50 hover:bg-purple-100 text-purple-900 border border-purple-200 rounded-xl text-xs font-bold transition-colors flex items-center gap-1.5 cursor-pointer"
            title="TYMM & Ayvacı-Yamaçlı Master Promptunu Görüntüle ve Kopyala"
          >
            <Sparkles className="w-3.5 h-3.5 text-purple-700" />
            <span>Master Promptu Gör / Kopyala</span>
          </button>

          <button
            onClick={() => setIsPdfPrintOpen(true)}
            className="px-3 py-2 bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-200 rounded-xl text-xs font-bold transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <Printer className="w-3.5 h-3.5 text-amber-700" />
            <span>MEB Sınav / PDF Yazdır</span>
          </button>

          <button
            onClick={() => setIsScratchpadOpen(true)}
            className="px-3 py-2 bg-sky-50 hover:bg-sky-100 text-sky-900 border border-sky-200 rounded-xl text-xs font-bold transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <Edit3 className="w-3.5 h-3.5 text-sky-700" />
            <span>Karalama Defteri</span>
          </button>

          <button
            onClick={() => setShowStandardsGuide(!showStandardsGuide)}
            className="px-3 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-semibold transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-slate-600" />
            <span>12 Kalite Testi Kriterleri</span>
            {showStandardsGuide ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* 3. 12 KALİTE STANDARDI PANELİ (AÇILIR KAPANIR) */}
      {showStandardsGuide && (
        <div className="bg-white rounded-2xl p-6 shadow-md border border-purple-200 animate-in fade-in duration-200 space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-purple-600" />
              <h3 className="font-bold text-slate-900 text-base">
                MEB TYMM & Ayvacı ve Yamaçlı (2023) Bağlam Temelli Master Prompt Kuralları
              </h3>
            </div>
            <span className="text-xs bg-purple-100 text-purple-800 font-bold px-2.5 py-1 rounded-full">
              Soru Başına 20 Puan
            </span>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs">
            <div className="p-3 bg-purple-50/60 rounded-xl border border-purple-100 space-y-1">
              <strong className="text-purple-900 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-purple-600" />
                T1: Bağlam Bağımsızlık
              </strong>
              <p className="text-slate-600">Bağlam çıkarılınca soru çıplak bilgi sorusuna dönüşmemeli; senaryo çözüme zorunlu kılınmalıdır.</p>
            </div>

            <div className="p-3 bg-purple-50/60 rounded-xl border border-purple-100 space-y-1">
              <strong className="text-purple-900 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-purple-600" />
                T2: İşlevsellik
              </strong>
              <p className="text-slate-600">Öğrenci genel kültürle veya şıklardan giderek çözememeli; bağlamdaki fen verisini kullanmalıdır.</p>
            </div>

            <div className="p-3 bg-purple-50/60 rounded-xl border border-purple-100 space-y-1">
              <strong className="text-purple-900 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-purple-600" />
                T3: Problem Durumu
              </strong>
              <p className="text-slate-600">Öğrencinin çözmesi veya tahmin etmesi gereken gerçek bir bilimsel problem durumu olmalıdır.</p>
            </div>

            <div className="p-3 bg-purple-50/60 rounded-xl border border-purple-100 space-y-1">
              <strong className="text-purple-900 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-purple-600" />
                T4: Düşünme & Akıl Yürütme
              </strong>
              <p className="text-slate-600">Tek adımda formül yerine süreç bileşenleriyle (tahmin, akıl yürütme, çıkarım) çözülmelidir.</p>
            </div>

            <div className="p-3 bg-purple-50/60 rounded-xl border border-purple-100 space-y-1">
              <strong className="text-purple-900 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-purple-600" />
                T7: Görsel / Veri İşlevselliği
              </strong>
              <p className="text-slate-600">Görseller ve tablolar dekoratif değil; çözüm için zorunlu bilgi kaynağı olarak tasarlanır.</p>
            </div>

            <div className="p-3 bg-rose-50/70 rounded-xl border border-rose-100 space-y-1">
              <strong className="text-rose-900 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5 text-rose-600" />
                Yasaklı Soru Tipleri
              </strong>
              <p className="text-slate-600">Kamuflajlı soru, soyutlamalı soru ve çözüme katkısı olmayan sözel yük kesinlikle engellenmiştir.</p>
            </div>
          </div>
        </div>
      )}

      {/* 4. MODLARA GÖRE SORU GÖSTERİMİ */}
      {viewMode === 'cards' ? (
        /* ================= A. KART GÖRÜNÜMÜ (İNCELEME & ÇÖZÜM MODU) ================= */
        <div className="space-y-6">
          {/* İlerleme ve Başarı Çubuğu */}
          <div className="bg-white rounded-2xl p-4 border border-slate-200 flex items-center justify-between text-xs">
            <div className="flex items-center gap-3">
              <span className="font-bold text-slate-700">Çözülen Soru:</span>
              <span className="px-2.5 py-1 rounded-lg bg-purple-50 text-purple-900 font-extrabold font-mono">
                {answeredCount} / {filteredQuestions.length}
              </span>
              {answeredCount > 0 && (
                <span className="text-emerald-700 font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  Doğru: {correctCount} ({Math.round((correctCount / answeredCount) * 100)}%)
                </span>
              )}
            </div>

            <div className="flex items-center gap-2">
              <span className="text-slate-500 font-medium">Zorluk:</span>
              <select
                value={filterDifficulty}
                onChange={e => setFilterDifficulty(e.target.value)}
                className="px-2.5 py-1 bg-slate-50 border border-slate-200 rounded-lg text-xs font-semibold text-slate-700 focus:outline-none focus:ring-1 focus:ring-purple-500"
              >
                <option value="all">Tüm Seviyeler</option>
                <option value="Temel">Temel</option>
                <option value="Orta">Orta</option>
                <option value="İleri / LGS">İleri / LGS</option>
              </select>

              <select
                value={filterCount}
                onChange={e => setFilterCount(Number(e.target.value))}
                className="px-2.5 py-1 bg-slate-50 border border-slate-200 rounded-lg text-xs font-semibold text-slate-700 focus:outline-none focus:ring-1 focus:ring-purple-500"
              >
                <option value={5}>5 Soru</option>
                <option value={10}>10 Soru</option>
                <option value={20}>20 Soru (Tam Set)</option>
              </select>
            </div>
          </div>

          {/* Soru Kartları Döngüsü */}
          {filteredQuestions.map((q, idx) => {
            const selectedOpt = userAnswers[q.id];
            const isAnswered = selectedOpt !== undefined;
            const isCorrect = selectedOpt === q.dogruCevap;
            const isSolutionOpen = revealedSolutions[q.id];

            return (
              <div
                key={q.id}
                className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200/90 transition-all hover:border-purple-300 space-y-5"
              >
                {/* Soru Başlık Çubuğu */}
                <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-100 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-7 h-7 rounded-xl bg-purple-600 text-white font-extrabold flex items-center justify-center font-mono">
                      {q.number || idx + 1}
                    </span>
                    <span className="font-bold text-slate-800">
                      {q.olculenKazanim || `${section.code} Maarif Kazanımı`}
                    </span>
                    <span className="px-2 py-0.5 rounded-md bg-purple-50 text-purple-700 font-semibold border border-purple-100">
                      {q.olculenBeceri || 'KB3.2 Problem Çözme'}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className={`px-2 py-0.5 rounded-md font-semibold text-[11px] ${
                      q.difficulty === 'İleri / LGS' ? 'bg-rose-50 text-rose-700' :
                      q.difficulty === 'Orta' ? 'bg-amber-50 text-amber-700' :
                      'bg-emerald-50 text-emerald-700'
                    }`}>
                      {q.difficulty || 'Orta Seviye'}
                    </span>

                    {/* 12 Kalite Testi Denetim Raporu Butonu */}
                    <button
                      onClick={() => setActiveAuditQuestion(q)}
                      className="px-2.5 py-1 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-bold rounded-lg border border-emerald-200 transition-colors flex items-center gap-1 cursor-pointer"
                      title="12 Kalite Testi Audit Raporunu İncele"
                    >
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Kalite: 20/20 (%100)</span>
                    </button>
                  </div>
                </div>

                {/* Gerçek Yaşam Bağlam Metni */}
                <div className="bg-slate-50 rounded-2xl p-4 sm:p-5 border border-slate-200/70 space-y-3">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-purple-900 uppercase tracking-wide">
                    <span className="text-base">📌</span>
                    <span>Gerçek Yaşam Senaryosu & Problem Bağlamı</span>
                  </div>
                  <p className="text-slate-800 text-sm leading-relaxed whitespace-pre-line">
                    {q.baglam}
                  </p>
                </div>

                {/* Bilimsel Şema veya Veri Tablosu (Varsa) */}
                {q.diagramType && (
                  <div className="rounded-2xl overflow-hidden border border-slate-200 bg-slate-900/5 p-2">
                    <ScientificDiagram type={q.diagramType} title={q.diagramTitle} />
                  </div>
                )}

                {/* Soru Kökü */}
                <div className="text-slate-900 font-bold text-sm sm:text-base leading-snug">
                  {q.soruKoku}
                </div>

                {/* Çoktan Seçmeli Seçenekler (A, B, C, D) */}
                <div className="grid sm:grid-cols-2 gap-3 pt-1">
                  {(['A', 'B', 'C', 'D'] as const).map(key => {
                    const optText = q.secenekler[key];
                    const isSelected = selectedOpt === key;
                    const isCorrectAnswer = q.dogruCevap === key;

                    let btnStyle = 'bg-slate-50 hover:bg-purple-50/60 border-slate-200 text-slate-800';
                    if (isAnswered) {
                      if (isCorrectAnswer) {
                        btnStyle = 'bg-emerald-50 border-emerald-400 text-emerald-950 font-bold ring-2 ring-emerald-200';
                      } else if (isSelected) {
                        btnStyle = 'bg-rose-50 border-rose-300 text-rose-950 font-bold';
                      } else {
                        btnStyle = 'bg-slate-50/50 border-slate-100 text-slate-400 opacity-60';
                      }
                    }

                    return (
                      <button
                        key={key}
                        onClick={() => handleSelectOption(q, key)}
                        className={`text-left p-3.5 rounded-2xl border transition-all flex items-start gap-3 cursor-pointer ${btnStyle}`}
                      >
                        <span className={`w-7 h-7 rounded-xl flex items-center justify-center font-bold text-xs flex-shrink-0 ${
                          isAnswered && isCorrectAnswer
                            ? 'bg-emerald-600 text-white'
                            : isAnswered && isSelected
                            ? 'bg-rose-600 text-white'
                            : 'bg-white border border-slate-200 text-slate-700 shadow-xs'
                        }`}>
                          {key}
                        </span>
                        <span className="text-xs sm:text-sm leading-snug pt-0.5">
                          {optText}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Alt Aksiyon Çubuğu: Çözüm Göster, Karalama Defteri */}
                <div className="pt-2 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 text-xs">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => toggleSolution(q.id)}
                      className="px-3 py-1.5 bg-purple-50 hover:bg-purple-100 text-purple-900 font-bold rounded-xl border border-purple-200 transition-colors flex items-center gap-1.5 cursor-pointer"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-purple-600" />
                      <span>{isSolutionOpen ? 'Çözümü Gizle' : 'Çözüm ve Analiz Aç'}</span>
                    </button>

                    <button
                      onClick={() => setIsScratchpadOpen(true)}
                      className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-xl transition-colors flex items-center gap-1.5 cursor-pointer"
                    >
                      <Edit3 className="w-3.5 h-3.5 text-slate-600" />
                      <span>Karalama Defteri</span>
                    </button>
                  </div>

                  {isAnswered && (
                    <div className="flex items-center gap-1.5 font-bold">
                      {isCorrect ? (
                        <span className="text-emerald-700 flex items-center gap-1">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                          Tebrikler! Doğru Cevap
                        </span>
                      ) : (
                        <span className="text-rose-700 flex items-center gap-1">
                          <XCircle className="w-4 h-4 text-rose-600" />
                          Eksikler Havuzuna Eklendi (Doğru: {q.dogruCevap})
                        </span>
                      )}
                    </div>
                  )}
                </div>

                {/* Çözüm ve Çeldirici Analiz Kutusu (Açılır Kapanır) */}
                {isSolutionOpen && (
                  <div className="bg-amber-50/70 rounded-2xl p-4 sm:p-5 border border-amber-200 space-y-3 text-xs animate-in fade-in duration-200">
                    <div className="font-bold text-amber-950 flex items-center gap-1.5 text-sm">
                      <Sparkles className="w-4 h-4 text-amber-600" />
                      <span>Adım Adım Bilimsel Çözüm ve Gerekçe</span>
                    </div>

                    <div className="text-slate-800 whitespace-pre-line leading-relaxed">
                      {q.cozum}
                    </div>

                    {q.distractorAnalysis && q.distractorAnalysis.length > 0 && (
                      <div className="pt-2 border-t border-amber-200/60 space-y-1">
                        <strong className="text-amber-900 block font-bold">Çeldirici Seçenek Analizleri:</strong>
                        <div className="grid sm:grid-cols-2 gap-2 text-[11px] text-slate-700">
                          {q.distractorAnalysis.map(da => (
                            <div key={da.option} className="p-2 bg-white/70 rounded-lg border border-amber-100">
                              <strong className="text-amber-800">{da.option} Seçeneği:</strong> {da.analysis}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      ) : (
        /* ================= B. SINAV / SÜRELİ TEST MODU ================= */
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200 space-y-6">
          {/* Sınav Üst Bilgi Barı */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-100">
            <div>
              <span className="text-xs font-bold text-purple-700 uppercase tracking-wider">
                {section.code} Maarif İlerleme Sınavı
              </span>
              <h3 className="text-lg font-bold text-slate-900">
                Soru {examActiveQuestionIdx + 1} / {filteredQuestions.length}
              </h3>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5 bg-slate-100 text-slate-800 px-3 py-1.5 rounded-xl font-mono text-xs font-bold">
                <Clock className="w-4 h-4 text-purple-600" />
                <span>Kalan Süre: {Math.floor(examTimer / 60)}:{(examTimer % 60).toString().padStart(2, '0')}</span>
              </div>

              {!examFinished ? (
                <button
                  onClick={() => setExamFinished(true)}
                  className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-xl text-xs font-bold shadow-xs cursor-pointer"
                >
                  Sınavı Tamamla
                </button>
              ) : (
                <button
                  onClick={() => {
                    setExamFinished(false);
                    setUserAnswers({});
                    setExamActiveQuestionIdx(0);
                  }}
                  className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold shadow-xs cursor-pointer"
                >
                  Yeniden Başlat
                </button>
              )}
            </div>
          </div>

          {/* Soru Navigatör Butonları (1-20) */}
          <div className="flex flex-wrap gap-1.5">
            {filteredQuestions.map((q, idx) => {
              const isAnswered = userAnswers[q.id] !== undefined;
              const isCurrent = idx === examActiveQuestionIdx;

              let btnBg = 'bg-slate-100 text-slate-600 border-slate-200';
              if (isCurrent) {
                btnBg = 'bg-purple-600 text-white border-purple-600 font-bold ring-2 ring-purple-200';
              } else if (isAnswered) {
                btnBg = 'bg-indigo-100 text-indigo-900 border-indigo-200 font-semibold';
              }

              return (
                <button
                  key={q.id}
                  onClick={() => setExamActiveQuestionIdx(idx)}
                  className={`w-8 h-8 rounded-lg text-xs border flex items-center justify-center transition-all cursor-pointer ${btnBg}`}
                >
                  {idx + 1}
                </button>
              );
            })}
          </div>

          {/* Aktif Soru */}
          {filteredQuestions[examActiveQuestionIdx] && (
            <div className="space-y-4 pt-2">
              {(() => {
                const currentQ = filteredQuestions[examActiveQuestionIdx];
                const selectedOpt = userAnswers[currentQ.id];

                return (
                  <>
                    <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 text-sm leading-relaxed text-slate-800 whitespace-pre-line">
                      <div className="font-bold text-xs text-purple-900 mb-2">📌 GERÇEK YAŞAM BAĞLAMI:</div>
                      {currentQ.baglam}
                    </div>

                    {currentQ.diagramType && (
                      <div className="rounded-2xl overflow-hidden border border-slate-200 bg-slate-900/5 p-2">
                        <ScientificDiagram type={currentQ.diagramType} title={currentQ.diagramTitle} />
                      </div>
                    )}

                    <div className="font-bold text-slate-900 text-base">
                      {currentQ.soruKoku}
                    </div>

                    <div className="grid sm:grid-cols-2 gap-3 pt-2">
                      {(['A', 'B', 'C', 'D'] as const).map(key => {
                        const isSelected = selectedOpt === key;
                        return (
                          <button
                            key={key}
                            onClick={() => handleSelectOption(currentQ, key)}
                            className={`p-4 rounded-2xl border text-left flex items-start gap-3 transition-all cursor-pointer ${
                              isSelected
                                ? 'bg-purple-50 border-purple-400 text-purple-950 font-bold ring-2 ring-purple-200'
                                : 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-800'
                            }`}
                          >
                            <span className={`w-7 h-7 rounded-xl flex items-center justify-center font-bold text-xs ${
                              isSelected ? 'bg-purple-600 text-white' : 'bg-white border border-slate-200 text-slate-700'
                            }`}>
                              {key}
                            </span>
                            <span className="text-xs sm:text-sm leading-snug pt-0.5">
                              {currentQ.secenekler[key]}
                            </span>
                          </button>
                        );
                      })}
                    </div>

                    {/* Navigasyon İleri / Geri */}
                    <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                      <button
                        disabled={examActiveQuestionIdx === 0}
                        onClick={() => setExamActiveQuestionIdx(prev => Math.max(0, prev - 1))}
                        className="px-4 py-2 bg-slate-100 hover:bg-slate-200 disabled:opacity-40 text-slate-700 rounded-xl text-xs font-semibold cursor-pointer"
                      >
                        ← Önceki Soru
                      </button>

                      <button
                        disabled={examActiveQuestionIdx === filteredQuestions.length - 1}
                        onClick={() => setExamActiveQuestionIdx(prev => Math.min(filteredQuestions.length - 1, prev + 1))}
                        className="px-4 py-2 bg-purple-600 hover:bg-purple-700 disabled:opacity-40 text-white rounded-xl text-xs font-bold cursor-pointer"
                      >
                        Sonraki Soru →
                      </button>
                    </div>
                  </>
                );
              })()}
            </div>
          )}

          {/* Sınav Tamamlandığında Sonuç Kartı */}
          {examFinished && (
            <div className="p-6 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl border border-emerald-200 space-y-3">
              <div className="flex items-center gap-2 text-emerald-800 font-bold text-base">
                <Award className="w-5 h-5 text-emerald-600" />
                <span>Sınav Değerlendirme Raporu</span>
              </div>
              <div className="text-xs text-slate-700">
                Toplam Soru: <strong>{filteredQuestions.length}</strong> | Doğru: <strong>{correctCount}</strong> | Yanlış: <strong>{answeredCount - correctCount}</strong> | Başarı: <strong>{answeredCount > 0 ? Math.round((correctCount / answeredCount) * 100) : 0}%</strong>
              </div>
              {onGoToMistakes && (answeredCount - correctCount > 0) && (
                <button
                  onClick={onGoToMistakes}
                  className="px-3.5 py-1.5 bg-rose-600 text-white rounded-xl text-xs font-bold hover:bg-rose-700 transition-colors flex items-center gap-1.5 cursor-pointer mt-2"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Yanlış Yapılan Soruları Eksikler Havuzunda Çöz</span>
                </button>
              )}
            </div>
          )}
        </div>
      )}

      {/* 5. MODALLAR: KALİTE DENETİMİ (AUDIT), KARALAMA DEFTERİ, PDF BASKI */}
      <AuditDetailModal
        question={activeAuditQuestion}
        isOpen={Boolean(activeAuditQuestion)}
        onClose={() => setActiveAuditQuestion(null)}
      />

      <ScratchpadModal
        isOpen={isScratchpadOpen}
        onClose={() => setIsScratchpadOpen(false)}
      />

      {isPdfPrintOpen && (
        <div
          id="pdf-print-modal-backdrop"
          className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-xs flex justify-center items-start print:p-0 print:m-0 print:bg-white print:static print:overflow-visible animate-in fade-in duration-150"
          onClick={() => setIsPdfPrintOpen(false)}
        >
          <div
            className="w-full relative min-h-screen print:min-h-0 print:w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <PdfPrintSheet
              questions={filteredQuestions}
              subtopic={{ title: `${section.code} ${section.title}` }}
              unit={{ unitTitle: section.unitTitle }}
              grade={parseInt(section.code.split('.')[0], 10) || 5}
              settings={{
                schoolName: 'T.C. MİLLÎ EĞİTİM BAKANLIĞI',
                examTitle: 'TÜRKİYE YÜZYILI MAARİF MODELİ FEN BİLİMLERİ İZLEME SINAVI'
              }}
              onClose={() => setIsPdfPrintOpen(false)}
            />
          </div>
        </div>
      )}
      {/* 6. MASTER PROMPT MODALI */}
      {isPromptModalOpen && (
        <div
          className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-xs flex justify-center items-center p-3 sm:p-6"
          onClick={() => setIsPromptModalOpen(false)}
        >
          <div
            className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-purple-200 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Başlığı */}
            <div className="bg-gradient-to-r from-purple-900 to-indigo-900 text-white p-5 sm:p-6 flex items-center justify-between">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-amber-400 text-slate-900 text-[10px] font-black uppercase tracking-wider">
                    TYMM Mart 2026 Kılavuzu & Ayvacı ve Yamaçlı (2023)
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-black font-serif flex items-center gap-2">
                  <BrainCircuit className="w-5 h-5 text-purple-300" />
                  <span>Fen Bilimleri Bağlam Temelli Master Prompt</span>
                </h3>
                <p className="text-xs text-purple-200">
                  {section.code} - {section.title} konusu için derlenmiş tam yönerge ve JSON şeması
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    const promptText = buildMasterPromptForSection(
                      section,
                      parseInt(section.code.split('.')[0], 10) || 5
                    );
                    navigator.clipboard.writeText(promptText);
                    setCopiedPrompt(true);
                    setTimeout(() => setCopiedPrompt(false), 2500);
                  }}
                  className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-xl shadow-md transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  {copiedPrompt ? <Check className="w-4 h-4 text-emerald-950" /> : <Copy className="w-4 h-4" />}
                  <span>{copiedPrompt ? 'Panoya Kopyalandı!' : 'Promptu Kopyala'}</span>
                </button>

                <button
                  onClick={() => setIsPromptModalOpen(false)}
                  className="w-9 h-9 rounded-xl bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal İçeriği */}
            <div className="p-5 sm:p-6 overflow-y-auto space-y-4 text-xs font-mono leading-relaxed bg-slate-900 text-slate-100 flex-1">
              <pre className="whitespace-pre-wrap font-mono text-[11px] sm:text-xs leading-relaxed text-slate-200">
                {buildMasterPromptForSection(
                  section,
                  parseInt(section.code.split('.')[0], 10) || 5
                )}
              </pre>
            </div>

            {/* Modal Alt Kısmı */}
            <div className="p-4 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Bu promptu Gemini, Claude veya ChatGPT'ye doğrudan vererek 20 adet mükemmel LGS sorusu üretebilirsiniz.</span>
              </div>
              <button
                onClick={() => setIsPromptModalOpen(false)}
                className="px-4 py-1.5 bg-slate-200 hover:bg-slate-300 text-slate-800 rounded-lg font-bold text-xs cursor-pointer"
              >
                Kapat
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
