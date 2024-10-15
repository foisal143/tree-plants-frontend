import CategorySection from './CategorySection/CategorySection';
import GetInTouchSec from './GetInTouchSec/GetInTouchSec';
import HeroSection from './HeroSection/HeroSection';
import Introduction from './Introduction/Introduction';
import ProductSection from './ProductSection/ProductSection';

const Home = () => {
  return (
    <>
      <HeroSection />
      <Introduction />
      <CategorySection />
      <ProductSection />
      <GetInTouchSec />
    </>
  );
};

export default Home;
