import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  RotateCcw, 
  CheckCircle2, 
  XCircle, 
  Sparkles, 
  Lightbulb, 
  ArrowRight, 
  HelpCircle, 
  BookOpen, 
  Award,
  Check
} from 'lucide-react';
import { useUserProgress } from '../context/UserProgressContext';
import { ContextQuestion, FillInBlankQuestion } from '../types';

interface MistakesReviewViewProps {
  onGoToLesson: () => void;
  onOpenGoogleAuth?: () => void;
}

export const MistakesReviewView: React.FC<MistakesReviewViewProps> = ({
  onGoToLesson,
  onOpenGoogleAuth
}) => {
  const { mistakes, resolveMistake, user } = useUserProgress();

  const [filterType, setFilterType] = useState<'all' | 'unresolved' | 'resolved'>('unresolved');
  const [retestInputs, setRetestInputs] = useState<Record<string, string>>({});
  const [retestFeedback, setRetestFeedback] = useState<Record<string, 'correct' | 'wrong'>>({});

  // If user is not logged in with Google, notify them per requirement:
  // "öğrenci ana ekranda google hesabıyla girmezse her sayfayı ziyaret edebilecek ama eksikliklerini göremeyecek. google hesabıyla giriş yaparsa tüm çözdükleri, eksikleri, başarıları kaydedilecek."
  if (!user?.isGoogle) {
    return (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 text-center space-y-6 animate-in fade-in duration-150">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl space-y-6">
          <div className="w-16 h-16 rounded-2xl bg-amber-50 border border-amber-200 text-amber-600 flex items-center justify-center mx-auto shadow-inner">
            <RotateCcw className="w-8 h-8" />
          </div>

          <div className="space-y-2 max-w-lg mx-auto">
            <span className="px-3 py-1 rounded-full bg-rose-100 text-rose-800 text-xs font-bold uppercase tracking-wider">
              Google Girişi Gereklidir
            </span>
            <h2 className="text-2xl font-bold text-slate-800 font-serif">
              Eksiklerinizi Görebilmek İçin Google ile Bağlanın
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Misafir modunda tüm konu anlatımlarını, boşluk doldurmaları ve test sorularını serbestçe çözebilirsiniz. Ancak çözdüğünüz testlerdeki eksiklerin birikmesi, hata kumbarası ve öğretmeninizin eksiklerinizi analiz edebilmesi için Google hesabınızla bağlanmanız gerekmektedir.
            </p>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            {onOpenGoogleAuth && (
              <button
                id="mistakes-google-auth-btn"
                onClick={onOpenGoogleAuth}
                className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl bg-slate-900 text-white font-bold text-sm hover:bg-slate-800 shadow-md transition-all cursor-pointer"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                </svg>
                <span>Google Hesabımla Bağlan</span>
              </button>
            )}

            <button
              onClick={onGoToLesson}
              className="w-full sm:w-auto px-5 py-3 rounded-xl border border-slate-300 text-slate-700 font-semibold text-sm hover:bg-slate-50 transition-colors cursor-pointer"
            >
              Konu Çalışmaya Devam Et
            </button>
          </div>
        </div>
      </div>
    );
  }

  const filteredMistakes = mistakes.filter(m => {
    if (filterType === 'unresolved') return !m.resolved;
    if (filterType === 'resolved') return m.resolved;
    return true;
  });

  const unresolvedCount = mistakes.filter(m => !m.resolved).length;
  const resolvedCount = mistakes.filter(m => m.resolved).length;

  const handleRetestBlank = (questionId: string, qData: FillInBlankQuestion) => {
    const input = (retestInputs[questionId] || '').trim().toLowerCase();
    const isCorrect = (qData.acceptableAnswers || [qData.blankAnswer]).some(ans => ans.trim().toLowerCase() === input);

    if (isCorrect) {
      resolveMistake(questionId);
      setRetestFeedback(prev => ({ ...prev, [questionId]: 'correct' }));
      confetti({
        particleCount: 35,
        spread: 50,
        origin: { y: 0.7 }
      });
    } else {
      setRetestFeedback(prev => ({ ...prev, [questionId]: 'wrong' }));
    }
  };

  const handleRetestMCQ = (questionId: string, qData: ContextQuestion, choice: 'A' | 'B' | 'C' | 'D') => {
    const isCorrect = choice === qData.dogruCevap;
    if (isCorrect) {
      resolveMistake(questionId);
      setRetestFeedback(prev => ({ ...prev, [questionId]: 'correct' }));
      confetti({
        particleCount: 35,
        spread: 50,
        origin: { y: 0.7 }
      });
    } else {
      setRetestFeedback(prev => ({ ...prev, [questionId]: 'wrong' }));
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 space-y-7">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-rose-900 via-pink-950 to-slate-900 text-white rounded-2xl p-6 sm:p-7 shadow-md">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1.5">
            <span className="px-2.5 py-0.5 rounded-md bg-rose-500 text-white font-bold text-xs">
              PEKİŞTİRME & HATA KUMBARASI
            </span>
            <h1 className="text-xl sm:text-2xl font-bold font-serif">
              Eksiklerini Tamamla & Öğrenmeyi Kalıcı Kıl
            </h1>
            <p className="text-xs sm:text-sm text-rose-200/90 max-w-xl">
              Yanıldığın sorular öğrenmenin en değerli fırsatlarıdır. Eksiklerini burada tekrar incele ve doğru cevaplayarak pekiştir.
            </p>
          </div>

          <div className="flex items-center gap-3 bg-white/10 backdrop-blur-xs border border-white/20 px-4 py-3 rounded-xl self-start sm:self-auto text-center">
            <div>
              <div className="text-[11px] text-rose-200 font-medium">Kalan Eksik</div>
              <div className="text-xl font-bold text-rose-300 font-mono">{unresolvedCount}</div>
            </div>
            <div className="w-px h-8 bg-white/20" />
            <div>
              <div className="text-[11px] text-emerald-200 font-medium">Pekiştirilen</div>
              <div className="text-xl font-bold text-emerald-300 font-mono">{resolvedCount}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 border-b border-slate-200 pb-3">
        <button
          onClick={() => setFilterType('unresolved')}
          className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
            filterType === 'unresolved'
              ? 'bg-rose-600 text-white shadow-xs'
              : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
          }`}
        >
          Çözülecek Eksikler ({unresolvedCount})
        </button>

        <button
          onClick={() => setFilterType('resolved')}
          className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
            filterType === 'resolved'
              ? 'bg-emerald-600 text-white shadow-xs'
              : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
          }`}
        >
          Pekiştirilenler ({resolvedCount})
        </button>

        <button
          onClick={() => setFilterType('all')}
          className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
            filterType === 'all'
              ? 'bg-slate-900 text-white shadow-xs'
              : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
          }`}
        >
          Tümü ({mistakes.length})
        </button>
      </div>

      {/* Empty State */}
      {filteredMistakes.length === 0 && (
        <div className="bg-white border border-slate-200 rounded-2xl p-10 text-center space-y-4 shadow-xs">
          <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto text-2xl font-bold">
            ✓
          </div>
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-slate-900 font-serif">
              {filterType === 'unresolved'
                ? 'Harika! Bekleyen Hiçbir Eksiğin Yok!'
                : 'Bu filtrede görüntülenecek soru bulunamadı.'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto">
              Yeni testler çözdükçe veya boşluk doldurma yaptıkça yanlış yaptığın sorular otomatik olarak buraya eklenir.
            </p>
          </div>
          <button
            onClick={onGoToLesson}
            className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-xl inline-flex items-center gap-1.5 cursor-pointer shadow-xs"
          >
            <span>Konu Anlatımına Dön</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* List of Mistakes */}
      <div className="space-y-5">
        {filteredMistakes.map(item => {
          const isResolved = item.resolved;
          const isBlank = item.questionType === 'blank';
          const blankData = isBlank ? (item.questionData as FillInBlankQuestion) : null;
          const mcqData = !isBlank ? (item.questionData as ContextQuestion) : null;
          const currentRetestFeedback = retestFeedback[item.questionId];

          return (
            <div
              key={item.questionId}
              className={`rounded-2xl border transition-all bg-white p-5 sm:p-6 shadow-xs ${
                isResolved
                  ? 'border-emerald-300 bg-emerald-50/10'
                  : 'border-rose-200 hover:border-rose-300'
              }`}
            >
              {/* Card Top */}
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-700 text-xs font-bold font-mono">
                    {item.sectionCode} {item.sectionTitle}
                  </span>
                  <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-900 text-xs font-medium">
                    {isBlank ? 'Boşluk Doldurma' : 'Çoktan Seçmeli Test'}
                  </span>
                </div>

                {isResolved ? (
                  <span className="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    Pekiştirildi
                  </span>
                ) : (
                  <span className="px-2.5 py-1 rounded-full bg-rose-100 text-rose-800 font-bold text-xs flex items-center gap-1">
                    <XCircle className="w-3.5 h-3.5 text-rose-600" />
                    Tekrar Çözülmeli ({item.attempts} deneme)
                  </span>
                )}
              </div>

              {/* Content Render: Blank */}
              {isBlank && blankData && (
                <div className="space-y-3">
                  <div className="text-xs text-slate-600 italic bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                    📖 Bağlam: {blankData.baglam}
                  </div>
                  <p className="text-sm font-semibold text-slate-900">
                    {blankData.soruKoku}
                  </p>

                  {/* Retest Input Form */}
                  {!isResolved && (
                    <div className="p-3.5 bg-rose-50/40 rounded-xl border border-rose-200 space-y-2">
                      <div className="text-xs font-bold text-rose-900 flex items-center justify-between">
                        <span>Eksik Pekiştirme: Doğru kelimeyi yazınız:</span>
                        {blankData.wordBankHint && (
                          <span className="text-[11px] text-slate-500 font-normal">
                            İpucu: {blankData.wordBankHint.join(', ')}
                          </span>
                        )}
                      </div>

                      <div className="flex gap-2">
                        <input
                          type="text"
                          value={retestInputs[item.questionId] || ''}
                          onChange={e =>
                            setRetestInputs(prev => ({
                              ...prev,
                              [item.questionId]: e.target.value
                            }))
                          }
                          placeholder="Doğru kavramı yazın..."
                          className="flex-1 px-3 py-1.5 rounded-lg border border-slate-300 text-xs font-medium outline-hidden focus:border-emerald-500"
                        />
                        <button
                          onClick={() => handleRetestBlank(item.questionId, blankData)}
                          className="px-4 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-bold transition-colors cursor-pointer"
                        >
                          Doğrula & Pekiştir
                        </button>
                      </div>

                      {currentRetestFeedback === 'wrong' && (
                        <div className="text-xs text-rose-600 font-semibold">
                          Tekrar deneyin! İpucu: {blankData.explanation}
                        </div>
                      )}
                    </div>
                  )}

                  {isResolved && (
                    <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 text-xs text-emerald-950 space-y-1">
                      <div className="font-bold">✓ Doğru Yanıt: {blankData.blankAnswer}</div>
                      <p className="text-slate-700">{blankData.explanation}</p>
                    </div>
                  )}
                </div>
              )}

              {/* Content Render: MCQ */}
              {!isBlank && mcqData && (
                <div className="space-y-3">
                  <div className="text-xs text-slate-600 italic bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                    📖 Bağlam: {mcqData.baglam}
                  </div>
                  <p className="text-sm font-semibold text-slate-900">
                    {mcqData.soruKoku}
                  </p>

                  {/* Retest MCQ Options */}
                  {!isResolved && (
                    <div className="space-y-2 pt-1">
                      <div className="text-xs font-bold text-slate-700">
                        Doğru cevabı seçerek pekiştir:
                      </div>
                      <div className="grid gap-1.5">
                        {(['A', 'B', 'C', 'D'] as const).map(key => (
                          <button
                            key={key}
                            onClick={() => handleRetestMCQ(item.questionId, mcqData, key)}
                            className="text-left p-2.5 rounded-lg border border-slate-200 hover:border-emerald-400 hover:bg-emerald-50/40 text-xs font-medium text-slate-800 transition-colors flex items-start gap-2 cursor-pointer"
                          >
                            <span className="w-5 h-5 rounded bg-slate-100 text-slate-700 font-bold flex items-center justify-center flex-shrink-0">
                              {key}
                            </span>
                            <span>{mcqData.secenekler[key]}</span>
                          </button>
                        ))}
                      </div>

                      {currentRetestFeedback === 'wrong' && (
                        <div className="p-2.5 bg-rose-50 text-rose-700 rounded-lg text-xs font-medium">
                          Tekrar deneyin! Çözüm İpucu: {mcqData.cozum}
                        </div>
                      )}
                    </div>
                  )}

                  {isResolved && (
                    <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 text-xs text-emerald-950 space-y-1">
                      <div className="font-bold">
                        ✓ Doğru Seçenek: {mcqData.dogruCevap} - {mcqData.secenekler[mcqData.dogruCevap]}
                      </div>
                      <p className="text-slate-700">{mcqData.cozum}</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
