import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { makeStyles } from "@mui/styles";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { ListFavour } from "./addFavour";

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

export default function CreateFavourList() {
  const classes = useStyle();
  console.log(ListFavour);

  function IterateListOfFavour() {
    return ListFavour.map((e,index)=> {
      return (
        <Box
        key={index+"Favour"}
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
                {e.sentenc}
              </Typography>
            </ThemeProvider>
          </Box>
          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-around"}
          >
            <Box alignItems={"end"}>
              <Stack direction="row" spacing={1} marginY={2}>
                <Chip
                  icon={<FormatQuoteIcon />}
                  label={e.type}
                  color="primary"
                  variant="filled"
                />
              </Stack>
            </Box>
          </Box>
        </Box>
      </Box>
      )
    })  
  }

  return <IterateListOfFavour/>;
}
