import { Product } from "@/services/productService";
import { useCart } from "@/hooks/useCart";
import classes from '../Home.module.css'

export const ProductItem: React.FC<Product> = (product) => {
    const { addToCart, removeFromCart } = useCart();

    return(
        <div key={product.id} className={classes['product-card']}>
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>${product.price}</p>
            <p>{product.category}</p>
            <div className={classes.rating}>
                <span>⭐ {product.rating.rate} / 5</span>
                <span>({product.rating.count} reviews)</span>
            </div>
            
            <button onClick={() => addToCart(product)}>Add to cart</button>
            <button onClick={() => removeFromCart(product.id)}>Remove from cart</button>
        </div>
    );
};