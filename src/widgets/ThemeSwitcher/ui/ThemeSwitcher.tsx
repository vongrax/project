import React, {FC} from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import classes from "./ThemeSwitcher.module.scss"
import {useTheme} from "shared/config/useTheme";
import LightIcon from "shared/assets/icons/theme-light.svg";
import DarkIcon from "shared/assets/icons/theme-dark.svg";
import {Theme} from "app/providers/ThemeProvider";
import {Button, ThemeButton} from "shared/ui/Button/Button";

export interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = (props) => {
    const {className} = props;
    const {theme, toggleTheme} = useTheme();


    return (
        <Button
            theme={ThemeButton.CLEAR}
            className={classNames(classes.themeSwitcher, [className])}
            onClick={toggleTheme}
        >
            {theme === Theme.DARK ? <DarkIcon/> : <LightIcon/>}
        </Button>
    );
};

