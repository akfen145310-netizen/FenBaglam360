import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  Sparkles, 
  CheckCircle2, 
  XCircle, 
  HelpCircle, 
  ChevronRight, 
  ChevronLeft, 
  ShieldCheck, 
  Award, 
  BookOpen, 
  Info,
  RotateCcw
} from 'lucide-react';
import { SectionContent, ContextQuestion } from '../types';
import { useUserProgress } from '../context/UserProgressContext';

interface ContextQuestionsViewProps {
  section: SectionContent;
  onGoToMistakes: () => void;
}

export const ContextQuestionsView: React.FC<ContextQuestionsViewProps> = ({
  section,
  onGoToMistakes
}) => {
  const { recordAnswer } = useUserProgress();

  // Current question index in 0..19
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  // User answers per question id: 'A' | 'B' | 'C' | 'D'
  const [userAnswers, setUserAnswers] = useState<Record<string, 'A' | 'B' | 'C' | 'D'>>({});
  // Show quality audit card toggle per question id
  const [showQualityCard, setShowQualityCard] = useState<Record<string, boolean>>({});

  const questionsList = section.contextQuestions || [];
  const currentQ = questionsList[currentIndex] || questionsList[0];
  const totalQuestions = questionsList.length;

  if (totalQuestions === 0 || !currentQ) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center space-y-4">
        <p className="text-slate-600 font-semibold">Bu bölüm için henüz soru yüklenmedi.</p>
      </div>
    );
  }

  const handleSelectOption = (choice: 'A' | 'B' | 'C' | 'D') => {
    // If already answered this question, don't re-answer in normal mode
    if (userAnswers[currentQ.id]) return;

    const isCorrect = choice === currentQ.dogruCevap;
    setUserAnswers(prev => ({ ...prev, [currentQ.id]: choice }));

    recordAnswer({
      questionId: currentQ.id,
      sectionCode: section.code,
      sectionTitle: section.title,
      questionType: 'mcq',
      isCorrect,
      skill: currentQ.olculenBeceri,
      unitCode: section.unitCode,
      questionData: currentQ,
      userAnswer: choice
    });

    if (isCorrect) {
      confetti({
        particleCount: 35,
        spread: 50,
        origin: { y: 0.75 }
      });
    }
  };

  const answeredCount = Object.keys(userAnswers).length;
  const correctCount = Object.entries(userAnswers).filter(([qId, ans]) => {
    const q = section.contextQuestions.find(item => item.id === qId);
    return q && q.dogruCevap === ans;
  }).length;
  const wrongCount = answeredCount - correctCount;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 space-y-7">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-sky-900 via-indigo-950 to-slate-900 text-white rounded-2xl p-6 sm:p-7 shadow-md">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 text-sky-300 text-xs font-semibold">
              <span>{section.unitCode}</span>
              <span>•</span>
              <span>Bölüm {section.code}</span>
            </div>
            <h1 className="text-xl sm:text-2xl font-bold font-serif">
              20 Bağlam Temelli LGS Formatında Soru
            </h1>
            <p className="text-xs sm:text-sm text-sky-200/90 max-w-xl">
              Ezberden uzak, gerçek yaşam durumları ve deneylerle hazırlanmış 20/20 kalite denetimli sorular.
            </p>
          </div>

          {/* Quick Score Card */}
          <div className="flex items-center gap-3 bg-white/10 backdrop-blur-xs border border-white/20 px-4 py-3 rounded-xl self-start sm:self-auto">
            <div className="text-center">
              <div className="text-[11px] text-sky-200 font-medium">Doğru</div>
              <div className="text-lg font-bold text-emerald-400 font-mono">{correctCount}</div>
            </div>
            <div className="w-px h-8 bg-white/20" />
            <div className="text-center">
              <div className="text-[11px] text-sky-200 font-medium">Yanlış</div>
              <div className="text-lg font-bold text-rose-400 font-mono">{wrongCount}</div>
            </div>
            <div className="w-px h-8 bg-white/20" />
            <div className="text-center">
              <div className="text-[11px] text-sky-200 font-medium">İlerleme</div>
              <div className="text-lg font-bold text-white font-mono">{answeredCount}/20</div>
            </div>
          </div>
        </div>
      </div>

      {/* 20 Question Navigator Strip */}
      <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-xs space-y-2">
        <div className="flex items-center justify-between text-xs text-slate-500 font-semibold px-1">
          <span>Sorular (1 - 20):</span>
          <span>{Math.round((answeredCount / totalQuestions) * 100)}% Tamamlandı</span>
        </div>
        <div className="grid grid-cols-10 sm:grid-cols-20 gap-1.5">
          {section.contextQuestions.map((q, idx) => {
            const isAnswered = !!userAnswers[q.id];
            const isCorrect = isAnswered && userAnswers[q.id] === q.dogruCevap;
            const isCurrent = currentIndex === idx;

            return (
              <button
                key={q.id}
                onClick={() => setCurrentIndex(idx)}
                className={`h-9 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center justify-center ${
                  isCurrent
                    ? 'ring-2 ring-sky-500 ring-offset-1 z-10 scale-105'
                    : ''
                } ${
                  !isAnswered
                    ? 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    : isCorrect
                    ? 'bg-emerald-600 text-white'
                    : 'bg-rose-600 text-white'
                }`}
              >
                {idx + 1}
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Question Box */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 sm:p-7 space-y-6">
        {/* Top Badges */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-lg bg-sky-100 text-sky-900 font-bold text-xs font-mono">
              Soru {currentQ.number} / 20
            </span>
            <span className="px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-700 text-xs font-semibold">
              Kazanım: {currentQ.olculenKazanim}
            </span>
            <span className="px-2.5 py-0.5 rounded-md bg-amber-50 border border-amber-200 text-amber-800 text-xs font-medium">
              Beceri: {currentQ.olculenBeceri}
            </span>
          </div>

          <button
            onClick={() => setShowQualityCard(prev => ({ ...prev, [currentQ.id]: !prev[currentQ.id] }))}
            className="flex items-center gap-1.5 text-xs text-indigo-700 font-semibold hover:text-indigo-900 bg-indigo-50 px-2.5 py-1 rounded-lg transition-colors cursor-pointer"
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>20/20 Kalite Raporu</span>
          </button>
        </div>

        {/* 20/20 Quality Audit Modal / Panel */}
        {showQualityCard[currentQ.id] && (
          <div className="p-4 bg-indigo-50/60 rounded-xl border border-indigo-200 text-xs text-indigo-950 space-y-2 animate-in fade-in">
            <div className="font-bold flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <Award className="w-4 h-4 text-indigo-600" />
                Master Soru Denetim Formu (20 / 20 Tam Puan)
              </span>
              <button
                onClick={() => setShowQualityCard(prev => ({ ...prev, [currentQ.id]: false }))}
                className="text-slate-400 hover:text-slate-700 cursor-pointer"
              >
                Kapat ✕
              </button>
            </div>
            <div className="grid sm:grid-cols-2 gap-1.5 pt-1 text-[11px]">
              <div className="flex items-center gap-1 text-emerald-800">
                <span>✓</span> Gerçek yaşam ve bilimsel bağlama gömülü
              </div>
              <div className="flex items-center gap-1 text-emerald-800">
                <span>✓</span> Açık ve net soru kökü (Yönerge tam)
              </div>
              <div className="flex items-center gap-1 text-emerald-800">
                <span>✓</span> Ezberden uzak, akıl yürütme ve çıkarım gerektirir
              </div>
              <div className="flex items-center gap-1 text-emerald-800">
                <span>✓</span> Tek kesin ve tartışmasız doğru cevap
              </div>
              <div className="flex items-center gap-1 text-emerald-800">
                <span>✓</span> 5. sınıf seviyesine ve bilişsel düzeye tam uygun
              </div>
              <div className="flex items-center gap-1 text-emerald-800">
                <span>✓</span> Bilimsel olarak doğrulanmış, hatasız içerik
              </div>
            </div>
          </div>
        )}

        {/* Bağlam (Context Scenario) */}
        <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-1.5">
          <div className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
            <BookOpen className="w-3.5 h-3.5 text-sky-600" />
            Bağlam / Senaryo / Deney Verisi
          </div>
          <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-normal whitespace-pre-line">
            {currentQ.baglam}
          </p>
        </div>

        {/* Soru Kökü */}
        <div className="space-y-1">
          <p className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
            {currentQ.soruKoku}
          </p>
        </div>

        {/* Options (A, B, C, D) */}
        <div className="grid gap-2.5">
          {(['A', 'B', 'C', 'D'] as const).map(optionKey => {
            const optionText = currentQ.secenekler[optionKey];
            const isUserSelection = userAnswers[currentQ.id] === optionKey;
            const isAnswered = !!userAnswers[currentQ.id];
            const isCorrectOption = currentQ.dogruCevap === optionKey;

            let optionClass = 'border-slate-200 hover:border-slate-300 hover:bg-slate-50/80 text-slate-800';

            if (isAnswered) {
              if (isCorrectOption) {
                optionClass = 'border-emerald-500 bg-emerald-50 text-emerald-950 font-semibold shadow-xs';
              } else if (isUserSelection && !isCorrectOption) {
                optionClass = 'border-rose-500 bg-rose-50 text-rose-950';
              } else {
                optionClass = 'border-slate-200 bg-slate-50/50 text-slate-400 opacity-60';
              }
            }

            return (
              <button
                key={optionKey}
                disabled={isAnswered}
                onClick={() => handleSelectOption(optionKey)}
                className={`w-full text-left p-3.5 sm:p-4 rounded-xl border transition-all flex items-start gap-3 cursor-pointer ${optionClass}`}
              >
                <span
                  className={`w-7 h-7 rounded-lg text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5 ${
                    isAnswered && isCorrectOption
                      ? 'bg-emerald-600 text-white'
                      : isAnswered && isUserSelection && !isCorrectOption
                      ? 'bg-rose-600 text-white'
                      : 'bg-slate-100 text-slate-700'
                  }`}
                >
                  {optionKey}
                </span>
                <span className="text-xs sm:text-sm leading-relaxed flex-1">
                  {optionText}
                </span>

                {isAnswered && isCorrectOption && (
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                )}
                {isAnswered && isUserSelection && !isCorrectOption && (
                  <XCircle className="w-5 h-5 text-rose-600 flex-shrink-0" />
                )}
              </button>
            );
          })}
        </div>

        {/* Detailed Solution (ÇÖZÜM) */}
        {userAnswers[currentQ.id] && (
          <div className="p-4 rounded-xl border border-sky-200 bg-sky-50/50 space-y-2 animate-in fade-in">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-sky-950 flex items-center gap-1.5">
                <Info className="w-4 h-4 text-sky-600" />
                Ayrıntılı Çözüm & Fen Analizi (Doğru Yanıt: {currentQ.dogruCevap})
              </span>
              {userAnswers[currentQ.id] === currentQ.dogruCevap ? (
                <span className="text-[11px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
                  Harika! Doğru Yaptın
                </span>
              ) : (
                <span className="text-[11px] font-bold text-rose-700 bg-rose-100 px-2 py-0.5 rounded-full">
                  Eksiklerine Kaydedildi
                </span>
              )}
            </div>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
              {currentQ.cozum}
            </p>
          </div>
        )}

        {/* Question Navigation Controls */}
        <div className="flex items-center justify-between pt-3 border-t border-slate-100">
          <button
            disabled={currentIndex === 0}
            onClick={() => setCurrentIndex(prev => Math.max(0, prev - 1))}
            className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-100 hover:bg-slate-200 disabled:opacity-40 transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Önceki Soru</span>
          </button>

          <span className="text-xs font-mono text-slate-500 font-semibold">
            {currentIndex + 1} / {totalQuestions}
          </span>

          {currentIndex < totalQuestions - 1 ? (
            <button
              onClick={() => setCurrentIndex(prev => Math.min(totalQuestions - 1, prev + 1))}
              className="px-4 py-2 rounded-xl text-xs font-semibold bg-sky-600 hover:bg-sky-700 text-white transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
            >
              <span>Sonraki Soru</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={onGoToMistakes}
              className="px-4 py-2 rounded-xl text-xs font-semibold bg-rose-600 hover:bg-rose-700 text-white transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Eksiklerini İncele</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
