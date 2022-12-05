import cn from 'classnames';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  backgroundColor?: 'pink' | 'purple' | 'yellow';
}

const HighlightedText = ({ children, backgroundColor = 'pink' }: Props) => (
  <strong
    className={cn([
      'highlight',
      {
        highlight__pink: backgroundColor === 'pink',
        highlight__purple: backgroundColor === 'purple',
        highlight__yellow: backgroundColor === 'yellow',
      },
    ])}
  >
    {children}
  </strong>
);

export default HighlightedText;
