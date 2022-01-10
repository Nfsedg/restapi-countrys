import React, { useContext } from 'react'
import style from './header.module.css'
import { BsMoon } from 'react-icons/bs'
import { themeContext } from '../../context/themeContext'

export const Header = () => {
    const { switchTheme, setSwitchTheme } = useContext(themeContext)

    return(
        <div className={`${style.header} ${switchTheme && style.darkActive}`}>
            <h1 className={style.title}>Where in the world?</h1>
            <div className={style.switch} onClick={() => setSwitchTheme(!switchTheme)}>
                <BsMoon className={style.icon}/>
                <span>Dark Mode</span>
            </div>
        </div>
    )
}