import React, { FC, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { useTranslation } from 'react-i18next';
import classes from './Sidebar.module.scss';

export interface SidebarProps {
    className?: string
}

export const Sidebar: FC<SidebarProps> = (props) => {
    const { className } = props;

    const [collapsed, setCollapsed] = useState(false);
    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    const { t } = useTranslation();

    return (
        <div
            data-testid="sidebar"
            className={
                classNames(
                    classes.sidebar,
                    [className],
                    { [classes.collapsed]: collapsed },
                )
            }
        >
            <button
                type="button"
                data-testid="sidebar-toggle"
                onClick={onToggle}
            >
                {t('Переключить')}
            </button>
            <div className={classes.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={classes.lang} />
            </div>
        </div>
    );
};
