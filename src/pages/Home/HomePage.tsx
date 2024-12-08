import React from 'react';
import { useProducts } from '@/hooks/useProducts';
import classes from '@/components/Home/Home.module.css';
import { ProductItems } from '@/components/Home/ProductItems/ProductItems';
import { Pagination } from '@/components/Home/Pagination/Pagination';

export const HomePage: React.FC = () => {
    const {
        filteredAndSortedProducts,
        setFilter,
        setSortOrder,
    } = useProducts();

    if (filteredAndSortedProducts.loading) return <div>Loading...</div>;
    if (filteredAndSortedProducts.error) return <div>Error: {filteredAndSortedProducts.error}</div>;

    return (
        <div className={classes['home-page']}>
            <div className={classes.controls}>
                <select onChange={(event) => setFilter(event.target.value)}>
                    <option value="">All Categories</option>
                    {[...new Set(filteredAndSortedProducts.products.map((p) => p.category))].map((category) => (
                        <option key={category} value={category}>
                            {category}
                        </option>
                    ))}
                </select>
                <select onChange={e => setSortOrder(e.target.value as 'asc' | 'desc')}>
                    <option value='asc'>Sort by price ascending</option>
                    <option value='desc'>Sort by price descending</option>

                </select>
            </div>

            <ProductItems/>
            <Pagination/>
        </div>
    );
};