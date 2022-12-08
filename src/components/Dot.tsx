interface Props {
  active?: boolean;
}

const Dot = ({ active = false }: Props) => (
  <div
    className={`h-4 w-4 rounded-full ${
      active ? 'bg-gradient-to-b from-purple to-purple/75' : 'bg-gray/30'
    }`}
  />
);

export default Dot;
