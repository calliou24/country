
'use client'

import styles from './nav.module.css'
import ButtonChangeTheme from "@/components/ButtonChangeTheme/ButtonChangeTheme";
import {memo, useContext} from "react";
import {ThemeContext} from "@/providers/ThemeProvider";

export default memo(function Navigation(){
    const {
        nav_cont,
        nav_cont_dark
    } = styles

    const {theme} = useContext(ThemeContext)
    return (
        <nav className={`${nav_cont} ${theme == 'dark' && nav_cont_dark} shadow-lg p-5 flex items-center content-between`}>
            <h1 className={'font-bold text-lg'}>Where in the world?</h1>
            <ButtonChangeTheme/>
        </nav>
    )
})