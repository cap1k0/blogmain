"use client";

import { useState } from "react";
import Link from "next/link";

const pages = [
  {
    tag: "Issue 01",
    title: "The New Generation Blog",
    text: "Turn the page to start.",
    cover: true,
  },
  {
    tag: "Technology",
    title: "Tech, made simple",
    text: "New tools, new ideas, and how they work.",
  },
  {
    tag: "Research",
    title: "Research, made readable",
    text: "We read the papers so you don't have to.",
  },
];

export default function Home() {
  const [current, setCurrent] = useState(0);
  const total = pages.length + 1; // + last page with the link

  const next = () => setCurrent((c) => Math.min(c + 1, total - 1));
  const prev = () => setCurrent((c) => Math.max(c - 1, 0));

  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-8 bg-neutral-200 px-6">
      <div
        className="relative h-[440px] w-[320px] sm:h-[500px] sm:w-[360px]"
        style={{ perspective: "1800px" }}
      >
        {/* Turning pages */}
        {pages.map((p, i) => {
          const flipped = i < current;
          return (
            <div
              key={p.title}
              onClick={next}
              className={`absolute inset-0 flex cursor-pointer flex-col justify-between rounded-r-2xl rounded-l-sm border-l-8 border-neutral-800 p-8 shadow-2xl ${
                p.cover ? "bg-neutral-900 text-white" : "bg-[#faf7f0] text-neutral-900"
              }`}
              style={{
                zIndex: total - i,
                transformOrigin: "left center",
                transform: flipped ? "rotateY(-150deg)" : "rotateY(0deg)",
                opacity: flipped ? 0 : 1,
                pointerEvents: flipped ? "none" : "auto",
                transition: flipped
                  ? "transform .8s ease-in-out, opacity .3s ease .5s"
                  : "transform .8s ease-in-out, opacity .1s",
              }}
            >
              <span className="text-xs uppercase tracking-[0.3em] opacity-60">
                {p.tag}
              </span>
              <div>
                <h1 className="text-3xl font-bold leading-tight sm:text-4xl">
                  {p.title}
                </h1>
                <p className="mt-4 opacity-70">{p.text}</p>
              </div>
              <span className="text-sm opacity-50">
                {i + 1} / {total} · click to turn →
              </span>
            </div>
          );
        })}

        {/* Last page */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center rounded-r-2xl rounded-l-sm border-l-8 border-neutral-800 bg-[#faf7f0] p-8 text-center shadow-2xl"
          style={{ zIndex: 1 }}
        >
          <h2 className="text-3xl font-bold">Ready?</h2>
          <p className="mt-3 text-neutral-600">
            Now let's read the real stuff.
          </p>
          <Link
            href="/blog"
            className="mt-8 rounded-full bg-black px-6 py-3 text-white transition hover:opacity-80"
          >
            Continue to the blog →
          </Link>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center gap-4">
        <button
          onClick={prev}
          disabled={current === 0}
          className="rounded-full border border-neutral-400 px-4 py-2 text-sm disabled:opacity-30"
        >
          ← Back
        </button>
        <div className="flex gap-2">
          {Array.from({ length: total }).map((_, i) => (
            <span
              key={i}
              className={`h-2 w-2 rounded-full ${
                i === current ? "bg-neutral-900" : "bg-neutral-400"
              }`}
            />
          ))}
        </div>
        <button
          onClick={next}
          disabled={current === total - 1}
          className="rounded-full border border-neutral-400 px-4 py-2 text-sm disabled:opacity-30"
        >
          Next →
        </button>
      </div>
    </main>
  );
}
