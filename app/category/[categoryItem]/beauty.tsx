'use client';

import {useState} from 'react';
import {useCart} from '../../components/context/CartContext';

export default function BeautyPage() {
  const {addToCart} = useCart();
  const beautyList = [
    {name: 'lipstick', price: 25000, category: 'makeup'},
    {name: 'moisturizer', price: 40000, category: 'skincare'},
    {name: 'shampoo', price: 18000, category: 'haircare'},
    {name: 'conditioner', price: 20000, category: 'haircare'},
    {name: 'foundation', price: 35000, category: 'makeup'},
    {name: 'sunscreen', price: 30000, category: 'skincare'},
    {name: 'perfume', price: 60000, category: 'fragrance'},
    {name: 'eyeliner', price: 15000, category: 'makeup'},
    {name: 'nail polish', price: 12000, category: 'nailcare'},
    {name: 'hair dryer', price: 70000, category: 'appliance'},
    {name: 'face mask', price: 10000, category: 'skincare'},
    {name: 'serum', price: 45000, category: 'skincare'},
    {name: 'body lotion', price: 28000, category: 'bodycare'},
    {name: 'deodorant', price: 15000, category: 'bodycare'},
    {name: 'hair straightener', price: 90000, category: 'appliance'},
  ];

  const [isClicked, setIsClicked] = useState<{[key: number]: boolean}>({});

  const handleClick = (index: number, beauty: any) => {
    setIsClicked(prev => ({
      ...prev,
      [index]: !prev[index], // 현재 클릭된 아이템만 변경
    }));
    addToCart(beauty);
  };

  return (
    <>
      <h1>Food LIst</h1>
      <div className='grid grid-cols-3'>
        {beautyList.map((beauty, index) => (
          <div key={index} className='h-44 border border-blue-600 m-2 p-2'>
            <h2>{beauty.name}</h2>
            <p>{beauty.price}원</p>
            <p>{beauty.category}</p>
            <button
              className={`${
                isClicked[index]
                  ? 'bg-red-500 text-white p-1 rounded-md'
                  : 'bg-blue-500 text-white p-1 rounded-md'
              }`}
              onClick={() => handleClick(index, beauty)}
            >
              Add Cart
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
