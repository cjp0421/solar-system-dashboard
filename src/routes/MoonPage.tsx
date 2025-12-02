import Hero from "../components/Hero";
import PlanetDisplay from "../components/PlanetDisplay";
import { useBody } from "../queries/useBody";

export default function MoonPage() {
    const planetID = "moon";
    const { data, isLoading, isError, refetch } = useBody(planetID);

    return (
        <>
            <Hero refetch={refetch} />
            <PlanetDisplay
                body={data}
                isLoading={isLoading}
                isError={isError}
            />
        </>
    );
}
