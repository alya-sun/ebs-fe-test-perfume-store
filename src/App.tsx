import { Route, Routes } from 'react-router-dom';
import { BaseLayout } from './layout';
import { CartProvider } from './contexts/CartContext';
import { CartPage } from './pages/Cart/CartPage';
import { HomePage } from './pages/Home/HomePage';
import { ProductProvider } from './contexts/ProductContext';

function App() {
  return (
    <BaseLayout>
      <ProductProvider>
        <CartProvider>
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/cart" element={<CartPage/>} />
          </Routes>
        </CartProvider>
      </ProductProvider>
    </BaseLayout>
  )
}

export default App
