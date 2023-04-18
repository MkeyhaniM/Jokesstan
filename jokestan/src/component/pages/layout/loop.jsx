import React from "react";
import CreateRticles from "./createRticles";
import Container from "@mui/material/Container";

const arr = [1,2,3,4,5,6,7,8,9,10]
export default function Loop() {
  function Looping() {
      return arr.map((e,index) => {
        console.log('hello');
        return <CreateRticles key={e+index}/>
    });
  }

  return <Container><Looping /></Container>;
}
