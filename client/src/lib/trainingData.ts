export interface TrainingSet {
  id: string;
  distance: number;
  unit: string;
  description: string;
  equipment?: string[];
  restTime?: string;
  intensity?: string;
  notes?: string;
}

export interface Training {
  id: string;
  trainingNumber: number;
  title: string;
  focus: string;
  warmup: TrainingSet[];
  main: TrainingSet[];
  cooldown?: TrainingSet[];
  observations: string[];
  materials: string[];
}

export interface Week {
  id: string;
  weekNumber: number;
  title: string;
  focus: string;
  trainings: Training[];
}

export interface Program {
  id: string;
  name: string;
  category: string;
  description: string;
  duration: string;
  weeks?: Week[];
  trainings?: Training[];
  focus: string;
}

// ============================================
// CICLO DO NADO FÁCIL (4 semanas)
// ============================================

const easySwimmingCycle: Week[] = [
  {
    id: "week-1",
    weekNumber: 1,
    title: "Semana 1: Posição Corporal",
    focus: "Melhorar o alinhamento do corpo na água, reduzindo o arrasto",
    trainings: [
      {
        id: "w1-t1",
        trainingNumber: 1,
        title: "Treino 1 - Posição Corporal",
        focus: "Posição Corporal - Treino 1",
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
            description: "Perna com pp 30\" a 40\" sendo: 8x25m com bolinha no queixo, 8x25m com palmar na cabeça, 8x25m sem nada",
            equipment: ["Pé de pato", "Bolinha de Tênis", "Palmar"],
            intensity: "A1",
            notes: "Sem prancha e com os braços estendidos à frente"
          }
        ],
        cooldown: [
          {
            id: "w1t1-c1",
            distance: 100,
            unit: "m",
            description: "Solto",
            notes: "Descanso ativo"
          }
        ],
        observations: [
          "Faça uma filmagem frontal e uma lateral. Importante para acompanhar a sua evolução. Poste e nos marque para acompanharmos."
        ],
        materials: ["Pé de pato", "Bolinha de Tênis", "Palmar"]
      },
      {
        id: "w1-t2",
        trainingNumber: 2,
        title: "Treino 2 - Posição Corporal",
        focus: "Posição Corporal - Treino 2",
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
            distance: 24,
            unit: "x25m",
            description: "Pernada com pp 30\" a 40\" sendo: 8x25m com bolinha no queixo, 8x25m com palmar na cabeça, 8x25m sem nada",
            equipment: ["Pé de pato", "Bolinha de Tênis", "Palmar"],
            intensity: "A1",
            notes: "Sem prancha e com os braços estendidos à frente"
          }
        ],
        cooldown: [
          {
            id: "w1t2-c1",
            distance: 100,
            unit: "m",
            description: "Solto",
            notes: "Descanso ativo"
          }
        ],
        observations: [
          "Mantenha a bolinha entre o queixo e pescoço para manter a posição correta."
        ],
        materials: ["Pé de pato", "Bolinha de Tênis", "Palmar"]
      },
      {
        id: "w1-t3",
        trainingNumber: 3,
        title: "Treino 3 - Posição Corporal",
        focus: "Posição Corporal - Treino 3",
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
            distance: 24,
            unit: "x25m",
            description: "Pernada com pp 30\" a 40\" sendo: 8x25m com bolinha no queixo, 8x25m com palmar na cabeça, 8x25m sem nada",
            equipment: ["Pé de pato", "Bolinha de Tênis", "Palmar"],
            intensity: "A1",
            notes: "Sem prancha e com os braços estendidos à frente"
          }
        ],
        cooldown: [
          {
            id: "w1t3-c1",
            distance: 100,
            unit: "m",
            description: "Solto",
            notes: "Descanso ativo"
          }
        ],
        observations: [
          "Mantenha a bolinha entre o queixo e pescoço para manter a posição correta."
        ],
        materials: ["Pé de pato", "Bolinha de Tênis", "Palmar"]
      },
      {
        id: "w1-t4",
        trainingNumber: 4,
        title: "Treino 4 - Posição Corporal",
        focus: "Posição Corporal - Treino 4",
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
            distance: 24,
            unit: "x25m",
            description: "Pernada com pp 30\" a 40\" sendo: 8x25m com bolinha no queixo, 8x25m com palmar na cabeça, 8x25m sem nada",
            equipment: ["Pé de pato", "Bolinha de Tênis", "Palmar"],
            intensity: "A1",
            notes: "Sem prancha e com os braços estendidos à frente"
          }
        ],
        cooldown: [
          {
            id: "w1t4-c1",
            distance: 100,
            unit: "m",
            description: "Solto",
            notes: "Descanso ativo"
          }
        ],
        observations: [
          "Mantenha a bolinha entre o queixo e pescoço para manter a posição correta."
        ],
        materials: ["Pé de pato", "Bolinha de Tênis", "Palmar"]
      }
    ]
  },
  {
    id: "week-2",
    weekNumber: 2,
    title: "Semana 2: Perna",
    focus: "Desenvolver força e técnica de pernada",
    trainings: [
      {
        id: "w2-t1",
        trainingNumber: 1,
        title: "Treino 1 - Perna",
        focus: "Perna - Treino 1",
        warmup: [
          {
            id: "w2t1-w1",
            distance: 200,
            unit: "m",
            description: "Solto",
            notes: "Ritmo bem tranquilo"
          }
        ],
        main: [
          {
            id: "w2t1-m1",
            distance: 20,
            unit: "x25m",
            description: "Pernada com pp 30\" sendo: 10x25m com bolinha, 10x25m sem bolinha",
            equipment: ["Pé de pato", "Bolinha de Tênis"],
            intensity: "A2",
            notes: "Foco na técnica de pernada"
          }
        ],
        cooldown: [
          {
            id: "w2t1-c1",
            distance: 100,
            unit: "m",
            description: "Solto",
            notes: "Descanso ativo"
          }
        ],
        observations: [
          "Mantenha a bolinha entre o queixo e pescoço para manter a posição correta."
        ],
        materials: ["Pé de pato", "Bolinha de Tênis"]
      },
      {
        id: "w2-t2",
        trainingNumber: 2,
        title: "Treino 2 - Perna",
        focus: "Perna - Treino 2",
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
            distance: 20,
            unit: "x25m",
            description: "Pernada com pp 30\" sendo: 10x25m com bolinha, 10x25m sem bolinha",
            equipment: ["Pé de pato", "Bolinha de Tênis"],
            intensity: "A2",
            notes: "Foco na técnica de pernada"
          }
        ],
        cooldown: [
          {
            id: "w2t2-c1",
            distance: 100,
            unit: "m",
            description: "Solto",
            notes: "Descanso ativo"
          }
        ],
        observations: [
          "Mantenha a bolinha entre o queixo e pescoço para manter a posição correta."
        ],
        materials: ["Pé de pato", "Bolinha de Tênis"]
      },
      {
        id: "w2-t3",
        trainingNumber: 3,
        title: "Treino 3 - Perna",
        focus: "Perna - Treino 3",
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
            distance: 20,
            unit: "x25m",
            description: "Pernada com pp 30\" sendo: 10x25m com bolinha, 10x25m sem bolinha",
            equipment: ["Pé de pato", "Bolinha de Tênis"],
            intensity: "A2",
            notes: "Foco na técnica de pernada"
          }
        ],
        cooldown: [
          {
            id: "w2t3-c1",
            distance: 100,
            unit: "m",
            description: "Solto",
            notes: "Descanso ativo"
          }
        ],
        observations: [
          "Mantenha a bolinha entre o queixo e pescoço para manter a posição correta."
        ],
        materials: ["Pé de pato", "Bolinha de Tênis"]
      },
      {
        id: "w2-t4",
        trainingNumber: 4,
        title: "Treino 4 - Perna",
        focus: "Perna - Treino 4",
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
            distance: 20,
            unit: "x25m",
            description: "Pernada com pp 30\" sendo: 10x25m com bolinha, 10x25m sem bolinha",
            equipment: ["Pé de pato", "Bolinha de Tênis"],
            intensity: "A2",
            notes: "Foco na técnica de pernada"
          }
        ],
        cooldown: [
          {
            id: "w2t4-c1",
            distance: 100,
            unit: "m",
            description: "Solto",
            notes: "Descanso ativo"
          }
        ],
        observations: [
          "Mantenha a bolinha entre o queixo e pescoço para manter a posição correta."
        ],
        materials: ["Pé de pato", "Bolinha de Tênis"]
      }
    ]
  },
  {
    id: "week-3",
    weekNumber: 3,
    title: "Semana 3: Respiração",
    focus: "Dominar a técnica de respiração",
    trainings: [
      {
        id: "w3-t1",
        trainingNumber: 1,
        title: "Treino 1 - Respiração",
        focus: "Respiração - Treino 1",
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
            distance: 16,
            unit: "x25m",
            description: "Nado completo com foco em respiração: 8x25m respirando a cada 3 braçadas, 8x25m respirando a cada 5 braçadas",
            intensity: "A2",
            notes: "Mantenha a posição corporal correta durante a respiração"
          }
        ],
        cooldown: [
          {
            id: "w3t1-c1",
            distance: 100,
            unit: "m",
            description: "Solto",
            notes: "Descanso ativo"
          }
        ],
        observations: [
          "A respiração deve ser lateral, não frontal. Mantenha a cabeça alinhada com o corpo."
        ],
        materials: []
      },
      {
        id: "w3-t2",
        trainingNumber: 2,
        title: "Treino 2 - Respiração",
        focus: "Respiração - Treino 2",
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
            distance: 16,
            unit: "x25m",
            description: "Nado completo com foco em respiração: 8x25m respirando a cada 3 braçadas, 8x25m respirando a cada 5 braçadas",
            intensity: "A2",
            notes: "Mantenha a posição corporal correta durante a respiração"
          }
        ],
        cooldown: [
          {
            id: "w3t2-c1",
            distance: 100,
            unit: "m",
            description: "Solto",
            notes: "Descanso ativo"
          }
        ],
        observations: [
          "A respiração deve ser lateral, não frontal. Mantenha a cabeça alinhada com o corpo."
        ],
        materials: []
      },
      {
        id: "w3-t3",
        trainingNumber: 3,
        title: "Treino 3 - Respiração",
        focus: "Respiração - Treino 3",
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
            distance: 16,
            unit: "x25m",
            description: "Nado completo com foco em respiração: 8x25m respirando a cada 3 braçadas, 8x25m respirando a cada 5 braçadas",
            intensity: "A2",
            notes: "Mantenha a posição corporal correta durante a respiração"
          }
        ],
        cooldown: [
          {
            id: "w3t3-c1",
            distance: 100,
            unit: "m",
            description: "Solto",
            notes: "Descanso ativo"
          }
        ],
        observations: [
          "A respiração deve ser lateral, não frontal. Mantenha a cabeça alinhada com o corpo."
        ],
        materials: []
      },
      {
        id: "w3-t4",
        trainingNumber: 4,
        title: "Treino 4 - Respiração",
        focus: "Respiração - Treino 4",
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
            distance: 16,
            unit: "x25m",
            description: "Nado completo com foco em respiração: 8x25m respirando a cada 3 braçadas, 8x25m respirando a cada 5 braçadas",
            intensity: "A2",
            notes: "Mantenha a posição corporal correta durante a respiração"
          }
        ],
        cooldown: [
          {
            id: "w3t4-c1",
            distance: 100,
            unit: "m",
            description: "Solto",
            notes: "Descanso ativo"
          }
        ],
        observations: [
          "A respiração deve ser lateral, não frontal. Mantenha a cabeça alinhada com o corpo."
        ],
        materials: []
      }
    ]
  },
  {
    id: "week-4",
    weekNumber: 4,
    title: "Semana 4: Apoio e Puxada",
    focus: "Desenvolver força de braçada e propulsão",
    trainings: [
      {
        id: "w4-t1",
        trainingNumber: 1,
        title: "Treino 1 - Apoio e Puxada",
        focus: "Apoio e Puxada - Treino 1",
        warmup: [
          {
            id: "w4t1-w1",
            distance: 200,
            unit: "m",
            description: "Solto",
            notes: "Ritmo bem tranquilo"
          }
        ],
        main: [
          {
            id: "w4t1-m1",
            distance: 12,
            unit: "x25m",
            description: "Nado completo com foco em braçada: 6x25m com palmar, 6x25m sem palmar",
            equipment: ["Palmar"],
            intensity: "A2",
            notes: "Foco na força da puxada e no apoio"
          }
        ],
        cooldown: [
          {
            id: "w4t1-c1",
            distance: 100,
            unit: "m",
            description: "Solto",
            notes: "Descanso ativo"
          }
        ],
        observations: [
          "O apoio deve ser feito com a mão aberta, não com os dedos fechados."
        ],
        materials: ["Palmar"]
      },
      {
        id: "w4-t2",
        trainingNumber: 2,
        title: "Treino 2 - Apoio e Puxada",
        focus: "Apoio e Puxada - Treino 2",
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
            distance: 12,
            unit: "x25m",
            description: "Nado completo com foco em braçada: 6x25m com palmar, 6x25m sem palmar",
            equipment: ["Palmar"],
            intensity: "A2",
            notes: "Foco na força da puxada e no apoio"
          }
        ],
        cooldown: [
          {
            id: "w4t2-c1",
            distance: 100,
            unit: "m",
            description: "Solto",
            notes: "Descanso ativo"
          }
        ],
        observations: [
          "O apoio deve ser feito com a mão aberta, não com os dedos fechados."
        ],
        materials: ["Palmar"]
      },
      {
        id: "w4-t3",
        trainingNumber: 3,
        title: "Treino 3 - Apoio e Puxada",
        focus: "Apoio e Puxada - Treino 3",
        warmup: [
          {
            id: "w4t3-w1",
            distance: 200,
            unit: "m",
            description: "Solto",
            notes: "Ritmo bem tranquilo"
          }
        ],
        main: [
          {
            id: "w4t3-m1",
            distance: 12,
            unit: "x25m",
            description: "Nado completo com foco em braçada: 6x25m com palmar, 6x25m sem palmar",
            equipment: ["Palmar"],
            intensity: "A2",
            notes: "Foco na força da puxada e no apoio"
          }
        ],
        cooldown: [
          {
            id: "w4t3-c1",
            distance: 100,
            unit: "m",
            description: "Solto",
            notes: "Descanso ativo"
          }
        ],
        observations: [
          "O apoio deve ser feito com a mão aberta, não com os dedos fechados."
        ],
        materials: ["Palmar"]
      },
      {
        id: "w4-t4",
        trainingNumber: 4,
        title: "Treino 4 - Apoio e Puxada",
        focus: "Apoio e Puxada - Treino 4",
        warmup: [
          {
            id: "w4t4-w1",
            distance: 200,
            unit: "m",
            description: "Solto",
            notes: "Ritmo bem tranquilo"
          }
        ],
        main: [
          {
            id: "w4t4-m1",
            distance: 12,
            unit: "x25m",
            description: "Nado completo com foco em braçada: 6x25m com palmar, 6x25m sem palmar",
            equipment: ["Palmar"],
            intensity: "A2",
            notes: "Foco na força da puxada e no apoio"
          }
        ],
        cooldown: [
          {
            id: "w4t4-c1",
            distance: 100,
            unit: "m",
            description: "Solto",
            notes: "Descanso ativo"
          }
        ],
        observations: [
          "O apoio deve ser feito com a mão aberta, não com os dedos fechados."
        ],
        materials: ["Palmar"]
      }
    ]
  }
];

