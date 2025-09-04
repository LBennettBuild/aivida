import type { Metadata } from 'next';
import './globals.css';
import localFont from 'next/font/local';

const Alphasano = localFont({
  src: '../fonts/Alphasano.ttf',
  variable: '--font-alphasano',
});

const Lumos = localFont({
  src: '../fonts/Lumos.ttf',
  variable: '--font-lumos',
});

import { Metamorphous } from 'next/font/google';

const metamorphous = Metamorphous({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-metamorphous',
});

export const metadata: Metadata = {
  title: 'AIVIDA — Умная медицинская платформа',
  description: 'AI-платформа для медицины: пациенты, врачи и клиники в единой системе.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='ru'>
      <body
        className={`${Lumos.variable} ${Alphasano.variable} ${metamorphous.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
