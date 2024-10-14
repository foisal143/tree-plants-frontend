type THeadingText = {
  heading: string;
  style: string;
};
const HeadingText = ({ heading, style }: THeadingText) => {
  return (
    <div className={` ${style}`}>
      <h2 className="text-3xl  font-semibold lg:text-5xl font-headerFont">
        {heading}
      </h2>
    </div>
  );
};

export default HeadingText;
