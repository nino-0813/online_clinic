"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone, ChevronDown } from "lucide-react";

type NavItem = {
  label: string;
  href: string;
  labelLine2?: string;
  children?: { label: string; href: string }[];
};

const navItems: NavItem[] = [
  { label: "TOP", href: "/" },
  {
    label: "診療科目",
    href: "/services",
    children: [
      { label: "AGA（薄毛）治療", href: "/menu/aga" },
      { label: "ED治療", href: "/menu/ed" },
      { label: "ダイエット", href: "/menu/diet-male" },
      { label: "スキンケア", href: "/menu/acne" },
      { label: "禁煙外来", href: "/menu/smoking-cessation" },
      { label: "アレルギー", href: "/menu/allergy" },
    ],
  },
  { label: "みんなのオンクリとは", href: "/about" },
  { label: "ご利用ガイド", href: "/usage" },
  { label: "FC加盟店募集", href: "/fc" },
  { label: "Dr.コラム", href: "/column" },
  { label: "お問い合わせ", href: "/#contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white shadow-md py-2"
            : "bg-white/95 backdrop-blur-sm py-3"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-600 to-teal-500 flex items-center justify-center">
              <span className="text-white font-bold text-xs">オン</span>
            </div>
            <div>
              <span className="text-blue-700 font-bold text-lg leading-none block">
                みんなのオンクリ
              </span>
              <span className="text-gray-500 text-xs">オンラインクリニック</span>
            </div>
          </a>

          {/* Desktop Nav - 画像と同じ並び・ティール下線・ダークグレー */}
          <nav className="hidden lg:flex items-center gap-6 pb-3 border-b-2 border-teal-400">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <a
                  href={item.href}
                  className="flex items-center gap-1 px-1 py-2 text-[#343c45] hover:text-teal-600 font-medium text-sm transition-colors"
                >
                  {"labelLine2" in item && item.labelLine2 ? (
                    <span className="text-left leading-tight">
                      <span className="block">{item.label}</span>
                      <span className="block">{item.labelLine2}</span>
                    </span>
                  ) : (
                    <>
                      {item.label}
                      {item.children && <ChevronDown size={14} className="ml-0.5" />}
                    </>
                  )}
                </a>
                {item.children && openDropdown === item.label && (
                  <div className="absolute top-full left-0 mt-1 bg-white rounded-xl shadow-xl border border-gray-100 py-2 min-w-48 z-50">
                    {item.children.map((child) => (
                      <a
                        key={child.label}
                        href={child.href}
                        className="block px-4 py-2.5 text-sm text-[#343c45] hover:text-teal-600 hover:bg-teal-50 transition-colors"
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:0120-000-000"
              className="flex items-center gap-1.5 text-blue-600 font-medium text-sm hover:text-blue-700"
            >
              <Phone size={15} />
              <span>0120-000-000</span>
            </a>
            <a
              href="#contact"
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-5 py-2.5 rounded-full font-bold text-sm hover:shadow-lg hover:from-blue-700 hover:to-blue-800 transition-all"
            >
              無料で診療を始める
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 text-gray-700"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
          >
            {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      {isMobileOpen && (
        <div className="fixed inset-0 z-40 bg-white pt-16 safe-area-inset-bottom overflow-y-auto">
          <div className="p-4 sm:p-6 flex flex-col gap-1 min-h-full pb-[env(safe-area-inset-bottom)]">
            {navItems.map((item) => (
              <div key={item.label}>
                <a
                  href={item.href}
                  className="block py-3 px-4 text-gray-800 font-medium text-lg border-b border-gray-100"
                  onClick={() => setIsMobileOpen(false)}
                >
                  {"labelLine2" in item && item.labelLine2 ? (
                    <>
                      <span className="block">{item.label}</span>
                      <span className="block text-base text-gray-600">{item.labelLine2}</span>
                    </>
                  ) : (
                    item.label
                  )}
                </a>
                {item.children && (
                  <div className="pl-4">
                    {item.children.map((child) => (
                      <a
                        key={child.label}
                        href={child.href}
                        className="block py-2.5 px-4 text-gray-600 text-base"
                        onClick={() => setIsMobileOpen(false)}
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="mt-6 flex flex-col gap-3">
              <a
                href="tel:0120-000-000"
                className="flex items-center justify-center gap-2 border-2 border-blue-600 text-blue-600 py-3 rounded-full font-bold text-base"
              >
                <Phone size={18} />
                0120-000-000
              </a>
              <a
                href="#contact"
                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3.5 rounded-full font-bold text-base text-center"
                onClick={() => setIsMobileOpen(false)}
              >
                無料で診療を始める
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
