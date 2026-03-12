import { Phone, Mail, MapPin } from "lucide-react";

const footerLinks = {
  診療科目: [
    { label: "AGA（薄毛）治療", href: "/menu/aga" },
    { label: "ED治療", href: "/menu/ed" },
    { label: "ダイエット外来", href: "/menu/diet-male" },
    { label: "ニキビ・スキンケア", href: "/menu/acne" },
    { label: "禁煙外来", href: "/menu/smoking-cessation" },
    { label: "アレルギー治療", href: "/menu/allergy" },
  ],
  サービス情報: [
    { label: "オンラインクリニックとは", href: "/about" },
    { label: "ご利用の流れ", href: "/#how-it-works" },
    { label: "料金プラン", href: "/#pricing" },
    { label: "よくある質問", href: "/#faq" },
    { label: "お問い合わせ", href: "/#contact" },
    { label: "FC加盟店募集", href: "/fc" },
  ],
  クリニック情報: [
    { label: "クリニックについて", href: "/about" },
    { label: "医師紹介", href: "#doctors" },
    { label: "運営会社", href: "https://growx-hd.com/", external: true },
    { label: "プライバシーポリシー", href: "#" },
    { label: "特定商取引法に基づく表記", href: "#" },
    { label: "利用規約", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 py-14 lg:py-16">
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-teal-400 flex items-center justify-center">
                <span className="text-white font-bold text-xs">オン</span>
              </div>
              <div>
                <div className="text-white font-extrabold text-lg leading-none">みんなのオンクリ</div>
                <div className="text-gray-500 text-xs mt-0.5">オンラインクリニック</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              スマホひとつで、いつでもどこでも診療完結。
              診察料無料・24時間受付のオンラインクリニックです。
              あなたの健康をトータルサポートします。
            </p>
            <div className="flex flex-col gap-3 text-sm">
              <div className="flex items-center gap-2.5 text-gray-400">
                <Phone size={15} className="text-blue-400 flex-shrink-0" />
                <span>0120-000-000（受付：9:00〜21:00）</span>
              </div>
              <div className="flex items-center gap-2.5 text-gray-400">
                <Mail size={15} className="text-blue-400 flex-shrink-0" />
                <span>contact@medical-connect.jp</span>
              </div>
              <div className="flex items-start gap-2.5 text-gray-400">
                <MapPin size={15} className="text-blue-400 flex-shrink-0 mt-0.5" />
                <span>〒150-0043 東京都渋谷区道玄坂一丁目10番8号 渋谷道玄坂東急ビル2階-C</span>
              </div>
              <div className="pt-2 border-t border-gray-700 mt-2">
                <a
                  href="https://growx-hd.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 text-xs hover:text-blue-400 transition-colors"
                >
                  運営：GrowX Holdings株式会社
                </a>
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-bold text-sm mb-4">{category}</h4>
              <ul className="flex flex-col gap-2.5">
                {links.map(({ label, href, external }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target={external ? "_blank" : undefined}
                      rel={external ? "noopener noreferrer" : undefined}
                      className="text-gray-400 text-sm hover:text-blue-400 transition-colors"
                    >
                      {label}
                      {external && " ↗"}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-gray-500 text-xs">
            © 2025 みんなのオンクリ（運営：GrowX Holdings株式会社）All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-xs text-gray-500">
            <a href="#" className="hover:text-blue-400 transition-colors">プライバシーポリシー</a>
            <a href="#" className="hover:text-blue-400 transition-colors">利用規約</a>
            <a href="#" className="hover:text-blue-400 transition-colors">特定商取引法</a>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <p className="text-gray-600 text-xs leading-relaxed">
            ＊当クリニックは厚生労働省のガイドラインに基づいてオンライン診療を提供しています。
            ＊お薬の処方には医師による診察が必要です。
            ＊緊急の場合は速やかに最寄りの医療機関にご相談ください。
            ＊当サービスは15歳未満の方はご利用いただけません。
          </p>
        </div>
      </div>
    </footer>
  );
}
