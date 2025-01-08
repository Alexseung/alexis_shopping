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
    arrows: true,
  };

  return (
    <>
      <div className='mt-20 px-10 overflow-hidden'>
        <Slider {...settings}>
          {imgList.map(item => (
            <div className='bg-white h-[450px] text-black rounded-xl'>
              <div className='rounded-t-xl bg-indigo-500 flex justify-center items-center'>
                <img src={item.img} className='h-44 w-44 rounded-full' />
              </div>
              <div className='flex flex-col justify-center items-center gap-4 p-4'>
                <p className='text-xl font-semibold'>{item.name}</p>
                <p>{item.product}</p>
                <button className='bg-indigo-500 text-white text-lg px-6 py-1 rounded-sm'>
                  Read More
                </button>
              </div>
            </div>
          ))}
        </Slider>
        {/* 화살표 커스터마이징
        <style jsx global>{`
          .slick-prev,
          .slick-next {
            z-index: 10;
            width: 40px;
            height: 40px;
            background: rgba(0, 0, 0, 0.5);
            color: white;
            border-radius: 50%;
            display: flex !important;
            justify-content: center;
            align-items: center;
          }

          .slick-prev {
            left: -30px;
          }

          .slick-next {
            right: -30px;
          }

          .slick-dots {
            bottom: -20px;
          }
        `}</style> */}
      </div>
    </>
  );
}
