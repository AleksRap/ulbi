import { useTranslation } from 'react-i18next';
import { BugButton } from 'shared/components';
import cls from './MainPage.module.scss';

const MainPage = () => {
  const { t } = useTranslation('main');

  return (
    <div className={cls.mainPage}>
      {t('Главная страница')}
      <BugButton className={cls.btn} />
    </div>
  );
};

export default MainPage;
