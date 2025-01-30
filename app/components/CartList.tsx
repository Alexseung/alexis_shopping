'use client';
import {useCart} from './context/CartContext';

export default function CartList() {
  const {cartList} = useCart();

  return (
    <div>
      <h1 className='text-xl font-bold'>Cart List</h1>
      <div className='grid grid-cols-3'>
        {cartList.length > 0 ? (
          cartList.map((item, index) => (
            <div key={index} className='h-44 border border-green-600 m-2 p-2'>
              <h2>{item.name}</h2>
              <p>{item.price}원</p>
              <p>{item.category}</p>
            </div>
          ))
        ) : (
          <p>장바구니가 비어 있습니다.</p>
        )}
      </div>
    </div>
  );
}
