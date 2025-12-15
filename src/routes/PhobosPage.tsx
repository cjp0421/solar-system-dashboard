import Hero from "../components/Hero";
import PlanetDisplay from "../components/PlanetDisplay";
import { useBody } from "../queries/useBody";
import type { CelstialBodyConfig } from "../types/celestialBodyConfig";
import './skipLink.css';
import PhobosAnimation from "../components/phobosAnimation/PhobosAnimation";

const phobosConfig: CelstialBodyConfig = {
    title: "Learn More",
    subtitle: "About Phobos",
    ctaLabel: "Go to Phobos Data",
    ctaTarget: "#phobos-facts",
    ctaAnimation: <PhobosAnimation />,
    factsTitle: "Facts About Phobos"
};

export default function PhobosPage() {
    const planetID = "phobos";
    const { data, isLoading, isError, refetch } = useBody(planetID);

    return (
        <>
            <a href="#hero-cta" className="skip-link">
                Skip to main data
            </a>
            <Hero refetch={refetch} CelstialBodyConfig={phobosConfig} />
            <PlanetDisplay
                body={data}
                isLoading={isLoading}
                isError={isError}
                factsTitle={phobosConfig.factsTitle}
            />
        </>
    );
}