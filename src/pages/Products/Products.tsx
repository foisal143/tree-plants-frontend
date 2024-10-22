import { FormEvent, useState } from 'react';
import Container from '../../components/Container';
import HeadingText from '../../components/HeadingText';
import ProductCard from '../../components/ProductCard';
import { useGetAllProductQuery } from '../../Redux/features/product/productApis';
import { TProduct } from '../Home/ProductSec/ProductSec';
import NotDataFound from '../../components/NotDataFound';

const Products = () => {
  const { data: prodRes } = useGetAllProductQuery({
    searchTerm: '',
    sort: '',
    page: '',
    limit: '',
  });
  const [searchValue, setSearchValue] = useState('');
  const [sortValue, setSortValue] = useState('-price');
  const [page, setPage] = useState(1);
  const { data: productRes } = useGetAllProductQuery({
    searchTerm: searchValue,
    sort: sortValue,
    page: page,
    limit: 8,
  });
  const products = productRes?.data;
  const totalProd = prodRes?.data?.length;
  const pageNumber = Math.ceil(totalProd / 8);

  const pageNumberArray = [];
  for (let i = 1; i <= pageNumber; i++) {
    pageNumberArray.push(i);
  }

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
        <div className="lg:flex space-y-5 lg:space-y-0 justify-between items-center ">
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

          <div className=" text-center lg:w-1/2">
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
        {products && products?.length > 0 ? (
          <div className="my-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
            {products &&
              products?.length > 0 &&
              products.map((item: TProduct) => (
                <ProductCard product={item} key={item._id} />
              ))}
          </div>
        ) : (
          <div className="pt-24">
            <NotDataFound text="Products not found" />
          </div>
        )}
      </Container>
      {products && products?.length > 0 && (
        <div className="flex justify-center items-center mt-12">
          <div className="join">
            {pageNumberArray.map(num => (
              <button
                onClick={() => setPage(num)}
                key={num}
                className={`join-item btn btn-md ${
                  page === num && 'btn-active'
                }`}
              >
                {num}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
