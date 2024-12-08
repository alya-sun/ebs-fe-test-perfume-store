import { useCart } from '@/hooks/useCart';
import classes from '../Cart.module.css'

export const Summary: React.FC = () => {
    const { totalPrice }= useCart();
    return(
        <div className={classes.summary}>
            <h2>Summary</h2>

            <div className={classes['input-group']}>
                <label>Promo code</label>
                <input type="text" placeholder="Enter your promo code" />
            </div>

            <div className={classes['input-group']}>
                <label>Shipping</label>
                <select>
                    <option value="standard">Standard Delivery - €5.00</option>
                    <option value="express">Express Delivery - €10.00</option>
                </select>
            </div>

            <div className={classes['input-group']}>
                <label>Payment</label>
                <select>
                    <option value="card">Credit/Debit Card</option>
                    <option value="paypal">PayPal</option>
                </select>
            </div>

            <hr />
            
            <div className={classes['total']}>
                <span>Total Price</span>
                <span>€{totalPrice.toFixed(2)}</span>
            </div>

            <button className={classes['checkout-button']}>Checkout</button>
        </div>
    );
}
