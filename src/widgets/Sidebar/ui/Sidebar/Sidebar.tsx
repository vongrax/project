import React, {FC, useState} from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import classes from "./Sidebar.module.scss"
import {ThemeSwitcher} from "widgets/ThemeSwitcher";

export interface SidebarProps {
    className?: string
}

export const Sidebar: FC<SidebarProps> = (props) => {
    const {className} = props;

    const [collapsed, setCollapsed] = useState(false)
    const onToggle = () => {
        setCollapsed((prev) => !prev)
    }

    return (
        <div className={classNames(classes.sidebar, [className], {[classes.collapsed]: collapsed})}>
            <button onClick={onToggle}>toggle</button>
            <div className={classes.switchers}>
                <ThemeSwitcher/>
            </div>
        </div>
    );
};

