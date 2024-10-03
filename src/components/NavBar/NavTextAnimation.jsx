import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

const NavTextAnimation = () => {
  return (
    <div>
      <EncryptText />
    </div>
  );
};

const TARGET_TEXT = "NIRANJAN RAJU";
const CYCLES_PER_LETTER = 2;
const SHUFFLE_TIME = 50;
const RELOAD_INTERVAL = 5000;
const CHARS = "!@#$%^&*():{};|,.<>/?";

const AnimatedText = ({ text }) => {
  const intervalRef = useRef(null);
  const [scrambledText, setScrambledText] = useState(text);

  const scramble = () => {
    let pos = 0;

    intervalRef.current = setInterval(() => {
      const scrambled = text
        .split("")
        .map((char, index) => {
          if (pos / CYCLES_PER_LETTER > index) {
            return char;
          }

          const randomCharIndex = Math.floor(Math.random() * CHARS.length);
          const randomChar = CHARS[randomCharIndex];

          return randomChar;
        })
        .join("");

      setScrambledText(scrambled);
      pos++;

      if (pos >= text.length * CYCLES_PER_LETTER) {
        stopScramble();
      }
    }, SHUFFLE_TIME);
  };

  const stopScramble = () => {
    clearInterval(intervalRef.current);
    setScrambledText(text);
  };

  useEffect(() => {
    scramble();
    const reloadInterval = setInterval(scramble, RELOAD_INTERVAL);
    return () => {
      clearInterval(intervalRef.current);
      clearInterval(reloadInterval);
    };
  }, []);

  return (
    <span className="text-[13px] sm:text-2xl text-yellow-500 font-bold tracking-widest">
      {scrambledText}
    </span>
  );
};

const EncryptText = () => {
  return (
    <motion.button whileHover={{ scale: 1.025 }} whileTap={{ scale: 0.975 }}>
      <div className="relative z-10 flex items-center gap-2">
        <AnimatedText text={TARGET_TEXT} /> {/* Animated text component */}
      </div>
      <motion.span
        initial={{ y: "100%" }}
        animate={{ y: "-100%" }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 1,
          ease: "linear",
        }}
      />
    </motion.button>
  );
};

export default NavTextAnimation;
