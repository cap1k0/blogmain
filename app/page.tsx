
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Bruca | A New Language System",
  description:
    "Bruca is a new language system exploring languages, linguistics, communication and language learning.",
  alternates: { canonical: "/" },
};

const languages = [
  { name: "English", native: "English", flag: "🇬🇧", level: "A1 – C2", description: "Grammar, vocabulary and communication" },
  { name: "German", native: "Deutsch", flag: "🇩🇪", level: "A1 – C2", description: "Learn German from the basics" },
  { name: "French", native: "Français", flag: "🇫🇷", level: "A1 – C2", description: "Discover French language and culture" },
  { name: "Spanish", native: "Español", flag: "🇪🇸", level: "A1 – C2", description: "Speak Spanish with confidence" },
  { name: "Italian", native: "Italiano", flag: "🇮🇹", level: "A1 – C2", description: "Explore Italian expressions" },
  { name: "Russian", native: "Русский", flag: "🇷🇺", level: "A1 – C2", description: "Master Russian step by step" },
  { name: "Arabic", native: "العربية", flag: "🇸🇦", level: "Beginner – Advanced", description: "Modern Standard Arabic and more" },
  { name: "Japanese", native: "日本語", flag: "🇯🇵", level: "Beginner – Advanced", description: "Grammar, kanji and conversation" },
  { name: "Chinese", native: "中文", flag: "🇨🇳", level: "Beginner – Advanced", description: "Mandarin vocabulary and tones" },
  { name: "Portuguese", native: "Português", flag: "🇵🇹", level: "A1 – C2", description: "European and Brazilian Portuguese" },
  { name: "Turkish", native: "Türkçe", flag: "🇹🇷", level: "Beginner – Advanced", description: "Learn everyday Turkish" },
  { name: "Dutch", native: "Nederlands", flag: "🇳🇱", level: "A1 – C2", description: "Build your Dutch skills" },
];

const skills = [
  {
    icon: "📖",
    title: "Grammar",
    description: "Understand grammar rules, sentence structures and how languages work.",
  },
  {
    icon: "🧠",
    title: "Vocabulary",
    description: "Expand your vocabulary with useful words, expressions and collocations.",
  },
  {
    icon: "🎧",
    title: "Listening",
    description: "Improve comprehension through conversations and listening exercises.",
  },
  {
    icon: "🗣️",
    title: "Speaking",
    description: "Develop fluency and confidence through practical communication.",
  },
  {
    icon: "✍️",
    title: "Writing",
    description: "Learn to write naturally, accurately and effectively.",
  },
  {
    icon: "🔊",
    title: "Pronunciation",
    description: "Explore sounds, stress, intonation and phonetics.",
  },
];

const levels = [
  { name: "A1", title: "Beginner", description: "Understand and use basic expressions." },
  { name: "A2", title: "Elementary", description: "Communicate in familiar situations." },
  { name: "B1", title: "Intermediate", description: "Handle everyday conversations independently." },
  { name: "B2", title: "Upper Intermediate", description: "Discuss complex topics with confidence." },
  { name: "C1", title: "Advanced", description: "Use language flexibly in academic and professional contexts." },
  { name: "C2", title: "Proficient", description: "Understand and express subtle meanings with precision." },
];

