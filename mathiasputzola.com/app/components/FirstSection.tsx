import React from "react";
import { cn } from "@/lib/utils";
import { FlipWords } from "./requirements/Flip-words";
import { Timeline } from "../components/Timeline";
import { timelineData } from "../components/requirements/Timeline-Data";


    const ConsultantSection = ({ className }: { className?: string }) => {
    return (
        <section className="bg-black px-16">
            <h1 className="text-4xl font-bold mb-4 text-white">
                Mon Parcours
            </h1>
            <h3 className="text-2xl font-bold mb-4 text-white">
                De <span style={{ color: "#48DD3B" }}>Développeur Fullstack</span> À <span style={{ color: "#48DD3B" }}>Consultant en Cybersécurité</span>
            </h3>
            <Timeline data={timelineData} />
        </section>
    );
    };

    export default ConsultantSection;