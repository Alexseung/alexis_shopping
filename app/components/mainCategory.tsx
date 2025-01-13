'use client';
import React from 'react';
import {useRouter} from 'next/navigation';

export default function mainCategory() {
  const router = useRouter();

  const goToPage = (categoryItem: string) => {
    router.push(`/category/${categoryItem}`); // 동적 경로로 이동
  };

  return (
    <div className='border border-red-500 h-80 my-3'>
      <div className='text-3xl mb-16'>What are you looking for?</div>
      <div className='grid grid-cols-2 justify-items-center mx-52'>
        <div className='my-6'>
          <p className='text-center font-semibold text-2xl'>Food</p>
          <img
            src='https://img.hankyung.com/photo/202403/AA.36104679.1.jpg'
            alt=''
            className='border border-blue-700 rounded-full mb-10 w-52 h-52 hover:cursor-pointer'
            onClick={() => goToPage('food')}
          />
        </div>
        <div className='my-6'>
          <p className='text-center font-semibold text-2xl'>Food</p>
          <img
            src='https://img.hankyung.com/photo/202403/AA.36104679.1.jpg'
            alt=''
            className='border border-blue-700 rounded-full mb-10 w-52 h-52 hover:cursor-pointer'
          />
        </div>
        <div className='my-6'>
          <p className='text-center font-semibold text-2xl'>Food</p>
          <img
            src='https://img.hankyung.com/photo/202403/AA.36104679.1.jpg'
            alt=''
            className='border border-blue-700 rounded-full mb-10 w-52 h-52 hover:cursor-pointer'
          />
        </div>
        <div className='my-6'>
          <p className='text-center font-semibold text-2xl'>Food</p>
          <img
            src='https://img.hankyung.com/photo/202403/AA.36104679.1.jpg'
            alt=''
            className='border border-blue-700 rounded-full mb-10 w-52 h-52 hover:cursor-pointer'
          />
        </div>
        <div className='my-6'>
          <p className='text-center font-semibold text-2xl'>Food</p>
          <img
            src='https://img.hankyung.com/photo/202403/AA.36104679.1.jpg'
            alt=''
            className='border border-blue-700 rounded-full mb-10 w-52 h-52 hover:cursor-pointer'
          />
        </div>
        <div className='my-6'>
          <p className='text-center font-semibold text-2xl'>Food</p>
          <img
            src='https://img.hankyung.com/photo/202403/AA.36104679.1.jpg'
            alt=''
            className='border border-blue-700 rounded-full mb-10 w-52 h-52 hover:cursor-pointer'
          />
        </div>
      </div>
    </div>
  );
}
