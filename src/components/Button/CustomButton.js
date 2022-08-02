import React, { memo } from "react";

import Button from '@mui/material/Button';
import { purple } from '@mui/material/colors';
import { styled } from '@mui/material/styles';

import styles from './CustomButton.module.scss';

// import PropTypes from 'prop-types';

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  marginRight: '20px',
  padding: '10px 30px',
  backgroundColor: purple[500],
  '&:hover': {
    backgroundColor: purple[700],
  },
}));

const CustomButton = (props) => {
  const { children, handleClick, type, style, className, color } = props;

  console.log('handleClick', handleClick);
  
  return (
    <ColorButton variant="contained" className={styles.button} style={{backgroundColor: color}} onClick={handleClick}>{children}</ColorButton>
  );
};

// Button.propTypes = {
//   children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
//   type: PropTypes.oneOf(['submit', 'button']),
//   handleClick: PropTypes.func,
//   style: PropTypes.object,
//   className: PropTypes.string,
// };

// Button.defaultProps = {
//   children: '',
//   type: 'button',
//   handleClick: () => {},
//   style: {},
//   className: '',
// };

export default memo(CustomButton);
