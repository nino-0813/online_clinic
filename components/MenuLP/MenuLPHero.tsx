import { ArrowRight, CheckCircle } from "lucide-react";
import type { MenuItem } from "@/lib/menu-data";

const colorMap: Record<string, { badge: string; accent: string; button: string; buttonHover: string }> = {
  blue: { badge: "bg-blue-50 border-blue-200 text-blue-700", accent: "text-blue-600", button: "from-blue-600 to-blue-700", buttonHover: "hover:from-blue-700 hover:to-blue-800" },
  pink: { badge: "bg-pink-50 border-pink-200 text-pink-700", accent: "text-pink-600", button: "from-pink-600 to-pink-700", buttonHover: "hover:from-pink-700 hover:to-pink-800" },
  teal: { badge: "bg-teal-50 border-teal-200 text-teal-700", accent: "text-teal-600", button: "from-teal-600 to-teal-700", buttonHover: "hover:from-teal-700 hover:to-teal-800" },
  green: { badge: "bg-green-50 border-green-200 text-green-700", accent: "text-green-600", button: "from-green-600 to-green-700", buttonHover: "hover:from-green-700 hover:to-green-800" },
  indigo: { badge: "bg-indigo-50 border-indigo-200 text-indigo-700", accent: "text-indigo-600", button: "from-indigo-600 to-indigo-700", buttonHover: "hover:from-indigo-700 hover:to-indigo-800" },
  orange: { badge: "bg-orange-50 border-orange-200 text-orange-700", accent: "text-orange-600", button: "from-orange-600 to-orange-700", buttonHover: "hover:from-orange-700 hover:to-orange-800" },
};

export default function MenuLPHero({ item }: { item: MenuItem }) {
  const colors = colorMap[item.color];
  return (
    <section className="relative pt-24 pb-16 lg:pt-28 lg:pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-gray-100/50 to-transparent" />
      <div className="relative max-w-7xl mx-auto px-4">
        <div className="max-w-3xl">
          <div className={`inline-flex items-center gap-2 border ${colors.badge} px-4 py-2 rounded-full text-sm font-semibold mb-6`}>
            {item.name}
          </div>
          <h1 className="text-3xl lg:text-4xl xl:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
            <span className={colors.accent}>{item.heroTitle}</span>
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            {item.heroSubtitle}
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8">
            {item.benefits.slice(0, 4).map((b) => (
              <li key={b.label} className="flex items-center gap-2">
                <CheckCircle size={18} className="text-teal-500 flex-shrink-0" />
                <span className="text-gray-700 text-sm font-medium">{b.label} … {b.text}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="#contact"
              className={`inline-flex items-center justify-center gap-2 bg-gradient-to-r ${colors.button} ${colors.buttonHover} text-white px-8 py-4 rounded-2xl font-bold text-base transition-all group`}
            >
              診療予約をする
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#flow"
              className="inline-flex items-center justify-center gap-2 bg-white border-2 border-gray-200 text-gray-700 px-8 py-4 rounded-2xl font-bold text-base hover:border-gray-300 transition-all"
            >
              診療の流れを見る
            </a>
          </div>
          <p className="mt-6 text-gray-500 text-sm">
            ※医師の判断により処方できない場合があります。
          </p>
        </div>
      </div>
    </section>
  );
}
