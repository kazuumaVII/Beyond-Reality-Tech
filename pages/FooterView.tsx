import React from 'react';

import Image from 'next/image';

import { dataSocialMedia } from '@/static';

export const FooterView = () => {
  return (
    <div className="footer">
      <div className="footer__top">
        <div className="footer__top__imgLogo">
          <div className="footer__top__imgLogo__img">
            <Image src="/assets/logo2.png" alt="logo" fill />
          </div>
        </div>

        <div className="footer__top__separator">
          <Image src="/assets/separatorVertical.png" alt="logo" fill />
        </div>

        <div className="footer__top__text">
          <h5>F.A.Q</h5>
          <h5>SITEMAP</h5>
          <h5>CONDITIONS</h5>
          <h5>LICENSES</h5>
        </div>
        <div className="footer__top__separator">
          <Image src="/assets/separatorVertical.png" alt="logo" fill />
        </div>
        <div className="footer__top__media">
          <h5>SOCIALIZE WITH BEYOND</h5>
          <div className="footer__top__media__web">
            {dataSocialMedia.map((item) => (
              <div className="footer__top__media__web__item">
                <Image src={item.pathImg} alt="logo" fill />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="footer__separator">
        <Image src="/assets/lineContact.svg" alt="logo" fill />
      </div>
      <div className="footer__bottom">
        <div className="footer__bottom__text">
          <h5>2023</h5>
          <h5>©</h5>
          <h5>-</h5>
          <h5>BEYOND FAKE LANDING PAGE</h5>
          <h5>-</h5>
          <h5>NO COMMERCIAL PURPOSE</h5>
        </div>
      </div>
    </div>
  );
};
