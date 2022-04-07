import React, { useContext, useEffect, useState } from 'react';

import './index.css';

import Header from './pages/header/Header.js';
import Main from './pages/main/Main.js';
import Footer from './pages/footer/Footer.js';

import { ThemesContext } from "./context/ThemesContext";


function App() {
    const themes = useContext(ThemesContext);
    const [selectedTheme, setSelectedTheme] = useState(themes[0]);
    const localStorageData = JSON.parse(localStorage.getItem("theme"));


    useEffect(() => {
        localStorageData && setSelectedTheme(localStorageData);
    }, [])
    useEffect(() => {
        localStorage.setItem("theme", JSON.stringify(selectedTheme));
    }, [selectedTheme])

    document.querySelector("body").classList = selectedTheme.title;


    return (
        <section>
            <Header />
            <Main />
            <Footer selectedTheme={selectedTheme} setSelectedTheme={setSelectedTheme} />
        </section>
    );
}
  
export default App;
