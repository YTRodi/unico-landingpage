import { Fragment } from 'react';

import Counter from './Counter';
import HighlightedText from './HighlightedText';
import ServiceCard from './ServiceCard';

import { COUNTERS, SERVICES } from '~/constants';

const OurServices = () => (
  <div>
    <div className="h-screen flex gap-6 flex-col justify-center items-center">
      <BlockOneHeader />
      <ServiceCards />
    </div>
    <div className="h-[50vh] flex gap-6 flex-col justify-center items-center">
      <BlockTwoHeader />
      <Counters />
    </div>
  </div>
);

// TODO: Maybe create a HeaderSection component ???
const BlockOneHeader = () => (
  <div className="max-w-[31.25rem] flex gap-4 flex-col  items-center">
    <h6 className="tag text-yellow">OUR SERVICES</h6>
    <h2>
      What We <HighlightedText backgroundColor="purple">Do?</HighlightedText>
    </h2>
    <p className="text-center">
      We have more than 100 ambitious and dedicated employees dedicated to the
      digital experience with a long-term focus.
    </p>
  </div>
);

const BlockTwoHeader = () => (
  <div className="max-w-[31.25rem] flex gap-4 flex-col  items-center">
    <h2>
      Some Count That{' '}
      <HighlightedText backgroundColor="purple">Matters</HighlightedText>
    </h2>
    <p>Our achievement epicted in numbers</p>
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

const Counters = () => (
  <div className="flex w-full justify-evenly">
    {COUNTERS.map((counter, index) => {
      const indexOfLastElement = COUNTERS.length - 1;
      const isLastElement = index === indexOfLastElement;

      return (
        <Fragment key={index}>
          <Counter {...counter} />
          {!isLastElement && <hr className="h-full border border-purple/75" />}
        </Fragment>
      );
    })}
  </div>
);

export default OurServices;
