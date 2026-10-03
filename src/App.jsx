const summary = {
  title: 'الخطة التشغيلية 2027',
  subtitle: 'خطة تنفيذية استراتيجية للتنمية التشغيلية والمحورية',
  score: '92%',
  status: 'على المسار الصحيح',
};

const kpis = [
  { label: 'الأهداف المنجزة', value: '18/20', tone: 'green' },
  { label: 'التنفيذ الشهري', value: '76%', tone: 'blue' },
  { label: 'معدل رضا الفرق', value: '4.8/5', tone: 'gold' },
  { label: 'الاستثمار المخصص', value: '8.4M', tone: 'purple' },
];

const initiatives = [
  { name: 'تحسين تجربة المرضى', progress: 84, owner: 'إدارة الخدمات', deadline: '2027-02-15' },
  { name: 'رفع كفاءة الأمان والامتثال', progress: 72, owner: 'الشؤون التنظيمية', deadline: '2027-03-20' },
  { name: 'التحول الرقمي للعمليات', progress: 91, owner: 'الدعم التقني', deadline: '2027-04-10' },
  { name: 'تطوير الكوادر البشرية', progress: 67, owner: 'إدارة الموارد البشرية', deadline: '2027-05-05' },
];

const timeline = [
  'ربع أول: إطلاق الخطة التشغيلية وتحديد أولويات التنفيذ',
  'ربع ثاني: تنفيد المشاريع الاستراتيجية والبدء بالقياس',
  'ربع ثالث: تحسين الأداء ومراجعة التحديات التشغيلية',
  'ربع رابع: تقييم النتائج وفتح دورة تحسين جديدة',
];

const risks = [
  'محدودية الموارد البشرية في بعض الأقسام',
  'تأخر تنفيذ بعض المشاريع التقنية بسبب الاعتماد الخارجي',
  'تفاوت في سرعة اعتماد الفرق على النظام الجديد',
];

export default function App() {
  return (
    <div className="page-shell">
      <header className="topbar">
        <div>
          <p className="eyebrow">لوحة القيادة</p>
          <h1>{summary.title}</h1>
        </div>
        <div className="status-pill">
          <span className="status-dot" />
          {summary.status}
        </div>
      </header>

      <section className="hero">
        <div>
          <p className="muted">{summary.subtitle}</p>
          <h2>مؤشرات الأداء الرئيسية</h2>
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
            <button>عرض التفاصيل</button>
          </div>

          <div className="initiative-list">
            {initiatives.map((initiative) => (
              <div key={initiative.name} className="initiative-item">
                <div className="initiative-head">
                  <h4>{initiative.name}</h4>
                  <span>{initiative.owner}</span>
                </div>
                <div className="progress-row">
                  <div className="progress-bar">
                    <span style={{ width: `${initiative.progress}%` }} />
                  </div>
                  <strong>{initiative.progress}%</strong>
                </div>
                <small>آخر موعد: {initiative.deadline}</small>
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
              {timeline.map((item) => (
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
    </div>
  );
}
