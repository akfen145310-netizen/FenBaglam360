import React, { useState } from 'react';
import { 
  Users, 
  KeyRound, 
  RefreshCw, 
  Trash2, 
  School, 
  GraduationCap, 
  AlertTriangle, 
  Search, 
  X, 
  CheckCircle2, 
  Copy,
  ChevronDown,
  ChevronUp,
  FileQuestion,
  ExternalLink
} from 'lucide-react';
import { useUserProgress } from '../context/UserProgressContext';

interface TeacherDashboardModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TeacherDashboardModal: React.FC<TeacherDashboardModalProps> = ({ isOpen, onClose }) => {
  const { 
    activeTeacherCode, 
    generateNewTeacherCode, 
    joinedStudents, 
    deleteStudentFromTeacher 
  } = useUserProgress();

  const [selectedSchool, setSelectedSchool] = useState<string>('all');
  const [selectedClass, setSelectedClass] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [copied, setCopied] = useState(false);
  const [expandedStudentId, setExpandedStudentId] = useState<string | null>(null);
  const [showConfirmNewCode, setShowConfirmNewCode] = useState(false);
  const [confirmDeleteId, setConfirmDeleteId] = useState<string | null>(null);

  if (!isOpen) return null;

  // Extract unique schools and classes for classification/filtering
  const schools = Array.from(new Set(joinedStudents.map(s => s.schoolName).filter(Boolean)));
  const classes = Array.from(new Set(joinedStudents.map(s => s.className).filter(Boolean)));

  // Filter students based on classification filters
  const filteredStudents = joinedStudents.filter(student => {
    const matchSchool = selectedSchool === 'all' || student.schoolName === selectedSchool;
    const matchClass = selectedClass === 'all' || student.className === selectedClass;
    const matchQuery = !searchQuery || 
      student.studentName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.schoolName.toLowerCase().includes(searchQuery.toLowerCase());
    return matchSchool && matchClass && matchQuery;
  });

