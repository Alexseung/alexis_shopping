'useClient';
import {useCart} from './context/CartContext';
import QuantitySelector from './QuantitySelector';

export default function ShowListItems({List}) {
  const {addToCart, isClicked, toggleClicked} = useCart();

  const handleClick = (index: number, item: any) => {
    toggleClicked(index);
    addToCart(item);
  };

  return (
    <div className='grid grid-cols-3'>
      {List.map((beauty, index) => (
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
          <QuantitySelector />
        </div>
      ))}
    </div>
  );
}
