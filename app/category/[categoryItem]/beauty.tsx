'use client';

import {useCart} from '../../components/context/CartContext';
import ShowListItmes from '../../components/ShowListItems';

export default function BeautyPage() {
  const {addToCart, isClicked, toggleClicked} = useCart();
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

  const handleClick = (index: number, beauty: any) => {
    toggleClicked(index);
    addToCart(beauty);
  };

  return (
    <>
      <h1>Food LIst</h1>
      <ShowListItmes List={beautyList} />
    </>
  );
}
