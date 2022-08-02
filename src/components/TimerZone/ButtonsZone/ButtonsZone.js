import React from "react";

import { useDispatch } from 'react-redux';

import CustomButton from "../../Button/CustomButton";
import { addTimerToQueue, clearLog } from "../../../store/actionCreators/timerAC";

import styles from "./ButtonsZone.module.scss";

const ButtonsZone = () => {

    const dispatch = useDispatch();

    const handleAddTimer = (timerDelay) => {
        console.log(timerDelay);
        dispatch(addTimerToQueue(timerDelay));
    }

  return (
    <div className={styles.buttonsZone}>
      <CustomButton className="button" children="1 sec" handleClick={()=>handleAddTimer(1)} />
      <CustomButton className="button" children="2 sec" handleClick={()=>handleAddTimer(2)} />
      <CustomButton className="button" children="3 sec" handleClick={()=>handleAddTimer(3)} />
      <CustomButton className="button" children="Clear" handleClick={()=>dispatch(clearLog())} />
    </div>
  );
};

export default ButtonsZone;
