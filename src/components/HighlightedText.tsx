import cn from 'classnames';
import { ReactNode } from 'react';

import { BackgroundColor } from '~/types';

interface Props {
  children: ReactNode;
  backgroundColor?: BackgroundColor;
}

const HighlightedText = ({ children, backgroundColor = 'pink' }: Props) => (
  <strong
    className={cn([
      'highlight',
      {
        pink: 'highlight__pink',
        purple: 'highlight__purple',
        yellow: 'highlight__yellow',
      }[backgroundColor],
    ])}
  >
    {children}
  </strong>
);

export default HighlightedText;
