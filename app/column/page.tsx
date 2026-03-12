import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Dr.コラム | メディカルコネクト オンラインクリニック",
  description:
    "医師監修の健康・医療コラム。AGA、ダイエット、禁煙、睡眠、花粉症など、オンライン診療にまつわる情報を発信しています。",
};

const columns = [
  {
    id: "1",
    title: "AGA治療薬でうつになる？大規模研究が示したリスクと副作用の実際",
    excerpt:
      "AGA治療薬とうつ症状の関連を不安に感じる方は少なくありません。近年の大規模研究では、フィナステリド使用とうつ病や自殺リスクとの明確な関連は認められないと報告されています。今回は、AGA治療薬とメンタルヘルスについて解説します。",
    date: "2026/03/02",
    supervisor: "医師監修",
    category: "男性AGA",
  },
  {
    id: "2",
    title: "AGA治療薬のおすすめはどれ？種類・効果・副作用から目的別の選び方を解説",
    excerpt:
      "AGA治療薬は、目的や症状によって選び方が変わります。抜け毛の進行を抑えるフィナステリドやデュタステリドと、発毛を促すミノキシジルでは、期待できる効果や治療における役割が異なります。この記事では、AGA治療薬の選び方を解説します。",
    date: "2026/02/16",
    supervisor: "医師監修",
    category: "男性AGA",
  },
  {
    id: "3",
    title: "チャンピックスの効果と副作用｜効き目はいつから？不眠・悪夢の注意点",
    excerpt:
      "禁煙治療薬として広く使われているチャンピックスは「薬の力を借りて禁煙したい」と考える人にとって、選択肢のひとつとなる治療薬です。効果がいつから現れるか、不眠や悪夢などの副作用について解説します。",
    date: "2026/02/06",
    supervisor: "医師監修",
    category: "禁煙治療",
  },
  {
    id: "4",
    title: "マンジャロはどれくらい痩せる？ダイエット効果・副作用・安全性を解説",
    excerpt:
      "最近開発された肥満症治療薬マンジャロは、性別や元のBMIによっても差がありますが、肥満のある成人を対象とした研究で体重減少効果が報告されています。効果・副作用・安全性について解説します。",
    date: "2026/01/28",
    supervisor: "医師監修",
    category: "メディカルダイエット",
  },
  {
    id: "5",
    title: "睡眠薬ボルズィとは？効果・副作用と翌朝への影響を解説",
    excerpt:
      "ボルズィは、睡眠に関わるオレキシンを標的とした新しいタイプの睡眠薬です。「なかなか寝付けない」「夜中に目が覚めてしまう」といった不眠症状に対し、覚醒を弱めて眠りに入りやすくします。新しい薬の特徴を解説します。",
    date: "2026/01/22",
    supervisor: "医師監修",
    category: "不眠症・睡眠障害",
  },
  {
    id: "6",
    title: "花粉症の薬に「一番効く」はある？内服・点鼻・点眼の正しい選び方",
    excerpt:
      "花粉症の薬について調べると、「一番効く薬」や「最強ランキング」といった情報が多く見受けられます。くしゃみ・鼻水が主体の人、鼻づまりや目のかゆみが中心の人など、症状に合わせた選び方を解説します。",
    date: "2026/01/22",
    supervisor: "医師監修",
    category: "花粉症",
  },
  {
    id: "7",
    title: "オンライン診療は初めてでも大丈夫？受診の流れと準備するもの",
    excerpt:
      "スマホやPCで医師に相談できるオンライン診療。初めて利用する方のために、予約から問診・診察・お薬の受け取りまでの流れと、事前に準備しておくとよいものをまとめました。",
    date: "2026/01/15",
    supervisor: "医師監修",
    category: "ご利用ガイド",
  },
  {
    id: "8",
    title: "ミノキシジルの効果はいつから？初期脱毛と発毛の流れを解説",
    excerpt:
      "ミノキシジルは、男性型脱毛症（AGA）の代表的な治療薬です。効果が実感できるまでの期間や、使用開始時に抜け毛が増える「初期脱毛」について、発毛のメカニズムとあわせて解説します。",
    date: "2026/01/08",
    supervisor: "医師監修",
    category: "男性AGA",
  },
];

const categoryColor: Record<string, string> = {
  "男性AGA": "bg-blue-100 text-blue-700",
  "禁煙治療": "bg-green-100 text-green-700",
  "メディカルダイエット": "bg-teal-100 text-teal-700",
  "不眠症・睡眠障害": "bg-indigo-100 text-indigo-700",
  "花粉症": "bg-amber-100 text-amber-700",
  "ご利用ガイド": "bg-gray-100 text-gray-700",
};

export default function ColumnPage() {
  return (
    <main>
      <Header />

      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 py-3">
          <nav className="text-sm text-gray-600">
            <Link href="/" className="hover:text-teal-600 transition-colors">
              TOP
            </Link>
            <span className="mx-2">&#62;</span>
            <span className="text-gray-900 font-medium">Dr.コラム</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl lg:text-4xl font-extrabold text-gray-900">
            Dr.コラム
          </h1>
        </div>
      </section>

      {/* コラム一覧 */}
      <section className="py-8 lg:py-12 bg-gray-50/50">
        <div className="max-w-4xl mx-auto px-4">
          <ul className="space-y-6">
            {columns.map((col) => (
              <li key={col.id}>
                <Link
                  href={`/column/${col.id}`}
                  className="block bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md hover:border-teal-100 transition-all"
                >
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 ${
                      categoryColor[col.category] ?? "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {col.category}
                  </span>
                  <h2 className="text-lg font-bold text-gray-900 mb-2 leading-snug hover:text-teal-600 transition-colors">
                    {col.title}
                  </h2>
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-2 mb-4">
                    {col.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <span>{col.date}</span>
                    <span>監修：{col.supervisor}</span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>

          {/* ページネーション（サンプル） */}
          <nav className="mt-12 flex justify-center gap-2" aria-label="コラムページネーション">
            <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-teal-600 text-white font-bold text-sm">
              1
            </span>
            <Link
              href="/column?page=2"
              className="flex items-center justify-center w-10 h-10 rounded-lg border border-gray-200 text-gray-700 font-medium text-sm hover:bg-gray-50 transition-colors"
            >
              2
            </Link>
            <Link
              href="/column?page=3"
              className="flex items-center justify-center w-10 h-10 rounded-lg border border-gray-200 text-gray-700 font-medium text-sm hover:bg-gray-50 transition-colors"
            >
              3
            </Link>
            <span className="flex items-center justify-center w-10 h-10 rounded-lg text-gray-400 text-sm">
              …
            </span>
          </nav>
        </div>
      </section>

      <Footer />
    </main>
  );
}
