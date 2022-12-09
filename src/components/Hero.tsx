import Button from './Button';
import HighlightedText from './HighlightedText';

// 3rem = MainLayout padding top
// 3.125rem = Navbar height

const Hero = () => (
  <div className="flex gap-20 items-center justify-between h-[calc(100vh-3rem-3.125rem)]">
    <div className="flex flex-col justify-center items-start gap-12 max-w-[528px]">
      <div className="flex flex-col gap-5">
        <h1>
          Best creative <strong>solution</strong> for your{' '}
          <HighlightedText backgroundColor="purple">bussiness.</HighlightedText>
        </h1>
        <p>
          UNICO is an independent creative firm, obsessive about helping people
          with concepts that leaves them and their brand inspired.
        </p>
      </div>
      <Button variant="secondary">Get Started</Button>
    </div>
    <img alt="Computer" className="max-w-[470px]" src="/computer.png" />
  </div>
);

export default Hero;
