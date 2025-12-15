import Hero from "../components/Hero";
import MarsAnimation from "../components/marsAnimation/MarsAnimation";
import PlanetDisplay from "../components/PlanetDisplay";
import { useBody } from "../queries/useBody";
import type { CelstialBodyConfig } from "../types/celestialBodyConfig";
import './skipLink.css';


const marsConfig: CelstialBodyConfig = {
    title: "Learn More",
    subtitle: "About Mars",
    ctaLabel: "Go to Mars Data",
    ctaTarget: "#mars-facts",
    ctaAnimation: <MarsAnimation />,
    factsTitle: "Facts About Mars"
};

export default function MarsPage() {
    const planetID = "mars";
    const { data, isLoading, isError, refetch } = useBody(planetID);

    return (
        <>
            <a href="#hero-cta" className="skip-link">
                Skip to main data
            </a>
            <Hero refetch={refetch} CelstialBodyConfig={marsConfig} />
            <PlanetDisplay
                body={data}
                isLoading={isLoading}
                isError={isError}
                factsTitle={marsConfig.factsTitle}
            />
        </>
    );
}