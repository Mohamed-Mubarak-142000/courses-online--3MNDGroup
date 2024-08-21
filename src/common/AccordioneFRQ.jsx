import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const AccordioneFRQ = ({ data }) => {
  const [expanded, setExpanded] = React.useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Accordion
      expanded={expanded === "panel1"}
      onChange={handleChange("panel1")}
      sx={{ boxShadow: "none" }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1bh-content"
        id="panel1bh-header"
      >
        <Typography sx={{ color: "text.secondary" }}>
          {data?.question}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>{data?.answer}</Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default AccordioneFRQ;
