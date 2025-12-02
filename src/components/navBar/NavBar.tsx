import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import './NavBar.css'
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <header>
            <a href="#moon-cta" className="skip-link">
                Skip to Moon data
            </a>

            <AppBar component="nav">
                <Toolbar
                    sx={{
                        backgroundColor: '#000'
                    }}
                >
                    <Typography
                        component={Link}
                        to='/solar-system-dashboard/'
                        variant="h6"
                        sx={{
                            flexGrow: 1,
                            color: '#fff',
                            textDecoration: 'none',
                        }}
                    >
                        Solar System Dashboard
                    </Typography>
                    <Button
                        href={`#About`}
                        key={"about"}
                        sx={{
                            color: '#fff',
                            backgroundColor: '#000'
                        }}
                    >
                        About
                    </Button>
                </Toolbar>
            </AppBar>
        </header>
    )
}

export default NavBar;