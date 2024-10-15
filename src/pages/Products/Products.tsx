import { FormEvent, useState } from 'react';
import Container from '../../components/Container';
import HeadingText from '../../components/HeadingText';
import ProductCard from '../../components/ProductCard';
import { useGetAllProductQuery } from '../../Redux/features/product/productApis';
import { TProduct } from '../Home/ProductSec/ProductSec';

const Products = () => {
  const [searchValue, setSearchValue] = useState('');
  const [sortValue, setSortValue] = useState('-price');
  const { data: productRes } = useGetAllProductQuery({
    searchTerm: searchValue,
    sort: sortValue,
  });
  const products = productRes?.data;
  const handlerSearch = (e: FormEvent) => {
    e.preventDefault();
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const value = e.target?.search?.value;
    setSearchValue(value);
  };

  return (
    <div className="my-[116px]">
      <Container>
        <HeadingText heading="Our Products" style="text-center my-12" />
        <div className="flex justify-between items-center ">
          <div>
            <select
              onChange={e => setSortValue(e.target.value)}
              className="select select-bordered w-full max-w-xs"
            >
              <option disabled selected>
                Sort
              </option>
              <option value="-price">Higih to low price</option>
              <option value="price">Low to high price</option>
              <option value="-quantity">Higih to low quantity</option>
              <option value="quantity">Low to high quantity</option>
            </select>
          </div>

          <div className=" text-center w-1/2">
            <form onSubmit={handlerSearch} action="">
              <div className="join lg:w-full ">
                <input
                  name="search"
                  className="input input-bordered w-full rounded-s-full join-item"
                  placeholder="Search"
                />
                <button
                  type="submit"
                  className="btn-primary join-item rounded-r-full"
                >
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="my-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {products && products.length > 0 ? (
            products.map((item: TProduct) => (
              <ProductCard product={item} key={item._id} />
            ))
          ) : (
            <p> No product found</p>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Products;
