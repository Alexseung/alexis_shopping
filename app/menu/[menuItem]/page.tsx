import {useRouter} from 'next/navigation';
import Faqs from './faqs';
import Commentsrequests from './Commentsrequests';
import Cart from './cart';

const MenuPage = ({params}: {params: {menuItem: string}}) => {
  const {menuItem} = params;

  let PageComponent;

  switch (menuItem) {
    case 'faqs':
      PageComponent = Faqs;
      break;
    case 'commentsrequests':
      PageComponent = Commentsrequests;
      break;
    case 'cart':
      PageComponent = Cart;
      break;
    default:
      PageComponent = () => <div>Not Found</div>;
  }

  return (
    <div className='p-8'>
      <h1 className='text-2xl font-bold'>Selected Menu: {menuItem}</h1>
      <p className='mt-4'>
        Welcome to the <b>{menuItem}</b> page.
      </p>
      <PageComponent />
    </div>
  );
};

export default MenuPage;

// app 폴더 안에 폴더를 만들면 그게 경로가됨
// app - menu 그래서 /menu로 들어가게된다 그 다음 [menuItem] 이라는 폴더를 생성
// [] 안에 이름을 넣으면 이게 동적 라우팅됨
// ${menuItem} 으로 가져온거 params로 받아줌
