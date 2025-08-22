export const metadata = {
  title: "InLight",
  description: "InLight — цифровая психология (RADAR)",
};
import "./globals.css";
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
