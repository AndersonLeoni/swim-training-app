import { useEffect, useMemo, useState } from "react";
import { Link } from "wouter";
import {
  Activity, ArrowDownRight, ArrowRight, Award, CalendarDays, Check,
  ChevronDown, Clock3, Flame, Gauge, Waves, Menu, Settings2, Sparkles,
} from "lucide-react";
import { useProgress } from "@/hooks/useProgress";
import { allTrainings, achievements, trainingData } from "@/lib/trainingData";

const navItems = [
  { href: "/", label: "Visão geral", icon: Activity },
  { href: "/programs", label: "Planos de treino", icon: Waves },
  { href: "/history", label: "Meu histórico", icon: CalendarDays },
  { href: "/glossary", label: "Técnica & termos", icon: Gauge },
];

function formatMeters(meters: number) {
  return meters >= 1000 ? `${(meters / 1000).toFixed(meters % 1000 === 0 ? 0 : 1)} km` : `${meters} m`;
}

function distanceMeters(set: { distance: number; unit: string }) {
  const unit = set.unit.toLowerCase();
  if (!unit.includes("m") || unit.includes("min")) return 0;
  const repeatDistance = unit.match(/x\s*(\d+)/);
  return set.distance * (repeatDistance ? Number(repeatDistance[1]) : 1);
}

function trainingVolume(training: (typeof allTrainings)[number]) {
  const sets = [...training.warmup, ...training.main, ...(training.cooldown ?? [])];
  const meters = sets.reduce((total, set) => total + distanceMeters(set), 0);
  if (meters > 0) return { value: meters, label: formatMeters(meters), unit: "m" as const };

  const minutes = sets.reduce((total, set) => total + (set.unit.toLowerCase().includes("min") ? set.distance : 0), 0);
  return { value: minutes, label: minutes > 0 ? `${minutes} min` : "—", unit: "min" as const };
}

function trainingTitle(title: string) {
  return title
    .replace(/^Treino (Academia|Core) \d+ - /i, "$1 · ")
    .replace(/^Treino em Casa \d+ - /i, "Em casa · ")
    .replace(/^Treino \d+ - /, "");
}

