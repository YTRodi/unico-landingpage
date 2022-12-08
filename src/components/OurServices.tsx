import HighlightedText from './HighlightedText';
import ServiceCard from './ServiceCard';

import { SERVICES } from '~/constants';

const OurServices = () => (
  <div className="h-screen flex gap-6 flex-col justify-center items-center">
    <Header />
    <ServiceCards />
  </div>
);

const Header = () => (
  <div className="max-w-[31.25rem] flex gap-4 flex-col  items-center">
    <h4 className="tag text-yellow">OUR SERVICES</h4>
    <h2>
      What We <HighlightedText backgroundColor="purple">Do?</HighlightedText>
    </h2>
    <p className="text-center">
      We have more than 100 ambitious and dedicated employees dedicated to the
      digital experience with a long-term focus.
    </p>
  </div>
);

const ServiceCards = () => (
  <div className="flex gap-12 justify-center items-center">
    {SERVICES.map((service, index) => {
      const src = `/our-services/service-${index}.svg`;
      const props = { iconSrc: src, ...service };

      return <ServiceCard key={index} {...props} />;
    })}
  </div>
);

export default OurServices;
