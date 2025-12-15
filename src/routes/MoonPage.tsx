import Hero from "../components/Hero";
import PlanetDisplay from "../components/PlanetDisplay";
import { useBody } from "../queries/useBody";
import MoonAnimation from "../components/moonAnimation/MoonAnimation";
import type { CelstialBodyConfig } from "../types/celestialBodyConfig";
import './skipLink.css';

const moonConfig: CelstialBodyConfig = {
    title: "Learn More",
    subtitle: "About Earth's Moon",
    ctaLabel: "Go to Moon Data",
    ctaTarget: "#moon-facts",
    ctaAnimation: <MoonAnimation />,
    factsTitle: "Facts About Earth's Moon"
};

export default function MoonPage() {
    const planetID = "moon";
    const { data, isLoading, isError, refetch } = useBody(planetID);

    return (
        <>
            <a href="#hero-cta" className="skip-link">
                Skip to main data
            </a>
            <Hero refetch={refetch} CelstialBodyConfig={moonConfig} />
            <PlanetDisplay
                body={data}
                isLoading={isLoading}
                isError={isError}
                factsTitle={moonConfig.factsTitle}
            />
        </>
    );
}
