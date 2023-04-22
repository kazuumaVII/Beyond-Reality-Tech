import React, { MouseEvent, useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from './Button';

import { useMediaQuery } from '@/hooks';
import { BurgerNav } from './BurgerNav';
import { NavBar } from './NavBar';

export default function Header(props) {
  const { homepageOverflowRef } = props;

  const activeBurger = useMediaQuery('(max-width: 830px)');

  return (
    <div className="header">
      <div className="header__logo">
        <div className="header__logo__img">
          <Image src="/assets/logoHydra.png" alt="logo" fill />
        </div>
        <div className="header__logo__text">
          <Image src="/assets/textHydra.png" alt="logo" fill />
        </div>
      </div>

      {activeBurger ? (
        <BurgerNav />
      ) : (
        <>
          <NavBar homepageOverflowRef={homepageOverflowRef} />

          <div className="header__button">
            <button className="header__button__try">Essayer</button>
          </div>
        </>
      )}
    </div>
  );
}