// ============================================
// EZ SPEED (8 semanas)
// ============================================

const ezSpeedProgram: Week[] = Array.from({ length: 8 }, (_, i) => ({
  id: `ez-speed-week-${i + 1}`,
  weekNumber: i + 1,
  title: `Semana ${i + 1}: Desenvolvimento de Velocidade`,
  focus: `Semana ${i + 1} - Treinos de velocidade progressiva`,
  trainings: Array.from({ length: 4 }, (_, j) => ({
    id: `ez-speed-w${i + 1}-t${j + 1}`,
    trainingNumber: j + 1,
    title: `Treino ${j + 1} - Velocidade`,
    focus: `Velocidade - Treino ${j + 1}`,
    warmup: [
      {
        id: `ez-speed-w${i + 1}t${j + 1}-w1`,
        distance: 400,
        unit: "m",
        description: "Aquecimento: 200m solto + 200m técnica",
        notes: "Ritmo progressivo"
      }
    ],
    main: [
      {
        id: `ez-speed-w${i + 1}t${j + 1}-m1`,
        distance: 8,
        unit: "x100m",
        description: `Série de 100m com descanso 30\" - Intensidade A${2 + i}`,
        intensity: `A${2 + i}`,
        notes: "Manter ritmo constante"
      }
    ],
    cooldown: [
      {
        id: `ez-speed-w${i + 1}t${j + 1}-c1`,
        distance: 200,
        unit: "m",
        description: "Descanso ativo",
        notes: "Nado leve"
      }
    ],
    observations: [
      "Foco em manter a frequência de braçadas",
      "Não sacrifique a técnica pela velocidade"
    ],
    materials: ["Cronômetro"]
  }))
}));

