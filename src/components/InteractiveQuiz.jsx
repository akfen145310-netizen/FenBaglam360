import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import {
  ChevronLeft,
  ChevronRight,
  Clock,
  Flag,
  PenTool,
  RotateCcw,
  CheckCircle,
  XCircle,
  AlertCircle,
  Award,
  Sparkles,
  ShieldCheck,
  Slash,
  Maximize2
} from 'lucide-react';
import ScientificDiagram from './ScientificDiagram.jsx';
import ScratchpadModal from './ScratchpadModal.jsx';

export default function InteractiveQuiz({
  questions,
  subtopic,
  unit,
  grade,
  onOpenAudit,
  onSwitchToSinglePage
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({}); // { [questionId]: 'A' | 'B' ... }
  const [eliminatedOptions, setEliminatedOptions] = useState({}); // { [questionId]: ['B', 'C'] }
  const [flagged, setFlagged] = useState({}); // { [questionId]: true }
  const [isScratchpadOpen, setIsScratchpadOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [eliminationMode, setEliminationMode] = useState(false);

  // Sayaç Durumu
  const [seconds, setSeconds] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(true);

  useEffect(() => {
    let interval = null;
    if (isTimerRunning && !isSubmitted) {
      interval = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning, isSubmitted]);

  const formatTime = (totalSec) => {
    const mins = Math.floor(totalSec / 60);
    const secs = totalSec % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  const currentQ = questions[currentIndex];

  const handleSelectOption = (key) => {
    if (isSubmitted) return;

    if (eliminationMode) {
      // Çeldirici Eleme Modu (Üzerini Çiz)
      const currentElim = eliminatedOptions[currentQ.id] || [];
      if (currentElim.includes(key)) {
        setEliminatedOptions({
          ...eliminatedOptions,
          [currentQ.id]: currentElim.filter((k) => k !== key)
        });
      } else {
        setEliminatedOptions({
          ...eliminatedOptions,
          [currentQ.id]: [...currentElim, key]
        });
      }
      return;
    }

    setAnswers((prev) => ({
      ...prev,
      [currentQ.id]: key
    }));
  };

  const handleToggleFlag = () => {
    setFlagged((prev) => ({
      ...prev,
      [currentQ.id]: !prev[currentQ.id]
    }));
  };

  const handleFinish = () => {
    setIsSubmitted(true);
    setIsTimerRunning(false);

    // Başarı yüzdesi hesapla
    let correctCount = 0;
    questions.forEach((q) => {
      if (answers[q.id] === q.correctAnswer) correctCount++;
    });
    const percent = Math.round((correctCount / questions.length) * 100);

    if (percent >= 70) {
      try {
        confetti({
          particleCount: 120,
          spread: 80,
          origin: { y: 0.6 }
        });
      } catch (e) {
        console.log(e);
      }
    }
  };

  const handleRestart = () => {
    setAnswers({});
    setEliminatedOptions({});
    setFlagged({});
    setIsSubmitted(false);
    setCurrentIndex(0);
    setSeconds(0);
    setIsTimerRunning(true);
  };

  // Sonuç Hesaplamaları
  let correctCount = 0;
  let wrongCount = 0;
  let emptyCount = 0;

  if (isSubmitted) {
    questions.forEach((q) => {
      const ans = answers[q.id];
      if (!ans) {
        emptyCount++;
      } else if (ans === q.correctAnswer) {
        correctCount++;
      } else {
        wrongCount++;
      }
    });
  }

  const successPercent = questions.length > 0 ? Math.round((correctCount / questions.length) * 100) : 0;

  if (!currentQ && !isSubmitted) {
    return (
      <div className="quiz-empty card">
        <AlertCircle size={40} className="icon-amber" />
        <h3>Bu ünitede soru bulunamadı</h3>
        <p>Lütfen önce soruları oluşturun veya başka bir alt başlık seçin.</p>
      </div>
    );
  }

  // ==================== SONUÇ EKRANI ====================
  if (isSubmitted) {
    return (
      <div className="quiz-results-container">
        <div className="results-hero-card">
          <div className="results-trophy">
            <Award size={48} className="icon-amber" />
          </div>
          <h2>Tebrikler! Sınavı Tamamladınız</h2>
          <p className="results-sub">
            {grade}. Sınıf Fen Bilimleri • {subtopic?.title}
          </p>

          <div className="results-stats-row">
            <div className="stat-box stat-correct">
              <span className="stat-number">{correctCount}</span>
              <span className="stat-label">Doğru</span>
            </div>
            <div className="stat-box stat-wrong">
              <span className="stat-number">{wrongCount}</span>
              <span className="stat-label">Yanlış</span>
            </div>
            <div className="stat-box stat-empty">
              <span className="stat-number">{emptyCount}</span>
              <span className="stat-label">Boş</span>
            </div>
            <div className="stat-box stat-percent">
              <span className="stat-number">%{successPercent}</span>
              <span className="stat-label">Başarı Oranı</span>
            </div>
            <div className="stat-box stat-time">
              <span className="stat-number">{formatTime(seconds)}</span>
              <span className="stat-label">Toplam Süre</span>
            </div>
          </div>

          <div className="results-actions">
            <button className="btn-primary" onClick={handleRestart}>
              <RotateCcw size={16} />
              <span>Tekrar Çöz</span>
            </button>
            <button className="btn-secondary" onClick={onSwitchToSinglePage}>
              <span>Tek Sayfada Tümünü İncele</span>
            </button>
          </div>
        </div>

        {/* Detaylı Soru İnceleme Listesi */}
        <div className="results-review-list">
          <h3>Soru Bazlı Detaylı Çözüm ve Analiz</h3>
          {questions.map((q, idx) => {
            const userAns = answers[q.id];
            const isCorr = userAns === q.correctAnswer;
            const isEmpty = !userAns;

            return (
              <div
                key={q.id}
                className={`review-card ${isCorr ? 'review-correct' : isEmpty ? 'review-empty' : 'review-wrong'}`}
              >
                <div className="review-top">
                  <div className="review-meta">
                    <span className="q-badge">Soru {idx + 1}</span>
                    <span className="q-badge-skill">{q.skill}</span>
                    <span className="q-badge-diff">{q.difficulty}</span>
                  </div>
                  <div className="review-status">
                    {isCorr ? (
                      <span className="status-badge-ok">
                        <CheckCircle size={14} /> Doğru
                      </span>
                    ) : isEmpty ? (
                      <span className="status-badge-empty">
                        <AlertCircle size={14} /> Boş Bırakıldı
                      </span>
                    ) : (
                      <span className="status-badge-err">
                        <XCircle size={14} /> Yanlış ({userAns} seçildi, Doğru: {q.correctAnswer})
                      </span>
                    )}
                  </div>
                </div>

                <p className="review-context">
                  <strong>Bağlam:</strong> {q.contextText}
                </p>

                {q.svgDiagram && (
                  <div style={{ maxWidth: '450px', margin: '8px 0' }}>
                    <ScientificDiagram type={q.svgDiagram} />
                  </div>
                )}

                <p className="review-stem">{q.questionStem}</p>

                <div className="review-options">
                  {q.options.map((opt) => (
                    <div
                      key={opt.key}
                      className={`review-opt ${
                        opt.key === q.correctAnswer
                          ? 'opt-is-correct'
                          : opt.key === userAns
                          ? 'opt-is-wrong'
                          : ''
                      }`}
                    >
                      <strong>{opt.key})</strong> {opt.text}
                    </div>
                  ))}
                </div>

                <div className="review-solution">
                  <strong>Çözüm Gerekçesi:</strong>
                  {q.solutionSteps.map((st, i) => (
                    <p key={i}>{st}</p>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // ==================== ETKİLEŞİMLİ SINAV EKRANI ====================
  const userSelected = answers[currentQ.id];
  const isFlagged = flagged[currentQ.id];
  const elimList = eliminatedOptions[currentQ.id] || [];

  return (
    <div className="interactive-quiz-container">
      {/* Üst Durum Çubuğu */}
      <div className="quiz-top-bar">
        <div className="top-bar-left">
          <span className="quiz-title-tag">{subtopic?.title}</span>
          <span className="quiz-counter">
            Soru <strong>{currentIndex + 1}</strong> / {questions.length}
          </span>
        </div>

        <div className="top-bar-center">
          <div className="quiz-timer">
            <Clock size={16} className="text-cyan" />
            <span>{formatTime(seconds)}</span>
          </div>
        </div>

        <div className="top-bar-right">
          <button
            className={`tool-action-btn ${eliminationMode ? 'active' : ''}`}
            onClick={() => setEliminationMode(!eliminationMode)}
            title="Çeldirici Eleme Modu (Üzerini Çiz)"
          >
            <Slash size={15} />
            <span>{eliminationMode ? 'Eleme Açık' : 'Şık Ele'}</span>
          </button>

          <button
            className="tool-action-btn"
            onClick={() => setIsScratchpadOpen(true)}
            title="Karalama ve Not Defteri"
          >
            <PenTool size={15} />
            <span>Karalama Tahtası</span>
          </button>

          <button
            className={`tool-action-btn ${isFlagged ? 'flagged' : ''}`}
            onClick={handleToggleFlag}
            title="Daha sonra incelemek üzere işaretle"
          >
            <Flag size={15} />
            <span>{isFlagged ? 'İşaretli' : 'İşaretle'}</span>
          </button>

          <button className="btn-finish-exam" onClick={handleFinish}>
            Sınavı Bitir
          </button>
        </div>
      </div>

      {/* Soru Paleti / Hızlı Geçiş Numaratörü */}
      <div className="quiz-palette">
        {questions.map((q, idx) => {
          const isAns = !!answers[q.id];
          const isFlg = !!flagged[q.id];
          const isCur = idx === currentIndex;

          let btnClass = 'palette-btn';
          if (isCur) btnClass += ' current';
          if (isAns) btnClass += ' answered';
          if (isFlg) btnClass += ' flagged';

          return (
            <button
              key={q.id}
              className={btnClass}
              onClick={() => setCurrentIndex(idx)}
              title={`Soru ${idx + 1}`}
            >
              {idx + 1}
            </button>
          );
        })}
      </div>

      {/* Soru Gövdesi (Bağlam ve Seçenekler İki Kolon / Akıcı Düzen) */}
      <div className="quiz-main-layout">
        {/* Sol Kolon: Gerçek Yaşam Bağlamı & Görsel/Tablo */}
        <div className="quiz-left-panel">
          <div className="quiz-panel-header">
            <span className="badge-context">Gerçek Yaşam Senaryosu</span>
            <span className="badge-skill">{currentQ.skill}</span>
            <button
              className="audit-mini-btn"
              onClick={() => onOpenAudit(currentQ)}
              title="TYMM Kalite Raporu"
            >
              <ShieldCheck size={14} /> Denetim
            </button>
          </div>

          <h3 className="context-title">{currentQ.title}</h3>
          <p className="context-text">{currentQ.contextText}</p>

          {/* SVG Görseli */}
          {currentQ.svgDiagram && (
            <div className="diagram-container">
              <ScientificDiagram type={currentQ.svgDiagram} title={currentQ.title} />
            </div>
          )}

          {/* Veri Tablosu */}
          {currentQ.contextData && currentQ.contextData.type === 'table' && (
            <div className="table-responsive">
              <table className="quiz-data-table">
                <thead>
                  <tr>
                    {currentQ.contextData.headers.map((h, i) => (
                      <th key={i}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {currentQ.contextData.rows.map((row, rIdx) => (
                    <tr key={rIdx}>
                      {row.map((c, cIdx) => (
                        <td key={cIdx}>{c}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Sağ Kolon: Soru Kökü ve 4 Seçenek */}
        <div className="quiz-right-panel">
          <div className="stem-card">
            <span className="stem-badge">Soru Kökü</span>
            <p className="stem-content">{currentQ.questionStem}</p>
          </div>

          {eliminationMode && (
            <div className="elimination-alert">
              <AlertCircle size={14} /> Çeldirici eleme modu aktif: İstemediğiniz şıkkın üzerine tıklayarak çizebilirsiniz.
            </div>
          )}

          <div className="options-stack">
            {currentQ.options.map((opt) => {
              const isSelected = userSelected === opt.key;
              const isEliminated = elimList.includes(opt.key);

              return (
                <div
                  key={opt.key}
                  className={`quiz-option-card ${isSelected ? 'selected' : ''} ${
                    isEliminated ? 'eliminated' : ''
                  }`}
                  onClick={() => handleSelectOption(opt.key)}
                >
                  <div className="opt-bubble">{opt.key}</div>
                  <div className="opt-body">{opt.text}</div>
                </div>
              );
            })}
          </div>

          {/* Navigasyon Butonları */}
          <div className="quiz-nav-footer">
            <button
              className="btn-nav"
              disabled={currentIndex === 0}
              onClick={() => setCurrentIndex((prev) => prev - 1)}
            >
              <ChevronLeft size={18} />
              <span>Önceki Soru</span>
            </button>

            <button
              className="btn-nav btn-nav-primary"
              disabled={currentIndex === questions.length - 1}
              onClick={() => setCurrentIndex((prev) => prev + 1)}
            >
              <span>Sonraki Soru</span>
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Karalama Tahtası Modalı */}
      <ScratchpadModal
        isOpen={isScratchpadOpen}
        onClose={() => setIsScratchpadOpen(false)}
      />
    </div>
  );
}
