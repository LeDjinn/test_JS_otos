import React, { useState, useEffect } from 'react';
import { useTransition, animated, config } from 'react-spring';
import img1 from '../../images/caroussel.webp';
import img2 from '../../images/caroussel1.webp';
import img3 from '../../images/caroussel2.webp';
import img4 from '../../images/caroussel4.webp';
import './Slide.css';

const slides = [
  { id: 0, url: img1 },
  { id: 1, url: img2 },
  { id: 2, url: img3 },
  { id: 3, url: img4 },
];

const Slide = () => {
  const [index, set] = useState(0);

  const transitions = useTransition(slides[index], (item) => item.id, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.molasses,
  });

  useEffect(() => {
    const intervalId = setInterval(() => set((state) => (state + 1) % 4), 4000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return transitions.map(({ item, props, key }) => (
    <animated.div
      key={key}
      className="bg"
      style={{ ...props, backgroundImage: `url(${item.url})` }}
    />
  ));
};

export default Slide;
