import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "メディカルコネクト | オンラインクリニック",
  description: "スマホひとつで完結。24時間受付・診察料無料のオンラインクリニック。AGA・ED・ダイエット・スキンケアなど幅広い診療科目に対応。",
  keywords: "オンライン診療,オンラインクリニック,AGA,ED,ダイエット,スキンケア,禁煙,遠隔診療",
  openGraph: {
    title: "メディカルコネクト | オンラインクリニック",
    description: "スマホひとつで完結。24時間受付・診察料無料のオンラインクリニック。",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${notoSansJP.className} antialiased`}>{children}</body>
    </html>
  );
}
