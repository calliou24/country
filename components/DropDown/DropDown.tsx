'use client'

//Hooks
import {memo, useContext, useState} from "react";
import {ThemeContext} from "@/providers/ThemeProvider";

//Styles
import styles from './dropdown.module.css'

//Components
import {BiChevronUp} from "react-icons/bi";
import {AnimatePresence, domAnimation, LazyMotion, m} from 'framer-motion'

type DropDownType = {
    handleChange: (option: string) => void,
    label: string,
    prefix: string,
    options: string[]
}
export default memo(function DropDown({
    handleChange,
    options,
    label,
    prefix
}:DropDownType) {

    const [isOpen, setIsOpen] = useState(false)

    const {theme} = useContext(ThemeContext)
    const handleOpen = () => setIsOpen(!isOpen)

    return (
            <button
                className={`${theme === 'dark' && styles?.['dark_dropdown']} relative bg-white flex items-center gap-3 rounded-md shadow-md py-4 px-7`}
                onClick={handleOpen}
            >
                {prefix} {label}
                <BiChevronUp style={{fontSize: '1.6em'}}/>
                <AnimatePresence>
                {isOpen &&
                    <LazyMotion features={domAnimation}>
                        <m.div
                            initial={{
                                opacity:0
                            }}
                            animate={{
                                opacity:1
                            }}
                            exit={{
                                opacity: 0
                            }}
                            className={`bg-white p-1 w-full rounded-md shadow-md py-2 ${styles?.['option_menu']} ${theme === 'dark' && styles?.['option_menu_dark']} `}>
                            <ul className={'grid gap-3'}>
                                {options?.map(option => {
                                    return (
                                        <li key={option} onClick={() => handleChange(option)}>{option}</li>
                                    )
                                })}
                            </ul>
                        </m.div>
                    </LazyMotion>
                }
                </AnimatePresence>
            </button>
    )
})