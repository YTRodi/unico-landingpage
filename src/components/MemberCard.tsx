export interface Props {
  src: string;
  fullName: string;
  position: string;
}

const MemberCard = ({ src, fullName, position }: Props) => (
  <div className="shadow-lg rounded-md bg-white">
    <img alt="Member 0" className="rounded-t-md" src={src} />
    <div className="py-3 flex flex-col items-center">
      <h5>{fullName}</h5>
      <p>{position}</p>
    </div>
  </div>
);

export default MemberCard;
