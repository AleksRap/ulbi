import { FC } from 'react';
import { useSelector } from 'react-redux';
import { Button } from 'shared/ui';
import { counterActions } from '../model/slice/counterSlice';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from 'shared/hooks';

export const Counter: FC = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const counterValue = useSelector(getCounterValue);
  const increment = () => {
    dispatch(counterActions.increment());
  };
  const decrement = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <div>
      <h1 data-testid='value-title'>{counterValue}</h1>
      <Button
        onClick={increment}
        data-testid='increment-btn'
      >
        {t('Инкремент')}
      </Button>
      <Button
        onClick={decrement}
        data-testid='decrement-btn'
      >
        {t('Декремент')}
      </Button>
    </div>
  );
};
