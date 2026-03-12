import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const columnsData: Record<
  string,
  { title: string; date: string; supervisor: string; category: string; body: string }
> = {
  "1": {
    title: "AGA治療薬でうつになる？大規模研究が示したリスクと副作用の実際",
    date: "2026/03/02",
    supervisor: "医師監修",
    category: "男性AGA",
    body: "AGA治療薬とうつ症状の関連を不安に感じる方は少なくありません。近年の大規模研究では、フィナステリド使用とうつ病や自殺リスクとの明確な関連は認められないと報告されています。\n\n治療を続けるうえで気になるメンタルヘルスとの関係について、エビデンスに基づいて解説しています。気になる症状がある場合は、主治医にご相談ください。",
  },
  "2": {
    title: "AGA治療薬のおすすめはどれ？種類・効果・副作用から目的別の選び方を解説",
    date: "2026/02/16",
    supervisor: "医師監修",
    category: "男性AGA",
    body: "AGA治療薬は、目的や症状によって選び方が変わります。抜け毛の進行を抑えるフィナステリドやデュタステリドと、発毛を促すミノキシジルでは、期待できる効果や治療における役割が異なります。\n\nこの記事では、AGA治療薬の種類・効果・副作用と、目的別の選び方を解説しています。ご自身に合った治療を見つける参考にしてください。",
  },
  "3": {
    title: "チャンピックスの効果と副作用｜効き目はいつから？不眠・悪夢の注意点",
    date: "2026/02/06",
    supervisor: "医師監修",
    category: "禁煙治療",
    body: "禁煙治療薬として広く使われているチャンピックスは、ニコチン受容体に作用し、喫煙の欲求を抑えつつ離脱症状を和らげます。\n\n効果が現れる時期や、不眠・悪夢などの副作用、服用中の注意点について解説しています。禁煙をお考えの方は、医師に相談のうえご検討ください。",
  },
  "4": {
    title: "マンジャロはどれくらい痩せる？ダイエット効果・副作用・安全性を解説",
    date: "2026/01/28",
    supervisor: "医師監修",
    category: "メディカルダイエット",
    body: "肥満症治療薬マンジャロは、GLP-1受容体作動薬の一種で、食欲の抑制や体重減少効果が期待されています。\n\n臨床試験で報告されている減量効果の目安、主な副作用、使用時の注意点についてまとめています。医療ダイエットをご検討の方は、医師の診察を受け、適切な用法でご利用ください。",
  },
  "5": {
    title: "睡眠薬ボルズィとは？効果・副作用と翌朝への影響を解説",
    date: "2026/01/22",
    supervisor: "医師監修",
    category: "不眠症・睡眠障害",
    body: "ボルズィは、覚醒を司るオレキシンに作用する新しいタイプの睡眠薬です。入眠困難や中途覚醒の改善に用いられます。\n\n従来の睡眠薬との違い、効果・副作用、翌朝の眠気や持ち越しについて解説しています。不眠でお悩みの方は、医師にご相談ください。",
  },
  "6": {
    title: "花粉症の薬に「一番効く」はある？内服・点鼻・点眼の正しい選び方",
    date: "2026/01/22",
    supervisor: "医師監修",
    category: "花粉症",
    body: "花粉症の症状は人それぞれです。くしゃみ・鼻水が主体の方、鼻づまりが強い方、目のかゆみがつらい方など、症状に応じて最適な薬の組み合わせが異なります。\n\n内服薬・点鼻薬・点眼薬の特徴と、症状別の選び方の目安を解説しています。シーズン前からの対策もあわせてご紹介しています。",
  },
  "7": {
    title: "オンライン診療は初めてでも大丈夫？受診の流れと準備するもの",
    date: "2026/01/15",
    supervisor: "医師監修",
    category: "ご利用ガイド",
    body: "オンライン診療は、スマホやPCから医師に相談できるサービスです。初めての方でも、予約・問診・診察・お薬の受け取りまで、流れに沿って進めればスムーズに利用できます。\n\n受診前に準備しておくとよいもの（身分証明書、ネット環境、カメラ・マイクの確認など）と、当日の流れをまとめています。",
  },
  "8": {
    title: "ミノキシジルの効果はいつから？初期脱毛と発毛の流れを解説",
    date: "2026/01/08",
    supervisor: "医師監修",
    category: "男性AGA",
    body: "ミノキシジルは、AGA（男性型脱毛症）の代表的な治療薬の一つです。効果を実感するまでには個人差がありますが、継続使用が大切です。\n\n使用開始後に一時的に抜け毛が増える「初期脱毛」のメカニズムと、その後の発毛の流れについて解説しています。治療を続ける際の参考にしてください。",
  },
};

type Props = { params: Promise<{ id: string }> };

export function generateStaticParams() {
  return Object.keys(columnsData).map((id) => ({ id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const col = columnsData[id];
  if (!col) return { title: "Dr.コラム | メディカルコネクト" };
  return {
    title: `${col.title} | Dr.コラム | メディカルコネクト`,
    description: col.body.slice(0, 120) + "…",
  };
}

export default async function ColumnDetailPage({ params }: Props) {
  const { id } = await params;
  const col = columnsData[id];
  if (!col) notFound();

  return (
    <main>
      <Header />

      <div className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-4 py-3">
          <nav className="text-sm text-gray-600">
            <Link href="/" className="hover:text-teal-600">TOP</Link>
            <span className="mx-2">&#62;</span>
            <Link href="/column" className="hover:text-teal-600">Dr.コラム</Link>
            <span className="mx-2">&#62;</span>
            <span className="text-gray-900 font-medium line-clamp-1">{col.title}</span>
          </nav>
        </div>
      </div>

      <article className="py-12 lg:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-teal-100 text-teal-700 mb-4">
            {col.category}
          </span>
          <h1 className="text-2xl lg:text-3xl font-extrabold text-gray-900 mb-6 leading-tight">
            {col.title}
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-8">
            <time dateTime={col.date}>{col.date}</time>
            <span>監修：{col.supervisor}</span>
          </div>
          <div className="prose prose-gray max-w-none">
            {col.body.split("\n\n").map((p, i) => (
              <p key={i} className="text-gray-700 leading-relaxed mb-4">
                {p}
              </p>
            ))}
          </div>
          <div className="mt-12 pt-8 border-t border-gray-100">
            <Link href="/column" className="text-teal-600 font-semibold hover:underline">
              ← Dr.コラム一覧へ
            </Link>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
