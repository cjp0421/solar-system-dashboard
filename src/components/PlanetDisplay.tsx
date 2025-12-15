import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import { buildFactRows } from "./utils/buildFactRows";
import type { CelestialBody } from "../types/celestialBody";
import PlanetDisplaySkeleton from "./PlanetDisplaySkeleton";

type CelestialBodyFactsProps = {
    body: CelestialBody | undefined;
    isLoading: boolean;
    isError: boolean;
    factsTitle: string;
};

function PlanetDisplay({ body, isLoading, isError, factsTitle }: CelestialBodyFactsProps) {
    const rows = buildFactRows(body);

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
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                gap: 1,
                                                mb: 1
                                            }}
                                        >
                                            <Typography
                                                variant="subtitle2"
                                                sx={{
                                                    fontWeight: 900
                                                }}
                                            >
                                                {row.label.toUpperCase()}:
                                            </Typography>
                                            <Typography variant="subtitle2">{row.value}</Typography>
                                        </Box>
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