  const handleCopyCode = () => {
    navigator.clipboard.writeText(activeTeacherCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleGenerateCode = () => {
    generateNewTeacherCode();
    setShowConfirmNewCode(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="bg-white rounded-2xl max-w-4xl w-full h-[90vh] shadow-2xl border border-slate-100 flex flex-col overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 px-6 py-4 text-white flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-indigo-400" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="font-bold text-base sm:text-lg">Öğretmen Yönetim Paneli</h2>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  Canlı Sınıf Takibi
                </span>
              </div>
              <p className="text-xs text-slate-400">Referans kodunuzla katılan öğrencilerin eksiklerini ve başarı durumlarını inceleyin</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white cursor-pointer transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Reference Code Bar & Generator */}
        <div className="bg-slate-50 border-b border-slate-200 px-6 py-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center text-amber-700">
                <KeyRound className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">
                  Aktif Öğrenci Katılım Referans Kodunuz
                </span>
                <div className="flex items-center gap-2 mt-0.5">
                  <span className="text-xl font-mono font-black text-amber-700 tracking-wider">
                    {activeTeacherCode}
                  </span>
                  <button
                    onClick={handleCopyCode}
                    className="p-1.5 text-slate-500 hover:text-amber-700 hover:bg-amber-50 rounded-lg transition-colors cursor-pointer"
                    title="Kodu Kopyala"
                  >
                    {copied ? <CheckCircle2 className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setShowConfirmNewCode(true)}
                className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold text-indigo-700 bg-indigo-50 hover:bg-indigo-100 border border-indigo-200 rounded-xl transition-colors cursor-pointer"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Yeni Referans Kodu Üret</span>
              </button>
            </div>
          </div>

          {showConfirmNewCode && (
            <div className="mt-3 p-3.5 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-900 flex items-start justify-between gap-3 animate-in fade-in">
              <div className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold">Yeni referans kodu üretmek üzeresiniz!</p>
                  <p className="text-[11px] text-amber-800">
                    Yeni kod üretildiğinde önceki kod ({activeTeacherCode}) geçersiz sayılacak ve eski kodla yeni öğrenci girişi kabul edilmeyecektir.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                <button
                  onClick={() => setShowConfirmNewCode(false)}
                  className="px-2.5 py-1 text-xs text-slate-600 hover:bg-white rounded-lg cursor-pointer"
                >
                  İptal
                </button>
                <button
                  onClick={handleGenerateCode}
                  className="px-3 py-1 text-xs font-bold text-white bg-amber-600 hover:bg-amber-700 rounded-lg cursor-pointer"
                >
                  Onayla ve Üret
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Filters & Sınıflandırma Area */}
        <div className="px-6 py-3 bg-white border-b border-slate-100 grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div>
            <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">
              Okula Göre Sınıflandır
            </label>
            <select
              value={selectedSchool}
              onChange={e => setSelectedSchool(e.target.value)}
              className="w-full px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs font-medium text-slate-700 focus:bg-white focus:outline-hidden"
            >
              <option value="all">Tüm Okullar ({schools.length})</option>
              {schools.map(s => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">
              Sınıfa Göre Sınıflandır
            </label>
            <select
              value={selectedClass}
              onChange={e => setSelectedClass(e.target.value)}
              className="w-full px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs font-medium text-slate-700 focus:bg-white focus:outline-hidden"
            >
              <option value="all">Tüm Sınıflar ({classes.length})</option>
              {classes.map(c => (
                <option key={c} value={c}>{c} Şubesi</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">
              Öğrenci Ara
            </label>
            <div className="relative">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2.5" />
              <input
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="İsim veya e-posta..."
                className="w-full pl-8 pr-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-700 focus:bg-white focus:outline-hidden"
              />
            </div>
          </div>
        </div>

        {/* Student List & Weakness Inspection */}
        <div className="flex-1 overflow-y-auto p-6 space-y-3">
          <div className="flex items-center justify-between text-xs text-slate-500 font-semibold mb-2">
            <span>Listelenen Öğrenciler: {filteredStudents.length}</span>
            <span>Yetki: Öğrenci Silme ve Eksik Analizi</span>
          </div>

          {filteredStudents.length === 0 ? (
            <div className="text-center py-12 bg-slate-50 rounded-2xl border border-dashed border-slate-200">
              <Users className="w-10 h-10 text-slate-300 mx-auto mb-2" />
              <p className="text-sm font-semibold text-slate-600">Bu filtrelere uygun öğrenci bulunamadı</p>
              <p className="text-xs text-slate-400 mt-1">Öğrencilerinize <span className="font-mono font-bold text-amber-700">{activeTeacherCode}</span> kodunu vererek katılmalarını sağlayabilirsiniz.</p>
            </div>
          ) : (
            filteredStudents.map(student => {
              const isExpanded = expandedStudentId === student.id;
              const successRate = student.totalAnswered > 0 
                ? Math.round((student.totalCorrect / student.totalAnswered) * 100) 
                : 0;

              return (
                <div
                  key={student.id}
                  className="bg-white rounded-xl border border-slate-200 shadow-xs hover:border-slate-300 transition-all overflow-hidden"
                >
                  <div className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-700 font-bold flex items-center justify-center text-sm flex-shrink-0">
                        {student.studentName.charAt(0)}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="font-bold text-slate-800 text-sm">{student.studentName}</h4>
                          <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-amber-100 text-amber-800">
                            {student.className}
                          </span>
                          <span className="text-[11px] text-slate-400">• {student.schoolName}</span>
                        </div>
                        <div className="flex items-center gap-3 text-xs text-slate-500 mt-1">
                          <span>Katılım: {student.joinedAt}</span>
                          <span>•</span>
                          <span className="font-mono text-slate-400">Kod: {student.referenceCodeUsed}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 self-end sm:self-center">
                      <div className="text-right">
                        <div className="text-xs font-bold text-slate-700">
                          {student.totalCorrect}/{student.totalAnswered} Doğru ({successRate}%)
                        </div>
                        <div className="text-[11px] text-rose-600 font-semibold">
                          {student.mistakesCount} Eksik Konu / Soru
                        </div>
                      </div>

                      <button
                        onClick={() => setExpandedStudentId(isExpanded ? null : student.id)}
                        className={`flex items-center gap-1 px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                          isExpanded
                            ? 'bg-indigo-50 text-indigo-700 border border-indigo-200'
                            : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                        }`}
                      >
                        <span>Eksikleri İncele</span>
                        {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                      </button>

                      {/* Delete Student Button */}
                      <button
                        onClick={() => setConfirmDeleteId(student.id)}
                        className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors cursor-pointer"
                        title="Öğrenciyi Sil"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Confirm Delete Banner */}
                  {confirmDeleteId === student.id && (
                    <div className="bg-rose-50 border-t border-rose-200 px-4 py-2.5 flex items-center justify-between text-xs text-rose-900 animate-in fade-in">
                      <span>Bu öğrenciyi sınıf listenizden silmek istediğinize emin misiniz?</span>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => setConfirmDeleteId(null)}
                          className="px-2 py-1 text-slate-600 hover:bg-white rounded-md cursor-pointer"
                        >
                          Vazgeç
                        </button>
                        <button
                          onClick={() => {
                            deleteStudentFromTeacher(student.id);
                            setConfirmDeleteId(null);
                          }}
                          className="px-2.5 py-1 bg-rose-600 hover:bg-rose-700 text-white font-bold rounded-md cursor-pointer"
                        >
                          Evet, Sil
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Expanded Mistake Details / Eksik Olduğu Yerler */}
                  {isExpanded && (
                    <div className="bg-slate-50 border-t border-slate-200 p-4 space-y-3 animate-in fade-in duration-150">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                          <FileQuestion className="w-4 h-4 text-amber-600" />
                          Öğrencinin Eksik Olduğu Yerler & Hatalı Soruları
                        </span>
                        <span className="text-[11px] text-slate-400">
                          {student.mistakesList.length} kayıtlı eksik
                        </span>
                      </div>

                      {student.mistakesList.length === 0 ? (
                        <div className="p-3 bg-emerald-50 rounded-lg text-emerald-800 text-xs flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                          <span>Harika! Bu öğrencinin şu an çözüp de yanlış bıraktığı aktif bir eksik soru bulunmuyor.</span>
                        </div>
                      ) : (
                        <div className="space-y-2">
                          {student.mistakesList.map((m, idx) => (
                            <div
                              key={idx}
                              className="bg-white p-3 rounded-lg border border-slate-200 text-xs space-y-1.5"
                            >
                              <div className="flex items-center justify-between text-[11px]">
                                <span className="font-bold text-amber-800">
                                  {m.sectionCode} - {m.sectionTitle}
                                </span>
                                <span className="text-slate-400 font-mono text-[10px]">
                                  {m.questionType === 'mcq' ? 'Çoktan Seçmeli' : 'Boşluk Doldurma'}
                                </span>
                              </div>
                              <p className="text-slate-800 font-medium">
                                {m.questionText}
                              </p>
                              <div className="flex items-center gap-4 text-[11px] pt-1 border-t border-slate-100">
                                {m.userAnswer && (
                                  <span className="text-rose-600">
                                    Öğrencinin Yanıtı: <strong>{m.userAnswer}</strong>
                                  </span>
                                )}
                                {m.correctAnswer && (
                                  <span className="text-emerald-700">
                                    Doğru Cevap: <strong>{m.correctAnswer}</strong>
                                  </span>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Footer */}
        <div className="border-t border-slate-200 bg-slate-50 px-6 py-3 flex items-center justify-between text-xs text-slate-500">
          <span>Öğretmen Referans Kodu Sistemi • Türkiye Yüzyılı Maarif Modeli</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-slate-200 hover:bg-slate-300 text-slate-700 font-semibold rounded-lg cursor-pointer transition-colors"
          >
            Kapat
          </button>
        </div>
      </div>
    </div>
  );
};
