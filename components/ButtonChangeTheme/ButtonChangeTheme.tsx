'use client'

import {useContext, memo} from "react";
import styles from './button.module.css'

//Provider
//Icons
import {BsMoon, BsMoonFill} from "react-icons/bs";

//Components
import {ThemeContext} from "@/providers/ThemeProvider";

export default memo(function ButtonChangeTheme(){

    const {theme, setTheme} = useContext(ThemeContext)
    const {button_st} = styles
    const toggleTheme = () => {

        if(theme == 'light') setTheme('dark')
        else setTheme('light')
    }
    return (
        <button className={`capitalize flex gap-1 items-center ${button_st}`} onClick={toggleTheme}>
            {theme === 'dark' ? <BsMoon /> : <BsMoonFill/>}
            {theme} Mode
        </button>
    )
})