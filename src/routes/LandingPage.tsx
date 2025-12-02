import { Box, Typography, Grid, Card, CardContent } from "@mui/material";

export default function LandingPage() {
    return (
        <Box sx={{ p: 4 }}>

            <Typography variant="h3" component="h1" gutterBottom>
                Welcome to the Solar System
            </Typography>

            <Box sx={{ mt: 4 }}>
                <Typography variant="h4" component="h2" gutterBottom>
                    Moons
                </Typography>

                <Grid container spacing={2}>
                    <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                        <Card>
                            <CardContent>
                                <Typography variant="body1">Moon</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{ mt: 6 }}>
                <Typography variant="h4" component="h2" gutterBottom>
                    Planets
                </Typography>

                <Grid container spacing={2}>
                    <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                        <Card>
                            <CardContent>
                                <Typography variant="body1">Earth</Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                        <Card>
                            <CardContent>
                                <Typography variant="body1">Mars</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Box>

        </Box>
    );
}
