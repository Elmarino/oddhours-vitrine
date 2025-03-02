'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, EffectCreative, Keyboard, Pagination } from 'swiper/modules';
import Button from '@/src/components/ui/button';
import Image from 'next/image';

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
    <div className="relative">
      {/* <div className="absolute z-20 w-full flex justify-center py-[2vh]">
        <Image
          src="/images/icons/symbol.svg"
          alt="Logo Out Of Office"
          style={{ objectFit: 'contain' }}
          width={200}
          height={200}
          className="mix-blend-hard-light"
        />
      </div> */}

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
      <div className="flex justify-start items-end md:min-h-screen md:mt-0 mt-48 pl-[5vw]">
        <div className="text-white w-full md:px-0 px-14 font-content md:text-lg text-lg">
          <h1 className="font-bold md:text-7xl sm:text-5xl text-4xl mb-20 ">
            We build{' '}
            <span className="font-cursive font-normal">expressive</span>
            <br /> and{' '}
            <span className="font-cursive font-normal">efficient</span> brands.
          </h1>
          <p className="mb-10">
            We're <b>Out of Office</b>, a creative collective based in Paris and
            Prague.
            <br />
            We help companies build brands that are unapologetically authentic.
            <br />
            We're industry agnostic—we care about the value you bring to the
            world.
          </p>
          <p className="mb-20">
            <b>Capabilities</b>
            <br />
            Brand Audit, Brand Strategy, Brand Identity, Website Design &
            Development,
            <br />
            E-Commerce, Brand Support & Technical Training
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
