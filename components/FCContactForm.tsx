"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export default function FCContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    inquiryType: "加盟希望資料請求",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-16 lg:py-20 bg-white" id="fc-contact">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-2xl lg:text-3xl font-extrabold text-gray-900 text-center mb-2">
          資料請求フォーム
        </h2>
        <p className="text-gray-600 text-center text-sm mb-10">
          加盟のご検討・資料請求はこちらから。担当者よりご連絡いたします。
        </p>

        {submitted ? (
          <div className="bg-blue-50 rounded-2xl p-10 text-center border border-blue-100">
            <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
              <Send size={28} className="text-blue-600" />
            </div>
            <h3 className="font-extrabold text-gray-900 text-xl mb-2">送信完了しました</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              お問い合わせいただきありがとうございます。
              <br />
              確認後、担当者よりご連絡いたします。
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-gray-50 rounded-2xl p-6 lg:p-8 border border-gray-100 flex flex-col gap-5"
          >
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
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition bg-white"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                会社名 <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="株式会社サンプル"
                value={form.company}
                onChange={(e) => setForm({ ...form, company: e.target.value })}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition bg-white"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                電話番号 <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                required
                placeholder="090-0000-0000"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition bg-white"
              />
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
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition bg-white"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                お問い合わせ種別 <span className="text-red-500">*</span>
              </label>
              <select
                required
                value={form.inquiryType}
                onChange={(e) => setForm({ ...form, inquiryType: e.target.value })}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition bg-white"
              >
                <option value="加盟希望資料請求">加盟希望資料請求</option>
                <option value="説明会のご予約">説明会のご予約</option>
                <option value="その他">その他</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                メッセージ
              </label>
              <textarea
                rows={4}
                placeholder="ご質問やご相談内容をお書きください"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none bg-white"
              />
            </div>
            <button
              type="submit"
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 rounded-xl font-bold text-base hover:shadow-lg hover:from-blue-700 hover:to-blue-800 transition-all"
            >
              <Send size={18} />
              送信する
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
