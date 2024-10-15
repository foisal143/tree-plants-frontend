import Container from '../../../components/Container';
import HeadingText from '../../../components/HeadingText';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import { useEffect, useState } from 'react';
const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetch('testimonial.json')
      .then(res => res.json())
      .then(data => setTestimonials(data));
  }, []);

  return (
    <div className="mb-[116px]">
      <Container>
        <HeadingText style="text-center" heading="Testimonial" />
        <div className="mt-12">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {testimonials &&
              testimonials.map(
                (item: { name: string; image: string; comments: string }) => (
                  <SwiperSlide key={item.name}>
                    <div className="card h-[250px] bg-base-100 rounded w-full shadow-xl">
                      <figure className="px-10 pt-10">
                        <img
                          src={item.image}
                          alt="Card image"
                          className="rounded-full w-24 h-24"
                        />
                      </figure>
                      <div className="card-body items-center text-center">
                        <h2 className="card-title">Jhon</h2>
                        <p>{item.comments}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                )
              )}
          </Swiper>
        </div>
      </Container>
    </div>
  );
};

export default Testimonial;
