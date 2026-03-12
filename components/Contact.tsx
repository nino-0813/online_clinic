"use client";

import { useState } from "react";
import { Send, MessageSquare, Phone, Mail } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const services = [
    "AGA（薄毛）治療",
    "ED治療",
    "ダイエット外来",
    "スキンケア・美容",
    "禁煙外来",
    "アレルギー治療",
    "睡眠障害",
    "女性の悩み",
    "その他",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-blue-50/50 to-white" id="contact">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-teal-50 border border-teal-200 text-teal-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            お問い合わせ
          </div>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">
            まずは<span className="text-blue-600">無料相談</span>から
          </h2>
          <p className="text-gray-600 text-lg max-w-xl mx-auto">
            診療のご予約・ご質問など、なんでもお気軽にどうぞ。専門スタッフが丁寧にご対応します。
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact info */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <h3 className="font-extrabold text-gray-900 text-lg mb-5">お問い合わせ方法</h3>
              <div className="flex flex-col gap-4">
                {[
                  {
                    icon: Phone,
                    label: "お電話",
                    value: "0120-000-000",
                    sub: "受付時間：9:00〜21:00（年中無休）",
                    color: "text-blue-600",
                    bg: "bg-blue-50",
                  },
                  {
                    icon: Mail,
                    label: "メール",
                    value: "contact@medical-connect.jp",
                    sub: "24時間受付・翌営業日以内にご返信",
                    color: "text-teal-600",
                    bg: "bg-teal-50",
                  },
                  {
                    icon: MessageSquare,
                    label: "LINEチャット",
                    value: "LINE公式アカウント",
                    sub: "友達追加でいつでも相談可能",
                    color: "text-green-600",
                    bg: "bg-green-50",
                  },
                ].map(({ icon: Icon, label, value, sub, color, bg }) => (
                  <div key={label} className="flex items-start gap-3">
                    <div className={`w-10 h-10 rounded-xl ${bg} flex items-center justify-center flex-shrink-0`}>
                      <Icon size={18} className={color} />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 mb-0.5">{label}</div>
                      <div className={`font-bold ${color} text-sm`}>{value}</div>
                      <div className="text-xs text-gray-500">{sub}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-teal-500 rounded-2xl p-6 text-white">
              <h3 className="font-extrabold text-lg mb-2">初回特典</h3>
              <p className="text-blue-100 text-sm mb-4">
                今すぐお問い合わせいただいた方に限り、初月のお薬代を<strong className="text-yellow-300">20%OFF</strong>でご提供します。
              </p>
              <div className="bg-white/20 rounded-xl p-4 text-center">
                <div className="text-xs text-blue-100 mb-1">グランドオープン記念</div>
                <div className="font-extrabold text-xl">初月20%OFF</div>
                <div className="text-blue-200 text-xs mt-1">2025年4月30日まで</div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="bg-white rounded-2xl p-10 border border-gray-100 shadow-sm flex flex-col items-center justify-center text-center h-full min-h-80">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                  <Send size={28} className="text-green-600" />
                </div>
                <h3 className="font-extrabold text-gray-900 text-xl mb-2">送信完了しました！</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  お問い合わせいただきありがとうございます。
                  <br />
                  確認後、担当者より24時間以内にご連絡いたします。
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-2xl p-6 lg:p-8 border border-gray-100 shadow-sm flex flex-col gap-5"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                      お名前 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="山田 太郎"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                      電話番号
                    </label>
                    <input
                      type="tel"
                      placeholder="090-0000-0000"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    メールアドレス <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="example@email.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    ご希望の診療科目
                  </label>
                  <select
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition bg-white"
                  >
                    <option value="">選択してください</option>
                    {services.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    お問い合わせ内容
                  </label>
                  <textarea
                    rows={4}
                    placeholder="ご質問やご相談内容をお書きください"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none"
                  />
                </div>

                <div className="text-xs text-gray-500">
                  送信いただいた情報は、お問い合わせへの回答及び当サービスのご案内にのみ使用いたします。
                  <a href="#" className="text-blue-600 hover:underline ml-1">プライバシーポリシー</a>
                  に同意の上、送信してください。
                </div>

                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 rounded-xl font-bold text-base hover:shadow-lg hover:from-blue-700 hover:to-blue-800 transition-all"
                >
                  <Send size={18} />
                  無料で相談する
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
