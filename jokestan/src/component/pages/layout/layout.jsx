import "../../../assets/style/start.css";
import CreateRticles from "./createRticles";
import Subjects from "./subjects";
import Loop from "./loop";

import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  // padding: theme.spacing(1),
  textAlign: "center",
  // color: theme.palette.text.secondary,
}));

export function Layout() {
  return (
    <Box>
      <Grid container  direction="row" justifyContent="center"  alignItems="stretch">
        <Grid item xs={6} md={2}>
          <Item>
            <Subjects id='VhHeight'/>
          </Item>
        </Grid>
        <Grid id='mAuto' item xs={6} md={10}>
          <Item>
            <Loop/>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
