//Types
import {CountryType} from "@/types/country_type";

//Countries
import CountriesMain from "@/components/CountriesMain/CountriesMain";

const getCountries = async () => {
    let countries = await fetch('https://restcountries.com/v3.1/all')
    return await countries?.json()
}

export default async function CountriesHome(){

    const countries:CountryType[] = await getCountries()

    return <CountriesMain countries={countries}/>

}