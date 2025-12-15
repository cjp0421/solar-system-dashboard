import Hero from "../components/Hero";
import MercuryAnimation from "../components/mercuryAnimation/MercuryAnimation";
import PlanetDisplay from "../components/PlanetDisplay";
import { useBody } from "../queries/useBody";
import type { CelstialBodyConfig } from "../types/celestialBodyConfig";
import './skipLink.css';


const mercuryConfig: CelstialBodyConfig = {
    title: "Learn More",
    subtitle: "About Mercury",
    ctaLabel: "Go to Mercury Data",
    ctaTarget: "#mercury-facts",
    ctaAnimation: <MercuryAnimation />,
    factsTitle: "Facts About Mercury"
};

export default function MercuryPage() {
    const planetID = "mercury";
    const { data, isLoading, isError, refetch } = useBody(planetID);

    return (
        <>
            <a href="#hero-cta" className="skip-link">
                Skip to main data
            </a>
            <Hero refetch={refetch} CelstialBodyConfig={mercuryConfig} />
            <PlanetDisplay
                body={data}
                isLoading={isLoading}
                isError={isError}
                factsTitle={mercuryConfig.factsTitle}
            />
        </>
    );
}