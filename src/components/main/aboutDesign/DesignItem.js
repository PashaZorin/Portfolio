import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const DesignItem = ({ id, title, text, isOpen, fun }) => {
  return (
    <Accordion className="design__item">
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        className="design__item-header"
      >
        <span className="design__item-circle"></span>
        <Typography>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography
          sx={{
            padding: "0 25px",
            marginLeft: "10px",
            borderLeft: "2px solid #67aefc",
          }}
        >
          {text}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
  //  <div className="design__content-conteiner">
  //    <div className={`design__item ${isOpen ? "open" : ""}`}>
  //      <div className="design__item-conteiner" onClick={() => fun(id)}>
  //        <h4 className={`design__item-title ${isOpen ? "open" : ""}`}>
  //          {title}
  //        </h4>
  //        <div>
  //          <Arrow className={`design__item-errow ${isOpen ? "open" : ""}`} />
  //        </div>
  //      </div>
  //    </div>
  //    <div
  //      className={`design__transcription-conteiner ${isOpen ? "open" : ""}`}
  //    >
  //      <p className="design__transcription">{text}</p>
  //    </div>
  //  </div>
  //);
};

export default DesignItem;
