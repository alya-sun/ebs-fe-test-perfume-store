import { useCart } from '@/hooks/useCart';
import classes from '../Cart.module.css'

export const Summary: React.FC = () => {
    const { clearCart, totalPrice }= useCart();
    return(
        <div className={classes['cart-footer']}>
            <h2>Total: ${totalPrice.toFixed(2)}</h2>
            <button className={classes['clear-button']} onClick={clearCart}>
                Clear Cart
            </button>
        </div>
    );
}
