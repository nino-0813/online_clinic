import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";
import { getMenuItemsByCategory } from "@/lib/menu-data";

const colorMap: Record<string, { bg: string; text: string; border: string; tag: string; tagText: string }> = {
  blue: { bg: "bg-blue-50", text: "text-blue-600", border: "border-blue-100", tag: "bg-blue-600", tagText: "text-white" },
  pink: { bg: "bg-pink-50", text: "text-pink-600", border: "border-pink-100", tag: "bg-pink-500", tagText: "text-white" },
  teal: { bg: "bg-teal-50", text: "text-teal-600", border: "border-teal-100", tag: "bg-teal-500", tagText: "text-white" },
  green: { bg: "bg-green-50", text: "text-green-600", border: "border-green-100", tag: "bg-green-600", tagText: "text-white" },
  indigo: { bg: "bg-indigo-50", text: "text-indigo-600", border: "border-indigo-100", tag: "bg-indigo-600", tagText: "text-white" },
  orange: { bg: "bg-orange-50", text: "text-orange-600", border: "border-orange-100", tag: "bg-orange-500", tagText: "text-white" },
};

export const metadata: Metadata = {
  title: "診療科目一覧 | みんなのオンクリ",
  description:
    "AGA・ED・ダイエット・スキンケア・禁煙・アレルギーなど、18科目以上の専門診療をオンラインで提供。各科目の詳細はページからご確認ください。",
};

export default function ServicesPage() {
  const serviceCategories = getMenuItemsByCategory();

  return (
    <main>
      <Header />

      <section className="pt-24 pb-12 lg:pt-28 lg:pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-teal-50 border border-teal-200 text-teal-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              診療科目
            </div>
            <h1 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">
              幅広い診療科目に<span className="text-blue-600">対応</span>
            </h1>
            <p className="text-gray-600 text-lg max-w-xl mx-auto">
              18科目以上の専門診療をオンラインで提供。各科目の説明は各ページでご確認いただけます。
            </p>
          </div>

          <div className="flex flex-col gap-10">
            {serviceCategories.map((category) => {
              const colors = colorMap[category.color];
              return (
                <div key={category.category}>
                  <div className={`inline-flex items-center gap-2 ${colors.bg} ${colors.text} px-4 py-1.5 rounded-full text-sm font-bold mb-4`}>
                    {category.category}
                  </div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {category.services.map((service) => (
                      <a
                        key={service.slug}
                        href={`/menu/${service.slug}`}
                        className={`group block bg-white border ${colors.border} rounded-2xl p-5 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 relative overflow-hidden`}
                      >
                        {service.tag && (
                          <div className={`absolute top-3 right-3 ${colors.tag} ${colors.tagText} text-xs font-bold px-2.5 py-1 rounded-full`}>
                            {service.tag}
                          </div>
                        )}
                        <h2 className="font-bold text-gray-900 text-base mb-2 pr-14">{service.name}</h2>
                        <p className="text-gray-500 text-sm leading-relaxed mb-4">{service.description}</p>
                        <div className="flex items-center justify-between">
                          <span className={`font-extrabold ${colors.text} text-sm`}>{service.price}</span>
                          <ArrowRight size={16} className={`${colors.text} group-hover:translate-x-1 transition-transform`} />
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-10 text-center">
            <p className="text-gray-500 text-sm mb-4">
              ＊上記以外の診療についてはお問い合わせください
            </p>
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold text-base hover:bg-blue-700 transition-colors"
            >
              お問い合わせはこちら
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
