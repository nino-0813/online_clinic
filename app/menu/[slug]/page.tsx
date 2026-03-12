import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getMenuItemBySlug, getAllMenuSlugs } from "@/lib/menu-data";
import MenuLPHero from "@/components/MenuLP/MenuLPHero";
import MenuLPAbout from "@/components/MenuLP/MenuLPAbout";
import MenuLPFlow from "@/components/MenuLP/MenuLPFlow";
import MenuLPFAQ from "@/components/MenuLP/MenuLPFAQ";
import MenuLPCTA from "@/components/MenuLP/MenuLPCTA";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllMenuSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getMenuItemBySlug(slug);
  if (!item) return { title: "診療科目 | メディカルコネクト" };
  return {
    title: `${item.name} | メディカルコネクト オンラインクリニック`,
    description: `${item.shortDescription} ${item.price}。診察料0円・24時間オンライン診療。`,
    openGraph: {
      title: `${item.name} | メディカルコネクト`,
      description: item.heroSubtitle,
    },
  };
}

export default async function MenuPage({ params }: Props) {
  const { slug } = await params;
  const item = getMenuItemBySlug(slug);
  if (!item) notFound();

  return (
    <main>
      <Header />
      <MenuLPHero item={item} />
      <MenuLPAbout item={item} />
      <MenuLPFlow />
      <MenuLPFAQ item={item} />
      <MenuLPCTA item={item} />
      <Footer />
    </main>
  );
}
