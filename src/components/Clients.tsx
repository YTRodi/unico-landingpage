import ClientCard from './ClientCard';
import HighlightedText from './HighlightedText';
import Paginator from './Paginator';

import { CLIENTS, COMPANIES_LOGOS } from '~/constants';

const Clients = () => (
  <div className="h-screen flex gap-16 flex-col justify-end items-center">
    <div className="flex gap-6 flex-col justify-center items-center">
      <Header />
      <ClientCards />
    </div>
    <Paginator />
    <Companies />
  </div>
);

const Header = () => (
  <div className="max-w-[31.25rem] flex gap-4 flex-col  items-center">
    <h6 className="tag text-yellow">They trusted us</h6>
    <h2>
      Out Clients <HighlightedText>Says</HighlightedText>
    </h2>
    <p className="text-center">
      We have been working with clients around the world
    </p>
  </div>
);

const ClientCards = () => (
  <div className="flex gap-12 justify-center items-center">
    {CLIENTS.map((client, index) => {
      const src = `/avatars/client-${index}.svg`;
      const props = { clientImgSrc: src, ...client };

      return <ClientCard key={index} {...props} />;
    })}
  </div>
);

const Companies = () => (
  <div className="w-full flex justify-between items-center py-6">
    {COMPANIES_LOGOS.map((company, index) => (
      <img key={index} alt={company} src={`/clients/${company}.svg`} />
    ))}
  </div>
);

export default Clients;
