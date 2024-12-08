import axios from "axios";

export interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
        rate: number;
        count: number;
    };
}

export const productService = {
    async fetchProducts(): Promise<Product[]> {
        try {
            const response = await axios.get<Product[]>('https://fakestoreapi.com/products');
            return response.data;
        } catch (error) {
            console.error('Failed to fetch products:', error);
            throw new Error('Failed to load products');
        }
    },
};