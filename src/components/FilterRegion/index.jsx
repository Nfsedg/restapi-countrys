import React, { Fragment } from 'react'
import { searchContext } from '../../context/searchContext'
import { themeContext } from '../../context/themeContext'
import style from './regionSearch.module.css'

export const FilterRegion = () => {
    const { filterByRegion } = React.useContext(searchContext)
    const { switchTheme } = React.useContext(themeContext)


    return(
        <Fragment>
            <form>
                <input className={`${style.optionWrapper} ${switchTheme ? style.darkTheme: style.whiteTheme}`} placeholder='Filter by Region' list='regions' value={''} onChange={(e) => filterByRegion(e.target.value.toLowerCase())}/>
                <datalist id='regions'>
                    <option value="Africa"></option>
                    <option value="America"></option>
                    <option value="Asia"></option>
                    <option value="Europe"></option>
                    <option value="Oceania"></option>
                </datalist>
            </form>
        </Fragment>
    )
}