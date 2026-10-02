import React, { useState } from 'react';
import { UserProgressProvider } from './context/UserProgressContext';
import { Navbar } from './components/Navbar';
import { LandingPageView } from './components/LandingPageView';
import { InteractiveLessonView } from './components/InteractiveLessonView';
import { FillInBlanksView } from './components/FillInBlanksView';
import { ContextQuestionsView } from './components/ContextQuestionsView';
import { MistakesReviewView } from './components/MistakesReviewView';
import { ProgressDashboardView } from './components/ProgressDashboardView';
import { BookUploadModal } from './components/BookUploadModal';
import { GoogleAuthModal } from './components/GoogleAuthModal';
import { StudentJoinModal } from './components/StudentJoinModal';
import { TeacherDashboardModal } from './components/TeacherDashboardModal';
import { ContextQuestionBuilderView } from './components/ContextQuestionBuilderView';
import { PortableDownloadModal } from './components/PortableDownloadModal';
import { SectionContent } from './types';
import { GradeLevel, getUnitsForGrade, getFirstSectionForGrade, findSectionAcrossGrades, gradesMeta } from './data/gradesRegistry';

class ErrorBoundary extends React.Component<{ children: React.ReactNode }, { hasError: boolean; error: any }> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: any) {
    return { hasError: true, error };
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.error("ErrorBoundary caught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-[60vh] flex flex-col items-center justify-center p-6 text-center">
          <div className="p-8 max-w-lg bg-white rounded-3xl border border-rose-200 shadow-xl space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-rose-100 text-rose-600 flex items-center justify-center mx-auto text-2xl font-bold">
              ⚠️
            </div>
            <h2 className="text-xl font-bold text-slate-900 font-serif">Bölüm İçeriği Yüklenirken Bir Sorun Oluştu</h2>
            <p className="text-xs text-slate-600 leading-relaxed">
              {this.state.error?.message || "Sayfa bileşeni yüklenirken geçici bir hata yakalandı. Lütfen aşağıdaki butona tıklayarak yeniden deneyin."}
            </p>
            <div className="flex justify-center gap-3 pt-2">
              <button
                onClick={() => {
                  this.setState({ hasError: false, error: null });
                  window.location.reload();
                }}
                className="px-5 py-2.5 bg-indigo-600 text-white rounded-xl text-xs font-bold hover:bg-indigo-700 shadow-md transition-all cursor-pointer"
              >
                Sayfayı Yenile
              </button>
            </div>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

function MainApp() {
  const [selectedGrade, setSelectedGrade] = useState<GradeLevel>(5);
  const [currentSection, setCurrentSection] = useState<SectionContent>(getFirstSectionForGrade(5));
  const [activeTab, setActiveTab] = useState<'landing' | 'lesson' | 'blanks' | 'mcq' | 'questionBuilder' | 'mistakes' | 'progress' | 'upload'>('landing');

  // Modal states
  const [isGoogleAuthOpen, setIsGoogleAuthOpen] = useState(false);
  const [isStudentJoinOpen, setIsStudentJoinOpen] = useState(false);
  const [isTeacherDashboardOpen, setIsTeacherDashboardOpen] = useState(false);
  const [isPortableDownloadOpen, setIsPortableDownloadOpen] = useState(false);

  const handleSelectGrade = (grade: GradeLevel) => {
    setSelectedGrade(grade);
    setCurrentSection(getFirstSectionForGrade(grade));
    setActiveTab('lesson');
  };

  const handleGoToNextSection = (targetCode?: string) => {
    const units = getUnitsForGrade(selectedGrade);
    const allSections = units.flatMap(u => u.sections);
    
    if (targetCode) {
      const target = allSections.find(s => s.code === targetCode);
      if (target) {
        setCurrentSection(target);
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
      // Check cross-grades if transitioning between grades
      const across = findSectionAcrossGrades(targetCode);
      if (across) {
        if (targetCode.startsWith('8.')) setSelectedGrade(8);
        else if (targetCode.startsWith('7.')) setSelectedGrade(7);
        else if (targetCode.startsWith('6.')) setSelectedGrade(6);
        else if (targetCode.startsWith('5.')) setSelectedGrade(5);
        setCurrentSection(across);
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
    }
    
    const currentIndex = allSections.findIndex(s => s.code === currentSection.code);
    if (currentIndex !== -1 && currentIndex < allSections.length - 1) {
      setCurrentSection(allSections[currentIndex + 1]);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSectionGenerated = (newSection: SectionContent) => {
    const currentUnits = getUnitsForGrade(selectedGrade);
    if (currentUnits.length > 0) {
      currentUnits[0].sections.unshift(newSection);
    }
    setCurrentSection(newSection);
    setActiveTab('lesson');
  };

  return (
    <div className="min-h-screen bg-slate-100/60 text-slate-900 flex flex-col font-sans selection:bg-amber-500 selection:text-white">
      {/* Top Navigation */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        selectedGrade={selectedGrade}
        setSelectedGrade={setSelectedGrade}
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
        onOpenGoogleAuth={() => setIsGoogleAuthOpen(true)}
        onOpenStudentJoin={() => setIsStudentJoinOpen(true)}
        onOpenTeacherDashboard={() => setIsTeacherDashboardOpen(true)}
        onOpenPortableDownload={() => setIsPortableDownloadOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1 pb-16">
        <ErrorBoundary>
          {activeTab === 'landing' && (
            <LandingPageView
              onSelectGrade={handleSelectGrade}
              onOpenGoogleAuth={() => setIsGoogleAuthOpen(true)}
              onOpenStudentJoin={() => setIsStudentJoinOpen(true)}
              onOpenTeacherDashboard={() => setIsTeacherDashboardOpen(true)}
              onOpenPortableDownload={() => setIsPortableDownloadOpen(true)}
            />
          )}

          {activeTab === 'lesson' && (
            <InteractiveLessonView
              section={currentSection}
              onGoToBlanks={() => setActiveTab('blanks')}
              onGoToMCQ={() => setActiveTab('mcq')}
              onGoToNextSection={handleGoToNextSection}
            />
          )}

          {activeTab === 'blanks' && (
            <FillInBlanksView
              section={currentSection}
              onGoToMCQ={() => setActiveTab('mcq')}
            />
          )}

          {activeTab === 'mcq' && (
            <ContextQuestionsView
              section={currentSection}
              onGoToMistakes={() => setActiveTab('mistakes')}
            />
          )}

          {activeTab === 'questionBuilder' && (
            <ContextQuestionBuilderView
              section={currentSection}
              onGoToMistakes={() => setActiveTab('mistakes')}
            />
          )}

          {activeTab === 'mistakes' && (
            <MistakesReviewView
              onGoToLesson={() => setActiveTab('lesson')}
              onOpenGoogleAuth={() => setIsGoogleAuthOpen(true)}
            />
          )}

          {activeTab === 'progress' && (
            <ProgressDashboardView />
          )}

          {activeTab === 'upload' && (
            <BookUploadModal
              onSectionGenerated={handleSectionGenerated}
              onClose={() => setActiveTab('lesson')}
            />
          )}
        </ErrorBoundary>
      </main>

      {/* Modals */}
      <GoogleAuthModal
        isOpen={isGoogleAuthOpen}
        onClose={() => setIsGoogleAuthOpen(false)}
      />

      <StudentJoinModal
        isOpen={isStudentJoinOpen}
        onClose={() => setIsStudentJoinOpen(false)}
      />

      <TeacherDashboardModal
        isOpen={isTeacherDashboardOpen}
        onClose={() => setIsTeacherDashboardOpen(false)}
      />

      <PortableDownloadModal
        isOpen={isPortableDownloadOpen}
        onClose={() => setIsPortableDownloadOpen(false)}
      />

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-6 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 space-y-2">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => setIsPortableDownloadOpen(true)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-bold text-xs border border-emerald-300 transition-colors cursor-pointer"
            >
              <span>💾 Taşınabilir USB / Çevrimdışı Sürümü İndir (.ZIP)</span>
            </button>
          </div>
          <p className="font-semibold text-slate-700">
            Türkiye Yüzyılı Maarif Modeli • Fen Bilimleri Etkileşimli Öğrenme Platformu ({gradesMeta[selectedGrade].title})
          </p>
          <p className="text-[11px] text-slate-400">
            Hikmet ve İspat Eksenli Maarif Anlatımı • Bağımsız Tıklamayla Açılan Cevaplar • Pekiştirme İstasyonları • Kişiselleştirilmiş Eksik Takibi
          </p>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <UserProgressProvider>
      <MainApp />
    </UserProgressProvider>
  );
}
