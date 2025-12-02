import { Grid, Typography, Box } from "@mui/material";

export default function NotFoundPage() {
    return (
        <Grid
            container
            direction="column"
            sx={{
                textAlign: "center",
                minHeight: "80vh",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
            }}
        >
            <Box
                sx={{
                    position: "relative",
                    padding: "40px 60px",
                }}
            >
                <Box
                    sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        width: "22px",
                        height: "22px",
                        borderRadius: "50%",
                        background: "#f8e48c",
                        boxShadow: "0 0 18px 8px rgba(248, 228, 140, 0.6)",

                        transform: "translate(-50%, -170px)",

                        animation: "orbit 7s linear infinite",

                        "@keyframes orbit": {
                            "0%": {
                                transform: "translate(-50%, -170px) rotate(0deg)",
                                transformOrigin: "50% 170px",
                            },
                            "100%": {
                                transform: "translate(-50%, -170px) rotate(360deg)",
                                transformOrigin: "50% 170px",
                            },
                        },
                    }}
                />

                <Typography component="h1" variant="h1">
                    404
                </Typography>

                <Typography component="h2" variant="h2">
                    Page not found.
                </Typography>
            </Box>
        </Grid>
    );
}
