import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import './NavBar.css'

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
                        variant="h6"
                        sx={{
                            flexGrow: 1,
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