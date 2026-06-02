import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "案例中心" };

const cases = [
  [["企业培训", "某跨国科技企业 CRM 系统全国推广", "为某跨国科技企业提供 CRM 系统全周期培训方案，覆盖全国 30+ 城市，培训员工 2000+ 人，系统上线后客户管理效率提升 40%。"],["留学服务", "2024 年秋季常春藤留学直通车", "帮助 15 名学员成功申请美国常春藤盟校及英国 G5 名校，录取率 100%，其中 3 人获得全额奖学金。"]],
  [["管理咨询", "某贸易公司风控管理体系搭建", "为某大型贸易公司搭建完整风控管理体系，实现交易风险可视化、决策流程标准化，年度风险损失降低 65%。"],["企业培训", "某金融科技公司领导力发展项目", "为某金融科技公司高管团队提供为期 6 个月的领导力发展项目，团队协作效率提升 35%。"]],
  [["留学服务", "新加坡名校研究生直通车", "帮助 20+ 名学员成功申请新加坡国立大学、南洋理工大学研究生项目，录取率 95%。"],["管理咨询", "某集团企业数字化转型培训", "为某集团企业提供数字化转型全周期培训，涵盖系统操作、流程再造、文化变革三大板块。"]],
];

export default function Cases() {
  return (
    <div>
      <section className="bg-gradient-to-br from-brand-900 to-brand-700 text-white py-20">
        <div className="container-page text-center">
          <p className="text-gold-400 text-sm tracking-widest uppercase mb-2">CASE STUDIES</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">案例中心</h1>
          <p className="text-gray-300 text-lg">见证专业的力量</p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page">
          {cases.map((row, ri) => (
            <div key={ri} className="grid md:grid-cols-2 gap-8 mb-8">
              {row.map(([tag, title, desc]) => (
                <div key={title} className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="h-48 bg-gradient-to-br from-brand-100 to-brand-200 flex items-center justify-center text-6xl">
                    {tag === "企业培训" ? "🏢" : tag === "留学服务" ? "🎓" : "🛡️"}
                  </div>
                  <div className="p-6">
                    <span className="text-xs text-gold-500 font-medium bg-gold-50 px-2 py-1 rounded">{tag}</span>
                    <h3 className="text-xl font-bold text-brand-900 mt-3 mb-2">{title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
