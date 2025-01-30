'use client';
import React from 'react';
import {useRouter} from 'next/navigation';

export default function Menu() {
  const router = useRouter();

  const goToPage = (menuItem: string) => {
    router.push(`/menu/${menuItem}`); // 동적 경로로 이동
  };

  const goHome = () => {
    router.push('/');
  };

  return (
    <div className='border border-red-500 my-4 py-4'>
      <div className='flex justify-between mx-32 border border-black text-xl font-bold'>
        <div
          className='hover:cursor-pointer hover:text-amber-200'
          onClick={() => goHome()}
        >
          Home
        </div>
        <div
          className='hover:cursor-pointer hover:text-amber-200'
          onClick={() => goToPage('faqs')}
        >
          FAQs
        </div>
        <div
          className='hover:cursor-pointer hover:text-amber-200'
          onClick={() => goToPage('commentsrequests')}
        >
          Comments/requests
        </div>
        <div
          className='hover:cursor-pointer hover:text-amber-200'
          onClick={() => goToPage('cart')}
        >
          Cart
        </div>
      </div>
    </div>
  );
}
