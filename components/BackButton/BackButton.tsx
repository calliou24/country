
'use client'

import {useContext} from "react";
import {ThemeContext} from "@/providers/ThemeProvider";

//Styles
import styles from "./button.module.css";
import {BsArrowLeft} from "react-icons/bs";
import Link from "next/link";
export default function BackButton() {

    const { theme } = useContext(ThemeContext)

    return (
        <Link href={'/countries'}  className={`${theme === 'dark' && styles?.['dark_button']} relative bg-white flex items-center gap-3 rounded-md shadow-md py-2 px-7 w-fit`}>
            <BsArrowLeft/>   Back
        </Link>
    )
}