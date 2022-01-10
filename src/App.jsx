import React, { Fragment } from 'react'
import { Home } from './pages/Home.jsx'
import { Details } from './pages/Details.jsx'
import { Header } from './components/Header/index.jsx'
import { NotFound } from './pages/NotFound.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { SearchProvider } from './context/searchContext.js'
import { ThemeProvider } from './context/themeContext.js'
import './globals.css'

export const App = () => {
    return(
        <Fragment>
            <SearchProvider>
            <ThemeProvider>
                <Header/>
                <BrowserRouter>
                    <Routes>
                        <Route exact path="/" element={<Home/>}/>
                        <Route path="/detail/:countryId" element={<Details/>}/>
                        <Route element={<NotFound/>}/>
                    </Routes>
                </BrowserRouter>
            </ThemeProvider>
            </SearchProvider>
        </Fragment>
    )
}