"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function LanguageSwitcher({ current }:{ current: "ru"|"en" }){
  const pathname = usePathname() || "/ru";
  const next = current === "ru" ? "en" : "ru";
  const switched = pathname.replace(/^\/(ru|en)/, `/${next}`);
  return (
    <Link href={switched} className="text-xs px-3 py-1 rounded-full border border-white/15 hover:border-white/30">
      {next.toUpperCase()}
    </Link>
  )
}
