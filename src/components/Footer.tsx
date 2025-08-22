export default function Footer({ dict }:{ dict: any }){
  return (
    <footer className="mt-20 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-10 text-sm opacity-80">
        {dict.footer.rights}
      </div>
    </footer>
  )
}
