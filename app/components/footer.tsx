import React from 'react';
import {useRouter} from 'next/navigation';

export default function Menu() {
  const router = useRouter();

  const goToPage = (menuItem: string) => {
    router.push(`/`); // 동적 경로로 이동
  };

  return (
    <div className='border border-red-500 my-4 flex flex-col min-h-screen'>
      <p>Footer</p>
    </div>
  );
}
