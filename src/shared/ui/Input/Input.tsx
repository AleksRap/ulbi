import { ChangeEvent, FC, InputHTMLAttributes, memo } from 'react';
import cn from 'classnames';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
}

export const InputMemo: FC<InputProps> = ({
  className,
  type = 'text',
  value,
  onChange,
  ...otherProps
}) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.currentTarget.value);
  };

  return (
    <input
      {...otherProps}
      className={cn(cls.input, className)}
      value={value}
      type={type}
      onChange={handleChange}
    />
  );
};

export const Input = memo(InputMemo);
