import React from 'react';
import { 
  GraduationCap, 
  Sparkles, 
  KeyRound, 
  Users, 
  CheckCircle2, 
  AlertCircle, 
  ArrowRight, 
  BookOpen, 
  BarChart3, 
  RotateCcw, 
  Compass, 
  Atom, 
  Orbit, 
  Dna, 
  Zap, 
  ShieldCheck,
  School,
  ExternalLink,
  Usb,
  Download
} from 'lucide-react';
import { useUserProgress } from '../context/UserProgressContext';

interface LandingPageViewProps {
  onSelectGrade: (grade: 5 | 6 | 7 | 8) => void;
  onOpenGoogleAuth: () => void;
  onOpenStudentJoin: () => void;
  onOpenTeacherDashboard: () => void;
  onOpenPortableDownload?: () => void;
}

export const LandingPageView: React.FC<LandingPageViewProps> = ({
  onSelectGrade,
  onOpenGoogleAuth,
  onOpenStudentJoin,
  onOpenTeacherDashboard,
  onOpenPortableDownload
}) => {
  const { user, activeTeacherCode, joinedStudents, mistakes } = useUserProgress();
  const activeMistakesCount = mistakes.filter(m => !m.resolved).length;

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-10 space-y-10 animate-in fade-in duration-200">
      
      {/* Hero Header Section */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950 text-white p-6 sm:p-12 shadow-2xl border border-slate-700/50">
        {/* Decorative background glows */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 -mb-20 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 max-w-4xl space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-amber-300 text-xs sm:text-sm font-semibold tracking-wide shadow-xs">
            <Sparkles className="w-4 h-4 text-amber-400 animate-spin-slow" />
            <span>TÜRKİYE YÜZYILI MAARİF MODELİ</span>
            <span className="text-white/40">•</span>
            <span className="text-emerald-300 font-normal">Erdem, Değer ve Hikmet Eksenli Fen Bilimleri</span>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-serif tracking-tight text-white leading-tight">
            Türkiye Yüzyılı Maarif Modeli <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-emerald-300 to-sky-400">
              Fen Bilimleri Öğrenme Platformu
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-3xl">
            Tıklamayla bağımsız açılan Maarif cevapları, 10 aşamalı hikmet derinliği, 
            ünite sonu pekiştirme istasyonları, 10 boşluk doldurma ve 20 bağlam temelli yeni nesil soru ile 
            eksiklerinizi anında tespit edip tamamlayan kapsamlı Sebafen Maarif Fen Atölyesi.
          </p>

          {/* Auth & Reference Code Quick Bar */}
          <div className="pt-2 flex flex-wrap items-center gap-3">
            {/* Google Auth Button */}
            {!user?.isGoogle ? (
              <button
                id="landing-google-login-btn"
                onClick={onOpenGoogleAuth}
                className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white text-slate-900 font-bold text-sm hover:bg-slate-100 hover:shadow-lg transition-all transform hover:-translate-y-0.5 cursor-pointer shadow-md"
              >
                <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                </svg>
                <span>Google Hesabımla Bağlanmak İstiyorum</span>
              </button>
            ) : (
              <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-emerald-500/20 border border-emerald-400/40 text-emerald-200 text-xs sm:text-sm font-semibold">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                <span>Google ile Bağlı: <strong>{user.name}</strong> ({user.email})</span>
              </div>
            )}

            {/* Student Reference Code Button */}
            <button
              id="landing-student-join-btn"
              onClick={onOpenStudentJoin}
              className="flex items-center gap-2 px-4 py-3 rounded-2xl bg-amber-500/20 border border-amber-400/30 text-amber-200 hover:bg-amber-500/30 font-semibold text-sm transition-all cursor-pointer"
            >
              <KeyRound className="w-4 h-4 text-amber-400" />
              <span>{user?.teacherReferenceCode ? `Koda Bağlı: ${user.teacherReferenceCode}` : 'Referans Kodu Gir'}</span>
            </button>

            {/* Teacher Dashboard Button */}
            <button
              id="landing-teacher-dash-btn"
              onClick={onOpenTeacherDashboard}
              className="flex items-center gap-2 px-4 py-3 rounded-2xl bg-indigo-500/20 border border-indigo-400/30 text-indigo-200 hover:bg-indigo-500/30 font-semibold text-sm transition-all cursor-pointer"
            >
              <Users className="w-4 h-4 text-indigo-400" />
              <span>Öğretmen Masası ({joinedStudents.length} Öğrenci)</span>
            </button>

            {/* USB Portable Download Button */}
            {onOpenPortableDownload && (
              <button
                id="landing-portable-download-btn"
                onClick={onOpenPortableDownload}
                className="flex items-center gap-2 px-4 py-3 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-semibold text-sm transition-all cursor-pointer shadow-md shadow-emerald-950/20 transform hover:-translate-y-0.5"
              >
                <Usb className="w-4 h-4 text-emerald-200" />
                <span>USB & Çevrimdışı Sürüm İndir</span>
              </button>
            )}
          </div>

          {/* Educational Note */}
          <div className="text-xs text-slate-400 flex items-center gap-2 pt-1">
            <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
            <span>
              <strong>Eksiklerimi görüp tekrar etmek isteyenler için mükemmel çözüm:</strong> Giriş yapmadan tüm konuları ve soruları serbestçe inceleyebilirsiniz. Google ile bağlandığınızda ise tüm çözdükleriniz ve eksikleriniz güvenle kaydedilir.
            </span>
          </div>
        </div>
      </section>

      {/* Dedicated Offline & Smartboard (USB) Showcase Banner */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-teal-950 via-emerald-900 to-slate-900 text-white p-6 sm:p-8 shadow-xl border border-emerald-500/30">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-bold tracking-wide">
              <Usb className="w-3.5 h-3.5 text-emerald-400" />
              <span>MEB FATİH AKILLI TAHTA & ÇEVRİMDIŞI KULLANIM</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-white">
              İnternetsiz & Taşınabilir Sürüm ile Sınıfta Kesintisiz Eğitim
            </h2>
            <p className="text-sm text-emerald-100/90 leading-relaxed">
              Program veya veritabanı kurulumuna gerek kalmadan, tüm 5, 6, 7 ve 8. Sınıf müfredatını, 
              çözümlü bağlam sorularını ve pekiştirme istasyonlarını tek bir USB bellekten veya masaüstünden 
              çift tıklamayla doğrudan çalıştırabilirsiniz.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-1 text-xs text-emerald-200/80">
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> %100 Çevrimdışı</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Sıfır Kurulum</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Akıllı Tahtada Hızlı & Donmasız</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> 8. Sınıf LGS Havuzu Dahil</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row lg:flex-col gap-3 w-full lg:w-auto flex-shrink-0">
            {onOpenPortableDownload && (
              <button
                onClick={onOpenPortableDownload}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm shadow-lg hover:shadow-xl transition-all cursor-pointer transform hover:-translate-y-0.5"
              >
                <Download className="w-4 h-4 text-slate-900" />
                <span>Taşınabilir Paketi İndir (.ZIP)</span>
              </button>
            )}
            <a
              href="/FenBaglam360_Offline.html"
              download="FenBaglam360_Offline.html"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-semibold transition-all text-center"
            >
              <span>Tek Dosya (.HTML) İndir</span>
            </a>
          </div>
        </div>
      </section>

      {/* Grade Selection Grid (5, 6, 7, 8. Sınıf Fen Bilimleri) */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-slate-800 font-serif">
              Sınıf Düzeyi Seçiniz
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Türkiye Yüzyılı Maarif Modeli müfredatına göre hazırlanmış sınıf üniteleri
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* 5. Sınıf Fen */}
          <div 
            id="card-grade-5"
            onClick={() => onSelectGrade(5)}
            className="group relative bg-white rounded-3xl p-6 border-2 border-amber-200 hover:border-amber-500 shadow-sm hover:shadow-xl transition-all duration-200 cursor-pointer flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-amber-500 text-white flex items-center justify-center font-bold text-xl shadow-md shadow-amber-200 group-hover:scale-105 transition-transform">
                  5
                </div>
                <span className="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-bold">
                  1. ve 2. Kitap Tamam
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-amber-700 transition-colors font-serif">
                  5. Sınıf Fen
                </h3>
                <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                  Güneş, Dünya ve Ay; Kuvvet ve Sürtünme; Canlılar; Işık; Madde ve Isı; Çevre; Elektrik Devreleri.
                </p>
              </div>

              <div className="space-y-1.5 pt-2 border-t border-slate-100 text-xs text-slate-600">
                <div className="flex items-center justify-between">
                  <span>Ünite Sayısı:</span>
                  <strong className="text-slate-800">7 Ünite (20 Bölüm)</strong>
                </div>
                <div className="flex items-center justify-between">
                  <span>Pekiştirme İstasyonu:</span>
                  <strong className="text-amber-600">20 İstasyon</strong>
                </div>
                <div className="flex items-center justify-between">
                  <span>Soru Havuzu:</span>
                  <strong className="text-emerald-700">200 Boşluk • 400 Soru</strong>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-3 flex items-center justify-between text-amber-700 font-bold text-xs group-hover:translate-x-1 transition-transform">
              <span>5. Sınıf Konularına Başla</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>

          {/* 6. Sınıf Fen */}
          <div 
            id="card-grade-6"
            onClick={() => onSelectGrade(6)}
            className="group relative bg-white rounded-3xl p-6 border-2 border-slate-200 hover:border-sky-500 shadow-sm hover:shadow-xl transition-all duration-200 cursor-pointer flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-sky-500 text-white flex items-center justify-center font-bold text-xl shadow-md shadow-sky-200 group-hover:scale-105 transition-transform">
                  6
                </div>
                <span className="px-2.5 py-1 rounded-full bg-sky-100 text-sky-800 text-[11px] font-bold">
                  Maarif Modeli
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-sky-700 transition-colors font-serif">
                  6. Sınıf Fen
                </h3>
                <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                  Güneş Sistemi ve Tutulmalar; Vücudumuzdaki Sistemler; Kuvvet ve Hareket; Madde ve Isı; Ses ve Özellikleri.
                </p>
              </div>

              <div className="space-y-1.5 pt-2 border-t border-slate-100 text-xs text-slate-600">
                <div className="flex items-center justify-between">
                  <span>Müfredat:</span>
                  <strong className="text-slate-800">6 Ana Ünite</strong>
                </div>
                <div className="flex items-center justify-between">
                  <span>Maarif Pedagojisi:</span>
                  <strong className="text-sky-600">Hikmet & Deney</strong>
                </div>
                <div className="flex items-center justify-between">
                  <span>Durum:</span>
                  <strong className="text-emerald-700">Aktif Giriş</strong>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-3 flex items-center justify-between text-sky-700 font-bold text-xs group-hover:translate-x-1 transition-transform">
              <span>6. Sınıf Konularını Aç</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>

          {/* 7. Sınıf Fen */}
          <div 
            id="card-grade-7"
            onClick={() => onSelectGrade(7)}
            className="group relative bg-white rounded-3xl p-6 border-2 border-emerald-200 hover:border-emerald-500 shadow-sm hover:shadow-xl transition-all duration-200 cursor-pointer flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center font-bold text-xl shadow-md shadow-emerald-200 group-hover:scale-105 transition-transform">
                  7
                </div>
                <span className="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-bold">
                  1, 2 & 3. Ünite Hazır!
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors font-serif">
                  7. Sınıf Fen
                </h3>
                <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                  Güneş Sistemi ve Ötesi; Hücre ve Bölünmeler (Mitoz, Mayoz); Kuvvet ve Enerji (Kütle-Ağırlık, İş, Enerji Dönüşümleri).
                </p>
              </div>

              <div className="space-y-1.5 pt-2 border-t border-slate-100 text-xs text-slate-600">
                <div className="flex items-center justify-between">
                  <span>Hazır Bölümler:</span>
                  <strong className="text-slate-800">8 Tam Bölüm</strong>
                </div>
                <div className="flex items-center justify-between">
                  <span>Pekiştirme:</span>
                  <strong className="text-emerald-600">Her Bölüm Sonu</strong>
                </div>
                <div className="flex items-center justify-between">
                  <span>Soru Bankası:</span>
                  <strong className="text-indigo-700">80 Boşluk • 160 Soru</strong>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-3 flex items-center justify-between text-emerald-700 font-bold text-xs group-hover:translate-x-1 transition-transform">
              <span>7. Sınıf Konularına Başla</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>

          {/* 8. Sınıf Fen */}
          <div 
            id="card-grade-8"
            onClick={() => onSelectGrade(8)}
            className="group relative bg-white rounded-3xl p-6 border-2 border-purple-200 hover:border-purple-500 shadow-sm hover:shadow-xl transition-all duration-200 cursor-pointer flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-purple-600 text-white flex items-center justify-center font-bold text-xl shadow-md shadow-purple-200 group-hover:scale-105 transition-transform">
                  8
                </div>
                <span className="px-2.5 py-1 rounded-full bg-purple-100 text-purple-800 text-[11px] font-bold">
                  LGS Maarif Odaklı
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-purple-700 transition-colors font-serif">
                  8. Sınıf Fen
                </h3>
                <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                  Mevsimler ve İklim; DNA ve Genetik Kod; Basınç; Madde ve Endüstri; Basit Makineler; Enerji Dönüşümleri.
                </p>
              </div>

              <div className="space-y-1.5 pt-2 border-t border-slate-100 text-xs text-slate-600">
                <div className="flex items-center justify-between">
                  <span>Hedef:</span>
                  <strong className="text-slate-800">LGS & Maarif Başarısı</strong>
                </div>
                <div className="flex items-center justify-between">
                  <span>Format:</span>
                  <strong className="text-purple-600">Bağlam Temelli</strong>
                </div>
                <div className="flex items-center justify-between">
                  <span>Durum:</span>
                  <strong className="text-emerald-700">Aktif Giriş</strong>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-3 flex items-center justify-between text-purple-700 font-bold text-xs group-hover:translate-x-1 transition-transform">
              <span>8. Sınıf Konularını Aç</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>

        </div>
      </section>

      {/* Feature Highlights: Why this platform is unique */}
      <section className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200 space-y-6">
        <div className="max-w-2xl">
          <h3 className="text-xl font-bold text-slate-800 font-serif">
            Eksikleri Görme ve Bireyselleştirilmiş Maarif Sistemi
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Öğrenci ve öğretmen arasındaki kesintisiz köprü ile başarının anahtarı
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-2xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center">
              <RotateCcw className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-sm text-slate-900">Otomatik Eksik Havuzu</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Test ve boşluk doldurmalarda yapılan her yanlış soru anında "Eksiklerini Tamamla" havuzuna düşer. Tekrar çözüp doğru yapana kadar kaybolmaz.
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-2xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
              <KeyRound className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-sm text-slate-900">Dinamik Referans Kodu</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Öğretmen tek tıkla referans kodu üretir. Kodunu giren öğrenciler ad, soyad, okul ve sınıfıyla öğretmenin listesine eklenir ve takip edilir.
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-2xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
              <BarChart3 className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-sm text-slate-900">Sınıflandırma ve İnceleme</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Öğretmen öğrencileri okul ve sınıfına göre filtreleyebilir, hangi öğrencinin hangi ünitede eksiği olduğunu tek bakışta görerek rehberlik eder.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};
