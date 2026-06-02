import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { default: "九信教育 - 专业金融教育培训机构", template: "%s | 九信教育" },
  description: "九信教育(Nine Credit Education)成立于2019年，总部设在香港，提供教育培训、技术研发、留学对接等专业教育服务。",
};

const nav = [
  { href: "/", label: "首页" },
  { href: "/about", label: "关于我们" },
  { href: "/courses", label: "课程中心" },
  { href: "/lecturers", label: "讲师团队" },
  { href: "/cases", label: "案例中心" },
  { href: "/news", label: "新闻动态" },
  { href: "/contact", label: "联系我们" },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-HK">
      <body className="font-sans">
        <header className="fixed top-0 w-full bg-white/95 backdrop-blur shadow-sm z-50">
          <div className="container-page flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2 text-xl font-bold text-brand-500">
              <span className="text-gold-500 text-2xl">◆</span>
              九信教育
            </Link>
            <nav className="hidden lg:flex items-center gap-1">
              {nav.map((n) => (
                <Link key={n.href} href={n.href} className="px-3 py-2 text-sm text-gray-600 hover:text-brand-500 transition-colors rounded-md hover:bg-brand-50">
                  {n.label}
                </Link>
              ))}
              <Link href="/contact" className="btn-primary text-sm ml-3">免费咨询</Link>
            </nav>
            <button className="lg:hidden text-2xl">☰</button>
          </div>
        </header>
        <main className="pt-16">{children}</main>
        <footer className="bg-brand-900 text-white">
          <div className="container-page py-12 grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">九信教育</h3>
              <p className="text-sm text-gray-400 leading-relaxed">Nine Credit Education<br/>成立于2019年，总部香港<br/>专业金融教育培训机构</p>
            </div>
            <div>
              <h4 className="font-bold mb-3">核心服务</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/courses" className="hover:text-gold-400">领导力培训</Link></li>
                <li><Link href="/courses" className="hover:text-gold-400">产品培训</Link></li>
                <li><Link href="/courses" className="hover:text-gold-400">出国留学对接</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3">快速链接</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/about" className="hover:text-gold-400">关于我们</Link></li>
                <li><Link href="/lecturers" className="hover:text-gold-400">讲师团队</Link></li>
                <li><Link href="/cases" className="hover:text-gold-400">成功案例</Link></li>
                <li><Link href="/news" className="hover:text-gold-400">新闻动态</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3">联系我们</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>📍 香港总部</li>
                <li>📧 info@ninecreditedu.hk</li>
                <li>📞 +852 XXXX XXXX</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-brand-800 py-4 text-center text-xs text-gray-500">
            © {new Date().getFullYear()} 九信教育 Nine Credit Education. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
