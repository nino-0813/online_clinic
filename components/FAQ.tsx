"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    category: "診療について",
    items: [
      {
        q: "本当に診察料は無料ですか？",
        a: "はい、初回・再診ともに診察料は完全無料です。費用はお薬代（薬ごとに異なります）と配送料（全国一律550円）のみです。追加の隠れた費用は一切ありません。",
      },
      {
        q: "どのようなデバイスで利用できますか？",
        a: "スマートフォン（iOS・Android）、タブレット、PCなどインターネットに接続できるデバイスであれば利用可能です。専用アプリのインストールは不要で、ブラウザからアクセスいただけます。",
      },
      {
        q: "診察は予約制ですか？当日診察は可能ですか？",
        a: "基本的には予約制ですが、空き状況によっては当日のご予約も可能です。24時間受付しておりますので、急なご相談にもできる限り対応いたします。",
      },
      {
        q: "保険は適用されますか？",
        a: "現在提供しているサービスは自由診療（保険適用外）となります。そのため、健康保険証は不要です。ただし、診察料は無料ですので、お薬代のみのご負担となります。",
      },
    ],
  },
  {
    category: "お薬・配送について",
    items: [
      {
        q: "お薬はどれくらいで届きますか？",
        a: "処方後、通常翌日〜3日以内にお届けします。エリアによっては当日配送（別途料金）にも対応しております。また、全国のコンビニでの受取も可能です。",
      },
      {
        q: "梱包はプライバシーが守られますか？",
        a: "配送には個人情報が特定されにくい目立たないパッケージを使用します。送り状の差出人名には「メディカルコネクト」と記載されますが、中身がわかるような表記は一切しておりません。",
      },
      {
        q: "お薬の定期配送はありますか？",
        a: "定期処方プランをご選択いただくと、毎月自動的にお薬をお届けします。1回の診察で最大3ヶ月分まで処方可能です。",
      },
      {
        q: "副作用が心配です",
        a: "担当医師が一人ひとりの状態に合わせた適切な薬を処方します。万が一副作用が出た場合は、いつでもチャットまたは電話でご相談いただけます。早急に対応いたします。",
      },
    ],
  },
  {
    category: "アカウント・解約",
    items: [
      {
        q: "解約はいつでもできますか？",
        a: "はい、いつでも解約可能です。解約のお手続きはマイページから簡単に行えます。次回配送予定日の3日前までに解約いただければ、翌月分の課金は発生しません。",
      },
      {
        q: "家族のアカウントも作れますか？",
        a: "現在は1人1アカウントのご利用となっております。ご家族の方はそれぞれ個別にアカウントを作成いただく必要があります。",
      },
      {
        q: "他のクリニックでの処方薬と併用できますか？",
        a: "可能です。ただし、安全のため、現在お飲みのお薬の情報を問診時に必ずお知らせください。薬の相互作用を確認の上、処方いたします。",
      },
    ],
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        className="w-full flex items-start justify-between gap-4 py-5 text-left hover:text-blue-600 transition-colors"
        onClick={() => setOpen(!open)}
      >
        <span className="font-semibold text-gray-900 text-base leading-relaxed pr-2">{q}</span>
        <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-colors ${open ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-500"}`}>
          {open ? <Minus size={14} /> : <Plus size={14} />}
        </div>
      </button>
      {open && (
        <div className="pb-5 text-gray-600 text-sm leading-relaxed pr-10">
          {a}
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  return (
    <section className="py-12 sm:py-20 lg:py-28 bg-white" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            よくある質問
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">
            よくある<span className="text-blue-600">ご質問</span>
          </h2>
          <p className="text-gray-600 text-lg">
            ご不明な点がございましたら、お気軽にお問い合わせください。
          </p>
        </div>

        {/* FAQ categories */}
        <div className="flex flex-col gap-8">
          {faqs.map((category) => (
            <div key={category.category} className="bg-gray-50 rounded-2xl p-6">
              <h3 className="font-extrabold text-gray-900 text-lg mb-2 pb-3 border-b border-gray-200">
                {category.category}
              </h3>
              <div>
                {category.items.map((item) => (
                  <FAQItem key={item.q} q={item.q} a={item.a} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-10 text-center bg-blue-50 rounded-2xl p-8">
          <h3 className="font-extrabold text-gray-900 text-xl mb-2">
            その他のご質問は？
          </h3>
          <p className="text-gray-600 text-sm mb-5">
            お気軽にお問い合わせください。専門スタッフが丁寧にご対応します。
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="#contact"
              className="bg-blue-600 text-white px-8 py-3.5 rounded-xl font-bold text-sm hover:bg-blue-700 transition-colors w-full sm:w-auto"
            >
              メールでお問い合わせ
            </a>
            <a
              href="tel:0120-000-000"
              className="bg-white border-2 border-blue-200 text-blue-600 px-8 py-3.5 rounded-xl font-bold text-sm hover:border-blue-400 transition-colors w-full sm:w-auto"
            >
              0120-000-000（無料）
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