export default function Home() {
  const { progress, getStats } = useProgress();
  const [selectedProgramId, setSelectedProgramId] = useState("easy-swimming-cycle");
  const [loaded, setLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("selectedProgramId");
    if (saved && trainingData.some((program) => program.id === saved)) setSelectedProgramId(saved);
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (loaded) localStorage.setItem("selectedProgramId", selectedProgramId);
  }, [loaded, selectedProgramId]);

  const program = trainingData.find((item) => item.id === selectedProgramId) ?? trainingData[0];
  const stats = getStats();
  const week = program.weeks?.find((item) => item.weekNumber === progress.currentWeek) ?? program.weeks?.[0];
  const sessions = week?.trainings ?? program.trainings ?? [];
  const finishedThisWeek = sessions.filter((item) => progress.completedTrainings.includes(item.id)).length;
  const nextTraining = sessions.find((item) => !progress.completedTrainings.includes(item.id)) ?? sessions[0];
  const totalMeters = useMemo(() => allTrainings
    .filter((training) => progress.completedTrainings.includes(training.id))
    .flatMap((training) => [...training.warmup, ...training.main, ...(training.cooldown ?? [])])
    .reduce((total, set) => total + distanceMeters(set), 0), [progress.completedTrainings]);
  const achievement = [...achievements].reverse().find((item) => stats.totalXP >= item.xpRequired) ?? achievements[0];
  const weeklyVolumes = sessions.map(trainingVolume);
  const volumeUnit = weeklyVolumes.find((volume) => volume.value > 0)?.unit ?? "m";
  const weeklyVolumesForChart = weeklyVolumes.map((volume) => volume.value);
  const maxMeters = Math.max(...weeklyVolumesForChart, 1);
  const nextHref = nextTraining ? `/training/${nextTraining.id}` : "/programs";

  if (!loaded) return <div className="swim-app swim-loading"><span className="swim-mark"><Waves /></span></div>;

  return (
    <div className="swim-app">
      <aside className={`swim-sidebar ${menuOpen ? "is-open" : ""}`}>
        <Link href="/" className="swim-brand"><span className="swim-brand-icon"><Waves size={20} /></span><span>LANE<span className="brand-light">/</span>LINE<small>SWIM TRAINING CLUB</small></span></Link>
        <div className="sidebar-caption">TREINO</div>
        <nav className="swim-nav">
          {navItems.map(({ href, label, icon: Icon }, index) => <Link key={href} href={href} className={`swim-nav-link ${index === 0 ? "active" : ""}`} onClick={() => setMenuOpen(false)}><Icon size={18} /><span>{label}</span>{index === 0 && <span className="nav-pulse" />}</Link>)}
        </nav>
        <div className="sidebar-caption plan-label">SEU PROGRAMA</div>
        <label className="program-select">
          <span className="program-select-icon"><Waves size={17} /></span><span className="program-select-copy"><b>{program.name}</b><small>{program.duration} · {program.category}</small></span><ChevronDown size={15} />
          <select aria-label="Selecionar programa de treino" value={selectedProgramId} onChange={(event) => setSelectedProgramId(event.target.value)}>{trainingData.map((item) => <option key={item.id} value={item.id}>{item.name}</option>)}</select>
        </label>
        <div className="sidebar-spacer" />
        <div className="coach-card"><span className="coach-orbit"><Sparkles size={17} /></span><div><b>Ritmo consistente</b><p>Um treino de cada vez.<br />Você está no caminho.</p></div><div className="coach-progress"><i style={{ width: `${Math.min(stats.totalTrainings * 8, 100)}%` }} /></div><small>{stats.totalTrainings} sessões concluídas</small></div>
        <Link href="/settings" className="swim-profile"><span className="avatar-mark">AL</span><span><b>Meu espaço</b><small>Nadador amador</small></span><Settings2 size={17} /></Link>
      </aside>

      <main className="swim-main">
        <header className="swim-topbar"><button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menu"><Menu /></button><div className="breadcrumb">TREINAMENTO <span>/</span> <b>VISÃO GERAL</b></div><div className="topbar-right"><span className="today-date"><span className="live-dot" /> SEU ESPAÇO DE NATAÇÃO</span><Link href="/settings" className="topbar-avatar" aria-label="Configurações">AL</Link></div></header>
        <div className="swim-content">
          <section className="welcome-row"><div><div className="eyebrow"><span className="eyebrow-line" /> SEU PRÓXIMO MERGULHO COMEÇA AQUI</div><h1>Bom dia, <span>nadador.</span></h1><p>Água, foco e movimento. Vamos construir uma braçada melhor.</p></div><Link href={nextHref} className="start-session"><span><Waves size={18} /></span><b>Começar treino</b><ArrowRight size={17} /></Link></section>

          <section className="dashboard-grid">
            <article className="volume-card">
              <div className="card-topline"><div><span className="section-kicker">VOLUME ACUMULADO</span><h2>Seu ritmo na água</h2></div><span className="period-pill"><span className="live-dot" /> {week ? "ESTA SEMANA" : "SEU PROGRAMA"}</span></div>
              <div className="volume-summary"><strong>{formatMeters(totalMeters)}</strong><span><ArrowDownRight size={14} /> total nadado</span></div>
              <div className="volume-chart" role="img" aria-label="Distância prevista por treino nesta semana">
                <div className="chart-y-labels"><span>{volumeUnit === "m" ? formatMeters(Math.round(maxMeters)) : `${Math.round(maxMeters)} min`}</span><span>{volumeUnit === "m" ? formatMeters(Math.round(maxMeters / 2)) : `${Math.round(maxMeters / 2)} min`}</span><span>0 {volumeUnit}</span></div>
                <div className="chart-plot"><div className="chart-gridline" /><div className="chart-gridline middle" /><div className="chart-gridline bottom" />
                  <div className="chart-bars">{weeklyVolumesForChart.map((volume, index) => { const training = sessions[index]; const done = Boolean(training && progress.completedTrainings.includes(training.id)); const label = weeklyVolumes[index]?.label ?? "—"; return <div className="chart-bar-column" key={training?.id ?? index}><div className={`chart-bar ${done ? "done" : ""} ${index === finishedThisWeek && !done ? "next" : ""}`} style={{ height: `${Math.max(8, (volume / maxMeters) * 100)}%` }}><span>{label}</span></div><small>{["S1", "S2", "S3", "S4"][index] ?? `S${index + 1}`}</small></div>; })}</div>
                </div>
              </div>
              <div className="chart-footnote"><span><i className="legend-swatch" /> {volumeUnit === "m" ? "Distância estimada por sessão" : "Duração de cada sessão"}</span><span>{week?.title ?? program.name}</span></div>
            </article>

            <div className="stats-column">
              <article className="stat-panel"><div className="stat-icon aqua"><Waves size={19} /></div><div className="stat-copy"><small>SESSÕES CONCLUÍDAS</small><strong>{stats.totalTrainings}<em> treinos</em></strong><span>{finishedThisWeek} de {sessions.length} {week ? "nesta semana" : "no programa"}</span></div><div className="stat-meter"><i style={{ height: `${Math.min(stats.totalTrainings * 9, 100)}%` }} /></div></article>
              <article className="stat-panel"><div className="stat-icon coral"><Flame size={19} /></div><div className="stat-copy"><small>SEQUÊNCIA ATUAL</small><strong>{stats.consecutiveDays}<em> dias</em></strong><span>{stats.consecutiveDays > 0 ? "Continue no seu ritmo" : "Seu primeiro dia começa hoje"}</span></div><div className="stat-streak">{Array.from({ length: 7 }, (_, i) => <i key={i} className={i < stats.consecutiveDays ? "filled" : ""} />)}</div></article>
              <article className="stat-panel"><div className="stat-icon violet"><Award size={19} /></div><div className="stat-copy"><small>JORNADA DO NADADOR</small><strong>{achievement.name}<em> · {stats.totalXP} XP</em></strong><span>{achievement.title} · próximo nível em breve</span></div><div className="achievement-emoji">{achievement.icon}</div></article>
            </div>
          </section>

          <section className="training-section-home">
            <div className="section-heading"><div><span className="section-kicker">{week ? "PLANO EM ANDAMENTO" : "SESSÕES DO PROGRAMA"}</span><h2>{week?.title ?? program.name}</h2><p>{week?.focus ?? program.description}</p></div><Link href="/programs" className="text-link">Ver programas <ArrowRight size={15} /></Link></div>
            <div className="session-list">{sessions.slice(0, 4).map((training, index) => {
              const done = progress.completedTrainings.includes(training.id);
              const volume = trainingVolume(training);
              return <Link href={`/training/${training.id}`} className={`session-row ${done ? "completed" : ""}`} key={training.id}><span className={`session-index ${done ? "done" : index === finishedThisWeek ? "current" : ""}`}>{done ? <Check size={15} /> : String(index + 1).padStart(2, "0")}</span><span className="session-info"><b>{trainingTitle(training.title)}</b><small>{training.focus}</small></span><span className="session-detail"><Waves size={14} />{volume.label}</span><span className="session-detail"><Clock3 size={14} />{training.main.length + training.warmup.length + (training.cooldown?.length ?? 0)} séries</span><span className={`session-status ${done ? "is-done" : ""}`}>{done ? "CONCLUÍDO" : index === finishedThisWeek ? "PRÓXIMO" : "ABERTO"}</span><ArrowRight className="session-arrow" size={17} /></Link>;
            })}{sessions.length === 0 && <div className="empty-program">Este programa está pronto para explorar. <Link href="/programs">Escolher um treino <ArrowRight size={14} /></Link></div>}</div>
          </section>

          <footer className="swim-footer"><span><span className="footer-wave">≈</span> Cada volta conta.</span><span>FEITO PARA QUEM ENCONTRA SEU RITMO NA ÁGUA</span></footer>
        </div>
      </main>
      <nav className="swim-mobile-nav" aria-label="Navegação principal">
        {navItems.map(({ href, label, icon: Icon }) => <Link key={href} href={href}><Icon size={17} /><span>{label.split(" ")[0]}</span></Link>)}
      </nav>
    </div>
  );
}
