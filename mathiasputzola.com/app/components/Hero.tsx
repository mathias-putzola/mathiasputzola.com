import React from "react";
import { FlipWords } from "./requirements/Flip-words";
import { color } from "framer-motion";

const Hero = () => {
  return (
    <section id="home" className="">
      <div>
          <div className="relative h-screen flex flex-col items-center justify-center">
            <h1 className="text-9xl font-bold text-white">
              Mathias Putzola
            </h1>
            <FlipWords className="text-2xl neon-text-matrix" words={["Étudiant en CyberSécurité"]} />          </div>
      </div>
    </section>
  );
};

export default Hero;