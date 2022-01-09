import React, { Fragment } from 'react'
import { searchContext } from '../../context/searchContext'

export const FilterRegion = () => {
    const { filterByRegion } = React.useContext(searchContext)

    return(
        <Fragment>
            <form>
                <input placeholder='Filter by Region' list='regions' value={''} onChange={(e) => filterByRegion(e.target.value.toLowerCase())}/>
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