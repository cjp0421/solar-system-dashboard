import { Box, Link, Typography } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LanguageIcon from '@mui/icons-material/Language';


function Footer() {
    return (
        <Box
            component="footer"
            sx={{
                display: "grid",
                gridTemplateColumns: "auto 1fr auto",
                alignItems: "center",
                px: 2,
                py: 1,
            }}
        >
            <Typography
                variant="body2"
                sx={{
                    visibility: "hidden",
                    fontSize: '.5rem',
                }}
            >
                © Carol Pedersen 2025
            </Typography>

            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignContent: 'center',
                    gap: 4,
                }}
            >
                <Link
                    href="https://github.com/cjp0421/solar-system-dashboard"
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 0.6,
                        color: "inherit",
                        textDecoration: "none"
                    }}
                >
                    <GitHubIcon fontSize="small" />
                    <Box
                        sx={{
                            display: { xs: "none", md: "inline" }
                        }}
                    >
                        GitHub
                    </Box>
                </Link>
                <Link
                    href="https://www.linkedin.com/in/carol-joy-pedersen/"
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 0.6,
                        color: "inherit",
                        textDecoration: "none"
                    }}
                >
                    <LinkedInIcon fontSize="small" />
                    <Box
                        sx={{
                            display: { xs: "none", md: "inline" }
                        }}
                    >
                        LinkedIn
                    </Box>
                </Link>
                <Link
                    href="https://cjp0421.github.io/my-portfolio/"
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 0.6,
                        color: "inherit",
                        textDecoration: "none"
                    }}
                >
                    <LanguageIcon fontSize="small" />
                    <Box
                        sx={{
                            display: { xs: "none", md: "inline" }
                        }}
                    >
                        Portfolio
                    </Box>
                </Link>
            </Box>

            <Typography
                variant="body2"
                sx={{
                    fontSize: '.5rem',
                }}
            >
                © Carol Pedersen 2025
            </Typography>
        </Box>
    );
}

export default Footer;
