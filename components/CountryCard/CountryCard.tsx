

//Hooks
import {memo, useContext} from "react";
import {ThemeContext} from "@/providers/ThemeProvider";
import {useRouter} from 'next/navigation'
//Types
import {CountryType} from "@/types/country_type";

//Styles
import styles from './card.module.css'

//Components
import Link from "next/link";
import FlexLabel from "@/components/FlexLabel/FlexLabel";

export default memo(function CountryCard(
    {
        name,
        flags,
        population,
        region,
        capital,
        cca2
    }: CountryType
) {
    const router = useRouter()
    const {theme} = useContext(ThemeContext)

    return (
        <button onClick={() => {
            router.replace('/country/' + cca2)
        }} className={`shadow-lg bg-white rounded-md ${styles?.card} ${theme === 'dark' && styles?.['dark_card']} overflow-hidden`}>
            <img loading='lazy' alt={'country-' + name?.common} src={flags?.svg} className={'h-2/4 w-full object-cover'}/>
            <div className={'p-5'}>
                <p className={'text-2xl font-bold mt-4 mb-4'}>{name?.common}</p>
                <FlexLabel label={'Population'} info={population}/>
                <FlexLabel label={'Region'} info={region}/>
                <FlexLabel label={'Capital'} info={capital}/>
            </div>
        </button>
    )
})