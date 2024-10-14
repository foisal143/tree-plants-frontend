export type TCategory = { name: string; image: string; id: string };
const CategoryCard = ({ category }: { category: TCategory }) => {
  return (
    <div className="flex border rounded-lg  h-[180px] justify-center items-center">
      <div className="text-center w-full space-y-5 ">
        <img
          className="w-[100px] rounded-md h-[100px] mx-auto"
          src={category.image}
          alt=""
        />
        <h3 className="text-xl font-semibold font-headerFont">
          {category.name}
        </h3>
      </div>
    </div>
  );
};

export default CategoryCard;
