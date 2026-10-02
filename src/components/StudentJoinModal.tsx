import React, { useState } from 'react';
import { KeyRound, School, User, Hash, AlertCircle, CheckCircle2, X } from 'lucide-react';
import { useUserProgress } from '../context/UserProgressContext';

interface StudentJoinModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const StudentJoinModal: React.FC<StudentJoinModalProps> = ({ isOpen, onClose }) => {
  const { user, activeTeacherCode, joinWithTeacherCode } = useUserProgress();
  const [code, setCode] = useState(user?.teacherReferenceCode || '');
  const [studentName, setStudentName] = useState(user?.name && user.name !== 'Misafir Öğrenci' ? user.name : '');
  const [schoolName, setSchoolName] = useState(user?.schoolName || '');
  const [className, setClassName] = useState(user?.className || '');
  const [statusMessage, setStatusMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!code.trim() || !studentName.trim() || !schoolName.trim() || !className.trim()) {
      setStatusMessage({
        type: 'error',
        text: 'Lütfen tüm alanları (Referans Kodu, Ad Soyad, Okul, Sınıf) eksiksiz doldurunuz.'
      });
      return;
    }

    const res = joinWithTeacherCode(code, {
      studentName: studentName.trim(),
      schoolName: schoolName.trim(),
      className: className.trim()
    });

    if (res.success) {
      setStatusMessage({ type: 'success', text: res.message });
      setTimeout(() => {
        onClose();
      }, 1500);
    } else {
      setStatusMessage({ type: 'error', text: res.message });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="bg-white rounded-2xl max-w-md w-full shadow-2xl border border-slate-100 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-amber-600 to-amber-700 px-6 py-5 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
              <KeyRound className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-base">Öğretmen Referans Koduyla Bağlan</h3>
              <p className="text-xs text-amber-100">Öğretmeninizin sınıfına katılın ve eksiklerinizi paylaşın</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white cursor-pointer transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {statusMessage && (
            <div
              className={`p-3.5 rounded-xl text-xs flex items-start gap-2.5 ${
                statusMessage.type === 'success'
                  ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                  : 'bg-rose-50 text-rose-800 border border-rose-200'
              }`}
            >
              {statusMessage.type === 'success' ? (
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
              ) : (
                <AlertCircle className="w-4 h-4 text-rose-600 flex-shrink-0 mt-0.5" />
              )}
              <span>{statusMessage.text}</span>
            </div>
          )}

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Öğretmen Referans Kodu <span className="text-rose-500">*</span>
            </label>
            <div className="relative">
              <input
                type="text"
                value={code}
                onChange={e => setCode(e.target.value.toUpperCase())}
                placeholder="Örn: FEN-7A-842"
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-mono font-bold tracking-wider text-slate-800 focus:bg-white focus:outline-hidden focus:border-amber-500"
              />
              <span className="absolute right-3 top-2.5 text-[10px] text-slate-400">
                (Öğretmeninizden alın)
              </span>
            </div>
            <p className="text-[11px] text-slate-500 mt-1">
              İpucu: Sistemdeki güncel test kodu: <strong className="text-amber-700 font-mono">{activeTeacherCode}</strong>
            </p>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Ad Soyad <span className="text-rose-500">*</span>
            </label>
            <div className="relative">
              <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
              <input
                type="text"
                value={studentName}
                onChange={e => setStudentName(e.target.value)}
                placeholder="Adınız ve Soyadınız"
                className="w-full pl-9 pr-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 focus:bg-white focus:outline-hidden focus:border-amber-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Okul Adı <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <School className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <input
                  type="text"
                  value={schoolName}
                  onChange={e => setSchoolName(e.target.value)}
                  placeholder="Okulunuz"
                  className="w-full pl-9 pr-2 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:bg-white focus:outline-hidden focus:border-amber-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Sınıf / Şube <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <Hash className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <input
                  type="text"
                  value={className}
                  onChange={e => setClassName(e.target.value)}
                  placeholder="Örn: 7/A veya 5/B"
                  className="w-full pl-9 pr-2 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:bg-white focus:outline-hidden focus:border-amber-500"
                />
              </div>
            </div>
          </div>

          <div className="bg-amber-50/70 border border-amber-200/60 rounded-xl p-3 text-[11px] text-amber-900 leading-relaxed">
            <span className="font-bold">Öğretmen Takibi:</span> Bu referans kodu ile katıldığınızda çözdüğünüz testler, boşluk doldurmalar ve hatalı yaptığınız sorular öğretmeninizin paneline aktarılır ve öğretmeniniz eksiklerinizi analiz edebilir.
          </div>

          <div className="pt-2 flex items-center justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-xl transition-colors cursor-pointer"
            >
              Vazgeç
            </button>
            <button
              type="submit"
              className="px-5 py-2 text-xs font-bold text-white bg-amber-600 hover:bg-amber-700 rounded-xl shadow-xs transition-colors cursor-pointer"
            >
              Koda Katıl ve Bağlan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
