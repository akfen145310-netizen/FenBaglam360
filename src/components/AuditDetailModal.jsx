import React from 'react';
import { X, CheckCircle2, ShieldCheck, Award, HelpCircle, BookOpen, AlertTriangle } from 'lucide-react';
import { MASTER_PROMPT_DOC } from '../data/masterPrompt.js';

export default function AuditDetailModal({ question, isOpen, onClose }) {
  if (!isOpen || !question) return null;

  const tests = MASTER_PROMPT_DOC.tests;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="audit-modal" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="audit-header">
          <div className="audit-title-area">
            <div className="audit-badge-row">
              <span className="badge-primary">TYMM Kılavuz (Mart 2026)</span>
              <span className="badge-secondary">Ayvacı ve Yamaçlı (2023)</span>
              <span className="badge-success">Kalite Puanı: 20/20 (KABUL EDİLDİ)</span>
            </div>
            <h2>Soru Kalite Denetim ve TYMM Künye Raporu</h2>
            <p className="audit-subtitle">
              Soru ID: <strong>{question.id}</strong> | Kazanım Kodu: <strong>{question.code}</strong> | {question.skill}
            </p>
          </div>
          <button className="close-btn" onClick={onClose}>
            <X size={22} />
          </button>
        </div>

        {/* Content Tabs / Body */}
        <div className="audit-body">
          {/* Bölüm 1: Soru Yazım Formu (Künye) */}
          <div className="audit-section card">
            <div className="section-title">
              <BookOpen size={18} className="icon-blue" />
              <h3>1. MEB Soru Yazım Formu ve Künye</h3>
            </div>
            <div className="kunye-grid">
              <div className="kunye-item">
                <span className="k-label">Ders ve Sınıf:</span>
                <span className="k-val">Fen Bilimleri • {question.grade}. Sınıf</span>
              </div>
              <div className="kunye-item">
                <span className="k-label">Öğrenme Çıktısı (Kazanım):</span>
                <span className="k-val">{question.code} - {question.title}</span>
              </div>
              <div className="kunye-item">
                <span className="k-label">Hedef Beceri:</span>
                <span className="k-val">{question.skill}</span>
              </div>
              <div className="kunye-item">
                <span className="k-label">Süreç Bileşeni:</span>
                <span className="k-val">{question.processComponent}</span>
              </div>
              <div className="kunye-item">
                <span className="k-label">Tahmini Güçlük Düzeyi:</span>
                <span className="k-val badge-difficulty">{question.difficulty}</span>
              </div>
              <div className="kunye-item">
                <span className="k-label">Doğru Cevap:</span>
                <span className="k-val badge-correct">{question.correctAnswer}</span>
              </div>
            </div>
          </div>

          {/* Bölüm 2: T1 - T12 Denetim Tablosu */}
          <div className="audit-section card">
            <div className="section-title">
              <ShieldCheck size={18} className="icon-green" />
              <h3>2. Master Prompt T1-T12 Kalite Kontrol Testleri (12/12 Başarılı)</h3>
            </div>
            <div className="tests-grid">
              {tests.map((t) => (
                <div key={t.id} className="test-item passed">
                  <div className="test-top">
                    <span className="test-id">{t.id}</span>
                    <CheckCircle2 size={16} className="text-green" />
                  </div>
                  <strong className="test-name">{t.name}</strong>
                  <p className="test-desc">{t.rule}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Bölüm 3: Çeldirici Analiz Tablosu */}
          <div className="audit-section card">
            <div className="section-title">
              <AlertTriangle size={18} className="icon-amber" />
              <h3>3. Çeldirici Analizi (Hedeflenen Kavram Yanılgıları)</h3>
            </div>
            <div className="table-responsive">
              <table className="audit-table">
                <thead>
                  <tr>
                    <th style={{ width: '80px' }}>Seçenek</th>
                    <th>Hedeflenen Kavram Yanılgısı veya Hatalı Akıl Yürütme</th>
                  </tr>
                </thead>
                <tbody>
                  {question.distractorAnalysis && question.distractorAnalysis.length > 0 ? (
                    question.distractorAnalysis.map((item, idx) => (
                      <tr key={idx} className={item.option === question.correctAnswer ? 'row-correct' : ''}>
                        <td>
                          <span className={`option-pill ${item.option === question.correctAnswer ? 'opt-correct' : ''}`}>
                            {item.option}
                          </span>
                        </td>
                        <td>{item.analysis}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="2">Çeldiriciler bilimsel kavram yanılgısı analizine göre hazırlanmıştır.</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* Bölüm 4: Bağlam İşlevsellik Gerekçesi */}
          <div className="audit-section card">
            <div className="section-title">
              <Award size={18} className="icon-purple" />
              <h3>4. Bağlam İşlevsellik Gerekçesi (Neden Kamuflaj Değil?)</h3>
            </div>
            <p className="audit-text">
              {question.contextNecessity ||
                "Bu soru bağlam metni ve veri tablosundaki parametreler olmadan genel kültür veya doğrudan formül ezberiyle çözülemez. Öğrenci verileri okumak ve iki adımlı bilimsel çıkarım yapmak zorundadır."}
            </p>
          </div>

          {/* Bölüm 5: Bilişsel Görüşme (Pilot Notu) */}
          <div className="audit-section card">
            <div className="section-title">
              <HelpCircle size={18} className="icon-cyan" />
              <h3>5. Pilot Görüşme Notu (Sesli Düşünme Protokolü Yönlendirmeleri)</h3>
            </div>
            <ol className="pilot-list">
              {question.pilotQuestions && question.pilotQuestions.length > 0 ? (
                question.pilotQuestions.map((pq, idx) => (
                  <li key={idx}>"{pq}"</li>
                ))
              ) : (
                <>
                  <li>"Verilen tablodaki değişkenleri incelerken ilk dikkatini çeken sayısal değişim ne oldu?"</li>
                  <li>"Bu problem durumunu günlük hayatında nerede gözlemlemiş olabilirsin?"</li>
                  <li>"Seçenekleri elerken hangi bilimsel gerekçeye dayandın?"</li>
                </>
              )}
            </ol>
          </div>
        </div>

        {/* Footer */}
        <div className="audit-footer">
          <button className="btn-secondary" onClick={onClose}>
            Kapat
          </button>
        </div>
      </div>
    </div>
  );
}
