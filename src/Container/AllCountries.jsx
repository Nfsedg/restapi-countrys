import React, { useEffect } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { Countrie } from '../components/Countrie/index.jsx'
import { searchContext } from '../context/searchContext.js'
import style from './allCountries.module.css'

export const AllCountries = () => {
    const { setCountries, filterCountry } = React.useContext(searchContext)

    useEffect(() => {
        const controller = new AbortController()
        const signal = controller.signal;

        fetch("https://restcountries.com/v2/all", {
            signal: signal
        })
            .then(res => res.json())
            .then(info => setCountries(info))
            .catch(err => {
                if(err.name === 'AbortError') {
                    console.log('Successfully aborted');
                } else {
                    console.warn(err)
                }
                })
        return () => {
            controller.abort();
        }
    }, [])

    return(
        <div className={style.bodyGrid}>
            {filterCountry.length === 0 
                ? <p>Loading...</p> 
                : (filterCountry.map(data => (
                    <Link to={`/detail/${data.alpha3Code}`} key={data.numericCode}>
                        <Countrie  dataCountries={data}/>
                    </Link>
            )))}
            <Outlet/>
        </div>
        
    )
}