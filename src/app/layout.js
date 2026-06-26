import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';

// Initialize Inter for body text [cite: 107]
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

// Initialize JetBrains Mono for headers [cite: 103]
const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
});

export const metadata = {
  title: 'BattleFront',
  description: 'Execute multi-modal data streams synchronously with sub-millisecond latencies.',
  openGraph: {
    title: 'BattleFront | Next-Gen AI Data Automation',
    description: 'Execute multi-modal data streams synchronously.',
    type: 'website',
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans bg-oceanic-noir text-arctic-powder min-h-screen selection:bg-forsythia selection:text-oceanic-noir">
        {children}
      </body>
    </html>
  );
}