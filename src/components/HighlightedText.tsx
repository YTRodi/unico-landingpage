import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  backgroundColor?: 'pink' | 'purple' | 'yellow';
}

const HighlightedText = ({ children, backgroundColor = 'pink' }: Props) => (
  <strong className={`highlight highlight__${backgroundColor}`}>
    {children}
  </strong>
);

export default HighlightedText;
