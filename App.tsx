import React, {Suspense} from 'react';
import "./src/styles/index.scss"
import {Link, Route, Routes} from "react-router-dom";
import {MainPageAsync} from "./src/pages/MainPage/MainPage.async";
import {AboutPageAsync} from "./src/pages/AboutPage/AboutPage.async";
import {useTheme} from "./src/theme/useTheme";


const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={`app ${theme}`}>
            <button onClick={toggleTheme}>TOGGLE</button>
            <Link to={'/'}>Main page</Link>
            <Link to={'/about'}>About page</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/'} element={<MainPageAsync/>}/>
                    <Route path={'/about'} element={<AboutPageAsync/>}/>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;