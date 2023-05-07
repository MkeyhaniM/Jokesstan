import React, { useState, useEffect } from "react";
import CreateRticles from "./createRticles";
import Container from "@mui/material/Container";
import request from "../../ax-jok/Ax-jokestan";
import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import requestNews from "../../ax-jok/Ax-news";
import NewsRticles from "./newsRticles";

export default function Loop({ subject }) {
  const [state, setState] = useState(false);
  const [data, setData] = useState(null);
  const [lastSub, setLastSub] = useState(null);
  const [news, setNews] = useState();

  requestNews().then((req) => {
    setNews(req.data.articles);
  });

  request()
    .then((req) => {
      if (!state) {
        setState(true);
        setData(req);
        return req;
      }
    })
    .catch((error) => {
      setState(false);
    });

  function HandelSentence() {
    if (state) {
      return Object.keys(data).map((key) => {
        return data[key].map((ce, index) => {
          return (
            <CreateRticles
              sentence={ce}
              key={index + ce}
              idSen={`sen_${index}`}
              type={key}
            />
          );
        });
      });
    }
  }

  function ChangeSub({ value }) {
    if (value !== null && data) {
      if ((value = "News")) {
        return news.map((e) => {
          return (
            <NewsRticles
              title={e.title}
              content={e.content}
              url={e.url}
              time={e.publishedAt}
            />
          );
        });
      } else {
        return data[value].map((item, index) => {
          return (
            <CreateRticles
              sentence={item}
              key={index + value}
              idSen={`sen_${index}`}
              type={value}
            />
          );
        });
      }
    }
  }

  useEffect(() => {
    setLastSub(subject);
  }, [subject]);

  function Loading() {
    return (
      <Box>
        <Typography color={"whitesmoke"} variant="h2">
          Loading
        </Typography>
        <LinearProgress color="secondary" />
      </Box>
    );
  }

  return (
    <Container>
      {data === null && <Loading />}
      {lastSub ? <ChangeSub value={lastSub} /> : <HandelSentence />}
    </Container>
  );
}
