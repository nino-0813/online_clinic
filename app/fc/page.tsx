import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FCContactForm from "@/components/FCContactForm";
import {
  CheckCircle2,
  Building2,
  UserCog,
  Pill,
  LayoutGrid,
  Megaphone,
  BarChart3,
  Shield,
  Sparkles,
  Heart,
  Scale,
  ArrowRight,
  MessageCircle,
  Stethoscope,
  Truck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "FC加盟店募集 | メディカルコネクト",
  description:
    "医療知識ゼロ・医療資格不要・ほぼ業務負担なし。みんなのオンクリでオンラインクリニックFC・OEM事業を。初期費用130万円〜、毎月100万円〜で250万円以上の利益獲得が可能。",
};

export default function FCPage() {
  return (
    <main>
      <Header />

      {/* Hero - PDF P1 */}
      <section className="pt-24 pb-12 lg:pt-28 lg:pb-16 bg-gradient-to-b from-white to-blue-50/30">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-blue-600 font-bold text-sm lg:text-base mb-3">
            『医療知識ゼロ！医療資格不要！ほぼ業務負担なし！』
          </p>
          <h1 className="text-2xl lg:text-4xl font-extrabold text-gray-900 mb-2">
            オンラインクリニック
          </h1>
          <h2 className="text-xl lg:text-2xl font-bold text-teal-600">
            FC・OEM事業のご提案
          </h2>
        </div>
      </section>

      {/* はじめに / みんなのオンクリとは？ - インフォグラフィック */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="relative w-full aspect-[2986/1408] min-h-[280px] rounded-2xl overflow-hidden bg-gray-100">
            <Image
              src="/images/fc-intro.webp"
              alt="はじめに『みんなのオンクリ』とは？ これまでのクリニック開業に必要なことと、みんなのオンクリで実現できることの比較"
              fill
              className="object-contain object-center"
              sizes="(max-width: 1024px) 100vw, 1024px"
              priority
            />
          </div>
        </div>
      </section>

      {/* 取り扱い科目 - PDF P3 */}
      <section className="py-12 lg:py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-teal-600 font-semibold text-sm uppercase tracking-wider mb-2 text-center">
            Services
          </p>
          <h2 className="text-2xl lg:text-3xl font-extrabold text-gray-900 mb-12 text-center">
            取り扱い科目
          </h2>
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                title: "AGA",
                subtitle: "男性型脱毛症",
                desc: "主に「男性型脱毛症」といわれる進行性の脱毛症で日本人成人男性の3人に1人がAGAと言われ、誰にも言えず悩んでいる人が多いといわれます。",
                price: "4,000円〜8,000円",
                priceNote: "内服薬型 / 月単価",
                href: "/menu/aga",
                icon: Sparkles,
                gradient: "from-amber-500 to-orange-500",
                bgLight: "bg-amber-50",
                borderColor: "border-amber-200",
              },
              {
                title: "ED",
                subtitle: "勃起不全改善",
                desc: "男性の「勃起不全」改善を目的とした治療になります。日本人1,400万人（成人男性の3人に1人）が勃起不全と言われており、市場は大きいです。",
                price: "20,000円",
                priceNote: "内服薬型 / 月単価",
                href: "/menu/ed",
                icon: Heart,
                gradient: "from-rose-500 to-pink-500",
                bgLight: "bg-rose-50",
                borderColor: "border-rose-200",
              },
              {
                title: "ダイエット",
                subtitle: "メディカルダイエット",
                desc: "男女年齢問わず、永遠の悩みである「ダイエット」を気軽に行える「メディカルダイエット」になります。特に市場の大きな分野です。",
                price: "20,000円",
                priceNote: "注射型 / 月単価",
                href: "/menu/diet-male",
                icon: Scale,
                gradient: "from-teal-500 to-emerald-500",
                bgLight: "bg-teal-50",
                borderColor: "border-teal-200",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className={`group relative bg-white rounded-2xl p-6 lg:p-7 border-2 ${item.borderColor} shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden`}
                >
                  <div className={`absolute top-0 right-0 w-24 h-24 rounded-bl-full ${item.bgLight} opacity-80`} />
                  <div className="relative">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-4 shadow-md`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-extrabold text-xl text-gray-900 mb-0.5">
                      〔{item.title}〕
                    </h3>
                    <p className="text-gray-500 text-xs font-medium mb-4">{item.subtitle}</p>
                    <p className="text-gray-600 text-sm leading-relaxed mb-5 min-h-[3.5rem]">
                      {item.desc}
                    </p>
                    <div className={`inline-flex flex-col rounded-xl ${item.bgLight} px-4 py-2.5 mb-5 border ${item.borderColor}`}>
                      <span className="text-gray-500 text-xs">{item.priceNote}</span>
                      <span className={`font-bold text-lg bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`}>
                        {item.price}
                      </span>
                    </div>
                    <a
                      href={item.href}
                      className="inline-flex items-center gap-2 text-teal-600 font-bold text-sm hover:text-teal-700 hover:gap-3 transition-all"
                    >
                      詳しく見る
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* みんなのオンクリとは？特徴・診察の流れ - PDF P4 */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl lg:text-3xl font-extrabold text-gray-900 mb-6">
            『みんなのオンクリ』とは？
          </h2>
          <h3 className="text-lg font-bold text-gray-800 mb-6">〔特徴〕</h3>
          <div className="relative">
            {/* デスクトップ：横並びフロー（矢印で接続） */}
            <ol className="hidden lg:flex items-stretch gap-0">
              {[
                { step: "01", text: "診察から薬の受取まで自宅で完結！" },
                { step: "02", text: "ご予約はLINEで簡単！" },
                { step: "03", text: "オンラインだから人目を気にせずにOK!" },
                { step: "04", text: "経験豊富な医師による診察だから安心！" },
                { step: "05", text: "続けやすい価格設定を実現！" },
              ].map((item, index) => (
                <li key={item.step} className="flex flex-1 items-center gap-0 min-w-0">
                  <div className="flex flex-1 flex-col items-center text-center px-2">
                    <span className="w-11 h-11 rounded-full bg-teal-500 text-white font-bold text-sm flex items-center justify-center flex-shrink-0 mb-3 shadow-md">
                      {item.step}
                    </span>
                    <p className="text-gray-800 text-sm font-medium leading-snug">
                      {item.text}
                    </p>
                  </div>
                  {index < 4 && (
                    <div className="flex-shrink-0 w-6 flex items-center justify-center pt-8">
                      <ArrowRight className="w-5 h-5 text-teal-300" aria-hidden />
                    </div>
                  )}
                </li>
              ))}
            </ol>
            {/* モバイル：縦並びタイムライン */}
            <ol className="lg:hidden space-y-0">
              {[
                { step: "01", text: "診察から薬の受取まで自宅で完結！" },
                { step: "02", text: "ご予約はLINEで簡単！" },
                { step: "03", text: "オンラインだから人目を気にせずにOK!" },
                { step: "04", text: "経験豊富な医師による診察だから安心！" },
                { step: "05", text: "続けやすい価格設定を実現！" },
              ].map((item, index) => (
                <li key={item.step} className="flex gap-4">
                  <div className="flex flex-col items-center flex-shrink-0">
                    <span className="w-11 h-11 rounded-full bg-teal-500 text-white font-bold text-sm flex items-center justify-center shadow-md">
                      {item.step}
                    </span>
                    {index < 4 && (
                      <div className="w-0.5 flex-1 min-h-[24px] bg-teal-200 my-1" />
                    )}
                  </div>
                  <div className="pb-6">
                    <p className="text-gray-800 text-sm font-medium leading-snug pt-1">
                      {item.text}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <h3 className="text-lg font-bold text-gray-800 mb-6">〔診察の流れ〕</h3>
          <div className="relative">
            {/* デスクトップ：横並び＋矢印 */}
            <ol className="hidden sm:flex items-stretch gap-4 lg:gap-6">
              {[
                { step: "01", label: "予約", text: "ラインでスケジューラより予約", icon: MessageCircle, color: "teal" },
                { step: "02", label: "診療", text: "スケジュールが確定し、時間になったら医師による診療", icon: Stethoscope, color: "blue" },
                { step: "03", label: "お届け", text: "薬が処方されたらネットで決済を行い、ご自宅にお届け", icon: Truck, color: "emerald" },
              ].map((item, index) => {
                const Icon = item.icon;
                const cardClass = item.color === "teal" ? "border-teal-200 bg-teal-50" : item.color === "blue" ? "border-blue-200 bg-blue-50" : "border-emerald-200 bg-emerald-50";
                const iconBgClass = item.color === "teal" ? "bg-teal-500" : item.color === "blue" ? "bg-blue-500" : "bg-emerald-500";
                return (
                  <li key={item.step} className="flex flex-1 items-center gap-4 min-w-0">
                    <div className={`flex-1 rounded-2xl border-2 ${cardClass} p-5 h-full flex flex-col`}>
                      <div className="flex items-center gap-3 mb-3">
                        <span className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${iconBgClass} text-white shadow-md`}>
                          <Icon className="w-6 h-6" />
                        </span>
                        <div>
                          <span className="text-xs font-bold text-gray-500">STEP {item.step}</span>
                          <p className="font-bold text-gray-900">{item.label}</p>
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed flex-1">{item.text}</p>
                    </div>
                    {index < 2 && (
                      <div className="flex-shrink-0 flex items-center">
                        <ArrowRight className="w-8 h-8 text-teal-300" aria-hidden />
                      </div>
                    )}
                  </li>
                );
              })}
            </ol>
            {/* モバイル：縦並びタイムライン */}
            <ol className="sm:hidden space-y-4">
              {[
                { step: "01", label: "予約", text: "ラインでスケジューラより予約", icon: MessageCircle, color: "teal" },
                { step: "02", label: "診療", text: "スケジュールが確定し、時間になったら医師による診療", icon: Stethoscope, color: "blue" },
                { step: "03", label: "お届け", text: "薬が処方されたらネットで決済を行い、ご自宅にお届け", icon: Truck, color: "emerald" },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <li key={item.step} className="flex gap-4">
                    <div className="flex flex-col items-center flex-shrink-0">
                      <span className={`w-12 h-12 rounded-xl flex items-center justify-center ${item.color === "teal" ? "bg-teal-500" : item.color === "blue" ? "bg-blue-500" : "bg-emerald-500"} text-white shadow-md`}>
                        <Icon className="w-6 h-6" />
                      </span>
                      {index < 2 && <div className="w-0.5 flex-1 min-h-[20px] bg-gray-200 my-2" />}
                    </div>
                    <div className={`flex-1 rounded-2xl border-2 p-4 pb-5 ${item.color === "teal" ? "border-teal-200 bg-teal-50" : item.color === "blue" ? "border-blue-200 bg-blue-50" : "border-emerald-200 bg-emerald-50"}`}>
                      <span className="text-xs font-bold text-gray-500">STEP {item.step}</span>
                      <p className="font-bold text-gray-900 mt-0.5">{item.label}</p>
                      <p className="text-gray-600 text-sm leading-relaxed mt-2">{item.text}</p>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </section>

      {/* FCの仕組み - PDF P5 */}
      <section className="py-12 lg:py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <p className="text-teal-600 font-semibold text-sm uppercase tracking-wider mb-2 text-center">
            Franchise Structure
          </p>
          <h2 className="text-2xl lg:text-3xl font-extrabold text-gray-900 mb-6 text-center">
            『みんなのオンクリ』FCの仕組み
          </h2>
          <div className="bg-gradient-to-r from-teal-500 to-blue-600 rounded-2xl p-4 lg:p-5 mb-10 text-center shadow-lg">
            <p className="text-white font-bold text-sm lg:text-base">
              有名人起用と「テレビCM」「雑誌」「SNS」で知名度アップ！ × FC様での広告で効率的に集患！
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
            {[
              { icon: Building2, label: "FC本部（弊社）", sub: "提携クリニック・ブランディング広告", iconBg: "bg-teal-100", iconColor: "text-teal-600", border: "border-teal-200" },
              { icon: UserCog, label: "FC様", sub: "みんなのクリニック●●店 診療予約", iconBg: "bg-blue-100", iconColor: "text-blue-600", border: "border-blue-200" },
              { icon: Megaphone, label: "提携広告代理店", sub: "成果報酬型・リスティング等", iconBg: "bg-amber-100", iconColor: "text-amber-600", border: "border-amber-200" },
              { icon: LayoutGrid, label: "本部で広告展開", sub: "テレビ・雑誌・タレント起用", iconBg: "bg-emerald-100", iconColor: "text-emerald-600", border: "border-emerald-200" },
            ].map(({ icon: Icon, label, sub, iconBg, iconColor, border }) => (
              <div
                key={label}
                className={`rounded-2xl border-2 ${border} bg-white p-5 lg:p-6 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col`}
              >
                <div className={`${iconBg} ${iconColor} w-14 h-14 rounded-xl flex items-center justify-center mb-4 flex-shrink-0`}>
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="font-bold text-gray-900 text-base mb-1.5">{label}</h3>
                <p className="text-gray-600 text-sm leading-relaxed flex-1">{sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FC本部の役割とFC様の役割 - PDF P6 */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl lg:text-3xl font-extrabold text-gray-900 mb-4 text-center">
            FC本部の役割とFC様の役割
          </h2>
          <p className="text-gray-600 text-center mb-10">
            今すぐ・手間なくオンラインクリニックを運営開始することができます！<br />
            FCオーナー様は「WEB集客」と「売上管理」だけでOK！
          </p>
          <div className="grid lg:grid-cols-2 gap-8">
            {/* FC本部の役割 */}
            <div className="rounded-2xl border-2 border-teal-200 bg-white overflow-hidden shadow-sm">
              <div className="bg-teal-500 text-white px-6 py-3">
                <h3 className="font-bold text-lg">〔FC本部の役割〕</h3>
                <p className="text-teal-100 text-xs mt-0.5">医師・薬剤・システム・広告を本部が一括担当</p>
              </div>
              <div className="p-5 lg:p-6">
                <ul className="space-y-3">
                  {[
                    { icon: UserCog, label: "医師・看護師等", text: "常勤・非常勤含めて手配、提携クリニックを準備" },
                    { icon: Pill, label: "薬剤", text: "薬剤の仕入れ、受注・発送" },
                    { icon: LayoutGrid, label: "システム", text: "オンライン診断・予約・薬剤ECシステム" },
                    { icon: Megaphone, label: "広告", text: "全体ブランディング広告" },
                    { icon: Building2, label: "物件", text: "クリニック、物流倉庫" },
                    { icon: Shield, label: "サポート", text: "AIチャットサポート、コールセンター" },
                    { icon: BarChart3, label: "管理", text: "売上管理、医師管理、薬剤管理" },
                  ].map(({ icon: Icon, label, text }) => (
                    <li key={label} className="flex gap-3">
                      <span className="w-9 h-9 rounded-lg bg-teal-100 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-4 h-4 text-teal-600" />
                      </span>
                      <div>
                        <span className="font-bold text-gray-900 text-sm">{label}：</span>
                        <span className="text-gray-600 text-sm">{text}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* FC様の役割 */}
            <div className="rounded-2xl border-2 border-blue-200 bg-white overflow-hidden shadow-sm flex flex-col">
              <div className="bg-blue-500 text-white px-6 py-3">
                <h3 className="font-bold text-lg">〔FC様の役割〕</h3>
                <p className="text-blue-100 text-xs mt-0.5">やることは2つだけ。シンプルに運営</p>
              </div>
              <div className="p-5 lg:p-6 flex-1 flex flex-col justify-center">
                <ul className="space-y-4">
                  <li className="flex gap-3 items-start">
                    <span className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <Megaphone className="w-5 h-5 text-blue-600" />
                    </span>
                    <div>
                      <span className="font-bold text-gray-900 text-sm block mb-0.5">広告</span>
                      <p className="text-gray-600 text-sm">集患プロモーション</p>
                    </div>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <BarChart3 className="w-5 h-5 text-blue-600" />
                    </span>
                    <div>
                      <span className="font-bold text-gray-900 text-sm block mb-0.5">管理</span>
                      <p className="text-gray-600 text-sm">売上管理</p>
                    </div>
                  </li>
                </ul>
                <div className="mt-6 pt-5 border-t border-blue-100">
                  <p className="text-blue-600 font-bold text-sm text-center">
                    以上の2つ<span className="text-gray-500 font-normal">のみ</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 収益構造（収益比較）- PDF P7 */}
      <section className="py-12 lg:py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl lg:text-3xl font-extrabold text-gray-900 mb-8 text-center">
            収益構造（収益比較）
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl border-2 border-teal-200 overflow-hidden shadow-sm">
              <div className="bg-teal-500 text-white px-4 py-3 font-bold text-center">
                みんなのクリニックFC
              </div>
              <div className="p-5 text-sm">
                <table className="w-full border-collapse">
                  <tbody>
                    <tr className="border-b border-gray-100"><td className="py-2 text-gray-600">売上高</td><td className="py-2 text-right font-medium">1,000万円/月</td></tr>
                    <tr className="border-b border-gray-100"><td className="py-2 text-gray-600">薬剤・薬剤師コスト</td><td className="py-2 text-right text-red-600">▲500万円/月</td></tr>
                    <tr className="border-b border-gray-100"><td className="py-2 text-gray-600">医師・看護師人件費</td><td className="py-2 text-right text-teal-600">0円（本部負担）</td></tr>
                    <tr className="border-b border-gray-100"><td className="py-2 text-gray-600">家賃・光熱費</td><td className="py-2 text-right text-teal-600">0円（本部負担）</td></tr>
                    <tr className="border-b border-gray-100"><td className="py-2 text-gray-600">システム費・管理費</td><td className="py-2 text-right text-red-600">▲10万円/月</td></tr>
                    <tr className="border-b border-gray-100"><td className="py-2 text-gray-600">広告・集患費</td><td className="py-2 text-right text-red-600">▲50万円/月</td></tr>
                    <tr className="border-b border-gray-100"><td className="py-2 text-gray-600">ロイヤリティ（20％）</td><td className="py-2 text-right text-red-600">▲200万円/月</td></tr>
                    <tr><td className="py-3 font-bold text-gray-900">営業利益</td><td className="py-3 text-right font-bold text-teal-600 text-lg">240万円</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
              <div className="bg-gray-600 text-white px-4 py-3 font-bold text-center">
                通常クリニック
              </div>
              <div className="p-5 text-sm">
                <table className="w-full border-collapse">
                  <tbody>
                    <tr className="border-b border-gray-100"><td className="py-2 text-gray-600">売上高</td><td className="py-2 text-right font-medium">1,000万円/月</td></tr>
                    <tr className="border-b border-gray-100"><td className="py-2 text-gray-600">薬剤・薬剤師コスト</td><td className="py-2 text-right text-red-600">▲450万円/月</td></tr>
                    <tr className="border-b border-gray-100"><td className="py-2 text-gray-600">医師・看護師人件費</td><td className="py-2 text-right text-red-600">▲250万円/月</td></tr>
                    <tr className="border-b border-gray-100"><td className="py-2 text-gray-600">家賃・光熱費</td><td className="py-2 text-right text-red-600">▲80万円/月</td></tr>
                    <tr className="border-b border-gray-100"><td className="py-2 text-gray-600">システム費・管理費</td><td className="py-2 text-right text-red-600">▲20万円/月</td></tr>
                    <tr className="border-b border-gray-100"><td className="py-2 text-gray-600">広告・集患費</td><td className="py-2 text-right text-red-600">▲50万円/月</td></tr>
                    <tr className="border-b border-gray-100"><td className="py-2 text-gray-600">その他</td><td className="py-2 text-right text-red-600">▲30万円/月</td></tr>
                    <tr><td className="py-3 font-bold text-gray-900">営業利益</td><td className="py-3 text-right font-bold text-gray-700 text-lg">120万円</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 他社オンラインクリニックとの比較 - PDF P8 */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <p className="text-teal-600 font-semibold text-sm uppercase tracking-wider mb-2 text-center">
            Comparison
          </p>
          <h2 className="text-2xl lg:text-3xl font-extrabold text-gray-900 mb-8 text-center">
            他社オンラインクリニックとの比較
          </h2>
          <div className="overflow-x-auto rounded-2xl border-2 border-gray-200 shadow-sm">
            <table className="w-full text-sm min-w-[640px]">
              <thead>
                <tr>
                  <th className="w-[22%] text-left p-4 font-bold text-gray-700 bg-gray-50 border-b-2 border-gray-200 rounded-tl-2xl">
                    項目
                  </th>
                  <th className="text-left p-4 font-bold text-white bg-teal-500 border-b-2 border-l border-teal-600">
                    <span className="inline-block">みんなのクリニック</span>
                    <span className="ml-2 inline-block px-2 py-0.5 bg-white/20 rounded text-xs font-normal">おすすめ</span>
                  </th>
                  <th className="text-left p-4 font-bold text-gray-900 bg-gray-100 border-b-2 border-l border-gray-200">
                    オンクリA
                  </th>
                  <th className="text-left p-4 font-bold text-gray-900 bg-gray-100 border-b-2 border-l border-gray-200">
                    オンクリB
                  </th>
                  <th className="text-left p-4 font-bold text-gray-900 bg-gray-100 border-b-2 border-l border-gray-200 rounded-tr-2xl">
                    オンクリC
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b border-gray-100">
                  <td className="p-4 font-semibold text-gray-700 bg-gray-50/80">診療科目</td>
                  <td className="p-4 border-l-2 border-teal-200 bg-teal-50/70 font-medium text-teal-800">
                    AGA / ED / ダイエット
                  </td>
                  <td className="p-4 border-l border-gray-100 text-gray-600">AGA</td>
                  <td className="p-4 border-l border-gray-100 text-gray-600">AGA / ED / ダイエット</td>
                  <td className="p-4 border-l border-gray-100 text-gray-600">AGA / ED / ダイエット</td>
                </tr>
                <tr className="bg-gray-50/30 border-b border-gray-100">
                  <td className="p-4 font-semibold text-gray-700 bg-gray-50/80">初期費用</td>
                  <td className="p-4 border-l-2 border-teal-200 bg-teal-50/70 font-bold text-teal-700">
                    130万円〜
                  </td>
                  <td className="p-4 border-l border-gray-100 text-gray-600">100万円〜<span className="text-gray-400 text-xs block">（実質200万円〜）</span></td>
                  <td className="p-4 border-l border-gray-100 text-gray-600">300万円〜</td>
                  <td className="p-4 border-l border-gray-100 text-gray-600">50万円〜<span className="text-gray-400 text-xs block">（実質150万円〜）</span></td>
                </tr>
                <tr className="bg-white border-b border-gray-100">
                  <td className="p-4 font-semibold text-gray-700 bg-gray-50/80">FC役割</td>
                  <td className="p-4 border-l-2 border-teal-200 bg-teal-50/70">
                    <span className="inline-flex flex-wrap gap-1.5">
                      <span className="px-2 py-0.5 bg-teal-100 text-teal-700 rounded text-xs font-medium">◎集患</span>
                      <span className="px-2 py-0.5 bg-teal-100 text-teal-700 rounded text-xs font-medium">◎売上管理</span>
                    </span>
                  </td>
                  <td className="p-4 border-l border-gray-100 text-gray-600">◎物流 ◎売上管理</td>
                  <td className="p-4 border-l border-gray-100 text-gray-600">◎予約管理 ◎集患 ◎売上管理</td>
                  <td className="p-4 border-l border-gray-100 text-gray-600">◎予約管理 ◎売上管理</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-gray-700 bg-gray-50/80 rounded-bl-2xl">備考</td>
                  <td className="p-4 border-l-2 border-teal-200 bg-teal-50/70 text-gray-500">—</td>
                  <td className="p-4 border-l border-gray-100 text-gray-500 text-xs">物流・物流倉庫は別途用意が必要</td>
                  <td className="p-4 border-l border-gray-100 text-gray-500 text-xs">物流・物流倉庫は別途用意が必要</td>
                  <td className="p-4 border-l border-gray-100 text-gray-500 rounded-br-2xl">—</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FCプラン一覧 - PDF P9 */}
      <section className="py-12 lg:py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-teal-600 font-semibold text-sm uppercase tracking-wider mb-2 text-center">
            加盟金・広告費・FC収益
          </p>
          <h2 className="text-2xl lg:text-3xl font-extrabold text-gray-900 mb-10 text-center">
            FCプラン一覧
          </h2>
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                name: "プランA",
                headerBg: "bg-teal-500",
                borderColor: "border-teal-200",
                fee: [
                  { label: "1科目", value: "300万円（税別）" },
                  { label: "2科目", value: "330万円（税別）" },
                  { label: "3科目", value: "350万円（税別）" },
                ],
                training: "30万円",
                ad: "200万〜",
                rate: "50％〜55％程度",
                sales: [
                  { label: "1科目", sell: "1,500", profit: "500" },
                  { label: "2科目", sell: "1,800", profit: "540" },
                  { label: "3科目", sell: "2,000", profit: "600" },
                ],
              },
              {
                name: "プランB",
                headerBg: "bg-blue-500",
                borderColor: "border-blue-200",
                fee: [
                  { label: "1科目", value: "200万円（税別）" },
                  { label: "2科目", value: "230万円（税別）" },
                  { label: "3科目", value: "250万円（税別）" },
                ],
                training: "30万円",
                ad: "100万",
                rate: "60％程度",
                sales: [
                  { label: "1科目", sell: "800", profit: "200" },
                  { label: "2科目", sell: "900", profit: "225" },
                  { label: "3科目", sell: "1,200", profit: "300" },
                ],
              },
              {
                name: "プランC",
                headerBg: "bg-emerald-500",
                borderColor: "border-emerald-200",
                fee: [
                  { label: "1科目", value: "100万円（税別）" },
                  { label: "2科目", value: "130万円（税別）" },
                  { label: "3科目", value: "150万円（税別）" },
                ],
                training: "30万円",
                ad: "50万円",
                rate: "65％程度",
                sales: [
                  { label: "1科目", sell: "600", profit: "120" },
                  { label: "2科目", sell: "800", profit: "160" },
                  { label: "3科目", sell: "1,000", profit: "200" },
                ],
              },
            ].map((plan) => (
              <div
                key={plan.name}
                className={`rounded-2xl border-2 ${plan.borderColor} bg-white overflow-hidden shadow-sm flex flex-col`}
              >
                <div className={`${plan.headerBg} text-white px-5 py-3.5 text-center`}>
                  <h3 className="font-bold text-lg">{plan.name}</h3>
                </div>
                <div className="p-5 flex-1 flex flex-col gap-4">
                  <div>
                    <p className="text-xs font-bold text-gray-500 mb-1.5">加盟金</p>
                    <ul className="space-y-1">
                      {plan.fee.map((f) => (
                        <li key={f.label} className="flex justify-between text-sm">
                          <span className="text-gray-600">{f.label}</span>
                          <span className="font-semibold text-gray-900">{f.value}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="grid grid-cols-2 gap-x-3 gap-y-2 text-sm">
                    <div>
                      <p className="text-xs font-bold text-gray-500">研修費</p>
                      <p className="font-semibold text-gray-900">{plan.training}</p>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-500">必要広告費</p>
                      <p className="font-semibold text-gray-900">{plan.ad}</p>
                    </div>
                    <div className="col-span-2">
                      <p className="text-xs font-bold text-gray-500">薬剤卸率</p>
                      <p className="font-semibold text-gray-900">{plan.rate}</p>
                    </div>
                  </div>
                  <div className="mt-auto pt-4 border-t border-gray-100">
                    <p className="text-xs font-bold text-gray-500 mb-2">想定売上・利益/月（万円）</p>
                    <ul className="space-y-1.5">
                      {plan.sales.map((s) => (
                        <li key={s.label} className="flex justify-between items-center text-sm">
                          <span className="text-gray-600">{s.label}</span>
                          <span className="text-gray-900">
                            売<span className="font-semibold">{s.sell}</span>
                            <span className="text-gray-400 mx-1">/</span>
                            利<span className="font-semibold text-teal-600">{s.profit}</span>
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 資料請求フォーム */}
      <FCContactForm />

      <Footer />
    </main>
  );
}
