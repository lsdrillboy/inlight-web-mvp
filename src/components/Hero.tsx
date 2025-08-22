import Link from "next/link";
export default function Hero({ lang, dict }:{ lang: "ru"|"en", dict: any }){
  return (
    <section className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5">
      <div className="absolute inset-0 pointer-events-none opacity-20">
        {/* Minimal mandala/digits */}
        <svg className="w-full h-full" viewBox="0 0 800 400">
          <defs>
            <radialGradient id="g" cx="50%" cy="50%">
              <stop offset="0%" stopColor="white" stopOpacity="0.7"/>
              <stop offset="100%" stopColor="white" stopOpacity="0"/>
            </radialGradient>
          </defs>
          <circle cx="400" cy="200" r="120" fill="url(#g)" className="glow" />
          <text x="50" y="80" fontSize="64" opacity=".08">1 2 3 4 5 6 7 8 9 0</text>
          <text x="50" y="360" fontSize="64" opacity=".08">9 8 7 6 5 4 3 2 1 0</text>
        </svg>
      </div>
      <div className="relative px-8 py-16 md:px-16 md:py-24">
        <h1 className="text-4xl md:text-6xl font-bold font-display leading-tight">
          {dict.hero.title}
        </h1>
        <p className="mt-4 max-w-2xl text-lg opacity-90">{dict.hero.subtitle}</p>
        <div className="mt-8">
          <Link href={`/${lang}/calculator`} className="inline-block rounded-xl bg-white text-black px-5 py-3 hover:opacity-90">
            {dict.hero.cta}
          </Link>
        </div>
      </div>
    </section>
  )
}
