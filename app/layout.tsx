'use client';

import React from 'react';
import './main.css';
import Header from './components/header';
import Footer from './components/footer';
import {useRouter} from 'next/navigation';
import {CartProvider} from './components/context/CartContext';

// /app/layout.tsx
export default function Layout({children}: {children: React.ReactNode}) {
  const router = useRouter();
  const goHome = () => {
    router.push('/');
  };

  return (
    <html lang='en'>
      <body>
        {/* CartProvider로 감싸기 */}
        <CartProvider>
          <div className='flex flex-col min-h-screen'>
            <div
              className='text-4xl font-bold text-center mt-4 mb-4 hover:cursor-pointer'
              onClick={goHome}
            >
              Name & Logo
            </div>
            <Header />
            <main className='flex-grow'>{children}</main>
            <Footer />
          </div>
        </CartProvider>
      </body>
    </html>
  );
}
