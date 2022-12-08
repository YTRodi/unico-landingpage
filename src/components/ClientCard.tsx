export interface Props {
  clientImgSrc: string;
  fullName: string;
  position: string;
  company: string;
  comment: string;
}

const ClientCard = ({
  clientImgSrc,
  fullName,
  position,
  company,
  comment,
}: Props) => (
  <div className="flex-1 h-full shadow-lg rounded-md bg-white flex gap-3 flex-col p-8">
    <div className="flex justify-between items-center">
      <div className=" flex gap-4">
        <img alt="Client 0" src={clientImgSrc} />
        <div>
          <h6 className="font-bold">{fullName}</h6>
          <p>
            {position} at <strong>{company}</strong>
          </p>
        </div>
      </div>
      <div className="flex gap-2 justify-center items-center">
        <p>4.5</p>
        <img alt="yellow star" src="/yellow-star.svg" />
      </div>
    </div>
    <p>{comment}</p>
  </div>
);

export default ClientCard;
