import { ComponentPropsWithRef } from 'react';

export interface Props extends ComponentPropsWithRef<'img'> {
  src: string;
  alt: string;
}

const Social = ({ className, ...rest }: Props) => {
  const classNameFromProps = className ?? '';

  return (
    <img
      className={`rounded-full p-3 bg-purple-light/10 ${classNameFromProps}`}
      {...rest}
    />
  );
};

export default Social;
