import {useRouter} from 'next/navigation';

const MenuPage = ({params}: {params: {menuItem: string}}) => {
  const {menuItem} = params;

  return (
    <div className='p-8'>
      <h1 className='text-2xl font-bold'>Selected Menu: {menuItem}</h1>
      <p className='mt-4'>
        Welcome to the <b>{menuItem}</b> page.
      </p>
    </div>
  );
};

export default MenuPage;
