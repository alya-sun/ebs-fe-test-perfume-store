import { useCart } from '@/hooks/useCart';
import { CartItem } from './CartItem';
import classes from '../Cart.module.css'

export const CartItems: React.FC = () => {
    const { cart, totalProducts, clearCart }= useCart();
    return(
        <div className={classes['cart-container']}>
            <div className={classes['cart-list']}>
                {cart.map((item) => (
                    <CartItem key={item.id} {...item} />
                ))}
            </div>

            <span>{totalProducts} items</span>
            
            <button className={classes['clear-button']} onClick={clearCart}>
                Clear Cart
            </button>
        </div>
    );
}
