import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";

import { request } from "./request";
import { useState, useEffect } from "react";
import CustomizedSnackbars from "./NotTrueNumber";
import { getSetUser } from "./setUserInheading";
import { Link } from "react-router-dom";

export function Sign() {
  const [checkConditionOfNumber, setCheckConditionOfNumber] = useState(false);
  const [blankInput, setBlankInput] = useState(false);
  const [dataApi, setDataApi] = useState();

  const linkStyle = {
    textDecoration: "none",
    color: "white",
  };

  function getSign() {
    var getUsername = document.getElementById("userValue");
    var getGmail = document.getElementById("gmailValue");
    var getNumber = document.getElementById("numberValue");
    
    if (
      getGmail.value !== "" &&
      getUsername.value !== "" &&
      getNumber.value !== ""
    ) {
      request(getUsername, getGmail, getNumber)
        .then(({ success, data }) => {
          if (success) {
            setDataApi(data.user);
          }
        })
        .catch((e) => {
          throw Error("The request has a problem" + "   >>>" + e);
        });
    
      } else {
      setBlankInput(true);
    }
  }

  useEffect(() => {
    if (dataApi) {
      getSetUser(dataApi);
    }
  }, [dataApi]);

  return (
    <Container>
      <Box marginTop={10}>
        <Typography variant="h2" component={"h3"} align="center">
          Sgin in
        </Typography>
      </Box>
      <Box marginTop={3} sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              fullWidth={true}
              id="userValue"
              label="Username"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth={true}
              id="gmailValue"
              label="Gmail"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
              fullWidth={true}
              id="numberValue"
              label="Phone Number"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6}>
            <ButtonGroup
              fullWidth={true}
              disableElevation
              variant="contained"
              aria-label="Disabled elevation buttons"
              size="large"
            >
              <Button color="success">
                <Link to="/start" style={linkStyle}>
                  Sign
                </Link>
              </Button>
              <Button color="secondary">
                <Link to="/start" style={linkStyle}>
                  Skip
                </Link>
              </Button>
            </ButtonGroup>
          </Grid>
        </Grid>
      </Box>
      {blankInput && <CustomizedSnackbars />}
    </Container>
  );
}
