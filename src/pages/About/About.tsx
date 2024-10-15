import Container from '../../components/Container';

import AboutBanner from './AboutBanner/AboutBanner';
import OurStory from './OurStory/OurStory';
import OurValue from './OurValue/OurValue';
import WhyChoseUs from './WhyChoseUs/WhyChoseUs';

const About = () => {
  return (
    <>
      <AboutBanner />
      <OurStory />
      <OurValue />
      <WhyChoseUs />
      <div className="mt-[116px]">
        <Container>
          <section className=" py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Our Products and Services */}
              <div className="flex flex-col lg:flex-row items-center mb-12">
                <div className="lg:w-1/2 mb-6 lg:mb-0 lg:pr-6">
                  <h2 className="text-3xl font-semibold text-green-600 mb-4">
                    Our Products and Services
                  </h2>
                  <p className="text-lg text-gray-700">
                    From succulents and flowering plants to fruit trees and
                    shrubs, we offer a wide range of products to suit every
                    garden and home.
                  </p>
                </div>
                <div className="lg:w-1/2">
                  <img
                    src="https://example.com/products-services-image.jpg"
                    alt="Our Products and Services"
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                </div>
              </div>

              {/* Call to Action */}
              <div className="text-center">
                <p className="text-xl font-semibold text-green-700 mb-6">
                  Join us in making the world a greener place.
                </p>
                <a
                  href="/shop"
                  className="btn btn-primary text-white py-3 px-8 bg-green-500 hover:bg-green-600 rounded-lg"
                >
                  Shop Our Plants
                </a>
              </div>
            </div>
          </section>
        </Container>
      </div>
    </>
  );
};

export default About;
