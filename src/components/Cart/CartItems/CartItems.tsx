import { useCart } from '@/hooks/useCart';
import { CartItem } from './CartItem';
import classes from '../Cart.module.css'

export const CartItems: React.FC = () => {
    const { cart, totalProducts}= useCart();
    return(
        <div className={classes['cart-container']}>
            <div className={classes['cart-list']}>
                {cart.map((item) => (
                    <CartItem key={item.id} {...item} />
                ))}
            </div>
            <span>{totalProducts} items</span>
        </div>
    );
}
