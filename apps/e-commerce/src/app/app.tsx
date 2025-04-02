import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ProductList } from '../pages/ProductList/ProductList';
import { ProductDetails } from '../pages/ProductDetails/ProductDetails';

const router = {
  future: {
    v7_startTransition: true,
    v7_relativeSplatPath: true
  }
};

export function App() {
  return (
    <Router future={router.future}>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>
    </Router>
  );
}
