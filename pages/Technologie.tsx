import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

import { ItemCircleNumbers } from '@/components/items';

export const Technologie = () => {
  const [printLogo, setPrintLogo] = useState(false);

  return (
    <div className="technologie">
      <div className="technologie__container">
        <div className="technologie__container__wrapper">
          <Image src="/assets/backgroundContainer.png" alt="Background" fill />
        </div>
        <div className="technologie__container__absolute">
          <h5>TECHNOLOGIES & HARDWARE</h5>
          <span>USED BY HYDRA VR</span>
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
            <Image
              src="/assets/arrowBottom.svg"
              alt="Fleche"
              width={23}
              height={23}
            />
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
          <h4>WHY BUILD</h4>
          <div className="technologie__build__left__arrow">
            <h5>WITH HYDRA ?</h5>
            <Image
              src="/assets/longArrowRight.svg"
              alt="Fleche"
              width={200}
              height={80}
            />
          </div>
        </div>
        <div className="technologie__build__right">
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
        <ItemCircleNumbers
          title={'01'}
          description={'3D Conception & Design'}
        />
        <ItemCircleNumbers title={'02'} description={'Interaction Design'} />
        <ItemCircleNumbers title={'03'} description={'VR WorldUser Testing'} />
        <ItemCircleNumbers title={'04'} description={'Hydra VR Deploy'} />
      </div>
    </div>
  );
};
