import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

import { ItemCircleNumbers } from '@/components/items';

import { dataCircleNumbers } from '@/static';

const Technologie = () => {
  const root = useRef<HTMLElement | null>(null);

  const [printLogo, setPrintLogo] = useState(false);

  return (
    <section id="techno" className="technologie" ref={root}>
      <div className="technologie__container">
        <div className="technologie__container__wrapper">
          <Image src="./assets/backgroundContainer.png" alt="Background" fill />
        </div>
        <div className="technologie__container__absolute">
          <h5 id="titleCase">TECHNOLOGIES & HARDWARE</h5>
          <span id="subTitleCase">USED BY BEYOND VR</span>
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
              <Image src="./assets/arrowBottom.svg" alt="Fleche" fill />
            </div>
          </div>
        </button>
        <div
          className={`technologie__container__list ${
            printLogo ? 'display' : ''
          } `}
        >
          <Image
            src="./assets/unreal.png"
            alt="Unreal logo"
            width={80}
            height={80}
          />
          <Image
            src="./assets/unity.png"
            alt="Unity logo"
            width={120}
            height={120}
          />
          <Image
            src="./assets/oculus.png"
            alt="Oculus logo"
            width={120}
            height={120}
          />
          <Image
            src="./assets/vive.png"
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
            <h5>WITH BEYOND VR?</h5>
            <Image
              src="./assets/longArrowRight.svg"
              alt="Fleche"
              width={200}
              height={80}
              className="arrowRight"
            />
          </div>
        </div>
        <div className="technologie__build__right" id="textArrow">
          <p>
            At "Beyond VR", our building process blends artistic passion with
            innovative technology. Collaborating closely, our teams turn bold
            visions into immersive realities using state-of-the-art tools. Every
            detail is user-optimized, ensuring seamless immersion. With "Beyond
            VR", we're offering not just an experience, but a journey into the
            uncharted.
          </p>
        </div>
      </div>

      <div className="technologie__containerCirlceNumbers">
        {dataCircleNumbers.map((item, index) => (
          <ItemCircleNumbers
            title={item.title}
            description={item.description}
            index={index}
            key={index}
          />
        ))}
      </div>
    </section>
  );
};

export default Technologie;
