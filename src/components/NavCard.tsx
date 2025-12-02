import { Card, CardActionArea, CardContent, Typography } from "@mui/material";
import { Link } from "react-router-dom";

type NavCardProps = {
    label: string;
    to?: string;
};

export function NavCard({ label, to }: NavCardProps) {
    return (
        <Card
            sx={{
                boxShadow: 10,
                minHeight: '80px',
            }}
        >
            <CardActionArea
                component={to ? Link : 'div'}
                to={to}
                sx={{
                    alignContent: 'center',
                    minHeight: '80px',
                    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                    '&:hover': {
                        transform: 'scale(1.03)',
                        boxShadow: 8,
                    },
                }}
            >
                <CardContent
                    sx={{
                        p: 0
                    }}
                >
                    <Typography variant="body1">{label}</Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
