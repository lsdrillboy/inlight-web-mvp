import Link from "next/link";
export default function CTA({ href, children }:{ href:string, children: React.ReactNode }){
  return (
    <div className="rounded-2xl border border-white/10 p-8 text-center bg-white/5">
      <Link href={href} className="inline-block rounded-xl bg-white text-black px-6 py-3 hover:opacity-90">
        {children}
      </Link>
    </div>
  )
}
