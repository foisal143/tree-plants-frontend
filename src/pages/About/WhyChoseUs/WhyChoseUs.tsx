import { FaLeaf, FaRecycle, FaUser, FaUsers } from 'react-icons/fa';
import Container from '../../../components/Container';
import HeadingText from '../../../components/HeadingText';

const WhyChoseUs = () => {
  return (
    <div className="my-[116px]">
      <Container>
        <HeadingText heading="Why Choose Us" style="text-center mb-12" />

        <section className="bg-white pb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Accordion */}
            <div className="join join-vertical w-full">
              {/* Accordion Item 1 */}
              <div className="collapse collapse-arrow join-item border-base-300 border">
                <input type="radio" name="my-accordion" defaultChecked />
                <div className="collapse-title bg-green-50 text-xl font-medium flex items-center">
                  <FaUser className="mr-2 text-green-700" /> Expert Guidance
                </div>
                <div className="collapse-content bg-green-50">
                  <p>
                    Our knowledgeable staff is passionate about plants and ready
                    to provide personalized advice to help you choose the right
                    plants for your space.
                  </p>
                </div>
              </div>

              {/* Accordion Item 2 */}
              <div className="collapse collapse-arrow join-item border-base-300 border">
                <input type="radio" name="my-accordion" />
                <div className="collapse-title bg-green-50 text-xl font-medium flex items-center">
                  <FaLeaf className="mr-2 text-green-700" /> Quality Plants
                </div>
                <div className="collapse-content bg-green-50">
                  <p>
                    We carefully select our plants to ensure that you receive
                    only the healthiest and most vibrant varieties, perfect for
                    any home or garden.
                  </p>
                </div>
              </div>

              {/* Accordion Item 3 */}
              <div className="collapse collapse-arrow join-item border-base-300 border">
                <input type="radio" name="my-accordion" />
                <div className="collapse-title bg-green-50 text-xl font-medium flex items-center">
                  <FaRecycle className="mr-2 text-green-700" /> Sustainability
                  Commitment
                </div>
                <div className="collapse-content bg-green-50">
                  <p>
                    We prioritize eco-friendly practices, ensuring that our
                    plants are sourced sustainably, promoting a greener planet
                    for future generations.
                  </p>
                </div>
              </div>

              {/* Accordion Item 4 */}
              <div className="collapse collapse-arrow join-item border-base-300 border">
                <input type="radio" name="my-accordion" />
                <div className="collapse-title bg-green-50 text-xl font-medium flex items-center">
                  <FaUsers className="mr-2 text-green-700" /> Community Focused
                </div>
                <div className="collapse-content bg-green-50">
                  <p>
                    We believe in giving back to our community, hosting
                    workshops, and supporting local initiatives to promote
                    gardening and environmental awareness.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
};

export default WhyChoseUs;
