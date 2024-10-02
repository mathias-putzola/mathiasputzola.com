import { color } from "framer-motion";
import Image from 'next/image'; // Assure-toi d'importer le composant Image de Next.js
import img1 from './img/img1.webp';
import img2 from './img/img2.png';
import img3 from './img/img3.png';
import img4 from './img/img4.png';
import img5 from './img/img5.png';

// timelineData.tsx
export const timelineData = [
    {title: "Depuis Toujours",
      content: (
        <>
          <h1 className="font-bold text-2xl" style={{ color: "#48DD3B" }}> Tout un univers passionnant</h1>
          <Image src={img1} alt="Mon univers" width={500} height={300} align-center />
          <p className="font-bold text-white">
            Où chaque idée peut prendre vie, où l’innovation ne connaît pas de limites. Une magie moderne, où la créativité et la logique résolvent des problèmes complexes. Chaque projet est une aventure, une occasion d’inventer, de transformer, de construire un univers imaginé.
          </p>
        </>
      ),
    },
    {title: "2018",
      content: (
        <>
          <h3 className="font-bold text-2xl" style={{ color: "#48DD3B" }}>Intégration à l'école EPITECH</h3>
          <p className="font-bold text-white">
          J'ai rejoint l'école EPITECH où j'ai acquis une solide formation en
          programmation. J'y ai appris des langages comme le C, C++, HTML, CSS,
          React, Python, et Javascript, ce qui a renforcé ma passion pour la
          création de solutions logicielles.
          </p>
          <Image src={img2} alt="Mon univers" width={500} height={300} align-center />

        </>
      )
    },
    {
      title: "2020",
      content: (
        <>
         <h3 className="font-bold text-2xl" style={{ color: "#48DD3B" }}>Découverte de la cybersécurité</h3>
        <p className="font-bold text-white">
          Pendant un stage chez SCOR, au sein du pôle IT Management & Control de
          sécurité, j'ai découvert le domaine de la cybersécurité, et j'ai réalisé
          que c'était une véritable vocation. Ce stage a été une expérience clé
          pour développer mes compétences en gestion de la sécurité informatique.
        </p>
        <Image src={img3} alt="Mon univers" width={500} height={300} align-center />

        </>
      ),
    },
    {
      title: "2023",
      content: (
        <>
         <h3 className="font-bold text-2xl" style={{ color: "#48DD3B" }}>Intégration de l'école La Plateforme</h3>
        <p className="font-bold text-white">
          Poursuivant ma passion pour la cybersécurité, j'ai intégré une nouvelle
          école dans le but d'obtenir un diplôme d'Administrateur d'infrastructures
          sécurisées. Cela m'a permis d'approfondir mes connaissances en matière
          de sécurité des systèmes et des réseaux.
        </p>
        <Image src={img4} alt="Mon univers" width={500} height={300} align-center />
        </>
      ),
    },
    {
      title: "Aujourd'hui",
      content: (
        <>
          <h3 className="font-bold text-2xl" style={{ color: "#48DD3B" }}>Je me propose désormais mes services</h3>
        <p className="font-bold text-white">
          Aujourd'hui, je propose mes services en conception et développement de
          sites web, mais aussi en audits de cybersécurité pour assurer la
          protection des infrastructures numériques. Mon objectif est de combiner
          mes compétences pour aider les entreprises à se développer en toute
          sécurité.
        </p>
        <Image src={img5} alt="Mon univers" width={500} height={300} align-center />

        </>
      ),
    },
  ];