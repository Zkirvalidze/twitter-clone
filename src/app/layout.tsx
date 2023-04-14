import Sidebar from '@/components/layout/Sidebar';
import FollowBar from '@/components/layout/FollowBar';
import './global.css';

import { Inter } from 'next/font/google';
import ModalsProvider from './providers/ModalsProvider';
import ToastProviders from './providers/ToastProvider';
import ThemeContainer from '@/components/Container';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'twitter',
  description: 'elon musks toy',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ModalsProvider />
        <ToastProviders />
        <ThemeContainer>
          <Sidebar />
          <div
            className="
                col-span-3 
              lg:col-span-2 
              border-x-[1px] 
              border-neutral-800"
          >
            {children}
          </div>
          <FollowBar />
        </ThemeContainer>
      </body>
    </html>
  );
}
