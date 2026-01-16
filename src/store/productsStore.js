import { create } from "zustand";
import { getProduct } from "../features/products/services/productServices";


export const useProductsStore = create((set, get) => ({
    products: [],
    loading: true,
    loaded: false,
    loadProducts: async () => {
        if (get.products) return;

        try {
            const data = await getProduct();
            set({
                products: data.productos,
                loading: false,
                loaded: true
            });
        } catch (error) {
            console.error("Error al cargar productos:", error);
        }
    },
    setLoading: (estado) => set({ loading: estado }),
    resetProducts: () => set({
        products: [],
        loaded: false,
        loading: true
    })

}))