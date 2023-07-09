import { FC, MouseEvent, PropsWithChildren, useCallback, useEffect, useRef, useState } from 'react';
import cn from 'classnames';
import cls from './Modal.module.scss';
import { ANIMATION_DELAY } from '../../constants';
import { Portal } from '../Portal';

interface ModalProps {
  isOpen?: boolean;
  onClose?: () => void;
  className?: string;
}

export const Modal: FC<PropsWithChildren<ModalProps>> = ({
  isOpen,
  onClose = () => undefined,
  className,
  children,
}) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef(null);

  const [isStartCosing, setIsStartClosing] = useState(false);

  const handleCloseModal = useCallback(() => {
    setIsStartClosing(true);

    timeoutRef.current = setTimeout(() => {
      onClose();
      setIsStartClosing(false);
    }, ANIMATION_DELAY);
  }, [onClose]);

  const handleClickOverlay = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === contentRef.current) return;
    handleCloseModal();
  };

  const handleEsc = useCallback(
    (e: KeyboardEvent) => {
      if (e.code !== 'Escape') return;
      handleCloseModal();
    },
    [handleCloseModal],
  );

  useEffect(() => {
    if (isOpen) window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
      clearTimeout(timeoutRef.current);
    };
  }, [handleEsc, isOpen]);

  return (
    <Portal>
      <div className={cn(cls.modal, isOpen && cls.isOpen, className)}>
        <div
          className={cls.overlay}
          onClick={handleClickOverlay}
        >
          <div
            ref={contentRef}
            className={cn(cls.content, isOpen && cls.isOpen, isStartCosing && cls.isStartCosing)}
          >
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};
