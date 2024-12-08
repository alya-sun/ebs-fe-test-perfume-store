import { render, screen } from '@testing-library/react';
import { CartItems } from '@/components/Cart/CartItems/CartItems';
import { useCart } from '@/hooks/useCart';

jest.mock('@/hooks/useCart', () => ({
    useCart: jest.fn(),
}));

describe('CartItems', () => {
    const mockCart = [
        {
            id: 1,
            title: 'Product A',
            category: 'Category A',
            price: 49.99,
            image: 'https://via.placeholder.com/150',
            quantity: 1,
        },
        {
            id: 2,
            title: 'Product B',
            category: 'Category B',
            price: 19.99,
            image: 'https://via.placeholder.com/150',
            quantity: 3,
        },
    ];

    beforeEach(() => {
        (useCart as jest.Mock).mockReturnValue({
            cart: mockCart,
            totalProducts: 2,
        });
    });

    it('renders all cart items', () => {
        render(<CartItems />);
        expect(screen.getByText('Product A')).toBeInTheDocument();
        expect(screen.getByText('Product B')).toBeInTheDocument();
    });

    it('shows total products count', () => {
        render(<CartItems />);
        expect(screen.getByText('2 items')).toBeInTheDocument();
    });
});