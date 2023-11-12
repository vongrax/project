import React from 'react';
import {useTheme} from "shared/config/useTheme";
import {classNames} from "shared/lib/classNames/classNames";
import "app/styles/index.scss"
import {AppRouter} from "app/providers/router";
import {Navbar} from "widgets/Navbar";


const App = () => {
    const {theme} = useTheme();

    return (
        <div className={classNames("app", [theme])}>
            <Navbar/>
            <AppRouter/>
        </div>
    );
};

export default App;
