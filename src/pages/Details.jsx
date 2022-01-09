import React from 'react'
import { Link, useParams, Outlet } from 'react-router-dom'

export const Details = () => {
    let params = useParams();
    const [countryDetail, setCoutryDetail] = React.useState([])
    const [updateData, setUpdateData] = React.useState('')

    React.useEffect(() => {
        const controller = new AbortController()
        const signal = controller.signal;

        fetch(`https://restcountries.com/v3.1/alpha/${params.countryId.toLowerCase()}`, {
            signal: signal
        })
            .then(res => res.json())
            .then(info => setCoutryDetail(info))
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
    }, [updateData])

    function dataIteration(data, option) {
        let datasInput = Object.entries(data)
        if(option === 'currency') {
            return datasInput[0].map(i => (<span key={i}>{i.name}</span>))
        } else if(option === 'languages') {
            return datasInput.map(i => (<span key={i}>{i[1]}, </span>))
        }
    }

    if(countryDetail.length !== 0) {
        return(
            <div>
                <Link to='/'>icon Back</Link>
                <div>
                    <img src={countryDetail[0].flags.svg} alt={`${countryDetail[0].name.common} flag`} />
                    <div>
                        <h2>{countryDetail[0].name.common}</h2>
                        <p>Native Name: {countryDetail[0].name.official}</p>
                        <p>Population: {countryDetail[0].population}</p>
                        <p>Region: {countryDetail[0].region}</p>
                        <p>Sub Region: {countryDetail[0].subregion}</p>
                        <p>Capital: {countryDetail[0].capital}</p>
                    </div>
                    <div>
                        <p>Top Level: {countryDetail[0].tld}</p>
                        <p>Currencies: {dataIteration(countryDetail[0].currencies, 'currency')}</p>
                        <p>Languages: {dataIteration(countryDetail[0].languages, 'languages')}</p>
                    </div>
                </div>
                <div>
                    <div>
                        <h3>Border Countries:</h3>
                        {
                            countryDetail[0].borders 
                                ? countryDetail[0].borders.map(i => (
                                    <button key={i} onClick={() => setUpdateData(i)}>
                                        <Link to={`/detail/${i}`}>{i}</Link>
                                    </button>
                                )) 
                                : <p>Not Information</p>
                        }
                    </div>
                </div>
                <Outlet/>
            </div>
        )
    } else {
        return(
            <p>Loading...</p>
        )
    }
}