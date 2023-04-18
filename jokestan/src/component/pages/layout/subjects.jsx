import * as React from "react";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import CheckUser from "./checkUser";

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
          {/* <ListItemText primary={e} /> */}
          <Typography
            style={{ fontFamily: "Comfortaa", fontSize: "21px" }}>
            {e}
          </Typography>
        </ListItem>
      );
    });
  };
  return (
    <>
      <div>
        <CheckUser />

        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography style={{ fontFamily: "Comfortaa", fontSize: "25px" }}>
              Text
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <List sx={style} component="nav" aria-label="mailbox folders">
              <CreateListItem type={sentences} />
            </List>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography
              style={{ fontFamily: "Comfortaa", fontSize: "25px" }}
              className="headingItem"
            >
              Video
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <List sx={style} component="nav" aria-label="mailbox folders">
              <CreateListItem type={clip} />
            </List>
          </AccordionDetails>
        </Accordion>
      </div>
    </>
  );
}
