import { create } from "zustand";
import Cookies from "js-cookie";
import { loginUserNot, verificarToken } from "../features/auth/services/LoginServices";

export const useAuthStore = create((set, get) => ({
    user: null,
    loading: true,

    // LOGIN NORMAL
    login: (data) => {
        Cookies.set("user_data_token", data.token, { expires: 365 * 5 });
        Cookies.set("user_data", JSON.stringify(data.usuario), { expires: 365 * 5 });

        set({ user: data.usuario, loading: false });
    },

    // LOGIN ANÓNIMO
    loginNotUser: async () => {
        try {
            const data = await loginUserNot();

            Cookies.set("user_data_token", data.token, { expires: 365 * 5 });
            Cookies.set("user_data", JSON.stringify(data.usuario), { expires: 365 * 5 });

            set({ user: data.usuario, loading: false });
        } catch (error) {
            console.error("Error en login anónimo", error);
            set({ loading: false });
        }
    },

    // LOGOUT
    logout: async () => {
        Cookies.remove("user_data");
        Cookies.remove("user_data_token");

        await get().loginNotUser();
    },

    // INIT (equivale al useEffect del AuthProvider)
    initAuth: async () => {
        const token = Cookies.get("user_data_token");
        console.log("AAAA")
        if (!token) {
            await get().loginNotUser();
            return;
        }

        try {
            const resp = await verificarToken(token);

            if (resp.success) {
                const userCookie = Cookies.get("user_data");
                if (userCookie) {
                    set({
                        user: JSON.parse(userCookie),
                        loading: false
                    });
                } else {
                    await get().logout();
                }
            } else {
                await get().logout();
            }
        } catch (error) {
            console.error("Error al verificar token", error);
            await get().logout();
        }
    }
}));