// ============================================
// SUPER VELÔ (8 semanas)
// ============================================

const superVeloProgram: Week[] = Array.from({ length: 8 }, (_, i) => ({
  id: `super-velo-week-${i + 1}`,
  weekNumber: i + 1,
  title: `Semana ${i + 1}: Sprint 50m`,
  focus: `Semana ${i + 1} - Treinos de explosão e velocidade máxima`,
  trainings: Array.from({ length: 4 }, (_, j) => ({
    id: `super-velo-w${i + 1}-t${j + 1}`,
    trainingNumber: j + 1,
    title: `Treino ${j + 1} - Sprint`,
    focus: `Sprint - Treino ${j + 1}`,
    warmup: [
      {
        id: `super-velo-w${i + 1}t${j + 1}-w1`,
        distance: 300,
        unit: "m",
        description: "Aquecimento: 200m solto + 4x25m técnica",
        notes: "Preparação para velocidade máxima"
      }
    ],
    main: [
      {
        id: `super-velo-w${i + 1}t${j + 1}-m1`,
        distance: 10,
        unit: "x50m",
        description: `Série de 50m máxima velocidade com descanso 1' - Intensidade A${3 + i}`,
        intensity: `A${3 + i}`,
        notes: "Explosão total em cada repetição"
      }
    ],
    cooldown: [
      {
        id: `super-velo-w${i + 1}t${j + 1}-c1`,
        distance: 200,
        unit: "m",
        description: "Descanso ativo",
        notes: "Recuperação completa"
      }
    ],
    observations: [
      "Máxima velocidade em cada 50m",
      "Saída e virada são críticas"
    ],
    materials: ["Cronômetro"]
  }))
}));

// ============================================
// TREINOS 200m E 400m (Meio-Fundo)
// ============================================

