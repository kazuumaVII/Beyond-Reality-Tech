import React, { useState, MouseEvent } from 'react';

export const BurgerNav = () => {
  // to change burger classes
  const [burger_class, setBurgerClass] = useState('burger-bar unclicked');
  const [menu_class, setMenuClass] = useState('menu hidden');
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  // toggle burger menu change
  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass('burger-bar clicked');
      setMenuClass('menu visible');
    } else {
      setBurgerClass('burger-bar unclicked');
      setMenuClass('menu hidden');
    }
    setIsMenuClicked(!isMenuClicked);
  };

  const handleClick = (event: MouseEvent<HTMLAnchorElement>, id: string) => {
    setBurgerClass('burger-bar unclicked');
    setMenuClass('menu hidden');
    setIsMenuClicked(false);

    event.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  console.log(isMenuClicked, 'isMenuClicked');

  return (
    <div className="burgerNav">
      <nav>
        <div className="burger-menu" onClick={updateMenu}>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
        </div>
      </nav>

      <div className={menu_class}>
        <nav>
          <a
            data-scroll="about"
            href="#about"
            onClick={(e) => handleClick(e, 'about')}
          >
            About
            <hr className="bottom" />
          </a>
          <a
            data-scroll="services"
            href="#services"
            onClick={(e) => handleClick(e, 'services')}
          >
            Services
            <hr className="bottom" />
          </a>
          <a
            data-scroll="techno"
            href="#techno"
            onClick={(e) => handleClick(e, 'techno')}
          >
            Technologies
            <hr className="bottom" />
          </a>
          <a
            data-scroll="contact"
            href="#contact"
            onClick={(e) => handleClick(e, 'contact')}
          >
            Contact
            <hr className="bottom" />
          </a>
        </nav>
      </div>
    </div>
  );
};
