import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import {CustomizedButtons} from "./Button.jsx";
import {HeadingPage} from "./HeadingPage";


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