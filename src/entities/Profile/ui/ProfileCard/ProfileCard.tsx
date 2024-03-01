import { FC } from 'react';
import cn from 'classnames';
import cls from './ProfileCard.module.scss';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
// import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
// import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading';
import { Button, ButtonVariant, Input, Title } from 'shared/ui';

interface ProfileCardProps {
  className?: string;
}

export const ProfileCard: FC<ProfileCardProps> = ({ className }) => {
  const { t } = useTranslation('profile');

  const data = useSelector(getProfileData);
  // const error = useSelector(getProfileError);
  // const isLoading = useSelector(getProfileIsLoading);

  return (
    <div className={cn(cls.profileCard, className)}>
      <div className={cls.header}>
        <Title>{t('Профиль')}</Title>
        <Button variant={ButtonVariant.OUTLINE}>{t('Редактировать')}</Button>
      </div>

      <div className={cls.data}>
        <Input
          value={data?.firstname}
          placeholder={t('Ваше имя')}
        />
        <Input
          value={data?.lastname}
          placeholder={t('Ваша фамилия')}
        />
      </div>
    </div>
  );
};
