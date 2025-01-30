'use client';
import {useCart} from '../../components/context/CartContext';

export default function FoodPage() {
  const {addToCart} = useCart();
  const foodList = [
    {name: 'choco', price: 2500, category: 'snack'},
    {name: 'apple', price: 1000, category: 'fruit'},
    {name: 'pizza', price: 6000, category: 'meal'},
    {name: 'burger', price: 5000, category: 'meal'},
    {name: 'soda', price: 1500, category: 'beverage'},
    {name: 'ice cream', price: 3000, category: 'dessert'},
    {name: 'pasta', price: 7000, category: 'meal'},
    {name: 'fries', price: 2000, category: 'snack'},
    {name: 'coffee', price: 4000, category: 'beverage'},
    {name: 'salad', price: 4500, category: 'meal'},
    {name: 'muffin', price: 2500, category: 'dessert'},
    {name: 'orange', price: 1200, category: 'fruit'},
    {name: 'hot dog', price: 3500, category: 'meal'},
    {name: 'chips', price: 1000, category: 'snack'},
    {name: 'smoothie', price: 5000, category: 'beverage'},
  ];

  return (
    <>
      <h1>Food LIst</h1>
      <div className='grid grid-cols-3'>
        {foodList.map((food, index) => (
          <div key={index} className='h-44 border border-blue-600 m-2 p-2'>
            <h2>{food.name}</h2>
            <p>{food.price}원</p>
            <p>{food.category}</p>
            <button
              className='bg-red-500 text-white p-1 rounded-md'
              onClick={() => addToCart(food)}
            >
              Add Cart
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
