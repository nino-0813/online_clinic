import { ArrowRight, Stethoscope } from "lucide-react";

export default function Services() {
  return (
    <section className="py-20 lg:py-28 bg-white" id="services">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-2 bg-teal-50 border border-teal-200 text-teal-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
          診療科目
        </div>
        <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">
          幅広い診療科目に<span className="text-blue-600">対応</span>
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed mb-8">
          AGA・ED・ダイエット・スキンケア・禁煙・アレルギーなど、<strong>18科目以上</strong>の専門診療をオンラインで提供しています。
          スマホだけで予約からお薬の受け取りまで完結。各科目の詳細・料金・診療の流れは診療科目一覧ページでご確認いただけます。
        </p>
        <a
          href="/services"
          className="inline-flex items-center justify-center gap-2 bg-teal-500 text-white px-8 py-4 rounded-2xl font-bold text-base hover:bg-teal-600 transition-colors shadow-md hover:shadow-lg"
        >
          <Stethoscope size={20} />
          診療科目一覧を見る
          <ArrowRight size={18} />
        </a>
      </div>
    </section>
  );
}
