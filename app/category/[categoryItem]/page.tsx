import {useRouter} from 'next/navigation';

const CategoryPage = ({params}: {params: {categoryItem: string}}) => {
  const {categoryItem} = params;

  return (
    <div className='p-8'>
      <h1 className='text-2xl font-bold'>Selected Menu: {categoryItem}</h1>
      <p className='mt-4'>
        Welcome to the <b>{categoryItem}</b> page.
      </p>
    </div>
  );
};

export default CategoryPage;
