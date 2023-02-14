import { FC } from 'react';
import { classNames } from 'shared/lib';
import cls from './PageError.module.scss';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui';

interface PageErrorProps {
  className?: string;
}

export const PageError: FC<PageErrorProps> = ({ className }) => {
  const { t } = useTranslation();

  const reloadPage = () => window.location.reload();

  return (
    <div className={classNames(cls.pageError, {}, [className])}>
      <p>{t('Произошла непредвиденная ошибка')}</p>
      <Button onClick={reloadPage}>{t('Обновить страницу')}</Button>
    </div>
  );
};
