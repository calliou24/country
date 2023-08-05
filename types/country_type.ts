export type CountryType = {
    name: {
        common: string,
        nativeName: {
            [key: string] : {
                official: string
            }
        },
    },
    population: number,
    region: string,
    subregion: string,
    capital: string[],
    flags: {
        svg: string
    }
    tld: string[],
    currencies: {
        [key: string] : {
            name: string
        }
    },
    languages: {
        [key: string]: string
    },
    borders: string[],
    cca2: string
}