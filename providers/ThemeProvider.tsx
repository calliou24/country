'use client'
import {createContext, memo, useState} from 'react'
export type ThemeContextType = {
    theme: string;
    setTheme: (theme: string) => void;
};
export const ThemeContext = createContext<ThemeContextType>({
    theme: 'light',
    setTheme: () => {}
})

export default memo(function ThemeProvider({ children }: {children: React.ReactNode}) {
    const [theme, setTheme] = useState("light");
    return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>
})