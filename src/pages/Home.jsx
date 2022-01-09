import React, { Fragment } from 'react'
import { Header } from '../components/Header/index.jsx'
import { Search } from '../components/Search/index.jsx'
import { FilterRegion } from '../components/FilterRegion/index.jsx'
import { AllCountries } from '../Container/AllCountries.jsx'

const Home = () => {
    return(
        <Fragment>
            <Search/>
            <FilterRegion/>
            <AllCountries/>
        </Fragment>
    )
}

export { Home }