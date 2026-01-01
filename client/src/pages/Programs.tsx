import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Zap } from "lucide-react";
import { useLocation } from "wouter";

interface ProgramCard {
  id: string;
  name: string;
  description: string;
  duration: string;
  icon: string;
  color: string;
  focus: string;
  status: "available" | "coming-soon";
}

const programs: ProgramCard[] = [
  {
    id: "easy-swimming-cycle",
    name: "Ciclo do Nado Fácil",
    description: "Programa de 4 semanas focado em técnica fundamental de natação. Desenvolva posição corporal, perna, respiração e braçada.",
    duration: "4 semanas",
    icon: "🌊",
    color: "from-blue-500 to-cyan-500",
    focus: "Técnica Fundamental",
    status: "available"
  },
  {
    id: "ez-speed",
    name: "EZ Speed",
    description: "Programa de 8 semanas para desenvolvimento de velocidade. Treinos progressivos de velocidade.",
    duration: "8 semanas",
    icon: "⚡",
    color: "from-amber-500 to-orange-500",
    focus: "Velocidade",
    status: "available"
  },
  {
    id: "super-velo",
    name: "Super Velô",
    description: "Programa especializado para provas de 50m. Treinos de explosão e velocidade máxima.",
    duration: "8 semanas",
    icon: "💨",
    color: "from-purple-500 to-pink-500",
    focus: "Sprint",
    status: "available"
  },
  {
    id: "middle-distance",
    name: "Treinos 200m e 400m",
    description: "Programa de 8 semanas para desenvolvimento de resistência anaeróbica. Treinos específicos para meio-fundo.",
    duration: "8 semanas",
    icon: "🏊",
    color: "from-teal-500 to-cyan-500",
    focus: "Meio-Fundo",
    status: "available"
  },
  {
    id: "long-distance",
    name: "Treinos 800m e 1500m",
    description: "Programa de 8 semanas para desenvolvimento de resistência aeróbica. Treinos de fundo.",
    duration: "8 semanas",
    icon: "🌊",
    color: "from-blue-600 to-indigo-600",
    focus: "Fundo",
    status: "available"
  },
  {
    id: "strength-training",
    name: "Preparação Física",
    description: "Fortalecimento e condicionamento físico para nadadores. Academia, core, mobilidade e treino em casa.",
    duration: "Variável",
    icon: "💪",
    color: "from-green-500 to-emerald-500",
    focus: "Força e Condicionamento",
    status: "available"
  },
  {
    id: "technical-tutorials",
    name: "Tutoriais Técnicos",
    description: "Vídeos e guias técnicos sobre saída, virada, palmateio e outros fundamentos da natação.",
    duration: "Sob demanda",
    icon: "📖",
    color: "from-indigo-500 to-blue-500",
    focus: "Educação Técnica",
    status: "available"
  }
];

export default function Programs() {
  const [, navigate] = useLocation();

  const handleSelectProgram = (programId: string) => {
    // Todos os programas agora redirecionam para home com o programa selecionado
    navigate("/");
  };

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
          <h1 className="text-2xl font-bold text-gray-900">Programas de Treino</h1>
        </div>
      </header>

      <main className="container py-8 pb-20">
        {/* Intro */}
        <Card className="p-6 mb-8 bg-gradient-to-r from-blue-50 to-cyan-50 border-2 border-blue-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Escolha seu Programa</h2>
          <p className="text-gray-700">
            Temos diversos programas de treino para diferentes objetivos. Comece com o Ciclo do Nado Fácil para dominar a técnica fundamental!
          </p>
        </Card>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program) => (
            <Card
              key={program.id}
              className={`overflow-hidden transition-all hover:shadow-lg ${
                program.status === "coming-soon" ? "opacity-75" : ""
              }`}
            >
              {/* Program Header */}
              <div className={`bg-gradient-to-r ${program.color} p-6 text-white`}>
                <div className="text-5xl mb-3">{program.icon}</div>
                <h3 className="text-2xl font-bold mb-1">{program.name}</h3>
                <p className="text-sm opacity-90">{program.focus}</p>
              </div>

              {/* Program Content */}
              <div className="p-6">
                <p className="text-gray-700 mb-4">{program.description}</p>

                <div className="mb-6 space-y-2">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="font-semibold">Duração:</span>
                    <span>{program.duration}</span>
                  </div>
                </div>

                {/* Status Badge */}
                {program.status === "coming-soon" && (
                  <div className="mb-4 p-3 bg-amber-50 border border-amber-200 rounded-lg text-center">
                    <p className="text-sm font-semibold text-amber-700">Em Breve</p>
                  </div>
                )}

                {/* Action Button */}
                <Button
                  className={`w-full font-bold py-6 bg-gradient-to-r ${program.color} hover:opacity-90 text-white`}
                  onClick={() => handleSelectProgram(program.id)}
                >
                  <Zap className="w-4 h-4 mr-2" />
                  Começar Agora
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Info Section */}
        <Card className="mt-12 p-6 bg-blue-50 border-2 border-blue-200">
          <h3 className="text-xl font-bold text-gray-900 mb-4">💡 Dica</h3>
          <p className="text-gray-700 mb-3">
            Se você é iniciante ou quer melhorar sua técnica, comece com o <strong>Ciclo do Nado Fácil</strong>. Este programa de 4 semanas vai ensinar os fundamentos essenciais da natação.
          </p>
          <p className="text-gray-700">
            Após completar o ciclo, você estará pronto para programas mais avançados como Speed, Super Velô e Preparação Física!
          </p>
        </Card>
      </main>
    </div>
  );
}
