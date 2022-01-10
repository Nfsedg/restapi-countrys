import React, { useState } from 'react'

const themeContext = React.createContext();

const ThemeProvider = (props) => {
    const [switchTheme, setSwitchTheme] = useState(false)

    return(
        <themeContext.Provider value={{
            setSwitchTheme,
            switchTheme
        }}>
            {props.children}
        </themeContext.Provider>
    )
}

export { themeContext, ThemeProvider }