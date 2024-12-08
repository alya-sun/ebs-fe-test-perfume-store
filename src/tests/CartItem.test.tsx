import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { CartItem } from '@/components/Cart/CartItems/CartItem';
import { useCart } from '@/hooks/useCart';

jest.mock('@/hooks/useCart', () => ({
    useCart: jest.fn(),
}));

const mockUpdateQuantity = jest.fn();
const mockRemoveFromCart = jest.fn();

beforeEach(() => {
    (useCart as jest.Mock).mockReturnValue({
        updateQuantity: mockUpdateQuantity,
        removeFromCart: mockRemoveFromCart
    });
});

describe('CartItem', () => {
    const mockItem = {
        id: 1,
        title: 'Test Product',
        category: 'Category A',
        price: 99.99,
        image: 'https://via.placeholder.com/150',
        quantity: 2,
    };

    it('renders the cart item with correct details', () => {
        render(<CartItem {...mockItem} />);
        expect(screen.getByText('Test Product')).toBeInTheDocument();
        expect(screen.getByText('Category: Category A')).toBeInTheDocument();
        expect(screen.getByText('$99.99')).toBeInTheDocument();
        expect(screen.getByText('2')).toBeInTheDocument();
        expect(screen.getByAltText('Test Product')).toBeInTheDocument();
    });

    it('calls updateQuantity when quantity buttons are clicked', () => {
        render(<CartItem {...mockItem} />);
        fireEvent.click(screen.getByText('-'));
        expect(mockUpdateQuantity).toHaveBeenCalledWith(1, 1);

        fireEvent.click(screen.getByText('+'));
        expect(mockUpdateQuantity).toHaveBeenCalledWith(1, 3);
    });

    it('calls removeFromCart when remove button is clicked', () => {
        render(<CartItem {...mockItem} />);
        fireEvent.click(screen.getByText('Remove'));
        expect(mockRemoveFromCart).toHaveBeenCalledWith(1);
    });
});