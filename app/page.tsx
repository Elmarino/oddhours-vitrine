'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import {
  Autoplay,
  EffectCreative,
  Keyboard,
  Navigation,
  Pagination
} from 'swiper/modules';
import Button from '@/src/components/ui/button';

const images = [
  '/images/P1-BedForPet.webp', // Remplacez par vos images
  '/images/P2-Odous.webp',
  '/images/P3-Poulangerie.webp',
  '/images/P4-Amical.webp',
  '/images/P5-BenAndJerrys.webp',
  '/images/P6-Quasi.webp',
  '/images/P7-SNF.webp',
  '/images/P8-Villandry.webp'
];

export default function Home() {
  return (
    <div>
      <Swiper
        slidesPerView={1}
        modules={[Keyboard, Pagination, Autoplay, EffectCreative]}
        loop={true}
        keyboard={{
          enabled: true
        }}
        autoplay={{
          delay: 4000, // Délai entre les transitions (en ms)
          disableOnInteraction: false // Ne pas désactiver l'autoplay après une interaction
        }}
        className="relative p-10 md:h-screen h-[90vh]"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index} className="flex items-center justify-center">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: `url(${src})`
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex justify-center">
        <div className="text-white mt-48 mb-64 lg:w-3/5 sm:w-2/3 w-full md:px-0 px-20 font-content md:text-3xl text-2xl">
          <h1 className="font-title md:text-5xl text-3xl mb-20">
            Expressive and efficient brands
          </h1>
          <p className="mb-20">
            We’re <b>Out of Office</b>, a creative collective based in Paris and
            Prague. We help companies build brands that are unapologetically
            authentic. We’re industry agnostic—we care about the value you bring
            to the world.
          </p>
          <p className="mb-28">
            <b>Capabilities</b>
            <br />
            Brand Audit, Brand Strategy, Brand Identity, Website Design &
            Development, E-Commerce, Brand Support & Technical Training
          </p>

          <div className="flex md:flex-row flex-col md:gap-10 gap-5 items-start">
            <Button text="Ask for our portfolio" />
            <Button text="New projects" />
          </div>
        </div>
      </div>
    </div>
  );
}
