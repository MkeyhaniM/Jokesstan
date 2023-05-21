import React, { useState, useEffect } from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { makeStyles } from "@mui/styles";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import requestNews from "../../ax-jok/Ax-news";
import { RotatingSquare } from "react-loader-spinner";

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

export default function NewsRticles({GETONE}) {
  const [news, setNews] = useState(false);
  const classes = useStyle();

  useEffect(() => {
    requestNews()
      .then((req) => {
        setNews(req.data.articles);
      })
      .catch((handel) => handel);
  }, [GETONE]);

  function GetNews() {
    console.log(news);
    if (news) {
      return news.map((e, index) => {
        return (
          <Box
            key={"newsOf"+index}
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
            <Box className={classes.buttonOptions}>
              <ThemeProvider theme={theme}>
                <Typography
                  color={"snow"}
                  fontSize={25}
                  align="center"
                >
                  {e.title}
                </Typography>
                <Typography
                  color={"white"}
                  fontSize={16}
                  align="left"
                >
                  {e.content}
                  <a href={e.url}>For more information</a>
                </Typography>
                <Typography
                  color={"snow"}
                  variant="h5"
                  fontSize={20}
                  align="left"
                >
                  {e.time}
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
                    color="primary"
                    variant="filled"
                    label="News"
                  />
                </Stack>
              </Box>
            </Box>
          </Box>
        );
      });
    }
  }

  function LoaderOfNewsPage() {
    return (
      <Box paddingLeft={5}>
        <RotatingSquare
          height="180"
          width="180"
          color="#4fa94d"
          ariaLabel="triangle-loading"
          wrapperStyle={{marginLeft:'450px'}}
          wrapperClassName=""
          visible={true}
        />
        <Typography fontSize={23} color={''}>
          Please a wait  
        </Typography>
      </Box>
    );
  }

  return <>{news ? <GetNews /> : <LoaderOfNewsPage />}</>;
}
