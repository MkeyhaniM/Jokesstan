import "../../../assets/style/start.css";
import Subjects from "./subjects";
import Loop from "./loop";

import * as React from "react";
import { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import CreateFavourList from "./createFavourList";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  textAlign: "center",
}));

export function Layout() {
  const [switchS, setSwitchS] = useState(true);
  const [getSub, setGetSub] = useState();

  function switchState() {
    if (switchS) {
      setSwitchS(false);
    } else {
      setSwitchS(true);
    }
  }

  useEffect(() => {
    if (getSub && !switchS) {
      switchState();
    }
  }, [getSub]);

  function gettingSubject(e) {
    setGetSub(e);
  }

  return (
    <Box>
      <Grid container direction="row">
        <Grid
          item
          xs={6}
          md={2}
          sx={{ backgroundColor: "#C9A7EB" }}
          maxHeight={1010}
        >
          <Item>
            <Subjects id="VhHeight" c={switchState} g={gettingSubject} />
          </Item>
        </Grid>
        <Grid
          id="mAuto"
          item
          xs={6}
          md={10}
          sx={{ backgroundColor: "#443C68" }}
        >
          <Item sx={{ backgroundColor: "#443C68" }}>
            {switchS ? <Loop subject={getSub} /> : <CreateFavourList />}
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
