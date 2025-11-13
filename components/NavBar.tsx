import { AppBar, Toolbar, Typography, Button } from "@mui/material";

function NavBar() {
    return (
        <header>
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