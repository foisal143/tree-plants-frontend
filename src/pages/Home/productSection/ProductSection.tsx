import Container from '../../../components/Container';
import HeadingText from '../../../components/HeadingText';
import ProductCard from '../../../components/productCard';
import { useGetAllProductQuery } from '../../../Redux/features/product/productApis';
export type TProduct = {
  _id: string;
  category: string;
  title: string;
  price: number;
  quantity: number;
  description: string;
  rating: number;
  image: string;
};
const ProductSection = () => {
  const { data: productRes } = useGetAllProductQuery(undefined);
  const products = productRes?.data;
  console.log(productRes, products);
  return (
    <div className="mb-[116px]">
      <Container>
        <HeadingText style="text-center" heading="Our Best Products" />
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {products && products?.length > 0 ? (
            products.map((product: TProduct) => (
              <ProductCard key={product._id} product={product} />
            ))
          ) : (
            <p>No Product found</p>
          )}
        </div>
      </Container>
    </div>
  );
};

export default ProductSection;
