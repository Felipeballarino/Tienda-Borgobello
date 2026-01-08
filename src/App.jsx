import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home/Home";
import ProductosList from "./pages/products/ProductosList"
import ProductoDetalle from "./pages/products/ProductoDetalle";
import CheckoutPage from "./pages/checkout/CheckoutPage";

import 'quill/dist/quill.snow.css'
import { useEffect } from "react";
import { useBrandsStore } from "./store/brandsStore";
import { useCategoriesStore } from "./store/categoriesStore";
import { useProductsStore } from "./store/productsStore";

function App() {

  const { loadBrands } = useBrandsStore()
  const { loadCategories } = useCategoriesStore()
  const { loadProducts } = useProductsStore()

  useEffect(() => {
    loadBrands();
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
