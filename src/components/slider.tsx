import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import Kermit from '../../public/Kermit.png';

const logosArray = [
  { id: 1, text: '$KERMITNOBIZ', imageSrc: Kermit.src },
  { id: 2, text: '$KERMITNOBIZ', imageSrc: Kermit.src },
  { id: 3, text: '$KERMITNOBIZ', imageSrc: Kermit.src },
  { id: 4, text: '$KERMITNOBIZ', imageSrc: Kermit.src },
  { id: 5, text: '$KERMITNOBIZ', imageSrc: Kermit.src },
  { id: 6, text: '$KERMITNOBIZ', imageSrc: Kermit.src }
];

const Slider = () => {
  return (
    <section className="border-2 border-primary p-2">
      <Swiper
        spaceBetween={60}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        speed={3000}
        modules={[Autoplay]}
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 250,
          },
          480: {
            slidesPerView: 2,
            spaceBetween: 100,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 60,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 100,
          },
          1300: {
            slidesPerView: 4,
            spaceBetween: 100,
          },
          1500: {
            slidesPerView: 5,
            spaceBetween: 100,
          },
          1920: {
            slidesPerView: 6,
            spaceBetween: 100,
          }
        }}
      >
        {logosArray.map((logoslider) => (
        <SwiperSlide key={logoslider.id}>
          <div className='flex flex-row gap-3 justify-center items-center' >
            <div className='font-dynapuff font-medium text-3xl text-primary'>
              {logoslider.text}
            </div>
            <img src={logoslider.imageSrc} height={50} width={50} alt='Kermiticon'></img>
          </div>
        </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Slider;
