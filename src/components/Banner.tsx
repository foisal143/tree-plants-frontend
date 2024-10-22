import Container from './Container';
import HeadingText from './HeadingText';
import { Link } from 'react-router-dom';

const Banner = ({
  heading,
  text,
  img,
  path,
  button,
}: {
  heading: string;
  text: string;
  img: string;
  path: string;
  button: string;
}) => {
  return (
    <div
      style={{
        background: `url(${img})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '100vh',
        width: '100%',
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
      }}
      className={` bg-cover bg-no-repeat  bg-center h-[100vh] w-full  relative bg-fixed`}
    >
      <div className="w-full h-full absolute top-0 left-0 bg-black/30">
        <Container>
          <div className=" text-white text-center h-[100vh] flex justify-center items-center">
            <div className="lg:w-1/2 mx-auto">
              <HeadingText style="text-center" heading={heading} />
              <p className="my-5">{text}</p>
              <Link to={path}>
                <button className="btn-primary ">{button}</button>
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Banner;
