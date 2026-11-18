import { useState, useEffect } from 'react';

export interface UserProgress {
  currentWeek: number;
  currentTraining: number;
  completedTrainings: string[];
  completedWeeks: number[];
  completedCycles: number;
  totalXP: number;
  consecutiveDays: number;
  lastTrainingDate: string | null;
  achievements: Record<string, boolean>;
  programProgress?: Record<string, { currentWeek: number; completedWeeks: number[] }>;
}

const DEFAULT_PROGRESS: UserProgress = {
  currentWeek: 1,
  currentTraining: 1,
  completedTrainings: [],
  completedWeeks: [],
  completedCycles: 0,
  totalXP: 0,
  consecutiveDays: 0,
  lastTrainingDate: null,
  achievements: {
    firstStep: false,
    week1Completed: false,
    week2Completed: false,
    week3Completed: false,
    week4Completed: false,
    consistency7Days: false,
    cycleCompleted: false,
    twoCompletedCycles: false,
  }
};

export function useProgress() {
  const [progress, setProgress] = useState<UserProgress>(DEFAULT_PROGRESS);
  const [isLoading, setIsLoading] = useState(true);

  // Carregar progresso do localStorage
  useEffect(() => {
    const saved = localStorage.getItem('swimProgress');
    if (saved) {
      try {
        setProgress(JSON.parse(saved));
      } catch (e) {
        console.error('Erro ao carregar progresso:', e);
        setProgress(DEFAULT_PROGRESS);
      }
    }
    setIsLoading(false);
  }, []);

  // Salvar progresso no localStorage
  const saveProgress = (newProgress: UserProgress) => {
    setProgress(newProgress);
    localStorage.setItem('swimProgress', JSON.stringify(newProgress));
  };

  // Completar um treino
  const completeTraining = (trainingId: string, weekNumber: number, programId: string, weekTrainingIds: string[], totalWeeks: number) => {
    const newProgress = { ...progress };

    // Adicionar ao array de treinos completados se não estiver lá
    if (!newProgress.completedTrainings.includes(trainingId)) {
      newProgress.completedTrainings.push(trainingId);
      newProgress.totalXP += 50; // +50 XP por treino

      // Unlock "Primeiro Passo"
      if (!newProgress.achievements.firstStep) {
        newProgress.achievements.firstStep = true;
        newProgress.totalXP += 0; // Não adiciona XP extra, apenas unlock
      }
    }

    // O progresso fica separado por programa e só avança quando todas as sessões
    // daquela semana forem concluídas. Isso mantém a jornada ao alternar programas.
    if (weekNumber > 0 && weekTrainingIds.length > 0) {
      const programProgress = { ...(newProgress.programProgress ?? {}) };
      const current = programProgress[programId] ?? (programId === "easy-swimming-cycle"
        ? { currentWeek: newProgress.currentWeek, completedWeeks: newProgress.completedWeeks }
        : { currentWeek: 1, completedWeeks: [] });
      const weekCompleted = weekTrainingIds.every(id => newProgress.completedTrainings.includes(id));
      if (weekCompleted && !current.completedWeeks.includes(weekNumber)) {
        const completedWeeks = [...current.completedWeeks, weekNumber];
        const currentWeek = Math.min(weekNumber + 1, totalWeeks);
        programProgress[programId] = { currentWeek, completedWeeks };
        newProgress.programProgress = programProgress;
        newProgress.totalXP += 100;

        // Preserve the original cycle achievements and counters for the default plan.
        if (programId === "easy-swimming-cycle") {
          newProgress.completedWeeks = Array.from(new Set([...newProgress.completedWeeks, weekNumber]));
          const weekAchievement = `week${weekNumber}Completed`;
          if (weekNumber <= 4 && weekAchievement in newProgress.achievements) {
            newProgress.achievements[weekAchievement] = true;
          }
          if (newProgress.completedWeeks.length === totalWeeks) {
            newProgress.completedCycles += 1;
            newProgress.totalXP += 500;
            newProgress.achievements.cycleCompleted = true;
            if (newProgress.completedCycles >= 2) newProgress.achievements.twoCompletedCycles = true;
            newProgress.completedWeeks = [];
            programProgress[programId] = { currentWeek: 1, completedWeeks: [] };
            newProgress.currentWeek = 1;
            newProgress.currentTraining = 1;
          } else {
            newProgress.currentWeek = currentWeek;
            newProgress.currentTraining = 1;
          }
        }
      }
    }

    // Atualizar dias de consistência
    const today = new Date().toISOString().split('T')[0];
    if (newProgress.lastTrainingDate !== today) {
      if (newProgress.lastTrainingDate) {
        const lastDate = new Date(newProgress.lastTrainingDate);
        const currentDate = new Date(today);
        const diffTime = currentDate.getTime() - lastDate.getTime();
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        if (diffDays === 1) {
          newProgress.consecutiveDays += 1;
        } else if (diffDays > 1) {
          newProgress.consecutiveDays = 1;
        }
      } else {
        newProgress.consecutiveDays = 1;
      }

      newProgress.lastTrainingDate = today;

      // Unlock "Consistência"
      if (newProgress.consecutiveDays >= 7 && !newProgress.achievements.consistency7Days) {
        newProgress.achievements.consistency7Days = true;
        newProgress.totalXP += 75;
      }
    }

    saveProgress(newProgress);
  };

  // Resetar progresso
  const resetProgress = () => {
    saveProgress(DEFAULT_PROGRESS);
  };

  // Obter estatísticas
  const getStats = () => {
    const programWeeksCompleted = Object.values(progress.programProgress ?? {})
      .reduce((total, item) => total + item.completedWeeks.length, 0);
    return {
      totalTrainings: progress.completedTrainings.length,
      totalXP: progress.totalXP,
      consecutiveDays: progress.consecutiveDays,
      completedWeeks: Math.max(progress.completedWeeks.length, programWeeksCompleted),
      completedCycles: progress.completedCycles,
      unlockedAchievements: Object.values(progress.achievements).filter(Boolean).length,
      totalAchievements: Object.keys(progress.achievements).length
    };
  };

  return {
    progress,
    isLoading,
    completeTraining,
    resetProgress,
    getStats
  };
}
