import * as React from "react";

import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ContentCopyRounded from "@mui/icons-material/ContentCopyRounded";
import CopyRate from "@mui/icons-material/StarRateRounded";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const useStyle = makeStyles({
  buttonOptions: {
    padding: "40px",
  },
});

const theme = createTheme({
  typography: {
    fontFamily: ["Kanit", "serif"].join(","),
  },
});

export default function CreateRticles() {
  const classes = useStyle();
  return (
    <Box
      sx={{
        "& > :not(style)": { m: 1 },
        maxWidth: 900,
        border: 3,
        boxShadow: "16px 19px 13px -3px rgba(0,0,0,0.1)",
        borderRadius: 3,
        margin: "5rem auto",
      }}
    >
      <Box>
        <Box className={classes.buttonOptions}>
          <ThemeProvider theme={theme}>
            <Typography align="left">
              palette color objects are provided, they will replace the default
              onesThe palette color value can either be a color object, or an
              object with one or more of the keys specified by the following
              TypeScript interface
            </Typography>
          </ThemeProvider>
        </Box>
        <Fab margin={5} aria-label="like" variant="extended">
          <FavoriteIcon sx={{ mr: 1 }} fontSize="large" />
          Favorite
        </Fab>
        <Fab margin={2} aria-label="like" variant="extended">
          <ContentCopyRounded sx={{ mr: 1 }} fontSize="large" />
          CopyIcon
        </Fab>
        <Fab margin={2} aria-label="like" variant="extended">
          <CopyRate sx={{ mr: 1 }} color="warning1" fontSize="large" />
          Rate
        </Fab>
      </Box>
    </Box>
  );
}
