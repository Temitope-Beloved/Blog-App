import { create } from "zustand";

const useThemeStore = create((set) => ({
    theme: localStorage.getItem('theme') || 'light',
    toogleTheme: () => 
        set((state) =>{
            const newTheme = state.theme === 'light' ? 'dark' : 'light';
            localStorage.setItem('theme', newTheme);
            return {theme: newTheme}

        })
}))

export default useThemeStore