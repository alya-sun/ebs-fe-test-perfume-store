import { useProducts } from '@/hooks/useProducts';
import classes from '../Home.module.css'
import { ProductItem } from './ProductItem';

export const ProductItems: React.FC = () => {
    const { paginatedProducts } = useProducts();

    return(
        <div className={classes['product-grid']}>
            {paginatedProducts.map((product) => (
                <ProductItem key={product.id} {...product} />
            ))}
        </div>
    );
};