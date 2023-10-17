import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <section id="about" className="mainAbout">
      <div className="topContainer">
        <div className="topContainer__info" id="left">
          <div className="topContainer__info__text">
            <h3 id="titleAbout">
              <span className="firstLinear">Dive</span> Into The Depths Of{' '}
              <span className="secondLinear">Virtual Reality</span>
            </h3>
            <p>
              Step into a universe where the tangible and intangible merge,
              where every step takes you to new worlds, and where the magic of
              virtual reality redefines your perception of existence.
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

export default About;
