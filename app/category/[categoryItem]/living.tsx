'use client';
import {useCart} from '../../components/context/CartContext';
import ShowListItmes from '../../components/ShowListItems';

export default function LivingPage() {
  const {addToCart} = useCart();
  const livingList = [
    {name: 'sofa', price: 500000, category: 'furniture'},
    {name: 'desk lamp', price: 30000, category: 'electronics'},
    {name: 'bookshelf', price: 120000, category: 'furniture'},
    {name: 'vacuum cleaner', price: 150000, category: 'appliance'},
    {name: 'curtain', price: 40000, category: 'decor'},
    {name: 'air purifier', price: 200000, category: 'appliance'},
    {name: 'bed frame', price: 350000, category: 'furniture'},
    {name: 'rug', price: 60000, category: 'decor'},
    {name: 'mirror', price: 50000, category: 'decor'},
    {name: 'chair', price: 70000, category: 'furniture'},
    {name: 'table lamp', price: 45000, category: 'electronics'},
    {name: 'blender', price: 80000, category: 'appliance'},
    {name: 'shoe rack', price: 55000, category: 'furniture'},
    {name: 'clock', price: 25000, category: 'decor'},
    {name: 'humidifier', price: 90000, category: 'appliance'},
  ];

  return (
    <>
      <h1>Food LIst</h1>
      <ShowListItmes List={livingList} />
    </>
  );
}
