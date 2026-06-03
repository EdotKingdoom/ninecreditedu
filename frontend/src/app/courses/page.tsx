import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = { title: "课程中心" };

const courses = [
  { icon: "🏢", title: "领导力培训", cat: "管理类", price: "¥4,800", desc: "针对企业中高层管理人员，提升战略思维、团队管理及决策能力。", modules: ["管理沟通", "团队建设", "愿景规划", "决策分析"] },
  { icon: "💼", title: "产品培训", cat: "技能类", price: "¥3,600", desc: "专注商学院课程、CRM系统操作等，帮助员工快速掌握核心业务工具与知识。", modules: ["CRM操作", "市场分析", "交易技巧", "产品演示"] },
  { icon: "🎓", title: "出国留学对接", cat: "留学类", price: "咨询报价", desc: "整合全球教育资源，为学生提供一站式背景提升、学校申请及职业规划。", modules: ["名校直连", "文书指导", "签证服务", "职业规划"] },
  { icon: "🛡️", title: "风控管理实训", cat: "管理类", price: "¥6,800", desc: "为企业搭建完整风控管理体系，实现交易风险可视化、决策流程标准化。", modules: ["风险评估", "流程设计", "系统搭建", "审计追踪"] },
];

export default function Courses() {
  return (
    <div>
      <section className="bg-gradient-to-br from-brand-900 to-brand-700 text-white py-20">
        <div className="container-page text-center">
          <p className="text-gold-400 text-sm tracking-widest uppercase mb-2">COURSES</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">课程中心</h1>
          <p className="text-gray-300 text-lg">系统化知识体系 × 场景化实战训练 × 全方位指导支持</p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page">
          <div className="flex gap-4 mb-12 flex-wrap justify-center">
            {["全部课程", "管理类", "技能类", "留学类"].map((f) => (
              <button key={f} className={`px-5 py-2 rounded-full text-sm font-medium transition ${f === "全部课程" ? "bg-brand-500 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}>{f}</button>
            ))}
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {courses.map((c) => (
              <div key={c.title} className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow flex flex-col">
                <div className="h-40 bg-gradient-to-br from-brand-100 to-brand-200 flex items-center justify-center text-6xl">{c.icon}</div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <span className="text-xs text-gold-500 bg-gold-50 px-2 py-1 rounded">{c.cat}</span>
                      <h3 className="text-xl font-bold text-brand-900 mt-2">{c.title}</h3>
                    </div>
                    <span className="text-brand-500 font-bold text-lg">{c.price}</span>
                  </div>
                  <p className="text-gray-500 text-sm mb-4">{c.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {c.modules.map((m) => (
                      <span key={m} className="text-xs bg-gray-50 text-gray-600 px-2 py-1 rounded">{m}</span>
                    ))}
                  </div>
                  <Link href="/contact" className="btn-primary text-sm text-center mt-auto">立即报名</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
