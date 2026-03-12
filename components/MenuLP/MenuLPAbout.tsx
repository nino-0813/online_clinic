import type { MenuItem } from "@/lib/menu-data";

export default function MenuLPAbout({ item }: { item: MenuItem }) {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl lg:text-3xl font-extrabold text-gray-900 mb-6">
          {item.aboutTitle}
        </h2>
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 leading-relaxed text-base lg:text-lg">
            {item.aboutBody}
          </p>
          {item.aboutNote && (
            <p className="mt-4 text-gray-500 text-sm">
              {item.aboutNote}
            </p>
          )}
        </div>
        {item.planHighlights && item.planHighlights.length > 0 && (
          <div className="mt-8 p-6 bg-gray-50 rounded-2xl">
            <h3 className="font-bold text-gray-900 mb-3">プラン例</h3>
            <ul className="flex flex-wrap gap-2">
              {item.planHighlights.map((p) => (
                <li key={p}>
                  <span className="inline-block bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-xl text-sm font-medium">
                    {p}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
