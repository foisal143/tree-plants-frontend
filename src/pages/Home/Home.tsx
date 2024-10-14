import CategorySection from './CategorySection/CategorySection';
import HeroSection from './HeroSection/HeroSection';
import Introduction from './Introduction/Introduction';
import ProductSection from './productSection/productSection';

const Home = () => {
  return (
    <>
      <HeroSection />
      <Introduction />
      <CategorySection />
      <ProductSection />
    </>
  );
};

export default Home;
