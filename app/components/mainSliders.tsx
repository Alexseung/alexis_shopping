'use client';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import React, {useRef} from 'react';

export default function Home() {
  const imgList = [
    {
      name: 'apple',
      img: '/images/apple.png',
      product: 'This is apple',
    },
    {
      name: 'banana',
      img: '/images/banana.jpg',
      product: 'This is banana',
    },
    {
      name: 'apple',
      img: '/images/apple.png',
      product: 'This is apple',
    },
    {
      name: 'banana',
      img: '/images/banana.jpg',
      product: 'This is banana',
    },
    {
      name: 'apple',
      img: '/images/apple.png',
      product: 'This is apple',
    },
    {
      name: 'banana',
      img: '/images/banana.jpg',
      product: 'This is banana',
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <>
      <div className='my-4 px-10 overflow-hidden'>
        <Slider {...settings}>
          {imgList.map(item => (
            <div className='bg-gray-200 h-[200px] text-black rounded-xl'>
              <div className='rounded-t-xl bg-indigo-500 flex justify-center items-center'>
                <img src={item.img} className='h-16 w-32 rounded-full' />
              </div>
              <div className='flex flex-col justify-center items-center gap-4 p-4'>
                <p className='text-xl font-semibold'>{item.name}</p>
                <p>{item.product}</p>
                <button className='bg-indigo-500 text-white text-lg px-6 rounded-sm'>
                  Link to this item
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}
