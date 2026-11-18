import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useProgress } from "@/hooks/useProgress";
import { trainingData } from "@/lib/trainingData";
import { ArrowLeft, CheckCircle2, Zap } from "lucide-react";
import { useEffect, useState } from "react";
import { useLocation, useRoute } from "wouter";

export default function TrainingDetail() {
  const [, params] = useRoute("/training/:id");
  const [, navigate] = useLocation();
  const { progress, completeTraining } = useProgress();
  const [showConfetti, setShowConfetti] = useState(false);

  const trainingId = params?.id;

  // Find training - search in both weeks and direct trainings
  let training = null;
  let week = null;
  let selectedProgram = trainingData[0];
  let programName = "";

  for (const program of trainingData) {
    programName = program.name;
    
    // Search in weeks (Ciclo, EZ Speed, Super Velô, etc)
    if (program.weeks) {
      for (const w of program.weeks) {
        const t = w.trainings.find(tr => tr.id === trainingId);
        if (t) {
          training = t;
          week = w;
          selectedProgram = program;
          break;
        }
      }
    }
    
    // Search in direct trainings (Preparação Física, Tutoriais)
    if (!training && program.trainings) {
      const t = program.trainings.find(tr => tr.id === trainingId);
      if (t) {
        training = t;
        selectedProgram = program;
        // Create a fake week for programs without weeks
        week = {
          id: "no-week",
          weekNumber: 0,
          title: program.name,
          focus: program.description,
          trainings: []
        };
        break;
      }
    }
    
    if (training) break;
  }

  const isCompleted = training ? progress.completedTrainings.includes(training.id) : false;

  const handleCompleteTraining = () => {
    if (training && week) {
      completeTraining(
        training.id,
        week.weekNumber,
        selectedProgram.id,
        week.trainings.map((item) => item.id),
        selectedProgram.weeks?.length ?? 1
      );
      setShowConfetti(true);
      setTimeout(() => {
        navigate("/");
      }, 1500);
    }
  };

  if (!training || !week) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center">
        <Card className="p-8 text-center">
          <p className="text-gray-600 mb-4">Treino não encontrado</p>
          <Button onClick={() => navigate("/")} variant="outline">
            Voltar
          </Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="container py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate("/")}
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <div>
              <h1 className="text-xl font-bold text-gray-900">{training.title}</h1>
              <p className="text-sm text-gray-500">{week.title}</p>
            </div>
          </div>
          {isCompleted && (
            <div className="flex items-center gap-2 text-emerald-600 font-semibold">
              <CheckCircle2 className="w-5 h-5" />
              Concluído
            </div>
          )}
        </div>
      </header>

      <main className="container py-8">
        {/* Confetti Animation */}
        {showConfetti && (
          <div className="fixed inset-0 pointer-events-none overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="animate-confetti absolute"
                style={{
                  left: Math.random() * 100 + "%",
                  top: "-10px",
                  fontSize: "24px",
                  animation: `confetti ${1 + Math.random() * 0.5}s ease-out forwards`,
                  animationDelay: `${Math.random() * 0.3}s`
                }}
              >
                {["🎉", "🏆", "⭐", "🌟", "💪"][Math.floor(Math.random() * 5)]}
              </div>
            ))}
          </div>
        )}

        {/* Focus Section */}
        <Card className="mb-8 p-6 bg-gradient-to-r from-blue-50 to-cyan-50 border-2 border-blue-200">
          <div className="flex items-start gap-4">
            {week.weekNumber > 0 && (
              <div className={`week-badge week-badge-${week.weekNumber}`}>
                {week.weekNumber}
              </div>
            )}
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">{training.focus}</h2>
              <p className="text-gray-700">{week.focus}</p>
            </div>
          </div>
        </Card>

        {/* Warmup Section */}
        {training.warmup && training.warmup.length > 0 && (
          <div className="mb-8">
            <h3 className="training-section-title">🔥 Aquecimento</h3>
            <div className="space-y-4">
              {training.warmup.map((set) => (
                <div key={set.id} className="training-item">
                  <div className="training-item-distance">{set.distance}{set.unit}</div>
                  <div className="training-item-description">{set.description}</div>
                  {set.equipment && set.equipment.length > 0 && (
                    <div className="mb-2">
                      {set.equipment.map((eq) => (
                        <span key={eq} className="equipment-tag">{eq}</span>
                      ))}
                    </div>
                  )}
                  {set.notes && <div className="training-item-notes">💡 {set.notes}</div>}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Main Section */}
        {training.main && training.main.length > 0 && (
          <div className="mb-8">
            <h3 className="training-section-title">💪 Principal</h3>
            <div className="space-y-4">
              {training.main.map((set) => (
                <div key={set.id} className="training-item border-l-4 border-blue-500">
                  <div className="flex items-start justify-between mb-2">
                    <div className="training-item-distance">{set.distance}{set.unit}</div>
                    {set.intensity && (
                      <span className={`intensity-badge intensity-${set.intensity.toLowerCase()}`}>
                        {set.intensity}
                      </span>
                    )}
                  </div>
                  <div className="training-item-description">{set.description}</div>
                  {set.equipment && set.equipment.length > 0 && (
                    <div className="mb-2">
                      {set.equipment.map((eq) => (
                        <span key={eq} className="equipment-tag">{eq}</span>
                      ))}
                    </div>
                  )}
                  {set.restTime && (
                    <div className="text-sm font-semibold text-blue-600 mb-2">
                      ⏱️ Descanso: {set.restTime}
                    </div>
                  )}
                  {set.notes && <div className="training-item-notes">💡 {set.notes}</div>}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Cooldown Section */}
        {training.cooldown && training.cooldown.length > 0 && (
          <div className="mb-8">
            <h3 className="training-section-title">❄️ Desaquecimento</h3>
            <div className="space-y-4">
              {training.cooldown.map((set) => (
                <div key={set.id} className="training-item">
                  <div className="training-item-distance">{set.distance}{set.unit}</div>
                  <div className="training-item-description">{set.description}</div>
                  {set.notes && <div className="training-item-notes">💡 {set.notes}</div>}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Observations */}
        {training.observations && training.observations.length > 0 && (
          <div className="mb-8">
            <h3 className="training-section-title">📝 Observações Importantes</h3>
            <Card className="p-4 bg-amber-50 border-2 border-amber-200">
              <ul className="space-y-2">
                {training.observations.map((obs, idx) => (
                  <li key={idx} className="flex gap-3 text-gray-700">
                    <span className="text-amber-600 font-bold">•</span>
                    <span>{obs}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        )}

        {/* Materials */}
        {training.materials && training.materials.length > 0 && (
          <div className="mb-8">
            <h3 className="training-section-title">🎒 Materiais Necessários</h3>
            <Card className="p-4 bg-cyan-50 border-2 border-cyan-200">
              <div className="flex flex-wrap gap-2">
                {training.materials.map((material) => (
                  <span key={material} className="equipment-tag">{material}</span>
                ))}
              </div>
            </Card>
          </div>
        )}

        {/* Action Buttons */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4">
          <div className="container flex gap-4">
            <Button
              variant="outline"
              className="flex-1"
              onClick={() => navigate("/")}
            >
              Voltar
            </Button>
            <Button
              className={`flex-1 font-bold py-6 text-lg ${
                isCompleted
                  ? "bg-emerald-600 hover:bg-emerald-700"
                  : "bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600"
              } text-white`}
              onClick={handleCompleteTraining}
              disabled={isCompleted}
            >
              {isCompleted ? (
                <>
                  <CheckCircle2 className="w-5 h-5 mr-2" />
                  Treino Concluído!
                </>
              ) : (
                <>
                  <Zap className="w-5 h-5 mr-2" />
                  Marcar como Concluído
                </>
              )}
            </Button>
          </div>
        </div>

        {/* Spacer for fixed button */}
        <div className="h-24" />
      </main>
    </div>
  );
}
