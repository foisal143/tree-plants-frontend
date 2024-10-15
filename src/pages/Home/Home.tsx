import CategorySection from './CategorySection/CategorySection';
import GetInTouchSec from './GetInTouchSec/GetInTouchSec';
import HeroSection from './HeroSection/HeroSection';
import Introduction from './Introduction/Introduction';
import ProductSection from './ProductSection/ProductSection';
import Testimonial from './Testimonial/Testimonial';

const Home = () => {
  return (
    <>
      <HeroSection />
      <Introduction />
      <CategorySection />
      <ProductSection />
      <GetInTouchSec />
      <Testimonial />
    </>
  );
};

export default Home;
