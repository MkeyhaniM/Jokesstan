import Typography from "@mui/material/Typography";
import Box from '@mui/material/Box';
import * as React from "react";

export function HeadingPage() {
    return (
        <>
            <Box sx={{width: '100%', maxWidth: 500}}>
                <Typography className='T-heading' variant="h2" gutterBottom>
                    Jokestan
                </Typography>
            </Box>
            <Box className='IntroHeading' sx={{width: '400px', maxWidth: 500}}>
                <Typography fontFamily={{fontFamily: 'Alegreya Sans'}} variant="h3" gutterBottom>
                    What is on Jokestan ?
                </Typography>
                <Typography fontFamily={{fontFamily: 'Alegreya Sans'}} variant="h5" gutterBottom>
                    Here , Could read a lot of
                    interesting topics , copy
                    one of them and send it
                    for your relatives , make
                    your favourite topics .
                </Typography>
            </Box>
        </>
    )
}