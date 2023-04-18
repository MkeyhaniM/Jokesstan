import React, { useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Typography } from "@mui/material";

export default function CheckUser() {
  const [User, setUser] = useState(false);

  function ShowingUser() {
    return (
      <div style={{ display: "flex", padding: "20px" }}>
        <AccountCircleIcon size />
        <Typography display={"inline-block"} variant="h4" component="h2">
          {User}
        </Typography>
        ;
      </div>
    );
  }

  function ShowingGuest() {
    return (
      <div
        style={{
          display: "flex",
          direction:"row",
          justifyContent: "center",
          alignItems: "center",
          padding: "30px",
        }}
      >
        <AccountCircleIcon fontSize="large" />
        <Typography
          display={"inline-block"}
          style={{ fontFamily: "Comfortaa", fontSize: "25px" }}
          variant="h4"
          component="h2"
        >
          Guest
        </Typography>
        ;
      </div>
    );
  }

  return <>{User ? <ShowingUser /> : <ShowingGuest />}</>;
}
