import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useProgress } from "@/hooks/useProgress";
import { trainingData } from "@/lib/trainingData";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { useLocation } from "wouter";

export default function History() {
  const [, navigate] = useLocation();
  const { progress } = useProgress();
  const program = trainingData[0];
  const weeks = program?.weeks || [];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="container py-4 flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate("/")}
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h1 className="text-2xl font-bold text-gray-900">Histórico de Treinos</h1>
        </div>
      </header>

      <main className="container py-8 pb-20">
        {weeks.map((week) => (
          <div key={week.id} className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className={`week-badge week-badge-${week.weekNumber}`}>
                {week.weekNumber}
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">{week.title}</h2>
                <p className="text-sm text-gray-600">{week.focus}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {week.trainings.map((training) => {
                const isCompleted = progress.completedTrainings.includes(training.id);

                return (
                  <Card
                    key={training.id}
                    className={`p-4 border-2 transition-all ${
                      isCompleted
                        ? "bg-emerald-50 border-emerald-300"
                        : "bg-gray-50 border-gray-200"
                    }`}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-bold text-gray-900">{training.title}</h3>
                        <p className="text-sm text-gray-600">{training.focus}</p>
                      </div>
                      {isCompleted && (
                        <CheckCircle2 className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                      )}
                    </div>

                    {/* Training Summary */}
                    <div className="space-y-2 mb-4 text-sm text-gray-700">
                      {training.warmup.length > 0 && (
                        <div>
                          <span className="font-semibold">Aquecimento:</span>
                          {training.warmup.map(s => `${s.distance}${s.unit}`).join(", ")}
                        </div>
                      )}
                      {training.main.length > 0 && (
                        <div>
                          <span className="font-semibold">Principal:</span>
                          {training.main.map(s => `${s.distance}${s.unit}`).join(", ")}
                        </div>
                      )}
                      {training.materials.length > 0 && (
                        <div>
                          <span className="font-semibold">Materiais:</span>
                          {training.materials.join(", ")}
                        </div>
                      )}
                    </div>

                    {/* Status Badge */}
                    <div className="text-xs font-semibold">
                      {isCompleted ? (
                        <span className="text-emerald-600">✓ Concluído</span>
                      ) : (
                        <span className="text-gray-500">○ Pendente</span>
                      )}
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}
