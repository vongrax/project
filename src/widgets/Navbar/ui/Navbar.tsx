import React, {FC} from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import classes from "./Navbar.module.scss"
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";

export interface NavbarProps {
    className?: string
}

export const Navbar: FC<NavbarProps> = (props) => {
    const {className} = props

    return (
        <div className={classNames(classes.navbar, [className])}>
            <div className={classes.links}>
                <AppLink theme={AppLinkTheme.SECONDARY} className={classes.mainLink} to={'/'}>Main page</AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to={'/about'}>About page</AppLink>
            </div>
        </div>
    );
};

