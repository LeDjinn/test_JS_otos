import React, { useRef, useState, useEffect, useCallback } from "react";
import { useTransition, animated } from "react-spring";
import "./SpecialTitle.css"

function SpecialTitle() {
  const ref = useRef([]);
  const [items, set] = useState([]);
  const transitions = useTransition(items, null, {
    from: {
      opacity: 0,
      height: 0,
      innerHeight: 0,
      transform: "perspective(600px) rotateX(0deg)",
      color: "#6226a9",
    },
    enter: [
      { opacity: 1, height: 80, innerHeight: 80 },
      { transform: "perspective(600px) rotateX(180deg)", color: "black" },
      { transform: "perspective(600px) rotateX(0deg)" },
    ],
    leave: [
      { color: "#77a9ec" },
      { innerHeight: 0 },
      { opacity: 0, height: 0 },
    ],
    update: { color: "#28b4d7" },
  });

  const reset = useCallback(() => {
    ref.current.map(clearTimeout);
    ref.current = [];
    set([]);
    ref.current.push(setTimeout(() => set(["Site web"]), 2000));
  }, []);

  useEffect(() => void reset(), []);

  return (
    <div>
      {transitions.map(({ item, props: { innerHeight, ...rest }, key }) => (
        <animated.div
          className="transitions-item"
          key={key}
          style={rest}
          onClick={reset}
        >
          <animated.div style={{ overflow: "hidden", height: innerHeight }}>
            {item}
          </animated.div>
        </animated.div>
      ))}
    </div>
  );
}
export default SpecialTitle;