const middleDistanceProgram: Week[] = Array.from({ length: 8 }, (_, i) => ({
  id: `middle-dist-week-${i + 1}`,
  weekNumber: i + 1,
  title: `Semana ${i + 1}: Treinos 200m e 400m`,
  focus: `Semana ${i + 1} - Desenvolvimento de resistência anaeróbica`,
  trainings: Array.from({ length: 4 }, (_, j) => ({
    id: `middle-dist-w${i + 1}-t${j + 1}`,
    trainingNumber: j + 1,
    title: `Treino ${j + 1} - Meio-Fundo`,
    focus: `Meio-Fundo - Treino ${j + 1}`,
    warmup: [
      {
        id: `middle-dist-w${i + 1}t${j + 1}-w1`,
        distance: 400,
        unit: "m",
        description: "Aquecimento: 300m solto + 100m técnica",
        notes: "Preparação progressiva"
      }
    ],
    main: [
      {
        id: `middle-dist-w${i + 1}t${j + 1}-m1`,
        distance: 4,
        unit: "x200m",
        description: `Série de 200m com descanso 45\" - Intensidade A${2 + i}`,
        intensity: `A${2 + i}`,
        notes: "Ritmo constante e controlado"
      },
      {
        id: `middle-dist-w${i + 1}t${j + 1}-m2`,
        distance: 2,
        unit: "x400m",
        description: `Série de 400m com descanso 1'30\" - Intensidade A${1 + i}`,
        intensity: `A${1 + i}`,
        notes: "Distribuição de energia"
      }
    ],
    cooldown: [
      {
        id: `middle-dist-w${i + 1}t${j + 1}-c1`,
        distance: 300,
        unit: "m",
        description: "Descanso ativo",
        notes: "Recuperação progressiva"
      }
    ],
    observations: [
      "Trabalhe a distribuição de energia",
      "Mantenha a técnica mesmo com fadiga"
    ],
    materials: ["Cronômetro"]
  }))
}));

// ============================================
// TREINOS 800m E 1500m (Fundo)
// ============================================

const longDistanceProgram: Week[] = Array.from({ length: 8 }, (_, i) => ({
  id: `long-dist-week-${i + 1}`,
  weekNumber: i + 1,
  title: `Semana ${i + 1}: Treinos 800m e 1500m`,
  focus: `Semana ${i + 1} - Desenvolvimento de resistência aeróbica`,
  trainings: Array.from({ length: 4 }, (_, j) => ({
    id: `long-dist-w${i + 1}-t${j + 1}`,
    trainingNumber: j + 1,
    title: `Treino ${j + 1} - Fundo`,
    focus: `Fundo - Treino ${j + 1}`,
    warmup: [
      {
        id: `long-dist-w${i + 1}t${j + 1}-w1`,
        distance: 500,
        unit: "m",
        description: "Aquecimento: 400m solto + 100m técnica",
        notes: "Preparação para distância"
      }
    ],
    main: [
      {
        id: `long-dist-w${i + 1}t${j + 1}-m1`,
        distance: 2,
        unit: "x800m",
        description: `Série de 800m com descanso 2' - Intensidade A${1 + i}`,
        intensity: `A${1 + i}`,
        notes: "Ritmo aeróbico controlado"
      },
      {
        id: `long-dist-w${i + 1}t${j + 1}-m2`,
        distance: 1,
        unit: "x1500m",
        description: `1500m contínuo - Intensidade A1`,
        intensity: "A1",
        notes: "Resistência aeróbica máxima"
      }
    ],
    cooldown: [
      {
        id: `long-dist-w${i + 1}t${j + 1}-c1`,
        distance: 400,
        unit: "m",
        description: "Descanso ativo",
        notes: "Recuperação completa"
      }
    ],
    observations: [
      "Trabalhe a resistência aeróbica",
      "Mantenha ritmo constante"
    ],
    materials: ["Cronômetro"]
  }))
}));

// ============================================
// PREPARAÇÃO FÍSICA
// ============================================

const strengthExercisePlans = [
  {
    key: "squat",
    title: "Força A · Agachamento, empurrar e puxar",
    focus: "Força concêntrica com padrão de agachamento e equilíbrio entre empurrar e puxar",
    materials: ["Barra ou máquina", "Halteres ou polia"],
    exercises: [
      { name: "Agachamento", role: "primary", sets: 4, reps: "4", restTime: "2–4 min", intensity: "80–85% de 1RM · exemplo 4×4 do curso" },
      { name: "Supino máquina ou com halteres", role: "accessory", sets: 3, reps: "6", restTime: "2 min", intensity: "80–85% de 1RM · adaptação para natação" },
      { name: "Remada sentada", role: "accessory", sets: 3, reps: "6", restTime: "2 min", intensity: "80–85% de 1RM · adaptação para natação" }
    ]
  },
  {
    key: "hinge",
    title: "Força B · Levantamento, puxada e escápulas",
    focus: "Força concêntrica de cadeia posterior com puxadas para a musculatura usada no nado",
    materials: ["Barra", "Máquina ou polia"],
    exercises: [
      { name: "Levantamento terra", role: "primary", sets: 4, reps: "4", restTime: "2–4 min", intensity: "80–85% de 1RM · exemplo 4×4 do curso" },
      { name: "Puxada frontal", role: "accessory", sets: 3, reps: "6", restTime: "2 min", intensity: "80–85% de 1RM · adaptação para natação" },
      { name: "Face pull na polia ou com elástico", role: "accessory", sets: 3, reps: "6", restTime: "2 min", intensity: "Carga controlável · adaptação para natação" }
    ]
  },
  {
    key: "unilateral",
    title: "Força C · Unilateral e quadril",
    focus: "Força unilateral e extensão de quadril, com complemento de empurrar e puxar",
    materials: ["Halteres ou barra", "Banco ou máquina"],
    exercises: [
      { name: "Afundo", role: "primary", sets: 3, reps: "6", restTime: "2 min", intensity: "80–85% de 1RM · exemplo 3×6 do curso" },
      { name: "Elevação pélvica", role: "primary", sets: 3, reps: "6", restTime: "2 min", intensity: "80–85% de 1RM · exemplo 3×6 do curso" },
      { name: "Remada unilateral", role: "accessory", sets: 3, reps: "6", restTime: "2 min", intensity: "80–85% de 1RM · adaptação para natação" },
      { name: "Flexão inclinada ou tradicional", role: "accessory", sets: 3, reps: "6", restTime: "2 min", intensity: "Carga controlável · adaptação para natação" }
    ]
  }
];

interface PlyometricPhase {
  title: string;
  focus: string;
  sourceDuration: string;
  frequency: string;
  dose: string;
  exercises: { name: string; sets: number; reps: string; restTime: string }[];
  note?: string;
}

