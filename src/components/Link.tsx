import cn from 'classnames';
import { ComponentPropsWithRef } from 'react';

import Arrow from './Arrow';

const Link = ({ children, className, ...rest }: ComponentPropsWithRef<'a'>) => {
  const classNameFromProps = className ?? '';

  return (
    <a
      className={cn([
        classNameFromProps,
        'flex',
        'gap-2.5',
        'items-center',
        'text-purple',
      ])}
      {...rest}
    >
      {children} <Arrow />
    </a>
  );
};

export default Link;
