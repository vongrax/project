import React from 'react';
import {useTheme} from "shared/config/useTheme";
import {classNames} from "shared/lib/classNames/classNames";
import "app/styles/index.scss"
import {AppRouter} from "app/providers/router";
import {Navbar} from "widgets/Navbar";


const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames("app", {}, [theme])}>
            <Navbar/>
            <AppRouter/>
            <button onClick={toggleTheme}>TOGGLE</button>
        </div>
    );
};

export default App;
