import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductsPage from './pages/products/ProductsPage';
import ProductDetailPage from './pages/products/ProductDetailPage';
import './styles/tailwind.css';
import CreateProductPage from "./pages/CreateProductPage";
import EditProductPage from "./pages/EditProductPage";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";


const App: React.FC = () => {
  return (
      <Router>
          <Navbar />
          <div className="container mx-auto p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:id" element={<ProductDetailPage />} />
          <Route path="/create-product" element={<CreateProductPage />} />
          <Route path="/edit/:id" element={<EditProductPage />} />
        </Routes>
          </div>
      </Router>
  );
};

export default App;