const plyometricPhases: PlyometricPhase[] = [
  {
    title: "Fase 1 · Preparatória",
    focus: "Força e adaptação à pliometria",
    sourceDuration: "1–3 semanas",
    frequency: "2 sessões por semana",
    dose: "6 séries de saltos · 30–60 contatos por sessão · 5–10 repetições · 1 min de intervalo",
    exercises: [
      { name: "Queda bilateral", sets: 2, reps: "5", restTime: "1 min" },
      { name: "Pogo jump vertical", sets: 2, reps: "10", restTime: "1 min" },
      { name: "Pogo jump lateral", sets: 2, reps: "10", restTime: "1 min" },
      { name: "Skipping", sets: 1, reps: "30 s", restTime: "1 min" }
    ]
  },
  {
    title: "Fase 2 · Força e potência",
    focus: "Resistência de reatividade",
    sourceDuration: "2–4 semanas",
    frequency: "2 sessões por semana",
    dose: "5–10 séries · 30–150 contatos por sessão · 6–15 repetições · 1 min de intervalo",
    exercises: [
      { name: "Pogo jump lateral unilateral", sets: 2, reps: "10", restTime: "1 min" },
      { name: "Bound lateral com duplo contato", sets: 3, reps: "12", restTime: "1 min" },
      { name: "Hop linear com duplo contato", sets: 3, reps: "12", restTime: "1 min" }
    ]
  },
  {
    title: "Fase 3 · Potência e velocidade",
    focus: "Incremento de intensidade com saltos contínuos reativos",
    sourceDuration: "2–4 semanas",
    frequency: "2 sessões por semana",
    dose: "8–12 séries · 40–60 contatos por sessão · 4–6 repetições · 2 min de intervalo",
    exercises: [
      { name: "Hop multidirecional", sets: 8, reps: "5", restTime: "2 min" },
      { name: "Bound linear", sets: 3, reps: "6", restTime: "2 min" }
    ]
  },
  {
    title: "Fase 4 · Manutenção",
    focus: "Manutenção da performance reativa",
    sourceDuration: "2–4 semanas",
    frequency: "2 sessões por semana",
    dose: "4–6 séries · 20–40 contatos por sessão · 5 repetições · 1 min de intervalo",
    exercises: [
      { name: "Drop jump acima de 30 cm", sets: 3, reps: "3", restTime: "1 min" },
      { name: "Hop unilateral", sets: 3, reps: "5", restTime: "1 min" }
    ],
    note: "Adaptação do app: o exemplo do PDF lista 6×3 drop jump e 4×5 hop unilateral (10 séries); a diretriz da mesma fase indica 4–6 séries. Esta versão usa 3×3 + 3×5 = 24 contatos para ficar dentro da diretriz de volume. O drop jump acima de 30 cm e o hop unilateral são opções avançadas; valide a execução e a adequação com o preparador físico."
  }
];

interface StrengthWeekPrescription {
  title: string;
  primarySets: number;
  primaryReps: string;
  accessorySets: number;
  accessoryReps: string;
  intensity: string;
  note: string;
}

interface StrengthCycleBlock {
  title: string;
  focus: string;
  plyometricPhaseIndex: number | null;
  weeks: StrengthWeekPrescription[];
}

const strengthCycleBlocks: StrengthCycleBlock[] = [
  {
    title: "Adaptação e força base",
    focus: "Preparar a técnica e aumentar o volume de forma gradual",
    plyometricPhaseIndex: 0,
    weeks: [
      { title: "Entrada técnica", primarySets: 2, primaryReps: "8", accessorySets: 2, accessoryReps: "8", intensity: "Carga moderada e execução estável", note: "Semana de entrada: deixe repetições em reserva e pratique os movimentos." },
      { title: "Construção de base", primarySets: 3, primaryReps: "8", accessorySets: 2, accessoryReps: "8", intensity: "Carga moderada; adapte sem perder a técnica", note: "Aumente uma série nos exercícios principais apenas se a semana anterior foi bem tolerada." },
      { title: "Descarga técnica", primarySets: 2, primaryReps: "6", accessorySets: 2, accessoryReps: "6", intensity: "Carga leve a moderada", note: "Reduza o volume antes de iniciar o bloco de força e potência." }
    ]
  },
  {
    title: "Força e potência",
    focus: "Construir força concêntrica e sustentar as sessões pliométricas da fase 2",
    plyometricPhaseIndex: 1,
    weeks: [
      { title: "Entrada de força", primarySets: 3, primaryReps: "6", accessorySets: 3, accessoryReps: "6", intensity: "Carga controlável; faixa de 4–8 repetições da diretriz", note: "Inicie o bloco sem usar a carga máxima; mantenha intervalo de pelo menos 2 minutos." },
      { title: "Força do curso", primarySets: 4, primaryReps: "4", accessorySets: 3, accessoryReps: "6", intensity: "80–85% de 1RM nos movimentos de força", note: "Aplicação dos exemplos do curso: agachamento e terra 4×4; afundo e elevação pélvica 3×6." },
      { title: "Consolidação", primarySets: 4, primaryReps: "4", accessorySets: 4, accessoryReps: "6", intensity: "Mantenha a carga se a técnica seguir estável", note: "Consolide os principais em 4×4; acrescente uma série apenas aos acessórios adaptados, até 4 séries." },
      { title: "Descarga", primarySets: 2, primaryReps: "6", accessorySets: 2, accessoryReps: "6", intensity: "Carga leve a moderada", note: "Semana de descarga: reduza séries e carga antes do bloco de potência e velocidade." }
    ]
  },
  {
    title: "Potência e velocidade",
    focus: "Manter a força com poucas repetições e intenção concêntrica rápida",
    plyometricPhaseIndex: 2,
    weeks: [
      { title: "Entrada de potência", primarySets: 2, primaryReps: "4", accessorySets: 2, accessoryReps: "6", intensity: "Carga controlável e movimento rápido, sem perder a técnica", note: "Comece com volume baixo; encerre a série se a velocidade ou a forma cair." },
      { title: "Desenvolvimento", primarySets: 3, primaryReps: "4", accessorySets: 3, accessoryReps: "6", intensity: "Carga controlável; intenção concêntrica rápida", note: "Aumente uma série nos principais se estiver recuperado da semana anterior." },
      { title: "Pico de potência", primarySets: 3, primaryReps: "4", accessorySets: 3, accessoryReps: "6", intensity: "Mantenha a velocidade; não persiga falha muscular", note: "Mantenha o volume e a qualidade, sem acrescentar carga se houver perda de velocidade." },
      { title: "Descarga", primarySets: 2, primaryReps: "4", accessorySets: 2, accessoryReps: "6", intensity: "Carga leve a moderada", note: "Reduza o volume antes do bloco de manutenção." }
    ]
  },
  {
    title: "Manutenção",
    focus: "Preservar a força e reduzir o volume pliométrico",
    plyometricPhaseIndex: 3,
    weeks: [
      { title: "Manutenção de entrada", primarySets: 3, primaryReps: "4", accessorySets: 2, accessoryReps: "6", intensity: "Carga controlável; sem buscar recordes", note: "Mantenha a qualidade das repetições com volume moderado." },
      { title: "Manutenção", primarySets: 3, primaryReps: "4", accessorySets: 3, accessoryReps: "6", intensity: "Mantenha carga e velocidade estáveis", note: "Repita a prescrição se a recuperação estiver adequada." },
      { title: "Redução de volume", primarySets: 2, primaryReps: "4", accessorySets: 2, accessoryReps: "6", intensity: "Carga confortável", note: "Diminua uma série nos principais e acessórios para iniciar a transição recuperado." },
      { title: "Fechamento do bloco", primarySets: 2, primaryReps: "4", accessorySets: 2, accessoryReps: "6", intensity: "Carga confortável; sem falha", note: "Finalize a fase mantendo a execução. Não aumente a pliometria nesta semana." }
    ]
  },
  {
    title: "Transição e recuperação",
    focus: "Recuperar e revisar a execução antes do próximo ciclo",
    plyometricPhaseIndex: null,
    weeks: [
      { title: "Recuperação", primarySets: 2, primaryReps: "6", accessorySets: 2, accessoryReps: "6", intensity: "Carga leve; priorize recuperação", note: "Adaptação do app: mantenha três sessões curtas de força, sem pliometria." },
      { title: "Revisão e retorno", primarySets: 2, primaryReps: "6", accessorySets: 2, accessoryReps: "6", intensity: "Carga leve a moderada", note: "Adaptação do app: mantenha as repetições confortáveis e reavalie a prontidão antes de iniciar outro ciclo." },
      { title: "Semana de prontidão", primarySets: 2, primaryReps: "6", accessorySets: 2, accessoryReps: "6", intensity: "Carga leve a moderada, sem recordes", note: "Semana adicional do app para completar pelo menos quatro meses; mantenha a recuperação e planeje a próxima etapa." }
    ]
  }
];

