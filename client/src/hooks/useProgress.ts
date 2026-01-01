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
  const completeTraining = (trainingId: string, weekNumber: number) => {
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

    // Verificar se completou todos os 4 treinos da semana
    const trainingsByWeek = {
      1: ['w1-t1', 'w1-t2', 'w1-t3', 'w1-t4'],
      2: ['w2-t1', 'w2-t2', 'w2-t3', 'w2-t4'],
      3: ['w3-t1', 'w3-t2', 'w3-t3', 'w3-t4'],
      4: ['w4-t1', 'w4-t2', 'w4-t3', 'w4-t4']
    };

    const weekTrainings = trainingsByWeek[weekNumber as keyof typeof trainingsByWeek] || [];
    const weekCompleted = weekTrainings.every(id => newProgress.completedTrainings.includes(id));

    if (weekCompleted && !newProgress.completedWeeks.includes(weekNumber)) {
      newProgress.completedWeeks.push(weekNumber);
      newProgress.totalXP += 100; // +100 XP bônus por semana

      // Unlock achievements por semana
      if (weekNumber === 1 && !newProgress.achievements.week1Completed) {
        newProgress.achievements.week1Completed = true;
      }
      if (weekNumber === 2 && !newProgress.achievements.week2Completed) {
        newProgress.achievements.week2Completed = true;
      }
      if (weekNumber === 3 && !newProgress.achievements.week3Completed) {
        newProgress.achievements.week3Completed = true;
      }
      if (weekNumber === 4 && !newProgress.achievements.week4Completed) {
        newProgress.achievements.week4Completed = true;
      }

      // Verificar se completou o ciclo inteiro
      if (newProgress.completedWeeks.length === 4) {
        newProgress.completedCycles += 1;
        newProgress.totalXP += 500; // +500 XP bônus por ciclo
        newProgress.achievements.cycleCompleted = true;

        if (newProgress.completedCycles >= 2) {
          newProgress.achievements.twoCompletedCycles = true;
        }

        // Resetar para próximo ciclo
        newProgress.completedWeeks = [];
        newProgress.currentWeek = 1;
        newProgress.currentTraining = 1;
      } else {
        // Avançar para próxima semana
        newProgress.currentWeek = weekNumber + 1;
        newProgress.currentTraining = 1;
      }
    } else {
      // Avançar para próximo treino da mesma semana
      if (newProgress.currentTraining < 4) {
        newProgress.currentTraining += 1;
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
    return {
      totalTrainings: progress.completedTrainings.length,
      totalXP: progress.totalXP,
      consecutiveDays: progress.consecutiveDays,
      completedWeeks: progress.completedWeeks.length,
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
