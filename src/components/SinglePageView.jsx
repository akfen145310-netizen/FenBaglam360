import React, { useState } from 'react';
import { Eye, EyeOff, ShieldCheck, CheckCircle2, FileText, Printer, Sparkles, AlertCircle } from 'lucide-react';
import ScientificDiagram from './ScientificDiagram.jsx';

export default function SinglePageView({
  questions,
  subtopic,
  unit,
  grade,
  onOpenAudit,
  pdfEnabled,
  onPrint,
  onEnsureQuestions
}) {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showAllSolutions, setShowAllSolutions] = useState(false);
  const [visibleSolutions, setVisibleSolutions] = useState({});
  const [showAnswerKey, setShowAnswerKey] = useState(false);

  const toggleSolution = (id) => {
    setVisibleSolutions((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleSelectOption = (questionId, optionKey) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: optionKey
    }));
  };

  const isComplete = questions.length >= 30;

  return (
    <div className="single-page-container">
      {/* Üst Bilgi ve Araç Çubuğu */}
      <div className="sheet-header-card">
        <div className="sheet-header-info">
          <div className="sheet-badges">
            <span className="badge-grade">{grade}. Sınıf Fen Bilimleri</span>
            <span className="badge-unit">{unit?.unitTitle}</span>
            <span className="badge-code">{subtopic?.code}</span>
            <span className={`badge-count ${isComplete ? 'count-complete' : 'count-pending'}`}>
              {questions.length} / 30 Bağlam Temelli Soru {isComplete ? '✓ (Tam Set)' : ''}
            </span>
          </div>
          <h1 className="sheet-title">{subtopic?.title}</h1>
          <p className="sheet-desc">
            Türkiye Yüzyılı Maarif Modeli (TYMM) ve fenbilim.net müfredatına tam uyumlu, gerçek yaşam bağlamlı soru seti.
          </p>
        </div>

        <div className="sheet-actions">
          {!isComplete && (
            <button
              className="btn-accent"
              onClick={() => onEnsureQuestions && onEnsureQuestions(subtopic.id, 30)}
              title="Bu alt başlık için 30 soruluk tam seti otomatik oluşturur"
            >
              <Sparkles size={16} />
              <span>30 Soruya Tamamla</span>
            </button>
          )}

          <button
            className="btn-secondary"
            onClick={() => setShowAllSolutions(!showAllSolutions)}
          >
            {showAllSolutions ? <EyeOff size={16} /> : <Eye size={16} />}
            <span>{showAllSolutions ? 'Çözümleri Gizle' : 'Tüm Çözümleri Aç'}</span>
          </button>

          <button
            className="btn-secondary"
            onClick={() => setShowAnswerKey(!showAnswerKey)}
          >
            <FileText size={16} />
            <span>{showAnswerKey ? 'Cevap Anahtarını Kapat' : 'Cevap Anahtarı'}</span>
          </button>

          {pdfEnabled && (
            <button className="btn-primary" onClick={onPrint} title="MEB Sınav Formatında PDF İndir / Yazdır">
              <Printer size={16} />
              <span>PDF İndir / Yazdır</span>
            </button>
          )}
        </div>
      </div>

      {/* Hızlı Cevap Anahtarı Tablosu (Açılır/Kapanır) */}
      {showAnswerKey && (
        <div className="answer-key-card slide-down">
          <div className="answer-key-header">
            <h4>Cevap Anahtarı ({subtopic?.title})</h4>
            <span className="text-muted">Toplam {questions.length} Soru</span>
          </div>
          <div className="answer-key-grid">
            {questions.map((q, idx) => (
              <div key={q.id} className="key-item">
                <span className="q-num">{idx + 1}</span>
                <span className="q-ans">{q.correctAnswer}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Soru Listesi (Dikey Kesintisiz Akış) */}
      <div className="questions-flow">
        {questions.length === 0 ? (
          <div className="empty-state card">
            <AlertCircle size={40} className="icon-amber" />
            <h3>Bu alt başlıkta henüz soru bulunmuyor</h3>
            <p>Hemen tek tıklamayla 30 adet TYMM bağlam temelli soru üretebilirsiniz.</p>
            <button
              className="btn-primary"
              onClick={() => onEnsureQuestions && onEnsureQuestions(subtopic.id, 30)}
            >
              <Sparkles size={16} />
              <span>30 Soru Otomatik Oluştur</span>
            </button>
          </div>
        ) : (
          questions.map((q, index) => {
            const isSolutionOpen = showAllSolutions || visibleSolutions[q.id];
            const userChoice = selectedAnswers[q.id];

            return (
              <article key={q.id} className="question-card" id={`q-card-${q.id}`}>
                {/* Soru Başlık Şeridi */}
                <div className="q-card-header">
                  <div className="q-card-title-meta">
                    <span className="q-number-badge">Soru {index + 1}</span>
                    <span className="q-skill-badge">{q.skill} • {q.processComponent}</span>
                    <span className="q-diff-badge">{q.difficulty}</span>
                  </div>
                  <button
                    className="q-audit-btn"
                    onClick={() => onOpenAudit(q)}
                    title="Master Prompt T1-T12 Denetim Raporu"
                  >
                    <ShieldCheck size={15} />
                    <span>TYMM Denetim (20/20)</span>
                  </button>
                </div>

                {/* Bağlam Alanı */}
                <div className="q-context-box">
                  <div className="context-label">
                    <span className="dot"></span>
                    <strong>Gerçek Yaşam Bağlamı:</strong> {q.title}
                  </div>
                  <p className="context-paragraph">{q.contextText}</p>

                  {/* SVG Şeması (Varsa) */}
                  {q.svgDiagram && (
                    <ScientificDiagram type={q.svgDiagram} title={q.title} />
                  )}

                  {/* Veri Tablosu (Varsa) */}
                  {q.contextData && q.contextData.type === 'table' && (
                    <div className="table-responsive">
                      <table className="context-data-table">
                        <thead>
                          <tr>
                            {q.contextData.headers.map((h, i) => (
                              <th key={i}>{h}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {q.contextData.rows.map((row, rIdx) => (
                            <tr key={rIdx}>
                              {row.map((cell, cIdx) => (
                                <td key={cIdx}>{cell}</td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>

                {/* Soru Kökü */}
                <div className="q-stem-box">
                  <p className="q-stem-text">{q.questionStem}</p>
                </div>

                {/* Seçenekler */}
                <div className="q-options-grid">
                  {q.options.map((opt) => {
                    const isSelected = userChoice === opt.key;
                    const isCorrect = isSolutionOpen && opt.key === q.correctAnswer;
                    const isWrongSelected = isSolutionOpen && isSelected && opt.key !== q.correctAnswer;

                    return (
                      <div
                        key={opt.key}
                        className={`q-option-row ${isSelected ? 'selected' : ''} ${
                          isCorrect ? 'opt-highlight-correct' : ''
                        } ${isWrongSelected ? 'opt-highlight-wrong' : ''}`}
                        onClick={() => handleSelectOption(q.id, opt.key)}
                      >
                        <div className="opt-key-circle">{opt.key}</div>
                        <div className="opt-text-content">{opt.text}</div>
                        {isCorrect && <CheckCircle2 size={18} className="text-green opt-icon" />}
                      </div>
                    );
                  })}
                </div>

                {/* Alt Aksiyonlar & Çözüm Butonu */}
                <div className="q-card-footer">
                  <button
                    className="toggle-solution-btn"
                    onClick={() => toggleSolution(q.id)}
                  >
                    {isSolutionOpen ? <EyeOff size={15} /> : <Eye size={15} />}
                    <span>{isSolutionOpen ? 'Çözüm Adımlarını Gizle' : 'Çözümü ve Çeldiricileri İncele'}</span>
                  </button>

                  {userChoice && !isSolutionOpen && (
                    <span className="choice-indicator">
                      İşaretlenen: <strong>{userChoice}</strong>
                    </span>
                  )}
                </div>

                {/* Çözüm ve Analiz Bölümü (Açılır) */}
                {isSolutionOpen && (
                  <div className="solution-expand-box slide-down">
                    <div className="solution-title">
                      <CheckCircle2 size={16} className="text-green" />
                      <strong>Doğru Cevap: {q.correctAnswer}</strong>
                    </div>

                    <div className="solution-steps">
                      {q.solutionSteps.map((step, sIdx) => (
                        <p key={sIdx} className="step-item">{step}</p>
                      ))}
                    </div>

                    {/* Çeldirici Analizi */}
                    {q.distractorAnalysis && q.distractorAnalysis.length > 0 && (
                      <div className="distractor-brief">
                        <h6>Çeldirici ve Kavram Yanılgısı Özeti:</h6>
                        <ul>
                          {q.distractorAnalysis.map((d, dIdx) => (
                            <li key={dIdx}>
                              <strong>[{d.option}]</strong> {d.analysis}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}
              </article>
            );
          })
        )}
      </div>
    </div>
  );
}
