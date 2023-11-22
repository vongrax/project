import React, {FC} from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import classes from "./LangSwitcher.module.scss"
import {Button, ThemeButton} from "shared/ui/Button/Button";
import {useTranslation} from "react-i18next";

export interface ThemeSwitcherProps {
    className?: string
}

export const LangSwitcher: FC<ThemeSwitcherProps> = (props) => {
    const {className} = props;
    const {t, i18n} = useTranslation();

    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    }


    return (
        <Button
            theme={ThemeButton.CLEAR}
            className={classNames(classes.langSwitcher, [className])}
            onClick={toggle}
        >
            {t('Язык')}
        </Button>
    );
};