const strengthCycleWeeks = strengthCycleBlocks.flatMap((block) =>
  block.weeks.map((prescription) => ({ block, prescription }))
);

const strengthProgressionWeeks: Week[] = strengthCycleWeeks.map(({ block, prescription }, weekIndex) => {
  const phase = block.plyometricPhaseIndex === null ? null : plyometricPhases[block.plyometricPhaseIndex];
  const isPlyometricSession = (sessionIndex: number) => sessionIndex === 0 || sessionIndex === 2;
  const progressionNote = prescription.note;

  return {
    id: `strength-week-${weekIndex + 1}`,
    weekNumber: weekIndex + 1,
    title: `Semana ${weekIndex + 1} · ${block.title} · ${prescription.title}`,
    focus: `${block.focus}. ${phase ? `${phase.title}: ${phase.focus}; fase pliométrica com duração indicada de ${phase.sourceDuration}.` : "Bloco de transição do app, sem pliometria."}`,
    trainings: strengthExercisePlans.map((plan, sessionIndex) => {
      const id = `strength-w${weekIndex + 1}-${plan.key}`;
      const strengthSets = plan.exercises.map((exercise, exerciseIndex) => {
        const sets = exercise.role === "primary" ? prescription.primarySets : prescription.accessorySets;
        const reps = exercise.role === "primary" ? prescription.primaryReps : prescription.accessoryReps;
        const courseExample = block.title === "Força e potência" && prescription.title === "Força do curso";

        return {
          id: `${id}-strength-${exerciseIndex + 1}`,
          distance: sets,
          unit: "séries",
          description: `${exercise.name}: ${sets} × ${reps} repetições`,
          restTime: exercise.restTime,
          intensity: courseExample && exercise.intensity.includes("exemplo")
            ? exercise.intensity
            : prescription.intensity,
          notes: `Diretriz do curso para força concêntrica: 2–4 séries, 4–8 repetições e intervalo de pelo menos 2 min. ${progressionNote} Os exercícios de empurrar/puxar são adaptação do app para natação.`
        };
      });
      const plyometricSets = phase && isPlyometricSession(sessionIndex)
        ? phase.exercises.map((exercise, exerciseIndex) => ({
              id: `${id}-plyo-${exerciseIndex + 1}`,
              distance: exercise.sets,
              unit: "séries",
              description: `PLIOMETRIA · ${exercise.name}: ${exercise.sets} × ${exercise.reps}`,
              restTime: exercise.restTime,
              intensity: phase.title,
              notes: phase.note ?? `${phase.dose}. A nomenclatura e a dose vêm do material do curso; a inclusão em duas sessões semanais é a adaptação do app.`
            }))
          : [];

      return {
        id,
        trainingNumber: sessionIndex + 1,
        title: plan.title,
        focus: plan.focus,
        warmup: [{
          id: `${id}-warmup`, distance: 8, unit: "min", description: "Aquecimento geral e mobilidade dinâmica",
          notes: "Preparação geral antes da sessão. O material do curso não define uma sequência única de aquecimento para esta adaptação."
        }],
        main: [...plyometricSets, ...strengthSets],
        cooldown: [{
          id: `${id}-cooldown`, distance: 5, unit: "min", description: "Volta à calma e mobilidade confortável",
          notes: "Sem forçar amplitudes ou alongamentos dolorosos."
        }],
        observations: [
          `${block.title}: ${block.focus}. ${phase ? `Fase pliométrica do material: ${phase.title}, indicada por ${phase.sourceDuration}.` : "A transição/recuperação é uma extensão criada para o ciclo de quatro meses; o material não prescreve uma quinta fase."}`,
          `Progressão de força — ${prescription.title}: ${prescription.intensity}. ${progressionNote}`,
          phase
            ? `Frequência pliométrica do material: ${phase.frequency}; o app usa 2 sessões por semana, nas sessões A e C. ${phase.dose}.`
            : "Sem saltos nesta fase: recuperação entre ciclos de pliometria.",
          "A planilha do curso inclui um exemplo de força 3×/semana: agachamento 4×4; levantamento terra 4×4; afundo 3×6 e elevação pélvica 3×6. Os movimentos de empurrar/puxar são adaptação do app para natação.",
          "O material traz fases voltadas ao futebol. O app preserva a estrutura e adapta a aplicação para condicionamento em terra de nadadores; não é uma periodização específica de natação prescrita pelo curso."
        ],
        materials: plan.materials
      };
    })
  };
});

