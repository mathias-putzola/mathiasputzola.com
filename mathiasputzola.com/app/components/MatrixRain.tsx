// components/MatrixRain.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";

const MatrixRain = () => {
  const [screenHeight, setScreenHeight] = React.useState(900);
  const [screenWidth, setScreenWidth] = React.useState(1440);

  React.useEffect(() => {
    setScreenHeight(window.innerHeight);
    setScreenWidth(window.innerWidth);
  }, []);

  const columnCount = Math.floor(screenWidth / 20);
  const columns = React.useMemo(
    () => Array.from({ length: columnCount }, (_, i) => i * 20),
    [columnCount]
  );

  return (
    <div className="absolute inset-0">
      {columns.map((x) =>
        Math.random() > 0.6 ? (
          <RainColumn key={x} x={x} screenHeight={screenHeight} />
        ) : null
      )}
    </div>
  );
};

export default MatrixRain;

const RainColumn = ({
  x,
  screenHeight,
}: {
  x: number;
  screenHeight: number;
}) => {
  const [characters, setCharacters] = React.useState<{ char: string }[]>([]);

  React.useEffect(() => {
    const characterCount = Math.floor(screenHeight / 25) + 50; // Ajustez selon vos préférences
    const chars = Array.from({ length: characterCount }, () => ({
      char: Math.random() > 0.7 ? getRandomChar() : "",
    }));
    setCharacters(chars);
  }, [screenHeight]);

  const characterHeight = 25;
  const totalDistance = screenHeight + characters.length * characterHeight;
  const randomDelay = Math.random() * 10;

  return (
    <motion.div
      className="absolute neon-text-matrix"
      style={{
        left: x,
        top: -totalDistance,
      }}
      animate={{
        y: totalDistance * 2,
      }}
      transition={{
        duration: 13,
        ease: "linear",
        repeat: Infinity,
        delay: randomDelay,
      }}
    >
      {characters.map((charObj, idx) =>
        charObj.char !== "" ? (
          <div
            key={idx}
            className="vert font-mono absolute"
            style={{
              top: idx * characterHeight,
              fontSize: 16,
            }}
          >
            {charObj.char}
          </div>
        ) : null
      )}
    </motion.div>
  );
};

const getRandomChar = () => {
  const chars =
    "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン";
  return chars.charAt(Math.floor(Math.random() * chars.length));
};