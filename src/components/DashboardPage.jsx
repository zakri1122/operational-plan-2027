import React from 'react';
import { summary, kpis, priorities, quarterlyPlan, risks, actionCenter, milestones } from '../data';

export default function DashboardPage() {
  return (
    <>
      <section className="hero">
        <div>
          <p className="muted">{summary.subtitle}</p>
          <h2>مؤشرات الأداء الرئيسية</h2>
          <small>{summary.owner}</small>
        </div>

        <div className="score-box">
          <strong>{summary.score}</strong>
          <span>التقدم العام</span>
        </div>
      </section>

      <section className="kpis">
        {kpis.map((item) => (
          <article key={item.label} className={`card kpi ${item.tone}`}>
            <span>{item.label}</span>
            <strong>{item.value}</strong>
          </article>
        ))}
      </section>

      <section className="content-grid">
        <div className="panel">
          <div className="panel-header">
            <h3>المبادرات الرئيسية</h3>
            <button type="button">عرض التفاصيل</button>
          </div>

          <div className="initiative-list">
            {priorities.map((initiative) => (
              <div key={initiative.name} className="initiative-item">
                <div className="initiative-head">
                  <h4>{initiative.name}</h4>
                  <span>{initiative.owner}</span>
                </div>

                <div className="target-row">
                  <span>{initiative.target}</span>
                </div>

                <div className="progress-row">
                  <div className="progress-bar">
                    <span style={{ width: `${initiative.progress}%` }} />
                  </div>
                  <strong>{initiative.progress}%</strong>
                </div>

                <div className="initiative-footer">
                  <small>آخر موعد: {initiative.deadline}</small>
                </div>
              </div>
            ))}
          </div>
        </div>

        <aside className="stack-column">
          <div className="panel">
            <div className="panel-header">
              <h3>الجدول الزمني</h3>
            </div>
            <ul className="timeline">
              {quarterlyPlan.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="panel warning">
            <div className="panel-header">
              <h3>المخاطر الرئيسية</h3>
            </div>
            <ul className="risk-list">
              {risks.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </aside>
      </section>

      <section className="bottom-grid">
        <div className="panel">
          <div className="panel-header">
            <h3>مركز الإجراءات</h3>
          </div>

          <div className="action-grid">
            {actionCenter.map((item) => (
              <div key={item.label} className={`action-item ${item.tone}`}>
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </div>
            ))}
          </div>
        </div>

        <div className="panel">
          <div className="panel-header">
            <h3>المراحل المهمة</h3>
          </div>

          <div className="milestones">
            {milestones.map((item) => (
              <div key={item.title} className="milestone-item">
                <div className="milestone-dot" />
                <div>
                  <strong>{item.title}</strong>
                  <small>{item.date}</small>
                </div>
                <span className="milestone-status">{item.status}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
