import Link from "next/link";

export default function MenuNotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 bg-gray-50">
      <h1 className="text-2xl font-bold text-gray-900 mb-2">診療科目が見つかりません</h1>
      <p className="text-gray-600 mb-6">お探しのページは存在しないか、移動した可能性があります。</p>
      <Link
        href="/#services"
        className="bg-blue-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors"
      >
        診療科目一覧へ
      </Link>
    </main>
  );
}
