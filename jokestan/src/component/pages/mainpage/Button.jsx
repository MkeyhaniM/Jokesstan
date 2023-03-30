import * as React from 'react';
import {styled} from '@mui/material/styles';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import {purple} from '@mui/material/colors';
import {A} from 'hookrouter';

const BootstrapButton = styled(Button)({
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: '#0063cc',
    borderColor: '#0063cc',
    boxShadow: '0px 0px 24px 3px #0063cc',
    fontFamily: [
        'Courier Prime',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
        backgroundColor: '#0069d9',
        borderColor: '#0062cc',
        boxShadow: 'none',
    },
    '&:active': {
        boxShadow: 'none',
        backgroundColor: '#0062cc',
        borderColor: '#005cbf',
    },
    '&:focus': {
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
});

const ColorButton = styled(Button)(({theme}) => ({
    color: theme.palette.getContrastText(purple[500]),
    boxShadow: `0px 0px 6px 3px ${purple[500]}`,
    backgroundColor: purple[500],
    '&:hover': {
        backgroundColor: purple[700],
    },
}));

export function CustomizedButtons() {
    function app() {
        <A/>
    }

    return (
        <Stack spacing={2} direction="row">
            <ColorButton onClick={app} variant="contained">Get started</ColorButton>
            <BootstrapButton variant="contained" disableRipple>Sign in</BootstrapButton>
        </Stack>
    );
}