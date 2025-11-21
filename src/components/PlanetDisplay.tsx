import { Grid, Skeleton, Stack, Typography } from "@mui/material";
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
                    <Stack
                        component="section"
                    >
                        {rows.map((row) => (
                            <Grid
                                container
                            >
                                <Grid
                                    size={{
                                        sm: 6
                                    }}
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        mx: 4
                                    }}
                                    key={row.label}
                                >
                                    <Typography variant="subtitle2">{row.label}</Typography>
                                </Grid>
                                <Grid
                                    size={{
                                        sm: 6
                                    }}
                                    key={row.label}
                                >
                                    <Typography variant="subtitle2">{row.value}</Typography>
                                </Grid>
                            </Grid>
                        ))}
                    </Stack>
                ))}


        </section >
    )
}

export default PlanetDisplay;