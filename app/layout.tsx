'use client';

import React from 'react';
import './main.css';
import Header from './components/header';
import Footer from './components/footer';
import {useRouter} from 'next/navigation';

// /app/layout.tsx
export default function Layout({children}: {children: React.ReactNode}) {
  const router = useRouter();
  const goHome = () => {
    router.push('/');
  };

  return (
    <html lang='en'>
      {' '}
      {/* 반드시 <html> 태그 포함 */}
      <body>
        <div className='flex flex-col min-h-screen'>
          <div className='text-2xl mb-4 hover:cursor-pointer' onClick={goHome}>
            Name & Logo
          </div>
          <Header />
          <main className='flex-grow'>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
