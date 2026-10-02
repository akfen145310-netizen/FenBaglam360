import React, { useState } from 'react';
import { 
  Eye, 
  EyeOff, 
  Sparkles, 
  Lightbulb, 
  Compass, 
  BookOpen, 
  Layers, 
  FlaskConical, 
  CheckCircle2, 
  HelpCircle, 
  ArrowRight, 
  GitBranch, 
  Bookmark, 
  Cpu, 
  Clock,
  ExternalLink,
  ChevronRight,
  Newspaper,
  CheckSquare,
  Table as TableIcon,
  Award
} from 'lucide-react';
import { SectionContent, DDANode } from '../types';

interface InteractiveLessonViewProps {
  section: SectionContent;
  onGoToBlanks: () => void;
  onGoToMCQ: () => void;
  onGoToNextSection?: (targetCode?: string) => void;
}

export const InteractiveLessonView: React.FC<InteractiveLessonViewProps> = ({
  section,
  onGoToBlanks,
  onGoToMCQ,
  onGoToNextSection
}) => {
  // Independent click-to-reveal state trackers
  const [revealedPreEval, setRevealedPreEval] = useState<Record<string, boolean>>({});
  const [revealedPrep, setRevealedPrep] = useState<boolean>(false);
  const [revealedCuriosity, setRevealedCuriosity] = useState<boolean>(false);
  const [revealedBridge, setRevealedBridge] = useState<boolean>(false);
  const [revealedActivitySub, setRevealedActivitySub] = useState<Record<string, boolean>>({});
  const [revealedOgrenildiQuestions, setRevealedOgrenildiQuestions] = useState<Record<string, boolean>>({});
  const [activeHikmetTab, setActiveHikmetTab] = useState<number>(1);
  const [revealedAllHikmet, setRevealedAllHikmet] = useState<boolean>(false);

  // MEB Ders Kitabı Detaylı Alanlar İçin State'ler
  const [revealedBaglanti, setRevealedBaglanti] = useState<Record<string, boolean>>({});
  const [revealedHaber, setRevealedHaber] = useState<Record<string, boolean>>({});
  const [revealedKontrol, setRevealedKontrol] = useState<Record<string, boolean>>({});
  const [selectedKontrolOptions, setSelectedKontrolOptions] = useState<Record<string, string>>({});
  const [revealedNelerOgrenildiSorulari, setRevealedNelerOgrenildiSorulari] = useState<Record<string, boolean>>({});

  const toggleBaglanti = (id: string) => {
    setRevealedBaglanti(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleHaber = (id: string) => {
    setRevealedHaber(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleKontrol = (id: string) => {
    setRevealedKontrol(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleSelectKontrolOption = (questionId: string, option: string) => {
    setSelectedKontrolOptions(prev => ({ ...prev, [questionId]: option }));
  };

  const toggleNelerOgrenildiSoru = (id: string) => {
    setRevealedNelerOgrenildiSorulari(prev => ({ ...prev, [id]: !prev[id] }));
  };

  // DDA (Tanılayıcı Dallanmış Ağaç) interactive state
  const [ddaPath, setDdaPath] = useState<('D' | 'Y')[]>([]);
  const [ddaCompleted, setDdaCompleted] = useState<boolean>(false);
  const [ddaExit, setDdaExit] = useState<number | null>(null);
  const [ddaFeedback, setDdaFeedback] = useState<string>('');

  // Pekiştirme İstasyonu state
  const [revealedStationNotes, setRevealedStationNotes] = useState<boolean>(false);
  const [checkedStationSkills, setCheckedStationSkills] = useState<Record<number, boolean>>({});

  const toggleStationSkill = (index: number) => {
    setCheckedStationSkills(prev => ({ ...prev, [index]: !prev[index] }));
  };

  const togglePreEval = (id: string) => {
    setRevealedPreEval(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleActivitySub = (qId: string) => {
    setRevealedActivitySub(prev => ({ ...prev, [qId]: !prev[qId] }));
  };

  const resetDDA = () => {
    setDdaPath([]);
    setDdaCompleted(false);
    setDdaExit(null);
    setDdaFeedback('');
  };

  const handleDDAChoice = (stepIndex: number, choice: 'D' | 'Y') => {
    const newPath = [...ddaPath.slice(0, stepIndex), choice];
    setDdaPath(newPath);

    // Evaluate root
    const root = section.dda;
    if (newPath.length === 1) {
      if (choice === 'D' && root.ifTrue) {
        // If node has further branches, continue
        if ('statement' in root.ifTrue) {
          setDdaCompleted(false);
        } else {
          setDdaCompleted(true);
          setDdaExit(root.ifTrue.exit);
          setDdaFeedback(root.ifTrue.feedback);
        }
      } else if (choice === 'Y' && root.ifFalse) {
        if ('statement' in root.ifFalse) {
          setDdaCompleted(false);
        } else {
          setDdaCompleted(true);
          setDdaExit(root.ifFalse.exit);
          setDdaFeedback(root.ifFalse.feedback);
        }
      } else {
        // Fallback default decision
        setDdaCompleted(true);
        setDdaExit(choice === 'D' ? 1 : 2);
        setDdaFeedback(choice === 'D' ? 'Doğru kararla ilerlediniz!' : 'Yanlış tercih yapıldı.');
      }
    } else if (newPath.length === 2) {
      // Step 2 evaluation
      const currentBranch = newPath[0] === 'D' ? root.ifTrue : root.ifFalse;
      if (currentBranch && 'statement' in currentBranch) {
        const leaf = choice === 'D' ? currentBranch.ifTrue : currentBranch.ifFalse;
        if (leaf && 'exit' in leaf) {
          setDdaCompleted(true);
          setDdaExit(leaf.exit);
          setDdaFeedback(leaf.feedback);
        }
      }
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 space-y-10">
      {/* Unit & Section Header Banner */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-amber-950 to-slate-900 text-white p-6 sm:p-8 shadow-lg border border-amber-900/30">
        <div className="relative z-10 space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-md bg-amber-500 text-slate-950 font-bold text-xs">
              {section.unitCode}
            </span>
            <span className="text-amber-300/90 text-xs font-semibold">
              {section.unitTitle}
            </span>
            <span className="text-slate-400">•</span>
            <span className="px-2 py-0.5 rounded bg-white/10 text-white text-xs font-mono">
              Bölüm {section.code}
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-bold font-serif tracking-tight text-white">
            {section.title}
          </h1>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-3xl">
            {section.summary}
          </p>

          {/* Kazanımlar Pill Box */}
          <div className="pt-2">
            <div className="text-[11px] font-bold text-amber-400 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              Müfredat & Maarif Kazanımları
            </div>
            <div className="flex flex-wrap gap-2">
              {section.kazanimlar.map((kazanim, idx) => (
                <div
                  key={idx}
                  className="bg-black/30 border border-amber-400/20 px-2.5 py-1 rounded-lg text-xs text-amber-100 flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  {kazanim}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 1. İSTASYON: Hatırlayalım & Ön Değerlendirme İstasyonu */}
      <section className="bg-white rounded-2xl border border-slate-200/90 shadow-xs p-6 sm:p-7 space-y-6">
        <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
          <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
            <BookOpen className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-slate-900 font-serif">
              1. Hatırlayalım & Ön Değerlendirme İstasyonu
            </h2>
            <p className="text-xs text-slate-500">
              Önceki bilgileri hatırla ve soruların cevaplarını bağımsız tıklamayla aç
            </p>
          </div>
        </div>

        {/* Hatırlayalım Box */}
        <div className="bg-amber-50/70 border border-amber-200/60 rounded-xl p-4.5 space-y-3">
          <div className="text-xs font-bold text-amber-900 flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-amber-600" />
            Önceki Bilgilerimizden Hatırlayalım
          </div>
          <p className="text-sm text-slate-700 leading-relaxed">
            {section.hatirlayalim.text}
          </p>
          <div className="grid sm:grid-cols-3 gap-2 pt-1">
            {section.hatirlayalim.keyPoints.map((kp: string, idx: number) => (
              <div
                key={idx}
                className="bg-white/90 border border-amber-200/80 rounded-lg p-2.5 text-xs text-slate-700 flex items-start gap-2"
              >
                <span className="font-bold text-amber-600">✓</span>
                <span>{kp}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Ön Değerlendirme Soruları: Independent Click-to-Reveal */}
        <div className="space-y-3">
          <div className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center justify-between">
            <span>Ön Değerlendirme Soruları (Bağımsız Tıklamayla Açılan Cevaplar)</span>
            <span className="text-[11px] text-amber-700 font-normal">
              {Object.keys(revealedPreEval).filter(k => revealedPreEval[k]).length} / {section.onDegerlendirme.length} Açıldı
            </span>
          </div>

          <div className="grid gap-3">
            {section.onDegerlendirme.map((item, idx) => {
              const isRevealed = !!revealedPreEval[item.id];
              return (
                <div
                  key={item.id}
                  className="rounded-xl border border-slate-200 overflow-hidden bg-slate-50/50 transition-all hover:border-amber-300"
                >
                  <div className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="flex items-start gap-2.5">
                      <span className="w-6 h-6 rounded-full bg-slate-200 text-slate-700 font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <p className="text-sm font-semibold text-slate-800">
                        {item.question}
                      </p>
                    </div>

                    <button
                      id={`reveal-preeval-${item.id}`}
                      onClick={() => togglePreEval(item.id)}
                      className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all self-end sm:self-auto cursor-pointer ${
                        isRevealed
                          ? 'bg-amber-100 text-amber-800 hover:bg-amber-200'
                          : 'bg-amber-600 text-white hover:bg-amber-700 shadow-xs'
                      }`}
                    >
                      {isRevealed ? (
                        <>
                          <EyeOff className="w-3.5 h-3.5" />
                          <span>Cevabı Gizle</span>
                        </>
                      ) : (
                        <>
                          <Eye className="w-3.5 h-3.5" />
                          <span>Cevabı Gör</span>
                        </>
                      )}
                    </button>
                  </div>

                  {isRevealed && (
                    <div className="px-4 pb-4 pt-2 border-t border-amber-200/60 bg-amber-50/40 animate-in fade-in duration-200">
                      <div className="text-xs font-bold text-amber-900 mb-1 flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                        Açıklamalı Doğru Yanıt:
                      </div>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 2. İSTASYON: Hazırlık, Merak & Köprü İstasyonları */}
      <section className="grid sm:grid-cols-2 gap-5">
        {/* Hazırlık İstasyonu */}
        <div className="bg-white rounded-2xl border border-slate-200/90 shadow-xs p-5 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-amber-700 font-bold text-xs uppercase tracking-wider">
              <Lightbulb className="w-4 h-4 text-amber-600" />
              Hazırlık İstasyonu (Düşün-Sorgula)
            </div>
            <p className="text-sm font-semibold text-slate-800 leading-snug">
              {section.hazirlik.question}
            </p>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-100">
            {revealedPrep ? (
              <div className="bg-amber-50/70 p-3 rounded-xl border border-amber-200/60 text-xs sm:text-sm text-slate-700 space-y-2 animate-in fade-in">
                <div className="font-bold text-amber-900 flex items-center justify-between">
                  <span>Maarif Yanıtı:</span>
                  <button
                    onClick={() => setRevealedPrep(false)}
                    className="text-[11px] text-amber-700 hover:underline cursor-pointer"
                  >
                    Kapat
                  </button>
                </div>
                <p>{section.hazirlik.answer}</p>
              </div>
            ) : (
              <button
                id="btn-reveal-prep"
                onClick={() => setRevealedPrep(true)}
                className="w-full py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-xl flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                <Eye className="w-3.5 h-3.5 text-amber-600" />
                <span>Hazırlık Cevabını Göster</span>
              </button>
            )}
          </div>
        </div>

        {/* Merak İstasyonu */}
        <div className="bg-white rounded-2xl border border-slate-200/90 shadow-xs p-5 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-sky-700 font-bold text-xs uppercase tracking-wider">
              <Compass className="w-4 h-4 text-sky-600" />
              Merak İstasyonu (Keşfet)
            </div>
            <p className="text-sm font-semibold text-slate-800 leading-snug">
              {section.merak.question}
            </p>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-100">
            {revealedCuriosity ? (
              <div className="bg-sky-50/70 p-3 rounded-xl border border-sky-200/60 text-xs sm:text-sm text-slate-700 space-y-2 animate-in fade-in">
                <div className="font-bold text-sky-900 flex items-center justify-between">
                  <span>Bilimsel Keşif:</span>
                  <button
                    onClick={() => setRevealedCuriosity(false)}
                    className="text-[11px] text-sky-700 hover:underline cursor-pointer"
                  >
                    Kapat
                  </button>
                </div>
                <p>{section.merak.answer}</p>
              </div>
            ) : (
              <button
                id="btn-reveal-curiosity"
                onClick={() => setRevealedCuriosity(true)}
                className="w-full py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-xl flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                <Eye className="w-3.5 h-3.5 text-sky-600" />
                <span>Merak Cevabını Göster</span>
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Köprü İstasyonu */}
      {section.kopru && (
        <div className="bg-gradient-to-r from-amber-50 via-white to-sky-50 border border-amber-200 rounded-2xl p-5 sm:p-6 shadow-xs space-y-3">
          <div className="flex items-center gap-2 text-xs font-bold text-amber-800 uppercase tracking-wider">
            <Cpu className="w-4 h-4 text-amber-600" />
            {section.kopru.title}
          </div>
          <p className="text-sm text-slate-700 leading-relaxed font-medium">
            {section.kopru.content}
          </p>
          <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white/80 p-3 rounded-xl border border-amber-100">
            <div className="text-xs font-semibold text-slate-800">
              Soru: {section.kopru.question}
            </div>
            {revealedBridge ? (
              <div className="text-xs font-bold text-amber-900 bg-amber-100/70 px-3 py-1.5 rounded-lg">
                Cevap: {section.kopru.answer}
              </div>
            ) : (
              <button
                onClick={() => setRevealedBridge(true)}
                className="px-3 py-1.5 bg-amber-600 text-white rounded-lg text-xs font-semibold hover:bg-amber-700 transition-colors cursor-pointer self-start sm:self-auto"
              >
                Tıkla ve Öğren
              </button>
            )}
          </div>
        </div>
      )}

      {/* MEB DERS KİTABI DETAYLI KONU ANLATIMI & KAVRAMLAR */}
      {section.konuAnlatimi && (
        <section className="bg-white rounded-2xl border border-slate-200/90 shadow-xs p-6 sm:p-7 space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-600 text-white flex items-center justify-center font-bold shadow-xs">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-900 font-serif">
                Konu Anlatımı ve Temel Kavramlar İstasyonu
              </h2>
              <p className="text-xs text-slate-500">
                Öğrenilmesi gereken kritik tanımlar, açıklamalar ve teknoloji modelleri
              </p>
            </div>
          </div>

          {section.konuAnlatimi.ozet && (
            <div className="bg-indigo-50/50 p-4 rounded-xl border border-indigo-100 text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
              {section.konuAnlatimi.ozet}
            </div>
          )}

          {/* Kavram Kartları */}
          <div className="grid md:grid-cols-2 gap-4">
            {section.konuAnlatimi.kavramlar.map((kavram, idx) => (
              <div 
                key={idx} 
                className="bg-gradient-to-br from-slate-50 to-indigo-50/20 border border-slate-200/90 rounded-xl p-4.5 space-y-2.5 hover:border-indigo-300 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-indigo-600 flex-shrink-0"></span>
                  <h3 className="text-sm font-bold text-slate-900 font-serif">{kavram.terim}</h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">{kavram.tanim}</p>
                {kavram.onemliNoktalar && kavram.onemliNoktalar.length > 0 && (
                  <div className="pt-2 border-t border-slate-200/60 space-y-1">
                    {kavram.onemliNoktalar.map((pt, pIdx) => (
                      <div key={pIdx} className="text-xs text-slate-600 flex items-start gap-1.5">
                        <span className="text-indigo-600 font-bold">•</span>
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                )}
                {kavram.ornekler && (
                  <div className="text-xs font-semibold text-indigo-900 bg-indigo-100/70 px-2.5 py-1 rounded-md">
                    💡 <span className="underline mr-1">Örnek:</span> {kavram.ornekler}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Tablolar (örn. Türkiye'nin Uyduları Tablosu) */}
          {section.konuAnlatimi.tablolar && section.konuAnlatimi.tablolar.map((tablo, tIdx) => (
            <div key={tIdx} className="mt-4 border border-slate-200 rounded-xl overflow-hidden bg-white shadow-xs">
              <div className="bg-slate-900 text-white px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-2 font-bold text-xs sm:text-sm">
                  <TableIcon className="w-4 h-4 text-amber-400" />
                  <span>{tablo.baslik}</span>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm border-collapse">
                  <thead>
                    <tr className="bg-slate-100 border-b border-slate-200 text-slate-800 font-semibold">
                      {tablo.sutunlar.map((sutun, sIdx) => (
                        <th key={sIdx} className="p-3 whitespace-nowrap">{sutun}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-700">
                    {tablo.satirlar.map((satir, rIdx) => (
                      <tr key={rIdx} className="hover:bg-indigo-50/30 transition-colors">
                        {satir.map((hucre, cIdx) => {
                          const isAktif = hucre.includes('Aktif');
                          const isPasif = hucre.includes('Pasif') || hucre.includes('Görevini Tamamladı') || hucre.includes('Sonlandı');
                          return (
                            <td key={cIdx} className="p-3">
                              {isAktif ? (
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800">
                                  {hucre}
                                </span>
                              ) : isPasif ? (
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-slate-200 text-slate-700">
                                  {hucre}
                                </span>
                              ) : (
                                hucre
                              )}
                            </td>
                          );
                        })}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {tablo.dipnot && (
                <div className="bg-slate-50 px-4 py-2 text-[11px] text-slate-500 border-t border-slate-200 font-medium">
                  {tablo.dipnot}
                </div>
              )}
            </div>
          ))}
        </section>
      )}

      {/* BAĞLANTI NOKTALARI İSTASYONU */}
      {section.baglantiNoktalari && section.baglantiNoktalari.length > 0 && (
        <section className="bg-white rounded-2xl border border-slate-200/90 shadow-xs p-6 sm:p-7 space-y-4">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white flex items-center justify-center font-bold shadow-xs">
              <GitBranch className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-900 font-serif">
                Bağlantı Noktaları (Disiplinler Arası Köprüler)
              </h2>
              <p className="text-xs text-slate-500">
                Fen bilimlerinin teknoloji, matematik, tarih ve günlük yaşamla olan doğrudan bağı
              </p>
            </div>
          </div>

          <div className="grid gap-3">
            {section.baglantiNoktalari.map(baglanti => {
              const isRevealed = !!revealedBaglanti[baglanti.id];
              return (
                <div 
                  key={baglanti.id} 
                  className="rounded-xl border border-slate-200 bg-slate-50/50 p-4 transition-all hover:border-emerald-300"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800">
                          {baglanti.alan}
                        </span>
                        <h3 className="text-sm font-bold text-slate-900">{baglanti.baslik}</h3>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">{baglanti.aciklama}</p>
                      {baglanti.soru && (
                        <p className="text-xs font-semibold text-emerald-950 mt-1">
                          <span className="font-bold text-emerald-800">Soru:</span> {baglanti.soru}
                        </p>
                      )}
                    </div>

                    {baglanti.cevap && (
                      <button
                        onClick={() => toggleBaglanti(baglanti.id)}
                        className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all self-end sm:self-auto cursor-pointer flex-shrink-0 ${
                          isRevealed
                            ? 'bg-emerald-100 text-emerald-800 hover:bg-emerald-200'
                            : 'bg-emerald-600 text-white hover:bg-emerald-700 shadow-xs'
                        }`}
                      >
                        {isRevealed ? <><EyeOff className="w-3.5 h-3.5" /> Gizle</> : <><Eye className="w-3.5 h-3.5" /> Cevabı Gör</>}
                      </button>
                    )}
                  </div>

                  {isRevealed && baglanti.cevap && (
                    <div className="mt-3 pt-3 border-t border-emerald-200/60 bg-emerald-50/60 p-3 rounded-lg text-xs sm:text-sm text-slate-700 animate-in fade-in">
                      <span className="font-bold text-emerald-900 block mb-1">Maarif Açıklamalı Yanıt:</span>
                      {baglanti.cevap}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* BİLİM VE TEKNOLOJİ HABERLERİ */}
      {section.haberler && section.haberler.length > 0 && (
        <section className="bg-white rounded-2xl border border-slate-200/90 shadow-xs p-6 sm:p-7 space-y-4">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-rose-500 to-pink-600 text-white flex items-center justify-center font-bold shadow-xs">
              <Newspaper className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-900 font-serif">
                Bilim ve Teknoloji Haberleri
              </h2>
              <p className="text-xs text-slate-500">
                Ders kitabında yer alan güncel bilimsel haber metinleri, analiz soruları ve çözümleri
              </p>
            </div>
          </div>

          <div className="grid gap-4">
            {section.haberler.map(haber => {
              const isRevealed = !!revealedHaber[haber.id];
              return (
                <div key={haber.id} className="rounded-xl border border-rose-200/80 bg-rose-50/30 p-4.5 space-y-3">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <h3 className="text-sm font-bold text-rose-950 font-serif flex items-center gap-1.5">
                      <Bookmark className="w-4 h-4 text-rose-600" />
                      {haber.baslik}
                    </h3>
                    {haber.kaynak && (
                      <span className="text-[11px] text-slate-500 italic">Kaynak: {haber.kaynak}</span>
                    )}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">{haber.ozet}</p>
                  <div className="bg-white p-3 rounded-xl border border-rose-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="text-xs font-semibold text-slate-800">
                      <span className="text-rose-700 font-bold mr-1">Haber Sorusu:</span>
                      {haber.soru}
                    </div>
                    <button
                      onClick={() => toggleHaber(haber.id)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all self-end sm:self-auto cursor-pointer flex-shrink-0 ${
                        isRevealed
                          ? 'bg-rose-100 text-rose-800 hover:bg-rose-200'
                          : 'bg-rose-600 text-white hover:bg-rose-700 shadow-xs'
                      }`}
                    >
                      {isRevealed ? <><EyeOff className="w-3.5 h-3.5" /> Gizle</> : <><Eye className="w-3.5 h-3.5" /> Haberi Çözümle</>}
                    </button>
                  </div>
                  {isRevealed && (
                    <div className="bg-rose-100/70 p-3 rounded-lg text-xs sm:text-sm text-slate-800 animate-in fade-in">
                      <div className="font-bold text-rose-950 mb-1 flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5 text-rose-700" />
                        Haber Çözümü ve Değerlendirmesi:
                      </div>
                      {haber.cevap}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* KONTROL NOKTALARI (ETKİLEŞİMLİ ARA DEĞERLENDİRMELER) */}
      {section.kontrolNoktalari && section.kontrolNoktalari.length > 0 && (
        <section className="bg-white rounded-2xl border border-slate-200/90 shadow-xs p-6 sm:p-7 space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 text-white flex items-center justify-center font-bold shadow-xs">
              <CheckSquare className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-900 font-serif">
                Kontrol Noktaları (Etkileşimli Ara Değerlendirmeler)
              </h2>
              <p className="text-xs text-slate-500">
                Konu aralarındaki kontrol soruları; seçenekleri işaretleyin ve çözümleri anında görün
              </p>
            </div>
          </div>

          <div className="space-y-6">
            {section.kontrolNoktalari.map(kn => (
              <div key={kn.id} className="border border-slate-200 rounded-xl p-4.5 bg-slate-50/50 space-y-4">
                <div className="font-bold text-sm text-slate-900 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-orange-500"></span>
                  <span>{kn.baslik}</span>
                </div>

                <div className="grid gap-3">
                  {kn.sorular.map(soru => {
                    const isRevealed = !!revealedKontrol[soru.id];
                    const selectedOpt = selectedKontrolOptions[soru.id];
                    return (
                      <div key={soru.id} className="bg-white rounded-xl border border-slate-200 p-4 space-y-3">
                        <div className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                          {soru.soru}
                        </div>

                        {/* Çoktan seçmeli ise şıklar */}
                        {soru.secenekler && soru.secenekler.length > 0 && (
                          <div className="grid sm:grid-cols-2 gap-2 pt-1">
                            {soru.secenekler.map((opt, oIdx) => {
                              const optKey = opt.split(')')[0].trim();
                              const isSelected = selectedOpt === optKey;
                              const isCorrectOpt = soru.dogruSecenek === optKey;
                              return (
                                <button
                                  key={oIdx}
                                  onClick={() => handleSelectKontrolOption(soru.id, optKey)}
                                  className={`p-2.5 rounded-lg text-xs text-left font-medium transition-all border cursor-pointer ${
                                    isSelected
                                      ? (isRevealed && isCorrectOpt
                                          ? 'bg-emerald-50 border-emerald-500 text-emerald-900 font-bold'
                                          : isRevealed && !isCorrectOpt
                                          ? 'bg-rose-50 border-rose-500 text-rose-900'
                                          : 'bg-amber-100 border-amber-500 text-amber-950 font-bold')
                                      : (isRevealed && isCorrectOpt
                                          ? 'bg-emerald-50/80 border-emerald-400 text-emerald-800'
                                          : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100')
                                  }`}
                                >
                                  {opt}
                                </button>
                              );
                            })}
                          </div>
                        )}

                        <div className="flex justify-end pt-1">
                          <button
                            onClick={() => toggleKontrol(soru.id)}
                            className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                              isRevealed
                                ? 'bg-slate-200 text-slate-800 hover:bg-slate-300'
                                : 'bg-orange-600 text-white hover:bg-orange-700 shadow-xs'
                            }`}
                          >
                            {isRevealed ? <><EyeOff className="w-3.5 h-3.5" /> Çözümü Gizle</> : <><Eye className="w-3.5 h-3.5" /> Cevabı ve Çözümü Gör</>}
                          </button>
                        </div>

                        {isRevealed && (
                          <div className="bg-amber-50/80 p-3 rounded-lg border border-amber-200 text-xs sm:text-sm text-slate-800 space-y-1 animate-in fade-in">
                            <div className="font-bold text-amber-950 flex items-center gap-1.5">
                              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                              <span>Doğru Yanıt: {soru.cevap}</span>
                            </div>
                            {soru.aciklama && (
                              <p className="text-slate-600 leading-relaxed text-xs">{soru.aciklama}</p>
                            )}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* BİLGİ BANKASI İSTASYONU */}
      {section.bilgiBankasi && section.bilgiBankasi.length > 0 && (
        <section className="bg-gradient-to-br from-indigo-950 via-slate-900 to-indigo-950 text-white rounded-2xl p-6 sm:p-7 shadow-lg space-y-4 border border-indigo-800/40">
          <div className="flex items-center gap-3 border-b border-indigo-800/60 pb-3">
            <div className="w-9 h-9 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center font-bold">
              <Lightbulb className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold font-serif text-white">Bilgi Bankası</h2>
              <p className="text-xs text-indigo-200">Ders kitabında yer alan ekstra bilimsel gerçekler ve keşifler</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {section.bilgiBankasi.map(bb => (
              <div key={bb.id} className="bg-white/10 rounded-xl p-4 border border-white/10 space-y-2">
                <h3 className="text-sm font-bold text-amber-300 font-serif">{bb.baslik}</h3>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">{bb.icerik}</p>
                {bb.onemliNot && (
                  <div className="text-xs font-semibold text-amber-200 bg-amber-500/20 px-2.5 py-1 rounded-md">
                    💡 {bb.onemliNot}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 3. İSTASYON: 10 Aşamalı Hikmet ve Yaratılış Perspektifli Anlatım */}
      <section className="bg-white rounded-2xl border border-slate-200/90 shadow-xs p-6 sm:p-7 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 text-white flex items-center justify-center font-bold shadow-xs">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-900 font-serif">
                3. Hikmet ve İspat Eksenli 10 Aşamalı Anlatım
              </h2>
              <p className="text-xs text-slate-500">
                Gözlemden düzene, uyumdan hikmete adım adım tefekkür yolculuğu
              </p>
            </div>
          </div>

          <button
            onClick={() => setRevealedAllHikmet(!revealedAllHikmet)}
            className="px-3 py-1.5 text-xs font-semibold rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50 cursor-pointer self-start sm:self-auto"
          >
            {revealedAllHikmet ? 'Adım Adım Moda Geç' : 'Tüm Aşamaları Birlikte Aç'}
          </button>
        </div>

        {/* Step Selector Pills */}
        {!revealedAllHikmet && (
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
            {section.hikmetStages.map(stage => {
              const isActive = activeHikmetTab === stage.stage;
              return (
                <button
                  key={stage.stage}
                  onClick={() => setActiveHikmetTab(stage.stage)}
                  className={`px-3 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-amber-600 text-white shadow-xs'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  <span className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center text-[10px]">
                    {stage.stage}
                  </span>
                  <span>{stage.concept}</span>
                </button>
              );
            })}
          </div>
        )}

        {/* Hikmet Cards Display */}
        {revealedAllHikmet ? (
          <div className="space-y-4">
            {section.hikmetStages.map(st => (
              <div
                key={st.stage}
                className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-amber-50/30 transition-colors"
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="px-2 py-0.5 rounded bg-amber-200/70 text-amber-900 text-xs font-bold font-mono">
                    {st.name}
                  </span>
                  <span className="font-bold text-slate-800 text-xs sm:text-sm">
                    {st.concept}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {st.text}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-gradient-to-br from-amber-50/70 via-white to-orange-50/40 p-6 rounded-2xl border border-amber-200 space-y-4">
            {(() => {
              const currentStage = section.hikmetStages.find(s => s.stage === activeHikmetTab) || section.hikmetStages[0];
              return (
                <>
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-amber-500 text-white text-xs font-bold">
                      {currentStage.name}
                    </span>
                    <span className="text-xs text-amber-800 font-bold">
                      Aşama {currentStage.stage} / 10
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 font-serif">
                    {currentStage.concept}
                  </h3>

                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                    {currentStage.text}
                  </p>

                  <div className="pt-3 border-t border-amber-200/60 flex items-center justify-between">
                    <button
                      disabled={activeHikmetTab === 1}
                      onClick={() => setActiveHikmetTab(prev => Math.max(1, prev - 1))}
                      className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-white border border-slate-200 disabled:opacity-40 cursor-pointer"
                    >
                      ← Önceki Aşama
                    </button>
                    <button
                      disabled={activeHikmetTab === 10}
                      onClick={() => setActiveHikmetTab(prev => Math.min(10, prev + 1))}
                      className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-amber-600 text-white hover:bg-amber-700 disabled:opacity-40 cursor-pointer flex items-center gap-1"
                    >
                      <span>Sonraki Aşama</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </>
              );
            })()}
          </div>
        )}
      </section>

      {/* 4. İSTASYON: Etkinlik İstasyonu (Bağımsız Alt Sorular ve Tıklamayla Açılan Cevaplar) */}
      {section.etkinlikler && section.etkinlikler.length > 0 && (
      <section className="bg-white rounded-2xl border border-slate-200/90 shadow-xs p-6 sm:p-7 space-y-6">
        <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
          <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
            <FlaskConical className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-slate-900 font-serif">
              4. Etkinlik İstasyonu
            </h2>
            <p className="text-xs text-slate-500">
              Uygula, gözlemle ve her alt sorunun cevabını tek tek tıklayarak incele
            </p>
          </div>
        </div>

        {section.etkinlikler.map(etk => (
          <div key={etk.id} className="border border-emerald-200/80 rounded-2xl overflow-hidden bg-emerald-50/20">
            <div className="bg-emerald-600 text-white p-4 flex flex-wrap items-center justify-between gap-2">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider bg-white/20 px-2 py-0.5 rounded">
                  {etk.type}
                </span>
                <h3 className="text-base font-bold mt-1">{etk.title}</h3>
              </div>
            </div>

            <div className="p-5 space-y-4">
              {/* Malzemeler */}
              <div>
                <div className="text-xs font-bold text-slate-700 mb-1.5">Gerekli Malzemeler:</div>
                <div className="flex flex-wrap gap-1.5">
                  {etk.materials.map((m, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-white border border-emerald-200 text-emerald-900 rounded-md text-xs font-medium"
                    >
                      • {m}
                    </span>
                  ))}
                </div>
              </div>

              {/* Deney Adımları */}
              <div className="space-y-1.5 bg-white p-3.5 rounded-xl border border-slate-200">
                <div className="text-xs font-bold text-slate-700 mb-1">Uygulama Adımları:</div>
                <ol className="list-decimal list-inside space-y-1 text-xs text-slate-700">
                  {etk.steps.map((st, idx) => (
                    <li key={idx} className="leading-relaxed">
                      {st}
                    </li>
                  ))}
                </ol>
              </div>

              {/* Sub Questions (Her biri için bağımsız tıklama) */}
              <div className="space-y-3 pt-2">
                <div className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                  Etkinlik Değerlendirme Soruları (Her soru bağımsız açılır):
                </div>

                <div className="space-y-2.5">
                  {etk.questions.map(subQ => {
                    const isSubRevealed = !!revealedActivitySub[subQ.qId];
                    return (
                      <div
                        key={subQ.qId}
                        className="p-3.5 bg-white rounded-xl border border-slate-200 shadow-xs space-y-2"
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex items-start gap-2 text-xs font-semibold text-slate-800">
                            <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                              {subQ.label}
                            </span>
                            <p className="leading-snug">{subQ.prompt}</p>
                          </div>

                          <button
                            id={`btn-subq-${subQ.qId}`}
                            onClick={() => toggleActivitySub(subQ.qId)}
                            className={`px-3 py-1 rounded-lg text-xs font-semibold flex items-center gap-1 flex-shrink-0 transition-colors cursor-pointer ${
                              isSubRevealed
                                ? 'bg-emerald-100 text-emerald-800'
                                : 'bg-emerald-600 text-white hover:bg-emerald-700'
                            }`}
                          >
                            {isSubRevealed ? (
                              <>
                                <EyeOff className="w-3 h-3" />
                                <span>Kapat</span>
                              </>
                            ) : (
                              <>
                                <Eye className="w-3 h-3" />
                                <span>Cevabı Aç</span>
                              </>
                            )}
                          </button>
                        </div>

                        {isSubRevealed && (
                          <div className="p-2.5 bg-emerald-50 rounded-lg border border-emerald-200 text-xs text-slate-700 animate-in fade-in">
                            <strong className="text-emerald-900 block mb-0.5">Bilimsel Açıklama:</strong>
                            {subQ.answer}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
      )}

      {/* 5. İSTASYON: Bilgi İstasyonları (Tarihsel Keşif ve Bilim İnsanları) */}
      {section.bilgiIstasyonlari && section.bilgiIstasyonlari.length > 0 && (
      <section className="bg-white rounded-2xl border border-slate-200/90 shadow-xs p-6 sm:p-7 space-y-5">
        <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
          <div className="w-10 h-10 rounded-xl bg-violet-100 text-violet-800 flex items-center justify-center font-bold">
            <Clock className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-slate-900 font-serif">
              5. Bilgi İstasyonu & Bilim Tarihi
            </h2>
            <p className="text-xs text-slate-500">
              Gözlemciler, uzay misyonları ve fen tarihinin ilham veren isimleri
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {section.bilgiIstasyonlari.map((bi, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl border border-slate-200 bg-slate-50/60 hover:bg-violet-50/30 transition-colors space-y-2"
            >
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold text-violet-700 uppercase tracking-wide">
                  {bi.scientistOrMission}
                </span>
                <Bookmark className="w-3.5 h-3.5 text-violet-400" />
              </div>
              <h4 className="text-sm font-bold text-slate-900">{bi.title}</h4>
              <p className="text-xs text-slate-600 leading-relaxed">{bi.description}</p>
              {bi.hikmetNote && (
                <div className="pt-2 border-t border-slate-200 text-[11px] text-violet-900 font-medium italic">
                  💡 {bi.hikmetNote}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
      )}

      {/* PERFORMANS GÖREVİ İSTASYONU */}
      {section.performansGorevi && (
        <section className="bg-white rounded-2xl border border-slate-200/90 shadow-xs p-6 sm:p-7 space-y-4">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600 text-white flex items-center justify-center font-bold shadow-xs">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-900 font-serif">
                Performans Görevi ve Tasarım Rehberi
              </h2>
              <p className="text-xs text-slate-500">
                {section.performansGorevi.baslik}
              </p>
            </div>
          </div>

          <div className="bg-purple-50/40 rounded-xl border border-purple-200/70 p-4.5 space-y-4">
            <div>
              <span className="text-xs font-bold text-purple-900 uppercase tracking-wider block mb-1">Görevin Amacı:</span>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">{section.performansGorevi.amac}</p>
            </div>

            <div>
              <span className="text-xs font-bold text-purple-900 uppercase tracking-wider block mb-1.5">Süreç Basamakları:</span>
              <div className="space-y-1.5">
                {section.performansGorevi.surecAdimlari.map((adim, aIdx) => (
                  <div key={aIdx} className="text-xs sm:text-sm text-slate-700 flex items-start gap-2">
                    <span className="w-5 h-5 rounded-full bg-purple-200 text-purple-900 font-bold text-[11px] flex items-center justify-center flex-shrink-0 mt-0.5">
                      {aIdx + 1}
                    </span>
                    <span>{adim}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-3 rounded-lg border border-purple-100">
              <span className="text-xs font-bold text-slate-900 block mb-1">Beklenen Nihai Ürün:</span>
              <p className="text-xs text-slate-700">{section.performansGorevi.beklenenUrun}</p>
            </div>

            {section.performansGorevi.degerlendirmeKriterleri && (
              <div className="pt-2 border-t border-purple-200/50">
                <span className="text-xs font-bold text-purple-900 block mb-1.5">Değerlendirme Kriterleri:</span>
                <div className="grid sm:grid-cols-2 gap-2">
                  {section.performansGorevi.degerlendirmeKriterleri.map((krit, kIdx) => (
                    <div key={kIdx} className="text-xs text-slate-700 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-purple-600 flex-shrink-0" />
                      <span>{krit}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* NELER ÖĞRENDİK? (BÖLÜM DEĞERLENDİRME SORULARI VE ÇÖZÜMLERİ) */}
      {section.nelerOgrenildiSorulari && section.nelerOgrenildiSorulari.length > 0 && (
        <section className="bg-white rounded-2xl border border-slate-200/90 shadow-xs p-6 sm:p-7 space-y-4">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-500 to-emerald-600 text-white flex items-center justify-center font-bold shadow-xs">
              <CheckSquare className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-900 font-serif">
                Neler Öğrendik? (Bölüm Sonu Değerlendirme Soruları)
              </h2>
              <p className="text-xs text-slate-500">
                Ders kitabı bölüm sonundaki açık uçlu ve kavramsal sorular; tıklayarak ayrıntılı çözümü açın
              </p>
            </div>
          </div>

          <div className="grid gap-3">
            {section.nelerOgrenildiSorulari.map((soru, sIdx) => {
              const isRevealed = !!revealedNelerOgrenildiSorulari[soru.id];
              return (
                <div 
                  key={soru.id} 
                  className="rounded-xl border border-slate-200 bg-slate-50/50 p-4 transition-all hover:border-teal-300"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                    <div className="flex items-start gap-2.5">
                      <span className="w-6 h-6 rounded-full bg-teal-100 text-teal-800 font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                        {sIdx + 1}
                      </span>
                      <p className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                        {soru.soru}
                      </p>
                    </div>

                    <button
                      onClick={() => toggleNelerOgrenildiSoru(soru.id)}
                      className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all self-end sm:self-auto cursor-pointer flex-shrink-0 ${
                        isRevealed
                          ? 'bg-teal-100 text-teal-800 hover:bg-teal-200'
                          : 'bg-teal-600 text-white hover:bg-teal-700 shadow-xs'
                      }`}
                    >
                      {isRevealed ? <><EyeOff className="w-3.5 h-3.5" /> Gizle</> : <><Eye className="w-3.5 h-3.5" /> Çözümü Gör</>}
                    </button>
                  </div>

                  {isRevealed && (
                    <div className="mt-3 pt-3 border-t border-teal-200/60 bg-teal-50/50 p-3.5 rounded-lg space-y-1.5 animate-in fade-in">
                      <div className="font-bold text-teal-950 text-xs sm:text-sm flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        <span>Doğru Yanıt: {soru.cevap}</span>
                      </div>
                      {soru.detayliCozum && (
                        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                          {soru.detayliCozum}
                        </p>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* 6. İSTASYON: Tanılayıcı Dallanmış Ağaç (DDA) - Etkileşimli Ağaç */}
      {section.dda && section.dda.statement && (
      <section className="bg-white rounded-2xl border border-slate-200/90 shadow-xs p-6 sm:p-7 space-y-6">
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-800 flex items-center justify-center font-bold">
              <GitBranch className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-900 font-serif">
                6. Pekiştirme İstasyonu: Tanılayıcı Dallanmış Ağaç (DDA)
              </h2>
              <p className="text-xs text-slate-500">
                Önermeyi oku, Doğru (D) veya Yanlış (Y) seçeneğini tıklayarak çıkışa ulaş
              </p>
            </div>
          </div>

          <button
            onClick={resetDDA}
            className="px-3 py-1.5 text-xs font-semibold text-indigo-700 hover:bg-indigo-50 rounded-lg transition-colors cursor-pointer"
          >
            Yeniden Başlat
          </button>
        </div>

        {/* DDA Tree Visualizer */}
        <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 space-y-5">
          {/* Step 1: Root Statement */}
          <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-indigo-700 uppercase tracking-wide">
                1. Düzey Önerme (Kök)
              </span>
              {ddaPath.length >= 1 && (
                <span className="text-xs font-bold px-2 py-0.5 rounded bg-indigo-100 text-indigo-800">
                  Seçiminiz: {ddaPath[0] === 'D' ? 'Doğru (D)' : 'Yanlış (Y)'}
                </span>
              )}
            </div>
            <p className="text-sm font-semibold text-slate-800">
              "{section.dda.statement}"
            </p>

            <div className="flex gap-3 pt-1">
              <button
                id="dda-root-true"
                onClick={() => handleDDAChoice(0, 'D')}
                className={`flex-1 py-2 px-3 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  ddaPath[0] === 'D'
                    ? 'bg-emerald-600 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700'
                }`}
              >
                DOĞRU (D)
              </button>
              <button
                id="dda-root-false"
                onClick={() => handleDDAChoice(0, 'Y')}
                className={`flex-1 py-2 px-3 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  ddaPath[0] === 'Y'
                    ? 'bg-rose-600 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-rose-50 hover:text-rose-700'
                }`}
              >
                YANLIŞ (Y)
              </button>
            </div>
          </div>

          {/* Step 2: Branching Statement (if any) */}
          {ddaPath.length >= 1 && section.dda.ifTrue && 'statement' in section.dda.ifTrue && (
            <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs space-y-3 animate-in fade-in">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-indigo-700 uppercase tracking-wide">
                  2. Düzey Önerme
                </span>
                {ddaPath.length >= 2 && (
                  <span className="text-xs font-bold px-2 py-0.5 rounded bg-indigo-100 text-indigo-800">
                    Seçiminiz: {ddaPath[1] === 'D' ? 'Doğru (D)' : 'Yanlış (Y)'}
                  </span>
                )}
              </div>
              <p className="text-sm font-semibold text-slate-800">
                "{section.dda.ifTrue.statement}"
              </p>

              <div className="flex gap-3 pt-1">
                <button
                  id="dda-branch-true"
                  onClick={() => handleDDAChoice(1, 'D')}
                  className={`flex-1 py-2 px-3 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    ddaPath[1] === 'D'
                      ? 'bg-emerald-600 text-white shadow-xs'
                      : 'bg-slate-100 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700'
                  }`}
                >
                  DOĞRU (D)
                </button>
                <button
                  id="dda-branch-false"
                  onClick={() => handleDDAChoice(1, 'Y')}
                  className={`flex-1 py-2 px-3 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    ddaPath[1] === 'Y'
                      ? 'bg-rose-600 text-white shadow-xs'
                      : 'bg-slate-100 text-slate-700 hover:bg-rose-50 hover:text-rose-700'
                  }`}
                >
                  YANLIŞ (Y)
                </button>
              </div>
            </div>
          )}

          {/* DDA Result Box */}
          {ddaCompleted && (
            <div className="p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl border border-indigo-200 space-y-2 animate-in fade-in">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-indigo-900 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Ağaç Çıkışına Ulaştınız: {ddaExit}. ÇIKIŞ
                </span>
                <span className="text-xs font-mono bg-white px-2 py-0.5 rounded border border-indigo-200 text-indigo-700 font-bold">
                  Yol: {ddaPath.join(' ➔ ')}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 font-medium">
                {ddaFeedback}
              </p>
            </div>
          )}
        </div>
      </section>
      )}

      {/* 7. Biliyorum - Anlıyorum - Düşünüyorum 3 Katmanlı Kartlar */}
      {section.biliyorumAnliyorumDusunuyorum && (
      <section className="grid sm:grid-cols-3 gap-4">
        <div className="bg-amber-50/80 border border-amber-200 rounded-2xl p-5 space-y-2">
          <div className="text-xs font-bold text-amber-800 uppercase tracking-wider flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-amber-600" />
            Biliyorum (Kavramsal Bilgi)
          </div>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            {section.biliyorumAnliyorumDusunuyorum.biliyorum}
          </p>
        </div>

        <div className="bg-emerald-50/80 border border-emerald-200 rounded-2xl p-5 space-y-2">
          <div className="text-xs font-bold text-emerald-800 uppercase tracking-wider flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-600" />
            Anlıyorum (İşlev ve Uyum)
          </div>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            {section.biliyorumAnliyorumDusunuyorum.anliyorum}
          </p>
        </div>

        <div className="bg-sky-50/80 border border-sky-200 rounded-2xl p-5 space-y-2">
          <div className="text-xs font-bold text-sky-800 uppercase tracking-wider flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-sky-600" />
            Düşünüyorum (Tefekkür & Hikmet)
          </div>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            {section.biliyorumAnliyorumDusunuyorum.dusunuyorum}
          </p>
        </div>
      </section>
      )}

      {/* 8. Pekiştirme İstasyonu (Ders Kitabı Bölüm Bitişi & Pekişme Köprüsü) */}
      {section.pekistirmeIstasyonu && (
        <section 
          id="station-pekistirme" 
          className="bg-gradient-to-br from-amber-500/10 via-emerald-500/10 to-sky-500/10 border-2 border-amber-400/60 rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-amber-200/80">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-amber-600 text-white shadow-xs">
                  Ders Kitabı Bölüm Bitişi
                </span>
                {section.pekistirmeIstasyonu.pageReference && (
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-white border border-amber-300 text-amber-800">
                    📖 {section.pekistirmeIstasyonu.pageReference}
                  </span>
                )}
              </div>
              <h2 className="text-xl sm:text-2xl font-bold font-serif text-slate-900 flex items-center gap-2">
                <Bookmark className="w-6 h-6 text-amber-600" />
                {section.pekistirmeIstasyonu.stationTitle}
              </h2>
            </div>

            <button
              onClick={() => setRevealedStationNotes(!revealedStationNotes)}
              className="px-4 py-2 bg-white hover:bg-amber-50 text-amber-900 border border-amber-300 rounded-xl text-xs font-bold transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer self-start sm:self-auto"
            >
              {revealedStationNotes ? (
                <>
                  <EyeOff className="w-4 h-4 text-amber-600" />
                  <span>İstasyon Özetini Gizle</span>
                </>
              ) : (
                <>
                  <Eye className="w-4 h-4 text-amber-600" />
                  <span>İstasyon Sentezini Aç</span>
                </>
              )}
            </button>
          </div>

          <div className="space-y-4">
            <div className="p-4 bg-white/90 rounded-2xl border border-amber-200/80 shadow-xs space-y-2">
              <div className="text-xs font-bold text-amber-800 uppercase tracking-wide flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-amber-600" />
                Bölüm Kazanımları ve İstasyon Sentezi
              </div>
              <p className="text-sm text-slate-700 leading-relaxed font-medium">
                {section.pekistirmeIstasyonu.summaryText || section.summary || 'Bölüm kazanımlarını ve bilimsel ilkeleri pekiştirme istasyonu.'}
              </p>
            </div>

            {/* Target Skills Checklist */}
            {section.pekistirmeIstasyonu.targetSkills && section.pekistirmeIstasyonu.targetSkills.length > 0 && (
              <div className="space-y-2">
                <div className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center justify-between">
                  <span>Bu İstasyonun Hedeflediği Maarif Kazanımları (Tıklayarak Onaylayın):</span>
                  <span className="text-[11px] text-amber-700 font-semibold lowercase">
                    {Object.values(checkedStationSkills).filter(Boolean).length} / {section.pekistirmeIstasyonu.targetSkills.length} tamamlandı
                  </span>
                </div>
                <div className="grid sm:grid-cols-2 gap-2.5">
                  {section.pekistirmeIstasyonu.targetSkills.map((skill, sIdx) => {
                    const isChecked = !!checkedStationSkills[sIdx];
                    return (
                      <button
                        key={sIdx}
                        onClick={() => toggleStationSkill(sIdx)}
                        className={`text-left p-3 rounded-xl border transition-all flex items-start gap-2.5 cursor-pointer ${
                          isChecked
                            ? 'bg-emerald-50/90 border-emerald-300 text-emerald-900 shadow-xs'
                            : 'bg-white/80 border-slate-200 text-slate-700 hover:border-amber-300 hover:bg-white'
                        }`}
                      >
                        <div className={`mt-0.5 w-5 h-5 rounded-md flex items-center justify-center flex-shrink-0 transition-colors ${
                          isChecked ? 'bg-emerald-600 text-white' : 'border border-slate-300 bg-slate-50'
                        }`}>
                          {isChecked && <CheckCircle2 className="w-3.5 h-3.5" />}
                        </div>
                        <span className="text-xs font-medium leading-snug">
                          {skill}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Independent Click-To-Reveal Station Synthesis Card */}
            {revealedStationNotes && (
              <div className="p-4 bg-amber-50/90 border border-amber-300 rounded-2xl space-y-2 animate-in fade-in duration-200">
                <div className="text-xs font-bold text-amber-900 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Müfredat Kuralı: Pekiştirme İstasyonundan Sonraki Alt Konu Başlar
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Fen Bilimleri Ders Kitabı düzeninde bu pekiştirme istasyonu ile önceki alt konu sonlandırılır. 
                  Bir sonraki ünite alt başlığına geçmeden önce <strong>10 Boşluk Doldurma</strong> ve <strong>20 Bağlam Temelli Soru</strong> etkinliklerini tamamlayarak pekiştirmeyi nihayete erdirebilirsiniz.
                </p>
              </div>
            )}
          </div>
        </section>
      )}

      {/* 8. BÖLÜM SONUNDA NELER ÖĞRENİLDİ? (MEB NELER ÖĞRENDİK? SENTEZİ) */}
      {section.nelerOgrenildi && (
        <section className="bg-gradient-to-br from-indigo-50/80 via-white to-sky-50/80 rounded-2xl border-2 border-indigo-200/80 p-5 sm:p-6 shadow-sm space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-indigo-100 pb-3">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-indigo-600 text-white flex items-center justify-center shadow-xs">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-base sm:text-lg font-bold text-indigo-950 font-serif">
                  {section.nelerOgrenildi.title || 'Bölüm Sonunda Neler Öğrenildi?'}
                </h2>
                <p className="text-xs text-indigo-700">
                  MEB Ders Kitabı "Neler Öğrendik?" bölümü kazanım sentezi ve kavram haritası
                </p>
              </div>
            </div>
            <span className="self-start sm:self-auto px-2.5 py-1 rounded-full bg-indigo-100 text-indigo-800 text-[11px] font-bold">
              Bölüm Sonu Sentezi
            </span>
          </div>

          {/* Öğrenilen Temel Kavramlar Rozetleri */}
          <div className="space-y-2">
            <div className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
              <span>Bu Bölümde Öğrendiğimiz Temel Kavramlar & Bilgiler</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {section.nelerOgrenildi.ogrenilenKavramlar.map((kavram, kIdx) => (
                <span
                  key={kIdx}
                  className="px-3 py-1.5 bg-white border border-indigo-200 text-indigo-900 rounded-xl text-xs font-semibold shadow-2xs flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                  {kavram}
                </span>
              ))}
            </div>
          </div>

          {/* Detaylı Özet Metni */}
          <div className="p-4 bg-white/90 border border-indigo-100 rounded-xl text-xs sm:text-sm text-slate-700 leading-relaxed space-y-2">
            <div className="font-bold text-indigo-900 text-xs flex items-center gap-1">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              Kazanım Çıkarımı ve Fen Mantığı
            </div>
            <p>{section.nelerOgrenildi.ozet}</p>
          </div>

          {/* Bölüm Sonu Kontrol ve Çıkarım Soruları (Tıklamayla Bağımsız Cevaplar) */}
          {section.nelerOgrenildi.kontrolSorulari && section.nelerOgrenildi.kontrolSorulari.length > 0 && (
            <div className="space-y-3 pt-2">
              <div className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center justify-between">
                <span>Neler Öğrendik? Kontrol Soruları (Cevabı Tıklayarak Aç)</span>
                <span className="text-[11px] text-indigo-700 font-normal">
                  {Object.keys(revealedOgrenildiQuestions).filter(k => revealedOgrenildiQuestions[k]).length} / {section.nelerOgrenildi.kontrolSorulari.length} İncelendi
                </span>
              </div>

              <div className="grid gap-2.5">
                {section.nelerOgrenildi.kontrolSorulari.map((item, qIdx) => {
                  const isRevealed = !!revealedOgrenildiQuestions[item.id];
                  return (
                    <div
                      key={item.id}
                      className="p-3.5 bg-white rounded-xl border border-indigo-100 hover:border-indigo-300 transition-all space-y-2"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-start gap-2">
                          <span className="w-5 h-5 rounded-md bg-indigo-100 text-indigo-800 text-[11px] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                            {qIdx + 1}
                          </span>
                          <p className="text-xs sm:text-sm font-semibold text-slate-800">
                            {item.soru}
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={() => setRevealedOgrenildiQuestions(prev => ({ ...prev, [item.id]: !prev[item.id] }))}
                          className={`px-3 py-1 rounded-lg text-xs font-semibold flex items-center gap-1 flex-shrink-0 cursor-pointer transition-colors ${
                            isRevealed
                              ? 'bg-indigo-100 text-indigo-800'
                              : 'bg-indigo-600 text-white hover:bg-indigo-700'
                          }`}
                        >
                          {isRevealed ? (
                            <>
                              <EyeOff className="w-3.5 h-3.5" />
                              <span>Gizle</span>
                            </>
                          ) : (
                            <>
                              <Eye className="w-3.5 h-3.5" />
                              <span>Cevabı Göster</span>
                            </>
                          )}
                        </button>
                      </div>

                      {isRevealed && (
                        <div className="p-3 bg-indigo-50/70 border border-indigo-200 rounded-lg text-xs text-indigo-950 leading-relaxed animate-in fade-in duration-150">
                          <div className="font-bold text-indigo-800 text-[11px] mb-1">Doğru Açıklama & Değerlendirme:</div>
                          {item.cevap}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* SONRAKİ KONUYA GEÇİŞ KÖPRÜSÜ */}
          {section.sonrakiKonu && (
            <div className="p-4 bg-gradient-to-r from-emerald-600 to-teal-700 text-white rounded-xl flex flex-col sm:flex-row items-center justify-between gap-3 shadow-sm mt-3">
              <div>
                <div className="text-[11px] uppercase tracking-wider text-emerald-100 font-semibold">
                  Müfredat Akışı: Bu Bölüm Tamamlandı
                </div>
                <div className="text-sm font-bold mt-0.5">
                  Sıradaki Konu: {section.sonrakiKonu.code} - {section.sonrakiKonu.title}
                </div>
              </div>

              {onGoToNextSection && (
                <button
                  type="button"
                  onClick={() => onGoToNextSection(section.sonrakiKonu?.code)}
                  className="w-full sm:w-auto px-4 py-2 bg-white text-emerald-900 hover:bg-emerald-50 rounded-lg font-bold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-xs"
                >
                  <span>Sonraki Konuya Geç</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              )}
            </div>
          )}
        </section>
      )}

      {/* Bottom CTA to Questions */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 bg-slate-900 text-white rounded-2xl shadow-md">
        <div>
          <h3 className="text-base font-bold font-serif">
            Konu Anlatımını Tamamladınız!
          </h3>
          <p className="text-xs text-slate-400 mt-0.5">
            Şimdi öğrendiklerinizi pekiştirmek için 10 boşluk doldurma ve 20 bağlam temelli soruyu çözün.
          </p>
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto">
          <button
            id="cta-go-blanks"
            onClick={onGoToBlanks}
            className="flex-1 sm:flex-initial px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <span>10 Boşluk Doldurma</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            id="cta-go-mcq"
            onClick={onGoToMCQ}
            className="flex-1 sm:flex-initial px-4 py-2.5 bg-sky-600 hover:bg-sky-700 text-white rounded-xl text-xs font-bold transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <span>20 Soru Çöz</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
