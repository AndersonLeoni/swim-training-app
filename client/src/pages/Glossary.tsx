import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { glossary } from "@/lib/trainingData";
import { ArrowLeft } from "lucide-react";
import { useLocation } from "wouter";

export default function Glossary() {
  const [, navigate] = useLocation();

  const terms = Object.entries(glossary).map(([term, definition]) => ({
    term,
    definition
  }));

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
          <h1 className="text-2xl font-bold text-gray-900">📖 Glossário Técnico</h1>
        </div>
      </header>

      <main className="container py-8 pb-20">
        <Card className="p-6 mb-8 bg-blue-50 border-2 border-blue-200">
          <p className="text-gray-700">
            Aqui você encontra a definição de todos os termos técnicos usados nos treinos do Ciclo do Nado Fácil.
          </p>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {terms.map(({ term, definition }) => (
            <Card key={term} className="p-4 border-l-4 border-blue-500">
              <h3 className="font-bold text-lg text-blue-600 mb-2">{term}</h3>
              <p className="text-gray-700">{definition}</p>
            </Card>
          ))}
        </div>

        {/* Intensity Zones */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Zonas de Intensidade</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="p-6 bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-300">
              <h3 className="text-xl font-bold text-green-700 mb-2">A1 - Recuperação</h3>
              <p className="text-gray-700 mb-2">60% a 70% do seu esforço máximo</p>
              <p className="text-sm text-gray-600">Treinos leves, focados em técnica e recuperação. Você consegue conversar durante o treino.</p>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-yellow-50 to-yellow-100 border-2 border-yellow-300">
              <h3 className="text-xl font-bold text-yellow-700 mb-2">A2 - Moderado</h3>
              <p className="text-gray-700 mb-2">70% a 80% do seu esforço máximo</p>
              <p className="text-sm text-gray-600">Treinos de intensidade moderada. Você consegue falar frases curtas, mas não conversas longas.</p>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-red-50 to-red-100 border-2 border-red-300">
              <h3 className="text-xl font-bold text-red-700 mb-2">A3 - Intenso</h3>
              <p className="text-gray-700 mb-2">80% a 90% do seu esforço máximo</p>
              <p className="text-sm text-gray-600">Treinos intensos. Você mal consegue falar. Reservado para testes e séries curtas.</p>
            </Card>
          </div>
        </div>

        {/* Equipment Guide */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Materiais Utilizados</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="p-4">
              <h3 className="font-bold text-lg text-blue-600 mb-2">🦵 Pé de Pato (PP)</h3>
              <p className="text-gray-700">Nadadeira que aumenta a propulsão e ajuda a trabalhar a técnica de perna. Essencial para os treinos de pernada.</p>
            </Card>

            <Card className="p-4">
              <h3 className="font-bold text-lg text-blue-600 mb-2">🎾 Bolinha de Tênis</h3>
              <p className="text-gray-700">Colocada entre o queixo e o pescoço para manter a posição corporal correta e evitar que a cabeça suba demais.</p>
            </Card>

            <Card className="p-4">
              <h3 className="font-bold text-lg text-blue-600 mb-2">✋ Palmar</h3>
              <p className="text-gray-700">Dispositivo que aumenta a superfície das mãos, aumentando a propulsão e ajudando a trabalhar a braçada.</p>
            </Card>

            <Card className="p-4">
              <h3 className="font-bold text-lg text-blue-600 mb-2">🏄 Prancha</h3>
              <p className="text-gray-700">Flutuador usado para trabalhar apenas a pernada, isolando o trabalho de perna do resto do corpo.</p>
            </Card>
          </div>
        </div>

        {/* Tips */}
        <div className="mt-12 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">💡 Dicas Importantes</h2>
          <Card className="p-6 bg-blue-50 border-2 border-blue-200">
            <ul className="space-y-4">
              <li className="flex gap-3">
                <span className="text-2xl">📹</span>
                <div>
                  <h4 className="font-bold text-gray-900">Filme seus treinos</h4>
                  <p className="text-gray-700">Fazer vídeos frontais e laterais ajuda a acompanhar sua evolução e identificar pontos de melhoria.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-2xl">⏱️</span>
                <div>
                  <h4 className="font-bold text-gray-900">Respeite o descanso</h4>
                  <p className="text-gray-700">O tempo de descanso é importante para a recuperação. Não pule essa parte!</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-2xl">🎯</span>
                <div>
                  <h4 className="font-bold text-gray-900">Foco na técnica</h4>
                  <p className="text-gray-700">Qualidade é mais importante que quantidade. Priorize a forma correta.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-2xl">💪</span>
                <div>
                  <h4 className="font-bold text-gray-900">Consistência</h4>
                  <p className="text-gray-700">Treinar regularmente é a chave para o progresso. Tente manter a consistência!</p>
                </div>
              </li>
            </ul>
          </Card>
        </div>
      </main>
    </div>
  );
}
