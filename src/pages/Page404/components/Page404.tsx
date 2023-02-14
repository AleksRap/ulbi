import { FC } from 'react';
import { classNames } from 'shared/lib';
import cls from './Page404.module.scss';
import { useTranslation } from 'react-i18next';

interface Page404Props {
  className?: string;
}

export const Page404: FC<Page404Props> = ({ className }) => {
  const { t } = useTranslation();

  return <div className={classNames(cls.page404, {}, [className])}>{t('Страница не найдена')}</div>;
};