// Sessão recuperada do material público "Preparação Física - Transição",
// publicado pelo próprio Anderson Leoni. Mantemos esta sessão separada da
// progressão geral de 8 semanas, pois a fonte recuperada não define um ciclo.
const physicalTransitionTraining: Training = {
  id: "physical-transition-session",
  trainingNumber: 1,
  title: "Preparação Física · Transição",
  focus: "Sessão de transição com força geral e exercícios de estabilidade",
  warmup: [
    {
      id: "physical-transition-warmup-1",
      distance: 2,
      unit: "séries",
      description: "Prancha frontal · 30 s",
      restTime: "30 s"
    },
    {
      id: "physical-transition-warmup-2",
      distance: 2,
      unit: "séries",
      description: "Prancha lateral · 15 s para cada lado",
      restTime: "15 s"
    },
    {
      id: "physical-transition-warmup-3",
      distance: 2,
      unit: "séries",
      description: "Elevação pélvica unilateral · 15 s para cada perna",
      restTime: "15 s"
    },
    {
      id: "physical-transition-warmup-4",
      distance: 2,
      unit: "séries",
      description: "Perdigueiro · 15 s",
      restTime: "15 s"
    }
  ],
  main: [
    "Supino máquina",
    "Remada máquina",
    "Pull down",
    "Agachamento Smith ou barra livre",
    "Leg press máquina ou 45°",
    "Agachamento com barra hexagonal ou agachamento livre"
  ].map((exercise, index) => ({
    id: `physical-transition-main-${index + 1}`,
    distance: 2,
    unit: "a 3 séries",
    description: `${exercise}: 6 a 8 repetições`,
    restTime: "1 a 1 min 30 s",
    intensity: "Carga moderada · 60% a 70%",
    notes: "Ajuste a quantidade de séries, exercícios e variações ao tempo disponível, nível de treino, equipamentos e familiaridade."
  })),
  observations: [
    "Aquecimento opcional, conforme a necessidade.",
    "Todos os exercícios principais usam 2 a 3 séries, 6 a 8 repetições e carga moderada de 60% a 70%.",
    "A fonte recuperada descreve uma sessão de transição, sem progressão semanal definida."
  ],
  materials: ["Máquinas ou pesos livres", "Barra hexagonal (opcional)"]
};

// ============================================
// TUTORIAIS TÉCNICOS
// ============================================

const technicalTutorials: Training[] = [
  {
    id: "tutorial-saida",
    trainingNumber: 1,
    title: "Tutorial: Saída Perfeita",
    focus: "Técnica de saída do bloco de partida",
    warmup: [
      {
        id: "tutorial-saida-w1",
        distance: 200,
        unit: "m",
        description: "Aquecimento geral",
        notes: "Preparação"
      }
    ],
    main: [
      {
        id: "tutorial-saida-m1",
        distance: 20,
        unit: "repetições",
        description: "Prática de saída: posicionamento, impulso e entrada na água",
        notes: "Foco em técnica"
      }
    ],
    cooldown: [
      {
        id: "tutorial-saida-c1",
        distance: 100,
        unit: "m",
        description: "Nado leve",
        notes: "Recuperação"
      }
    ],
    observations: [
      "Posição dos pés no bloco",
      "Ângulo do corpo na saída",
      "Entrada na água sem respingos"
    ],
    materials: ["Bloco de partida"]
  },
  {
    id: "tutorial-virada",
    trainingNumber: 1,
    title: "Tutorial: Virada Ninja",
    focus: "Técnica de virada rápida e eficiente",
    warmup: [
      {
        id: "tutorial-virada-w1",
        distance: 200,
        unit: "m",
        description: "Aquecimento geral",
        notes: "Preparação"
      }
    ],
    main: [
      {
        id: "tutorial-virada-m1",
        distance: 30,
        unit: "repetições",
        description: "Prática de virada: aproximação, rolamento e impulsão",
        notes: "Foco em velocidade e eficiência"
      }
    ],
    cooldown: [
      {
        id: "tutorial-virada-c1",
        distance: 100,
        unit: "m",
        description: "Nado leve",
        notes: "Recuperação"
      }
    ],
    observations: [
      "Timing da virada",
      "Posição do corpo",
      "Impulsão da parede"
    ],
    materials: ["Piscina com borda"]
  },
  {
    id: "tutorial-palmateio",
    trainingNumber: 1,
    title: "Tutorial: Palmateio",
    focus: "Técnica de movimento das mãos na água",
    warmup: [
      {
        id: "tutorial-palmateio-w1",
        distance: 200,
        unit: "m",
        description: "Aquecimento geral",
        notes: "Preparação"
      }
    ],
    main: [
      {
        id: "tutorial-palmateio-m1",
        distance: 16,
        unit: "x25m",
        description: "Série de 25m com foco em palmateio: 8x25m com palmar, 8x25m sem palmar",
        equipment: ["Palmar"],
        notes: "Desenvolvimento da propulsão"
      }
    ],
    cooldown: [
      {
        id: "tutorial-palmateio-c1",
        distance: 100,
        unit: "m",
        description: "Nado leve",
        notes: "Recuperação"
      }
    ],
    observations: [
      "Movimento em S da mão",
      "Pressão na água",
      "Sincronização com o corpo"
    ],
    materials: ["Palmar"]
  },
  {
    id: "tutorial-educativos",
    trainingNumber: 1,
    title: "Tutorial: Educativos",
    focus: "Exercícios técnicos para melhorar o nado",
    warmup: [
      {
        id: "tutorial-educativos-w1",
        distance: 200,
        unit: "m",
        description: "Aquecimento geral",
        notes: "Preparação"
      }
    ],
    main: [
      {
        id: "tutorial-educativos-m1",
        distance: 32,
        unit: "x25m",
        description: "Série de educativos: 8x25m perna, 8x25m braço, 8x25m coordenação, 8x25m completo",
        notes: "Progressão técnica"
      }
    ],
    cooldown: [
      {
        id: "tutorial-educativos-c1",
        distance: 100,
        unit: "m",
        description: "Nado leve",
        notes: "Recuperação"
      }
    ],
    observations: [
      "Isolamento de movimentos",
      "Progressão para nado completo"
    ],
    materials: []
  }
];

// ============================================
// GLOSSÁRIO TÉCNICO
// ============================================

