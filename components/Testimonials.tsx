import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "T.K さん",
    age: "32歳・男性",
    service: "AGA治療",
    rating: 5,
    comment:
      "仕事が忙しくてなかなか病院に行けなかったのですが、夜中でも予約できて本当に助かりました。診察料無料なのも嬉しい。3ヶ月で効果を実感しています。",
  },
  {
    name: "M.S さん",
    age: "28歳・女性",
    service: "ダイエット外来",
    rating: 5,
    comment:
      "恥ずかしくて対面では相談しにくかったのですが、オンラインなので気軽に話せました。先生も親身に話を聞いてくれて、無理のない治療プランを立ててもらえました。",
  },
  {
    name: "R.Y さん",
    age: "45歳・男性",
    service: "ED治療",
    rating: 5,
    comment:
      "プライバシーに配慮した梱包で届くので安心できました。スマホだけで全て完結するので、忙しいビジネスマンにとって最高のサービスです。",
  },
  {
    name: "A.N さん",
    age: "35歳・女性",
    service: "スキンケア",
    rating: 5,
    comment:
      "何度も皮膚科に通ってたのに改善しなかったニキビが、処方してもらった薬で改善しました。LINEでいつでも相談できるのも安心感があります。",
  },
  {
    name: "K.T さん",
    age: "52歳・男性",
    service: "禁煙外来",
    rating: 4,
    comment:
      "禁煙は何度も挑戦して失敗してきましたが、オンラインで気軽に相談できる環境があったおかげで成功しました。先生のサポートが心強かったです。",
  },
  {
    name: "Y.H さん",
    age: "26歳・女性",
    service: "アレルギー治療",
    rating: 5,
    comment:
      "花粉症がひどくて毎年つらかったのですが、シーズン前から処方してもらったことで今年は全然症状が出ませんでした。驚きました！",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-gray-50 to-white" id="testimonials">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-yellow-50 border border-yellow-200 text-yellow-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            患者様の声
          </div>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">
            <span className="text-blue-600">50万人</span>以上が
            <br />
            実感した変化
          </h2>
          <div className="flex items-center justify-center gap-2 text-yellow-500">
            {[1,2,3,4,5].map(i => (
              <Star key={i} size={22} className="fill-yellow-400" />
            ))}
            <span className="text-gray-800 font-extrabold text-xl ml-1">4.8</span>
            <span className="text-gray-500 text-sm">/ 5.0</span>
          </div>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-shadow flex flex-col gap-4"
            >
              <Quote size={20} className="text-blue-200 flex-shrink-0" />
              <p className="text-gray-700 text-sm leading-relaxed flex-1">{t.comment}</p>
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div>
                  <div className="font-bold text-gray-900 text-sm">{t.name}</div>
                  <div className="text-gray-500 text-xs">{t.age}・{t.service}</div>
                </div>
                <div className="flex gap-0.5">
                  {[1,2,3,4,5].map(i => (
                    <Star
                      key={i}
                      size={12}
                      className={i <= t.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-200 fill-gray-200"}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
