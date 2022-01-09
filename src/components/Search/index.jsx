import React from 'react'
import { searchContext } from '../../context/searchContext.js'

export const Search = () => {
    const { dataSearch, setDataSearch, findCoutry } = React.useContext(searchContext)

    const handleSearch = (data) => {
        findCoutry(data)
        setDataSearch(data)
    }

    return(
        <div>
            <span>S</span>
            <input 
                type="text" 
                value={dataSearch} 
                placeholder='Search for a country...'
                onChange={(e) => handleSearch(e.target.value)} 
            />
        </div>
    )
}