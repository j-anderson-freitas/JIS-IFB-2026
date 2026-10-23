import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'JIS-IFB 2026 | Jogos de Integração dos Servidores do IFB',
  description: 'Portal Oficial dos Jogos de Integração dos Servidores do Instituto Federal de Brasília 2026. Tabelas, equipes, cronograma e resultados.',
  icons: {
    icon: '/images/logo-ifb.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-[#F8FAFC] text-slate-800">
        {children}
      </body>
    </html>
  );
}
