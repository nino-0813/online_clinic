"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import type { MenuItem } from "@/lib/menu-data";

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        className="w-full flex items-start justify-between gap-4 py-5 text-left hover:text-blue-600 transition-colors"
        onClick={() => setOpen(!open)}
      >
        <span className="font-semibold text-gray-900 text-base leading-relaxed pr-2">{q}</span>
        <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-colors ${open ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-500"}`}>
          {open ? <Minus size={14} /> : <Plus size={14} />}
        </div>
      </button>
      {open && (
        <div className="pb-5 text-gray-600 text-sm leading-relaxed pr-10">
          {a}
        </div>
      )}
    </div>
  );
}

export default function MenuLPFAQ({ item }: { item: MenuItem }) {
  return (
    <section className="py-16 lg:py-20 bg-white" id="faq">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            よくある質問
          </div>
          <h2 className="text-2xl lg:text-3xl font-extrabold text-gray-900">
            {item.name}について
          </h2>
        </div>
        <div className="bg-gray-50 rounded-2xl p-6">
          {item.faqs.map((faq) => (
            <FAQItem key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </div>
      </div>
    </section>
  );
}
