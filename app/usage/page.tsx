import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import UsageAccordion from "@/components/UsageAccordion";

export const metadata: Metadata = {
  title: "ご利用ガイド | メディカルコネクト オンラインクリニック",
  description:
    "サービスの基本的な流れに沿って利用手順をご案内します。診療予約の取り方、問診票の記入、診療の開始からお薬の受け取りまで。",
};

const guideItems = [
  {
    title: "診療予約の取り方",
    steps: [
      { step: 1, title: "「診療予約」を押下" },
      { step: 2, title: "診療科目を選択" },
      {
        step: 3,
        title: "日時を選択",
        detail:
          "日時を選択、または「今すぐ診療する」を押下します。【今すぐ診療について】ご予約から最短15分で診察が開始します。混雑状況により受付していない場合があります。",
      },
      { step: 4, title: "初めてご利用される方のみ基本情報の入力" },
      { step: 5, title: "初めてご利用される方のみメールアドレス認証・アカウント作成" },
      {
        step: 6,
        title: "予約内容の確認",
        detail:
          "日時を選択した場合：診療科目・日時を確認し、予約を完了します。ご登録のメールアドレス宛に予約内容確認のメールが届きます。今すぐ診療の場合：決済・配送情報を入力し、予約を完了します。※予約完了後、続けて問診票をご入力ください。",
      },
    ],
  },
  {
    title: "問診票の記入方法",
    steps: [
      { step: 1, title: "「マイページ」を押下" },
      { step: 2, title: "「診療待ち」から「問診票を入力」を選択" },
      {
        step: 3,
        title: "問診票の記入",
        detail:
          "日時を選択した場合：基本情報(初めてご利用の方のみ)、配送・決済情報、診療情報を登録します。今すぐ診療の場合：問診票を入力します。",
      },
    ],
  },
  {
    title: "診療の開始〜完了まで",
    steps: [
      { step: 1, title: "「マイページ」を押下" },
      { step: 2, title: "「診療待ち」から「診療開始」を選択" },
      {
        step: 3,
        title: "ビデオ通話に入室",
        detail: "カメラとマイクを必ずオンにしてください。",
      },
      {
        step: 4,
        title: "医師との診察",
        detail: "問診票をもとに、症状を確認し処方薬を決定します。",
      },
      {
        step: 5,
        title: "オペレーターとの確認",
        detail: "診療料金や支払い方法、お薬の受け取り場所を確認します。",
      },
      {
        step: 6,
        title: "お会計",
        detail:
          "診察終了後、登録した支払い方法にて自動で決済されます。※PayPayでの決済を選択された場合は、ご自身で決済になります。診察後にお送りするメールをご確認ください。",
      },
    ],
  },
  {
    title: "お薬の受け取り",
    content: [
      "通常配送の場合：指定した住所や受け取り場所でお薬を受け取りください。",
      "当日便の場合：1. ドライバーとマッチ後、配送状況に関するSMSが届く 2. ご自宅でお薬の受け取り ※ドライバーとマッチ後、約3時間でお届けします。※ポストインや置き配には対応できません。※直接お渡しができなければお薬が持ち戻りになるのでご注意ください。",
      "※医師の判断により、処方できない場合があります。",
    ],
  },
  {
    title: "追加注文の申請方法",
    steps: [
      { step: 1, title: "「マイページ」を押下" },
      { step: 2, title: "「追加注文」メニューを選択" },
      {
        step: 3,
        title: "注文したいお薬が処方された診療履歴から「追加注文」を押下",
      },
      {
        step: 4,
        title: "お会計",
        detail: "お薬の数量、お支払い方法を確認し、お会計を行なってください。",
      },
      {
        step: 5,
        title: "お薬の受け取り",
        detail:
          "通常配送の場合は指定した住所や受け取り場所でお薬を受け取りください。当日便の場合はドライバーとマッチ後、SMSが届きご自宅でお受け取りください。※医師の判断により、処方できない場合があります。",
      },
    ],
  },
  {
    title: "定期配送の申請方法",
    steps: [
      { step: 1, title: "「マイページ」を押下" },
      { step: 2, title: "「追加注文」メニューを選択" },
      {
        step: 3,
        title: "注文したいお薬が処方された診療履歴から「追加注文」を押下",
      },
      { step: 4, title: "「定期便へ切り替え」を選択" },
      {
        step: 5,
        title: "お会計",
        detail: "お薬の数量、お支払い方法を確認し、お会計を行なってください。",
      },
      {
        step: 6,
        title: "お薬の受け取り",
        detail: "指定の住所、受け取り場所でお薬を受け取りください。※医師の判断により、処方できない場合があります。",
      },
    ],
  },
];

