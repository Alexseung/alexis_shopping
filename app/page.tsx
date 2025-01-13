import React from 'react';
import MainSliders from './components/mainSliders';
import MainCategory from './components/mainCategory';

export default function () {
  return (
    <>
      <div className='border border-red-500'>
        <MainSliders />
      </div>
      <MainCategory />
    </>
  );
}
