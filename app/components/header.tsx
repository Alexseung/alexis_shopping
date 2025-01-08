'use client';
import React from 'react';
import {useRouter} from 'next/navigation';

export default function Menu() {
  const router = useRouter();

  const goToPage = (menuItem: string) => {
    router.push(`/menu/${menuItem}`); // 동적 경로로 이동
  };

  return (
    <div className='border border-red-500 my-4'>
      <div className='flex justify-between mx-32 border border-black'>
        <p>Header</p>
        <div onClick={() => goToPage('one')}>One</div>
        <div onClick={() => goToPage('two')}>Two</div>
        <div onClick={() => goToPage('three')}>Three</div>
      </div>
    </div>
  );
}
