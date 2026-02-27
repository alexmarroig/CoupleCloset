import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Couple Closet",
  description: "Um assistente inteligente da vida a dois."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen bg-sand-50 text-slate-900 font-sans antialiased">
        {children}
      </body>
    </html>
  );
}

