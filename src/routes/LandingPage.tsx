import { Typography, Grid, Card, CardContent } from "@mui/material";
import SolarSystemAnimation from "../components/solarSystemAnimation/SolarSystemAnimation";

export default function LandingPage() {
    return (
        <Grid
            container
            spacing={2}
            sx={{
                mt: 12,
                mb: 2,
                mx: 1,
                minHeight: '80vh',
                justifyContent: 'center',
                alignContent: 'center'
            }}
        >
            <Grid
                size={{ xs: 12, md: 4 }}
                order={{ xs: 2, md: 1 }}
                sx={{
                    mt: 4,
                    textAlign: 'center',
                    justifyContent: 'center'
                }}
            >
                <Typography variant="h4" component="h2" gutterBottom>
                    Moons
                </Typography>

                <Grid
                    container
                    spacing={2}
                    sx={{
                        mx: 1.5
                    }}
                >
                    <Grid size={{ xs: 12, md: 4 }}>
                        <Card>
                            <CardContent>
                                <Typography variant="body1">Earth's Moon</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid size={{ xs: 12, md: 4 }}>
                        <Card>
                            <CardContent>
                                <Typography variant="body1">Io</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Grid>
            <Grid
                size={{ xs: 12, md: 4 }}
                order={{ xs: 1, md: 2 }}
                sx={{
                    textAlign: 'center',
                }}
            >
                <Grid>
                    <Typography variant="h3" component="h1" gutterBottom>
                        Welcome to the Solar System
                    </Typography>
                </Grid>
                <Grid>
                    <SolarSystemAnimation />
                </Grid>
            </Grid>
            <Grid
                size={{ xs: 12, md: 4 }}
                order={{ xs: 3, md: 3 }}
                sx={{
                    mt: 4,
                    textAlign: 'center',
                }}
            >
                <Typography variant="h4" component="h2" gutterBottom>
                    Planets
                </Typography>

                <Grid
                    container
                    spacing={2}
                    sx={{
                        mx: 1.5
                    }}
                >
                    <Grid size={{ xs: 12, md: 4 }}>
                        <Card>
                            <CardContent>
                                <Typography variant="body1">Earth</Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid size={{ xs: 12, md: 4 }}>
                        <Card>
                            <CardContent>
                                <Typography variant="body1">Mars</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid size={{ xs: 12, md: 4 }}>
                        <Card>
                            <CardContent>
                                <Typography variant="body1">Mercury</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid size={{ xs: 12, md: 4 }}>
                        <Card>
                            <CardContent>
                                <Typography variant="body1">Jupiter</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}
