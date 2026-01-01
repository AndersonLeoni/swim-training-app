# Design & Gamificação - Swim Master App

## Filosofia de Design

### Conceito Principal
**"Treino na Borda da Piscina"** - Interface otimizada para uso rápido, com alta legibilidade e foco no essencial durante o treino.

### Princípios de Design
1. **Legibilidade Máxima:** Fontes grandes, contraste alto, sem poluição visual
2. **Acessibilidade:** Fácil de usar com dedos molhados, botões grandes
3. **Foco Contextual:** Mostra apenas o treino atual, sem distrações
4. **Velocidade:** Carregamento instantâneo, navegação fluida

### Paleta de Cores
- **Primária:** Azul Oceano (#0066CC) - Confiança e profissionalismo
- **Secundária:** Turquesa (#00B4D8) - Energia e movimento aquático
- **Destaque:** Verde Esmeralda (#10B981) - Progresso e sucesso
- **Fundo:** Branco (#FFFFFF) - Máxima legibilidade
- **Texto:** Cinza Escuro (#1F2937) - Conforto visual
- **Neutro:** Cinza Claro (#F3F4F6) - Separadores e fundos secundários

### Tipografia
- **Display:** Montserrat Bold (títulos, semanas)
- **Corpo:** Inter Regular (instruções de treino)
- **Destaque:** Inter SemiBold (séries, tempos)

---

## Sistema de Gamificação

### 1. Barra de Progresso Semanal
**Objetivo:** Visualizar o progresso dentro de cada semana

- Mostra 4 treinos da semana
- Cada treino é um círculo que se preenche ao ser concluído
- Progresso visual em tempo real
- Animação ao completar um treino

### 2. Sistema de Níveis (4 Semanas)
**Objetivo:** Criar senso de progressão ao longo do mês

| Semana | Nível | Ícone | Descrição |
|--------|-------|-------|-----------|
| 1 | Iniciante | 🌊 | Posição Corporal |
| 2 | Intermediário | 🦵 | Perna |
| 3 | Avançado | 💨 | Respiração |
| 4 | Mestre | ⚡ | Apoio e Puxada |

### 3. Conquistas (Badges)
**Objetivo:** Recompensar consistência e dedicação

#### Conquistas Desbloqueáveis:
- **"Primeiro Passo"** - Completar o primeiro treino
- **"Semana 1 Concluída"** - Completar todos os 4 treinos da Semana 1
- **"Consistência"** - Treinar 7 dias seguidos
- **"Mestre da Posição"** - Completar Semana 1
- **"Perna Forte"** - Completar Semana 2
- **"Respiração Perfeita"** - Completar Semana 3
- **"Ciclo Completo"** - Completar as 4 semanas
- **"Velocista"** - Completar 2 ciclos completos

### 4. Pontos de Experiência (XP)
**Objetivo:** Gamificar o progresso com sistema de pontos

- **Treino Concluído:** +50 XP
- **Semana Concluída:** +100 XP (bônus)
- **Ciclo Completo:** +500 XP (bônus)
- **Consistência (7 dias):** +75 XP

### 5. Estatísticas Pessoais
**Objetivo:** Mostrar dados de progresso

- Total de treinos completados
- Dias de consistência (sequência atual)
- Semanas concluídas
- Ciclos completos
- Tempo total de treino

---

## Estrutura de Navegação

### Página Principal (Dashboard)
```
┌─────────────────────────────────────┐
│  Swim Master: Ciclo do Nado Fácil   │
├─────────────────────────────────────┤
│                                     │
│  Semana 1: Posição Corporal         │
│  ●●●○ (3 de 4 treinos)              │
│                                     │
│  [Continuar Treino] [Ver Histórico] │
│                                     │
├─────────────────────────────────────┤
│  Estatísticas                       │
│  • 12 treinos completados           │
│  • 7 dias de consistência           │
│  • 1 semana concluída               │
│                                     │
├─────────────────────────────────────┤
│  Conquistas Recentes                │
│  🏆 "Primeiro Passo" desbloqueado   │
│                                     │
└─────────────────────────────────────┘
```

### Página de Treino
```
┌─────────────────────────────────────┐
│  Semana 1 - Treino 1                │
│  Posição Corporal                   │
├─────────────────────────────────────┤
│                                     │
│  AQUECIMENTO                        │
│  200m solto                         │
│                                     │
│  PRINCIPAL                          │
│  24x25m perna com pé de pato        │
│  30" a 40" sendo:                   │
│  • 8x25m com bolinha no queixo      │
│  • 8x25m com palmar na cabeça       │
│  • 8x25m sem nada                   │
│                                     │
│  OBSERVAÇÕES                        │
│  Fazer filmagem frontal e lateral   │
│                                     │
│  [Marcar como Concluído]            │
│                                     │
└─────────────────────────────────────┘
```

### Página de Histórico
```
┌─────────────────────────────────────┐
│  Histórico de Treinos               │
├─────────────────────────────────────┤
│                                     │
│  Semana 1                           │
│  ✓ Treino 1 - 02/01/2026           │
│  ✓ Treino 2 - 03/01/2026           │
│  ✓ Treino 3 - 04/01/2026           │
│  ○ Treino 4 - Pendente             │
│                                     │
│  Semana 2                           │
│  ○ Treino 1 - Próximo              │
│                                     │
└─────────────────────────────────────┘
```

---

## Componentes Principais

### 1. Card de Treino
- Título da semana e número do treino
- Barra de progresso visual
- Botão de ação destacado
- Ícone de status (concluído/pendente)

### 2. Seção de Série
- Estrutura clara: quantidade x distância
- Equipamentos necessários em destaque
- Tempo de descanso em cor diferente
- Notas técnicas em fonte menor

### 3. Badge de Conquista
- Ícone grande e colorido
- Nome da conquista
- Data de desbloqueio
- Descrição breve

### 4. Barra de Progresso
- Animação suave ao preencher
- Percentual visível
- Cores que mudam conforme progride

---

## Fluxo de Interação

### Primeiro Acesso
1. Usuário vê Dashboard com Semana 1
2. Clica em "Continuar Treino"
3. Vê detalhes do Treino 1
4. Lê instruções
5. Marca como concluído
6. Recebe feedback visual (animação)
7. Volta ao Dashboard com progresso atualizado

### Retorno Diário
1. Dashboard mostra progresso atual
2. Usuário vê próximo treino
3. Clica para iniciar
4. Completa e marca
5. Vê estatísticas atualizadas

---

## Micro-interações

### Ao Completar um Treino
- ✨ Animação de confete (suave)
- 🎵 Som opcional (desativável)
- Mensagem de encorajamento
- Atualização de XP visível
- Progresso da barra anima

### Ao Desbloquear Conquista
- 🏆 Animação de badge aparecendo
- Notificação com som
- Descrição da conquista
- Opção de compartilhar

### Hover em Elementos
- Botões ganham sombra suave
- Cards ganham elevação
- Textos ganham cor de destaque

---

## Responsividade

### Mobile (< 768px)
- Stack vertical de elementos
- Botões ocupam toda largura
- Fonte aumentada para legibilidade
- Toque otimizado (hit areas maiores)

### Tablet (768px - 1024px)
- Layout em 2 colunas
- Elementos mais espaçados
- Fonte confortável

### Desktop (> 1024px)
- Layout em 3 colunas
- Sidebar com navegação
- Mais informações visíveis

---

## Armazenamento Local

### Dados Persistidos (LocalStorage)
```json
{
  "user": {
    "name": "Anderson",
    "startDate": "2026-01-01"
  },
  "progress": {
    "currentWeek": 1,
    "currentTraining": 1,
    "completedTrainings": [1],
    "completedWeeks": [],
    "completedCycles": 0
  },
  "stats": {
    "totalTrainings": 1,
    "totalXP": 50,
    "consecutiveDays": 1,
    "lastTrainingDate": "2026-01-01"
  },
  "achievements": {
    "firstStep": true,
    "consistency": false
  }
}
```

---

## Próximos Passos
1. Implementar Dashboard com progresso visual
2. Criar página de Treino com conteúdo estruturado
3. Adicionar sistema de conquistas
4. Implementar armazenamento local
5. Adicionar animações e micro-interações
