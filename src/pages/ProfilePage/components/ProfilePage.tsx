import { FC } from 'react';
import cn from 'classnames';
import cls from './ProfilePage.module.scss';
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, ReducerList } from 'shared/lib';
import { profileReducer } from 'entities/Profile';

const initialReducers: ReducerList = {
  profile: profileReducer,
};

interface ProfilePageProps {
  className?: string;
}

const ProfilePage: FC<ProfilePageProps> = ({ className }) => {
  const { t } = useTranslation('profile');

  return (
    <DynamicModuleLoader reducers={initialReducers}>
      <div className={cn(cls.profilePage, className)}>{t('Профиль')}</div>
    </DynamicModuleLoader>
  );
};

export default ProfilePage;
