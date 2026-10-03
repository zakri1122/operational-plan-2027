import React from 'react';

export default function Header({ pageTitle }) {
  return (
    <header className="main-header">
      <div>
        <p className="eyebrow">التحكم الإداري</p>
        <h2>{pageTitle}</h2>
      </div>

      <div className="header-actions">
        <button type="button" className="ghost-btn">تصدير</button>
        <button type="button" className="primary-btn">إضافة جديد</button>
      </div>
    </header>
  );
}
