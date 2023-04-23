import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

import { ItemCircleNumbers } from '@/components/items';

import { dataCircleNumbers } from '@/static';

import { animateOnScroll } from '@/utils';

import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

export const Technologie = () => {
  const root = useRef();
  gsap.registerPlugin(ScrollTrigger);
  const q = gsap.utils.selector(root);

  const [printLogo, setPrintLogo] = useState(false);

  useEffect(() => {
    animateOnScroll(
      q('#titleCase'),
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0 },
      '-50% 70%',
      '100% 50%'
    );

    animateOnScroll(
      q('#subTitleCase'),
      { opacity: 0 },
      { opacity: 1 },
      '-50% 50%',
      '100% 30%'
    );

    animateOnScroll(
      q('.arrowRight'),
      { opacity: 0, x: -100 },
      { opacity: 1, x: 0 },
      '30% 80%',
      '70% 40%'
    );
    animateOnScroll(
      q('#textArrow'),
      { opacity: 0 },
      { opacity: 1 },
      '30% 80%',
      '70% 40%'
    );
  }, []);

  return (
    <section id="techno" className="technologie" ref={root}>
      <div className="technologie__container">
        <div className="technologie__container__wrapper">
          <Image src="/assets/backgroundContainer.png" alt="Background" fill />
        </div>
        <div className="technologie__container__absolute">
          <h5 id="titleCase">TECHNOLOGIES & HARDWARE</h5>
          <span id="subTitleCase">USED BY HYDRA VR</span>
        </div>
        <button
          onClick={() => setPrintLogo(!printLogo)}
          className="technologie__container__button"
        >
          <div
            className={`technologie__container__button__wrapper ${
              printLogo ? 'listDisplay' : 'disable'
            } `}
          >
            <div className="technologie__container__button__wrapper__img">
              <Image src="/assets/arrowBottom.svg" alt="Fleche" fill />
            </div>
          </div>
        </button>
        <div
          className={`technologie__container__list ${
            printLogo ? 'display' : ''
          } `}
        >
          <Image
            src="/assets/unreal.png"
            alt="Unreal logo"
            width={80}
            height={80}
          />
          <Image
            src="/assets/unity.png"
            alt="Unity logo"
            width={120}
            height={120}
          />
          <Image
            src="/assets/oculus.png"
            alt="Oculus logo"
            width={120}
            height={120}
          />
          <Image
            src="/assets/vive.png"
            alt="Vive logo"
            width={120}
            height={120}
          />
        </div>
      </div>
      <div className={`technologie__build ${printLogo ? 'remove' : ''} `}>
        <div className="technologie__build__left">
          <h4>HOW WE BUILD</h4>
          <div className="technologie__build__left__arrow">
            <h5>WITH HYDRA VR?</h5>
            <Image
              src="/assets/longArrowRight.svg"
              alt="Fleche"
              width={200}
              height={80}
              className="arrowRight"
            />
          </div>
        </div>
        <div className="technologie__build__right" id="textArrow">
          <p>
            Vitae sapien pellentesque habitant morbi tristique senectus et netus
            et. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit
            amet mauris commodo quis imperdiet massa tincidunt nunc. Viverra
            aliquet eget sit amet tellus. Ornare lectus sit amet est placerat
            in. Lectus magna fringilla urna porttitor rhoncus vitae.
          </p>
        </div>
      </div>

      <div className="technologie__containerCirlceNumbers">
        {dataCircleNumbers.map((item, index) => (
          <ItemCircleNumbers
            title={item.title}
            description={item.description}
            key={index}
          />
        ))}
      </div>
    </section>
  );
};
