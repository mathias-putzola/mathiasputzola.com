import React from "react";
import { AppleCardsCarouselDemo } from "@/components/apple-carousel";
import "@/app/globals.css";

export const CyberSection = () => {
    return (
        <section id="cyber" className="padding-top-1">
            <h1 className="text-4xl md:text-5xl font-bold marge">Consultant en <span className="text-green-500">Cybersécurité</span></h1>
            <p className="marge text-xl font-bold">
                <span className="text-green-500">4,35</span> Millions de Dollars,  c'est le coût moyen d'une attaque cybercriminelle en 2022.<br/>La cybersécurité est un enjeu critique pour les entreprises. Les audits de cybersécurité, les tests d’intrusion et la mise en conformitépermettent de détecter les vulnérabilités avant qu’elles ne soient exploitées.
            </p>
            <AppleCardsCarouselDemo />
        </section>
        
    );
}

