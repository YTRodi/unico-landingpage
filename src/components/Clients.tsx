import ClientCard from './ClientCard';
import HighlightedText from './HighlightedText';

import { CLIENTS } from '~/constants';

const Clients = () => (
  <div className="h-screen flex gap-16 flex-col justify-center items-center">
    <div className="flex gap-6 flex-col justify-center items-center">
      <Header />
      <TeamMemberCards />
    </div>
    {/* <Link>View All</Link> */}
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

const TeamMemberCards = () => (
  <div className="flex gap-12 justify-center items-center">
    {CLIENTS.map((client, index) => {
      const src = `/clients/client-${index}.svg`;
      const props = { clientImgSrc: src, ...client };

      return <ClientCard key={index} {...props} />;
    })}
  </div>
);

export default Clients;