const usageFaqs = [
  {
    q: "登録しているクレジットカードを変更したいです",
    a: "マイページへログインし、画面右上のアカウント設定内の【クレジットカード】より登録・変更いただけます。決済エラーや残高不足で決済が完了できなかった場合、担当者よりご連絡させていただきます。",
  },
  {
    q: "診察時のカメラとマイクがオンにならない",
    a: "ご利用の機種によって設定方法が異なります。受診の際は予約時間になりましたら、マイページTOPまたは診療一覧の「診療待ち」に表示される予約情報よりビデオツールへご入室ください。スマートフォンの場合：診察開始ボタンを押し、画面内の左上のビデオマークを押すとビデオツールが表示されます。カメラとマイクをオンにした状態でお待ちください。PCの場合：診察開始ボタンを押すと画面上にビデオツールが表示されます。カメラとマイクをオンにした状態でお待ちください。※iOS 17未満のiPhone/iPadでSafariをご利用の場合、ビデオツールが正常に動作しない可能性があります。iOS 17以降へのアップデートまたはChromeなどSafari以外のブラウザのご利用をお願いします。",
  },
  {
    q: "診察の入室方法がわかりません",
    a: "当院ではビデオツールを使用し、診療をおこないます。PC、スマホがご利用いただけます。予約時間になりましたらマイページTOPまたは診療一覧の【診療待ち】に表示される予約情報より「診察開始」ボタンを押し、ビデオツールへご入室いただけます。※診察は診察開始時間から15分以内に開始されます。※診察時間内は入室した状態でお待ちいただくようお願いいたします。",
  },
  {
    q: "予約をした後に変更・キャンセルしたい場合はどうすればいいですか？",
    a: "日時のご変更や事前のキャンセルは患者様ご自身で行っていただく必要がございます。日時変更の場合：(1)マイページにログイン (2)キャンセルしたい予約の「詳細」ボタンを選択 (3)「予約を変更」を選択 (4)ご都合のよろしいお時間にてご変更ください。事前のキャンセルの場合：(1)マイページにログイン (2)キャンセルしたい予約の「詳細」ボタンを選択 (3)診療詳細画面の下部にある「予約をキャンセル」を選択してください。",
  },
  {
    q: "問診の入力内容を修正したいです",
    a: "入力が完了した問診内容は修正ができかねます。問診内容に変更があった場合は診察時に医師へその旨をお伝えください。※申請した問診内容を確認する場合は、マイページ内の「問診票」をご確認ください。",
  },
];

export default function UsagePage() {
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
            <span className="text-gray-900 font-medium">ご利用ガイド</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">
            ご利用ガイド
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            サービスの基本的な流れに沿って
            <br />
            利用手順をご案内します。
          </p>
        </div>
      </section>

      {/* Accordion - 利用手順 */}
      <section className="py-8 lg:py-12 bg-gray-50/50">
        <div className="max-w-4xl mx-auto px-4">
          <UsageAccordion items={guideItems} />
        </div>
      </section>

      {/* よくある質問 */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-extrabold text-gray-900 text-center mb-8">
            よくある質問
          </h2>
          <div className="bg-gray-50 rounded-2xl border border-gray-100 divide-y divide-gray-100 overflow-hidden">
            {usageFaqs.map((faq) => (
              <UsageFaqItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-gray-50 border-t border-gray-100">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <Link
            href="/#contact"
            className="inline-block bg-teal-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-teal-700 transition-colors"
          >
            診療予約をする
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function UsageFaqItem({ q, a }: { q: string; a: string }) {
  return (
    <details className="group">
      <summary className="flex items-start justify-between gap-4 py-5 px-6 cursor-pointer list-none font-semibold text-gray-900 hover:text-teal-600 transition-colors [&::-webkit-details-marker]:hidden">
        <span className="pr-2">{q}</span>
        <span className="usage-faq-arrow flex-shrink-0 w-6 h-6 flex items-center justify-center text-teal-500 transition-transform">
          ▼
        </span>
      </summary>
      <div className="pb-5 px-6 text-gray-600 text-sm leading-relaxed border-t border-gray-100">{a}</div>
    </details>
  );
}
