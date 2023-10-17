import React, { MouseEvent, useState, useEffect, useRef } from 'react';

import Header from '@/components/Header';
import About from './About';
import Introduction from './Introduction';
import Technologie from './Technologie';
import Contact from './Contact';
import FooterView from './FooterView';

import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
  const homepageOverflowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div id="App">
        <div className="homepage">
          <Header homepageOverflowRef={homepageOverflowRef} />

          <div
            className="homepage__overflow"
            id="overflowScroll"
            ref={homepageOverflowRef}
          >
            <About />
            <Introduction />
            <Technologie />
            <Contact />
            <FooterView />
          </div>
        </div>
      </div>
    </>
  );
}
