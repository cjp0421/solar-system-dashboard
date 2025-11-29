import { Card, CardContent, Grid, Skeleton, Typography } from "@mui/material";
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
        <>
            {isLoading ? (
                <section id="moon-facts">

                    {body || isLoading ? <Typography variant="h3" sx={{ fontSize: '1.5rem', p: 2 }}>
                        Facts About Earth's Moon
                    </Typography> : null}
                    <Grid
                        component="section"
                        container
                    >
                        <Card
                            sx={{
                                width: '50%',
                            }}
                        >
                            <Skeleton variant="text" role="progressbar" width="20%" height={30} />
                            <Skeleton variant="text" role="progressbar" width="40%" height={30} />
                            <Skeleton variant="text" role="progressbar" width="40%" height={30} />
                        </Card>
                        <Card
                            sx={{
                                width: '50%',
                            }}
                        >
                            <Skeleton variant="text" role="progressbar" width="20%" height={30} />
                            <Skeleton variant="text" role="progressbar" width="40%" height={30} />
                            <Skeleton variant="text" role="progressbar" width="40%" height={30} />
                        </Card>
                        <Card
                            sx={{
                                width: '50%',
                            }}
                        >
                            <Skeleton variant="text" role="progressbar" width="20%" height={30} />
                            <Skeleton variant="text" role="progressbar" width="40%" height={30} />
                            <Skeleton variant="text" role="progressbar" width="40%" height={30} />
                        </Card>
                        <Card
                            sx={{
                                width: '50%',
                            }}
                        >
                            <Skeleton variant="text" role="progressbar" width="20%" height={30} />
                            <Skeleton variant="text" role="progressbar" width="40%" height={30} />
                            <Skeleton variant="text" role="progressbar" width="40%" height={30} />
                        </Card>
                        <Card
                            sx={{
                                width: '50%',
                            }}
                        >
                            <Skeleton variant="text" role="progressbar" width="20%" height={30} />
                            <Skeleton variant="text" role="progressbar" width="40%" height={30} />
                            <Skeleton variant="text" role="progressbar" width="40%" height={30} />
                        </Card>
                        <Card
                            sx={{
                                width: '50%',
                            }}
                        >
                            <Skeleton variant="text" role="progressbar" width="20%" height={30} />
                            <Skeleton variant="text" role="progressbar" width="40%" height={30} />
                            <Skeleton variant="text" role="progressbar" width="40%" height={30} />
                        </Card>
                    </Grid>
                </section>
            ) : (
                    : <section id="moon-facts">
                        {
                            body ? <Typography variant="h3" sx={{ fontSize: '1.5rem', p: 2 }}>
                                Facts About Earth's Moon
                            </Typography> : null
                        }
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
                    </section>
                ))}
        </ >
    )
}

export default PlanetDisplay;