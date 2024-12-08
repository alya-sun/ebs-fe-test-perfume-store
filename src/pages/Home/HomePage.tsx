import React, { useState } from 'react';
import { useProducts } from '@/hooks/useProducts';
import { useCart } from '@/hooks/useCart';
import classes from '@/components/Home/Home.module.css';

export const HomePage: React.FC = () => {
    const { products, loading, error } = useProducts();
    const [filter, setFilter] = useState('');
    const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
    const { addToCart, removeFromCart } = useCart();

    const filteredProducts = products.filter(
        (product) => (filter ? product.category.toLowerCase().includes(filter.toLowerCase()) : true)
    ).sort((a, b) =>
        sortOrder === 'asc' ? a.price - b.price : b.price - a.price
    );

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className={classes['home-page']}>
            <div className={classes.controls}>
                <select onChange={(event) => setFilter(event.target.value)}>
                    <option value="">All Categories</option>
                    {[...new Set(products.map((p) => p.category))].map((category) => (
                        <option key={category} value={category}>
                            {category}
                        </option>
                    ))}
                </select>
                <button onClick={() => setSortOrder('asc')}>Sort by price: Asc</button>
                <button onClick={() => setSortOrder('desc')}>Sort by price: Desc</button>
            </div>

            <div className={classes['product-grid']}>
                {filteredProducts.map((product) => (
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
                ))}
            </div>
        </div>
    );
};