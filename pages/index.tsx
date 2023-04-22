import React, { MouseEvent, useState, useEffect, useRef } from 'react';

import Header from '@/components/Header';
import { About } from './About';
import { Introduction } from './Introduction';
import { Technologie } from './Technologie';
import { Contact } from './Contact';
import { FooterView } from './FooterView';

export default function Home() {
  const homepageOverflowRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <div id="App">
        <div className="homepage">
          <Header homepageOverflowRef={homepageOverflowRef} />
          <div className="homepage__overflow" ref={homepageOverflowRef}>
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
