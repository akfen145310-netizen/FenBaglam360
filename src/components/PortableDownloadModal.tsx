import React, { useState } from 'react';
import { 
  X, 
  Download, 
  HardDrive, 
  WifiOff, 
  CheckCircle2, 
  Monitor, 
  Usb, 
  FileText, 
  Zap, 
  ExternalLink,
  ChevronRight,
  ShieldCheck,
  FolderArchive,
  FileCode
} from 'lucide-react';

interface PortableDownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PortableDownloadModal: React.FC<PortableDownloadModalProps> = ({
  isOpen,
  onClose
}) => {
  const [downloadStarted, setDownloadStarted] = useState(false);

  if (!isOpen) return null;

  const handleDownloadZip = () => {
    setDownloadStarted(true);
    const link = document.createElement('a');
    link.href = './FenBaglam360_Tasinabilir_Surum.zip';
    link.download = 'FenBaglam360_Tasinabilir_Surum.zip';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDownloadSingleHtml = () => {
    setDownloadStarted(true);
    const link = document.createElement('a');
    link.href = './FenBaglam360_Offline.html';
    link.download = 'FenBaglam360_Offline.html';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/70 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden text-slate-800 animate-in zoom-in-95 duration-200"
        onClick={e => e.stopPropagation()}
      >
        {/* Header Gradient Banner */}
        <div className="bg-gradient-to-r from-emerald-800 via-teal-800 to-indigo-900 p-6 sm:p-8 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
            title="Kapat"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-3 mb-2">
            <span className="p-2.5 rounded-2xl bg-white/15 backdrop-blur-md text-emerald-300">
              <Usb className="w-6 h-6" />
            </span>
            <span className="px-3 py-1 rounded-full bg-emerald-500/30 border border-emerald-400/40 text-[11px] font-bold uppercase tracking-wider text-emerald-200">
              Tamamen Çevrimdışı • %100 Offline
            </span>
          </div>

          <h2 className="text-xl sm:text-2xl font-bold font-serif text-white tracking-tight">
            Taşınabilir USB & Akıllı Tahta Sürümü
          </h2>
          <p className="text-xs sm:text-sm text-emerald-100/90 mt-1 max-w-lg leading-relaxed">
            İnternet bağlantısına ihtiyaç duymadan USB belleğinize kopyalayarak tüm bilgisayarlarda ve MEB akıllı tahtalarında çift tıklamayla çalıştırın.
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
          {/* Key Advantages 3-Card Grid */}
          <div className="grid sm:grid-cols-3 gap-3">
            <div className="p-3.5 rounded-2xl bg-emerald-50/70 border border-emerald-200/80 space-y-1">
              <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-900">
                <WifiOff className="w-4 h-4 text-emerald-700" />
                <span>İnternetsiz</span>
              </div>
              <p className="text-[11px] text-slate-600 leading-snug">
                Sınıfta veya evde bağlantı kopukluğundan etkilenmez.
              </p>
            </div>

            <div className="p-3.5 rounded-2xl bg-indigo-50/70 border border-indigo-200/80 space-y-1">
              <div className="flex items-center gap-1.5 text-xs font-bold text-indigo-900">
                <Zap className="w-4 h-4 text-indigo-700" />
                <span>Sıfır Kurulum</span>
              </div>
              <p className="text-[11px] text-slate-600 leading-snug">
                Node.js veya sunucu gerektirmez, doğrudan çift tıkla açılır.
              </p>
            </div>

            <div className="p-3.5 rounded-2xl bg-amber-50/70 border border-amber-200/80 space-y-1">
              <div className="flex items-center gap-1.5 text-xs font-bold text-amber-900">
                <Monitor className="w-4 h-4 text-amber-700" />
                <span>Akıllı Tahta Tam Uyum</span>
              </div>
              <p className="text-[11px] text-slate-600 leading-snug">
                Dokunmatik etkileşim, çizim tuvali ve sınav modu aktiftir.
              </p>
            </div>
          </div>

          {/* Primary Download Box */}
          <div className="p-5 rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 border-2 border-emerald-500/40 shadow-sm space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <FolderArchive className="w-5 h-5 text-emerald-600" />
                  <span>FenBağlam 360 Tam Taşınabilir Paket (.ZIP)</span>
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Tüm sınıflar (5, 6, 7, 8. Sınıf), 340+ LGS bağlam sorusu, Başlatıcı (.bat) ve kullanım kılavuzu dahil.
                </p>
              </div>
              <span className="self-start sm:self-auto px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-bold">
                Önerilen Sürüm (~1.0 MB)
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-1">
              <button
                id="btn-download-portable-zip"
                onClick={handleDownloadZip}
                className="flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Taşınabilir Paketi İndir (.ZIP)</span>
              </button>

              <button
                id="btn-download-portable-single-html"
                onClick={handleDownloadSingleHtml}
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-900 border border-slate-300 font-semibold text-xs transition-colors cursor-pointer"
                title="Sadece tek bir HTML dosyası olarak indirip tarayıcıda doğrudan açın"
              >
                <FileCode className="w-4 h-4 text-slate-500" />
                <span>Tek Dosya İndir (.html)</span>
              </button>
            </div>

            {downloadStarted && (
              <div className="p-3 bg-emerald-100/70 border border-emerald-300 rounded-xl text-xs text-emerald-900 font-medium flex items-center gap-2 animate-in fade-in">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 flex-shrink-0" />
                <span>İndirme başlatıldı! Dosyayı bilgisayarınıza veya doğrudan USB belleğinize kaydedebilirsiniz.</span>
              </div>
            )}
          </div>

          {/* 3 Step Guide */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>USB Bellekten 3 Adımda Nasıl Çalıştırılır?</span>
            </h4>

            <div className="space-y-2 text-xs text-slate-600">
              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-slate-200">
                <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center flex-shrink-0 text-[11px]">
                  1
                </span>
                <p>
                  İndirdiğiniz <strong>FenBaglam360_Tasinabilir_Surum.zip</strong> dosyasını sağ tıklayıp <em>"Tümünü Ayıkla"</em> diyerek bir klasöre veya doğrudan <strong>USB belleğinize</strong> çıkartın.
                </p>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-slate-200">
                <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center flex-shrink-0 text-[11px]">
                  2
                </span>
                <p>
                  USB belleğinizdeki klasörün içinde yer alan <strong>Baslat.bat</strong> veya <strong>index.html</strong> dosyasına çift tıklayın.
                </p>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-slate-200">
                <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center flex-shrink-0 text-[11px]">
                  3
                </span>
                <p>
                  Tarayıcınızda platform anında açılacaktır! İnternet olmasa dahi tüm ders anlatımları, 340+ LGS bağlam sorusu, sınav modları ve cevap anahtarları eksiksiz çalışır.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 sm:px-8 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
          <span className="text-[11px] text-slate-500">
            Türkiye Yüzyılı Maarif Modeli • Taşınabilir Offline Çözüm
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-700 rounded-xl text-xs font-semibold transition-colors cursor-pointer"
          >
            Tamam
          </button>
        </div>
      </div>
    </div>
  );
};
