export type MenuColor = "blue" | "pink" | "teal" | "green" | "indigo" | "orange";

export interface MenuItem {
  slug: string;
  name: string;
  shortDescription: string;
  price: string;
  category: string;
  color: MenuColor;
  tag?: string | null;
  // LP content
  heroTitle: string;
  heroSubtitle: string;
  benefits: { label: string; text: string }[];
  aboutTitle: string;
  aboutBody: string;
  aboutNote?: string;
  faqs: { q: string; a: string }[];
  planHighlights?: string[];
}

const defaultFlowNote = "診察料0円・配送料550円（税込）。公的医療保険が適用されない自由診療です。";

export const menuItems: MenuItem[] = [
  {
    slug: "aga",
    name: "AGA（薄毛）治療",
    shortDescription: "男性型脱毛症の専門治療。内服薬で発毛を促進します。",
    price: "月額 2,970円〜",
    category: "男性向け",
    color: "blue",
    tag: "人気No.1",
    heroTitle: "AGAはメディカルコネクト",
    heroSubtitle: "診療実績多数・月額2,970円〜（税込）で、通院不要・24時間オンライン診療。診察料0円・配送料550円。",
    benefits: [
      { label: "通院時間0分", text: "スマホだけで完結" },
      { label: "24時間オンライン診療", text: "いつでも予約可能" },
      { label: "最短翌日お届け", text: "自宅・コンビニ受取可" },
      { label: "診察料0円", text: "お薬代と配送料のみ" },
    ],
    aboutTitle: "AGAとは？",
    aboutBody: "AGA（男性型脱毛症）は、10代以降の男性でみられる脱毛症です。徐々に進行し、20代後半から30代にかけて目立ってきます。日本人男性の約3分の1が発症するといわれており、早期の治療で進行を抑え、発毛を促すことが可能です。当院では内服薬（フィナステリド・デュタステリド）とミノキシジルを組み合わせた治療で、多くの方に効果を実感いただいています。",
    aboutNote: defaultFlowNote,
    planHighlights: [
      "予防プラン（月額2,097円〜）",
      "発毛ライトプラン",
      "発毛ベーシックプラン",
      "発毛ストロングプラン",
    ],
    faqs: [
      { q: "どのくらいで効果が出ますか？", a: "個人差はありますが、内服薬は1〜3ヶ月、ミノキシジルは3〜6ヶ月程度で効果を実感される方が多いです。継続することが大切です。" },
      { q: "市販の育毛剤との違いは？", a: "医療機関では有効成分の濃度が高い処方や、内服薬による根本的な治療が可能です。市販品では得られない効果が期待できます。" },
      { q: "副作用はありますか？", a: "まれに性機能への影響や頭痛などを訴える方もいます。医師が一人ひとりに合わせて処方し、不安な点はいつでもご相談いただけます。" },
    ],
  },
  {
    slug: "ed",
    name: "ED治療",
    shortDescription: "勃起不全の治療。プロが丁寧にサポートします。",
    price: "月額 1,980円〜",
    category: "男性向け",
    color: "blue",
    tag: "人気",
    heroTitle: "ED治療はメディカルコネクト",
    heroSubtitle: "月額1,980円〜（税込）。診察料0円・完全匿名配送で、自宅にいながら専門治療が受けられます。",
    benefits: [
      { label: "通院不要", text: "オンライン診療のみ" },
      { label: "匿名配送", text: "中身が分からない梱包" },
      { label: "24時間予約", text: "いつでも相談可能" },
      { label: "診察料0円", text: "お薬代のみ" },
    ],
    aboutTitle: "ED治療について",
    aboutBody: "ED（勃起不全）は、ストレスや生活習慣、加齢などさまざまな要因で起こります。当院ではバイアグラ・シアリス・レビトラなどの内服薬を、医師の診察のもと適切に処方します。まずはお気軽にご相談ください。",
    aboutNote: defaultFlowNote,
    faqs: [
      { q: "初めてでも大丈夫ですか？", a: "はい。問診とオンライン診察で医師が状態を確認し、適切な薬と用量を処方します。不安な点は何でもご相談ください。" },
      { q: "配送はバレませんか？", a: "送り状の差出人名は「メディカルコネクト」のみで、中身が分かる表記は一切しません。プライバシーに配慮した配送です。" },
    ],
  },
  {
    slug: "premature-ejaculation",
    name: "早漏治療",
    shortDescription: "性的機能の改善。専門医が適切な治療法を提案します。",
    price: "月額 2,200円〜",
    category: "男性向け",
    color: "blue",
    heroTitle: "早漏治療はメディカルコネクト",
    heroSubtitle: "月額2,200円〜（税込）。診察料0円・オンライン診療で、専門医がお悩みに合わせた治療を提案します。",
    benefits: [
      { label: "通院不要", text: "自宅で完結" },
      { label: "専門医が診察", text: "適切な薬を処方" },
      { label: "24時間予約", text: "いつでも相談" },
      { label: "診察料0円", text: "お薬代と配送料のみ" },
    ],
    aboutTitle: "早漏治療について",
    aboutBody: "早漏は、パートナーとの関係やストレスに影響することもあるお悩みです。当院ではSSRI系の内服薬など、医学的に有効とされる治療をオンライン診療で提供しています。医師が状態に合わせて最適なプランをご提案します。",
    aboutNote: defaultFlowNote,
    faqs: [
      { q: "どのような薬を使いますか？", a: "症状に応じて、SSRI系の内服薬などを処方します。医師の診察のうえ、適切な用量でお渡しします。" },
      { q: "効果はいつ頃から出ますか？", a: "個人差はありますが、継続服用で効果を実感される方が多いです。詳しくは診察時にご説明します。" },
    ],
  },
  {
    slug: "aga-female",
    name: "女性AGA治療",
    shortDescription: "女性の薄毛・抜け毛の専門治療。",
    price: "月額 3,300円〜",
    category: "女性向け",
    color: "pink",
    heroTitle: "女性の薄毛・抜け毛治療",
    heroSubtitle: "月額3,300円〜（税込）。女性専門のオンライン診療で、薄毛・抜け毛のお悩みに寄り添います。診察料0円。",
    benefits: [
      { label: "女性医師対応可", text: "希望に応じてご案内" },
      { label: "通院不要", text: "スマホで完結" },
      { label: "24時間予約", text: "いつでも相談" },
      { label: "診察料0円", text: "お薬代と配送料のみ" },
    ],
    aboutTitle: "女性の薄毛・抜け毛について",
    aboutBody: "女性でもホルモンバランスの変化やストレス、加齢などで薄毛・抜け毛が気になる方が増えています。当院ではミノキシジル外用薬や内服薬など、女性に適した治療を医師が診察のうえ処方します。",
    aboutNote: defaultFlowNote,
    faqs: [
      { q: "妊娠中・授乳中でも受けられますか？", a: "妊娠中・授乳中の方は、お薬の影響があるため受診をご遠慮いただく場合があります。まずは問診でご相談ください。" },
      { q: "効果はいつ頃から出ますか？", a: "個人差はありますが、3〜6ヶ月継続で実感される方が多いです。継続治療をおすすめしています。" },
    ],
  },
  {
    slug: "diet-female",
    name: "女性ダイエット",
    shortDescription: "GLP-1受容体作動薬を使用した医療ダイエット。",
    price: "月額 4,400円〜",
    category: "女性向け",
    color: "pink",
    tag: "注目",
    heroTitle: "女性の医療ダイエット",
    heroSubtitle: "月額4,400円〜（税込）。GLP-1など医師が管理する医療ダイエットで、無理なく健康的に。診察料0円。",
    benefits: [
      { label: "医師が管理", text: "安全な医療プログラム" },
      { label: "通院不要", text: "オンラインで完結" },
      { label: "食事指導付き", text: "無理のない継続" },
      { label: "診察料0円", text: "お薬代と配送料のみ" },
    ],
    aboutTitle: "医療ダイエットについて",
    aboutBody: "当院ではGLP-1受容体作動薬などを用いた、医師監修の医療ダイエットプログラムをご提供しています。単なるダイエットではなく、健康状態を確認しながら無理なく体重管理をサポートします。",
    aboutNote: defaultFlowNote,
    faqs: [
      { q: "GLP-1とは何ですか？", a: "食欲を抑え、血糖コントロールにも関わる薬です。医師の診察のもと、適切な方に処方します。" },
      { q: "リバウンドはありますか？", a: "治療終了後の生活習慣次第です。当院では食事・運動のアドバイスも行い、維持しやすい体づくりをサポートします。" },
    ],
  },
  {
    slug: "pill",
    name: "低用量ピル",
    shortDescription: "月経困難症・避妊のための低用量ピル処方。",
    price: "月額 1,650円〜",
    category: "女性向け",
    color: "pink",
    heroTitle: "低用量ピルはメディカルコネクト",
    heroSubtitle: "月額1,650円〜（税込）。避妊・月経困難症・PMS対策など、目的に合ったピルをオンライン診療で。診察料0円。",
    benefits: [
      { label: "通院不要", text: "オンラインで処方" },
      { label: "定期便あり", text: "忘れずに継続" },
      { label: "24時間予約", text: "いつでも相談" },
      { label: "診察料0円", text: "お薬代と配送料のみ" },
    ],
    aboutTitle: "低用量ピルについて",
    aboutBody: "低用量ピルは避妊のほか、月経痛の軽減、月経周期のコントロール、PMS（月経前症候群）の緩和などに使われます。当院では医師が問診・診察のうえ、お一人おひとりに合ったピルをご提案します。",
    aboutNote: defaultFlowNote,
    faqs: [
      { q: "初めてでも処方してもらえますか？", a: "はい。問診とオンライン診察で医師が状態を確認し、適切な種類と用法を処方します。" },
      { q: "血栓症のリスクはありますか？", a: "低用量ピルにはごくまれに血栓症のリスクがあります。問診でリスク因子を確認し、安全に処方いたします。" },
    ],
  },
  {
    slug: "acne",
    name: "ニキビ治療",
    shortDescription: "顔・背中のニキビを専門医が根本から改善。",
    price: "月額 1,980円〜",
    category: "美容・スキンケア",
    color: "teal",
    heroTitle: "ニキビ治療はメディカルコネクト",
    heroSubtitle: "月額1,980円〜（税込）。内服・外用で顔・背中ニキビを根本から改善。診察料0円・オンライン診療。",
    benefits: [
      { label: "内服・外用", text: "症状に合わせて処方" },
      { label: "通院不要", text: "スマホで完結" },
      { label: "24時間予約", text: "いつでも相談" },
      { label: "診察料0円", text: "お薬代と配送料のみ" },
    ],
    aboutTitle: "ニキビ治療について",
    aboutBody: "ニキビは毛穴の詰まりとアクネ菌の増殖が原因です。当院では抗生物質やビタミン剤の内服、外用薬を組み合わせ、重症度に応じた治療を行います。繰り返すニキビも継続治療で改善を目指します。",
    aboutNote: defaultFlowNote,
    faqs: [
      { q: "背中ニキビも診てもらえますか？", a: "はい。写真の送付で診察可能です。内服薬を中心に、背中ニキビにも対応しています。" },
      { q: "どのくらいで治りますか？", a: "軽症では2〜4週間、重症では数ヶ月かかる場合もあります。継続治療で再発を抑えます。" },
    ],
  },
  {
    slug: "skin-spots",
    name: "シミ・くすみ改善",
    shortDescription: "美白・肌質改善の内服薬を処方。",
    price: "月額 3,300円〜",
    category: "美容・スキンケア",
    color: "teal",
    heroTitle: "シミ・くすみ改善",
    heroSubtitle: "月額3,300円〜（税込）。美白・肌質改善の内服薬をオンライン診療で。診察料0円。",
    benefits: [
      { label: "内服でケア", text: "体の内側からサポート" },
      { label: "通院不要", text: "オンラインで完結" },
      { label: "24時間予約", text: "いつでも相談" },
      { label: "診察料0円", text: "お薬代と配送料のみ" },
    ],
    aboutTitle: "シミ・くすみ改善について",
    aboutBody: "シミ・くすみには、トラネキサム酸やビタミンCなどの内服薬が有効な場合があります。当院では医師が肌状態に合わせて処方し、美白・肌質改善をサポートします。",
    aboutNote: defaultFlowNote,
    faqs: [
      { q: "どのような薬を使いますか？", a: "トラネキサム酸、ビタミンC、L-システインなど、シミ・くすみに有効な内服薬を処方します。" },
      { q: "効果はいつ頃から出ますか？", a: "個人差はありますが、2〜3ヶ月継続で実感される方が多いです。" },
    ],
  },
  {
    slug: "anti-aging",
    name: "アンチエイジング",
    shortDescription: "若返りのための総合スキンケアプログラム。",
    price: "月額 4,950円〜",
    category: "美容・スキンケア",
    color: "teal",
    tag: "人気",
    heroTitle: "アンチエイジング治療",
    heroSubtitle: "月額4,950円〜（税込）。内服・外用で若々しい肌と体をサポート。診察料0円・オンライン診療。",
    benefits: [
      { label: "総合プログラム", text: "内服・外用でトータルケア" },
      { label: "通院不要", text: "自宅で完結" },
      { label: "24時間予約", text: "いつでも相談" },
      { label: "診察料0円", text: "お薬代と配送料のみ" },
    ],
    aboutTitle: "アンチエイジングについて",
    aboutBody: "アンチエイジングでは、ビタミン・ミネラル・ホルモン補充など、エビデンスに基づいた内服・外用療法をご提案します。医師が状態に合わせてプランを作成し、無理のない若々しさの維持をサポートします。",
    aboutNote: defaultFlowNote,
    faqs: [
      { q: "どのような治療がありますか？", a: "ビタミン剤、プラセンタ、ホルモン補充など、目的に応じた処方があります。診察時にご希望をお聞かせください。" },
      { q: "効果はいつ頃から実感できますか？", a: "内容により異なりますが、2〜3ヶ月継続で実感される方が多いです。" },
    ],
  },
  {
    slug: "diet-male",
    name: "ダイエット外来（男性）",
    shortDescription: "医師が管理する安全な医療ダイエットプログラム。",
    price: "月額 4,400円〜",
    category: "生活習慣",
    color: "green",
    tag: "注目",
    heroTitle: "男性の医療ダイエット",
    heroSubtitle: "月額4,400円〜（税込）。GLP-1など医師監修の医療ダイエットで、健康的に体重管理。診察料0円。",
    benefits: [
      { label: "医師が管理", text: "安全なプログラム" },
      { label: "通院不要", text: "オンラインで完結" },
      { label: "食事・運動アドバイス", text: "継続しやすい" },
      { label: "診察料0円", text: "お薬代と配送料のみ" },
    ],
    aboutTitle: "医療ダイエット（男性）について",
    aboutBody: "当院ではGLP-1受容体作動薬などを用いた、医師監修の医療ダイエットを男性向けに提供しています。健康状態を確認しながら、無理のない体重管理をサポートします。",
    aboutNote: defaultFlowNote,
    faqs: [
      { q: "運動は必要ですか？", a: "薬だけに頼らず、食事と運動のアドバイスも行います。無理のない範囲で継続できるプランをご提案します。" },
      { q: "どのくらいで痩せますか？", a: "個人差がありますが、3〜6ヶ月で効果を実感される方が多いです。" },
    ],
  },
  {
    slug: "smoking-cessation",
    name: "禁煙外来",
    shortDescription: "ニコチン依存症の薬物療法。成功率の高い治療。",
    price: "月額 2,200円〜",
    category: "生活習慣",
    color: "green",
    heroTitle: "禁煙治療はメディカルコネクト",
    heroSubtitle: "月額2,200円〜（税込）。飲み薬・貼り薬で無理なく禁煙。診察料0円・オンライン診療。",
    benefits: [
      { label: "薬で楽に禁煙", text: "飲み薬・貼り薬" },
      { label: "通院不要", text: "オンラインで完結" },
      { label: "24時間予約", text: "いつでも相談" },
      { label: "診察料0円", text: "お薬代と配送料のみ" },
    ],
    aboutTitle: "禁煙治療について",
    aboutBody: "禁煙補助薬（チャンピックス・ニコチンパッチなど）を使うことで、離脱症状を抑えながら禁煙しやすくなります。当院では医師が喫煙歴や健康状態を確認し、最適な治療法をご提案します。",
    aboutNote: defaultFlowNote,
    faqs: [
      { q: "保険は使えますか？", a: "当院は自由診療のため保険適用外です。その代わり診察料0円で、お薬代と配送料のみの負担です。" },
      { q: "どのくらいで禁煙できますか？", a: "標準的には12週間のプログラムで、多くの方が禁煙に成功しています。" },
    ],
  },
  {
    slug: "allergy",
    name: "アレルギー治療",
    shortDescription: "花粉症・アレルギー性鼻炎の薬物療法。",
    price: "月額 1,100円〜",
    category: "生活習慣",
    color: "green",
    heroTitle: "花粉症・アレルギー治療",
    heroSubtitle: "月額1,100円〜（税込）。花粉症・鼻炎の内服薬をオンラインで。診察料0円。",
    benefits: [
      { label: "症状に合わせて処方", text: "内服・点鼻" },
      { label: "通院不要", text: "オンラインで完結" },
      { label: "シーズン前から", text: "予防的に開始可能" },
      { label: "診察料0円", text: "お薬代と配送料のみ" },
    ],
    aboutTitle: "アレルギー治療について",
    aboutBody: "花粉症や通年性アレルギー性鼻炎には、抗ヒスタミン薬や点鼻薬が有効です。当院では症状に合わせて内服・点鼻を処方し、シーズン前からの予防的治療も可能です。",
    aboutNote: defaultFlowNote,
    faqs: [
      { q: "花粉症のシーズン前から始められますか？", a: "はい。症状が出る前から薬を始めると、シーズン中の症状が軽くなる方が多いです。" },
      { q: "眠くなる薬は避けられますか？", a: "第2世代抗ヒスタミン薬など、眠気の少ない薬を処方します。ご希望をお伝えください。" },
    ],
  },
  {
    slug: "sleep",
    name: "睡眠障害治療",
    shortDescription: "不眠症・睡眠の質の改善。睡眠薬の処方も対応。",
    price: "月額 1,650円〜",
    category: "睡眠・メンタル",
    color: "indigo",
    heroTitle: "睡眠障害・不眠症治療",
    heroSubtitle: "月額1,650円〜（税込）。不眠症や睡眠の質改善のためのお薬をオンライン診療で。診察料0円。",
    benefits: [
      { label: "睡眠薬処方", text: "医師が適切に処方" },
      { label: "通院不要", text: "自宅で完結" },
      { label: "24時間予約", text: "いつでも相談" },
      { label: "診察料0円", text: "お薬代と配送料のみ" },
    ],
    aboutTitle: "睡眠障害治療について",
    aboutBody: "不眠症には、入眠困難・中途覚醒・早朝覚醒などタイプがあります。当院では睡眠薬や睡眠改善薬を、医師の診察のもと適切に処方します。生活習慣のアドバイスも行います。",
    aboutNote: defaultFlowNote,
    faqs: [
      { q: "依存性はありますか？", a: "薬の種類により異なります。依存性の少ない薬を選び、用量・期間を医師が管理します。" },
      { q: "どのくらいで眠れるようになりますか？", a: "個人差はありますが、薬の効果は比較的早く現れます。併せて生活習慣の見直しもおすすめです。" },
    ],
  },
  {
    slug: "anxiety",
    name: "抗不安薬処方",
    shortDescription: "軽度の不安・ストレス症状への薬物療法。",
    price: "月額 2,200円〜",
    category: "睡眠・メンタル",
    color: "indigo",
    heroTitle: "抗不安薬・ストレス相談",
    heroSubtitle: "月額2,200円〜（税込）。軽度の不安・ストレスに、医師が処方するお薬でサポート。診察料0円。",
    benefits: [
      { label: "医師が診察", text: "適切な処方" },
      { label: "通院不要", text: "オンラインで完結" },
      { label: "24時間予約", text: "いつでも相談" },
      { label: "診察料0円", text: "お薬代と配送料のみ" },
    ],
    aboutTitle: "抗不安薬について",
    aboutBody: "軽度の不安やストレスによる不調には、抗不安薬や漢方薬などが使われることがあります。当院では医師が状態を確認し、必要に応じて処方します。重症の方は対面の医療機関の受診をおすすめする場合があります。",
    aboutNote: defaultFlowNote,
    faqs: [
      { q: "誰でも処方してもらえますか？", a: "医師の診察のうえ、オンライン診療で対応可能な範囲の方に処方します。重症の方は対面受診をご案内する場合があります。" },
      { q: "依存性はありますか？", a: "薬の種類により異なります。短期・少量から始め、医師が管理します。" },
    ],
  },
  {
    slug: "sleep-program",
    name: "睡眠改善プログラム",
    shortDescription: "生活習慣改善と薬物療法を組み合わせた総合プログラム。",
    price: "月額 3,300円〜",
    category: "睡眠・メンタル",
    color: "indigo",
    heroTitle: "睡眠改善プログラム",
    heroSubtitle: "月額3,300円〜（税込）。生活習慣とお薬で、質のよい睡眠を。診察料0円・オンライン診療。",
    benefits: [
      { label: "総合プログラム", text: "生活習慣＋薬" },
      { label: "通院不要", text: "オンラインで完結" },
      { label: "24時間予約", text: "いつでも相談" },
      { label: "診察料0円", text: "お薬代と配送料のみ" },
    ],
    aboutTitle: "睡眠改善プログラムについて",
    aboutBody: "睡眠の質を上げるため、睡眠薬やサプリに加え、睡眠衛生（就寝時間・光・カフェインなど）のアドバイスを行います。医師と一緒に、無理のない改善を目指します。",
    aboutNote: defaultFlowNote,
    faqs: [
      { q: "薬は必ず使いますか？", a: "生活習慣の見直しだけで改善する方もいます。必要に応じて薬を検討します。" },
      { q: "どのくらい続けますか？", a: "状態に応じて数ヶ月〜継続の場合があります。医師が経過を見ながら調整します。" },
    ],
  },
  {
    slug: "flu",
    name: "インフルエンザ予防",
    shortDescription: "インフルエンザ予防のための予防薬処方。",
    price: "1回 2,200円〜",
    category: "予防・健康管理",
    color: "orange",
    heroTitle: "インフルエンザ予防",
    heroSubtitle: "1回2,200円〜（税込）。流行前に予防薬の処方も。診察料0円・オンライン診療。",
    benefits: [
      { label: "予防薬処方", text: "流行前に備える" },
      { label: "通院不要", text: "オンラインで完結" },
      { label: "24時間予約", text: "いつでも相談" },
      { label: "診察料0円", text: "お薬代と配送料のみ" },
    ],
    aboutTitle: "インフルエンザ予防について",
    aboutBody: "インフルエンザの流行期には、予防的な内服薬の処方を行うことがあります。接触した方への発症予防にも使われます。医師の診察のうえ、必要に応じて処方します。",
    aboutNote: defaultFlowNote,
    faqs: [
      { q: "予防薬はいつ飲みますか？", a: "暴露後予防の場合は接触後できるだけ早く開始します。用法は医師の指示に従ってください。" },
      { q: "ワクチンとは違いますか？", a: "はい。予防薬は内服薬で、ワクチンとは別です。ワクチン接種もあわせて検討してください。" },
    ],
  },
  {
    slug: "pollen",
    name: "花粉症対策",
    shortDescription: "シーズン前からの花粉症対策薬物療法。",
    price: "月額 1,100円〜",
    category: "予防・健康管理",
    color: "orange",
    heroTitle: "花粉症対策",
    heroSubtitle: "月額1,100円〜（税込）。シーズン前から内服・点鼻で対策。診察料0円。",
    benefits: [
      { label: "シーズン前から", text: "予防的に開始" },
      { label: "通院不要", text: "オンラインで完結" },
      { label: "24時間予約", text: "いつでも相談" },
      { label: "診察料0円", text: "お薬代と配送料のみ" },
    ],
    aboutTitle: "花粉症対策について",
    aboutBody: "花粉症は、シーズン前に薬を始めると症状が軽くなることがあります。当院では抗ヒスタミン薬や点鼻薬を処方し、シーズンを通じてサポートします。",
    aboutNote: defaultFlowNote,
    faqs: [
      { q: "いつから始めればいいですか？", a: "花粉の飛散開始の1〜2週間前から始めると効果的です。地域により異なりますのでご相談ください。" },
      { q: "眠くならない薬はありますか？", a: "第2世代抗ヒスタミン薬など、眠気の少ない薬を処方します。" },
    ],
  },
  {
    slug: "vitamin-injection",
    name: "ビタミン注射",
    shortDescription: "疲労回復・免疫強化のためのビタミン補給。",
    price: "1回 3,300円〜",
    category: "予防・健康管理",
    color: "orange",
    heroTitle: "ビタミン注射",
    heroSubtitle: "1回3,300円〜（税込）。疲労回復・免疫サポート。診察料0円（※注射は提携院で実施の場合あり）。",
    benefits: [
      { label: "疲労回復", text: "ビタミンB群など" },
      { label: "免疫サポート", text: "ビタミンCなど" },
      { label: "オンライン相談", text: "必要に応じて処方" },
      { label: "診察料0円", text: "内容により異なります" },
    ],
    aboutTitle: "ビタミン注射について",
    aboutBody: "ビタミンB群やビタミンCなどの注射で、疲労回復や免疫サポートを行います。オンラインで医師が相談を受け、必要に応じて提携医療機関での注射をご案内する場合があります。",
    aboutNote: "注射の実施は提携医療機関で行う場合があります。詳細は診察時にご案内します。",
    faqs: [
      { q: "どこで注射を受けますか？", a: "提携医療機関をご案内する場合と、処方のみでご自身で受けていただく場合があります。地域により異なります。" },
      { q: "何回くらい受けると効果がありますか？", a: "目的により異なります。疲労回復なら1回でも実感される方もいます。医師にご相談ください。" },
    ],
  },
];

const slugToItem = new Map(menuItems.map((m) => [m.slug, m]));

export function getMenuItemBySlug(slug: string): MenuItem | undefined {
  return slugToItem.get(slug);
}

export function getAllMenuSlugs(): string[] {
  return menuItems.map((m) => m.slug);
}

export function getMenuItemsByCategory(): { category: string; color: MenuColor; services: { name: string; slug: string; description: string; price: string; tag: string | null }[] }[] {
  const categories = new Map<string, { color: MenuColor; services: { name: string; slug: string; description: string; price: string; tag: string | null }[] }>();
  for (const item of menuItems) {
    const existing = categories.get(item.category);
    const service = {
      name: item.name,
      slug: item.slug,
      description: item.shortDescription,
      price: item.price,
      tag: item.tag ?? null,
    };
    if (!existing) {
      categories.set(item.category, { color: item.color, services: [service] });
    } else {
      existing.services.push(service);
    }
  }
  return Array.from(categories.entries()).map(([category, { color, services }]) => ({
    category,
    color,
    services,
  }));
}
