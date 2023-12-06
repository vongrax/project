import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import classes from './PageError.module.scss';

export interface PageErrorProps {
    className?: string
}

export const PageError: FC<PageErrorProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation();

    const reloadPage = () => {
        window.location.reload();
    };

    return (
        <div className={classNames(classes.pageError, [className])}>
            <h1>{t('Произошла ошибка')}</h1>
            <Button onClick={reloadPage}>{t('Обновить страницу')}</Button>
        </div>
    );
};
