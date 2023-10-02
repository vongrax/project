import React, {Suspense} from 'react';
import "./index.scss"
import {Link, Route, Routes} from "react-router-dom";
import {MainPageAsync} from "./src/pages/MainPage/MainPage.async";
import {AboutPageAsync} from "./src/pages/AboutPage/AboutPage.async";

const App = () => {
    return (
        <div className="app">
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