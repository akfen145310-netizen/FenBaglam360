import React, { createContext, useContext, useState, useEffect } from 'react';
import { UserProfile, QuestionMistake, UserStats, JoinedStudent } from '../types';

interface UserProgressContextType {
  user: UserProfile | null;
  stats: UserStats;
  mistakes: QuestionMistake[];
  activeTeacherCode: string;
  teacherCodesHistory: string[];
  joinedStudents: JoinedStudent[];
  setUserProfile: (profile: UserProfile | null) => void;
  recordAnswer: (params: {
    questionId: string;
    sectionCode: string;
    sectionTitle: string;
    questionType: 'blank' | 'mcq';
    isCorrect: boolean;
    skill?: string;
    unitCode?: string;
    questionData: any;
    userAnswer?: string;
  }) => void;
  resolveMistake: (questionId: string) => void;
  clearAllProgress: () => void;
  loginAsGuest: () => void;
  loginWithGoogleMock: (email?: string, name?: string) => void;
  generateNewTeacherCode: () => string;
  joinWithTeacherCode: (
    code: string,
    studentInfo: { studentName: string; schoolName: string; className: string }
  ) => { success: boolean; message: string };
  deleteStudentFromTeacher: (studentId: string) => void;
}

const STORAGE_KEY_USER = 'maarif_fen_user';
const STORAGE_KEY_STATS = 'maarif_fen_stats';
const STORAGE_KEY_MISTAKES = 'maarif_fen_mistakes';
const STORAGE_KEY_TEACHER_CODE = 'maarif_fen_active_teacher_code';
const STORAGE_KEY_TEACHER_HISTORY = 'maarif_fen_teacher_code_history';
const STORAGE_KEY_JOINED_STUDENTS = 'maarif_fen_joined_students';

const initialStats: UserStats = {
  totalAnswered: 0,
  totalCorrect: 0,
  totalMistakes: 0,
  resolvedMistakes: 0,
  streakDays: 1,
  lastActive: new Date().toISOString(),
  unitScores: {
    '1. Ünite': { answered: 0, correct: 0 },
    '2. Ünite': { answered: 0, correct: 0 },
    '3. Ünite': { answered: 0, correct: 0 }
  },
  skillScores: {
    'Veri Analizi ve Çıkarım': { answered: 0, correct: 0 },
    'Model ve Görsel Yorumlama': { answered: 0, correct: 0 },
    'Neden-Sonuç İlişkisi': { answered: 0, correct: 0 },
    'Akıl Yürütme ve Bilim Tarihi': { answered: 0, correct: 0 },
    'Kavramsal Bilgi ve Denetim': { answered: 0, correct: 0 }
  }
};

const initialSampleStudents: JoinedStudent[] = [
  {
    id: 'stud-sample-1',
    studentName: 'Ahmet Yılmaz',
    schoolName: 'Mehmet Akif Ersoy Ortaokulu',
    className: '7/B',
    email: 'ahmet.yilmaz@okul.k12.tr',
    joinedAt: '2026-09-20 14:30',
    referenceCodeUsed: 'FEN-7A-842',
    totalAnswered: 35,
    totalCorrect: 27,
    mistakesCount: 8,
    mistakesList: [
      {
        questionId: 'mcq-uzay-1',
        sectionCode: '7.1.1',
        sectionTitle: 'Uzay Araştırmaları',
        questionText: 'Teleskop icadı ve uzay kirliliğinin temel sebepleri',
        questionType: 'mcq',
        userAnswer: 'C',
        correctAnswer: 'A',
        timestamp: Date.now() - 3600000
      },
      {
        questionId: 'fib-hucre-3',
        sectionCode: '7.2.1',
        sectionTitle: 'Hücre ve Organeller',
        questionText: 'Bitki hücresinde fotosentez yapan organel',
        questionType: 'blank',
        userAnswer: 'Mitokondri',
        correctAnswer: 'Kloroplast',
        timestamp: Date.now() - 1800000
      }
    ]
  },
  {
    id: 'stud-sample-2',
    studentName: 'Zeynep Kaya',
    schoolName: 'Cumhuriyet Ortaokulu',
    className: '5/A',
    email: 'zeynep.kaya@okul.k12.tr',
    joinedAt: '2026-09-21 09:15',
    referenceCodeUsed: 'FEN-7A-842',
    totalAnswered: 40,
    totalCorrect: 36,
    mistakesCount: 4,
    mistakesList: [
      {
        questionId: 'mcq-gunes-2',
        sectionCode: '5.1.1',
        sectionTitle: "Güneş'in Yapısı ve Özellikleri",
        questionText: "Güneş lekeleri ve Galileo'nun keşfi",
        questionType: 'mcq',
        userAnswer: 'B',
        correctAnswer: 'C',
        timestamp: Date.now() - 7200000
      }
    ]
  }
];

