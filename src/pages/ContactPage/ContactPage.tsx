import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import Banner from '../../components/Banner';
import GetInTouchSec from '../Home/GetInTouchSec/GetInTouchSec';
import GoogleMap from './GoogleMap/GoogleMap';

const ContactPage = () => {
  return (
    <>
      <Banner
        img="https://www.karunanurserygarden.in/wp-content/uploads/2022/11/Ban1-1030x568.jpg"
        heading="Get in Touch with Us"
        text="Have questions or need assistance? We're here to help! Reach out to us through our contact form, give us a call, or visit our nursery. Our team is dedicated to providing you with the best customer service and expert advice for all your tree planting needs. Connect with us today to start growing your green space!"
        path=""
        button="Get Service"
      />

      <div className="bg-white my-[116px]">
        <GetInTouchSec />

        {/* Location Map Section */}
        <GoogleMap />
        {/* Customer Service Information Section */}
        <section className="py-12 bg-gray-100">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">
              Customer Service
            </h2>
            <div className="flex flex-wrap justify-around text-center">
              <div className="w-full md:w-1/3 mb-6 md:mb-0">
                <h3 className="text-xl font-semibold mb-2">Phone</h3>
                <p className="text-gray-700">+1 (800) 123-4567</p>
              </div>
              <div className="w-full md:w-1/3 mb-6 md:mb-0">
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <p className="text-gray-700">support@treenursery.com</p>
              </div>
              <div className="w-full md:w-1/3">
                <h3 className="text-xl font-semibold mb-2">Working Hours</h3>
                <p className="text-gray-700">Mon-Fri: 9am - 6pm</p>
              </div>
            </div>
          </div>
        </section>

        {/* Social Media Links Section */}
        <section className="py-12">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Follow Us</h2>
            <div className="flex justify-center space-x-6">
              <a href="#" className="text-green-600 hover:text-green-800">
                <FaFacebook className="w-8 h-8 rounded-full" />
              </a>
              <a href="#" className="text-green-600 hover:text-green-800">
                <FaInstagram className="w-8 h-8 rounded-full" />
              </a>
              <a href="#" className="text-green-600 hover:text-green-800">
                <FaTwitter className="w-8 h-8 rounded-full" />
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ContactPage;
