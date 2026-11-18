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
  const finishedThisWeek = week?.trainings.filter((item) => progress.completedTrainings.includes(item.id)).length ?? 0;
  const nextTraining = week?.trainings.find((item) => !progress.completedTrainings.includes(item.id)) ?? week?.trainings[0];
  const totalMeters = useMemo(() => allTrainings
    .filter((training) => progress.completedTrainings.includes(training.id))
    .flatMap((training) => [...training.warmup, ...training.main, ...(training.cooldown ?? [])])
    .reduce((total, set) => total + distanceMeters(set), 0), [progress.completedTrainings]);
  const achievement = [...achievements].reverse().find((item) => stats.totalXP >= item.xpRequired) ?? achievements[0];
  const weeklyMeters = week?.trainings.map((training) => [...training.warmup, ...training.main, ...(training.cooldown ?? [])]
    .reduce((total, set) => total + distanceMeters(set), 0)) ?? [];
  const maxMeters = Math.max(...weeklyMeters, 1);
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
              <div className="card-topline"><div><span className="section-kicker">VOLUME ACUMULADO</span><h2>Seu ritmo na água</h2></div><span className="period-pill"><span className="live-dot" /> ESTA SEMANA</span></div>
              <div className="volume-summary"><strong>{formatMeters(totalMeters)}</strong><span><ArrowDownRight size={14} /> total nadado</span></div>
              <div className="volume-chart" role="img" aria-label="Distância prevista por treino nesta semana">
                <div className="chart-y-labels"><span>{formatMeters(Math.round(maxMeters))}</span><span>{formatMeters(Math.round(maxMeters / 2))}</span><span>0 m</span></div>
                <div className="chart-plot"><div className="chart-gridline" /><div className="chart-gridline middle" /><div className="chart-gridline bottom" />
                  <div className="chart-bars">{weeklyMeters.map((meters, index) => { const done = Boolean(week?.trainings[index] && progress.completedTrainings.includes(week.trainings[index].id)); return <div className="chart-bar-column" key={week?.trainings[index]?.id ?? index}><div className={`chart-bar ${done ? "done" : ""} ${index === finishedThisWeek && !done ? "next" : ""}`} style={{ height: `${Math.max(8, (meters / maxMeters) * 100)}%` }}><span>{formatMeters(meters)}</span></div><small>{["S1", "S2", "S3", "S4"][index] ?? `S${index + 1}`}</small></div>; })}</div>
                </div>
              </div>
              <div className="chart-footnote"><span><i className="legend-swatch" /> Distância estimada por sessão</span><span>{week?.title ?? "Plano atual"}</span></div>
            </article>

            <div className="stats-column">
              <article className="stat-panel"><div className="stat-icon aqua"><Waves size={19} /></div><div className="stat-copy"><small>SESSÕES CONCLUÍDAS</small><strong>{stats.totalTrainings}<em> treinos</em></strong><span>{finishedThisWeek} de {week?.trainings.length ?? 0} nesta semana</span></div><div className="stat-meter"><i style={{ height: `${Math.min(stats.totalTrainings * 9, 100)}%` }} /></div></article>
              <article className="stat-panel"><div className="stat-icon coral"><Flame size={19} /></div><div className="stat-copy"><small>SEQUÊNCIA ATUAL</small><strong>{stats.consecutiveDays}<em> dias</em></strong><span>{stats.consecutiveDays > 0 ? "Continue no seu ritmo" : "Seu primeiro dia começa hoje"}</span></div><div className="stat-streak">{Array.from({ length: 7 }, (_, i) => <i key={i} className={i < stats.consecutiveDays ? "filled" : ""} />)}</div></article>
              <article className="stat-panel"><div className="stat-icon violet"><Award size={19} /></div><div className="stat-copy"><small>JORNADA DO NADADOR</small><strong>{achievement.name}<em> · {stats.totalXP} XP</em></strong><span>{achievement.title} · próximo nível em breve</span></div><div className="achievement-emoji">{achievement.icon}</div></article>
            </div>
          </section>

          <section className="training-section-home">
            <div className="section-heading"><div><span className="section-kicker">PLANO EM ANDAMENTO</span><h2>{week?.title ?? program.name}</h2><p>{week?.focus ?? program.description}</p></div><Link href="/programs" className="text-link">Ver programas <ArrowRight size={15} /></Link></div>
            <div className="session-list">{week?.trainings.slice(0, 4).map((training, index) => {
              const done = progress.completedTrainings.includes(training.id);
              const distance = [...training.warmup, ...training.main, ...(training.cooldown ?? [])].reduce((sum, set) => sum + distanceMeters(set), 0);
              return <Link href={`/training/${training.id}`} className={`session-row ${done ? "completed" : ""}`} key={training.id}><span className={`session-index ${done ? "done" : index === finishedThisWeek ? "current" : ""}`}>{done ? <Check size={15} /> : String(index + 1).padStart(2, "0")}</span><span className="session-info"><b>{training.title.replace(/^Treino \d+ - /, "")}</b><small>{training.focus}</small></span><span className="session-detail"><Waves size={14} />{formatMeters(distance)}</span><span className="session-detail"><Clock3 size={14} />{training.main.length + training.warmup.length + (training.cooldown?.length ?? 0)} séries</span><span className={`session-status ${done ? "is-done" : ""}`}>{done ? "CONCLUÍDO" : index === finishedThisWeek ? "PRÓXIMO" : "ABERTO"}</span><ArrowRight className="session-arrow" size={17} /></Link>;
            }) ?? <div className="empty-program">Este programa está pronto para explorar. <Link href="/programs">Escolher um treino <ArrowRight size={14} /></Link></div>}</div>
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
