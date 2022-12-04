import { ComponentPropsWithRef } from 'react';

const Button = ({ className, ...rest }: ComponentPropsWithRef<'button'>) => {
  const classNameFromProps = className ?? '';

  return (
    <button
      className={`py-3 px-7 rounded-[10px] text-white font-bold bg-pink shadow-2xl shadow-pink/50 ${classNameFromProps}`}
      {...rest}
    />
  );
};

export default Button;
