import { CalendarCheck, ClipboardList, Video, Package } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: CalendarCheck,
    title: "診療予約",
    subtitle: "約30秒",
    description:
      "診療科目を選択して、ご希望の日時を選ぶだけ。夜間・休日も24時間受付しています。",
    detail: ["科目を選択", "日時を選択", "簡単な基本情報を入力"],
    color: "from-blue-500 to-blue-600",
    lightColor: "bg-blue-50",
    textColor: "text-blue-600",
  },
  {
    number: "02",
    icon: ClipboardList,
    title: "問診票の記入",
    subtitle: "約5分",
    description:
      "Web上の問診票に症状・既往歴などを入力。医師が事前に確認することで診察がスムーズに進みます。",
    detail: ["症状・お悩みを入力", "既往歴・服薬歴を入力", "写真の添付（必要な場合）"],
    color: "from-teal-500 to-teal-600",
    lightColor: "bg-teal-50",
    textColor: "text-teal-600",
  },
  {
    number: "03",
    icon: Video,
    title: "オンライン診察",
    subtitle: "約5〜10分",
    description:
      "ビデオ通話または電話で医師が直接診察。プライバシーが守られた環境で、リラックスして相談できます。",
    detail: ["医師とビデオ通話", "症状について相談", "治療プランの確認"],
    color: "from-indigo-500 to-indigo-600",
    lightColor: "bg-indigo-50",
    textColor: "text-indigo-600",
  },
  {
    number: "04",
    icon: Package,
    title: "お薬のお届け",
    subtitle: "最短翌日",
    description:
      "処方されたお薬を自宅・職場・コンビニなどご指定の場所にお届け。目立たない梱包でプライバシーも安心。",
    detail: ["処方箋を電子発行", "全国配送対応", "コンビニ受取も可"],
    color: "from-orange-500 to-orange-600",
    lightColor: "bg-orange-50",
    textColor: "text-orange-600",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-12 sm:py-20 lg:py-28 bg-gradient-to-b from-white to-blue-50/50" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-200 text-indigo-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            ご利用の流れ
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">
            たった<span className="text-blue-600">4ステップ</span>で完結
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-xl mx-auto">
            難しい操作は一切不要。スマホがあれば、どなたでも簡単にご利用いただけます。
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-20 left-1/2 -translate-x-1/2 w-[75%] h-0.5 bg-gradient-to-r from-blue-200 via-teal-200 to-orange-200 z-0" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div key={step.number} className="flex flex-col items-center text-center">
                  {/* Step number + icon */}
                  <div className="relative mb-6">
                    <div
                      className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-xl`}
                    >
                      <Icon size={36} className="text-white" />
                    </div>
                    <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-white shadow-md border border-gray-100 flex items-center justify-center">
                      <span className="text-xs font-extrabold text-gray-800">{idx + 1}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`w-full ${step.lightColor} rounded-2xl p-5 flex flex-col gap-3`}>
                    <div>
                      <div className={`text-xs font-bold ${step.textColor} mb-1`}>{step.subtitle}</div>
                      <h3 className="text-lg font-extrabold text-gray-900">{step.title}</h3>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                    <ul className="flex flex-col gap-1.5">
                      {step.detail.map((d) => (
                        <li key={d} className="flex items-center gap-2 text-left">
                          <div className={`w-1.5 h-1.5 rounded-full ${step.color.includes("blue") ? "bg-blue-500" : step.color.includes("teal") ? "bg-teal-500" : step.color.includes("indigo") ? "bg-indigo-500" : "bg-orange-500"}`} />
                          <span className="text-gray-700 text-xs">{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Notes */}
        <div className="mt-14 grid md:grid-cols-3 gap-4">
          {[
            { label: "配送料", value: "全国一律 550円（税込）" },
            { label: "診察料", value: "完全無料（0円）" },
            { label: "診察時間", value: "24時間 365日受付" },
          ].map(({ label, value }) => (
            <div key={label} className="bg-white rounded-2xl p-5 flex items-center gap-4 shadow-sm border border-gray-100">
              <div className="flex-1">
                <div className="text-xs text-gray-500 mb-0.5">{label}</div>
                <div className="font-extrabold text-gray-900 text-lg">{value}</div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-10 py-4 rounded-2xl font-extrabold text-lg hover:shadow-xl hover:from-blue-700 hover:to-blue-800 transition-all"
          >
            今すぐ無料で始める →
          </a>
          <p className="text-gray-500 text-sm mt-3">診察料無料 · 解約自由 · 全国対応</p>
        </div>
      </div>
    </section>
  );
}
