import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Users,
  Lock,
  Stethoscope,
  MessageCircle,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "オンラインクリニックとは | メディカルコネクト",
  description:
    "医療を身近に、医療で人々を幸せに。いつでもどこからでも相談できるオンライン診療プラットフォームです。",
};

export default function AboutPage() {
  return (
    <main>
      <Header />

      {/* Hero - About us（バナー画像のみ） */}
      <section className="relative pt-20 w-full overflow-hidden">
        <div className="relative w-full aspect-[2848/1494] min-h-[240px]">
          <Image
            src="/images/about-hero.webp"
            alt="笑顔あふれる毎日を、あなたのスマホから。医療の新しい未来へ。"
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority
          />
        </div>
      </section>

      {/* Features - 画像のみ（オンラインクリニックの特徴） */}
      <section id="features" className="py-8 lg:py-12 bg-white">
        <div className="relative w-full max-w-6xl mx-auto px-4">
          <div className="relative w-full aspect-[2126/1260] min-h-[280px]">
            <Image
              src="/images/features-section.webp"
              alt="オンラインクリニックの特徴 - 続けやすい安心の価格、診察料0円・配送料550円、24時間対応、即時受診・お薬は最短当日到着、診療実績200万件以上"
              fill
              className="object-contain object-center"
              sizes="(max-width: 1280px) 100vw, 1280px"
            />
          </div>
        </div>
      </section>

      {/* Commitment - 安心安全な取り組み */}
      <section className="py-16 lg:py-20 bg-gradient-to-b from-white to-blue-50/30">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-blue-600 font-semibold text-sm text-center mb-2">Commitment</p>
          <h2 className="text-2xl lg:text-3xl font-extrabold text-gray-900 text-center mb-12">
            安心安全なサービス提供に向けた取り組み
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            安心安全なオンライン診療プラットフォームサービスを提供するための取り組みを行なっています。
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Stethoscope,
                title: "より良い診察と処方をお届け",
                items: [
                  "医学的根拠及び実臨床の知見を常にアップデート",
                  "全医師への定期的な知見の共有",
                  "薬剤に関する定期的な研修やテストの実施",
                  "定期問診の回答による患者の健康状態の確認",
                ],
              },
              {
                icon: MessageCircle,
                title: "スムーズな診療体験を提供",
                items: [
                  "Web問診機能の構築により待ち時間短縮と適切な診断評価を実現",
                  "継続的な改善と新機能の追加",
                  "便利で使いやすいプラットフォームの提供",
                ],
              },
              {
                icon: Users,
                title: "患者様の声をもとに、サービス改善を実施",
                items: [
                  "診察後のアンケートやお問い合わせ内容を提携医療機関に共有",
                  "コミュニケーションの質の向上",
                  "よくある質問の充実により、診察前の疑問や不安を軽減",
                ],
              },
              {
                icon: Lock,
                title: "情報を守る安心のセキュリティ",
                items: [
                  "診療情報をSSL通信で保護",
                  "秘匿性の高いオンライン診察",
                  "不正ログインを防ぐアカウントロック機能",
                ],
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                      <Icon size={20} className="text-blue-600" />
                    </div>
                    <h3 className="font-bold text-gray-900 text-lg">{item.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {item.items.map((point) => (
                      <li key={point} className="flex items-start gap-2 text-gray-600 text-sm">
                        <span className="text-blue-500 mt-1.5">・</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-4">
            まずは気軽にご相談ください
          </h2>
          <p className="text-gray-600 mb-8">
            診察料0円・24時間受付。スマホだけで診療を始められます。
          </p>
          <a
            href="/#contact"
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-10 py-4 rounded-2xl font-bold text-lg hover:shadow-xl hover:from-blue-700 hover:to-blue-800 transition-all group"
          >
            無料で診療を始める
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
