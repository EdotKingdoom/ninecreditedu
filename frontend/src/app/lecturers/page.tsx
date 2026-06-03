import { Metadata } from "next";

export const metadata: Metadata = { title: "讲师团队" };

const lecturers = [
  { name: "张明远教授", title: "首席教育官", dept: "领导力发展学院", exp: "15年", avatar: "张", bio: "前香港某知名商学院副院长，专注领导力发展与组织行为学研究。" },
  { name: "李思涵博士", title: "课程研发总监", dept: "产品培训学院", exp: "12年", avatar: "李", bio: "伦敦政经学院博士，曾在多家跨国金融科技企业担任培训总监。" },
  { name: "王建谚", title: "资深交易培训师", dept: "金融交易学院", exp: "10年", avatar: "王", bio: "前国际对冲基金交易员，专注金融衍生品市场与流动性分析。" },
  { name: "陈琪琪", title: "高级讲师", dept: "商学院", exp: "8年", avatar: "陈", bio: "专注企业数字化转型与CRM系统培训，服务过30+家头部企业。" },
  { name: "赵雅文", title: "留学规划顾问", dept: "国际教育学院", exp: "10年", avatar: "赵", bio: "前新东方留学顾问，累计帮助500+学员成功申请全球顶尖名校。" },
  { name: "林志远", title: "风控顾问", dept: "风控管理学院", exp: "13年", avatar: "林", bio: "FRM持证人，曾为多家上市公司搭建风控体系，实战经验丰富。" },
];

export default function Lecturers() {
  return (
    <div>
      <section className="bg-gradient-to-br from-brand-900 to-brand-700 text-white py-20">
        <div className="container-page text-center">
          <p className="text-gold-400 text-sm tracking-widest uppercase mb-2">OUR TEAM</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">讲师团队</h1>
          <p className="text-gray-300 text-lg">汇聚行业精英，传递专业力量</p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page">
          <div className="grid md:grid-cols-3 gap-8">
            {lecturers.map((l) => (
              <div key={l.name} className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="h-32 bg-gradient-to-br from-brand-200 to-brand-400 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-white text-brand-500 flex items-center justify-center text-2xl font-bold shadow-lg">{l.avatar}</div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-lg font-bold text-brand-900">{l.name}</h3>
                  <p className="text-gold-500 text-sm font-medium mt-1">{l.title}</p>
                  <div className="flex justify-center gap-4 mt-3 text-xs text-gray-400">
                    <span>📍 {l.dept}</span>
                    <span>⏳ {l.exp}经验</span>
                  </div>
                  <p className="text-gray-500 text-sm mt-4 leading-relaxed">{l.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-brand-900 text-white text-center">
        <div className="container-page">
          <h2 className="text-3xl font-bold mb-4">加入我们的讲师团队</h2>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">九信教育正在全球范围内招募各领域专家、实战精英，共同培育具备国际视野的未来人才。</p>
          <a href="mailto:hr@ninecreditedu.hk" className="btn-gold text-lg px-8 py-4 inline-block">立即申请</a>
        </div>
      </section>
    </div>
  );
}
