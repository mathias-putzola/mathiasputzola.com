import Hero from "@/components/Hero";
import ProfileSection from "@/components/ProfileSection";
import { FloatingNav } from "@/components/UI/floating-navbar";
import { CyberSection } from "@/components/CyberSection";

export default function Home() {
    return (
        <main>
            <FloatingNav navItems={[
                    { name: "Accueil ", link: "#home" },
                    { name: "Cybersécurité", link: "#cyber" },
                    { name: "Développeur Web", link: "#dev" },
                    { name: "Services", link: "#services" },
                    { name: "Contact ", link: "#contact" },
                ]} />
            <Hero />
            <CyberSection />
            <ProfileSection />
        </main>
    );
}
