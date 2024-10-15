import Container from '../../../components/Container';
import HeadingText from '../../../components/HeadingText';

const SubscribedSection = () => {
  return (
    <div className="mb-[116px]">
      <Container>
        <HeadingText style="text-center" heading="Subscribed Now" />
        <div className="mt-12 text-center w-full">
          <div className="join lg:w-1/2 mx-auto">
            <input
              className="input input-bordered w-full rounded-s-full join-item"
              placeholder="Email"
            />
            <button className="btn-primary join-item rounded-r-full">
              Subscribe
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SubscribedSection;
