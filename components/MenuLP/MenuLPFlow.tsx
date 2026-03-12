import { CalendarCheck, ClipboardList, Video, Package } from "lucide-react";

const steps = [
  { icon: CalendarCheck, title: "予約", subtitle: "約30秒", desc: "診療科目・日時を選んで簡単予約" },
  { icon: ClipboardList, title: "問診票記入", subtitle: "約5分", desc: "WEB問診票で体調を登録" },
  { icon: Video, title: "診察", subtitle: "約5分", desc: "ビデオ通話で医師と診察" },
  { icon: Package, title: "お薬の受け取り", subtitle: "最短翌日", desc: "自宅・コンビニ・ロッカーへ配送可" },
];

export default function MenuLPFlow() {
  return (
    <section className="py-16 lg:py-20 bg-gradient-to-b from-white to-blue-50/30" id="flow">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-200 text-indigo-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            オンライン診療の流れ
          </div>
          <h2 className="text-2xl lg:text-3xl font-extrabold text-gray-900 mb-2">
            4ステップで完結
          </h2>
          <p className="text-gray-600">
            予約からお薬受け取りまで、スマホだけで完了します。
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={step.title} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-teal-500 flex items-center justify-center mx-auto mb-4">
                  <Icon size={28} className="text-white" />
                </div>
                <div className="text-xs font-bold text-blue-600 mb-1">{step.subtitle}</div>
                <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.desc}</p>
              </div>
            );
          })}
        </div>
        <div className="mt-10 grid md:grid-cols-3 gap-4">
          <div className="bg-white rounded-2xl p-5 border border-gray-100 text-center">
            <div className="text-xs text-gray-500 mb-0.5">診察料</div>
            <div className="font-extrabold text-gray-900 text-lg">0円</div>
          </div>
          <div className="bg-white rounded-2xl p-5 border border-gray-100 text-center">
            <div className="text-xs text-gray-500 mb-0.5">配送料</div>
            <div className="font-extrabold text-gray-900 text-lg">550円（税込）</div>
          </div>
          <div className="bg-white rounded-2xl p-5 border border-gray-100 text-center">
            <div className="text-xs text-gray-500 mb-0.5">受付</div>
            <div className="font-extrabold text-gray-900 text-lg">24時間</div>
          </div>
        </div>
      </div>
    </section>
  );
}
