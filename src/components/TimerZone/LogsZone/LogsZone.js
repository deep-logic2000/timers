import React, { useEffect } from "react";

import { useSelector } from 'react-redux';

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import { useDispatch } from 'react-redux';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const LogsZone = (props) => {
  const { logs } = props;
  // const logs = useSelector((state)=> state.timer.logs);

  console.log("logs", logs);
  useEffect(() => {}, [logs]);

  return (
    <Box sx={{ flexGrow: 1, border: '1px dashed grey', borderRadius: '8px', height: '200px', overflow: 'hidden', overflowY: "scroll" }}>
      <Grid container spacing={2}>
        <Grid item xs={11}>
          {logs && logs.map((log, index) => (
            <Typography key={index}>{`Button № ${log.button}: ${log.endTime} - ${log.timeOfPressedButton} (${log.difference})`}</Typography>
          ))} 
          {/* <Item>xs=8</Item>
          <Item>xs=8</Item> */}
        </Grid>
      </Grid>
    </Box>
  );
};

export default LogsZone;
