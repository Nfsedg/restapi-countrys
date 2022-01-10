import React, { useContext } from 'react'
import { Search } from '../components/Search/index.jsx'
import { FilterRegion } from '../components/FilterRegion/index.jsx'
import { AllCountries } from '../Container/AllCountries.jsx'
import { themeContext } from '../context/themeContext.js'
import style from './pages.module.css'

const Home = () => {
    const { switchTheme } = useContext(themeContext)

    return(
        <div className={switchTheme ? style.darkTheme : style.whiteTheme}>
            <div className={style.searchOptions}>
                <Search/>
                <FilterRegion/>
            </div>
            <AllCountries className={style.bodyGrid}/>
        </div>
    )
}

export { Home }