import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home/Home";
import ProductosList from "./pages/products/ProductosList"
import ProductoDetalle from "./pages/products/ProductoDetalle";
import CheckoutPage from "./pages/checkout/CheckoutPage";

import 'quill/dist/quill.snow.css'
import { useEffect } from "react";
import { useCategoriesStore } from "./store/categoriesStore";
import { useProductsStore } from "./store/productsStore";
import { useAuthStore } from "./store/authStore";

function App() {

  const { loadCategories } = useCategoriesStore()
  const { loadProducts } = useProductsStore()
  const { initAuth } = useAuthStore()

  useEffect(() => {
    initAuth()  
    loadCategories()
    loadProducts()
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<ProductosList />} />
        <Route path="/producto/:id" element={<ProductoDetalle />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
    </Router>
  )
}

export default App
