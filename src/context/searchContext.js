import React, { useState } from 'react'

const searchContext = React.createContext();

function SearchProvider(props) {
    const [dataSearch, setDataSearch] = React.useState('')
    const [countries, setCountries] = useState([])
    const [filterCountry, setFilterCountry] = useState([])

    React.useEffect(() => {
        if(filterCountry.length === 0) {
            setFilterCountry(countries)
        }
    }, [countries])

    const filterByRegion = (input) => {
        const results = countries.filter((data) => {
            if(data.region.toLowerCase().includes(input)){
                return data
            }
        })
        return setFilterCountry(results)
    };

    const findCoutry = (input) => {
        
        const results = countries.filter((data) => {
            if(data.name.toLowerCase().includes(input)){
                return data
            }
        })
        return setFilterCountry(results)
    }

    return(
        <searchContext.Provider value={{
            dataSearch, 
            setDataSearch,
            countries,
            setCountries,
            findCoutry,
            filterCountry,
            setFilterCountry,
            filterByRegion
        }}>
            {props.children}
        </searchContext.Provider>
    )
}

export { SearchProvider, searchContext }