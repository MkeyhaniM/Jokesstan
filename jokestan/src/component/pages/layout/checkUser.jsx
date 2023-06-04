import React, { useState, useEffect } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Typography } from "@mui/material";

var myToken;

export function getToken(e) {
  myToken = e;
}

export default function CheckUser() {
  const [User, setUser] = useState(false);

  useEffect(() => {
    if (myToken) {
      console.log(myToken);
      setUser(myToken);
    }
  }, [myToken]);

  function ShowingUser() {
    return (
      <div
        style={{
          display: "flex",
          direction: "row",
          justifyContent: "start",
          alignItems: "center",
          padding: "30px",
          color: "#F9F5E7",
        }}
      >
        <AccountCircleIcon />
        <Typography
          display={"inline-block"}
          style={{ fontFamily: "Acme", fontSize: "25px" }}
          variant="h4"
          component="h2"
        >
          {User}
        </Typography>
      </div>
    );
  }

  function ShowingGuest() {
    return (
      <div
        style={{
          display: "flex",
          direction: "row",
          justifyContent: "start",
          alignItems: "center",
          padding: "30px",
          color: "#F9F5E7",
        }}
      >
        <AccountCircleIcon fontSize="large" />
        <Typography
          display={"inline-block"}
          style={{ fontFamily: "Acme", fontSize: "25px" }}
          variant="h4"
          component="h2"
        >
          Guest
        </Typography>
      </div>
    );
  }

  return <>{User ? <ShowingUser /> : <ShowingGuest />}</>;
}
