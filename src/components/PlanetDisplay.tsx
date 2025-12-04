import { Card, CardContent, Grid, Typography } from "@mui/material";
import { buildMoonFactRows } from "./utils/buildFactRows";
import type { CelestialBody } from "../types/celestialBody";
import PlanetDisplaySkeleton from "./PlanetDisplaySkeleton";

type MoonFactsProps = {
    body: CelestialBody | undefined;
    isLoading: boolean;
    isError: boolean;
};

function PlanetDisplay({ body, isLoading, isError }: MoonFactsProps) {
    const rows = buildMoonFactRows(body);

    return (
        <>
            <section id="moon-facts">
                {isLoading ? (
                    <>
                        {(body || isLoading) ? (
                            <Typography variant="h3" sx={{ fontSize: "1.5rem", p: 2 }}>
                                Facts About Earth's Moon
                            </Typography>
                        ) : null}
                        <PlanetDisplaySkeleton />
                    </>
                ) : isError ? (
                    <Typography>
                        Unable to load Moon data. Please try again later.
                    </Typography>
                ) : (
                    <>
                        {body ? (
                            <Typography variant="h3" sx={{ fontSize: "1.5rem", p: 2 }}>
                                Facts About Earth's Moon
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