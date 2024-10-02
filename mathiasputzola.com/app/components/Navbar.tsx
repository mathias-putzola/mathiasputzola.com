"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');

// Configuration de l'observateur
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      
      // Enlève l'ancienne classe active
      navLinks.forEach(link => {
        link.classList.remove('active-link');
      });
      
      // Ajoute la classe active au lien correspondant à la section visible
      const activeLink = document.querySelector(`nav a[href="#${id}"]`);
      if (activeLink) {
        activeLink.classList.add('active-link');
      }
    }
  });
}, {
  threshold: 0.5 // Le seuil à 50% (la section doit être à moitié visible pour être considérée comme active)
});

// Associe l'observateur à chaque section
sections.forEach(section => {
  observer.observe(section);
});

export const Navbar = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 1, y: 0 }} // Commence en position 0
        animate={{
          y: 0, // Reste à la position 0
          opacity: 1, // Reste complètement opaque
        }}
        transition={{
          duration: 0.5,
        }}
        className={cn(
          "flex max-w-fit fixed top-10 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-8 py-2 items-center justify-center space-x-4 pr-8",
          className
        )}
      >
        {navItems.map((navItem, idx) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              "relative dark:text-gray items-center flex space-x-1 text-white dark:hover:text-neutral-300 hover:text-gray"
            )}
          >
            <span className="block sm:hidden">{navItem.icon}</span>
            <span className="hidden sm:block text-sm">{navItem.name}</span>
          </Link>
        ))}
        
      </motion.div>
    </AnimatePresence>
  );
};