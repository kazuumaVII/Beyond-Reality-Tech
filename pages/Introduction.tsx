import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

import { dataCarouselBuild } from '@/static';

import { ItemCardsBuild } from '@/components/items';
import { Carousel } from '@/components/Carousel';

import { animateOnScroll } from '@/utils';

import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin';

export const Introduction = () => {
  const root = useRef();
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
  const q = gsap.utils.selector(root);

  useEffect(() => {
    animateOnScroll(
      q('#buttonLeft'),
      { opacity: 0 },
      { opacity: 1 },
      '0% 82%',
      '30% 70%'
    );
    animateOnScroll(
      q('.containerImage__image'),
      { opacity: 0 },
      { opacity: 1 },
      '30% 97%',
      '70% 30%'
    );
    animateOnScroll(
      q('.arrowRight'),
      { opacity: 0, x: -100 },
      { opacity: 1, x: 0 },
      '30% 90%',
      '70% 60%'
    );
    animateOnScroll(
      q('#textArrow'),
      { opacity: 0 },
      { opacity: 1 },
      '30% 90%',
      '70% 80%'
    );
  }, []);

  return (
    <section id="services" className="mainIntroduction" ref={root}>
      <div className="containerArrowInfo itemText" id="arrowInfoTop">
        <div className="containerArrowInfo__left">
          <h4>INTRODUCTION</h4>
          <div className="containerArrowInfo__left__arrow">
            <h5>TO HYDRA VR</h5>
            <Image
              src="/assets/longArrowRight.svg"
              alt="Fleche"
              width={200}
              height={80}
            />
          </div>
        </div>
        <div className="containerArrowInfo__right">
          <p>
            Vitae sapien pellentesque habitant morbi tristique senectus et netus
            et. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit
            amet mauris commodo quis imperdiet massa tincidunt nunc. Viverra
            aliquet eget sit amet tellus. Ornare lectus sit amet est placerat
            in. Lectus magna fringilla urna porttitor rhoncus vitae.
          </p>
        </div>
      </div>
      <div className="containerImage itemText">
        <div className="containerImage__image">
          <Image src="/assets/menVr.png" alt="Image vr" fill />
        </div>
        <div className="containerImage__right">
          <h4>ABOUT</h4>
          <h5>HYDRA VR</h5>
          <p>
            Eget mi proin sed libero enim sed faucibus turpis. Nisl rhoncus
            mattis rhoncus urna neque viverra justo. Vivamus at augue eget arcu
            dictum. Ultrices gravida dictum fusce ut placerat orci. Aenean et
            tortor at risus viverra adipiscing at in. Mattis aliquam faucibus
            purus in massa. Est placerat in egestas erat imperdiet sed.
            Consequat semper viverra nam libero justo laoreet sit amet. Aliquam
            etiam erat velit scelerisque in dictum non consectetur a. Laoreet
            sit amet cursus sit amet. Vel eros donec ac odio tempor orci
            dapibus. Sem nulla pha retra diam sit amet nisl suscipit adipiscing
            bibendum. Leo a diam sollicitudi n tempor.
          </p>
          <button id="buttonLeft">LET’S GET IN TOUCH</button>
        </div>
      </div>
      <div className="containerArrowInfo itemText">
        <div className="containerArrowInfo__left">
          <h4>WHY BUILD</h4>
          <div className="containerArrowInfo__left__arrow">
            <h5>WITH HYDRA?</h5>
            <Image
              src="/assets/longArrowRight.svg"
              alt="Fleche"
              width={200}
              height={80}
              className="arrowRight"
            />
          </div>
        </div>
        <div className="containerArrowInfo__right" id="textArrow">
          <p>
            Vitae sapien pellentesque habitant morbi tristique senectus et netus
            et. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit
            amet mauris commodo quis imperdiet massa tincidunt nunc. Viverra
            aliquet eget sit amet tellus. Ornare lectus sit amet est placerat
            in. Lectus magna fringilla urna porttitor rhoncus vitae.
          </p>
        </div>
      </div>

      <div className="containerCards">
        <Carousel Component={ItemCardsBuild} data={dataCarouselBuild} />
      </div>
    </section>
  );
};
