import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";

export function Sign() {
  const getJokestan = () => {
    const getUsername = document.querySelector("#userValue");
    const getGmail = document.querySelector("#gmailValue");
    const getNumber = document.querySelector("#numberValue");
    console.log(getUsername.value,getGmail.value,getNumber.value);
  };

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
              <Button onClick={() => getJokestan()} color="success">
                Sgin
              </Button>
              <Button color="secondary">Skip</Button>
            </ButtonGroup>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
