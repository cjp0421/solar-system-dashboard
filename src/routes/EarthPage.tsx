import { Grid, Typography } from "@mui/material";

export default function EarthPage() {
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
            <Grid>
                <Typography variant="h1">Learn More</Typography>
                <Typography variant="h2">About Earth</Typography>
                <Typography variant="h5" sx={{ mt: 2 }}>
                    Earth is the third planet from the Sun and the only astronomical object known to harbor life. About 29.2% of Earth's surface is land consisting of continents and islands, while the remaining 70.8% is covered with water, mostly by oceans. The planet's atmosphere consists mostly of nitrogen and oxygen. Earth has one natural satellite, the Moon, which orbits the planet at an average distance of 384,400 km (238,855 miles).
                </Typography>
            </Grid>
        </Grid>
    );
}