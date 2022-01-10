import React from 'react'
import { themeContext } from '../../context/themeContext'
import style from './countrieCard.module.css'

export const Countrie = ({ dataCountries }) => {
    const [visible, setVisible] = React.useState(false)
    const countryCard = React.useRef(null)
    const { switchTheme } = React.useContext(themeContext)

    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.1
    }
    const callback = (entries) => {
        const [ entry ] = entries
        if(entry.isIntersecting) {
            setVisible(true)
        }
    }

    React.useEffect(() => {
        const observer = new IntersectionObserver(callback, options)
        observer.observe(countryCard.current)

        return () => {if(countryCard.current) observer.unobserve(countryCard.current)}
    })

    return(
        <div ref={countryCard} className={`${style.cardWrapper} ${switchTheme ? style.darkTheme : style.whiteTheme}`}>
            {visible ? (
                <div>
                    <img src={dataCountries.flags.svg} alt="flag country" className={style.flagImage}/>
                    <div className={style.cardDetails}>
                        <h2 className={style.name}>{dataCountries.name}</h2>
                        <ul className={style.data}>
                            <li>Population: <span>{dataCountries.population}</span></li>
                            <li>Region: <span>{dataCountries.region}</span></li>
                            <li>Capital: <span>{dataCountries.capital}</span></li>
                        </ul>
                    </div>
                </div>
            ) : (<p>Loading...</p>)}
        </div>
    )
}