const UserProgressContext = createContext<UserProgressContextType | undefined>(undefined);

export const UserProgressProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserProfile | null>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_USER);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error(e);
    }
    // Default to guest
    return {
      name: 'Misafir Öğrenci',
      email: '',
      avatar: '🌟',
      isGoogle: false,
      gradeLevel: 5
    };
  });

  const [stats, setStats] = useState<UserStats>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_STATS);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error(e);
    }
    return initialStats;
  });

  const [mistakes, setMistakes] = useState<QuestionMistake[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_MISTAKES);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error(e);
    }
    return [];
  });

  const [activeTeacherCode, setActiveTeacherCode] = useState<string>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_TEACHER_CODE);
      if (saved) return saved;
    } catch (e) {
      console.error(e);
    }
    return 'FEN-7A-842';
  });

  const [teacherCodesHistory, setTeacherCodesHistory] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_TEACHER_HISTORY);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error(e);
    }
    return ['FEN-7A-801'];
  });

  const [joinedStudents, setJoinedStudents] = useState<JoinedStudent[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_JOINED_STUDENTS);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error(e);
    }
    return initialSampleStudents;
  });

  useEffect(() => {
    try {
      if (user) {
        localStorage.setItem(STORAGE_KEY_USER, JSON.stringify(user));
      } else {
        localStorage.removeItem(STORAGE_KEY_USER);
      }
    } catch (e) {
      console.error(e);
    }
  }, [user]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_STATS, JSON.stringify(stats));
    } catch (e) {
      console.error(e);
    }
  }, [stats]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_MISTAKES, JSON.stringify(mistakes));
    } catch (e) {
      console.error(e);
    }
  }, [mistakes]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_TEACHER_CODE, activeTeacherCode);
    } catch (e) {
      console.error(e);
    }
  }, [activeTeacherCode]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_TEACHER_HISTORY, JSON.stringify(teacherCodesHistory));
    } catch (e) {
      console.error(e);
    }
  }, [teacherCodesHistory]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_JOINED_STUDENTS, JSON.stringify(joinedStudents));
    } catch (e) {
      console.error(e);
    }
  }, [joinedStudents]);

  const setUserProfile = (profile: UserProfile | null) => {
    setUser(profile);
  };

  const loginAsGuest = () => {
    setUser({
      name: 'Misafir Öğrenci',
      email: '',
      avatar: '🌟',
      isGoogle: false,
      gradeLevel: 5
    });
  };

  const loginWithGoogleMock = (email = 'akfen145310@gmail.com', name = 'Akfen Öğrenci') => {
    setUser(prev => ({
      name,
      email,
      avatar: '👨‍🎓',
      isGoogle: true,
      gradeLevel: prev?.gradeLevel || 5,
      schoolName: prev?.schoolName,
      className: prev?.className,
      teacherReferenceCode: prev?.teacherReferenceCode
    }));
  };

  // Generate a new reference code, invalidating previous codes
  const generateNewTeacherCode = () => {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    let randomPart = '';
    for (let i = 0; i < 4; i++) {
      randomPart += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    const newCode = `FEN-${randomPart}`;

    setTeacherCodesHistory(prev => [...prev, activeTeacherCode]);
    setActiveTeacherCode(newCode);
    return newCode;
  };

  // Student joins via reference code
  const joinWithTeacherCode = (
    code: string,
    studentInfo: { studentName: string; schoolName: string; className: string }
  ) => {
    const cleanCode = code.trim().toUpperCase();

    if (cleanCode !== activeTeacherCode) {
      // Check if it is an old expired code
      if (teacherCodesHistory.includes(cleanCode)) {
        return {
          success: false,
          message: 'Bu referans kodu öğretmeniniz tarafından yenilenmiş ve süresi dolmuştur. Lütfen güncel referans kodunu isteyiniz.'
        };
      }
      return {
        success: false,
        message: 'Geçersiz referans kodu. Lütfen öğretmeninizin verdiği kodu kontrol ediniz.'
      };
    }

    // Valid code! Register or update student
    const studentEmail = user?.email || `${studentInfo.studentName.toLowerCase().replace(/\s+/g, '.')}@ogrenci.meb`;

    setUser(prev => ({
      name: studentInfo.studentName,
      email: prev?.email || studentEmail,
      avatar: prev?.avatar || '🎓',
      isGoogle: prev?.isGoogle || false,
      gradeLevel: prev?.gradeLevel || 5,
      schoolName: studentInfo.schoolName,
      className: studentInfo.className,
      teacherReferenceCode: cleanCode
    }));

    // Add or update in joinedStudents
    setJoinedStudents(prev => {
      const existing = prev.find(
        s => s.studentName.toLowerCase() === studentInfo.studentName.toLowerCase() && s.schoolName === studentInfo.schoolName
      );
      if (existing) {
        return prev.map(s =>
          s.id === existing.id
            ? {
                ...s,
                className: studentInfo.className,
                referenceCodeUsed: cleanCode,
                joinedAt: new Date().toLocaleString('tr-TR')
              }
            : s
        );
      }
      const newStudent: JoinedStudent = {
        id: `stud-${Date.now()}`,
        studentName: studentInfo.studentName,
        schoolName: studentInfo.schoolName,
        className: studentInfo.className,
        email: studentEmail,
        joinedAt: new Date().toLocaleString('tr-TR'),
        referenceCodeUsed: cleanCode,
        totalAnswered: stats.totalAnswered,
        totalCorrect: stats.totalCorrect,
        mistakesCount: mistakes.filter(m => !m.resolved).length,
        mistakesList: mistakes.map(m => ({
          questionId: m.questionId,
          sectionCode: m.sectionCode,
          sectionTitle: m.sectionTitle,
          questionText: m.questionData?.soruKoku || m.questionData?.question || 'Soru',
          questionType: m.questionType,
          userAnswer: m.userAnswer,
          correctAnswer: m.questionData?.dogruCevap || m.questionData?.blankAnswer,
          timestamp: m.timestamp
        }))
      };
      return [newStudent, ...prev];
    });

    return {
      success: true,
      message: `Tebrikler! ${cleanCode} referans koduyla öğretmeninizin sınıfına başarıyla bağlandınız.`
    };
  };

  // Teacher deletes a student
  const deleteStudentFromTeacher = (studentId: string) => {
    setJoinedStudents(prev => prev.filter(s => s.id !== studentId));
  };

  const recordAnswer = ({
    questionId,
    sectionCode,
    sectionTitle,
    questionType,
    isCorrect,
    skill = 'Veri Analizi ve Çıkarım',
    unitCode = '1. Ünite',
    questionData,
    userAnswer
  }: {
    questionId: string;
    sectionCode: string;
    sectionTitle: string;
    questionType: 'blank' | 'mcq';
    isCorrect: boolean;
    skill?: string;
    unitCode?: string;
    questionData: any;
    userAnswer?: string;
  }) => {
    // Only persist tracking if user is logged in with Google or joined to teacher
    // But guest can still answer
    setStats(prev => {
      const newUnitScores = { ...prev.unitScores };
      const currentUnit = newUnitScores[unitCode] || { answered: 0, correct: 0 };
      newUnitScores[unitCode] = {
        answered: currentUnit.answered + 1,
        correct: currentUnit.correct + (isCorrect ? 1 : 0)
      };

      const newSkillScores = { ...prev.skillScores };
      let mappedSkill = 'Veri Analizi ve Çıkarım';
      if (skill.includes('Model') || skill.includes('Görsel')) {
        mappedSkill = 'Model ve Görsel Yorumlama';
      } else if (skill.includes('Neden-Sonuç') || skill.includes('Güvenlik')) {
        mappedSkill = 'Neden-Sonuç İlişkisi';
      } else if (skill.includes('Tarih') || skill.includes('Hikmet') || skill.includes('Akıl')) {
        mappedSkill = 'Akıl Yürütme ve Bilim Tarihi';
      } else if (skill.includes('Bilgi') || skill.includes('Kavram') || skill.includes('Hata')) {
        mappedSkill = 'Kavramsal Bilgi ve Denetim';
      }

      const currentSkill = newSkillScores[mappedSkill] || { answered: 0, correct: 0 };
      newSkillScores[mappedSkill] = {
        answered: currentSkill.answered + 1,
        correct: currentSkill.correct + (isCorrect ? 1 : 0)
      };

      return {
        ...prev,
        totalAnswered: prev.totalAnswered + 1,
        totalCorrect: prev.totalCorrect + (isCorrect ? 1 : 0),
        totalMistakes: prev.totalMistakes + (isCorrect ? 0 : 1),
        lastActive: new Date().toISOString(),
        unitScores: newUnitScores,
        skillScores: newSkillScores
      };
    });

    if (!isCorrect) {
      setMistakes(prev => {
        const existingIndex = prev.findIndex(m => m.questionId === questionId);
        if (existingIndex >= 0) {
          const updated = [...prev];
          updated[existingIndex] = {
            ...updated[existingIndex],
            attempts: updated[existingIndex].attempts + 1,
            userAnswer,
            timestamp: Date.now(),
            resolved: false
          };
          return updated;
        } else {
          return [
            ...prev,
            {
              questionId,
              sectionCode,
              sectionTitle,
              questionType,
              questionData,
              userAnswer,
              timestamp: Date.now(),
              attempts: 1,
              resolved: false
            }
          ];
        }
      });

      // Update joinedStudents list if student is connected to teacher
      if (user?.teacherReferenceCode && user.name) {
        setJoinedStudents(prev =>
          prev.map(s => {
            if (s.studentName === user.name) {
              const newMistakeItem = {
                questionId,
                sectionCode,
                sectionTitle,
                questionText: questionData?.soruKoku || questionData?.question || 'Soru',
                questionType,
                userAnswer,
                correctAnswer: questionData?.dogruCevap || questionData?.blankAnswer,
                timestamp: Date.now()
              };
              return {
                ...s,
                totalAnswered: s.totalAnswered + 1,
                mistakesCount: s.mistakesCount + 1,
                mistakesList: [newMistakeItem, ...s.mistakesList.filter(m => m.questionId !== questionId)]
              };
            }
            return s;
          })
        );
      }
    } else {
      resolveMistake(questionId);
      // Update student success in teacher view
      if (user?.teacherReferenceCode && user.name) {
        setJoinedStudents(prev =>
          prev.map(s => {
            if (s.studentName === user.name) {
              return {
                ...s,
                totalAnswered: s.totalAnswered + 1,
                totalCorrect: s.totalCorrect + 1,
                mistakesList: s.mistakesList.filter(m => m.questionId !== questionId),
                mistakesCount: Math.max(0, s.mistakesCount - 1)
              };
            }
            return s;
          })
        );
      }
    }
  };

  const resolveMistake = (questionId: string) => {
    setMistakes(prev => {
      const idx = prev.findIndex(m => m.questionId === questionId);
      if (idx >= 0 && !prev[idx].resolved) {
        const updated = [...prev];
        updated[idx] = { ...updated[idx], resolved: true };
        setStats(s => ({ ...s, resolvedMistakes: s.resolvedMistakes + 1 }));
        return updated;
      }
      return prev;
    });
  };

  const clearAllProgress = () => {
    setStats(initialStats);
    setMistakes([]);
    try {
      localStorage.removeItem(STORAGE_KEY_STATS);
      localStorage.removeItem(STORAGE_KEY_MISTAKES);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <UserProgressContext.Provider
      value={{
        user,
        stats,
        mistakes,
        activeTeacherCode,
        teacherCodesHistory,
        joinedStudents,
        setUserProfile,
        recordAnswer,
        resolveMistake,
        clearAllProgress,
        loginAsGuest,
        loginWithGoogleMock,
        generateNewTeacherCode,
        joinWithTeacherCode,
        deleteStudentFromTeacher
      }}
    >
      {children}
    </UserProgressContext.Provider>
  );
};

export const useUserProgress = () => {
  const context = useContext(UserProgressContext);
  if (!context) {
    throw new Error('useUserProgress must be used within a UserProgressProvider');
  }
  return context;
};
