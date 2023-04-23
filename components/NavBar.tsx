import React, { MouseEvent, useState, useEffect } from 'react';

import { useActiveSection } from '@/hooks';

import { HeaderProps } from '@/types';

export const NavBar = (props: HeaderProps) => {
  const { homepageOverflowRef } = props;

  const activeSection = useActiveSection(homepageOverflowRef);

  const handleClick = (event: MouseEvent<HTMLAnchorElement>, id: string) => {
    event.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const isActive = (id: string) => {
    if (id === 'about' && !activeSection) {
      return 'active';
    } else {
      return id === activeSection ? 'active' : '';
    }
  };

  return (
    <div className="navBar">
      <nav>
        <a
          className={`nav ${isActive('about')}`}
          data-scroll="about"
          href="#about"
          onClick={(e) => handleClick(e, 'about')}
        >
          About
          <hr className="top" />
          <hr className="bottom" />
        </a>
        <a
          className={`nav ${isActive('services')}`}
          data-scroll="services"
          href="#services"
          onClick={(e) => handleClick(e, 'services')}
        >
          Services
          <hr className="top" />
          <hr className="bottom" />
        </a>
        <a
          className={`nav ${isActive('techno')}`}
          data-scroll="techno"
          href="#techno"
          onClick={(e) => handleClick(e, 'techno')}
        >
          Technologies
          <hr className="top" />
          <hr className="bottom" />
        </a>
        <a
          className={`nav ${isActive('contact')}`}
          data-scroll="contact"
          href="#contact"
          onClick={(e) => handleClick(e, 'contact')}
        >
          Contact
          <hr className="top" />
          <hr className="bottom" />
        </a>
      </nav>
    </div>
  );
};
