import * as React from 'react';
import {styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import {CustomizedButtons} from "./Button.jsx";
import {HeadingPage} from "./HeadingPage";

const Item = styled(Paper)(({theme}) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    margin: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


export function Introduction() {
    return (
        <div id='introduction'>
            <Box sx={{flexGrow: 1}}>
                <Grid style={{position:'relative'}} container spacing={2}>
                    <Grid item xs={12} md={8}>
                        <HeadingPage/>
                    </Grid>
                    <Grid className='buttonsMarginTop' item xs={12} s={10} md={4}>
                        <CustomizedButtons/>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}