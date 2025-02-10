import {useState} from 'react';

export default function () {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = e => {
    setQuantity(Number(e.target.value));
  };

  return (
    <input
      type='number'
      min='1'
      defaultValue='1'
      value={quantity}
      onClick={handleQuantityChange}
      className='w-10 pl-2'
    />
  );
}
