import { Metadata } from "next";

export const metadata: Metadata = { title: "关于我们" };

export default function About() {
  return (
    <div>
      <section className="bg-gradient-to-br from-brand-900 to-brand-700 text-white py-20">
        <div className="container-page text-center">
          <p className="text-gold-400 text-sm tracking-widest uppercase mb-2">ABOUT US</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">关于九信教育</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">九鼎之信，育人成才</p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-brand-900 mb-6">我们的故事</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              九信教育（Nine Credit Education）成立于 2019 年，总部设在香港，是一家提供教育培训、技术研发、文案支持、管理服务的专业教育机构。
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              我们秉持"专业驱动交易，信任成就价值"的教学理念，致力于培育具有国际视野与风险意识的专业人才。通过多元化的课程设计和全周期的价值链条，构建了极具竞争力的育人体系。
            </p>
            <p className="text-gray-600 leading-relaxed">
              深耕行业多年，累计服务企业 100+ 家，培训人次超过 5000 人，与国内外多所知名高校及企业建立了长期战略合作关系。
            </p>
          </div>
          <div className="bg-gradient-to-br from-brand-100 to-brand-200 rounded-2xl h-[400px] flex items-center justify-center text-8xl">
            🏛️
          </div>
        </div>
      </section>

      <section className="section-pad bg-gray-50">
        <div className="container-page text-center">
          <h2 className="text-3xl font-bold text-brand-900 mb-12">核心价值观</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              ["诚信为本", "九鼎之信，以诚立身。我们视诚信为教育的基石，对每一位学员和企业客户负责。"],
              ["专业导向", "汇聚行业顶尖师资，自主研发课程体系，确保教学内容前沿、实用、可落地。"],
              ["创造价值", "不只传授知识，更致力于帮助学员和企业实现可量化的成长与突破。"],
            ].map(([t, d]) => (
              <div key={t} className="bg-white rounded-2xl p-8 shadow-sm">
                <div className="text-4xl mb-4">{["💎","🧠","🌟"][['诚信为本','专业导向','创造价值'].indexOf(t as string)]}</div>
                <h3 className="text-xl font-bold text-brand-900 mb-3">{t}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
