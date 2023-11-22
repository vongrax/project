import React, {Suspense} from 'react';
import {useTheme} from "shared/config/useTheme";
import {classNames} from "shared/lib/classNames/classNames";
import "app/styles/index.scss"
import {AppRouter} from "app/providers/router";
import {Navbar} from "widgets/Navbar";
import {Sidebar} from "widgets/Sidebar";

const App = () => {
    const {theme} = useTheme();

    return (
        <div className={classNames("app", [theme])}>
            <Suspense fallback="loading">
                <Navbar/>
                <div className='content-page'>
                    <Sidebar/>
                    <AppRouter/>
                </div>
            </Suspense>
        </div>
    );
};

export default App;
