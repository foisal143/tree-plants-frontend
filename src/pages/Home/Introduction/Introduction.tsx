import { Link } from 'react-router-dom';
import Container from '../../../components/Container';
import HeadingText from '../../../components/HeadingText';

const Introduction = () => {
  return (
    <div className="my-[116px]">
      <Container>
        <div className="lg:flex justify-between gap-10">
          <div className="lg:w-1/2">
            <img
              className="w-full h-[350px] rounded-lg"
              src="https://growbilliontrees.com/cdn/shop/files/gift-home-d2c-brands.jpg?v=1710592467&width=1420"
              alt=""
            />
          </div>
          <div className="lg:w-1/2 space-y-5">
            <HeadingText
              style=""
              heading=" Grow Your Green Space with Us"
            ></HeadingText>
            <p>
              At Tree Plants Nursery, we believe in the beauty and tranquility
              that plants bring to any environment. Whether you're cultivating a
              lush garden, enhancing your home with indoor greenery, or
              searching for the perfect tree to complete your landscape, we are
              here to help. Our collection includes a wide range of hand-picked
              trees, shrubs, flowers, and houseplants, all sourced with care to
              ensure they thrive in your space. Explore our expert gardening
              tips, personalized advice, and convenient delivery options to make
              your gardening journey easier and more rewarding.
            </p>
            <Link to="/contact">
              <button className="btn-primary mt-5">Get In Touch</button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Introduction;
