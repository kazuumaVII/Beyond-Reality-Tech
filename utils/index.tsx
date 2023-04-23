import React, { useState, useEffect, useRef } from 'react';

import { gsap } from 'gsap/dist/gsap';

export const animateOnScroll = (element, fromProps, toProps, start, end) => {
  gsap.fromTo(
    element,
    { ...fromProps },
    {
      ...toProps,
      scrollTrigger: {
        trigger: element,
        start: start,
        end: end,
        scroller: '#overflowScroll',
        scrub: true
        // markers: true
      }
    }
  );
};
