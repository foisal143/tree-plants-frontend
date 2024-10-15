import Container from '../../components/Container';

import AboutBanner from './AboutBanner/AboutBanner';
import OurStory from './OurStory/OurStory';
import OurValue from './OurValue/OurValue';

const About = () => {
  return (
    <>
      <AboutBanner />
      <OurStory />
      <OurValue />
      <div className="mt-[116px]">
        <Container>
          <section className=" py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Our Values */}
              <div className="flex flex-col lg:flex-row items-center mb-12">
                <div className="lg:w-1/2 mb-6 lg:mb-0 lg:pr-6">
                  <h2 className="text-3xl font-semibold text-green-600 mb-4">
                    Our Values
                  </h2>
                  <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
                    <li>
                      <strong>Sustainability</strong>: We follow eco-friendly
                      practices in everything we do.
                    </li>
                    <li>
                      <strong>Quality</strong>: We handpick only the best plants
                      for your home and garden.
                    </li>
                    <li>
                      <strong>Customer Care</strong>: Our team is always here to
                      help you choose the right plant and provide tips on care.
                    </li>
                  </ul>
                </div>
                <div className="lg:w-1/2">
                  <img
                    src="https://example.com/values-image.jpg"
                    alt="Our Values"
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="flex flex-col lg:flex-row items-center mb-12">
                <div className="lg:w-1/2 mb-6 lg:mb-0 lg:pr-6">
                  <h2 className="text-3xl font-semibold text-green-600 mb-4">
                    Why Choose Us?
                  </h2>
                  <p className="text-lg text-gray-700">
                    With years of experience, a passionate team, and a carefully
                    curated selection, we’re here to support your plant journey,
                    whether you're a first-time plant parent or a seasoned
                    gardener.
                  </p>
                </div>
                <div className="lg:w-1/2">
                  <img
                    src="https://example.com/choose-us-image.jpg"
                    alt="Why Choose Us"
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                </div>
              </div>

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
