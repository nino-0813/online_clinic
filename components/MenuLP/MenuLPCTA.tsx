import { ArrowRight } from "lucide-react";
import type { MenuItem } from "@/lib/menu-data";

const colorMap: Record<string, { button: string; buttonHover: string }> = {
  blue: { button: "from-blue-600 to-blue-700", buttonHover: "hover:from-blue-700 hover:to-blue-800" },
  pink: { button: "from-pink-600 to-pink-700", buttonHover: "hover:from-pink-700 hover:to-pink-800" },
  teal: { button: "from-teal-600 to-teal-700", buttonHover: "hover:from-teal-700 hover:to-teal-800" },
  green: { button: "from-green-600 to-green-700", buttonHover: "hover:from-green-700 hover:to-green-800" },
  indigo: { button: "from-indigo-600 to-indigo-700", buttonHover: "hover:from-indigo-700 hover:to-indigo-800" },
  orange: { button: "from-orange-600 to-orange-700", buttonHover: "hover:from-orange-700 hover:to-orange-800" },
};

export default function MenuLPCTA({ item }: { item: MenuItem }) {
  const colors = colorMap[item.color];
  return (
    <section className="py-16 lg:py-20 bg-gradient-to-b from-gray-50 to-white" id="contact">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-2xl lg:text-3xl font-extrabold text-gray-900 mb-2">
          {item.name}を始める
        </h2>
        <p className="text-gray-600 mb-8">
          診察料0円・24時間受付。まずは予約から。
        </p>
        <a
          href="/#contact"
          className={`inline-flex items-center justify-center gap-2 bg-gradient-to-r ${colors.button} ${colors.buttonHover} text-white px-10 py-4 rounded-2xl font-bold text-lg transition-all group`}
        >
          診療予約をする
          <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
        </a>
        <p className="text-gray-500 text-sm mt-4">
          診察料無料 · 解約自由 · 全国対応
        </p>
      </div>
    </section>
  );
}
