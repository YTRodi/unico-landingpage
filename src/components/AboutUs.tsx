import Button from './Button';
import HighlightedText from './HighlightedText';

const AboutUs = () => (
  <div className="h-screen flex gap-14 items-center">
    <img alt="about us photo" src="/about-us.png" />
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2.5">
        <h4 className="tag text-yellow">ABOUT US</h4>
        <h2>
          <HighlightedText backgroundColor="pink">Together</HighlightedText>, We
          Think Big
        </h2>
      </div>
      <div className="flex flex-col gap-12 justify-start items-start">
        <p>
          Our Understand your business; Make your goals, our goals; Set
          realistic outcomes, and finally walk the talk to lead you to that
          delightful beginning. Integrity, fairness, transparency, and bias for
          action are doctrines that we consider very vital and work towards
          building lasting relationships in a world that is trust deficit.
        </p>
        <Button className="flex justify-center items-center gap-2.5">
          More Details
          <img alt="arrow" src="/arrow.png" />
        </Button>
      </div>
    </div>
  </div>
);

export default AboutUs;
