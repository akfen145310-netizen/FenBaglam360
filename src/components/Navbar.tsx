import React, { useState } from 'react';
import { 
  BookOpen, 
  HelpCircle, 
  CheckCircle2, 
  RotateCcw, 
  BarChart3, 
  UploadCloud, 
  LogIn, 
  LogOut, 
  Sparkles, 
  ChevronDown, 
  Layers, 
  GraduationCap,
  KeyRound,
  Users,
  Home,
  BrainCircuit,
  Usb,
  Download
} from 'lucide-react';
import { useUserProgress } from '../context/UserProgressContext';
import { SectionContent } from '../types';
import { GradeLevel, gradesMeta, getUnitsForGrade, getFirstSectionForGrade } from '../data/gradesRegistry';

interface NavbarProps {
  activeTab: 'landing' | 'lesson' | 'blanks' | 'mcq' | 'questionBuilder' | 'mistakes' | 'progress' | 'upload';
  setActiveTab: (tab: 'landing' | 'lesson' | 'blanks' | 'mcq' | 'questionBuilder' | 'mistakes' | 'progress' | 'upload') => void;
  selectedGrade: GradeLevel;
  setSelectedGrade: (grade: GradeLevel) => void;
  currentSection: SectionContent;
  setCurrentSection: (section: SectionContent) => void;
  onOpenGoogleAuth: () => void;
  onOpenStudentJoin: () => void;
  onOpenTeacherDashboard: () => void;
  onOpenPortableDownload: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  selectedGrade,
  setSelectedGrade,
  currentSection,
  setCurrentSection,
  onOpenGoogleAuth,
  onOpenStudentJoin,
  onOpenTeacherDashboard,
  onOpenPortableDownload
}) => {
  const { user, mistakes, loginAsGuest, joinedStudents } = useUserProgress();
  const [showSectionMenu, setShowSectionMenu] = useState(false);
  const [showGradeMenu, setShowGradeMenu] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [bookFilter, setBookFilter] = useState<'all' | 'kitap1' | 'kitap2'>('all');

  const activeMistakesCount = mistakes.filter(m => !m.resolved).length;
  const currentUnits = getUnitsForGrade(selectedGrade);
  const currentGradeMeta = gradesMeta[selectedGrade];

  const filteredUnits = currentUnits.filter(unit => {
    if (selectedGrade === 5 || selectedGrade === 7) {
      if (bookFilter === 'kitap1') return unit.unitNumber <= 3;
      if (bookFilter === 'kitap2') return unit.unitNumber >= 4;
    }
    return true;
  });

  const handleGradeChange = (newGrade: GradeLevel) => {
    setSelectedGrade(newGrade);
    const firstSection = getFirstSectionForGrade(newGrade);
    setCurrentSection(firstSection);
    setShowGradeMenu(false);
    if (activeTab === 'landing') {
      setActiveTab('lesson');
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
      {/* Top Maarif Banner */}
      <div className="bg-gradient-to-r from-amber-600 via-emerald-600 to-sky-700 text-white text-xs px-4 py-1.5 text-center font-medium flex items-center justify-between">
        <div className="flex items-center gap-2 mx-auto">
          <span className="bg-white/20 px-2.5 py-0.5 rounded-full text-[11px] font-semibold tracking-wide uppercase">
            Türkiye Yüzyılı Maarif Modeli
          </span>
          <span className="hidden sm:inline">
            Fen Bilimleri (5, 6, 7 ve 8. Sınıf) • Hikmet & İspat Eksenli Maarif Modeli
          </span>
        </div>
        <div className="hidden md:flex items-center gap-2 text-[11px] opacity-90">
          <span>Tıklamayla Bağımsız Cevaplar</span>
          <span>•</span>
          <span>Pekiştirme İstasyonları</span>
          <span>•</span>
          <span>Eksik Tamamlama Havuzu</span>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6">
        <div className="flex items-center justify-between h-16 gap-2">
          
          {/* Logo & Grade & Section Dropdown */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            {/* Home / Logo */}
            <button
              id="navbar-logo-btn"
              onClick={() => setActiveTab('landing')}
              className="flex items-center gap-2 text-left group cursor-pointer"
              title="Ana Sayfaya Dön (Sınıf Seçimi)"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center text-white shadow-sm shadow-amber-200 group-hover:scale-105 transition-transform">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div className="hidden sm:block">
                <div className="font-bold text-slate-800 text-sm leading-tight font-serif tracking-tight flex items-center gap-1.5">
                  <span>Sebafen Maarif Fen Atölyesi</span>
                </div>
                <div className="text-[11px] text-amber-700 font-semibold flex items-center gap-1">
                  <span>{currentGradeMeta.title}</span>
                </div>
              </div>
            </button>

            {/* Grade Switcher Button & Dropdown */}
            <div className="relative">
              <button
                id="grade-switcher-btn"
                onClick={() => setShowGradeMenu(!showGradeMenu)}
                className="flex items-center gap-1.5 px-2.5 py-1.5 bg-amber-50 hover:bg-amber-100 text-amber-900 text-xs sm:text-sm font-bold rounded-lg border border-amber-200 transition-colors cursor-pointer"
              >
                <span className="w-5 h-5 rounded-md bg-amber-500 text-white flex items-center justify-center text-xs font-bold">
                  {selectedGrade}
                </span>
                <span className="hidden xs:inline">{selectedGrade}. Sınıf</span>
                <ChevronDown className={`w-3.5 h-3.5 text-amber-700 transition-transform ${showGradeMenu ? 'rotate-180' : ''}`} />
              </button>

              {showGradeMenu && (
                <>
                  <div 
                    className="fixed inset-0 z-40" 
                    onClick={() => setShowGradeMenu(false)} 
                  />
                  <div className="absolute left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-slate-200 p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                    <div className="px-2.5 py-1.5 text-xs font-bold text-slate-500 uppercase tracking-wider border-b border-slate-100">
                      Sınıf Düzeyi Seçin
                    </div>
                    <div className="space-y-1 mt-1">
                      {([5, 6, 7, 8] as GradeLevel[]).map(g => (
                        <button
                          key={g}
                          onClick={() => handleGradeChange(g)}
                          className={`w-full text-left px-3 py-2 rounded-lg text-xs font-semibold flex items-center justify-between cursor-pointer ${
                            selectedGrade === g 
                              ? 'bg-amber-50 text-amber-900 border border-amber-200' 
                              : 'text-slate-700 hover:bg-slate-50'
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <span className="w-6 h-6 rounded-md bg-amber-500 text-white flex items-center justify-center text-xs font-bold">
                              {g}
                            </span>
                            <div>
                              <div>{g}. Sınıf Fen Bilimleri</div>
                              <div className="text-[10px] text-slate-400 font-normal">{gradesMeta[g].badge}</div>
                            </div>
                          </div>
                          {selectedGrade === g && (
                            <CheckCircle2 className="w-4 h-4 text-amber-600" />
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Section Switcher Pill */}
            <div className="relative">
              <button
                id="section-switcher-btn"
                onClick={() => setShowSectionMenu(!showSectionMenu)}
                className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs sm:text-sm font-semibold rounded-lg border border-slate-200 transition-colors cursor-pointer"
              >
                <Layers className="w-3.5 h-3.5 text-amber-600 flex-shrink-0" />
                <span className="max-w-[110px] sm:max-w-[190px] truncate">
                  {currentSection.code} {currentSection.title}
                </span>
                <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform ${showSectionMenu ? 'rotate-180' : ''}`} />
              </button>

              {showSectionMenu && (
                <>
                  <div 
                    className="fixed inset-0 z-40" 
                    onClick={() => setShowSectionMenu(false)} 
                  />
                  <div className="absolute left-0 mt-2 w-80 sm:w-96 bg-white rounded-xl shadow-xl border border-slate-200 p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                    <div className="px-2 pt-1.5 pb-2 border-b border-slate-100 space-y-1.5">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-slate-600 uppercase tracking-wider">
                          {selectedGrade}. Sınıf Müfredat Üniteleri
                        </span>
                        <span className="text-[10px] text-amber-600 font-semibold">
                          {currentUnits.length} Ünite
                        </span>
                      </div>

                      {(selectedGrade === 5 || selectedGrade === 7) && (
                        <div className="grid grid-cols-3 gap-1 bg-slate-100 p-1 rounded-lg text-[11px] font-semibold">
                          <button
                            type="button"
                            onClick={() => setBookFilter('all')}
                            className={`py-1 rounded-md text-center transition-colors cursor-pointer ${
                              bookFilter === 'all'
                                ? 'bg-white text-amber-900 shadow-xs'
                                : 'text-slate-600 hover:text-slate-900'
                            }`}
                          >
                            Tümü (7)
                          </button>
                          <button
                            type="button"
                            onClick={() => setBookFilter('kitap1')}
                            className={`py-1 rounded-md text-center transition-colors cursor-pointer ${
                              bookFilter === 'kitap1'
                                ? 'bg-amber-600 text-white shadow-xs'
                                : 'text-slate-600 hover:text-slate-900'
                            }`}
                          >
                            1. Kitap (1-3)
                          </button>
                          <button
                            type="button"
                            onClick={() => setBookFilter('kitap2')}
                            className={`py-1 rounded-md text-center transition-colors cursor-pointer ${
                              bookFilter === 'kitap2'
                                ? 'bg-indigo-600 text-white shadow-xs'
                                : 'text-slate-600 hover:text-slate-900'
                            }`}
                          >
                            2. Kitap (4-7)
                          </button>
                        </div>
                      )}
                    </div>

                    <div className="max-h-80 overflow-y-auto divide-y divide-slate-100 mt-1">
                      {filteredUnits.map(unit => (
                        <div key={unit.id} className="py-1.5">
                          <div className="px-3 py-1 text-[11px] font-bold text-amber-800 flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-amber-500" />
                            {unit.unitNumber}. Ünite: {unit.title}
                          </div>
                          <div className="space-y-0.5 mt-1">
                            {unit.sections.map(sec => (
                              <button
                                key={sec.code}
                                onClick={() => {
                                  setCurrentSection(sec);
                                  setShowSectionMenu(false);
                                  if (activeTab === 'landing') {
                                    setActiveTab('lesson');
                                  }
                                }}
                                className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium flex items-center justify-between transition-colors cursor-pointer ${
                                  currentSection.code === sec.code
                                    ? 'bg-amber-50 text-amber-900 font-semibold'
                                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                                }`}
                              >
                                <div className="space-y-0.5">
                                  <div>
                                    <strong className="text-amber-700 mr-1.5">{sec.code}</strong>
                                    {sec.title}
                                  </div>
                                  {sec.pekistirmeIstasyonu && (
                                    <div className="text-[10px] text-slate-500 flex items-center gap-1 font-normal">
                                      <span className="text-amber-600 font-semibold">📍 {sec.pekistirmeIstasyonu.stationTitle}</span>
                                      {sec.pekistirmeIstasyonu.pageReference && (
                                        <span className="text-slate-400">({sec.pekistirmeIstasyonu.pageReference})</span>
                                      )}
                                    </div>
                                  )}
                                </div>
                                {currentSection.code === sec.code && (
                                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 flex-shrink-0 ml-2" />
                                )}
                              </button>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Desktop Navigation Tabs */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-100/80 p-1 rounded-xl border border-slate-200/60">
            <button
              id="tab-landing-btn"
              onClick={() => setActiveTab('landing')}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                activeTab === 'landing'
                  ? 'bg-white text-slate-900 shadow-xs font-bold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
              }`}
            >
              <Home className="w-4 h-4 text-slate-700" />
              <span>Ana Ekran</span>
            </button>

            <button
              id="tab-lesson-btn"
              onClick={() => setActiveTab('lesson')}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                activeTab === 'lesson'
                  ? 'bg-white text-amber-900 shadow-xs font-bold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
              }`}
            >
              <BookOpen className="w-4 h-4 text-amber-600" />
              <span>Etkileşimli Konu</span>
            </button>

            <button
              id="tab-blanks-btn"
              onClick={() => setActiveTab('blanks')}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                activeTab === 'blanks'
                  ? 'bg-white text-emerald-900 shadow-xs font-bold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
              }`}
            >
              <HelpCircle className="w-4 h-4 text-emerald-600" />
              <span>10 Boşluk Doldurma</span>
            </button>

            <button
              id="tab-mcq-btn"
              onClick={() => setActiveTab('mcq')}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                activeTab === 'mcq'
                  ? 'bg-white text-sky-900 shadow-xs font-bold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
              }`}
            >
              <Sparkles className="w-4 h-4 text-sky-600" />
              <span>20 Soru Test</span>
            </button>

            <button
              id="tab-builder-btn"
              onClick={() => setActiveTab('questionBuilder')}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                activeTab === 'questionBuilder'
                  ? 'bg-white text-purple-900 shadow-xs font-bold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
              }`}
            >
              <BrainCircuit className="w-4 h-4 text-purple-600" />
              <span>Soru Hazırlama</span>
            </button>

            <button
              id="tab-mistakes-btn"
              onClick={() => setActiveTab('mistakes')}
              className={`relative flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                activeTab === 'mistakes'
                  ? 'bg-white text-rose-900 shadow-xs font-bold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
              }`}
            >
              <RotateCcw className="w-4 h-4 text-rose-600" />
              <span>Eksiklerim</span>
              {activeMistakesCount > 0 && (
                <span className="ml-1 px-1.5 py-0.2 text-[10px] font-bold rounded-full bg-rose-500 text-white animate-pulse">
                  {activeMistakesCount}
                </span>
              )}
            </button>

            <button
              id="tab-progress-btn"
              onClick={() => setActiveTab('progress')}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                activeTab === 'progress'
                  ? 'bg-white text-indigo-900 shadow-xs font-bold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
              }`}
            >
              <BarChart3 className="w-4 h-4 text-indigo-600" />
              <span>Başarı Grafiği</span>
            </button>

            <button
              id="tab-upload-btn"
              onClick={() => setActiveTab('upload')}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                activeTab === 'upload'
                  ? 'bg-white text-violet-900 shadow-xs font-bold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
              }`}
            >
              <UploadCloud className="w-4 h-4 text-violet-600" />
              <span>Kitap Analiz</span>
            </button>
          </nav>

          {/* User Profile & Teacher Modals Quick Triggers */}
          <div className="flex items-center gap-2">
            {/* Student Code Pill */}
            <button
              id="nav-join-code-btn"
              onClick={onOpenStudentJoin}
              title="Öğretmen Referans Kodu ile Bağlan"
              className="hidden md:flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl border border-amber-200 bg-amber-50 hover:bg-amber-100 text-amber-900 text-xs font-semibold cursor-pointer transition-colors"
            >
              <KeyRound className="w-3.5 h-3.5 text-amber-600" />
              <span>{user?.teacherReferenceCode ? user.teacherReferenceCode : 'Referans Kodu'}</span>
            </button>

            {/* Teacher Dashboard Pill */}
            <button
              id="nav-teacher-dash-btn"
              onClick={onOpenTeacherDashboard}
              title="Öğretmen Yönetim Masası"
              className="hidden md:flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl border border-indigo-200 bg-indigo-50 hover:bg-indigo-100 text-indigo-900 text-xs font-semibold cursor-pointer transition-colors"
            >
              <Users className="w-3.5 h-3.5 text-indigo-600" />
              <span>Öğretmen</span>
              {joinedStudents.length > 0 && (
                <span className="px-1.5 py-0.2 rounded-full bg-indigo-600 text-white text-[10px] font-bold">
                  {joinedStudents.length}
                </span>
              )}
            </button>

            {/* Portable / USB Sürüm İndir Butonu */}
            <button
              id="nav-portable-download-btn"
              onClick={onOpenPortableDownload}
              title="İnternetsiz USB ve Akıllı Tahta Sürümü (İndir)"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-emerald-300 bg-emerald-50 hover:bg-emerald-100 text-emerald-900 text-xs font-bold shadow-xs cursor-pointer transition-all hover:scale-105"
            >
              <Usb className="w-3.5 h-3.5 text-emerald-600" />
              <span className="hidden lg:inline">USB Sürümü</span>
              <span className="lg:hidden">USB</span>
            </button>

            {/* User Profile Dropdown */}
            {user ? (
              <div className="relative">
                <button
                  id="user-profile-btn"
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className="flex items-center gap-2 pl-2 pr-3 py-1.5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 transition-colors cursor-pointer text-left"
                >
                  <span className="text-lg">{user.avatar || '👨‍🎓'}</span>
                  <div className="hidden md:block">
                    <div className="text-xs font-bold text-slate-800 leading-tight">
                      {user.name}
                    </div>
                    <div className="text-[10px] text-emerald-700 font-medium flex items-center gap-1">
                      {user.isGoogle ? 'Google Hesabı' : 'Misafir Modu'}
                    </div>
                  </div>
                  <ChevronDown className="w-3 h-3 text-slate-400" />
                </button>

                {showUserMenu && (
                  <>
                    <div 
                      className="fixed inset-0 z-40" 
                      onClick={() => setShowUserMenu(false)} 
                    />
                    <div className="absolute right-0 mt-2 w-72 bg-white rounded-xl shadow-xl border border-slate-200 p-3 z-50 animate-in fade-in slide-in-from-top-2">
                      <div className="flex items-center gap-2.5 pb-3 border-b border-slate-100">
                        <span className="text-2xl">{user.avatar}</span>
                        <div>
                          <div className="font-bold text-xs text-slate-800">{user.name}</div>
                          <div className="text-[11px] text-slate-500">{user.email || 'Kayıtsız Misafir'}</div>
                          {user.schoolName && (
                            <div className="text-[10px] text-slate-600 mt-0.5">
                              {user.schoolName} • {user.className}
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="py-2 space-y-1">
                        <button
                          onClick={() => {
                            setActiveTab('mistakes');
                            setShowUserMenu(false);
                          }}
                          className="w-full text-left px-2.5 py-1.5 text-xs text-slate-700 hover:bg-slate-50 rounded-lg flex items-center justify-between cursor-pointer"
                        >
                          <span className="flex items-center gap-2">
                            <RotateCcw className="w-3.5 h-3.5 text-rose-600" />
                            Eksik Sorularım
                          </span>
                          <span className="font-bold text-rose-600 bg-rose-50 px-1.5 py-0.5 rounded-full text-[10px]">
                            {activeMistakesCount}
                          </span>
                        </button>
                        <button
                          onClick={() => {
                            setActiveTab('progress');
                            setShowUserMenu(false);
                          }}
                          className="w-full text-left px-2.5 py-1.5 text-xs text-slate-700 hover:bg-slate-50 rounded-lg flex items-center gap-2 cursor-pointer"
                        >
                          <BarChart3 className="w-3.5 h-3.5 text-indigo-600" />
                          Başarı İstatistikleri
                        </button>
                        <button
                          onClick={() => {
                            onOpenStudentJoin();
                            setShowUserMenu(false);
                          }}
                          className="w-full text-left px-2.5 py-1.5 text-xs text-amber-800 hover:bg-amber-50 rounded-lg flex items-center gap-2 cursor-pointer"
                        >
                          <KeyRound className="w-3.5 h-3.5 text-amber-600" />
                          Referans Kodu Ayarları
                        </button>
                        <button
                          onClick={() => {
                            onOpenTeacherDashboard();
                            setShowUserMenu(false);
                          }}
                          className="w-full text-left px-2.5 py-1.5 text-xs text-indigo-800 hover:bg-indigo-50 rounded-lg flex items-center gap-2 cursor-pointer"
                        >
                          <Users className="w-3.5 h-3.5 text-indigo-600" />
                          Öğretmen Yönetim Masası
                        </button>
                      </div>

                      <div className="pt-2 border-t border-slate-100 flex flex-col gap-1.5">
                        {!user.isGoogle ? (
                          <button
                            onClick={() => {
                              onOpenGoogleAuth();
                              setShowUserMenu(false);
                            }}
                            className="w-full py-1.5 px-2.5 bg-slate-900 text-white rounded-lg text-xs font-semibold hover:bg-slate-800 flex items-center justify-center gap-1.5 cursor-pointer"
                          >
                            <LogIn className="w-3.5 h-3.5 text-amber-400" />
                            Google ile Giriş Yap
                          </button>
                        ) : (
                          <button
                            onClick={() => {
                              loginAsGuest();
                              setShowUserMenu(false);
                            }}
                            className="w-full py-1.5 px-2.5 text-slate-600 hover:bg-slate-100 rounded-lg text-xs font-medium flex items-center justify-center gap-1.5 cursor-pointer"
                          >
                            <LogOut className="w-3.5 h-3.5 text-slate-500" />
                            Misafir Moduna Geç
                          </button>
                        )}
                      </div>
                    </div>
                  </>
                )}
              </div>
            ) : (
              <button
                onClick={onOpenGoogleAuth}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-xl transition-all cursor-pointer shadow-xs"
              >
                <LogIn className="w-3.5 h-3.5 text-amber-400" />
                <span>Giriş Yap</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Tab Navigation Bar */}
      <div className="lg:hidden border-t border-slate-200 bg-slate-50 px-2 py-1.5 overflow-x-auto scrollbar-none flex items-center gap-1">
        <button
          onClick={() => setActiveTab('landing')}
          className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap cursor-pointer ${
            activeTab === 'landing'
              ? 'bg-slate-900 text-white shadow-xs'
              : 'text-slate-600 hover:bg-slate-200'
          }`}
        >
          <Home className="w-3.5 h-3.5" />
          <span>Ana Ekran</span>
        </button>

        <button
          onClick={() => setActiveTab('lesson')}
          className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap cursor-pointer ${
            activeTab === 'lesson'
              ? 'bg-amber-600 text-white shadow-xs'
              : 'text-slate-600 hover:bg-slate-200'
          }`}
        >
          <BookOpen className="w-3.5 h-3.5" />
          <span>Konu</span>
        </button>

        <button
          onClick={() => setActiveTab('blanks')}
          className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap cursor-pointer ${
            activeTab === 'blanks'
              ? 'bg-emerald-600 text-white shadow-xs'
              : 'text-slate-600 hover:bg-slate-200'
          }`}
        >
          <HelpCircle className="w-3.5 h-3.5" />
          <span>10 Boşluk</span>
        </button>

        <button
          onClick={() => setActiveTab('mcq')}
          className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap cursor-pointer ${
            activeTab === 'mcq'
              ? 'bg-sky-600 text-white shadow-xs font-bold'
              : 'text-slate-600 hover:bg-slate-200'
          }`}
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>20 Soru</span>
        </button>

        <button
          id="mobile-tab-builder-btn"
          onClick={() => setActiveTab('questionBuilder')}
          className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap cursor-pointer ${
            activeTab === 'questionBuilder'
              ? 'bg-purple-600 text-white shadow-xs font-bold'
              : 'text-slate-600 hover:bg-slate-200'
          }`}
        >
          <BrainCircuit className="w-3.5 h-3.5" />
          <span>Soru Sistemi</span>
        </button>

        <button
          onClick={() => setActiveTab('mistakes')}
          className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap cursor-pointer ${
            activeTab === 'mistakes'
              ? 'bg-rose-600 text-white shadow-xs'
              : 'text-slate-600 hover:bg-slate-200'
          }`}
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Eksikler ({activeMistakesCount})</span>
        </button>

        <button
          onClick={() => setActiveTab('progress')}
          className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap cursor-pointer ${
            activeTab === 'progress'
              ? 'bg-indigo-600 text-white shadow-xs'
              : 'text-slate-600 hover:bg-slate-200'
          }`}
        >
          <BarChart3 className="w-3.5 h-3.5" />
          <span>Grafik</span>
        </button>

        <button
          onClick={onOpenStudentJoin}
          className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap bg-amber-100 text-amber-900 cursor-pointer"
        >
          <KeyRound className="w-3.5 h-3.5 text-amber-700" />
          <span>Ref Kod</span>
        </button>

        <button
          onClick={onOpenTeacherDashboard}
          className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap bg-indigo-100 text-indigo-900 cursor-pointer"
        >
          <Users className="w-3.5 h-3.5 text-indigo-700" />
          <span>Öğretmen</span>
        </button>

        <button
          onClick={onOpenPortableDownload}
          className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap bg-emerald-100 text-emerald-900 cursor-pointer"
        >
          <Usb className="w-3.5 h-3.5 text-emerald-700" />
          <span>USB İndir</span>
        </button>
      </div>
    </header>
  );
};
