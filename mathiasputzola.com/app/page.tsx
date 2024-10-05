// page.tsx
"use client";

import React from "react";
import dynamic from "next/dynamic";
import Hero from "./components/Hero"
import { Timeline } from "./components/Timeline";
import { timelineData } from "./components/requirements/Timeline-Data";
import Presentation from "./components/Presentation";

const MatrixRain = dynamic(() => import("./components/MatrixRain"), {
    ssr: false,
});

const Page = () => {
    return (
        <div className="relative">
            {/* Effet de pluie en arrière-plan */}
            <MatrixRain />
            <Hero />
            <Presentation />
            <Timeline data={timelineData.map(item => ({...item, imageSrc: item.imageSrc.src}))} />
          {/* Contenu principal */}
        </div>
  );
};

export default Page;
