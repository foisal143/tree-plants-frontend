import CategorySection from './CategorySection/CategorySection';
import GetInTouchSec from './GetInTouchSec/GetInTouchSec';
import HeroSection from './HeroSection/HeroSection';
import Introduction from './Introduction/Introduction';
import ProductSec from './ProductSec/ProductSec';

import SubscribedSection from './SubscribedSection/SubscribedSection';
import Testimonial from './Testimonial/Testimonial';

const Home = () => {
  return (
    <>
      <HeroSection />
      <Introduction />
      <CategorySection />
      <ProductSec />
      <GetInTouchSec />
      <Testimonial />
      <SubscribedSection />
    </>
  );
};

export default Home;
