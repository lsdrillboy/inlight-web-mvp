"use client";
import { useState } from "react";
export default function Accordion({ items }:{ items: { q:string, a:string }[] }){
  const [open, setOpen] = useState<number|null>(null);
  return (
    <div className="divide-y divide-white/10 border border-white/10 rounded-xl">
      {items.map((it, idx) => (
        <div key={idx}>
          <button className="w-full text-left p-4 hover:bg-white/5" onClick={() => setOpen(open === idx ? null : idx)}>
            <div className="flex justify-between">
              <span>{it.q}</span><span>{open===idx? "–" : "+"}</span>
            </div>
          </button>
          {open===idx && <div className="p-4 opacity-80">{it.a}</div>}
        </div>
      ))}
    </div>
  )
}
