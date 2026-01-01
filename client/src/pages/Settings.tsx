import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useProgress } from "@/hooks/useProgress";
import { ArrowLeft, RotateCcw, Trash2 } from "lucide-react";
import { useState } from "react";
import { useLocation } from "wouter";

export default function Settings() {
  const [, navigate] = useLocation();
  const { progress, resetProgress, getStats } = useProgress();
  const [showConfirm, setShowConfirm] = useState(false);
  const stats = getStats();

  const handleReset = () => {
    if (confirm("Tem certeza que deseja resetar todo o progresso? Esta ação não pode ser desfeita.")) {
      resetProgress();
      setShowConfirm(false);
      navigate("/");
    }
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
          <h1 className="text-2xl font-bold text-gray-900">⚙️ Configurações</h1>
        </div>
      </header>

      <main className="container py-8 pb-20">
        {/* Current Progress */}
        <Card className="p-6 mb-8 bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Seu Progresso</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">{stats.totalTrainings}</div>
              <div className="text-sm text-gray-600 mt-1">Treinos Completados</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-600">{stats.totalXP}</div>
              <div className="text-sm text-gray-600 mt-1">Experiência Total</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-600">{stats.consecutiveDays}</div>
              <div className="text-sm text-gray-600 mt-1">Dias Seguidos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-600">{stats.completedCycles}</div>
              <div className="text-sm text-gray-600 mt-1">Ciclos Completos</div>
            </div>
          </div>
        </Card>

        {/* Data Storage */}
        <Card className="p-6 mb-8 border-2 border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">💾 Armazenamento de Dados</h2>
          <p className="text-gray-700 mb-4">
            Todos os seus dados são armazenados localmente no seu navegador usando localStorage. Seus dados são privados e não são enviados para nenhum servidor.
          </p>
          <Card className="p-4 bg-gray-50 border border-gray-200 mb-4">
            <p className="text-sm text-gray-600 font-mono break-all">
              {JSON.stringify(progress, null, 2)}
            </p>
          </Card>
          <Button
            variant="outline"
            onClick={() => {
              navigator.clipboard.writeText(JSON.stringify(progress, null, 2));
              alert("Dados copiados para a área de transferência!");
            }}
          >
            Copiar Dados
          </Button>
        </Card>

        {/* About */}
        <Card className="p-6 mb-8 border-2 border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">ℹ️ Sobre o App</h2>
          <div className="space-y-4 text-gray-700">
            <div>
              <h3 className="font-bold text-gray-900 mb-1">Swim Master: Ciclo do Nado Fácil</h3>
              <p>Um aplicativo gamificado para acompanhar seu progresso no programa de 4 semanas de técnica de natação.</p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">Versão</h3>
              <p>1.0.0</p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">Desenvolvido com</h3>
              <p>React 19 + Tailwind CSS 4 + TypeScript</p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">Baseado em</h3>
              <p>Ciclo do Nado Fácil - Método técnico desenvolvido por Felipe Messias e inspirado no EZ Speed de Cesar Cielo</p>
            </div>
          </div>
        </Card>

        {/* Danger Zone */}
        <Card className="p-6 border-2 border-red-200 bg-red-50">
          <h2 className="text-2xl font-bold text-red-900 mb-4">⚠️ Zona de Perigo</h2>
          
          {!showConfirm ? (
            <Button
              variant="destructive"
              className="w-full"
              onClick={() => setShowConfirm(true)}
            >
              <RotateCcw className="w-4 h-4 mr-2" />
              Resetar Todo o Progresso
            </Button>
          ) : (
            <div className="space-y-4">
              <p className="text-red-900 font-semibold">
                ⚠️ Esta ação é irreversível! Todos os seus dados de progresso serão apagados.
              </p>
              <div className="flex gap-4">
                <Button
                  variant="outline"
                  className="flex-1"
                  onClick={() => setShowConfirm(false)}
                >
                  Cancelar
                </Button>
                <Button
                  variant="destructive"
                  className="flex-1"
                  onClick={handleReset}
                >
                  <Trash2 className="w-4 h-4 mr-2" />
                  Confirmar Reset
                </Button>
              </div>
            </div>
          )}
        </Card>
      </main>
    </div>
  );
}
