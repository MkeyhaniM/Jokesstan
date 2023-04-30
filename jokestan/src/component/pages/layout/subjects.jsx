import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";

import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import CheckUser from "./checkUser";
import Box from "@mui/material/Box";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Badge from "@mui/material/Badge";
import { purple } from "@mui/material/colors";

const newThme = createTheme({
  typography: {
    fontFamily: "Acme",
  },
});

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  width: "100%",
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .1)"
      : "rgba(0, 0, 0, .2)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  borderTop: "1px solid rgba(0, 0, 0, .125)",
  backgroundColor: "rgba(0, 0, 0, .33)",
}));

const style = {
  width: "100%",
  maxWidth: 460,
};

const sentences = [
  "All",
  "Funny",
  "Depressed",
  "Did you know",
  "News",
  "Poem",
  "Historical",
  "Story",
];
const clip = [
  "All",
  "Funny",
  "Wild life",
  "Documentary",
  "Challenge",
  "Cooking",
];

export default function Subjects() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const CreateListItem = ({ type }) => {
    return type.map((e, index) => {
      return (
        <ListItem key={`${e}-${index}`} button>
          <Typography style={{ fontFamily: "Acme", fontSize: "21px" }}>
            {e}
          </Typography>
        </ListItem>
      );
    });
  };
  return (
    <>
      <Box sx={{ backgroundColor: "#413543"}} position={'fixed'} width={'315px'} height={'1070px'}>
        <CheckUser />
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary
            sx={{ backgroundColor: "#865DFF" }}
            aria-controls="panel1d-content"
            id="panel1d-header"
          >
            <Typography style={{ fontFamily: "Acme", fontSize: "25px" }}>
              Text
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ backgroundColor: "#C9A7EB" }}>
            <List sx={style} component="nav" aria-label="mailbox folders">
              <CreateListItem type={sentences} />
            </List>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary
            sx={{ backgroundColor: "#865DFF" }}
            aria-controls="panel1d-content"
            id="panel1d-header"
          >
            <Typography
              style={{ fontFamily: "Acme", fontSize: "25px" }}
              className="headingItem"
            >
              Video
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ backgroundColor: "#C9A7EB" }}>
            <List sx={style} component="nav" aria-label="mailbox folders">
              <CreateListItem type={clip} />
            </List>
          </AccordionDetails>
        </Accordion>
        <Box sx={{ width: "316px", bgcolor: "#F9F5E7"}} id="favouriteList">
          <nav aria-label="main mailbox folders">
            <List>
              <ListItem disablePadding>
                <ListItemButton>
                  <ThemeProvider theme={newThme}>
                    <ListItemIcon>
                    <Badge
                      color={'primary'}
                      badgeContent={1}
                    >
                      <FavoriteIcon
                        sx={{ color: '#E21818' }}
                        fontSize="large"
                      />
                    </Badge>
                     </ListItemIcon>
                    <Typography color="black" fontSize={25}>
                      Favourite
                    </Typography>
                  </ThemeProvider>
                </ListItemButton>
              </ListItem>
            </List>
          </nav>
        </Box>
      </Box>
    </>
  );
}
