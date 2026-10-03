:root {
  --bg: #f4f7fb;
  --panel: rgba(255, 255, 255, 0.9);
  --panel-strong: #ffffff;
  --text: #122033;
  --muted: #5d6c84;
  --primary: #2a7de1;
  --primary-soft: #e9f2ff;
  --green: #22a06b;
  --green-soft: #ebfaf3;
  --gold: #d48f1f;
  --gold-soft: #fff4e5;
  --purple: #7b61ff;
  --purple-soft: #f2edff;
  --danger: #e14d43;
  --border: rgba(18, 32, 51, 0.08);
  --shadow: 0 16px 40px rgba(18, 32, 51, 0.08);
}

* {
  box-sizing: border-box;
}

html, body, #root {
  margin: 0;
  min-height: 100%;
  height: 100%;
  font-family: 'Cairo', sans-serif;
  background: linear-gradient(135deg, #eef4ff 0%, #f4f7fb 100%);
  color: var(--text);
}

body {
  min-height: 100vh;
}

button {
  font-family: inherit;
}

.page-shell {
  max-width: 1280px;
  margin: 0 auto;
  padding: 32px 24px 48px;
}

.topbar,
.hero,
.panel-header,
.initiative-head,
.progress-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.topbar {
  margin-bottom: 28px;
}

.eyebrow {
  margin: 0 0 8px;
  font-size: 0.75rem;
  color: var(--primary);
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

h1, h2, h3, h4, p {
  margin: 0;
}

h1 {
  font-size: clamp(2rem, 2vw + 1rem, 3rem);
}

.hero {
  background: linear-gradient(135deg, #0f2d55 0%, #1a4d8a 100%);
  border-radius: 24px;
  padding: 28px 30px;
  color: white;
  margin-bottom: 22px;
  box-shadow: var(--shadow);
}

.muted {
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 10px;
  font-size: 1rem;
}

.hero h2 {
  font-size: 1.8rem;
}

.score-box {
  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.22);
  border-radius: 18px;
  padding: 16px 26px;
  text-align: center;
  min-width: 150px;
}

.score-box strong {
  display: block;
  font-size: 2.4rem;
  line-height: 1;
}

.score-box span {
  font-size: 0.85rem;
  opacity: 0.9;
}

.kpis {
  display: grid;
  grid-template-columns: repeat(4, minmax(180px, 1fr));
  gap: 18px;
  margin-bottom: 26px;
}

.card {
  border-radius: 20px;
  padding: 20px 18px;
  border: 1px solid var(--border);
  background: var(--panel);
  box-shadow: var(--shadow);
}

.kpi {
  display: flex;
  flex-direction: column;
  gap: 12px;
  min-height: 110px;
}

.kpi span {
  font-size: 0.85rem;
  color: var(--muted);
}

.kpi strong {
  font-size: 2rem;
}

.kpi.green {
  background: var(--green-soft);
}

.kpi.blue {
  background: var(--primary-soft);
}

.kpi.gold {
  background: var(--gold-soft);
}

.kpi.purple {
  background: var(--purple-soft);
}

.content-grid {
  display: grid;
  grid-template-columns: minmax(0, 2.2fr) minmax(280px, 1fr);
  gap: 20px;
}

.panel {
  background: var(--panel);
  border: 1px solid var(--border);
  border-radius: 22px;
  box-shadow: var(--shadow);
  padding: 20px;
}

.panel-header {
  margin-bottom: 18px;
}

.panel-header h3 {
  font-size: 1.2rem;
}

.panel-header button {
  border: none;
  background: var(--primary-soft);
  color: var(--primary);
  border-radius: 12px;
  padding: 10px 14px;
  font-weight: 700;
  cursor: pointer;
}

.initiative-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.initiative-item {
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 16px;
  background: var(--panel-strong);
}

.initiative-head {
  margin-bottom: 10px;
}

.initiative-head h4 {
  font-size: 1.05rem;
}

.initiative-head span,
.initiative-item small {
  color: var(--muted);
}

.progress-row {
  gap: 12px;
  margin-bottom: 8px;
}

.progress-bar {
  flex: 1;
  height: 10px;
  background: #e7edf7;
  border-radius: 999px;
  overflow: hidden;
}

.progress-bar span {
  display: block;
  height: 100%;
  border-radius: inherit;
  background: linear-gradient(90deg, #2a7de1 0%, #2fb3e8 100%);
}

.stack-column {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.timeline,
.risk-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.timeline li,
.risk-list li {
  background: #f5f8ff;
  border-radius: 12px;
  padding: 12px 14px;
  border: 1px solid rgba(42, 125, 225, 0.08);
  color: var(--text);
  line-height: 1.7;
}

.warning {
  border-color: rgba(225, 77, 67, 0.12);
}

.warning .risk-list li {
  background: #fff5f4;
  border-color: rgba(225, 77, 67, 0.08);
}

.status-pill {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(34, 160, 107, 0.1);
  color: var(--green);
  border: 1px solid rgba(34, 160, 107, 0.18);
  border-radius: 999px;
  padding: 10px 16px;
  font-weight: 700;
}

.status-dot {
  width: 10px;
  height: 10px;
  background: var(--green);
  border-radius: 50%;
  display: inline-block;
}

@media (max-width: 960px) {
  .kpis {
    grid-template-columns: repeat(2, minmax(160px, 1fr));
  }

  .content-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 600px) {
  .page-shell {
    padding: 20px 16px 32px;
  }

  .hero,
  .topbar,
  .panel-header,
  .initiative-head,
  .progress-row {
    display: block;
  }

  .hero {
    padding: 20px 18px;
  }

  .score-box {
    margin-top: 18px;
  }

  .kpis {
    grid-template-columns: 1fr;
  }
}
