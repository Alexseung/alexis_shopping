import {useRouter} from 'next/navigation';
import Food from './food';
import Beauty from './beauty';
import Living from './living';

const CategoryPage = ({params}: {params: {categoryItem: string}}) => {
  const {categoryItem} = params;

  let PageComponent;

  switch (categoryItem) {
    case 'food':
      PageComponent = Food;
      break;
    case 'beauty':
      PageComponent = Beauty;
      break;
    case 'living':
      PageComponent = Living;
      break;
    default:
      PageComponent = () => <div>Not Found</div>;
  }

  return (
    <div className='p-8'>
      <h1 className='text-2xl font-bold'>Selected Menu: {categoryItem}</h1>
      <p className='mt-4'>
        Welcome to the <b>{categoryItem}</b> page.
      </p>
      <PageComponent />
    </div>
  );
};

export default CategoryPage;
