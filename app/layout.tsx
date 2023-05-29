import './globals.css';
import { Inter } from 'next/font/google';
// import PageLayout from './components/pageLayout';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Sayak Dutta | Portfolio',
  description: 'Sayak Dutta Software Dev Portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} container mx-auto min-h-screen px-4 py-4`}
      >
        {children}
      </body>
    </html>
  );
}
