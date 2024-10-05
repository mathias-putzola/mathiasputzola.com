"use client";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import Image from 'next/image'; // Assurez-vous que le chemin vers Image est correct.

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
  imageSrc?: string; // Ajout d'une image optionnelle pour chaque entrée de la timeline
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-dark" style={{ paddingTop: "50px" }}
      ref={containerRef}
    >

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20 paddd">
        <h1 className="text-4xl font-bold mb-4 text-white" style={{ paddingTop: "20px" }}>
          Mon Parcours
        </h1>
        <h3 className="text-2xl font-bold mb-4 text-white">
          De <span style={{ color: "#48DD3B" }}>Développeur Fullstack</span> à <span style={{ color: "#48DD3B" }}>Consultant en Cybersécurité</span>
        </h3>

        {/* Boucle sur les données de la timeline */}
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            {/* Section sticky avec l'année et le cercle */}
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-white dark:text-white ">
                {item.title}
              </h3>
            </div>

            {/* Contenu avec texte et image */}
            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-white dark:text-white">
                {item.title}
              </h3>

              {/* Structuration du texte et de l'image avec alternance */}
              <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} md:items-center md:justify-between`}>
                {/* Texte */}
                <div className="text-white text-lg mb-4 md:w-1/2">
                  {item.content}
                </div>

                {/* Image */}
                {item.imageSrc && (
                  <div className="md:w-1/2 flex justify-center md:ml-8 md:mt-0">
                    <Image src={item.imageSrc} alt={item.title} width={400} height={300} className="rounded-lg" />
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}

        {/* Ligne de progression */}
        <div
          style={{
            height: height + "px",
            marginLeft: "50px",
            maxHeight: "3900px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-[#48DD3B] via-[#48DD3B] to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};