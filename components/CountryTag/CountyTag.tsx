//Types

//Components
import CountryButton from "@/components/CountryTag/CountryButton";
import {CountryType} from "@/types/country_type";

async function getPosts(code:string) {
    const countries = await fetch('https://restcountries.com/v3.1/alpha/' + code )
    return await countries?.json()
}
export default async function CountryTag({code}: {code: string}){
    const [country]:CountryType[] = await getPosts(code)


    return (
        <CountryButton country={country}/>
    )
}