const topics = [
  { category: "Grammar", title: "Understanding English conditionals", level: "B2", language: "English", description: "A practical guide to zero, first, second, third and mixed conditionals." },
  { category: "Vocabulary", title: "Essential German everyday expressions", level: "A1–A2", language: "German", description: "Useful expressions for everyday conversations in German." },
  { category: "Pronunciation", title: "English pronunciation: /θ/ and /ð/", level: "B1", language: "English", description: "Learn the difference between the two English TH sounds." },
  { category: "Grammar", title: "French articles explained", level: "A1", language: "French", description: "Understand definite, indefinite and partitive articles." },
  { category: "Vocabulary", title: "Spanish phrasal expressions", level: "B1", language: "Spanish", description: "Discover natural expressions used by native speakers." },
  { category: "Learning tips", title: "How to improve your listening skills", level: "All levels", language: "Multiple languages", description: "Practical strategies for developing listening comprehension." },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#fbfbfd] text-[#202124] antialiased">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-48 left-1/4 h-[500px] w-[500px] rounded-full bg-sky-200/30 blur-[130px]" />
        <div className="absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-violet-200/30 blur-[130px]" />
      </div>

      <div className="relative z-10">
        <header className="sticky top-0 z-50 border-b border-black/[0.05] bg-white/80 backdrop-blur-xl">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
            <Link href="/" className="text-2xl font-bold tracking-[-0.07em]">
              Bruca<span className="text-violet-500">.</span>
            </Link>

            <nav className="hidden items-center gap-7 text-sm text-[#62636b] md:flex">
              <a href="#languages" className="transition hover:text-black">Languages</a>
              <a href="#skills" className="transition hover:text-black">Learning Skills</a>
              <a href="#levels" className="transition hover:text-black">Levels</a>
              <a href="#articles" className="transition hover:text-black">Articles</a>
              <Link href="/terms" className="transition hover:text-black">About</Link>
            </nav>

            <a href="#languages" className="rounded-full bg-[#202124] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-violet-600">
              Start learning →
            </a>
          </div>
        </header>

        <section className="mx-auto flex max-w-7xl flex-col items-center px-6 pb-24 pt-24 text-center sm:pt-32">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-4 py-2 text-xs font-medium text-violet-700">
            🌍 Bruca | A New Language System
          </div>

          <h1 className="max-w-5xl text-5xl font-semibold leading-[1.08] tracking-[-0.055em] sm:text-7xl lg:text-8xl">
            Discover languages.
            <br />
            <span className="bg-gradient-to-r from-sky-500 via-violet-500 to-pink-500 bg-clip-text text-transparent">
              Discover the world.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-8 text-[#707078] sm:text-xl">
            Explore languages through linguistics, structured learning,
            practical examples, grammar, vocabulary and real-world communication.
            Understand language and discover new ways to communicate.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a href="#languages" className="rounded-full bg-[#202124] px-8 py-4 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-1 hover:bg-violet-600">
              Explore languages →
            </a>
            <a href="#skills" className="rounded-full border border-black/10 bg-white px-8 py-4 text-sm font-semibold transition hover:border-violet-300">
              Explore language resources
            </a>
          </div>

          <div className="mt-16 flex flex-wrap justify-center gap-3 text-sm text-[#777780]">
            {["Linguistics", "Grammar", "Vocabulary", "Communication", "Pronunciation"].map((item) => (
              <span key={item} className="rounded-full bg-white px-4 py-2 shadow-sm">{item}</span>
            ))}
          </div>
        </section>

        <section id="languages" className="mx-auto max-w-7xl scroll-mt-24 px-6 py-20">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-5">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-violet-600">Explore the world</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-5xl">Choose your language.</h2>
              <p className="mt-4 max-w-xl text-[#777780]">
                From widely spoken languages to fascinating writing systems, find a language that inspires you.
              </p>
            </div>
            <span className="text-sm text-[#888890]">Explore our language collection</span>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {languages.map((language) => (
              <a key={language.name} href="#articles" className="group rounded-3xl border border-black/[0.06] bg-white/80 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-violet-200 hover:shadow-xl">
                <div className="flex items-center justify-between">
                  <span className="text-4xl">{language.flag}</span>
                  <span className="rounded-full bg-[#f4f3fa] px-3 py-1 text-[10px] font-medium text-violet-700">{language.level}</span>
                </div>
                <h3 className="mt-6 text-xl font-semibold tracking-tight">{language.name}</h3>
                <p className="mt-1 text-sm text-[#92929a]">{language.native}</p>
                <p className="mt-4 text-sm leading-6 text-[#777780]">{language.description}</p>
                <div className="mt-6 text-sm font-medium text-violet-600 transition group-hover:translate-x-1">Explore resources →</div>
              </a>
            ))}
          </div>

          <p className="mt-8 text-center text-sm text-[#92929a]">
            More languages will be added as the learning library grows.
          </p>
        </section>

        <section id="skills" className="scroll-mt-24 bg-[#f3f2f8] py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto mb-14 max-w-2xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-violet-600">Understand language</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">Build real language skills.</h2>
              <p className="mt-5 leading-7 text-[#777780]">
                Language is more than memorising words. Develop the skills you need to understand and communicate effectively.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {skills.map((skill) => (
                <div key={skill.title} className="rounded-3xl border border-black/[0.04] bg-white p-8 transition hover:-translate-y-1 hover:shadow-lg">
                  <div className="text-4xl">{skill.icon}</div>
                  <h3 className="mt-6 text-xl font-semibold">{skill.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#777780]">{skill.description}</p>
                  <a href="#articles" className="mt-6 inline-block text-sm font-medium text-violet-600">Explore resources →</a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="levels" className="mx-auto max-w-7xl scroll-mt-24 px-6 py-24">
          <div className="mb-12 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-violet-600">Your learning journey</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">From beginner to proficient.</h2>
            <p className="mx-auto mt-5 max-w-2xl text-[#777780]">
              Discover the Common European Framework of Reference for Languages and find the right learning level.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {levels.map((level) => (
              <div key={level.name} className="rounded-3xl border border-black/[0.06] bg-white p-7 transition hover:border-violet-200 hover:shadow-lg">
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold tracking-tight text-violet-600">{level.name}</span>
                  <span className="rounded-full bg-violet-50 px-3 py-1 text-xs text-violet-600">CEFR</span>
                </div>
                <h3 className="mt-5 text-lg font-semibold">{level.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#777780]">{level.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="articles" className="scroll-mt-24 bg-white py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-12 flex flex-wrap items-end justify-between gap-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-violet-600">Knowledge library</p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">Explore language knowledge.</h2>
                <p className="mt-4 max-w-xl text-[#777780]">
                  Articles, linguistic insights, language guides and practical learning resources.
                </p>
              </div>
              <span className="text-sm text-[#92929a]">Research & learning resources</span>
            </div>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {topics.map((topic, index) => (
                <article key={topic.title} className="group rounded-3xl border border-black/[0.06] bg-[#fbfbfd] p-7 transition hover:-translate-y-1 hover:shadow-xl">
                  <div className="flex items-center justify-between gap-3">
                    <span className="rounded-full bg-violet-50 px-3 py-1.5 text-xs font-medium text-violet-700">{topic.category}</span>
                    <span className="text-xs text-[#92929a]">{topic.level}</span>
                  </div>
                  <h3 className="mt-7 text-xl font-semibold leading-8 tracking-tight">{topic.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-[#777780]">{topic.description}</p>
                  <div className="mt-7 flex items-center justify-between border-t border-black/[0.06] pt-5">
                    <span className="text-xs text-[#92929a]">{topic.language}</span>
                    <span className="text-sm font-medium text-violet-600">Resource {String(index + 1).padStart(2, "0")}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-24">
          <div className="overflow-hidden rounded-[2rem] bg-[#171720] px-8 py-16 text-center text-white sm:px-16">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-violet-300">The Bruca approach</p>
            <h2 className="mx-auto mt-6 max-w-3xl text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Language is more than words.
              <span className="text-violet-300"> It is how we understand the world.</span>
            </h2>
            <p className="mx-auto mt-7 max-w-2xl text-sm leading-8 text-white/60 sm:text-base">
              Explore the structures, expressions and cultural contexts that make every language unique.
              Learn with curiosity, practise with purpose and communicate with confidence.
            </p>
            <a href="#languages" className="mt-9 inline-flex rounded-full bg-white px-8 py-4 text-sm font-semibold text-[#171720] transition hover:bg-violet-200">
              Find your next language →
            </a>
          </div>
        </section>

        <footer className="border-t border-black/[0.06] bg-white">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 py-14 md:grid-cols-3">
            <div>
              <Link href="/" className="text-2xl font-bold tracking-[-0.07em]">
                Bruca<span className="text-violet-500">.</span>
              </Link>
              <p className="mt-5 max-w-sm text-sm leading-7 text-[#777780]">
                Bruca is a new language system exploring linguistics, language learning and communication.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">Explore</h3>
              <div className="mt-5 flex flex-col gap-3 text-sm text-[#777780]">
                <a href="#languages" className="hover:text-violet-600">Languages</a>
                <a href="#skills" className="hover:text-violet-600">Learning Skills</a>
                <a href="#levels" className="hover:text-violet-600">CEFR Levels</a>
                <a href="#articles" className="hover:text-violet-600">Articles</a>
              </div>
            </div>

            <div>
              <h3 className="font-semibold">Information</h3>
              <div className="mt-5 flex flex-col gap-3 text-sm text-[#777780]">
                <Link href="/terms" className="hover:text-violet-600">Terms and Conditions</Link>
                <Link href="/docs" className="hover:text-violet-600">Documentation</Link>
              </div>
            </div>
          </div>

          <div className="border-t border-black/[0.06]">
            <div className="mx-auto flex max-w-7xl flex-wrap justify-between gap-3 px-6 py-7 text-xs text-[#92929a]">
              <span>© {new Date().getFullYear()} Bruca. All rights reserved.</span>
              <span>A New Language System.</span>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
