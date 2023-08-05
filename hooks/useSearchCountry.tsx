import {useEffect, useState} from "react";
import {size} from "@/functions/general-functions";
import {CountryType} from "@/types/country_type";
import {isArray} from "util";

type useSearchCountryType = {
    countries: CountryType[],
    showCountries: CountryType[],
    setShowCountries: (newState: CountryType[]) => void
}
export default function useSearchCountry({countries, showCountries, setShowCountries}: useSearchCountryType) {
    const [searchCountry, setSearchCountry] = useState<string>('')

    useEffect(() => {
        if(size(searchCountry) > 0 && Array.isArray(countries)){
            const newCountries =
                countries?.filter(country =>
                    country?.name?.common?.toLowerCase()?.includes(searchCountry?.toLowerCase())
                )

            setShowCountries(newCountries)

        } else if(JSON.stringify(countries) !== JSON.stringify(showCountries) && Array.isArray(countries))
            setShowCountries(countries)
    }, [searchCountry]);


    const seachByRegion = (region: string) =>{
        if(region === 'Reset') return setShowCountries(countries)
        if(size(region) > 0){
            const newCountriesByRegion = countries?.filter(countrie => countrie?.region === region)
            setShowCountries(newCountriesByRegion)
        }
    }

    return {searchCountry, setSearchCountry, seachByRegion}
}