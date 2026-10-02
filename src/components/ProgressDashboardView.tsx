import React from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  Tooltip, 
  ResponsiveContainer, 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  PolarRadiusAxis, 
  Radar, 
  Cell 
} from 'recharts';
import { 
  BarChart3, 
  Award, 
  Target, 
  CheckCircle2, 
  XCircle, 
  RotateCcw, 
  Sparkles, 
  BookOpen, 
  TrendingUp, 
  Flame 
} from 'lucide-react';
import { useUserProgress } from '../context/UserProgressContext';

export const ProgressDashboardView: React.FC = () => {
  const { stats, mistakes, user, clearAllProgress } = useUserProgress();

  const successRate = stats.totalAnswered > 0
    ? Math.round((stats.totalCorrect / stats.totalAnswered) * 100)
    : 0;

  // Prepare Unit Data for BarChart
  const unitData = Object.entries(stats.unitScores).map(([unitName, score]) => {
    const rate = score.answered > 0 ? Math.round((score.correct / score.answered) * 100) : 0;
    return {
      name: unitName,
      rate,
      answered: score.answered,
      correct: score.correct
    };
  });

  // Prepare Skills Data for RadarChart
  const skillsData = Object.entries(stats.skillScores).map(([skillName, score]) => {
    const rate = score.answered > 0 ? Math.round((score.correct / score.answered) * 100) : 50;
    return {
      skill: skillName,
      score: rate,
      answered: score.answered
    };
  });

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 space-y-8">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-indigo-950 via-purple-950 to-slate-900 text-white rounded-2xl p-6 sm:p-8 shadow-md">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-md bg-indigo-500 text-white font-bold text-xs">
                KİŞİSEL GELİŞİM RAPORU
              </span>
              <span className="text-xs text-indigo-300">
                {user?.isGoogle ? 'Google Hesabı Senkronize' : 'Yerel Cihaz Hafızası'}
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold font-serif">
              {user?.name} Başarı & Beceriler Panosu
            </h1>
            <p className="text-xs sm:text-sm text-indigo-200/90 max-w-xl">
              Türkiye Yüzyılı Maarif Modeli kazanımları doğrultusunda çözülen soru istatistikleri ve bilişsel beceri analizi.
            </p>
          </div>

          <div className="flex items-center gap-3 bg-white/10 backdrop-blur-xs border border-white/20 p-4 rounded-2xl self-start sm:self-auto text-center">
            <div>
              <div className="text-[11px] text-indigo-200 font-medium">Başarı Oranı</div>
              <div className="text-3xl font-bold font-mono text-emerald-400">%{successRate}</div>
            </div>
            <div className="w-px h-10 bg-white/20" />
            <div>
              <div className="text-[11px] text-indigo-200 font-medium">Toplam Soru</div>
              <div className="text-3xl font-bold font-mono text-white">{stats.totalAnswered}</div>
            </div>
          </div>
        </div>
      </div>

      {/* 4 Metric Summary Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-1">
          <div className="flex items-center justify-between text-slate-500 text-xs font-semibold">
            <span>Toplam Doğru</span>
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          </div>
          <div className="text-2xl font-bold text-slate-900 font-mono">
            {stats.totalCorrect}
          </div>
          <div className="text-[11px] text-emerald-600 font-medium">
            Başarılı cevaplanan
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-1">
          <div className="flex items-center justify-between text-slate-500 text-xs font-semibold">
            <span>Toplam Yanlış</span>
            <XCircle className="w-4 h-4 text-rose-600" />
          </div>
          <div className="text-2xl font-bold text-slate-900 font-mono">
            {stats.totalMistakes}
          </div>
          <div className="text-[11px] text-rose-600 font-medium">
            Hata kumbarasına giden
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-1">
          <div className="flex items-center justify-between text-slate-500 text-xs font-semibold">
            <span>Pekiştirilen Hatalar</span>
            <RotateCcw className="w-4 h-4 text-indigo-600" />
          </div>
          <div className="text-2xl font-bold text-slate-900 font-mono">
            {stats.resolvedMistakes}
          </div>
          <div className="text-[11px] text-indigo-600 font-medium">
            Yeniden çözülüp kavranan
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-1">
          <div className="flex items-center justify-between text-slate-500 text-xs font-semibold">
            <span>Aktif Çalışma</span>
            <Flame className="w-4 h-4 text-amber-500" />
          </div>
          <div className="text-2xl font-bold text-slate-900 font-mono">
            {stats.streakDays} Gün
          </div>
          <div className="text-[11px] text-amber-600 font-medium">
            Öğrenme serisi
          </div>
        </div>
      </div>

      {/* Visual Charts: BarChart & RadarChart */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Ünite Bazlı Başarı Oranı BarChart */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div>
              <h3 className="text-sm font-bold text-slate-900 font-serif">
                Ünite Bazlı Başarı Yüzdesi
              </h3>
              <p className="text-xs text-slate-500">
                Her ünite için doğru cevaplama oranı (%)
              </p>
            </div>
            <Target className="w-4 h-4 text-indigo-600" />
          </div>

          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={unitData} margin={{ top: 10, right: 10, left: -20, bottom: 20 }}>
                <XAxis dataKey="name" tick={{ fontSize: 11, fill: '#64748b' }} />
                <YAxis domain={[0, 100]} tick={{ fontSize: 11, fill: '#64748b' }} />
                <Tooltip
                  formatter={(val: any) => [`%${val}`, 'Başarı Oranı']}
                  contentStyle={{ backgroundColor: '#0f172a', color: '#fff', borderRadius: '8px', fontSize: '12px' }}
                />
                <Bar dataKey="rate" radius={[6, 6, 0, 0]}>
                  {unitData.map((entry, index) => (
                    <Cell 
                      key={`cell-${index}`} 
                      fill={entry.rate >= 70 ? '#10b981' : entry.rate >= 40 ? '#f59e0b' : '#6366f1'} 
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Bilişsel Beceriler RadarChart */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div>
              <h3 className="text-sm font-bold text-slate-900 font-serif">
                Bilişsel Beceri ve Maarif Dağılımı
              </h3>
              <p className="text-xs text-slate-500">
                Veri analizi, modelleme, tefekkür ve akıl yürütme becerileri
              </p>
            </div>
            <Award className="w-4 h-4 text-purple-600" />
          </div>

          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={skillsData}>
                <PolarGrid stroke="#e2e8f0" />
                <PolarAngleAxis dataKey="skill" tick={{ fontSize: 10, fill: '#475569' }} />
                <PolarRadiusAxis domain={[0, 100]} tick={false} axisLine={false} />
                <Radar
                  name="Beceri Seviyesi"
                  dataKey="score"
                  stroke="#8b5cf6"
                  fill="#8b5cf6"
                  fillOpacity={0.4}
                />
                <Tooltip
                  formatter={(val: any) => [`%${val}`, 'Beceri Skoru']}
                  contentStyle={{ backgroundColor: '#0f172a', color: '#fff', borderRadius: '8px', fontSize: '12px' }}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Maarif Kişiselleştirilmiş Öğrenme Tavsiyesi */}
      <div className="bg-gradient-to-br from-amber-50/80 via-white to-sky-50/70 p-6 rounded-2xl border border-amber-200 shadow-xs space-y-3">
        <div className="flex items-center gap-2 text-xs font-bold text-amber-900 uppercase tracking-wider">
          <Sparkles className="w-4 h-4 text-amber-600" />
          Öğrenciye Özel Maarif Modeli Tavsiyeleri
        </div>

        <div className="grid sm:grid-cols-3 gap-4 pt-1">
          <div className="bg-white/90 p-4 rounded-xl border border-amber-100 space-y-1.5">
            <div className="font-bold text-xs text-slate-800 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-amber-500" />
              Gözlem ve Hikmet İlişkisi
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Güneş ve Ay konularında gökyüzünü bir saat gibi tanzim edilmiş nizamıyla incelemeye devam edin.
            </p>
          </div>

          <div className="bg-white/90 p-4 rounded-xl border border-emerald-100 space-y-1.5">
            <div className="font-bold text-xs text-slate-800 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              Kuvvet ve Ölçüm Becerisi
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Dinamometre yaylarının uzama miktarı ile kuvvet arasındaki matematiksel ölçüyü problem çözümlerinde kullanın.
            </p>
          </div>

          <div className="bg-white/90 p-4 rounded-xl border border-sky-100 space-y-1.5">
            <div className="font-bold text-xs text-slate-800 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-sky-500" />
              Hata Kumbarası Disiplini
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              {mistakes.filter(m => !m.resolved).length > 0
                ? `Hata kumbaranızda bekleyen ${mistakes.filter(m => !m.resolved).length} eksik soruyu çözerek bilginizi kalıcı hale getirin.`
                : 'Tüm eksiklerinizi tamamladınız! Yeni bölümlerin sorularını çözerek başarınızı pekiştirin.'}
            </p>
          </div>
        </div>

        {/* Clear Stats Option */}
        <div className="pt-3 border-t border-slate-200/80 flex items-center justify-between text-xs text-slate-500">
          <span>İlerleme verileriniz tarayıcınızda yerel olarak saklanmaktadır.</span>
          <button
            onClick={() => {
              if (window.confirm('Tüm çözülen soru geçmişini ve istatistikleri sıfırlamak istiyor musunuz?')) {
                clearAllProgress();
              }
            }}
            className="text-rose-600 hover:text-rose-800 font-semibold cursor-pointer"
          >
            İstatistikleri Sıfırla
          </button>
        </div>
      </div>
    </div>
  );
};
