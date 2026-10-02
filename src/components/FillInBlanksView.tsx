import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  HelpCircle, 
  CheckCircle2, 
  XCircle, 
  Sparkles, 
  RotateCcw, 
  ArrowRight, 
  Lightbulb, 
  Check, 
  Award 
} from 'lucide-react';
import { SectionContent, FillInBlankQuestion } from '../types';
import { useUserProgress } from '../context/UserProgressContext';

interface FillInBlanksViewProps {
  section: SectionContent;
  onGoToMCQ: () => void;
}

export const FillInBlanksView: React.FC<FillInBlanksViewProps> = ({
  section,
  onGoToMCQ
}) => {
  const { recordAnswer } = useUserProgress();

  // User input answers per question id
  const [userInputs, setUserInputs] = useState<Record<string, string>>({});
  // Status per question: 'unanswered' | 'correct' | 'wrong'
  const [statuses, setStatuses] = useState<Record<string, 'unanswered' | 'correct' | 'wrong'>>({});
  // Revealed hints / explanations
  const [revealedExplanations, setRevealedExplanations] = useState<Record<string, boolean>>({});

  const handleInputChange = (id: string, value: string) => {
    setUserInputs(prev => ({ ...prev, [id]: value }));
  };

  const handleWordBankSelect = (id: string, word: string) => {
    setUserInputs(prev => ({ ...prev, [id]: word }));
  };

  const checkAnswer = (q: FillInBlankQuestion) => {
    const rawInput = (userInputs[q.id] || '').trim().toLowerCase();
    const isCorrect = (q.acceptableAnswers || [q.blankAnswer]).some(ans => ans.trim().toLowerCase() === rawInput);

    setStatuses(prev => ({
      ...prev,
      [q.id]: isCorrect ? 'correct' : 'wrong'
    }));

    setRevealedExplanations(prev => ({
      ...prev,
      [q.id]: true
    }));

    recordAnswer({
      questionId: q.id,
      sectionCode: section.code,
      sectionTitle: section.title,
      questionType: 'blank',
      isCorrect,
      unitCode: section.unitCode,
      questionData: q,
      userAnswer: userInputs[q.id] || ''
    });

    if (isCorrect) {
      confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.8 }
      });
    }
  };

  const resetQuestion = (id: string) => {
    setUserInputs(prev => ({ ...prev, [id]: '' }));
    setStatuses(prev => ({ ...prev, [id]: 'unanswered' }));
    setRevealedExplanations(prev => ({ ...prev, [id]: false }));
  };

  const blanksList = section.fillInBlanks || (section as any).fillInBlankQuestions || [];
  const totalQuestions = blanksList.length;
  const correctCount = Object.values(statuses).filter(s => s === 'correct').length;
  const answeredCount = Object.values(statuses).filter(s => s !== 'unanswered').length;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 space-y-8">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-emerald-800 to-teal-900 text-white rounded-2xl p-6 sm:p-7 shadow-md">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 text-emerald-300 text-xs font-semibold">
              <span>{section.unitCode}</span>
              <span>•</span>
              <span>Bölüm {section.code}</span>
            </div>
            <h1 className="text-xl sm:text-2xl font-bold font-serif">
              Bağlam Temelli 10 Boşluk Doldurma (Biliyorum)
            </h1>
            <p className="text-xs sm:text-sm text-emerald-100/90 max-w-xl">
              Gerçek yaşam durumlarını ve bilimsel olayları oku, en uygun fen kavramını boşluğa yaz veya kelime havuzundan tıkla.
            </p>
          </div>

          {/* Progress Card */}
          <div className="bg-white/10 backdrop-blur-xs border border-white/20 rounded-xl p-4 min-w-[170px] text-center self-start sm:self-auto">
            <div className="text-xs text-emerald-200 font-medium">Tamamlanma</div>
            <div className="text-2xl font-bold font-mono my-0.5">
              {correctCount} / {totalQuestions || 1}
            </div>
            <div className="w-full bg-white/20 h-1.5 rounded-full overflow-hidden mt-1.5">
              <div 
                className="bg-emerald-400 h-full transition-all duration-300"
                style={{ width: `${totalQuestions > 0 ? (correctCount / totalQuestions) * 100 : 0}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* 10 Questions List */}
      <div className="space-y-6">
        {blanksList.map(q => {
          const status = statuses[q.id] || 'unanswered';
          const isRevealed = revealedExplanations[q.id];
          const currentInput = userInputs[q.id] || '';

          return (
            <div
              key={q.id}
              className={`rounded-2xl border transition-all bg-white p-5 sm:p-6 shadow-xs ${
                status === 'correct'
                  ? 'border-emerald-300 bg-emerald-50/10'
                  : status === 'wrong'
                  ? 'border-rose-300 bg-rose-50/10'
                  : 'border-slate-200 hover:border-slate-300'
              }`}
            >
              {/* Question Header & Context */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded-md bg-emerald-100 text-emerald-800 text-xs font-bold font-mono">
                    Soru {q.number} / 10
                  </span>
                  {status === 'correct' && (
                    <span className="flex items-center gap-1 text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Doğru Yanıt
                    </span>
                  )}
                  {status === 'wrong' && (
                    <span className="flex items-center gap-1 text-xs font-bold text-rose-600 bg-rose-50 px-2.5 py-0.5 rounded-full border border-rose-200">
                      <XCircle className="w-3.5 h-3.5" />
                      Eksiklerine Eklendi
                    </span>
                  )}
                </div>

                {/* Bağlam (Context Scenario) */}
                <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-3 text-xs sm:text-sm text-slate-700 italic leading-relaxed">
                  <strong className="text-slate-900 not-italic mr-1.5 font-semibold">
                    📖 Bağlam:
                  </strong>
                  {q.baglam}
                </div>

                {/* Soru Kökü */}
                <p className="text-sm sm:text-base font-semibold text-slate-900 leading-snug">
                  {q.soruKoku}
                </p>

                {/* Word Bank Hints (Pill buttons for rapid interaction) */}
                {q.wordBankHint && q.wordBankHint.length > 0 && status === 'unanswered' && (
                  <div className="space-y-1 pt-1">
                    <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide">
                      Kelime Havuzundan Seç (Tıkla):
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {q.wordBankHint.map((word, wIdx) => (
                        <button
                          key={wIdx}
                          onClick={() => handleWordBankSelect(q.id, word)}
                          className={`px-2.5 py-1 rounded-lg text-xs font-medium border transition-colors cursor-pointer ${
                            currentInput === word
                              ? 'bg-emerald-600 text-white border-emerald-600 font-bold'
                              : 'bg-slate-50 hover:bg-emerald-50 text-slate-700 border-slate-200'
                          }`}
                        >
                          {word}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Interactive Input & Controls */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 pt-2">
                  <div className="relative flex-1">
                    <input
                      id={`input-blank-${q.id}`}
                      type="text"
                      disabled={status === 'correct'}
                      value={currentInput}
                      onChange={e => handleInputChange(q.id, e.target.value)}
                      onKeyDown={e => {
                        if (e.key === 'Enter' && currentInput.trim()) {
                          checkAnswer(q);
                        }
                      }}
                      placeholder="Cevabınızı yazın veya yukarıdan tıklayın..."
                      className={`w-full px-4 py-2.5 rounded-xl border text-sm font-medium transition-all outline-hidden ${
                        status === 'correct'
                          ? 'border-emerald-400 bg-emerald-50/50 text-emerald-900 font-bold'
                          : status === 'wrong'
                          ? 'border-rose-300 bg-rose-50/40 text-rose-900'
                          : 'border-slate-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200'
                      }`}
                    />
                  </div>

                  <div className="flex items-center gap-2">
                    {status === 'unanswered' ? (
                      <button
                        id={`check-btn-${q.id}`}
                        disabled={!currentInput.trim()}
                        onClick={() => checkAnswer(q)}
                        className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white rounded-xl text-xs font-bold transition-colors cursor-pointer shadow-xs"
                      >
                        Kontrol Et
                      </button>
                    ) : (
                      <button
                        onClick={() => resetQuestion(q.id)}
                        className="px-3.5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-semibold transition-colors flex items-center gap-1 cursor-pointer"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                        <span>Tekrar Dene</span>
                      </button>
                    )}
                  </div>
                </div>

                {/* Explanation Box */}
                {isRevealed && (
                  <div
                    className={`p-3.5 rounded-xl text-xs sm:text-sm border animate-in fade-in space-y-1.5 ${
                      status === 'correct'
                        ? 'bg-emerald-50/70 border-emerald-200 text-emerald-950'
                        : 'bg-rose-50/70 border-rose-200 text-rose-950'
                    }`}
                  >
                    <div className="flex items-center justify-between font-bold">
                      <span className="flex items-center gap-1.5">
                        <Lightbulb className="w-4 h-4 text-amber-600" />
                        Doğru Terim: <strong className="underline">{q.blankAnswer}</strong>
                      </span>
                    </div>
                    <p className="text-slate-700 leading-relaxed text-xs">
                      {q.explanation}
                    </p>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Completion Summary & Next Step */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="text-base font-bold text-slate-900 font-serif">
            Boşluk Doldurma Durumu: {correctCount} / {totalQuestions} Doğru
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            {correctCount === totalQuestions
              ? 'Tebrikler! Bütün kavramları başarıyla kavradınız.'
              : 'Eksik kalan veya yanlış cevapladığınız sorular otomatik olarak "Eksiklerini Tamamla" kumbaranıza eklendi.'}
          </p>
        </div>

        <button
          id="btn-next-mcq"
          onClick={onGoToMCQ}
          className="px-5 py-2.5 bg-sky-600 hover:bg-sky-700 text-white rounded-xl text-xs font-bold transition-colors flex items-center gap-2 cursor-pointer shadow-xs"
        >
          <span>20 Bağlam Temelli Soruyu Çöz</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
