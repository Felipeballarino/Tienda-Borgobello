import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useCartStore = create(
    persist(
        (set, get) => ({
            cart: [],
            openCart: false,

            // Agregar producto
            addToCart: (product, quantity = 1) => {
                const prevCart = get().cart;
                const existing = prevCart.find(
                    (item) =>
                        item.codproducto === product.codproducto 
                );

                let updatedCart;
                if (existing) {
                    updatedCart = prevCart.map((item) =>
                        item.codproducto === product.codproducto
                            ? { ...item, quantity: item.quantity + quantity }
                            : item
                    );
                } else {
                    updatedCart = [...prevCart, { ...product, quantity }];
                }

                set({ cart: updatedCart, openCart: true });
            },

            // Quitar producto
            removeFromCart: (id) => {
                const updated = get().cart.filter((item) => item.codproducto !== id);
                set({ cart: updated, openCart: true });
            },

            // Actualizar cantidad
            updateQuantity: (id, quantity) => {
                const updated = get().cart.map((item) =>
                    item.codproducto === id
                        ? {
                            ...item,
                            quantity: quantity,
                        }
                        : item
                );
                set({ cart: updated });
            },

            // Vaciar carrito
            clearCart: () => set({ cart: [] }),

            // Control del drawer
            showDrawerCart: () => set({ openCart: true }),
            onCloseCart: () => set({ openCart: false }),

            // Getters calculados (derivados)
            cartTotal: () =>
                get().cart.reduce((acc, item) => acc + item.precio_final * item.quantity, 0),
            cartItems: () =>
                get().cart.reduce((acc, item) => acc + item.quantity, 0),
        }),
        {
            name: "cart-storage", // Clave en localStorage
            partialize: (state) => ({ cart: state.cart }), // Solo persistimos el carrito
        }
    )
);
