import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export const animateOnScroll = (
  element,
  fromProps,
  toProps,
  options,
  start,
  end
) => {
  gsap.fromTo(
    element,
    { ...fromProps },
    {
      ...toProps,
      ...options,
      scrollTrigger: {
        trigger: element,
        start: start,
        end: end,
        scroller: '#overflowScroll',
        scrub: true,
        markers: true
      }
    }
  );
};

export const About = () => {
  const root = useRef();
  const q = gsap.utils.selector(root);

  // useEffect(() => {
  //   animateOnScroll(
  //     q('.topContainer__info'),
  //     { x: -1000, opacity: 1 },
  //     { x: 0, opacity: 1 },
  //     { duration: 4 },
  //     '0% 90%',
  //     '30% 50%'
  //   );
  // }, []);

  return (
    <section id="about" className="mainAbout" ref={root}>
      <div className="topContainer">
        <div className="topContainer__info" id="left">
          <div className="topContainer__info__text">
            <h3>
              <span className="firstLinear">Dive</span> Into The Depths Of{' '}
              <span className="secondLinear">Virtual Reality</span>
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore nisl tincidunt eget.
              Lectus mauris eros in vitae .
            </p>
          </div>
          <div className="topContainer__info__button">
            <button>BUID YOUR WORLD</button>
            <div className="topContainer__info__button__img">
              <Image src="/assets/arrowRight.svg" alt="Fleche" fill />
            </div>
          </div>
        </div>
        <div className="topContainer__image" id="right">
          <Image src="/assets/girlVr.png" alt="Image vr" fill />
        </div>
      </div>
    </section>
  );
};
