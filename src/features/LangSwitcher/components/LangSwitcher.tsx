import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ButtonVariant } from 'shared/ui';

interface LangSwitcherProps {
  short?: boolean;
  className?: string;
}

const LangSwitcherMemo: FC<LangSwitcherProps> = ({ short = true, className }) => {
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
      {short ? t('Короткий язык') : t('Язык')}
    </Button>
  );
};

export const LangSwitcher = memo(LangSwitcherMemo);
