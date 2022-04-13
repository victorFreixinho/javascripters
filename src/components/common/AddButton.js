import React, { Fragment, useState } from "react";
import { Tooltip } from "reactstrap";
import IconButton from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

const getId = (function () {
  let i = 0;
  return () => ++i;
})();

const id = `btn-add-${getId()}`;

const AddButton = ({ onClick, toolTipMsg }) => {
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const toggle = () => setTooltipOpen(!tooltipOpen);

  return (
    <Fragment>
      <IconButton
        id={id}
        color="primary"
        aria-label="add to shopping cart"
        onClick={onClick || (() => null)}
      >
        <AddIcon />
      </IconButton>
      {toolTipMsg && (
        <Tooltip
          target={id}
          placement="top"
          isOpen={tooltipOpen}
          toggle={toggle}
        >
          {toolTipMsg}
        </Tooltip>
      )}
    </Fragment>
  );
};

export default AddButton;
