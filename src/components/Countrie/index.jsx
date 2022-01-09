import React from 'react'
import './stlyes.css'

const stylesData = {
    height: '450px'
}

export const Countrie = ({ dataCountries }) => {
    const [visible, setVisible] = React.useState(false)
    const countryCard = React.useRef(null)

    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.8
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
        <div ref={countryCard} style={stylesData}>
            {visible ? (
                <div>
                    <img src={dataCountries.flags.svg} alt="flag country" />
                    <div>
                        <h2>{dataCountries.name}</h2>
                        <ul>
                            <li>{dataCountries.population}</li>
                            <li>{dataCountries.region}</li>
                            <li>{dataCountries.capital}</li>
                        </ul>
                    </div>
                </div>
            ) : (<p>Loading...</p>)}
        </div>
    )
}