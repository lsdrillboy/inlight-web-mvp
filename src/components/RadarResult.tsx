"use client";
import { useEffect, useState } from "react";

type Radar = {
  consciousness: number, consciousnessParts: number[],
  actionSum: number, actionPath: number[], actionFinal: number,
  realization: { raw:number, path:number[] },
  lifeTotal: number, lifeNote: string,
  personalYear: number,
  interpretations: Record<string,string>
};

export default function RadarResult({ dob }:{ dob: string }){
  const [data, setData] = useState<Radar|null>(null);
  const [err, setErr] = useState<string| null>(null);
  useEffect(() => {
    const run = async () => {
      try {
        const res = await fetch("/api/radar/calc", { method:"POST", body: JSON.stringify({ dob }) });
        if(!res.ok) throw new Error("Bad response");
        const json = await res.json();
        setData(json);
      } catch(e:any){
        setErr(e?.message ?? "Error");
      }
    };
    run();
  }, [dob]);

  if(err) return <div className="text-red-300">Ошибка: {err}</div>;
  if(!data) return <div className="opacity-70">Считаем…</div>;

  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="rounded-xl border border-white/10 p-6 bg-white/5">
        <h3 className="text-xl mb-2">Дата рождения: {dob}</h3>
        <ul className="opacity-90 space-y-1 text-sm">
          <li>Сознание: <b>{data.consciousness}</b> через [{data.consciousnessParts.join(" + ")}]</li>
          <li>Действие (сумма): <b>{data.actionSum}</b> → путь [{data.actionPath.join(" → ")}] → итог <b>{data.actionFinal}</b></li>
          <li>Реализация: <b>{data.realization.path.join(" → ")}</b></li>
          <li>Итог жизни: <b>{data.lifeTotal}</b> ({data.lifeNote})</li>
          <li>Личный год: <b>{data.personalYear}</b></li>
        </ul>
      </div>
      <div className="rounded-xl border border-white/10 p-6 bg-white/5 space-y-3">
        <h3 className="text-xl">Краткие интерпретации</h3>
        <div className="space-y-2 text-sm opacity-90">
          {Object.entries(data.interpretations).map(([k,v]) => (
            <div key={k}><b>{k}</b>: {v}</div>
          ))}
        </div>
      </div>
    </div>
  )
}
