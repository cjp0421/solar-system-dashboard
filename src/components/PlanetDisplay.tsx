import { Card, CardContent, Grid, Skeleton, Stack, Typography } from "@mui/material";
import { buildMoonFactRows } from "./utils/buildFactRows";
import type { CelestialBody } from "../types/celestialBody";

type MoonFactsProps = {
    body: CelestialBody | undefined;
    isLoading: boolean;
    isError: boolean;
};

function PlanetDisplay({ body, isLoading, isError }: MoonFactsProps) {
    const rows = buildMoonFactRows(body);

    return (
        <section id="moon-facts">
            <Typography variant="h3" sx={{ fontSize: '1.5rem', p: 2 }}>
                Facts About Earth's Moon
            </Typography>

            {isLoading ? (
                <Stack spacing={2} sx={{ p: 2 }}>
                    <Skeleton variant="text" role="progressbar" width="40%" height={30} />
                    <Skeleton variant="text" role="progressbar" width="60%" height={30} />
                    <Skeleton variant="text" role="progressbar" width="40%" height={30} />
                    <Skeleton variant="text" role="progressbar" width="60%" height={30} />
                </Stack>
            ) : (
                (isError ? (<p>🚨ERROR🚨</p>) :
                    <Grid
                        component="section"
                        container
                    >
                        {rows.map((row) => (
                            <Card
                                key={row.label}
                                sx={{
                                    width: '50%'
                                }}
                            >
                                <CardContent>
                                    <Typography variant="subtitle2">{row.label}:</Typography>
                                    <Typography variant="subtitle2">{row.value}</Typography>
                                    <Typography variant="subtitle2">{row.explanation}</Typography>
                                </CardContent>
                            </Card>
                        ))}
                    </Grid>
                ))}


        </section >
    )
}

export default PlanetDisplay;