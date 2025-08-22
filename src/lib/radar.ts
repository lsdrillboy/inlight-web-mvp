// Radar core calculations (per ТЗ/методика)
function sumDigits(n: number): number {
  return Math.abs(n).toString().split("").reduce((a,c)=>a + Number(c), 0);
}
function reduceToDigit(n: number): number {
  let x = Math.abs(n);
  while (x >= 10) x = sumDigits(x);
  return x;
}
function parseDob(dob: string): { day:number, month:number, year:number }{
  const m = dob.trim().match(/^(\d{2})[\.\/-](\d{2})[\.\/-](\d{4})$/);
  if(!m) throw new Error("Use DD.MM.YYYY format");
  const day = Number(m[1]), month = Number(m[2]), year = Number(m[3]);
  return { day, month, year };
}

const miniInterp: Record<number,string> = {
  0: "Усилитель, ноль усиливает рядом стоящие энергии.",
  1: "1 — воля, лидерство, инициатива, начало.",
  2: "2 — взаимодействие, чувствительность, баланс.",
  3: "3 — коммуникация, творчество, самовыражение.",
  4: "4 — структура, дисциплина, системность.",
  5: "5 — движение, перемены, свобода.",
  6: "6 — забота, красота, гармония, служение.",
  7: "7 — дисциплина ума, анализ, духовный поиск.",
  8: "8 — реализация, материальный результат, сила.",
  9: "9 — мудрость, завершение, служение миру."
};

export function calcRadar(dob: string){
  const { day, month, year } = parseDob(dob);
  const dayParts = day.toString().split("").map(Number);
  const consciousness = reduceToDigit(day); // e.g. 23 -> 5
  // action sum: sum of all digits of date (DD+MM+YYYY separated digits)
  const digits = (day.toString() + month.toString().padStart(2,'0') + year.toString()).split("").map(Number);
  const actionSum = digits.reduce((a,c)=>a+c,0);  // e.g., 2+3+0+6+1+9+9+9=39
  const path1 = [actionSum, sumDigits(actionSum)];
  const actionFinal = reduceToDigit(actionSum);
  // realization: day + actionSum
  const realizationRaw = day + actionSum; // e.g., 23 + 39 = 62
  const realizationPath = [realizationRaw, sumDigits(realizationRaw), reduceToDigit(realizationRaw)];
  // life total: day + actionSum + last(realization)
  const lifeTotal = day + actionSum + realizationPath[2];
  const lifeNote = lifeTotal % 10 === 0 ? "0 — усилитель энергии" : "—";
  // personal year: day + month + current year
  const now = new Date();
  const pyRaw = day + month + now.getFullYear();
  const personalYear = reduceToDigit(pyRaw);

  // Interpretations (demo): key aspects only
  const interpretations: Record<string,string> = {
    "Сознание": miniInterp[consciousness],
    "Действие (итог)": miniInterp[actionFinal],
    "Реализация": miniInterp[realizationPath[2]],
    "Личный год": miniInterp[personalYear]
  };

  return {
    consciousness,
    consciousnessParts: dayParts,
    actionSum,
    actionPath: path1,
    actionFinal,
    realization: { raw: realizationRaw, path: realizationPath },
    lifeTotal,
    lifeNote,
    personalYear,
    interpretations
  };
}
