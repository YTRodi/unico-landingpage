import cn from 'classnames';

import Link from './Link';

import { BackgroundColor } from '~/types';

export interface Props {
  title: string;
  body: string;
  iconSrc: string;
  backgroundColor?: BackgroundColor;
}

const ServiceCard = ({
  title,
  body,
  iconSrc,
  backgroundColor = 'purple',
}: Props) => (
  <div className="shadow-lg rounded-md bg-white p-8 max-w-[20.75rem]">
    <div
      className={cn([
        'w-[5.25rem]',
        'h-[5.25rem]',
        'rounded-md',
        'flex justify-center items-center',
        {
          purple: 'bg-gradient-to-b from-purple to-purple/75',
          pink: 'bg-gradient-to-b from-pink to-pink/75',
          yellow: 'bg-gradient-to-b from-yellow to-yellow/75',
        }[backgroundColor],
      ])}
    >
      <img alt="Service Card" src={iconSrc} />
    </div>
    <div className="py-8 flex gap-3 flex-col">
      <h5>{title}</h5>
      <p>{body}</p>
    </div>
    <Link>Explore</Link>
  </div>
);

export default ServiceCard;
