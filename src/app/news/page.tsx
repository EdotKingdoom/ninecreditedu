import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = { title: "新闻动态" };

const news = [
  { date: "2026-04-15", cat: "公司动态", title: "九信教育荣获香港教育行业卓越品牌奖", summary: "在香港教育行业年度评选中，九信教育凭借创新的课程体系和卓越的教学成果，荣获卓越品牌奖。" },
  { date: "2026-03-18", cat: "公司动态", title: "九信教育全球讲师招募计划正式启动", summary: "随着公司香港数字化新总部的启用及全球业务的快速发展，我们诚邀各领域专家、实战精英加入讲师团队。" },
  { date: "2026-03-03", cat: "业务进展", title: "九信教育香港总部乔迁新址，开启发展新篇章", summary: "为了更好服务全球客户，九信教育宣布其位于香港中心区的全新数字化办公中心正式启用。" },
  { date: "2026-03-03", cat: "公司动态", title: "第十二届「九鼎人才」领导力峰会在沪圆满落幕", summary: "本次峰会汇集了超过50家金融及技术服务领域的领军企业，共同探讨数字化人才培养模式。" },
  { date: "2026-02-20", cat: "行业资讯", title: "香港金融科技人才缺口持续扩大，专业培训需求激增", summary: "据最新行业报告显示，香港金融科技领域专业人才缺口已达 5000+ 人，相关培训需求同比增长 120%。" },
  { date: "2026-02-10", cat: "业务进展", title: "九信教育与新加坡多所高校签署战略合作协议", summary: "双方将在师资共享、课程研发、留学对接等领域展开深度合作，共同培养国际化金融科技人才。" },
];

export default function News() {
  return (
    <div>
      <section className="bg-gradient-to-br from-brand-900 to-brand-700 text-white py-20">
        <div className="container-page text-center">
          <p className="text-gold-400 text-sm tracking-widest uppercase mb-2">NEWS</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">新闻动态</h1>
          <p className="text-gray-300 text-lg">获取行业前沿资讯与公司最新动态</p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page max-w-4xl">
          {news.map((n) => (
            <div key={n.title} className="py-8 border-b border-gray-100 last:border-0 hover:bg-gray-50 -mx-4 px-4 rounded-lg transition-colors">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs text-gold-500 bg-gold-50 px-2 py-1 rounded">{n.cat}</span>
                <span className="text-xs text-gray-400">{n.date}</span>
              </div>
              <h3 className="text-lg font-bold text-brand-900 mb-2">{n.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{n.summary}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
