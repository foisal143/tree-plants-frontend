import { Link } from 'react-router-dom';
import Container from '../../../components/Container';
import HeadingText from '../../../components/HeadingText';

const HeroSection = () => {
  return (
    <div
      className="bg-[url(https://thumbs.dreamstime.com/b/hands-female-botanist-holding-seedling-plant-nursery-hands-female-botanist-holding-seedling-plant-nursery-yellow-164464346.jpg)] bg-cover bg-center h-[650px] w-full  relative
    "
    >
      <div className="w-full h-full absolute top-0 left-0 bg-black/30">
        <Container>
          <div className=" text-white text-center h-[650px]  flex justify-center items-center">
            <div className="lg:w-1/2 mx-auto">
              <HeadingText
                style="text-center"
                heading="Tree Plants"
                subheading=""
              />
              <p>
                Welcome to Tree Plants Nursery, your trusted source for a wide
                variety of trees and plants that will enhance any garden or
                home. Whether you're a seasoned gardener or just starting out,
                we provide high-quality plants, expert care advice, and delivery
                services to ensure your green spaces thrive. Explore our
                selection of indoor and outdoor plants, fruit trees, shrubs, and
                more to create your perfect oasis
              </p>
              <Link to="/about">
                <button className="btn-primary mt-5">Explore More</button>
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default HeroSection;
