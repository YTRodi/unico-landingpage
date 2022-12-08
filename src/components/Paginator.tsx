import { Arrow, Button, Dot } from './';

const Paginator = () => (
  <div className="w-full flex justify-center items-center">
    <div className="flex-1" />
    <div className="flex-1 flex gap-4 ">
      <Dot active />
      <Dot />
      <Dot />
      <Dot />
    </div>
    <div className="flex gap-4">
      <Button
        className="rounded-full aspect-square px-4 rotate-180 bg-transparent text-purple border-2 border-purple"
        variant="secondary"
      >
        <Arrow />
      </Button>
      <Button
        className="rounded-full aspect-square px-4 bg-gradient-to-b from-purple to-purple/75"
        variant="secondary"
      >
        <Arrow />
      </Button>
    </div>
  </div>
);

export default Paginator;
