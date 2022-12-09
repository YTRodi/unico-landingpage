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
        'py-3',
        'px-7',
        'rounded-[10px]',
        'text-white',
        'font-bold',
        {
          primary: 'bg-pink shadow-pink/50',
          secondary: 'bg-purple shadow-purple/50',
        }[variant],
        'shadow-2xl',
        classNameFromProps,
      ])}
      {...rest}
    />
  );
};

export default Button;
