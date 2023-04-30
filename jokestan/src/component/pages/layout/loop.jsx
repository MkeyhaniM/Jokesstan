import React, { useState } from "react";
import CreateRticles from "./createRticles";
import Container from "@mui/material/Container";
import request from "../../ax-jok/Ax-jokestan";
import LinearProgress from '@mui/material/LinearProgress';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function Loop() {
  const [state, setState] = useState(false);

  request()
    .then((req) => {
      if (!state) {
        setState(req);
      }
    })
    .catch((error) => {
      setState(false);
    });

  function HandelSentence() {
    if (state) {
      return Object.keys(state).map((key) => {
        return state[key].map((ce, index) => {
          return <CreateRticles sentence={ce} key={index + ce} type={key} />;
        });
      });
    }
  }

  function Loading() {
    return (
      <Box >
        <Typography color={'whitesmoke'} variant="h2">Loading</Typography>
        <LinearProgress color="secondary" />
      </Box>
    );
  }

  return (
    <Container>
      {state && <HandelSentence />}
      {!state && <Loading />}
    </Container>
  );
}
