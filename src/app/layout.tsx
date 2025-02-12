import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import 'remixicon/fonts/remixicon.css';
import ReactQueryProvider from '@/config/providers/QueryProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Apply Digital Test',
  description: 'Frontend development test for Apply Digital',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReactQueryProvider>
      <html lang="en">
        <body className="font-inter m-0 min-h-screen w-full scroll-smooth p-0">
          {children}
        </body>
      </html>
    </ReactQueryProvider>
  );
}
