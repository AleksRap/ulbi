import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './MainPage.module.scss';
import { Input } from 'shared/ui';

const MainPage = () => {
  const { t } = useTranslation('main');
  const [value, setValue] = useState('');

  return (
    <div className={cls.mainPage}>
      {t('Главная страница')}
      <Input
        value={value}
        onChange={setValue}
      />
    </div>
  );
};

export default MainPage;
