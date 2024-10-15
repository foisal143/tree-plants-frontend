import Container from '../../../components/Container';
import HeadingText from '../../../components/HeadingText';

const GetInTouchSec = () => {
  return (
    <div className="mb-[116px]">
      <Container>
        <HeadingText style="text-center" heading="Get In Touch" />
        <div className="lg:flex items-center p-5 space-y-10 lg:space-y-0 mt-12 lg:p-0 justify-between gap-10">
          <div className="lg:w-1/2">
            <img
              className="w-10/12 mx-auto h-[480px]"
              src="https://png.pngtree.com/png-vector/20240615/ourmid/pngtree-a-beautiful-young-man-advertising-and-pointing-aside-transparent-background-png-image_12779148.png"
              alt=""
            />
          </div>
          <div className="lg:w-1/2">
            <form className=" w-full p-6 rounded-lg space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="number"
                name="number"
                placeholder="Your phone number"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />

              <textarea
                name="details"
                placeholder="Your Message"
                className="w-full h-32 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />

              <button type="submit" className="btn-primary w-full ">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default GetInTouchSec;
