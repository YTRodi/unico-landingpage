export interface Props {
  title: string;
  body: string;
}

const Counter = ({ title, body }: Props) => {
  const commonClassnames =
    'text-transparent bg-clip-text bg-gradient-to-b from-purple to-purple/75';

  return (
    <div className="flex flex-col items-center">
      <h2 className={`font-bold ${commonClassnames}`}>{title}</h2>
      <h4 className={commonClassnames}>{body}</h4>
    </div>
  );
};

export default Counter;
