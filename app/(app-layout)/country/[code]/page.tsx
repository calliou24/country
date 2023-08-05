//Components
import BackButton from "@/components/BackButton/BackButton";
import FlexLabel from "@/components/FlexLabel/FlexLabel";

//Styles
import styles from './country.module.css'
import {Fragment} from "react";
import {isEmpty, size} from "@/functions/general-functions";
import CountryTag from "@/components/CountryTag/CountyTag";
import {CountryType} from "@/types/country_type";
import {CountryProtoType} from "@/prototypes/prototypes";
import Component404 from "@/components/404/404";

async function getPosts(code:string) {
    const countries = await fetch('https://restcountries.com/v3.1/alpha/' + code )
    const finalJSONCountries = await countries?.json()

    if(Array.isArray(finalJSONCountries)) return finalJSONCountries
    return [CountryProtoType]
}

export default async function Country({params}: { params : {code: string}}) {

    const {code} = params
    const [country]:CountryType[] = await getPosts(code)

    const {
        flags,
        name:countryName,
        population,
        region,
        subregion,
        capital,
        tld,
        currencies,
        languages,
        borders
    } = country


    if(isEmpty(flags?.svg)) return <Component404/>

    return (
        <div className={`${styles?.['country_info_cont']}  min-h-screen`}>
            <BackButton />
            <div className={` mt-10 `}>
                <img src={flags?.svg} alt={'flag' + countryName?.common}/>
                <p className={'text-3xl font-bold mt-9'}>{countryName?.common}</p>
                <div className={'mt-5 grid gap-sm'}>
                    <FlexLabel label={'Native Name'} info={typeof countryName?.nativeName === 'object' ? Object?.values(countryName?.nativeName)?.[0]?.official : ''} />
                    <FlexLabel label={'Population'} info={population} />
                    <FlexLabel label={'Region'} info={region} />
                    <FlexLabel label={'Sub Region'} info={subregion} />
                    <FlexLabel label={'Capital'} info={capital.join(', ')} />
                </div>
                <div className={'mt-5 grid gap-sm'}>
                    <FlexLabel label={'Top Level Domain'} info={tld?.join(', ')} />
                    <FlexLabel label={'Currencies'} info={typeof currencies === 'object' ? Object?.values(currencies)?.[0]?.name : ''}/>
                    <FlexLabel label={'Languages'}  info={typeof languages === 'object' ? Object?.values(languages)?.join(', ') : ''} />
                </div>
                {size(borders) > 0 && (
                    <>
                        <p className={'text-3xl font-bold mt-9'}>Border Countries</p>
                        <div className={'grid grid-cols-3 gap-2 mt-5'}>
                            {borders?.map((code: string) => (
                                <Fragment key={code}>
                                    <CountryTag code={code}/>
                                </Fragment>
                            ))}
                        </div>
                    </>

                )}
            </div>
        </div>
    )
}
