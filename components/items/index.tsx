import React, { useState, useEffect } from 'react';
import Image from 'next/image';

import { ItemInfoProps } from '@/types';

import { useMediaQuery } from '@/hooks';

export const ItemCardsBuild: React.FC<ItemInfoProps> = (props) => {
  const { title, description, pathImg } = props;

  return (
    <div className="mainCardsInfo">
      <div className="mainCardsInfo__img">
        {pathImg && <Image src={pathImg} alt="Image vr" fill />}
      </div>
      <h5>{title}</h5>
      <hr />
      <p>{description}</p>
      <button>TRY IT NOW</button>
    </div>
  );
};

export const ItemAboutContacts: React.FC<ItemInfoProps> = (props) => {
  const { title, description, pathImg } = props;

  const activeCarousel = useMediaQuery('(max-width: 775px)');

  return (
    <div className={`mainItemInfo ${activeCarousel ? 'carouselStyle' : ''} `}>
      <div className="mainItemInfo__img">
        {pathImg && <Image src={pathImg} alt="Icon" fill />}
      </div>
      <div className="mainItemInfo__text">
        <h5>{title}</h5>
        <p>{description}</p>
      </div>
    </div>
  );
};

export const ItemCircleNumbers: React.FC<ItemInfoProps> = (props) => {
  const { title, description, index } = props;

  return (
    <div className="circleNumber">
      <div className="circleNumber__circle">
        <div className="circleNumber__circle__wrapper">
          <h5>{title}</h5>
        </div>
      </div>
      <div className="circleNumber__info">
        <Image src="./assets/arrow.svg" alt="Fleche" width={23} height={23} />
        <p>{description}</p>
      </div>
    </div>
  );
};
