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
  textAlign: "center",
}));

export function Layout() {
  return (
    <Box>
      <Grid container  direction="row">
        <Grid item xs={6} md={2} sx={{backgroundColor:'#C9A7EB'}} maxHeight={1010} >
          <Item>
            <Subjects id='VhHeight'/>
          </Item>
        </Grid>
        <Grid id='mAuto' item xs={6} md={10} sx={{backgroundColor:'#443C68'}}>
          <Item sx={{backgroundColor:'#443C68'}}>
            <Loop/>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