export const glossary: Record<string, string> = {
  "Pé de Pato (PP)": "Nadadeira que aumenta a propulsão e ajuda a trabalhar a técnica de perna. Essencial para os treinos de pernada.",
  "Bolinha de Tênis": "Colocada entre o queixo e o pescoço para manter a posição corporal correta e evitar que a cabeça suba demais.",
  "Palmar": "Dispositivo que aumenta a superfície das mãos, aumentando a propulsão e ajudando a trabalhar a braçada.",
  "Prancha": "Flutuador usado para trabalhar apenas a pernada, isolando o trabalho de perna do resto do corpo.",
  "Solto": "Nado livre, sem equipamento específico, apenas com o corpo.",
  "Pernada": "Movimento de pernas durante o nado.",
  "Braçada": "Movimento dos braços durante o nado.",
  "Respiração Lateral": "Técnica de respiração onde você vira a cabeça para o lado, não para frente.",
  "Descanso Ativo": "Nado leve e tranquilo para recuperação.",
  "Saída": "Movimento inicial do nado, a forma como você sai do bloco de partida.",
  "Virada": "Movimento de inversão na borda da piscina.",
  "Arrasto": "Resistência do corpo na água, quanto menor melhor.",
  "Alinhamento": "Posição correta do corpo na água para reduzir arrasto.",
  "Apoio": "Fase inicial da braçada onde a mão entra na água.",
  "Puxada": "Fase de propulsão da braçada onde você puxa a água.",
  "Recuperação": "Fase onde o braço retorna à posição inicial.",
  "Frequência": "Número de braçadas por minuto.",
  "Amplitude": "Distância coberta por braçada.",
  "Intensidade A1": "60-70% do esforço máximo - Ritmo confortável",
  "Intensidade A2": "70-80% do esforço máximo - Ritmo moderado",
  "Intensidade A3": "80-90% do esforço máximo - Ritmo intenso",
};

// ============================================
// HIERARQUIA DE CONQUISTAS (Pokémons Aquáticos)
// ============================================

export const achievements = [
  {
    id: "magikarp",
    name: "Magikarp",
    title: "Iniciante",
    description: "Completou o primeiro treino",
    xpRequired: 0,
    icon: "🐟",
    color: "from-red-400 to-red-600"
  },
  {
    id: "poliwag",
    name: "Poliwag",
    title: "Novato",
    description: "Completou 5 treinos",
    xpRequired: 500,
    icon: "🌊",
    color: "from-blue-400 to-blue-600"
  },
  {
    id: "psyduck",
    name: "Psyduck",
    title: "Aprendiz",
    description: "Completou 10 treinos",
    xpRequired: 1000,
    icon: "🦆",
    color: "from-yellow-400 to-yellow-600"
  },
  {
    id: "squirtle",
    name: "Squirtle",
    title: "Intermediário",
    description: "Completou 20 treinos",
    xpRequired: 2000,
    icon: "🐢",
    color: "from-cyan-400 to-cyan-600"
  },
  {
    id: "lapras",
    name: "Lapras",
    title: "Avançado",
    description: "Completou 40 treinos",
    xpRequired: 4000,
    icon: "🦕",
    color: "from-blue-500 to-indigo-600"
  },
  {
    id: "dragonite",
    name: "Dragonite",
    title: "Mestre",
    description: "Completou 60 treinos",
    xpRequired: 6000,
    icon: "🐉",
    color: "from-purple-500 to-purple-700"
  },
  {
    id: "gyarados",
    name: "Gyarados",
    title: "Lenda",
    description: "Completou 100 treinos",
    xpRequired: 10000,
    icon: "🦈",
    color: "from-red-600 to-blue-600"
  }
];

// ============================================
// EXPORT TRAINING DATA
// ============================================

export const trainingData: Program[] = [
  {
    id: "easy-swimming-cycle",
    name: "Ciclo do Nado Fácil",
    category: "Técnica",
    description: "Programa de 4 semanas focado em técnica fundamental de natação",
    duration: "4 semanas",
    weeks: easySwimmingCycle,
    focus: "Desenvolvimento técnico"
  },
  {
    id: "ez-speed",
    name: "EZ Speed",
    category: "Velocidade",
    description: "Programa de 8 semanas para desenvolvimento de velocidade",
    duration: "8 semanas",
    weeks: ezSpeedProgram,
    focus: "Velocidade progressiva"
  },
  {
    id: "super-velo",
    name: "Super Velô",
    category: "Sprint",
    description: "Programa de 8 semanas focado em sprint de 50m",
    duration: "8 semanas",
    weeks: superVeloProgram,
    focus: "Sprint e explosão"
  },
  {
    id: "middle-distance",
    name: "Treinos 200m e 400m",
    category: "Meio-Fundo",
    description: "Programa de 8 semanas para desenvolvimento de resistência anaeróbica",
    duration: "8 semanas",
    weeks: middleDistanceProgram,
    focus: "Meio-fundo"
  },
  {
    id: "long-distance",
    name: "Treinos 800m e 1500m",
    category: "Fundo",
    description: "Programa de 8 semanas para desenvolvimento de resistência aeróbica",
    duration: "8 semanas",
    weeks: longDistanceProgram,
    focus: "Fundo"
  },
  {
    id: "strength-training",
    name: "Preparação Física",
    category: "Força",
    description: "Ciclo de 18 semanas (pouco mais de 4 meses) inspirado nas diretrizes de força e nas 4 fases pliométricas do Prepara Academy, com movimentos de empurrar e puxar adaptados para natação.",
    duration: "18 semanas · 3 sessões de força; 2 blocos pliométricos nas fases 1–4",
    weeks: strengthProgressionWeeks,
    focus: "Força e condicionamento"
  },
  {
    id: "physical-transition",
    name: "Preparação Física · Transição",
    category: "Força",
    description: "Sessão recuperada do material de preparação física: estabilidade opcional e força geral em academia.",
    duration: "Sessão única",
    trainings: [physicalTransitionTraining],
    focus: "Força geral e estabilidade"
  },
  {
    id: "technical-tutorials",
    name: "Tutoriais Técnicos",
    category: "Educação",
    description: "Tutoriais e guias técnicos para melhorar a natação",
    duration: "Sob demanda",
    trainings: technicalTutorials,
    focus: "Educação técnica"
  }
];

// Flatten weeks into trainings for easier access
export const allTrainings: Training[] = [];
trainingData.forEach(program => {
  if (program.weeks) {
    program.weeks.forEach(week => {
      allTrainings.push(...week.trainings);
    });
  }
  if (program.trainings) {
    allTrainings.push(...program.trainings);
  }
});
