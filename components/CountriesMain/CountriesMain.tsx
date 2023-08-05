'use client'
//Hooks
import {memo, useContext, useState} from "react";
import useSearchCountry from "@/hooks/useSearchCountry";

//Types
import {CountryType} from "@/types/country_type";

//Functions
import {size} from "@/functions/general-functions";

//Components
import {BiSearch} from "react-icons/bi";
import DropDown from "@/components/DropDown/DropDown";
import CountryCard from "@/components/CountryCard/CountryCard";

//Styles
import styles from './countries-main.module.css'
import {ThemeContext} from "@/providers/ThemeProvider";
import {CountryProtoType} from "@/prototypes/prototypes";


export default memo(function CountriesMain({countries} : {countries: CountryType[]}){
    const [showCountries, setShowCountries] = useState<CountryType[]>([CountryProtoType])
    const {theme} = useContext(ThemeContext)

    const {searchCountry, setSearchCountry, seachByRegion} = useSearchCountry({
        countries,
        showCountries,
        setShowCountries
    })


    return (
        <div className={`flex-col items-center justify-center`}>
            <div className={'grid gap-10 place-items-center'}>
                <div className={`flex items-center gap-1 mt-5 pt-4 pb-4 pl-3 rounded-md bg-white shadow-lg ${styles?.['input_container']} ${theme === 'dark' && styles?.['input_container_dark']}`} >
                    <BiSearch style={{ margin: 0, padding: 0}}/>
                    <input
                        className={'bg-transparent outline-0 w-full'}
                        placeholder='Search for a country'
                        onChange={e => setSearchCountry(e?.target?.value)}
                        value={searchCountry}
                    />
                </div>
                <DropDown
                    handleChange={seachByRegion}
                    prefix={'Filtered by '}
                    label={'Regions'}
                    options={
                        ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania', 'Reset']
                    }
                />
            </div>
            <ul className={`${styles?.['countries-menu']} mt-10 grid place-items-center gap-10 mb-20`}>
            {size(showCountries) > 0 ?  showCountries?.map(country => {
                return (
                    <li className={'w-fit cursor-pointer'} key={'country-' + country?.name?.common}>
                        <CountryCard {...country}/>
                    </li>
                )
            }) : 'Loading'}
            </ul>
        </div>
    )
})