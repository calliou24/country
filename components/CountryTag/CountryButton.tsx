'use client'
import styles from "@/components/CountryTag/button.module.css";
import {useContext} from "react";
import {ThemeContext} from "@/providers/ThemeProvider";
import {CountryType} from "@/types/country_type";

export default function CountryButton ({country}: { country: CountryType}) {

    const {theme} = useContext(ThemeContext)
    return (
        <button className={`${theme === 'dark' && styles?.['dark_button']} relative bg-white gap-3 rounded-sm shadow-lg py-2 flex-wrap text-center text-sm`} >
            {country?.name?.common}
        </button>
    )
}