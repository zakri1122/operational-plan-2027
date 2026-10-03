import React from 'react';

const tasks = [
  { title: 'مراجعة مستندات الأمان', owner: 'أحمد', status: 'قيد التنفيذ', date: '2027-01-12' },
  { title: 'تحديث الخطة التشغيلية', owner: 'سارة', status: 'مكتمل', date: '2027-01-08' },
  { title: 'تدريب فريق الدعم', owner: 'محمد', status: 'مجدول', date: '2027-01-20' },
  { title: 'تحليل مؤشرات KPI', owner: 'ليلى', status: 'قيد التنفيذ', date: '2027-01-15' },
];

export default function TasksPage() {
  return (
    <div className="page-panel">
      <div className="panel-header">
        <h3>المهام اليومية</h3>
        <button type="button" className="primary-btn">إضافة مهمة</button>
      </div>

      <div className="task-list">
        {tasks.map((task) => (
          <div key={task.title} className="task-item">
            <div>
              <strong>{task.title}</strong>
              <small>{task.owner}</small>
            </div>
            <div className="task-meta">
              <span>{task.date}</span>
              <span className="pill status-pill-soft">{task.status}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
