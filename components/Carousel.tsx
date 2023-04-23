import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

import { ItemInfoProps, CarrouselProps } from '@/types';
import { useMediaQuery } from '@/hooks';

import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import { animateOnScroll } from '@/utils';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const Carousel: React.FC<CarrouselProps> = (props) => {
  const { Component, data } = props;

  const root = useRef();
  gsap.registerPlugin(ScrollTrigger);
  const q = gsap.utils.selector(root);

  const small = useMediaQuery('(min-width: 950px) and (max-width: 1200px)');
  const small2 = useMediaQuery('(min-width: 701px) and (max-width: 950px)');
  const small3 = useMediaQuery('(min-width: 0px) and (max-width: 700px)');

  const [numberItem, setNumberItem] = useState(4);

  useEffect(() => {
    if (small) {
      setNumberItem(3);
    } else if (small2) {
      setNumberItem(2);
    } else if (small3) {
      setNumberItem(1);
    } else {
      setNumberItem(4);
    }
  }, [small, small2, small3]);

  useEffect(() => {
    animateOnScroll(
      q('#carousel-0'),
      { opacity: 0 },
      { opacity: 1 },
      '0% 80%',
      '30% 5%'
    );
    animateOnScroll(
      q('#carousel-1'),
      { opacity: 0 },
      { opacity: 1 },
      '0% 70%',
      '30% 10%'
    );
    animateOnScroll(
      q('#carousel-2'),
      { opacity: 0 },
      { opacity: 1 },
      '0% 60%',
      '30% 15%'
    );
    animateOnScroll(
      q('#carousel-3'),
      { opacity: 0 },
      { opacity: 1 },
      '0% 50%',
      '30% 20%'
    );
    animateOnScroll(
      q('#swipper'),
      { opacity: 0 },
      { opacity: 1 },
      '0% 60%',
      '100% 30%'
    );
  }, []);

  return (
    <div className="containerCarousel" ref={root}>
      <Swiper
        className="carousel"
        slidesPerView={numberItem}
        spaceBetween={20}
        pagination={{
          clickable: false
        }}
        navigation={{
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next'
        }}
        modules={[Pagination, Navigation]}
      >
        {data.map((item, index) => {
          return (
            <SwiperSlide key={index} id={`carousel-${index}`}>
              {React.createElement(Component, {
                title: item.title,
                description: item.description,
                pathImg: item.pathImg
              })}
            </SwiperSlide>
          );
        })}
      </Swiper>

      <button
        className={`swiper-button-next  ${
          numberItem === data.length ? 'disable' : ''
        } `}
        id="swipper"
      >
        <div className="wrapper">
          <Image
            src="/assets/shortArrowRight.svg"
            alt="Fleche"
            width={30}
            height={30}
          />
        </div>
      </button>
      <button
        className={`swiper-button-prev  ${
          numberItem === data.length ? 'disable' : ''
        } `}
        id="swipper"
      >
        <div className="wrapper">
          <Image
            src="/assets/shortArrowLeft.svg"
            alt="Fleche"
            width={30}
            height={30}
          />
        </div>
      </button>
    </div>
  );
};
