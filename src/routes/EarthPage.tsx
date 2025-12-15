import Hero from "../components/Hero";
import PlanetDisplay from "../components/PlanetDisplay";
import { useBody } from "../queries/useBody";
import type { CelstialBodyConfig } from "../types/celestialBodyConfig";
import EarthAnimation from "../components/earthAnimation/EarthAnimation";

const earthConfig: CelstialBodyConfig = {
    title: "Learn More",
    subtitle: "About Earth",
    ctaLabel: "Go to Earth Data",
    ctaTarget: "#earth-facts",
    ctaAnimation: <EarthAnimation />,
    factsTitle: "Facts About Earth"
};

export default function EarthPage() {
    const planetID = "earth";
    const { data, isLoading, isError, refetch } = useBody(planetID);

    return (
        <>
            <Hero refetch={refetch} CelstialBodyConfig={earthConfig} />
            <PlanetDisplay
                body={data}
                isLoading={isLoading}
                isError={isError}
                factsTitle={earthConfig.factsTitle}
            />
        </>
    );
}
