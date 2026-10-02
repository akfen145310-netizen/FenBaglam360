import React, { useEffect } from 'react';
import { Printer, X } from 'lucide-react';
import ScientificDiagram from './ScientificDiagram.jsx';

export default function PdfPrintSheet({
  questions = [],
  subtopic,
  unit,
  grade = 5,
  settings,
  onClose
}) {
  // ESC tuşu ile modalı anında kapatma ve arka plan kaydırmasını engelleme
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' || e.key === 'Esc') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [onClose]);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="pdf-print-root relative bg-slate-900/60 min-h-screen">
      {/* 1. EKRAN KONTROL ÇUBUĞU (Yazıcıda ve PDF çıktısında gizlenir) */}
      <div className="no-print sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 px-4 py-3 shadow-md">
        <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-amber-500 text-white flex items-center justify-center font-bold text-sm">
              PDF
            </div>
            <div>
              <div className="font-bold text-slate-800 text-xs sm:text-sm flex items-center gap-1.5">
                <span>MEB & Maarif Sınav Baskı Önizleme Modu</span>
                <span className="px-2 py-0.5 rounded-full bg-purple-100 text-purple-800 text-[10px] font-bold">
                  {questions.length} Soru
                </span>
              </div>
              <div className="text-[11px] text-slate-500">
                {grade}. Sınıf • {subtopic?.title || 'Fen Bilimleri'}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-xs rounded-xl shadow-sm hover:shadow transition-all flex items-center gap-2 cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              <span>Yazdır / PDF Olarak Kaydet</span>
            </button>

            <button
              onClick={onClose}
              className="px-3 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-xl transition-colors flex items-center gap-1.5 cursor-pointer border border-slate-300"
              title="Kapat (ESC)"
            >
              <X className="w-4 h-4 text-slate-600" />
              <span>Kapat (Esc)</span>
            </button>
          </div>
        </div>
      </div>

      {/* 2. BASILABİLİR SINAV KİTAPÇIĞI (A4 Uyumlu) */}
      <div className="max-w-5xl mx-auto my-4 sm:my-6 bg-white shadow-2xl rounded-2xl p-6 sm:p-10 border border-slate-300 print:shadow-none print:border-none print:m-0 print:p-0 print:rounded-none" id="printable-exam-sheet">
        
        {/* RESMİ MEB SINAV BAŞLIĞI */}
        <header className="border-b-2 border-slate-900 pb-4 mb-6">
          <div className="flex items-center justify-between gap-4 border-b border-slate-300 pb-3">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full border-2 border-slate-900 flex items-center justify-center font-bold text-xs text-slate-900 text-center leading-tight tracking-tighter">
                T.C.<br />MEB
              </div>
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  {settings?.schoolName || 'T.C. MİLLÎ EĞİTİM BAKANLIĞI'}
                </h3>
                <h2 className="text-base sm:text-lg font-black tracking-tight text-slate-950 font-serif">
                  {settings?.examTitle || 'TÜRKİYE YÜZYILI MAARİF MODELİ FEN BİLİMLERİ İZLEME SINAVI'}
                </h2>
              </div>
            </div>

            <div className="text-right text-xs font-semibold text-slate-700 space-y-0.5 font-mono">
              <div>Soru Sayısı: <strong className="text-black">{questions.length}</strong></div>
              <div>Sınav Süresi: <strong className="text-black">{questions.length * 2} Dk.</strong></div>
            </div>
          </div>

          <div className="mt-2 text-xs font-bold text-slate-800">
            {grade}. Sınıf Fen Bilimleri • {unit?.unitTitle ? `${unit.unitTitle} • ` : ''}{subtopic?.title}
          </div>

          {/* ÖĞRENCİ BİLGİ ALANI */}
          <div className="mt-3 grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs border border-slate-400 p-2.5 rounded-lg bg-slate-50/50 print:bg-transparent">
            <div>
              <span className="font-bold text-slate-600">Adı Soyadı:</span>
              <span className="block border-b border-dotted border-slate-500 mt-3"></span>
            </div>
            <div>
              <span className="font-bold text-slate-600">Sınıfı / Şubesi:</span>
              <span className="block border-b border-dotted border-slate-500 mt-3"></span>
            </div>
            <div>
              <span className="font-bold text-slate-600">Okul Numarası:</span>
              <span className="block border-b border-dotted border-slate-500 mt-3"></span>
            </div>
            <div>
              <span className="font-bold text-slate-600">Puan:</span>
              <span className="block border border-slate-400 rounded text-center py-0.5 font-bold font-mono text-slate-700 mt-1">
                / 100
              </span>
            </div>
          </div>
        </header>

        {/* SORULAR LİSTESİ */}
        <div className="space-y-6">
          {questions.map((q, idx) => {
            // Güvenli veri çıkarma
            const qNum = q.number || idx + 1;
            const contextText = q.baglam || q.contextText || q.scenario || '';
            const questionStem = q.soruKoku || q.questionStem || q.question || '';
            const diagramType = q.diagramType || q.svgDiagram || '';
            const diagramTitle = q.diagramTitle || '';
            const skill = q.olculenBeceri || q.skill || 'Problem Çözme';
            const process = q.processComponent || 'SB5 Çıkarım Yapmak';
            const diff = q.difficulty || 'Orta';
            const kazanim = q.olculenKazanim || q.kazanim || q.code || '';

            // Seçenekleri normalize et
            let optionsList = [];
            if (Array.isArray(q.options) && q.options.length > 0) {
              optionsList = q.options;
            } else if (q.secenekler) {
              optionsList = ['A', 'B', 'C', 'D']
                .filter(k => q.secenekler && q.secenekler[k])
                .map(k => ({ key: k, text: q.secenekler[k] }));
            }

            return (
              <div
                key={q.id || `q-${idx}`}
                className="print-question-card border border-slate-300 rounded-xl p-4 sm:p-5 bg-white text-slate-900 break-inside-avoid print:border-slate-400 print:p-3 print:my-4 print:shadow-none shadow-xs"
                style={{ pageBreakInside: 'avoid', breakInside: 'avoid' }}
              >
                {/* Soru Başlığı */}
                <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-200 mb-3 font-semibold text-slate-700">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-md bg-slate-900 text-white font-extrabold flex items-center justify-center font-mono text-xs">
                      {qNum}
                    </span>
                    <span className="font-bold text-slate-900">
                      {kazanim || `Kazanım #${qNum}`}
                    </span>
                    <span className="text-slate-500">
                      ({skill}{process ? ` • ${process}` : ''})
                    </span>
                  </div>
                  <span className="text-[11px] px-2 py-0.5 rounded bg-slate-100 border border-slate-200 font-mono">
                    [{diff}]
                  </span>
                </div>

                {/* GERÇEK YAŞAM BAĞLAMI / SENARYO KUTUSU */}
                {contextText && (
                  <div className="bg-slate-50 border border-slate-200 rounded-lg p-3 my-2 text-xs sm:text-sm text-slate-800 leading-relaxed font-sans print:bg-slate-100/50 print:border-slate-300">
                    <div className="text-[11px] font-bold text-slate-600 mb-1 flex items-center gap-1 uppercase tracking-wider">
                      <span>📌 GERÇEK YAŞAM BAĞLAMI & BİLİMSEL SENARYO:</span>
                    </div>
                    <div className="whitespace-pre-line">
                      {contextText}
                    </div>
                  </div>
                )}

                {/* BİLİMSEL DİYAGRAM / ŞEMA (VARSA) */}
                {diagramType && (
                  <div className="my-3 p-2 bg-slate-50 border border-slate-200 rounded-lg flex flex-col items-center justify-center print:bg-white print:border-slate-300 overflow-hidden" style={{ printColorAdjust: 'exact', WebkitPrintColorAdjust: 'exact' }}>
                    <div className="w-full max-w-lg">
                      <ScientificDiagram type={diagramType} title={diagramTitle} />
                    </div>
                    {diagramTitle && (
                      <div className="text-[10px] text-slate-500 mt-1 italic text-center font-sans">
                        {diagramTitle}
                      </div>
                    )}
                  </div>
                )}

                {/* VERİ TABLOSU (VARSA) */}
                {q.contextData && q.contextData.type === 'table' && (
                  <div className="my-3 overflow-x-auto">
                    <table className="w-full text-xs border-collapse border border-slate-400 text-left">
                      <thead className="bg-slate-100 font-bold">
                        <tr>
                          {q.contextData.headers.map((h, i) => (
                            <th key={i} className="border border-slate-400 p-2">{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {q.contextData.rows.map((row, rIdx) => (
                          <tr key={rIdx} className={rIdx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                            {row.map((cell, cIdx) => (
                              <td key={cIdx} className="border border-slate-400 p-2">{cell}</td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {/* SORU KÖKÜ */}
                <div className="my-3 font-bold text-slate-950 text-xs sm:text-sm leading-snug">
                  {questionStem || 'Yukarıdaki bilgilere göre doğru çıkarım hangisidir?'}
                </div>

                {/* SEÇENEKLER (A, B, C, D) */}
                <div className="grid sm:grid-cols-2 gap-2 pt-1">
                  {optionsList.map(opt => (
                    <div
                      key={opt.key}
                      className="flex items-start gap-2.5 p-2 rounded-lg border border-slate-200 text-xs sm:text-sm bg-white print:border-slate-300"
                    >
                      <span className="w-5 h-5 rounded-full border border-slate-700 font-bold text-xs flex items-center justify-center flex-shrink-0 text-slate-900 font-mono mt-0.5">
                        {opt.key}
                      </span>
                      <span className="leading-snug text-slate-800">
                        {opt.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* 3. OPTİK CEVAP KAĞIDI (A4 İKİNCİ SAYFA / SON KISIM) */}
        <div className="mt-8 pt-6 border-t-2 border-slate-900 break-before-page print:break-before-page" style={{ pageBreakBefore: 'always', breakBefore: 'page' }}>
          <h4 className="text-center font-extrabold text-sm uppercase tracking-wider text-slate-900 mb-4 font-serif">
            OPTİK CEVAP İŞARETLEME VE DEĞERLENDİRME FORMU
          </h4>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-3 text-xs">
            {questions.map((q, idx) => (
              <div key={q.id || idx} className="flex items-center gap-1.5 p-1.5 border border-slate-300 rounded bg-slate-50/50 print:bg-transparent">
                <span className="font-bold w-5 text-right font-mono">{idx + 1}.</span>
                {['A', 'B', 'C', 'D'].map(ltr => (
                  <span
                    key={ltr}
                    className="w-5 h-5 rounded-full border border-slate-600 flex items-center justify-center font-bold text-[10px] text-slate-800"
                  >
                    {ltr}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* 4. CEVAP ANAHTARI & ÇÖZÜM KILAVUZU */}
        <div className="mt-8 pt-6 border-t border-slate-300 text-xs">
          <h4 className="font-bold text-slate-900 uppercase tracking-wider mb-2 font-serif">
            CEVAP ANAHTARI
          </h4>
          <div className="grid grid-cols-5 sm:grid-cols-10 gap-1.5 text-center font-mono">
            {questions.map((q, idx) => (
              <div key={q.id || idx} className="p-1 border border-slate-300 rounded bg-slate-100 print:bg-white">
                <span className="text-slate-500 text-[10px] block">{idx + 1}</span>
                <strong className="text-slate-900 text-xs">{q.dogruCevap || q.correctAnswer || '-'}</strong>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
