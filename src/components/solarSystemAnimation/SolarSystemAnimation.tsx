import { Box } from '@mui/material';
import './SolarSystemAnimation.css'

function SolarSystemAnimation() {
    return (
        <Box
            sx={{
                width: 220,
                maxWidth: '100%',
                mx: 'auto',
                mt: 1,
            }}
        >
            <ol>
                <li className="sun"></li>
                <li className="mercury"></li>
                <li className="venus"></li>
                <li className="earth"></li>
                <li className="mars"></li>
                <li className="jupiter"></li>
                <li className="saturn"></li>
                <li className="neptune"></li>
                <li className="uranus"></li>
            </ol>
        </Box>
    )
}

export default SolarSystemAnimation;
