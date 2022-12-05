import cn from 'classnames';
import { ComponentPropsWithRef } from 'react';

interface Props extends ComponentPropsWithRef<'button'> {
  variant?: 'primary' | 'secondary';
}

const Button = ({ className, variant = 'primary', ...rest }: Props) => {
  const classNameFromProps = className ?? '';

  return (
    <button
      className={cn([
        classNameFromProps,
        'py-3',
        'px-7',
        'rounded-[10px]',
        'text-white',
        'font-bold',
        { 'bg-pink shadow-pink/50': variant === 'primary' },
        { 'bg-purple shadow-purple/50': variant === 'secondary' },
        'shadow-2xl',
      ])}
      {...rest}
    />
  );
};

export default Button;
