import { Card, CardContent, Grid, Typography } from "@mui/material";
import { buildMoonFactRows } from "./utils/buildFactRows";
import type { CelestialBody } from "../types/celestialBody";
import PlanetDisplaySkeleton from "./PlanetDisplaySkeleton";

type CelestialBodyFactsProps = {
    body: CelestialBody | undefined;
    isLoading: boolean;
    isError: boolean;
    factsTitle: string;
};

function PlanetDisplay({ body, isLoading, isError, factsTitle }: CelestialBodyFactsProps) {
    const rows = buildMoonFactRows(body);

    return (
        <>
            <section id={`${body?.englishName?.toLowerCase()}-facts`}>
                {isLoading ? (
                    <>
                        {(body || isLoading) ? (
                            <Typography variant="h3" sx={{ fontSize: "1.5rem", p: 2 }}>
                                {factsTitle}
                            </Typography>
                        ) : null}
                        <PlanetDisplaySkeleton />
                    </>
                ) : isError ? (
                    <Typography>
                        Unable to load data. Please try again later.
                    </Typography>
                ) : (
                    <>
                        {body ? (
                            <Typography variant="h3" sx={{ fontSize: "1.5rem", p: 2 }}>
                                {factsTitle}
                            </Typography>
                        ) : null}

                        <Grid component="section" container>
                            {rows.map((row) => (
                                <Card key={row.label} sx={{ width: "50%" }}>
                                    <CardContent>
                                        <Typography variant="subtitle2">{row.label}:</Typography>
                                        <Typography variant="subtitle2">{row.value}</Typography>
                                        <Typography variant="subtitle2">{row.explanation}</Typography>
                                    </CardContent>
                                </Card>
                            ))}
                        </Grid>
                    </>
                )}
            </section>

        </ >
    )
}

export default PlanetDisplay;