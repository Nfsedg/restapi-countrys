import React from 'react'
import { searchContext } from '../../context/searchContext.js'
import { BsSearch } from 'react-icons/bs'
import { themeContext } from '../../context/themeContext.js'
import style from './search.module.css'

export const Search = () => {
    const { dataSearch, setDataSearch, findCoutry } = React.useContext(searchContext)
    const { switchTheme } = React.useContext(themeContext)

    const handleSearch = (data) => {
        findCoutry(data)
        setDataSearch(data)
    }

    return(
        <div className={`${style.searchWrapper} ${switchTheme ? style.darkTheme : style.whiteTheme}`}>
            <BsSearch className={style.icon}/>
            <input 
                type="text" 
                value={dataSearch} 
                placeholder='Search for a country...'
                onChange={(e) => handleSearch(e.target.value)} 
                className={style.search}
            />
        </div>
    )
}