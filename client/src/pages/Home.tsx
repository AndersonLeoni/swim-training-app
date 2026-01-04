import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useProgress } from "@/hooks/useProgress";
import { trainingData, achievements } from "@/lib/trainingData";
import { Award, Flame, TrendingUp, Zap } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "wouter";

export default function Home() {
  const { progress, completeTraining, getStats } = useProgress();
  const [showAchievements, setShowAchievements] = useState(false);
  const [selectedProgramId, setSelectedProgramId] = useState("easy-swimming-cycle");
  const [mounted, setMounted] = useState(false);
  const stats = getStats();

  // Carregar programa selecionado do localStorage ao montar
  useEffect(() => {
    const saved = localStorage.getItem('selectedProgramId');
    if (saved) {
      setSelectedProgramId(saved);
    }
    setMounted(true);
  }, []);

  // Salvar programa selecionado no localStorage quando mudar
  useEffect(() => {
    if (mounted) {
      localStorage.setItem('selectedProgramId', selectedProgramId);
    }
  }, [selectedProgramId, mounted]);

  // Get selected program
  const program = trainingData.find(p => p.id === selectedProgramId) || trainingData[0];
  const currentWeek = program?.weeks?.find(w => w.weekNumber === progress.currentWeek);
  const currentTraining = currentWeek?.trainings.find(t => t.trainingNumber === progress.currentTraining);

  const weekProgress = currentWeek ? (progress.completedWeeks.includes(currentWeek.weekNumber) ? 100 : (progress.completedTrainings.filter(id => currentWeek.trainings.some(t => t.id === id)).length / 4) * 100) : 0;

  const localAchievements = [
    { id: "firstStep", name: "🌊 Primeiro Passo", description: "Completar o primeiro treino", unlocked: progress.achievements.firstStep },
    { id: "week1Completed", name: "🏊 Posição Perfeita", description: "Completar Semana 1", unlocked: progress.achievements.week1Completed },
    { id: "week2Completed", name: "🦵 Perna Forte", description: "Completar Semana 2", unlocked: progress.achievements.week2Completed },
    { id: "week3Completed", name: "💨 Respiração Perfeita", description: "Completar Semana 3", unlocked: progress.achievements.week3Completed },
    { id: "week4Completed", name: "⚡ Mestre da Alavanca", description: "Completar Semana 4", unlocked: progress.achievements.week4Completed },
    { id: "consistency7Days", name: "🔥 Consistência", description: "Treinar 7 dias seguidos", unlocked: progress.achievements.consistency7Days },
    { id: "cycleCompleted", name: "🏆 Ciclo Completo", description: "Completar as 4 semanas", unlocked: progress.achievements.cycleCompleted },
    { id: "twoCompletedCycles", name: "👑 Mestre Nadador", description: "Completar 2 ciclos", unlocked: progress.achievements.twoCompletedCycles },
  ];

  // Calcular conquista atual baseada no XP
  const currentAchievement = achievements.reduce((prev, current) => {
    return stats.totalXP >= current.xpRequired ? current : prev;
  });

  const nextAchievement = achievements.find(a => a.xpRequired > stats.totalXP);
  const xpToNextLevel = nextAchievement ? nextAchievement.xpRequired - stats.totalXP : 0;

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="container py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center text-white font-bold">
              🏊
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Swim Master</h1>
              <p className="text-xs text-gray-500">{program?.name}</p>
            </div>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowAchievements(!showAchievements)}
          >
            <Award className="w-4 h-4 mr-2" />
            Conquistas
          </Button>
        </div>
      </header>

      <main className="container py-8">
        {/* Program Selector */}
        <div className="mb-8 p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
          <p className="text-sm font-semibold text-gray-700 mb-3">Selecione um Programa:</p>
          <div className="flex flex-wrap gap-2">
            {trainingData.map((prog) => (
              <button
                key={prog.id}
                onClick={() => setSelectedProgramId(prog.id)}
                className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                  selectedProgramId === prog.id
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {prog.name}
              </button>
            ))}
          </div>
        </div>

        {/* Hero Section */}
        <div className="mb-8 rounded-xl overflow-hidden shadow-lg">
          <div className="relative h-64 bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center">
            <img
              src="/images/hero-swimming.png"
              alt="Nadador"
              className="absolute inset-0 w-full h-full object-cover opacity-40"
            />
            <div className="relative z-10 text-center text-white">
              <h2 className="text-4xl font-bold mb-2">Bem-vindo ao {program?.name}!</h2>
              <p className="text-lg opacity-90">{program?.description}</p>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card className="p-4 bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Treinos</p>
                <p className="text-3xl font-bold text-blue-600">{stats.totalTrainings}</p>
              </div>
              <TrendingUp className="w-8 h-8 text-blue-400" />
            </div>
          </Card>

          <Card className="p-4 bg-gradient-to-br from-cyan-50 to-cyan-100 border-cyan-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Experiência</p>
                <p className="text-3xl font-bold text-cyan-600">{stats.totalXP}</p>
              </div>
              <Zap className="w-8 h-8 text-cyan-400" />
            </div>
          </Card>

          <Card className="p-4 bg-gradient-to-br from-emerald-50 to-emerald-100 border-emerald-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Dias Seguidos</p>
                <p className="text-3xl font-bold text-emerald-600">{stats.consecutiveDays}</p>
              </div>
              <Flame className="w-8 h-8 text-emerald-400" />
            </div>
          </Card>

          <Card className="p-4 bg-gradient-to-br from-amber-50 to-amber-100 border-amber-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Ciclos</p>
                <p className="text-3xl font-bold text-amber-600">{stats.completedCycles}</p>
              </div>
              <Award className="w-8 h-8 text-amber-400" />
            </div>
          </Card>
        </div>

        {/* Pokemon Achievement Section */}
        <Card className="p-6 mb-8 bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-200">
          <h3 className="text-xl font-bold text-gray-900 mb-4">🎮 Hierarquia de Pokémons</h3>
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-3">
                <span className="text-5xl">{currentAchievement.icon}</span>
                <div>
                  <p className="font-bold text-lg">{currentAchievement.name}</p>
                  <p className="text-sm text-gray-600">{currentAchievement.title}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-purple-600">{stats.totalXP} XP</p>
              </div>
            </div>
            {nextAchievement && (
              <div className="mt-4">
                <p className="text-sm text-gray-600 mb-2">Próximo nível: {nextAchievement.name} ({nextAchievement.xpRequired} XP)</p>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all"
                    style={{
                      width: `${((stats.totalXP - currentAchievement.xpRequired) / (nextAchievement.xpRequired - currentAchievement.xpRequired)) * 100}%`
                    }}
                  />
                </div>
                <p className="text-xs text-gray-600 mt-1">{xpToNextLevel} XP para o próximo nível</p>
              </div>
            )}
          </div>
          <div className="grid grid-cols-4 gap-2">
            {achievements.map((achievement) => {
              const isUnlocked = stats.totalXP >= achievement.xpRequired;
              return (
                <div
                  key={achievement.id}
                  className={`p-3 rounded-lg text-center transition-all ${
                    isUnlocked
                      ? `bg-gradient-to-b ${achievement.color} text-white shadow-lg`
                      : "bg-gray-200 opacity-40 text-gray-600"
                  }`}
                >
                  <div className="text-2xl mb-1">{achievement.icon}</div>
                  <p className="text-xs font-bold">{achievement.name}</p>
                </div>
              );
            })}
          </div>
        </Card>

        {/* Strength Training Section */}
        {program?.trainings && program.trainings.length > 0 && (
          <Card className="mb-8 p-6 border-2 border-green-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">{program.name}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {program.trainings.map((training) => {
                const isCompleted = progress.completedTrainings.includes(training.id);
                return (
                  <Link key={training.id} href={`/training/${training.id}`}>
                    <Card className={`p-6 cursor-pointer transition-all hover:shadow-lg ${
                      isCompleted ? "bg-green-50 border-2 border-green-400" : "bg-white border-2 border-gray-200"
                    }`}>
                      <div className="flex items-start justify-between mb-3">
                        <h4 className="font-bold text-lg text-gray-900 flex-1">{training.title}</h4>
                        {isCompleted && <span className="text-2xl">✓</span>}
                      </div>
                      <p className="text-sm text-gray-600 mb-4">{training.focus}</p>
                      <div className="space-y-2">
                        {training.warmup && training.warmup.length > 0 && (
                          <div className="text-xs">
                            <span className="font-semibold text-blue-600">Aquecimento:</span>
                            <span className="text-gray-600"> {training.warmup[0].distance}{training.warmup[0].unit}</span>
                          </div>
                        )}
                        {training.main && training.main.length > 0 && (
                          <div className="text-xs">
                            <span className="font-semibold text-orange-600">Principal:</span>
                            <span className="text-gray-600"> {training.main[0].distance}{training.main[0].unit}</span>
                          </div>
                        )}
                      </div>
                      <Button className="w-full mt-4 bg-green-600 hover:bg-green-700">
                        Iniciar
                      </Button>
                    </Card>
                  </Link>
                );
              })}
            </div>
          </Card>
        )}

        {/* Weeks Section */}
        {program?.weeks && program.weeks.length > 0 && (
          <div className="space-y-8">
            {program.weeks.map((week) => {
              const isWeekCompleted = progress.completedWeeks.includes(week.weekNumber);
              const weekTrainings = week.trainings.filter(t => progress.completedTrainings.includes(t.id)).length;
              const weekProgress = (weekTrainings / week.trainings.length) * 100;

              return (
                <Card key={week.id} className={`p-6 border-2 ${isWeekCompleted ? "bg-emerald-50 border-emerald-300" : "border-gray-200"}`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className={`week-badge week-badge-${week.weekNumber}`}>
                        {week.weekNumber}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{week.title}</h3>
                        <p className="text-sm text-gray-600">{week.focus}</p>
                      </div>
                    </div>
                    {isWeekCompleted && <span className="text-3xl">✓</span>}
                  </div>

                  <Progress value={weekProgress} className="mb-4" />
                  <p className="text-sm text-gray-600 mb-4">{weekTrainings} de {week.trainings.length} treinos concluídos</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {week.trainings.map((training) => {
                      const isCompleted = progress.completedTrainings.includes(training.id);
                      return (
                        <Link key={training.id} href={`/training/${training.id}`}>
                          <Card className={`p-4 cursor-pointer transition-all hover:shadow-md ${
                            isCompleted ? "bg-emerald-100 border-2 border-emerald-400" : "bg-white border-2 border-gray-200"
                          }`}>
                            <div className="flex items-start justify-between mb-2">
                              <h4 className="font-bold text-gray-900">{training.title}</h4>
                              {isCompleted && <span className="text-xl">✓</span>}
                            </div>
                            <p className="text-xs text-gray-600 mb-3">{training.focus}</p>
                            <Button className="w-full bg-blue-600 hover:bg-blue-700">
                              Iniciar
                            </Button>
                          </Card>
                        </Link>
                      );
                    })}
                  </div>
                </Card>
              );
            })}
          </div>
        )}

        {/* Achievements Modal */}
        {showAchievements && (
          <Card className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
            <Card className="max-w-2xl w-full p-8 max-h-96 overflow-y-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Suas Conquistas</h2>
              <div className="grid grid-cols-2 gap-4">
                {localAchievements.map((achievement) => (
                  <div
                    key={achievement.id}
                    className={`p-4 rounded-lg border-2 ${
                      achievement.unlocked
                        ? "bg-gradient-to-br from-yellow-50 to-amber-50 border-amber-300"
                        : "bg-gray-100 border-gray-300 opacity-50"
                    }`}
                  >
                    <p className="font-bold text-lg">{achievement.name}</p>
                    <p className="text-sm text-gray-600">{achievement.description}</p>
                  </div>
                ))}
              </div>
              <Button
                className="w-full mt-6 bg-blue-600 hover:bg-blue-700"
                onClick={() => setShowAchievements(false)}
              >
                Fechar
              </Button>
            </Card>
          </Card>
        )}
      </main>
    </div>
  );
}
