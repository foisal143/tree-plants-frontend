const NotDataFound = ({ text }: { text: string }) => {
  return (
    <div className="text-center lg:w-1/2 mx-auto my-12 font-semibold text-xl ">
      <p>{text}</p>
    </div>
  );
};

export default NotDataFound;
