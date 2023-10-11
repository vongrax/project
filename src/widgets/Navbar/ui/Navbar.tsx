import React, {FC} from 'react';
import {Link} from "react-router-dom";
import {classNames} from "shared/lib/classNames/classNames";
import classes from "./Navbar.module.scss"

export interface NavbarProps {
    className?:string
}
export const Navbar:FC<NavbarProps> = ({className}) => {
    return (
        <div className={classNames(classes.Navbar, {},[className])}>
            <Link to={'/'}>Main page</Link>
            <Link to={'/about'}>About page</Link>
        </div>
    );
};

