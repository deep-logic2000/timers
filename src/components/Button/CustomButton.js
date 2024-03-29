import React, { memo } from "react";

import Button from "@mui/material/Button";
import { purple } from "@mui/material/colors";
import { styled } from "@mui/material/styles";
import PropTypes from "prop-types";

import styles from "./CustomButton.module.scss";

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  marginRight: "20px",
  padding: "10px 30px",
  backgroundColor: purple[500],
  "&:hover": {
    backgroundColor: purple[700],
  },
}));

const CustomButton = (props) => {
  const { children, handleclick, style } = props;

  return (
    <ColorButton
      variant="contained"
      className={styles.button}
      style={style}
      onClick={handleclick}
    >
      {children}
    </ColorButton>
  );
};

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  style: PropTypes.object,
};

Button.defaultProps = {
  children: "",
  style: {},
};

export default memo(CustomButton);
