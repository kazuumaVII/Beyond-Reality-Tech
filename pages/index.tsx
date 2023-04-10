import Head from 'next/head';
import Image from 'next/image';

import Header from '@/components/Header';
import { About } from './About';
import { Introduction } from './Introduction';
import { Technologie } from './Technologie';
import { Contact } from './Contact';

export default function Home() {
  return (
    <>
      <div id="App">
        <div className="homepage">
          <Header />
          <div className="homepage__overflow">
            <About />
            <Introduction />
            <Technologie />
            <Contact />
          </div>
        </div>
      </div>
    </>
  );
}
