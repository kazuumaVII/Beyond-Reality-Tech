import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

import { dataCarouselBuild } from '@/static';

import { ItemCardsBuild } from '@/components/items';
import { Carousel } from '@/components/Carousel';

import { animateOnScroll } from '@/utils';

export const Introduction = () => {
  const root = useRef<HTMLElement | null>(null);

  return (
    <section id="services" className="mainIntroduction" ref={root}>
      <div className="containerArrowInfo itemText" id="arrowInfoTop">
        <div className="containerArrowInfo__left">
          <h4>INTRODUCTION</h4>
          <div className="containerArrowInfo__left__arrow">
            <h5>TO BEYOND VR</h5>
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
            Welcome to "Beyond VR", the next frontier of immersive experience.
            In this exceptional realm, we've fused cutting-edge technology with
            the boundaries of human imagination to bring you an adventure that
            transcends anything you've known before.
          </p>
          <p>
            Imagine worlds where every detail is so vivid it gives you
            goosebumps, digital landscapes that surpass the majesty of nature
            itself, and interactive scenarios that immerse you in stories of
            unmatched depth and complexity.
          </p>
        </div>
      </div>
      <div className="containerImage itemText">
        <div className="containerImage__image">
          <Image src="/assets/menVr.png" alt="Image vr" fill />
        </div>
        <div className="containerImage__right">
          <h4>ABOUT</h4>
          <h5>BEYOND VR</h5>
          <p>
            Beyond VR" is more than just a virtual reality platform; it's the
            culmination of years of research, passion, and innovation. From our
            earliest forays into the world of VR, we've always had a clear
            vision: to push conventional boundaries and deliver experiences that
            transcend reality.
          </p>
          <p>
            Our team, consisting of visionary engineers, talented content
            creators, and passionate designers, is committed to reimagining
            what's possible in the virtual space. With state-of-the-art
            technologies, collaborations with industry leaders, and insatiable
            curiosity, "Beyond VR" has crafted worlds that exceed imagination,
            offering an immersion so deep it blurs the line between the virtual
            and the real.
          </p>
          <p>
            Whether you're a VR enthusiast or a curious novice, "Beyond VR"
            promises to take you on a journey that will awaken your senses,
            ignite your imagination, and forever change your perception of
            reality.
          </p>
          <button id="buttonLeft">LET’S GET IN TOUCH</button>
        </div>
      </div>
      <div className="containerArrowInfo itemText">
        <div className="containerArrowInfo__left">
          <h4>WHY BUILD</h4>
          <div className="containerArrowInfo__left__arrow">
            <h5>WITH BEYOND ?</h5>
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
            Building with "Beyond VR" means embracing the future of immersive
            reality. Our platform provides unmatched tools to turn your ideas
            into tangible experiences. With cutting-edge technology and
            unwavering support, "Beyond VR" is the perfect partner for those
            looking to redefine the horizons of virtual reality.
          </p>
        </div>
      </div>

      <div className="containerCards">
        <Carousel Component={ItemCardsBuild} data={dataCarouselBuild} />
      </div>
    </section>
  );
};
