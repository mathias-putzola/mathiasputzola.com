import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from 'next/image';
import info from './requirements/img/info.png'; // Assure-toi que le chemin vers ton image est correct

const Presentation = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div 
      className="w-4/5 mx-auto flex flex-col md:flex-row justify-between items-center p-8 padd"
      style={{ 
        minHeight: "85vh", 
        backgroundColor: 'rgba(0, 0, 0, 1)', // Fond noir opaque
        borderColor: '#48DD3B', 
        borderWidth: '2px', 
        borderRadius: '40px', 
        zIndex: 10,  // Assurez que cette div soit bien visible au-dessus des autres éléments
        position: 'relative'
      }}
    >
      {/* Texte à gauche */}
      <div className="text-white font-semibold p-8 w-full md:w-1/2" data-aos="fade-right">
        <h1 className="text-5xl font-bold mb-4">Salut! 👋</h1>
        <h2 className="text-4xl font-bold">
          <br />Je suis <span className="relative">
            <span className="relative z-10">Mathias Putzola.</span>
            {/* <span style={{backgroundColor:"#48DD3B", bottom:"-10px"}}className="absolute left-0 right-0 h-2 w-full z-0"></span> */}
          </span>
        </h2>
        <p className="mt-4 text-xl leading-relaxed">
        <br />Basé à Marseille, je suis étudiant en cybersécurité. Ayant déjà eu une
          formation de développeur, je suis passionné par le développement
          d'applications web, mais aussi par les tests d'intrusion. Venez
          découvrir mes compétences et mon univers.
        </p>
      </div>

      {/* Image et bouton à droite */}
      <div className="text-white p-8 w-full md:w-1/2 mt-8 md:mt-0 md:ml-8" data-aos="fade-left">
        {/* Image avec effet néon */}
        <Image
          src={info}
          alt="Logo de Mathias Putzola"
          className="neon-text-matrix mb-8"
          style={{ maxWidth: "300px" }} // Ajuste la taille de l'image selon ton besoin
        />

        {/* Bouton pour télécharger le CV */}
        <a
          href="./requirements/img/CV.pdf"
          download
          className="download-button bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition duration-300 inline-flex items-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v6h16v-6M4 16l8-8m0 0l8 8m-8-8v10" />
          </svg>
          Télécharger un CV
        </a>
      </div>
    </div>
  );
};

export default Presentation;