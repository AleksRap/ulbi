import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ButtonVariant } from 'shared/ui';

interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher: FC<LangSwitcherProps> = ({ className }) => {
  const { t, i18n } = useTranslation();

  const handleChangeLanguage = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <Button
      variant={ButtonVariant.CLEAR}
      className={className}
      onClick={handleChangeLanguage}
    >
      {t('Язык')}
    </Button>
  );
};
