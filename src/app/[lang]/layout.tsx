import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getDict } from "@/lib/i18n";
export default async function LangLayout({
  children, params
}: { children: React.ReactNode, params: { lang: "ru"|"en" } }){
  const dict = getDict(params.lang);
  return (
    <div className="min-h-screen bg-starfield">
      <Header lang={params.lang} dict={dict} />
        <main className="mx-auto max-w-6xl px-4 py-10">
          {children}
        </main>
      <Footer dict={dict} />
    </div>
  );
}
export function generateStaticParams(){ return [{lang:"ru"},{lang:"en"}]; }
