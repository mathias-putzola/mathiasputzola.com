import { Navbar } from "./components/Navbar";
import Hero from "./components/Hero";
// import FirstSection from "./components/FirstSection";
import { Timeline } from "./components/Timeline";
import { timelineData } from "./components/requirements/Timeline-Data";


export default function Home() {
    return (
        <main>
            <Navbar navItems={[
                { name: "Accueil ", link: "#home" },
                { name: "Cybersécurité", link: "#cyber" },
                { name: "Développeur Web", link: "#dev" },
                { name: "Services", link: "#services" },
                { name: "Contact ", link: "#contact" },
            ]} />
            <Hero />
            {/* <FirstSection /> */}
            <Timeline data={timelineData} />

        </main>
    );
}
