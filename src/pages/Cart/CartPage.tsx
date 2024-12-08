import * as React from 'react';
import { useCart } from '@/hooks/useCart';
import { CartItems } from '@/components/Cart/CartItems/CartItems';
import { Summary } from '@/components/Cart/Summary/Summary';
import classes from '@/components/Cart/Cart.module.css'

export const CartPage: React.FC = () => {
    const { cart } = useCart();

    if (cart.length === 0) {
        return <div className={classes['cart-page']}> Your cart is empty</div>;
    }

    return (
        <div className={classes['cart-page']}>
            <div className={classes['header']}>
                <h1>Shopping Cart</h1>
            </div>

            <div className={classes['main']}>
                <CartItems />
                <Summary />
            </div>
        </div>
    )
}