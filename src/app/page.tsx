import Link from "next/link";

const stats = [
  { value: "2019", label: "成立年份" },
  { value: "100+", label: "服务企业" },
  { value: "5000+", label: "培训人次" },
  { value: "香港", label: "总部所在地" },
];

const services = [
  { icon: "🏢", title: "领导力培训", desc: "针对中高层管理人员，提升战略思维、团队管理与决策能力，含管理沟通、团队建设、愿景规划模块。", href: "/courses" },
  { icon: "💼", title: "产品培训", desc: "专注商学院课程、CRM系统操作等，帮助员工快速掌握核心业务工具与知识，含市场分析、交易技巧。", href: "/courses" },
  { icon: "🎓", title: "出国留学对接", desc: "整合全球教育资源，提供一站式背景提升、名校申请及职业规划，含文书指导、签证服务。", href: "/courses" },
];

const cases = [
  { title: "某跨国科技企业 CRM 系统全国推广", tag: "企业培训", desc: "为某跨国科技企业提供 CRM 系统全周期培训方案，覆盖全国 30+ 城市，培训员工 2000+ 人。" },
  { title: "2024 年秋季常春藤留学直通车", tag: "留学服务", desc: "帮助 15 名学员成功申请美国常春藤盟校及英国 G5 名校，录取率 100%。" },
  { title: "某贸易公司风控管理体系搭建", tag: "管理咨询", desc: "为某贸易公司搭建完整风控管理体系，实现交易风险可视化、决策流程标准化。" },
];

const news = [
  { date: "2026-03-18", tag: "公司动态", title: "九信教育全球讲师招募计划启动" },
  { date: "2026-03-03", tag: "业务进展", title: "九信教育香港总部乔迁新址" },
  { date: "2026-03-03", tag: "公司动态", title: "第十二届「九鼎人才」领导力峰会圆满落幕" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-brand-900 via-brand-700 to-brand-500 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, #D4A574 0%, transparent 50%)" }} />
        <div className="container-page relative py-24 md:py-36">
          <p className="text-gold-400 text-sm tracking-widest uppercase mb-4">NINE CREDIT EDUCATION</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            致力于为全球客户提供<br/>
            <span className="text-gold-400">全方位的教育管理解决方案</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mb-8">
            九信教育秉持"专业驱动交易，信任成就价值"的教学理念，在课程研发与教学实施中强调系统化知识体系、场景化实战训练、全方位指导支持三个维度的结合。
          </p>
          <div className="flex gap-4">
            <Link href="/courses" className="btn-gold text-lg px-8 py-4">浏览课程</Link>
            <Link href="/contact" className="btn-outline border-white text-white hover:bg-white hover:text-brand-700 text-lg px-8 py-4">免费咨询</Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative -mt-10 z-10">
        <div className="container-page">
          <div className="bg-white rounded-2xl shadow-xl grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-100">
            {stats.map((s) => (
              <div key={s.label} className="text-center py-8">
                <div className="text-3xl font-bold text-brand-500">{s.value}</div>
                <div className="text-sm text-gray-500 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="section-pad">
        <div className="container-page text-center">
          <p className="text-gold-500 text-sm tracking-widest uppercase mb-2">CORE MISSION</p>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-900 mb-6">培育具有国际视野与风险意识的专业人才</h2>
          <p className="text-gray-500 max-w-3xl mx-auto text-lg">
            九鼎之信，诚信为本，专业导向，创造社会价值。
            深耕行业多年，累计输出人才超千人，与百余家企业建立长期培训合作。
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="section-pad bg-gray-50">
        <div className="container-page">
          <div className="text-center mb-12">
            <p className="text-gold-500 text-sm tracking-widest uppercase mb-2">SERVICES</p>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-900">主营业务与核心服务</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((s) => (
              <Link key={s.title} href={s.href} className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all border border-gray-100 hover:border-brand-200">
                <div className="text-4xl mb-4">{s.icon}</div>
                <h3 className="text-xl font-bold text-brand-900 mb-3 group-hover:text-brand-500">{s.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm">{s.desc}</p>
                <span className="inline-block mt-4 text-brand-500 text-sm font-medium group-hover:translate-x-1 transition-transform">了解更多 →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Cases */}
      <section className="section-pad">
        <div className="container-page">
          <div className="text-center mb-12">
            <p className="text-gold-500 text-sm tracking-widest uppercase mb-2">CASE STUDIES</p>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-900">见证专业的力量</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {cases.map((c) => (
              <div key={c.title} className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="h-48 bg-gradient-to-br from-brand-100 to-brand-200 flex items-center justify-center text-6xl">
                  {c.tag === "企业培训" ? "🏢" : c.tag === "留学服务" ? "🎓" : "🛡️"}
                </div>
                <div className="p-6">
                  <span className="text-xs text-gold-500 font-medium bg-gold-50 px-2 py-1 rounded">{c.tag}</span>
                  <h3 className="text-lg font-bold text-brand-900 mt-3 mb-2">{c.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News */}
      <section className="section-pad bg-gray-50">
        <div className="container-page">
          <div className="flex justify-between items-end mb-12">
            <div>
              <p className="text-gold-500 text-sm tracking-widest uppercase mb-2">NEWS</p>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-900">获取行业前沿资讯</h2>
            </div>
            <Link href="/news" className="text-brand-500 hover:text-brand-600 font-medium">查看全部 →</Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {news.map((n) => (
              <Link key={n.title} href="/news" className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs text-gold-500 bg-gold-50 px-2 py-1 rounded">{n.tag}</span>
                  <span className="text-xs text-gray-400">{n.date}</span>
                </div>
                <h3 className="font-bold text-brand-900 mb-2 leading-snug">{n.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-brand-700 to-brand-500 py-20">
        <div className="container-page text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">准备好开启您的学习之旅了吗？</h2>
          <p className="text-brand-100 text-lg mb-8 max-w-2xl mx-auto">无论您是企业团队还是个人学员，九信教育都能为您提供量身定制的解决方案。</p>
          <div className="flex justify-center gap-4">
            <Link href="/contact" className="btn-gold bg-white text-brand-700 hover:bg-gray-100 text-lg px-8 py-4">立即咨询</Link>
            <Link href="/courses" className="border-2 border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white hover:text-brand-700 transition-colors text-lg">浏览课程</Link>
          </div>
        </div>
      </section>
    </>
  );
}
