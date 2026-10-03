import React from 'react';

const projects = [
  { name: 'تحسين تجربة المرضى', status: 'نشط', owner: 'إدارة الخدمات', progress: 84, amount: '1.4M' },
  { name: 'التحول الرقمي', status: 'قيد التنفيذ', owner: 'الدعم التقني', progress: 91, amount: '2.1M' },
  { name: 'الأمن والامتثال', status: 'مراجعة', owner: 'الشؤون التنظيمية', progress: 72, amount: '780K' },
  { name: 'تطوير الموارد البشرية', status: 'مستهدف', owner: 'الإدارة', progress: 67, amount: '640K' },
];

export default function ProjectsPage() {
  return (
    <div className="page-panel">
      <div className="panel-header">
        <h3>قائمة المشاريع</h3>
        <button type="button" className="primary-btn">مشروع جديد</button>
      </div>

      <div className="project-grid">
        {projects.map((project) => (
          <div key={project.name} className="project-card">
            <div className="project-header">
              <strong>{project.name}</strong>
              <span className="pill">{project.status}</span>
            </div>

            <div className="project-meta">
              <span>{project.owner}</span>
              <span>{project.amount}</span>
            </div>

            <div className="progress-row">
              <div className="progress-bar">
                <span style={{ width: `${project.progress}%` }} />
              </div>
              <strong>{project.progress}%</strong>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
