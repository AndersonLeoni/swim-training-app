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
    key: "upper",
    title: "Academia · Superiores",
    focus: "Força equilibrada de empurrar e puxar, com atenção à estabilidade dos ombros",
    materials: ["Halteres ou máquinas", "Elástico"],
    exercises: [
      "Supino com halteres ou máquina",
      "Remada sentada ou com halteres",
      "Puxada frontal pela frente",
      "Desenvolvimento de ombros leve",
      "Face pull com elástico ou polia",
      "Rotação externa do ombro com elástico",
      "Rosca de bíceps",
      "Extensão de tríceps na polia ou com elástico"
    ]
  },
  {
    key: "lower-core",
    title: "Academia · Pernas e core",
    focus: "Força de pernas e quadril, controle de tronco e estabilidade",
    materials: ["Halteres ou máquinas", "Tapete"],
    exercises: [
      "Agachamento até amplitude confortável",
      "Levantamento romeno com halteres",
      "Avanço reverso alternado",
      "Elevação de panturrilhas",
      "Ponte de glúteos",
      "Dead bug controlado",
      "Prancha lateral"
    ]
  },
  {
    key: "home",
    title: "Em casa · Corpo inteiro",
    focus: "Sessão complementar com peso corporal e elástico opcional",
    materials: ["Tapete", "Elástico opcional"],
    exercises: [
      "Flexão inclinada ou tradicional",
      "Agachamento com peso corporal",
      "Remada com elástico (ou mochila leve)",
      "Ponte de glúteos",
      "Bird dog alternado",
      "Prancha frontal"
    ]
  }
];

const strengthProgression = [
  { sets: 2, reps: "10–12", phase: "Adaptação: pratique os movimentos com controle e esforço moderado." },
  { sets: 3, reps: "10–12", phase: "Base: mantenha a execução estável em todas as séries." },
  { sets: 3, reps: "8–10", phase: "Construção: se a técnica estiver firme, aumente ligeiramente a resistência." },
  { sets: 2, reps: "10", phase: "Semana leve: reduza o esforço e priorize recuperação e mobilidade." },
  { sets: 3, reps: "8–10", phase: "Progressão: retome a carga confortável da semana 3." },
  { sets: 3, reps: "8–10", phase: "Consistência: avance apenas se completar as repetições com boa técnica." },
  { sets: 4, reps: "8", phase: "Consolidação: use carga controlável e descanse o suficiente entre séries." },
  { sets: 2, reps: "8–10", phase: "Fechamento: semana leve para recuperar e revisar sua evolução." }
];

const strengthProgressionWeeks: Week[] = strengthProgression.map((progression, weekIndex) => ({
  id: `strength-week-${weekIndex + 1}`,
  weekNumber: weekIndex + 1,
  title: `Semana ${weekIndex + 1} · ${weekIndex === 0 ? "Adaptação" : weekIndex === 3 || weekIndex === 7 ? "Recuperação" : "Progressão"}`,
  focus: progression.phase,
  trainings: strengthExercisePlans.map((plan, sessionIndex) => {
    const id = `strength-w${weekIndex + 1}-${plan.key}`;
    return {
      id,
      trainingNumber: sessionIndex + 1,
      title: plan.title,
      focus: plan.focus,
      warmup: [{
        id: `${id}-warmup`, distance: 8, unit: "min", description: "Aquecimento geral e mobilidade dinâmica",
        notes: "Comece leve e faça movimentos sem dor antes das séries principais."
      }],
      main: plan.exercises.map((exercise, exerciseIndex) => ({
        id: `${id}-exercise-${exerciseIndex + 1}`,
        distance: progression.sets,
        unit: "séries",
        description: `${exercise}: ${progression.sets} × ${/prancha/i.test(exercise) ? "20–30 s" : `${progression.reps} repetições`}`,
        restTime: "60–90 s (ou até recuperar a respiração)",
        intensity: "Moderada",
        notes: "Use resistência que permita terminar cada série com a técnica preservada; deixe 2–3 repetições possíveis."
      })),
      cooldown: [{
        id: `${id}-cooldown`, distance: 5, unit: "min", description: "Volta à calma e mobilidade confortável",
        notes: "Sem forçar amplitudes ou alongamentos dolorosos."
      }],
      observations: [
        progression.phase,
        "Sugestão: deixe ao menos um dia de recuperação entre as sessões.",
        "Interrompa qualquer movimento que provoque dor aguda e ajuste a variação ou a carga."
      ],
      materials: plan.materials
    };
  })
}));

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
    description: "Programa de fortalecimento e condicionamento físico",
    duration: "8 semanas · 3 sessões por semana",
    weeks: strengthProgressionWeeks,
    focus: "Força e condicionamento"
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
