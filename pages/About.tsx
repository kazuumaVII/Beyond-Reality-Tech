import React from 'react';
import Image from 'next/image';

export const About = () => {
  return (
    <section id="about" className="mainAbout">
      <div className="topContainer">
        <div className="topContainer__info">
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
        <div className="topContainer__image">
          <Image src="/assets/girlVr.png" alt="Image vr" fill />
        </div>
      </div>
    </section>
  );
};
