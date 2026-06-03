import { Metadata } from "next";

export const metadata: Metadata = { title: "联系我们" };

export default function Contact() {
  return (
    <div>
      <section className="bg-gradient-to-br from-brand-900 to-brand-700 text-white py-20">
        <div className="container-page text-center">
          <p className="text-gold-400 text-sm tracking-widest uppercase mb-2">CONTACT</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">联系我们</h1>
          <p className="text-gray-300 text-lg">期待与您的交流</p>
        </div>
      </section>
      <section className="section-pad">
        <div className="container-page grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-brand-900 mb-6">发送消息</h2>
            <form className="space-y-5">
              {[
                ["姓名", "text", "请输入姓名"],
                ["邮箱", "email", "请输入邮箱"],
                ["电话", "tel", "请输入电话"],
                ["咨询类型", "select", ""],
                ["留言内容", "textarea", "请描述您的需求..."],
              ].map(([label, type, placeholder], i) => (
                <div key={label}>
                  <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
                  {type === "select" ? (
                    <select className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none text-gray-700">
                      <option>领导力培训</option><option>产品培训</option><option>出国留学</option><option>风控管理</option><option>其他</option>
                    </select>
                  ) : type === "textarea" ? (
                    <textarea rows={4} placeholder={placeholder} className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none resize-none" />
                  ) : (
                    <input type={type} placeholder={placeholder} className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none" />
                  )}
                </div>
              ))}
              <button type="submit" className="btn-primary w-full">提交咨询</button>
            </form>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-brand-900 mb-6">联系方式</h2>
            <div className="space-y-6">
              {[
                ["📍", "总部地址", "香港特别行政区"],
                ["📧", "电子邮箱", "info@ninecreditedu.hk"],
                ["📞", "联系电话", "+852 XXXX XXXX"],
                ["🕐", "工作时间", "周一至周五 9:00-18:00"],
              ].map(([icon, label, value]) => (
                <div key={label} className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center text-xl flex-shrink-0">{icon}</div>
                  <div>
                    <p className="text-sm text-gray-400">{label}</p>
                    <p className="font-medium text-brand-900">{value}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 p-6 bg-brand-50 rounded-2xl">
              <h3 className="font-bold text-brand-900 mb-2">加入九信教育讲师团队</h3>
              <p className="text-sm text-gray-500 mb-4">我们正在全球范围内招募各领域专家和实战精英。</p>
              <a href="mailto:hr@ninecreditedu.hk" className="text-brand-500 font-medium hover:underline">发送简历 →</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
