import { createContext, ReactNode, useCallback, useState } from 'react';
import { Product } from '@/hooks/useProducts';

export interface CartItemProps extends Product {
    quantity: number;
}

export interface CartContextProps {
    cart: CartItemProps[];
    addToCart: (product: Product) => void;
    removeFromCart: (productId: number) => void;
    updateQuantity: (productId: number, quantity: number) => void;
    clearCart: () => void;
    totalPrice: number;
    totalProducts: number;
}

export const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartProvider = ({ children }: {children: ReactNode}) => {
    const [cart, setCart] = useState<CartItemProps[]>([]);

    const addToCart = (product: Product) => {
        setCart((prev) => {
            const existing = prev.find((item) => item.id === product.id);
            if (existing) {
                return prev.map((item) =>
                item.id === product.id ? {...item, quantity: item.quantity + 1} : item
                );
            }
            return [...prev, {...product, quantity: 1}];
        });
        
    };

    const removeFromCart = (productId: number) => {
        setCart((prev) => prev.filter((item) => item.id !== productId));
    };

    const updateQuantity = useCallback((productId: number, quantity: number) => {
        setCart((prev) =>
            prev.map((item) =>
                item.id === productId ? { ...item, quantity: Math.max(1, quantity) } : item
            )
        );
    }, []);

    const clearCart = () => {
        setCart([]);
    };

    const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    const totalProducts = cart.length;

    return (
        <CartContext.Provider value={{cart, addToCart, removeFromCart, updateQuantity, clearCart, totalPrice, totalProducts}}>
            {children}
        </CartContext.Provider>
    );
};