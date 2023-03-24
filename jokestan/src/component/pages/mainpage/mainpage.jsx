import '../../../assets/style/mainpage.css';
// import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import {Introduction} from "./Introduction";

export function Mainpage() {
    return (
        <section id='main'>
            <CssBaseline/>
            <Container fixed>
            <Introduction />
            </Container>
        </section>
    );
}