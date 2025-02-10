'use cllient';
import {createContext, useContext, useState, ReactNode, Children} from 'react';

interface CartItem {
  name: string;
  price: number;
  category: string;
}

interface CartContxtType {
  cartList: CartItem[];
  addToCart: (item: CartItem) => void;
  isClicked: {[key: number]: boolean};
  toggleClicked: (index: number) => void;
}

const CartContext = createContext<CartContxtType | null>(null);

export const CartProvider = ({children}: {children: ReactNode}) => {
  const [cartList, setCartList] = useState<CartItem[]>([]);
  const [isClicked, setIsClicked] = useState<{[key: number]: boolean}>({});

  const addToCart = (item: CartItem) => {
    setCartList(prev => [...prev, item]);
  };

  const toggleClicked = (index: number) => {
    setIsClicked(prev => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <CartContext.Provider
      value={{cartList, addToCart, isClicked, toggleClicked}}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within a CartProvider');
  return context;
};
