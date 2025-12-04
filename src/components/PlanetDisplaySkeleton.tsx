import { Grid, Card, Skeleton } from "@mui/material";

export default function PlanetDisplaySkeleton() {
    return (
        <Grid component="section" container>
            <Card sx={{ width: "50%" }}>
                <Skeleton variant="text" role="progressbar" width="20%" height={30} />
                <Skeleton variant="text" role="progressbar" width="40%" height={30} />
                <Skeleton variant="text" role="progressbar" width="40%" height={30} />
            </Card>
            <Card sx={{ width: "50%" }}>
                <Skeleton variant="text" role="progressbar" width="20%" height={30} />
                <Skeleton variant="text" role="progressbar" width="40%" height={30} />
                <Skeleton variant="text" role="progressbar" width="40%" height={30} />
            </Card>
            <Card sx={{ width: "50%" }}>
                <Skeleton variant="text" role="progressbar" width="20%" height={30} />
                <Skeleton variant="text" role="progressbar" width="40%" height={30} />
                <Skeleton variant="text" role="progressbar" width="40%" height={30} />
            </Card>
            <Card sx={{ width: "50%" }}>
                <Skeleton variant="text" role="progressbar" width="20%" height={30} />
                <Skeleton variant="text" role="progressbar" width="40%" height={30} />
                <Skeleton variant="text" role="progressbar" width="40%" height={30} />
            </Card>
        </Grid>
    )
}