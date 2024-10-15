import { Link } from 'react-router-dom';
import HeadingText from '../../../components/HeadingText';

const OurService = () => {
  return (
    <div className="mb-[116px]">
      <HeadingText style="text-center mb-12" heading="Our Product & Service" />
      <div className="lg:w-1/2 text-center mx-auto mb-6 lg:mb-0 lg:pr-6">
        <p className="text-lg text-gray-700">
          From succulents and flowering plants to fruit trees and shrubs, we
          offer a wide range of products to suit every garden and home.
        </p>
        <Link to="/product">
          <button className="btn-primary mt-5">Buy Plants</button>
        </Link>
      </div>
    </div>
  );
};

export default OurService;
