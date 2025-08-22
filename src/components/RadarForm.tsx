"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function RadarForm({ lang, dict }:{ lang:"ru"|"en", dict:any }){
  const router = useRouter();
  const params = useSearchParams();
  const [name, setName] = useState(params.get("name") ?? "");
  const [dob, setDob]  = useState(params.get("dob") ?? "");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if(!dob) return;
    router.push(`/${lang}/calculator?dob=${encodeURIComponent(dob)}${name?`&name=${encodeURIComponent(name)}`:""}`);
  };

  return (
    <form onSubmit={submit} className="grid gap-4 max-w-md">
      <label className="grid gap-2">
        <span className="text-sm opacity-80">{dict.calculator.name}</span>
        <input value={name} onChange={e=>setName(e.target.value)} className="px-3 py-2 rounded-md bg-white/10 border border-white/10 outline-none" />
      </label>
      <label className="grid gap-2">
        <span className="text-sm opacity-80">{dict.calculator.dob}</span>
        <input placeholder={dict.calculator.dobPlaceholder} value={dob} onChange={e=>setDob(e.target.value)} className="px-3 py-2 rounded-md bg-white/10 border border-white/10 outline-none" />
      </label>
      <button className="rounded-md bg-white text-black px-4 py-2 hover:opacity-90">
        {dict.calculator.submit}
      </button>
    </form>
  )
}
