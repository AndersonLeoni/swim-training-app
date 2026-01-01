export interface TrainingSet {
  id: string;
  distance: number;
  unit: string;
  description: string;
  equipment?: string[];
  notes?: string;
  intensity?: string;
  restTime?: string;
}

export interface Training {
  id: string;
  week: number;
  trainingNumber: number;
  title: string;
  focus: string;
  warmup: TrainingSet[];
  main: TrainingSet[];
  cooldown?: TrainingSet[];
  observations: string[];
  materials: string[];
  completed: boolean;
  completedDate?: string;
}

export interface Week {
  id: string;
  weekNumber: number;
  title: string;
  focus: string;
  videoTitle: string;
  videoDuration: string;
  trainings: Training[];
}

export const trainingData: Week[] = [
  {
    id: "week-1",
    weekNumber: 1,
    title: "Semana 1: Posição Corporal",
    focus: "Melhorar o alinhamento do corpo na água, reduzindo o arrasto",
    videoTitle: "Posição Corporal",
    videoDuration: "4 min",
    trainings: [
      {
        id: "w1-t1",
        week: 1,
        trainingNumber: 1,
        title: "Treino 1 - Posição Corporal",
        focus: "Posição Corporal",
        warmup: [
          {
            id: "w1t1-w1",
            distance: 200,
            unit: "m",
            description: "Solto",
            notes: "Ritmo bem tranquilo"
          }
        ],
        main: [
          {
            id: "w1t1-m1",
            distance: 24,
            unit: "x25m",
            description: "Perna com pé de pato",
            equipment: ["Pé de pato"],
            restTime: "30\" a 40\"",
            notes: "Sem prancha e com os braços estendidos à frente"
          },
          {
            id: "w1t1-m2",
            distance: 8,
            unit: "x25m",
            description: "Com bolinha no queixo",
            equipment: ["Bolinha de Tênis", "Pé de pato"],
            notes: "Mantém a bolinha entre queixo e pescoço"
          },
          {
            id: "w1t1-m3",
            distance: 8,
            unit: "x25m",
            description: "Com palmar na cabeça",
            equipment: ["Palmar", "Pé de pato"],
            notes: "Palmar apoiado na cabeça"
          },
          {
            id: "w1t1-m4",
            distance: 8,
            unit: "x25m",
            description: "Sem nada",
            equipment: ["Pé de pato"],
            notes: "Apenas o pé de pato"
          }
        ],
        observations: [
          "Fazer uma filmagem frontal e uma lateral",
          "Importante para acompanhar a sua evolução",
          "Poste nos marcadores fornecidos para feedback"
        ],
        materials: ["Pé de pato", "Bolinha de Tênis", "Palmar"],
        completed: false
      },
      {
        id: "w1-t2",
        week: 1,
        trainingNumber: 2,
        title: "Treino 2 - Posição Corporal",
        focus: "Posição Corporal",
        warmup: [
          {
            id: "w1t2-w1",
            distance: 200,
            unit: "m",
            description: "Solto",
            notes: "Ritmo bem tranquilo"
          }
        ],
        main: [
          {
            id: "w1t2-m1",
            distance: 16,
            unit: "x50m",
            description: "Perna com pé de pato",
            equipment: ["Pé de pato"],
            restTime: "45\" a 60\"",
            notes: "Progressivo: primeiros 8 com bolinha, últimos 8 sem nada"
          },
          {
            id: "w1t2-m2",
            distance: 8,
            unit: "x25m",
            description: "Nado completo com foco em posição",
            equipment: [],
            restTime: "30\"",
            intensity: "A1",
            notes: "Manter o alinhamento aprendido"
          }
        ],
        observations: [
          "Continue filmando para acompanhar progresso",
          "Foco na manutenção da posição durante o nado completo"
        ],
        materials: ["Pé de pato", "Bolinha de Tênis"],
        completed: false
      },
      {
        id: "w1-t3",
        week: 1,
        trainingNumber: 3,
        title: "Treino 3 - Posição Corporal",
        focus: "Posição Corporal",
        warmup: [
          {
            id: "w1t3-w1",
            distance: 200,
            unit: "m",
            description: "Solto",
            notes: "Ritmo bem tranquilo"
          }
        ],
        main: [
          {
            id: "w1t3-m1",
            distance: 12,
            unit: "x50m",
            description: "Perna com pé de pato alternando técnicas",
            equipment: ["Pé de pato"],
            restTime: "45\"",
            notes: "Alternado: bolinha, palmar, sem nada, sem nada"
          },
          {
            id: "w1t3-m2",
            distance: 4,
            unit: "x100m",
            description: "Nado completo",
            equipment: [],
            restTime: "1'",
            intensity: "A1",
            notes: "Aplicar aprendizado de posição corporal"
          }
        ],
        observations: [
          "Aumento de volume mantendo a qualidade",
          "Foco na consistência da posição"
        ],
        materials: ["Pé de pato", "Bolinha de Tênis", "Palmar"],
        completed: false
      },
      {
        id: "w1-t4",
        week: 1,
        trainingNumber: 4,
        title: "Treino 4 - Posição Corporal",
        focus: "Posição Corporal",
        warmup: [
          {
            id: "w1t4-w1",
            distance: 200,
            unit: "m",
            description: "Solto",
            notes: "Ritmo bem tranquilo"
          }
        ],
        main: [
          {
            id: "w1t4-m1",
            distance: 10,
            unit: "x50m",
            description: "Perna com pé de pato",
            equipment: ["Pé de pato"],
            restTime: "45\"",
            notes: "Mantendo a técnica aprendida"
          },
          {
            id: "w1t4-m2",
            distance: 6,
            unit: "x100m",
            description: "Nado completo com foco em posição",
            equipment: [],
            restTime: "1'",
            intensity: "A2",
            notes: "Aumentar levemente a intensidade mantendo a forma"
          },
          {
            id: "w1t4-m3",
            distance: 100,
            unit: "m",
            description: "Desaquecimento",
            equipment: [],
            notes: "Ritmo muito tranquilo"
          }
        ],
        observations: [
          "Último treino da semana - consolidação do aprendizado",
          "Prepare-se para a próxima semana focando em perna"
        ],
        materials: ["Pé de pato"],
        completed: false
      }
    ]
  },
  {
    id: "week-2",
    weekNumber: 2,
    title: "Semana 2: Perna",
    focus: "Aprimorar a técnica de pernada, melhorando cadência e eficiência",
    videoTitle: "Pernada",
    videoDuration: "5 min",
    trainings: [
      {
        id: "w2-t1",
        week: 2,
        trainingNumber: 1,
        title: "Treino 1 - Perna",
        focus: "Pernada",
        warmup: [
          {
            id: "w2t1-w1",
            distance: 200,
            unit: "m",
            description: "Solto",
            notes: "Ritmo bem tranquilo"
          },
          {
            id: "w2t1-w2",
            distance: 4,
            unit: "x50m",
            description: "Perna com pé de pato",
            equipment: ["Pé de pato"],
            restTime: "30\"",
            notes: "Preparação para a série principal"
          }
        ],
        main: [
          {
            id: "w2t1-m1",
            distance: 20,
            unit: "x25m",
            description: "Perna com pé de pato",
            equipment: ["Pé de pato"],
            restTime: "30\"",
            intensity: "A2",
            notes: "Foco em cadência e amplitude"
          },
          {
            id: "w2t1-m2",
            distance: 8,
            unit: "x50m",
            description: "Perna com pé de pato",
            equipment: ["Pé de pato"],
            restTime: "45\"",
            intensity: "A2",
            notes: "Mantendo a cadência aprendida"
          }
        ],
        observations: [
          "Foco na frequência de pernadas",
          "Mantenha a amplitude mesmo com velocidade"
        ],
        materials: ["Pé de pato"],
        completed: false
      },
      {
        id: "w2-t2",
        week: 2,
        trainingNumber: 2,
        title: "Treino 2 - Perna",
        focus: "Pernada",
        warmup: [
          {
            id: "w2t2-w1",
            distance: 200,
            unit: "m",
            description: "Solto",
            notes: "Ritmo bem tranquilo"
          }
        ],
        main: [
          {
            id: "w2t2-m1",
            distance: 16,
            unit: "x50m",
            description: "Perna com pé de pato",
            equipment: ["Pé de pato"],
            restTime: "45\"",
            intensity: "A2",
            notes: "Progressivo em velocidade"
          },
          {
            id: "w2t2-m2",
            distance: 8,
            unit: "x25m",
            description: "Nado completo com foco em perna",
            equipment: [],
            restTime: "30\"",
            intensity: "A1",
            notes: "Aplicar técnica de perna no nado completo"
          }
        ],
        observations: [
          "Integrar a técnica de perna ao nado completo",
          "Manter a posição corporal aprendida na semana anterior"
        ],
        materials: ["Pé de pato"],
        completed: false
      },
      {
        id: "w2-t3",
        week: 2,
        trainingNumber: 3,
        title: "Treino 3 - Perna",
        focus: "Pernada",
        warmup: [
          {
            id: "w2t3-w1",
            distance: 200,
            unit: "m",
            description: "Solto",
            notes: "Ritmo bem tranquilo"
          }
        ],
        main: [
          {
            id: "w2t3-m1",
            distance: 12,
            unit: "x75m",
            description: "Perna com pé de pato",
            equipment: ["Pé de pato"],
            restTime: "1'",
            intensity: "A2",
            notes: "Aumentando a distância"
          },
          {
            id: "w2t3-m2",
            distance: 4,
            unit: "x100m",
            description: "Nado completo",
            equipment: [],
            restTime: "1'",
            intensity: "A1",
            notes: "Foco em manter a técnica de perna"
          }
        ],
        observations: [
          "Volume aumentando progressivamente",
          "Qualidade técnica é prioridade"
        ],
        materials: ["Pé de pato"],
        completed: false
      },
      {
        id: "w2-t4",
        week: 2,
        trainingNumber: 4,
        title: "Treino 4 - Perna",
        focus: "Pernada",
        warmup: [
          {
            id: "w2t4-w1",
            distance: 200,
            unit: "m",
            description: "Solto",
            notes: "Ritmo bem tranquilo"
          }
        ],
        main: [
          {
            id: "w2t4-m1",
            distance: 10,
            unit: "x75m",
            description: "Perna com pé de pato",
            equipment: ["Pé de pato"],
            restTime: "1'",
            intensity: "A2",
            notes: "Consolidação da técnica"
          },
          {
            id: "w2t4-m2",
            distance: 6,
            unit: "x150m",
            description: "Nado completo",
            equipment: [],
            restTime: "1'30\"",
            intensity: "A2",
            notes: "Aumentar levemente a intensidade"
          }
        ],
        observations: [
          "Semana 2 consolidada",
          "Prepare-se para trabalhar respiração na próxima semana"
        ],
        materials: ["Pé de pato"],
        completed: false
      }
    ]
  },
  {
    id: "week-3",
    weekNumber: 3,
    title: "Semana 3: Respiração",
    focus: "Melhorar a técnica respiratória mantendo a posição corporal",
    videoTitle: "Respiração",
    videoDuration: "7 min",
    trainings: [
      {
        id: "w3-t1",
        week: 3,
        trainingNumber: 1,
        title: "Treino 1 - Respiração",
        focus: "Respiração",
        warmup: [
          {
            id: "w3t1-w1",
            distance: 200,
            unit: "m",
            description: "Solto",
            notes: "Ritmo bem tranquilo"
          }
        ],
        main: [
          {
            id: "w3t1-m1",
            distance: 8,
            unit: "x50m",
            description: "Respiração a cada 3 braçadas",
            equipment: [],
            restTime: "45\"",
            intensity: "A1",
            notes: "Foco em manter a posição"
          },
          {
            id: "w3t1-m2",
            distance: 8,
            unit: "x50m",
            description: "Respiração a cada 5 braçadas",
            equipment: [],
            restTime: "45\"",
            intensity: "A1",
            notes: "Aumentar o intervalo respiratório"
          },
          {
            id: "w3t1-m3",
            distance: 8,
            unit: "x50m",
            description: "Nado normal com foco em respiração",
            equipment: [],
            restTime: "45\"",
            intensity: "A1",
            notes: "Respiração bilateral"
          }
        ],
        observations: [
          "Trabalhar a respiração sem perder a posição corporal",
          "Manter a calma durante a respiração"
        ],
        materials: [],
        completed: false
      },
      {
        id: "w3-t2",
        week: 3,
        trainingNumber: 2,
        title: "Treino 2 - Respiração",
        focus: "Respiração",
        warmup: [
          {
            id: "w3t2-w1",
            distance: 200,
            unit: "m",
            description: "Solto",
            notes: "Ritmo bem tranquilo"
          }
        ],
        main: [
          {
            id: "w3t2-m1",
            distance: 6,
            unit: "x100m",
            description: "Nado com foco em respiração",
            equipment: [],
            restTime: "1'",
            intensity: "A1",
            notes: "Respiração bilateral mantendo a técnica"
          },
          {
            id: "w3t2-m2",
            distance: 4,
            unit: "x100m",
            description: "Nado com respiração a cada 3 braçadas",
            equipment: [],
            restTime: "1'",
            intensity: "A2",
            notes: "Aumentar levemente a velocidade"
          }
        ],
        observations: [
          "Integrar respiração com perna e posição corporal",
          "Manter a eficiência mesmo com mudanças na respiração"
        ],
        materials: [],
        completed: false
      },
      {
        id: "w3-t3",
        week: 3,
        trainingNumber: 3,
        title: "Treino 3 - Respiração",
        focus: "Respiração",
        warmup: [
          {
            id: "w3t3-w1",
            distance: 200,
            unit: "m",
            description: "Solto",
            notes: "Ritmo bem tranquilo"
          }
        ],
        main: [
          {
            id: "w3t3-m1",
            distance: 5,
            unit: "x150m",
            description: "Nado com foco em respiração",
            equipment: [],
            restTime: "1'30\"",
            intensity: "A2",
            notes: "Aplicar todas as técnicas aprendidas"
          },
          {
            id: "w3t3-m2",
            distance: 4,
            unit: "x100m",
            description: "Nado com ritmo progressivo",
            equipment: [],
            restTime: "1'",
            intensity: "A2-A3",
            notes: "Aumentar gradualmente a intensidade"
          }
        ],
        observations: [
          "Consolidação de todas as técnicas",
          "Preparação para a última semana"
        ],
        materials: [],
        completed: false
      },
      {
        id: "w3-t4",
        week: 3,
        trainingNumber: 4,
        title: "Treino 4 - Respiração",
        focus: "Respiração",
        warmup: [
          {
            id: "w3t4-w1",
            distance: 200,
            unit: "m",
            description: "Solto",
            notes: "Ritmo bem tranquilo"
          }
        ],
        main: [
          {
            id: "w3t4-m1",
            distance: 4,
            unit: "x200m",
            description: "Nado com foco em respiração e técnica",
            equipment: [],
            restTime: "2'",
            intensity: "A2",
            notes: "Manter a técnica em distâncias maiores"
          },
          {
            id: "w3t4-m2",
            distance: 200,
            unit: "m",
            description: "Desaquecimento",
            equipment: [],
            notes: "Ritmo muito tranquilo"
          }
        ],
        observations: [
          "Semana 3 consolidada",
          "Próxima semana: Apoio e Puxada (Alavanca)"
        ],
        materials: [],
        completed: false
      }
    ]
  },
  {
    id: "week-4",
    weekNumber: 4,
    title: "Semana 4: Apoio e Puxada",
    focus: "Desenvolver força e técnica na fase aquática da braçada",
    videoTitle: "Alavanca",
    videoDuration: "3 min",
    trainings: [
      {
        id: "w4-t1",
        week: 4,
        trainingNumber: 1,
        title: "Treino 1 - Apoio e Puxada",
        focus: "Alavanca",
        warmup: [
          {
            id: "w4t1-w1",
            distance: 200,
            unit: "m",
            description: "Solto",
            notes: "Ritmo bem tranquilo"
          },
          {
            id: "w4t1-w2",
            distance: 4,
            unit: "x50m",
            description: "Nado com foco em braçada",
            equipment: [],
            restTime: "30\"",
            notes: "Preparação para série principal"
          }
        ],
        main: [
          {
            id: "w4t1-m1",
            distance: 8,
            unit: "x50m",
            description: "Nado com foco em apoio",
            equipment: [],
            restTime: "45\"",
            intensity: "A2",
            notes: "Trabalhar a fase de apoio da braçada"
          },
          {
            id: "w4t1-m2",
            distance: 8,
            unit: "x50m",
            description: "Nado com foco em puxada",
            equipment: [],
            restTime: "45\"",
            intensity: "A2",
            notes: "Trabalhar a fase de puxada"
          },
          {
            id: "w4t1-m3",
            distance: 8,
            unit: "x50m",
            description: "Nado completo integrando tudo",
            equipment: [],
            restTime: "45\"",
            intensity: "A2",
            notes: "Integrar apoio e puxada"
          }
        ],
        observations: [
          "Foco na força e técnica da braçada",
          "Manter a posição corporal durante todo o ciclo"
        ],
        materials: [],
        completed: false
      },
      {
        id: "w4-t2",
        week: 4,
        trainingNumber: 2,
        title: "Treino 2 - Apoio e Puxada",
        focus: "Alavanca",
        warmup: [
          {
            id: "w4t2-w1",
            distance: 200,
            unit: "m",
            description: "Solto",
            notes: "Ritmo bem tranquilo"
          }
        ],
        main: [
          {
            id: "w4t2-m1",
            distance: 6,
            unit: "x100m",
            description: "Nado com foco em braçada",
            equipment: [],
            restTime: "1'",
            intensity: "A2",
            notes: "Aplicar técnica de apoio e puxada"
          },
          {
            id: "w4t2-m2",
            distance: 4,
            unit: "x100m",
            description: "Nado com ritmo progressivo",
            equipment: [],
            restTime: "1'",
            intensity: "A2-A3",
            notes: "Aumentar levemente a velocidade"
          }
        ],
        observations: [
          "Consolidação da técnica de braçada",
          "Preparação para testes de velocidade"
        ],
        materials: [],
        completed: false
      },
      {
        id: "w4-t3",
        week: 4,
        trainingNumber: 3,
        title: "Treino 3 - Apoio e Puxada",
        focus: "Alavanca",
        warmup: [
          {
            id: "w4t3-w1",
            distance: 300,
            unit: "m",
            description: "Solto",
            notes: "Ritmo bem tranquilo"
          }
        ],
        main: [
          {
            id: "w4t3-m1",
            distance: 4,
            unit: "x150m",
            description: "Nado com foco em técnica",
            equipment: [],
            restTime: "1'30\"",
            intensity: "A2",
            notes: "Manter a técnica em distâncias maiores"
          },
          {
            id: "w4t3-m2",
            distance: 3,
            unit: "x100m",
            description: "Nado com velocidade controlada",
            equipment: [],
            restTime: "1'",
            intensity: "A3",
            notes: "Aumentar a intensidade mantendo a forma"
          }
        ],
        observations: [
          "Aumento de volume e intensidade",
          "Consolidação de todo o ciclo"
        ],
        materials: [],
        completed: false
      },
      {
        id: "w4-t4",
        week: 4,
        trainingNumber: 4,
        title: "Treino 4 - Apoio e Puxada (Teste Final)",
        focus: "Alavanca",
        warmup: [
          {
            id: "w4t4-w1",
            distance: 300,
            unit: "m",
            description: "Solto",
            notes: "Ritmo bem tranquilo"
          },
          {
            id: "w4t4-w2",
            distance: 4,
            unit: "x50m",
            description: "Progressivo",
            equipment: [],
            restTime: "30\"",
            notes: "Preparação para teste"
          }
        ],
        main: [
          {
            id: "w4t4-m1",
            distance: 1,
            unit: "x400m",
            description: "Teste de velocidade",
            equipment: [],
            restTime: "2'",
            intensity: "A3",
            notes: "Aplicar todas as técnicas aprendidas no ciclo"
          },
          {
            id: "w4t4-m2",
            distance: 200,
            unit: "m",
            description: "Desaquecimento",
            equipment: [],
            notes: "Ritmo muito tranquilo"
          }
        ],
        observations: [
          "Teste final do Ciclo do Nado Fácil",
          "Compare seu desempenho com o início do ciclo",
          "Parabéns por completar o programa!"
        ],
        materials: [],
        completed: false
      }
    ]
  }
];

// Legendas e Glossário
export const glossary = {
  "pp": "Pé de pato / nadadeira",
  "sem mat": "Sem material (pp, palmar...)",
  "Solto": "Ritmo bem tranquilo",
  "D": "Descanso de... (tempo que ficará descansando na borda)",
  "'": "Minutos",
  "\"": "Segundos",
  "Perna": "Fazer só a pernada, sem rodar os braços",
  "Saindo do zero": "Sem emburrar a borda",
  "A1": "60% a 70% do seu esforço máximo",
  "A2": "70% a 80% do seu esforço máximo",
  "A3": "80% a 90% do seu esforço máximo"
};
