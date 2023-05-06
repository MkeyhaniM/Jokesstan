import * as React from "react";

import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ContentCopyRounded from "@mui/icons-material/ContentCopyRounded";
import CopyRate from "@mui/icons-material/StarRateRounded";
import Typography from "@mui/material/Typography";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { makeStyles } from "@mui/styles";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import addFavour from "./addFavour";

const useStyle = makeStyles({
  buttonOptions: {
    padding: "40px",
  },
});

const theme = createTheme({
  typography: {
    fontFamily: ["Ubuntu", "serif"].join(","),
  },
});

const theme2 = createTheme({
  typography: {
    fontFamily: ["Acme", "serif"].join(","),
    fontSize: 17,
  },
});

export default function CreateRticles({sentence, type, idSen}) {
  const classes = useStyle();
  return (
    <Box
      id={idSen}
      sx={{
        "& > :not(style)": { m: 1 },
        maxWidth: 900,
        border: 2,
        borderColor: "#E384FF",
        boxShadow: "4px 4px 10px 0 #FFA3FD",
        borderRadius: 3,
        margin: "5rem auto",
      }}
    >
      <Box>
        <Box className={classes.buttonOptions}>
          <ThemeProvider theme={theme}>
            <Typography color={"snow"} fontSize={20} align="left">
              {sentence}
            </Typography>
          </ThemeProvider>
        </Box>
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-around"}
        >
          <Box display={"flex"}>
            <Box marginX={1}>
              <ThemeProvider theme={theme2}>
                <Fab
                  aria-label="like"
                  variant="extended"
                  color="default"
                  onClick={() => addFavour(sentence, type, idSen)}
                >
                  <FavoriteIcon
                    sx={{ mr: 1 }}
                    fontSize="medium"
                    color="error"
                  />
                  Favorite
                </Fab>
              </ThemeProvider>
            </Box>
            <Box marginX={1}>
              <ThemeProvider theme={theme2}>
                <Fab aria-label="like" variant="extended" color="default">
                  <ContentCopyRounded
                    sx={{ mr: 1 }}
                    fontSize="medium"
                    color="info"
                  />
                  Copy
                </Fab>
              </ThemeProvider>
            </Box>
            <Box marginX={1}>
              <ThemeProvider theme={theme2}>
                <Fab aria-label="like" variant="extended" color="default">
                  <CopyRate sx={{ mr: 1 }} fontSize="medium" color="warning" />
                  Rate
                </Fab>
              </ThemeProvider>
            </Box>
          </Box>
          <Box alignItems={"end"}>
            <Stack direction="row" spacing={1} marginY={2}>
              <Chip
                icon={<FormatQuoteIcon />}
                label={type}
                color="primary"
                variant="filled"
              />
            </Stack>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
