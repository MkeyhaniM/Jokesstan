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

export function Sign() {
  const [checkConditionOfNumber, setCheckConditionOfNumber] = useState(false);

  function getSign() {
    var getUsername = document.getElementById("userValue");
    var getGmail = document.getElementById("gmailValue");
    var getNumber = document.getElementById("numberValue");

    request(getUsername, getGmail, getNumber);

    // if (sign) {
    //   setCheckConditionOfNumber(true);
    // } else {
    //   setCheckConditionOfNumber((e) => e + 1);
    // }
  }

  // useEffect(() => {
  //   if (typeof checkConditionOfNumber === Number) {
  //   }
  // }, [checkConditionOfNumber]);

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
              <Button onClick={() => getSign()} color="success">
                Sgin
              </Button>
              <Button color="secondary">Skip</Button>
            </ButtonGroup>
          </Grid>
        </Grid>
      </Box>
      {/* <CustomizedSnackbars /> */}
    </Container>
  );
}
