import React from 'react';
import MainSliders from './components/mainSliders';
import Something from './components/something';

export default function () {
  return (
    <>
      <div className='border border-red-500'>
        <MainSliders />
      </div>
      <Something />
    </>
  );
}
