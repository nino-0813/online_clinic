"use client";

import Image from "next/image";

const carouselImages = [
  "/images/1.svg",
  "/images/2.svg",
  "/images/3.svg",
  "/images/4.svg",
  "/images/5.svg",
  "/images/6.svg",
  "/images/7.svg",
  "/images/8.svg",
  "/images/9.svg",
];

export default function Hero() {
  return (
    <section className="relative pt-20 overflow-hidden">
      {/* ヒーロー画像のみ（WebP） */}
      <div className="relative w-full aspect-[2688/1594] min-h-[280px] bg-white">
        <Image
          src="/images/hero-main.webp"
          alt="いつでも、どこでも、あなたに寄り添う医療を。オンラインでつながる、安心のパートナークリニック"
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority
        />
      </div>

      {/* 横スライドカルーセル（SVGを小さめに表示） */}
      <div className="relative w-full overflow-hidden bg-gray-50/80 py-6 border-y border-gray-100">
        <div className="flex animate-hero-slide w-max gap-8">
          {[...carouselImages, ...carouselImages].map((src, i) => (
            <div
              key={`${src}-${i}`}
              className="relative flex-shrink-0 w-24 h-16 sm:w-28 sm:h-20 md:w-32 md:h-20"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt=""
                className="w-full h-full object-contain object-center"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
