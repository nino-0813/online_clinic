import { Clock, CreditCard, Truck, Smartphone, Shield, UserCheck } from "lucide-react";

const features = [
  {
    icon: CreditCard,
    title: "診察料 完全無料",
    description: "初回・再診ともに診察料は一切かかりません。お薬代と配送料（550円）のみ。",
    color: "from-blue-500 to-blue-600",
    badge: "¥0",
  },
  {
    icon: Clock,
    title: "24時間 365日受付",
    description: "深夜・休日問わず、いつでも受付可能。忙しい方でも自分のペースで受診できます。",
    color: "from-teal-500 to-teal-600",
    badge: "24h",
  },
  {
    icon: Smartphone,
    title: "スマホ完結 最短5分",
    description: "予約からオンライン診察、お薬の処方まで全ての手続きがスマホで完了します。",
    color: "from-indigo-500 to-indigo-600",
    badge: "5分",
  },
  {
    icon: Truck,
    title: "全国どこでもお届け",
    description: "処方されたお薬を自宅・職場・コンビニ等、ご指定の場所にお届けします。",
    color: "from-orange-500 to-orange-600",
    badge: "全国",
  },
  {
    icon: Shield,
    title: "プライバシー完全保護",
    description: "受診歴・処方内容は厳重に管理。配送は目立たないパッケージでお届けします。",
    color: "from-green-500 to-green-600",
    badge: "安心",
  },
  {
    icon: UserCheck,
    title: "経験豊富な医師が担当",
    description: "専門知識を持った医師が一人ひとりに合わせた最適な治療プランをご提案します。",
    color: "from-purple-500 to-purple-600",
    badge: "専門医",
  },
];

export default function Features() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-gray-50 to-white" id="features">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            選ばれる理由
          </div>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">
            メディカルコネクトが
            <br />
            <span className="text-blue-600">選ばれる6つの理由</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-xl mx-auto">
            忙しい現代人のために。病院に行けない・行きにくいすべての方へ。
          </p>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, description, color, badge }) => (
            <div
              key={title}
              className="group bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center flex-shrink-0 shadow-md`}>
                  <Icon size={26} className="text-white" />
                  <div className="absolute -top-2 -right-2 bg-white text-xs font-extrabold px-1.5 py-0.5 rounded-full shadow border border-gray-100 text-gray-800">
                    {badge}
                  </div>
                </div>
                <div className="flex flex-col gap-1.5 flex-1">
                  <h3 className="font-bold text-gray-900 text-lg leading-tight">{title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA banner */}
        <div className="mt-14 bg-gradient-to-r from-blue-600 to-teal-500 rounded-3xl p-8 lg:p-10 text-white text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/4" />
          <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-white/5 translate-y-1/2 -translate-x-1/4" />
          <div className="relative">
            <h3 className="text-2xl lg:text-3xl font-extrabold mb-3">
              今なら初月の薬代が<span className="text-yellow-300">20%OFF</span>
            </h3>
            <p className="text-blue-100 mb-6 text-lg">
              グランドオープン記念キャンペーン実施中！診察料は永久無料です。
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-white text-blue-700 px-8 py-4 rounded-2xl font-extrabold text-lg hover:shadow-xl transition-all"
            >
              無料でスタートする →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
