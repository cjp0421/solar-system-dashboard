import { Typography, Grid, Card, CardContent, CardActionArea } from "@mui/material";
import SolarSystemAnimation from "../components/solarSystemAnimation/SolarSystemAnimation";
import { Link } from "react-router-dom";

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
                <Typography
                    variant="h4"
                    component="h2"
                    gutterBottom
                    sx={{
                        mt: 7
                    }}>
                    Moons
                </Typography>

                <Grid
                    container
                    spacing={2}
                    sx={{
                        mx: 1.5
                    }}
                >
                    <Grid
                        size={{ xs: 12, md: 4 }}
                        sx={{
                            mt: .5
                        }}
                    >
                        <Card>
                            <CardActionArea
                                component={Link}
                                to='/solar-system-dashboard/moon'
                                sx={{
                                    height: '100%'
                                }}
                            >
                                <CardContent>
                                    <Typography variant="body1">Earth's Moon</Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid
                        size={{ xs: 12, md: 4 }}
                        sx={{
                            mt: .5
                        }}
                    >
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
                <Grid
                    sx={{
                        mt: 5
                    }}
                >
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
                <Typography
                    variant="h4"
                    component="h2"
                    gutterBottom
                    sx={{
                        mt: 7
                    }}
                >
                    Planets
                </Typography>

                <Grid
                    container
                    spacing={2}
                    sx={{
                        mx: 1.5
                    }}
                >
                    <Grid
                        size={{ xs: 12, md: 4 }}
                        sx={{
                            mt: .5
                        }}
                    >
                        <Card>
                            <CardContent>
                                <Typography variant="body1">Earth</Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid
                        size={{ xs: 12, md: 4 }}
                        sx={{
                            mt: .5
                        }}
                    >
                        <Card>
                            <CardContent>
                                <Typography variant="body1">Mars</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid
                        size={{ xs: 12, md: 4 }}
                        sx={{
                            mt: .5
                        }}
                    >
                        <Card>
                            <CardContent>
                                <Typography variant="body1">Mercury</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid
                        size={{ xs: 12, md: 4 }}
                        sx={{
                            mt: .5
                        }}
                    >
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
