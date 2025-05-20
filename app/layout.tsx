import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/src/components/header';
import localFont from 'next/font/local';
import { Footer } from '@/src/components/footer';

const hedvig = localFont({
  src: '../public/fonts/HedvigLettersSerif-Regular.otf',
  variable: '--font-hedvig',
  display: 'swap'
});

const louises = localFont({
  src: '../public/fonts/Louise-Regular.otf',
  variable: '--font-louises',
  display: 'swap'
});

const uncut = localFont({
  src: '../public/fonts/UncutSans-Variable.ttf',
  variable: '--font-uncut',
  display: 'swap'
});

const directory = localFont({
  src: '../public/fonts/Director-Regular.otf',
  variable: '--font-directory',
  display: 'swap'
});

const ronzino = localFont({
  src: '../public/fonts/Ronzino-Regular.otf',
  variable: '--font-ronzino',
  display: 'swap'
});

export const metadata: Metadata = {
  title: 'Odd Hours',
  description: 'We build expressive and efficient brands.',
  icons: {
    icon: [
      { url: '../public/images/icons/favicon.ico' },
    ]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`bg-background ${hedvig.variable} ${uncut.variable} ${louises.variable} ${directory.variable} ${ronzino.variable} antialiased`}
    >
      <body
        className={`bg-background ${hedvig.variable} ${uncut.variable} ${directory.variable} ${ronzino.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
