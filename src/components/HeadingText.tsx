type THeadingText = {
  heading: string;
  style: string;
  subheading: string;
};
const HeadingText = ({ heading, style, subheading }: THeadingText) => {
  return (
    <div className={` ${style}`}>
      <h4>{subheading}</h4>
      <h2 className="text-3xl my-5 lg:text-5xl font-headerFont">{heading}</h2>
    </div>
  );
};

export default HeadingText;
