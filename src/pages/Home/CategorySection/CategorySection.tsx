import { useEffect, useState } from 'react';
import Container from '../../../components/Container';
import HeadingText from '../../../components/HeadingText';
import CategoryCard, { TCategory } from '../../../components/CategoryCard';

const CategorySection = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('category.json')
      .then(res => res.json())
      .then(data => setCategories(data));
  }, []);
  return (
    <div className="mb-[116px] ">
      <Container>
        <HeadingText style="text-center mb-12" heading="Our Best Category" />
        <div className="grid grid-cols-2 justify-center items-center md:grid-cols-3 lg:grid-cols-4 gap-5">
          {categories && categories.length > 0 ? (
            categories.map((category: TCategory) => (
              <CategoryCard category={category} key={category.id} />
            ))
          ) : (
            <p>No Data to show</p>
          )}
        </div>
      </Container>
    </div>
  );
};

export default CategorySection;
