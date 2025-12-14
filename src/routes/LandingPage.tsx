import { Typography, Grid } from "@mui/material";
import SolarSystemAnimation from "../components/solarSystemAnimation/SolarSystemAnimation";
import { NavCard } from "../components/NavCard";

type CelestialNavItem = {
    label: string;
    to?: string;
}

const moons: CelestialNavItem[] = [
    { label: "Earth's Moon", to: "/solar-system-dashboard/moon" },
    { label: "Io", to: "/solar-system-dashboard/io" },
    { label: "Phobos", to: "/solar-system-dashboard/phobos" }
];

const planets: CelestialNavItem[] = [
    { label: "Earth", to: "/solar-system-dashboard/earth" },
    { label: "Mars", to: "/solar-system-dashboard/mars" },
    { label: "Mercury", to: "/solar-system-dashboard/mercury" },
    { label: "Jupiter", to: "/solar-system-dashboard/jupiter" },
];

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
                size={{ xs: 10, md: 4 }}
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
                    spacing={4}
                    sx={{
                        mx: 1.5,
                        justifyContent: 'space-evenly'
                    }}
                >
                    {moons.map((moon) => (
                        <Grid key={moon.label} size={{ xs: 12, md: 4 }} sx={{ mt: 0.5 }}>
                            <NavCard label={moon.label} to={moon.to} />
                        </Grid>
                    ))}
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
                size={{ xs: 10, md: 4 }}
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
                    spacing={4}
                    sx={{
                        mx: 1.5
                    }}
                >
                    {planets.map((planet) => (
                        <Grid key={planet.label} size={{ xs: 12, md: 4 }} sx={{ mt: 0.5 }}>
                            <NavCard label={planet.label} to={planet.to} />
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Grid >
    );
}
