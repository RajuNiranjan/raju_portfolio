import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const TextAnimation = ({ text }) => {
  return (
    <section>
      <FlipLink>{text}</FlipLink>
    </section>
  );
};

const DURATION = 0.5;
const STAGGER = 0.025;

const FlipLink = ({ children }) => {
  const [animationState, setAnimationState] = useState("initial");

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationState("hovered");
      setTimeout(() => {
        setAnimationState("initial");
      }, DURATION * 1000 + STAGGER * children.length * 1000);
    }, 5000);

    return () => clearInterval(interval);
  }, [children]);

  return (
    <motion.a
      initial="initial"
      animate={animationState}
      className="relative block overflow-hidden whitespace-nowrap font-black  text-3xl p-0 sm:text-7xl md:text-5xl lg:text-5xl"
      style={{
        lineHeight: 0.75,
      }}>
      <div>
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: 0,
              },
              hovered: {
                y: "-100%",
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}>
            {l}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0">
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: "100%",
              },
              hovered: {
                y: 0,
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}>
            {l}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
};

export default TextAnimation;
