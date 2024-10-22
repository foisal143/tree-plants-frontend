import { BsUsbSymbol } from 'react-icons/bs';
import Container from '../../../components/Container';
import HeadingText from '../../../components/HeadingText';
import OurValueCard from '../../../components/OurValueCard';
import { FaAward } from 'react-icons/fa';
import { MdSupport } from 'react-icons/md';

const OurValue = () => {
  return (
    <div className="bg-[url(https://thumbs.dreamstime.com/b/young-flowers-plant-nursery-1-1575922.jpg)] text-white h-[1000px] lg:h-[500px] w-full bg-cover bg-center bg-fixed relative">
      <div className="absolute w-full flex justify-center items-center h-full bg-black/50">
        {' '}
        <Container>
          <HeadingText style="text-center" heading="Our Value" />
          <div className="grid mt-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <OurValueCard
              Icon={BsUsbSymbol}
              heading="Sustainability"
              text="We follow eco-friendly practices in everything we do"
            />
            <OurValueCard
              Icon={FaAward}
              heading="Quality"
              text="We handpick only the best plants for your home and garden."
            />
            <OurValueCard
              Icon={MdSupport}
              heading="Customer Care"
              text="Our team is always here to help you choose the right plant and provide tips on care."
            />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default OurValue;
