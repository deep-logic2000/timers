import React from "react";

import { useDispatch } from "react-redux";

import CustomButton from "../../Button/CustomButton";
import {
  addTimerToQueue,
  clearLog,
} from "../../../store/actionCreators/timerAC";

import styles from "./ButtonsZone.module.scss";

const ButtonsZone = () => {
  const dispatch = useDispatch();

  const handleAddTimer = (timerDelay) => {
    dispatch(addTimerToQueue(timerDelay));
  };

  return (
    <div className={styles.buttonsZone}>
      <CustomButton
        className={styles.button}
        children="1 sec"
        handleclick={() => handleAddTimer(1)}
      />
      <CustomButton
        className={styles.button}
        children="2 sec"
        handleclick={() => handleAddTimer(2)}
      />
      <CustomButton
        className={styles.button}
        children="3 sec"
        handleclick={() => handleAddTimer(3)}
      />
      <CustomButton
        style={{ backgroundColor: "#fc6858" }}
        className={styles.button}
        children="Clear"
        handleclick={() => dispatch(clearLog())}
      />
    </div>
  );
};

export default ButtonsZone;
