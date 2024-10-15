import { IconType } from 'react-icons';

const OurValueCard = ({
  Icon,
  heading,
  text,
}: {
  Icon: IconType;
  heading: string;
  text: string;
}) => {
  return (
    <div className="w-full space-y-3 bg-white rounded-md text-black p-5 text-center ">
      <Icon className="w-24 h-24 rounded-full mx-auto" />
      <h3 className="text-xl font-semibold">{heading}</h3>
      <p>{text}</p>
    </div>
  );
};

export default OurValueCard;
