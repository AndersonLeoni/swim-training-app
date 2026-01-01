import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useProgress } from "@/hooks/useProgress";
import { trainingData } from "@/lib/trainingData";
import { Award, Flame, TrendingUp, Zap } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";

export default function Home() {
  const { progress, completeTraining, getStats } = useProgress();
  const [showAchievements, setShowAchievements] = useState(false);
  const stats = getStats();

  const currentWeek = trainingData.find(w => w.weekNumber === progress.currentWeek);
  const currentTraining = currentWeek?.trainings.find(t => t.trainingNumber === progress.currentTraining);

  const weekProgress = currentWeek ? (progress.completedWeeks.includes(currentWeek.weekNumber) ? 100 : (progress.completedTrainings.filter(id => currentWeek.trainings.some(t => t.id === id)).length / 4) * 100) : 0;

  const achievements = [
    { id: "firstStep", name: "🌊 Primeiro Passo", description: "Completar o primeiro treino", unlocked: progress.achievements.firstStep },
    { id: "week1Completed", name: "🏊 Posição Perfeita", description: "Completar Semana 1", unlocked: progress.achievements.week1Completed },
    { id: "week2Completed", name: "🦵 Perna Forte", description: "Completar Semana 2", unlocked: progress.achievements.week2Completed },
    { id: "week3Completed", name: "💨 Respiração Perfeita", description: "Completar Semana 3", unlocked: progress.achievements.week3Completed },
    { id: "week4Completed", name: "⚡ Mestre da Alavanca", description: "Completar Semana 4", unlocked: progress.achievements.week4Completed },
    { id: "consistency7Days", name: "🔥 Consistência", description: "Treinar 7 dias seguidos", unlocked: progress.achievements.consistency7Days },
    { id: "cycleCompleted", name: "🏆 Ciclo Completo", description: "Completar as 4 semanas", unlocked: progress.achievements.cycleCompleted },
    { id: "twoCompletedCycles", name: "👑 Mestre Nadador", description: "Completar 2 ciclos", unlocked: progress.achievements.twoCompletedCycles },
  ];

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
              <p className="text-xs text-gray-500">Ciclo do Nado Fácil</p>
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
        {/* Hero Section */}
        <div className="mb-8 rounded-xl overflow-hidden shadow-lg">
          <div className="relative h-64 bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center">
            <img
              src="/images/hero-swimming.png"
              alt="Nadador"
              className="absolute inset-0 w-full h-full object-cover opacity-40"
            />
            <div className="relative z-10 text-center text-white">
              <h2 className="text-4xl font-bold mb-2">Bem-vindo ao Ciclo do Nado Fácil!</h2>
              <p className="text-lg opacity-90">Melhore sua técnica em 4 semanas com treinos estruturados</p>
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

        {/* Current Week Progress */}
        {currentWeek && (
          <Card className="mb-8 p-6 border-2 border-blue-200">
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-2xl font-bold text-gray-900">{currentWeek.title}</h3>
                <span className={`week-badge week-badge-${currentWeek.weekNumber}`}>
                  {currentWeek.weekNumber}
                </span>
              </div>
              <p className="text-gray-600 mb-4">{currentWeek.focus}</p>
            </div>

            {/* Progress Bar */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-semibold text-gray-700">Progresso da Semana</span>
                <span className="text-sm font-bold text-blue-600">{Math.round(weekProgress)}%</span>
              </div>
              <Progress value={weekProgress} className="h-3" />
            </div>

            {/* Training Circles */}
            <div className="flex gap-4 mb-6">
              {currentWeek.trainings.map((training) => {
                const isCompleted = progress.completedTrainings.includes(training.id);
                const isCurrent = training.trainingNumber === progress.currentTraining && !isCompleted;

                return (
                  <div key={training.id} className="flex flex-col items-center gap-2">
                    <div
                      className={`progress-circle ${
                        isCompleted
                          ? "progress-circle-completed"
                          : isCurrent
                            ? "progress-circle-current"
                            : "progress-circle-pending"
                      }`}
                    >
                      {isCompleted ? "✓" : training.trainingNumber}
                    </div>
                    <span className="text-xs text-gray-600">T{training.trainingNumber}</span>
                  </div>
                );
              })}
            </div>

            {/* Action Button */}
            {currentTraining && (
              <Link href={`/training/${currentTraining.id}`}>
                <Button className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-bold py-6 text-lg">
                  Iniciar Treino {currentTraining.trainingNumber}
                </Button>
              </Link>
            )}
          </Card>
        )}

        {/* Achievements Section */}
        {showAchievements && (
          <Card className="p-6 mb-8 border-2 border-amber-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Suas Conquistas</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {achievements.map((achievement) => (
                <div
                  key={achievement.id}
                  className={`p-4 rounded-lg border-2 text-center transition-all ${
                    achievement.unlocked
                      ? "bg-gradient-to-br from-amber-50 to-amber-100 border-amber-300"
                      : "bg-gray-50 border-gray-200 opacity-50"
                  }`}
                >
                  <div className="text-4xl mb-2">{achievement.name.split(" ")[0]}</div>
                  <h4 className="font-bold text-gray-900 mb-1">{achievement.name}</h4>
                  <p className="text-xs text-gray-600">{achievement.description}</p>
                  {achievement.unlocked && (
                    <div className="mt-2 text-xs font-bold text-amber-600">Desbloqueado! 🎉</div>
                  )}
                </div>
              ))}
            </div>
          </Card>
        )}

        {/* Quick Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link href="/history">
            <Button variant="outline" className="w-full h-auto py-4 flex flex-col items-center gap-2">
              <TrendingUp className="w-6 h-6" />
              <span>Histórico</span>
            </Button>
          </Link>
          <Link href="/glossary">
            <Button variant="outline" className="w-full h-auto py-4 flex flex-col items-center gap-2">
              <span className="text-xl">📖</span>
              <span>Glossário</span>
            </Button>
          </Link>
          <Link href="/settings">
            <Button variant="outline" className="w-full h-auto py-4 flex flex-col items-center gap-2">
              <span className="text-xl">⚙️</span>
              <span>Configurações</span>
            </Button>
          </Link>
        </div>
      </main>
    </div>
  );
}
