import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

const LogoSlider = () => {
  return (
    <section className="border-2 border-primary py-10">
      <Swiper
        spaceBetween={50}
        slidesPerView={5}
        loop={true}
        autoplay={{
          delay: 0, // Zorg ervoor dat het continu afspeelt zonder pauze
          disableOnInteraction: false, // Blijf autoplay na interactie
        }}
        speed={5000} // De snelheid van de overgang
        modules={[Autoplay]}
        className="mySwiper"
      >
        {/* Voeg je logo's hier toe */}
        <SwiperSlide>
          <img
            className="h-16 mx-auto"
            src="https://tailwindui.com/img/logos/158x48/transistor-logo-white.svg"
            alt="Transistor"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-16 mx-auto"
            src="https://tailwindui.com/img/logos/158x48/reform-logo-white.svg"
            alt="Reform"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-16 mx-auto"
            src="https://tailwindui.com/img/logos/158x48/tuple-logo-white.svg"
            alt="Tuple"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-16 mx-auto"
            src="https://tailwindui.com/img/logos/158x48/savvycal-logo-white.svg"
            alt="SavvyCal"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-16 mx-auto"
            src="https://tailwindui.com/img/logos/158x48/statamic-logo-white.svg"
            alt="Statamic"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-16 mx-auto"
            src="https://tailwindui.com/img/logos/158x48/laravel-logo-white.svg"
            alt="Laravel"
          />
        </SwiperSlide>
        {/* Herhaal zoveel als je logo's hebt */}
      </Swiper>
    </section>
  );
};

export default LogoSlider;
