import { Link } from 'react-router-dom';
import Container from '../../../components/Container';

const OurStory = () => {
  return (
    <div className="my-[116px]">
      <Container>
        {/* Our Story */}

        <div className="flex flex-col gap-10 lg:flex-row  mb-12">
          <div className="lg:w-1/2">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSICpHRzhITYGLY48joGAjUFPTnc4hWp9t5IA&s"
              alt="Our Story"
              className="w-full h-[350px] rounded-lg shadow-lg"
            />
          </div>
          <div className="lg:w-1/2 mb-6 lg:mb-0 lg:pr-6">
            <h2 className="text-2xl font-semibold font-headerFont mb-4">
              Nurturing Growth: The Story Behind Our Nursery
            </h2>
            <p className="text-gray-700 text-lg">
              At <strong>Tree Plants</strong>, our journey began with a simple
              love for nature and the belief that plants have the power to
              transform spaces and lives. What started as a small family venture
              has blossomed into a thriving nursery, rooted in passion and
              dedication. Over the years, we’ve grown alongside the plants we
              nurture, always focused on providing the best quality, care, and
              advice for our customers. Whether you’re a seasoned gardener or
              just starting your green journey, our story is one of community,
              sustainability, and a deep connection to the environment
            </p>
            <Link to={'/contact'}>
              {' '}
              <button className="btn-primary mt-6">Get In Touch</button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default OurStory;
