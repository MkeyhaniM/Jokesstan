import React, { useState, useEffect } from "react";
import CreateRticles from "./createRticles";
import Container from "@mui/material/Container";
import request from "../../ax-jok/Ax-jokestan";

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export default function Loop() {
  const [state, setState] = useState([]);
  console.log(state);

  useEffect(() => {
    request().then((response) => {
      // setState(response.data);
    });

    return () => {
      function Looping() {
        return arr.map((e, index) => {
          return <CreateRticles key={e + index} />;
        });
      }
    };
  }, [state, request()]);

  function Looping() {
    return arr.map((e, index) => {
      return <CreateRticles key={e + index} />;
    });
  }

  return <Container>{/* <Looping/> */}</Container>;
}
