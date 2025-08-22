import Link from "next/link";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header({ lang, dict }:{ lang: "ru"|"en", dict: any }){
  const items = [
    { href: `/${lang}/method`, label: dict.nav.method },
    { href: `/${lang}/calculator`, label: dict.nav.calculator },
    { href: `/${lang}/team`, label: dict.nav.team },
    { href: `/${lang}/faq`, label: dict.nav.faq },
    { href: `/${lang}/contacts`, label: dict.nav.contacts },
  ];
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-black/30 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 h-14 flex items-center justify-between">
        <Link href={`/${lang}`} className="font-semibold tracking-wide">
          <span className="text-[15px]">In</span><span className="text-[15px] text-brand-orange">Light</span>
        </Link>
        <nav className="hidden md:flex gap-6 text-sm">
          {items.map(i => <Link key={i.href} href={i.href} className="opacity-90 hover:opacity-100">{i.label}</Link>)}
        </nav>
        <div className="flex items-center gap-3">
          <LanguageSwitcher current={lang} />
        </div>
      </div>
    </header>
  )
}
