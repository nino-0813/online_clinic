"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface Step {
  step: number;
  title: string;
  detail?: string;
}

interface GuideItem {
  title: string;
  steps?: Step[];
  content?: string[];
}

function AccordionItem({
  item,
  defaultOpen = false,
}: {
  item: GuideItem;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left hover:text-teal-600 transition-colors"
      >
        <span className="font-bold text-gray-900 text-base">{item.title}</span>
        <ChevronDown
          size={20}
          className={`flex-shrink-0 text-gray-500 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="pb-6 pr-2">
          {item.steps && (
            <ol className="space-y-4">
              {item.steps.map((s) => (
                <li key={s.step} className="flex gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-teal-100 text-teal-700 font-bold text-sm flex items-center justify-center">
                    {s.step}
                  </span>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">{s.title}</div>
                    {s.detail && (
                      <p className="mt-1 text-gray-600 text-sm leading-relaxed">{s.detail}</p>
                    )}
                  </div>
                </li>
              ))}
            </ol>
          )}
          {item.content && item.content.length > 0 && !item.steps && (
            <ul className="space-y-2 text-gray-600 text-sm leading-relaxed">
              {item.content.map((line, i) => (
                <li key={i}>{line}</li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}

export default function UsageAccordion({ items }: { items: GuideItem[] }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      <div className="divide-y divide-gray-100">
        {items.map((item, i) => (
          <div key={item.title} className="px-6">
            <AccordionItem item={item} defaultOpen={i === 0} />
          </div>
        ))}
      </div>
    </div>
  );
}
