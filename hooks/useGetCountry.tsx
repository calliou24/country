import {useEffect, useState} from "react";
import {CountryType} from "@/types/country_type";
import {CountryProtoType} from "@/prototypes/prototypes";

export const useGetCountry = ({code}: {code: string}) => {
    const [country, setCountry] = useState<CountryType>(CountryProtoType)
    const [loading, setLoading] = useState(true)
    const getCountries = async () => {
        const countries = await fetch('https://restcountries.com/v3.1/alpha/' + code )
        const finalCountries = await countries?.json()

        if(Array.isArray(finalCountries)) setCountry(finalCountries?.[0])

        setLoading(false)
    }

    useEffect(() => {
        getCountries()
    }, [code])

    return {country, loading}
}