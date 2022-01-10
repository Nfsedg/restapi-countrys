import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { themeContext } from '../context/themeContext'
import { BiArrowBack } from 'react-icons/bi'
import style from './details.module.css'

export const Details = () => {
    const { switchTheme } = React.useContext(themeContext)
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
            <div className={`${style.body} ${switchTheme ? style.darkTheme : style.whiteTheme}`}>
                <div className={style.wrapper}>
                    <Link to='/' className={style.blackButton}><BiArrowBack className={style.icon}/>Back</Link>
                    <div className={style.dataWrapper}>
                        <img src={countryDetail[0].flags.svg} className={style.flagImage} alt={`${countryDetail[0].name.common} flag`} />
                        <div>
                            <h2 className={style.name}>{countryDetail[0].name.common}</h2>
                            <p>Native Name: <span>{countryDetail[0].name.official}</span></p>
                            <p>Population: <span>{countryDetail[0].population}</span></p>
                            <p>Region: <span>{countryDetail[0].region}</span></p>
                            <p>Sub Region: <span>{countryDetail[0].subregion}</span></p>
                            <p>Capital: <span>{countryDetail[0].capital}</span></p>
                        </div>
                        <div>
                            <p>Top Level: <span>{countryDetail[0].tld}</span></p>
                            <p>Currencies: <span>{dataIteration(countryDetail[0].currencies, 'currency')}</span></p>
                            <p>Languages: <span>{dataIteration(countryDetail[0].languages, 'languages')}</span></p>
                        </div>
                    </div>
                    <div>
                        <div className={style.borderData}>
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
                </div>
            </div>
        )
    } else {
        return(
            <p>Loading...</p>
        )
    }
}