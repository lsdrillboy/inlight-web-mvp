import { getDict } from "@/lib/i18n";
import RadarForm from "@/components/RadarForm";
import RadarResult from "@/components/RadarResult";

export default function Page({ searchParams, params } : {
  searchParams: { dob?: string, name?: string },
  params: { lang: "ru"|"en" }
}){
  const dict = getDict(params.lang);
  const dob = searchParams.dob ?? "";
  return (
    <div className="space-y-10">
      <h1 className="text-3xl font-semibold">{dict.calculator.title}</h1>
      <p className="opacity-80">{dict.calculator.subtitle}</p>
      <RadarForm lang={params.lang} dict={dict} />
      {dob ? (
        <div className="mt-10">
          <RadarResult dob={dob} />
        </div>
      ) : null}
    </div>
  )
}
