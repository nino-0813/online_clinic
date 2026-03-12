import { CheckCircle, Zap, Crown, Star } from "lucide-react";

const plans = [
  {
    name: "ライトプラン",
    description: "初めて試してみたい方に",
    price: "2,970",
    unit: "月額（税込）〜",
    icon: Star,
    color: "border-gray-200",
    headerColor: "bg-gray-50",
    iconColor: "text-gray-600",
    badgeColor: "",
    badge: "",
    features: [
      "診察料 0円",
      "月1回のオンライン診察",
      "お薬の処方・配送（550円）",
      "チャットサポート",
      "電子処方箋発行",
    ],
    cta: "ライトプランで始める",
    ctaStyle: "bg-gray-800 text-white hover:bg-gray-900",
  },
  {
    name: "スタンダードプラン",
    description: "最もご利用の多い人気プラン",
    price: "4,400",
    unit: "月額（税込）〜",
    icon: Zap,
    color: "border-blue-500 ring-2 ring-blue-500",
    headerColor: "bg-gradient-to-br from-blue-600 to-blue-700",
    iconColor: "text-white",
    badge: "人気No.1",
    badgeColor: "bg-yellow-400 text-yellow-900",
    features: [
      "診察料 0円",
      "月2回までのオンライン診察",
      "お薬の処方・配送（550円）",
      "優先チャットサポート",
      "電子処方箋発行",
      "月1回の経過確認メール",
      "専門医による治療プラン作成",
    ],
    cta: "スタンダードで始める",
    ctaStyle: "bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 shadow-lg hover:shadow-xl",
  },
  {
    name: "プレミアムプラン",
    description: "本格的に治療に取り組む方へ",
    price: "7,700",
    unit: "月額（税込）〜",
    icon: Crown,
    color: "border-purple-200",
    headerColor: "bg-gradient-to-br from-purple-600 to-purple-700",
    iconColor: "text-white",
    badge: "最高品質",
    badgeColor: "bg-purple-100 text-purple-700",
    features: [
      "診察料 0円",
      "月4回までのオンライン診察",
      "お薬の処方・配送（550円）",
      "24時間チャットサポート",
      "電子処方箋発行",
      "週1回の経過確認",
      "専属医師による治療管理",
      "血液検査キット（年2回）",
      "優先予約枠",
    ],
    cta: "プレミアムで始める",
    ctaStyle: "bg-gradient-to-r from-purple-600 to-purple-700 text-white hover:from-purple-700 hover:to-purple-800 shadow-lg hover:shadow-xl",
  },
];

const campaign = {
  title: "グランドオープン記念キャンペーン",
  items: [
    "初月のお薬代 20%OFF",
    "配送料 初回無料",
    "LINE登録で追加クーポンプレゼント",
  ],
  deadline: "2025年4月30日まで",
};

export default function Pricing() {
  return (
    <section className="py-12 sm:py-20 lg:py-28 bg-gray-50" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-200 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            料金プラン
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">
            シンプルで
            <span className="text-blue-600">わかりやすい</span>料金
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-xl mx-auto">
            隠れた費用は一切なし。診察料は永久無料。いつでも解約できます。
          </p>
        </div>

        {/* Campaign banner */}
        <div className="mb-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-5 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <div className="font-extrabold text-xl mb-2">🎉 {campaign.title}</div>
              <div className="flex flex-wrap gap-3">
                {campaign.items.map((item) => (
                  <div key={item} className="flex items-center gap-1.5 text-sm bg-white/20 px-3 py-1.5 rounded-full">
                    <CheckCircle size={14} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/20 rounded-xl px-5 py-3 text-center flex-shrink-0">
              <div className="text-xs text-orange-100">キャンペーン期間</div>
              <div className="font-extrabold text-lg">{campaign.deadline}</div>
            </div>
          </div>
        </div>

        {/* Plans grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {plans.map(({ name, description, price, unit, icon: Icon, color, headerColor, iconColor, badge, badgeColor, features, cta, ctaStyle }) => (
            <div
              key={name}
              className={`bg-white rounded-3xl border-2 ${color} overflow-hidden flex flex-col transition-shadow hover:shadow-xl`}
            >
              {/* Plan header */}
              <div className={`${headerColor} p-6`}>
                <div className="flex items-start justify-between mb-3">
                  <Icon size={28} className={iconColor} />
                  {badge && (
                    <span className={`text-xs font-extrabold px-3 py-1 rounded-full ${badgeColor}`}>
                      {badge}
                    </span>
                  )}
                </div>
                <h3 className={`font-extrabold text-xl mb-1 ${headerColor.includes("gradient") ? "text-white" : "text-gray-900"}`}>
                  {name}
                </h3>
                <p className={`text-sm ${headerColor.includes("gradient") ? "text-blue-100" : "text-gray-500"}`}>
                  {description}
                </p>
              </div>

              {/* Price */}
              <div className="px-6 py-5 border-b border-gray-100">
                <div className="flex items-end gap-1">
                  <span className="text-gray-500 text-sm">¥</span>
                  <span className="text-4xl font-extrabold text-gray-900">{price}</span>
                </div>
                <div className="text-gray-500 text-xs mt-0.5">{unit}</div>
                <div className="mt-2 text-xs text-blue-600 font-semibold">+ 診察料 ¥0（永久無料）</div>
              </div>

              {/* Features */}
              <div className="px-6 py-5 flex flex-col gap-3 flex-1">
                {features.map((feature) => (
                  <div key={feature} className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-teal-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="px-6 pb-6">
                <a
                  href="#contact"
                  className={`block text-center w-full py-3.5 rounded-xl font-bold text-sm transition-all ${ctaStyle}`}
                >
                  {cta}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Notes */}
        <div className="mt-8 text-center text-gray-500 text-sm space-y-1">
          <p>＊表示価格はすべて税込です。お薬代は上記価格に含まれません。</p>
          <p>＊配送料は全国一律550円（税込）です。</p>
          <p>＊プランはいつでも変更・解約できます。</p>
        </div>
      </div>
    </section>
  );
}
