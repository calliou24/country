
'use client'

import {useContext} from "react";
import {ThemeContext} from "@/providers/ThemeProvider";

//Styles
import styles from './layout.module.css'

export default function MainWrapper ({children} : {children: React.ReactNode}) {

    const {theme} = useContext(ThemeContext)

    return (
        <main className={`${theme === 'light' ? styles?.['main_light'] : styles?.['main_dark']} ${styles?.['main_container']} `}>{children}</main>
    )
}