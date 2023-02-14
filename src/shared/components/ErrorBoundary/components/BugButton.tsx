import { FC, useEffect } from 'react';
import { Button } from 'shared/ui';
import { useBoolean } from 'shared/hooks';
import { useTranslation } from 'react-i18next';

interface BugButtonProps {
  className?: string;
}

// компонент для тестирования работоспособноть ErrorBoundary
export const BugButton: FC<BugButtonProps> = ({ className }) => {
  const { t } = useTranslation();

  const { isBoolean: isError, setTrue: setError } = useBoolean();

  useEffect(() => {
    if (isError) throw new Error();
  }, [isError]);

  return (
    <Button
      onClick={setError}
      className={className}
    >
      {t('Выбросить ошибку')}
    </Button>
  );
};
