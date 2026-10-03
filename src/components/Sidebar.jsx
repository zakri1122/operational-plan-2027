import React from 'react';

export default function Sidebar({ activePage, setActivePage }) {
  const navItems = [
    { key: 'dashboard', label: 'لوحة القيادة', icon: '▣' },
    { key: 'projects', label: 'المشاريع', icon: '◫' },
    { key: 'tasks', label: 'المهام', icon: '✓' },
    { key: 'reports', label: 'التقارير', icon: '◔' },
    { key: 'settings', label: 'الإعدادات', icon: '⚙' },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <div className="brand-mark">OP</div>
        <div>
          <strong>Operational</strong>
          <small>Plan 2027</small>
        </div>
      </div>

      <nav className="nav-menu">
        {navItems.map((item) => (
          <button
            key={item.key}
            type="button"
            className={`nav-item ${activePage === item.key ? 'active' : ''}`}
            onClick={() => setActivePage(item.key)}
          >
            <span>{item.icon}</span>
            {item.label}
          </button>
        ))}
      </nav>

      <div className="sidebar-footer">
        <div className="mini-card">
          <span>التنفيذ</span>
          <strong>76%</strong>
        </div>
      </div>
    </aside>
  );
}
