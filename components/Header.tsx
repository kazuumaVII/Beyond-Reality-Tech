import React, { MouseEvent, useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from './Button';

import { useMediaQuery } from '@/hooks';
import { BurgerNav } from './BurgerNav';
import { NavBar } from './NavBar';

import { HeaderProps } from '@/types';

export default function Header(props: HeaderProps) {
  const { homepageOverflowRef } = props;

  const activeBurger = useMediaQuery('(max-width: 1100px)');

  return (
    <div className="header">
      <div className="header__logo">
        <div className="header__logo__img">
          <div className="header__logo__img__wrapper">
            <Image src="/assets/logo2.png" alt="logo" fill />
          </div>
        </div>
        <div className="header__logo__text">
          <h1>BEYOND</h1>
        </div>
      </div>

      {activeBurger ? (
        <BurgerNav />
      ) : (
        <>
          <NavBar homepageOverflowRef={homepageOverflowRef} />

          <div className="header__button">
            <button className="header__button__try">JOIN BEYOND</button>
          </div>
        </>
      )}
    </div>
  );
}
