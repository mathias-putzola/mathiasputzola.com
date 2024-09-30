import React from "react";
import { BackgroundLines } from "./UI/background-lines";
import { FlipWords } from "./UI/flip-words";

const Hero = () => {
    return (
        <section id="home" className=''>
            <div>
                <BackgroundLines>
                    <div className="-top-20 h-screen flex flex-col items-center justify-center">
                        <h1 className="-top-100 text-7xl font-bold text-white">Mathias Putzola</h1>
                        <FlipWords words={["Développeur Full Stack & Consultant en Cyber Sécurité"]} />
                        {/* <FlipWords words={["Consultant en Cyber Sécurité"]} /> */}
                    </div>
                </BackgroundLines>

            </div>
        </section>
    )
}

export default Hero;