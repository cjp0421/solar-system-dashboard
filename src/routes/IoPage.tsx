import Hero from "../components/Hero";
import PlanetDisplay from "../components/PlanetDisplay";
import { useBody } from "../queries/useBody";
import type { CelstialBodyConfig } from "../types/celestialBodyConfig";
import './skipLink.css';
import IoAnimation from "../components/ioAnimation/IoAnimation";

const ioConfig: CelstialBodyConfig = {
    title: "Learn More",
    subtitle: "About Io",
    ctaLabel: "Go to Io Data",
    ctaTarget: "#io-facts",
    ctaAnimation: <IoAnimation />,
    factsTitle: "Facts About Io"
};

export default function IoPage() {
    const planetID = "io";
    const { data, isLoading, isError, refetch } = useBody(planetID);

    return (
        <>
            <a href="#hero-cta" className="skip-link">
                Skip to main data
            </a>
            <Hero refetch={refetch} CelstialBodyConfig={ioConfig} />
            <PlanetDisplay
                body={data}
                isLoading={isLoading}
                isError={isError}
                factsTitle={ioConfig.factsTitle}
            />
        </>
    );
}