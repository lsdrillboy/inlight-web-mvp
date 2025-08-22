import Hero from "@/components/Hero";
import CTA from "@/components/CTA";
import { getDict } from "@/lib/i18n";

export default function Page({ params }: { params: { lang: "ru"|"en" } }) {
  const dict = getDict(params.lang);
  return (
    <div className="space-y-16">
      <Hero lang={params.lang} dict={dict} />
      <section className="grid md:grid-cols-3 gap-6">
        {["Простая форма", "Точный расчет", "PDF отчёт"].map((t,i) => (
          <div key={i} className="rounded-xl p-6 border border-white/10 bg-white/5 backdrop-blur">
            <div className="text-2xl mb-2">0{i+1}</div>
            <div className="text-lg opacity-90">{t}</div>
          </div>
        ))}
      </section>
      <CTA href={`/${params.lang}/calculator`}>{dict.hero.cta}</CTA>
    </div>
  );
}
